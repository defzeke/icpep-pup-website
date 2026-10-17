# Visual Theme

Source: deck page `03` (*Theme breakdown*).

## The theme

> **Silicon and Syntax: The Integrated Engineering Blueprint**

The theme grounds the organization's identity in the duality of Computer Engineering:
merging tactile, physical hardware architecture with structured software logic into a
unified, high-performance visual system.

The name is doing real work — **Silicon** (hardware, mass, geometry) and **Syntax**
(software, structure, logic). Keep both halves present on any given screen. A page that is
all glow and no blueprint is off-theme; so is a page that is all grey grid.

## The four pillars

### 1. Isometric Geometry

Built on precise **30° isometric grids** and tiered modular blocks — translating CAD
blueprints and physical computer hardware into a dimensional visual system.

**In practice:** every layered "stack" in the logo (and any section echoing it) is drawn on
the same 30° isometric projection. Angles are not decorative and are not freehand — if you
tilt a block, derive the angle from the isometric grid, don't eyeball it.

### 2. Interconnected

Utilizes **PCB bus traces** and **solder node pads** to visualize seamless data transmission
and collaboration across students, projects, as well as disciplines.

**In practice:** traces are the connective tissue of the system. They originate at a node,
travel at 45° / 90°, and terminate at a pad. They read as *signal moving between things* —
which is why they carry the wordmark's letterforms in the primary logo.

### 3. Atmospheric

Uses **deep obsidian bases** with **high contrast crimson** and **glowing apertures**, which
delivers high-end motion studio aesthetics.

**In practice:** the base is dark and matte; energy comes from emitted light, not from
bright fills. "Glowing apertures" means light escapes from *inside* a form — that's the
`icpep-hero-glow.png` variant and the halo behind the cover art.

The fullest expression of this pillar so far is the **[page intro](../intro.md)**: a dimmed mark
that shuffles through the flat variants, ignites into the glow, then lifts a curtain off the
page. It is the site's most elaborate motion and the reference for tone. Everything else the
page does is bounded by [motion.md](motion.md), which this pillar owns.

### 4. Algorithmic

Incorporates **clean typographic hierarchy** and **structured terminal layouts** that
reflect code modularity, syntax flow and systematic logic.

**In practice:** layouts should look like they were *generated* — consistent spacing steps,
aligned baselines, repeated modules. Terminal aesthetics (monospace labels, `ID //` and
`ROLE //` style keys, letter-spaced all-caps) are in-theme; the deck uses them on the
mascot page.

Those devices are specified in [design-language.md](design-language.md), which is where this
pillar stops being a direction and becomes a vocabulary.

## Applying the pillars per section

| Pillar | Where it should be visible |
| --- | --- |
| Isometric Geometry | Hero art, section dividers, card corners, any stacked/layered graphic |
| Interconnected | Nav underlines, card-to-card connectors, timeline/bus motifs in Events |
| Atmospheric | Section backgrounds, image overlays, the CTA, hover/active glow states, the [page intro](../intro.md) |
| Algorithmic | Type scale, grid, table/list layouts, labels, metadata rows |

A useful test: **every section should express at least two pillars**, and the pillars should
rotate so the page doesn't read as one long texture.

Pillar 4 works the same way one level down, over **devices** rather than pillars: each section
carries an index marker, a filename label, and at most one other. The assignment is in
[design-language.md](design-language.md#where-the-devices-live).

## Do / Don't

**Do**

- Keep a dark, matte base and let light *emerge* from forms.
- Reuse the 30° isometric angle consistently.
- Use letter-spaced all-caps for metadata labels.
- Let traces imply movement and connection between elements.
- Let the page describe itself — name its parts, number its sections. See
  [design-language.md](design-language.md).

**Don't**

- Put orange text on a light background — measured contrast fails. See
  [color-palette.md](color-palette.md).
- Use the glow gradient as a general-purpose background wash.
- Mix isometric and flat-perspective graphics in the same composition.
- Decorate with traces that lead nowhere; they must connect something to something.
- Let a device appear in every section. Metadata is seasoning, not the meal.

## Open questions

1. Is there an approved **isometric grid asset** (or the source file it came from) that the
   web side should use as a background pattern?
2. ~~What is the intended **motion** language?~~ **Answered** by [motion.md](motion.md), which
   fixes durations, easings, triggers and the banned list for everything outside the splash. The
   intro keeps its own timeline in [intro.md](../intro.md), and the two agree where they meet.
3. Are the pillar names public-facing (shown on the site) or purely internal guidance?
