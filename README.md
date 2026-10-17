# ICpEP SE – PUP Manila

The website for the PUP Manila chapter of the **Institute of Computer Engineers of the
Philippines – Student Edition**, built from the organization's brand guidelines deck.

> **Status: early.** The design system, the page intro and the documentation are in place. The
> page content is not — `app/page.tsx` is still the `create-next-app` scaffold.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm test` | Unit tests — `node --test`, no framework |
| `npm run check:links` | Markdown link and anchor check |
| `npx tsc --noEmit` | Type check |

## Documentation

Start at **[docs/README.md](docs/README.md)**.

- **[docs/rules.md](docs/rules.md)** — the non-negotiables. Read this one first.
- **[docs/architecture.md](docs/architecture.md)** — stack, file map, rendering model.
- **[docs/skills.md](docs/skills.md)** — repeatable procedures: regenerate assets, add a token,
  add a section, add a test, verify a change.
- **[docs/intro.md](docs/intro.md)** — the brand splash: states, timeline, failure modes.
- **[docs/tasks.md](docs/tasks.md)** — where the work stands.
- **[docs/brand/overview.md](docs/brand/overview.md)** — colour, type, logo, mascot, theme.
- **[docs/sections/hero/README.md](docs/sections/hero/README.md)** — one doc per page section.

## Security

Advisory, never blocking — see [docs/rules.md](docs/rules.md) §15.

- `npm audit --audit-level=high` for dependency advisories. It is currently red on one upstream
  advisory, and the fix it advertises would break the build. Read the `braces` note in
  [docs/rules.md](docs/rules.md) **before** running anything with `--force`.
- Dependabot opens grouped dependency PRs weekly.
- A gitleaks workflow scans commits for credentials.

## What exists

| Path | |
| --- | --- |
| `app/layout.tsx` | Real — fonts, metadata, and the inline script that arms the intro |
| `app/globals.css` | Real — brand tokens, dark-first base, the whole intro |
| `components/page-intro.tsx` | Real — the brand splash |
| `public/logos/`, `public/intro/` | Real — canonical brand assets and derived intro assets |
| `app/page.tsx` | **Still the scaffold.** The real home page is not built |

## Source of truth

Assets and rules come from `website assets.pdf`, the organization's brand guidelines deck
(10 pages, 1440 × 817.92 pt). Where the deck is silent, the gap is recorded as an open question
rather than guessed at.

Third-party mood-board imagery is referenced by URL only, never copied into this repo.
