# ROTKA — Family Finance Case Study
## FULL HANDOFF / CONTINUITY FILE
### Date: 2026-08-27
### Purpose
This file is the continuity source for starting a new ChatGPT / Codex conversation without losing the working context, constraints, decisions, narrative logic, motion logic, visual system, implementation rules, QA standards, source-of-truth hierarchy, and current exact stopping point.

**Use this file as the first context document in a new conversation.**
Do not summarize it aggressively before implementation. Read it in full and preserve its hierarchy.

---

# ROTKA PORTFOLIO — MASTER CONTINUITY LAYER
## Read this section before the Family Finance-specific handoff below

This section exists so that a new chat does not merely understand the current Family Finance opening task; it understands the **portfolio project as a whole**, the working relationship, the design logic that led here, what is already closed/canonical, what is still open, and how to behave as if continuing the same conversation.

---

# P0. PORTFOLIO PROJECT SCOPE

The ROTKA portfolio is a personal portfolio site whose currently relevant pieces include:

- Home
- About
- Tiny Tool
- Family Finance
- Portfolio Case Study / additional portfolio work as applicable

The portfolio should not feel like a template, a SaaS marketing site, or a standard Behance-style case-study stack.

It should feel authored, personal, editorial, intelligent, restrained, and increasingly kinetic where motion meaningfully supports the story.

The portfolio is not a gallery of invented mockups. It should prove real thinking, real product work, real implementation, and a recognizable personal point of view.

---

# P1. CURRENT CANONICAL / CLOSED REFERENCES

## About
Canonical file:
`/mnt/data/ROTKA_about_updated_standalone_v2.html`

The About page is the **visual master** for the portfolio.

Important locked About copy includes:

`Hi, I’m Rotem Kasahun, and OMG thank GOD for AI!`

Only `GOD` is bold 700 in the displayed version.

Other locked copy:
`So listen, I don’t know how to code (yet?), and I’m not a visual designer.`

`I’m mostly self-taught, perpetually curious, and currently spending a ridiculous amount of time exploring what I can make with AI.`

`I love finding problems, pulling them apart, and figuring out how things could work better.`

`AI finally lets me go from:`

`Someone should make this`

then:

`to`

then the GIF:
`Fine, I’ll do it myself.`

The About page established the desired balance:
- personal voice without becoming childish
- strong personality without over-decoration
- restrained layout
- warm cream background
- smaller, lighter typography
- confidence without "agency portfolio" visual clichés

Do not redesign the About page unless explicitly asked.

## Home
Canonical visual:
`/mnt/data/portfolio_backup/home-current.png`

Home is a portfolio reference point, not something to casually reinterpret while working on Family Finance.

## Tiny Tool
Canonical visual:
`/mnt/data/portfolio_backup/tiny-tool-final.png`

The centered Tiny Tool layout is considered **final / closed** in prior project context.

Do not reopen Tiny Tool layout decisions while working on Family Finance unless explicitly requested.

---

# P2. HOW THE PORTFOLIO VISUAL LANGUAGE EVOLVED

The portfolio did not begin with a fully fixed design system. The system evolved through iteration.

Key lessons from that evolution:

1. **Large/bold portfolio typography was repeatedly too loud.**
   The user prefers smaller, lighter, tighter editorial typography.

2. **Personality should not come from decorative gimmicks.**
   It should come from:
   - copy
   - real evidence
   - composition
   - motion
   - unusual but meaningful visual relationships

3. **The site should not look like a design-system demo.**
   Repeating the same card, radius, screenshot, heading pattern makes it feel generic.

4. **Physical evidence and software UI should look materially different.**
   - physical evidence may have subtle depth / shadow / irregularity
   - product UI should remain flat and faithful to the actual product

5. **Consistency does not mean flattening every element into the same hierarchy.**
   Small asides, conversational text, supporting fragments, ticker-like elements, screenshots, and physical artifacts can intentionally have different visual roles.

6. **"Professional" for this portfolio does not mean corporate.**
   It means:
   - deliberate
   - precise
   - coherent
   - high-fidelity
   - visually controlled
   - free of accidental-looking spacing/crops/motion

7. **The user does not want the site over-explained.**
   Let the visual/narrative logic carry meaning where possible.

---

# P3. PORTFOLIO-WIDE DESIGN CHARACTER

The target character is a combination of:

- editorial restraint
- personal conversational voice
- real artifacts
- real product proof
- controlled asymmetry
- kinetic continuity
- high attention to microdetail

Avoid:
- generic portfolio templates
- endless cards
- huge section titles
- standard "Problem / Solution / Impact" blocks unless the story genuinely requires them
- overuse of device mockups
- stock photography
- decorative arrows
- doodles
- fake handwriting
- serif/typewriter aesthetics
- heavy gradients for decoration
- ornamental motion

---

# P4. ABOUT → FAMILY FINANCE RELATIONSHIP

Family Finance must feel like it belongs to the same ROTKA portfolio as About, but it should not simply copy About's layout.

The relationship is:

About provides:
- typography restraint
- warmth
- voice
- spacing baseline
- visual confidence

Family Finance adds:
- evidence materiality
- product proof
- more narrative motion
- a continuous case-study environment
- more complex cause/effect choreography

Therefore:
- Family Finance should inherit the portfolio's visual identity
- but it is allowed to be more kinetic and materially layered than About
- do not force every Family Finance section into the exact About page structure

---

# P5. HOME → FAMILY FINANCE RELATIONSHIP

Home should act as an entry point into the work.

Family Finance should feel like the deeper authored story behind one portfolio project.

Do not make Family Finance repeat Home's project-summary logic unnecessarily.

The case study should reward entering the project with:
- a story
- real proof
- changing relationships between evidence and product
- enough interaction/motion to feel like a distinct experience

---

# P6. TINY TOOL → FAMILY FINANCE RELATIONSHIP

Tiny Tool is a smaller, more compact portfolio work item.

Its final centered composition should not be copied into Family Finance.

The broader lesson is:
- each project can have its own compositional personality
- the portfolio identity comes from shared taste/rules, not identical templates

---

# P7. PORTFOLIO TYPOGRAPHY PHILOSOPHY

Primary family:
Manrope

Secondary sans-serif accent may be used sparingly.

Do not use:
- serif
- monospace
- typewriter
- handwritten
- calligraphic
- decorative script

Typography should:
- breathe
- stay relatively small
- use bold sparingly
- avoid "hero headline inflation"
- preserve conversational moments

A line can be important without being 64px and 800 weight.

This lesson is especially important because multiple Family Finance attempts failed partly because typography became too large and bold.

---

# P8. PORTFOLIO MOTION PHILOSOPHY

The user identified "kinetics" as a missing quality in earlier portfolio work.

This does NOT mean the whole site should constantly animate.

Portfolio motion should feel:
- authored
- continuous
- physical when appropriate
- narratively motivated
- aware of time
- restrained

The site should not feel like:
- a list of scroll triggers
- elements fading up section by section
- an animation showcase
- a smooth-scroll demo

The strongest motion should happen where meaning changes.

For Family Finance, that is why the two major motion metaphors matter:
1. scattered evidence → collected into the product
2. receipt line-items → structured item-level understanding

Other motion should support continuity, not compete with those beats.

---

# P9. REFERENCE STUDY — WHAT WAS LEARNED

References discussed during the process include:

## Pell Mell
Useful for:
- editorial rhythm
- structure that feels designed but not rigid
- controlled movement
- visual freedom without chaos

Do not copy literal layouts.

## Eduard Bodak
Useful for:
- GSAP as a central motion system
- transform/opacity motion
- scroll-linked choreography

## “Two Portfolios, One Process”
Useful for:
- scattered elements moving along paths
- multiple independent things joining into one structure
- thinking in trajectories rather than section reveals

## MERSI
Useful for:
- `getBoundingClientRect()`
- preserving actual visual position
- clone/fixed overlay techniques
- GSAP Flip / continuity between containers

