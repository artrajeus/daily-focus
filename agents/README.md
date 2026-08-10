# Agents

Version-controlled subagent definitions. Kept here so they can be reviewed and
rolled back; the live copies run from `~/.claude/agents/` or `.claude/agents/`.

| Agent | Role | Runs | Writes? |
|---|---|---|---|
| [`account-medic`](account-medic.md) | Weekly creative scorer — classifies live ads into the 15-cell board, computes coverage / concentration / active share / mix, runs the fatigue test, returns ≤5 ordered actions | Mon | **No.** Reads only; writes local report files at most. |
| [`creative-scout`](creative-scout.md) | Angle discovery — mines winning ad content, reviews, support language, creator outtakes, competitors and the product; returns ranked angles with evidence and the cell each fills | Tue | **No.** Proposes only; writes local brief files at most. |

The two feed each other: the medic says which cells are empty or starving, the
scout says what goes in them. Give the scout the medic's latest report and it
prioritises by gap and checks its candidates against what's already running.

Planned — see [`docs/ad-creative-strategy.md`](../docs/ad-creative-strategy.md) § 5:

- **`creative-producer`** (Wed) — batch AI asset production from approved briefs, checked against the brief for drift. Writes assets; still never touches an ad account.

## Installing

```bash
mkdir -p ~/.claude/agents && cp agents/*.md ~/.claude/agents/
```

Or `.claude/agents/` in a project to scope it to that repo. Restart the session
so the description is picked up for delegation.

## A note on the read-only guarantee

Both agents enforce read-only **in their prompts**, not through a tool
allowlist. The frontmatter deliberately omits a `tools:` field, because the
connectors they need are MCP servers whose tool names are session-specific — a
hardcoded allowlist would break the agents in any other environment, and a
partial one would silently drop their data sources.

That means the guarantee is behavioural, not enforced by the harness. It is
stated as a hard contract at the top of the prompt and repeated in the rules,
which is strong but not the same as impossible. If you want it enforced, run the
agent in a session whose permission mode requires approval for writes, or add a
`tools:` allowlist once your connector set is stable.

The three agents are ordered read-only-first for the same reason: nothing that
can write to an ad account gets built at all, and `creative-producer` — the only
one that writes anything — waits until the medic's classifications and the
scout's angles have been trusted against reality for a few weeks.
