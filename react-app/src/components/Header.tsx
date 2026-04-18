import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../i18n";
import { useScrolled } from "../hooks/useScrolled";
import { LangSwitch } from "./LangSwitch";

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav">
        <Link to="/" className="brand" onClick={close} aria-label="HARTMANN Easy Care Hub">
          <span className="brand-mark">H</span>
          <span className="brand-text">
            <span>HARTMANN</span>
            <small>Easy Care Hub</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>
          <li><NavLink to="/" end onClick={close}>{t.nav.home}</NavLink></li>
          <li><NavLink to="/manual" onClick={close}>{t.nav.manual}</NavLink></li>
          <li><NavLink to="/faq" onClick={close}>{t.nav.faq}</NavLink></li>
          <li><NavLink to="/releases" onClick={close}>{t.nav.releases}</NavLink></li>
        </ul>

        <div className="nav-actions">
          <LangSwitch />
          <a href="mailto:support.digital@hartmann.info" className="btn btn-primary">
            {t.nav.requestDemo}
          </a>
        </div>
      </div>
    </header>
  );
}
