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
- **Two arrangements, one breakpoint:**
  - ≥ `lg`: split — display headline left, glow mark right.
  - < `lg`: stacked — headline, then mark, then CTA.
- **Pillars:** *Atmospheric* (obsidian base, glow halo, emitted light) and *Isometric
  Geometry* (the mark's 30° stack). Those are the two this section must carry.
- The glowing mark needs **breathing room** — the halo is a soft gradient and disappears
  against a busy edge. Keep ≥ 1× the mark's width of clear space.

## 4. Content and copy

| Field | Value | Source |
| --- | --- | --- |
| Headline | `TBC` | **Not in the deck** — the cover's word is the deck's own title |
| Subhead | Candidate: the vision statement | Deck page 2, but that is the About section's copy |
| Primary CTA label | `TBC` | Not in the deck — see [cta-join-us](../cta-join-us/README.md) |
| Secondary CTA label | `TBC` | Not in the deck |

The vision statement — *"To establish a definitive, high-precision visual identity that
embodies the true duality of Computer Engineering…"* — is an **internal** statement about
the identity. It is not a hero headline and reads oddly as public copy. Do not paste it in
without a decision.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Background | `--color-obsidian` |
| Headline | `--color-white` (20.38:1) |
| Subhead | `--color-off-white` (17.31:1) |
| Accent / rule | `--color-bright-orange` (6.13:1) |
| Headline type | Display level — the deck's 120–180 pt @2048, clamped |
| Subhead type | Subheader level |

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

- CTA: solid bright-orange fill with Obsidian text (6.13:1 inverse), or outlined. Hover
  shifts to `--color-light-orange`.
- Glow may pulse subtly on load. Any motion needs a `prefers-reduced-motion` fallback that
  renders the static halo.
- If the hero image is the LCP element: mark it `priority` in `next/image` and give explicit
  width/height to prevent layout shift.
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

## 9. Acceptance criteria

- [ ] Exactly one `<h1>` on the page, inside the hero.
- [ ] Headline remains legible at 320 px width without horizontal scroll.
- [ ] The glow mark never overlaps the headline text box.
- [ ] The CTA is keyboard-focusable with a visible focus ring.
- [ ] With reduced motion, no pulsing occurs and the halo renders statically.
- [ ] Hero image is the LCP candidate and uses `priority` with explicit dimensions.

## 10. Open questions

1. **What is the headline?** This is the site's single most important piece of copy and the
   deck supplies nothing. Who writes it?
2. Is the hero a **single screen with a CTA**, or a scroll-triggered sequence?
3. Which **CTA** does the hero promote — join, events, or projects?
4. Should the hero carry the `26-27` season chip as text (to survive a logo re-export)?
5. Is the **animated** version of the glow mark planned? The deck references motion studio
   aesthetics but supplies only a still.
