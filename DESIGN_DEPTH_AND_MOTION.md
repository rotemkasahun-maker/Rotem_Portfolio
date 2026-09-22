# ROTKA Portfolio Design System — Depth & Motion

## Purpose
Depth and motion should make the portfolio feel tactile, spatial, intentional, and alive without turning it into a generic AI website, SaaS interface, or animation showcase.

Static composition always comes first. Motion is an enhancement layer, never a rescue mechanism for weak layout.

## Depth Principles
- Use three layers where helpful: foreground artifact, subtle support surface, page canvas.
- Support surfaces should use `#F7F2E9`, be offset 8–28px, and never become generic centered cards.
- Use soft ambient shadows only, e.g. `0 16px 40px rgba(23,23,23,0.08)`.
- Use restrained overlap, asymmetric media placement, purposeful crops, and varied scale.
- Preserve negative space; do not fill every empty area.

## Motion Principles
- Static first.
- Motion should support reveal, continuity, hierarchy, evidence timing, or spatial transition.
- Avoid bouncing, dramatic slides, scroll hijacking, long pinned dead zones, and animation of layout dimensions.
- Scroll scale: `0.985–0.995` toward `1`, max around `1.01–1.03`.
- Minimal parallax only: roughly 4–12px differential movement.
- Hover: tilt max 1–2deg, translate max 4px, scale max 1.02.
- Text reveal: fade + translateY 6–12px, 320–520ms.
- Media reveal: fade + translateY 16–28px, optional scale 0.985→1, 520–720ms.
- With reduced motion, all content must remain visible and understandable.

## Typography & Scanability
- Primary reading text should use strong ink, not weak gray.
- Use `#171717` for primary text, `#4A4742` selectively, and `#726D65` only for metadata/captions/secondary labels.
- Improve scanning with selective emphasis through weight, contrast, scale, line breaks, or spatial isolation.

## Media Behavior
Preferred:
- supported artifact
- subtle surface offset
- restrained radius where appropriate
- ambient shadow
- asymmetric placement
- purposeful crop
- detail + full-context pairing
- short real UI loops when real behavior exists

Never fabricate screenshots, redraw supplied media, invent device mockups, or enlarge media simply to fill space.

## 106 Guidance
106 should remain short, text-led, and restrained.
Use:
- opening background treatment
- strong scan hierarchy
- supported WhatsApp screenshots
- subtle depth
- soft shadow
- one or two micro-interactions
- gentle scroll reveal
- optional tiny scale progression

Avoid:
- giant screenshots
- heavy scrollytelling
- excessive sticky sections
- fake diagrams
- overbuilt interaction logic

## Family Finance Guidance
Longer and richer:
- layered screenshots
- sticky media when justified
- TL;DR / Detailed mode if validated
- looping real UI demos
- stronger scroll choreography
- varied density
- richer depth relationships

## Anti-Patterns
Avoid:
- weak gray body copy
- naked screenshots
- generic card grids
- repeated identical section formulas
- rounded-everything
- decorative gradients/blobs
- glossy AI-style UI
- giant shadows
- motion used to hide weak composition
- fake depth
- decorative diagrams
- custom cursors that remove basic usability
- effects without narrative purpose

## Approval Gate
A depth or motion pattern may enter the Approved Pattern Library only if:
1. It looks good without motion.
2. It is consistent with ROTKA Homepage DNA.
3. It improves hierarchy, reading, or evidence comprehension.
4. It does not feel template-ish.
5. It does not feel like AI filler.
6. It can be reused meaningfully.
7. It passes visual QA.
8. It remains valid with reduced motion.
