import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Userback from "@userback/widget";
import App from "./App";
import { I18nProvider } from "./i18n";

import "./styles/index.css";
import "./styles/components.css";
import "./styles/pages.css";

const USERBACK_TOKEN = "foPnrQ5Yszn9sXCf5Pn2faxhg3p9Np57343";

const container = document.getElementById("root");
if (!container) throw new Error("#root not found");

// Kick off the Userback widget in parallel with the React mount — we don't
// block rendering on it, so a slow feedback service never delays first paint.
Userback(USERBACK_TOKEN).catch((err) => {
  console.warn("[userback] failed to initialise", err);
});

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>
);
