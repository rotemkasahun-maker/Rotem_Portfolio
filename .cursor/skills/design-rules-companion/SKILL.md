---
name: design-rules-companion
description: Use this skill when you want concrete UI and UX heuristics to guide interface design, critique, or refinement. It complements creative skills like $frontend-design with practical rules for color, typography, spacing, interaction, visual hierarchy, icons, and UX decision-making.
---

# Design Rules Companion

## Overview

This skill adds concrete design heuristics to UI work. Use it to pressure-test visual decisions, convert vague feedback into actionable changes, and add numeric guardrails while still leaving room for judgment.

This skill is best used alongside `$frontend-design`:

- Use `$frontend-design` to set the aesthetic direction and implement the interface.
- Use `$design-rules-companion` to check whether the composition, hierarchy, spacing, typography, and interaction choices are coherent.

This is an independent synthesis based on public design-rule material from `designparser.de`. Treat it as guidance, not an official or exhaustive standard.

## When To Use

Use this skill when the user asks for any of the following:

- a UI critique grounded in concrete heuristics rather than general taste
- stronger visual hierarchy, spacing rhythm, or typography rules
- numeric guidance for touch targets, line height, color usage, or layout spacing
- help deciding whether a UI is visually noisy, flat, unclear, or inconsistent
- a second pass after implementation to tighten the interface

Do not use this skill by itself when the task is primarily about:

- inventing a bold visual direction from scratch
- writing frontend code with no design or UX component
- accessibility or standards compliance that requires primary-source specs

## Workflow

### 1. Identify the design failure mode

Classify the problem before applying rules:

- hierarchy problem: users do not know where to look first
- spacing problem: the layout feels cramped, floaty, or monotonous
- typography problem: the page feels hard to scan or visually unbalanced
- color problem: accents are diluted, contrast is weak, or the palette feels chaotic
- interaction problem: controls feel hard to hit, ambiguous, or overly dense

### 2. Load only the relevant references

Read category references selectively:

- `references/color.md`
- `references/typography.md`
- `references/spacing.md`
- `references/interaction.md`
- `references/ux-laws.md`
- `references/icons.md`
- `references/visual-perception.md`

Do not load every reference unless the task is a broad design audit.

### 3. Diagnose before changing

For each issue:

- name the rule that applies
- explain why the current design conflicts with it
- note when the rule might not apply
- propose the smallest change that improves the result

Prefer targeted changes over full redesigns unless the structure is fundamentally broken.

### 4. Convert heuristics into implementation decisions

Translate design guidance into specific changes such as:

- narrowing the active grayscale range on a screen
- reducing accent color spread to a few high-value actions
- tightening heading line-height while loosening body copy
- reintroducing an 8-point spacing rhythm
- increasing tap targets and spacing between controls

### 5. Preserve room for judgment

These rules are heuristics, not laws. When a deliberate aesthetic choice conflicts with a rule, say so explicitly and explain the tradeoff.

## Output Style

When using this skill:

- be concrete and diagnostic
- prefer “change X because Y” over abstract taste language
- include rough numeric ranges when useful
- keep the recommendation tied to visible interface outcomes

When critiquing a UI, structure the response around:

1. what is failing
2. which heuristic explains it
3. what to change
4. where the heuristic may break down

## Reference Notes

Each reference file is a paraphrased synthesis of public material from `https://designparser.de/`.

Use those files as decision support, not as authoritative standards. When a task depends on official requirements, consult the primary source instead of relying on this skill alone.
