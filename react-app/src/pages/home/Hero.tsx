import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";
import { IconArrow } from "../../components/Icon";

export function Hero() {
  const { t } = useI18n();
  const [hr, setHr] = useState(68);
  const [br, setBr] = useState(14);

  useEffect(() => {
    const id = window.setInterval(() => {
      setHr((v) => Math.max(58, Math.min(78, v + Math.round((Math.random() - 0.5) * 3))));
      setBr((v) => Math.max(10, Math.min(18, v + Math.round((Math.random() - 0.5) * 2))));
    }, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>
            {t.hero.title1}
            <br />
            <span className="accent">{t.hero.title2}</span>
          </h1>
          <p className="lead">{t.hero.sub}</p>

          <div className="hero-cta">
            <a href="mailto:support.digital@hartmann.info" className="btn btn-primary">
              {t.hero.ctaPrimary} <IconArrow size={16} />
            </a>
            <Link to="/manual" className="btn btn-secondary">{t.hero.ctaSecondary}</Link>
          </div>

          <div className="hero-meta">
            <span><span className="dot" />{t.hero.meta1}</span>
            <span><span className="dot" />{t.hero.meta2}</span>
            <span><span className="dot" />{t.hero.meta3}</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="dash-head">
            <div>
              <div className="label">{t.hero.dashTitle}</div>
              <div className="sub">{t.hero.dashSubtitle}</div>
            </div>
            <div className="badge">EC</div>
          </div>

          <div className="dash-card">
            <div className="row">
              <h4>{t.hero.hrLabel}</h4>
              <span className="status ok">{t.hero.statusOk}</span>
            </div>
            <div>
              <span className="value"><span className="live-dot" />{hr}</span>
              <span className="unit">bpm</span>
            </div>
            <svg className="waveline" viewBox="0 0 320 40" preserveAspectRatio="none">
              <path d="M0 22 L40 22 L48 8 L56 36 L64 22 L120 22 L128 12 L136 30 L144 22 L220 22 L228 6 L236 36 L244 22 L320 22" />
            </svg>
          </div>

          <div className="dash-card">
            <div className="row">
              <h4>{t.hero.brLabel}</h4>
              <span className="status ok">—</span>
            </div>
            <div>
              <span className="value"><span className="live-dot" />{br}</span>
              <span className="unit">brpm</span>
            </div>
            <svg className="waveline br" viewBox="0 0 320 40" preserveAspectRatio="none">
              <path d="M0 22 Q30 4 60 22 T120 22 T180 22 T240 22 T300 22" />
            </svg>
          </div>

          <div className="dash-card">
            <div className="row">
              <h4>{t.hero.bedLabel}</h4>
              <span className="status warn">{t.hero.statusWarn}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
