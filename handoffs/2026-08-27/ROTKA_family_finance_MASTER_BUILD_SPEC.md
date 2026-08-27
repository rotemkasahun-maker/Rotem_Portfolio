# ROTKA. — FAMILY FINANCE CASE STUDY
## MASTER BUILD SPEC

> **STATUS: MASTER SOURCE OF TRUTH FOR FUTURE BUILDS**
>
> Use this document as the fixed implementation contract for all future Family Finance case-study builds unless the user explicitly approves a later change. Do not treat earlier rejected drafts as authoritative.

---

## REQUIRED PREAMBLE FOR ANY NEW CHAT / AGENT

**Do not start implementation immediately. First read the full prompt, inspect all available source files and real product assets, then return only a pre-build compliance report identifying what you have, what is missing, and whether every required asset can be sourced exactly. Wait for approval before writing code. Treat all numeric values, breakpoints, timings, easing curves, ordering rules, crop rules and acceptance criteria in this specification as implementation constraints, not inspiration. If a value is specified, do not choose a different value merely for aesthetic preference.**

---

# MASTER BUILD PROMPT

## 0. PRIMARY OBJECTIVE

Build a highly polished, editorial, motion-led portfolio case study for a real family-finance product.

The finished case study must communicate three things clearly:

1. A real human/behavioral problem was identified.
2. Product decisions were made specifically around human friction.
3. A real working product was actually built and continues to be developed.

The page should NOT feel like:
- a UX portfolio template
- a Behance project
- a slideshow
- a sequence of giant statements
- a collection of phone mockups
- a motion demo
- a fake startup landing page

It SHOULD feel like:
- a quiet editorial story
- warm and human
- highly intentional
- evidence-led
- product-thinking-led
- visually sophisticated
- technically polished
- restrained rather than flashy
- something where every crop, spacing value, animation and artifact feels deliberately placed

Core narrative progression:

scattered information
→ human friction
→ automatic collection
→ remaining manual work
→ further automation
→ selective interruption
→ item-level understanding
→ useful insight
→ emotional / motivational friction
→ meaningful goal
→ real product exploration

---

## 1. ABSOLUTE CHANGE-CONTROL RULE

This is the highest-priority rule.

DO NOT change, add, remove, rewrite, polish, simplify, correct, paraphrase or invent anything unless explicitly authorized.

Specifically:
- Do not rewrite approved copy.
- Do not correct English.
- Do not change punctuation.
- Do not change capitalization.
- Do not add labels.
- Do not add captions.
- Do not add explanatory paragraphs.
- Do not add sections.
- Do not add icons.
- Do not add decorative arrows.
- Do not add badges.
- Do not add fake metrics.
- Do not add personas.
- Do not add journey maps.
- Do not add “Problem / Solution / Process / Learnings” sections.
- Do not create product UI.
- Do not redesign product UI.
- Do not fabricate product screenshots.
- Do not invent product states.
- Do not use generic placeholder UI unless explicitly required by a STOP condition.

If something is not mentioned: LEAVE IT OUT.

If two instructions conflict: use the SOURCE PRIORITY below.

If a required real asset cannot be obtained: STOP that part of implementation and report the missing asset. Do not replace it creatively.

---

## 2. SOURCE PRIORITY

When sources conflict, use this exact order:

1. Latest explicit instruction from the user.
2. This master build specification.
3. Exact approved Family Finance copy from the original source case study.
4. Approved ROTKA visual master guidelines.
5. Real current Family Finance product code and real product assets.
6. Earlier drafts only for an individual element explicitly approved by the user.

Never assume a newer draft is more authoritative simply because it is newer.

Rejected drafts are NOT sources of truth.

---

## 3. REQUIRED INPUT SOURCES

### Portfolio visual system
- Approved About page as typography / brand reference.
- Primary typeface: Manrope.

### Family Finance product
- Real current Family Finance repository.
- Real responsive product implementation.
- Real demo data only.

### Existing approved case-study source
Use it only to recover locked copy that is not explicitly written in this document.

### Existing screenshots
Only if they are direct renders/captures of the real product.

### Definition: REAL PRODUCT SCREEN
A real product screen means:
- the actual native product implementation, OR
- the actual responsive Family Finance product rendered from its real code at mobile viewport.

It does NOT mean:
- reconstructed HTML based on product code
- hand-built approximation
- screenshot recreated for the portfolio
- visual mockup
- a portfolio-specific redesign

---

## 4. REQUIRED DELIVERY FORMAT

Build one standalone case-study HTML implementation.

The final deliverable must include:
- HTML
- CSS
- JavaScript required for motion/interactions
- real embedded/captured product evidence
- no broken local dependencies
- no missing assets
- no external asset dependency that will fail when opening the file directly, except approved libraries if bundled correctly

Preferred: bundle or locally include required JS libraries.

The result must work at minimum at:
- 1440px
- 1280px
- 390px
- 360px

---

## 5. VISUAL SYSTEM

