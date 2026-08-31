# ROTKA PORTFOLIO — FULL CONTINUITY HANDOFF
## Consolidated backup of the current conversation
**Date:** 2026-08-30  
**Purpose:** This is the continuity document for moving this portfolio work into a new ChatGPT conversation without losing the design history, abandoned directions, locked decisions, current working assumptions, current exact stopping point, and operating rules.

> **If this file is sent in a new chat, treat it as if the conversation is continuing naturally from the current thread.**
>
> Read it in full before proposing, designing, generating, implementing, or changing anything.
>
> This document consolidates and updates the earlier portfolio/homepage/Family Finance handoffs. Where this file conflicts with an older handoff, **this file wins**, unless the user explicitly overrides it later.

---

# 0. HOW TO USE THIS HANDOFF

The project is a personal Product / UX portfolio by Rotem Kasahun.

The current work has two connected layers:

1. **Portfolio homepage / visual language**
2. **Family Finance case study inside the portfolio**

The homepage was deliberately used as the place to establish the portfolio’s visual/art-direction language. Family Finance is now being redesigned using that language, but it should not simply copy the homepage.

The newest working approach is:
- preserve what already worked narratively;
- avoid redesigning from scratch;
- use the earlier Family Finance case-study flow as the **structural skeleton**;
- improve it with the newer editorial/art-directed system;
- integrate UX/Product decision depth **inside the relevant story moments**, not as a detached appendix;
- distinguish the portfolio shell from the Family Finance product UI;
- keep the whole experience web-based, while Family Finance product mockups shown inside the case study should read as **mobile app states**.

---

# 1. OPERATING RULES — HARD REQUIREMENTS

Use the previously supplied `ROTKA_PORTFOLIO_OPERATING_PROMPT` as an ongoing behavioral contract.

The most important rules for continuation are:

- Do not ask the user to repeat decisions already documented.
- Do not redesign unless explicitly requested.
- If the user asks to change one thing, do only that thing.
- Preserve locked copy exactly unless the user explicitly reopens it.
- Do not invent metrics, research, product behavior, evidence, screenshots, or capabilities.
- Do not silently “improve” wording.
- If the user says `לא לעצב`, `רק לענות`, `מה דעתך`, or similar → analyze only.
- If the user says `קדימה` after a spec is clear → execute; do not ask the same questions again.
- If the user says `QA` / `תבדקי` → inspect first; do not silently fix.
- Do not claim final / PASS / pixel-perfect unless actually rendered and inspected.
- Do not modify GitHub, commit, push, merge, create branches, or change connected resources unless explicitly asked.
- Keep narrative causality in motion.
- Motion is never decorative.
- Text readability wins over animation.
- A portfolio page must feel like **one authored visual environment**, not a stack of sections.

## User-specific design-control lesson from this thread

The user has repeatedly had to correct generated visuals that ignored already-locked rules. Future work must therefore self-QA **before showing anything**.

Before showing a visual, check it against this handoff and reject/regenerate it yourself if it visibly violates:
- typography rules;
- palette;
- no-handwriting rule;
- no-doodles/arrows rule;
- product/web distinction;
- copy lock;
- current narrative structure;
- current source-of-truth skeleton.

---

# 2. PORTFOLIO POSITIONING

The portfolio should position Rotem broadly around:
- Product thinking
- UX
- product ownership / product logic
- systems thinking
- behavioral friction
- research-informed product decisions

Do not frame her narrowly as “UI designer”.

The portfolio is laptop/desktop-first as a website, but should remain mobile-readable.

The work should communicate:
> “This person notices friction, understands why it happens, and changes the system around it.”

---

# 3. PORTFOLIO-WIDE VISUAL TARGET

The target is not “a pretty UX portfolio.”

It should feel like:
- a high-end magazine;
- an editorial feature;
- a curated design catalogue;
- a fashion/product art-direction spread;
- a museum/object-display system;
- a personal archive;
- a designer/art director carefully chose every scale, crop, margin, and object.

Core feeling:
**curated, intelligent, artistic, precise, quiet but memorable, high-end, authored.**

The user likes:
- asymmetry;
- strong crop/scale relationships;
- real objects;
- controlled layering;
- unusual but restrained composition;
- large negative space;
- product/catalogue photography logic;
- editorial rhythm;
- moments that feel hand-picked rather than templated.

The user dislikes:
- SaaS-style portfolio layouts;
- Behance-style generic case-study stacks;
- endless rounded cards;
- generic pastel cards;
- fake device mockups used as decoration;
- abstract shapes whose only role is “personality”;
- visual clutter with no semantic purpose;
- stock-like “creative portfolio” tropes.

---

# 4. HARD VISUAL RED FLAGS

Do not introduce these unless the user explicitly changes direction:

- handwriting;
- handwritten annotations;
- hand-drawn arrows;
- doodles;
- sketchy lines;
- sticky notes;
- masking tape;
- paper scraps as decoration;
- scrapbook/craft aesthetic;
- random rotations;
- “cute” motifs;
- generic colorful shape systems;
- heavy coral / terracotta / green accent systems;
- muddy grey-beige canvas;
- cold corporate grey;
- arbitrary bright red;
- obvious “UX school project” diagrams;
- repeated component/card grids;
- typewriter/mono aesthetics;
- heavy serif;
- script fonts.

One of the clearest failures in this thread was a Family Finance visual that used handwritten callouts, arrows and red emphasis. The user immediately rejected it because those elements were explicitly against her rules.

---

# 5. TYPOGRAPHY — CURRENT STATUS

Historically, **Manrope** was the primary portfolio typeface and large/heavy typography was repeatedly rejected.

Current typography rules:
- smaller;
- lighter;
- tighter;
- editorial;
- bold used sparingly;
- no hero-headline inflation;
- sans-first.

The user recently became less certain that the current Manrope treatment is right everywhere and asked to explore other fonts.

Recent font exploration included:
- Manrope;
- Satoshi-like clean sans direction;
- Whyte-like refined sans direction;
- one restrained serif accent direction.

The user’s reaction:
- B and C sans options looked almost the same to her;
- she is **not naturally drawn to serif**, unless it is extremely subtle;
- serif is not prohibited absolutely anymore, but it is not a preferred main direction;
- do not let font exploration block the case-study structure.

So:
- primary direction remains **clean refined sans**;
- a very subtle serif accent may be tested later if genuinely useful;
- serif is **not locked**;
- font choice remains open and should be evaluated in actual page context, not in isolation.

---

# 6. HOME PAGE — WHY IT MATTERS

The homepage was used as the visual source of truth for:
- palette;
- typography treatment;
- object/evidence treatment;
- crop;
- spacing rhythm;
- shadows/materiality;
- editorial composition;
- interaction language;
- motion;
- overall “Rotem visual identity”.

The homepage went through many explorations. The important conclusion was:

> **Do not design a portfolio first and then make it artistic. Build a curated visual world through meaningful objects, real work, composition, and behavior.**

The user repeatedly rejected layouts that still felt like:
`hero → index → project cards`

