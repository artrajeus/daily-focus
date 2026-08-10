# Agents

Version-controlled subagent definitions. Kept here so they can be reviewed and
rolled back; the live copies run from `~/.claude/agents/` or `.claude/agents/`.

| Agent | Role | Writes? |
|---|---|---|
| [`account-medic`](account-medic.md) | Weekly creative scorer for a paid-social ad account — classifies live ads into the 15-cell board, computes coverage / concentration / active share / mix, runs the fatigue test, returns ≤5 ordered actions | **No.** Reads only; writes local report files at most. |

Planned, in build order — see [`docs/ad-creative-strategy.md`](../docs/ad-creative-strategy.md) § 5:

- **`creative-scout`** — read-only angle discovery from winning ad content, reviews, support language and competitor creative.
- **`creative-producer`** — batch AI asset production from approved briefs. Writes assets; still never touches an ad account.

## Installing

```bash
mkdir -p ~/.claude/agents && cp agents/account-medic.md ~/.claude/agents/
```

Or `.claude/agents/` in a project to scope it to that repo. Restart the session
so the description is picked up for delegation.

## A note on the read-only guarantee

`account-medic` enforces read-only **in its prompt**, not through a tool
allowlist. The frontmatter deliberately omits a `tools:` field, because the
connectors it needs are MCP servers whose tool names are session-specific — a
hardcoded allowlist would break the agent in any other environment, and a
partial one would silently drop its data sources.

That means the guarantee is behavioural, not enforced by the harness. It is
stated as a hard contract at the top of the prompt and repeated in the rules,
which is strong but not the same as impossible. If you want it enforced, run the
agent in a session whose permission mode requires approval for writes, or add a
`tools:` allowlist once your connector set is stable.

The two planned agents are ordered read-only-first for the same reason: nothing
that can write to an ad account gets built until the classifications coming out
of `account-medic` have been trusted for a few weeks.
