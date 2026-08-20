# Rotem Portfolio v1.0

A static GitHub Pages portfolio for Rotem Kasahun.

## Files

- `index.html` — semantic page structure and inline SVG hero animation artwork
- `styles.css` — visual system, responsive layout, four-second hero animation, reduced-motion fallback
- `script.js` — scroll-focus behavior used only in the dense Family Finance narrative

## Design direction

- Personal Product / UX / Product Builder portfolio, not a SaaS landing page
- Hero statement: **I build products around real behavior.**
- Warm cream / terracotta / muted mustard / dusty-mauve / taupe palette
- Family Finance is surfaced immediately after the hero/navigation
- Side Quest is visible and concise
- Scroll-focus is limited to the dense case-study narrative
- Hero animation is a fixed-camera 2D digital/vector micro-story, ≤4 seconds
- `prefers-reduced-motion` receives a static successful state

## Deploy

Upload/replace `index.html`, `styles.css`, `script.js`, and `README.md` in the root of the `Rotem_Portfolio` repository. GitHub Pages will serve the updated files from the configured Pages branch.

## QA performed before handoff

- HTML structure and anchor targets checked
- JavaScript syntax checked
- CSS braces/keyframes checked
- animation timeline constrained to exactly 4 seconds
- target responsive breakpoints included for mobile/tablet/desktop
- reduced-motion fallback included