### Primary font
Manrope

Load weights 400 / 500 / 600 / 700.

### Optional accent font
Use ONE secondary sans-serif font only if necessary for very small conversational asides.

Accent font must NOT be:
- serif
- monospace
- typewriter
- handwritten
- script

Accent font must NOT become a second design system.

Use it only for tiny conversational moments such as:
- `Oh hell no.`
- optionally the house aside

If the accent font does not noticeably improve the result: do not use it.

### Typographic scale — desktop
- Main H1: 44–48px, weight 500–600, line-height 1.05–1.10
- Narrative text: 26–30px, weight 400–500, line-height 1.18–1.28
- Body: 16–17px, weight 400, line-height 1.55–1.65
- Small: 13–14px
- Metadata: 11–12px

### Typographic scale — mobile
- Main H1: 34–38px
- Narrative: 22–25px
- Body: 15–16px
- Small: 13–14px

### Important typography rule
The page must NOT feel bold.

Do not make every sentence a headline.

Use 400–500 weight for most narrative copy.

700 is rare.

### Content width
- Narrative copy: max approximately 60–64ch.
- Large narrative lines: max approximately 720–780px.
- Do not stretch text across the page.

---

## 6. COLOR SYSTEM

Use this exact starting palette:
- Main background: `#FBF6EA`
- Soft section: `#F7F0E2`
- Secondary light section: `#FFF9EF`
- Deeper cream: `#F2E8D8`
- Primary ink: `#202020`
- Secondary: `#5F5B56`
- Muted: `#777168`
- Borders: `#DED6C8`
- Optional semantic accent: `#6A2639`

The palette should feel:
- warm
- creamy
- gently yellow
- paper-like
- calm

It must NOT feel:
- gray
- cold white
- brown
- mustard
- strongly yellow

REAL EVIDENCE keeps its real colors.

Do not recolor:
- Android notifications
- Google Wallet
- financial notifications
- product UI
- screenshots

---

## 7. DEPTH SYSTEM

The portfolio frame is calm and mostly flat.

Physical evidence gets subtle physical depth.

Receipt / physical evidence shadow:
- `0 2px 8px rgba(25,20,15,.06)`
- `0 12px 30px rgba(25,20,15,.05)`

Product crop:
- normally no shadow
- use 1px border `#DED6C8`

Full phone:
- subtle depth only

Do NOT:
- shadow every section
- make everything card-like
- use dramatic floating cards
- use glossy device mockups

Visual principle:

CALM SYSTEM + MESSY REAL-WORLD EVIDENCE

---

## 8. PAGE RHYTHM

The rebuild must read continuously.

Desktop standard section rhythm:
- approximately 56–72px vertical section padding

Mobile:
- approximately 44–56px

Paragraphs belonging to the same thought:
- 8–14px apart

Text → visual:
- 20–32px

Do NOT put 60–100px gaps between sentences that belong to one thought.

Intentional extra breathing room only around:
- opening evidence
- suction event
- receipt extraction event

---


## 8A. KINETIC CONTINUITY SYSTEM — CORE REQUIREMENT

Kinetic continuity is a first-class design requirement, not optional polish.

The page must feel continuously responsive to scroll, but never busy. Motion is the connective tissue of the narrative. It should make transitions, causality and physical relationships easier to understand.

### Kinetic principle

Use this mental model:

`scroll → thought shifts → evidence reacts → visual relationship changes → next thought emerges`

Never default to:

`scroll → section enters → stop → next section enters`

### Motion hierarchy

At any moment there may be:
- **1 dominant motion** maximum
- **1 secondary motion** maximum

Never animate more than two independently meaningful ideas at once.

Examples:
- dominant = floating receipts; secondary = narrative text drift
- dominant = suction into the app; secondary = subtle phone settle
- dominant = receipt-line extraction; secondary = copy attenuation

Do not simultaneously animate:
- headline
- paragraph
- background
- screenshot
- fragments
- ticker
- navigation

### Three motion layers only

The entire page uses only these three motion layers:

1. **Narrative motion** — subtle scroll-responsive typography.
2. **Evidence motion** — physical fragments behaving like objects.
3. **Product motion** — restrained crop/phone reveals and interaction.

Do not create a fourth motion language.

The two primary narrative motion metaphors remain:
1. scattered evidence → collected system
2. receipt items → structured product understanding

Everything else must be subordinate.

### Scroll model

Use native browser scrolling.

Do NOT implement scroll-jacking.
Do NOT snap users between scenes.
Do NOT lock the page for long cinematic sequences.

Primary scroll engine:
- GSAP 3.x
- ScrollTrigger

Optional only where technically justified:
- MotionPathPlugin
- Flip

Do NOT add Lenis or another smooth-scroll layer unless a measured QA comparison demonstrates that native scrolling produces visibly inferior timing. If Lenis is introduced, it must preserve native-feeling wheel/touch response and must be documented in the change log.

### Global motion tokens

Define these as CSS custom properties and JS constants. Do not choose new values per section.

