# Events

> **Source status.** The deck supplies **social template dimensions** (page 7, marked
> `7.5`): 1:1 at 2048 × 2048 and 4:5 at 2160 × 2700. It supplies no event data, no card
> design, and no listing behaviour.

## 1. Purpose

Tell the visitor what is happening, when, and where — and make the next event obvious
without scrolling. This is the section that most often decides whether a member returns.

## 2. Placement and order

Home page, after [about](../about/README.md). Before [projects](../projects/README.md):
events are time-sensitive and lose value when buried.

## 3. Layout

- **Mixed-ratio grid.** Event art arrives in 1:1 and 4:5 — the grid must handle both
  without cropping content. Recommended: fix the card's media area to **1:1** and
  `object-cover` the 4:5 art; never the reverse.
- ≥ `lg`: 3 columns. `md`: 2. < `md`: 1.
- **Pillars:** *Interconnected* (a bus/trace line linking cards, or a timeline spine) and
  *Algorithmic* (metadata rows in label/value form, dates in a strict format).
- A timeline spine is the strongest fit: it makes "signal moving between nodes" literal.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Title | string | Yes | `TBC` |
| Date | date (+ optional end date) | Yes | `TBC` |
| Time | time range | No | `TBC` |
| Venue / mode | string (e.g. `PUP Manila`, `Online`) | No | `TBC` |
| Description | short text | No | `TBC` |
| Cover image | 1:1 (2048 × 2048) | Yes | Social templates |
| Story image | 4:5 (2160 × 2700) | No | Social templates |
| Status | `upcoming` \| `ongoing` \| `past` | Yes | Derived from date |
| Registration link | URL | No | `TBC` |

**Date format:** pick one and hold it (`DD MMM YYYY`, e.g. `16 OCT 2026`). Uppercase,
letter-spaced dates are consistent with the deck's metadata style.

**Empty state:** required. "No upcoming events — check back soon", plus an optional link to
the org's social page. An empty calendar must not render as a blank band.

**Loading state:** if events are fetched, skeleton cards at the same aspect ratio, so the
grid does not jump.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Card surface | `--color-carbon` on an Obsidian section |
| Card title | `--color-white` |
| Metadata labels | `--color-light-orange` |
| Date chip | `--color-crimson` background with white text (5.74:1) |
| Status `upcoming` | `--color-bright-orange` |
| Status `past` | `--color-off-white` at reduced emphasis — **not** a low-opacity maroon, which would fail contrast |
| Card title type | Subheader level |
| Metadata type | Label level (see the Tags/Footers anomaly in typography.md) |

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Event covers | `public/events/<slug>-1x1.png` | Convention proposed; **none exist yet** |
| Event stories | `public/events/<slug>-4x5.png` | Optional |

Alt text: the event title, or `alt=""` if the title is already adjacent as a heading.
Never alt-text a flyer with "event image" — it adds nothing.

## 7. Interaction and states

- Whole card clickable, but the **title is the link** — so keyboard and screen-reader users
  get a named target. Do not make a bare `div` the click handler.
- Hover: lift by shadow, or brighten the media overlay. Choose one, apply it site-wide.
- Past events: either hidden, or shown dimmed in a collapsed "Past events" group.
- Focus: visible ring on the title link.

## 8. Accessibility

- Section heading `<h2>`; each event title `<h3>`.
- Use a real `<time datetime="2026-10-16">` for every date.
- Do not encode status by colour alone — include the word ("Upcoming", "Past").
- Cards must be reachable and readable in DOM order matching the visual order.
- If a timeline spine is drawn with SVG, mark it `aria-hidden="true"` — it is decoration.

## 9. Acceptance criteria

- [ ] A 4:5 image and a 1:1 image in the same grid produce cards of equal height, with no
      distorted or clipped-away subject matter.
- [ ] Dates use `<time>` with a machine-readable `datetime`.
- [ ] Status is conveyed by text, not colour alone.
- [ ] Empty state renders with copy and does not collapse the section.
- [ ] Every card's title is a focusable link with a visible focus ring.
- [ ] No maroon text on the dark base.

## 10. Open questions

1. **Where does event data come from?** Hardcoded, a CMS, a Google Sheet, or a calendar
   feed? This is the single biggest implementation unknown in the whole site.
2. Are events a **home-page section only**, or do they get their own route with an archive?
3. How many events show on the home page before a "view all" link?
4. Do **past events** stay visible (an archive is a credibility signal) or disappear?
5. Is there a **registration flow**, and does it live on-site or link out to a form?
6. Who publishes events, and how far ahead?
7. Does the org have a **Google Calendar** that should be embedded or mirrored?
