# Architecture

## Stack

| Piece | Version | Notes |
| --- | --- | --- |
| Next.js | 16.4.1 | App Router, Turbopack |
| React | 19.3.0 | React Compiler enabled |
| Tailwind | v4 | Configured **in CSS**, via `@theme` — there is no `tailwind.config.js` |
| GSAP | 3.15 | Core only, plus `@gsap/react` 2.1.2. No plugins |
| Lenis | 1.3 | Smooth scrolling over the native scroll; off under reduced motion — see [`brand/motion.md`](brand/motion.md) |
| TypeScript | 5 | `strict` |
| Fonts | `next/font` | **IBM Plex Sans + Mono**, mapped onto `--font-sans` / `--font-mono` — see [`brand/typography.md`](brand/typography.md) |

`next.config.ts` turns on `cacheComponents`, `partialPrefetching` and `reactCompiler`, and routes
`*.css` through `@tailwindcss/turbopack`. This Next.js version is not the one in most training
data; the bundled reference is `node_modules/next/dist/docs/`. Read it before writing app code.

## File map

```
.github/
  dependabot.yml      Grouped dependency PRs, weekly for npm
  workflows/
    gitleaks.yml      Credential scan on push and PR
.opencode/
  skills/ponytail/    The adopted ponytail ruleset — docs/rules.md is still the contract
app/
  layout.tsx          Real. Fonts, metadata, INTRO_SCRIPT, <PageIntro />, dark-first body
  page.tsx            The home page: header, hero, about, process, footer
  globals.css         The design system: @theme tokens (colour, motion, type), :root, body, .bracket, the whole intro
components/
  common/
    site-header.tsx   Masthead: full-width wordmark that shrinks on scroll and becomes the mono logo. "use client"
    site-footer.tsx   Lockup, Connect icons, copyright bar; sticky beneath <main>. Reads the year behind "use cache"
    footer-reveal.tsx Scrolls the footer fully into view on keyboard focus. "use client"
    page-intro.tsx    The brand splash. "use client"
    smooth-scroll.tsx Starts Lenis, unless reduced motion. "use client"
  ui/
    devices.tsx       Label, Marker, Rule — the design-language primitives
    reveal.tsx        The viewport reveal for [data-reveal] descendants. "use client"
    status-chip.tsx   The header's clock. "use client" — currently unused
    manila-clock.tsx  Live Manila clock (seconds) — currently unused
data/
  officers.json       The roster: photo filename, name, position, group, optional bio — in page order
  events.json         The event tickets: name, type, description, date, time, venue — in page order
  partners.json       The partner tiles: name, logo file, intrinsic size, tier
  gallery.json        The gallery photos: file, size, fit, caption, alt text — in page order
lib/
  sections.ts         Page order. The single source of markers and filename labels — JSX-free
  contact.ts          The chapter's email and its Gmail compose link, shared by Partners and the footer
  placeholders.ts     Every lorem string on the site, in one place — delete when real copy lands
  manila-time.ts      The status chip's clock, read in Asia/Manila — JSX-free
  manila-time.test.ts
  intro-timeline.ts   Its timings and shuffle maths — JSX-free, so `node --test` can import it
  intro-timeline.test.ts
  roller.ts           Rolling-polygon geometry for the process cards — JSX-free
  roller.test.ts
  barcode.ts          Seeded decorative barcode widths for the event tickets — JSX-free
  barcode.test.ts
sections/
  hero/hero.tsx       Glow mark, name and phrase. Holds the page's only <h1> (visually hidden)
  hero/components/hero-scroll.tsx  The pinned scroll sequence. "use client"
  about/about.tsx     Marker 01 / about.md: the mark beside Vision, then the process cards
  events/events.tsx
  people/people.tsx   Officers as a centred chart (components/officer-chart.tsx), advisers, the Pixie card
  gallery/gallery.tsx Sticky headline with polaroid frames scrolling over it
  partners/partners.tsx
  join/join.tsx
docs/                 This documentation set, beginning at docs/README.md
public/
  logos/              5 canonical logo variants
  intro/              4 derived 576px WebP assets
scripts/
  check-links.mjs     Markdown link and anchor check — `npm run check:links`
```

