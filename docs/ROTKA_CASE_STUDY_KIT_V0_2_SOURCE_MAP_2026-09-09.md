# ROTKA Case Study Kit v0.2 — Architecture + Source Map

Date: 2026-09-09
Project: Rotem Kasahun Portfolio / studio golda by ROTKA

## Purpose

This document is the current source of truth for the portfolio's case-study system.

The Homepage remains the visual DNA source of truth and is not being redesigned.

The goal is to stop designing each case study from scratch and instead build a reusable case-study system from widely used, proven professional patterns. The system should provide layout, media treatment, graphic devices, information patterns, and motion primitives that can be composed differently according to the content.

The system must support at least two different recipes:
- Short, text-led case studies such as 106 / “I Already Told You This”
- Long, evidence-heavy case studies such as Family Finance

The same visual language should serve both, without forcing the same layout.

## 1. Core Principle

Do not invent a new visual mechanism when a mature, widely used, proven pattern already exists.

Use:
- native semantic HTML and CSS for simple, stable patterns;
- proven open-source libraries where interaction complexity justifies them;
- donor implementations only for mechanisms that are difficult to reproduce reliably;
- the existing Homepage tokens and visual DNA for styling.

AI coding agents are implementers, not art directors.

Every component must have a clear content purpose. A component should not be used only because it looks impressive.

## 2. Media Presence Levels

### Compact
Supporting evidence inside the story.

Best for:
- a screenshot that only needs to prove or illustrate a point;
- WhatsApp evidence in 106;
- small supporting artifacts.

### Featured
An important artifact the reader should stop and inspect.

Best for:
- a meaningful product screen;
- a key workflow state;
- an important before/after state.

### Immersive
Full-width, sticky, gallery, pinned, or otherwise dominant media.

Use only when the content genuinely justifies it.

Important 106 rule:
The 106 case study is text-led. Its screenshots are supporting evidence, not hero assets. Do not make them huge simply because there are only a few assets.

## 3. Component Inventory

### Page Structure
- Case Study Shell — MUST
- Reading Column — MUST
- Section Beat / Marker — MUST
- Sticky Section Index / Summary — MUST for long cases
- Closing / Next Project — MUST eventually

### Media / Evidence
- Figure + Caption — MUST
- Compact Evidence Figure — MUST
- Featured Figure — MUST
- Annotated Figure — MUST
- Text + Media Split — MUST
- Two-Up Media — MUST
- Asymmetric Media Group — USEFUL
- Gallery / Lightbox — MUST for long cases
- Single Image Zoom — USEFUL
- Before / After — USEFUL

Implementation notes:
- Figure family should use semantic <figure> / media / <figcaption>.
- Annotated Figure should use native SVG/CSS for static callouts.
- Text + Media Split and Two-Up Media should use CSS Grid.
- Asymmetric Media should use grid/relative offsets and avoid fake spacer layouts.
- Gallery/Lightbox candidate: Yet Another React Lightbox.
- Zoom candidate: react-medium-image-zoom.
- Before/After should only be used for genuine visual state comparison.

### Story / Information
- Pull Quote / Key Statement — MUST
- Insight / Decision Callout — MUST
- Current → Better — OPTIONAL
- Process / System Flow — MUST
- Outcome / Stat Treatment — OPTIONAL

106 note:
Current → Better is currently a candidate for removal if it repeats the intervention without adding new understanding.

## 4. Graphic Devices Kit

Reusable primitives:
- hairline rules
- micro labels
- section numbering
- figure indexes
- captions
- annotation leaders
- active section marker
- restrained background surfaces
- subtle border / depth / shadow
- crop frame
- inset media
- offset media
- small directional arrows
- metadata rail

Do not use every device at once.

## 5. Motion Kit v0.2

Core motion primitives:
- Reveal
- Image Reveal
- Subtle Artifact Movement
- Page / Project Transition
- Sticky Media + Scrolling Narrative
- Optional Pinned Sequence

Motion safety:
- Static layout must work without motion.
- Do not animate height/min-height/margins/padding.
- No artificial blank scroll zones.
- No scroll hijacking.
- No uncontrolled horizontal overflow.
- prefers-reduced-motion must preserve all content.
- Motion only after static composition passes QA.

## 6. Source / Implementation Map

