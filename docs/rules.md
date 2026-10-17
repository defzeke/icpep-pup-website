# Rules

Non-negotiables for anyone — human or agent — changing this repo. Rationale lives in the
linked doc, not here.

## Approach

Adopted from [Ponytail](https://github.com/DietrichGebert/ponytail) (MIT), and loaded as a
project skill from [`.opencode/skills/ponytail/SKILL.md`](../.opencode/skills/ponytail/SKILL.md).

Take the first rung that fully works: **does it need to exist → already in this codebase → the
standard library or a platform feature → an installed dependency → one line → the minimum that
works.** Be lazy about the solution, never about the change: finish the callers, the fixtures and
the docs the change touches. No abstraction, wrapper, option, config or "for later" code nobody
asked for. Deletion beats addition, and the shortest working diff wins — once you know everything
it must touch.

**Never cut:** validation at trust boundaries, error handling that prevents data loss, security,
accessibility, or anything the user asked for.

## Contracts

1. **The docs are the contract.** If a doc and the code disagree, one of them is a bug. Fix
   the wrong one in the same change. [`tasks.md`](tasks.md) is **derived** — it records only
   what is in flight, and the docs it links to win if they disagree.
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
    `// Contract: docs/intro.md` are the preferred form. There is exactly one other permitted
    form, for a deliberate deferral:

    ```
    shortcut: <the limit>, <when to upgrade>
    ```

    Name the condition that ends it, so "later" can be found again.
12. **One GSAP entry point.** `useGSAP` from `@gsap/react`, GSAP core only, no plugins.
    `useGSAP` gives the auto-reverting `gsap.context()` that React 19 StrictMode needs.
13. **Do not edit the `AGENTS.md` Next.js block.** `next dev` re-adds it; removing it only
    recreates an uncommitted change.
14. **Branchy logic leaves a test behind.** A branch, a loop, a parser, money or security logic
    gets one small test. Trivial changes need none. Keep such logic in a `.ts` file with no JSX
    in it: Node strips types but **not JSX**, so the test runner cannot import a `.tsx` file.
    `node --test`, no framework — see [`skills.md`](skills.md).
15. **Security tooling reports; it does not block.** `npm audit` and the gitleaks workflow are
    advisory. There is no on-call here, and a gate nobody can fix is a gate that gets disabled.

## Before you commit

```bash
npx tsc --noEmit
npm run lint
npm test
npm run check:links
npm run build
```

All five pass on `main`. There is no test framework — `npm test` is `node --test` over
`*.test.ts` — and `check:links` is the markdown link and anchor check. Beyond these, the
verification procedures in [`skills.md`](skills.md) apply to whatever you touched.

## Known accepted risks

- **WCAG 2.3.1.** The intro's shuffle peaks at 55ms per swap, well above the guideline's three
  flashes per second. Crossfades and the 55% dim reduce it; they do not eliminate it. There is
  **no media query for photosensitivity**, so `prefers-reduced-motion` does not cover these
  users. Do not speed the shuffle up further without revisiting this.
- **LCP.** The intro is an opaque overlay for ~3.1s, so the hero's LCP moves behind the
  curtain. Measure before adding time to it.
- **`braces` — 5 high advisories.** All one transitive advisory in the lint chain
  (`braces → micromatch → fast-glob → @next/eslint-plugin-next → eslint-config-next`). Nothing
  in the runtime bundle is affected. **The only advertised fix, `npm audit fix --force`,
  downgrades `eslint-config-next` to 14.2.35, taking the lint toolchain off the Next 16 line.
  Do not run it.** Revisit when upstream moves, not before.
- **The intro has never been seen in a browser.** No browser automation was available, so its
  timeline is verified numerically and by
  [`intro-timeline.test.ts`](../components/intro-timeline.test.ts) — not by eye. Treat any change
  to its motion as unverified until someone watches it.
