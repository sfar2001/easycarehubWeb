/* =====================================================================
   Minimal Userback REST client.
   Docs: https://api.userback.io  (v1 API)
   Auth header format is just the bare token, no "Bearer" prefix.

   Defensive: an empty response body (204, or bare 200 with 0 bytes) is
   treated as "no feedback" rather than blowing up on JSON.parse("").
   ===================================================================== */

const BASE = "https://api.userback.io/api/v1";

/**
 * Fetch feedback from Userback, filtering out items we've already processed.
 * @param {string[]} processedIds - IDs (as strings) seen in prior runs
 * @param {number}   limit        - Max items to return (0 = all)
 */
export async function fetchNewFeedback(processedIds, limit = 0) {
  const token = process.env.USERBACK_TOKEN;
  if (!token) throw new Error("USERBACK_TOKEN is not set");

  const url = `${BASE}/feedback?per_page=100`;
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

  if (!text || !text.trim()) {
    console.log("  body: (empty) — treating as no feedback");
    return [];
  }

  let payload;
  try {
    payload = JSON.parse(text);
  } catch (err) {
    throw new Error(
      `Userback returned non-JSON body (${text.length} bytes). First 200 chars: ${text.slice(0, 200)}`
    );
  }

  // Response envelope varies; try common shapes.
  const items =
    Array.isArray(payload) ? payload :
    Array.isArray(payload.results)  ? payload.results :
    Array.isArray(payload.data)     ? payload.data :
    Array.isArray(payload.feedback) ? payload.feedback : [];

  console.log(`  items returned: ${items.length}`);

  const processed = new Set(processedIds.map(String));
  const fresh = items
    .filter((f) => f && f.id !== undefined && !processed.has(String(f.id)))
    .map(normalise)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return limit > 0 ? fresh.slice(0, limit) : fresh;
}

/** Normalise Userback response shape into a compact, predictable object. */
function normalise(f) {
  return {
    id: String(f.id),
    title:       f.title || f.name_title || "",
    comment:     f.comment || f.description || f.body || "",
    category:    f.category || f.rating_category || "",
    priority:    f.priority || "",
    rating:      f.rating,
    url:         f.url || f.page_url || "",
    browser_name: f.browser_name || f.browser || "",
    os_name:     f.os_name || f.os || "",
    name:        f.name || f.user_name || "",
    email:       f.email || f.user_email || "",
    created_at:  f.created_at || f.createdAt || new Date().toISOString(),
    raw: f, // kept for debugging
  };
}