even when the colors were nicer.

---

# 7. HOMEPAGE REFERENCES / LEARNINGS

Primary inspiration came from Pinterest screenshots the user supplied.

Important compositional references included:
- a Tame Impala page with a huge vinyl record partially outside the frame;
- isolated real product/tool objects on pale backgrounds;
- personal-object fields / object portraits;
- bookshelf/project-as-object compositions;
- table-of-contents specimen layouts;
- muted project bands;
- retro screens / isolated objects;
- sparse image-led compositions.

Borrow:
- scale;
- crop;
- object isolation;
- negative space;
- editorial taxonomy;
- asymmetry;
- visual hierarchy.

Do not borrow:
- handwriting;
- taped-paper aesthetics;
- doodles;
- proprietary artwork.

---

# 8. HOMEPAGE — CENTRAL OBJECT DIRECTION

The strongest homepage idea became the **refrigerator** because it was not decorative: it demonstrated a real behavioral friction.

Underlying principle:
> same person + same intention + different environment = different behavior

The real-life insight:
- vegetables hidden in the drawer are forgotten;
- moving them to visible door shelves makes them more likely to be used.

This was considered much stronger than abstract hero shapes because it shows how Rotem thinks through a real everyday system.

---

# 9. FRIDGE — REAL-WORLD REFERENCE

The user uploaded photos of her actual refrigerator.

Important details:
- brand: Sharp;
- model visible: SJ-3850-BE;
- real exterior tone: light beige / champagne / cream metallic;
- the user strongly prefers this to black or cold silver.

Locked:
- beige/champagne/cream-metallic refrigerator;
- warm-clean surrounding palette;
- no black fridge;
- no silver stainless-steel-looking fridge;
- no photos/magnets on the exterior;
- clean product/editorial presentation.

---

# 10. FRIDGE — STRUCTURE / PROPORTIONS

The fridge must read as a realistic full-size refrigerator.

Repeated failures:
- generated fridge looked like a mini-fridge;
- lower refrigerator compartment was too short;
- body became too square/cubic;
- door proportions did not feel believable.

Desired:
- realistic tall refrigerator proportions;
- upper freezer smaller;
- lower refrigerator door larger/taller;
- only lower refrigerator door opens;
- freezer stays closed;
- lower door opens wide enough to see both interior and door shelves.

A later idea was to **crop away the freezer** and show only a huge crop of the lower refrigerator compartment. The idea was liked conceptually because:
- the freezer contributes nothing to the story;
- the relevant part can become much larger;
- the crop could feel more editorial/Tame-Impala-like.

However, generated attempts did not consistently achieve the crop correctly. This remains a visual treatment option, not a requirement.

---

# 11. FRIDGE — LIGHTING / COLOR

There were repeated complaints that the fridge visuals looked:
- too yellow;
- melancholy;
- sepia-like;
- dim inside.

Current correction:

**Portfolio/background**
- clean ivory / off-white;
- warm but not yellow;
- no golden glow over the whole frame.

**Fridge exterior**
- beige/champagne;
- warm but neutral.

**Fridge interior**
- significantly brighter;
- high-key white appliance lighting;
- crisp, clean glass;
- minimal heavy shadow;
- product-photography brightness.

Important:
Even the “before” state must not look like a sad dark fridge.  
The problem is the vegetables, not the photography.

---

# 12. FRIDGE — BEFORE / AFTER LOGIC

## Before
- vegetables are **only** in the bottom crisper/drawer;
- vegetables are visibly wilted / rotten / neglected;
- no vegetables elsewhere in fridge body or door;
- condiments such as ketchup, mustard, mayonnaise are on the door;
- neutral foods in fridge body;
- neutral contents should not visually compete.

## After
- vegetables move to upper/middle door shelves;
- they are fresh, colorful and immediately visible;
- body shelves remain neutral;
- bottom door shelf can hold neutral bottles;
- condiments move into bottom drawer;
- no body-shelf produce.

Key visual behavior:
> the color mass moves from drawer → door.

---

# 13. EXTERNAL PRODUCE COLUMN

The user explicitly asked not to forget this.

Locked direction:
- a vertical editorial comparison of the **same vegetables**;
- before = rotten/wilted;
- after = fresh;
- vegetables shown individually like catalogue specimens;
- not one big pile;
- same vegetable types aligned before/after;
- positioned between text and fridge, closer to fridge;
- should feel like part of art direction, not a classroom infographic.

This external produce comparison must remain part of the current homepage direction.

---

# 14. FRIDGE INTERACTION EXPLORATIONS

Several interaction ideas were explored.

## A. Full animated fridge loop
Concept:
closed → opens to bad state → closes → opens to good state → closes → repeats.

Prototype GIFs:
- `ROTKA_fridge_loop_motion_prototype_v1.gif`
- `ROTKA_fridge_loop_hingedoor_v2.gif`
- `ROTKA_fridge_loop_fixed_body_QA_v3.gif`

Why it failed:
- hinge movement looked fake / Franken-fridge;
- body consistency broke;
- animation quality was not high enough;
- too hard to keep appliance geometry believable.

Decision:
Do not prioritize full hinge animation.

## B. Drag-and-drop vegetables
Concept:
- initial instruction: “Put the vegetables in the fridge”;
- visual drag hint loops until the user interacts;
- wrong placement in drawer → vegetables wilt/rot → then automatically return outside;
- correct placement on door → fresh state;
- explanation appears after success.

Good UX idea, but user ultimately wanted to move faster.

Potential tone issues:
- risk of looking like a children’s game;
- too much implementation complexity.

Decision:
Interesting, but paused/abandoned for now.

## C. Drawer vs door objects
Concept:
show only oversized drawer and door shelf instead of full fridge.

User reaction:
interesting and visually stronger than some full-fridge attempts.

Problem:
uncertainty whether viewers would immediately understand the objects as fridge drawer / door shelf.

Decision:
not selected.

## D. Static before/after diptych
Clear but more like a case-study comparison; less special.

Decision:
not primary.

## E. Specimen wall of vegetables
Visually curated but risks feeling like an infographic.

Decision:
not primary.

## F. Toggle
This became the preferred direction because it is:
- clear;
- technically simpler;
- interactive without being overcomplicated;
- allows same fridge composition with state change.

Current homepage interaction direction:
**Before / After toggle**.

A subtle motion/light cue may later be added so visitors understand it is interactive.

---

# 15. HOMEPAGE FRIDGE COPY — CURRENT WORKING COPY

Earlier locked/current copy was considered too explanatory in the new toggle context.

A new working copy was chosen:

### Before
`If the vegetables are hidden in the drawer, I forget they exist.`

### After
`So I stopped hiding them.`

This is the current working hero copy.

The user liked it because it is:
- direct;
- personal;
- clear;
- not “UX copy”;
- lets the toggle do the rest of the explanation.

Treat this as the current working copy unless explicitly reopened.

---

# 16. HOMEPAGE STATUS / STOPPING POINT

