# easycarehubWeb

Marketing website and user-manual portal for **HARTMANN Easy Care Hub** — a
clinical visualisation platform for care homes that brings heart rate, breathing
rate and bed-activity insights into one dashboard.

Repository contains two parallel deliverables:

1. **Static HTML site** (zero build, deploy-anywhere) at the root
2. **React + TypeScript app** (Vite) in `react-app/` for production deployment

Both consume the same content, theme and translations (EN / DE / FR). A
typeset PDF user manual is generated from the same content model.

---

## Repo layout

```
.
├── index.html                 # Static landing page
├── manual.html                # Static user manual
├── faq.html                   # Static FAQ
├── releases.html              # Static release notes (blog style)
├── assets/
│   ├── css/style.css          # Hartmann-branded stylesheet
│   └── js/
│       ├── i18n.js            # Vanilla i18n engine (EN/DE/FR)
│       └── main.js            # FAQ/releases/TOC/live ticker
├── downloads/
│   └── HARTMANN_EasyCareHub_Manual_v1.4_EN.pdf
├── react-app/                 # Production React 18 + TS + Vite app
│   ├── src/
│   │   ├── i18n/              # Typed translation dictionaries + Context
│   │   ├── components/        # Header, Footer, LangSwitch, Icons, etc.
│   │   ├── hooks/             # useReveal, useActiveSection, useScrolled
│   │   ├── pages/             # HomePage (split into sections), Manual, FAQ, Releases
│   │   └── styles/            # Design tokens, components, pages
│   ├── public/downloads/      # PDF served at /downloads/…
│   └── package.json
└── scripts/                   # PDFKit generator for the user-manual PDF
    ├── generate-manual-pdf.mjs
    └── package.json
```

## Running

### Static site
Serve the root directory with any static server:

```bash
npx http-server . -p 5500
# or: python -m http.server 5500
```

Open <http://localhost:5500>.

### React app
```bash
cd react-app
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to react-app/dist/
npm run preview   # preview the production build
```

### Regenerating the PDF user manual
The PDF is generated from a structured content model — no manual layout work.

```bash
cd scripts
npm install
node generate-manual-pdf.mjs
```

Output is written to:

- `downloads/HARTMANN_EasyCareHub_Manual_v1.4_EN.pdf`
- `react-app/public/downloads/HARTMANN_EasyCareHub_Manual_v1.4_EN.pdf`

Both sites link to this file from the Home CTA, the manual page and the
footer Resources column.

## Stack

- **Static site** — vanilla HTML / CSS / JS, no build tools
- **React app** — Vite 5, React 18, TypeScript strict, React Router v6
- **PDF** — PDFKit (no headless browser required)
- **Languages** — English, Deutsch, Français (persisted per user via `localStorage`)
- **Design** — Hartmann red `#E1001A` accent over deep clinical teal `#0B3D2E`

## Error tracking — GlitchTip

The React app reports unhandled exceptions to GlitchTip (self-hosted,
Sentry-compatible) via `@sentry/react`. Initialised in
[react-app/src/main.tsx](react-app/src/main.tsx) before the React tree mounts.

- The whole app is wrapped in `<Sentry.ErrorBoundary>` with a custom
  [ErrorFallback](react-app/src/components/ErrorFallback.tsx) that lets users
  reload or contact support. Errors in the fallback subtree are automatically
  captured and sent to GlitchTip.
- `tracesSampleRate: 0.01` (1 % of transactions) — adjust in `main.tsx`.
- `environment` is taken from Vite's `import.meta.env.MODE`, so dev vs prod
  events are separated in the GlitchTip dashboard.
- The DSN is a public identifier (safe to commit); no secret is required.

## Notes

- The *Easy Care Hub* platform itself is not a medical device under EU MDR
  2017/745. Underlying radar hardware (Sleepiz) and notification engine
  (ACTIMI Signals) are regulated medical devices — see the manual for details.
- This repository is a front-end and documentation deliverable; no clinical
  data flows through it.
