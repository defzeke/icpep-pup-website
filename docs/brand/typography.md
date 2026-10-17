# Typography

Source: deck page `07` (*typography*).

> **Status — not yet implemented.** `app/layout.tsx` still loads **Geist** and **Geist Mono**
> via `next/font/google`, and `app/globals.css` maps those to `--font-sans` / `--font-mono`.
> The IBM Plex swap below is a **pending** change. Until it lands, the site renders in Geist,
> which is a scaffold default and not part of the brand. Nothing else depends on the swap.

## Typeface

**IBM Plex Sans** — one family, three weights, three responsibilities.

| Weight | Role per the deck |
| --- | --- |
| Bold | Heading |
| Medium | Subheading |
| Regular | Regular body text |

IBM Plex Sans is a **static (non-variable) Google Font**, so `next/font/google` requires an
explicit `weight` array — it cannot be loaded as a variable axis:

```tsx
// app/layout.tsx
import { IBM_Plex_Sans } from "next/font/google";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
  variable: "--font-plex",
});
```

That produces `--font-plex`, which the `@theme inline` block in `app/globals.css` maps onto
`--font-sans`, replacing the Geist setup. See the status note above — **this has not been done
yet**.

> Do not add weights the brand doesn't define. Four, six and seven-hundred are the system;
> introducing 300 or 600 dilutes the hierarchy.

## Type scale

The deck specifies sizes **at a 2048px base** — a design-canvas width, not a CSS pixel
value. The third column converts to a 1440px desktop reference (`× 1440 / 2048 ≈ 0.703`)
and is **derived, not quoted**.

| Level | Deck spec (at 2048px base) | ≈ at 1440px | Suggested role |
| --- | --- | --- | --- |
| Display / Big text | 120–180 pt+ | 84–127 px | Hero only |
| Titles | 72–96 pt | 51–68 px | Section headings |
| Subheaders | 36–48 pt+ | 25–34 px | Card titles, sub-sections |
| Body | 24–32 pt+ | 17–23 px | Paragraphs |
| Tags / Footers | 32–56 pt | 23–39 px | Labels, metadata, footers |

Because sizes are expressed against a canvas width, treat each level as a **clamp** rather
than a fixed `px` value — the ratio to viewport width is the invariant:

```css
/* ratio-preserving clamps, derived from the 2048px base */
--text-display: clamp(2.5rem, 8.8vw, 7.9rem);   /* 180/2048 =  8.8% */
--text-title: clamp(1.75rem, 4.7vw, 4.2rem);    /*  96/2048 =  4.7% */
--text-subheader: clamp(1.25rem, 2.3vw, 2.1rem);/*  48/2048 =  2.3% */
--text-body: clamp(1rem, 1.6vw, 1.4rem);        /*  32/2048 =  1.6% */
--text-label: clamp(0.875rem, 2.7vw, 2.4rem);   /*  56/2048 =  2.7% */
```

All values above are rounded and are **proposals** — the deck gives ranges, not curves.

## ⚠️ The Tags / Footers row is an anomaly

The deck puts **Tags / Footers at 32–56 pt**, which is *larger* than Body (24–32 pt). On a
website, tags and footers are normally the **smallest** text on the page. Either:

- the deck means something different by "tags/footers" (likely large social-media
  templates, e.g. a story-sized footer strip), or
- the number is a typo for a smaller range.

**Do not implement 32–56 pt footer text.** The `--text-label` clamp above is included for
completeness, not as a recommendation. The correct web behaviour is a small label size tied
to the Body minimum. This needs a decision — see Open questions.

## Hierarchy rules (derived from the deck's own layouts)

- **One Display per page.** The deck uses a single oversized word per page (`typography`,
  `color palette`, `Logos`) as the page's subject line.
- **Headings are sentence-title case, not all-caps.** The deck's big words are lowercase or
  sentence case.
- **All-caps + letter-spacing is reserved for metadata.** The mascot page uses
  `ID // PIXIE` and `ROLE // OFFICIAL MASCOT` — uppercase, letter-spaced, with `//` as a
  separator. Use this form for labels and keys, never for headings.
- **Numbering is a system.** Pages are marked `01`, `02`, `03`, `7.5`, `08`, `10` — a
  numeric marker in the corner. Reuse this as a section-index motif if you want a strong
  algorithmic signal.

## Open questions

1. **Is IBM Plex Mono part of the system?** The deck's terminal-style labels and `//`
   separators look monospaced, but only "IBM Plex Sans" is named. Confirm before using a
   monospace family for metadata.
2. **What is the Tags/Footers range really meant to be?** (See the anomaly note above.)
3. What are the **line-height and letter-spacing** rules? The deck specifies sizes only.
4. Is Display allowed to break out of the container, and how is it set on mobile — the deck
   geometry assumes a wide canvas.
5. Which weight carries **links and buttons**? Medium and Bold are both plausible.
