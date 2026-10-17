# Skills

Repeatable procedures. Each one is written to be run start to finish without needing the
history behind it.

## Regenerate the intro assets at 2×

`public/intro/` holds four **derived** 576px WebP copies. They are normalised, not plain
resizes, so do not reach for a simple resize-and-export.

**Inputs.** `public/logos/icpep-{mono,mark,primary,hero-glow}.png`. Output names are
`mono`, `mark`, `primary`, `glow` respectively.

**Canvas.** `BOX = 2 × the desktop frame width`. The frame is `clamp(11rem, 26vw, 18rem)` in
`.intro__stack`, so 288px at the cap → `BOX = 576`. Targets are proportions of the canvas, so
they survive a resize:

| Target | Value | Origin |
| --- | --- | --- |
| Stack width | `0.5875 × BOX` | measured on the lockups |
| Stack band top | `0.32708 × BOX` | measured on the lockups |

**Method**, per source:

1. Render the source at `BOX × BOX` with `fit: "contain"` onto transparent.
2. Measure the **widest solid row** (alpha > 200). That is the diamond stack.
3. `r = TARGET_W / peak`, then `size = min(BOX, round(BOX * r))`.
4. Composite the source resized to `size`, centred horizontally, at a vertical offset that puts
   the stack band top on `TARGET_Y`.
5. Export WebP, quality 84.

**Two traps.**

- **Clamp `size`, and use the applied scale for the vertical offset.** `peak` is an integer
  pixel count while `TARGET_W` is fractional, so `r` can land just above 1 and the scaled image
  comes out 1–2px wider than the canvas. Sharp then fails with *"Image to composite must have
  same dimensions or smaller"*. Use `k = size / BOX` for the offset maths, not `r` — the clamp
  is the more accurate answer, not just a guard.
- **`sharp` is not a declared dependency.** It is present transitively via Next's image
  optimiser. Either add it as a devDependency before adding a generator script to the repo, or run
  the generator from a scratch file outside the repo and leave `public/intro/` as the only artefact.

**Verify before you accept the output.** All four must agree:

| Metric | Expected | Tolerance |
| --- | --- | --- |
| Stack width | 338px | ±2 |
| Stack band top | 188px | ±2 |
| Stack centre (rows > 85% of peak) | consistent across variants | ±1 |

At 576 the four come out at `339/189` for `mono` and `338/188` for the rest, stack centre
289.5–290.5. Anything worse means a source was re-exported with a different framing.

Do **not** use the "band centre" over all band rows as a gate — the traces sit below the stack
and skew the bbox by up to 4px on the lockups. It flags false misalignment; the 85%-of-peak
measure is the reliable one.

Expect ~132KB total. Confirm the size and the numbers against
[`assets/inventory.md`](assets/inventory.md), then update it if the canvas changed.

## Extract assets from the source deck

`website assets.pdf` — 10 pages, 1440 × 817.92 pt, 42 embedded images.

1. **Text is glyph-encoded.** Raw extraction returns gibberish. Decode through each font's
   `ToUnicode` CMap per page.
2. **Composite the `SMask`.** Rasters with soft edges (the glow mark, Pixie) are stored with a
   separate soft mask. Without compositing it, the transparency is lost.
3. **Page numbers jump.** The deck goes `03 → 05` and `08 → 10`; there is no `04` and no `09`.
   Do not treat the gap as a missing file.
4. **Record before adding the file.** Add the row to [`assets/inventory.md`](assets/inventory.md)
   first — source page, pixel size, repo path, alt text — then drop the file in `public/`.
5. **Never copy third-party imagery.** Mood-board references stay as URLs.

## Add a brand token

1. Add it to the `@theme` block in `app/globals.css` as `--color-<name>`. That is the single
   definition; `bg-<name>` / `text-<name>` utilities follow automatically.
2. **Compute the contrast ratio** against both Obsidian and white. Do not estimate. Add it to
   the table in [`brand/color-palette.md`](brand/color-palette.md) with its role.
3. Check which family it belongs to — maroon is light-surface only, orange is dark-surface only
   ([`rules.md`](rules.md) §7).

## Add a section

1. Read [`sections/_template.md`](sections/_template.md). Every section doc uses the same ten
   headings, in the same order.
2. Create `docs/sections/<name>/README.md`.
3. Decide required assets, add rows to [`assets/inventory.md`](assets/inventory.md), then place
   the files in `public/<name>/`.
4. Add the row to the index in [`README.md`](README.md).
5. Only then build the component. Sections are documented before they are coded.

## Add a test

`npm test` is `node --test`. No framework, no config file, no dependencies.

1. **Keep the logic in a `.ts` file with no JSX in it.** Node strips types but **not JSX**, so
   the runner cannot import a `.tsx` file. That is the only reason the intro's timings and
   shuffle maths live in `components/intro-timeline.ts` instead of inside `page-intro.tsx`.
