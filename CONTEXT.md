# Ledger project context

Ledger is a focused coded prototype for Option 2 of the Scope Design Engineer Exercise: Candidate Submission Showcase.

## Product thesis

Help a time-poor reviewer understand one code challenge submission, inspect its supporting evidence, and reach a fair decision without jumping across external tabs.

## Deliverables

- `index.html`: prototype entrypoint; open directly or host as a static file, keeping `media/` beside it
- `src/index.html`: readable React JSX source
- `SUBMISSION.md`: send checklist, brief coverage, innovation summary, email draft
- `docs/WALKTHROUGH.md`: 4 to 5 minute recording script
- `docs/DECISIONS.md`: decision log
- `docs/HANDOFF.md`: component and implementation handoff
- `case-study.html`: portfolio write-up
- `brand-guide.html`: visual identity reference
- `Ledger design decisions.pptx`: supporting decision deck
- `ledger-tokens.json`: design tokens
- `contrast.js`: light and dark theme contrast audit

## Architecture

Single-file React prototype with three views:

- `Landing`: submission showcase
- `Review`: candidate evidence and evaluation workflow
- `SystemView`: tokens, component anatomy, state matrix, and accessibility contract

Reusable primitives include `Card`, `RailCard`, `Empty`, `Tag`, `Pill`, and a config-driven `Rubric`.

Review state is keyed by candidate and persisted in local storage. The interface supports desktop and mobile review, keyboard shortcuts, reduced motion, reduced transparency, forced colors, dark mode, and reversible submission.

## Key product choices

- Factual overview before reviewer judgment
- Inline preview, README, screenshots, and walkthrough
- Inspectable repository evidence separated from candidate claims
- Submission completeness separated from work quality
- Behaviorally anchored scorecard
- Written justification required for low scores
- Failed deployment handled differently from absent work
- Evidence-first responsive order with mobile review dock

## Intentionally out of scope

Full recruiting pipeline, job setup, auth, candidate messaging, and finalist comparison. The exercise prioritizes one polished, reviewable submission slice.

## Verification

Run:

```bash
node contrast.js
```

Expected result: `failures: 0`.
