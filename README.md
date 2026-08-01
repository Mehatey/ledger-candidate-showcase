# Ledger, candidate submission review

## Current reviewer path

`Submission queue` gives a hiring lead a priority-sorted shortlist with search, filters, material coverage, and recovery states. `Candidate review` keeps submitted work, an optional deterministic artifact check, human evidence, four anchored criteria, decision, and submission together. `Calibrate shortlist` compares completed reviews, calls out reviewer disagreement, blocks premature confirmation, and produces a final decision record.

The AI assist is intentionally local and deterministic. It evaluates only fixture metadata and submission availability shown in the prototype; it does not claim a live model or backend.

An intentionally secondary, editorial exploration for Option 2 of the Scope Design Engineer exercise. Paired with the recommended evidence-first workbench, it tests a more candidate-story-led review surface: dark by default, concise at the profile level, and still fair about evidence and missing states.

Open `index.html` in any browser. React is inlined and prototype media is local, so it needs no build step or server. Keep the `media/` folder beside it. The three webfonts load from Google Fonts, so offline they fall back to Georgia and a system sans while everything else behaves identically.

## The thesis

The job is not to display a submission. It is to help a reviewer holding twelve submissions and twenty minutes decide what to do next, fairly. Every decision on screen ladders up to that.

## Three views

**Showcase.** A landing built on a full screen WebGL shader written in raw GLSL, a domain warped flow field with no library. Submissions sit on top as frosted glass tiles floating in 3D with cursor parallax.

**Review.** The single submission surface. Verdict strip, full-bleed recorded prototype, README, progressively disclosed supporting evidence, and a sticky evaluation rail.

**System.** The handoff artefact. Tokens, type ramp, spacing, component anatomy, state matrix, accessibility contract.

## What is distinctive

A three question verdict strip answers what they built, whether it runs, and which review materials are available before any scrolling. It stays factual so the interface does not bias the reviewer before scoring.

Stack chips separate evidence from claims. Items detected in the repository are marked as evidence and can be selected to inspect their source. Unverified ones are marked as claimed.

Empty states address two audiences. A missing walkthrough shows the reviewer what the gap costs, and carries a candidate facing prompt to submit stronger material next time.

The page stays one continuous review surface, but secondary screenshots, walkthrough, and stack sections collapse by default. Counts and status remain visible in their headers, keeping the first pass short without hiding evidence behind another route.

The scorecard is bias aware. Four criteria instead of one star rating, and every number on the scale is defined in words so two reviewers are comparing the same definition. A low score blocks submission until a reason is written, and a completeness meter separates a thin submission from weak work.

It is built for volume. The whole review works without a mouse: J and K page submissions, arrows move between criteria, zero to four scores the focused one and advances, A, H and P decide. Submitting carries an undo. Draft reviews persist across views and reloads.

Motion carries meaning rather than decoration. Paging direction distinguishes forward from back, a keyboard decision flashes the control it drove, the completeness meter fills from zero on arrival, and screenshots open in a viewer with arrow key paging.

A built in tour narrates the design decisions, which doubles as the spine of the walkthrough.

## Design system

A warm editorial direction. Paper canvas with soft mesh gradients and film grain, layered shadows for depth, a single muted oxford cobalt accent, Manrope for the product interface, Instrument Serif for the showcase statement, and JetBrains Mono for metadata. Two column layout capped at 1240 with a fixed 340 pixel rail, base 8 spacing, radius scaled to component footprint.

Tokens are named for function rather than appearance, so `--surface-raised` and `--action-primary` rather than a colour name. The dark theme proves it: token values only, no component rule duplicated. Both themes pass the same contrast script at forty pairings.

## Liquid glass

Glass is confined to chrome surfaces, meaning the toolbar, palettes, tour card and toast. It never sits behind body copy. This follows where the material actually landed in 2026, more opaque with a darkened inner edge and brighter speculars, after the ultra clear original drew legibility criticism.

Two tiers. Everywhere gets frost, tint, a bevelled rim built from per side inset shadows, and a specular sheen. Where the engine supports displacing a live backdrop, a runtime generated SVG displacement map bends the backdrop near the edges and leaves the middle flat, the way a lens behaves, with a slight chromatic split at the rim. Support is detected by probing the engine rather than with a support query, because `url()` is valid syntax everywhere and the query returns true in browsers that then paint nothing.

## Accessibility

Text never resolves against glass. Reduced motion collapses every reveal and keeps content visible rather than stranded at zero opacity. Because `prefers-reduced-transparency` ships in only one engine, the toolbar carries its own transparency control, paired with `prefers-contrast`. Forced colours drops glass and shadow and resolves borders to system colours. Every interactive element is keyboard reachable with one consistent focus ring.

## Platform

Scroll driven reveals behind a support query, view transitions between views, `text-wrap` balance on headings and pretty on body, `field-sizing` on inputs, and optical text trimming where supported. Each one degrades cleanly.

## States implemented

Needs review, already reviewed with the prior verdict surfaced, empty walkthrough, empty screenshots, no live demo, a build error distinct from empty, retrying, playing and paused media, low score requiring a reason, submitted, and undone. Both light and dark themes.

## Intentionally out of scope

Submission list view, candidate messaging, side by side compare, auth and settings. Called out so the single submission verdict loop could be polished rather than broad.

## Files

`index.html` is the prototype entrypoint, with React inlined and no build or server needed.
`src/index.html` is the readable source with JSX.
`case-study.html` is the portfolio write up.
`brand-guide.html` is the visual identity and style guide, with measured contrast on every swatch.
`docs/WALKTHROUGH.md` is the narration script.
`SUBMISSION.md` is the final send checklist, concise rationale, email draft, and brief coverage map.
`docs/DECISIONS.md` is the complete decision log, with the alternative rejected for each choice.
`docs/HANDOFF.md` is the developer spec: dimensions, props, states, data contract, acceptance criteria.
`ledger-tokens.json` imports into Figma via Tokens Studio. Seventy six tokens across three sets, with light and dark arriving as two variable modes.
`docs/FIGMA.md` is the twelve minute route from this repo to a populated Figma file.
`contrast.js` is the accessibility audit. Run `node contrast.js`, expect zero failures.
`media/prototypes/` contains web-sized stills and MP4 loops from Siddharth Mehta's public AI prototype work.

Built with React. No framework or backend. Candidate records are product fixtures; the primary Vantage evidence and supporting AI prototype media are Siddharth Mehta's own work.