This reference is especially relevant to avoiding visible jumps.

## Podium
Useful for:
- page as continuous sequence
- scroll as narrative progression rather than isolated triggers

## R—K ’26
Useful for:
- microdetail polish throughout the experience

## slow-ness.com
Especially important.

The user said it resembles what she wants to communicate.

Useful for:
- atmosphere
- materiality
- editorial continuity
- restrained typography
- evidence/images existing in the environment rather than in obvious components
- whitespace as composition
- storytelling before interface

Do not copy:
- hotel/editorial subject matter
- huge photography ratios
- universally slow pacing
- its typography literally

Family Finance requires more product proof than slow-ness.

---

# P10. VISUAL COGNITION PRINCIPLES

When judging a layout, do not only ask whether every component is "nice."

Ask:
- Where does the eye land first?
- Is that the intended thing?
- What is the second read?
- Is anything accidentally louder than the narrative?
- Does the eye understand the causal relationship?
- Does movement compete with reading?
- Does the user know where to look before the next change?
- Does the composition feel intentional at rest, not just while moving?

Important:
The user is very sensitive to "amateurish" composition even when individual pieces are technically correct.

The site must work as a whole visual field.

---

# P11. MATERIAL HIERARCHY

Three different material categories should remain visually distinct:

## A. Portfolio text / editorial layout
Flat, quiet, warm, precise.

## B. Real-world evidence
Receipts, messages, notifications:
- may have natural irregularity
- physical paper can have subtle shadow
- receipt edges/material should be believable
- notifications should resemble their platform/service

## C. Product UI
Must remain faithful to the actual product.
Do not ROTKA-redesign the app.
Do not add shadows/radii just to fit the portfolio.

The contrast between these categories creates richness.

---

# P12. DEVICE MOCKUP RULES

General preference:
avoid staged mockups.

For Family Finance specifically, a simple phone frame is allowed only when full-screen context is necessary.

Allowed:
- simple thin dark bezel
- real app screen inside

Not allowed:
- hand holding phone
- perspective mockup
- shiny 3D render
- floating marketing-device scene
- fake duplicate status bars
- ornamental device reflections

Where only one feature matters:
use a direct UI crop instead of a full phone.

---

# P13. SCREENSHOT QUALITY RULE

A screenshot can be "real" and still fail.

It must also be:
- sharp
- intentionally cropped
- readable at display size
- aligned to the story
- free of random clipping
- visually clean

Earlier Family Finance carousel attempts failed because:
- screenshots were blurry
- crops were arbitrary
- phone framing was used where a crop would be stronger
- not enough real screens appeared outside the carousel

Do not repeat that.

---

# P14. PORTFOLIO SOURCE AUTHENTICITY

This is a portfolio about real work.

Never blur the distinction between:
- actual product runtime
- source-faithful reconstruction
- concept mockup
- external evidence simulation

Opening external evidence may be fabricated realistically because that has been explicitly authorized.

Product UI may not be fabricated.

If a screenshot comes from a manually rebuilt HTML approximation, do not present it as real product proof.

---

# P15. PORTFOLIO COPY RULES

The user's voice is important.

Do not "professionalize" conversational copy into generic UX case-study writing.

Do not silently:
- fix grammar
- improve rhythm
- normalize punctuation
- rewrite jokes
- remove informality

If copy is locked, exactness matters more than editorial preference.

A small strange phrase that the user chose is part of the voice.

---

# P16. PROJECT ORIENTATION / METADATA LESSON

At one point the Family Finance case study had orientation metadata such as:
- project description
- role
- development status

The user later explicitly said the beginning explanation should be removed.

Lesson:
Do not assume standard portfolio metadata belongs at the top just because portfolios usually have it.

Latest correction wins.

---

# P17. HOW WE SHOULD WORK TOGETHER

The desired workflow is not:
"generate a whole redesign → user reacts → regenerate everything."

It should be:

1. understand exact scope
2. preserve locked decisions
3. identify missing real assets
4. specify behavior
5. prototype the smallest risky part
6. visually inspect
7. correct surgically
8. only then expand

For complex visual work:
- first lock the narrative and motion logic
- then implement
- then QA visually

Do not code ahead of unresolved story decisions.

Conversely, once the user has approved a detailed implementation direction and says "קדימה", do not repeatedly ask the same design questions again.

---

# P18. ASSET-FIRST RULE

One major process mistake in earlier Family Finance work was implementing before proving the visual assets.

Correct order for future full-page work:

1. exact asset inventory
2. exact shot list
3. confirm every real product route/state
4. capture real screenshots
5. define crops
6. define motion relationship
7. prototype
8. QA
9. integrate

If a needed product screen does not exist:
stop.

Do not "temporarily" create a fake one and forget to replace it.

---

# P19. SHOT LIST REQUIREMENT

Before a full section is implemented, define:

- exact copy
- exact visual
- source
- real / fabricated / physical category
- full screen or direct crop
- desktop size
- mobile size
- alignment
- motion
- why the visual exists
- state before
- state after

This prevents "sentence → random screenshot."

---

# P20. NARRATIVE CAUSALITY

The Family Finance story must show decisions and consequences.

Core product decisions to preserve:

1. **management itself is friction**
2. **ask only when needed**
3. **motivation matters too**

The page should make those decisions visible through behavior, not just explanatory paragraphs.

Preferred narrative unit:
**decision → proof → consequence**

---

# P21. WHY PREVIOUS FULL FAMILY FINANCE VERSIONS FELT WRONG

The user described earlier results as amateurish / poorly explained.

Main causes:
- opening had too much explanation
- typography too big/bold
- floating evidence was not visibly floating
- motion did not feel continuous
- screenshots were too sparse
- carousel proof was blurry
- crops were weak
- too many full phone frames
- manually recreated product screens weakened trust
- sections felt modular
- the page did not have enough kinetic continuity
- material evidence did not feel material enough
- overall rhythm felt like a sequence of blocks rather than one authored environment

Any new chat must understand this emotionally and technically:
"technically present" is not enough.

---

# P22. IMPLEMENTATION DETERMINISM

When converting design intent into code:

Prefer:
- named states
- explicit ranges
- explicit trigger ownership
- exact source assets
- fixed source-of-truth order
- clear fail conditions

Avoid:
- vague "when it feels right"
- multiple overlapping scroll listeners
- hidden dependencies between section heights and motion
- fragile percentage-visible conditions for critical narrative events
- transforms that overwrite other transforms without compositing strategy
- sudden coordinate-set swaps

Critical motion should have a single owner.

---

# P23. SCROLL / MOTION ARCHITECTURE LESSON

The opening attempts revealed a recurring technical mistake:
trying to combine:
- ambient float
- macro scroll movement
- orbit placement
- section transition
- suction

using transforms on the same element without sufficiently clean separation.

For the next implementation, prefer nested wrappers:

Example conceptual structure:
- `fragment-shell` = macro scene path / suction ownership
- `fragment-float` = ambient helium loop
- actual image = material artifact

This prevents ambient transforms from fighting macro transforms.

Similarly:
- text remains in normal/sticky narrative flow
- exclusion zones are measured separately
- suction should take over macro motion only after entering its explicit state

---

# P24. COLLISION / EXCLUSION PRINCIPLE

This is now a portfolio-quality rule for moving evidence around copy:

Text is not transparent empty space.

If evidence moves through a textual composition, the text block must be protected.

Use measured exclusion rectangles plus padding.

The moving artifact should route around the protected area.

This is not merely accessibility; it is part of the physical storytelling model.

---

# P25. MOTION MUST SETTLE

When scrolling stops:
- ambient fragments can continue gently
- scrubbed narrative motion should settle
- there should not be continuous jitter
- layout should remain visually composed

When a narrative state completes:
- the reader should perceive that the state has completed
- do not leave elements half-transitioned due to scroll position ambiguity

This is why the hold before suction matters.

---