```css
:root {
  --motion-fast: 0.36s;
  --motion-standard: 0.42s;
  --motion-medium: 0.62s;
  --motion-long: 0.86s;
  --motion-ease-editorial: cubic-bezier(.22,.61,.36,1);
  --motion-distance-text: 12px;
  --motion-distance-ui: 18px;
}
```

GSAP ease tokens:
- editorial entrance: `power2.out`
- object settle: `power2.out`
- collection/suction: `power2.in`
- no bounce
- no elastic
- no back ease
- no spring simulation for narrative motion

### Narrative typography — default kinetic pattern

Narrative text should not use generic repeated `fadeUp()` reveals.

For approved kinetic narrative beats, use scroll-linked interpolation.

Default incoming state:
- `y: 12px`
- `opacity: 0.32`

Default resting state:
- `y: 0`
- `opacity: 1`

Default outgoing state when another thought replaces it:
- `y: -8px`
- `opacity: 0.46`

The transition should be scrubbed to scroll progress rather than triggered as a one-shot entrance.

Recommended ScrollTrigger defaults for narrative text:

```js
{
  start: 'top 82%',
  end: 'top 48%',
  scrub: 0.45,
  invalidateOnRefresh: true
}
```

These values are the default. Change them only when the actual composition requires it, and document the reason.

### Thought-transition choreography

When sentence B follows sentence A as one thought:

- A starts attenuating before B is fully visible.
- B begins appearing before A finishes attenuating.
- overlap window: approximately 20–30% of the local timeline.
- do not fully fade A to 0 unless it leaves the viewport naturally.

The page must feel continuous, not sequentially switched.

### Sticky thought pattern

Use sticky/pinned copy only where the same thought needs to stay present while the evidence changes.

Rules:
- maximum 1 sticky narrative scene active at a time
- maximum scene length: ~0.75 viewport of additional scroll beyond normal content
- no sticky section may trap the user for more than ~1.5 viewport heights total
- mobile may replace sticky behavior with ordinary flow if pinning harms readability

Do NOT make most of the page sticky.

### Parallax

Parallax must be extremely subtle.

Allowed relative travel over one viewport of scroll:
- narrative text: baseline 1.00x document movement
- secondary evidence: equivalent of approximately ±10–24px additional travel
- background/decorative layers: avoid unless semantically required

Never use large parallax that causes objects to visibly race past one another.

### Motion settling rule

When the user stops scrolling:
- narrative motion settles immediately into the current interpolated state
- product motion stops
- no unrelated animation continues

Exception:
- floating evidence fragments may retain a very low-amplitude idle float

The page must not feel restless while idle.

### Kinetic density map

Use this exact intended intensity distribution:

| Narrative beat | Motion intensity | Primary motion |
|---|---:|---|
| Opening collection | High | fragment float + scroll follow |
| Problem / “It was me.” | Low–Medium | kinetic typography only |
| System takeover | High | suction → real product |
| Boring work | Low | text/ticker only |
| More automation | Low–Medium | carousel interaction + quiet crop reveal |
| Ask when needed | Low | notification reveal |
| Item-level understanding | High | receipt items → structured UI |
| Insights | Low | crop reveal / small narrative drift |
| Motivation / Madrid | Medium | kinetic typography + restrained UI reveal |
| Ending | Low | real product interaction |

Do not increase the number of high-intensity scenes.

### Mobile kinetic adaptation

Mobile is NOT desktop motion scaled down.

At widths <= 767px:
- reduce number of simultaneous floating fragments if needed for readability, but preserve the approved evidence mix whenever possible
- reduce fragment travel distance by approximately 25–35%
- reduce parallax by approximately 40%
- avoid multi-layer pinning
- use one kinetic text pair at a time
- prioritize uninterrupted reading over preserving a desktop animation mechanic
- touch scrolling must remain native and responsive

The narrative meaning of every motion event must remain identical.

### Performance requirements

For continuous motion, animate only:
- `transform`
- `opacity`

Avoid continuous animation of:
- `top`
- `left`
- `width`
- `height`
- `filter`
- `box-shadow`

Use `will-change` only on elements that are actively animated, and remove it after long-lived one-shot sequences when practical.

For layout-dependent animation:
- wait for fonts and images required by the scene
- call `ScrollTrigger.refresh()` after layout is stable
- use `invalidateOnRefresh: true`
- recompute `getBoundingClientRect()` values on refresh for suction/Flip destinations

No hard-coded pixel destination may depend on a single viewport size.

### Image sharpness during motion

Never upscale a screenshot beyond its effective source resolution.

Rules:
- capture real product evidence at minimum 2x its displayed CSS size when possible
- animate a wrapper, not a low-resolution image element scaled beyond native size
- no blur animation on product screenshots
- no CSS transform that leaves a crop permanently at non-integer scale if that visibly softens text

If a screenshot is visibly soft at QA resolution, the implementation fails even if the animation is correct.

