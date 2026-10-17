# Tasks

Where the work stands. Short on purpose — this is a **register**, not a backlog.

> **Derived.** This file records what is in flight and nothing else. Every open question lives in
> the doc that owns it, and **those docs win** if the two disagree. See [`rules.md`](rules.md).
> Do not let a second status list grow here.

Last updated: 2026-10-17.

## In flight

Nothing. The page intro, the design system and this documentation set are committed. The
scaffold at `app/page.tsx` has not been replaced yet.

## Next

| | Why |
| --- | --- |
| Build the header/nav, then the hero | The first real sections. Ten specs are ready at [`sections/`](sections/hero/README.md) |
| Swap Geist for IBM Plex Sans | The brand typeface has never actually loaded — [`brand/typography.md`](brand/typography.md) |
| See the intro in a browser | It has only ever been verified numerically — [`intro.md`](intro.md) |
| Get a headline for the hero | The site's most important copy, and the deck supplies none — [`sections/hero/README.md`](sections/hero/README.md) |
| Name someone who owns logo re-exports | The `26-27` chip needs a manual re-export each year — [`brand/logos.md`](brand/logos.md) |

## Needs a decision

- **Deck nav vs site sections.** The deck's `Home · About Us · Service · Contact` does not match
  the ten sections these docs specify. [`sections/header-nav/README.md`](sections/header-nav/README.md).
- **WCAG 2.3.1 on the intro.** The 55ms opening shuffle may audit above three flashes per second,
  and `prefers-reduced-motion` does not protect photosensitive users. Changing it reverses the
  reason the shuffle exists, so it needs a deliberate call — see [`rules.md`](rules.md).
- **Should the intro run on every full page load, or home-only?** Currently every load.
  [`intro.md`](intro.md).

## Accepted risks

Listed in full under *Known accepted risks* in [`rules.md`](rules.md). Not repeated here. The one
with a trap attached:

- **`braces`** — 5 high advisories that are all one transitive advisory in the lint chain
  (`braces → micromatch → fast-glob → @next/eslint-plugin-next → eslint-config-next`). Nothing in
  the runtime bundle is affected. **The advertised fix is `npm audit fix --force`, which
  downgrades `eslint-config-next` to 14.2.35 and takes the lint toolchain off the Next 16 line.
  Do not run it.** Wait for upstream.

## Done

**2026-10-17** — the page intro; the design system and dark-first base; 7 assets extracted from
the brand deck; the 26-document documentation set; code comments stripped to invariants and
pointers; the ponytail ruleset adopted as a project skill; `node --test` and the markdown link
check wired up as gates.
