# Footer

> **Status — draft 2 (2026-10-18).** `components/common/site-footer.tsx`:
>
> - **Removed:** the Navigate file listing, the Local clock column, and the written email
>   address. The Connect icons stay, now with the chapter's real destinations (2026-10-19):
>   Facebook `facebook.com/icpepse.pupmanila`, Instagram `instagram.com/icpep.se_pup`, LinkedIn
>   `linkedin.com/company/icpepse-pupmanila`, and `mailto:icpepse.pupmanila@gmail.com`. The
>   three profiles open in a new tab (`rel="noopener noreferrer"`) and their accessible names add
>   "(opens in a new tab)"; the email icon is named with the address it opens.
> - **Logo:** `icpep-lockup-obsidian.png` — the white lockup made for dark surfaces — cropped to
>   its artwork (447 × 310 of 710 × 355, from 118, 22) and shown 112px tall, so its trace
>   wordmark is ~161px wide. The earlier `icpep-mono.png` at `h-10` rendered its 22.5%-of-canvas
>   artwork as an unreadable smear.
> - **Revealed from behind the page,** after neutomni: `main` is `relative z-10` with an opaque
>   Obsidian background and a soft shadow at its foot; the footer is `sticky bottom-0 z-0`, so it
>   waits beneath the page and is uncovered as the page scrolls up off it. Only on viewports at
>   least 720px tall — a footer taller than the screen would have its top permanently hidden.
>   It is **never raised above the page**: an earlier `focus-within:z-20` left it covering the
>   hero after "Back to top", because the clicked link kept focus. Instead,
>   `components/common/footer-reveal.tsx` scrolls to the end of the page when anything in the
>   footer gets **keyboard** focus (`:focus-visible`), uncovering it fully; mouse clicks are left
>   alone.
>
> The file listing and its accessible-name rules described below are superseded.
>
> **Source status.** The deck shows a footer-adjacent chrome on its pages: the wordmark
> `ICPEP SE – PUP MANILA` and the links `Home`, `About Us`, `Service`, `Contact`
> (deck pages 2–3, marked `02`/`03`). It gives no footer spec. Everything below is a
> proposal.

## 1. Purpose

Close the page cleanly. The footer is a utility area: repeat the navigation for visitors who
scrolled to the end, state the org's official identity, and give a contact route.

## 2. Placement and order

Last element on every page, after [cta-join-us](../cta-join-us/README.md). Nothing follows
it.

The footer carries **no index marker**. It is not one of the page's sections; it is the page's
colophon.

## 3. Layout

- ≥ `lg`: two or three columns — wordmark + one-line description, navigation, contact/social.
- < `lg`: stacked, wordmark first.
- A single **copyright bar** at the very bottom, separated by a hairline rule.
- **Pillars:** *Algorithmic* (strict alignment, small monospace labels) and minimally
  *Interconnected* (a trace-derived divider rule). Keep this section quiet — it is not a
  place to show off the isometric stack.

### The navigation column is a file listing

This is where the page's filename labels pay off. Every section above is labelled with its own
filename; the footer's navigation column lists them **as they were named**, in page order:

```
about.md      makefile      events.json   projects/     officers.ts
gallery/      partners.json FAQ.md        join.sh
```

That is both the section list and a map of the page, and it is the one place where the naming
device is *useful* rather than decorative — a visitor who has been reading `events.json` all
along can find it again here. It also answers the "which links belong in the footer" question
by construction: the footer links to every section that exists on the page, in order, under the
name the page gave it.

Three limits keep it from becoming a gimmick:

- **Each entry's accessible name leads with the human name** — not the filename. A screen
  reader should not spell out an extension. It cannot drop the filename either: WCAG **2.5.3
  (Label in Name)** requires the accessible name to contain the text that is visible, and the
  visible text here *is* a filename. The built footer writes `aria-label="About Us (about.md)"`.
  An `aria-label` of just `About Us` — which this doc originally specified — fails 2.5.3.
