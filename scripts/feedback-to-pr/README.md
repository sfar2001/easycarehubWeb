# Userback → Claude → Draft PR

An on-demand bot that pulls feedback from Userback, asks Claude to propose a
focused code change, and opens a **draft pull request** for each. The human
merge is the final approval gate — Netlify only redeploys after you merge to
`main`.

## How it runs

Manual trigger only: **GitHub → Actions → Feedback → PR → Run workflow**.
Optional input `limit` caps the number of items processed per run (default 5).

Nothing runs on a timer. If you later want a schedule, add a `schedule:` block
to [`.github/workflows/feedback-to-pr.yml`](../../.github/workflows/feedback-to-pr.yml).

## Requirements

- **Userback Premium account** — the REST API is gated behind Userback's
  Premium tier. Non-Premium accounts authenticate fine but get `403 Forbidden`
  on `/feedback`. See <https://docs.userback.io/reference/authentication>:
  _"Production access requires a Userback Premium account along with access
  to an account with Admin level permissions."_
- **Anthropic API key** — any paid Claude API account.
- **GitHub repo** with Actions enabled (every public repo has this free).

## One-time setup

Add two secrets at **GitHub → Settings → Secrets and variables → Actions**:

| Name                | Where to get it                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| `USERBACK_TOKEN`    | Userback Dashboard → Account → API Tokens (use the same `foPnrQ…57343` you already generated). |
| `ANTHROPIC_API_KEY` | <https://console.anthropic.com/> → API Keys → Create key.                                       |

`GITHUB_TOKEN` is supplied automatically by GitHub — no setup needed.

## What the bot can and cannot do

**Can write** only these paths:

- `index.html`, `manual.html`, `faq.html`, `releases.html`
- `assets/css/**`, `assets/js/**`, `assets/img/**`
- `react-app/src/**`

**Cannot write** anywhere else — including `.github/**`, `scripts/**`,
`netlify.toml`, `package.json`, lockfiles, `tsconfig*`, `vite.config.*`,
`node_modules/`, `dist/`, `downloads/`, `.gitignore`.

## Guardrails

- **Draft PR:** every PR opens in draft state, so Netlify does NOT redeploy
  until you mark ready-for-review + merge.
- **Bounded cost:** one Claude invocation per feedback item, capped at 12
  tool-use turns (typically ≤ 4 in practice). Model: `claude-sonnet-4-6`.
- **State tracking:** [`state.json`](state.json) is committed on `main` with the IDs of
  processed feedback, so re-runs never double-process.
- **Clean main:** the bot resets to `origin/main` between items and deletes
  the working branch if Claude decides no change is warranted.
- **Non-code feedback** ("great site!", "button is weird on my phone with no
  details") → Claude opens no PR and the bot just marks it processed.

## Local dry-run

You can run the bot on your laptop without pushing anything:

```bash
cd scripts/feedback-to-pr
npm install

# provide the secrets in your shell
export USERBACK_TOKEN=...
export ANTHROPIC_API_KEY=...
export REPO=sfar2001/easycarehubWeb

# dry run: applies changes and commits locally on a branch,
# but does NOT push or open a PR
DRY_RUN=1 LIMIT=1 node index.mjs
```

## What to do if something goes wrong

- **"Invalid USERBACK_TOKEN"** — the token isn't the REST API token. Use the one from Userback → Account → API Tokens (not the widget access token).
- **"401 from Anthropic"** — the `ANTHROPIC_API_KEY` is missing or wrong.
- **Claude made a bad change** — just close the draft PR and delete the
  branch. The feedback stays marked as processed in `state.json`, so the bot
  won't try again. If you want it re-tried, remove its ID from `state.json`
  on `main`.
- **Bot crashed halfway** — nothing is committed to `main` until the final
  step, so rerunning is safe. Any feedback that did get a PR will just be
  skipped next time (the PR branch is already there; the `gh pr create` call
  would error — we'll land a belt-and-braces "skip if branch exists" check if
  this ever happens in practice).

## Cost ceiling, roughly

Sonnet 4.6 at typical usage for this bot:
- Input: ~4–8 K tokens per feedback (system + prompt + file reads)
- Output: ~1–4 K tokens (reasoning + writes)
- **Per item:** around **US $0.05 – $0.20** typically. A month of 200 pieces
  of feedback fits comfortably under $20.

Swap `MODEL` in [`claude.mjs`](claude.mjs) to `claude-haiku-4-5-20251001` to cut
cost ~5× for simple feedback, or to `claude-opus-4-7` for trickier cases.