2. **Write `*.test.ts` next to it.** The runner discovers that pattern on its own.
3. **Import with the real extension** — `from "./intro-timeline.ts"`. Node resolves files, not
   module specifiers, so the extension is required here even though bundler code omits it.
   `tsconfig.json` sets `allowImportingTsExtensions` for exactly this, and nothing else should
   use one.
4. **Test a real failure.** The existing three cover the interval range and its deceleration,
   the no-repeat guarantee in the shuffle order, and the derived total matching the number
   [`intro.md`](intro.md) documents. That last one is the pattern worth copying: it fails when
   the code and the docs drift apart.

Do not test a constant. If the test would pass no matter what the code did, delete it.

## Run the security checks

All of these **report**; none of them block. See [`rules.md`](rules.md) §15.

```bash
npm audit --audit-level=high
```

Dependency advisories. It is currently **red on purpose** — see the `braces` entry in
[`rules.md`](rules.md). **Never run `npm audit fix --force` in this repo**: the only fix it
offers is a downgrade that takes the lint toolchain off the Next 16 line.

`.github/workflows/gitleaks.yml` scans commits for credentials on every push and PR. Running it
locally needs the Go binary rather than an npm package — `scoop install gitleaks` on Windows,
then `gitleaks git`. If you would rather not install anything, `npx secretlint "**/*"` covers
the same ground.

`.github/dependabot.yml` opens grouped weekly PRs for npm and monthly ones for actions. It only
ever proposes **upgrades**, so it will not offer the `eslint-config-next` downgrade above.

## Review the design

[Impeccable](https://github.com/pbakaus/impeccable) (Apache-2.0) is the external design-review tool
this project leans on — a skill plus a `/impeccable` command covering critique, audit, polish,
typography, colour, motion and responsive behaviour.

Install it **globally, not into this repo**:

```bash
npx impeccable install -y --providers=opencode --scope=global
```

Drop `-y` for the interactive prompts; `npx impeccable update` refreshes it. It lands in
`~/.config/opencode/skills/impeccable/` (`$OPENCODE_CONFIG_DIR` overrides that) plus
`commands/impeccable.md` — **21MB, 19MB of it the platform binary**, which is the argument against
vendoring it. On OpenCode it installs only the skill and the command: the automatic edit hook is
limited to harnesses that have a hook surface, and OpenCode is not one, so nothing runs on its own.

Three things that are easy to get wrong:

- **A global install works by rebinding, not substitution.** OpenCode does not substitute variables
  in `SKILL.md` bodies, so the skill defines `<skill-base-dir>` as the folder holding its own
  `SKILL.md` and states that it resolves every `.opencode/skills/impeccable/scripts/...` command.
  Those literal paths are canonical, not project paths. If the launcher is ever reported missing,
  that instruction was skipped — on Windows the real path is
  `~/.config/opencode/skills/impeccable/scripts/impeccable.cmd`, since there is no `sh`.
- **No download happens on first use.** The engine ships beside the launcher, so an empty
  `~/.impeccable/bin/` is correct. That cache is the `npx`/CLI fallback only.
- **It does not get to define design truth.** `/impeccable init` writes a root `PRODUCT.md` and
  `/impeccable document` a root `DESIGN.md`; **never commit either**
  ([`rules.md`](rules.md) §5). Do not run `init` here at all — `docs/` already carries the product
  truth it would try to capture, and the skill degrades gracefully without it. Point the review
  commands at the code, take their findings as input, and record anything you accept in the section
  doc that owns it.

`npx impeccable detect app/` runs the 59 deterministic rules standalone — no skill, no LLM — and
exits `2` on findings, `0` clean, `1` if a target could not be scanned. `/impeccable audit` and
`/impeccable critique` are the read-only review commands; `extract` and `polish` write.

Its anti-patterns corroborate the deck rather than fight it: tinted blacks (our obsidian `#080406`
passes), no gray on colour, no nested cards. It would flag Geist as an overused font — which is
the pending Geist → IBM Plex Sans swap in [`brand/typography.md`](brand/typography.md).

## Verify a change

```bash
npx tsc --noEmit
npm run lint
npm test
npm run check:links
npm run build
```

All five pass on `main`. `check:links` walks every markdown file in the repo and resolves every
relative link and `#anchor`, skipping fenced code blocks. Beyond the commands:

- **Docs changed?** `npm run check:links`. It resolves both the file and the heading.
- **Intro changed?** Walk the four `data-intro` states in
  [`intro.md`](intro.md) — `skip`, `play`, `repeat`, `done` — and the three failure layers.
  `npm test` only proves the timeline arithmetic, not the motion.
- **Motion changed at all?** It has never been reviewed in a browser. Say so when you hand it
  over — [`rules.md`](rules.md).
- **Assets changed?** Re-run the verification table above.
- **CSS or markup changed?** Confirm in the built output, not the source:

```powershell
$c = [System.IO.File]::ReadAllText("$PWD\.next\server\app\index.html", [System.Text.Encoding]::UTF8)
```

- **Anything trusting `AGENTS.md`?** Confirm the `BEGIN/END:nextjs-agent-rules` block is
  byte-identical.
