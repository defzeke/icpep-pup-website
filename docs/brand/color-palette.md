# Color Palette

Source: deck page `06` (*color palette*). Contrast figures are **derived** — measured with
the WCAG 2 relative-luminance formula, not quoted from the deck. Method note at the end.

## Tokens

Names are proposals (the deck names the colours by swatch only). The eleven tokens below are
**live** in the `@theme` block in `app/globals.css`, so `--color-crimson` yields `bg-crimson`,
`text-crimson`, and so on. `--color-white` is the one exception — it is not defined there and
resolves from Tailwind's default theme.

### Primary

| Swatch name | Hex | Proposed token | Role |
| --- | --- | --- | --- |
| Maroon | `#7F0525` | `--color-maroon` | Primary brand mass; headings and key surfaces on light |
| Crimson | `#CB0E37` | `--color-crimson` | Primary accent; the "signal" colour |

### Secondary

| Swatch name | Hex | Proposed token | Role |
| --- | --- | --- | --- |
| Deep Maroon | `#4F0212` | `--color-deep-maroon` | Depth layer in stacks; darkest brand red |
| Burgundy | `#95082B` | `--color-burgundy` | Mid-tone between maroon and deep maroon |
| Bright Red-Maroon | `#E22030` | `--color-bright-red-maroon` | High-energy red; use sparingly |

### Accent

| Swatch name | Hex | Proposed token | Role |
| --- | --- | --- | --- |
| Bright Orange | `#F45A0C` | `--color-bright-orange` | Emitted light, gradient warm end |
| Light Orange | `#FB7D14` | `--color-light-orange` | Peak of the glow gradient |
| Amber Orange | `#E03B0A` | `--color-amber-orange` | Warm transition, trace colour |

### Background and typography

| Swatch name | Hex | Proposed token | Role |
| --- | --- | --- | --- |
| Obsidian | `#080406` | `--color-obsidian` | Primary page base |
| Carbon | `#140A0D` | `--color-carbon` | Raised surfaces on Obsidian |
| Pure White | `#FFFFFF` | `--color-white` | Maximum-contrast text on dark |
| Off-white | `#F9E9E7` | `--color-off-white` | Preferred body text on dark; light surfaces |

## Contrast — measured, not assumed

Ratios below are WCAG 2.1. `AA` = passes 4.5:1 (body text), `AA-` = large text / UI only
(≥ 3:1), blank = fails.

| Foreground | on Obsidian | on Carbon | on White | on Off-white |
| --- | --- | --- | --- | --- |
| Maroon `#7F0525` | 1.89 | 1.81 | **10.76 AA** | **9.14 AA** |
| Crimson `#CB0E37` | 3.55 AA- | 3.39 AA- | **5.74 AA** | **4.88 AA** |
| Deep Maroon `#4F0212` | 1.31 | 1.25 | **15.56 AA** | **13.21 AA** |
| Burgundy `#95082B` | 2.28 | 2.18 | **8.95 AA** | **7.60 AA** |
| Bright Red-Maroon `#E22030` | 4.35 AA- | 4.15 AA- | **4.68 AA** | 3.98 AA- |
| Bright Orange `#F45A0C` | **6.13 AA** | **5.85 AA** | 3.33 AA- | 2.82 |
| Light Orange `#FB7D14` | **7.81 AA** | **7.46 AA** | 2.61 | 2.22 |
| Amber Orange `#E03B0A` | **4.66 AA** | 4.45 AA- | 4.38 AA- | 3.72 AA- |
| White `#FFFFFF` | **20.38 AA** | **19.46 AA** | — | — |
| Off-white `#F9E9E7` | **17.31 AA** | **16.53 AA** | — | — |

### What this means in practice

Three rules fall straight out of the numbers:

1. **The maroon family is for light surfaces.** Maroon, deep maroon and burgundy all fail
   badly on Obsidian (1.31–2.28) and all pass comfortably on white/off-white (7.60–15.56).
   Do not use them as text on dark.
2. **Orange is for dark surfaces.** Orange text on a light background tops out at 3.33 and
   fails body-text contrast in every direction. Orange on Obsidian is where it shines
   (4.66–7.81).
3. **Text on the dark base should be white or off-white.** That is the only pairing with
   headroom (16.5–20.4), which matters once you factor in glow and overlays.

A practical mapping: **dark backgrounds carry orange and white; light backgrounds carry
maroon and near-black.**

### How the palette is applied

`app/globals.css` sets `--background: var(--color-obsidian)` and
`--foreground: var(--color-off-white)` on `:root`. That is **dark-first by design**. It is
deliberately *not* driven by `prefers-color-scheme`: Obsidian is the brand's stated primary page
base, so a visitor whose OS is in light mode still gets the dark site. Do not reintroduce a
colour-scheme media query.

## Gradients and glow

The identity is built on emitted light, and the deck's own assets are gradient-heavy. Two
gradient families are observable in the artwork:

- **Mass gradient** (the logo's layers): maroon → crimson → bright orange.
- **Emission gradient** (apertures, traces, halo): amber → bright orange → light orange.

Both are sampled from the palette above — keep them there. A gradient is not a licence to
introduce a new colour.

## Method note

Ratios were computed from the sRGB hex values using the WCAG 2.1 relative luminance
definition (linearised channels, `0.2126 R + 0.7152 G + 0.0722 B`, ratio `(L1+0.05)/(L2+0.05)`).
Hex values are taken verbatim from deck page `06`. If a colour is ever changed, recompute —
do not extrapolate from this table.

## Open questions

1. What are the **usage proportions**? The deck lists 12 colours and no ratios. A site
   built 50/50 dark and light will not read as one brand.
2. Which colour owns **interactive states** — is crimson the hover, or bright orange?
3. Is **Pure White** ever allowed as a large surface, or is Off-white the only light base?
4. Is there an approved pairing for **error / success / warning** states? None are in the
   palette, and a contact form will need them.
5. Does the glow gradient have a defined **direction and angle** (e.g. always top-lit)?
