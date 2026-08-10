# Ad Creative Strategy — implementation plan

**Source:** Chase Chappell, *"How to Win with Facebook Ad Creatives in 2027 (DO THIS)"* — 29:37, published 26 June 2026.
**Date reviewed:** 10 August 2026.
**Outcome:** one new skill (`skills/ad-creative-engine/`), plus upgrades to three existing skills, three proposed agents, and a weekly operating cadence.

---

## 1. What the video actually says

Six ideas, in order of how much they're worth to us:

1. **Spend concentration is the real failure mode.** When most of an ad set's budget sits on two or three creatives, the account is one fatigue event away from a collapse — there's nowhere for budget to go. A healthy account shows spend spread across many creatives. This is the diagnostic the whole video is built around, and it's the genuinely useful part.
2. **The 15-ad, one-ad-set ladder.** Fifteen creatives covering the full buyer-awareness range — unaware → problem-aware → solution-aware → product-aware → most-aware — all inside the *same* ad set, so the platform serves the right rung to the right person. Not split by funnel stage into separate campaigns.
3. **The 33% rule.** Roughly a third each of in-house, creator/UGC, and AI-generated creative. Each pillar buys something the others can't: in-house buys trust and control, creators buy authenticity and volume, AI buys speed and cheap discovery.
4. **Variants are not diversity.** Restyling a winner produces more of the same concentration problem. Fifteen *distinct angles* beat fifteen edits of one.
5. **The creator squad as standing capacity.** Recruit creators once, keep them, brief them repeatedly, tell them what's winning, and re-activate them for every launch. Ask for 2–3 videos per sample.
6. **Personification.** At the point where one avatar saturates, expand into new avatars — same product, different problem, different person — rather than making more ads for an exhausted audience.

Plus a bonus that isn't stated but matters: **derive across pillars.** The example given is a creator improvising an ingredient-label comparison the brand had never tried, which then got rebuilt as in-house and AI creative and reportedly moved the account's ROAS substantially. That cross-pillar derivation is the actual flywheel.

**What it doesn't give you:** any measurement. No thresholds, no formulas, no kill/scale rules, no cadence, no cost model, no compliance treatment. The claims (spend volumes, multiples, "the algorithm favours this") are the presenter's own and unverifiable, and the three tools recommended in the description are affiliate links. The structure is sound; the numbers are marketing. I built the measurement layer in `references/metrics-and-decisions.md` and treated the rest as untested claims.

---

## 2. Gap check — what we already had

| Existing skill | Covers | Overlap with this video |
|---|---|---|
| `eca-aeo-audit` | Organic + AI-answer-engine visibility for Shopify stores | **None.** Organic discovery, not paid. |
| `ecommerce-blog-writer` | SEO blog posts and advertorials | **Partial, and only conceptually** — advertorials do awareness-stage work, but there's no funnel ladder, no paid mechanics. |
| `morning` | Daily brief from calendar/email/chat | None. |
| `skill-creator`, `docx`/`pdf`/`pptx`/`xlsx`, `session-start-hook` | Generic tooling | None. |

**Verdict: a real gap.** Our skillset covers *getting found* (AEO audit) and *content* (blog writer) — both organic. There was nothing at all for paid creative, which for most ecommerce brands is the larger spend line and the faster lever. Hence a new skill rather than an extension of an existing one.

It also completes a set. Three free ECA skills that map cleanly onto how a store actually grows:

> **Get found** (AEO Audit) → **Get chosen** (Blog Engine) → **Get scaled** (Ad Creative Engine)

---

## 3. What we adopted, changed, and dropped

### Adopted as-is
- The five awareness stages, all in one ad set.
- The three production pillars and their trade-offs.
- "Distinct angles, not variants."
- Spend concentration as the health metric.
- Specific creator briefs built from proven winners.
- 2–3 videos per sample.
- Cross-pillar derivation as the core loop.

