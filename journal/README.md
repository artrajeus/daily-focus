# Daily work journal

One Markdown file per day, written every evening by a scheduled Claude task and committed to `main` of the PRIVATE repo `artrajeus/daily-journal`. Read it on your phone through the GitHub app or https://github.com/artrajeus/daily-journal/tree/main/journal.

Why private: entries name customers, order values, email subjects and personal finance items. `daily-focus` is public (it has to be, for the free GitHub Pages app), so the journal cannot live there.

## Setting up (once)

1. Create the private repo `artrajeus/daily-journal` on GitHub and enable it for Claude (GitHub app settings).
2. Copy `GOALS.md`, this file as `README.md`, `scripts/board.py` and `scripts/RUNNER-PROMPT.md` into it, plus `journal/2026-10-27.md`.
3. Tell Claude to enable the scheduled task "Daily work journal". It was created disabled so it does not fail every night against a repo that does not exist yet.

## How it works

- **Runner**: a claude.ai scheduled task named "Daily work journal" fires at 20:37 Australia/Adelaide every day in a fresh cloud session. Its prompt is kept in `scripts/RUNNER-PROMPT.md`. Editing that file does not change the task; after editing, ask Claude to update the scheduled task with the new prompt.
- **Sources**: every scheduled task's run result for the day, every Claude Code cloud session you touched, Shopify orders and draft orders, Google Calendar, Google Drive, the Daily Focus board (via `scripts/board.py`), and GitHub pushes.
- **Yardstick**: `GOALS.md`. The Verdict section scores the day against it. Keep that file honest and current, or the scoring is meaningless.
- **Carry-forward**: each entry starts from the previous entry's "Still open" list.

## What it cannot see

- claude.ai chat conversations (the non-code chats). Only Claude Code sessions and scheduled-task runs have readable transcripts. Work you want captured should run in a Claude Code session or be pasted into one.
- Business mailboxes, unless the Gmail connector is authorised as that mailbox.
- Repos that have not been added to the runner's session.
- Anything that only exists on the Mac.

## Why a repo and not the Mac

Four of your Mac-bound scheduled tasks fired four to seven hours late on 27 Oct 2026 because the Mac was offline. A repo is readable from a phone, writable from any cloud session, versioned, and never asleep.
