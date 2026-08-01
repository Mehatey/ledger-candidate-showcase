# Getting this into Figma

Twelve minutes, no plugins to buy. The token file does the tedious part.

## 1. Variables, two minutes

Open the Figma file, then Plugins, Tokens Studio for Figma, Import, and choose `ledger-tokens.json`.

The file is already split into three sets. `global` holds spacing, radius, type and motion. `light` and `dark` hold the colours. Once imported, hit Export to Figma variables and pick "create variable modes". You get one collection with two modes, so switching a frame from light to dark is a dropdown rather than a repaint.

Seventy six tokens land, all named for function rather than colour, so `surface/raised` and `action/primary` rather than a hex nickname.

## 2. Text styles, three minutes

The `type` group in `global` carries six ramp entries with their real sizes, line heights and tracking. Tokens Studio creates these as text styles on export. Install Instrument Serif, Instrument Sans and JetBrains Mono from Google Fonts first, or Figma will substitute and the tracking will look wrong.

| Style | Family | Size | Line height | Tracking |
|---|---|---|---|---|
| Display | Instrument Serif | 34 | 115% | -2% |
| Section | Instrument Sans SemiBold | 13 | 140% | -0.4% |
| Lede | Instrument Sans | 15.5 | 160% | -0.4% |
| Body | Instrument Sans | 13.5 | 170% | -0.4% |
| Meta | JetBrains Mono | 11.5 | 150% | 0 |
| Eyebrow | JetBrains Mono | 10.5 | 150% | 14% |

## 3. Effect styles, one minute

Three shadows, created by hand since Tokens Studio handles these inconsistently across versions.

| Name | Value |
|---|---|
| Elevation / small | y 1, blur 2, `#221E14` at 5% |
| Elevation / medium | y 1 blur 2 at 5%, plus y 14 blur 30 spread -14, `#262A48` at 20% |
| Elevation / large | y 2 blur 6 at 6%, plus y 36 blur 64 spread -22, `#262A48` at 32% |

## 4. Frames, six minutes

Drag the images from `media/` onto the canvas as reference and build over them. They are at 60 percent of a 2x capture, so place them at 120 percent for true size.

| File | Frame to build | Size |
|---|---|---|
| `shot-landing.jpg` | Showcase | 1440 x 900 |
| `shot-review.jpg` | Review, default | 1440 x auto |
| `shot-error.jpg` | Review, build error | 1440 x auto |
| `shot-empty.jpg` | Review, empty states | 1440 x auto |
| `shot-anchor.jpg` | Scorecard with anchors | 400 x auto |
| `shot-system.jpg` | Design system | 1440 x auto |
| `dark-review.jpg` | Review, dark mode | 1440 x auto |
| `resp-tablet.jpg` | Tablet | 834 x auto |
| `resp-mobile.jpg` | Mobile | 390 x auto |

## Layout rules to reproduce

Content caps at 1240 with a 32 gutter. The evaluation rail is a fixed 340 and the evidence column takes the remainder, so use a horizontal auto layout with the rail set to fixed width and the main column set to fill.

Stack everything vertically at 24 gap. Card padding is 24. Rail card internals are 16.

Radius is not uniform, and that is deliberate: 6 on chips, 9 on controls, 14 on media, 18 on panels, 22 on sheets.

Below 1080 the layout becomes one column and the rail moves *below* the evidence, never above it. The verdict strip lives in the evidence column, so leading with the rail would show a scorecard before the reviewer knows whose work it is.

## A note on why the file arrived empty

Figma meters programmatic access separately from normal editing, by plan tier. On Starter the quota for assistant driven tool calls is small and does not reset quickly, which is what the `mcp_rate_limit_paywall` in their upgrade URL refers to. It is unrelated to file permissions. Editing in the Figma interface is unrestricted, which is why the import route above works fine.
