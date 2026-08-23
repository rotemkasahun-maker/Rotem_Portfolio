# Rotem Portfolio working rules

## Case-study evidence

- The original project repository remains the source of truth for every case-study artifact.
- When real evidence is relevant to a portfolio case study, keep an unchanged rendering copy under `assets/<case-study>/evidence/` in this repository.
- Relevant evidence includes screenshots, photographs, receipts, diagrams, sketches, reports, and other real artifacts.
- Copy evidence byte-for-byte whenever the source is a file. Preserve its original content, proportions, and meaning.
- Prefer an existing real artifact over a mockup, placeholder, reconstruction, or newly generated representation.
- Never replace real evidence with fake UI, recreate an artifact to make it look more polished, or edit the original evidence.
- If a required real artifact does not exist, mark the evidence as missing and stop before creating a substitute unless the user explicitly authorizes one.
- Record provenance for copied evidence: source repository, source branch or commit, original path, destination path, and checksum when practical.
- Treat financial and personal evidence as sensitive. Copy only synthetic, redacted, or explicitly approved material suitable for the portfolio.
- Adding assets does not authorize publishing them in the case-study UI. Rendering, cropping, annotation, storytelling, merge, and publication remain separate reviewed steps.

### Screenshot archive convention

- Keep source-project and portfolio-site screenshots strictly separated:
  - `portfolio-evidence/family-finance/screenshots/` contains screenshots of the Family Finance product itself.
  - `portfolio-evidence/portfolio-website/screenshots/` contains screenshots of the Rotem Portfolio website and its rendered case studies.
- A screenshot of the portfolio displaying the Family Finance case study is still `portfolio-website` evidence, not a Family Finance product screenshot.
- Never mix the two categories.
- Preserve meaningful design and development checkpoints when they document a substantial change in visual direction, structure, interaction, or a decision that may matter to the case study.
- Do not capture routine tweaks or every implementation change.
- Never overwrite an older screenshot when it represents a meaningful iteration. Save the new checkpoint as a separate file.
- Prefer descriptive filenames that identify both the screen and its state or iteration, such as `YYYY-MM-DD_<screen>_<state-or-iteration>.png`.
- Screenshots in `portfolio-evidence/` are the historical evidence archive. Copies under `assets/<case-study>/evidence/` are rendering assets for the portfolio and must retain provenance back to that archive or the original project repository.
