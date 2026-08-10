# Agents

Version-controlled subagent definitions. Kept here so they can be reviewed and
rolled back; the live copies run from `~/.claude/agents/` or `.claude/agents/`.

| Agent | Role | Runs | Writes? |
|---|---|---|---|
| [`account-medic`](account-medic.md) | Weekly creative scorer — classifies live ads into the 15-cell board, computes coverage / concentration / active share / mix, runs the fatigue test, returns ≤5 ordered actions | Mon | **No.** Reads only; writes local report files at most. |
| [`creative-scout`](creative-scout.md) | Angle discovery — mines winning ad content, reviews, support language, creator outtakes, competitors and the product; returns ranked angles with evidence and the cell each fills | Tue | **No.** Proposes only; writes local brief files at most. |
| [`creative-producer`](creative-producer.md) | Batch-produces the AI pillar from approved briefs, reframes to every placement, checks each asset against its brief and flags drift; returns a filed, cell-tagged manifest | Wed | **Assets only.** Generates and files locally. Never publishes, posts, or touches an ad account. |

They chain: the medic says which cells are empty or starving · the scout says
what goes in them, with evidence · a human approves the angles as briefs · the
producer builds them and flags what drifted · a human launches. Give each agent
the previous one's output and the handoffs work without restating context.

The approval gates between them are deliberate. The producer will not invent an
angle to fill a gap in a brief, and no agent in this set launches anything.

## Installing

```bash
mkdir -p ~/.claude/agents && cp agents/*.md ~/.claude/agents/
```

Or `.claude/agents/` in a project to scope it to that repo. Restart the session
so the description is picked up for delegation.

## A note on the write boundaries

Each agent's boundary is enforced **in its prompt**, not through a tool
allowlist. The frontmatter deliberately omits a `tools:` field, because the
connectors they need are MCP servers whose tool names are session-specific — a
hardcoded allowlist would break the agents in any other environment, and a
partial one would silently drop their data sources.

So the guarantees are behavioural, not enforced by the harness. Each is stated as
a hard contract at the top of the prompt and repeated in the rules, which is
strong but not the same as impossible. If you want them enforced, run the agents
in a session whose permission mode requires approval for writes, or add a
`tools:` allowlist once your connector set is stable.

`creative-producer` is worth the most care here, since it's the only one that
makes anything: it can call generation tools and write files, and it is told in
several places that it must never publish, post, or reach an ad account. Verify
that in practice before running it unattended.

Nothing in this set launches an ad. That's deliberate, and it should stay that
way until the medic's classifications and the scout's angles have been trusted
against reality for a few weeks.
