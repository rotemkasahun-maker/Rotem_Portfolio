---
name: rotem-visual-regression-guardian
description: Compare before/after renders for ROTEM visual work and identify unintended visual changes outside the requested scope before calling a patch complete.
---

# ROTEM Visual Regression Guardian

## Principle
A correct diff is not proof of a correct visual result.

## Before editing
Capture or inspect the current baseline at the exact target route and viewport.
Record requested scope and explicit no-touch areas.

## After editing
Render the same route and viewport under comparable conditions.
Compare:
- position
- dimensions
- line breaks
- typography
- colors
- surfaces
- borders/rules
- evidence crop
- controls
- motion start/end states where relevant
- mobile behavior where relevant

## Classification
For every visible difference, classify as:
- INTENDED
- ACCEPTABLE SIDE EFFECT
- UNINTENDED REGRESSION
- UNVERIFIED

## Scope discipline
If the task was color-only, spacing changes are regressions.
If the task was tabs-only, section geometry changes are regressions.
If the task was motion-only, copy/layout changes are regressions.

## Never
- call PASS without a render when visual behavior changed
- assume unchanged JSX means unchanged visual output
- hide regressions by broadening the task after the fact
- fix unrelated visual issues without authorization

## Result
VISUAL REGRESSION RESULT
Baseline inspected: YES/NO
After render inspected: YES/NO
Target viewport(s):
Intended differences:
Unintended differences:
Unverified areas:
Result: PASS / PASS_WITH_UNVERIFIED_RISK / FAIL
