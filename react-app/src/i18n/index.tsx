import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang, Translations } from "./types";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";

const DICTS: Record<Lang, Translations> = { en, de, fr };
const STORAGE_KEY = "ech.lang";

interface I18nContextValue {
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
  available: Lang[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && DICTS[saved]) return saved;
  } catch { /* ignore */ }
  const nav = (typeof navigator !== "undefined" ? navigator.language : "en").slice(0, 2).toLowerCase();
  return (nav in DICTS ? nav : "en") as Lang;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  };

  useEffect(() => {
    const dict = DICTS[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = dict.meta.dir;
    document.title = dict.meta.siteTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict.meta.siteDescription);
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => ({
    lang,
    t: DICTS[lang],
    setLang,
    available: ["en", "de", "fr"],
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function useT(): Translations {
  return useI18n().t;
}
