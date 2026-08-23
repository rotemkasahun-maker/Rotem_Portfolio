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

## Permanent creative decision framework

Evaluate every meaningful visual milestone against all four principles below. These are internal working rules, not public portfolio copy, and they do not authorize redesigning approved work.

1. **Use What Exists.** Prefer visual language that emerges from real material before inventing decorative language.
2. **Show Me, Don't Explain It to Me.** Let interaction, evidence, composition, and sequence communicate an idea when they can do the job better than explanatory copy.
3. **Bidirectional Visual References.** Inspect the actual positive references and the actual negative references. Move toward selected work while actively checking that the result does not drift toward preserved generic UX layouts, decorative handwriting or arrows, tilted screens, added-on editorial personality, generic beige/lavender styling, or AI/invented product UI.
4. **The Tommy Girl Rule.** Aim for controlled presence: clean, transparent, and light. Leave a trace without filling the room. The closer someone gets, the more they should notice.

### The Tommy Girl Rule in practice

- This is a rule about intensity, presence, and discovery. It is not a literal reference to perfume packaging, Tommy Hilfiger branding, fragrance advertising, or a perfume aesthetic.
- The first layer may feel effortless: generous whitespace, restrained typography, simple composition, calm surfaces, and little visual noise.
- Reward proximity and attention with small, earned details: artifact-derived typography, microcopy, callbacks, meaningful motion, unexpected interaction, small illustration, or genuine evidence.
- Important moments should remain in memory without competing all at once. Details should reward attention, not demand it.
- Before adding motion, illustration, humor, color, typography treatment, interaction, visual metaphor, or decoration, ask: **Does this leave a trace, or does it fill the room?** Reduce or remove intensity that does not serve an important narrative or product purpose.
- Do not misread controlled presence as generic minimalism. It does not mean beige, tiny, neutral-only, sterile, humorless, motionless, or personality-free. Playfulness and intensity are welcome when they earn their place.
- Preserve the internal name **“The Tommy Girl Rule.”** Do not expose or explain it publicly unless the user explicitly requests that later.

Before presenting a visual milestone, self-check:

- Did I use what already exists before inventing something new?
- Am I showing something that I could have unnecessarily explained?
- Did I compare against both positive and negative references?
- Is the experience leaving a trace, or filling the room?
- Are there details that reward closer attention?
- Is anything trying too hard to demonstrate creativity?

If the implementation feels immediately “designed” before the work itself becomes interesting, compare it again against the selected Early Exploration references.
