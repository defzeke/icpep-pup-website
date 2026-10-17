# Page intro

The brand splash: a dimmed logo that shuffles through the flat variants and ignites into the
glow, then lifts a curtain off the page behind it.

## When it plays

| Situation | Behaviour |
| --- | --- |
| First full page load in a session | Full sequence, ~3.1s |
| Later full page loads in the same session | Shortened, ~1.25s, opening on the settled glow |
| Client-side navigation between routes | Nothing — the root layout does not remount |
| `prefers-reduced-motion: reduce` | Nothing, ever |

It lives in `app/layout.tsx`, so it runs on **every** full page load, not just `/`. Moving
`<PageIntro />` into `app/page.tsx` makes it home-only; that is a one-line change.

## Files

| File | Owns |
| --- | --- |
| `app/layout.tsx` | `INTRO_SCRIPT`, the `data-intro="skip"` default, mounting `<PageIntro />` |
| `app/globals.css` | `.intro`, `.intro__*`, the reduced-motion override |
| `components/page-intro.tsx` | The timeline and the overlay markup |
| `components/intro-timeline.ts` | `T` and the shuffle maths — JSX-free, so it is testable |
| `public/intro/*.webp` | Four derived 576px assets — see [`assets/inventory.md`](assets/inventory.md) |

## The `data-intro` state machine

The attribute lives on `<html>`. It is the only coupling between the three files.

| Value | Set by | Meaning |
| --- | --- | --- |
| *(absent)* / `skip` | server render | Hidden. Also the permanent state when there is no JS |
| `play` | `INTRO_SCRIPT` | Full sequence |
| `repeat` | `INTRO_SCRIPT` | Shortened sequence |
| `done` | `page-intro.tsx`, on completion | Hidden |

`INTRO_SCRIPT` runs synchronously in `<head>`, before first paint, so nothing flickers. It
returns early under `prefers-reduced-motion`, leaving the server's `skip` in place.

The key both sides agree on is `icpep:intro` (`STORAGE_KEY` in `components/page-intro.tsx`).
Because the script rewrites the attribute before React hydrates, `<html>` carries
`suppressHydrationWarning`: the server rendered `skip` and the client sees `play`. That mismatch
is expected. Do not remove it.

## Three failure layers

The design inverts the usual approach: the overlay is **opt-in**, so every failure mode ends
with a usable page rather than a blank one.

1. **No JS, or a CSP that blocks inline scripts.** The script never writes the attribute, so
   the server-rendered `skip` stands. The markup is still in the DOM but `display: none`.
2. **Script runs, React never hydrates.** The overlay is visible but nothing is animating it.
   The CSS **bailout** — a 1ms discrete animation on `.intro__bailout` with a 5s delay — hides
   it. GSAP disarms that bailout the moment it takes over, so a merely slow hydration is never
   cut off mid-curtain. The bailout sits on a wrapper GSAP never touches, because a CSS
   animation would otherwise win over GSAP's inline styles.
3. **Reduced motion.** Covered twice: the script leaves `skip`, and a `@media` rule force-hides
   the overlay at matching specificity.

`prefers-reduced-motion` toggled **on** mid-intro reverts the `gsap.matchMedia` timeline; the
still-armed bailout then clears the overlay at 5s.

## Timeline

First visit, seconds from hydration:

| t | Beat |
| --- | --- |
| 0.00 | Stack fades in on `mono`, dimmed to 55% |
| 0.41–1.65 | Shuffle, 14 swaps decelerating 55ms → 165ms |
| 1.70 | Ignition: last variant crossfades into `glow`, stack to 100% |
| 2.16 | Content exits, rising |
| 2.26 | Panel `scaleY: 1 → 0` from the top — the curtain |
| 3.11 | `data-intro="done"` |

