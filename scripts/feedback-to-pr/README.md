# Tally → Claude → Draft PR

Manual-trigger bot that pulls feedback from the EasyCareHub Tally form,
asks Claude to propose a focused code change, and opens a **draft** pull
request for each. Merging the PR is your approval gate — Netlify only
redeploys after you merge.

## How it runs

**Actions → Feedback → PR → Run workflow.** Optional `limit` input caps
items per run (default 5). No schedule — runs only when you click.

## Secrets required

At **GitHub → Settings → Secrets and variables → Actions**:

| Secret               | Where it comes from                                      |
| -------------------- | -------------------------------------------------------- |
| `TALLY_API_KEY`      | Tally → <https://tally.so/settings/api-keys> → Generate  |
| `ANTHROPIC_API_KEY`  | <https://console.anthropic.com/> (default LLM provider)  |
| `OPENROUTER_API_KEY` | Optional — <https://openrouter.ai/keys>                  |

`GITHUB_TOKEN` is supplied automatically. Form ID `WOp6Qv` is hard-coded
in the workflow env (`TALLY_FORM_ID`) — change there if you ever swap forms.

## Picking an LLM (free vs paid)

The bot uses **Claude Sonnet 4.6** by default. To use a different provider
or a free model (e.g. Hermes 3 405B on OpenRouter), set these as **Repository
variables** (Settings → Secrets and variables → Actions → Variables tab):

| Variable          | Value for default Claude        | Value for OpenRouter free Hermes                           |
| ----------------- | ------------------------------- | ---------------------------------------------------------- |
| `LLM_BASE_URL`    | _(leave blank)_                 | `https://openrouter.ai/api` _(no `/v1` — SDK adds it)_     |
| `LLM_MODEL`       | _(leave blank → sonnet-4-6)_    | `nousresearch/hermes-3-llama-3.1-405b:free`                |
| `LLM_API_KEY_ENV` | _(leave blank → ANTHROPIC)_     | `OPENROUTER_API_KEY`                                       |

OpenRouter's Anthropic-compatible endpoint means no code changes — just
these three variables. Some OpenRouter models speak tool-use less reliably
than Claude native, so if Hermes misbehaves, try a paid OpenRouter model
like `anthropic/claude-haiku-4-5` for ~⅓ the Anthropic-direct price.

## What Claude can / cannot do

**Writable paths only:**

- `index.html`, `manual.html`, `faq.html`, `releases.html`
- `assets/css/**`, `assets/js/**`, `assets/img/**`
- `react-app/src/**`

**Blocked:** `.github/**`, `scripts/**`, `netlify.toml`, `package.json`,
lockfiles, `tsconfig*`, `vite.config.*`, `node_modules/`, `dist/`,
`downloads/`, `.gitignore`.

## Guardrails

- **Draft PR only** — Netlify does not redeploy until you mark ready
  and merge.
- **12 tool-use turns** max per submission; model is `claude-sonnet-4-6`.
- **State tracking** — `state.json` on `main` lists processed submission
  IDs, so re-runs never double-process. To re-process one, remove its
  ID from `state.json` and re-run.
- **Clean main** — the bot resets to `origin/main` between items and
  deletes the working branch when Claude decides no change is warranted.

## Local dry-run

```bash
cd scripts/feedback-to-pr
npm install
export TALLY_API_KEY=...
export ANTHROPIC_API_KEY=...
export TALLY_FORM_ID=WOp6Qv
export REPO=sfar2001/easycarehubWeb
DRY_RUN=1 LIMIT=1 node index.mjs
```

`DRY_RUN=1` applies Claude's edits locally but skips `git push` and
`gh pr create`.

## Cost

Sonnet 4.6, per submission: input ~4–8 K tokens, output ~1–4 K →
**~US $0.05 – $0.20** typically. A month of 200 submissions fits under $20.

Swap `MODEL` in [claude.mjs](claude.mjs):
- `claude-haiku-4-5-20251001` — ~5× cheaper, simpler fixes only
- `claude-opus-4-7` — pricier, trickier reasoning