# P26. MOBILE IS A RECOMPOSITION

Do not simply scale desktop.

On mobile:
- fewer peripheral layers
- reduce travel
- keep text exclusion stronger
- let evidence use edges of viewport
- avoid overcrowding center
- keep product proof readable
- retain narrative order
- avoid overly tall dead-scroll cinematic regions

If a desktop sticky sequence becomes awkward on mobile, use a simpler flow while preserving story.

---

# P27. BREAKPOINT / QA BASELINE

Family Finance deterministic baseline:
- mobile: 0–767
- tablet: 768–1023
- desktop: 1024+

Required full-page QA:
- 1440
- 1280
- 390
- 360

Opening gate currently requires at minimum:
- 1440
- 390

Do not introduce new breakpoints unless an actual rendered defect demonstrates the need.

---

# P28. QA LANGUAGE

Never say:
- "QA passed"
- "final"
- "pixel-perfect"
- "looks correct"

unless it was actually rendered and inspected at required sizes.

If only code was inspected, say:
- syntax/structure checked
- visual QA pending

If the environment blocks browser rendering, be explicit.

The user strongly values honest status over optimistic claims.

---

# P29. VERSIONING / CHANGE LOG

For visual iterations:
- create a new version file when the change is architectural
- use surgical patch when the change is narrow
- keep prior versions available for comparison
- do not overwrite the only known-good artifact without backup

Return:
- exact output file
- exact changes
- QA status
- blockers

---

# P30. WHAT "DO NOT INVENT" MEANS IN PRACTICE

Do not invent:
- product states
- product numbers
- product navigation
- project metrics
- research findings
- user quotes
- process steps that did not happen
- captions
- labels
- screenshots
- feature names
- device interactions
- metadata
- role descriptions

Unless the user explicitly authorizes fabrication for a particular storytelling object.

Current explicit exception:
opening evidence fragments and the later Android notification can be fabricated realistically.

That exception does not extend to actual Family Finance product UI.

---

# P31. WORKING WITH GITHUB

Product repo:
`rotemkasahun-maker/Financial`

Portfolio repo:
`rotemkasahun-maker/Rotem_Portfolio`

Use connected GitHub source when real repo facts are required.

Do not guess APIs / routes / branch content.

Do not modify repository code, commit, merge, or create a branch unless the user explicitly asks for it.

Portfolio build work may initially happen as local standalone prototypes before repo integration.

---

# P32. CURRENT PRODUCT SOURCE FACTS VERIFIED DURING THIS WORK

The real web product is straightforward to run conceptually:
- `index.html`
- `styles.css`
- `src/app.js`
- plain JS module imports

The actual `index.html` loads:
`styles.css`
and:
`src/app.js`

The product uses demo data in repo.

Current `app.js` confirms:
- sidebar/full nav exists
- mobile primary nav = Home / Transactions / Madrid / Tasks
- dashboard household greeting is decorated to `שלום, משפחת קסהון 👋`
- month eyebrow is `אוגוסט 2026`
- app includes demo notice
- FAB copy is `צלמי קבלה`

Do not let a new agent overwrite these facts with assumptions.

---

# P33. CURRENT PRODUCT DATA FACTS RELEVANT TO PORTFOLIO

Real demo examples include:
- Rami Levy transaction: 487.30 ILS
- missing receipt task tied to it
- supermarket receipts/items
- Madrid goal state
- user scores / XP / challenges
- dashboard / insights / transaction states

These may be used only when showing real current product states.

Do not invent alternate product values for visual convenience.

---

# P34. IMPORTANT UNCERTAINTIES TO PRESERVE

A new chat should know what is **not** fully locked:

1. exact second story-beat copy after the receipt/item-level section
2. exact secondary sans-serif accent font
3. optional semantic accent color
4. some final exact product screenshot/crop choices
5. exact live runtime capture set for the finished case study

Do not silently resolve these.

---

# P35. PORTFOLIO MASTER WORKFLOW

For a new substantial page/section:

### Stage 1 — Context
Read:
- handoff
- master technical spec
- visual ruleset
- exact source files

### Stage 2 — Source proof
Confirm:
- assets
- product states
- copy
- references

### Stage 3 — Design plan
Define:
- story
- shot list
- layout
- motion
- desktop/mobile

### Stage 4 — Risk prototype
Prototype the hardest / most uncertain interaction only.

### Stage 5 — Gate
Render and visually QA.

### Stage 6 — Integration
Only after prototype passes.

### Stage 7 — Full QA
1440 / 1280 / 390 / 360 + narrative slow-scroll.

This workflow is deliberately conservative because broad iterations caused unnecessary regressions earlier.

---

# P36. CHAT CONTINUITY RULES

A fresh chat should behave as though it inherited the current working relationship.

That means:

- do not ask the user to re-explain already documented decisions
- do not offer generic portfolio advice when a locked decision exists
- do not "start fresh" creatively
- do not restart visual direction
- do not re-open closed pages
- do not present old failed options as new ideas
- do not assume the user wants alternatives when she has already chosen a direction

Before asking a clarifying question:
check whether the handoff already contains the answer.

---

# P37. WHEN TO ASK VS WHEN TO ACT

Ask only when:
- there is a genuine source conflict that affects implementation
- a required real asset/state is missing
- the user must make a new design choice not covered by prior decisions
- an action would modify a connected repository/account and explicit authorization is required

Do not ask when:
- the exact behavior is already specified
- the user has already approved the next implementation step
- the handoff resolves the uncertainty

---

# P38. RESPONSE STYLE FOR THIS PROJECT

Be concise enough to keep momentum, but precise.

When implementing:
- say what changed
- provide artifact link
- state QA status honestly
- mention blockers only if real

When auditing:
- separate observation from recommendation
- do not fix unless asked

When the user says "what do you think":
give design judgment first.
Do not immediately implement unless she asks.

When she says "don't design yet":
do not call generation/editing tools.

---

# P39. FAMILY FINANCE OPENING IS CURRENT PRIORITY

Even though this handoff contains the full portfolio context, the **current task is not the whole portfolio**.

The active gate remains:
Family Finance opening only.

A new chat must not use the broader context as permission to start polishing Home/About/Tiny Tool or the rest of Family Finance.

---

# P40. CANONICAL CONTINUATION BEHAVIOR

When this file is supplied in a new chat, the assistant should:

1. read it fully
2. acknowledge the exact current stopping point
3. inspect any referenced current files needed for the task
4. do not redesign
5. do not ask the user to repeat decisions
6. follow the current opening implementation prompt
7. stop at the opening QA gate

The desired feeling is:
**same project, same decisions, same working rules, new context window only.**

---

---

# 0. MOST IMPORTANT OPERATING PRINCIPLE

The highest-priority rule for this project is:

> **Do not change anything that was not explicitly requested. Do not invent anything that was not explicitly authorized. If something is not mentioned, preserve it.**

In Hebrew, the user's own guiding principle is:

> **הדגש הכי חשוב הוא לא לשנות שום דבר שלא כתוב, לא להמציא שום דבר שלא כתוב, ולהשאיר דברים כמו שהם אם אין התייחסות אליהם.**

This rule overrides normal "helpfulness", redesign impulses, copy improvements, stylistic cleanup, or speculative additions.

---

# 1. USER / WORKING STYLE

The user is building a portfolio and a real Family Finance product simultaneously.

The portfolio page must tell the Family Finance story professionally and visually, but it must not become a fake product case study.

Important working-style facts:

- The user is extremely sensitive to invented content.
- Never rewrite copy unless explicitly instructed.
- Never assume newer draft = better or more authoritative.
- Never claim QA was done if it was not visually inspected.
- Never call manually recreated UI a "real product screenshot".
- Never add labels, captions, CTAs, cards, icons, decorations, arrows, explanations, or metadata unless explicitly approved.
- If a requested real product screen is unavailable, stop and report the missing asset. Do not fabricate a substitute.
- When the user says "לא לעצב עדיין", answer only. Do not implement.
- When the user says "קדימה" / "להמשיך" after a locked specification, implement without reopening design questions unless blocked by missing source-of-truth material.
- The user often dictates with speech-to-text. If dictated wording conflicts with locked copy and there is evidence of transcription error, preserve locked copy unless she explicitly replaces it.
- The user prefers Hebrew conversation; portfolio copy is English.

