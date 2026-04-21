/* =====================================================================
   LLM tool-use loop (OpenAI / OpenRouter format).

   Given one piece of Tally feedback, the model uses OpenAI-style
   function calling to read/list/write files under an allow-list and
   then calls `done` to finish. All file-system access is sandboxed
   to the repo root and a whitelist of source paths.

   The OpenAI SDK is used because it's the canonical way to talk to
   OpenRouter (and obviously OpenAI itself). Pointing it at a different
   provider is a one-line base-URL change.
   ===================================================================== */

import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";

// ---- Provider / model config --------------------------------------------

const MODEL     = process.env.LLM_MODEL    || "anthropic/claude-sonnet-4.5";
// The OpenAI SDK appends `/chat/completions` to baseURL. So baseURL MUST end
// with `/v1` (or whatever the provider's API version path is). If the caller
// sets `https://openrouter.ai/api` by mistake, auto-append `/v1`.
const BASE_URL  = normaliseBaseUrl(process.env.LLM_BASE_URL || "https://openrouter.ai/api/v1");
const API_KEY_ENV = process.env.LLM_API_KEY_ENV || "OPENROUTER_API_KEY";

function normaliseBaseUrl(u) {
  const stripped = u.replace(/\/+$/, "");
  // If it already ends with something that looks like an API version, leave it alone.
  if (/\/v\d+(\.\d+)*$/.test(stripped)) return stripped;
  // OpenRouter's path is /api/v1 — handle the common mistake of stopping at /api.
  if (stripped.endsWith("/api")) return `${stripped}/v1`;
  return stripped;
}

const MAX_TURNS         = 12;
const MAX_OUTPUT_TOKENS = 4000;

console.log(`[llm driver] model=${MODEL}  via ${BASE_URL}`);

// ---- File permission policy ---------------------------------------------

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
const ALLOW_READ_EXTRA = [/^README\.md$/, /^netlify\.toml$/];

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

// ---- Tool definitions (OpenAI function-calling shape) -------------------

