import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { PDF_FILENAME, PDF_HREF } from "./DownloadCard";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand">
              <span className="brand-mark">H</span>
              <span className="brand-text">
                <span>HARTMANN</span>
                <small>Easy Care Hub</small>
              </span>
            </Link>
            <p className="muted" style={{ maxWidth: "40ch", marginTop: 14 }}>
              {t.footer.tagline}
            </p>
          </div>

          <div className="footer-col">
            <h4>{t.footer.product}</h4>
            <ul>
              <li><Link to="/#features">{t.footer.productLinks[0]}</Link></li>
              <li><Link to="/#how">{t.footer.productLinks[1]}</Link></li>
              <li><Link to="/faq">{t.footer.productLinks[2]}</Link></li>
              <li><Link to="/manual">{t.footer.productLinks[3]}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.resources}</h4>
            <ul>
              <li><Link to="/manual">{t.footer.resourcesLinks[0]}</Link></li>
              <li><a href={PDF_HREF} download={PDF_FILENAME}>{t.download.pdfCta} ↓</a></li>
              <li><Link to="/releases">{t.footer.resourcesLinks[1]}</Link></li>
              <li><Link to="/faq">{t.footer.resourcesLinks[2]}</Link></li>
              <li><a href="mailto:support.digital@hartmann.info">{t.footer.resourcesLinks[3]}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.company}</h4>
            <ul>
              <li><a href="https://www.hartmann.info" target="_blank" rel="noopener noreferrer">{t.footer.companyLinks[0]}</a></li>
              <li><a href="mailto:support.digital@hartmann.info">{t.footer.companyLinks[3]}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
          <span>Paul-Hartmann-Straße 12 · 89522 Heidenheim · Germany · info@hartmann.info</span>
        </div>
      </div>
    </footer>
  );
}
