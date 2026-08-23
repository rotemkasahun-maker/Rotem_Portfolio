# Rotem Portfolio evidence archive

This directory preserves meaningful visual checkpoints without mixing product
evidence with evidence of the portfolio website itself.

```text
portfolio-evidence/
├── family-finance/
│   └── screenshots/          # Family Finance product screenshots only
└── portfolio-website/
    └── screenshots/          # Portfolio and rendered case-study screenshots
```

A portfolio screenshot remains `portfolio-website` evidence even when the
visible page is the Family Finance case study. Preserve meaningful iterations
as separate, descriptively named files; do not overwrite earlier checkpoints,
capture routine tweaks, recreate missing evidence, or replace real screenshots
with mockups.

The `portfolio-evidence/` tree is the historical archive. Files copied into
`assets/<case-study>/evidence/` are unchanged rendering copies and must retain
their source provenance.