---

# 2. SOURCE-OF-TRUTH PRIORITY

When sources conflict, use this order:

1. **Latest explicit user correction**
2. **Exact copy from the original approved Family Finance source**
3. **Explicitly approved visual / narrative decisions**
4. **Current real product code/assets from the Financial repository**
5. **Previous Family Finance case-study drafts only for individual elements the user explicitly liked**

Never use:
- "newest file" as a source of truth merely because it is newer
- rejected/revised drafts as global source of truth
- reconstructed screens as proof of real product functionality
- invented content to fill missing product states

---

# 3. CURRENT PROJECTS / REPOSITORIES

## Family Finance product repository
GitHub:
`rotemkasahun-maker/Financial`

Default branch:
`main`

The app is a real working web product plus Android companion/collector.

The current web app:
- is Hebrew / RTL
- uses plain HTML/CSS/JS modules
- loads from `index.html`
- root app entry: `src/app.js`
- demo/mock financial data already exists in repo, so public portfolio captures can use real repo demo data without exposing personal financial data

Verified current mobile primary navigation:
- בית
- עסקאות
- מדריד
- משימות

Do **not** replace Tasks with Insights in the mobile nav.

Known real product route/state sources include:
- dashboard
- transactions
- receipts
- groceries
- recurring
- reimbursements
- data sources
- file import
- attention
- tasks
- insights
- settings
- Madrid
- historical learning

Important real demo state:
- missing receipt task for Rami Levy:
  `רמי לוי · 487.30 ₪`

## Portfolio repository
GitHub:
`rotemkasahun-maker/Rotem_Portfolio`

Known portfolio work branch:
`codex/portfolio-polish`

Known evidence screenshots in the portfolio repo:
- `assets/family-finance/evidence/screenshots/attention-after.png`
- `assets/family-finance/evidence/screenshots/core-receipt-after.png`
- `assets/family-finance/evidence/screenshots/quick-cash-after.png`
- `assets/family-finance/evidence/screenshots/quick-edit-after.png`

Do not assume these four assets cover all required final shots.

---

# 4. IMPORTANT LOCAL FILES

## Master technical specification
`/mnt/data/ROTKA_family_finance_MASTER_BUILD_SPEC.md`

## Visual / kinetic ruleset
`/mnt/data/ROTKA_visual_cognition_aesthetic_ruleset.md`

## Older change spec
`/mnt/data/ROTKA_family_finance_change_spec_2026-08-26.md`
May be stale. Do not treat as higher-priority than this file or latest explicit user corrections.

## About page visual master
`/mnt/data/ROTKA_about_updated_standalone_v2.html`

## Portfolio home canonical screenshot
`/mnt/data/portfolio_backup/home-current.png`

## Tiny Tool canonical screenshot
`/mnt/data/portfolio_backup/tiny-tool-final.png`

## Original Family Finance source
`/mnt/data/family_finance_final_static_layout_v3_flowing(1).html`

Backup:
`/mnt/data/portfolio_backup/family-finance-final-static.html`

## Earlier normalized Family Finance
`/mnt/data/family_finance_ROTKA_normalized_v1.html`

## Rejected / revised Family Finance
`/mnt/data/ROTKA_family_finance_revised_QA/family-finance.html`
Do not use as general source of truth.

## Iteration files
`/mnt/data/ROTKA_family_finance_case_study_v2.html`
`/mnt/data/ROTKA_family_finance_case_study_v3.html`
`/mnt/data/ROTKA_family_finance_case_study_v4.html`
`/mnt/data/ROTKA_family_finance_case_study_v5.html`

## Opening prototypes
`/mnt/data/ROTKA_family_finance_opening_prototype_v1.html`
`/mnt/data/ROTKA_family_finance_opening_prototype_v2.html`
`/mnt/data/ROTKA_family_finance_opening_prototype_v3.html`
`/mnt/data/ROTKA_family_finance_opening_prototype_v4.html`

The current opening work should continue from the conceptual lessons of v4, **not** from v4's implementation architecture if that architecture causes the known failures below.

---

# 5. VISUAL MASTER / ROTKA SYSTEM

The About page is the portfolio's visual master.

## Typography
Primary:
- Manrope

The user does not want Family Finance to feel like a flat all-Manrope page.
A limited secondary sans-serif accent is acceptable only in conversational micro-moments.

Do NOT use:
- serif
- monospace/typewriter
- handwritten
- script
- decorative display fonts

Previously Space Grotesk was provisionally used as secondary, but the exact secondary family is not globally locked.

## Typography character
- smaller
- lighter
- less bold
- tighter vertical rhythm
- editorial rather than "SaaS landing page"
- avoid huge case-study headlines
- avoid too many bold weights

## Palette
Main cream:
`#FBF6EA`

Soft:
`#F7F0E2`

Secondary:
`#FFF9EF`

Deeper:
`#F2E8D8`

Ink:
`#202020`

Secondary text:
`#5F5B56`

Muted:
`#777168`

Border:
`#DED6C8`

An optional semantic accent `#6A2639` has **not** been approved.
Do not use it without approval.

## Grid
Desktop:
- 12 columns
- 24px gutters/padding context
- max-width 1280px

Mobile:
- 4 columns
- 16px horizontal padding

## Shape
Structural UI radius:
- 6px

Physical paper:
- 2–4px or naturally irregular

Notifications:
- use platform-appropriate radius

## Shadows
Real-world physical evidence:
- subtle physical shadow allowed

Product UI:
- flat
- do not restyle the product with ROTKA shadows

---

# 6. PORTFOLIO STORY PRINCIPLE

The case study should feel like a **continuous visual environment**, not a stack of sections.

Primary reference principle from slow-ness.com:
- storytelling / atmosphere before interface
- material evidence embedded in the page world
- asymmetry is okay when controlled
- whitespace is compositional
- objects exist in space, not inside unnecessary cards
- typography quiet but intentional
- use product proof when needed
- avoid turning every beat into "sentence → screenshot"

QA question:
> **Does this feel like one continuous visual environment, or a stack of sections?**

If it feels like a stack of sections, fail.

---

# 7. KINETIC DESIGN PRINCIPLE

"Kinetics" is one of the core words the user identified as missing from earlier work.

Good kinetics = **control of time**, not "more animation."

Desired:
`scroll → thought shifts → evidence reacts → visual relationship changes → next thought emerges`

Not:
`scroll → section enters → stop → next section enters`

The page should have kinetic continuity.

Motion must communicate at least one of:
- hierarchy
- continuity
- causality
- physicality
- preserved context
- state change

If motion only exists because "it looks nicer", remove it.

---

# 8. CORE MOTION RULES

Preferred:
- GSAP 3.x
- ScrollTrigger
- native scrolling

Optional only if justified:
- MotionPathPlugin
- Flip

Do not introduce Lenis unless measured QA proves it is necessary.

Avoid:
- scroll-jacking
- over-pinning
- generic repeated fade-up
- giant kinetic typography
- blur as shortcut
- bounce / elastic / back / spring
- every sentence animating
- multiple competing motion concepts

Continuous motion should generally use:
- transform
- opacity

Avoid continuous animation of:
- top
- left
- width
- height
- filter
- box-shadow

Maximum per viewport:
- 1 dominant motion
- 1 secondary motion

Mobile:
- fewer moving layers
- travel distance reduced ~25–35%
- parallax reduced ~40%
- no complicated multi-layer pinning

Reduced motion:
- disable continuous scrub/float/suction/receipt-flight
- preserve content and manual interactions
- story must remain understandable

---

