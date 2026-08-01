# Ledger, developer handoff

Everything an engineer needs to build this without asking a question. Values are the real ones from the prototype, so this document and the code agree.

Companion files: `ledger-tokens.json` for the token source, `contrast.js` for the accessibility audit, and `src/index.html` for the readable implementation.

---

## 1. Foundations

### 1.1 Grid and page

| Property | Value |
|---|---|
| Layout | Two column: fluid evidence column plus a fixed rail |
| Max content width | 1240px |
| Gutter | 32px |
| Page padding | 24px desktop, 16px below 720px |
| Evidence column | `minmax(0, 1fr)`, takes the remainder |
| Evaluation rail | Fixed 340px |
| Column gap | 32px |

The rail is fixed width rather than fluid because its contents are a five segment control and a checklist, both of which have a natural minimum. The evidence column takes the remainder, with `minmax(0, 1fr)` so long unbroken strings cannot force overflow.

### 1.2 Breakpoints

| Name | Width | Behaviour |
|---|---|---|
| Desktop | 1081px and up | Two column. Rail sticky at `top: 80px`. |
| Tablet | 720px to 1080px | Single column. Rail follows evidence, becomes a two column grid, loses sticky. Breadcrumb hidden. |
| Mobile | 719px and below | Single column throughout. Verdict strip stacks to one per row. Rail is one column. Button labels collapse to icons. |

**Ordering rule.** The rail must never precede the evidence column. The verdict strip lives in the evidence column, so leading with the rail would present a scorecard before the reviewer knows whose work it is.

### 1.3 Spacing scale

`4, 8, 12, 16, 24, 32, 48, 64`. Every gap resolves to one of these. Card padding is 24. Gap between stacked cards is 24. Rail card internals are 16.

### 1.4 Radius scale

| Token | Value | Applies to |
|---|---|---|
| `--r-chip` | 6px | Chips, tags, keyboard keys |
| `--r-control` | 9px | Buttons, links, segmented controls |
| `--r-card` | 14px | Media frames, screenshots, preview |
| `--r-panel` | 18px | Cards, rail panels |
| `--r-sheet` | 22px | Tour card, palette, showcase tiles |

### 1.5 Elevation

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(34,30,20,.05), 0 1px 1px rgba(34,30,20,.03)` |
| `--shadow` | `0 1px 2px rgba(34,30,20,.05), 0 14px 30px -14px rgba(38,42,72,.20)` |
| `--shadow-lg` | `0 2px 6px rgba(34,30,20,.06), 0 36px 64px -22px rgba(38,42,72,.32)` |

### 1.6 Motion

| Token | Curve | Duration |
|---|---|---|
| `--e-enter` | `cubic-bezier(.16,1,.3,1)` | 620ms |
| `--e-exit` | `cubic-bezier(.4,0,1,1)` | 220ms |
| `--e-move` | `cubic-bezier(.32,.72,0,1)` | 320ms |

Stagger between siblings is 60ms. Duration scales with distance travelled. All of this collapses under `prefers-reduced-motion: reduce`, with content forced to `opacity: 1` and `transform: none` so nothing is stranded invisible.

---

## 2. Components

### 2.1 `VerdictStrip`

Three equal cells in a single bordered container, separated by 1px dividers rather than gaps, so it reads as one instrument rather than three cards.

| Property | Value |
|---|---|
| Layout | `grid-template-columns: repeat(3, 1fr)`, `gap: 1px`, background acts as the divider colour |
| Cell padding | 18px 20px |
| Radius | `--r-panel` on the container, cells square |
| Question label | Eyebrow style, with a 16px numbered circle |
| Answer | Display 15px, weight 400 |
| Sub | 12px, `--text-secondary` |

**Props:** `built`, `builtSub`, `runs {state, label, sub}`, `signal {state, label, sub}`.
**Rule:** cell one is always plain text. Cells two and three render a `Pill`. Never colour cell one.
**Mobile:** stacks to one column, dividers become horizontal.

### 2.2 `Card`

The workhorse. Live preview, README, screenshots, walkthrough and stack are all this component.

| Slot | Contents |
|---|---|
| `idx` | Two digit mono index, `--text-tertiary` |
| `title` | Section title, sans 13px weight 600 |
| `spacer` | Flex spacer |
| `right` | Optional chip or tag |
| `children` | Body, padding 24px |

Header is 14px 24px with a 1px bottom border. Radius `--r-panel`. Shadow `--shadow`.

### 2.3 `Pill`

| Property | Value |
|---|---|
| Height | 26px |
| Padding | 0 11px |
| Radius | 100px |
| LED | 7px circle, glows on pass and caution only |
| Font | 12px, weight 500 |

**Variants:** `go`, `hold`, `stop`, `info`, `neutral`. Each pairs a text colour with a 12 to 15 percent tint of itself. All four verified at 4.5:1 against their own tint.

### 2.4 `Tag`

Two variants and they are semantically different, not decorative.

| Variant | Style | Meaning |
|---|---|---|
| `evidence` | Solid tint, accent border, leading diamond | Detected in the repository |
| `claim` | Transparent, dashed border, muted | Stated by the candidate, unverified |

Height 20px, radius `--r-chip`, mono 10px, letter spacing 0.06em, uppercase.

### 2.5 `LivePreview`

Three distinct states. They are not interchangeable.

**Playing.** Browser chrome bar 34px with three dots and a URL field, then a 16:9 stage. Live pill top right.

**Error.** Used when a deploy resolves and then fails.

| Element | Spec |
|---|---|
| Container | 1px border `rgba(180,72,61,.30)`, radius `--r-card` |
| Header | 9px 14px, tinted 7 percent, pulsing 7px dot, mono status left, timestamp right |
| Log | `#1A1D24`, radius 9px, padding 13px 15px, mono 11.5px, error line `#E88C82` |
| Guidance | Accent tinted note explaining not to penalise the candidate for infrastructure |
| Actions | Retry, open repository, request a working link |

