# Asset Inventory

Every brand asset known to exist, where it came from, and where it lives.

Naming convention for the deck: **"page N (marked M)"** distinguishes the PDF's physical
page from the number printed on it, because the deck's own numbering skips values.

## In the repo

All seven files below were extracted from the source deck. They are real, usable images —
not placeholders — but see [Provenance](#provenance) before shipping them.

| File | Deck page | Size | Alpha | Purpose |
| --- | --- | --- | --- | --- |
| `public/logos/icpep-primary.png` | page 8 (marked `08`) | 820 × 820 | Yes | Default full-colour lockup with trace wordmark |
| `public/logos/icpep-mark.png` | page 8 (marked `08`) | 1024 × 1024 | Yes | Mark only — avatars, favicons, tight spaces |
| `public/logos/icpep-mono.png` | page 8 (marked `08`) | 753 × 753 | Yes | White knockout for dark surfaces |
| `public/logos/icpep-hero-glow.png` | page 8 (marked `08`) | 658 × 607 | Yes | Hero variant with glow and neon traces. Re-cropped 2026-10-18 from the 1024² extraction (crop 46, 36, 895 × 826, scaled to 658 × 607) so the art fills the frame |
| `public/logos/icpep-lockup-obsidian.png` | page 10 (unmarked) | 710 × 355 | No | Horizontal white lockup, flattened onto Obsidian |
| `public/mascot/pixie-illustration.png` | page 9 (marked `10`) | 1229 × 1229 | Yes | Finished Pixie artwork |
| `public/mascot/pixie-model-sheet.png` | page 9 (marked `10`) | 1920 × 1080 | No | Pixie reference sheet — views, expressions, palette |

## Derived: intro assets

The page intro shuffles between the flat logo variants, then settles on the glowing one,
so `public/intro/` holds **derived** 576 × 576 WebP copies of four of them. This is not new
artwork — the originals in `public/logos/` remain canonical.

| Derived file | From | Role in the intro |
| --- | --- | --- |
| `public/intro/mono.webp` | `logos/icpep-mono.png` | Opening frame (the knockout reads as a silhouette), then a shuffle variant |
| `public/intro/mark.webp` | `logos/icpep-mark.png` | Shuffle variant — the stack alone |
| `public/intro/primary.webp` | `logos/icpep-primary.png` | Shuffle variant — with the trace wordmark |
| `public/intro/glow.webp` | `logos/icpep-hero-glow.png` | Reserved only as the landing; the glow ignites |

The four are **not** a fixed sequence. `glow` is deliberately excluded from the shuffle so it
can only appear as the payoff, and the remaining three are cycled in a randomised order that
never repeats back-to-back — with only three variants, a fixed cycle would read as a loading
spinner rather than a roulette. The shuffle decelerates into the landing; the timing lives in
one place at the top of `components/page-intro.tsx`.

Two things worth knowing:

- **They are normalised, not plain resizes.** The sources frame the artwork differently: in a
  common frame the mark's solid content spans 61% of the canvas width against 82% for the
  lockups, so it would render about a quarter smaller than them and every shuffle step would
  visibly jump. Each copy is instead scaled so the diamond stack spans the same 58.75% of the
  canvas width and sits at the same height — measured to within 1 px across all four.
- **576 px is 2× and correct.** The intro's frame is 288 px on desktop and shows the whole
  canvas, so the artwork lands at exactly 2×: the visible lockup renders at 238 × 161 px from
  474 px of source. Do not ship the 753–1024 px originals here: `icpep-hero-glow.png` alone is
  366 KB, and the four derived copies together are 132 KB.

Regenerate these whenever the `public/logos/` originals are replaced. The full procedure, its two
traps, and the verification table are in [../skills.md](../skills.md); the intro's behaviour is
in [../intro.md](../intro.md). See also
[../brand/logos.md](../brand/logos.md#open-questions) on sourcing vector originals.

## Alt text

Copy these verbatim; do not invent new wording per page.

| File | `alt` |
| --- | --- |
| `icpep-primary.png` | `ICpEP SE – PUP Manila` |
| `icpep-mark.png` | `ICpEP SE – PUP Manila logo` |
| `icpep-mono.png` | `ICpEP SE – PUP Manila` |
| `icpep-hero-glow.png` | `ICpEP SE – PUP Manila` |
| `icpep-lockup-obsidian.png` | `ICpEP SE – PUP Manila` |
| `pixie-illustration.png` | `Pixie, the official mascot of ICpEP SE – PUP Manila` |
| `pixie-model-sheet.png` | `Pixie reference sheet showing front and side views, expression studies and the character palette` |

When a logo is decorative (for example, repeated in a footer directly beneath the header
logo), use `alt=""` so screen readers skip it rather than announcing the org twice.

## Officer portraits

Supplied by the chapter on 2026-10-18 — **not** from the deck. Dark-backdrop, chest-up
portraits in mixed sizes and formats; the site frames each at 4:5 with `object-top`, so the
mixture does not show. Names and positions live in `data/officers.json`, and each portrait's
`alt` is `"<name>, <position>"` from there (empty until the name is filled in).

| File | Format | Size | Role in the roster |
| --- | --- | --- | --- |
| `public/officers/president.PNG` | PNG | 483 × 454 | Executive |
| `public/officers/vp4internal.png` | PNG | 941 × 1672 | Executive |
| `public/officers/vp4tech.jpg` | JPEG | 747 × 808 | Executive |
| `public/officers/vp4rel.PNG` | PNG | 732 × 739 | Executive |
| `public/officers/vp4marketing.jpeg` | JPEG | 1536 × 2752 | Executive |
| `public/officers/vp4graphics.png` | PNG | 941 × 1672 | Executive |
| `public/officers/secretary.png` | PNG | 941 × 1672 | Executive — renamed from an extensionless `secretary` so it is served as an image |
| `public/officers/avp4internal.JPG` | JPEG | 1536 × 2752 | Executive |
| `public/officers/avp4tech.PNG` | PNG | 691 × 575 | Executive |
| `public/officers/avp4rel.PNG` | PNG | 875 × 714 | Executive |
| `public/officers/avp4marketing.jpg` | JPEG | 768 × 1376 | Executive |
| `public/officers/avp4ops.png` | PNG | 941 × 1672 | Executive |
| `public/officers/vicepresident.jpg` | JPEG | 684 × 978 | Executive (added 2026-10-18) |
| `public/officers/vp4ops.jpg` | JPEG | 1148 × 2049 | Executive (added 2026-10-18) |
| `public/officers/treasurer.jpg` | JPEG | 1206 × 1204 | Executive (added 2026-10-18) |
| `public/officers/auditor.jpg` | JPEG | 1206 × 1153 | Executive (added 2026-10-18) |
| `public/officers/avp4graphics.jpg` | JPEG | 1206 × 1094 | Executive (added 2026-10-18) |
| `public/officers/adviser.jpg` | JPEG | 900 × 900 | Adviser |
| `public/officers/mascot.png` | PNG | 940 × 1672 | Pixie, as a 3D portrait in the same style — used by the Pixie card (alt as `pixie-illustration.png`) |

**Filenames are case-sensitive once deployed** (`president.PNG` ≠ `president.png`), and
`data/officers.json` must spell them exactly. Several are 2–3 MB; `next/image` resizes them on
request, but smaller originals would cut the first, uncached request.

## Deliberately not in the repo

| Asset | Deck page | Why it is excluded |
| --- | --- | --- |
| Cover artwork, 1603 × 1603 | page 1 (marked `01`) | Deck furniture — a title-slide graphic with no site use |
| Type specimen, 900 × 900 | page 6 (marked `07`) | The deck's own typography demonstration, not an asset |
| Five mood board images (820 × 461, 615 × 346, 820 × 461, 615 × 346, 856 × 470) | page 4 (marked `05`) | **Third-party reference work.** Copying these into `public/` would be a copyright problem — see [moodboard.md](../brand/moodboard.md) |

## Provenance

The PDF stores these as 8-bit RGB images with Flate compression; the transparent variants
carry a separate soft mask. Extraction composited each image with its mask to produce RGBA
PNGs. That means:

- **Pixel content is faithful** — no resampling, no recompression. The PNGs are lossless.
- **Colour may be very slightly off.** The PDF tags them with ICC profiles
  (`/ICCBased`), and a browser will interpret them as sRGB. For brand-accurate colour, come
  from the original source files.
- **These are rasters, 753–1920 px wide.** They are the deck's embedded copies, not the
  originals.

### Before production

Replace these with vector or high-resolution sources from the
[shared Drive folder](templates.md#shared-drive). Track that work as a task — the file
names above are stable, so replacing them is a drop-in operation with no code changes.

## Open questions

1. Are the **Drive sources** the canonical originals, or does the graphics team hold a
   separate master?
2. Should `icpep-lockup-obsidian.png` be regenerated with transparency so it composes on
   Carbon as well as Obsidian?
3. Do we need the **`26-27` chip removed** for a season-neutral version of the lockup?
4. Is there an approved **favicon / app icon** (or should the site derive one from
   `icpep-mark.png`)?
