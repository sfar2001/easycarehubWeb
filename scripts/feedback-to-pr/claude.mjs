/* =====================================================================
   Claude tool-use loop. Given one piece of Tally feedback, Claude
   reads/lists/writes files under an allow-list and then calls `done`
   to finish. All file-system access is sandboxed to the repo root and
   to a whitelist of source paths — no infra files may be touched.
   ===================================================================== */

import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";

// Provider / model are env-configurable so you can point this at OpenRouter
// (or any other Anthropic-SDK-compatible gateway) without a code change.
//   LLM_BASE_URL    default: Anthropic's native endpoint
//   LLM_MODEL       default: claude-sonnet-4-6
//   LLM_API_KEY_ENV default: ANTHROPIC_API_KEY
const MODEL            = process.env.LLM_MODEL    || "claude-sonnet-4-6";
// The Anthropic SDK always appends `/v1/messages` to the baseURL, so the
// baseURL must NOT end with `/v1` (even though some gateways document it
// that way). Strip a trailing `/v1` defensively.
const BASE_URL         = (process.env.LLM_BASE_URL || "").replace(/\/v1\/?$/, "").replace(/\/$/, "") || undefined;
const API_KEY_ENV      = process.env.LLM_API_KEY_ENV || "ANTHROPIC_API_KEY";
const MAX_TURNS        = 12;
const MAX_OUTPUT_TOKENS = 8000;

const driverSuffix = BASE_URL ? `  via ${BASE_URL}` : "";
console.log(`[claude driver] model=${MODEL}${driverSuffix}`);

// ---- File permission policy ----------------------------------------------

const ALLOW_WRITE = [
  /^index\.html$/,
  /^manual\.html$/,
  /^faq\.html$/,
  /^releases\.html$/,
  /^assets\/(css|js|img)\//,
  /^react-app\/src\//,
];

const DENY = [
  /^\.git(hub)?\//,
  /^node_modules\//,
  /^react-app\/node_modules\//,
  /^scripts\//,
  /^react-app\/dist\//,
  /^dist\//,
  /^downloads\//,
  /^react-app\/public\/downloads\//,
  /^netlify\.toml$/,
  /(^|\/)package(-lock)?\.json$/,
  /(^|\/)tsconfig(\.node)?\.json$/,
  /(^|\/)vite\.config\.(ts|js|d\.ts)$/,
  /(^|\/)\.gitignore$/,
];

const ALLOW_READ_EXTRA = [
  /^README\.md$/,
  /^netlify\.toml$/,
];

function normRel(root, p) {
  const abs = path.resolve(root, p);
  if (!abs.startsWith(root + path.sep) && abs !== root) {
    throw new Error("path escapes repo: " + p);
  }
  return path.relative(root, abs).replaceAll("\\", "/");
}
function canWrite(rel) {
  if (DENY.some((r) => r.test(rel))) return false;
  return ALLOW_WRITE.some((r) => r.test(rel));
}
function canRead(rel) {
  if (DENY.some((r) => r.test(rel))) return false;
  if (ALLOW_WRITE.some((r) => r.test(rel))) return true;
  return ALLOW_READ_EXTRA.some((r) => r.test(rel));
}

// ---- Tool definitions ----------------------------------------------------

const TOOLS = [
  {
    name: "list_files",
    description: "List files under a directory (relative to repo root). Returns only files the bot is allowed to read.",
    input_schema: {
      type: "object",
      properties: { dir: { type: "string", description: "Directory. Omit or pass '.' for repo root." } },
    },
  },
  {
    name: "read_file",
    description: "Read the full UTF-8 contents of a file (<= 120 KB).",
    input_schema: {
      type: "object",
      properties: { path: { type: "string" } },
      required: ["path"],
    },
  },
  {
    name: "write_file",
    description: "Overwrite a file with new contents. MUST be an allowed path; otherwise the call fails.",
    input_schema: {
      type: "object",
      properties: {
        path:    { type: "string" },
        content: { type: "string" },
      },
      required: ["path", "content"],
    },
  },
  {
    name: "done",
    description: "Finish. should_open_pr=false if the feedback does not warrant a code change.",
    input_schema: {
      type: "object",
      properties: {
        summary:        { type: "string", description: "1–3 sentences: what you changed and why (or why not)." },
        files_changed:  { type: "array", items: { type: "string" } },
        should_open_pr: { type: "boolean" },
      },
      required: ["summary", "files_changed", "should_open_pr"],
    },
  },
];

