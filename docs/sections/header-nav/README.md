# Header / Navigation

> **Status — draft 5.** The topbar is a text wordmark (`ICPEP.SE PUP MANILA`, IBM Plex Sans Bold) that
> opens at the full container width, shrinks into the top-left corner as the visitor scrolls,
> then blurs into the `icpep-mono.png` logo — after the [neutomni](https://neutomni.com/)
> masthead (see [moodboard.md](../../brand/moodboard.md)). The status chip and the `index.html`
> label are gone (the clock lives in the hero and footer). See
> `components/common/site-header.tsx`.
>
> **Source status.** The deck does not document the header as a section, but it *shows* one
> on every page: the wordmark `ICPEP SE – PUP MANILA`, the four links `Home`, `About Us`,
> `Service`, `Contact`, and the four-word motif `PLAN` `BUILD` `DEPLOY` `REPEAT`
> (deck pages 2 and 3, marked `02`/`03`). Everything about behaviour below is a proposal.

## 1. Purpose

Give the visitor a permanent sense of place and a way back. The header answers "where am I"
and "where can I go" without competing with the page it sits above.

## 2. Placement and order

First element on every page, above [hero](../hero/README.md). It is the only section that
appears site-wide, so it carries the site's identity — no other section should repeat the
full lockup at equal size.

## 3. Layout

- **A wordmark that fills the container, then shrinks into the corner.** The bar carries a single
  text wordmark, `ICPEP.SE PUP MANILA`, set at the Display level's face — **IBM Plex Sans Bold**,
  `tracking-tight`, `--color-off-white` — and it is a link to `#top`. At the top of the page it
  spans the full viewport width, sized by CSS alone: `100cqw / 10.421`. 10.896em is
  the sum of the nineteen glyphs' Plex Sans Bold advances (measured from the font's `hmtx`),
  less 19 × 0.025em of tracking; kerning is switched off so the sum is exact. **Changing the
  text, the font, the weight or the tracking breaks the fill** — re-measure. Its line height is
  0.8, which hugs the caps (cap height 0.698em). As the visitor scrolls it scales down from its
  top-left corner to 24 px, **linked to scroll position** rather than played as a timed
  transition, landing vertically centred in an 88 px bar.
- **Then it becomes the logo.** *(Removed 2026-10-18 — the compact `icpep-mono.png` logo no longer
  appears.)* Previously, when the shrink completed, the wordmark blurred out while `icpep-mono.png`
  blurred in at the same corner. The compact bar height (88 px) is retained.
- **The shrink never overlaps the page.** An in-flow spacer at the top of the page (the `#top`
  target) reserves the full-size wordmark plus a 34 px inset above and below. The shrink runs
  over exactly the distance that spacer takes to scroll under the bar, so the content's top edge
  stays 34 px below the wordmark the whole way.
- **The compact bar.** At the same moment, the bar gains a blurred, translucent Obsidian
  background (`backdrop-blur-md`, `bg-obsidian/80`) plus a `--color-carbon` hairline, at
  `--duration-base`. Above that point it is transparent.
- **No JS:** the header is `position: absolute` until hydration and `fixed` after, so without a
  script the full-size wordmark scrolls away with the page instead of covering it.
- **No collapse, no menu icon.** There is no nav, no status chip and no filename label in the
  bar, so there is no hamburger and no focus trap.
- **Pillars:** *Algorithmic* (strict alignment, letter-spaced uppercase labels) and
  *Interconnected* (a trace-style underline drawn left to right on hover).
- **No filename label, no status chip.** The `index.html` label and the status chip were dropped
  in draft 3: the wordmark names the document, and the clock lives in the hero metadata and the
  footer. The `PLAN · BUILD · DEPLOY · REPEAT` motif is not in the header (see §4).
- **Intro hand-off.** The bar carries `data-intro-reveal`, so it rises with the intro's curtain.
  It is visible by default; the reveal is a `from` tween and runs only under JS + motion.

## 4. Content and copy

| Field | Value | Source |
| --- | --- | --- |
| Wordmark (text) | `ICPEP.SE PUP MANILA` (single colour, IBM Plex Sans Bold) | Proposed (draft 5) |
| Compact logo | *(none — removed 2026-10-18)* | — |
| Link set | *(none — the bar carries no nav)* | — |
| Status word | *(none — dropped in draft 3)* | — |
| Clock | *(none in the bar — lives in hero + footer)* | — |

