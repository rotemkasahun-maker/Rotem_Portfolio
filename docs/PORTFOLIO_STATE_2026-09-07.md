# Portfolio state — 2026-09-07

## Current routes and views

- `/` — Homepage (implemented as the `home` application state)
- `/about` — About (implemented as the `about` application state)
- `/work/family-finance` — Family Finance (implemented as the `family-finance` application state)
- Work index and Contact also exist as application states.
- `/work/tiny-tool`, `/work/building-this-portfolio`, and `/work/i-already-told-you-this` are not present in this code snapshot. Do not invent or recreate them during backup work.

The current application uses in-memory route state rather than pathname-based routing, so the paths above describe the intended public route mapping, not literal router definitions in this snapshot.

## Design-system tokens

- `--canvas: #f7f4ee`
- `--canvas-2: #fbf9f5`
- `--ink: #171714`
- `--muted: #777169`
- `--line: #d8d2c8`
- `--product: #eee6da`
- `--product-2: #f4ede3`
- `--dark: #1f1e1a`

## Typography

- Primary UI and display family: Manrope, with Inter, Arial, Helvetica, and sans-serif fallbacks.
- Editorial quote treatment: Georgia, serif.
- Manrope weights loaded by the document: 400, 500, and 600.

## Motion state

- Family Finance includes the recovered continuous ticker animation (`ticker`, 22 seconds, linear, infinite).
- Reduced-motion preferences disable animation and transitions.
- Homepage refrigerator state changes are user-controlled through Hidden / Visible controls.

## Locked routes and sections

- Preserve Homepage, About, Family Finance, and Building This Portfolio without redesign, copy, layout, typography, color, motion, or behavior changes.
- Preserve Tiny Tool's current artifact composition when its implementation is introduced to this repository.
- Preserve Family Finance content and evidence structure.
- Building This Portfolio and Tiny Tool are named as locked work, but their implementations are not contained in this snapshot.

## Public case-study titles

- Family Finance → **Where is all our money going?**
- Tiny Tool → **Who was I talking to again?**
- 106 WhatsApp → **I Already Told You This**

## Case-study architecture decision

Use one flexible `CaseStudyShell` with project-specific slots, not one rigid UX template. The 106 case study is intended to be the first test implementation. Existing case-study routes are not migrated in this snapshot.

## Next planned step

106 implementation → QA → Tiny Tool migration → Family Finance migration
