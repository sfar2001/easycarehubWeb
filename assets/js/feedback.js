/* =====================================================================
   Static-site feedback widget — floating button + Tally popup.
   Form:    https://tally.so/r/WOp6Qv  (change TALLY_FORM_ID to swap)
   Strings: taken from i18n.js via data-i18n attributes.
   ===================================================================== */

(function () {
  "use strict";

  var TALLY_FORM_ID = "WOp6Qv";
  var TALLY_EMBED_SRC = "https://tally.so/widgets/embed.js";

  // ---------- Localisation helpers ------------------------------------
  function currentDict() {
    var lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    return (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N.en) || null;
  }
  function tr(key, fallback) {
    var dict = currentDict();
    if (!dict) return fallback;
    return key.split(".").reduce(function (acc, k) {
      return acc && typeof acc === "object" ? acc[k] : undefined;
    }, dict) || fallback;
  }
  function applyButtonLabels(btn) {
    var label = tr("feedback.button", "Feedback");
    var title = tr("feedback.buttonTitle", "Share your feedback");
    btn.setAttribute("title", title);
    btn.setAttribute("aria-label", title);
    var span = btn.querySelector("span");
    if (span) span.textContent = label;
  }

  // ---------- Button injection ----------------------------------------
  function injectButton() {
    if (document.querySelector(".feedback-fab")) return; // already present

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "feedback-fab";
    btn.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
      ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      '<span>Feedback</span>';
    btn.addEventListener("click", openFeedback);
    document.body.appendChild(btn);
    applyButtonLabels(btn);

    // Keep the label in sync when the user switches language
    document.addEventListener("i18n:changed", function () { applyButtonLabels(btn); });
  }

  // ---------- Tally loader (lazy, on first click) ----------------------
  var tallyPromise = null;
  function loadTally() {
    if (window.Tally) return Promise.resolve();
    if (tallyPromise) return tallyPromise;

    tallyPromise = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = TALLY_EMBED_SRC;
      s.async = true;
      s.onload = function () {
        var started = Date.now();
        (function tick() {
          if (window.Tally) return resolve();
          if (Date.now() - started > 5000) return reject(new Error("Tally did not initialise"));
          setTimeout(tick, 40);
        })();
      };
      s.onerror = function () { reject(new Error("Failed to load Tally embed script")); };
      document.head.appendChild(s);
    });
    return tallyPromise;
  }

  function openFeedback() {
    loadTally().then(function () {
      if (!window.Tally) return;
      window.Tally.openPopup(TALLY_FORM_ID, {
        layout: "modal",
        width: 480,
        hiddenFields: { pageUrl: window.location.href }
      });
    }).catch(function (err) { console.warn("[feedback]", err); });
  }

  // ---------- Boot ----------------------------------------------------
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectButton);
  } else {
    injectButton();
  }
})();
