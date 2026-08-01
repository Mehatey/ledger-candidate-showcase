# Ledger, complete decision log

Every decision in the product, with the reasoning behind it and the alternative I rejected. Written so that any question in a review conversation has an answer already prepared. Ordered roughly as a reviewer would encounter them.

---

## 0. The reframe

**Decision.** Treat the brief as a decision problem rather than a display problem.

**Reasoning.** The prompt says design a submission showcase. Read literally that produces a container: a repo link, a description, some images. But nobody opens this tool to admire a submission. They open it holding twelve of them and twenty minutes, and they need to decide what happens next. Naming the job as reaching a fair verdict quickly changes the hierarchy, the scoring model, the empty states and the keyboard flow. Everything below follows from this.

**Rejected.** A gallery layout that presents each artefact with equal weight. It looks tidier and answers nothing.

---

## 1. Entry point and navigation

### 1.1 The product opens on a showcase, not a dashboard
A WebGL shader landing with submissions as glass tiles. The product idea is collapsing scattered tabs into one surface, so the entry point should already behave like one surface. It also front loads craft, which matters for a design engineering audience.
**Rejected.** Opening directly on a submission. Faster to the point, but it gives the reviewer no sense of the batch they are working through.

### 1.2 Tiles carry parallax
Cursor parallax on a tilted plane. Motion here is doing a job: it signals the tiles are objects rather than rows in a table, which sets the expectation that each one opens into something substantial.
**Rejected.** Static cards. Cheaper, but the entry point then reads as a list and the product feels like a spreadsheet.

### 1.3 Paging is a keyboard first model
`J` and `K` move between candidates, with a visible pager as the discoverable equivalent. A reviewer doing fifteen of these should never return to a list view between submissions.
**Rejected.** Back to list, pick next. Two extra interactions per submission, multiplied by fifteen.

---

## 2. Information hierarchy on the review surface

### 2.1 The three question verdict strip leads
What did they build, does it run, how strong is the signal. Placed above everything, before any scrolling.
**Reasoning.** A reviewer should not have to scroll and synthesise to form a first impression. The interface can do that work. The three questions are the ones people actually ask in that order.
**Rejected.** Opening with candidate identity and metadata. It centres the person rather than the work, which is both slower and slightly less fair.

### 2.2 The first cell is plain text, the other two carry status colour
What they built is a description. Whether it runs and how complete the signal is are judgments the tool can legitimately make. Colouring the first would imply the product has an opinion about the idea itself, which it should not.

### 2.3 Everything below the strip is progressive disclosure
Live preview, README, screenshots, walkthrough, stack, in that order.
**Reasoning.** Ordered by how quickly each one changes your mind. Seeing it run is fastest, reading the stack is slowest.

### 2.4 The README is collapsed with a soft fade
Shows roughly the first screen, fades rather than hard cuts, expands on demand.
**Reasoning.** A hard cut mid sentence looks broken. The fade signals continuation. Most reviewers only need the opening paragraphs to judge communication quality.

### 2.5 The evaluation rail is sticky
Profile, completeness, scorecard and decision stay in view while the evidence scrolls.
**Reasoning.** The reviewer forms opinions while scrolling. If recording one requires scrolling back, some opinions get lost.

---

## 3. Trust and honesty

### 3.1 Stack items are tagged as evidence or claim
Items detected in the repository carry a solid chip with a diamond. Claimed but unverified items carry a dashed border, a muted label and a desaturated glyph, so the difference is legible at a glance rather than resting on one small marker.
**Reasoning.** Hiring tools tend to render everything a candidate typed as though it were fact. Marking the difference costs one visual token and changes how much weight a reviewer gives the rest of the page. It also creates a mild incentive toward accuracy.
**Rejected.** Showing the stack as a flat list. Simpler, and quietly misleading.

### 3.2 The README carries a candidate authored tag
Same principle. The reviewer should always know whose voice they are reading.

### 3.3 Deploy health is surfaced as a fact, not an adjective
"Loads in 0.9s, no console errors" rather than "high quality build". The tool reports what it measured and leaves the judgment to the human.

---

## 4. Evaluation model

### 4.0 Every number on the scale is defined in words
Each criterion carries a written anchor for 0 through 4. Hovering a number shows what it means before you commit to it, and the anchor for the chosen score stays visible.
**Reasoning.** This is the single largest lever on scoring consistency. A bare number means whatever the reviewer privately thinks it means, so two people scoring the same submission land in different places and neither can explain the gap. Writing the anchors forces the hiring team to agree what good looks like once, up front, rather than relitigating it per candidate. It also makes a score defensible when a candidate asks.
**Rejected.** A tooltip on an information icon. Anchors that are hidden behind a deliberate action get read once and then ignored, which defeats the point.

