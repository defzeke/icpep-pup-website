# Gallery

> **Source status.** Nothing in the deck covers this section. The only relevant fact is
> that social output exists in **1:1 (2048 × 2048)** and **4:5 (2160 × 2700)** (deck page 7,
> marked `7.5`). Everything below is a proposal.

## 1. Purpose

Show the org's life: events, workshops, members at work. Where Events says "come", the
Gallery says "this is what it was like" — it converts hesitation into confidence.

## 2. Placement and order

Home page, after [executives-advisers](../executives-advisers/README.md). Before
[partners-sponsors](../partners-sponsors/README.md) — visual proof before partner logos.

## 3. Layout

- **Grid with a fixed ratio.** Pick one dominant ratio (1:1 recommended) and crop to it.
  A masonry layout handles mixed 1:1 and 4:5 sources better but costs more layout work and
  makes the page height unpredictable.
- ≥ `lg`: 4 columns. `md`: 3. < `md`: 2.
- Consider one **feature tile** spanning 2 × 2 for the best photograph — it gives the grid a
  focal point and breaks the monotony of equal squares.
- **Pillars:** *Atmospheric* (dark base, images glowing out of it) and *Interconnected*
  (traces between tiles, or a lightbox that implies sequence).
- Avoid coloured frames around photos; the photography supplies its own colour, and the
  brand palette will fight it.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Image | 1:1 (crop from 1:1 or 4:5 source) | Yes | Social output |
| Alt text | string | Yes | `TBC` — see below |
| Caption | string | No | `TBC` |
| Event / album | string | No | `TBC` |
| Date | date | No | `TBC` |
| Credit | string | No | `TBC` — photographer's name |

**Alt text is a hard requirement here.** A gallery of twenty images with `alt="gallery
image"` is unusable with a screen reader. Either write real descriptions ("Members
assembling a line-following robot at a workshop table") or mark the purely decorative ones
`alt=""` — but decide per image, not by default.

**Empty state:** if there are no images, hide the section. An empty grid has no value.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-obsidian` |
| Tile border / hover ring | `--color-bright-orange` |
| Caption text | `--color-off-white` |
| Overlay scrim | Obsidian at high opacity — a pure black scrim is off-palette |
| Optional filter chips | `--color-carbon` surface, `--color-light-orange` active |

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Gallery images | `public/gallery/...` | Convention proposed; **none exist yet** |

Image weight matters more here than anywhere else on the site. Serve through `next/image`
with explicit `sizes`; do not ship multi-megabyte originals to the grid.

## 7. Interaction and states

- **Lightbox** on click: keyboard-navigable (`←`/`→`, `Escape` to close), focus trapped while
  open, focus returned to the originating tile on close.
- The lightbox must expose the caption and the current position ("4 of 20").
- Lazy-load below-the-fold tiles; the first row may load eagerly.
- Hover: subtle zoom or brightness shift, with the same treatment on every tile.

## 8. Accessibility

- Section heading `<h2>`.
- Every tile is a `<button>` or a link, not a `<div>` with a click handler.
- `aria-label` on tiles without visible captions, e.g. `"Open image 4 of 20"`.
- Respect `prefers-reduced-motion`: the zoom and lightbox transitions become instant.
- Ensure the lightbox's close control is the first focusable element inside it.

## 9. Acceptance criteria

- [ ] All tiles render at one ratio with no stretched images.
- [ ] Every image has deliberate alt text — no `alt="image"` anywhere.
- [ ] The lightbox opens with the keyboard, closes on `Escape`, and restores focus.
- [ ] Arrow keys move between images while the lightbox is open.
- [ ] Below-the-fold images lazy-load; the first row does not.
- [ ] With reduced motion, no zoom or fade transitions run.

## 10. Open questions

1. **Where do the photos come from** — the shared Drive folder, a social account, or
   commissioned coverage? Is there a curation owner?
2. Should the gallery be a **flat grid** or **grouped by album/event**?
3. Which ratio wins when they clash — 1:1 or 4:5?
4. **Do we have consent** to publish photographs of identifiable members?
5. Is there a photographer to credit, and should credit be shown?
6. Should the gallery **link back to its event**?
