# Spacing

Use this reference when the UI feels cramped, floaty, or randomly spaced.

## Core heuristics

- Spacing should follow a visible rhythm instead of arbitrary pixel values.
- A coarse grid such as 8-point increments is a useful default for layout spacing and component padding.
- Not every gap should be equal. Strong interfaces use tighter related groups and larger separations between sections.
- Active spacing tokens on a screen should be limited enough that the rhythm is visible.

## Practical application

- Audit the interface for one-off spacing values and collapse them into a smaller set.
- Differentiate intra-component spacing from section spacing.
- Use repeated padding and gap patterns for sibling components.
- Let larger layout blocks breathe more than local control groups.

## Common failure modes

- Everything uses nearly the same gap, so nothing groups clearly.
- Tiny inconsistencies accumulate and make the page feel sloppy.
- Components have good internal spacing but insufficient separation from neighboring blocks.
- The layout relies on oversized white space to mask weak hierarchy.

## When the heuristic bends

- Optical adjustments are sometimes better than rigid grid math, especially around icons, typography, and asymmetric compositions.
- High-density enterprise tools may use a tighter system as long as the rhythm remains consistent.

## Sources

- `https://designparser.de/`
- `https://designparser.de/data/rules.json`
