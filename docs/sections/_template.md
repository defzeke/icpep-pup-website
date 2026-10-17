# Section Doc Template

Copy this into `docs/sections/<section>/README.md` and fill it in. Every section doc uses
these **ten headings, in this order** — don't add or reorder them, and don't rename them.

Three rules:

1. **Never delete a heading.** If a heading has nothing yet, write "Not specified in the
   source deck." and move the unknown into **Open questions**. An empty-looking doc is
   information; a missing heading is a hole.
2. **Cite the deck.** Any claim traced to the source deck names its page number. Anything
   you propose is labelled as a proposal.
3. **Fix the link depth.** This template lives one level above the section folders, so its
   links use `../`. Once copied into `docs/sections/<section>/`, every relative link needs
   one more `../` — i.e. `../brand/` becomes `../../brand/`.

---

## 1. Purpose

One or two sentences: what does this section exist to do? State it as an outcome for the
visitor, not a feature list. If you can't write it in two sentences, the section is
probably two sections.

## 2. Placement and order

Where does the section sit in the page flow, and does it appear on every page or only the
home page? Name the sections immediately before and after it.

## 3. Layout

Structure, grid, spacing, breakpoints. Include:

- Container and max-width behaviour.
- Column count at each breakpoint (mobile → desktop).
- Which of the four theme pillars this section expresses, and how. Every section should
  express at least two — see [../../brand/theme.md](../brand/theme.md).
- Any isometric (30°) geometry, trace motifs, or glow used, and where.

## 4. Content and copy

The section's content model: every field, its type, whether it's required, and where the
text comes from. Give real example copy where the deck supplies it; otherwise mark it
`TBC`.

Also specify: empty state, loading state, and what happens when a field is missing.

## 5. Design tokens

Which colour roles and type levels this section uses, by **token name** — never raw hex.
Pull them from [../../brand/color-palette.md](../brand/color-palette.md) and
[../../brand/typography.md](../brand/typography.md), and respect the contrast rules
(maroon family on light, orange family on dark).

## 6. Required assets

Every asset the section needs, as a repo path, with its `alt` text taken from
[../../assets/inventory.md](../assets/inventory.md). Note any asset that does not exist
yet as `MISSING` and open a question about it.

## 7. Interaction and states

Hover, focus, active, selected, disabled. Any animation, with its trigger, and the
`prefers-reduced-motion` fallback. Link targets and where they go.

## 8. Accessibility

Heading level used (and why it keeps the page's heading order valid), landmark role, focus
order, keyboard operability, touch-target sizes, contrast pairings used, and reduced-motion
behaviour. For anything image-led, describe the alt-text strategy.

## 9. Acceptance criteria

A checklist a reviewer can run. Each line must be verifiable by looking at the built page —
no "looks good". Example: "At 375 px width, the nav collapses to a menu button and all four
links remain reachable by keyboard."

## 10. Open questions

Every unknown, as a numbered question, with the decision owner where known. This is the most
valuable section in a doc built from a visual guide — it is where the deck's silence shows.
