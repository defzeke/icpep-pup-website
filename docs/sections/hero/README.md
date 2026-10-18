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

- Full-viewport-height (`min-h-screen`) so the entry reads as a moment and the next section
  does not peek.
- **The header's full-width wordmark is the statement.** Following the
  [neutomni](https://neutomni.com/) masthead, the org's name is the page's largest type and lives
  in the [header](../header-nav/README.md); the hero beneath it carries no visible headline,
  subhead or buttons (removed by decision, 2026-10-18).
- **A pinned scroll sequence** (2026-10-18, after neutomni's pinned showreel and portfolio).
  The section is 500vh tall; a sticky, viewport-high stage holds still for the first 400vh of
  scroll while one GSAP timeline plays against scroll position, then the page scrolls on
  normally. Over that distance:

  | Scroll | What happens |
  | --- | --- |
  | 0–20% | The glow mark, centred, zooms to 1.3×; the four layer labels fade out |
  | 22–46% | The mark slides left into its column and settles back to 1×, while a maroon wash (`.hero-wash`: maroon → deep maroon → Obsidian, centred where the mark lands) fades in behind it |
  | 34–46% | `ICPEP.SE PUP MANILA` fades in on the right |
  | 54–62% | The name fades out, rising |
  | 60–70% | The **tagline** fades in from a 10px blur |
  | 76–84% | The tagline fades out, rising |
  | 82–92% | The **description** fades in from a 10px blur |
  | 92–100% | Hold, then the stage releases |

  Below `lg` the same sequence runs vertically: the mark rises from the centre and the text
  appears beneath it.

  The four layer labels: 01 top-left and 03 top-right sit at the mark's upper corners, while
  **02 and 04 sit just below the mark's box** (`-bottom-6`), right and left. The `ICPEP` and
  `SE PUP` traces reach to within ~6.5% of the image's bottom edge on both sides, so any lower
  position inside it collides with them. The stage's bottom 35svh fades to `--color-carbon` so
  the hero meets [about](../about/README.md) without a seam, wash or no wash.
- **The resting layout is the finished one.** With no JS or with reduced motion there is no pin
  and no sequence: the section is one viewport tall, the mark sits left (above, below `lg`) with
  its labels, and the name and phrase are stacked on the right. JS opts into the animated layout
  by setting `data-animated` on the section; reverting the timeline removes it.
- **Pillars:** *Atmospheric* (obsidian base, glow halo, emitted light), *Isometric Geometry*
  (the mark's 30° stack) and *Algorithmic* (its labels). All three — which
  is why this is the one section allowed the top of the Display clamp. (The equation band was
  removed 2026-10-18.)
- **The hero takes no filename label and no index marker.** Every other section is *a part of*
  the page and names itself as one; the hero *is* the page. It is also the only section that
  does not sit under a `.md`/`.json`/`.ts` name, because there is nothing above it to file it
  under. See [design-language.md](../../brand/design-language.md#where-the-devices-live).
- The glowing mark needs **breathing room** — the halo is a soft gradient and disappears
  against a busy edge. Keep ≥ 1× the mark's width of clear space.

## 4. Content and copy

| Field | Value | Source |
| --- | --- | --- |
| `<h1>` | `ICPEP.SE PUP MANILA`, **visually hidden** | The org's name |
| Visible name | `ICPEP.SE PUP MANILA`, Title level, Bold, `aria-hidden` (the `<h1>` already says it) | The org's name |
| Tagline | "Connecting Passion, Empowering Innovation" — Statement level, the second half in light orange | The chapter (2026-10-19) |
| Description | "A student-led organization dedicated to nurturing the skills, knowledge, and leadership of Computer Engineering students." — Subheader level | The chapter (2026-10-19) |
| Season line | *(none — removed 2026-10-18)* | — |
| Visible headline / subhead | *(none — removed 2026-10-18)* | — |
| Equation band | *(none — removed 2026-10-18)* | — |
| Primary / secondary CTA | *(none — removed 2026-10-18)* | The join destination is still unresolved |

**The page's one `<h1>` stays, hidden.** With the visible headline gone, the hero would have no
heading and the page no `<h1>`, so screen-reader users would lose the page's title. The name is
not invented copy: it is the org's own, as in the alt text in
[inventory.md](../../assets/inventory.md).

**The hero has no call to action.** It was removed with the headline; the page's ask lives in
[cta-join-us](../cta-join-us/README.md), whose destination is still undecided (§10.1 there).

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

| Accent / rule | `--color-bright-orange` (6.13:1) |


The hero sets no Display type of its own any more: the page's display type is the header's
full-width wordmark directly above it.

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

- No interactive elements: the hero carries no links or buttons.
- **Scroll sequence** (§3): `sections/hero/components/hero-scroll.tsx`. GSAP core only, in a
  `gsap.matchMedia` for `prefers-reduced-motion: no-preference`. Progress is the section's
  scrolled fraction, read on `scroll`; it is not ScrollTrigger. The logo's centring offset is
  measured from `offsetLeft`/`offsetTop`, so transforms never feed back into it, and the timeline
  is rebuilt when the viewport *width* changes (never the height, so a mobile URL bar can't
  rebuild it mid-scroll).
- Glow may pulse subtly on load. Any motion needs a `prefers-reduced-motion` fallback that
  renders the static halo.
- If the hero image is the LCP element: mark it `priority` in `next/image` and give explicit
  width/height to prevent layout shift.
- (The equation band was removed 2026-10-18.)
- **Intro hand-off.** On a first visit, the intro's curtain lifts off this section. Mark the
  elements that should rise with it using the `data-intro-reveal` attribute; the hook is
  documented in [`intro.md`](../../intro.md). Nothing is marked yet. The attribute is
  decoration only — under reduced motion, on a repeat visit, or with no JS it does nothing, so
  the hero must lay out correctly without it. Do not rely on it for spacing or visibility.

## 8. Accessibility

- Exactly one `<h1>` on the page, and it belongs here — visually hidden (`sr-only`), not removed.
- Any text on Obsidian must use white/off-white or the orange family — never maroon.
- If the glow pulses, the animation must stop under `prefers-reduced-motion: reduce`.
- (The equation band was removed 2026-10-18.)

## 9. Acceptance criteria

- [ ] Exactly one `<h1>` on the page, inside the hero, reading "ICPEP.SE PUP MANILA" to a
      screen reader and invisible on screen.
- [ ] The page does not scroll past the hero until the sequence in §3 has played; scrolling back
      up plays it in reverse.
- [ ] At 1440 px the mark ends in the left half and the name and phrase in the right half, never
      overlapping.
- [ ] With reduced motion or no JS, the hero is one viewport tall, nothing moves, and the name
      and the phrase are both readable.
- [ ] No horizontal scroll at 320 px.
- [ ] With reduced motion, no pulsing occurs and the halo renders statically. *(No pulse is
      built; the halo is static at every setting.)*
- [ ] Hero image is the LCP candidate and uses `priority` with explicit dimensions.
- [ ] (The equation band was removed 2026-10-18.)
- [ ] The motif appears once on the page, not also in the header.

## 10. Open questions

1. ~~**What is the headline?**~~ **Answered — none.** The header's wordmark is the statement
   (2026-10-18). Revisit if a tagline is ever written, the way neutomni pairs its wordmark with
   one.
2. ~~Is the hero a **single screen**, or a scroll-triggered sequence?~~ **Answered — a pinned
   sequence** (§3). Open: is 300vh of pinned scroll too long for a visitor who just wants the page?
3. ~~Which **CTA** does the hero promote?~~ **Answered — none**; the ask is the CTA section's.
4. Should the hero carry the `26-27` season chip as text (to survive a logo re-export)?
5. Is the **animated** version of the glow mark planned? The deck references motion studio
   aesthetics but supplies only a still.
6. **Does putting the motif in two sections risk reading as a stutter?** The hero and the
   process section read the same four words. The proposal is presentation (hero) then
   explanation (process); if that reads as repetition, the band is the one to drop, since the
   process section is the one that explains rather than decorates.
7. **Which reading order is correct** for the motif? See §4 — shared with the header doc.