// ---- System prompt -------------------------------------------------------

const SYSTEM = `You are a careful code-modification assistant for the HARTMANN Easy Care Hub website.

You receive ONE piece of user feedback submitted through the site's Tally form. Decide whether the feedback can be addressed with a small code change to the site, and if so, make it.

Workflow:
1. If the feedback is a compliment, a question, a hardware/server issue, unintelligible, off-topic, or otherwise NOT actionable as a website code change, call \`done\` with should_open_pr=false and explain briefly.
2. Otherwise: use \`list_files\` and \`read_file\` to locate the right code, then make MINIMAL edits with \`write_file\`.
3. Call \`done\` with should_open_pr=true, the list of files you changed, and a short summary.

Codebase notes:
- Static marketing site at the repo root: index.html, manual.html, faq.html, releases.html + assets/.
- React + TypeScript app in react-app/src/ with typed i18n (en/de/fr) in react-app/src/i18n/.
- The static site has its own i18n in assets/js/i18n.js with the same translation keys.
- When you change a user-facing string: update ALL THREE language dictionaries in react-app/src/i18n/ AND the same keys in assets/js/i18n.js so the React app and static site stay in sync.
- Hartmann branding: red accent #E1001A, deep teal #0B3D2E. Keep visual consistency.
- Feedback submissions include a hidden field "pageUrl" telling you which page the reporter was on — prioritise fixes to that page.

Hard rules:
- You can WRITE only under: index.html, manual.html, faq.html, releases.html, assets/css/**, assets/js/**, assets/img/**, react-app/src/**.
- You CANNOT write to: .github/**, scripts/**, netlify.toml, package.json, lockfiles, vite/tsconfig, node_modules, dist, downloads, .gitignore.
- Do not introduce new dependencies or build steps.
- Prefer small, targeted edits. Do not rewrite whole files unless strictly necessary.
- You have at most ${MAX_TURNS} tool calls. Call \`done\` before then.`;

// ---- Tool implementations (sandboxed at repoRoot) ------------------------

function walk(absDir, root, acc = []) {
  if (!fs.existsSync(absDir)) return acc;
  const st = fs.statSync(absDir);
  if (st.isFile()) {
    const rel = path.relative(root, absDir).replaceAll("\\", "/");
    if (canRead(rel)) acc.push(rel);
    return acc;
  }
  if (!st.isDirectory()) return acc;
  const rel = path.relative(root, absDir).replaceAll("\\", "/");
  if (rel.startsWith("node_modules") || rel.startsWith(".git") || rel === "dist" || rel === "react-app/dist") return acc;
  for (const name of fs.readdirSync(absDir)) {
    walk(path.join(absDir, name), root, acc);
  }
  return acc;
}

function toolListFiles(root, { dir = "." } = {}) {
  const abs = path.resolve(root, dir);
  if (!abs.startsWith(root)) return "ERROR: path escapes repo";
  const entries = walk(abs, root).slice(0, 500);
  return entries.length ? entries.join("\n") : "(no readable files)";
}

function toolReadFile(root, { path: p }) {
  const rel = normRel(root, p);
  if (!canRead(rel)) throw new Error(`not permitted to read: ${rel}`);
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) throw new Error("file not found: " + rel);
  const buf = fs.readFileSync(abs);
  if (buf.length > 120 * 1024) throw new Error("file too large (>120 KB): " + rel);
  return buf.toString("utf8");
}

function toolWriteFile(root, { path: p, content }) {
  const rel = normRel(root, p);
  if (!canWrite(rel)) throw new Error(`not permitted to modify: ${rel}`);
  const abs = path.join(root, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, "utf8");
  return `wrote ${Buffer.byteLength(content, "utf8")} bytes to ${rel}`;
}

// ---- Tool-call dispatcher ------------------------------------------------

