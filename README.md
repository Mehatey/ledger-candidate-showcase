# Ledger candidate review

Ledger is a desktop recruiter workspace for reviewing design-engineering submissions. It keeps the priority queue, candidate artifacts, human evidence, anchored scoring, decisions, and shortlist calibration in one auditable flow.

Live site: https://mehatey.github.io/ledger-candidate-showcase/

## Recruiter journey

1. **Home** opens with Rina's workload, a short Ledger guide, search, status filters, sorting, and a priority queue. Completed reviews remain visible for auditability.
2. **Candidate review** puts the submitted work beside the review record. Prototype, source, walkthrough, README, and resume stay in one artifact stage. Evidence, score, notes, and decision persist across navigation and reloads.
3. **Shortlist** shows review coverage, unresolved conflicts, recorded decisions, reviewer-specific signals, and a scalable two-candidate comparison before finalists can be confirmed.
4. **Design decisions** explains key UX choices in context. **Style guide** documents the interface system.

Missing artifacts and failed previews use recovery paths. They are context gaps, not automatic negative judgments.

## AI behavior

AI assist is an honest deterministic interface simulation. It uses only fixture metadata and material availability already shown in the prototype. It can summarize, check artifacts, and propose evidence. It cannot browse a repository, call a model, score a candidate, or make a hiring decision. A reviewer must accept findings, set every score, and record the final decision.

## Run locally

```bash
npm install
npm run build
npm run serve
```

Open http://127.0.0.1:4173/index.html.

Useful checks:

```bash
npm run contrast
npm run check
```

`npm run build` creates a standalone `index.html` with React inlined. Keep `media/` beside it. No backend is required.

## Files

- `src/index.html`: readable JSX, styles, product fixtures, and interaction logic
- `index.html`: compiled standalone site
- `build-standalone.mjs`: reproducible build using local npm dependencies
- `contrast.js`: semantic color-pair audit
- `DESIGN.md`: product and interaction system
- `HANDOFF.md`: compact implementation handoff
- `media/`: local candidate prototype stills and loops

## Product constraints

- Desktop and laptop experience, optimized for 1024 px and wider
- Keyboard-operable controls and trapped, dismissible dialogs
- Reduced-motion, forced-colors, and high-contrast support
- Draft reviews stored locally in the browser
- Static hosting on GitHub Pages

Candidate records are product fixtures. The Vantage submission evidence and supporting prototype media are Siddharth Mehta's work.
