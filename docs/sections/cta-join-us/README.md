# CTA / Join Us

> **Source status.** Nothing in the deck covers this section. The deck's nav includes
> **`Contact`** (deck pages 2–3, marked `02`/`03`), which is the closest related concept.
> Everything below is a proposal.
>
> **Build status — not built.** The section's one required field is its **destination**
> (§4 and §10.1), and nothing in the repo knows it. Its content model says the CTA is required
> rather than data-driven, so there is no honest empty state to ship: the section is held back
> until the join mechanism is decided. The [hero](../hero/README.md) is held back with it, since
> its action is this section's anchor.

## 1. Purpose

Convert a convinced visitor into a member. By this point the visitor has seen what the org
is, what it does and who runs it — this section asks for exactly one action and removes
every excuse not to take it.

## 2. Placement and order

Home page, after [faq](../faq/README.md). Immediately before
[footer](../footer/README.md). This is the page's last chance to convert, so nothing may be
squeezed between it and the footer.

CTA / Join Us is index marker **`09`**.

## 3. Layout

- A single, tall, visually distinct band — this section should not look like the ones
  before it, or it reads as more content rather than a closing call.
- ≥ `lg`: copy left, Pixie right. < `lg`: copy, CTA, then Pixie (or Pixie omitted on small
  screens if she crowds the action).
- **Pillars:** *Atmospheric* (this is the natural home for the glow treatment) and
  *Interconnected* (traces converging on the CTA button).
- Use `icpep-hero-glow.png` **only here or in the hero — never both on one page.** If the
  hero already uses it, give this section a differently-worded treatment: a wide, soft
  emission behind the heading.
- The section label is **`join.sh`** — a script, because this is the one section whose whole
  purpose is to be *run* rather than read. See
  [design-language.md](../../brand/design-language.md#where-the-devices-live).

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `join.sh` | Yes | Proposed |
| Index marker | `09` | Yes | Proposed |
| Heading | string | Yes | `TBC` |
| Supporting line | short text | No | `TBC` |
| Primary CTA label | string | Yes | `TBC` |
| Primary CTA destination | URL | Yes | `TBC` — see open questions |
| Secondary CTA label | string | No | `TBC` |
| Contact details | email \| socials | No | `TBC` |

**The primary CTA is rendered through the Bracket label device** — `[ Join ICpEP ]` — which is
the one device on the page whose entire purpose is to look like something you press. The
brackets are **CSS pseudo-elements**, not characters in the string: the accessible name must be
`Join ICpEP`, and a screen reader reading "left square bracket join I C p E P right square
bracket" is a defect. See
[design-language.md](../../brand/design-language.md#the-devices).

Brackets are **interactive affordances only** — never prose, never a heading. This section is
the only place they appear.

**Copy guidance from the brand's own register** (see
[overview.md](../../brand/overview.md#tone-of-voice)): declarative and confident, no
exclamation marks, no exclamation-style urgency. "Join ICpEP SE – PUP Manila" outperforms
"Don't miss out!!!" in this identity.

**Empty state:** not applicable — the CTA is required content, not data-driven.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Band background | `--color-obsidian`, or a maroon→crimson mass gradient with white text |
| Heading | `--color-white` |
| Body | `--color-off-white` |
| Primary button fill | `--color-bright-orange` with `--color-obsidian` text (6.13:1) |
| Primary button hover | `--color-light-orange` (7.81:1 on Obsidian) |
| Bracket glyphs | Inherit the button's text colour — they are part of the control |
| Secondary/ghost button | `--color-off-white` border and text |
| Filename label / index marker | `--color-light-orange`, Label level, **Mono** |
| Heading type | Title level |

If a **mass gradient** background is used, verify text contrast against the *lightest* point
of the gradient, not the average — the crimson end is 3.55:1 on white text at best and can
drop below 4.5:1.

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Pixie | `public/mascot/pixie-illustration.png` | Her best placement on the site — see [mascot.md](../../brand/mascot.md#where-pixie-belongs) |
| Glow mark | `public/logos/icpep-hero-glow.png` | Only if the hero does not use it |
| Bracket glyphs | None | CSS pseudo-elements |

**Caveat:** `pixie-illustration.png` has a **white background**, so she cannot sit directly
on Obsidian without a container or a transparent cutout. Options: place her inside a carbon
tile, or commission the transparent version. Do not fake a cutout by masking.

Alt text: `"Pixie, the official mascot of ICpEP SE – PUP Manila"`.

## 7. Interaction and states

- **One primary action.** If there are two buttons, the primary must be visually dominant;
  two equal buttons halve the conversion rate.
- Primary button states: rest, hover, focus (visible ring), active, disabled (while a form
  submits).
- If the CTA opens a form, the submit must be keyboard-operable and show a success state on
  the same page rather than navigating away.
- Hover is the `fast` duration and touches colour only — see
  [motion.md](../../brand/motion.md#the-vocabulary). The brackets do not animate apart.
- Reduced motion: no pulsing, no animated gradient.

## 8. Accessibility

- Section heading `<h2>`.
- The button must be an `<a>` (navigation) or `<button>` (action) — never a styled `div`.
- Button text must state the action ("Join ICpEP", "Open the application form"), not "Click
  here" or "Learn more".
- **The bracket glyphs must not be in the accessible name.** Use `::before` / `::after` on the
  button, not real characters, and confirm with a screen reader that the announced label
  contains no punctuation.
- If the primary CTA is the site's most important link, ensure it is reachable in a
  sensible tab order and not the last focusable element on the page.
- Contrast: bright-orange on Obsidian passes at 6.13:1. Do **not** use crimson fills with
  white text on dark for a large button — 3.55:1 fails body-text contrast.
- The filename label and index marker are decorative — `aria-hidden="true"`.

## 9. Acceptance criteria

- [ ] Exactly one visually dominant action.
- [ ] Button label describes the destination; no "click here".
- [ ] The button's accessible name contains no bracket characters.
- [ ] The button is focusable with a visible ring and works via keyboard.
- [ ] Orange button text on Obsidian measures ≥ 4.5:1 at the actual rendered size.
- [ ] Pixie sits in an intentional container on dark, not as a white rectangle.
- [ ] With reduced motion, no glow or gradient animation runs.
- [ ] The CTA appears before the footer in DOM order.
- [ ] Brackets appear nowhere outside this section.

## 10. Open questions

1. **What is the actual join mechanism** — Google Form, Facebook group, Discord, or an
   on-site form? This determines whether the button is a link or an action.
2. Is there a **membership fee**, and does the CTA need to mention it?
3. Is membership **open year-round** or during a recruitment window? A CTA that promises
   "Join" while recruitment is closed is a broken promise — say "Recruitment opens in
   August" instead. This is the same claim the [header](../header-nav/README.md) status chip
   would make, and the two must agree: **one owner, one source of truth** for recruitment state.
4. Should this section double as **Contact** (matching the deck's nav label)? Combining a
   join CTA and a contact form in one section is usually a mistake; they have different
   intents.
5. Is a **transparent-background Pixie** obtainable? Without it, this placement is limited.
6. **Is `join.sh` the right label?** It is the most assertive of the filename labels and the
   one most likely to read as a joke. `join.md` is honest and duller. Decision owner: whoever
   approves the copy.