### Reduced motion

Respect `prefers-reduced-motion: reduce`.

In reduced-motion mode:
- disable continuous typography scrub
- disable fragment float
- disable suction
- disable receipt-flight animation
- preserve all evidence in logical static positions
- preserve carousel manual interaction
- preserve real product interaction

Do not hide content as a reduced-motion fallback.

### Kinetic QA test

Perform a deliberate slow-scroll test at approximately one viewport every 4–5 seconds.

The result should satisfy all of the following:
- there is usually a subtle sense of transition or response
- motion never competes with reading
- there is never more than one dominant motion plus one secondary motion
- motion explains hierarchy, continuity, causality or physicality
- when scroll stops, the page largely settles
- high-intensity motion appears only in the two approved narrative metaphors plus their immediate transition states

If motion exists only as repeated entrance effects, the page fails.
If the page feels constantly animated, the page fails.

### Mandatory kinetic question

For every animation, answer internally:

**What does this movement communicate that a static layout would not?**

Valid answers:
- hierarchy
- continuity
- causality
- physicality
- change of state
- preserved context

If the answer is “it looks nicer” or “it makes the page feel alive,” remove the animation.

---

## 9. HEADER

Use the same ROTKA visual language as the approved About page.

`ROTKA.` must appear exactly with the period.

Do not redesign navigation.

Do not create new navigation items.

---

## 10. OPENING — COPY

Do NOT add project metadata or orientation explanation here.

The opening should immediately enter the story.

Exact copy:

`I wanted to know - where our money was going?`

`So I started collecting things.`

No additional explanation between these lines.

---

## 11. OPENING — FLOATING EVIDENCE

This is the first primary motion metaphor.

Purpose: visually communicate “financial information existed everywhere.”

NOT: “here are some nice cards.”

### Evidence set
Maximum 5 primary floating fragments.

Use a believable mix:
1. physical receipt from a supermarket
2. physical receipt from a household/general store
3. Google Wallet transaction notification
4. credit-card/financial transaction notification
5. SMS/digital receipt message

Do not make most fragments Rami Levy.

Use varied stores.

Store examples already approved for scenario context:
- Rami Levy
- Max Stock
- Home Center
- Sacara

Do not invent personal data.

### Evidence realism
Notifications must visually resemble the real OS / service.

Google Wallet:
- use its natural visual language

Android:
- use realistic Android notification hierarchy

SMS:
- use realistic messaging UI

Receipts:
- must look like photographed thermal-paper receipts
- NOT HTML cards

### Receipt appearance
Receipts should include:
- narrow paper proportion
- thermal print character
- realistic store hierarchy
- date/time
- line items
- total
- payment method if appropriate
- slight skew
- mild paper bend
- small imperfections
- non-uniform lighting
- subtle texture
- imperfect edge

Do NOT:
- use obvious rounded cards
- perfectly center everything
- over-crumple
- use fake vintage texture
- create decorative “cute receipts”

### Fragment scale
Fragments must be SMALL.

They are secondary evidence.

They must never cover:
- H1
- narrative text
- important UI

Desktop:
- roughly 110–190px depending artifact type

Mobile:
- roughly 90–150px

Some may partially sit outside viewport edges.

---

## 12. OPENING MOTION — TECHNICAL IMPLEMENTATION

Use GSAP.

Use:
- GSAP core
- ScrollTrigger
- optionally MotionPathPlugin
- optionally Flip only if required for seamless relocation

Do NOT implement this with `position: fixed` + arbitrary scroll math only.

Do not animate `top` / `left`.

Animate primarily:
- x
- y
- rotation
- scale
- opacity

### Float behavior
Each fragment gets:
- vertical amplitude: 6–14px
- horizontal amplitude: 4–12px
- rotation: approximately ±1–1.5°
- loop: 5.5–8 seconds

Each fragment gets a different:
- duration
- phase
- amplitude

No bouncing.

No spring cartoon motion.

Motion should feel like very light balloons floating in calm air.

### Scroll journey
The fragments do NOT stay only in the hero.

They must visually accompany the viewer down the story.

Create one controlled evidence stage.

Conceptual scroll timeline:
- 0–35%: fragments float around the opening
- 35–70%: the evidence stage travels downward with the story; fragments continue gentle individual floating
- 70–100%: collection / suction phase begins

IMPORTANT: fragments must stay out of text-reading zones.

Define exclusion rectangles around narrative copy.

At no point may a fragment overlap those regions.

### Suction
Destination: the first REAL product screen.

When destination reaches its trigger point:
- create or transition each fragment into a motion layer
- obtain source and destination geometry via `getBoundingClientRect()`
- animate fragments toward a common destination inside the app viewport

Duration:
- 0.8–1.05s

Stagger:
- 70–120ms

Scale end:
- 0.08–0.15

Opacity:
- fade near final 15–25% of trajectory

Rotation:
- small individual variation

Easing:
- `power2.in` or equivalent controlled accelerating curve

