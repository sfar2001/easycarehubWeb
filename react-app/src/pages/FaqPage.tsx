import { useMemo, useState } from "react";
import { useI18n } from "../i18n";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { IconSearch, IconMail, IconPhone, IconClock } from "../components/Icon";
import type { FaqItem } from "../i18n/types";

type Category = "all" | "clinical" | "setup" | "account" | "security";

export function FaqPage() {
  const { t } = useI18n();
  const f = t.faq;
  const [cat, setCat] = useState<Category>("all");
  const [q, setQ] = useState("");

  const visible = useMemo<FaqItem[]>(() => {
    const query = q.trim().toLowerCase();
    return f.items
      .filter((it) => cat === "all" || it.c === cat)
      .filter((it) => !query || (it.q + " " + it.a).toLowerCase().includes(query));
  }, [cat, q, f.items]);

  const cats: { id: Category; label: string }[] = [
    { id: "all",      label: f.categories.all },
    { id: "clinical", label: f.categories.clinical },
    { id: "setup",    label: f.categories.setup },
    { id: "account",  label: f.categories.account },
    { id: "security", label: f.categories.security },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs here={f.breadcrumb} />
          <span className="eyebrow">{f.eyebrow}</span>
          <h1>{f.title}</h1>
          <p className="lead">{f.sub}</p>
        </div>
      </section>

      <div className="container faq-layout">
        <div>
          <div className="faq-search">
            <IconSearch size={18} />
            <input
              type="text"
              placeholder={f.searchPlaceholder}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search FAQ"
            />
          </div>

          <div className="faq-categories" role="tablist">
            {cats.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={cat === c.id}
                className={cat === c.id ? "active" : ""}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div>
            {visible.map((it, i) => (
              <details className="faq-item" key={i}>
                <summary>{it.q}</summary>
                <div className="ans"><p>{it.a}</p></div>
              </details>
            ))}

            {visible.length === 0 && (
              <div className="faq-empty">
                {/* intentionally minimal */}
                —
              </div>
            )}
          </div>
        </div>

        <aside className="faq-side">
          <h3>{f.contactTitle}</h3>
          <p className="muted">{f.contactSub}</p>

          <div className="contact-line">
            <div className="ic"><IconMail size={18} /></div>
            <div>
              <b>{f.emailLabel}</b>
              <a href="mailto:support.digital@hartmann.info">support.digital@hartmann.info</a>
            </div>
          </div>

          <div className="contact-line">
            <div className="ic"><IconPhone size={18} /></div>
            <div>
              <b>{f.phoneLabel}</b>
              <span>+49 711 20944000</span>
            </div>
          </div>

          <div className="contact-line">
            <div className="ic"><IconClock size={18} /></div>
            <div>
              <b>{f.hoursLabel}</b>
              <span>{f.hoursValue}</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
