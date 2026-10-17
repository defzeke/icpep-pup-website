# Process

> **Status — draft 4 (2026-10-18).** The four steps live at the foot of About
> (`sections/about/components/process-steps.tsx`, anchor `#process`) as **four cards** after
> neutomni's process band, in a band of their own that escapes About's `max-w-7xl` container and
> runs nearly edge to edge (a 16–24px gutter). Above them, only a one-line intro (placeholder);
> the `A → B` route marker and the ellipse `Our process` badge are removed, and `Our process`
> remains as a visually hidden `<h3>` naming the list. Cards are 78svh tall while pinned (28rem
> at rest) and step through the palette's **mass gradient**
> ([color-palette.md](../../brand/color-palette.md#gradients-and-glow)): `--color-maroon`,
> `--color-burgundy`, `--color-crimson` with white text (10.76, 8.95 and 5.74:1), then
> `--color-bright-orange` with Obsidian text (6.13:1) for `REPEAT`, the loop, with a `↺`.
>
> **The drawing only ever appears on a card.** The canvas is masked (`destination-in`) to each
> card's risen part, read from the same `clip-path` GSAP applies, so the road, the axle and the
> polygon rise with the cards and nothing is drawn on the empty band before them.
>
> **Motion (≥ `lg`, no reduced motion):** the block pins for 200vh of a 300vh wrapper, but the
> sequence **starts before the pin** — once the block's top is 60% of a viewport from the top
> (`LEAD`), so the first card is already rising as the block scrolls in. Cards rise from the
> bottom one after another (`clip-path`, at 5/20/35/50% of the sequence), while a canvas
> draws a **square rolling along a road of inverted catenary arches** — the curve on which a
> regular polygon rolls with its centre perfectly level — over a dashed axle line. From 35% the
> square rounds into a circle as the road flattens. The geometry is
> [`lib/roller.ts`](../../../lib/roller.ts) (tested), written for this repo, not copied. Below
> `lg`, under reduced motion or without JS: four static cards, no pin, nothing drawn.
>
> The rail, route arrows and `makefile` label described below are superseded.

> **Source status.** The deck does not document this section. Its whole basis is the page
> furniture mantra `PLAN` `BUILD` `DEPLOY` `REPEAT` (deck pages 2–3, marked `02`/`03`), which
> has no descriptions, no order confirmation and no owner. Everything below is a proposal.

## 1. Purpose

Turn the org's four-word mantra into a method a visitor can understand. It answers "what do you
actually do" one section before Events and Projects show them the results — so it is the
promise those two sections then keep.

## 2. Placement and order

Home page, after [about](../about/README.md). Before [events](../events/README.md) — method,
then evidence.

## 3. Layout

- **A single vertical sequence at every breakpoint.** A four-step method laid out as a 2×2 grid
  reads as four unrelated statements; a sequence reads as a sequence.
- ≥ `lg`: a left rail carries the step numbers and route markers, the right column carries the
  step name and description. < `lg`: the rail collapses above each step.
- **Built at `lg` as** a `12rem | 1fr` grid. The rail holds the step marker, the route arrow and
  a hairline stub that stops at the gutter — enough to read as a rail without a drawn SVG. The
  full vertical trace with 90° elbows described below **is not built**; it is the one device on
  the page that would need authored path geometry, and it is decoration. What is on the page
  already carries the sequence, because the `<ol>` does.
- Steps are separated by the **Rule** device — a 1px dashed hairline — not by cards. Four cards
  would make this look like Events.
- **Pillars:** *Interconnected* (the route markers and the return arrow are the section's whole
  point — signal moving between nodes) and *Algorithmic* (an `<ol>`, monospace labels, index
  markers).
- The rail's connecting line is a vertical trace with 90° elbows into each step. It is the one
  place on the page where the trace motif is **structural** rather than decorative.
- The section is labelled **`makefile`** — the one thing in a project that is literally a
  plan-build-deploy pipeline — and marked **`02`**.
- **Two numbering registers, on purpose.** The section marker `02` is metadata and sits at the
  section's top edge; the step markers `01`–`04` are content and sit in the rail. They are not
  the same sequence and must not look like it: the section marker matches the other sections'
  markers in size, colour and position, and the step markers do not.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `makefile` | Yes | Proposed |
| Section marker | `02` | Yes | Proposed — page order |
| Section heading | string | Yes | `TBC` |
| Step name | string | Yes | Deck — `PLAN`, `BUILD`, `DEPLOY`, `REPEAT` |
| Step description | long text | Yes | `MISSING` — the deck defines none of the four |
| Step marker | `01`–`04` | Yes | Derived from order |
| Route marker | `→` between steps, `↺` on the last | Yes | Proposed — see [design-language.md](../../brand/design-language.md) |

The **step marker** is the rail's number, not the section's. They are different registers —
see §3 — and the section's own marker is `02`.

The four names are the deck's; their **reading order is not confirmed**. The deck's extracted
text returns `PLAN BUILD DEPLOY REPEAT` while its printed furniture reads reversed, and the
header doc records the same ambiguity. This doc assumes `PLAN → BUILD → DEPLOY → REPEAT`, which
is the only order that forms a coherent cycle.

**Empty state:** not applicable — the four names are fixed content, not data.

**Missing descriptions:** required, so this section is blocked until someone writes them. Do not
invent four paragraphs of method for an org nobody has asked.

**Built with placeholder descriptions** anyway, so the sequence, the rail and the two numbering
registers can be seen. They live in [`lib/placeholders.ts`](../../../lib/placeholders.ts),
are lorem rather than invented method, and are tracked in [tasks.md](../../tasks.md). The four
**names** are the deck's and are set exactly as it prints them: uppercase.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-obsidian` |
| Step name | `--color-white` |
| Description | `--color-off-white` |
| Index marker | `--color-light-orange` |
| Route marker / return arrow | `--color-bright-orange` |
| Rule | `--color-carbon` hairline, or `--color-burgundy` where it needs to read against Carbon |
| Step name type | Subheader level |
| Labels and markers | Label level, **Mono** ([typography.md](../../brand/typography.md)) |

## 6. Required assets

None. Every mark here — the rule, the rail, the elbows, the arrows — is **inline SVG or CSS**,
authored in the repo, with no binary asset. See
[design-language.md](../../brand/design-language.md#implementation).

The rail and its connectors are decoration: `aria-hidden="true"`, and the section must read in
full without them.

## 7. Interaction and states

- Static by default. The section is an ordered list, not a control.
- If a step is expanded on click, the whole sequence must remain readable without the
  interaction, and `prefers-reduced-motion` applies to any expansion.
- Steps may rise on first view via the shared reveal — see
  [motion.md](../../brand/motion.md#the-vocabulary). Nothing is hoverable; there is nothing to
  click, and a hover state on a non-interactive element is a lie.

## 8. Accessibility

- Section heading `<h2>`; each step name `<h3>`.
- **Use a real `<ol>`.** The order carries the meaning — a `<div>` sequence loses it, and a
  screen reader should announce "4 items".
- The rail, elbows and route markers are decorative. The arrows are **not** the only thing
  expressing sequence; the list markup already does that, so `aria-hidden` on the SVG is correct
  rather than a loss.
- `<ol>` counters must not be hidden with `list-style: none` without an accessible substitute —
  in Safari and some screen readers a list with `list-style: none` stops announcing as a list.
  The step markers are rendered as real elements rather than as counters, so the `<ol>` carries
  `list-none` **and an explicit `role="list"`** to keep the semantics.

## 9. Acceptance criteria

- [ ] Steps render in the deck's order, once, with no step repeated.
- [ ] The sequence is marked up as a single `<ol>`, and a screen reader announces four items.
- [ ] Step order is readable with all SVG hidden and CSS disabled.
- [ ] The four step names are spelled exactly as the deck prints them.
- [ ] `REPEAT` is visually distinguished as the loop rather than as a fourth task.
- [ ] With reduced motion, no step animates in.

## 10. Open questions

1. **Who writes the four descriptions?** This section cannot be built without them, and they are
   the section's entire content.
2. **Is `REPEAT` a step or the loop marker on a three-step set?** A cycle drawn as 01–04 with a
   return arrow is honest; four equal steps imply four different activities, which it is not.
3. **Is this section about the org's method, or about a specific programme** (a bootcamp, a
   build cycle, a term)? The answer changes the copy completely.
4. **Is the mantra public-facing at all,** or deck furniture that should stay off the site? The
   same question the header doc asks about it.
5. **Which reading order is correct?** See §4 — this needs a decision from whoever owns the
   brand, not a guess.