### Adopted with changes
| Video | What we're doing | Why |
|---|---|---|
| "5 TOF / 5 MOF / 5 BOF, 33% per pillar" | A **15-cell grid** — 3 pillars × 5 stages, one angle per cell | Same 15 ads, but the grid makes gaps visible and stops both axes drifting. It's a work queue, not just a target. |
| "Don't turn off underperformers" | **Replace, don't kill.** An ad that's alone in its cell stays until its replacement is ready; a cell with cover follows explicit kill criteria | The principle is right — coverage is the asset — but taken literally it's an instruction to burn money indefinitely. |
| 33/33/33 | A **starting allocation**, reviewed monthly against cost per *usable* asset per pillar | It's a reasonable prior, not a law. Our actual costs should set the split by month three. |
| "Launch AI creatives fast" | Same, plus **review every generated asset against its brief** and a hard line: no synthetic testimonials or fabricated customer experiences | Generator drift is the main reason AI creative underperforms, and fake testimonials are a legal and platform-policy problem, not a style choice. |
| Personification | **Gated behind a saturation trigger** (flat spend + rising frequency + rising CPM + drifting CPA) | Opening three avatars early splits a small budget three ways and teaches you nothing. |

### Dropped
- **100,000 invites / 6,000 creators.** That's an agency operation with dedicated staff. We start at **25–50 creators**, which fills the UGC row several times over, and scale only when creator supply is the binding constraint.
- **The three affiliate tools** (creator marketplace, invite automation, funnel tool). Start with Shopify for samples, Klaviyo/reviews for sourcing, and a free group chat for the community layer. Revisit only if creator ops becomes the bottleneck — and then evaluate on our own numbers.
- **TikTok-source-then-migrate-to-Meta as a requirement.** Kept as an option; it's only worth the operational overhead if we're running TikTok properly.
- **The performance claims** (2–10×, $600M, "the algorithm favours this"). Not repeated in the skill. The skill states mechanisms and asks you to measure.

### Added (not in the video at all)
- Coverage / concentration / active-share / mix formulas with traffic-light thresholds.
- A four-signal fatigue test, and the diagnostic that separates **creative fatigue** (needs more angles) from **audience saturation** (needs a new avatar) — the fixes are opposite and getting it wrong is expensive.
- Explicit kill, scale and refill rules.
- The rule that top-funnel cells are judged on hook rate and blended efficiency, never on their own last-click ROAS. Killing them on ROAS is the most common way this system gets destroyed by the person running it.
- A weekly calendar (~2 hrs/wk) and a weekly scoreboard.
- Cost-per-usable-asset tracking per pillar.
- Compliance guardrails: disclosure, claim substantiation, comparative-advertising accuracy, usage rights, and treating gifted product as a tracked cost.

---

## 4. How it plugs into the skills

### New: `skills/ad-creative-engine/`
```
SKILL.md                          the operating system + decision rules
references/coverage-matrix.md     the 15 cells, formats per stage, fill rules
references/creative-briefs.md     angle sourcing, script skeletons, creator + AI briefs, personification
references/metrics-and-decisions.md  scoring, fatigue, kill/scale rules, weekly loop, audit format
references/creator-squad.md       the 25–50 creator pipeline, costs, non-negotiables
```
Brand-agnostic and connector-optional, matching `ecommerce-blog-writer`. Degrades to planning mode with nothing connected.

**Install:** copy `skills/ad-creative-engine/` into `~/.claude/skills/`, or upload it as a claude.ai skill.

### Upgrades to existing skills

**`ecommerce-blog-writer` — two-way traffic with paid.**
- Feed the awareness ladder into topic selection: unaware-stage articles are the ones that actually rank and get cited, and we're currently choosing topics without that lens.
- Winning ad angles become blog/advertorial topics. A hook that works in 3 seconds works as an H1.
- Blog proof points (research, stats, comparison tables) become Solution-aware ad scripts. The "us vs them" ad and the comparison post are the same argument at two lengths.
- One shared **restricted-claims list** across both, so paid and organic can't contradict each other.

**`eca-aeo-audit` — cross-reference.**
- Add a closing line: which paid angles are earning spend, and whether the store's organic pages answer those same questions. A brand whose ads sell on ingredient transparency and whose PDPs bury the ingredient list is leaking money in both channels.

**`morning` — Monday creative line.**
- One line in the brief on Mondays: `Creative board: coverage 12/15 · concentration 61% (amber) · 4 launched last week`. It's the one number that should surface unprompted, because concentration goes red slowly and then all at once.

**`skill-creator` — evaluate this one.**
- Run description-triggering evals on `ad-creative-engine`. Its trigger surface is wide ("why has our ROAS dropped", "we need more UGC", "find new ad angles") and worth testing against the blog writer so they don't collide.

---

## 5. Proposed agents

Three subagents, each mapping to a stage of the weekly loop. Build order is
read-only first: nothing that can write to an ad account gets built until the
classifications coming out of the scorer have been trusted for a few weeks.

