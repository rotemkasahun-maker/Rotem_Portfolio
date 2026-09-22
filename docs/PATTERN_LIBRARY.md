# ROTKA PORTFOLIO — PATTERN_LIBRARY.md

Status: MASTER PATTERN LIBRARY
Rule: Only patterns that have passed visual QA and explicit approval should be marked APPROVED.

Candidate patterns may be explored, but they are not treated as source-of-truth components.

---

# PATTERN STATUS

Use one of:

CANDIDATE
APPROVED
RETIRED

Each approved pattern should eventually record:
- source page
- visual reference
- screenshot
- implementation file(s)
- desktop behavior
- mobile behavior
- motion behavior
- content constraints

---

# 1. SUPPORTED ARTIFACT

Status: CANDIDATE

Purpose:
Make real evidence feel spatial and intentional without turning it into a generic card.

Structure:
- real media foreground
- subtle paper-alt surface behind
- asymmetric offset
- soft ambient shadow
- optional restrained radius/border

Best for:
- WhatsApp screenshots
- UI evidence
- documents
- real system screenshots

Avoid:
- centered backing card
- heavy shadow
- fake device frame
- oversized container

---

# 2. FEATURED ARTIFACT

Status: CANDIDATE

Purpose:
Give one artifact stronger narrative importance.

Structure:
- larger scale
- more negative space
- asymmetric placement
- optional support surface
- optional restrained reveal

Rule:
Featured does not automatically mean full-screen.

---

# 3. EVIDENCE PAIR

Status: CANDIDATE

Purpose:
Show two related artifacts with unequal hierarchy.

Structure:
- primary artifact larger
- support artifact smaller or offset
- optional light overlap
- shared visual relationship

Avoid:
- generic 50/50 gallery
- forced comparison
- identical image sizing

---

# 4. STATEMENT PAUSE

Status: CANDIDATE

Purpose:
Create a strong narrative beat around one important line.

Structure:
- large dark type
- substantial negative space
- minimal nearby content
- strong scan value

Best for:
- turning point
- key insight
- conclusion

Avoid:
- decorative quote styling
- every sentence becoming a hero

---

# 5. OPENING BACKGROUND SHIFT

Status: CANDIDATE

Purpose:
Create a distinctive project entrance.

Structure:
- opening uses different surface/background treatment
- page later transitions to standard ROTKA canvas
- typography remains ROTKA
- transition is simple and intentional

Avoid:
- arbitrary colors
- gradients
- brand treatment unrelated to project

---

# 6. SCAN EMPHASIS

Status: CANDIDATE

Purpose:
Improve recruiter scanning.

Mechanisms:
- selective weight
- stronger ink
- scale
- line break
- isolation

Avoid:
- weakening the rest of the paragraph with low-contrast gray

---

# 7. SUBTLE SCROLL GROWTH

Status: CANDIDATE

Purpose:
Make media feel alive during scroll.

Behavior:
- 0.985–0.995 → 1
- optional max 1.01–1.03

Rule:
The user should feel it before consciously noticing it.

---

# 8. TACTILE HOVER

Status: CANDIDATE

Purpose:
Add small personality and depth.

Behavior:
- tilt max 1–2deg
- translate max 4px
- subtle shadow response
- scale max 1.02

Use selectively.

---

# 9. CONTEXTUAL CURSOR LABEL

Status: CANDIDATE

Purpose:
Add small action feedback near the cursor.

Examples:
- Say hi
- View project
- Open
- Let's connect

Rule:
Must communicate a real action.

Avoid:
- fake cute copy
- hiding default cursor without usable replacement

---

# 10. LIVING MEDIA LOOP

Status: CANDIDATE

Purpose:
Show real interaction or state changes more effectively than static screenshots.

Behavior:
- short loop
- quiet
- real product states
- silent
- no required interaction

Best for:
- Family Finance
- real product flows

Never fake behavior.

---

# 11. TL;DR / DETAILED MODE

Status: CANDIDATE

Purpose:
Support both scanning and deep reading.

Best for:
- Family Finance
- long case studies

Not default for:
- 106
- short portfolio pages

---

# 12. ROUNDED MEDIA SURFACE

Status: CANDIDATE

Purpose:
Give screenshots a softer tactile treatment.

Rule:
Rounded media is allowed.
Rounded-everything is not.

Use:
- restrained radius
- optional ambient shadow

Avoid:
- giant card wrappers
- repeated rounded containers

---

# 13. MINIMAL UTILITY HEADER

Status: CANDIDATE

Source inspiration:
Garri-style directness.

Purpose:
Keep navigation/contact simple and obvious.

Characteristics:
- name/identity
- clear contact affordance
- minimal navigation
- no self-branding filler

Avoid:
- motivational taglines
- generic “passionate about…” copy

---

# 14. DIRECT INTRO STATEMENT

Status: CANDIDATE

Purpose:
Open with direct positioning rather than decorative personal branding.

Tone:
- clear
- literal
- confident
- low-fluff

Avoid:
- “passionate about”
- “creating meaningful experiences”
- generic portfolio language

---

# 15. MIXED-MEDIA STORYTELLING

Status: CANDIDATE

Purpose:
Use multiple real artifact types throughout a project.

Examples:
- screenshots
- photographs
- diagrams
- raw evidence
- real UI loops
- documents

Rule:
Media variety must come from real project material, not fabrication.

---

# 16. PAGE TRANSITION MOTIF

Status: CANDIDATE

Purpose:
Make route changes feel intentional.

Possible:
- brief geometric wipe
- color-block transition
- mask reveal

Must:
- be short
- use ROTKA palette
- never delay navigation excessively

---

# 17. STICKY MEDIA + SCROLLING TEXT

Status: CANDIDATE

Purpose:
Support deeper explanation in long case studies.

Best for:
- Family Finance

Avoid:
- short projects
- large dead scroll zones
- sticky behavior without strong narrative reason

---

# 18. ARTIFACT DETAIL + FULL CONTEXT

Status: CANDIDATE

Purpose:
Show one cropped detail together with the complete artifact.

Best for:
- UI behavior
- document evidence
- visual emphasis

Rule:
Use only real source material.

---

# 19. SECTION DENSITY SHIFT

Status: CANDIDATE

Purpose:
Create narrative rhythm through density rather than decoration.

Examples:
- dense evidence block
- sparse statement pause
- wider media beat
- compact explanatory beat

Rule:
Rhythm should change across the page.

Avoid:
- identical section formula repeated throughout

---

# 20. MICRO-INTERACTION LAYER

Status: CANDIDATE

Purpose:
Add character without redesigning the whole page.

May include:
- subtle image growth
- hover tilt
- contextual cursor label
- light page transition
- looped UI artifact
- small background change

Rule:
Use a few intentional interactions, not effects everywhere.

---

# PROMOTION TEMPLATE

When a pattern becomes APPROVED, add:

Status: APPROVED

Approved on:
`<route/page>`

Reference:
`<reference URL or screenshot>`

Implementation:
`<files/components>`

Desktop behavior:
`<description>`

Mobile behavior:
`<description>`

Motion:
`<description>`

Constraints:
`<when to use / not use>`

Why approved:
`<visual QA outcome>`