⚠️ **The deck's nav does not match this site's section list.** The requested sections are
Hero, About, Process, Events, Projects/Build Showcase, Executives & Advisers, Gallery, Partners
& Sponsors, FAQ, CTA/Join Us and Footer — there is no "Service" section, and Events, Projects,
Executives, Gallery, Partners and FAQ have no nav entry. The deck's four-link nav is therefore
either out of date or intended for an earlier one-page design. **This needs a decision before
the header is built.**

**The motif stays out of the bar.** The deck prints `PLAN BUILD DEPLOY REPEAT` in its own page
furniture, which made the header look like its home. It is not: the motif appeared in the hero's equation band (removed 2026-10-18); it now lives in
the [process](../process/README.md) section, which explains the same four words as a sequence. Putting it
in the bar as well would be three readings of one motif on one page.

Its **reading order is still unresolved** — the deck's extracted text returns
`PLAN BUILD DEPLOY REPEAT` while its printed furniture reads reversed. This doc and the hero
both assume the forward order; the decision has an owner somewhere and is not this doc's.

**The status word is a claim, not decoration.** `RECRUITMENT // OPEN` while recruitment is
closed is a broken promise, and it is checked by nobody unless someone owns it. Until an owner
exists, ship the chip with the clock only — a live clock is trivially true, and an unowned
claim is not.

Do **not** render the nav links as filenames (`about.md`, `events.json`) even though the idiom
would allow it. The header is the one place a visitor navigates by *intent* rather than by
content, and "About Us" beats "about.md" for that. The [footer](../footer/README.md) collects
the filenames instead, where the list is a map of the page rather than a control.

## 5. Design tokens

| Element | Token |
| --- | --- |
| Bar background | `--color-obsidian` (`#080406`) |
| Bar border | `--color-carbon` hairline along the bottom edge — a whisper, not a divider |
| Links (rest) | `--color-off-white` — 17.31:1 on Obsidian |
| Links (hover/active) | `--color-light-orange` — 7.81:1 |
| Active-section indicator | `--color-crimson` (3.55:1 — **indicator only, never label text**) |
| Wordmark | Text, IBM Plex Sans Bold, `tracking-tight`, single colour (`--color-off-white`) |
| Link type | Medium (500), uppercase, letter-spaced, small label size |
| Bar (rest) | transparent |
| Bar (scrolled) | `--color-obsidian` at 80% + `backdrop-blur-md` + `--color-carbon` hairline |
| Links (rest) | `--color-off-white` — 17.31:1 on Obsidian |
| Links (hover/active) | `--color-light-orange` — 7.81:1 |

Uppercase links at a small size are consistent with the deck's metadata style
(`ID // PIXIE`). See the Tags/Footers anomaly in
[../../brand/typography.md](../../brand/typography.md) — do **not** set nav links at
32–56 pt.

## 6. Required assets

| Asset | Path | Notes |
| --- | --- | --- |
| Wordmark | *(none — text)* | `ICPEP.SE PUP MANILA`, IBM Plex Sans Bold |
| Compact logo | *(none — removed 2026-10-18)* | — |
| Menu icon | *(none — no collapse)* | Nav fits at 320 px |

The logo is the only content of its link, so the image is `alt=""` and the **link** carries the
name `ICpEP SE – PUP Manila` from [../../assets/inventory.md](../../assets/inventory.md). The
wordmark link's name is its own text.

## 7. Interaction and states

