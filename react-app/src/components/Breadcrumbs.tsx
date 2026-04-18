import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export function Breadcrumbs({ here }: { here: string }) {
  const { t } = useI18n();
  return (
    <div className="breadcrumbs">
      <Link to="/">{t.nav.home}</Link>
      <span className="sep">·</span>
      <span>{here}</span>
    </div>
  );
}
