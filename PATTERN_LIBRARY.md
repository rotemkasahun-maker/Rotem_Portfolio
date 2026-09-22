# ROTKA Pattern Library v1.1

This is a living library.

Statuses:
- APPROVED
- CANDIDATE
- RETIRED

Only patterns that passed visual QA and explicit approval should be APPROVED.

---

## P01 — Single primary reference per design problem
**Status:** APPROVED WORKFLOW

Use one primary structural reference per section/beat.

Multiple references may coexist across a page, but each section must have a clearly assigned primary reference.

Do not average many references into generic minimalism.

---

## P02 — Homepage as publication cover / index
**Status:** APPROVED

Homepage behaves like a publication cover/poster + project index.

Key behavior:
- dominant object
- aggressive crop
- warm canvas
- large condensed type
- small metadata
- thin rules
- strong large/small contrast

---

## P03 — Object-first composition
**Status:** APPROVED

A meaningful object may carry the story before explanatory interface appears.

Use oversized scale/crop only when narratively appropriate.

---

## P04 — Story first, metadata second
**Status:** APPROVED

Open with the human/problem story rather than a standard metadata slab.

---

## P05 — Evidence at point of need
**Status:** APPROVED

Reveal proof when needed.

Do not front-load all evidence.

---

## P06 — Real evidence retains identity
**Status:** APPROVED

Receipts look like receipts.
Messages retain platform conventions.
Product UI stays real.

Do not brand-wrap evidence into generic portfolio cards.

---

## P07 — Product UI as evidence
**Status:** APPROVED

Use real UI faithfully.
Crop when a detail is stronger than a full screen.
Use neutral device framing only when necessary.

---

## P08 — Project-specific silhouettes
**Status:** APPROVED

Shared system does not mean identical layouts across projects.

---

## P09 — Compact editorial grouping
**Status:** APPROVED

Logical beats may group into compact compositions.
Do not turn every beat into a huge standalone section.

---

## P10 — Process strip
**Status:** APPROVED WHEN FLOW IS THE CONTENT

Use a compact sequence when the flow itself is the evidence.

Do not default to step cards.

---

## P11 — Screenshot visual QA before lock
**Status:** APPROVED WORKFLOW

Never PASS on spec compliance alone.
Render and inspect.

---

## P12 — Narrow patch after approval
**Status:** HARD RULE

Approved screens are design commits.
Change only what was requested.

---

## P13 — Mobile recomposition
**Status:** APPROVED

Preserve hierarchy/story, not desktop coordinates.

---

## P14 — Semantic motion
**Status:** APPROVED

Motion must connect cause/effect, reveal evidence, or support comprehension.

---

## P15 — Pattern promotion rule
**Status:** SYSTEM RULE

After approval, record:
- pattern name
- problem solved
- exact visual anatomy
- page/route
- screenshot/reference
- implementation files
- desktop behavior
- mobile behavior
- motion behavior
- conditions where NOT to use it

---

## P16 — Supported Artifact
**Status:** CANDIDATE

Purpose:
Give real evidence depth without turning it into a generic card.

Anatomy:
- real media foreground
- optional paper-alt support surface
- soft ambient shadow
- restrained radius
- asymmetric offset

Do not use overlap by default.

---

## P17 — Statement Pause
**Status:** CANDIDATE

Purpose:
Create a strong narrative pause around one line.

Anatomy:
- large dark type
- strong negative space
- minimal nearby noise

---

## P18 — Opening Background Shift
**Status:** CANDIDATE

Purpose:
Give the opening a distinct visual state, then return to the normal canvas.

Avoid decorative gradients.

---

## P19 — Scan Emphasis
**Status:** CANDIDATE

Purpose:
Improve fast reading by emphasizing selected clauses/words.

Mechanisms:
- weight
- line break
- scale
- stronger ink
- spatial isolation

Do not gray out the rest of the paragraph.

---

## P20 — Subtle Scroll Growth
**Status:** CANDIDATE

Behavior:
0.985–0.995 → 1
optional max 1.01–1.03

Use sparingly.

---

## P21 — Tactile Hover
**Status:** CANDIDATE

Behavior:
- tilt max 1–2deg
- translate max 4px
- subtle shadow change
- scale max 1.02

---

## P22 — Contextual Cursor Label
**Status:** CANDIDATE

Small action label near cursor.

Must describe a real action.

---

