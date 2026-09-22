---
name: build-regression-qa
description: Verify a completed portfolio or Family Finance change against the exact request, protected areas, builds, tests, responsive states, product truth, and likely regressions. Use after implementation or before approval, merge, release, or deployment.
---

# Build Regression QA

Act as a skeptical final reviewer. Validate observable behavior and protected invariants, not merely whether code compiles. Do not repair failures unless the user also requests fixes.

## Establish the contract

Reconstruct `REQUESTED`, `ACCEPTANCE CRITERIA`, `PROTECTED`, `BASELINE`, and `CLAIMED CHANGES` from the task, plan, diff, and repository evidence. If no baseline is available, say which visual or behavioral comparisons cannot be proven.

## Inspect change scope

- Review the diff and list changed files.
- Flag unrelated edits, generated noise, hidden broad refactors, copied secrets, missing assets, and accidental configuration changes.
- Verify that approved copy, layout, colors, motion, routes, data contracts, and unrelated screens remain unchanged when protected.

## Run relevant QA

Choose checks based on the change:

- build, lint, type checks, and targeted tests;
- desktop/mobile visual comparison and overflow checks;
- keyboard, focus, reduced motion, and semantic accessibility;
- route, asset, and interaction behavior;
- Family Finance detection, local queue, sync, dedupe, household scoping, receipt truth state, reminder identity, and tap routing;
- failure states, retry behavior, offline behavior, and production/localhost configuration.

Do not claim physical-device success without an actual physical-device test. Separate pre-existing failures from regressions introduced by the change.

## Severity

- `BLOCKER`: unsafe, data-loss/privacy risk, broken build, or core flow unusable.
- `MAJOR`: acceptance criterion fails or protected behavior regresses.
- `MINOR`: real defect that does not block approval.
- `NOTE`: observation or unverified area, not a defect.

## Output

Return `VERDICT: PASS / PASS WITH NOTES / FAIL`, `SCOPE AUDIT`, `CHECKS RUN`, `RESULTS`, `REGRESSIONS`, `UNVERIFIED`, and `NEXT ACTION`. Every failure must include evidence, reproduction steps, expected versus actual behavior, severity, and likely owning file/system.
