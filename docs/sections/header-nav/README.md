# Header / Navigation

> **Source status.** The deck does not document the header as a section, but it *shows* one
> on every page: the wordmark `ICPEP SE – PUP MANILA`, the four links `Home`, `About Us`,
> `Service`, `Contact`, and the four-word motif `PLAN` `BUILD` `DEPLOY` `REPEAT`
> (deck pages 2 and 3, marked `02`/`03`). Everything about behaviour below is a proposal.

## 1. Purpose

Give the visitor a permanent sense of place and a way back. The header answers "where am I"
and "where can I go" without competing with the page it sits above.

## 2. Placement and order

First element on every page, above [hero](../hero/README.md). It is the only section that
appears site-wide, so it carries the site's identity — no other section should repeat the
full lockup at equal size.

## 3. Layout

- Horizontal bar: **wordmark left, links right** — the arrangement the deck shows on its
  own pages.
- Sticky on scroll (proposal). If sticky, the bar must gain a solid Obsidian background
  once content scrolls beneath it; the brand has no translucent surface rule yet.
- Breakpoints: single row at ≥ `md`; below that, wordmark + menu button.
- **Pillars:** *Algorithmic* (strict alignment, letter-spaced uppercase labels) and
  *Interconnected* (trace-style underline or connector on hover). The
  `PLAN · BUILD · DEPLOY · REPEAT` motif is the natural place for an *Interconnected*
  touch — it reads as a pipeline.

## 4. Content and copy

| Field | Value | Source |
| --- | --- | --- |
| Wordmark | `ICPEP SE – PUP MANILA` | Deck |
| Link 1 | `Home` | Deck |
| Link 2 | `About Us` | Deck |
| Link 3 | `Service` | Deck |
| Link 4 | `Contact` | Deck |
| Motif | `PLAN` / `BUILD` / `DEPLOY` / `REPEAT` | Deck |

⚠️ **The deck's nav does not match this site's section list.** The requested sections are
Hero, About, Events, Projects/Build Showcase, Executives & Advisers, Gallery, Partners &
Sponsors, CTA/Join Us and Footer — there is no "Service" section, and Events, Projects,
Executives, Gallery and Partners have no nav entry. The deck's four-link nav is therefore
either out of date or intended for an earlier one-page design. **This needs a decision
before the header is built.**

Also note the motif's reading order is ambiguous: the deck's own text extraction returns
`PLAN BUILD DEPLOY REPEAT`, while its page furniture prints them reversed
(`REPEAT DEPLOY BUILD PLAN`). Pick one order and use it consistently.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Bar background | `--color-obsidian` (`#080406`) |
| Links (rest) | `--color-off-white` — 17.31:1 on Obsidian |
| Links (hover/active) | `--color-light-orange` — 7.81:1 |
| Active-section indicator | `--color-crimson` (3.55:1 — **indicator only, never label text**) |
| Wordmark | `icpep-mono.png` or `icpep-lockup-obsidian.png`, not the full-colour lockup |
| Link type | Medium (500), uppercase, letter-spaced, small label size |

Uppercase links at a small size are consistent with the deck's metadata style
(`ID // PIXIE`). See the Tags/Footers anomaly in
[../../brand/typography.md](../../brand/typography.md) — do **not** set nav links at
32–56 pt.

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Wordmark | `public/logos/icpep-mono.png` | White knockout for the dark bar |
| Wordmark (opaque alt) | `public/logos/icpep-lockup-obsidian.png` | If a fixed dark rectangle is acceptable |
| Menu icon | **MISSING** | No icon set exists in the brand system |

Alt text for the wordmark comes from
[../../assets/inventory.md](../../assets/inventory.md). If the header logo is the only
content of the link to `/`, that link still needs an accessible name.

## 7. Interaction and states

- **Hover:** link goes to `--color-light-orange`; optional trace underline drawn left-to-right.
- **Active page:** marked with a crimson indicator **and** `aria-current="page"` — colour
  alone is not a sufficient signal.
- **Focus:** visible ring on every link and the menu button. Never remove the outline.
- **Mobile menu:** opens a panel; it must trap focus while open, close on `Escape`, and
  return focus to the button.
- **Reduced motion:** the underline animation becomes instant; no transition.

## 8. Accessibility

- Wrap links in a `<nav aria-label="Main">` landmark.
- Provide a **skip-to-content** link as the first focusable element.
- Heading level: the header carries **no heading** — it is navigation, not content.
  Reserve `<h1>` for the page hero.
- Touch targets ≥ 44 × 44 px.
- Menu button: `aria-expanded`, `aria-controls`, and a text label ("Menu").

## 9. Acceptance criteria

- [ ] All nav links have a text label and a visible focus state.
- [ ] The current page is indicated by more than colour.
- [ ] At 375 px the nav collapses; every link is still reachable by keyboard.
- [ ] Opening the mobile menu moves focus into it; `Escape` closes it and restores focus.
- [ ] The header is not announced as a heading by a screen reader.
- [ ] With `prefers-reduced-motion: reduce`, the hover underline does not animate.

## 10. Open questions

1. **What is the real nav?** The deck's four links don't match the site's sections — who
   decides the final set, and does the header need a "More" menu or a single-page scroll nav?
2. What does **"Service"** refer to — a services page, community service, or the
   Projects/Build Showcase under a different name?
3. Is the **`PLAN · BUILD · DEPLOY · REPEAT`** motif part of the site header, or was it only
   deck furniture? Which reading order is correct?
4. Sticky or static header?
5. Is there an **icon set**? The brand supplies none, and a hamburger icon is unavoidable.
