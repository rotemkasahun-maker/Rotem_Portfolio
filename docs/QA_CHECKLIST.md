# QA_CHECKLIST.md

Before declaring a task complete, verify all of the following.

## Scope

- Did I modify anything outside the explicitly requested scope?
- Did I refactor unrelated code?
- Did I change a neighboring section without approval?
- Did I replace any approved asset without instruction?
- Did I invent copy?

If yes to any:
FAIL.

## Visual direction

- Does this feel authored and editorial?
- Is the composition object-led where appropriate?
- Is asymmetry intentional rather than accidental?
- Is there enough negative space?
- Is hierarchy controlled and restrained?
- Did I avoid generic card layouts?
- Did I avoid SaaS/dashboard language as the portfolio aesthetic?
- Did I avoid gradients, doodles, sticky notes, arrows, tape and scrapbook styling?

## Ultimate visual test

Could this screen belong to any random AI-generated minimal UX portfolio?

If yes:
FAIL. Revise.

## Technical

- Did I preserve existing routes?
- Did I preserve approved copy?
- Did I preserve approved assets?
- Is the requested change responsive?
- Did I introduce console/build errors?
- Did I run only the minimum validation required?
- Did I avoid unnecessary file rewrites?

## Product truth

- Did I invent product metrics?
- Did I imply launch/usage/validation that does not exist?
- Did I show product states that contradict current known behavior?
- Did I promise financial accuracy/balance that is not trustworthy?

If yes:
FAIL.

## Codex budget

- Did I read only the files needed?
- Did I avoid re-scanning the full repository?
- Did I keep the response concise?
- Did I avoid speculative alternatives that were not requested?

## Completion report

Return only:
1. files changed
2. concise summary of changes
3. validation performed
4. anything still unresolved

No long recap unless requested.
