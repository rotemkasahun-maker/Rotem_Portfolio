# Color

Use this reference when the interface has weak emphasis, muddy accents, or too many equally loud colors.

## Core heuristics

- Build hierarchy with uneven distribution. A practical default is one dominant color family, one supporting family, and a smaller accent allocation.
- Keep most surfaces and layout scaffolding low in saturation. Reserve stronger saturation for calls to action, status states, and emphasis.
- Make the structure work in grayscale first. Color should clarify hierarchy, not rescue a weak layout.
- Build color systems as scales rather than disconnected hex values. A predictable range is easier to reuse across text, surfaces, and states.

## Practical application

- Let neutral or near-neutral surfaces carry most of the screen.
- Limit high-saturation usage to a small set of important interactions.
- Reuse a consistent scale for text, borders, surfaces, hover states, and selected states.
- Check contrast with luminance-based tools rather than trusting HSL lightness.

## Common failure modes

- Accent color appears everywhere, so nothing feels important.
- Multiple vivid colors compete at the same visual weight.
- Text contrast looks acceptable numerically in a design tool but fails perceptually in the browser.
- The palette has many unrelated one-off values, which makes the product feel inconsistent.

## When the heuristic bends

- Short-session marketing pages can tolerate more saturation and stronger contrast swings.
- Editorial or illustration-heavy work may intentionally break strict distribution rules.
- Monochrome systems may rely on lightness and material contrast instead of hue contrast.

## Sources

- `https://designparser.de/`
- `https://designparser.de/data/rules.json`