# 9. LOCKED FAMILY FINANCE STORY / COPY

Do not alter punctuation/capitalization without explicit instruction.

## Opening
`I wanted to know - where our money was going?`

Then:
`So I started collecting things.`

## Problem
`The problem wasn’t finding the information,`

Then:
`It was me.`

No `see?` here.

## System
`I didn’t want another system to manage. I wanted something to manage it for me.`

## After ingest
`Now everything was in one place, see?`

Then:
`But the system still expected me to do the boring parts.`

Then small right-side aside:
`Oh hell no.`

`Oh hell no.` must remain small, around:
- desktop ~15–17px
- mobile ~14–16px

It is not a headline.

## House
`I REALLY need to stop buying random stuff for the house.`

## More automation
`So I kept giving it more to do.`

## Missing receipt
`When it really does need me, it can ask.`

## Item-level / second story beat
The exact approved sentence here is still uncertain.

Current v5 had:
`I know where I spend it, but I still didn't know what I spend it on.`

Do **not** treat this as immutable until checked against the original approved source.

## Insights
`Suddenly the data could tell me other things as well.`

No comma after "Suddenly".

## Motivation
`Making it easier helped. But I also wanted a reason to keep going,`

`because making it easier didn’t automatically make it something I’d want to stick with.`

Exact punctuation/case.

## Current status
`It’s currently in development, and I’m still refining it as we use it.`

## Ending
`The story stops here, but there is so much more to it. Go ahead, poke around.`

Then final real Home screen interaction.

Then:
`Cool, right?`

---

# 10. OPENING — APPROVED NARRATIVE LOGIC

The opening is currently the only section being actively redesigned/implemented.

Do not proceed to the full page until the opening passes.

The opening must tell this story:

1. I wanted to know where the money was going.
2. I started collecting information.
3. Evidence arrives gradually.
4. The evidence lives around the narrative.
5. The problem was not finding the information.
6. The problem was managing it.
7. I wanted the system to manage it for me.
8. A real product screen appears as destination.
9. The viewer gets time to understand the destination.
10. The evidence is collected into the product.

Core semantic sentence:
> **The evidence should not pre-exist the thought. It should arrive as a consequence of it.**

---

# 11. OPENING — EXACT PHASE ORDER

## Phase 1 — Intro
Show only:
`I wanted to know - where our money was going?`

There should be no fragments yet.

## Phase 2 — Collection thought
Show:
`So I started collecting things.`

The line should move upward through normal scroll and become visually anchored higher in the viewport, almost like a temporary narrative heading.

No sudden animation.

## Phase 3 — Evidence arrival
Only after `So I started collecting things.` is clearly visible and already relatively high / established:
- introduce fragments one by one
- slowly
- tied to scroll progression
- not as a timer burst

The fragments should not all appear in one short window.

## Phase 4 — Evidence environment
Once fragments have arrived:
- they continue floating
- they remain part of the scene
- they accompany the scroll
- they do not stay behind while text moves on

## Phase 5 — Problem
Show:
`The problem wasn’t finding the information,`
`It was me.`

The text is the anchor.

The fragments move around it.

## Phase 6 — System
Show:
`I didn’t want another system to manage. I wanted something to manage it for me.`

Fragments still exist in the scene.

## Phase 7 — Destination reveal
Reveal the first real product screen.

The phone/product frame should be smaller than previous attempts.

## Phase 8 — Hold
The product screen must become fully readable / visually registered.

Fragments continue floating around it for a short beat.

No suction yet.

## Phase 9 — Collect
After the hold:
- fragments get pulled into the product
- all fragments are collected
- no fragments remain hanging underneath or outside after completion

---

# 12. OPENING — FRAGMENT TYPES

Maximum:
5 fragments

The intended set:
1. supermarket receipt
2. household/general-store receipt
3. Google Wallet / digital transaction fragment
4. credit-card / financial notification
5. SMS / digital receipt

Opening evidence is explicitly authorized to be fabricated-but-realistic, provided:
- no real personal financial data is used
- it looks like believable real-world evidence
- it is not fake product UI
- store/service styling stays plausible

Avoid unapproved store assumptions.

Safer examples:
- Rami Levy
- Max Stock
- Home Center
- non-specific realistic vendor

Sacara appears in product mock data but was not clearly approved as opening evidence. Do not use it without explicit need.

---

# 13. RECEIPT MATERIAL REALISM

This is currently a known failure.

The receipts must stop looking like HTML cards.

They must feel like:
> **real photographed thermal-paper artifacts**

Required characteristics:
- narrow thermal receipt proportions
- slightly off-white paper
- subtle thermal paper grain
- non-uniform tone
- slight translucency / thinness feeling where appropriate
- realistic receipt print density
- realistic line-item rhythm
- real totals block
- slightly faded ink in places
- slight curl/bend/crease
- edge not perfectly geometric
- natural physical shadow
- slight skew / perspective
- no rounded card styling
- no clean UI border
- no large "designed" typography

Preferred implementation:
- use real or photorealistic receipt image assets
- animate the image itself
- do not fake thermal paper entirely with CSS if it still reads as UI

---

# 14. HELIUM-BALLOON MOTION

The user explicitly wants the fragments to feel more like **helium balloons**.

This does **not** mean playful bounce.

It means:
- buoyant
- light
- continuously alive
- slow independent drift
- slightly inertial
- not synchronized
- they continue moving even when scroll stops

Each fragment should have its own:
- vertical oscillation
- horizontal drift
- slight rotation
- duration
- phase

Previously suggested ranges:
- vertical amplitude: ~18–32px
- horizontal amplitude: ~8–20px
- rotation: ~±1–2°
- loop duration: ~6.5–10s

Do not make all fragments move in the same direction at once.

---

# 15. TEXT MUST BE A PHYSICAL EXCLUSION ZONE

This is a critical new correction from the user and must be treated as locked.

The text behaves like a physical object in the scene.

Fragments must **never**:
- overlap text
- pass behind text
- pass over text
- pass "under" the text
- cross through the reading area

The text block is effectively a collision / exclusion rectangle.

If a fragment's route would cross the text:
- it must go around it
- by the side
- above the full text block
- or below the full text block

The route must remain continuous and smooth.

No sudden jumps from one side to the other.

The reader must never have to visually compete with moving evidence.

---

# 16. NO DEAD / SOFT SCROLL ZONES

Current v4 has a known problem:
between `So I started collecting things.` and `The problem wasn’t finding the information,`
there is a stretch of very soft / seemingly purposeless scrolling.

This must be removed.

Every meaningful amount of scroll should correspond to at least one of:
- text progression
- evidence arrival
- evidence trajectory change
- narrative state change
- destination reveal

No long scroll stretch where "nothing closes" or "nothing happens."

Do not create fake cinematic scroll length for atmosphere.

---

# 17. FRAGMENT TRAJECTORIES MUST BE CONTINUOUS

Current v4 has another known problem:
fragments visibly "jump" when the scene changes from the last text block toward the phone.

This must not happen.

Do not swap pre-authored coordinate sets abruptly.

Instead:
- use each fragment's current actual position as the start position
- calculate the next destination / orbit
- interpolate continuously
- if the direct line crosses text exclusion zones, route around them
- preserve motion continuity

The user should feel:
> the objects physically moved through space

Not:
> the layout assigned them a new position

---

# 18. SCROLL MODEL FOR THE OPENING

Do not build the opening as unrelated section triggers.

Preferred conceptual model:
- one continuous narrative scene
- normal document flow for text
- one evidence stage that persists across the opening
- ambient fragment motion independent of scroll
- macro fragment path driven by scroll
- explicit state transition into destination/hold/suction

Text should not be the dominant moving layer.

Fragments are the moving layer.

Core model:
**text = anchor**
**fragments = atmosphere / motion**
**scroll = current**
**suction = force**

---

# 19. FRAGMENT ENTRY — SLOWER THAN V2/V3/V4

This is another current correction.