### 4.1 Four criteria, not one rating
Product judgment, craft, implementation quality, communication. Each scored zero to four.
**Reasoning.** A single five star score invites halo bias: one strong impression contaminates every dimension. Four axes force the reviewer to notice when someone writes beautifully but builds carelessly, or the reverse.
**Rejected.** A single star rating, and a ten point scale. Stars flatten, and ten points creates false precision nobody can defend.

### 4.2 A score of zero or one opens a required note
The field appears inline and submission is blocked until it is filled.
**Reasoning.** Low scores are the ones candidates ask about and the ones that need to survive scrutiny. Forcing a sentence at the moment of judgment produces better feedback than reconstructing it later.
**Rejected.** Optional notes. They get skipped exactly when they matter most.

### 4.3 Completeness is a separate meter, not a criterion
Repository, README, demo, screenshots, walkthrough, shown as a five point checklist.
**Reasoning.** A thin submission and weak work are different problems. Folding completeness into the score would penalise a strong build that shipped without screenshots. Keeping it visible but separate lets the reviewer weigh it consciously.

### 4.4 Submit stays disabled until the review is actually complete
Three conditions: a decision, every criterion scored, and a written reason behind any score of nought or one. The specific unmet condition is named under the button rather than left for the reviewer to work out.
**Reasoning.** The product should refuse to record a verdict with nothing behind it. A disabled button with no explanation is its own usability failure, so the blocker is always stated.

### 4.5 Decision is three states, not two
Advance, hold, pass. Hold exists because real review has a middle: the submission that needs a second opinion or a working link before it can be judged.

### 4.6 Submitting a verdict is reversible
The confirmation carries an undo for six seconds rather than only announcing success.
**Reasoning.** Of every action in the product, recording a judgment on a person's work is the one that most deserves a way back. Reviewers change their mind in the second after clicking, and a tool that makes correction expensive quietly encourages people to leave a wrong verdict standing.

### 4.7 A prior review is surfaced, not hidden
When a submission has been reviewed before, the earlier verdict and note appear in the rail.
**Reasoning.** The alternative is a reviewer forming an opinion and then discovering a colleague disagreed, which wastes the work. Showing it risks anchoring, so it sits in the rail rather than above the evidence.

---

## 5. States and edge cases

### 5.1 Missing material is designed, never blank
Every absent artefact has a composed state rather than an empty container.

### 5.2 Empty states address two audiences
The reviewer sees what the gap costs them. The candidate facing prompt shows what to add next time, with the incentive attached.
**Reasoning.** The brief asked how the product could encourage stronger supporting materials. The answer is to use the gap itself as the teaching moment rather than only penalising it.

### 5.3 Error is a distinct state from empty
A deploy that resolves and then fails shows the build log, a timestamp, and three recovery actions. A deploy that was never submitted shows the empty state.
**Reasoning.** These are different facts about the world and they carry different fairness implications. A link can rot between submission and review, so the error state explicitly tells the reviewer not to score the candidate down for infrastructure until they know which it is. Collapsing both into "no demo" would quietly punish someone for a broken pipeline.

### 5.4 Loading is a skeleton matched to the real layout
Shown when paging between candidates.
**Reasoning.** A spinner tells you to wait. A skeleton tells you what is arriving, so the eye is already in position when content lands.

### 5.5 Submitted is a state, not a redirect
The button confirms in place and a toast names the candidate.
**Reasoning.** Reviewers occasionally change their mind immediately. Navigating away makes correction feel expensive.

---

## 5b. Working at speed

### 5b.1 The entire review is possible without a mouse
J and K page submissions. Arrow keys move between criteria. Zero through four score the focused criterion and advance to the next. A, H and P record the decision.
**Reasoning.** The product claims to be built for volume, and scoring is the action performed most often. Requiring a mouse for it would have made the claim hollow. A full scorecard is now four keystrokes.

### 5b.2 A visible focus marker on the criterion being scored
A short accent rule to the left of the active row.
**Reasoning.** Keyboard scoring is useless if you cannot see where you are. The marker is deliberately quiet, because it appears four times on a small panel.

---

## 5c. Affordances that are real

### 5c.1 Screenshots open
Each tile is a button that opens a viewer, with arrow keys to page and escape to close.
**Reasoning.** The grid previously showed a zoom cursor and did nothing. An affordance that does not work is worse than no affordance, because it is the first thing a reviewer clicks and it teaches them the rest of the page may also be decorative.

