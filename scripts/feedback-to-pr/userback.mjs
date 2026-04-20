/* =====================================================================
   Userback REST API client  (v1.0)

   Docs:     https://docs.userback.io/reference/
   Endpoint: https://rest.userback.io/1.0/
   Naming:   JSON properties use camelCase, models use PascalCase.
   Auth:     `Authorization: <token>` header.
   ===================================================================== */

const BASE = "https://rest.userback.io/1.0";
const CLIENT_VERSION = 2; // bump on every change so CI logs prove which code ran
console.log(`[userback client v${CLIENT_VERSION}] base=${BASE}`);

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

  console.log(`→ GET ${url}`);
  const res = await fetch(url, {
    headers: {
      Authorization: token,
      Accept: "application/json",
    },
  });

  console.log(`  status: ${res.status} ${res.statusText}`);
  const text = await res.text();

  if (!res.ok) {
    throw new Error(
      `Userback API ${res.status} ${res.statusText}: ${text.slice(0, 400) || "(empty body)"}`
    );
  }
  if (!text?.trim()) {
    console.log("  body: (empty) — treating as no feedback");
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
