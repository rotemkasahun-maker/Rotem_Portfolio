---
name: feature-to-build-plan
description: Turn a feature idea or UX decision into a repository-grounded, implementation-ready build plan for the portfolio or Family Finance app. Use before coding when scope, dependencies, contracts, acceptance criteria, or rollout order are not yet explicit.
---

# Feature to Build Plan

Convert intent into an executable plan without silently expanding the feature. Inspect relevant code, tests, assets, handoffs, and conventions before proposing file-level work.

## Frame the request

Capture:

- `GOAL`: observable user outcome.
- `CURRENT STATE`: what exists now, with evidence.
- `TARGET`: exactly what will change.
- `PROTECTED`: what must remain untouched.
- `NON-GOALS`: tempting adjacent work explicitly excluded.
- `TRUTH GAPS`: facts that must be verified rather than assumed.

If a missing choice would materially change architecture or UX, ask one focused question. Otherwise make a labeled, reversible assumption.

## Map the build

Identify affected routes/screens, components, state, API contracts, persistence, background work, assets, responsive behavior, accessibility, privacy, migrations, analytics, and tests only where relevant. Name actual repository files when known; do not invent paths.

Split work into small ordered slices. Each slice must state:

1. outcome;
2. files/systems affected;
3. dependency or prerequisite;
4. implementation notes;
5. verification and acceptance criteria;
6. rollback or safe stopping point when risk is meaningful.

Prefer vertical slices that can be tested over large layer-by-layer rewrites. Reuse existing patterns and interfaces unless evidence shows they cannot support the requirement.

## Readiness gate

A plan is build-ready only when scope, source of truth, affected interfaces, risk, test method, and done criteria are explicit. Mark unresolved blockers as `BLOCKED`; do not hide them inside implementation steps.

## Output

Return `BUILD BRIEF`, `REPOSITORY FINDINGS`, `SCOPE LOCK`, `DEPENDENCIES`, `ORDERED BUILD PLAN`, `ACCEPTANCE CRITERIA`, `RISKS`, and `READY / BLOCKED`. Do not modify code unless implementation was also requested.
