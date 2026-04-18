import { useI18n } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";

export function HowItWorks() {
  const { t } = useI18n();
  const left  = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();

  const steps = [
    { t: t.how.s1t, b: t.how.s1b },
    { t: t.how.s2t, b: t.how.s2b },
    { t: t.how.s3t, b: t.how.s3b },
    { t: t.how.s4t, b: t.how.s4b },
  ];

  return (
    <section className="section" id="how" style={{ background: "var(--paper)" }}>
      <div className="container split">
        <div ref={left} className="reveal">
          <span className="eyebrow">{t.how.eyebrow}</span>
          <h2>{t.how.title}</h2>
          <p className="lead">{t.how.sub}</p>

          <ol className="step-list">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="num">{i + 1}</span>
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div ref={right} className="reveal mock-panel" style={{ transitionDelay: "120ms" }}>
          <div className="head">
            <strong>{t.how.mockTitle}</strong>
            <span className="pill live">LIVE</span>
          </div>
          <div className="row">
            <span className="label">{t.how.mockHR}</span>
            <span className="val">72 <small className="muted">bpm</small></span>
          </div>
          <div className="row">
            <span className="label">{t.how.mockBR}</span>
            <span className="val">15 <small className="muted">brpm</small></span>
          </div>
          <div className="row">
            <span className="label">{t.how.mockBed}</span>
            <span className="pill ok">{t.hero.statusOk}</span>
          </div>
          <div className="row">
            <span className="label">{t.how.mockLast}</span>
            <span className="val">84 / 100</span>
          </div>
          <div className="row">
            <span className="label">{t.how.mockZone}</span>
            <span className="val">{t.how.mockZoneVal}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