- **The stem is a real anchor.** `about.md` links to `#about`; see
  [design-language.md](../../brand/design-language.md#where-the-devices-live).
- **Do not add filenames that are not sections** (`styles.css`, `main.js`) for flavour. The
  device means "this is the file", and a file that does not exist is a lie.

The **header** deliberately does not do this — see
[header-nav](../header-nav/README.md#4-content-and-copy).

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Wordmark | image + org name | Yes | Deck |
| One-line description | short text | No | `TBC` |
| Section links | n × {filename, label, href} | Yes | Proposed — one per section |
| Social links | n × {platform, href} | No | `TBC` |
| Contact email | email | No | `TBC` |
| Copyright | `© <year> ICpEP SE – PUP Manila` | Yes | — |
| Credits | string | No | `TBC` |

**Empty state:** the wordmark, the section list and the copyright line are all required, so the
footer can always render — though the file listing is as short as the page is.

**The copyright year** is read once at build, behind Next 16's `"use cache"` directive
(`components/site-footer.tsx`): Next refuses to prerender a bare `new Date()`, and the directive
is the sanctioned way to pin a value that is a build-time fact rather than a per-request one. It
therefore advances when the site is deployed, not when the year ticks over — fine for a student
org site, and worth revisiting if the footer ever gains a fixed founding year (see §10).

**Two copy traps in this section:**

1. **Do not set footer text large.** The deck's "Tags / Footers: 32–56 pt" figure is larger
   than its body size and is an anomaly — see
   [../../brand/typography.md](../../brand/typography.md#-the-tags--footers-row-is-an-anomaly).
   Footer text must be the smallest on the page.
2. **Use one spelling of the org name.** The deck writes `ICPEP` in artwork and running
   text; the footer is where a mismatch becomes permanent. Decide and apply it everywhere
   (see [overview.md](../../brand/overview.md#open-questions)).

## 5. Design tokens

| Element | Token |
| --- | --- |
| Background | `--color-obsidian` (or `--color-carbon` to separate from a Carbon CTA band) |
| Body / links | `--color-off-white`, but **reduced emphasis** only via size and weight — not opacity so low it fails contrast |
| Filename entries | `--color-light-orange`, Label level, **Mono** |
| Labels | `--color-light-orange`, uppercase, letter-spaced, **Mono** |
| Divider rule | `--color-carbon`, or a hairline of `--color-burgundy` |
| Link type | Label level, the smallest in the system |

Avoid `text-white/50`-style opacity dimming: it silently drops contrast below AA. If the
footer should look secondary, achieve it with a smaller size, not a faded colour.

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Wordmark | `public/logos/icpep-mono.png` | White knockout for the dark footer |
| Wordmark (opaque alt) | `public/logos/icpep-lockup-obsidian.png` | If a full lockup is wanted |
| Social icons | **MISSING** | No icon set exists in the brand system |

If the header already displays the full lockup, the footer may use the **mark only**
(`icpep-mark.png`) plus the org name as text — repeating the full lockup twice on one page
is redundant.

Alt text: if the org name is already present as text beside the logo, use `alt=""` for the
image so screen readers do not announce it twice.

## 7. Interaction and states

- Links: hover to `--color-light-orange`, with a visible focus ring, at the `fast` duration
  from [motion.md](../../brand/motion.md#the-vocabulary).
- External social links: `rel="noopener noreferrer"`.
- No "back to top" button unless the page is genuinely long — and if added, it must be a
  real button with an accessible name, not an icon alone. On a twelve-section page it probably
  is warranted; decide from the built page, not from here.

## 8. Accessibility

- Wrap link groups in `<nav aria-label="Footer">` to distinguish it from the main nav.
- No heading is required for a footer. If one is used, it must be `<h2>` and must not
  disrupt the page's heading order — safer to omit it.
- Copyright text is content, not decoration; keep it real text, not part of an image.
- Ensure the focus order through the footer is logical (left to right, top to bottom).
- **The filename entries need text alternatives.** Each link's visible text is a filename and
  its accessible name leads with the human section name, so an `aria-label` per link is
  required — without it, a screen reader announces a file, not a destination. The filename
  stays in the label as well, for [WCAG 2.5.3](#the-navigation-column-is-a-file-listing).
- Do not `aria-hidden` the filename text on these links. Unlike the decorative section labels,
  this text *is* the link's visible content, and hiding it would leave a focusable element with
  no visible label.

## 9. Acceptance criteria

- [ ] Footer text is the smallest text on the page.
- [ ] Footer navigation is labelled distinctly from the main navigation.
- [ ] All external links carry `rel="noopener noreferrer"`.
- [ ] No `opacity`-dimmed text falls below 4.5:1 against the background.
- [ ] The org name is spelled consistently with the header, `<title>` and alt text.
- [ ] The footer contains no `<h1>`.
- [ ] Every section name in the listing links to a real anchor on the page.
- [ ] Every section link's accessible name contains the visible filename **and** leads with the
      human name.
- [ ] No filename appears that is not a section.

## 10. Open questions

1. **Which links belong in the footer?** This doc's answer is "all of them, as filenames" —
   but the deck's nav (`Home`, `About Us`, `Service`, `Contact`) still does not match the
   site's sections, and the same question is open in
   [header-nav](../header-nav/README.md#10-open-questions).
2. Which **social platforms** are official accounts? Facebook is typical for a student org;
   confirm rather than assume.
3. Is there a **public contact email**, or only a form?
4. Should the footer credit the **site's developers** (common for student org sites)?
5. Is there a **privacy notice** requirement for member data collection?
6. Which **year** goes in the copyright line, and is a fixed founding year used instead?
7. **Does a nine-entry file listing fit the layout,** or does it need two rows at `lg`? In the
   abstract it does; only the built page will say.
