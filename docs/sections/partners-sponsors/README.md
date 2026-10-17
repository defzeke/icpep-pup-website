# Partners / Sponsors

> **Source status.** Nothing in the deck covers this section. Everything below is a
> proposal.

## 1. Purpose

Signal institutional backing. For a student organization, partners and sponsors are
evidence that the org is taken seriously by the university and industry — which is why the
section should feel restrained rather than promotional.

## 2. Placement and order

Home page, after [gallery](../gallery/README.md). Before
[faq](../faq/README.md) when it is rendered, otherwise [cta-join-us](../cta-join-us/README.md).

Partners / Sponsors is index marker **`05`**.

## 3. Layout

- Logo wall: ≥ `lg` 5–6 per row, `md` 4, < `md` 2–3.
- Reserve a **fixed cell** for every logo (e.g. 160 × 80) and fit each logo inside it with
  padding. Cells are what make a logo wall look designed; unbounded logos never align.
- **Pillars:** *Interconnected* (traces from a central node out to each partner) and
  *Algorithmic* (a strict grid of equal cells).
- If tiers exist, separate them with headings rather than quality — a "Platinum" row that
  is visually louder than a "Community" row is fine, but both must be readable.
- The section label is **`partners.json`** — records, like `events.json`. See
  [design-language.md](../../brand/design-language.md#where-the-devices-live).
- **This section is deliberately the quietest on the page.** It sits between the gallery and
  the FAQ, and it has the least to say. One label, one grid, one rule under the label. Resist
  the reference site's density here: a studio showing its clients is doing a different job from
  an org listing its backing.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `partners.json` | Yes | Proposed |
| Index marker | `07` | Yes | Proposed |
| Partner name | string | Yes | `TBC` |
| Logo | SVG/PNG, transparent | Yes | `MISSING` |
| Tier / relationship | string | No | `TBC` |
| Website URL | URL | No | `TBC` |
| Description | short text | No | `TBC` |

**Empty state:** if no partners are confirmed, **do not render the section**. An empty logo
wall is worse than no wall.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-carbon` (alternating band) |
| Cell surface | `--color-obsidian` |
| Partner logos | Presented in their own brand colours, or uniformly white/mono on dark |
| Filename label / index marker | `--color-light-orange`, Label level, **Mono** |
| Tier heading | Label level, uppercase, letter-spaced, `--color-light-orange`, **Mono** |
| Hover ring | `--color-crimson` |

**On logo treatment:** third-party logos vary wildly in weight and colour. Two honest
options — display them as supplied (respects each brand, looks messier), or apply a uniform
monochrome treatment (looks far cleaner, but alters other people's marks). Monochrome
treatment of a partner logo usually requires permission. **Ask before doing it.**

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Partner logos | `public/partners/<slug>.svg` | Preferred SVG; **none exist yet** |
| University marks | `public/partners/...` | If PUP marks are used, they carry their own usage rules |

No new assets for the devices — the label and rule are text and CSS.

Alt text: the partner's name. If the name is also visible as text in the cell, use `alt=""`
to avoid the screen reader announcing it twice.

## 7. Interaction and states

- If a partner has a URL, the logo becomes a link with a visible hover and focus state.
- If there is no URL, render the logo as a non-interactive image — do not make a dead link.
- External links: `rel="noopener noreferrer"`.
- No rotation or carousel for this section (a hard rule, not a preference): a carousel makes
  partners invisible at any given moment and is a well-known usability failure. This is now a
  site-wide rule — see [motion.md](../../brand/motion.md#not-allowed).

## 8. Accessibility

- Section heading `<h2>`; tier headings `<h3>`.
- Every logo link needs an accessible name — `aria-label="Visit <partner> website"` when the
  logo carries no text.
- Logos that are pure decoration beside a visible text name should be `alt=""`.
- Ensure logos remain legible against their cell at every breakpoint; a thin grey logo on
  Obsidian can drop below perceptible contrast even though it is not text.
- The filename label and index marker are decorative — `aria-hidden="true"`.

## 9. Acceptance criteria

- [ ] Every logo sits inside a uniform cell and is never stretched.
- [ ] A partner with no URL renders as an image, not a dead link.
- [ ] External links carry `rel="noopener noreferrer"` and have accessible names.
- [ ] The section is not rendered when the partner list is empty.
- [ ] No carousel or auto-rotation exists.
- [ ] Tier membership is conveyed by headings, not colour alone.
- [ ] The section carries no device beyond its label, marker and one rule.

## 10. Open questions

1. **Who are the partners and sponsors**, and what are the tiers?
2. **Do we have written permission** to display each third-party logo, and may we recolour
   it? This is a legal question, not a design one.
3. Are partner logos available as **SVG**? Raster logos on a dark background will look soft.
4. Is there a **sponsorship programme** (levels, benefits) that deserves its own page, in
   which case this section becomes a summary linking out?
5. Should the university (PUP) appear as a partner, and are its marks licensed for use here?
6. **Is a twelve-section page too long,** and is this the section to cut? It is the thinnest
   content on the page and the one whose absence would cost the least — but it is also the only
   evidence of institutional backing, so the answer depends on whether any partners exist yet.
