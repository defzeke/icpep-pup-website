# Motion

Source: none. The deck says only that the theme "delivers high-end motion studio aesthetics"
(deck page `03`) and names no durations, easings or triggers. This doc is a **proposal**, and it
is the answer to [theme.md](theme.md)'s open question 2.

It covers everything **except the page intro**, which is a separate contract with its own
timeline in [`intro.md`](../intro.md). Where the two must agree, they do — see
[The hand-off](#the-hand-off).

## What motion is for here

The Atmospheric pillar is built on **emitted light**: energy comes from inside a form, not from
bright fills. Motion is that pillar's behaviour. So it moves for exactly two reasons:

1. **Light arriving or leaving** — a glow igniting, a surface waking up.
2. **Signal moving between things** — the Interconnected pillar's traces. A hover underline
   drawn left to right is signal travelling; a card that fades in is not.

Anything else is decoration. If a proposed animation is not one of those two, it does not ship.

## Tokens

Four values, defined once in the `@theme` block in `app/globals.css` like every other token
([`rules.md`](../rules.md) §5).

```css
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1);  /* decelerating — the default */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* only for symmetric moves */
--duration-fast: 150ms;  /* hover, focus, colour */
--duration-base: 300ms;  /* the reveal, panel moves */
--duration-slow: 600ms;  /* the ceiling for anything not scroll-linked */
```

**600ms is a ceiling.** Nothing on the page runs longer, except the intro, which owns its own
3.1s and is the only thing allowed to interrupt a visitor. Long animation on a site whose
purpose is to be scanned is a tax on every visit.

## The one rule that matters

**Motion is opt-in, and content is visible without it.** The page's resting state is the
finished state; an animation sets its *starting* state at runtime and moves to the resting one.
Concretely:

- Nothing is hidden by CSS waiting for a script to reveal it. If JS never runs, every section is
  fully present and readable.
- A reveal is a GSAP `from` tween — `from` a state, never `to` a visible one — so an interrupted
  or never-started animation leaves the content on screen rather than off it.
- This is the same inversion the intro already uses ([`rules.md`](../rules.md) §3), applied to
  the whole page. It is not a new idea, it is the site's existing failure philosophy.

## The vocabulary

| Trigger | Motion | Duration | |
| --- | --- | --- | --- |
| Link or button hover | Colour to `--color-light-orange`; optionally a trace underline drawn left to right | `fast` | **built** |
| Focus | The focus ring, instantly. **Never animate a focus indicator** | 0 | **built** |
| Section enters the viewport | Rise 24px, fade in and un-blur from 10px, staggered 0.12s per item (`components/ui/reveal.tsx`, opted into with `[data-reveal]`) | `slow` | **built** (About) |
| The intro's curtain lifting | Same rise and stagger, at 35% of the wipe | `base` | **built** (hero) |
| Card media hover | Scale within a fixed, `overflow-hidden` frame | `fast` | not built |
| Status chip | The clock updating. Text replacement, no transition | 0 | **built** |
| Page scroll, header only | The wordmark shrinks from full width into the top-left corner, its scale a function of scroll position ([header-nav](../sections/header-nav/README.md#7-interaction-and-states)). Under reduced motion it snaps between the two sizes | scroll-linked | **built** |
| Header wordmark reaches the corner | Light leaving one form and arriving in another: the wordmark blurs out as `icpep-mono.png` blurs in, rising from 90% scale; reversed on the way back | `slow` | **built** |
| Any scroll input | **Smooth scrolling** — [Lenis](https://lenis.darkroom.engineering/) eases the native scroll position toward its target (`lerp: 0.08`), and handles in-page anchors. Touch keeps native scrolling. Off under reduced motion (`components/common/smooth-scroll.tsx`) | scroll-linked | **built** |
| Scrolling through the hero | **Pinned sequence 1**: the stage holds still while the mark zooms, slides left over a fading-in maroon wash and hands over to the name, then the phrase ([hero](../sections/hero/README.md#3-layout)) | scroll-linked | **built** |
| The intro hands over | The hero's logo assembly arrives from far away — 35% scale, blurred, transparent → resting. Owned by the intro's timeline, like the intro itself exempt from the 600ms ceiling ([intro](../intro.md#hand-off)) | 1.2s | **built** |
| Scrolling through the gallery | **No animation — sticky positioning.** The headline holds in a sticky backdrop while the frames scroll over it at native speed ([gallery](../sections/gallery/README.md)). Nothing is scroll-linked, so it needs no reduced-motion variant | — | **built** |
| Scrolling through the process cards | **Pinned sequence 2**, ≥ `lg` only: the cards rise one by one while a square rolls along a catenary road and rounds into a circle as the road flattens; it begins while the block is still scrolling in ([process](../sections/process/README.md)) | scroll-linked | **built** |
| Scrolling through the events | **Pinned sequence 3**, ≥ `lg` only: a maroon glow comes up behind "Show up. Plug in.", the first line blurs back, the tickets rise tilted showing their crimson backs, then flip face-up ([events](../sections/events/README.md)) | scroll-linked | **built** |
| Ticket hover / focus | The stub tears from the body along its perforation (drops 12px, swings 4° from its top-left corner) while the barcode's bars drop away left to right and the action's words fade in ([events](../sections/events/README.md)) | `base`, 6ms bar stagger | **built** |
| Reaching the end of the page | **No animation — sticky positioning.** The footer sits beneath `main` and is uncovered as the page scrolls up off it ([footer](../sections/footer/README.md)) | — | **built** |

**The viewport reveal avoids the first-paint flash by only hiding what is not yet on screen.** The
earlier worry was that a reveal applied after hydration would flash visible content and then hide
it. `Reveal` sidesteps that rather than adding a pre-paint script: once mounted, it hides only the
`[data-reveal]` elements whose top is **below the viewport**, which nobody can see being hidden,
then reveals each as it comes 15% into view. Anything already on screen at mount is left alone.
Under reduced motion, or with no JS, nothing is ever hidden. The hidden state is reverted on
unmount, so it never outlives the component.

**Triggers use `IntersectionObserver`, not `ScrollTrigger`.** [`rules.md`](../rules.md) §12 fixes
one GSAP entry point with core only and **no plugins**, which rules ScrollTrigger out. That is
not a limitation to work around: an in-view reveal is what `IntersectionObserver` is for, and it
costs no plugin and no extra bundle.

## Not allowed

| | Why |
| --- | --- |
| **Scroll-jacking** — redirecting, snapping or locking the scroll | It breaks the browser's own scroll behaviour and is disorienting with a trackpad, a keyboard or a screen reader. **Changed 2026-10-18:** easing the native scroll toward where the visitor sent it (Lenis, above) is allowed, because the destination stays the visitor's; snapping to points, and pinning anywhere but the hero, the process cards and the event tickets, are not. |
| **Parallax** | The most expensive motion to get right and the easiest to get wrong, on a site whose motion has never been reviewed in a browser. |
| **Animated marquees** | WCAG 2.2.2 — see [design-language.md](design-language.md#the-marquee-and-why-it-is-not-one). |
| **Auto-advancing carousels** | Already a hard rule in [partners-sponsors](../sections/partners-sponsors/README.md). Extended here to everything. |
| **Animating a focus indicator, or any state change on focus** | Focus must be instant. A visitor tabbing through the page is not watching. |
| **Loops** | Nothing repeats forever. If it is worth repeating, it is worth a pause control, and then it is worth asking why. |

## Reduced motion

Under `prefers-reduced-motion: reduce`, every entry in [the vocabulary](#the-vocabulary) above
becomes instant, and the page renders in its resting state. Because content is visible by
default, this needs no special handling per section — it is a consequence of the rule, not a
separate mode.

That does not make the site accessible to everyone. Two risks survive, and both are recorded in
[`rules.md`](../rules.md) as accepted: the intro's **flash rate** (there is no media query for
photosensitivity) and any moving content over five seconds (WCAG 2.2.2, which
`prefers-reduced-motion` does not cover either).

## The hand-off

The intro ends by lifting a curtain off the page, and marks the elements that should rise with
it using `[data-intro-reveal]`. The reveal's geometry — 24px, 0.06s stagger — is defined here and
consumed by [`intro.md`](../intro.md), **not** re-invented per section. A section that wants to
rise with the curtain opts in with that attribute and gets this doc's timing for free.

On a repeat visit, or with reduced motion, or with no JS, the attribute does nothing and the
section lays out correctly without it. That is the same guarantee as
[the rule above](#the-one-rule-that-matters), and it is the reason the attribute is safe to put
on content.

**Built so far:** the hero's four elements carry `data-intro-reveal`, which is the whole of the
hand-off in the current page. Nothing below the fold opts in yet, because the intro's stagger runs
as one group at the curtain — marking the whole page would animate five screens of content at
once. If the viewport reveal above is built, sections opt into that instead.

## Known residuals

- **Nothing here has been watched.** No browser automation is available in this repo, so every
  value above is specified, not observed — the same caveat the intro carries. Treat a change to
  this doc as a change to unverified behaviour.
- **The intro sets a precedent that may not generalise.** Its timings were tuned against a
  single full-screen overlay. A 300ms reveal in a dense grid has different constraints, and
  `--duration-base` may need to fork once there is a section dense enough to tell.

## Open questions

1. **Is `--ease-out` the right curve?** It was chosen as the intro's deceleration, generalised.
   Nobody has compared it against an alternative in a browser.
2. **Does the status chip's clock need to tick at all,** or is a static "last updated" line
   honest and cheaper? A live clock is a claim to be live. It is built and it ticks; the question
   is whether it earns its place.
3. **Is 600ms too slow for the first reveal after the curtain?** The two motions are adjacent and
   could read as one long event.
4. **Do we ever want a scroll-linked progress indicator** (a reading bar, a section spine)? That
   would need `IntersectionObserver` maths rather than a plugin, and it is not specified above.
