/**
 * Floating "Feedback" button. On click, lazily loads Tally's embed
 * script and opens the EasyCareHub feedback form in a modal overlay.
 * The current page URL is passed as a hidden field so we know which
 * page a report came from.
 *
 * Form ID: https://tally.so/r/WOp6Qv  (change TALLY_FORM_ID to swap.)
 */
import { useCallback } from "react";
import { useI18n } from "../i18n";

const TALLY_FORM_ID = "WOp6Qv";
const TALLY_EMBED_SRC = "https://tally.so/widgets/embed.js";

interface TallyPopupOptions {
  layout?: "modal" | "slideLeft" | "slideRight";
  width?: number;
  hiddenFields?: Record<string, string | number>;
  autoClose?: number;
  onOpen?: () => void;
  onClose?: () => void;
  onSubmit?: (payload: unknown) => void;
}
interface TallyGlobal {
  openPopup: (formId: string, options?: TallyPopupOptions) => void;
  closePopup?: (formId: string) => void;
}
declare global {
  interface Window { Tally?: TallyGlobal }
}

let scriptPromise: Promise<void> | null = null;

function loadTally(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Tally) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TALLY_EMBED_SRC}"]`);
    const script = existing ?? document.createElement("script");

    const onReady = () => {
      // Tally sets window.Tally shortly after the script's load event.
      const started = Date.now();
      const tick = () => {
        if (window.Tally) return resolve();
        if (Date.now() - started > 5000) return reject(new Error("Tally did not initialise"));
        setTimeout(tick, 40);
      };
      tick();
    };

    if (existing) {
      // A previous caller is already waiting — piggy-back.
      onReady();
      return;
    }

    script.src = TALLY_EMBED_SRC;
    script.async = true;
    script.onload = onReady;
    script.onerror = () => reject(new Error("Failed to load Tally embed script"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export function FeedbackWidget() {
  const { t } = useI18n();

  const open = useCallback(async () => {
    try {
      await loadTally();
      window.Tally?.openPopup(TALLY_FORM_ID, {
        layout: "modal",
        width: 480,
        hiddenFields: { pageUrl: window.location.href },
      });
    } catch (err) {
      console.warn("[feedback]", err);
    }
  }, []);

  return (
    <button
      type="button"
      className="feedback-fab"
      onClick={open}
      title={t.feedback.buttonTitle}
      aria-label={t.feedback.buttonTitle}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round"
           strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span>{t.feedback.button}</span>
    </button>
  );
}
