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

| Secret               | Where it comes from                                       |
| -------------------- | --------------------------------------------------------- |
| `TALLY_API_KEY`      | Tally → <https://tally.so/settings/api-keys> → Generate   |
| `ANTHROPIC_API_KEY`  | <https://console.anthropic.com/settings/keys>             |

`GITHUB_TOKEN` is supplied automatically. Form ID `WOp6Qv` is hard-coded
in the workflow env (`TALLY_FORM_ID`).

## Model choice

Default: **`claude-sonnet-4-6`** — finishes complex multi-file edits in
fewer turns so it rarely hits the output-token cap. Override via
**Repository variable** `LLM_MODEL`:

| Model slug                | Per-feedback cost | Notes                                 |
| ------------------------- | ----------------- | ------------------------------------- |
| `claude-haiku-4-5`        | ~$0.01–0.05       | Cheapest, sometimes cut off mid-edit  |
| `claude-sonnet-4-6`       | ~$0.05–0.25       | _default — best balance_              |
| `claude-opus-4-7`         | ~$0.30–1.20       | Overkill for feedback triage          |

Fund your Anthropic account once at
<https://console.anthropic.com/settings/billing> ($5 minimum). For a
typical feedback trickle (10–30/month) that covers several months.

## What the bot can / cannot do

**Writable paths only:**

- `index.html`, `manual.html`, `faq.html`, `releases.html`
- `assets/css/**`, `assets/js/**`, `assets/img/**`
- `react-app/src/**`

**Blocked:** `.github/**`, `scripts/**`, `netlify.toml`, `package.json`,
lockfiles, `tsconfig*`, `vite.config.*`, `node_modules/`, `dist/`,
`downloads/`, `.gitignore`.

## Guardrails

- **Draft PR only** — Netlify does not redeploy until you mark ready and merge.
- **12 tool-use turns** max per submission.
- **Retry on 429/529** up to 5 times with exponential backoff.
- **State tracking** — `state.json` on `main` lists processed submission
  IDs. To re-process one, remove its ID and re-run.
- **Clean main** — the bot resets to `origin/main` between items.

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

`DRY_RUN=1` applies edits locally but skips `git push` and `gh pr create`.
