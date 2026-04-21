# Tally → LLM → Draft PR

Manual-trigger bot that pulls feedback from the EasyCareHub Tally form,
asks a language model to propose a focused code change, and opens a
**draft** pull request for each. Merging the PR is your approval gate —
Netlify only redeploys after you merge.

## How it runs

**Actions → Feedback → PR → Run workflow.** Optional `limit` input caps
items per run (default 5). No schedule — runs only when you click.

## Secrets required

At **GitHub → Settings → Secrets and variables → Actions**:

| Secret               | Where it comes from                                      |
| -------------------- | -------------------------------------------------------- |
| `TALLY_API_KEY`      | Tally → <https://tally.so/settings/api-keys> → Generate  |
| `OPENROUTER_API_KEY` | <https://openrouter.ai/keys> (default LLM provider)      |
| `OPENAI_API_KEY`     | Optional — only needed if you switch to OpenAI direct    |

`GITHUB_TOKEN` is supplied automatically. Form ID `WOp6Qv` is hard-coded
in the workflow env (`TALLY_FORM_ID`).

## Picking an LLM

The bot uses the **OpenAI chat-completions API format** and defaults to
**OpenRouter** with model `anthropic/claude-sonnet-4.5`. That works out
of the box once you add `OPENROUTER_API_KEY`.

To switch model or provider without touching code, set these as
**Repository variables** (same Secrets page → Variables tab):

| Variable          | Default (blank = use default)        | Examples |
| ----------------- | ------------------------------------ | -------- |
| `LLM_MODEL`       | `anthropic/claude-sonnet-4.5`        | `nousresearch/hermes-3-llama-3.1-405b:free` · `openai/gpt-5-mini` · `anthropic/claude-haiku-4-5` |
| `LLM_BASE_URL`    | `https://openrouter.ai/api/v1`       | `https://api.openai.com/v1` for OpenAI direct |
| `LLM_API_KEY_ENV` | `OPENROUTER_API_KEY`                 | `OPENAI_API_KEY` if using OpenAI direct |

### Cost vs reliability cheat sheet

| Model slug on OpenRouter                          | Approx cost per feedback | Tool-use reliability |
| ------------------------------------------------- | ------------------------ | -------------------- |
| `nousresearch/hermes-3-llama-3.1-405b:free`       | **$0**                   | ~70–85 % (free tier has rate limits) |
| `anthropic/claude-haiku-4-5`                      | ~$0.01–0.05              | ~95 %                |
| `anthropic/claude-sonnet-4.5` _(default)_         | ~$0.05–0.20              | ~97 %                |
| `openai/gpt-5-mini`                               | ~$0.02–0.08              | ~95 %                |

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
- **State tracking** — `state.json` on `main` lists processed submission
  IDs. To re-process one, remove its ID and re-run.
- **Clean main** — the bot resets to `origin/main` between items.

## Local dry-run

```bash
cd scripts/feedback-to-pr
npm install
export TALLY_API_KEY=...
export OPENROUTER_API_KEY=...
export TALLY_FORM_ID=WOp6Qv
export REPO=sfar2001/easycarehubWeb
DRY_RUN=1 LIMIT=1 node index.mjs
```

`DRY_RUN=1` applies edits locally but skips `git push` and `gh pr create`.
