/* =====================================================================
   Tally REST API client (v1).
   Docs: https://developers.tally.so/api-reference
   Auth: Authorization: Bearer <API_KEY>
   ===================================================================== */

const BASE = "https://api.tally.so";
const CLIENT_VERSION = 1;
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

  // Tally paginates; walk pages until we've covered everything new.
  let page = 1;
  const pageSize = 50;
  while (true) {
    const url = `${BASE}/forms/${encodeURIComponent(formId)}/submissions?page=${page}&limit=${pageSize}`;
    const payload = await request(url, token);
    const items = Array.isArray(payload?.items) ? payload.items
                : Array.isArray(payload?.submissions) ? payload.submissions
                : Array.isArray(payload) ? payload
                : [];

    let seenAlreadyProcessed = false;
    for (const raw of items) {
      const id = String(raw.id || raw._id || "");
      if (!id) continue;
      if (processed.has(id)) { seenAlreadyProcessed = true; continue; }
      all.push(normalise(raw, formId));
    }

    const total = payload?.total ?? payload?.count ?? items.length;
    const haveMore = items.length === pageSize && all.length + processed.size < total && !seenAlreadyProcessed;
    if (!haveMore || items.length === 0) break;
    page += 1;
    if (page > 20) break; // belt-and-braces
  }

  all.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  return limit > 0 ? all.slice(0, limit) : all;
}

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

/** Pick the longest non-URL text value — a safe fallback for "the message". */
function pickLongestText(fields) {
  let best = "";
  for (const v of Object.values(fields)) {
    if (typeof v !== "string" || v.length <= best.length) continue;
    if (/^https?:\/\//i.test(v.trim())) continue; // skip URLs
    if (/^[\w.-]+@[\w.-]+$/.test(v.trim())) continue; // skip emails
    best = v;
  }
  return best;
}

/**
 * Flatten a Tally submission into a compact, predictable shape.
 * Tally submissions look like:
 *   { id, createdAt, formId, responses: [{ label, type, value }, ...] }
 * — but some older payloads use `fields` or `answers`. Handle all three.
 */
function normalise(raw, formId) {
  const rows = Array.isArray(raw.responses) ? raw.responses
             : Array.isArray(raw.fields)     ? raw.fields
             : Array.isArray(raw.answers)    ? raw.answers : [];

  const fields = {};
  for (const r of rows) {
    const label = (r.label || r.key || r.name || "").toString();
    const key = label.toLowerCase().replaceAll(/\s+/g, "_");
    if (!key) continue;
    const value = r.value ?? r.answer ?? r.response ?? "";
    fields[key] = Array.isArray(value) ? value.join(", ") : String(value ?? "");
  }

  const message = findByLabel(fields, MATCH_MESSAGE) || pickLongestText(fields);

  return {
    id: String(raw.id || raw._id || ""),
    form_id: formId,
    created_at: raw.createdAt || raw.created_at || new Date().toISOString(),
    name:     findByLabel(fields, MATCH_NAME),
    email:    findByLabel(fields, MATCH_EMAIL),
    message,
    page_url: findByLabel(fields, MATCH_PAGE_URL),
    raw_fields: fields,
    raw, // kept for debugging / prompt context
  };
}