## P23 — Living Media Loop
**Status:** CANDIDATE

Short real-state animation.

May include:
- UI screen progression
- button interaction
- typed-message recreation from real evidence
- short looped flow

Never invent states/text.

---

## P24 — TL;DR / Detailed Body Toggle
**Status:** CANDIDATE

Shared opening remains fixed.
Toggle swaps the full body below it.

Rules:
- TL;DR materially shorter
- Detailed preserves full content
- toggle not styled like generic SaaS segmented control by default

Strong candidate for Family Finance.
Possible for 106 only if it proves useful.

---

## P25 — Rounded Media Surface
**Status:** CANDIDATE

Rounded media is allowed.
Rounded-everything is not.

---

## P26 — Minimal Utility Header
**Status:** CANDIDATE

Direct identity/contact.
Minimal nav.
No generic "passionate about..." positioning language.

---

## P27 — Direct Intro Statement
**Status:** CANDIDATE

Low-fluff, clear positioning.

---

## P28 — Mixed-Media Storytelling
**Status:** CANDIDATE

Use different real artifact types when the project naturally contains them.

No fabricated variety.

---

## P29 — Page Transition Motif
**Status:** CANDIDATE

Short geometric/surface transition using ROTKA palette.

---

## P30 — Sticky Media + Scrolling Text
**Status:** CANDIDATE

For long case studies only when the narrative needs it.

Avoid dead scroll zones.

---

## P31 — Detail + Full Context
**Status:** CANDIDATE

Pair a real crop/detail with its complete artifact when useful.

---

## P32 — Section Density Shift
**Status:** CANDIDATE

Vary dense evidence beats and sparse statement beats to create rhythm.

---

## P33 — Micro-Interaction Layer
**Status:** CANDIDATE

A small set of interactions can make a structurally simple case study feel experiential.

Possible ingredients:
- scroll growth
- tactile hover
- contextual cursor label
- page transition
- short living media loop
- small background shift

Use only a few per page.

---

## P34 — Content Lock
**Status:** APPROVED WORKFLOW

When an authoritative content file exists:
all user-visible case-study strings come from it.

If a visual pattern needs missing semantic content:
omit the pattern.

---

## P35 — Truth-State Labeling
**Status:** APPROVED WORKFLOW

Internal reasoning should distinguish:
OBSERVED / INFERRED / PROPOSED / IMPLEMENTED / VALIDATED.

Do not overstate case-study claims.

---

## P36 — Recruiter Scan Gate
**Status:** APPROVED WORKFLOW

For portfolio pages, verify the project can be understood in 15–30 seconds.

---

## P37 — One-pass failure rule
**Status:** APPROVED WORKFLOW

If a meaningful visual pass is fundamentally wrong:
stop and revisit reference/composition.

Do not stack cosmetic patches.

---

## P38 — Interaction Pass Separation
**Status:** APPROVED WORKFLOW

Order:
static layout → depth → hover → scroll behavior → motion → responsive QA.

Do not add everything in one pass.

---

## Promotion template

When a candidate becomes approved:

Status: APPROVED

Approved on:
`<route>`

Reference:
`<URL / screenshot path>`

Implementation:
`<files/components>`

Desktop behavior:
`<description>`

Mobile behavior:
`<description>`

Motion:
`<description>`

Content constraints:
`<description>`

Do not use when:
`<conditions>`

Why approved:
`<visual QA result>`

---

## P39 — Feedback-to-Pattern Learning Loop
**Status:** APPROVED WORKFLOW

Strong positive or repeated negative feedback is design knowledge, but not automatically a reusable pattern.

Workflow:
1. Rotem approves or strongly rejects a result.
2. Agent identifies the specific transferable design logic.
3. Agent proposes a reusable pattern or AVOID PATTERN.
4. Rotem explicitly approves / rejects / edits it.
5. Only after approval is the library updated.

Approval of a screen does not equal approval of a reusable pattern.

Reuse the underlying principle, not the previous layout literally.

Reference-led design remains primary when a new reference has been selected.

### Pattern entry format
- Pattern name
- Source
- Trigger
- What worked
- Underlying principle
- Reuse when
- Do not use when
- Structural rules
- Allowed variation
- Evidence
- Approval

### Avoid-pattern variant

Negative patterns use the same structure plus:
- rejected behavior
- repeated failure mode
- what to do instead

They also require explicit approval before being persisted.
