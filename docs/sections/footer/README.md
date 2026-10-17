# Footer

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

## 3. Layout

- ≥ `lg`: two or three columns — wordmark + one-line description, navigation, contact/social.
- < `lg`: stacked, wordmark first.
- A single **copyright bar** at the very bottom, separated by a hairline rule.
- **Pillars:** *Algorithmic* (strict alignment, small letter-spaced labels) and minimally
  *Interconnected* (a trace-derived divider rule). Keep this section quiet — it is not a
  place to show off the isometric stack.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Wordmark | image + org name | Yes | Deck |
| One-line description | short text | No | `TBC` |
| Navigation links | n × {label, href} | Yes | Deck (subset) |
| Social links | n × {platform, href} | No | `TBC` |
| Contact email | email | No | `TBC` |
| Copyright | `© <year> ICpEP SE – PUP Manila` | Yes | — |
| Credits | string | No | `TBC` |

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
| Labels | `--color-light-orange`, uppercase, letter-spaced |
| Divider rule | `--color-carbon` or a hairline of `--color-burgundy` |
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

- Links: hover to `--color-light-orange`, with a visible focus ring.
- External social links: `rel="noopener noreferrer"`.
- No "back to top" button unless the page is genuinely long — and if added, it must be a
  real button with an accessible name, not an icon alone.

## 8. Accessibility

- Wrap link groups in `<nav aria-label="Footer">` to distinguish it from the main nav.
- No heading is required for a footer. If one is used, it must be `<h2>` and must not
  disrupt the page's heading order — safer to omit it.
- Copyright text is content, not decoration; keep it real text, not part of an image.
- Ensure the focus order through the footer is logical (left to right, top to bottom).

## 9. Acceptance criteria

- [ ] Footer text is the smallest text on the page.
- [ ] Footer navigation is labelled distinctly from the main navigation.
- [ ] All external links carry `rel="noopener noreferrer"`.
- [ ] No `opacity`-dimmed text falls below 4.5:1 against the background.
- [ ] The org name is spelled consistently with the header, `<title>` and alt text.
- [ ] The footer contains no `<h1>`.

## 10. Open questions

1. **Which links belong in the footer?** The deck's nav (`Home`, `About Us`, `Service`,
   `Contact`) doesn't match the site's sections — same unresolved question as
   [header-nav](../header-nav/README.md#10-open-questions).
2. Which **social platforms** are official accounts? Facebook is typical for a student org;
   confirm rather than assume.
3. Is there a **public contact email**, or only a form?
4. Should the footer credit the **site's developers** (common for student org sites)?
5. Is there a **privacy notice** requirement for member data collection?
6. Which **year** goes in the copyright line, and is a fixed founding year used instead?
