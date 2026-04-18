import { useI18n } from "../../i18n";

const LOGOS = ["PAUL HARTMANN AG", "Sleepiz AG", "ACTIMI GmbH", "EU MDR 2017/745"];

export function TrustBar() {
  const { t } = useI18n();
  return (
    <section className="trust">
      <div className="container trust-wrap">
        <div className="trust-label">{t.trust.label}</div>
        <div className="trust-logos">
          {LOGOS.map((l) => (
            <span key={l} className="logo-pill">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
