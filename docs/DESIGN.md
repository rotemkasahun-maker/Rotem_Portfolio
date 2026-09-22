# ROTKA PORTFOLIO — DESIGN.md

Status: MASTER DESIGN SYSTEM SOURCE
Purpose: Visual language, composition rules, interaction language, and implementation constraints for the ROTKA portfolio.

This file defines the visual language that all portfolio pages must use.
A page-specific reference defines how that specific screen is composed.
This file defines the language in which that composition is allowed to exist.

---

# 1. PRODUCT POSITIONING

The portfolio should communicate:
- strong UX / product / service-design judgment
- observational thinking
- systems thinking
- restraint
- clarity
- visual maturity
- confidence without overstatement

The portfolio should feel:
- highly designed
- spatial
- tactile
- precise
- warm
- intentional
- human
- memorable
- recruiter-friendly
- digitally alive

It should NOT feel:
- like a generic UX portfolio template
- like a SaaS landing page
- like a Behance case study
- like a design-system demo
- like an AI-generated website
- like a flat article
- like a dashboard
- like a glossy tech brand
- like a collection of cards

The core principle:

STRICT GRID / LOOSE COMPOSITION

The system underneath should be precise.
The composition on top should feel free, asymmetric, and editorial without becoming a magazine article.

---

# 2. HOMEPAGE AS VISUAL NORTH STAR

The existing approved Homepage is the strongest visual source of truth.

Do not redesign it unless explicitly requested.

New pages should inherit its visual DNA:
- warm paper canvas
- strong dark typography
- asymmetric composition
- oversized visual moments
- changing density
- tactile evidence/object placement
- precise metadata
- restrained accent usage
- strong scale contrast
- deliberate negative space
- content over container

Approved screens are design commits.

If a page or section is explicitly approved, do not reinterpret it.

---

# 3. COLOR SYSTEM

## Canvas

Primary page background:
`#F3EDE2`

Optional lighter support surface:
`#F7F2E9`

## Typography

Primary text:
`#171717`

Secondary text:
`#4A4742`

Muted / metadata:
`#726D65`

Rules / dividers:
`#CFC7BA`

## Accent

Use restrained accent color only when meaningful.

Known approved accent:
`#9EBA63`

Other accents may only be introduced if explicitly approved.

## Rules

Do NOT use:
- pure white as dominant page canvas
- cold gray backgrounds
- blue-gray
- generic AI blue/purple
- gradients as default decoration
- glossy neon
- low-contrast gray body text

Primary body copy should remain strongly readable.

Muted colors are for:
- metadata
- captions
- secondary labels
- low-priority support text

Never use weak gray as the main reading color.

---

# 4. TYPOGRAPHY

## Core typefaces

Display:
`Roboto Condensed`

Body:
`Manrope`

Micro / metadata:
`IBM Plex Mono`

Use the actual existing project implementations.
Do not substitute fonts simply because a reference uses another typeface.

## Typography principles

Use typography as composition, not decoration.

Prefer:
- strong scale contrast
- intentional line breaks
- precise alignment
- limited weights
- short readable line lengths
- emphasis within sentences for scanning

Avoid:
- too many type styles
- decorative serif introduction unless explicitly approved
- weak hierarchy
- body copy that visually disappears
- excessive all-caps
- generic UX eyebrow + heading + paragraph repetition everywhere

## Scan emphasis

Important words or clauses may be emphasized through:
- weight
- scale
- line break
- isolation
- stronger ink

Do NOT rely on graying out the rest of the paragraph.

---

# 5. GRID & LAYOUT

Known project baseline:

Max content width:
`1024px`

Desktop gutter:
`34px`

Mobile gutter:
`20px`

The grid is strict.
The visible composition may be loose.

## Preferred layout behavior

Use:
- asymmetry
- offsets
- varied alignment
- unequal media widths
- controlled edge tension
- changing section density
- strong negative space
- purposeful full-width moments
- layered objects

Avoid:
- repeated 50/50 splits
- centered everything
- identical section widths
- repeated card grids
- every image in the same width
- equal spacing everywhere
- rigid component-library feeling

---

# 6. SPACING

Spacing should feel intentional rather than system-generated.

Use a consistent underlying rhythm, but allow visual beats to vary.

Prefer:
- generous chapter separation
- tighter internal relationships
- compressed groups where content belongs together
- large pauses around major statements
- asymmetric whitespace

Avoid:
- mechanical equal spacing between every element
- filling blank space with decoration
- overpacked sections
- enormous dead zones created by motion/sticky behavior

Spacing should communicate hierarchy.

---

# 7. COMPOSITION PRINCIPLES

Before designing a section, identify:

1. What is the focal point?
2. What is the narrative beat?
3. What is the role of the media/evidence?
4. Should this beat feel dense or sparse?
5. What is the ONE primary visual mechanism?