**Empty.** Used when no deploy was ever submitted. Dashed border, icon plate, reviewer message, candidate prompt.

### 2.6 `Empty`

| Property | Value |
|---|---|
| Border | 1px dashed `--border-strong` |
| Radius | 11px |
| Padding | 26px |
| Background | Vertical wash from `--surface-sunken` to `--surface-raised` |
| Icon plate | 40px square, radius 10px, raised |

**Props:** `icon`, `title`, `reviewerMessage`, `candidatePrompt` (optional).
**Rule:** the reviewer message states the cost. The candidate prompt states the fix with an incentive. Never merge them into one sentence.

### 2.7 `Meter` (submission completeness)

Five fixed rows: repository, README, live demo, screenshots, walkthrough. Track 6px, radius 100px, fill is the accent gradient, transition 500ms on `--e-enter`. Checkbox 15px, radius 5px, fills accent when true.

**Rule:** this is never folded into the score. It measures completeness, not quality.

### 2.8 `Rubric` and `Criterion`

Driven by a config array, so adding a criterion is a data change. Each entry carries five written anchors, one per point on the scale.

```js
{
  key: 'product',
  nm: 'Product judgment',
  hint: 'Did they scope the right slice?',
  anchors: [
    'Built whatever was easiest, no evident prioritising',
    'Attempted the whole brief and finished none of it well',
    'Reasonable scope, though the choice is not explained',
    'Cut deliberately and can say why',
    'Cut deliberately, said why, and the cut itself shows insight',
  ],
}
```

The anchor for the hovered number is shown live, and falls back to the anchor for the selected score. Hover previews without committing, so a reviewer can read what a 3 means while a 4 is selected.

| Element | Spec |
|---|---|
| Segmented control | 5 buttons, flex 1, height 26px, radius `--r-control`, gap 4px |
| Selected | Accent fill, white text, weight 600, shadow `0 5px 12px -5px` accent at 55 percent |
| Value readout | Mono 12px, accent when set, em dash when unset |
| Low score note | Appears when value is 0 or 1. Textarea min height 52px, caution border, `field-sizing: content` |
| Flag | Mono 9.5px caution, with alert icon |

**Rollup:** unweighted total over 16, labelled Total score. `AnimatedNumber` tweens 480ms, and resolves instantly under reduced motion.

### 2.9 `Decision`

Three buttons in a `repeat(3, 1fr)` grid, height 46px. Each shows a label and its keyboard shortcut. Selected state tints to the matching status colour.

**Submit is disabled until a decision exists, every criterion is scored, and any score of 0 or 1 carries a written reason.** The specific blocker is named beneath the button, so the reviewer is never guessing which condition is unmet. On submit, the button confirms in place and a toast appears. No navigation.

### 2.10 Chrome and glass

Toolbar, tour card, keyboard palette and toast share the glass material.

```css
background: var(--glass-tint);
backdrop-filter: blur(16px) saturate(165%) brightness(1.04);
border: 1px solid rgba(255,255,255,.55);
box-shadow:
  0 10px 34px -12px rgba(38,42,72,.26),
  inset 0 1px 1px rgba(255,255,255,.85),
  inset 0 -1px 1px rgba(255,255,255,.45),
  inset 1px 0 1px rgba(255,255,255,.34),
  inset -1px 0 1px rgba(255,255,255,.34),
  inset 0 0 0 1px rgba(34,30,24,.07);
```

The per side inset shadows are what make the rim read as a bevel rather than a border. Do not replace them with a single inset.

**Refraction tier.** Where the engine can displace a live backdrop, apply `backdrop-filter: url(#lgfilter)` alongside a reduced blur. Detect support by probing the engine, not with a feature query, because `url()` is valid syntax in every browser and the query returns true where the capability is absent.