### 5c.2 Walkthrough chapters are selectable
Clicking a chapter marks it active and the player caption follows.
**Reasoning.** Same principle. Chapter markers imply navigation, so they have to navigate.

---

## 6. Layout and structure

### 6.1 Twelve column grid, capped at 1240px
Eight columns of evidence, four column rail.
**Reasoning.** The evidence column needs to hold a sixteen by nine preview at a readable size. The rail needs to hold a five segment control without cramping. Those two constraints produce the eight and four split.

### 6.2 Containers are auto layout style stacks, not absolute positions
Cards stack vertically with consistent gaps. Screenshots use an auto fill grid so they reflow without a breakpoint. The stack and links use flex wrap.
**Reasoning.** Content length is unpredictable. Anything positioned absolutely breaks the first time a candidate writes a long README.

### 6.3 Patterns chosen deliberately
Cards for evidence blocks, a panel stack for the rail, a table for the state matrix, an inline frame for the preview, chips for metadata, a spotlight overlay for the tour. No drawers or modals in the main flow, because the review task is continuous and a modal would interrupt it.

### 6.4 Radius scales with footprint
Six on a chip, nine on a control, fourteen on media, eighteen on a panel, twenty two on a sheet.
**Reasoning.** A uniform radius across every element is one of the clearest tells of a templated interface. Physical objects do not share a corner treatment across scales, so neither should these.

---

## 7. Visual system

### 7.1 Warm paper canvas rather than dark or white
Soft mesh gradients and a fine film grain over a warm off white.
**Reasoning.** The reviewing task is reading. A warm ground is easier over a long session than pure white, and it separates the product from the default dark SaaS look. The grain adds a handmade quality that resists the templated feel.

### 7.2 One accent, muted
A single oxford cobalt used for primary action, selection and focus. No second accent.
**Reasoning.** Restraint reads as confidence, and it leaves the status colours free to mean something. A saturated neon accent was the first thing I rejected.

### 7.3 A serif for display type
Instrument Serif for names and headings, Instrument Sans for interface text, JetBrains Mono for metadata and numbers.
**Reasoning.** Choosing a real pairing does more for how considered a product feels than almost anything else. The serif gives a candidate's name the weight it deserves, since the page is about a person's work. Instrument Serif ships a single weight and an italic, which forces restraint: there is no bold to reach for, so hierarchy has to come from size and space.
**Rejected.** A heavier display serif. It read as loaded at large sizes and fought the calm the rest of the system is built around.

### 7.4 Tabular figures everywhere numbers appear
Commit counts, file counts, scores, timestamps. They align in columns and do not shift as they change.

### 7.5 Layered soft shadows instead of hard borders
Elevation is expressed with two shadow layers, borders stay hairline.
**Reasoning.** Depth should come from light, not outlines. It also keeps the surface calm.

---

## 8. Glass and material

### 8.1 Glass is confined to chrome
Toolbar, tour card, keyboard palette, toast. Never behind body copy.
**Reasoning.** Glass behind reading material is the legibility failure that drew criticism when the material became mainstream. Confining it to controls keeps the effect and removes the risk.

### 8.2 It is real refraction, not a blur
A displacement map generated at runtime from a squircle bevel profile, so the backdrop bends near the edges and stays flat in the middle, with a slight chromatic split at the rim.
**Reasoning.** A blur is a different physical phenomenon. Displacement is what makes it read as a lens rather than frosted plastic.

### 8.3 Support is detected by probing, not by a support query
**Reasoning.** The obvious feature query returns true in engines that then paint nothing, because the syntax is valid everywhere while the capability is not. Trusting it would leave some users with an invisible toolbar. Everywhere unsupported falls back to a frost that still reads as glass.

### 8.4 The material is opaque, with a darkened inner edge
**Reasoning.** This matches where the material actually landed after its first iteration was walked back for legibility. The ultra clear version now reads as dated as well as less readable.

---

## 9. Motion

### 9.1 Entrances stagger, exits do not
Sections rise and fade over 620ms with a 60ms stagger. Exits are faster and sharper.
**Reasoning.** Arriving content benefits from being read in sequence. Leaving content should get out of the way.

### 9.2 Easing differs by interaction type
A distinct curve for entrances, exits and positional moves rather than one global ease.

### 9.3 Duration scales with distance travelled
A toast moves a short distance and animates briefly. A sheet travels further and takes longer.

### 9.4 The total counter tweens
**Reasoning.** The number is the summary of the reviewer's judgment. Animating it draws the eye to the consequence of the click just made.