The movement must visibly read as: “the system is collecting the evidence.”

It must NOT read as: “cards fade away.”

Play once per page load.

Scrolling upward: do not reverse/replay.

Reduced motion:
- show static evidence near the beginning and static final product state
- no information may disappear

---

## 13. PROBLEM BEAT

Exact copy:

`The problem wasn’t finding the information,`

`It was me.`

Keep the two lines visually close.

Then:

`I didn’t want another system to manage. I wanted something to manage it for me.`

IMPORTANT:
Do NOT show the product screen before this sentence is complete.

The product reveal is the payoff.

---

## 14. FIRST PRODUCT REVEAL

Purpose: “The system takes over collection.”

This is the first major real-product evidence.

Format:
- Full real mobile screen
- Use a clean phone frame
- The phone is also the suction destination

### Phone frame
Minimal.

Dark thin bezel.

No:
- iPhone glamour mockup
- hand
- desk
- perspective
- reflection
- fake hardware
- glossy marketing image

Approx desktop width:
- 300–340px

Mobile:
- 280–320px, constrained by viewport

Real product screen must be rendered from the real implementation.

No reconstruction.

---

## 15. BORING WORK BEAT

Exact copy:

`Now everything was in one place, see?`

`But the system still expected me to do the boring parts.`

Immediately below: ticker.

Use existing approved ticker content from the source.

Do not invent replacement ticker tasks unless required by the source.

Then:

`Oh hell no.`

Treatment:
- small conversational aside
- desktop 15–17px
- mobile 14–16px
- right aligned
- weight 400–500
- NOT a headline
- no giant typography

---

## 16. MORE AUTOMATION

Exact copy:

`So I kept giving it more to do.`

Purpose: show that additional manual work was progressively automated.

Do NOT show a full phone here.

Use a carousel of REAL PRODUCT CROPS.

### Carousel
2–3 slides maximum.

Desktop width:
- approximately 420–520px

Primary slide:
- fully visible

Next slide:
- 8–12% visual peek only

Mobile:
- swipe enabled

Desktop:
- minimal previous / next controls

No autoplay.

No giant navigation.

### Crop requirements
Each crop must prove ONE idea.

Possible existing product ideas:
- transaction data / source / receipt relationship
- structured grocery/product understanding
- reimbursement automation

Only use one if it exists in real product UI.

Do not invent a state.

Capture source at high resolution:
- minimum effective 2x density

Crop around feature boundaries.

Do not:
- randomly cut screenshots
- cut text midway
- show blurry screenshots
- resize a tiny image upward
- show irrelevant navigation

Each slide must communicate in 2–3 seconds.

---

## 17. ASK ONLY WHEN NEEDED

Exact copy:

`When it really does need me, it can ask.`

Visual:
- one realistic external Android notification
- NO phone frame
- NO full app screen

Purpose: show selective interruption.

Use the existing missing-receipt scenario.

The notification must look like an OS notification, not a portfolio card.

Use realistic hierarchy:
- app identity
- title
- concise message
- action

Keep it compact.

---

## 18. ITEM-LEVEL UNDERSTANDING — COPY

For the main sentence in this beat: retrieve the exact locked sentence from the approved source.

DO NOT rewrite it.

DO NOT reconstruct it from memory.

Preserve:
- punctuation
- line break behavior
- exact “on” treatment if present in the approved source

---

## 19. THREE RECEIPTS

Show exactly 3 receipts together.

Stores:
- Max Stock
- supermarket
- Home Center

They must contain overlapping household-type categories.

Examples of product types:
- cups
- candles
- storage
- cleaning
- kitchen
- small household accessories

The conceptual point is: STORE ≠ CATEGORY.

Products overlap across merchants.

### Desktop
All 3 receipts visible simultaneously.

Approx width:
- 180–210px each

Gap:
- 14–20px

Small natural rotations:
- approximately -2° / 0.5° / +2°

Subtle depth.

No carousel.

No horizontal scroll.

### Mobile
Still show all three as ONE composition.

Do NOT:
- swipe
- carousel
- stack vertically
- show one at a time

They may be smaller.

Line items do not all need to be legible on mobile.

The composition must clearly read as three different receipts.

---

## 20. RECEIPT → STRUCTURED UNDERSTANDING MOTION

This is the second and final primary motion metaphor.

NO category tags.

NO floating labels between the receipts and UI.

Conceptual transition:

receipt line items → corresponding structured information inside product UI

Use GSAP Flip and/or MotionPath where technically appropriate.

Technique:
- duplicate selected receipt line-item nodes
- animate duplicates toward destination areas in real product crop
- keep original receipt stable
- stagger selected item movement
- fade clones as they reach structured product rows

Animation:
- subtle and fast enough not to become a spectacle

Duration:
- approximately 0.55–0.8s per group

Stagger:
- 60–100ms

No bounce.

---

## 21. ITEM-LEVEL PRODUCT EVIDENCE

Do NOT use a full phone unless context is absolutely required.

