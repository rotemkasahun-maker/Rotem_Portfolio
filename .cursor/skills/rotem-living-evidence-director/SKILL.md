---
name: rotem-living-evidence-director
description: Direct deterministic, source-faithful animated evidence such as WhatsApp/SMS UI recreations for ROTEM case studies without inventing UI or overfitting to one screenshot.
---

# ROTEM Living Evidence Director

## Purpose
Use when converting real screenshots, chats, forms, messages, or interaction evidence into animation/GIF/video for a case study.

## Core principle
The animation must strengthen evidence, not become decorative motion.
Source fidelity beats spectacle.

## Source fidelity
Preserve where observable:
- UI geometry
- typography family/weight/scale
- bubble width and spacing
- timestamps/date separators
- input-area growth behavior
- icon positions
- message order
- scroll/crop logic
- full-message visibility

Do not invent:
- additional messages
- UI states not present in the source
- controls
- timestamps
- typing text
- backend behavior

## Generalize, do not overfit
Rules must describe the UI system, not one screenshot's pixel coordinates.
Use reusable constraints such as:
- right text boundary before action icons
- input grows with wrapped text
- messages appear sequentially
- only fully visible bubbles remain in final crop
- date separators follow conversation chronology

Avoid hardcoding fixes that only work for one captured frame unless the user explicitly requests a one-off recreation.

## Typing behavior
- Characters appear in reading order.
- If text wraps, line two begins only after line one reaches the wrap point.
- The composer/input field expands as the text grows.
- Do not animate multiple lines as if they were typed simultaneously.
- Avoid jitter, vertical reflow, or font metric changes during typing.

## Message chronology
Preserve exact sequence.
If there are multiple outgoing messages and multiple automated replies, do not collapse them.
Timing should reveal causality clearly.

## Cropping
- Do not leave half-visible date pills or message bubbles at viewport edges unless they are intentionally part of the source composition.
- Prefer full evidence units.
- Never crop the key message needed to understand the interaction.

## Motion discipline
- deterministic timing
- no decorative bounce
- no random cursor drift
- no unnecessary camera movement
- readable pauses after meaningful events
- moving evidence must not cross text exclusion zones on the case-study page

## QA
Compare representative frames against the source screenshot/video.
Check start, key transition points, and final state.
Do not claim fidelity without visual inspection.

## Output before build
LIVING EVIDENCE PLAN
Source:
Sequence:
Stable geometry rules:
Typing rules:
Crop rules:
Timing hierarchy:
What must not be invented:
QA checkpoints:
