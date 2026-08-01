# Product context

## Product

Ledger is a recruiter review workspace for design-engineering take-home submissions.

## Audience

Primary user: Rina Kim, hiring lead. She reviews a shortlist on a laptop between interviews and needs to preserve the evidence behind every recommendation.

## Job to be done

Move from a prioritized submission queue to a defensible shortlist without rebuilding context across tabs or letting missing infrastructure distort judgment.

## Golden path

Rina opens Home, follows the priority recommendation, inspects a candidate's actual work, records evidence, scores four anchored criteria, chooses a decision, completes the review, compares scored finalists with their prototypes, sends two candidates to the next round, and returns to a newly created follow-up task.

## Product promise

Show the work before the score. Keep AI optional and recommendation-only. Keep the human judgment final.

## Scope

- Queue, search, status filters, sorting, and completed-review recall
- Candidate artifacts, evidence, rubric, notes, and decision
- Deterministic AI-assist simulation with explicit limitations
- Fair missing-artifact and failed-preview recovery
- Calibration overview, reviewer conflict, scored prototype comparison, decision record, and next-round handoff state
- In-context design decisions and style guide

Auth, live model calls, repository inspection, candidate messaging, and external applicant-tracking integrations are outside this static prototype.

## Success criteria

- A first-time reviewer can identify the next submission without instruction.
- Review state survives navigation and reload.
- No candidate is penalized because a hosted preview fails when other evidence exists.
- Readiness is explained by visible checklist items, not an opaque AI score.
- Every visible control works, communicates why it is unavailable, or is removed.
- Desktop flow remains usable at 1024, 1280, and 1440 px widths.