Custom/native using existing ROTKA/Homepage design tokens:
- Case Study Shell
- Reading Column
- Section markers
- Figure + Caption
- Compact / Featured Figure variants
- Text + Media Split
- Two-Up Media
- Asymmetric Media Group
- Pull Quote / Key Statement
- Insight / Decision Callout
- Current → Better
- Process / System Flow
- Closing / Next Project

Annotated Figure:
- native SVG/CSS overlay.

Gallery / Lightbox:
- candidate: Yet Another React Lightbox.
- only when a real gallery is needed.

Zoom:
- candidate: react-medium-image-zoom.
- optional.

Sticky Section Index:
- native CSS position: sticky plus IntersectionObserver if needed.
- no scrollspy package unless native proves inadequate.

Sticky / Pinned Scroll:
- GSAP ScrollTrigger patterns only where content justifies it.

Page / Project Transition:
- candidate donor: MotionFolio.
- MotionFolio is a motion donor, not a case-study layout donor.

## 7. Short Case Study Recipe — 106

Public project: I Already Told You This

Nature:
Short, text-led case study with limited supporting evidence.

Provisional narrative:
1. Opening
2. Observed friction
3. Compact supporting evidence
4. Why it matters
5. Intervention / system explanation
6. Optional Current → Better
7. What I’d check next
8. Conclusion + status

Rules:
- Text leads.
- Screenshots support.
- Do not turn screenshots into giant hero artifacts.
- Current → Better is optional and may be removed.
- A component stays only if it adds informational or narrative value.
- No sticky section sidebar required.
- No gallery required.
- Motion restrained.

## 8. Long Case Study Recipe — Family Finance

Nature:
Long, evidence-heavy case study.

Candidate system:
- Opening
- Sticky section index / summary
- Reading-column sections
- Text + media beats
- Compact and featured figures
- Galleries
- Zoom where useful
- Decisions / insight callouts
- Process/system diagrams
- Sticky media narrative where justified
- Outcomes / learnings where truthful
- Closing / next project

## 9. Deliberately Not Building Yet

Do not prioritize:
- device mockups
- 3D
- WebGL
- horizontal-scroll showcases
- giant pinned sequences
- custom cursors
- decorative grain/noise
- complex charting systems
- animated diagrams
- novelty interactions

First build the widely used professional 80% well.

## 10. Case Study Lab — Next Gate

Before adapting 106 or Family Finance, build a temporary internal route:

/case-study-lab

Core 8:
1. Figure + Caption
2. Compact Evidence Figure
3. Featured Figure
4. Annotated Figure
5. Text + Media Split
6. Two-Up / Asymmetric Media
7. Pull Quote / Insight Callout
8. Sticky Section Index demo

Plus:
- one small motion demonstration using the approved motion vocabulary / MotionFolio-informed behavior.

Do not build all optional components in the first pass.

Acceptance gate:
The Lab must feel like one coherent professional design system before any case study is rebuilt from it.

If the Lab looks like:
- a component documentation page;
- generic cards;
- a UI kit;
- disconnected demos;
- or a collection of unrelated tricks;

it fails.

Only after the Lab passes visual QA should 106 be recomposed using the kit.

## 11. Change Control

The Homepage remains locked and is the visual North Star.

Do not modify:
- Homepage layout
- Homepage copy
- Homepage motion
- Homepage visual DNA
- Building This Portfolio
- Family Finance
- Tiny Tool
- existing 106 experiments

while developing the Case Study Lab.

The Lab must be isolated until approved.

## 12. Current Donor Status

### MotionFolio
KEEP AS MOTION DONOR ONLY.

Useful:
- GSAP motion language
- presence / entrance-exit behavior
- transition mechanics

Rejected as:
- long-form case-study skeleton
- case-study layout donor

### Angie
REJECTED.

Reason:
Primarily homepage/portfolio presentation; does not provide the needed case-study content system.

## 13. Working Method Going Forward

1. Plan before implementation.
2. Prefer widely used professional patterns.
3. Reuse proven mechanisms before inventing.
4. Build the Case Study Kit independently.
5. Visual-QA the kit.
6. Compose 106 from the approved kit.
7. Learn from 106.
8. Extend the same system for Family Finance.
9. Add motion only after static composition is approved.
10. Save major decisions to Git before continuing.
