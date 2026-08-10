# Skills

Version-controlled Claude skills for the business. Kept here so they can be
reviewed, diffed and rolled back — the live copies run from `~/.claude/skills/`
or from claude.ai.

| Skill | What it does |
|---|---|
| [`ad-creative-engine`](ad-creative-engine/) | Full-funnel paid-social creative system: the 15-cell creative board, spend-concentration scoring, fatigue detection, creator squad, AI production, weekly flywheel. |

Related:
- [`agents/`](../agents/) — subagents that run parts of these skills on a
  cadence. [`account-medic`](../agents/account-medic.md) is the weekly scorer for
  `ad-creative-engine`.
- [`docs/ad-creative-strategy.md`](../docs/ad-creative-strategy.md) — where this
  skill came from, what was deliberately left out, and how it wires into the rest
  of the skillset and the weekly operating cadence.

## Installing a skill

```bash
cp -r skills/<name> ~/.claude/skills/
```

Or upload the folder as a skill on claude.ai. Restart the session so the
description is picked up for triggering.

## Editing

`SKILL.md` holds the operating instructions and stays short — it is loaded every
time the skill triggers. Detail belongs in `references/*.md`, which are read only
when needed. The `description` in the frontmatter is what decides whether the
skill fires at all, so change it deliberately and re-test triggering afterwards
(the `skill-creator` skill has eval tooling for this).