The fragments must appear:
- later
- slower
- more gradually
- across more scroll distance

Not:
- all within one quick reveal sequence

Desired perceptual rhythm:
scroll a little → fragment 1
scroll more → fragment 2
scroll more → fragment 3
etc.

Their arrival should feel like accumulating evidence, not like an entrance animation.

---

# 20. PRODUCT SCREEN / PHONE SIZE

Known user feedback:
the phone is still too large.

It should feel like:
- a destination
- a real product proof
- an object in the scene

It should not feel like:
- the new hero section
- a giant phone mockup

Previous desktop target of 280–320px was still perceived as too large.

For the next attempt:
- start around 240–270px desktop
- only increase if the real product becomes illegible
- use the smallest size that preserves recognition and purpose

Mobile:
- keep it readable
- avoid near-full-width takeover if possible
- the frame should be thin, dark, simple
- no 3D mockup
- no hand
- no shiny render

When only a UI region matters elsewhere in the page, use a direct crop instead of a whole phone.

---

# 21. REVEAL → HOLD → SUCTION

This is a hard requirement and has failed multiple times.

The exact choreography:

## Reveal
The real product screen becomes fully visible.

## Hold
The viewer must receive a clear beat to understand:
"this is the destination."

Duration target:
~0.9–1.2 seconds

During hold:
- fragments keep floating
- they do not freeze
- no clear inward trajectory yet
- amplitude may soften slightly, but should not go to zero

## Suction
Only after the hold:
- begin collecting fragments
- accelerate them inward
- stagger the collection
- make the action readable as "the system is collecting the evidence"

It must not look like:
- fade away
- disappear
- teleport
- layout reset

---

# 22. SUCTION MUST BE DETERMINISTIC

This is the most important implementation correction after v4.

Previous versions failed because suction was too dependent on fragile scroll/intersection conditions.

Do not use a condition like:
"if 90% visible and the scroll happens to be here..."

Instead use an explicit state machine.

Recommended states:

`INTRO`
→ `COLLECTING_EVIDENCE`
→ `FLOATING`
→ `PROBLEM`
→ `SYSTEM`
→ `DESTINATION_REVEAL`
→ `DESTINATION_VISIBLE`
→ `HOLD`
→ `SUCTION`
→ `COMPLETE`

Once the destination state is reached:
- reveal completes
- enter HOLD
- wait ~1 second
- trigger suction exactly once

Do not require additional scroll to make suction happen.

This is important because the user explicitly wants:
> the screen to be fully visible, the fragments to keep floating around it for about a second, and then they are sucked in, so the viewer has time to understand what is happening.

---

# 23. SUCTION MOTION

Target characteristics:
- duration ~0.85–1.1s per fragment
- stagger roughly ~90–140ms
- acceleration inward
- easing similar to `power2.in`
- end scale around ~0.10–0.16
- opacity should reduce mostly near the end, not immediately
- each fragment can have slightly different destination point within the screen
- start from the fragment's **actual current floating position**

No:
- freeze first
- teleport
- instant fade
- identical straight path for all fragments

After suction:
- all five fragments are gone / collected
- no fragment remains floating below or behind the phone

---

# 24. OPENING FAILURE HISTORY

This is important so a new agent does not repeat the same architecture.

## v1
Improved direction compared with older full-page versions, but:
- text still appeared to move while receipts stayed relatively fixed
- fragments needed more "helium" movement

## v2
Changes attempted:
- fragments entered only after `So I started collecting things.`
- stronger float
- smaller phone
- intended reveal → hold → suction

User feedback:
- fragments still entered too quickly
- they needed to appear more gradually through scroll
- around `The problem wasn’t...`, text still appeared to move while fragments stayed put
- phone too large
- suction did not read / was absent
- receipts did not look like real thermal paper

## v3
Attempted:
- scroll-progress stagger
- stronger helium motion
- anchored text
- smaller phone
- hold + suction

User verdict:
`לא`

Follow-up clarification:
- all previously identified motion problems remained
- there was **no suction at all**

Conclusion:
Do not tweak v3 architecture.

## v4
Rebuilt around:
- one continuous evidence stage
- orbit around active text
- explicit phone stage
- separate suction attempt

Current user feedback:
- strange / soft unnecessary scrolling between `So I started collecting things.` and `The problem wasn’t...`
- there is a scroll stretch where nothing meaningful happens
- receipts still do not look sufficiently like thermal paper
- fragments must not float under/over/through text
- text must behave like a physical obstacle
- fragment paths must go around text smoothly
- there is a visible jump in fragment positions from the last paragraph toward the phone
- phone still too large
- again, no visible suction
- some fragments end up floating under the phone rather than being collected

Conclusion:
**Do not patch v4 locally. Rebuild the opening motion architecture using the new exclusion-zone + continuous-path + deterministic state-machine logic.**

---

# 25. WHAT TO DO NEXT — EXACT CURRENT STOPPING POINT

The current conversation stops **before implementing the next version**.

The next version should be treated as a new opening prototype, conceptually "v5 opening", but it should **not** inherit the broken scroll/orbit mechanics of v4.

Next implementation task:

1. Build only the opening.
2. Preserve locked copy exactly.
3. Remove the dead scroll zone.
4. Create true physical exclusion zones for each active text block.
5. Make fragment entry slower and more scroll-distributed.
6. Make fragment paths continuous.
7. Keep ambient helium float active throughout.
8. Use photorealistic / real-looking thermal receipt assets instead of CSS card receipts.
9. Reduce phone size further (~240–270px desktop starting point).
10. Reveal destination fully.
11. Enter explicit HOLD state.
12. After ~1 second, trigger suction independently of further scroll.
13. Collect all fragments.
14. Verify no fragment remains after completion.
15. QA desktop 1440 and mobile 390 before proceeding to the rest of the case study.

Do **not** continue into the full page until this passes.

---

# 26. OPENING ACCEPTANCE CRITERIA

The opening passes only if all are true:

## Narrative
- no fragments before `So I started collecting things.`
- fragments arrive only after that thought is established
- fragments arrive progressively, not in a burst
- fragments persist through the problem and system beats
- the real product appears before suction
- viewer receives a readable hold
- suction clearly communicates collection

## Text
- text feels anchored
- text does not travel more than evidence
- no fragment ever crosses the text reading area
- text functions as an exclusion zone

## Motion
- fragments feel buoyant / helium-like
- each fragment has independent timing
- no synchronized floating
- no jumps between scene positions
- macro path and micro float remain visually continuous
- no dead scroll zone
- no more than two meaningful moving ideas at once

## Receipts
- look like actual thermal-paper receipts
- not UI cards
- materiality readable immediately

## Phone
- smaller than v4
- readable but not dominant
- destination rather than hero

## Hold
- visible and perceptible
- approximately 0.9–1.2s
- fragments still float during hold

## Suction
- guaranteed to trigger
- begins after hold
- visible
- staggered
- accelerating
- reads as "collection"
- all fragments collected

## Responsive
Must check:
- 1440 desktop
- 390 mobile

## Reduced motion
Story remains understandable without continuous motion.

---

# 27. QA STANDARD FOR THE ENTIRE CASE STUDY

When the opening passes and full page work resumes, use four passes:

## Pass 1 — Instruction Fidelity
Check:
- exact copy
- no invented sections
- no unapproved assets
- narrative order
- source-of-truth compliance

## Pass 2 — Technical Responsive
Check:
- 1440
- 1280
- 390
- 360

No extra breakpoint unless a verified defect requires it.

## Pass 3 — Visual QA
Actually render and inspect screenshots.
Do not say "looks good" from code alone.

Check:
- crop sharpness
- typography rhythm
- motion overlap
- alignment
- visual continuity
- responsive composition
- product UI fidelity

## Pass 4 — Narrative QA
Read / scroll as a user.

Check:
- does every beat cause the next beat?
- does the motion communicate causality?
- does proof arrive when the story needs it?
- does the page feel continuous rather than modular?

