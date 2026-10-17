# Typography

Source: deck page `07` (*typography*).

> **Status — implemented.** `app/layout.tsx` loads **IBM Plex Sans** and **IBM Plex Mono** via
> `next/font/google`, and the `@theme inline` block in `app/globals.css` maps them onto
> `--font-sans` / `--font-mono`. Geist is gone.

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
`--font-sans`. Geist is no longer loaded.

> Do not add weights the brand doesn't define. Four, six and seven-hundred are the system;
> introducing 300 or 600 dilutes the hierarchy.

## Mono — metadata only

**IBM Plex Mono** carries metadata: the `//` keys, section labels, index markers, reference
codes and filenames specified in [design-language.md](design-language.md). It is the same
superfamily as the Sans, so the two share proportions.

This is a **proposal that fills a gap**, not a quote. The deck's terminal-style labels "look
monospaced" and name only "IBM Plex Sans" — so the gap was real, and a monospace is what makes
the idiom read as *technical* rather than as a typeface preference. Letter-spaced Sans in the
same role reads as styling; Mono reads as a machine writing.

| Weight | Role |
| --- | --- |
| Medium | Labels, keys and codes — the default for metadata |
| Regular | Longer metadata runs, such as the footer's link list |

Also a static family, so it needs an explicit weight array too:

```tsx
// app/layout.tsx
import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});
```

`--font-plex-mono` maps onto `--font-mono` in the same `@theme inline` block that maps the Sans
onto `--font-sans`.

**The rule: Mono is metadata, never prose.** It does not set headings, body copy, buttons, or a
link that reads as a sentence. Two limits follow:

- **Never monospace a whole paragraph**, or anything past about two lines. Mono is for short
  fields; a column of it is measurably slower to read than the Sans at the same size.
- **Give it its own size.** Mono and Sans at the same nominal size do not look the same size —
  Mono needs to be set slightly larger to appear equal, so a mixed metadata row is tuned by eye
  against its Sans neighbour, not matched by value.

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
/* ratio-preserving clamps, derived from the 2048px base. Live in app/globals.css. */
--text-display: clamp(2.5rem, 8.8vw, 7.9rem);   /* 180/2048 =  8.8% */
--text-title: clamp(1.75rem, 4.7vw, 4.2rem);    /*  96/2048 =  4.7% */
--text-subheader: clamp(1.25rem, 2.3vw, 2.1rem);/*  48/2048 =  2.3% */
--text-body: clamp(1rem, 1.6vw, 1.4rem);        /*  32/2048 =  1.6% */
--text-label: 0.875rem;                         /*  14px — see the anomaly note */
```

All values above are rounded, and the deck gives ranges rather than curves.

Each level also carries a line height, which the deck does not specify:

```css
--text-display--line-height: 0.95;
--text-title--line-height: 1.05;
--text-subheader--line-height: 1.2;
--text-body--line-height: 1.65;
--text-label--line-height: 1.3;
```

These are Tailwind `--text-*` theme entries, so `text-display` sets the size and its leading
together and a section never hand-tunes either. Display's sub-1 leading is what keeps the top
of the clamp from setting as four separate lines.

## ⚠️ The Tags / Footers row is an anomaly

The deck puts **Tags / Footers at 32–56 pt**, which is *larger* than Body (24–32 pt). On a
website, tags and footers are normally the **smallest** text on the page. Either:

- the deck means something different by "tags/footers" (likely large social-media
  templates, e.g. a story-sized footer strip), or
- the number is a typo for a smaller range.

**Do not implement 32–56 pt footer text.** The clamp derived from that row
(`clamp(0.875rem, 2.7vw, 2.4rem)`) is deliberately **not** in `app/globals.css`: `--text-label`
is a flat 14 px. The correct web behaviour is a small label size tied to the Body minimum. This
needs a decision — see Open questions.

## Hierarchy rules (derived from the deck's own layouts)

- **One Display per page.** The deck uses a single oversized word per page (`typography`,
  `color palette`, `Logos`) as the page's subject line.
- **Headings are sentence-title case, not all-caps.** The deck's big words are lowercase or
  sentence case.
- **All-caps + letter-spacing is reserved for metadata.** The mascot page uses
  `ID // PIXIE` and `ROLE // OFFICIAL MASCOT` — uppercase, letter-spaced, with `//` as a
  separator. Set this form in **Mono** and use it for labels and keys, never for headings.
- **Numbering is a system.** Pages are marked `01`, `02`, `03`, `7.5`, `08`, `10` — a
  numeric marker in the corner. Reuse this as a section-index motif if you want a strong
  algorithmic signal.

## Open questions

1. ~~**Is IBM Plex Mono part of the system?**~~ **Resolved — yes, for metadata only.** See
   [Mono — metadata only](#mono--metadata-only) above. The deck names only Sans, so this is a
   proposal filling a gap; it is recorded here rather than deleted so the decision has a
   provenance.
2. **What is the Tags/Footers range really meant to be?** (See the anomaly note above.)
3. ~~What are the **line-height and letter-spacing** rules?~~ **Partly resolved.** Line heights
   are live in `app/globals.css` — see the Type scale section. Letter-spacing is per device, not
   per level: `0.16em` for labels, keys and links, `0.08em` for the hero's equation band.
4. Is Display allowed to break out of the container, and how is it set on mobile — the deck
   geometry assumes a wide canvas.
5. ~~Which weight carries **links and buttons**?~~ **Resolved — Medium (500)** for both. The
   site is all-caps at label size, where Bold reads as a shout and Regular loses the weight
   against the dark base.