/**
 * Execute every tool_use block in an assistant turn and produce the matching
 * tool_result messages. Returns { toolResults, doneCalled, doneResult }.
 */
function runToolBlocks(blocks, repoRoot, filesChanged) {
  const toolResults = [];
  let doneCalled = false;
  let doneResult = null;

  for (const block of blocks) {
    if (block.type !== "tool_use") continue;
    try {
      const outcome = dispatchTool(block, repoRoot, filesChanged);
      if (outcome.done) { doneCalled = true; doneResult = outcome.result; }
      toolResults.push({
        type: "tool_result",
        tool_use_id: block.id,
        content: outcome.content,
      });
    } catch (err) {
      toolResults.push({
        type: "tool_result",
        tool_use_id: block.id,
        content: `ERROR: ${err.message}`,
        is_error: true,
      });
    }
  }

  return { toolResults, doneCalled, doneResult };
}

/** Run one tool_use block. Returns { content, done?, result? }. */
function dispatchTool(block, repoRoot, filesChanged) {
  switch (block.name) {
    case "list_files":
      return { content: toolListFiles(repoRoot, block.input) };
    case "read_file":
      return { content: toolReadFile(repoRoot, block.input) };
    case "write_file": {
      const msg = toolWriteFile(repoRoot, block.input);
      filesChanged.add(normRel(repoRoot, block.input.path));
      return { content: msg };
    }
    case "done":
      return {
        content: "done recorded",
        done: true,
        result: {
          summary: block.input.summary || "",
          filesChanged: Array.from(new Set([
            ...(block.input.files_changed || []),
            ...filesChanged,
          ])),
          shouldOpenPr: !!block.input.should_open_pr,
        },
      };
    default:
      return { content: `ERROR: unknown tool ${block.name}` };
  }
}

// ---- Main exported function ----------------------------------------------

export async function analyseAndFix(feedback, repoRoot) {
  const apiKey = process.env[API_KEY_ENV];
  if (!apiKey) throw new Error(`${API_KEY_ENV} is not set`);
  const client = new Anthropic({
    apiKey,
    ...(BASE_URL ? { baseURL: BASE_URL } : {}),
  });

  const messages = [{ role: "user", content: [{ type: "text", text: buildUserPrompt(feedback) }] }];

  const filesChanged = new Set();
  let result = {
    summary: "(Claude exited without calling done)",
    filesChanged: [],
    shouldOpenPr: false,
  };

  for (let turn = 0; turn < MAX_TURNS; turn++) {
    const resp = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_OUTPUT_TOKENS,
      system: SYSTEM,
      tools: TOOLS,
      messages,
    });
    messages.push({ role: "assistant", content: resp.content });

    if (resp.stop_reason !== "tool_use") {
      const text = resp.content.find((b) => b.type === "text")?.text || "";
      result = { summary: text || result.summary, filesChanged: [...filesChanged], shouldOpenPr: false };
      break;
    }

    const { toolResults, doneCalled, doneResult } =
      runToolBlocks(resp.content, repoRoot, filesChanged);
    messages.push({ role: "user", content: toolResults });
    if (doneCalled) {
      if (doneResult) result = doneResult;
      break;
    }
  }

  return result;
}

function buildUserPrompt(fb) {
  const meta = [
    `Submission ID: ${fb.id}`,
    fb.name ? `Reporter: ${fb.name}` : "Reporter: anonymous",
    fb.email ? `Email: ${fb.email}` : null,
    fb.page_url ? `Page URL: ${fb.page_url}` : "Page URL: (not captured)",
    `Submitted: ${fb.created_at}`,
  ].filter(Boolean).join("\n");

  const extra = Object.entries(fb.raw_fields || {})
    .filter(([k]) => !["name", "email", "message", "feedback", "comment", "description", "pageurl", "page_url", "url"].includes(k))
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n");

  return `## User feedback from the EasyCareHub website

${meta}

### Message

${fb.message || "(empty)"}

${extra ? `### Additional fields\n${extra}\n` : ""}
---

Investigate the repo, then either make a small focused code change addressing this feedback or call \`done\` with should_open_pr=false if it's not actionable.`;
}