The homepage fridge direction is **good enough to move on for now**, not fully polished/final.

Do not spend another long cycle on it before the rest of the portfolio progresses.

Current homepage bundle:
- ivory/off-white clean background;
- beige/champagne Sharp-like fridge;
- bright white fridge interior;
- Before/After toggle;
- current short copy above;
- external before/after produce column;
- editorial/high-end magazine treatment.

The user explicitly decided to move on to the other pages rather than perfect the fridge indefinitely.

---

# 17. FAMILY FINANCE — CURRENT GOAL

Family Finance is the main case study currently being developed inside the portfolio.

The user does **not** want a brand-new case-study architecture.

The current rule is:

> Use the earlier Family Finance case-study flow as the structural skeleton, then refine it with the newer editorial/art-directed visual language and the UX decision layer.

The specific skeleton image the user selected is:

`/mnt/data/a518ed31-a866-439b-8e08-e0c2bc58f97f.png`

This is the source-of-truth skeleton for the next stage.

Do not use the later rigid timeline/card versions as the new skeleton.

---

# 18. FAMILY FINANCE — WHAT THE CASE STUDY SHOULD FEEL LIKE

The opening can be theatrical / expressive, “like the beginning of a show.”

After the opening, the case study should become calmer and more editorial.

Desired rhythm:
- Opening = expressive
- Story decisions = precise
- Product = polished
- Outcome/current state = quieter

The user wants the case to be:
- not too long;
- not too short;
- edited like a feature article / short film;
- still unique;
- not flattened into a generic UX case study.

Do not show every historical design decision.

Select what advances:
- the problem;
- the shift in thinking;
- the product behavior;
- trust;
- meaningful user value.

---

# 19. FAMILY FINANCE — IMPORTANT PRODUCT-TRUTH NOTE

The app is **still in development**.

Therefore:
- lack of full validation is not automatically a reason to remove a decision;
- the case should be honest about status;
- it is acceptable to show decisions as implemented / designed / in progress / partially validated;
- do not pretend production validation exists where it does not.

The user explicitly rejected using “not enough validation” as a reason to omit important decisions.

---

# 20. FAMILY FINANCE — WEB VS MOBILE DISTINCTION

This was clarified strongly and must not be misunderstood again.

**The portfolio website and Family Finance case-study page are web.**

But:

> **Any visual that represents the Family Finance product itself inside the case study should read as a mobile app mockup/state.**

So:
- portfolio shell = web editorial page;
- case-study composition = web;
- product evidence/mockups inside it = mobile.

The user does not want the product to be shown primarily as a desktop/web dashboard in the case-story visuals.

This is partly to make it visually obvious that Family Finance is an app/product experience, not a management dashboard.

---

# 21. FAMILY FINANCE PRODUCT MOCKUPS — ART DIRECTION

The mobile product mockups should not visually merge with the portfolio canvas.

Use a subtle distinction:

**Portfolio**
- cleaner off-white / ivory;
- editorial;
- more neutral.

**Family Finance product**
- creamier;
- slightly warmer;
- product-like;
- can contain a little more color;
- still restrained.

The two should feel related but distinct:
> sister languages, not the same layer and not completely different brands.

The user likes the more polished mobile mockups generated in the recent wireframes and is open to designing polished case-study mockups based on the real product principles/behaviors, even if the runtime screenshots are less visually polished.

Important accuracy rule:
- do not invent capabilities;
- mockups may visually polish or reconstruct known product states for storytelling;
- label/describe validation honestly;
- real evidence/proof can still appear deeper in the case study.

This is a current user-authorized refinement of the older “only real runtime visuals” rule for portfolio storytelling.

---

# 22. FAMILY FINANCE — OPENING COPY / NARRATIVE

Existing working opening copy includes:

`I wanted to know — where our money was going?`

Then:

`So I started collecting things.`

Then:

`The problem wasn’t finding the information,`
`It was me.`

Then:

`I didn’t want another system to manage.`
`I wanted something to manage it for me.`

The opening is a narrative hook, not a section-title-heavy layout.

---

# 23. FAMILY FINANCE — OPENING MOTION

Preferred structure:

1. Large opening statement.
2. `So I started collecting things.`
3. Meaningful whitespace.
4. Evidence fragments begin appearing one by one.
5. Approximate entry pace discussed:
   - around 1 second to 1.25 seconds per fragment;
   - exact timing still open.
6. Fragments gradually accumulate.
7. Controlled overload builds.
8. `The problem wasn’t finding the information, it was me.` appears later.
9. Fragments drift/flow toward the right and continue accompanying the narrative toward the product.

The goal:
**collection → overload → realization → system**

No:
- handwriting;
- arrows;
- red emphasis;
- fake annotation board.

---

# 24. FAMILY FINANCE — EVIDENCE TREATMENT

A three-option exploration was made.

## Option 1 — Editorial horizontal evidence strip
The user liked this the most.

Characteristics:
- large evidence objects;
- receipts / SMS / Wallet / order confirmations;
- catalogue-like;
- real/real-feeling;
- spacious;
- strong editorial composition.

Concern:
the initial version was too wide for normal web.

Refinement:
- keep the Option 1 spirit;
- do not force five equal items into one endless row;
- allow 3 dominant items + 1–2 partial/lower continuation items;
- use crop;
- use responsive asymmetry.

This is the current evidence-layout direction.

## Option 2 — Vertical collection
User also liked it as an option.
It is clearer narratively but more case-study-like.

## Option 3 — asymmetric two-column / grid
Less preferred.

Current selection:
**Option 1 direction** for the opening.

---

# 25. FAMILY FINANCE — ABANDONED OPENING VISUAL

A generated opening used:
- serif;
- red emphasis;
- handwriting;
- hand-drawn arrows;
- labels like “SMS from bank”.

It was strongly rejected.

Why:
- directly violated hard style rules;
- looked like UX-school / research-board aesthetic;
- not high-end editorial.

Do not recreate this.

---

# 26. FAMILY FINANCE — STORY SKELETON

The earlier case-study flow being preserved has these broad beats:

1. Opening / collecting / overload
2. Everything in one place
3. Automation / “boring parts”
4. Ask only when needed
5. Item-level understanding
6. Insights
7. Motivation / Madrid
8. Current state
9. Ending / poke around

The exact layout should not become a rigid numbered timeline. The skeleton is narrative, not a template.

---

# 27. SECTION 2 — “EVERYTHING IN ONE PLACE”

This section needs a clear emotional beat:

### first:
`Now everything was in one place.`

This is a real small success moment.

The user suggested a small smile/cue to communicate relief/success.

Important:
Do not use an oversized cute yellow emoji.

It should be:
- tiny;
- restrained;
- almost typographic/graphic;
- editorial.

Then allow a moment of visual breathing.

Use one strong Family Finance **mobile mockup**, not a desktop dashboard.

---

# 28. THE RUNNING TICKER — CRITICAL, DO NOT FORGET

This is one of the most important newer decisions.

