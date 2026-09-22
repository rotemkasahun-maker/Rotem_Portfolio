# Icons

Use this reference when icon sets feel inconsistent, misaligned, or optically uneven.

## Core heuristics

- Icons need a consistent bounding box and visual center, not just matching export dimensions.
- Different shapes carry different optical weight, so they need different internal padding.
- Stroke weight, corner treatment, and detail density should be consistent across a set.

## Practical application

- Align icons by optical center rather than trusting the SVG artboard.
- Normalize stroke weight and terminal style across the set.
- Review circular, triangular, and highly detailed icons for extra optical padding needs.
- Keep icon style consistent within a single interface zone.

## Common failure modes

- Mixed stroke widths make icons look borrowed from different systems.
- Some icons feel larger even though their frames match.
- Decorative icon use overwhelms labels and weakens hierarchy.

## When the heuristic bends

- Brand marks and hero illustrations can intentionally break icon-system rules.
- A product can mix icon styles across distinct product areas, but not inside one control cluster.

## Sources

- `https://designparser.de/`
- `https://designparser.de/data/rules.json`