Never claim full QA unless all four passes happened.

---

# 28. REAL PRODUCT SCREEN RULES

The portfolio must use real product UI.

Allowed:
- direct captures from actual Financial repo runtime
- direct crops from real captures
- full app screen inside a simple thin phone bezel when whole-screen context is important

Not allowed:
- hand-recreated product UI
- "source-faithful" manual reconstructions presented as real
- fake app shell that swaps standalone docs
- invented values for product screens
- fake navigation
- fake Madrid task wording

Known previous local reconstructions such as:
- `transactions-mobile.html`
- `grocery-mobile.html`
- `home-real-mobile.html`
- `insights-real-mobile.html`
- `madrid-real-mobile.html`
- `explorer-real-mobile.html`

must **not** be described as exact live captures.

Some were manually source-faithful, but that is still not a real runtime capture.

---

# 29. PRODUCT SCREENSHOT / CROP PROCEDURE

For every product visual:

1. Run the real product code.
2. Use real repo demo data.
3. Navigate to the exact feature/state.
4. Capture at sufficient pixel density.
5. If only a feature region matters, crop directly.
6. Preserve complete controls / text lines.
7. Do not cut meaningful boundaries just to fit aspect ratio.
8. Prefer source image resolution ≥2x displayed CSS size when possible.
9. Animate a wrapper, not the screenshot bitmap itself if that preserves sharpness.
10. Do not blur product screenshots.

Canonical asset naming from master spec:
- `ff-first-product.*`
- `ff-automation-01.*`
- `ff-automation-02.*`
- `ff-automation-03.*`
- `ff-item-level.*`
- `ff-insights.*`
- `ff-madrid.*`

Opening evidence:
- `ff-opening-receipt-supermarket.*`
- `ff-opening-receipt-household.*`
- `ff-opening-wallet.*`
- `ff-opening-card-notification.*`
- `ff-opening-sms.*`

---

# 30. OTHER APPROVED CASE-STUDY STRUCTURE AFTER OPENING

Do not implement yet until opening passes, but preserve this roadmap.

## After first product screen
`Now everything was in one place, see?`

`But the system still expected me to do the boring parts.`

Ticker directly underneath with reduced gap.

Small aside:
`Oh hell no.`

## House thought
`I REALLY need to stop buying random stuff for the house.`

## Automation
`So I kept giving it more to do.`

Use compact product proof.
A carousel is approved where previously agreed.

No autoplay unless explicitly approved.

Manual prev/next and swipe okay.

Crops must be crisp and tied to feature boundaries.

## Ask only when needed
`When it really does need me, it can ask.`

Use one realistic Android missing-receipt notification for Rami Levy.

Do not show a full Attention screen here.

Real demo task amount:
`רמי לוי · 487.30 ₪`

External Android notification fabrication is authorized for this storytelling beat.

## Three receipts
Use:
- Max Stock
- supermarket
- Home Center

Desktop:
all three visible together side-by-side.

Mobile:
all three visible together compactly.

Do **not** turn these three receipts into a horizontal carousel.

No category tags.

Show transformation from receipt line items into real item-level product understanding.

## Insights
`Suddenly the data could tell me other things as well.`

Use genuine real product Insights capture.

## Motivation
Exact locked copy:
`Making it easier helped. But I also wanted a reason to keep going,`

`because making it easier didn’t automatically make it something I’d want to stick with.`

Use Madrid real product state.

## Current state
`It’s currently in development, and I’m still refining it as we use it.`

## Ending
`The story stops here, but there is so much more to it. Go ahead, poke around.`

Then final real Home screen interactive state.

Then:
`Cool, right?`

Do not build a fake interactive shell.

---

# 31. MOTION DENSITY MAP FOR FULL PAGE

Opening:
HIGH

Problem:
LOW–MEDIUM

System takeover:
HIGH

Boring work:
LOW

Automation:
LOW–MEDIUM

Ask when needed:
LOW

Item-level understanding:
HIGH

Insights:
LOW

Motivation / Madrid:
MEDIUM

Ending:
LOW

Primary full-page spectacle moments:
1. floating evidence → collection into product
2. receipt line-items → structured item-level understanding

Kinetic typography supports continuity but should not become a third spectacle.

---

# 32. FULL-PAGE DESIGN FAILURE TO AVOID

Earlier versions felt amateurish because:
- typography too large / bold
- opening explanation / metadata distracted from story
- fragments did not visibly float enough
- screenshots were sparse
- carousel crops were blurry
- phones were used where direct crops would have been better
- manually reconstructed UI was presented too prominently
- page read as `sentence → screenshot`
- evidence looked like UI cards instead of physical material
- too many independent section layouts
- motion was trigger-based rather than continuous

The professional target is:
**decision → proof → consequence**

Not:
**sentence → screenshot**

---

# 33. OPENING PROJECT METADATA RULE

Earlier approved metadata existed:
`A family finance system I’m building for our household`
`Role: Product, UX & implementation`
`Status: Currently in development`

But the latest explicit user feedback was:
> remove the explanation at the beginning

Therefore:
- do not put project metadata/orientation explanation in the opening
- latest correction wins

Do not reintroduce it without asking.

---

# 34. HOW PROMPTS SHOULD BE WRITTEN

Prompts for implementation agents must be:

## A. Scope-first
Start with exactly what the agent is allowed to change.

Example:
> Correct only the Family Finance opening prototype. Do not modify any section outside the opening.

## B. Explicit change control
State:
> Preserve all existing approved copy exactly. Do not add, remove, rewrite, or improve copy. If something is not explicitly mentioned, leave it unchanged.

## C. Source-of-truth order
State:
> Use latest user corrections first, then approved source copy, then approved visual decisions, then real Financial repo code/assets. Do not use rejected drafts as authority.

## D. Behavior before styling
Describe:
- what should happen
- in what order
- what should not happen
- what counts as failure

Do not just say:
"make it smoother"
"make it more premium"
"make it kinetic"

Translate those into deterministic behavior.

## E. Numerical constraints when useful
Examples:
- phone width range
- hold duration
- amplitude
- stagger
- viewports
- breakpoint
- max moving concepts

But do not introduce arbitrary numbers if they are not needed.

## F. Acceptance criteria
Every implementation prompt should end with:
- pass conditions
- fail conditions
- required viewports
- QA method

## G. Missing asset behavior
Always state:
> If a required real asset is missing, stop and report it. Do not substitute fake UI.

## H. No hidden reinterpretation
Never let an agent "simplify the narrative" or "improve readability" by rewriting approved copy or reorganizing story order.

---

# 35. PROMPT TEMPLATE — IMPLEMENTATION

Use this template when starting a concrete coding pass:

```text
TASK
[One sentence defining exactly what to implement.]

SCOPE
You may modify only:
- [specific section/file/component]

You must not modify:
- [everything else]

SOURCE OF TRUTH
1. Latest explicit user corrections
2. Locked approved Family Finance copy
3. Approved visual/motion decisions
4. Current real Financial repo code/assets
5. Previous drafts only when explicitly referenced

CHANGE CONTROL
- Do not change copy.
- Do not add explanatory text.
- Do not invent product UI.
- Do not add decorative elements.
- If something is not explicitly addressed, preserve it.
- If a required real asset is unavailable, stop and report it.

EXACT BEHAVIOR
1. [...]
2. [...]
3. [...]

MOTION
- [...]
- [...]

VISUAL
- [...]
- [...]

RESPONSIVE
Desktop:
- [...]

Mobile:
- [...]

FAIL CONDITIONS
- [...]
- [...]

QA
Render and inspect:
- 1440px
- 390px

Do not claim success from code inspection alone.
Return:
1. exact files changed
2. concise change log
3. QA results
4. any remaining blocker
```

---

# 36. PROMPT TEMPLATE — NO IMPLEMENTATION / AUDIT FIRST

When the task is not yet ready to code:

