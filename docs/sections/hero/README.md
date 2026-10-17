# Hero

> **Source status.** The deck has no hero spec, but its **cover (page 1, marked `01`)** is
> the closest reference: dark base, dimensional brand artwork, glow emission, and a single
> oversized word. The `icpep-hero-glow.png` asset exists precisely for this treatment.

## 1. Purpose

In one screen, tell the visitor who this is and give them one obvious thing to do next. If a
visitor leaves after the hero, they should still know the org's identity.

## 2. Placement and order

First section on the home page, directly beneath [header/nav](../header-nav/README.md).
Next is [about](../about/README.md).

## 3. Layout

- Full-viewport-height or near it (`min-h-[85vh]` proposal) so the entry reads as a moment.
- **Three bands, stacked:** the statement, the **equation band**, then the CTA. The equation
  band is what stops this being a headline sitting over a picture.
- **Two arrangements, one breakpoint:**
  - ≥ `lg`: split — statement and equation left, glow mark right.
  - < `lg`: stacked — statement, equation, mark, CTA.
- **Pillars:** *Atmospheric* (obsidian base, glow halo, emitted light), *Isometric Geometry*
  (the mark's 30° stack) and *Algorithmic* (the equation band and its labels). All three — which
  is why this is the one section allowed the top of the Display clamp.
- **The hero takes no filename label and no index marker.** Every other section is *a part of*
  the page and names itself as one; the hero *is* the page. It is also the only section that
  does not sit under a `.md`/`.json`/`.ts` name, because there is nothing above it to file it
  under. See [design-language.md](../../brand/design-language.md#where-the-devices-live).
- The glowing mark needs **breathing room** — the halo is a soft gradient and disappears
  against a busy edge. Keep ≥ 1× the mark's width of clear space.

## 4. Content and copy

| Field | Value | Source |
| --- | --- | --- |
| Headline | `TBC` | **Not in the deck** — the cover's word is the deck's own title |
| Subhead | Candidate: the vision statement | Deck page 2, but that is the About section's copy |
| Equation band | `PLAN → BUILD → DEPLOY → ↺` | Deck — the page-furniture motif |
| Primary CTA label | `TBC` — **not built** | The destination is unresolved; see below |
| Secondary CTA label | `TBC` — **not built** | Not in the deck |

**Both the headline and the subhead currently render as placeholder text**, fenced in
[`lib/placeholders.ts`](../../../lib/placeholders.ts) and tracked in
[tasks.md](../../tasks.md). They are lorem, not invented brand copy — [`rules.md`](../../rules.md)
§2 forbids the latter.

**The hero has no call to action yet.** Its one required field is a destination
([cta-join-us](../cta-join-us/README.md) §10.1 — Google Form, Discord, or an on-site form?), and
nothing in the repo knows it. A button that scrolls nowhere is a defect, so the action is
deferred rather than faked; the layout reserves its place at the end of the left column.

The vision statement — *"To establish a definitive, high-precision visual identity that
embodies the true duality of Computer Engineering…"* — is an **internal** statement about
the identity. It is not a hero headline and reads oddly as public copy. Do not paste it in
without a decision.

### The equation band

The deck prints `PLAN · BUILD · DEPLOY · REPEAT` on its own pages and never uses it. The hero is
where it earns its place: set as a *system* rather than as four words in a row, it is a
four-word answer to "what does this org do" that fits beside a headline.

**This settles a question the header and projects docs both left open.** The motif appears
**once per page**, and the hero is its home — the [header](../header-nav/README.md) carries the
wordmark, the links and the status chip and does not repeat it. The
[process](../process/README.md) section then explains the same four words as a sequence, which is
a different device reading the same source.

Read the last term as a **loop**, not a fourth task. Whether `REPEAT` is a step or the return
arrow on a three-step set is unresolved — see
[process](../process/README.md#10-open-questions).

## 5. Design tokens

| Element | Token |
| --- | --- |
| Background | `--color-obsidian` |
| Headline | `--color-white` (20.38:1) |
| Subhead | `--color-off-white` (17.31:1) |
| Accent / rule | `--color-bright-orange` (6.13:1) |
| Equation band | `--color-light-orange` (7.81:1) |
| Headline type | Display level — the deck's 120–180 pt @2048, clamped |
| Subhead type | Subheader level |
| Equation band type | Subheader level, **Mono**, uppercase, letter-spaced |

The hero is the **one** section allowed Display type at the top of the clamp range.

## 6. Required assets

| Asset | Path |
| --- | --- |
| Glow mark | `public/logos/icpep-hero-glow.png` |
| Optional flat fallback | `public/logos/icpep-primary.png` |

Alt text: `ICpEP SE – PUP Manila`. If the mark is purely decorative beside a headline that
already names the org, `alt=""` is the better choice.

`icpep-hero-glow.png` is the most visually expensive asset in the system. It appears twice on a
first visit, in two different roles: settled in this section, and as the landing image of the
[page intro](../../intro.md). The intro loads the derived `public/intro/glow.webp` rather than
this canonical file, so the two do not compete for bandwidth — but it is the same artwork.

Within the page itself, use it **once** — here. No other section takes it.

## 7. Interaction and states

- CTA *(not built)*: its proposed treatment is a solid bright-orange fill with Obsidian text
  (6.13:1 inverse), or outlined, hovering to `--color-light-orange`. The built
  [bracket action](../cta-join-us/README.md) uses that fill; the hero should not repeat it
  verbatim when it lands.
- Glow may pulse subtly on load. Any motion needs a `prefers-reduced-motion` fallback that
  renders the static halo.
- If the hero image is the LCP element: mark it `priority` in `next/image` and give explicit
  width/height to prevent layout shift.
- The equation band may rise with the rest of the hero on first view — see
  [motion.md](../../brand/motion.md). It carries no interaction.
- **Intro hand-off.** On a first visit, the intro's curtain lifts off this section. Mark the
  elements that should rise with it using the `data-intro-reveal` attribute; the hook is
  documented in [`intro.md`](../../intro.md). Nothing is marked yet. The attribute is
  decoration only — under reduced motion, on a repeat visit, or with no JS it does nothing, so
  the hero must lay out correctly without it. Do not rely on it for spacing or visibility.

## 8. Accessibility

- Exactly one `<h1>` on the page, and it belongs here.
- The CTA must be a real `<a>` or `<button>`, not a `div` with a click handler.
- Body/subhead text on Obsidian must use white/off-white — never maroon.
- If the glow pulses, the animation must stop under `prefers-reduced-motion: reduce`.
- **The equation band is not a heading.** Mark it up as a `<p>` or a `<ul>`, not as an `<h2>` —
  it is a statement, and a screen reader reading it as a section title would mis-describe the
  page. The arrows are decoration; the words carry the meaning, so `aria-hidden` belongs on the
  arrow glyphs only, and the band must still read correctly as
  "Plan, build, deploy, repeat".

## 9. Acceptance criteria

- [ ] Exactly one `<h1>` on the page, inside the hero.
- [ ] Headline remains legible at 320 px width without horizontal scroll.
- [ ] The glow mark never overlaps the headline text box.
- [ ] ~~The CTA is keyboard-focusable with a visible focus ring.~~ Not applicable while the hero
      has no CTA — see §4. Reinstated with the action.
- [ ] With reduced motion, no pulsing occurs and the halo renders statically. *(No pulse is
      built; the halo is static at every setting.)*
- [ ] Hero image is the LCP candidate and uses `priority` with explicit dimensions.
- [ ] The equation band reads in the right order with the arrow glyphs hidden.
- [ ] The motif appears once on the page, not also in the header.

## 10. Open questions

1. **What is the headline?** This is the site's single most important piece of copy and the
   deck supplies nothing. Who writes it?
2. Is the hero a **single screen with a CTA**, or a scroll-triggered sequence?
3. Which **CTA** does the hero promote — join, events, or projects?
4. Should the hero carry the `26-27` season chip as text (to survive a logo re-export)?
5. Is the **animated** version of the glow mark planned? The deck references motion studio
   aesthetics but supplies only a still.
6. **Does putting the motif in two sections risk reading as a stutter?** The hero and the
   process section read the same four words. The proposal is presentation (hero) then
   explanation (process); if that reads as repetition, the band is the one to drop, since the
   process section is the one that explains rather than decorates.
7. **Which reading order is correct** for the motif? See §4 — shared with the header doc.
