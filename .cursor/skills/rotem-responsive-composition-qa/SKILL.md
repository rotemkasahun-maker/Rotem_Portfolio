---
name: rotem-responsive-composition-qa
description: Perform composition-focused responsive QA across ROTEM portfolio pages, checking hierarchy, line breaks, whitespace, evidence relationships, collisions, and visual rhythm rather than only overflow.
---

# ROTEM Responsive Composition QA

## Principle
Responsive QA is not just "nothing overflows."
The composition must still make editorial sense at each breakpoint.

## Required viewports when practical
- 390px mobile
- ~768px tablet/narrow
- ~1024px small desktop
- 1280px or wider desktop

Use exact project breakpoints when known.

## Check at each viewport
- title line breaks
- display statement measure
- body-copy measure
- section spacing
- accidental dead space
- overly compressed space
- tab/control proximity
- evidence cropping
- evidence-to-text distance
- overlap/collision
- alignment shifts
- stacking order
- rule lengths
- metadata wrapping
- viewport-edge relationships
- whether the dominant focal point changes unintentionally

## Editorial checks
- Does asymmetry survive or collapse into awkward misalignment?
- Does a partial surface become a full card on mobile?
- Does evidence remain legible and visually connected to its argument?
- Do long paragraphs become walls of text?
- Does an intentional gap become a huge empty hole?
- Does mobile feel designed, not merely stacked?

## Workflow
1. Capture baseline at all relevant viewports.
2. Make the scoped change.
3. Capture same viewports again.
4. Compare both functional and compositional differences.
5. Report breakpoint-specific failures.
6. Do not silently alter copy to fix wrapping.

## Result
PASS only if all required viewports were actually inspected.
Otherwise use PASS_WITH_UNVERIFIED_VIEWPORTS and list what remains unchecked.
