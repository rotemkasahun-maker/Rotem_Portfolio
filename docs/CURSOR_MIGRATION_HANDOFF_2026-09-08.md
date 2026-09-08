# ROTKA Portfolio — Cursor Migration Handoff
Date: 2026-09-08

## Migration goal
Open the existing repository as-is in Cursor and continue from the current codebase. This is not a redesign, rebuild, cleanup, or refactor.

Preserve:
- all Git history
- Sites v17 export
- 106 experiments V1–V7
- approved homepage work
- locked Building This Portfolio route
- Family Finance and Tiny Tool assets/content
- donor/source/license records
- rejected experiments for rollback/reference

## Change-control rule
If a task asks to change only X, only X changes. Approved screens are design commits. Do not rewrite copy, alter unrelated layout/colors/type/images/motion, add decoration, invent data, or regenerate approved work.

## Process
1. Goal / Positioning
2. Content / Product Architecture
3. Design Direction
4. Design System / Pattern Library
5. High-Fidelity Design
6. Motion / Interaction
7. Responsive / Edge Cases
8. Implementation
9. QA / Regression
10. Version / Release

Current status:
- Homepage is the locked visual North Star.
- Case-study visual system is still unresolved.
- 106 is the current pilot.
- Motion must wait for static approval.
- Browser render + visual QA are required.
- Git is source of truth.
- Cursor becomes the main implementation environment after migration.

## Global visual DNA
Warm editorial publication/catalogue; tactile, asymmetric, evidence-led, strong scale contrast, restrained accents, precise sans type.
Avoid SaaS/Behance/card-grid/developer-portfolio aesthetics, cold grey UI, blue-purple AI gradients, glossy cards, arbitrary containers.

Historical palette:
- #F3EDE2 page
- #F7F2E9 alternate canvas
- #171717 primary
- #4A4742 secondary
- #726D65 metadata
- #CFC7BA rules

Inspect Sites v17 shared/homepage styles before changing fonts.

## Homepage — locked
Hero:
I KEPT FORGETTING
THE LETTUCE
IN MY FRIDGE.
THE PROBLEM WASN’T ME.
IT WAS WHERE I PUT IT.

Support:
I design around the small frictions of daily life —
where behavior, systems, and environment quietly shape what happens next.

Second moment:
OUT OF SIGHT, OUT OF MIND.

Do not redesign homepage unless explicitly requested.

Eventually homepage project index should be:
1. Where is all our money going?
2. Who was I talking to again?
3. I Already Told You This
4. Building This Portfolio

## Public project names
- Family Finance → Where is all our money going?
- Tiny Tool → Who was I talking to again?
- 106 → I Already Told You This
- Building This Portfolio → keep locked

## 106 — current pilot
Real route:
`/work/i-already-told-you-this`

Experiments V1–V7 should remain available for reference/rollback.
V7 is the latest experiment.
None should replace the real route until visual approval.

Approved content:
Title: I Already Told You This
Metadata: A REAL-LIFE ANNOYANCE / SERVICE DESIGN / 2026

Opening:
I told the city what was wrong.
I told them where it was.
Then their WhatsApp asked me to do it again.

THE MOMENT:
I had already given them the problem and the location.

WHY IT MATTERS:
The second time it happened, I just didn’t continue.

Intervention headline:
Add a small AI interpretation layer before the intake flow.

Intervention body:
The layer would read the resident’s message, extract the information already there, map it to the municipality’s required fields, and check what is still missing. If something is missing, ask only for that. If everything required is already there, move the request forward.

System logic:
Natural-language message → extract existing information → map/classify to required fields → determine what is missing → ask only for missing information → if complete, move forward.

What I’d Check Next:
- What fields are mandatory?
- At what point is an official request created?
- What can the current setup receive automatically?
- Which fields still require human handling?
- Can known sender details be reused safely if privacy/policy permits?
- Can landmarks/parks be resolved reliably?
- What validation is needed for extraction/completion accuracy?

Conclusion:
People shouldn’t have to repeat information they’ve already given a service.

Status:
Unsolicited service improvement proposal · Sent to the Municipality of Petah Tikva for consideration · Not commissioned, implemented or validated

Evidence:
- public/106/whatsapp-mosquitoes.jpg
- public/106/whatsapp-repetition.jpg

Truth guardrails:
Do not claim backend failure, implementation, municipal validation, user testing, measured outcomes, or known CRM/provider/API/internal architecture.
Sender-details reuse and landmark resolution are validation questions only.

