import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import App from "./App";
import { I18nProvider } from "./i18n";
import { ErrorFallback } from "./components/ErrorFallback";

import "./styles/index.css";
import "./styles/components.css";
import "./styles/pages.css";

// GlitchTip error tracking — runs before React mounts so it can capture
// bootstrap-time exceptions. The DSN is a public identifier (safe to commit).
// GlitchTip doesn't support sessions — the current @sentry/react removed the
// `autoSessionTracking` option (off by default), so we simply don't configure it.
Sentry.init({
  dsn: "https://387905dade1e4df0b5022f9e2b7a3661@app.glitchtip.com/22468",
  tracesSampleRate: 0.01,                       // sample 1 % of transactions
  environment: import.meta.env.MODE,            // "development" | "production"
  sendDefaultPii: false,                        // no IP / cookie capture
});

const container = document.getElementById("root");
if (!container) throw new Error("#root not found");

createRoot(container).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<ErrorFallback />} showDialog={false}>
      <BrowserRouter>
        <I18nProvider>
          <App />
        </I18nProvider>
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </StrictMode>
);