After the “everything is in one place” relief, the user wants a **running text line / marquee / Times-Square-like ticker in a continuous loop** showing all the things the system still expects her to do.

The ticker is essential to the story.

It is not:
- a caption;
- a tiny decorative strip;
- an annotation.

It is a major narrative beat.

Concept:
> “Great, the information is together… but now the system has created a list of jobs for me.”

Possible action-language examples already used conceptually:
- Upload receipt
- Review transaction
- Confirm category
- Match receipt
- Add missing document
- Approve expense
- etc.

Do not treat those example strings as permanently locked copy; the exact ticker text should be based on actual/approved product behavior.

Visual behavior:
- continuous horizontal loop;
- near full-width / breaks the grid;
- obvious that it continues endlessly;
- should create pressure without becoming visually obnoxious;
- no handwriting annotation beside it;
- no explanatory arrow.

After the ticker:
`Oh hell no.`

This should be:
- small;
- punchline-like;
- not a giant headline;
- placed after the overload has been felt.

Narrative beat:
**relief → system demands → ticker pressure → Oh hell no.**

---

# 29. SECTION 3 — AUTOMATION

Working story line:
`So I kept giving it more to do.`

Important correction:
Do **not** make this a feature gallery.

Recent mockups repeatedly fell into:
- auto category screen;
- rules;
- reminders;
- multiple tiny phone mockups.

The user questioned this.

Preferred:
- keep it narrative;
- maybe one strong product moment;
- perhaps one or two cropped mobile states maximum;
- do not catalogue every automation capability here.

Detailed product decisions can be surfaced later through decision depth where relevant.

---

# 30. SECTION 4 — ASK ONLY WHEN NEEDED

Working line:
`When it really does need me, it can ask.`

Visual:
- mobile notification / attention state;
- clear mobile app language.

This is the correct narrative location for the near-real-time receipt reminder decision.

Do not place the 30-second reminder card in Section 2.

---

# 31. NEAR-REAL-TIME RECEIPT REMINDER

This is an important UX/Product decision and must stay in the public case.

The discussion evolved from around 60 seconds to a shorter expectation. The current user correction is that she believes the intended value is **about 30 seconds**, not 60.

The behavioral purpose:
- remind while still at the store / while context is fresh;
- avoid later recall work;
- reduce missing-receipt friction;
- keep the system from becoming a later admin task.

Status can be shown honestly if not fully validated/implemented.

This is a strong candidate for an inline expandable decision card inside Section 4.

---

# 32. SECTION 5 — ITEM-LEVEL UNDERSTANDING

This is one of the strongest visual moments in the case study.

Narrative:
`Three receipts. One understanding.`

Concept:
- multiple receipts;
- parsed/structured item understanding;
- user can understand spending beyond transaction totals.

This deserves a larger visual moment.

Do not create a decision card that merely repeats “item-level understanding” if the section already shows it.

If a decision card appears here, it should add a different layer of reasoning, e.g. review/link-before-create or reliability/dedupe, if logically connected.

---

# 33. SECTION 6 — INSIGHTS

Working line:
`Suddenly the data could tell me other things as well.`

This should be quieter than the big moments.

Use a mobile insight state/crop.

Do not overbuild it as another large “feature section”.

---

# 34. SECTION 7 — MOTIVATION / MADRID

This is an important human layer.

Concept:
- making finance easier helps;
- but the user also wanted a reason to keep going;
- Madrid / savings goal represents motivation.

This remains in the main story.

Do not duplicate it with a decision card unless the card adds genuinely new product reasoning.

Use a mobile product state, not a web widget/dashboard.

---

# 35. SECTION 8 — CURRENT STATE

The product is still in development.

The case should say that honestly.

Current state should be visually quieter and not try to fake “finished product maturity.”

Possible decision-depth topic here:
> don’t promise a balance we can’t trust

This is considered a strong Product/Trust decision because it demonstrates restraint:
- do not show a “safe to spend” or balance concept before the underlying data is trustworthy enough.

---

# 36. SECTION 9 — ENDING

Ending should feel open rather than “final presentation slide.”

Concept:
- story stops here;
- product continues;
- invite to poke around / explore.

The user wants the project to feel alive and still developing.

---

# 37. DECISION CARDS — PURPOSE

Decision cards are **not** a separate “UX Decisions” chapter.

They are not an appendix after Section 9.

They should be:
- inserted inside or directly adjacent to the relevant story moment;
- optional depth;
- quiet when collapsed;
- richer only when opened.

Main story answers:
**what happened?**

Decision depth answers:
**why this choice, what alternatives, what trade-off, what evidence/status?**

---

# 38. DECISION CARDS — PROGRESSIVE DISCLOSURE

Collapsed state should be compact:
- category (optional/subtle);
- decision title;
- one-line takeaway;
- honest status;
- small chevron / “read why” behavior.

Expanded state can reveal:
- Context
- Decision
- Consequence
- Evidence / status
- alternatives/trade-offs where relevant.

Do not let decision cards become a permanent heavy third column.

They should behave more like:
**editorial footnotes with optional depth**.

---

# 39. DECISION CARD VISUAL NOISE RULE

Recent wireframes became noisy because every section had:
- a mobile mockup;
- a text block;
- a boxed decision card;
- same grid position;
- same status chip.

This made the page feel templated.

Correction:
- not every section gets a card;
- card collapsed state may be just a minimal strip/line;
- vary placement;
- do not repeat the exact same card block structure six times in a row;
- the story must remain dominant;
- decision depth is secondary.

---

# 40. CURRENT PUBLIC DECISION SET — KEEP / MERGE / DROP

Important decisions discussed for the public case:

## Keep as explicit depth candidates
- near-real-time / ~30-second receipt reminder;
- receipt review before creating expense / link-before-create;
- identity-safe dedupe / collision handling;
- Web full product + Android companion architecture;
- do not promise a balance that cannot yet be trusted.

## Keep in story rather than duplicate as cards
- management itself is friction / manage it for me;
- automation / boring parts;
- ask only when needed;
- item-level understanding;
- insights;
- Madrid / motivation.

## Merge
- focused mobile IA / four-item navigation → merge into Android companion/product architecture if needed; not important enough as a standalone public card right now.

## Drop from public decision set
- Hebrew-first / RTL as a headline decision. It is product context, not a core portfolio decision story.

---

# 41. FOCUSED MOBILE IA — WHAT IT MEANT

The “focused mobile IA / four-item nav” phrase referred to a product architecture idea:
- mobile should not be a miniature copy of the entire web product;
- it should focus on a smaller set of critical mobile jobs;
- receipt capture / notifications / evidence collection should be prominent.

The user did not recognize this as an important standalone decision and did not want it emphasized.

So:
do not create an independent case-study card about it unless later reopened.

---

# 42. WEB PRODUCT + ANDROID COMPANION

This is still a meaningful product architecture decision.

But do not place it randomly next to Motivation/Madrid just because a card needs a slot.

It should appear where architecture/collection/automation logic naturally arises.

