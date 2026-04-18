import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n";
import { IconGlobe } from "./Icon";

export function LangSwitch() {
  const { lang, setLang, t, available } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  return (
    <div className="lang-switch" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.lang.switch}
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
      >
        <IconGlobe size={16} />
        <span>{lang.toUpperCase()}</span>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox">
          {available.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={lang === l}
                className={lang === l ? "active" : ""}
                onClick={() => { setLang(l); setOpen(false); }}
              >
                {t.lang[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