All timings are `T` in [`components/intro-timeline.ts`](../components/intro-timeline.ts), which
also holds `shuffleIntervals()` (the quadratic deceleration) and `shuffleOrder()`. They sit in a
JSX-free file so `node --test` can import them — see
[`intro-timeline.test.ts`](../components/intro-timeline.test.ts).

`VARIANTS` is ordered **form → mark → name → emitted light** — `mono`, `mark`, `primary`,
`glow`. The opening frame is `[0]` and the landing is `[LAST]`; only the middle is shuffled. The
splash therefore opens abstract, and the ignition is the single step that adds light.

A **repeat** visit takes a different, shorter path and does not shuffle: the content fades in
over 0.2s on the already-settled glow, the mark rises 20% and fades out over 0.3s, and the panel
*fades* (`repeatFadeOut`, 0.85s) rather than wiping.

## The shuffle

- **Degrades, never repeats.** 14 swaps drawn from the three flat variants, with a repeat never
  allowed — including against the variant already on screen. A fixed cycle reads as a loading
  spinner.
- **`glow` is excluded.** It can only ever be the landing; shuffling it in would spend the
  payoff.
- **Crossfades, not hard cuts**, at 45ms. The shortest interval is 55ms, so no element is ever
  mid-tween when it is reused.
- **Dimmed to 55%** until the ignition. This lowers the luminance amplitude of every swap and
  reads as the mark powering up.
- `at += crossfade` after the loop lets the final swap finish before the ignition reuses that
  same element.

## Assets

Four derived 576px WebP in `public/intro/` — **exactly 2×** the 288px desktop frame, ~132KB
total. They are **normalised on the diamond stack**, not plain resizes: in a common frame the
mark's solid content spans 61% of its canvas width against 82% for the lockups, so it would
render about a quarter smaller and every swap would jump.

Regeneration procedure and its traps: [`skills.md`](skills.md).

`<img>` is deliberate over `next/image` — these are pre-optimised at their exact display size,
so a `/_next/image` round trip would only delay the splash's first paint. The
`eslint-disable-next-line` is required, not incidental. `mono` carries the opening frame, so it
is requested at `fetchPriority="high"` while the other three stay `"low"`.

## Hand-off

Elements marked `[data-intro-reveal]` fade in and rise 24px, staggered 0.06s, starting at 35% of
the curtain. The query is deliberately **unscoped** — these live outside the overlay. Nothing is
marked yet; sections opt in as they are built. See
[`sections/hero/README.md`](sections/hero/README.md).

## Accessibility

The overlay is `aria-hidden` and `pointer-events: none`, so the page underneath stays in the
DOM, the tab order and the accessibility tree throughout. There is no focus trap and no
`scrollRestoration` override.

The trade: during the ~3.1s a keyboard user can reach content that is visually covered. That is
accepted deliberately — the alternative is trapping focus, which is worse.

## Known residuals

- **WCAG 2.3.1.** The shuffle peaks at 55ms per swap, above the guideline's three flashes per
  second. Crossfades and the dim reduce it but do not eliminate it. No media query covers
  photosensitivity. See [`rules.md`](rules.md).
- **LCP.** The hero sits behind an opaque panel for ~3.1s.
- **Nobody has watched it.** The arithmetic is unit-tested against this document, but the motion
  itself has never been reviewed in a browser — no browser automation was available. Treat the
  timeline table above as specified behaviour, not observed behaviour.
- **Decode warm-up is a mitigation, not a guarantee.** `img.decode()` runs for all four at
  start, but a slow *network* can still leave an asset missing at its first swap. The timeline
  is deliberately never gated on decode, so the worst case is a moment of fidelity rather than a
  held-up intro.

## Open questions

1. Should the intro run on every full page load, or home-only?
2. Should a repeat visit show anything at all, or skip straight to the page?
3. Is the ~3.1s right, or should the shuffle be shorter now that LCP is affected?
4. Given WCAG 2.3.1, should the swap rate be capped at ~3/s? That reverses the reason the
   shuffle was lengthened, so it needs a deliberate decision.