The product history:
- web remains the fuller product experience;
- Android acts as native companion/collector;
- multiple alternatives existed historically;
- this is meaningful product architecture, not decoration.

However, portfolio visuals shown as “the app” in the narrative should still be mobile mockups.

The architecture decision can explain broader system roles in its expanded depth.

---

# 43. IDENTITY-SAFE DEDUPE

This is considered useful depth for trust/reliability.

It is not necessarily a major main-story section.

Use it as a compact decision layer where ingestion/matching/trust becomes relevant.

Avoid forcing it into item-level understanding if the narrative connection is weak.

---

# 44. RECEIPT REVIEW / LINK-BEFORE-CREATE

Strong Product/Trust idea:
- receipt/OCR should not automatically create a duplicate expense;
- first attempt to link to an existing transaction;
- create only when genuinely new.

This is a strong candidate for progressive-disclosure depth.

It shows:
- trust;
- system integrity;
- avoiding automation that makes the user’s data worse.

---

# 45. “DON’T PROMISE A BALANCE WE CAN’T TRUST”

Strong Product judgment moment.

The value is in **withholding a seemingly attractive feature** until data quality is trustworthy enough.

Good candidate near:
- insights;
- current state;
- data-quality discussion.

Do not position it as failure. Position it as product restraint.

---

# 46. FAMILY FINANCE MOCKUPS — REAL VS POLISHED

Earlier rule:
real runtime > real capture > authorized simulation.

Current user-approved case-study strategy:
- for the narrative/editorial layer, polished mobile mockups may be reconstructed from real product logic and approved behavior;
- this is allowed because the raw existing screens are visually weaker and the portfolio story needs a coherent art direction;
- do not invent features/states;
- do not invent metrics/validation;
- deeper proof can use real evidence/screens later where appropriate.

So the distinction is:

**storytelling mockup ≠ fake product claim**

A polished mockup is acceptable if it faithfully represents an actual/approved product behavior and status.

---

# 47. FAMILY FINANCE CASE STUDY — VISUAL RHYTHM

A major critique of later wireframes:
they became too uniform.

Bad pattern:
`number → text → phone → decision card`
repeated for every section.

Desired:
- varied scale;
- varied visual density;
- varied heights;
- occasional near-full-width moments;
- some quiet sections;
- some large object moments;
- no repeating “one template per section”.

Suggested rhythm:
1. Opening — very large / expressive
2. Everything in one place — relief then ticker drama
3. Automation — shorter
4. Ask only when needed — focused
5. Item-level — large visual moment
6. Insights — short/quiet
7. Madrid — emotional/personal
8. Current state — calm/honest
9. Ending — open / exploratory

---

# 48. CURRENT SELECTED SKELETON — DO NOT LOSE THIS

The user explicitly said:

> work on **this version as the skeleton**

Reference image:
`/mnt/data/a518ed31-a866-439b-8e08-e0c2bc58f97f.png`

This image shows:
- main story flow on the left;
- decision-card concept on the right;
- good overall pacing;
- useful relationship between text and evidence;
- sections 1–9.

But:
- do not literally preserve its separate right-hand decision-card appendix;
- cards must be integrated into relevant story moments;
- web dashboard visuals should become mobile product mockups;
- preserve the broader rhythm and storytelling logic rather than copying every component.

This selected skeleton supersedes the later generated rigid versions:
- `a_clean_portfolio_case_study_webpage_wireframe_d.png`
- `a_clean_editorial_case_study_webpage_portfolio.png`
and similar later “timeline” layouts.

Those later versions are references for specific ideas only, not structural sources of truth.

---

# 49. SPEC FOR SECTIONS 1–2 — CURRENT EXACT NEXT DESIGN GATE

This is the latest agreed section-level spec.

## Section 1 — Opening

Purpose:
**opening of a show / editorial opener**, not standard Section 1.

Headline:
`I wanted to know where our money was going.`

Treatment:
- large;
- ideally one long confident line if viewport allows;
- strong editorial presence;
- lots of air.

Then:
`So I started collecting things.`

Then:
- intentional whitespace;
- evidence fragments enter one by one;
- approximately every 1–1.25s discussed;
- different but controlled positions/scales;
- physical/material distinction;
- no handwriting, arrows, labels.

Fragments accumulate into controlled overload.

Later:
`The problem wasn’t finding the information,`
`it was me.`

Fragments begin drifting/flowing toward the right as the narrative continues.

No decision card here by default.

## Section 2 — Everything in one place

First:
`Now everything was in one place.`

Small restrained success cue.

Then:
- one strong **Family Finance mobile mockup**;
- product UI more cream than portfolio canvas;
- allow the moment to breathe.

Only after more scroll:
`But the system still expected me to do the boring parts.`

Then the major running ticker.

Ticker:
- nearly full width;
- continuous loop;
- breaks normal grid;
- communicates endless tasks/system demands;
- actual wording must stay truthful to product behavior.

After enough ticker exposure:
`Oh hell no.`

Small, punchline-like.

Then transition:
ticker reduces/disappears and Section 3 begins:
`So I kept giving it more to do.`

No 30-second reminder decision card in Section 2.

---

# 50. CURRENT EXACT STOPPING POINT

The user asked to pause design and create this full continuity backup **before** implementing the next visual.

Therefore the exact next step after this handoff is:

> **Design / mock up Sections 1–2 only**, using the selected earlier skeleton as the structural base and the Section 1–2 spec above.

Acceptance priorities for the next visual:
1. feels high-end editorial / magazine;
2. not a rigid case-study template;
3. opening feels like a show opener;
4. evidence follows Option 1 editorial-strip logic;
5. Section 2 clearly has relief → ticker pressure → `Oh hell no.`;
6. ticker is prominent and visibly loop-like;
7. Family Finance product state is mobile, not web;
8. Family Finance product UI has a subtly creamier internal visual language;
9. no decision-card clutter in these first two sections;
10. no handwriting / arrows / red / doodles / generic UI-school aesthetic.

**Hard stop after Sections 1–2.**
Do not continue to Sections 3+ until the user approves the treatment.

---

# 51. IMPORTANT GENERATED VISUALS / REFERENCES FROM THIS THREAD

These are not all source-of-truth assets, but they preserve the exploration history.

## Homepage / fridge
- `/mnt/data/-343836987399234607.png` — strong beige full-fridge before/after reference; useful appliance look.
- `/mnt/data/השוואת_מקרר_לפני_ואחרי.png` — editorial before/after fridge experiment.
- `/mnt/data/מקרר_חכם_שינוי_קטן_הבדל_גדול.png` — tall fridge composition, but still read too mini.
- `/mnt/data/wide_clean_product_style_lifestyle_website_landi.png` — crop experiment; interior brighter but wrong content/state.
- `/mnt/data/wide_clean_product_ad_style_layout_a_beige_cream.png` — brighter two-state experiment.
- `/mnt/data/wide_clean_editorial_lifestyle_infographic_compar.png` — had external produce column and better state logic but still too yellow.
- `/mnt/data/file_00000000186481f4a569ee29b3a55d3d.png` — user reference to a version whose composition/color was liked but fridge proportions still felt mini.