- **Hover:** link goes to `--color-light-orange`; a trace underline drawn left-to-right, at the
  `fast` duration in [motion.md](../../brand/motion.md#the-vocabulary).
- **Active page:** marked with a crimson indicator **and** `aria-current="page"` — colour
  alone is not a sufficient signal.
- **Focus:** visible ring on every link and the menu button, instantly. Never animate a focus
  indicator and never remove the outline.
- **Mobile menu:** opens a panel; it must trap focus while open, close on `Escape`, and
  return focus to the button.
- **Scroll:** the wordmark's scale is a function of `scrollY`, from 1 at the top to `24 px / its
  full size` once the spacer has scrolled under the bar (§3) — scrolling back up grows it again.
  It is written to `transform` once per animation frame, never through React state. This is the
  one scroll-linked motion on the page: it moves only while the visitor scrolls, and never moves
  the scroll position itself, so it is neither scroll-jacking nor parallax
  ([motion.md](../../brand/motion.md#not-allowed)).
- **Wordmark → logo:** *(removed 2026-10-18 — the compact logo no longer appears.)* The
  `data-compact` flag still toggles the bar's background.
- **Reduced motion:** there is no intermediate scale and no blur. The wordmark is full size at
  `scrollY = 0`, the logo replaces it at any other position, and the bar's background appears,
  all without a transition.

## 8. Accessibility

- Wrap links in a `<nav aria-label="Main">` landmark.
- Provide a **skip-to-content** link as the first focusable element.
- Heading level: the header carries **no heading** — it is navigation, not content.
  Reserve `<h1>` for the page hero.
- Touch targets ≥ 44 × 44 px.
- Menu button: `aria-expanded`, `aria-controls`, and a text label ("Menu").
- The clock is a `<time>` with a machine-readable `datetime`; a screen reader announcing an
  updating clock is a nuisance, so mark the ticking element `aria-hidden="true"` and expose the
  state word as the accessible content instead.
- The filename label is decorative typography. If it is read out it sounds like a filename,
  which is noise — mark it `aria-hidden="true"`.

## 9. Acceptance criteria

- [ ] All nav links have a text label and a visible focus state.
- [ ] ~~The current page is indicated by more than colour.~~ Not applicable yet: the site is one
      page of in-page anchors, so there is no current page to indicate. Revisit with the first
      second route.
- [ ] ~~At 375 px the nav collapses~~ **Revised — the nav does not collapse.** At 375 px every
      link is visible and reachable by keyboard without opening anything; a collapse is
      deferred until the link set is settled. See §3.
- [ ] At the top of the page the wordmark spans the content width and the bar is transparent.
- [ ] At 1440 px and at 375 px, the wordmark's right edge meets the content edge without
      overflowing it.
- [ ] Scrolling shrinks the wordmark continuously into the top-left corner; once the hero reaches
      the bar it blurs out and `icpep-mono.png` blurs in, 70 px tall in an 88 px bar with a
      blurred background and a hairline.
- [ ] Scrolling back to the top reverses both.
- [ ] At no scroll position does the wordmark overlap the content beneath it.
- [ ] Clicking the wordmark or the logo from anywhere on the page returns to the top.
- [ ] Tabbing reaches exactly one of the two header links at any scroll position.
- [ ] With JS disabled, the full-size wordmark scrolls away with the page rather than staying fixed,
      and the logo never appears.
- [ ] With `prefers-reduced-motion: reduce`, the wordmark and the logo swap without any scaling,
      blur or fade.
- [ ] The header is not announced as a heading by a screen reader.
- [ ] With `prefers-reduced-motion: reduce`, the hover underline does not animate.
- [ ] The clock does not produce a hydration mismatch or a React warning.
- [ ] The status chip never claims a recruitment state that is false.
- [ ] The motif `PLAN · BUILD · DEPLOY · REPEAT` appears nowhere in the header.

## 10. Open questions

1. ~~**What is the real nav?**~~ **Answered for draft 3 v2 — there is no nav in the bar.** The
   wordmark alone names the document; in-page sections are reached by scrolling. Revisit if a
   second route is added.
2. What does **"Service"** refer to — a services page, community service, or the
   Projects/Build Showcase under a different name? (Deck nav is stale for this site.)
3. ~~Is the **`PLAN · BUILD · DEPLOY · REPEAT`** motif part of the site header?~~ **Answered —
   no.** It is the hero's equation band, once per page.
4. ~~Sticky or static header?~~ **Answered — fixed**, with a scroll-linked shrink (draft 4),
   recorded in [motion.md](../../brand/motion.md#the-vocabulary) as the page's only
   scroll-linked motion.
7. **Is a Plex Sans wordmark the right call against the mono's identity?** Draft 3 set it in Plex
   Mono; draft 5 moved it to the Sans Bold heading face, since at this size it is the page's
   display type and [typography.md](../../brand/typography.md#mono--metadata-only) keeps Mono to
   metadata.
8. **Does 88 px of compact bar cost too much screen?** It is set by the logo's 96 px legibility
   floor. The alternative is `icpep-mark.png` (no trace wordmark, 32 px minimum) in a 64 px bar.
5. Is there an **icon set**? The brand supplies none; the bar avoids icons entirely (text only).
6. **Status word** — dropped from the bar in draft 3; the clock lives in the hero and footer.