Possible mechanisms:
- crop
- overlap
- inset
- scale shift
- layering
- asymmetric split
- typography-led composition
- support surface
- sticky/pinned moment
- full-bleed media
- negative-space pause
- partial reveal

Do not combine all mechanisms at once.

ONE VISUAL IDEA PER BEAT.

---

# 8. DEPTH

Depth should come from spatial relationships, not fake 3D effects.

## Preferred depth mechanisms

### Support Surface
Real media can sit over a subtle secondary paper layer.

Use:
- `#F7F2E9`
- offset 8–28px
- asymmetric placement
- small or no radius
- optional subtle border

### Ambient Shadow

Use only soft, low-opacity shadows.

Examples:
`0 16px 40px rgba(23,23,23,0.08)`
`0 10px 24px rgba(23,23,23,0.06)`

Avoid:
- hard shadows
- deep floating-card shadows
- glossy elevated UI

### Overlap

Use small purposeful overlaps:
- artifact over support layer
- related images
- media slightly entering another visual zone
- caption sharing edge with image

Avoid decorative collision.

### Crop

Images may:
- extend outside alignment
- partially crop
- break the content rail
- continue across a visual beat

Crop must have compositional purpose.

---

# 9. MEDIA BEHAVIOR

Real media is evidence, not filler.

Preferred:
- purposeful crop
- layered surface
- restrained radius
- subtle ambient shadow
- asymmetric placement
- detail + full-context pairing
- animated sequence only when based on real states
- media scale based on narrative importance

Avoid:
- naked screenshots dropped into page
- huge screenshots merely because only a few assets exist
- fake device mockups
- fake UI
- recreated screenshots
- generic phone frames
- decorative image duplication

---

# 10. ROUNDED CORNERS

Rounded corners are allowed.

Preference:
- restrained
- applied to media/surfaces where they improve tactility
- not universal

Do NOT make everything rounded.

Rounded media is acceptable.
Rounded-everything is an anti-pattern.

---

# 11. MOTION

STATIC FIRST.

The static composition must already pass visual QA before motion is added.

Motion should support:
- reveal
- continuity
- hierarchy
- evidence timing
- spatial relationship
- narrative progression

It must not:
- rescue weak layout
- hide content unnecessarily
- create blank scroll gaps
- hijack scroll
- animate layout dimensions
- produce long pinned dead zones
- become the main spectacle

## Recommended reveal motion

Text:
- fade
- translateY 6–12px
- 320–520ms

Media:
- fade
- translateY 16–28px
- optional scale 0.985 → 1
- 520–720ms

Above-the-fold content should appear immediately or nearly immediately.

---

# 12. SCROLL BEHAVIOR

Subtle scroll-linked movement is approved as a direction.

## Scroll Growth

Preferred:
- start scale: `0.985–0.995`
- resting: `1`
- optional max: `1.01–1.03`

The effect should be felt more than noticed.

## Parallax

Allowed only in small amounts:
- 4–12px differential movement
- usually between support layer and foreground artifact

Avoid:
- heavy parallax
- floating decorative objects
- large scroll travel
- depth effects that break layout

---

# 13. HOVER & MICRO-INTERACTIONS

Micro-interactions are an important part of the desired portfolio personality.

Approved direction:
- subtle tilt
- tiny translate
- small shadow response
- contextual cursor label
- intentional hover feedback
- playful language in small doses

Recommended:
- tilt max 1–2deg
- translate max 4px
- scale max 1.02

Do NOT:
- hide the cursor without a clear replacement
- over-animate every link
- use hover effects as decoration only
- use generic glow

Contextual hover labels are allowed only when they describe a real action.

Examples:
- Say hi
- View project
- Open
- Let’s connect

Do not invent cute copy merely to decorate the cursor.

---

# 14. PAGE TRANSITIONS

Page transitions may be used to create continuity between routes.

Desired:
- restrained
- short
- visually distinctive
- consistent with ROTKA palette
- not blocking navigation
- not flashy

Good:
- controlled color/surface wipe
- brief geometric transition
- mask reveal

Avoid:
- long loading theater
- large animation sequences
- motion that delays access to content

---

# 15. LIVING MEDIA

Real interface behavior may be shown through short loops.

Use only when:
- based on real product behavior
- it explains something better than a static screenshot
- loop is short and quiet
- animation does not distract from reading

Good uses:
- UI state sequence
- button interaction
- short user journey
- screen progression

Never fabricate product interaction.

---

# 16. TL;DR / DETAILED MODE

Candidate pattern for long case studies.

Best fit:
- Family Finance
- long evidence-heavy projects

Purpose:
- support recruiter scanning
- preserve deep detail for interested readers

Do not use by default on short projects such as 106.

---

# 17. CASE-STUDY LENGTH TYPES

## Short Case Study
Example:
106 — I Already Told You This