## Family Finance
- `/mnt/data/a_clean_editorial_portfolio_website_opening_layou.png` — rejected because of serif/red/handwriting/arrows.
- `/mnt/data/a_clean_editorial_ui_portfolio_style_mockup_image.png` — three evidence layout directions; Option 1 liked most, Option 2 also liked.
- `/mnt/data/a_clean_minimal_ux_ui_design_presentation_mockup.png` — responsive Option 1 + vertical Option 2 comparison.
- `/mnt/data/a_clean_ux_ui_design_spec_moodboard_concept_ar.png` — motion + font exploration; useful for collecting→overload→clarity idea, not visual source of truth.
- `/mnt/data/a_high_resolution_clean_ux_design_wireframe_stor.png` — initial distinction between story sections and decision cards.
- `/mnt/data/grayscale_family_finance_case_study_mockup.png` — mobile mockup exploration, but still misunderstood web/mobile distinction at the page level.
- `/mnt/data/a_clean_ui_ux_case_study_storyboard_layout_mockup.png` — ticker and card integration attempt; too rigid/annotated.
- `/mnt/data/a_clean_portfolio_case_study_webpage_wireframe_d.png` — later rigid timeline; not current skeleton.
- `/mnt/data/a_clean_editorial_case_study_webpage_portfolio.png` — later polished rigid version; user rejected direction.
- `/mnt/data/a518ed31-a866-439b-8e08-e0c2bc58f97f.png` — **CURRENT SELECTED FAMILY FINANCE STRUCTURAL SKELETON.**

---

# 52. ABANDONED / FAILED DIRECTIONS — QUICK INDEX

Do not accidentally resurrect these:

### Homepage
- abstract coral/blue/yellow shape systems;
- “portfolio mode” hero/index/cards;
- fake vintage fridge illustration as main direction;
- dark/melancholy fridge photography;
- yellow/sepia overall tint;
- full hinge animation;
- drag-and-drop as current implementation;
- mini-fridge proportions;
- silver fridge;
- kitchen/background environments;
- invented hero slogans.

### Family Finance
- scrapbook research board;
- handwriting annotations;
- red emphasis;
- serif-heavy editorial copy;
- detached right-column decision-card appendix;
- one identical card per section;
- web dashboard as product hero state;
- every section as timeline row;
- automation feature gallery;
- repeated mobile phones at identical scale;
- “section stack” feeling.

---

# 53. WHAT IS STILL OPEN

Do not mistake these for locked decisions:

- final typography family;
- whether any subtle serif accent survives;
- exact ticker wording;
- exact ticker speed;
- exact fragment animation timing;
- exact design of collapsed decision cards;
- exact visual treatment of mobile device frames;
- exact final homepage fridge crop;
- final homepage interaction cue;
- exact product cream palette;
- exact section 3+ visual layouts.

---

# 54. WHAT IS LOCKED ENOUGH TO PROCEED

- homepage direction is fridge + toggle + external produce column;
- homepage copy currently:
  - `If the vegetables are hidden in the drawer, I forget they exist.`
  - `So I stopped hiding them.`
- portfolio is web;
- Family Finance product visuals inside case study are mobile;
- product visuals should be visually distinguishable from portfolio canvas;
- selected Family Finance skeleton is `a518ed31-a866-439b-8e08-e0c2bc58f97f.png`;
- decision cards are inline progressive depth, not separate appendix;
- ticker is essential;
- ticker follows the initial success moment in Section 2;
- `Oh hell no.` follows ticker;
- do not turn Automation into feature gallery;
- app still in development; honest partial validation is acceptable;
- Hebrew-first decision is not a public case-study decision;
- ~30-second reminder remains an important decision;
- high-end magazine/editorial art direction is a hard target;
- no handwriting/arrows/doodles/red UX-school treatment.

---

# 55. IF STARTING A NEW CHAT

The user can send this file with a message like:

> “ממשיכות את הפורטפוליו מהנקודה שבמסמך. תקראי אותו במלואו לפני שאת עושה משהו. המשימה הנוכחית היא Sections 1–2 של Family Finance לפי סעיף 49–50. אל תפתחי מחדש החלטות שכבר סגרנו.”

The new conversation should then behave as if no continuity was lost.

---

# 56. FINAL CONTINUITY NOTE

The most important meta-learning from this thread:

The user does not need more ideas for their own sake.

The project progresses best when:
1. a direction is explicitly selected;
2. it becomes source of truth;
3. only the requested layer changes;
4. abandoned directions stay abandoned;
5. visual self-QA happens before showing work;
6. the case study is edited, not endlessly redesigned.

The next task is **not ideation**.

The next task is:
**Sections 1–2 of Family Finance, visually refined on the selected earlier skeleton, preserving high-end editorial/magazine art direction and the exact narrative choreography documented above.**

---

# 57. UPDATE — 2026-08-31 — IMPLEMENTATION WORKFLOW RESET

This section is a later continuity layer and therefore **supersedes older implementation-process instructions where they conflict**, while preserving all prior visual, narrative, product-truth, copy-lock, and portfolio-positioning decisions unless explicitly changed below.

The project reached a point where manual file replacement and repeated whole-page regeneration created avoidable errors and slowed progress.

The new implementation model is:

**ChatGPT = strategy / UX / storytelling / art direction / QA**  
**Codex = direct codebase implementation / debugging / patches / tests**  
**Git = version control / reversibility / source history**  
**Rotem = direction / selection / approval / visual QA**

The goal is to stop treating ChatGPT chat output as the primary mechanism for editing the local project.

---

# 58. WHAT FAILED IN THE PREVIOUS IMPLEMENTATION LOOP

The following workflow caused unnecessary friction:

`ChatGPT generates files → ZIP → manual download → manual replacement → PowerShell checks → uncertainty about which file is running → new ZIP`

Observed failure modes included:
- replacing the wrong file;
- uncertainty between `App.jsx` and `main.jsx`;
- files being added instead of replaced;
- encoding corruption;
- repeated cache/debug checks even when the underlying problem was visual rather than technical;
- full-page code generation when only a small patch was needed;
- visual output that technically changed but still looked essentially like the rejected generic version.

This workflow is now **deprecated** for normal portfolio iteration.

Do not return to ZIP-based manual replacement unless there is a specific exceptional reason.

---

# 59. CURRENT LOCAL PORTFOLIO PROJECT

Current local project path on Windows:

```text
C:\Users\gaya\Desktop\ROTKA\rotka-portfolio-static
```

Current stack:
- React
- Vite
- static frontend
- no backend required for the portfolio

Local development command:

```powershell
npm.cmd run dev
```

`npm.cmd` is used because PowerShell execution policy previously blocked the normal npm script invocation.

The project currently contains at least:

```text
node_modules
public
src
index.html
package-lock.json
package.json
README.md
```

Important:
`package-lock.json` is normal and should remain.

