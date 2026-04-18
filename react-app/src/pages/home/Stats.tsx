import { useI18n } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";

export function Stats() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  const items = [
    { n: t.stats.s1n, l: t.stats.s1l },
    { n: t.stats.s2n, l: t.stats.s2l },
    { n: t.stats.s3n, l: t.stats.s3l },
    { n: t.stats.s4n, l: t.stats.s4l },
  ];

  return (
    <section className="section stats">
      <div ref={ref} className="container reveal">
        <span className="eyebrow">{t.stats.eyebrow}</span>
        <h2>{t.stats.title}</h2>
        <p className="lead">{t.stats.sub}</p>

        <div className="stats-grid">
          {items.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.n}</div>
              <div className="desc">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
