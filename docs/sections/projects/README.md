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

## 3. Layout

- ≥ `lg`: 2–3 columns. `md`: 2. < `md`: 1.
- Card media should be a **fixed 16:9 or 4:3** frame so mixed screenshots and photos align.
  Project imagery will be inconsistent — fixing the frame is what makes the grid hold.
- **Pillars:** *Interconnected* (traces linking project cards to disciplines) and
  *Algorithmic* (stack/tech list set as metadata rows).
- The `BUILD` motif can be used literally here as the section's label — this is its
  strongest home on the page.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Title | string | Yes | `TBC` |
| Summary | short text | Yes | `TBC` |
| Disciplines / tags | n × string | No | `TBC` — e.g. hardware, embedded, web, AI |
| Members | n × string | No | `TBC` |
| Stack / tools | n × string | No | `TBC` |
| Image | 16:9 | Yes | `MISSING` |
| Repository URL | URL | No | `TBC` |
| Demo URL | URL | No | `TBC` |
| Academic term | string | No | `TBC` |

**Empty state:** required — "Projects coming soon". A showcase with zero items is a
credibility problem, so if the list is empty, consider hiding the section entirely rather
than showing an empty grid.

**Missing fields:** a project without an image should fall back to a generated panel
(isometric pattern + title), not a broken image or a gap.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Card surface | `--color-carbon` on Obsidian, or off-white on a light band |
| Title | `--color-white` (dark) / `--color-maroon` (light) |
| Tags | `--color-light-orange` on dark — orange on light fails contrast |
| Links | `--color-bright-orange` on dark |
| Card title type | Subheader level |
| Metadata / stack | Label level |

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Project images | `public/projects/<slug>.png` | Convention proposed; **none exist yet** |
| Fallback panel | Generated, not an asset | Isometric pattern from the theme |

Alt text: describe the artefact, not the file — e.g. "A soldered microcontroller board with
an LED matrix" rather than "project photo".

## 7. Interaction and states

- Card links to a detail view **or** an external repository. Decide which, and make the
  destination obvious from the label ("View repository" ≠ "Read more").
- Hover: media zoom within the fixed frame (`scale-105`, clipped by `overflow-hidden`).
- Focus: ring on the card title.
- External links: `rel="noopener noreferrer"` and a visible indication that the link leaves
  the site.

## 8. Accessibility

- Section heading `<h2>`; project titles `<h3>`.
- If cards are clickable as a whole, keep a real focusable link inside — do not rely on a
  click handler on a container.
- Tag lists: use `<ul>`/`<li>` so a screen reader can count them.
- Hover zoom must be decorative only; no information may depend on hover.

## 9. Acceptance criteria

- [ ] Cards with and without images produce equal-height rows.
- [ ] The fallback panel renders for a project with no image.
- [ ] Every card has one clearly-named link, reachable by keyboard.
- [ ] External links carry `rel="noopener noreferrer"`.
- [ ] Tags are marked up as a list, not a run of `<span>`s.
- [ ] No orange text on a light background.

## 10. Open questions

1. **What is this section actually for** — member projects, org-run build events, or
   hackathon outputs? The layout differs a lot between those.
2. Does a project get its **own detail page**, or is a card the end of the journey?
3. Who curates the list, and how often is it updated?
4. Are project images even available? A showcase without imagery needs a different design.
5. Should projects link to **GitHub**, and are those repositories public?
6. Is "Build Showcase" the intended public name, or is it internal language?