```text
Do not implement yet.

First produce:
1. exact asset inventory
2. exact shot list
3. motion map
4. desktop layout plan
5. mobile layout plan
6. missing assets / blockers
7. source-of-truth conflicts

Do not write code until the above is approved.

Do not invent missing product states.
Do not substitute manually recreated UI.
```

---

# 37. PROMPT TEMPLATE — SURGICAL REVISION

When modifying an existing approved implementation:

```text
This is a surgical correction, not a redesign.

Change only:
- [specific issue]

Preserve:
- all copy
- all unaffected layout
- all unaffected motion
- all approved assets
- existing narrative order

Do not:
- clean up unrelated code
- refactor for style
- rename unrelated classes
- alter typography outside the target
- add new components
- make "helpful" improvements

Return a change log listing only the requested changes.
```

---

# 38. PROMPT TEMPLATE — QA

```text
Do not redesign.

QA the current implementation in four passes:

PASS 1 — Instruction fidelity
Check all locked copy, scope, asset authenticity, and narrative order.

PASS 2 — Technical responsive
Test 1440, 1280, 390, 360.

PASS 3 — Visual
Render screenshots and inspect actual output:
- typography
- overlap
- crop quality
- sharpness
- motion
- spacing
- continuity

PASS 4 — Narrative
Slow-scroll the page and verify that each visual/motion beat communicates the intended cause/effect.

Do not mark PASS if only the code looks correct.
List every failure explicitly.
Do not fix anything unless asked.
```

---

# 39. CODEX / AGENT WORKING RULES

When handing work to Codex or another coding agent:

- Prefer one defined change-set at a time.
- Do not ask for "polish the whole page."
- Give exact files if known.
- Require no unrelated refactor.
- Require a change log.
- Require explicit blockers.
- Require visual QA before claiming done.
- Do not let the agent produce fake screenshots.
- Do not allow placeholder fake product screens when a real product asset is required.
- Do not allow invented app content just to make a screenshot visually convenient.
- Preserve repo state unless changes are explicitly authorized.
- Do not create commits unless explicitly asked.
- If using a branch, name it clearly and do not merge without approval.

For this portfolio task specifically:
- prefer prototype file first
- visually validate
- only then integrate into the final Family Finance page

---

# 40. CURRENT NEXT PROMPT — READY TO PASTE

This is the best next implementation prompt for a fresh chat / agent:

```text
We are continuing the ROTKA Family Finance portfolio case study from the opening prototype work. Read the full handoff file before doing anything.

TASK
Build the next opening-only prototype. Do not continue to the rest of the case study.

SCOPE
Modify only the opening:
- “I wanted to know - where our money was going?”
- “So I started collecting things.”
- five evidence fragments
- “The problem wasn’t finding the information,”
- “It was me.”
- “I didn’t want another system to manage. I wanted something to manage it for me.”
- first real product-screen destination
- reveal → hold → suction

Do not modify anything outside this opening.

CHANGE CONTROL
- Keep all approved copy exact.
- Do not add copy.
- Do not add sections.
- Do not add decorative objects.
- Do not invent product UI.
- If a required real product asset is missing, stop and report it.
- Do not inherit broken motion mechanics from v4 just because they already exist.

REBUILD THE OPENING MOTION ARCHITECTURE
The current v4 failed because:
1. there is a soft/dead scroll stretch between “So I started collecting things.” and “The problem wasn’t finding the information,”
2. fragments can cross under/over the text,
3. fragment positions visibly jump between the problem beat and the phone beat,
4. receipts still look like designed cards rather than thermal paper,
5. the phone is still too large,
6. suction again did not visibly happen,
7. some fragments remain floating under the phone.

REQUIRED BEHAVIOR

1. Intro:
Show only “I wanted to know - where our money was going?”
No fragments yet.

2. Collection thought:
Reveal “So I started collecting things.”
Let it become visually established higher in the viewport.

3. Evidence arrival:
Only after that line is established, introduce the five fragments slowly and progressively through scroll.
Do not reveal them in a burst.
Spread their arrival over meaningful scroll distance.

4. Physical text exclusion:
Treat every active text block as a physical exclusion rectangle.
Fragments may never overlap, pass over, pass behind, or pass through the text.
If a fragment trajectory would cross the text, route it smoothly around the side / above / below the full text block.
Never jump it to another side.

5. Continuous fragment motion:
Each fragment must have:
- independent helium-like ambient motion
- macro movement through the opening scene
- continuous position interpolation
- no coordinate jumps between narrative beats

Text is the anchor.
Fragments are the moving layer.

6. No dead scroll:
Remove any scroll distance where neither narrative state nor evidence relationship changes meaningfully.

7. Problem:
At:
“The problem wasn’t finding the information,”
“It was me.”
the text should feel anchored.
Fragments continue floating around it without touching the reading area.

8. System:
Reveal:
“I didn’t want another system to manage. I wanted something to manage it for me.”
Fragments remain active.

9. Product destination:
Reveal the first real product screen.
Make the phone smaller than v4.
Start around 240–270px desktop and only increase if needed for legibility.
It should feel like a destination, not a hero takeover.

10. Hold:
Once the destination is fully revealed, enter an explicit HOLD state for ~0.9–1.2 seconds.
During the hold, fragments continue floating.
Do not begin clear inward motion yet.

11. Deterministic suction:
After the hold, trigger suction exactly once without requiring further scroll.
Use an explicit state-machine transition, not a fragile intersection threshold.
The suction must be visibly readable.
Start each fragment from its actual current floating position.
Accelerate inward.
Stagger the fragments.
Fade only near the end.
Collect all five.
No fragments may remain outside afterward.

12. Receipt realism:
Do not keep the CSS-card receipt look.
Use real or photorealistic thermal-paper receipt assets:
- thin thermal paper
- slight curl/bend
- non-uniform tone
- realistic print density
- imperfect edge
- natural physical shadow
- no rounded UI-card appearance

MOTION CHARACTER
Fragments should feel buoyant like helium balloons:
- slow
- alive even when scroll stops
- independent vertical/horizontal drift
- slight independent rotation
- no bounce
- no spring
- no synchronized motion

QA
Test and visually inspect:
- 1440px desktop
- 390px mobile

PASS only if:
- fragments appear gradually after the collection thought,
- text remains readable and physically protected,
- fragments move continuously around text,
- no dead scroll zone,
- no fragment jump,
- phone is visibly smaller,
- hold is perceptible,
- suction definitely happens,
- all fragments are collected,
- receipts read as real thermal paper.

Do not claim QA from code inspection alone.

Return:
1. prototype file
2. exact change log
3. 1440 QA result
4. 390 QA result
5. any blocker
```

---

# 41. THINGS A NEW CHAT MUST NOT FORGET

- Opening only until it passes.
- User wants much more kinetic continuity than earlier page versions.
- Text is now a physical exclusion object.
- Fragments are the main motion layer.
- Fragments must accumulate slowly through scroll.
- Fragments should feel helium-like, not like cards sliding on rails.
- No dead scroll.
- No jump between narrative zones.
- Phone smaller.
- Product is real.
- Receipt material must be believable.
- Destination must fully reveal first.
- Hold must be visible.
- Suction must be deterministic and guaranteed.
- All fragments must be collected.
- Do not proceed to full page before opening QA passes.
- Do not rewrite copy.
- Do not invent.
- Do not claim visual QA without rendering.

---

# 42. SHORT CONTINUATION MESSAGE FOR A NEW CHAT

After uploading / attaching this file in a new chat, send:

> **ממשיכות את Family Finance בדיוק מהנקודה שבקובץ ה־handoff. תקראי אותו במלואו לפני שאת עושה משהו. כרגע המשימה היא רק ה־opening הבא, לפי סעיף 40. אל תשני שום דבר שלא כתוב ואל תמשיכי לשאר העמוד עד שה־opening עובר QA.**

That should be enough to resume without re-explaining the project.

---

# END OF HANDOFF
