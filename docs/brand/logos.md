# Logos

Source: deck page `08` (*Logos*), page `10` (dark-background lockup), and page `01` (cover).
All files listed here are already in the repo under `public/logos/`.

## The mark

A **stack of three isometric diamond layers**, lit from above: bright orange top layer,
crimson middle, deep maroon base. At the centre, a **white five-point star** sits inside a
dark diamond frame. **PCB bus traces** with solder nodes fan out from the stack, and in the
full lockup those traces carry the letterforms `ICPEP` (left) and `SE PUP` (right). A small
chip at the lower right of the stack reads **`26-27`** — the academic year.

The star is the only element that is pure white in the primary mark: it is the focal point,
and it is what the "Integrate" idea resolves to. Protect it.

## Variants

| File | Size | Contains | Use on |
| --- | --- | --- | --- |
| `icpep-primary.png` | 820 × 820 | Full colour, star + `ICPEP SE PUP` trace wordmark + `26-27` chip | Light surfaces — the default lockup |
| `icpep-mark.png` | 1024 × 1024 | Mark only: diamond stack + star, **no wordmark, no glow** | Avatars, favicons, tight spaces, app tiles |
| `icpep-mono.png` | 753 × 753 | White knockout lockup. Opaque area is **22.5%** of the canvas and is near-uniformly white; the star and traces are **transparent negative space** | Dark surfaces (Obsidian / Carbon) |
| `icpep-hero-glow.png` | 1024 × 1024 | Full colour lockup with **glow halo** and neon traces | The hero, and the [page intro](../intro.md) landing. Nowhere else |
| `icpep-lockup-obsidian.png` | 710 × 355 | Horizontal **white-on-black** lockup, already flattened onto an Obsidian background (opaque, no alpha) | Dark headers, social banners, Open Graph images |

Notes:

- `icpep-mono.png` has **no opaque star** — the star and traces are holes. It is invisible
  on white. If you need white artwork on a light background you have the wrong variant.
- `icpep-lockup-obsidian.png` has **no transparency**. Do not place it on a non-Obsidian
  surface; the rectangle will show.
- `icpep-hero-glow.png` carries a soft emission gradient. It is the most expensive asset
  visually, so within one page it is used **once** — in the hero. The [page intro](../intro.md)
  also lands on this artwork, but it loads the derived `public/intro/glow.webp` (576px), not
  this canonical file, so the two do not compete.

## Choosing a variant

```
Need the wordmark?
├── No  → icpep-mark.png
└── Yes → On a dark background?
          ├── Yes → icpep-mono.png  (or icpep-lockup-obsidian.png if the
          │        canvas must be opaque, e.g. a social image)
          └── No  → Is this a hero / feature moment?
                    ├── Yes → icpep-hero-glow.png
                    └── No  → icpep-primary.png
```

## Clear space and sizing (proposed)

The deck states no clear-space or minimum-size rules. Until it does, apply these, and treat
them as a placeholder for the graphics team's real numbers:

- **Clear space:** at least the height of the star (≈ 12% of the mark's width) on all sides.
- **Minimum size:** 32 px for `icpep-mark.png`; 96 px width for any lockup with the trace
  wordmark, since the traces lose legibility below that.
- **Scaling:** always scale proportionally. Never squash or stretch.

## Don't

- **Don't** recolour the mark, or apply a new gradient to the layers.
- **Don't** separate the star from the diamond stack, or reuse the star as a generic icon.
- **Don't** outline, emboss, drop-shadow or add a stroke to the mark.
- **Don't** rotate it off the isometric axis, or mirror it.
- **Don't** place the full-colour lockup on a busy photographic background.
- **Don't** crop the traces to fit a container — switch to `icpep-mark.png` instead.
- **Don't** change the `26-27` chip by hand; request a re-export.
- **Don't** use the mark as a bullet, a background pattern, or a watermark at low opacity.

## The academic-year chip

`26-27` is part of the artwork, in all full lockups. A new academic year requires a
**re-export of every variant**, not a text edit. Record who owns that here once known.

## Accessibility

- Alt text: `"ICpEP SE – PUP Manila"` for the lockup; `"ICpEP SE – PUP Manila logo"` for the
  mark when it appears alone as a link target.
- When a logo is the only content of a link in the header, the link still needs an
  accessible name — see [../sections/header-nav/README.md](../sections/header-nav/README.md).
- Never rely on colour alone to distinguish the mark from a background; if in doubt, use a
  variant with the correct contrast.

## Open questions

1. **Are vector sources available?** The repo currently holds PDF rasters (753–1024 px).
   Source SVG/AI lives in the [shared Drive folder](../assets/templates.md). Production
   should use vector, not these PNGs.
2. What are the **official clear-space and minimum-size** numbers?
3. Is the org name **"ICpEP"** or **"ICPEP"**? See
   [overview.md](overview.md#open-questions) — the wordmark artwork uses `ICPEP`.
4. Is there an approved **favicon / app icon** derivation of the mark?
5. Is `26-27` correct for the current live season?
