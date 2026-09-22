# ROTKA Portfolio Design System v1.1

## North star

A warm, highly designed, evidence-led digital portfolio where precise typography, real artifacts, strong scale contrast, controlled asymmetry, depth, and restrained interaction create an authored experience.

The portfolio may borrow editorial discipline, but it should not default to "editorial article" layouts.

Target character:
- art-directed
- tactile
- spatial
- direct
- warm
- evidence-led
- asymmetric
- precise
- confident
- scannable
- digitally alive
- restrained

Not:
- generic UX portfolio
- SaaS
- startup landing page
- Behance template
- dashboard shell
- flat article
- pastel AI portfolio
- repetitive card system
- glossy tech brand
- moodboard/scrapbook

Core principle:

STRICT GRID / LOOSE COMPOSITION

---

# 1. Live typography system

Display:
**Roboto Condensed 700**

Body:
**Manrope 400 / 500**

Metadata / micro:
**IBM Plex Mono 400 / 500**

Do not introduce new fonts without explicit approval.

Use typography to create hierarchy through:
- scale
- placement
- width
- line breaks
- contrast
- whitespace

Do not rely only on heavier weight.

Primary body copy should remain strong and readable.

Avoid weak gray body copy.

---

# 2. Core palette

Canvas:
`#F3EDE2`

Light paper:
`#F7F2E9`

Ink:
`#171717`

Secondary:
`#4A4742`

Metadata:
`#726D65`

Rules:
`#CFC7BA`

Optional restrained accents:
- `#9EBA63`
- `#D8C46A`
- `#C7785E`
- `#AAB59A`

Accent is for small semantic/editorial emphasis, not decorative fields.

Do not recolor authentic evidence/UI merely to fit this palette.

Avoid:
- cold gray page backgrounds
- blue-gray
- generic AI blue/purple
- ornamental gradients
- neon
- glossy surfaces

---

# 3. Grid and spacing

Known baseline:
- max width: 1024px
- desktop gutter: 34px
- mobile gutter: 20px

Use a strict grid underneath, but allow asymmetric visible composition.

Spacing should communicate hierarchy.

Prefer:
- generous chapter separation
- tighter internal grouping
- sparse statement pauses
- asymmetric breathing room

Avoid:
- identical vertical gaps everywhere
- section-packed layouts
- giant dead scroll zones
- filling empty space by default

---

# 4. Composition

Each beat needs:
1. first read
2. second read
3. proof/evidence
4. supporting context
5. interaction/action if relevant

Use ONE main visual mechanism per beat.

Possible mechanisms:
- crop
- scale shift
- inset
- asymmetric split
- support surface
- statement pause
- full-bleed moment
- layered media
- subtle sticky behavior
- negative-space transition

Avoid multiple equally loud focal points.

A page should feel authored as one environment, not stacked independent modules.

---

# 5. Image / artifact treatment

Images and evidence are compositional objects, not default card thumbnails.

Prefer:
- meaningful crop
- scale variation
- deliberate alignment/misalignment
- authentic source appearance
- small supporting evidence when appropriate
- selective rounded corners
- subtle material depth

Avoid:
- automatic centering
- equal aspect ratios everywhere
- universal rounded rectangles
- giant raw screenshots
- fake device mockups
- redesigning real product UI

---

# 6. Depth system

Depth should come from spatial relationships, not fake 3D spectacle.

## Support surface
Optional secondary paper layer:
- `#F7F2E9`
- offset roughly 8–28px
- asymmetric
- small or no radius
- not a centered card

## Ambient shadow
Use soft, low-opacity shadows.

Example:
`0 16px 40px rgba(23,23,23,0.08)`

or lighter.

Avoid:
- hard shadow
- glossy floating-card shadow
- deep black shadow

## Radius
Rounded media is allowed.
Rounded-everything is not.

Suggested:
8–12px when useful.

## Overlap
Overlap is NOT default.

Use only when:
- reference supports it
- story benefits from it
- it improves composition

Do not introduce overlap automatically.

---

# 7. Motion

STATIC FIRST.

Motion must explain, connect, reveal, or give tactile feedback.

Do not use motion to rescue weak composition.