The current temporary implementation generated during debugging must **not** be treated as a new visual source of truth merely because it runs successfully.

Running code ≠ approved design.

---

# 60. CODEX-FIRST IMPLEMENTATION MODEL

From this point forward, substantial portfolio implementation should happen through Codex working directly on the existing codebase.

Codex should:
- read the actual repository/project before editing;
- inspect existing components and styles;
- make direct patches;
- run relevant commands;
- report exactly what changed;
- preserve unrelated implementation;
- use Git for reversibility when available.

ChatGPT should not guess the project file structure when Codex can inspect it.

Before any implementation, Codex should first understand the real codebase.

---

# 61. REQUIRED THREE-STAGE AGENT WORKFLOW

For meaningful changes, use:

## Stage 1 — Diagnose

No edits.

Example:

```text
Do not edit anything yet.
Read the project and DESIGN_RULES.md.
Compare the current implementation with the approved visual direction.
Identify the largest mismatches.
Be specific.
```

## Stage 2 — Plan

Still no edits.

Codex states:
- exact files to change;
- exact components/selectors affected;
- what will remain untouched;
- risks / dependencies.

Example:

```text
Propose a patch plan only.
Do not edit yet.
List the exact files and components you would change.
Everything not listed is locked.
```

## Stage 3 — Implement

Only approved items are changed.

Example:

```text
Implement items 1, 2 and 4 only.
Do not touch anything else.
Preserve all existing routes, approved copy and assets unless explicitly listed.
```

After implementation:

`run → screenshot → ChatGPT visual QA → small Codex patch`

---

# 62. PATCH, NOT REBUILD — HARD RULE

Once a working codebase exists:

- do not regenerate the whole site for a small visual correction;
- do not replace unrelated files;
- do not "clean up" unrelated CSS or architecture;
- do not silently refactor;
- do not invent new copy;
- do not swap assets without instruction;
- do not redesign neighboring sections.

If Rotem says:

`change only X`

then everything else is immutable for that task.

This rule is stronger than any agent preference for code cleanup or redesign.

---

# 63. GIT WORKFLOW — REPLACES ZIP VERSIONING

Use Git branches for meaningful experiments.

Suggested pattern:

```text
main
homepage-redesign
family-finance-case-study
about-page
```

Principle:
- experimental implementation happens on a branch;
- rejected implementation can be discarded safely;
- approved work can be merged;
- known-good work remains recoverable.

Do not use a pile of ZIP files as the primary version-control mechanism.

Existing rule still applies:
do not push/merge/modify remote GitHub without explicit user authorization.

Local branching/commits should also be explained before execution if not already authorized for the current task.

---

# 64. PROJECT-LEVEL CONTROL FILES TO CREATE

The portfolio codebase should gain persistent instruction files so that each new Codex session does not depend on re-explaining the entire design history.

Create these before broad implementation work:

## `DESIGN_RULES.md`

Must encode the portfolio-wide art direction and red flags, including:

```text
VISUAL DIRECTION
High-end editorial catalogue.
Object-led, not UI-card-led.
Strong asymmetry.
Large intentional crops.
Lots of negative space.
Controlled composition.
Real objects / evidence over decoration.

NEVER
- SaaS dashboard aesthetic as portfolio language
- generic UX portfolio cards
- startup gradients
- doodles
- sticky notes
- handwritten arrows
- tape / scrapbook treatment
- random decorative shapes
- generic AI-minimal portfolio styling

TYPOGRAPHY
Refined editorial sans direction.
Smaller / lighter / tighter than generic landing-page typography.
Large display type only when composition genuinely calls for it.

WORKFLOW
Never redesign unrelated sections.
Patch existing implementation.
Do not invent copy.
Use TODO if required copy is not approved.
```

## `CONTENT_LOCKS.md`

Contains:
- approved copy;
- locked copy;
- working-but-not-final copy;
- prohibited invented copy;
- TODO placeholders;
- factual status of product claims.

## `PROJECT_CONTEXT.md`

Contains:
- portfolio purpose;
- audience / positioning;
- current architecture;
- page map;
- current state;
- current implementation path;
- product/web distinction;
- major source-of-truth references.

## `QA_CHECKLIST.md`

At minimum:

```text
Before finishing:
- Did I modify anything outside the requested scope?
- Did I invent copy?
- Did I introduce generic UX/SaaS aesthetics?
- Did I preserve existing routes?
- Did I preserve approved assets?
- Is the change responsive?
- Is the hierarchy consistent with DESIGN_RULES.md?
- Could this screen belong to any random AI-generated minimal UX portfolio?
  If yes, reject and revise.
```

These files become persistent agent context inside the project.

---

# 65. CURRENT VISUAL QA META-RULE

The strongest final visual test is:

> **Could this screen belong to any random AI-generated minimal UX portfolio?**

If yes:
**FAIL.**

This applies even if:
- the implementation is technically correct;
- the layout is clean;
- spacing is competent;
- the typography is "nice";
- the page is responsive.

The goal is not merely a clean portfolio.

It must feel:
**authored, editorial, object-led, specific, high-end, and recognizably Rotem.**

---

# 66. CURRENT ART-DIRECTION SYNTHESIS

The visual north star remains:

> **a high-end editorial catalogue of ideas, objects, and product decisions — with product UI shown as polished evidence, not as the visual language of the whole site.**

Most relevant visual reference families already established:

1. oversized object / Tame Impala-like scale and crop logic;
2. editorial spread with one object and supporting text;
3. personal object field;
4. Dieter Rams / catalogue specimen logic;
5. table-of-contents / taxonomy;
6. numbered artifact field;
7. scattered editorial evidence;
8. repetition-with-variation where narratively useful;
9. system hierarchy / taxonomy visualization;
10. soft modern product UI **only inside product evidence**, not as portfolio language.

The following remain disallowed as the global portfolio language:
- dashboard-first composition;
- generic card stacks;
- SaaS landing-page rhythm;
- default AI-generated minimal portfolio look.

---

# 67. HOMEPAGE — CURRENT IMPLEMENTATION STATUS

The current React/Vite homepage implementation is **not approved visually**.

A technically running iteration used:
- fridge imagery;
- copy;
- toggle;
- a project section.

However, the user judged it visually poor / effectively still the same generic UI.

Therefore:

**Do not treat the current running homepage implementation as approved design.**

The current code is a scaffold only.

The next homepage work should start with:
1. read-only implementation audit;
2. comparison against the art-direction rules;
3. an approved composition plan;
4. a narrow homepage-only patch.

Do not rebuild Family Finance, About, or other pages while fixing the homepage.

---

# 68. HOMEPAGE CONCEPT STATUS — PRESERVE FLEXIBILITY

The refrigerator behavioral-friction concept remains historically important, but the user has also expressed fatigue/frustration with the exact fridge execution.

Do not confuse execution frustration with a fully explicit rejection of the underlying behavioral idea.

A later optional concept was discussed:

- use lettuce as an oversized record/disc-like object;
- borrow only the scale/crop confidence of the Tame Impala reference;
- possible working copy:

