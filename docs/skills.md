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
  optimiser. Either add it as a devDependency before committing a generator script, or run the
  generator from a scratch file outside the repo and leave `public/intro/` as the only artefact.

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
4. **Record before committing.** Add the row to [`assets/inventory.md`](assets/inventory.md)
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

## Verify a change

```bash
npx tsc --noEmit
npm run lint
npm run build
```

There is no test suite. Beyond the three commands:

- **Docs changed?** Every relative link must resolve. Check each file you touched.
- **Intro changed?** Walk the four `data-intro` states in
  [`intro.md`](intro.md) — `skip`, `play`, `repeat`, `done` — and the three failure layers.
- **Assets changed?** Re-run the verification table above.
- **CSS or markup changed?** Confirm in the built output, not the source:

```powershell
$c = [System.IO.File]::ReadAllText("$PWD\.next\server\app\index.html", [System.Text.Encoding]::UTF8)
```

- **Anything trusting `AGENTS.md`?** Confirm the `BEGIN/END:nextjs-agent-rules` block is
  byte-identical.
