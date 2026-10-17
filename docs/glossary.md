# Glossary

Terms used throughout this repo, in the sense this repo means them.

## Brand

| Term | Meaning |
| --- | --- |
| **ICpEP SE** | Institute of Computer Engineers of the Philippines – Student Edition. The org this site is for. |
| **PUP Manila** | Polytechnic University of the Philippines, Manila. The chapter. |
| **Silicon and Syntax** | The brand theme. "Silicon" is the chrome, circuitry and decay; "Syntax" is the code and structure. See [`brand/theme.md`](brand/theme.md). |
| **Obsidian** | `#080406`. The page base. The site is dark-first because of it. |
| **Maroon family** | Maroon, crimson, deep maroon, burgundy, bright red-maroon. Passes contrast on **light** surfaces only. |
| **Orange family** | Bright orange, light orange, amber orange. Passes on **dark** surfaces only. |
| **Pixie** | The official mascot. See [`brand/mascot.md`](brand/mascot.md). |
| **Glow** | The hero lockup with emitted light. The intro's landing image. |

## Assets

| Term | Meaning |
| --- | --- |
| **Canonical** | Extracted from the source deck unchanged. `public/logos/`, `public/mascot/`. |
| **Derived** | Generated from a canonical asset by a documented procedure. `public/intro/` only. Never hand-edit. |
| **Lockup** | A logo variant with the name attached, as opposed to a bare mark. |
| **Diamond stack** | The stacked-diamond arrangement the logo variants share. The normalisation target for the intro assets. |
| **SMask** | A PDF soft mask — the separate greyscale image carrying alpha. Must be composited to extract a transparent asset. |

## Front end

| Term | Meaning |
| --- | --- |
| **Token** | A named design value, defined once in `@theme` and referenced by name. Never a raw hex in a component. |
| **Cache Components** | The Next 16 caching model, on via `cacheComponents: true`. |
| **Client boundary** | The `"use client"` edge. Exactly one component crosses it so far. |
| **`data-intro`** | The attribute on `<html>` that coordinates the splash across three files. See [`intro.md`](intro.md). |
| **Bailout** | The CSS animation that hides the intro if React never hydrates. |
| **Opt-in / opt-out** | For the intro: it appears only when JS confirms it should (`opt-in`), and every failure means no overlay. |
| **Hand-off** | The `[data-intro-reveal]` hook: content rises with the intro's curtain. |
| **Ignition** | The beat where the shuffle stops and the glow lights up. |

## Process

| Term | Meaning |
| --- | --- |
| **Ponytail** | The adopted ruleset for writing the smallest complete change. Loaded from [`.opencode/skills/ponytail/SKILL.md`](../.opencode/skills/ponytail/SKILL.md); [`rules.md`](rules.md) is the contract where the two disagree. |
| **Laziness ladder** | The six rungs checked before writing code: does it need to exist → already in this codebase → standard library → installed dependency → one line → the minimum that works. |
| **`shortcut:` comment** | The only permitted comment form besides an invariant: `shortcut: <the limit>, <when to upgrade>`. A named deferral, not a to-do. |
| **Gate** | A command that must pass before commit. See [`rules.md`](rules.md). |
| **Accepted risk** | A known, deliberate exposure recorded in [`rules.md`](rules.md) instead of fixed. |

## Writing

| Term | Meaning |
| --- | --- |
| **Open questions** | A section in every doc. Unspecified things get recorded here, never guessed. |
| **Derived doc** | A doc that records current state rather than defining it — [`tasks.md`](tasks.md). The docs it links to win on any conflict. |
| **Derived fact** | Something measured rather than quoted from the deck — contrast ratios, pixel sizes. The method is stated. |
| **Proposal** | A design decision not present in the deck. Labelled as such. |

> **Spelling.** The org writes "ICpEP" — lowercase `p` — in body text, and the metadata title is
> `ICpEP SE – PUP Manila`. The source deck also contains `ICPEP` in some artwork (the raster
> logos). Where a canonical asset contains the wrong casing, it is not retouched; it is noted
> where it appears.
