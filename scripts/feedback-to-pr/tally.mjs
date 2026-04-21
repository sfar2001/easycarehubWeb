/* =====================================================================
   Tally REST API client (v1).
   Docs: https://developers.tally.so/api-reference
   Auth: Authorization: Bearer <API_KEY>

   Tally's response separates question *labels* (top-level `questions`)
   from *answers* (per-submission `responses`), joined by `questionId`:

     { questions: [ { id: "EKOE2N", title: "First name" } ],
       submissions: [ { responses: [ { questionId: "EKOE2N", answer: "Filip" } ] } ] }

   We build a questionId → title map once per page and pass it into
   normalise() so every answer gets its real label attached.
   ===================================================================== */

const BASE = "https://api.tally.so";
const CLIENT_VERSION = 2;
console.log(`[tally client v${CLIENT_VERSION}] base=${BASE}`);

/**
 * Fetch submissions for a form, filtering out ones we've already processed.
 * @param {string}   formId
 * @param {string[]} processedIds
 * @param {number}   limit  0 = all
 */
export async function fetchNewSubmissions(formId, processedIds, limit = 0) {
  const token = requireToken();
  const processed = new Set(processedIds.map(String));
  const all = [];

  const pageSize = 50;
  const maxPages = 20;
  for (let page = 1; page <= maxPages; page++) {
    const payload = await fetchPage(formId, token, page, pageSize);
    const { fresh, seenProcessed } = extractNewSubmissions(payload, processed, formId);
    all.push(...fresh);

    const items = extractItems(payload);
    const haveMore = items.length === pageSize && !seenProcessed && payload?.hasMore !== false;
    if (!haveMore || items.length === 0) break;
  }

  all.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  return limit > 0 ? all.slice(0, limit) : all;
}

async function fetchPage(formId, token, page, pageSize) {
  const url = `${BASE}/forms/${encodeURIComponent(formId)}/submissions?page=${page}&limit=${pageSize}`;
  return request(url, token);
}

/** Pull fresh submissions out of a page payload, skipping processed ids. */
function extractNewSubmissions(payload, processed, formId) {
  const items = extractItems(payload);
  const questionMap = buildQuestionMap(payload);
  const fresh = [];
  let seenProcessed = false;

  for (const raw of items) {
    const id = String(raw.id || raw._id || "");
    if (!id) continue;
    if (processed.has(id)) { seenProcessed = true; continue; }
    fresh.push(normalise(raw, formId, questionMap));
  }
  return { fresh, seenProcessed };
}

// ---- Envelope helpers ---------------------------------------------------

const ITEM_KEYS = ["submissions", "items", "results", "data"];
function extractItems(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  for (const k of ITEM_KEYS) {
    if (Array.isArray(payload[k])) return payload[k];
  }
  return [];
}

function buildQuestionMap(payload) {
  const map = {};
  const qs = Array.isArray(payload?.questions) ? payload.questions : [];
  for (const q of qs) {
    const id = q.id || q.uuid;
    if (id) map[id] = q.title || q.label || q.name || "";
  }
  return map;
}

// ---- HTTP ---------------------------------------------------------------

function requireToken() {
  const t = process.env.TALLY_API_KEY;
  if (!t) throw new Error("TALLY_API_KEY is not set");
  if (/\s/.test(t)) console.warn("  ⚠ TALLY_API_KEY contains whitespace — likely a bad paste");
  console.log(`  token length=${t.length}, ends …${t.slice(-4)}`);
  return t;
}

async function request(url, token) {
  console.log(`→ GET ${url}`);
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  console.log(`  status: ${res.status} ${res.statusText}`);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Tally API ${res.status} ${res.statusText}: ${text.slice(0, 400) || "(empty body)"}`);
  }
  if (!text?.trim()) return {};
  try { return JSON.parse(text); }
  catch { throw new Error(`Tally returned non-JSON body. First 200 chars: ${text.slice(0, 200)}`); }
}

// ---- Field extraction ---------------------------------------------------

// Substring matchers (case-insensitive) for flexible field extraction.
// Covers typical EN/DE/FR wording of the same concept.
const MATCH_MESSAGE  = /(message|feedback|comment|describ|body|text|content|nachricht|kommentar|commentaire|description|beschreibung)/i;
const MATCH_NAME     = /(^|_)(name|vorname|nachname|nom|prenom|prénom)/i;
const MATCH_EMAIL    = /(email|e-?mail|mail)/i;
const MATCH_PAGE_URL = /(page.?url|url|seite|adresse)/i;

function findByLabel(fields, matcher) {
  for (const [k, v] of Object.entries(fields)) {
    if (matcher.test(k) && v) return v;
  }
  return "";
}

/** Pick the longest non-URL, non-email text value — a safe fallback. */
function pickLongestText(fields) {
  let best = "";
  for (const v of Object.values(fields)) {
    if (typeof v !== "string" || v.length <= best.length) continue;
    if (/^https?:\/\//i.test(v.trim())) continue;
    if (/^[\w.-]+@[\w.-]+$/.test(v.trim())) continue;
    best = v;
  }
  return best;
}

/**
 * Flatten a Tally submission into a predictable shape.
 * Handles the Tally v1 format where response items reference their
 * question via `questionId` and the title lives in a top-level
 * `questions` array. Also handles older/flatter shapes defensively.
 */
const ROW_KEYS = ["responses", "fields", "answers"];
function rowsOf(raw) {
  for (const k of ROW_KEYS) {
    if (Array.isArray(raw?.[k])) return raw[k];
  }
  return [];
}

function normalise(raw, formId, questionMap = {}) {
  const rows = rowsOf(raw);

  const fields = {};
  for (const r of rows) {
    // Prefer the title from the questions map; fall back to inline label
    // (older/legacy shapes).
    const label = (questionMap[r.questionId] || r.label || r.key || r.name || r.title || "").toString();
    const key = label.toLowerCase().replaceAll(/\s+/g, "_");
    if (!key) continue;
    // Tally responses put the answer under "answer"; older shapes used
    // "value" or "response".
    const value = r.answer ?? r.value ?? r.response ?? "";
    fields[key] = Array.isArray(value) ? value.join(", ") : String(value ?? "");
  }

  const message = findByLabel(fields, MATCH_MESSAGE) || pickLongestText(fields);

  return {
    id: String(raw.id || raw._id || ""),
    form_id: formId,
    created_at: raw.submittedAt || raw.createdAt || raw.created_at || new Date().toISOString(),
    name:     findByLabel(fields, MATCH_NAME),
    email:    findByLabel(fields, MATCH_EMAIL),
    message,
    page_url: findByLabel(fields, MATCH_PAGE_URL),
    raw_fields: fields,
    raw,
  };
}