The page is assembled in `app/page.tsx` from one component per section, in the documented order.
Every section's marker and filename label comes from `components/sections.ts` rather than being
typed into the section, so page order has exactly one home — see
[`brand/design-language.md`](brand/design-language.md#implementation).

## Rendering model

- **Server by default.** `app/layout.tsx` is a server component. Keep it that way.
- **Client boundaries at leaves.** `components/page-intro.tsx`, `components/ui/status-chip.tsx`
  and `components/site-header.tsx` opt into `"use client"`, each wrapping only itself. Because they are client components with no server-only imports they also
  server-render their markup, which is what lets the intro paint before hydration — that is a
  requirement, not a detail. Do not hide the intro behind `next/dynamic` with `ssr: false`.
- **React Compiler is on.** Do not reach for `useMemo` / `useCallback` to control render cost;
  the compiler handles memoisation. Reach for them only when identity matters semantically.
- **Cache Components are on.** The default is aggressively cached and this is handled for you.
  Anything time- or request-dependent is the exception and needs a deliberate opt-in — see
  `08-caching.md` in the bundled docs. The footer's copyright year is the working example:
  Next 16 refuses to prerender a bare `new Date()`, so the year is read inside a `"use cache"`
  function in `components/site-footer.tsx`.

## Where the intro lives, and why

`<PageIntro />` sits in the **root layout**, so it plays on every full page load, not just
`/`. That was a deliberate choice for a single-page-first site, and it is a one-line change
to move it into `app/page.tsx`. The behaviour and the trade-off are in
[`intro.md`](intro.md).

The three-file split is the design: markup and the state flag in `layout.tsx`, presentation in
`globals.css`, motion in `page-intro.tsx`. They meet only at the `data-intro` attribute.

## Where things go

| You are adding… | Put it in |
| --- | --- |
| A colour or type token | `@theme` in `app/globals.css`, then document it in `brand/` |
| A motion token | `@theme` in `app/globals.css`, then in [`brand/motion.md`](brand/motion.md) |
| A new composition device | [`brand/design-language.md`](brand/design-language.md) **first** — device, form, and which section owns it |
| A one-off section style | `app/globals.css`, alongside the intro block |
| A test | A `*.test.ts` beside the JSX-free logic it covers, in `lib/` — [`skills.md`](skills.md) |
| A page section | A doc in `docs/sections/<name>/` **first**, then `sections/` |
| An asset | A row in [`assets/inventory.md`](assets/inventory.md) first, then `public/` |
| A derived asset | A generator, plus the rules in [`skills.md`](skills.md) |

## What is deliberate

- **No CSS modules, no styled-components.** Tailwind utilities for layout and spacing; plain CSS
  in `globals.css` only where a shared class is genuinely needed — the intro, and the `.bracket`
  device (its brackets must be pseudo-elements so they stay out of the accessible name).
- **No state library, no router state.** Nothing so far needs it.
- **No test framework.** `node --test` ships with Node and strips types itself, so unit tests
  cost no dependency. The gates are in [`rules.md`](rules.md).
- **No component tests.** Nothing renders a component in isolation, and adding a DOM harness is
  not worth it. Components are covered by manual inspection — which is why the whole page is
  recorded as unviewed in a browser, in [tasks.md](tasks.md) and
  [`rules.md`](rules.md#known-accepted-risks). JSX-free logic (`intro-timeline.ts`,
  `manila-time.ts`) gets real tests instead.

## Open questions

1. The real home page now exists; does the intro stay global or become home-only?
2. Does the site stay a single page, or gain routes? The header nav documented in
   [`sections/header-nav/README.md`](sections/header-nav/README.md) implies routes that do not
   exist yet.
3. Is a data layer needed, or does content stay hard-coded?
