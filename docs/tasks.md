# Tasks

Where the work stands. Short on purpose — this is a **register**, not a backlog.

> **Derived.** This file records what is in flight and nothing else. Every open question lives in
> the doc that owns it, and **those docs win** if the two disagree. See [`rules.md`](rules.md).
> Do not let a second status list grow here.

Last updated: 2026-10-18.

## In flight

**The build pass — uncommitted.** The first real page: header/nav, hero, about, process and
footer, plus the foundations they needed (IBM Plex Sans + Mono, the motion and type tokens in
`@theme`, the device primitives, the lorem sentinel). The other seven sections are held back —
each is missing the one field it cannot be rendered without; see **Blocked** below.

The scaffold `app/page.tsx` is gone. New files: `components/sections.ts` (page order, the single
source of markers and filename labels), `components/devices.tsx`, `components/placeholders.ts`,
`components/status-chip.tsx`, `components/manila-time.ts` + test, `components/site-header.tsx`,
`components/hero.tsx`, `components/about.tsx`, `components/process.tsx`,
`components/site-footer.tsx`.

Still unbuilt from the specs: scroll reveals ([`brand/motion.md`](brand/motion.md)), the process
rail's drawn trace, the CTA band, and the `26-27` season chip.

## Blocked

Each of these is a section whose required content does not exist. None can be padded honestly —
[`rules.md`](rules.md) §2.

| Section | Missing |
| --- | --- |
| CTA / Join Us | The join destination. Its content model says the CTA is required, not data-driven — [`sections/cta-join-us/README.md`](sections/cta-join-us/README.md) |
| Events | An event source or list — [`sections/events/README.md`](sections/events/README.md) |
| Projects | Project entries, and at least one image — [`sections/projects/README.md`](sections/projects/README.md) |
| Executives & Advisers | A roster and portraits. `public/officers/` is empty |
| Gallery | Photographs |
| Partners & Sponsors | Partner names and logos |
| FAQ | Answers. The section's own doc forbids an empty render |

## Next

| | Why |
| --- | --- |
| Watch the header shrink in a browser | The wordmark's fill, the shrink and the blur into the logo are measured from the font file and arithmetic, not observed — [`sections/header-nav/README.md`](sections/header-nav/README.md) |
| Write the four process descriptions | The section is four names and placeholder copy — [`sections/process/README.md`](sections/process/README.md) |
| Decide the join mechanism | Unblocks two sections at once — [`sections/cta-join-us/README.md`](sections/cta-join-us/README.md) |
| See the built page in a browser | Nothing on this page has been looked at. The clocks, the clamps and the mark's bounding box are all arithmetic — [`skills.md`](skills.md) |
| See the intro in a browser | It has only ever been verified numerically — [`intro.md`](intro.md) |
| Name someone who owns the recruitment claim | The header's status chip fills its state-word slot with `MANILA` until then — [`sections/header-nav/README.md`](sections/header-nav/README.md) |
| Name someone who owns logo re-exports | The `26-27` chip needs a manual re-export each year — [`brand/logos.md`](brand/logos.md) |
| Try `npx impeccable detect` on the CSS | Its 59 rules have never been run against this repo — [`skills.md`](skills.md) |
| Delete `components/placeholders.ts` | Every string in it is lorem. Grep `PLACEHOLDER_COPY` |

## Needs a decision

- **The join destination.** Google Form, Discord, an on-site form, a Facebook group? It is the one
  field blocking the site's only call to action. (The hero no longer has one — removed
  2026-10-18.)
  [`sections/cta-join-us/README.md`](sections/cta-join-us/README.md).
- **Deck nav vs site sections.** The deck's `Home · About Us · Service · Contact` does not match
  the twelve sections these docs specify. The footer's file listing — every section, in page
  order, under the name the page gave it — is now **built**, and it lists the two sections that
  exist. The full nav set is still open.
  [`sections/footer/README.md`](sections/footer/README.md).
- **The motif's reading order.** `PLAN BUILD DEPLOY REPEAT` or reversed; the deck disagrees with
  itself. Three docs assume the forward order, and the hero's equation band is now built in it.
  [`sections/hero/README.md`](sections/hero/README.md).
- **Does the filename label read as a device or as a typo?** `about.md` as a section heading is
  the pass's boldest bet and the one nobody has looked at. This was the doc-only version of the
  question; the page is now built, so it can be answered by looking. It is also the risk that
  grows with the footer's file listing, where nine filenames would sit together.
  [`brand/design-language.md`](brand/design-language.md).
- **How far the blueprint treatment goes on mobile.** At 375px a datasheet is mostly metadata, and
  metadata is the first thing to cut. There is no stated mobile floor yet. The built page has
  never been viewed at 375px.
- **Is a twelve-section page too long?** Gallery and Partners are the thinnest sections and both
  have a "fold this in" alternative recorded. [`sections/gallery/README.md`](sections/gallery/README.md).
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

**2026-10-17** — the build pass: header, hero, about, process and footer on real IBM Plex; the
motion and type tokens; the device primitives and the single source of page order; the lorem
sentinel; the CTA section and six others held back rather than padded; `manila-time` covered by
tests.

**2026-10-17** — the composition pass (documentation only): the page's design language and motion
vocabulary specified; two new brand docs; two new sections; every section doc brought onto the
device table; 27 → 31 documents.

**2026-10-17** — the page intro; the design system and dark-first base; 7 assets extracted from
the brand deck; the 27-document documentation set; code comments stripped to invariants and
pointers; the ponytail ruleset adopted as a project skill; the git-ownership rule; `node --test`
and the markdown link check wired up as gates; impeccable adopted for design review, its artifacts
gitignored.