Visual status:
ONLY content/evidence/truth language are approved.
NO current 106 visual implementation is approved.

History:
- early Sites / simplified / current-flow / art-direction passes: rejected
- V2: rejected
- V5 Xan Torres true transplant: method valid, donor visually rejected
- V6 Jeevankumar: screened out before implementation
- V7 Diyor true transplant: latest experiment

V7 donor:
diyoriko/portfolio-template
MIT, Copyright (c) 2026 Diyor Khakimov

V7 route:
`/work/i-already-told-you-this-v7`

V7 current technical state:
- source validates
- dynamic-import failures were traced to unstable Codex/Vite preview lifecycle
- visual QA has not been cleanly completed in a stable external environment
- first Cursor task: run the existing code locally and inspect V7; do not redesign first

## Reuse rule
REUSE BEFORE INVENTING.
Verify license before reusing code.
“inspired by” is not a transplant.
A visual donor transplant should use actual source or exact mechanical port.
Do not copy proprietary live-site code without permission/license.

## Git/source snapshots
Repo:
rotemkasahun-maker/Rotem_Portfolio

Historical backup:
- branch backup/portfolio-2026-09-07
- commit 5d84acc1a4efa55262a7e8c76a8f3711a10d0101

Sites v16:
- branch reconcile/sites-v16-snapshot
- commit 1b6fce2a3407fbbc13fc05d2e575816e31a43b4a
- export sites-v16-export/

Sites v17:
- branch reconcile/sites-v17-with-106-snapshot
- commit 4046ce45b7de5b5dbfe598baed174881100063f5
- export sites-v17-export/

Current local experimental state may include modified V1 files plus untracked V2/V3/V4/V5/V7 folders and donor documentation. Back these up before migration.

## Building This Portfolio
Route: `/work/building-this-portfolio`
Locked.
Sites v16/v17 use:
`public/building-this-portfolio-locked.png`
Do not redesign.

## Tiny Tool
Public title: Who was I talking to again?
Mini personal CRM for Facebook groups / Messenger / WhatsApp.
Structure: People / Sources / Conversations / Reminders / Settings / + Add person
Known copy: People I should probably remember
Flow: Connect sources → pull conversations → match to people → remember context → next action
Example: Dana Levi · Waiting for location · Facebook → Messenger → WhatsApp

## Family Finance
Public title: Where is all our money going?
Deep/evidence-heavy case.
Real assets:
- ff-transactions-mobile.png
- ff-attention-mobile.png
- ff-missing-receipt-mobile.png
- ff-madrid-mobile.png
Do not generate substitute product UI.
Do not redesign until 106 process is validated.

## Motion safety
Static first, motion second.
Use opacity/transform/clip.
Never create layout gaps with motion.
Respect prefers-reduced-motion.
Do not add motion before static approval.

## QA rules
Source/structure checked ≠ visual QA passed.
For visual changes: desktop, mobile, hard reload, direct navigation, overflow, runtime/hydration, image loading, visual comparison, unrelated-route regression.
If a direction is still fundamentally wrong after one meaningful pass, reject it instead of stacking fixes.

## Cursor migration — first actions
1. Clone/open existing Git repository.
2. Fetch all branches/tags.
3. Checkout the migration snapshot branch created during final Codex backup.
4. Confirm clean working tree.
5. Install dependencies from existing lockfile.
6. Run the existing app locally.
7. Verify homepage, Family Finance, Tiny Tool, Building This Portfolio, real 106, and V7.
8. Make zero design changes initially.
9. Establish stable local preview.
10. Capture V7 desktop/mobile.
11. Only then decide: ROTKA skin / one constrained art-direction pass / reject donor.

## Cursor working rules
Cursor is implementation environment, not art director.
Inspect first, name files to touch, make smallest diff, preserve unrelated code, show diff, run QA, commit only after approval.
Use separate branches for experiments, shared-component changes, route migrations, and release work.
Never put rejected experiments directly on main.

## Migration acceptance gate
Complete only when:
- all current local work is committed to a dedicated snapshot branch
- snapshot branch is pushed
- this handoff is stored in repo
- Cursor opens exact snapshot
- working tree is clean
- important routes run locally
- V7 can be visually reviewed stably
- nothing remains only inside old Codex environment

## Immediate first Cursor task
Run the current Sites v17 export from the migration snapshot, open `/work/i-already-told-you-this-v7` in a stable local browser, capture desktop and mobile renders, and perform visual QA only. Make zero source changes unless required to make the existing build run locally.


