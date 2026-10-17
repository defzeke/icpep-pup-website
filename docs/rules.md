# Rules

Non-negotiables for anyone — human or agent — changing this repo. Rationale lives in the
linked doc, not here.

## Contracts

1. **The docs are the contract.** If a doc and the code disagree, one of them is a bug. Fix
   the wrong one in the same change.
2. **Unspecified is written down, not guessed.** The source deck is a visual guide and says
   almost nothing about page structure, copy or data. Record gaps under **Open questions**.
3. **The intro is opt-in.** The overlay markup is always rendered; CSS shows it only for
   `data-intro="play"` / `"repeat"`. No JS must still mean a fully usable site. Never hide the
   page behind the overlay, and never set `history.scrollRestoration`.
4. **Motion respects `prefers-reduced-motion`.** Under `reduce` there is no intro at all, no
   pulsing, no parallax.

## Design

5. **Tokens, never raw hex.** Take colour and type from [`brand/`](brand/overview.md) by token
   name. Tokens are defined once, in `app/globals.css`.
6. **Dark-first.** Obsidian (`--color-obsidian`) is the page base. Do not reintroduce
   `prefers-color-scheme` — see [`brand/color-palette.md`](brand/color-palette.md).
7. **Contrast pairs are fixed.** The maroon family only passes on light surfaces; the orange
   family only on dark. Measured ratios are in
   [`brand/color-palette.md`](brand/color-palette.md). Never pair by eye.

## Assets

8. **Canonical vs derived.** `public/logos/` and `public/mascot/` are canonical, extracted
   from the deck. `public/intro/` is **derived** — regenerate it, never hand-edit.
9. **The 2× invariant.** `public/intro/*.webp` are 576px and `.intro__stack` is 288px on
   desktop. Change one and the density silently drops — change both. See
   [`skills.md`](skills.md) for the regeneration procedure.
10. **Third-party imagery is linked, never copied.** The mood board is URLs only
    ([`brand/moodboard.md`](brand/moodboard.md)).

## Code

11. **Comments state invariants; docs carry explanations.** A comment earns its place if
    deleting it would let someone break something that fails silently. Everything else —
    the why, the history, the design reasoning — belongs in `docs/`. Pointers like
    `// Contract: docs/intro.md` are the preferred form.
12. **One GSAP entry point.** `useGSAP` from `@gsap/react`, GSAP core only, no plugins.
    `useGSAP` gives the auto-reverting `gsap.context()` that React 19 StrictMode needs.
13. **Do not edit the `AGENTS.md` Next.js block.** `next dev` re-adds it; removing it only
    recreates an uncommitted change.

## Before you commit

```bash
npx tsc --noEmit
npm run lint
npm run build
```

All three pass on `main`. There is no test suite — the build, the type-check and the link
check in [`skills.md`](skills.md) are the gates.

## Known accepted risks

- **WCAG 2.3.1.** The intro's shuffle peaks at 55ms per swap, well above the guideline's three
  flashes per second. Crossfades and the 55% dim reduce it; they do not eliminate it. There is
  **no media query for photosensitivity**, so `prefers-reduced-motion` does not cover these
  users. Do not speed the shuffle up further without revisiting this.
- **LCP.** The intro is an opaque overlay for ~3.1s, so the hero's LCP moves behind the
  curtain. Measure before adding time to it.