Preferred: focused crop from the real product.

It should show:
- product/item breakdown
- categories
- item-level structured data

Crop only the relevant UI.

Use 1px border.

No decorative phone bezel.

---

## 22. HOUSE ASIDE

Exact approved text:

`I REALLY need to stop buying random stuff for the house.`

Keep exact capitalization.

Treatment:
- small conversational aside
- do not turn it into a headline
- approx 14–16px
- optional accent font

---

## 23. INSIGHTS

Exact copy:

`Suddenly the data could tell me other things as well.`

No comma after Suddenly.

No additional explanatory sentence.

Visual:
- REAL product evidence

Preferred:
- one strong large crop

Alternative:
- 2–3 real insight states in a small carousel

Do NOT show the entire Insights screen just because it exists.

Show only what proves: structured data → useful understanding.

Do not invent metrics.

---

## 24. MOTIVATION / EMOTIONAL FRICTION

Exact copy:

`Making it easier helped. But I also wanted a reason to keep going,`

`because making it easier didn’t automatically make it something I’d want to stick with.`

Preserve punctuation exactly.

This is ONE flowing thought.

Do not visually turn it into two dramatic statements.

Purpose: show that reducing operational friction does not automatically solve motivation.

---

## 25. MADRID VISUAL

Use REAL current Madrid product implementation.

The existing real implementation contains:
- family goal
- progress route
- money progress
- Madrid XP
- level
- challenges
- next action
- family/team layer

Choose a focused crop that shows in ONE glance:
1. meaningful Madrid goal
2. visible progress
3. at least one motivation mechanic such as XP, level or challenge

Do not rebuild it.

Do not simplify it into a fake goal card.

Do not use a full phone if the meaningful area can be shown as a clean crop.

---

## 26. PROJECT STATUS

Near the end, small and quiet:

`It’s currently in development, and I’m still refining it as we use it.`

This is not a new section.

Use small text.

No title.

No “Where it is now” heading.

---

## 27. ENDING

Exact copy:

`The story stops here, but there is so much more to it. Go ahead, poke around.`

Immediately after: REAL INTERACTIVE PRODUCT.

---

## 28. INTERACTIVE PRODUCT ENDING

This must NOT be a screenshot.

This must NOT be a fake navigator.

This must NOT swap several static srcdoc screenshots.

Embed the real demo product.

Initial route:
- HOME / dashboard

The real product’s own navigation should work.

At minimum the user should be able to navigate through real existing product routes such as:
- Home
- Transactions
- Madrid
- Tasks

If available through the real menu, other areas may remain naturally accessible.

Do not create portfolio-specific navigation controls.

Use demo data only.

Do not expose:
- secrets
- authentication data
- real personal finance information
- internal admin-only screens
- proprietary architecture tooling

### Visual treatment
Display the interactive product within a clean mobile viewport / phone.

Do NOT place it inside a huge black theatrical section.

Keep the surrounding ROTKA frame calm.

Let the product itself be the visual focal point.

After the interactive product:

`Cool, right?`

Small and conversational.

---

## 29. SCREENSHOT / PRODUCT EVIDENCE INVENTORY

BEFORE building the page, create an internal inventory.

For EVERY product visual record:
- source route
- source state
- full screen or crop
- exact narrative purpose
- output dimensions
- whether it appears elsewhere

No screenshot may be repeated unless the narrative purpose is genuinely different and repetition is unavoidable.

Every product visual must prove a new idea.

---

## 30. FULL SCREEN VS CROP RULE

Use FULL PHONE only when the viewer needs overall product context.

Use CROP when one feature/state is the point.

Default: CROP.

Do not display phone after phone after phone.

The page should not feel like a mobile UI gallery.

---

## 31. MOTION BUDGET

Only TWO significant narrative motion moments:

1. floating scattered evidence → suction into system
2. receipt items → structured product understanding

Everything else: quiet.

Allowed:
- opacity reveal
- 8–12px slide
- carousel drag
- soft crossfade

Standard reveal:
- duration 420ms
- translation 8–12px
- opacity 0 → 1
- ease `cubic-bezier(.22,.61,.36,1)`

Do not introduce a third metaphorical motion language.

---

## 32. PERFORMANCE

Animate only transform and opacity whenever possible.

Avoid layout-triggering animation.

Do not animate:
- width
- height
- top
- left

during continuous scroll motion.

Use `will-change` only where needed.

Lazy-load heavy product assets below the fold.

Ensure animations remain smooth on a typical mobile device.

Target: 60fps where realistic.

---

## 33. ACCESSIBILITY

Respect `prefers-reduced-motion`.

Reduced-motion behavior:
- no continuous floating
- no suction
- no item-flight animation
- all content remains visible
- carousel remains manually usable
- interactive product remains usable

Maintain readable contrast.

Do not make evidence text required for accessibility if it is intentionally decorative; provide useful alt/aria descriptions instead.

---

## 34. RESPONSIVE REQUIREMENTS

