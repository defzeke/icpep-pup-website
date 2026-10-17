# About

> **Source status.** The deck supplies real copy for this section: the **Vision**
> statement and the **Theme breakdown** (pages 2 and 3, marked `02`/`03`). How much of
> that is public-facing is undecided.

## 1. Purpose

Explain what the org is and why it exists, in terms a first-time visitor can follow. This is
where the hardware/software duality — the whole identity — becomes an idea rather than a
visual style.

## 2. Placement and order

Home page, after [hero](../hero/README.md). Before [events](../events/README.md) — the
visitor should know what the org is before being shown what it does.

## 3. Layout

- ≥ `lg`: two columns — copy left, visual right.
- < `lg`: stacked, copy first. Text is the point of this section; never lead mobile with art.
- Long-form copy should be broken by at least one visual element; a wall of text on Obsidian
  reads as a blank slab.
- **Pillars:** *Algorithmic* (structured, hierarchical copy; numbering motif) and
  *Atmospheric* (obsidian base — the "deep base" the identity is built on).
- A **numbered marker** (`01`, `02`, `03`…) is in-theme here and pairs with the vision
  statement's three-clause structure.

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
| Section heading | string | Yes | `TBC` — "About" per nav, "About Us" per deck |
| Vision statement | long text | Yes | Deck page 2 |
| Supporting paragraph(s) | long text | No | Not in the deck |
| Pillar list | 4 × {name, description} | No | Deck page 3 |
| Statistic(s) | n × {label, value} | No | `MISSING` — no numbers in the deck |

The deck's four pillars (Isometric Geometry, Interconnected, Atmospheric, Algorithmic) are
design rationale written for the graphics team. They can be surfaced publicly as a
four-item grid, but that is a **content decision**, not a given.

**Empty state:** the vision statement is required, so this section cannot be empty.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-obsidian` or `--color-carbon` (alternating with neighbours) |
| Heading | `--color-white` |
| Body | `--color-off-white` |
| Pillar labels / markers | `--color-light-orange` |
| Section heading type | Title level |
| Body type | Body level |

If a light variant is used instead, switch to the maroon family — maroon on off-white is
9.14:1, and orange on light fails. See
[../../brand/color-palette.md](../../brand/color-palette.md#what-this-means-in-practice).

## 6. Required assets

| Asset | Path | Use |
| --- | --- | --- |
| Mark | `public/logos/icpep-mark.png` | Secondary visual, not the wordmark lockup |
| Pixie | `public/mascot/pixie-illustration.png` | Optional — see [mascot.md](../../brand/mascot.md#where-pixie-belongs) |
| Pillar icons | **MISSING** | No icon set exists |

**Caveat:** `pixie-illustration.png` has a **white background**. On Obsidian it will read as
a white rectangle unless a container or cutout is used. Do not place it bare on dark.

## 7. Interaction and states

- Largely static; this is a reading section.
- If the pillars are interactive (expand on click), they must be keyboard-operable and
  must not hide content that a screen reader needs.
- Scroll-in reveal is acceptable only if content is fully visible when motion is reduced.

## 8. Accessibility

- Heading level `<h2>` (the hero owns `<h1>`).
- Body text at Body level must clear 4.5:1 — off-white on Obsidian is 17.31:1, so the
  constraint is about **size and line length**, not colour.
- Keep line length to ~60–75 characters; full-width paragraphs on a wide monitor are a
  readability failure even at high contrast.
- If pillar names are rendered uppercase and letter-spaced, keep them ≥ 12 px.

## 9. Acceptance criteria

- [ ] Vision statement appears verbatim, with its em-dashes intact.
- [ ] `<h2>` is the section's heading level; no `<h1>` here.
- [ ] No maroon-family text is used on the dark base.
- [ ] Paragraph line length stays within ~75 characters at desktop width.
- [ ] Text precedes art in the mobile DOM order.
- [ ] Any scroll animation degrades to fully visible content under reduced motion.

## 10. Open questions

1. **Is the vision statement public-facing?** It is written for the graphics team; confirming
   it belongs on the site is a prerequisite for this section.
2. Should the **four pillars** be shown to visitors, or kept as internal design rationale?
3. Are there **statistics** to show (members, years active, projects)? None appear in the
   deck, and a numbers row is the usual way this section earns attention.
4. Is there a **mission** statement (distinct from the vision)?
5. Who signs off on About copy?
6. Is Pixie welcome this high on the page, given she competes with the hero's glow mark?
