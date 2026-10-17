# ICpEP SE – PUP Manila — Website Documentation

Documentation for the ICpEP SE – PUP Manila website, derived from the organization's
brand guidelines deck (`website assets.pdf`, 10 pages, 1440 × 817.92 pt).

Everything here is organised on two axes:

- **`brand/`** — the design system: a single source of truth for colour, type, logo and mascot.
- **`sections/`** — one folder per website section, each written against the same template.

Everything else is about the repo itself: how it is built, what has been built, and the rules
for changing it.

**New here?** Read [`rules.md`](rules.md), then [`architecture.md`](architecture.md), then
[`skills.md`](skills.md) for the procedures.

## Index

### Project

| Doc | Covers |
| --- | --- |
| [rules.md](rules.md) | The non-negotiables, and the accepted risks |
| [architecture.md](architecture.md) | Stack, file map, rendering model, where things go |
| [skills.md](skills.md) | Repeatable procedures: regenerate assets, add a token, add a section, verify |
| [intro.md](intro.md) | The brand splash: states, timeline, failure modes, assets |
| [glossary.md](glossary.md) | Every term this repo uses, in the sense this repo means it |

### Brand

| Doc | Covers |
| --- | --- |
| [brand/overview.md](brand/overview.md) | Vision, tone, audience, why the identity is "dual" |
| [brand/theme.md](brand/theme.md) | "Silicon and Syntax" and the four visual pillars |
| [brand/moodboard.md](brand/moodboard.md) | Reference work and what to take from it |
| [brand/color-palette.md](brand/color-palette.md) | 12 colours, roles, token names, contrast data |
| [brand/typography.md](brand/typography.md) | IBM Plex Sans, the type scale, and what actually loads today |
| [brand/logos.md](brand/logos.md) | Logo variants, usage rules, what not to do |
| [brand/mascot.md](brand/mascot.md) | Pixie, the official mascot |

### Assets

| Doc | Covers |
| --- | --- |
| [assets/inventory.md](assets/inventory.md) | Every asset: source page, pixel size, repo path, alt text |
| [assets/templates.md](assets/templates.md) | Canva templates, post dimensions, shared Drive |

### Sections

| Section | Doc |
| --- | --- |
| Header / navigation | [sections/header-nav/README.md](sections/header-nav/README.md) |
| Hero | [sections/hero/README.md](sections/hero/README.md) |
| About | [sections/about/README.md](sections/about/README.md) |
| Events | [sections/events/README.md](sections/events/README.md) |
| Projects / Build Showcase | [sections/projects/README.md](sections/projects/README.md) |
| Executives & Advisers | [sections/executives-advisers/README.md](sections/executives-advisers/README.md) |
| Gallery | [sections/gallery/README.md](sections/gallery/README.md) |
| Partners / Sponsors | [sections/partners-sponsors/README.md](sections/partners-sponsors/README.md) |
| CTA / Join Us | [sections/cta-join-us/README.md](sections/cta-join-us/README.md) |
| Footer | [sections/footer/README.md](sections/footer/README.md) |

## How to use this

- **Changing anything?** [`rules.md`](rules.md) first. It is short, and it is the contract.
- **Building a section?** Start at [`sections/_template.md`](sections/_template.md), then read
  that section's doc. Every section doc uses the same ten headings, so they read the same way.
  The checklist is in [`skills.md`](skills.md).
- **Need a colour or font size?** Never invent one. Take it from `brand/` and reference the
  token name, not the raw hex.
- **Adding an asset?** Add a row to `assets/inventory.md` first, then drop the file in
  `public/`.
- **Unfamiliar word?** [`glossary.md`](glossary.md).

## Two rules for contributors

1. **The docs are the contract.** If a doc and the code disagree, one of them is a bug —
   fix it in the same change.
2. **Unspecified is written down, not guessed.** The source deck is a *visual* guide — it says
   almost nothing about page structure, copy or data. Docs carry an **Open questions** section
   for exactly that. Do not fill a gap with a guess; record it as a question instead.

## Provenance and honesty

- Facts marked as coming from the deck are traceable to a specific page number.
- Facts marked as *derived* (for example contrast ratios, or pixel dimensions) were
  measured, and the method is stated.
- Everything else is a proposal. Proposals are labelled as such and listed under
  **Open questions** so they can be accepted or rejected.

> **Note on the source.** The deck's own numbering is non-continuous: it jumps `03` → `05`
> and `08` → `10`, with no `04` and no `09` page. Nothing was omitted here — those pages
> do not exist in the source.
