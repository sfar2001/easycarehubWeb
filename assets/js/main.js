/* =====================================================================
   Page-specific helpers: FAQ filtering/search, manual TOC scrollspy,
   release-notes filter, resident dashboard ticker. Kept intentionally
   small — no build tools, no frameworks.
   ===================================================================== */

(function () {
  /* ------------------------- FAQ filtering ------------------------- */
  const faqList = document.getElementById("faq-list");
  if (faqList) {
    const searchInput = document.querySelector(".faq-search input");
    const catButtons  = document.querySelectorAll(".faq-categories [data-cat]");
    let activeCat = "all";

    function render() {
      const lang = document.documentElement.lang || "en";
      const dict = (window.I18N && window.I18N[lang]) || null;
      const items = dict?.faq?.items || [];
      const q = (searchInput?.value || "").trim().toLowerCase();

      faqList.innerHTML = "";
      items
        .filter(it => activeCat === "all" || it.c === activeCat)
        .filter(it => !q || (it.q + " " + it.a).toLowerCase().includes(q))
        .forEach(it => {
          const d = document.createElement("details");
          d.className = "faq-item";
          d.innerHTML = `
            <summary>${it.q}</summary>
            <div class="ans"><p>${it.a}</p></div>
          `;
          faqList.appendChild(d);
        });

      if (!faqList.children.length) {
        faqList.innerHTML = `<p class="muted" style="padding:24px;text-align:center;">—</p>`;
      }
    }

    catButtons.forEach(b => {
      b.addEventListener("click", () => {
        activeCat = b.getAttribute("data-cat");
        catButtons.forEach(x => x.classList.toggle("active", x === b));
        render();
      });
    });
    searchInput?.addEventListener("input", render);
    document.addEventListener("i18n:changed", render);
    render();
  }

  /* ----------------------- Release notes ---------------------- */
  const releaseList = document.getElementById("release-list");
  if (releaseList) {
    const filterButtons = document.querySelectorAll(".release-filter [data-tag]");
    let activeTag = "all";

    function renderReleases() {
      const lang = document.documentElement.lang || "en";
      const dict = (window.I18N && window.I18N[lang]) || null;
      const items = dict?.releases?.items || [];
      releaseList.innerHTML = "";

      items
        .filter(r => activeTag === "all" || r.tag === activeTag)
        .forEach(r => {
          const el = document.createElement("article");
          el.className = "release";
          el.id = "v" + r.ver.replace(/\./g, "-");
          const tagLabel = dict?.releases?.filters?.[r.tag] || r.tag;
          const groupHtml = r.groups.map(g => `
            <h3>${g.h}</h3>
            <ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
          `).join("");
          el.innerHTML = `
            <div class="release-meta">
              <span class="tag ${r.tag}">${tagLabel}</span>
              <span>${r.date}</span>
              <span>·</span>
              <span>v${r.ver}</span>
            </div>
            <h2>${r.title} <span class="ver">v${r.ver}</span></h2>
            <p class="muted">${r.summary}</p>
            ${groupHtml}
          `;
          releaseList.appendChild(el);
        });

      // Side index
      const sideList = document.getElementById("release-side-list");
      if (sideList) {
        sideList.innerHTML = items.map(r => `
          <li>
            <a href="#v${r.ver.replace(/\./g, "-")}">${r.title}</a>
            <div class="version-tag">v${r.ver} · ${r.date}</div>
          </li>
        `).join("");
      }
    }

    filterButtons.forEach(b => {
      b.addEventListener("click", () => {
        activeTag = b.getAttribute("data-tag");
        filterButtons.forEach(x => x.classList.toggle("active", x === b));
        renderReleases();
      });
    });
    document.addEventListener("i18n:changed", renderReleases);
    renderReleases();
  }

  /* ----------------------- Manual TOC scrollspy ---------------------- */
  const toc = document.querySelector(".toc");
  if (toc) {
    const tocLinks = [...toc.querySelectorAll("a[href^='#']")];
    const sections = tocLinks
      .map(a => document.getElementById(a.getAttribute("href").slice(1)))
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id;
            tocLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
          }
        });
      }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
      sections.forEach(s => io.observe(s));
    }
  }

  /* ----------------------- Hero dashboard ticker ---------------------- */
  const hrEl = document.getElementById("live-hr");
  const brEl = document.getElementById("live-br");
  if (hrEl && brEl) {
    let hr = 68, br = 14;
    setInterval(() => {
      hr = Math.max(58, Math.min(78, hr + Math.round((Math.random() - 0.5) * 3)));
      br = Math.max(10, Math.min(18, br + Math.round((Math.random() - 0.5) * 2)));
      hrEl.textContent = hr;
      brEl.textContent = br;
    }, 1800);
  }
})();
