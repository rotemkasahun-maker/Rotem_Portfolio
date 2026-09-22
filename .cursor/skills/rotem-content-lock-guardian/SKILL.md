---
name: rotem-content-lock-guardian
description: Protect locked portfolio copy and user-visible strings during visual, motion, layout, refactor, and QA tasks.
---

# ROTEM Content Lock Guardian

## Principle
A visual task is not permission to edit content.

## Default rule
If the user did not explicitly request copy changes, preserve all user-visible strings exactly, including:
- spelling
- punctuation
- capitalization
- line content
- metadata
- labels
- section names
- status language
- disclaimers

## Source of truth
Use the current approved/rendered source unless a newer canonical copy source is explicitly identified.
Do not restore older handoff copy merely because it exists in the repo or chat history.

## Workflow
1. Identify files/selectors to change.
2. Record all user-visible strings in the touched surface before editing.
3. Perform the non-copy task.
4. Diff user-visible strings after editing.
5. If any string changed unintentionally, restore it before completion.

## Stop conditions
STOP and report if:
- implementation appears to require rewriting copy
- two canonical copy sources conflict
- a refactor would remove or merge visible text
- a prior version contains different wording and freshness is unclear

## Never
- "improve" grammar during a design pass
- shorten text to solve layout without permission
- add helper copy, captions, labels, or explanatory text
- normalize apostrophes, quotation marks, punctuation, or capitalization automatically
- infer missing approved copy from an old version

## Completion report
CONTENT LOCK
Checked: YES/NO
Visible strings changed intentionally: NONE / list
Unintended copy drift found: YES/NO
Restored: YES/NO