`I kept forgetting the lettuce in my fridge.`  
`The problem wasn’t me. It was where I put it.`

This is an **optional idea**, not locked final homepage direction.

Do not switch to it automatically.

Homepage composition must be explicitly selected before Codex implementation.

---

# 69. FAMILY FINANCE — STRUCTURE REMAINS PRESERVED

The workflow reset does **not** reopen the approved Family Finance story structure.

Keep:

1. Opening / collecting / overload
2. Everything in one place
3. Automation / boring parts
4. Ask only when needed
5. Item-level understanding
6. Insights
7. Motivation / Madrid
8. Current state
9. Ending / poke around

Sections 1–2 structural decisions remain preserved:
- editorial evidence accumulation;
- no decision card in the opening;
- `Now everything was in one place.`;
- one strong mobile product state;
- ticker after the initial relief;
- `Oh hell no.` after ticker;
- no 30-second reminder card in Section 2.

The implementation sequence has changed, not the narrative source of truth.

---

# 70. CURRENT BUILD ORDER — UPDATED

The old stopping point in Section 50 said the next task was to design Family Finance Sections 1–2.

That is now superseded by the later decision to stabilize the overall portfolio workflow first.

Current preferred order:

1. **Homepage**
2. Work index
3. Family Finance opening
4. Remaining Family Finance sections
5. About
6. Contact
7. responsive QA
8. accessibility / performance / SEO
9. deploy

Each page/section must pass its own visual QA before continuing.

Do not progress through the entire website in a single generated build.

---

# 71. SECTION-BY-SECTION DELIVERY LOOP

For each portfolio section:

1. ChatGPT confirms source-of-truth art direction / story.
2. ChatGPT writes a narrow implementation spec.
3. Codex audits relevant existing code.
4. Codex proposes patch plan.
5. User approves scope.
6. Codex patches directly.
7. Local site is run.
8. User captures screenshot.
9. ChatGPT performs visual QA.
10. Codex performs a small corrective patch.
11. Section is locked.
12. Move to next section.

This is the default portfolio production loop.

---

# 72. FUTURE ROTEM WEB STARTER

After the portfolio is completed, extract the reusable foundation into a starter repository, e.g.:

```text
rotem-web-starter
```

Possible structure:

```text
src/
  components/
    Header
    Footer
    EditorialHero
    ProjectIndex
    ImageSpread
    TextSection
    Marquee
    CaseStudySection

styles/
  tokens.css
  typography.css
  layout.css

content/
  site.js

public/
  images/
```

Starter should eventually include:
- responsive foundation;
- typography;
- spacing;
- basic accessibility;
- SEO;
- favicon;
- Open Graph;
- deployment configuration;
- reusable editorial patterns;
- common interaction primitives.

Purpose:
future projects should adapt a tested foundation rather than rebuild the same infrastructure.

---

# 73. FUTURE PATTERN LIBRARY

Create a reusable visual/UX pattern library based on actual successful work.

Potential patterns:

```text
PATTERN 01 — Editorial product launch
PATTERN 02 — Founder story
PATTERN 03 — Case-study narrative
PATTERN 04 — Service landing page
PATTERN 05 — Before / after behavior
PATTERN 06 — Evidence accumulation
PATTERN 07 — Product walkthrough
PATTERN 08 — Catalogue / archive index
```

Each pattern should document:
- screenshot;
- purpose;
- when to use;
- when not to use;
- implementation component;
- allowed variations.

This converts finished work into reusable production knowledge.

---

# 74. INCOME / PRODUCTIZED-SERVICE DIRECTION

The long-term goal is not necessarily to position Rotem as a conventional developer.

Potential service framing:

> **From messy idea to working digital product prototype.**

Possible work:
- problem framing;
- workflow mapping;
- UX;
- product logic;
- information architecture;
- AI-assisted implementation;
- prototype / live site.

A simpler early service:

> **Portfolio / landing-page direction + build**

Positioning idea:

> Turn an idea, product or business into a clear digital story and working web experience, using UX/product thinking plus AI-assisted implementation.

The value is not "I write React."

The value is:
> **I take messy problems and turn them into understandable, usable digital systems and experiences.**

---

# 75. COMPOUNDING BUSINESS MODEL

Each completed paid project should improve the production system.

Early project:
- more custom work;
- more hours;
- new patterns/components created.

Later projects:
- reuse tested components;
- reuse patterns;
- reuse QA rules;
- reuse deployment setup;
- spend proportionally more time on judgment, problem framing, story, adaptation and QA.

The goal is to accumulate:
**assets + patterns + process + judgment**

rather than repeatedly starting from zero.

---

# 76. BUSINESS BUILD ORDER

After the portfolio is live:

1. Extract `Rotem Starter`.
2. Build one small second site using the starter.
3. Measure what still requires repetitive manual work.
4. Improve starter / pattern library.
5. Begin offering a small defined paid service.
6. Add successful patterns/components after each project.

There is no requirement to "master React" before testing a paid service.

Technical ability should grow through controlled real work.

---

# 77. TOOL STACK — KEEP IT SMALL

Preferred initial stack:

**ChatGPT**
- strategy
- UX
- product thinking
- storytelling
- art direction
- QA

**Codex**
- implementation
- repository understanding
- debugging
- direct patches
- tests

**GitHub / Git**
- source of truth
- branches
- history
- reversibility

**Vercel**
- static deployment

Figma:
use only when a dedicated visual mockup/design surface genuinely helps.

Do not add many paid automation/design tools before there is a concrete need.

---

# 78. NEW-CHAT CONTINUITY RULE — UPDATED

When this updated master is used in a new chat, the new conversation should:

1. Read this full document before acting.
2. Treat sections 57–78 as the latest workflow/implementation layer.
3. Preserve earlier visual/narrative/product decisions except where this later layer explicitly supersedes process/status.
4. Do not recreate the old ZIP/manual replacement workflow.
5. Do not assume the current running homepage is visually approved.
6. Start implementation through Codex/read-only audit when implementation is requested.
7. Work one page/section at a time.
8. Use screenshot-based visual QA before locking each section.

Suggested opening message:

> “אנחנו ממשיכות את הפורטפוליו לפי קובץ המאסטר המעודכן. תקראי אותו במלואו. שיטת העבודה העדכנית היא ChatGPT ל-direction/QA ו-Codex ליישום ישיר. כרגע עובדים על ה-Homepage בלבד. אל תשני שום דבר אחר.”

---

# 79. LATEST META-PRINCIPLE

The production system should reduce the amount of manual coordination Rotem has to do.

A good AI-assisted workflow should not require the user to:
- keep track of which generated ZIP is current;
- manually reconcile multiple file versions;
- repeatedly explain locked design decisions;
- debug tool confusion caused by the assistant;
- approve broad rewrites when only a small change was requested.

The desired loop is:

**direction → narrow spec → direct patch → screenshot → QA → narrow patch**

Fast, reversible, source-controlled and visually deliberate.