Test exactly at:
- 1440px
- 1280px
- 390px
- 360px

### Desktop check
- no evidence over copy
- fragments remain peripheral
- crops remain crisp
- phone screens not oversized
- receipts visible together
- no accidental giant whitespace
- story remains continuous

### Mobile check
- no horizontal overflow
- fragments do not become a carousel
- fragments never cover text
- three receipts remain one composition
- product crops remain readable
- no sequence of endless full phones
- carousel swipes correctly
- final interactive product usable

---

## 35. NARRATIVE TEST

A first-time viewer must understand without explanation:

1. Information was already available, but scattered.
2. The user herself was the bottleneck.
3. The system should collect/manage things automatically.
4. Manual work still remained.
5. More of that work was automated.
6. The system only interrupts when necessary.
7. Transaction-level information was not enough.
8. Item-level understanding reveals what was actually purchased.
9. Structured information creates useful insights.
10. Removing friction is not enough if the product still feels like a chore.
11. A meaningful shared goal / gamification helps motivation.
12. This is a real evolving product.

If any beat is unclear: fix composition first.

Do NOT automatically add explanation copy.

---

## 36. VISUAL QUALITY TEST

Every visual must answer:

“What does this prove?”

If the answer is unclear: remove or replace it.

A viewer should understand the purpose of each visual within 2–3 seconds.

The page must feel:
- composed
- editorial
- mature
- restrained
- precise

Never:
- decorative for decoration’s sake
- over-designed
- template-like
- amateur
- gimmicky

---

## 37. PRE-BUILD GATE

DO NOT build the full page until ALL items below are verified.

Prepare internally:
1. exact product asset inventory
2. exact screen route for first reveal
3. exact 2–3 automation carousel crops
4. exact item-level crop
5. exact Insights crop/state
6. exact Madrid crop/state
7. real Home/dashboard route
8. method for embedding the real product
9. five opening evidence fragments
10. opening motion prototype

If any real product asset is missing: STOP.

Do not substitute.

---

## 38. OPENING MOTION PROTOTYPE GATE

Before implementing the entire page, implement ONLY:
- opening copy
- floating fragments
- problem text
- first product destination
- suction animation

Test it at:
- 1440px
- 390px

Acceptance:
- fragments visibly move
- movement is subtle
- fragments accompany scroll
- no fragment overlaps text
- suction clearly reads as collection
- motion is smooth
- phone appears only at the correct narrative point

Only after this works: continue with the page.

---


## 38A. DETERMINISTIC IMPLEMENTATION CONTRACT

The purpose of this section is to reduce agent-to-agent variation.

### Breakpoints

Use these exact layout breakpoints unless the real embedded product itself has its own internal breakpoints:
- mobile: `0–767px`
- tablet/intermediate: `768–1023px`
- desktop: `1024px+`

Primary QA widths remain:
- 1440px
- 1280px
- 390px
- 360px

Do not add additional portfolio-layout breakpoints unless a verified defect cannot be solved without one.

### Page container

Desktop:
- max-width: `1280px`
- horizontal padding: `24px`

Mobile:
- horizontal padding: `16px`

Use a 12-column conceptual grid on desktop and a 4-column conceptual grid on mobile.
Do not introduce a separate arbitrary grid for individual sections.

### Border radii

Portfolio structural UI:
- default radius: `6px`

Physical evidence:
- `2–4px` max unless the real artifact itself is rounded

Phone frame:
- only enough radius to match the real viewport/device treatment; do not exaggerate

Notifications:
- use the actual platform/reference radius, not the portfolio radius

### Borders

Default product crop border:
- `1px solid #DED6C8`

Do not add borders to physical receipts.

### Section assembly rule

Each narrative beat must be implemented in this order:
1. locked copy
2. approved evidence
3. approved motion relationship
4. responsive adaptation

Do not place a visual first and then rewrite/layout the copy around it.

### Screenshot crop procedure

For every crop:
1. render the real product at the target responsive state
2. capture at >=2x intended displayed dimensions when possible
3. identify the exact feature boundary
4. crop only enough surrounding context to understand the feature
5. preserve full lines of text and complete controls
6. never crop through a label, row, icon, amount or button
7. do not crop solely to fit a convenient aspect ratio
8. store the crop source dimensions and displayed dimensions in the asset inventory

A crop that requires explanation because it is ambiguous fails.

### Asset naming

Use deterministic names:
- `ff-opening-receipt-supermarket.*`
- `ff-opening-receipt-household.*`
- `ff-opening-wallet.*`
- `ff-opening-card-notification.*`
- `ff-opening-sms.*`
- `ff-first-product.*`
- `ff-automation-01.*`
- `ff-automation-02.*`
- `ff-automation-03.*` if approved
- `ff-item-level.*`
- `ff-insights.*`
- `ff-madrid.*`

Do not create duplicate alternate assets without documenting why.

### DOM / CSS architecture

Use semantic sections with stable IDs matching narrative beats.

