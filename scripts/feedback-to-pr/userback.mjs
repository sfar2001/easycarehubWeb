/* =====================================================================
   Userback REST API client  (v1.0)

   Docs:     https://docs.userback.io/reference/
   Endpoint: https://rest.userback.io/1.0/
   Naming:   JSON properties use camelCase, models use PascalCase.
   Auth:     `Authorization: <token>` header.
   ===================================================================== */

const BASE = "https://rest.userback.io/1.0";
const CLIENT_VERSION = 3; // bump on every change so CI logs prove which code ran
console.log(`[userback client v${CLIENT_VERSION}] base=${BASE}`);

// Userback's REST auth varies by plan/region. We try these in order on 401.
const AUTH_HEADERS = [
  (t) => ({ Authorization: t }),
  (t) => ({ Authorization: `Bearer ${t}` }),
  (t) => ({ Authorization: `Token ${t}` }),
  (t) => ({ "X-API-Key": t }),
];

// Response envelopes observed in the wild, in order of preference.
const ENVELOPE_KEYS = [
  "Feedbacks",
  "feedbacks",
  "Feedback",
  "feedback",
  "results",
  "data",
];

/**
 * Fetch feedback from Userback, filtering out items we've already processed.
 * @param {string[]} processedIds - IDs (as strings) seen in prior runs
 * @param {number}   limit        - Max items to return (0 = all)
 */
export async function fetchNewFeedback(processedIds, limit = 0) {
  const url = `${BASE}/feedback?limit=100&order=createdAt:asc`;
  const payload = await request(url);
  if (payload === null) return [];

  const items = extractItems(payload);
  console.log(`  items returned: ${items.length}`);

  const processed = new Set(processedIds.map(String));
  const fresh = items
    .filter((f) => f?.id !== undefined && !processed.has(String(f.id)))
    .map(normalise)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return limit > 0 ? fresh.slice(0, limit) : fresh;
}

/** Perform a GET against Userback. Returns parsed JSON, or null on empty body. */
async function request(url) {
  const token = process.env.USERBACK_TOKEN;
  if (!token) throw new Error("USERBACK_TOKEN is not set");

  logTokenDiagnostics(token);
  console.log(`→ GET ${url}`);

  let lastError;
  for (let i = 0; i < AUTH_HEADERS.length; i++) {
    const outcome = await tryRequest(url, token, AUTH_HEADERS[i], i);
    if (outcome.kind === "ok") return outcome.payload;
    if (outcome.kind === "fatal") throw new Error(outcome.message);
    lastError = outcome.message; // keep iterating (auth error)
  }

  throw new Error(`All auth header formats rejected by Userback. Last error: ${lastError}`);
}

/** One attempt: ok | retry | fatal. Wraps the fetch + parse for a single header scheme. */
async function tryRequest(url, token, headerFn, attemptIdx) {
  const headers = { ...headerFn(token), Accept: "application/json" };
  const authKey = Object.keys(headers).find((k) => k !== "Accept");
  const scheme = describeAuth(headers[authKey], token);
  console.log(`  try #${attemptIdx + 1}: header ${authKey}: ${scheme}`);

  const res = await fetch(url, { headers });
  console.log(`    status: ${res.status} ${res.statusText}`);
  const text = await res.text();

  if (res.ok) return { kind: "ok", payload: parseBody(text) };

  const msg = `Userback API ${res.status} ${res.statusText}: ${text.slice(0, 200) || "(empty body)"}`;
  if (res.status === 401 || res.status === 403) return { kind: "retry", message: msg };
  return { kind: "fatal", message: msg };
}

function parseBody(text) {
  if (!text?.trim()) {
    console.log("    body: (empty) — treating as no feedback");
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(
      `Userback returned non-JSON body (${text.length} bytes). First 200 chars: ${text.slice(0, 200)}`
    );
  }
}

function describeAuth(headerValue, token) {
  // Show the scheme (Bearer/Token/bare) without leaking the token.
  if (headerValue === token) return "<token>";
  const firstSpace = headerValue.indexOf(" ");
  return firstSpace > 0 ? `${headerValue.slice(0, firstSpace)} <token>` : "<token>";
}

function logTokenDiagnostics(token) {
  console.log(`  token length=${token.length}, ends …${token.slice(-4)}`);
  if (/\s/.test(token)) {
    console.warn("  ⚠ token contains whitespace — likely a bad secret paste");
  }
}

/** Pull the array of feedback items out of whatever envelope the API uses. */
function extractItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  for (const key of ENVELOPE_KEYS) {
    const val = payload[key];
    if (Array.isArray(val)) return val;
  }
  return [];
}

/** Flatten Userback's camelCase/PascalCase shape into a flat object. */
function normalise(f) {
  const browser = f.Browser || {};
  const os      = f.Os || f.OS || {};
  const project = f.Project || {};

  return {
    id: String(f.id),
    title:        f.name || f.title || "",
    comment:      f.comment || f.description || f.body || "",
    category:     f.category || f.rating_category || "",
    priority:     f.priority || "",
    rating:       f.rating,
    url:          f.url || f.pageUrl || f.page_url || "",
    browser_name: browser.name || f.browserName || f.browser_name || f.browser || "",
    os_name:      os.name || f.osName || f.os_name || "",
    name:         f.userName || f.name || "",
    email:        f.userEmail || f.email || "",
    project:      project.name || "",
    created_at:   f.createdAt || f.created_at || new Date().toISOString(),
    raw: f, // kept for debugging
  };
}