### 9.5 Paging carries direction
Moving forward slides the columns in from the right, moving back from the left, with the rail trailing the evidence by 50ms.
**Reasoning.** J and K are invisible inputs. If both produce the same animation the reviewer loses their place in the stack. Direction is the cheapest way to say which way you just moved.

### 9.6 A keyboard decision flashes the control it drove
**Reasoning.** Pressing A with the cursor nowhere near the button gives no feedback that the input landed, so the reviewer either doubts it or presses again. A brief ring on the affected button closes that loop.

### 9.7 The completeness meter fills from zero on arrival
**Reasoning.** A bar that is simply present reads as a static fact. A bar that fills reads as a measurement being taken, which is what it is, and the motion makes four out of five feel different from five out of five.

### 9.8 The low score note grows rather than appears
An animated grid row rather than a height guess, and the collapsed subtree is inert so it is not reachable by keyboard.
**Reasoning.** A panel that jumps when a field appears loses the reviewer's place. Growing keeps the surrounding layout legible through the change.

### 9.9 Scroll driven reveals sit behind a feature query
With a reduced motion reset that keeps content visible rather than stranded at zero opacity.
**Reasoning.** The classic failure of scroll animation is invisible content in a browser that does not support it. The fallback matters more than the effect.

---

## 10. Accessibility

### 10.1 Text never resolves against glass
Every reading surface is opaque.

### 10.2 The palette was measured, not eyeballed
Eighteen pairings tested. Six failed initially. Metadata grey, and the pass and caution pill colours, were all darkened. Form control borders were raised to a three to one ratio so an input is identifiable.

### 10.3 Container hairlines stay below three to one deliberately
**Reasoning.** The relevant criterion governs controls and states rather than decorative separators, and the cards are already distinguished by fill and elevation. Raising every hairline would damage the visual system for no accessibility gain. This is a considered exception, documented in the product itself.

### 10.4 An in product transparency control, not just a media query
**Reasoning.** The reduced transparency preference ships in only one browser engine. Relying on it alone leaves most users with no relief, which is a real failure rather than a nicety. The control is paired with the contrast preference and forced colours support.

### 10.5 One focus ring, everywhere
A single consistent visible ring on every interactive element. Missing focus styles are the most reliable indicator of an interface nobody tested with a keyboard.

### 10.6 Reduced motion collapses everything, in CSS and in JavaScript
All reveals, staggers and the spotlight become instant state changes. A media query cannot stop a render loop, a timer or a tween, so the shader draws a single static frame, the tile parallax stops responding, the demo timer never starts, the score resolves immediately and the tour scrolls without smooth behaviour.

---

## 11. Responsive

### 11.1 Evidence leads at every width
When the layout stacks, the rail follows the evidence rather than preceding it.
**Reasoning.** The verdict strip lives in the main column. Leading with the rail would show a scorecard before the reviewer knows whose work they are looking at. The review order should never invert.

### 11.2 The breadcrumb is the first thing sacrificed
Below the stacking breakpoint the context text is hidden so the pager and actions never collide.
**Reasoning.** The breadcrumb is orientation. The pager and decision actions are the task. When space runs out, orientation loses.

### 11.3 The rail becomes two columns before it becomes one
An intermediate arrangement at tablet width, so the scorecard does not become an unreadably long single column.

---

## 11b. A second theme, as proof

The system claims a theme is a token swap rather than a rewrite. The dark theme is that claim made checkable: it overrides token values only and adds no component rule of its own. Both themes were run through the same contrast script, and both pass at forty pairings.
**Reasoning.** Documenting a token architecture is cheap. Demonstrating that it survives a real second theme is the only way to show the architecture is load bearing rather than decorative. It also defaults to the operating system preference rather than forcing a choice.

---

## 12. Scope, and what I chose not to build

**Submission list and filtering.** Real, but the single submission verdict loop had to be right first.
**Side by side compare.** Genuinely useful at the finalist stage, and a different product surface.
**Candidate messaging.** Belongs to the wider hiring tool rather than the review moment.
**Reviewer disagreement resolution.** The prior review is surfaced, but the conflict path is not designed. It is the next thing I would build.
**Auth, settings, billing.** Excluded by the brief, and they prove nothing about judgment.
**Real deploy sandboxing.** The preview frame is a representation. Embedding a live third party deploy safely is an infrastructure problem, not a design one, and it would have consumed the whole budget.

---

## 13. If asked what I would change

The tour is a presentation device that would not ship in the real product. The submission list is a genuine gap for a reviewer who wants to triage before starting. The evidence detection is asserted rather than implemented, so in a real build I would need to define exactly what counts as detected before that tag can be trusted. And the shader, while cheap here, is the first thing I would put behind a preference check on lower powered hardware.
