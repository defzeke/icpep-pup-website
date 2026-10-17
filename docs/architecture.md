# Architecture

## Stack

| Piece | Version | Notes |
| --- | --- | --- |
| Next.js | 16.4.1 | App Router, Turbopack |
| React | 19.3.0 | React Compiler enabled |
| Tailwind | v4 | Configured **in CSS**, via `@theme` — there is no `tailwind.config.js` |
| GSAP | 3.15 | Core only, plus `@gsap/react` 2.1.2. No plugins |
| TypeScript | 5 | `strict` |
| Fonts | `next/font` | Geist is what loads today — see [`brand/typography.md`](brand/typography.md) |

`next.config.ts` turns on `cacheComponents`, `partialPrefetching` and `reactCompiler`, and routes
`*.css` through `@tailwindcss/turbopack`. This Next.js version is not the one in most training
data; the bundled reference is `node_modules/next/dist/docs/`. Read it before writing app code.

## File map

```
app/
  layout.tsx          Real. Fonts, metadata, INTRO_SCRIPT, <PageIntro />, dark-first body
  page.tsx            Still the create-next-app scaffold — not the real home page
  globals.css         The design system: @theme tokens, :root, body, the whole intro
components/
  page-intro.tsx      The brand splash. The only "use client" component
docs/                 This documentation set
public/
  logos/              5 canonical logo variants
  intro/              4 derived 576px WebP assets
```

`app/page.tsx` is untouched boilerplate. It sets its own backgrounds, so the dark-first
`body` does not show through it. Replacing it is the start of the real build.

## Rendering model

- **Server by default.** `app/layout.tsx` is a server component. Keep it that way.
- **One client boundary, at a leaf.** `components/page-intro.tsx` is the only code that opts
  into `"use client"`, and it wraps only itself. Because it is a client component with no
  server-only imports it also server-renders its markup, which is what lets the intro paint
  before hydration — that is a requirement, not a detail. Do not hide it behind
  `next/dynamic` with `ssr: false`.
- **React Compiler is on.** Do not reach for `useMemo` / `useCallback` to control render cost;
  the compiler handles memoisation. Reach for them only when identity matters semantically.
- **Cache Components are on.** The default is aggressively cached and this is handled for you.
  Anything time- or request-dependent is the exception and needs a deliberate opt-in — see
  `08-caching.md` in the bundled docs.

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
| A one-off section style | `app/globals.css`, alongside the intro block |
| A page section | A doc in `docs/sections/<name>/` **first**, then `components/` |
| An asset | A row in [`assets/inventory.md`](assets/inventory.md) first, then `public/` |
| A derived asset | A generator, plus the rules in [`skills.md`](skills.md) |

## What is deliberate

- **No CSS modules, no styled-components.** Tailwind utilities for layout and spacing; plain CSS
  in `globals.css` only where a component owns a real micro-animation (the intro).
- **No state library, no router state.** Nothing so far needs it.
- **No test framework.** The gates are `tsc`, `eslint` and `next build`
  ([`rules.md`](rules.md)).

## Open questions

1. When the real home page replaces the scaffold, does the intro stay global or become
   home-only?
2. Does the site stay a single page, or gain routes? The header nav documented in
   [`sections/header-nav/README.md`](sections/header-nav/README.md) implies routes that do not
   exist yet.
3. Is a data layer needed, or does content stay hard-coded?
