# Gallery

> **Status — draft 2 (2026-10-18).** A **pinned backdrop with frames scrolling over it**: the
> label row and the headline (`The ICpEP.SE Experience`, Display, mixed case so the org's spelling survives) sit in a
> `position: sticky`, viewport-high backdrop, while a layer of tilted polaroid-style frames
> scrolls up across it at normal scroll speed, then the section scrolls away
> (`sections/gallery/gallery.tsx`, `components/gallery-grid.tsx`). No JavaScript: it is sticky
> positioning, so it has no reduced-motion variant to need.
>
> Frames are Off-white cards (a 4:5 photo slot and a Mono caption in `--color-maroon`, 9.14:1),
> nine in a three-column flow (two below `md`), each with its own tilt (±3–8°) and drop (0–30svh)
> so the grid never reads as one. The layer starts 75svh down so the headline opens clear, and
> ends 45svh past the last frame so it clears again before the section leaves. The layer ignores
> the pointer except on the frames themselves. **There are still no photographs**: each slot is
> a hatched `[ photo ]` placeholder, and captions are `IMG_00N // [Caption]`. The captions are
> Mono rather than the reference's handwriting, which this type system does not have. The 2×2
> masonry grid described below is superseded.
>
> **Source status.** Nothing in the deck covers this section. The only relevant fact is
> that social output exists in **1:1 (2048 × 2048)** and **4:5 (2160 × 2700)** (deck page 7,
> marked `7.5`). Everything below is a proposal.

## 1. Purpose

Show the org's life: events, workshops, members at work. Where Events says "come", the
Gallery says "this is what it was like" — it converts hesitation into confidence.

## 2. Placement and order

Home page, after [executives-advisers](../executives-advisers/README.md). Before
[partners-sponsors](../partners-sponsors/README.md). (Reordered twice on 2026-10-18: it first
took the removed [projects](../projects/README.md) section's place after Events, then swapped
with Executives & Advisers.)

Gallery is index marker **`04`**.

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
- The section label is **`gallery/`** — a directory, like `projects/`. Both are collections
  rather than records, and the suffix says so. See
  [design-language.md](../../brand/design-language.md#where-the-devices-live).
- **The label sits here and minimally.** Gallery is the page's least textual section — the
  images are the content — so this is the one place the metadata should be a single line and
  nothing else. Do not add reference codes per tile to match Events and Projects; three
  numbered sections in a row would make the numbering look like a filing system rather than a
  signal.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `gallery/` | Yes | Proposed |
| Index marker | `06` | Yes | Proposed |
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
| Filename label / index marker | `--color-light-orange`, Label level, **Mono** |
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
- Hover: subtle zoom or brightness shift, with the same treatment on every tile, at the `fast`
  duration from [motion.md](../../brand/motion.md#the-vocabulary).
- The lightbox transition, where it exists, is `base` at most, and instant under reduced motion.

## 8. Accessibility

- Section heading `<h2>`.
- Every tile is a `<button>` or a link, not a `<div>` with a click handler.
- `aria-label` on tiles without visible captions, e.g. `"Open image 4 of 20"`.
- Respect `prefers-reduced-motion`: the zoom and lightbox transitions become instant.
- Ensure the lightbox's close control is the first focusable element inside it.
- The filename label and index marker are decorative — `aria-hidden="true"`, for the same
  reason as in [about](../about/README.md).

## 9. Acceptance criteria

- [ ] All tiles render at one ratio with no stretched images.
- [ ] Every image has deliberate alt text — no `alt="image"` anywhere.
- [ ] The lightbox opens with the keyboard, closes on `Escape`, and restores focus.
- [ ] Arrow keys move between images while the lightbox is open.
- [ ] Below-the-fold images lazy-load; the first row does not.
- [ ] With reduced motion, no zoom or fade transitions run.
- [ ] The section carries no per-tile reference codes.

## 10. Open questions

1. **Where do the photos come from** — the shared Drive folder, a social account, or
   commissioned coverage? Is there a curation owner?
2. Should the gallery be a **flat grid** or **grouped by album/event**?
3. Which ratio wins when they clash — 1:1 or 4:5?
4. **Do we have consent** to publish photographs of identifiable members?
5. Is there a photographer to credit, and should credit be shown?
6. Should the gallery **link back to its event**?
7. **Is this section distinct enough from Events and Projects to justify its length?** All
   three show imagery. If the gallery turns out to be event photos, folding it into Events as
   an album may produce a shorter, stronger page — and the page is already twelve sections.