**`account-medic`** — **built**, see `agents/account-medic.md`. The Monday scorer. Classifies every live ad into a cell, produces the board and the three numbers, runs the fatigue test, makes the fatigue-vs-saturation call, and returns at most five ordered actions plus a scoreboard row. Reads only — recommendations go to a human, never to an ad account. Highest value and lowest risk of the three, which is why it went first.

**`creative-scout`** — next. Read-only. Pulls top-performing ad content, review text, support/email language and competitor creative; returns a ranked list of candidate angles, each with its evidence and the cell it fills. Runs Tuesday. Build once the medic's cell classifications have been sanity-checked against reality for a few weeks — the scout inherits them.

**`creative-producer`** — last. Takes approved briefs, batch-generates the AI pillar, reframes to every placement, and returns assets checked against their briefs, flagging drift rather than silently shipping it. Runs Wednesday. The only one that writes anything, and even then only assets — never ad-account changes.

---

## 6. Tooling we already have for this

Worth noting how little needs buying — most of the stack is connected:

| Job | Available now |
|---|---|
| Per-ad spend, hook rate, winner transcripts, demographic splits, competitor creative | Motion |
| Ad platform read + write (Meta, TikTok, Google), plus GA4 and Klaviyo data | Windsor.ai |
| Products, prices, reviews, orders, sample dispatch | Shopify |
| Customer language, segments that reveal real avatars, review mining | Klaviyo |
| AI statics, video, voiceover, batch generation, placement reframing, short-form publishing | AI media generation server |
| Sample COGS and creative spend tracking | Xero |
| Squad comms and brief distribution | Email / chat |

The gap is not tooling. It's the operating cadence — which is what the skill is.

---

## 7. Running it in the business

### First 30 days

**Week 1 — baseline.** Install the skill. Run the audit on the live account. Record coverage, concentration, active share and mix. Do not change anything yet; get the starting reading honestly. Set up the weekly scoreboard.

**Week 2 — fill the ladder.** Write briefs for every empty cell. AI-produce whatever can be produced immediately. Get the in-house founder-story and behind-the-scenes assets shot — they're the slowest in-house items and the highest trust. Target 15/15 coverage by Friday.

**Week 3 — start the squad.** Invite 25–50 creators, weighted toward existing five-star reviewers. Ship samples with a 2–3 video ask and disclosure terms in writing. Set up the group chat. Accept that nothing lands for 1–4 weeks — that's why AI filled the cells in week 2.

**Week 4 — close the loop.** Score again. Derive from whatever's winning into the other two pillars. Send the first *specific* brief with real winners attached. Compare concentration to the week 1 baseline — that delta is the whole return on this exercise.

### Ongoing cadence
Mon score · Tue derive · Wed produce · Thu creators · Fri launch + QA. Around two focused hours a week.
Monthly: pillar cost review, rebalance the split on evidence.
Quarterly: personification review.

### Into the daily-focus app
The weekly loop is exactly the kind of recurring commitment this app exists to hold. Add the five weekly steps as recurring items under a **Creative** business, one per weekday, so the flywheel occupies a known slot rather than competing for attention with whatever's urgent. The Monday scoring step is the one that must never slip — it's the input to everything else.

### Distribution
This is the third free ECA skill and it covers the channel members spend the most on. Two natural follow-ons, both optional and both cheap given the skill exists:
- A YouTube episode built on the board — the coverage/concentration audit is a strong demo because the diagnosis is visual and immediate.
- Position the trio explicitly: *get found → get chosen → get scaled*, with the full toolkit at ecomacademy.co.

---

## 8. Risks

- **The 15-cell board is a hypothesis, not a proven fact.** It comes from one practitioner's video. Treat the week-1 baseline as the control and the concentration delta as the test. If concentration doesn't improve within a month of hitting 15/15, the problem is angle quality, not coverage.
- **Judging top-funnel cells on last-click ROAS will destroy the board.** This is the most likely self-inflicted failure. It's called out in both the skill and the metrics reference for that reason.
- **AI drift.** Unreviewed batch generation produces pretty, generic assets that fill cells on paper and convert nothing. The review-against-brief step is not optional.
- **Creator ops is real work.** Chasing deliverables, filing assets, tracking usage rights. Underestimating it is why most creator programmes produce 30 videos and stop. Start at 25–50 for exactly this reason.
- **Compliance.** Disclosure, claim substantiation and comparative accuracy sit with us, not with the creators or the generator. The restricted-claims list needs writing once and putting in every brief.
