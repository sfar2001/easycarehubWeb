import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";
import { IconArrow, IconDownload } from "../../components/Icon";
import { PDF_FILENAME, PDF_HREF } from "../../components/DownloadCard";

export function CtaBand() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="cta-band" id="contact">
      <div className="container">
        <div ref={ref} className="cta-wrap reveal">
          <div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.sub}</p>
          </div>
          <div className="actions">
            <a href="mailto:support.digital@hartmann.info" className="btn btn-light">
              {t.cta.primary} <IconArrow size={16} />
            </a>
            <Link to="/manual" className="btn btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,.35)" }}>
              {t.cta.secondary}
            </Link>
            <a href={PDF_HREF} download={PDF_FILENAME} className="btn btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,.35)", background: "transparent" }}>
              <IconDownload size={16} /> {t.download.pdfCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