const TOOLS = [
  {
    type: "function",
    function: {
      name: "list_files",
      description:
        "List files under a directory (relative to repo root). Returns only files the bot is allowed to read.",
      parameters: {
        type: "object",
        properties: {
          dir: { type: "string", description: "Directory. Omit or pass '.' for repo root." },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "read_file",
      description: "Read the full UTF-8 contents of a file (<= 120 KB).",
      parameters: {
        type: "object",
        properties: { path: { type: "string" } },
        required: ["path"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "write_file",
      description:
        "Overwrite a file with new contents. MUST be an allowed path; otherwise the call fails.",
      parameters: {
        type: "object",
        properties: {
          path:    { type: "string" },
          content: { type: "string" },
        },
        required: ["path", "content"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "done",
      description:
        "Finish. should_open_pr=false if the feedback does not warrant a code change.",
      parameters: {
        type: "object",
        properties: {
          summary:        { type: "string" },
          files_changed:  { type: "array", items: { type: "string" } },
          should_open_pr: { type: "boolean" },
        },
        required: ["summary", "files_changed", "should_open_pr"],
      },
    },
  },
];

// ---- System prompt ------------------------------------------------------

const SYSTEM = `You are a careful code-modification assistant for the HARTMANN Easy Care Hub website.

You receive ONE piece of user feedback submitted through the site's Tally form. Decide whether the feedback can be addressed with a small code change, and if so, make it. Always finish by calling the \`done\` function.

Workflow:
1. If the feedback is a compliment, a question, a hardware/server issue, unintelligible, off-topic, or otherwise NOT actionable as a website code change, call \`done\` with should_open_pr=false and explain briefly.
2. Otherwise: call \`list_files\` and \`read_file\` to locate the right code, then make MINIMAL edits with \`write_file\`.
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

// ---- Tool implementations (sandboxed at repoRoot) -----------------------

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
  for (const name of fs.readdirSync(absDir)) walk(path.join(absDir, name), root, acc);
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

// ---- Tool-call dispatcher -----------------------------------------------

function dispatchTool(name, args, repoRoot, filesChanged) {
  switch (name) {
    case "list_files": return { content: toolListFiles(repoRoot, args) };
    case "read_file":  return { content: toolReadFile(repoRoot, args) };
    case "write_file": {
      const msg = toolWriteFile(repoRoot, args);
      filesChanged.add(normRel(repoRoot, args.path));
      return { content: msg };
    }
    case "done":
      return {
        content: "done recorded",
        done: true,
        result: {
          summary: args.summary || "",
          filesChanged: Array.from(new Set([...(args.files_changed || []), ...filesChanged])),
          shouldOpenPr: !!args.should_open_pr,
        },
      };
    default:
      return { content: `ERROR: unknown tool ${name}` };
  }
}

function runToolCalls(toolCalls, repoRoot, filesChanged) {
  const toolMessages = [];
  let doneCalled = false;
  let doneResult = null;

  for (const call of toolCalls) {
    const name = call.function?.name;
    let args = {};
    try { args = call.function?.arguments ? JSON.parse(call.function.arguments) : {}; }
    catch { args = {}; }

    try {
      const outcome = dispatchTool(name, args, repoRoot, filesChanged);
      if (outcome.done) { doneCalled = true; doneResult = outcome.result; }
      toolMessages.push({
        role: "tool",
        tool_call_id: call.id,
        content: typeof outcome.content === "string" ? outcome.content : JSON.stringify(outcome.content),
      });
    } catch (err) {
      toolMessages.push({
        role: "tool",
        tool_call_id: call.id,
        content: `ERROR: ${err.message}`,
      });
    }
  }
  return { toolMessages, doneCalled, doneResult };
}

// ---- 429 / 503 retry with exponential backoff ---------------------------

const RETRYABLE_STATUSES = new Set([408, 425, 429, 502, 503, 504]);
const MAX_RETRIES = 5;

async function callWithRetry(client, params) {
  let attempt = 0;
  while (true) {
    try {
      return await client.chat.completions.create(params);
    } catch (err) {
      const status = err?.status;
      if (!RETRYABLE_STATUSES.has(status) || attempt >= MAX_RETRIES) throw err;
      // Prefer Retry-After header when present, else exponential backoff.
      const retryAfter = Number(err?.headers?.["retry-after"] || err?.headers?.get?.("retry-after") || 0);
      const waitMs = retryAfter > 0
        ? retryAfter * 1000
        : Math.min(30_000, 1000 * 2 ** attempt + Math.floor(Math.random() * 500));
      console.log(`  ⚠ ${status} from LLM — retry ${attempt + 1}/${MAX_RETRIES} in ${Math.round(waitMs / 1000)}s`);
      await new Promise((r) => setTimeout(r, waitMs));
      attempt += 1;
    }
  }
}

// ---- Main exported function ---------------------------------------------

export async function analyseAndFix(feedback, repoRoot) {
  const apiKey = process.env[API_KEY_ENV];
  if (!apiKey) throw new Error(`${API_KEY_ENV} is not set`);

  const client = new OpenAI({
    apiKey,
    baseURL: BASE_URL,
    defaultHeaders: {
      "HTTP-Referer": "https://github.com/sfar2001/easycarehubWeb",
      "X-Title": "EasyCareHub feedback bot",
    },
  });

  const messages = [
    { role: "system", content: SYSTEM },
    { role: "user",   content: buildUserPrompt(feedback) },
  ];

  const filesChanged = new Set();
  let result = {
    summary: "(model exited without calling done)",
    filesChanged: [],
    shouldOpenPr: false,
  };

  for (let turn = 0; turn < MAX_TURNS; turn++) {
    const resp = await callWithRetry(client, {
      model: MODEL,
      max_tokens: MAX_OUTPUT_TOKENS,
      messages,
      tools: TOOLS,
      tool_choice: "auto",
    });

    const choice = resp.choices?.[0];
    const msg    = choice?.message;
    if (!msg) {
      // Dump whatever the provider returned so we can diagnose.
      const dump = JSON.stringify({ id: resp.id, model: resp.model, choices: resp.choices, error: resp.error, usage: resp.usage }, null, 2);
      throw new Error(`LLM returned no message. Full response:\n${dump}`);
    }
    if (choice.error) {
      throw new Error(`LLM returned an error: ${JSON.stringify(choice.error)}`);
    }

    // Append the assistant turn verbatim so tool_call_ids line up
    messages.push({
      role: "assistant",
      content: msg.content ?? "",
      ...(msg.tool_calls ? { tool_calls: msg.tool_calls } : {}),
    });

    const toolCalls = msg.tool_calls || [];
    if (toolCalls.length === 0) {
      // Plain text response → treat as an implicit finish
      const text = msg.content || "";
      result = { summary: text || result.summary, filesChanged: [...filesChanged], shouldOpenPr: false };
      break;
    }

    const { toolMessages, doneCalled, doneResult } = runToolCalls(toolCalls, repoRoot, filesChanged);
    messages.push(...toolMessages);
    if (doneCalled) {
      if (doneResult) result = doneResult;
      break;
    }
  }

  return result;
}

// ---- Prompt builder -----------------------------------------------------

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

  const extraBlock = extra ? `\n### Additional fields\n${extra}\n` : "";

  return `## User feedback from the EasyCareHub website

${meta}

### Message

${fb.message || "(empty)"}
${extraBlock}
---

Investigate the repo, then either make a small focused code change addressing this feedback or call \`done\` with should_open_pr=false if it's not actionable.`;
}
