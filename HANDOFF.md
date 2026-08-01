# Ledger Editorial Showcase: Final Handoff

## Direction

This dark editorial/recruiter-workspace direction is the chosen final prototype for the Scope Labs Design Engineer exercise, Option 2: Candidate Submission Showcase.

Core promise: candidate work, source, walkthrough, and reviewer judgment stay in one focused review flow. AI assists with triage and evidence, but the recruiter makes the decision.

## Product surface

- Queue first: search, filters, sorting, readiness counts, and distinct states.
- Review workspace: large candidate artifact, source, walkthrough, and README tabs.
- Human review: evidence, four anchored rubric scores, private notes, and Advance/Hold/Pass decision.
- AI assist: optional, recommendation-only artifact check. Accepted findings become human-review evidence.
- Calibration: final decision room compares reviewed candidates, surfaces disagreement before it is buried, blocks confirmation until pending reviews and conflicts are resolved, then produces a copyable decision record.
- Fair recovery: missing walkthrough, failed preview with source still available, and incomplete material states are not treated as bad work.

## Final selected visuals

- Dark mode is the intended final appearance.
- Keep the editorial visual language, but maintain practical recruiter hierarchy and readable density.
- Current screenshots show the intended queue and Devin Kaur review states.

## Source and build

- Source: `src/index.html`
- Compiled deliverable: `index.html`
- Build command: `node build-standalone.mjs`
- Contrast check: `node contrast.js`
- Local preview: `http://127.0.0.1:4173/index.html`
- Latest source modification: 2026-07-31 21:05 EDT
- Latest compiled modification: 2026-07-31 21:14 EDT

## QA already completed

- Desktop 1440×900 and mobile 390px inspected in a real browser.
- Queue filters/search/sort tested.
- Candidate review, artifact switching, AI assist, evidence acceptance, scoring, decision, and submission tested.
- Missing walkthrough and failed-preview recovery tested.
- Console errors: none.
- Contrast check: all checks pass.

## Important honesty

- AI behavior is a working deterministic front-end prototype, not a live model/headless browser backend.
- Prototype is local-only. It is static and suitable for GitHub Pages once a repository/deployment is set up.
- Avoid fake external links or claims that a submitted candidate project is live if it is a local simulation.

## Immediate next priority

1. Published build recheck only.
2. Prepare concise walkthrough focused on choice, assumptions, UX decisions, component structure, states, polish, and responsiveness.
