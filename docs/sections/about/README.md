# About

> **Source status.** The deck supplies real copy for this section: the **Vision**
> statement and the **Theme breakdown** (pages 2 and 3, marked `02`/`03`). How much of
> that is public-facing is undecided.

## 1. Purpose

Explain what the org is and why it exists, in terms a first-time visitor can follow. This is
where the hardware/software duality — the whole identity — becomes an idea rather than a
visual style.

## 2. Placement and order

Home page, after [hero](../hero/README.md). Before [process](../process/README.md) — what the
org is, then how it works.

About is the **first numbered section**: its index marker is `01`.

## 3. Layout

- ≥ `lg`: two columns — copy left, visual right.
- < `lg`: stacked, copy first. Text is the point of this section; never lead mobile with art.
- Long-form copy should be broken by at least one visual element; a wall of text on Obsidian
  reads as a blank slab.
- **Built at `lg` as** a 2:1 grid: label, marker, heading, the vision, a **Rule**, one
  supporting paragraph on the left; `icpep-mark.png` on the right. Below `lg` it stacks copy
  first. The Rule is what breaks the copy — the mark sits in a column of its own and never
  interrupts reading.
- **Pillars:** *Algorithmic* (structured, hierarchical copy; the section label and index marker)
  and *Atmospheric* (obsidian base — the "deep base" the identity is built on).
- The section is labelled **`about.md`** and marked **`01`**, per
  [design-language.md](../../brand/design-language.md#where-the-devices-live). Both sit at the
  top of the section, above the heading — metadata before content is the whole idiom.
- **The vision statement is not numbered internally.** Numbering belongs to sequences that
  carry real order — the four [process](../process/README.md) steps, an event list, a project
  index. The vision is a single sentence, and numbering its clauses would put a second
  sequence inside a section that already has an index marker.

## 4. Content and copy

### Available from the deck (verbatim)

> **Vision** — To establish a definitive, high-precision visual identity that embodies the
> true duality of Computer Engineering—seamlessly integrating physical hardware architecture
> with structured software logic.

The deck labels this block both "Vision" and "Tone" and repeats it identically under each.
It is the only mission-like statement in the source material.

### Content model

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `about.md` | Yes | Proposed |
| Index marker | `01` | Yes | Proposed |
| Section heading | string | Yes | `TBC` — "About" per nav, "About Us" per deck |
| Vision statement | long text | Yes | Deck page 2 |
| Supporting paragraph(s) | long text | No | Not in the deck |
| Pillar list | 4 × {name, description} | No | Deck page 3 |
| Statistic(s) | n × {label, value} | No | `MISSING` — no numbers in the deck |

The deck's four pillars (Isometric Geometry, Interconnected, Atmospheric, Algorithmic) are
design rationale written for the graphics team. They can be surfaced publicly as a
four-item grid, but that is a **content decision**, not a given. If they are shown, each name
goes through the **Metadata key** device (`PILLAR // ISOMETRIC GEOMETRY`) rather than being set
as a plain list — that is the deck's own form for a labelled field.

**Empty state:** the vision statement is required, so this section cannot be empty.

The **supporting paragraph is currently placeholder text**, from
[`lib/placeholders.ts`](../../../lib/placeholders.ts) — the field is optional, so
deleting it is as valid as replacing it.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-obsidian` or `--color-carbon` (alternating with neighbours) |

**Built on `--color-carbon`** — the hero above it is Obsidian. A Rule on a Carbon band is
invisible in `--color-carbon`, so this section's Rule uses the **`burgundy` tone**
(`components/devices.tsx`), which is the documented alternative. Process, one band down, is back
on Obsidian and uses the default.
| Heading | `--color-white` |
| Body | `--color-off-white` |
| Filename label / index marker | `--color-light-orange`, Label level, **Mono** |
| Pillar labels / markers | `--color-light-orange`, **Mono** |
| Section heading type | Title level |
| Body type | Body level |

If a light variant is used instead, switch to the maroon family — maroon on off-white is
9.14:1, and orange on light fails. See
[../../brand/color-palette.md](../../brand/color-palette.md#what-this-means-in-practice).
A light band would also need the label and marker re-coloured; orange metadata on off-white is
2.82:1 and fails.

## 6. Required assets

| Asset | Path | Use |
| --- | --- | --- |
| Mark | `public/logos/icpep-mark.png` | Secondary visual, not the wordmark lockup |
| Pixie | `public/mascot/pixie-illustration.png` | Optional — see [mascot.md](../../brand/mascot.md#where-pixie-belongs) |
| Pillar icons | **MISSING** | No icon set exists |

No new assets. The label, the marker and any rule are text and CSS — see
[design-language.md](../../brand/design-language.md#implementation).

**Caveat:** `pixie-illustration.png` has a **white background**. On Obsidian it will read as
a white rectangle unless a container or cutout is used. Do not place it bare on dark.

## 7. Interaction and states

- Largely static; this is a reading section, and it is the page's first rest after the hero.
- If the pillars are interactive (expand on click), they must be keyboard-operable and
  must not hide content that a screen reader needs.
- Scroll-in reveal is the shared one — 24px, 0.06s stagger, exactly as
  [motion.md](../../brand/motion.md#the-vocabulary) specifies, and content is fully visible when
  motion is reduced. Do not invent a second reveal here.

## 8. Accessibility

- Heading level `<h2>` (the hero owns `<h1>`).
- Body text at Body level must clear 4.5:1 — off-white on Obsidian is 17.31:1, so the
  constraint is about **size and line length**, not colour.
- Keep line length to ~60–75 characters; full-width paragraphs on a wide monitor are a
  readability failure even at high contrast.
- If pillar names are rendered uppercase and letter-spaced, keep them ≥ 12 px.
- The filename label and index marker are decorative. Mark both `aria-hidden="true"` — a screen
  reader announcing "about dot m d" before the heading is noise, and the heading already names
  the section.

## 9. Acceptance criteria

- [ ] Vision statement appears verbatim, with its em-dashes intact.
- [ ] `<h2>` is the section's heading level; no `<h1>` here.
- [ ] No maroon-family text is used on the dark base.
- [ ] Paragraph line length stays within ~75 characters at desktop width.
- [ ] Text precedes art in the mobile DOM order.
- [ ] Any scroll animation degrades to fully visible content under reduced motion.
- [ ] The section label reads `about.md` and the index marker reads `01`.
- [ ] The label and marker are not announced by a screen reader.
- [ ] Exactly one numbering sequence is visible in the section.

## 10. Open questions

1. **Is the vision statement public-facing?** It is written for the graphics team; confirming
   it belongs on the site is a prerequisite for this section. **Built with it in place** — it is
   the section's only real copy, and the alternative was a section with no content at all. If the
   verdict is no, this section has nothing to say and should be withdrawn, not padded.
2. Should the **four pillars** be shown to visitors, or kept as internal design rationale?
3. Are there **statistics** to show (members, years active, projects)? None appear in the
   deck, and a numbers row is the usual way this section earns attention.
4. Is there a **mission** statement (distinct from the vision)?
5. Who signs off on About copy?
6. Is Pixie welcome this high on the page, given she competes with the hero's glow mark?
7. **Does `about.md` read as a filename or as a typo** to a visitor who has never seen the
   reference site? This is the device's biggest risk, and it needs a verdict from someone
   looking at it rather than reasoning about it.