**Reduced transparency.** Setting `data-transparency="reduced"` on the root raises the tint to 97 percent opacity and sets blur to zero.

---

## 3. Interaction

### 3.1 Keyboard

| Key | Action |
|---|---|
| `J` / `K` | Next and previous candidate |
| `A` / `H` / `P` | Advance, hold, pass |
| `T` | Open the decisions tour |
| `?` | Toggle the shortcut map |
| `\u2191` `\u2193` | Move between criteria |
| `0` to `4` | Score the focused criterion, then advance |
| `Esc` | Close the tour or the shortcut map |
| `←` `→` | Step the tour when open |

Handlers must bail when the event target is an input or textarea, and when an overlay owns the keyboard.

### 3.2 Focus

One ring everywhere: `2px solid var(--action-primary)` at `2px` offset, `3px` on larger targets. Never remove it. `:focus-visible` only, so pointer users do not see it.

### 3.3 Hover

Lift by 1 to 3px depending on component scale, with shadow stepping up one level. Transition on `--e-move`. Hover is a desktop affordance, so every hover revealed element must also be reachable another way.

---

### 2.11 Theme

`data-theme="dark"` on the root. It overrides token values only and must never add a component rule. If a dark theme needs a new selector, the token layer is wrong. Defaults to `prefers-color-scheme`. Run `contrast.js` after any token change: it covers both themes, forty pairings, and must report zero failures.

---

## 4. Accessibility acceptance criteria

Build is not done until all of these pass.

1. Every text and control pairing meets WCAG AA. Run `contrast.js`, expect zero failures.
2. Every interactive element is reachable by keyboard and shows the focus ring.
3. `prefers-reduced-motion` collapses all animation, in CSS *and* in JavaScript. The shader renders a single static frame, the parallax stops, the demo timer never starts, the score resolves instantly, and the tour scrolls without smooth behaviour.
4. `prefers-reduced-transparency` and `prefers-contrast: more` both remove glass.
5. `forced-colors: active` drops glass and shadow, resolves borders to `CanvasText`, and selected states use `Highlight`.
6. The in product transparency control works independently of the media queries.
7. No body text renders against a translucent surface at any breakpoint.
8. Form controls carry a 3:1 border against their own fill.
9. Overlays are dialogs with accessible names and trap nothing the user cannot escape.
10. Status is never communicated by colour alone. Every pill pairs colour with a text label.

---

## 5. Data contract

```ts
type Candidate = {
  id: string
  initials: string
  name: string
  role: string
  status: 'needs-review' | 'reviewed'
  submitted: string          // ISO date
  days: string               // humanised
  timeSpent: string          // may be an em dash when unreported
  commits: number
  filesChanged: number
  verdict: {
    built: string
    builtSub: string
    runs:   { state: Status, label: string, sub: string }
    signal: { state: Status, label: string, sub: string }
  }
  lede: string
  repo: string
  repoMeta: string
  demo: string | null
  demoOk: boolean            // deploy is reachable and healthy
  demoError?: boolean        // deploy resolves but fails; distinct from !demoOk
  loom: { ok: boolean, len?: string, chapters?: { t: string, l: string }[] }
  shots: { n: string, l: string }[]
  stack: [string, boolean][] // [name, detectedInRepo]
  readme: { title: string, body: string }
  prior: { by: string, score: string, decision: string, note: string } | null
}

type Status = 'go' | 'hold' | 'stop' | 'info' | 'neutral'
```

**Note on `demoOk` and `demoError`.** These are separate fields on purpose. `demoOk: false` with `demoError: true` means broken. `demoOk: false` with no `demoError` means never submitted. Collapsing them loses the fairness distinction that the error state exists to protect.

**Review state** is keyed by candidate id and persists across paging:

```ts
type Review = {
  scores: Record<string, 0|1|2|3|4>
  notes:  Record<string, string>   // required when score <= 1
  decision: 'go' | 'hold' | 'stop' | null
  memo: string
  done: boolean
}
```

---

## 6. Implementation notes and tradeoffs

**No CSS framework.** The system is small enough that tokens plus plain CSS is less code than configuring a framework, and it keeps the token layer authoritative.

**The shader is inline.** Roughly forty lines of GLSL with no library. On lower powered hardware it should sit behind a preference check, which is the first thing I would add.

**Screenshots use `auto-fill`.** No breakpoint is written for the gallery. It reflows on its own, which is fewer moving parts than a media query cascade.

**Scroll driven animation is progressive.** Behind `@supports (animation-timeline: view())`, with the reduced motion reset applied regardless. The fallback matters more than the effect.

**Evidence detection is asserted, not implemented.** The `stack` tuple carries a boolean the prototype supplies. In a real build, define precisely what counts as detected, likely a lockfile and import graph scan, before that tag can be trusted. Shipping the tag without a rigorous definition would undermine the honesty it exists to provide.