Required section ID pattern:
- `#opening`
- `#problem`
- `#system-takeover`
- `#boring-work`
- `#automation`
- `#ask-when-needed`
- `#item-level`
- `#insights`
- `#motivation`
- `#ending`

Use CSS custom properties for:
- colors
- typography sizes where practical
- spacing tokens
- motion durations
- easing tokens

Do not scatter unexplained magic numbers across JavaScript.

### JavaScript architecture

Create separate initialization functions for:
- `initNarrativeKinetics()`
- `initOpeningEvidence()`
- `initOpeningSuction()`
- `initAutomationCarousel()`
- `initReceiptExtraction()`
- `initReducedMotion()` or an equivalent centralized preference branch

Do not put the entire experience into one monolithic scroll handler.

No continuous `window.addEventListener('scroll', ...)` implementation may manually recalculate every animated element on each event when ScrollTrigger can own that responsibility.

### GSAP registration

Register only plugins actually used.

Example baseline:
```js
gsap.registerPlugin(ScrollTrigger);
```

If MotionPathPlugin or Flip is unavailable in the actual runtime, do not fake equivalent complex behavior with brittle arbitrary math. Report the dependency issue or use the simplest approved technically robust alternative.

### ScrollTrigger lifecycle

After required asset load:
1. initialize layout
2. initialize animations
3. call `ScrollTrigger.refresh()`

On resize/orientation change:
- allow ScrollTrigger to refresh
- recompute geometry-dependent suction/Flip coordinates
- do not retain stale desktop coordinates on mobile

### No hidden completion

A section is not “implemented” merely because its DOM exists.

It is complete only if:
- its real asset renders
- crop is sharp
- responsive composition is correct
- motion runs at the intended trigger
- motion has the intended narrative meaning
- reduced-motion fallback works
- the section passes visual screenshot QA

### Agent variance rule

When this specification provides a range, choose the midpoint by default unless the surrounding approved composition makes the midpoint fail.

Examples:
- 44–48px → default 46px
- 56–72px → default 64px
- 0.8–1.05s → default 0.92s
- 70–120ms → default 95ms

If deviating from the midpoint, record the chosen value and reason in the change log.

This is intended to make independent implementations converge rather than drift through subjective preference.

---

## 39. QA PROCESS

Do not call the page “finished” after code compiles.

Perform FOUR independent QA passes.

### PASS 1 — INSTRUCTION FIDELITY
Compare implementation line-by-line against this specification.

Check:
- every locked sentence
- punctuation
- capitalization
- no added copy
- no missing copy
- no unapproved section
- no fake UI
- no invented metric
- no visual substitution

### PASS 2 — TECHNICAL
Test:
- 1440
- 1280
- 390
- 360

Check:
- overflow
- clipping
- carousel
- interactions
- scroll triggers
- suction
- receipt extraction
- reduced motion
- real product embed
- product navigation
- asset loading

### PASS 3 — VISUAL
Capture full-page screenshots.

Inspect them visually.

Do NOT validate merely from DOM/CSS.

Check:
- type scale
- weight
- alignment
- crop precision
- image sharpness
- shadows
- receipt realism
- fragment location
- spacing rhythm
- product hierarchy
- balance
- mobile composition

Ask:
“Does any section look like a developer placeholder?”

If yes: not finished.

Ask:
“Does anything look like a generic HTML card?”

If yes: not finished.

### PASS 4 — NARRATIVE
Read the page top-to-bottom as someone who knows nothing about the project.

For every transition ask:
- Why does the next thing appear?
- Does the visual prove the sentence?
- Is this a new idea or repetition?
- Can I understand the product decision?
- Does this feel like product thinking or feature showcasing?

Fix structure before adding copy.

---

## 40. FINAL ACCEPTANCE RULE

Before delivery, ask:

“Did I change or add anything that was not explicitly authorized?”

If yes: revert it.

“Did I substitute a real asset with an approximation?”

If yes: remove it.

“Did I claim something is interactive when it is only simulated?”

If yes: fix it.

“Did I inspect the actual rendered result?”

If no: do not deliver.

---

## 41. FINAL DELIVERABLES

Only after all QA passes succeed, provide:

1. final standalone HTML
2. desktop QA screenshot at 1440px
3. desktop QA screenshot at 1280px
4. mobile QA screenshot at 390px
5. mobile QA screenshot at 360px
6. short factual change log
7. short list of any unresolved limitations

Do not say “QA passed” unless those checks were actually performed.

---

## 42. MOST IMPORTANT PRINCIPLE

THIS IS NOT A CREATIVE INTERPRETATION TASK.

The design work has already been decided.

Your job is precision.

When in doubt: do less.

When an asset is missing: stop.

When a visual is unclear: fix the composition.

When copy is not approved: do not write it.

When something is not mentioned: do not touch it.

The desired outcome is not merely “a nice page.”

It must feel like a world-class, highly polished, editorial product case study where every pixel, crop, movement and transition has a clear purpose.
