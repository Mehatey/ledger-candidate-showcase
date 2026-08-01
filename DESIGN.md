# Ledger editorial direction

## Product sentence

Ledger lets a recruiter inspect a candidate's submitted work, preserve the evidence behind a judgment, and make a fair decision without rebuilding context across tabs.

## Scene

A hiring lead reviews a short list on a laptop between interviews. The surface must be calm, legible, and operational. Candidate work gets visual priority. Controls stay close enough to support a decision without competing with the artifact.

## Experience principles

1. Show the work before the score.
2. Treat missing material and failed infrastructure as different states.
3. Keep evidence attached to the review, not to a browser tab.
4. Let AI summarize and inspect. Keep scoring and decisions human.
5. Reveal detail only when it helps the current task.

## Layout

- The entry screen is a recruiter queue, not a marketing page. It opens with workload state, search, filters, sort, and a prioritized list of candidate profiles.
- Queue order places complete, reviewable submissions before submissions that need context. Completed reviews stay visible for reference.
- Desktop uses an artifact stage plus a 400 px review rail.
- The candidate summary is one compact grid with identity, status, runtime, and evidence coverage.
- Artifact tabs reuse one panel instead of stacking four separate sections.
- At 1200 px the review rail moves below the work.
- At 600 px the summary collapses to identity, tabs scroll horizontally, and score criteria become a single column.
- At 900 px the queue becomes a compact profile list. Material detail and submitted date yield to candidate identity and review state.
- Spacing follows an 8 px base with 4 px half steps.

## Type

- Sans serif carries product hierarchy and actions.
- Monospace is reserved for compact metadata, status labels, and technical evidence.
- Body copy is at least 12.5 px on desktop with a 1.45 or greater line height.
- Review prompts use sentence case. Helper copy is removed when the control already explains itself.

## Color

- Canvas and panels create hierarchy without decorative shadows.
- Ink, muted ink, hairline, and strong hairline are semantic neutral roles.
- Cobalt marks selection and focus.
- Green means verified or complete. Amber means missing context or attention. Neither color is the only state signal.
- AI uses the same product palette. The AI label explains provenance instead of introducing an ornamental gradient.

## Reusable components

- `LedgerBrand`: shared horizontal mark and wordmark.
- `SubmissionQueue`: searchable, filterable, sortable recruiter workload with dynamic completion state.
- `QueueRow`: candidate identity, submission title, review state, material readiness, and direct review entry.
- `ReviewSummary`: candidate identity and review readiness facts.
- `ArtifactTabs` and `ArtifactPanel`: one stage for prototype, source, walkthrough, and README.
- `EvidenceComposer`: writes artifact-specific observations into the review record.
- `Rubric`: reusable criterion, score segment, anchor, and low-score reason.
- `Decision`: advance, hold, pass, notes, validation, and submit state.
- `AIAssist`: transparent summary, artifact check, risk, and accepted finding flow.
- `DesignTour`: recording-friendly spotlight, caption, and keyboard navigation.

## AI behavior

- AI is explicitly labeled and includes a short explanation of how it works.
- It checks only the materials visible in the submission.
- It may summarize coverage, surface a risk, and propose a finding.
- It does not assign a candidate score or choose advance, hold, or pass.
- A proposed finding enters the evidence record only after reviewer acceptance.
- Reviewer scores remain the company-specific signal that can improve later ranking and calibration.

## Motion and accessibility

- Artifact and review-mode changes use 180 ms transitions.
- The design tour uses focused movement and a dimmed background.
- Loading feedback is visible through text and a pulse, with `aria-live` for state changes.
- All controls are native buttons or inputs with focus-visible treatment.
- Escape closes overlays. Arrow keys navigate the tour. Keyboard shortcuts support scoring and candidate navigation.
- Reduced-motion mode removes transitions and pulse animation.
- Normal text targets WCAG AA contrast.

## State model

- Loading: skeleton stage and explicit AI inspection status.
- Active: selected artifact, selected score, selected decision, open tour step.
- Complete: submitted review and accepted evidence.
- Needs review: unscored candidate with available work.
- Needs context: missing walkthrough or failed preview with a recovery path.
- Error: failed preview offers source evidence rather than equating infrastructure failure with weak work.
- Empty: missing walkthrough explains what remains reviewable.