Characteristics:
- 2–3 minute read
- text-led
- few evidence artifacts
- strong opening
- one or two memorable visual moments
- restrained motion
- minimal structure

Do not inflate short projects into long UX-process narratives.

## Long Case Study
Example:
Family Finance

Characteristics:
- deeper evidence
- richer media
- multiple interaction beats
- optional TL;DR/Detailed
- stronger scrollytelling
- more pattern variety
- justified sticky media / looping UI

---

# 18. REFERENCE-LED DESIGN

A supplied reference is not merely inspiration.

Use it as compositional scaffolding.

Before designing from a reference, analyze:

- grid
- composition
- proportions
- typography hierarchy
- spacing
- media placement
- crop
- whitespace
- overlap
- rhythm
- interaction
- scroll behavior

Then reconstruct the mechanism using ROTKA content.

Multiple references may be used across different sections if:
- each reference has a clearly defined purpose
- shared ROTKA design system is preserved
- the resulting page remains coherent

Do NOT mash multiple references into an invented aesthetic without analysis.

---

# 19. DESIGN VS BUILD

Do not ask one agent to invent the visual direction and implement it simultaneously unless explicitly testing a tool.

Preferred workflow:

Product Definition
→ Reference
→ Reference Analysis
→ DESIGN.md
→ Approved Pattern Library
→ Page/Feature Spec
→ Visual Design
→ Visual Critique
→ Build
→ Visual QA
→ Promote Successful Patterns

Implementation agent receives an approved visual direction.

---

# 20. CONTENT INTEGRITY

Case-study content is evidence.

NEVER invent content to fill visual space.

Do not invent:
- headings
- captions
- annotations
- metrics
- research
- quotes
- results
- findings
- validation
- personas
- technical architecture
- project metadata
- diagrams presented as real
- fake screens

If content is missing:
- omit the element
- reduce the composition
- ask

Do not solve missing content with plausible filler.

---

# 21. CONTENT LOCK

When a project has an approved content source:

All user-visible case-study copy must come from that source.

Do not hard-code new semantic case-study text elsewhere.

If a visual pattern requires content that does not exist:
STOP.

Do not invent the missing information.

---

# 22. ANTI-PATTERNS

Never default to:

- card grids
- rounded rectangles around every content group
- dashboards
- SaaS marketing layouts
- centered hero + features
- generic icon rows
- decorative pills
- gradient blobs
- AI blue/purple
- glassmorphism
- glossy floating cards
- weak gray body text
- identical section formulas
- giant raw screenshots
- fake phone/device frames
- artificial diagrams
- random floating shapes
- excessive sticky scroll
- animation used to rescue design
- template-looking UX case studies

When elements feel disconnected:
solve with spacing, hierarchy, alignment, scale, or composition before adding a container.

---

# 23. RESPONSIVE DESIGN

Mobile is designed, not merely made functional.

Preserve:
- hierarchy
- narrative order
- evidence relationship
- visual intent

Adapt:
- crop
- scale
- overlap
- sticky behavior
- gutters
- line lengths
- motion intensity

Do not mechanically shrink desktop compositions.

---

# 24. REDUCED MOTION

With `prefers-reduced-motion`:

- all content visible
- no required animation
- no scroll-linked transform dependency
- no parallax
- no hidden media
- no motion required for comprehension

---

# 25. CHANGE CONTROL

If the task says change only X:
CHANGE ONLY X.

Do not:
- modify Homepage
- modify unrelated routes
- modify global CSS
- change typography
- replace assets
- alter approved copy
- add dependencies
- restructure shared components

unless explicitly authorized.

If a technical constraint requires an unrelated change:
STOP and report it first.

---

# 26. VISUAL QA

Every visual stage requires visual QA.

Check:

- Is hierarchy immediate?
- Does the composition feel designed?
- Is spacing intentional?
- Are images placed with purpose?
- Is negative space strong enough?
- Does it feel template-ish?
- Are there AI-generated patterns?
- Are body text and important content readable?
- Does the reference quality survive translation?
- Does the page still work without motion?
- Is media proportionate to importance?
- Did any decorative element appear without a reason?
- Does the page still feel like ROTKA?

If the first meaningful pass is fundamentally wrong:
STOP.

Do not keep adding cosmetic patches.

Return to:
- reference
- composition
- art direction

---

# 27. PATTERN PROMOTION

A new pattern enters the approved library only after:

1. It is implemented in a real page.
2. It passes visual QA.
3. The user explicitly approves it.
4. It works responsively.
5. It does not require invented content.
6. It remains valid under reduced motion.
7. It is reusable.

Successful design decisions should be promoted back into the library.

---

# 28. CORE WORKING PRINCIPLE

The AI is not the Art Director.

The AI receives:
- product definition
- reference
- design system
- pattern library
- visual constraints
- content source

The goal is to reduce the AI's decision space until implementation becomes controlled composition rather than invention.
