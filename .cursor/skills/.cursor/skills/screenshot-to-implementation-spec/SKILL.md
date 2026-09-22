---
name: screenshot-to-implementation-spec
description: Convert a screenshot, visual reference, mockup, or rendered page into a numerical implementation-ready web specification. Use when building from an image, matching a reference, reproducing a composition, or removing visual guesswork before coding.
---

# Screenshot to Implementation Spec

Turn the visible composition into a build contract. Distinguish direct observations from estimates and choices required because the source does not reveal them.

## Lock scope

State `REFERENCE`, `FIDELITY` (structural adaptation or faithful reconstruction), `TARGET`, `PROTECTED`, and `UNKNOWN`. Do not invent hidden interactions or redesign protected content.

## Extract geometry

Use the image pixel dimensions as the measurement frame when available. Specify:

- viewport assumptions, max-width, gutters, columns, rules, and anchors;
- section heights and vertical rhythm;
- each major element's position, size, ratio, and anchor relationship;
- overlap, crop, object-position, z-index, and overflow;
- typography by role: family, weight, size, line-height, tracking, measure, alignment, casing;
- color, opacity, border, shadow, texture, and media treatment;
- visible/requested motion: trigger, property, range, duration, easing, reduced motion.

Use exact values where visible. Mark estimates with `~` and give tolerances when fidelity matters.

## Responsive behavior

Do not shrink desktop mechanically. Define desktop, mobile, and any necessary breakpoint. Specify what stays fixed, becomes fluid, stacks, reorders, crops, hides, or moves. If no mobile reference exists, label responsive decisions as reasoned proposals.

## Implementation mapping

Describe component/DOM grouping, layout primitive, shared tokens versus route-specific values, asset requirements, and drift-prevention constraints. Prefer the simplest CSS mechanism that explains the reference.

## Output

Return: `BUILD INTENT`, `PROTECTED ELEMENTS`, `MEASUREMENT BASIS`, `LAYOUT SPEC`, `TYPOGRAPHY SPEC`, `MEDIA & LAYERING SPEC`, `RESPONSIVE SPEC`, optional `MOTION SPEC`, `IMPLEMENTATION MAP`, `ACCEPTANCE CHECKS`, and `UNCERTAINTIES`.
