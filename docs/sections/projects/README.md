# Projects / Build Showcase

> **Source status.** Nothing in the deck covers this section. Its only tie to the brand is
> the **`BUILD`** word in the `PLAN · BUILD · DEPLOY · REPEAT` motif (deck page furniture).
> Everything below is a proposal.

## 1. Purpose

Prove the org's output. Where About claims the hardware/software duality, this section
shows it — real work, by real members, with enough detail to be credible.

## 2. Placement and order

Home page, after [events](../events/README.md). Before
[executives-advisers](../executives-advisers/README.md): output first, org chart second.

Projects is index marker **`04`**.

## 3. Layout

- **An index, not a gallery.** A numbered list of titles with metadata; the imagery is a
  *consequence* of reading, not the substance. This is the opposite of Events' problem — there
  the date was the point, here the work is, and a grid of equal pictures would flatten twelve
  projects into twelve rectangles.
- ≥ `lg`: a single full-width list. Each row is `NN / Title / metadata`, with the row separated
  by the **Rule** device. Hovering a row reveals its project image in a **fixed frame pinned
  beside the list** — one image area, reused, never a per-row layout shift.
- < `lg`: no hover exists, so the reveal is replaced by a small inline thumbnail at the row's
  left edge. **Do not ship a hover-only reveal on touch** — half the audience would never see
  the image at all.
- The pinned frame is a fixed 16:9 box with `overflow-hidden`, so mixed screenshots and photos
  align. Project imagery will be inconsistent; fixing the frame is what makes the list hold.
- **Pillars:** *Algorithmic* (an ordered index, reference codes, monospace metadata) and
  *Interconnected* (traces linking each row to the frame).
- The section label is **`projects/`** — a directory, because the section is a collection and
  not a record. See [design-language.md](../../brand/design-language.md#where-the-devices-live).

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `projects/` | Yes | Proposed |
| Index marker | `04` | Yes | Proposed |
| Reference code | `PRJ.<NN>` | Yes | Proposed — see the precision rule |
| Title | string | Yes | `TBC` |
| Summary | short text | Yes | `TBC` |
| Disciplines / tags | n × string | No | `TBC` — e.g. hardware, embedded, web, AI |
| Members | n × string | No | `TBC` |
| Stack / tools | n × string | No | `TBC` |
| Image | 16:9 | No | `MISSING` |
| Repository URL | URL | No | `TBC` |
| Demo URL | URL | No | `TBC` |
| Academic term | string | No | `TBC` |

**Reference codes** are `PRJ.01`, `PRJ.02`, … in this page's order, and encode nothing else —
see [design-language.md](../../brand/design-language.md#the-precision-rule). In particular they
**do not carry the academic term**, which the site does not reliably know.

**Image is optional.** A row without an image is a normal row; the pinned frame keeps showing
the last revealed image rather than going blank, and a project with no image simply never
claims the frame. Do not generate a placeholder panel — an empty frame would be a hole, and the
`MISSING` imagery is the honest state.

**Empty state:** required — "Projects coming soon". A showcase with zero items is a
credibility problem, so if the list is empty, consider hiding the section entirely rather
than showing an empty list.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-obsidian` or `--color-carbon` (the alternating band) |
| Row title | `--color-white` (dark) / `--color-maroon` (light) |
| Reference code | `--color-bright-orange`, **Mono**, tabular figures |
| Metadata keys | `--color-light-orange`, **Mono** |
| Rule between rows | `--color-carbon` hairline |
| Links | `--color-bright-orange` on dark |
| Title type | Subheader level |
| Metadata / stack | Label level, **Mono** ([typography.md](../../brand/typography.md)) |

The previous draft's card surface (`--color-carbon`) is dropped with the cards. There is no
surface in a ruled index; the rule does the separating.

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Project images | `public/projects/<slug>.png` | Convention proposed; **none exist yet** |
| Traces | None | Inline SVG, `aria-hidden` |
| Fallback panel | **Not required** | Dropped with the cards — see §3 |

Alt text: describe the artefact, not the file — e.g. "A soldered microcontroller board with
an LED matrix" rather than "project photo". Because the image is revealed on hover and would
otherwise be announced at the wrong moment, give it `alt=""` and let the summary carry the
meaning; the image is illustrative, not informational.

## 7. Interaction and states

- **Hover/focus reveal.** The pinned frame swaps to the row's image. Pointer hover and keyboard
  focus must both trigger it, or the section is keyboard-inaccessible in a way sighted users
  never notice.
- The row's title is a link to a detail view **or** an external repository. Decide which, and
  make the destination obvious from the label ("View repository" ≠ "Read more").
- External links: `rel="noopener noreferrer"` and a visible indication that the link leaves
  the site.
- **Nothing may depend on the reveal.** Every fact in the section is text in the row; the image
  is decoration, and the section is complete if the frame never loads.
- Reduced motion: the swap becomes instant. There is no crossfade to disable.
- The row hover colour change is `fast`, per [motion.md](../../brand/motion.md#the-vocabulary).

## 8. Accessibility

- Section heading `<h2>`; project titles `<h3>`.
- **Use an `<ol>`** — the reference codes imply an order and the markup should agree.
- If rows are clickable as a whole, keep a real focusable link inside — do not rely on a
  click handler on a container.
- Tag lists: use `<ul>`/`<li>` so a screen reader can count them.
- The pinned frame must be `aria-hidden="true"` and must not receive focus. It is a decorative
  echo of a row's title, and a screen-reader user already has the title.
- Reference codes are `aria-hidden` — see the Events doc for the same reasoning.

## 9. Acceptance criteria

- [ ] The section renders on touch devices with every image still reachable.
- [ ] Keyboard focus on a row reveals its image exactly as pointer hover does.
- [ ] The pinned frame never changes the layout of the list when it swaps.
- [ ] A project with no image renders a normal, full-height row.
- [ ] Every row has one clearly-named link, reachable by keyboard.
- [ ] External links carry `rel="noopener noreferrer"`.
- [ ] Tags are marked up as a list, not a run of `<span>`s.
- [ ] No orange text on a light background.
- [ ] The pinned frame is not in the accessibility tree.
- [ ] All rows read correctly with the frame hidden.

## 10. Open questions

1. **What is this section actually for** — member projects, org-run build events, or
   hackathon outputs? The layout differs a lot between those.
2. Does a project get its **own detail page**, or is a row the end of the journey?
3. Who curates the list, and how often is it updated?
4. Are project images even available? If they are not, the pinned frame should be dropped
   entirely and this becomes a pure index — which is a defensible section and simpler than the
   one specified above.
5. Should projects link to **GitHub**, and are those repositories public?
6. Is "Build Showcase" the intended public name, or is it internal language?
7. **Does the `BUILD` motif belong here** as the section's label, as an earlier draft
   suggested? It is now spoken for twice — the hero's equation band and the process section —
   and a third reading on one page is the repetition
   [design-language.md](../../brand/design-language.md#the-three-rules) exists to prevent.
