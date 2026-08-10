# Measurement, Scoring and the Weekly Loop

The video this system is adapted from is strong on structure and silent on measurement. This file is the missing half: how to tell whether the board is working, and what to do on each reading.

---

## Classifying live ads into cells

Before you can score anything, every live ad needs a cell.

**Pillar** — from the source: made by your team (in-house), made by a creator (UGC), generated (AI). If an asset is a creator video re-cut in-house, classify it by who supplied the *idea and the face*: creator.

**Stage** — from what the ad asks the viewer to do:

| The ad mostly… | Stage |
|---|---|
| names a problem they haven't named | Unaware |
| shows the gap between now and better | Problem-aware |
| positions your product against alternatives / proves it | Solution-aware |
| removes a purchase objection or pushes an offer | Product-aware |
| just says buy | Most-aware |

Classify by content, not campaign name. Accounts are full of ads sitting in a "TOF" campaign doing bottom-funnel work.

Where creative analytics gives you ad transcripts, read them — it's faster and more accurate than guessing from thumbnails.

---

## The three numbers

### 1. Coverage
```
coverage = cells with ≥1 live ad / 15
```
**15/15 green · 11–14 amber · ≤10 red.**

Coverage is the leading indicator. It moves before performance does, in both directions.

### 2. Concentration
```
concentration = spend of top 3 ads (7d) / total ad-set spend (7d)
```
**<45% green · 45–65% amber · >65% red.**

This is the number the source video describes as "how you know you did it right" — level spend across creatives. A second, useful cut:
```
active share = ads with ≥1% of spend / live ads
```
Target **≥70%**. If you have 15 live ads and 4 are getting real money, the other 11 are decoration and coverage is lying to you.

### 3. Mix
```
mix = spend by pillar / total spend
```
Target 33/33/33, tolerance ±10 points. Track both **asset mix** (what you made) and **spend mix** (what the algorithm chose). A gap between them is information: if AI is 40% of assets and 12% of spend, AI is producing volume, not value — rebalance the effort.

---

## Fatigue detection

Fatigue is a supply problem showing up as a performance problem. Watch four signals together — one alone means nothing:

| Signal | Fatigue reading |
|---|---|
| 7-day CPA vs 28-day CPA | 7d ≥ 1.25× 28d |
| Hook rate (3s views / impressions) | falling week on week on the top-spending ads |
| Frequency | climbing while reach is flat |
| Concentration | red, and getting worse |

**All four = the board is thin.** Refill cells; don't touch targeting.
**Rising frequency + rising CPM + flat spend, but hook rate holding = audience saturation, not creative fatigue.** That's the personification trigger.

Distinguishing these two is the most valuable diagnostic in the whole system, because the fixes are opposite: one needs more angles for the same person, the other needs the same angles for a new person.

---

## Decision rules

**Replace, don't kill.**
An underperforming ad that is the only occupant of its cell stays live until its replacement is ready. Coverage is the asset; individual ads are consumable.

**Kill criteria — all three:**
1. ≥2 live ads in the cell
2. spend ≥ 3× target CPA
3. CPA ≥ 2× target (or ROAS ≤ 0.5× target)

**Scaling:**
- Concentration green + 7-day efficiency at or above target → +20% budget every 3 days.
- Concentration amber → hold budget, fill cells.
- Concentration red → do not scale. Adding budget to a concentrated account accelerates the fatigue cliff.

**Refill cadence:**
- Weekly: replace the bottom-contributing 2–3 cells with fresh angles.
- Never let a cell sit empty more than 7 days.
- Every new creative must be a new *angle*, unless you're deliberately hook-testing inside a proven cell.

**Judging top-funnel ads:**
Unaware and Problem-aware cells will show poor last-click ROAS almost always. Judge them on hook rate, hold, and the ad set's blended efficiency — not on their own attributed return. Killing them on ROAS is the fastest way to collapse a working board, and it's the most common self-inflicted wound in this system.

---

## The weekly loop

The flywheel, as a calendar. Roughly two focused hours a week once it's running.

**Monday — Score.**
Pull last 7 days of spend by ad. Classify into cells. Produce the board and the three numbers. Note which cells earned and which starved. *Output: the board + one call for the week.*

**Tuesday — Derive.**
Read the top 3 ads' actual content. Extract the working claim from each. Write 3 new briefs that carry those claims into the *other two pillars* and adjacent cells. Add anything new from reviews, support and creator outtakes. *Output: 3 briefs.*

**Wednesday — Produce (AI).**
Batch-generate everything that fills an empty cell. Review each against its brief. Reframe to all placements. *Output: assets, cells filled.*

**Thursday — Creators.**
Send specific briefs with this week's winners attached. Dispatch samples to new creators. Chase overdue deliverables. *Output: briefs out, samples out.*

**Friday — Launch and QA.**
Push new ads into the one ad set. Check: no duplicate angles, coverage restored, disclosures present, claims approved. Apply budget moves. *Output: board full, decisions logged.*

**Monthly:** review pillar mix vs pillar cost. Are creators actually cheaper per usable asset than AI, once samples, shipping and chasing are counted? Rebalance the 33/33/33 on evidence.

**Quarterly:** personification review. Any avatar plateaued? Any new avatar validated and ready for its own board?

---

## The scoreboard to keep

One row per week. This is what makes the system improvable rather than merely busy.

| Week | Coverage | Concentration | Active share | Mix (IH/UGC/AI) | Spend | ROAS | Launched | Fatigue flags |
|---|---|---|---|---|---|---|---|---|

Four weeks of this tells you more than any single-day dashboard, because every rule above is about a *trend*, not a reading.

---

## Audit output format

When auditing an existing account, report in this order and stop there:

1. **Board** — the 15-cell grid with occupants and spend share.
2. **Three numbers** with traffic lights.
3. **The single biggest problem**, in one sentence. Usually concentration.
4. **This week's actions** — at most five, ordered, each one an owner-sized job.
5. **The metric to watch** to know whether it worked.

No raw exports. No 40-row tables. The owner needs a decision, not a dataset.
