import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export function NotFoundPage() {
  const { t } = useI18n();
  return (
    <div className="notfound">
      <div>
        <div className="code">404</div>
        <h1>—</h1>
        <p className="lead">{t.nav.home}</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 18 }}>
          {t.nav.home}
        </Link>
      </div>
    </div>
  );
}
