# Events

> **Source status.** The deck supplies **social template dimensions** (page 7, marked
> `7.5`): 1:1 at 2048 × 2048 and 4:5 at 2160 × 2700. It supplies no event data, no card
> design, and no listing behaviour.

## 1. Purpose

Tell the visitor what is happening, when, and where — and make the next event obvious
without scrolling. This is the section that most often decides whether a member returns.

## 2. Placement and order

Home page, after [process](../process/README.md). Before [projects](../projects/README.md):
events are time-sensitive and lose value when buried.

Events is index marker **`03`**.

## 3. Layout

- **List, not a grid.** The section's job is a date order, and a grid makes the visitor work out
  which card comes first. A single ordered column of rows reads top-down in time; the eye does
  the sorting for free.
- ≥ `lg`: each row is a three-part line — reference code and date left, title centre, action
  right, separated by the **Rule** device. < `lg`: the row stacks, with the date above the title.
- Media, where it exists, is a **square thumbnail at the row's left edge**, not a full-width
  card image. Cards push the date away from the title, which is the one relationship this
  section exists to communicate.
- A 4:5 story asset in a 1:1 frame is cropped with `object-cover`; never crop a 1:1 asset into
  4:5.
- **Pillars:** *Interconnected* (a trace spine down the left edge, connecting rows — "signal
  moving between nodes" made literal) and *Algorithmic* (reference codes, metadata keys, a
  strict date format).
- The row carries the filename label **`events.json`** at the section top — `.json` because
  events are records, not prose. See
  [design-language.md](../../brand/design-language.md#where-the-devices-live).

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `events.json` | Yes | Proposed |
| Index marker | `03` | Yes | Proposed |
| Reference code | `EVT.<NN>` | Yes | Proposed — see the precision rule |
| Title | string | Yes | `TBC` |
| Date | date (+ optional end date) | Yes | `TBC` |
| Time | time range | No | `TBC` |
| Venue / mode | string (e.g. `PUP Manila`, `Online`) | No | `TBC` |
| Description | short text | No | `TBC` |
| Cover image | 1:1 (2048 × 2048) | No | Social templates |
| Story image | 4:5 (2160 × 2700) | No | Social templates |
| Status | `upcoming` \| `ongoing` \| `past` | Yes | Derived from date |
| Registration link | URL | No | `TBC` |

**Reference codes** are `EVT.01`, `EVT.02`, … in this page's order. They may encode **only** the
fact that the page already holds — the ordinal. Do not build a code out of a year, a term or a
session number the site does not track; see
[design-language.md](../../brand/design-language.md#the-precision-rule).

**Date format:** pick one and hold it (`DD MMM YYYY`, e.g. `16 OCT 2026`). Uppercase,
letter-spaced, **Mono** dates are the deck's metadata style, and the date is a
**Metadata key** (`DATE // 16 OCT 2026`) rather than a chip — a chip is a pill, and pills
fight the ruled-row layout in §3.

**Image is optional, unlike the earlier draft.** A row layout does not need a thumbnail, so an
event with no artwork still renders — which matters, because most events will not have art in
both ratios at the moment someone wants to announce them.

**Empty state:** required. "No upcoming events — check back soon", plus an optional link to
the org's social page. An empty calendar must not render as a blank band.

**Loading state:** if events are fetched, skeleton rows at the same height, so the list does
not jump.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-obsidian` |
| Row title | `--color-white` |
| Metadata keys (date, venue) | `--color-light-orange`, **Mono** |
| Reference code | `--color-bright-orange`, **Mono**, tabular figures |
| Rule between rows | `--color-carbon` hairline |
| Status `upcoming` | `--color-bright-orange` |
| Status `past` | `--color-off-white` at reduced emphasis — **not** a low-opacity maroon, which would fail contrast |
| Title type | Subheader level |
| Metadata type | Label level, **Mono** ([typography.md](../../brand/typography.md)) |

The previous draft specified a **crimson date chip with white text** (5.74:1). That passes
contrast but is dropped with the card layout — there is no chip in a ruled row, and a solid
crimson block on a line of metadata would be the loudest thing in a section whose subject is a
date.

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Event covers | `public/events/<slug>-1x1.png` | Convention proposed; **none exist yet** |
| Event stories | `public/events/<slug>-4x5.png` | Optional |
| Trace spine | None | Inline SVG, `aria-hidden` |

Alt text: the event title, or `alt=""` if the title is already adjacent as a heading.
Never alt-text a flyer with "event image" — it adds nothing.

## 7. Interaction and states

- **The title is the link.** The whole row may be clickable, but a real link must wrap the
  title so keyboard and screen-reader users get a named target. Do not make a bare `div` the
  click handler.
- Hover: the row's trace elbow extends and the title goes to `--color-light-orange`. One
  property pair, `fast` duration — see [motion.md](../../brand/motion.md#the-vocabulary).
- Past events: either hidden, or shown dimmed in a collapsed "Past events" group.
- Focus: visible ring on the title link, instantly.
- The trace spine never carries information. Order is in the markup, not in the drawing.

## 8. Accessibility

- Section heading `<h2>`; each event title `<h3>`.
- **Use an `<ol>`.** The rows are ordered by date, and the list markup is what says so — the
  reference codes and the spine are both decoration.
- Use a real `<time datetime="2026-10-16">` for every date.
- Do not encode status by colour alone — include the word ("Upcoming", "Past").
- Rows must be reachable and readable in DOM order matching the visual order.
- If the trace spine is SVG, mark it `aria-hidden="true"`.
- Reference codes are decorative-to-a-sense-reader at best; `aria-hidden` them, or the list
  announces "E V T dot zero one" before every title.

## 9. Acceptance criteria

- [ ] Rows render in date order, and the order is expressed by list markup rather than by
      visual position alone.
- [ ] Dates use `<time>` with a machine-readable `datetime`.
- [ ] Status is conveyed by text, not colour alone.
- [ ] Empty state renders with copy and does not collapse the section.
- [ ] Every row's title is a focusable link with a visible focus ring.
- [ ] No maroon text on the dark base.
- [ ] An event with no cover image renders identically in height to one with a thumbnail.
- [ ] Every reference code is `EVT.<NN>` and encodes nothing beyond its row's position.

## 10. Open questions

1. **Where does event data come from?** Hardcoded, a CMS, a Google Sheet, or a calendar
   feed? This is the single biggest implementation unknown in the whole site.
2. Are events a **home-page section only**, or do they get their own route with an archive?
3. How many events show on the home page before a "view all" link?
4. Do **past events** stay visible (an archive is a credibility signal) or disappear?
5. Is there a **registration flow**, and does it live on-site or link out to a form?
6. Who publishes events, and how far ahead?
7. Does the org have a **Google Calendar** that should be embedded or mirrored?
8. **Does the list beat the grid here?** The earlier draft chose a grid for visual weight; the
   ruled list is more in-idiom and dates better. Confirm against the built page, since this is a
   layout decision made from a doc rather than from a screen.
