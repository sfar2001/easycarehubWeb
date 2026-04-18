import { useMemo, useState } from "react";
import { useI18n } from "../i18n";
import { Breadcrumbs } from "../components/Breadcrumbs";
import type { ReleaseItem } from "../i18n/types";

type Tag = "all" | "new" | "improved" | "fixed" | "security";

function slugify(ver: string) { return "v" + ver.replace(/\./g, "-"); }

function ReleaseCard({ r, filters }: { r: ReleaseItem; filters: Record<Tag, string> }) {
  return (
    <article className="release" id={slugify(r.ver)}>
      <div className="release-meta">
        <span className={`tag ${r.tag}`}>{filters[r.tag] ?? r.tag}</span>
        <span>{r.date}</span>
        <span>·</span>
        <span>v{r.ver}</span>
      </div>
      <h2>{r.title} <span className="ver">v{r.ver}</span></h2>
      <p className="muted">{r.summary}</p>
      {r.groups.map((g) => (
        <div key={g.h}>
          <h3>{g.h}</h3>
          <ul>{g.items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
        </div>
      ))}
    </article>
  );
}

export function ReleasesPage() {
  const { t } = useI18n();
  const r = t.releases;
  const [tag, setTag] = useState<Tag>("all");

  const items = useMemo(
    () => (tag === "all" ? r.items : r.items.filter((x) => x.tag === tag)),
    [r.items, tag]
  );

  const tags: { id: Tag; label: string }[] = [
    { id: "all",      label: r.filters.all },
    { id: "new",      label: r.filters.new },
    { id: "improved", label: r.filters.improved },
    { id: "fixed",    label: r.filters.fixed },
    { id: "security", label: r.filters.security },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs here={r.breadcrumb} />
          <span className="eyebrow">{r.eyebrow}</span>
          <h1>{r.title}</h1>
          <p className="lead">{r.sub}</p>
        </div>
      </section>

      <div className="container release-layout">
        <div>
          <div className="release-filter" role="tablist">
            {tags.map((tt) => (
              <button
                key={tt.id}
                type="button"
                role="tab"
                aria-selected={tag === tt.id}
                className={tag === tt.id ? "active" : ""}
                onClick={() => setTag(tt.id)}
              >
                {tt.label}
              </button>
            ))}
          </div>

          <div className="release-timeline">
            {items.map((rel) => (
              <ReleaseCard key={rel.ver} r={rel} filters={r.filters} />
            ))}
          </div>
        </div>

        <aside className="release-side">
          <h3>{r.sideTitle}</h3>
          <p className="muted">{r.sideSub}</p>
          <ul>
            {r.items.map((rel) => (
              <li key={rel.ver}>
                <a href={"#" + slugify(rel.ver)}>{rel.title}</a>
                <span className="version-tag">v{rel.ver} · {rel.date}</span>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:support.digital@hartmann.info?subject=${encodeURIComponent("Subscribe to Easy Care Hub release notes")}`}
            className="btn btn-ghost"
            style={{ marginTop: 18, display: "inline-block" }}
          >
            {r.subscribe}
          </a>
        </aside>
      </div>
    </>
  );
}
