# Design Language

> **Provenance.** This doc is a **proposal**. Nothing in it is quoted from the source deck — the
> deck specifies colour, type, logo and theme, and says almost nothing about page composition.
> Its reference point is [neutomni.com](https://neutomni.com/), a studio site whose *structure*
> this project borrows and whose *assets, copy and palette* it does not. See
> [Copyright](#copyright).

## Why this doc exists

[theme.md](theme.md) names four pillars and specifies three of them. The fourth —
*Algorithmic* — goes as far as "terminal aesthetics (monospace labels, `ID //` and `ROLE //`
style keys, letter-spaced all-caps) are in-theme", and stops. Nothing then owns the shared
vocabulary, so every section doc invents its own labels, markers and dividers in isolation and
nothing stops twelve sections from inventing twelve different ones.

This doc owns that vocabulary, and [motion.md](motion.md) owns how it moves. Together they
answer theme.md's open question 2 and complete pillar 4.

The name is the deck's own. The theme is **"Silicon and Syntax: The Integrated Engineering
Blueprint"** — this doc specifies what follows from the *blueprint* half: the page as a
technical artefact, the same way the Atmospheric pillar makes it a lit one.

## The concept

A technical document is dense with *self-description*: it names itself, numbers its sections,
stamps its revisions, labels its fields, and rules off its parts. neutomni applies exactly that
treatment to a design studio — packaging marks, SKU codes, filenames, certification stamps.

For a **computer engineering** organization the metaphor is closer to hand than it is for a
studio. A schematic, a datasheet and a terminal session are the native documents. So:

- neutomni's `FAQ.md` becomes ours unchanged — a filename is a filename.
- neutomni's packaging dielines become **PCB geometry**: 45° and 90° traces, not scissors.
- neutomni's `NEU/PKG.01-E1` becomes a **reference code** in our own scheme, with a rule
  against fake precision.
- neutomni's `Mon Jun 22 · 9:41 AM` phone chrome is **rejected** — see [Rejects](#rejects).

## The three rules

1. **A device is defined here before it is used anywhere.** A section doc says how a device
   appears *in that section*; it never defines a new one. Adding a device means editing this
   doc first.
2. **Devices rotate.** A section carries **at most three**: its index marker, its label, and one
   other. A page where every section uses every device is noise, which is the failure mode
   neutomni avoids by giving `Pricing.html` a treatment its `FAQ.md` does not share.
3. **Every device has exactly one implementation form**, from the table below. The point of
   the form column is to stop the same divider being a border here, an SVG there and a
   background image somewhere else.

## The devices

| Device | Form | Origin | What it is |
| --- | --- | --- | --- |
| **Index marker** | text | deck (`01`–`10`) | The section's ordinal, `01`, `02`, … One sequence per page, top to bottom. |
| **Filename label** | text | neutomni | The section's name as a filename. The suffix carries the content type — `about.md`, `events.json`, `officers.ts`, `makefile`. |
| **Metadata key** | text | deck (`ID // PIXIE`) | `KEY // value`, uppercase, letter-spaced. The deck's own form; use it for labels and keys. |
| **Reference code** | text | adapted (neutomni) | A stable id per item, `<SCOPE>.<NN>`, e.g. `EVT.03`. See the precision rule below. |
| **Rule** | CSS | deck (traces) + neutomni | A 1px dashed hairline. **One form only.** Angles follow the traces: 0°, 45°, 90°. |
| **Bracket label** | CSS + text | neutomni | `[ Join ICpEP ]`. **Interactive affordances only** — never prose, never a heading. |
| **Status chip** | component | neutomni | A live state word plus a clock. The state must be true and owned. |
| **Equation band** | text | neutomni | The `PLAN · BUILD · DEPLOY · REPEAT` motif set as a system rather than a list. |
| **Route marker** | text | neutomni | `A → B`. Restricted to the Process band. *Not currently used* (removed 2026-10-18). |
| **Barcode** | SVG | neutomni | Decorative bars generated from a seed ([`lib/barcode.ts`](../../lib/barcode.ts)). **Only as the face of a ticket's action**, where it gives way to the action's words on hover — never as ornament, and never claiming to scan. |
| **Ellipse badge** | CSS + text | neutomni | A short label in an elliptical outline. *Not currently used* — removed from the Process band and then from Events on 2026-10-18. |
| **Overlong line** | CSS | neutomni | A single long line, horizontally clipped and **static**. The marquee, without its problem — see below. |

### The precision rule

A reference code may only encode facts the site actually holds. `EVT.03` — "the third event on
this page" — is fine, because the page's own order is the fact. `ICPEP/EST.2019-A2` is not,
because it encodes a founding year, a revision and a batch that nothing in the repo knows. The
deck's `7.5` page number shows the source is comfortable with an irregular id; ours must not
invent one. **If a code needs a fact we do not have, drop the code, not the fact.**

### The marquee, and why it is not one

neutomni runs an animated `•••Explore More•••` marquee. **WCAG 2.2.2** requires that any
auto-starting motion running longer than five seconds can be paused, stopped or hidden — and
that applies regardless of `prefers-reduced-motion`, exactly as the intro's flash risk does. So
the device is specified as an **overlong static line**: full-bleed, horizontally clipped, no
animation, no pause control needed. If a future section wants real movement, it needs a
visible pause control and a decision recorded here first.

### The status chip's clock

A live clock is the one device with a rendering trap, and the first draft of this doc got the
trap wrong. The proposal was to render the **server's** value on first paint; but the home page
is **statically prerendered**, so "the server's value" is the *build* time — painting it would
show a stale clock and then snap to the real one. The chip therefore renders nothing, reserves
its width, and fills in on mount (`components/ui/status-chip.tsx`). There is still no hydration
mismatch, and the box never reflows.

The time is read in **`Asia/Manila`**, not the visitor's zone: the chapter's clock is the only
one that is true for the org. Until the recruitment state has an owner, the state-word slot
carries the literal `MANILA`, and the `//` separator is a pseudo-element so it stays out of the
accessible name.

The chip's state word is plain text and must not depend on the clock to be meaningful.

## Where the devices live

Every *content* section takes an index marker and a filename label. Two elements do not: the
**header** is the document's masthead rather than a part of it, and the **hero** *is* the page.
Neither is numbered, and the hero carries no label at all. Markers therefore start at `01` with
About, and each section's marker is its position in the page order.

The fourth column is the section's one other device. Blank means the section takes the label
and the marker and nothing else.

| § | Section | Label | Other |
| --- | --- | --- | --- |
| — | [header/nav](../sections/header-nav/README.md) | `index.html` | Status chip |
| — | [hero](../sections/hero/README.md) | *(none — the hero is the page, not a part of it)* | Equation band |
| 01 | [about](../sections/about/README.md) | `about.md` | — |
| 02 | [events](../sections/events/README.md) | `events.json` | Reference code |
| 03 | [executives & advisers](../sections/executives-advisers/README.md) | `officers.ts` | Metadata key |
| 04 | [gallery](../sections/gallery/README.md) | `gallery/` | — |
| 05 | [partners / sponsors](../sections/partners-sponsors/README.md) | `partners.json` | — |
| 06 | [CTA / join us](../sections/cta-join-us/README.md) | `join.sh` | Bracket label |
| — | [footer](../sections/footer/README.md) | *(none — the file listing was removed 2026-10-18)* | — |

Three consequences worth stating, because they are the difference between a system and a
decoration:

- **Markers are page order, not a permanent id.** Inserting a section renumbers everything
  below it. That is intended: the marker describes the page it is on, like the deck's own page
  numbers. Reference codes (`EVT.03`) are per-row and have the same property.
- **The footer's file listing was the payoff — and it has been removed (2026-10-18).** The
  labels now stand on their own as section metadata. If they start to read as decoration
  without the listing to collect them, that is the argument for bringing it back — see
  [footer](../sections/footer/README.md).
- **A label that would be false is not printed.** `officers.ts`'s per-person portrait filename
  appears only when the portrait exists; `join.sh` does not imply a script the site ships.

The label is the section's identity, so it is also **the anchor the nav links to**: `about.md`
lives at `#about`. Keep the stem and the slug in step.

## Rejects

Recorded so they are not re-proposed later.

| Device | Why not |
| --- | --- |
| OS status bar / phone chrome | A studio flourish. On an org site it reads as a mockup of a phone, not a site. |
| A draggable element | A novelty interaction with no informational value, and nothing to drag on a touch device. |
| "Cut along line", scissors, perforation | Borrows the *packaging* metaphor. Ours is the schematic — 45°/90°, traces, pads. |
| Certification stamps as boasts | "100% original and human-made" is a studio's sales line. Anything of this form here must be literally true about the org or it does not ship. |
| A cookie banner | The site sets no cookies. |
| Testimonials | See [README.md](../README.md) — no real quotes exist, and inventing them breaks §2. |
| Pricing / tiers | Same. No prices exist, and the mapping onto membership is a content decision, not a design one. |

## Copyright

neutomni is third-party work. This doc borrows **structure and idiom**, which is not
copyrightable, and nothing else:

- **No assets.** None of their images, and nothing derived from them, enters `public/`. The
  same rule as the mood board — see [moodboard.md](moodboard.md) and
  [`rules.md`](../rules.md) §10.
- **No copy.** Not a headline, not a label, not a button string. Where our copy resembles
  theirs it is because both are terse English.
- **No palette.** Their black/white/red and our obsidian/off-white/crimson+orange are
  structurally similar and independently derived; the tokens come from
  [color-palette.md](color-palette.md) and nowhere else, per [`rules.md`](../rules.md) §5.

## Implementation

The devices are built once, and live in one place each:

| Device | Where |
| --- | --- |
| Filename label, index marker | [`components/ui/devices.tsx`](../../components/ui/devices.tsx) |
| Rule | [`components/ui/devices.tsx`](../../components/ui/devices.tsx) — a `tone` picks carbon or burgundy |
| Status chip | [`components/ui/status-chip.tsx`](../../components/ui/status-chip.tsx) |
| Bracket label | `.bracket` in [`app/globals.css`](../../app/globals.css) — pseudo-elements, so the brackets stay out of the accessible name |

Every one of them carries its own `aria-hidden`: each labels or separates something the copy
already names, and the decision belongs to the component rather than to each call site.

The page order — and with it every marker and every filename label — has a single source:
[`lib/sections.ts`](../../lib/sections.ts). The header nav and the footer's file
listing both read it, so inserting a section renumbers the markers and extends the listing in
one edit.

Three of the four primitives are text plus CSS, which is the point — the idiom has to survive
being described in a table.

## Open questions

1. **Who approves the SVG line marks?** The rule, the trace motif and the route arrows all
   need a drawn form. It has to be authored (inline SVG, no new binary assets), and the
   geometry has to agree with the logo's 30° isometric stack — see
   [theme.md](theme.md#1-isometric-geometry).
2. **Is the filename label always monospace?** It is proposed as such, on the strength of
   [typography.md](typography.md)'s resolved open question 1, but the deck never says so.
3. **Does the index marker restart per page or run site-wide?** This doc assumes per page, since
   that matches the deck's own page numbering.
4. **Is `join.sh` right for the CTA?** It implies a script the visitor runs. `join.md` would be
   honest and duller; `join.sh` is the idiom. Decision owner: whoever approves the copy.
5. **How far does the blueprint treatment go on mobile?** A datasheet at 375px is mostly
   metadata, and metadata is the first thing to cut. The rule needs a stated mobile floor.