Allowed directions:
- restrained reveal
- subtle scroll growth
- tiny parallax
- hover tilt
- contextual cursor label
- short page transition
- real UI loop

Avoid:
- bounce/elastic spectacle
- scroll-jacking
- giant pinned zones
- layout-dimension animation
- animation everywhere
- blank gaps
- hiding important content

## Reveal
Text:
- fade + translateY 6–12px
- 320–520ms

Media:
- fade + translateY 16–28px
- optional scale 0.985 → 1
- 520–720ms

Above-fold content should be visible immediately or nearly immediately.

---

# 8. Scroll behavior

## Subtle scroll growth
Approved direction:
- start 0.985–0.995
- settle at 1
- optional max 1.01–1.03

It should be felt more than noticed.

## Parallax
Use minimal differential movement:
roughly 4–12px.

Avoid heavy floating effects.

---

# 9. Hover and micro-interactions

Use small tactile feedback selectively.

Allowed:
- tilt max 1–2deg
- translate max 4px
- scale max 1.02
- subtle shadow change
- contextual cursor label

Cursor labels may use real action language:
- Say hi
- View project
- Open
- Let's connect

Do not invent playful labels without a real action.

Never hide the default cursor without a clear accessible replacement.

---

# 10. Page transitions

May be used between routes.

Preferred:
- short
- restrained
- ROTKA palette
- geometric wipe / surface transition / mask reveal

Avoid:
- long loading theater
- blocking navigation
- flashy transitions

---

# 11. Living media

Real interaction can be shown through short loops.

Use only when based on real behavior.

Examples:
- screen sequence
- button interaction
- typed-message simulation based on the real message
- state progression
- short user journey

Never fabricate functionality.

For reconstructed evidence animation:
preserve the exact real text, sequence, and meaning.
Do not add content not present in the evidence.

---

# 12. Material hierarchy

Editorial shell:
warm, precise, restrained.

Physical / real-world evidence:
may preserve source colors and irregularity.

Product UI:
must remain faithful to the real product.

Do not make real UI "match" the portfolio by redesigning it.

---

# 13. Case-study modes

## Short case study
Example: 106

Characteristics:
- 2–3 minute read
- text-led
- few evidence artifacts
- strong opening
- compact body
- one or two memorable interaction moments
- restrained motion

Do not inflate it into a fake full UX process.

## Long case study
Example: Family Finance

Characteristics:
- deeper evidence
- richer media
- stronger scrollytelling
- possible TL;DR / Detailed body modes
- more interaction patterns
- justified sticky media / looping UI

---

# 14. TL;DR / Detailed

Candidate global pattern for long or recruiter-focused work.

Rule:
- shared opening stays fixed;
- toggle appears after shared opening;
- body below toggle swaps fully;
- TL;DR must be substantially shorter;
- Detailed contains full reasoning/evidence.

Do not treat the toggle as a decorative segmented control.

---

# 15. Responsive design

Mobile is designed, not merely shrunk.

Preserve:
- hierarchy
- reading order
- evidence relationship
- narrative intent

Adapt:
- crop
- scale
- overlap
- sticky behavior
- gutters
- line lengths
- motion intensity

---

# 16. Reduced motion

With `prefers-reduced-motion`:
- all content visible
- no required animation
- no parallax dependency
- no scroll-linked transform needed for comprehension
- no hidden evidence

---

# 17. Anti-patterns

Avoid:
- SaaS cards
- repetitive boxed sections
- equal-card grids
- decorative gradients
- glassmorphism
- AI blue/purple
- giant generic AI graphics
- pill-heavy interfaces
- fake handwriting
- doodles
- decorative arrows
- fake sticky notes/research boards
- stock photography
- shiny phone mockups
- identical project silhouettes
- arbitrary catalogue decoration
- ornamental animation
- weak gray body copy
- giant raw screenshots
- rounded-everything
- fake diagrams
- generic "professional portfolio" styling

---

# 18. Tone

Professional =
deliberate, precise, coherent, high-fidelity, visually controlled, truthful.

Professional ≠ corporate.

Personality comes from:
- copy
- evidence
- composition
- depth
- interaction
- motion
- judgment

not gimmicks.
