# Executives & Advisers

> **Status — draft 2 (2026-10-18).** Real portraits are in `public/officers/` (listed in
> [inventory.md](../../assets/inventory.md#officer-portraits)), and the roster is
> **`data/officers.json`** — one entry per portrait: `photo` (the exact filename), `name`,
> `position`, `group` (`executive` | `adviser`). The file is the order on the page, set by the
> chapter (2026-10-19): president, vice president, then each VP followed by their AVP — internal,
> external (`vp4rel`/`avp4rel`) — then secretary, treasurer, auditor, then tech, graphics,
> marketing and operations (`vp4ops`/`avp4ops`) as VP/AVP pairs, then the adviser. 17 executives
> and one adviser. Names and positions are filled in by the chapter (2026-10-19); a blank one
> would render as `[Name]` / `[Position]`.
>
> Each card (`sections/people/components/officer-card.tsx`) is a 4:5 frame (`object-cover
> object-top`), then `ID // name` and `ROLE // position`. The portrait-filename label described
> below is **not shown**, by decision (2026-10-18), even though every portrait exists. `alt` is
> `"<name>, <position>"`, or empty while the name is blank so a screen reader does not announce
> placeholders. Advisers keep their own group and heading; each adviser's card stands beside
> their **`bio`** (an optional roster field, 2026-10-19 — Engr. Rolito L. Mahaguay's, as supplied
> by the chapter), Body size within a 62ch measure, stacked below `sm`. The Pixie card now uses
> `public/officers/mascot.png`, a dark 3D portrait that sits on Obsidian, in place of the
> white-backed illustration.
>
> **Draft 4 (2026-10-19) — a family-tree feel, not a strict tree.** A strict tree (draft 3: tiers
> and VP → AVP branches from `level`/`branch` fields) was replaced by a looser chart that needs
> nothing but the file's order (`components/officer-chart.tsx`): the **first** executive stands
> alone and centred, a dashed drop leads to the **second**, another drop leads to a dashed rule,
> and **everyone else** fills centred, wrapping rows beneath it — five to a row at `xl`, so the
> fifteen fill three even rows. Cards are a fixed 13rem from `sm` (two to a row on phones), and
> connectors are dashed `--color-crimson` at 60%, the **Rule** form. The adviser is excluded and
> keeps its own group below. Reordering the JSON reorders the chart; no other field is needed.
>
> **Source status.** Nothing in the deck covers this section. The empty
> `public/officers/` folder in the repo shows it was planned. Everything below is a
> proposal.

## 1. Purpose

Put names and faces to the organization. For a student org, this section is a trust signal
for prospective members, partners and the university alike.

## 2. Placement and order

Home page, after [events](../events/README.md). Before [gallery](../gallery/README.md) —
who runs the chapter, then what being in it looks like.

Executives & Advisers is index marker **`03`**.

## 3. Layout

- **Two groups, visually distinct:** Executives (officers) and Advisers (faculty). Do not
  merge them into one undifferentiated wall — the roles are different, and advisers are not
  officers.
- ≥ `lg`: 4 columns. `md`: 3. < `md`: 2.
- **Uniform photo treatment is the whole design.** Every portrait the same aspect ratio
  (1:1), the same crop (head and shoulders), the same background, ideally the same frame.
  Mismatched portraits destroy this section faster than any layout choice.
- **Pillars:** *Algorithmic* (strict grid, monospace label/value metadata) and
  *Interconnected* (a grouping spine or tier band between the two groups).
- The section label is **`officers.ts`** — `.ts` because the roster is records, and because a
  typed list is exactly what a card here is. See
  [design-language.md](../../brand/design-language.md#where-the-devices-live).

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Full name | string | Yes | `TBC` |
| Position | string | Yes | `TBC` |
| Group | `executive` \| `adviser` | Yes | — |
| Portrait | 1:1 image | Yes | `public/officers/` (empty) |
| Portrait filename | string | No | Derived from the asset path |
| Term / academic year | string | No | `TBC` — `26-27` is the current chip |
| Pronouns | string | No | `TBC` |
| Contact / profile link | URL | No | `TBC` |

The deck's metadata style (`ID // PIXIE`, `ROLE // OFFICIAL MASCOT`) maps exactly here:

```
ROLE // PRESIDENT
```

That is the section's **Metadata key** device, and it is the deck's own form rather than an
import — see [design-language.md](../../brand/design-language.md#the-devices).

**The portrait filename is a second label, and it is conditional.** The adopted composition
reference labels each team member with their image's filename — `Andrii.png` — which is a strong
device and the obvious one to copy. It may only appear **when a real portrait exists at that
path**, because the label's entire claim is "this file exists". On the initials-tile fallback
below, printing `maria-santos.png` would be a lie about an asset that is not there. So: real
portrait, show the filename; fallback tile, show nothing.

**Empty state:** if portraits are unavailable, render **initials on a carbon tile** rather
than a generic silhouette. Never mix placeholder art with real photos.

**Missing fields:** a person with no portrait must still occupy a full grid cell.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Tile background | `--color-carbon` |
| Name | `--color-white` |
| Role label | `--color-light-orange`, uppercase, letter-spaced, **Mono** |
| Portrait filename | `--color-off-white` at reduced emphasis via size, **Mono** — never a faded colour |
| Initials fallback | `--color-off-white` on `--color-carbon` (16.53:1) |
| Name type | Subheader level |
| Role type | Label level |

On a light band, switch to `--color-maroon` for names and invert the label treatment —
orange labels on light fail contrast.

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Portraits | `public/officers/<name>.png` | Folder exists but is **empty** |
| Group spine | None | Inline SVG or CSS, `aria-hidden` |
| Pixie | `public/mascot/*` | Keep Pixie **out** of this section — see [mascot.md](../../brand/mascot.md#where-pixie-belongs) |

Alt text: the person's name and role — `"Maria Santos, President"`. A portrait is content
here, not decoration. Because the name and role are both visible text beside the image, the
alternative is `alt=""` on the portrait — but **pick one convention and apply it to every
card**, which is the rule the acceptance criteria check.

## 7. Interaction and states

- Mostly static. Card hover may lift or reveal a small profile link.
- The hover treatment must be identical on every card; a personal grid where one tile behaves
  differently is worse than none.
- If a person's profile is an external link (LinkedIn, GitHub), mark it as leaving the site.
- No flipping cards that hide the name behind a hover — that breaks touch and keyboard use.
- Any reveal is the shared one — [motion.md](../../brand/motion.md#the-vocabulary).

## 8. Accessibility

- Section heading `<h2>`; group headings (`Executives`, `Advisers`) `<h3>`; names `<h4>` or
  a definition list. Keep the order valid — do not skip a level.
- Every portrait needs meaningful alt text; do not use `alt="officer"`.
- If a portrait is decorative because the name is adjacent, `alt=""` is acceptable — but
  pick one convention and apply it to every card.
- Touch targets ≥ 44 px for any profile link.
- Do not rely on colour to distinguish executives from advisers — the group heading must
  carry that meaning.
- The **role label and the portrait filename are real content**, not decoration: they state a
  person's position. Unlike the section labels elsewhere, these are **not** `aria-hidden`.
  A screen reader should hear "Maria Santos, role: President".
- The filename label, where shown, is metadata about an asset and not about the person. Mark it
  `aria-hidden="true"` — "maria dash santos dot p n g" after a person's name is noise.

## 9. Acceptance criteria

- [ ] Executives and advisers are visually and structurally separate groups.
- [ ] Portraits render at one consistent aspect ratio with no stretching.
- [ ] A missing portrait renders an initials tile in the same slot size.
- [ ] Each portrait's alt text names the person and their role.
- [ ] Heading levels are sequential with no gaps.
- [ ] Group membership is conveyed by text, not colour alone.
- [ ] The portrait filename label appears only where a real portrait asset exists.
- [ ] The role label is announced by a screen reader and the filename label is not.
- [ ] Every card's hover treatment is identical.

## 10. Open questions

1. **Do portrait photos exist**, and does the org have consent to publish them?
2. Who is on the roster for the current term, and where is that list maintained?
3. Does the section show **advisers separately** (recommended) or as one combined grid?
4. Is a **profile page per person** wanted, or is a card enough?
5. Should **past terms** be archived and viewable?
6. What is the exact count of officers? The grid and its breakpoints depend on it.
7. Are pronouns collected and displayed?
8. **Is the portrait filename worth it at all?** It is the device with the least functional
   value on the page and the most literal borrow from the reference. If it reads as clutter,
   drop it and keep `ROLE //` — which is the deck's own and needs no defence.
