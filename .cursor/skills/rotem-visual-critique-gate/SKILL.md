---
name: rotem-visual-critique-gate
description: Require screenshot-based visual diagnosis before patching when the user says a design feels wrong, generic, flat, crowded, unbalanced, or not in the intended direction.
---

# ROTEM Visual Critique Gate

## Trigger
Use when feedback is subjective or directional, such as:
- "this is not the direction"
- "it feels generic"
- "too white"
- "too close"
- "doesn't work visually"
- "looks like a template"

## Principle
Do not patch before identifying the visual failure.

## Gate
1. Inspect the actual render/screenshot/video.
2. Name what is visually happening, not what the CSS probably does.
3. Separate symptom from cause.
4. Identify which design layer is responsible: color, typography, hierarchy, spacing, geometry, evidence, motion, or density.
5. State what must remain untouched.
6. Form one testable hypothesis.
7. Only then implement if the user asked for implementation.

## Critique axes
- hierarchy
- focal point
- rhythm
- section silhouette
- spacing
- text measure
- alignment
- color/value/temperature
- surface treatment
- typography
- evidence prominence
- motion competition
- responsive behavior
- generic/template signals

## Never
- respond to vague visual dissatisfaction by randomly changing several variables
- assume lighter opacity fixes a bad surface strategy
- introduce extra UI components unless the critique supports them
- call something successful without rendering it
- silently fix unrelated issues noticed during critique

## Output
VISUAL CRITIQUE
What I see:
Why it feels wrong:
Root cause:
Not the cause:
Keep locked:
Hypothesis to test:
Scope of next patch:

If the task is QA-only, stop after critique.
