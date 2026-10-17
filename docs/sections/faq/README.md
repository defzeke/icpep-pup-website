# FAQ

> **Status — draft 2.** Not rendered on the page in draft 2 (no answers yet). Held as a documented section for when real answers land.

> **Source status.** Nothing in the deck covers this section. It exists because the adopted
> composition reference shows one — see
> [design-language.md](../../brand/design-language.md#rejects) for what was adopted and what was
> not. Every question and answer below is `TBC`.

## 1. Purpose

Remove the last objections before the visitor is asked to act. By this point the page has shown
what the org is, what it does and who runs it; the FAQ answers what a prospective member still
wants to know but has not been told — and it answers it as scannable text rather than as a
paragraph someone has to hunt for.

## 2. Placement and order

Home page, after [partners-sponsors](../partners-sponsors/README.md). Before
[cta-join-us](../cta-join-us/README.md) — objections handled, then the ask.

## 3. Layout

- ≥ `lg`: two columns — question left, answer right, with the **Rule** device (a 1px dashed
  hairline) separating each pair. < `lg`: stacked, question above its answer.
- The pairs are separated by rules, **not** by cards and **not** by a boxed accordion. This
  section should read as a document with fields ruled off, which is the idiom the section label
  (`FAQ.md`) is already claiming.
- **Pillars:** *Algorithmic* (a definition list, monospace labels, ruled fields) and
  *Atmospheric* (a quiet dark band between two loud ones — this is a resting section, and the
  page needs one here).
- Restrict the column to a comfortable measure. Answers are prose and follow the same ~60–75
  character line length as [about](../about/README.md).

- The section is labelled **`FAQ.md`** and marked **`08`** — and it is the section whose label
  the composition reference uses for its own, because a FAQ is a FAQ.
- The label sits above the heading, and the **Rule** device separates the pairs below it. One
  label, one rule form, nothing else.

## 4. Content and copy

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Filename label | `FAQ.md` | Yes | Proposed |
| Index marker | `08` | Yes | Proposed |
| Question | string | Yes | `TBC` |
| Answer | long text | Yes | `TBC` |
| Order | integer | Yes | `TBC` — most-blocking question first |

**Empty state:** if no answers are approved, **do not render the section**. A FAQ that says
"coming soon" is worse than no FAQ, and an empty one contradicts the section's own purpose.

**Pages are not answers.** Every answer is 1–3 sentences of plain text. A FAQ whose answers are
"see the About section" has failed and should lose the entry instead.

**Candidate questions**, offered as a starting list for whoever owns the copy — these are
questions, not claims, and none of them may be answered by guessing
([`rules.md`](../../rules.md) §2):

- Who can join — is this only for Computer Engineering students?
- How do I apply, and when does recruitment open?
- Is there a membership fee?
- How much time does it take each week?
- What does a member actually get out of it?
- Where and when do you meet?

## 5. Design tokens

| Element | Token |
| --- | --- |
| Section background | `--color-obsidian` or `--color-carbon` (the alternating band) |
| Question | `--color-white`, Subheader level |
| Answer | `--color-off-white`, Body level |
| Rule between pairs | `--color-carbon` hairline, or `--color-burgundy` where it needs to read on Carbon |
| Section label | `--color-light-orange`, Label level, **Mono** |

## 6. Required assets

None. The rules and the label are CSS and text — see
[design-language.md](../../brand/design-language.md#implementation).

## 7. Interaction and states

- **There is no interaction.** The pairs are always visible; nothing expands, collapses or
  reveals on hover. See the rejected alternative in [Open questions](#10-open-questions) 3.
- If a future version does collapse, it must use native `<details>`/`<summary>` rather than a
  scripted accordion, and the first item must open by default so the section never renders as a
  list of closed doors.
- Any entrance motion is the shared reveal — see
  [motion.md](../../brand/motion.md#the-vocabulary).

## 8. Accessibility

- Section heading `<h2>`.
- Mark the pairs up as a **`<dl>`** — question `<dt>`, answer `<dd>`. This is a term/definition
  list in the literal sense, and it is the only markup that says so.
- Do **not** use `<h3>` for each question *and* a `<dl>`; pick one. `<dl>` keeps the page's
  heading order short and is the proposed choice.
- Because the questions are not headings, they are not reachable by heading navigation. That is
  the trade — see [Open questions](#10-open-questions) 4.
- Rules are decorative separators and carry no meaning; the `<dl>` structure already groups each
  pair, so no `aria-hidden` is needed on a CSS border.

## 9. Acceptance criteria

- [ ] Every question is a real `<dt>` with its answer as the matching `<dd>`.
- [ ] With CSS disabled, each question is immediately followed by its own answer.
- [ ] No answer is longer than three sentences.
- [ ] The section is not rendered when the answer list is empty.
- [ ] No question can be read as answered by anything other than a real answer.
- [ ] The section contains no `<h1>` and does not break the page's heading order.

## 10. Open questions

1. **Who writes the answers?** They are the section, and none of them can be derived from the
   deck or the repo. This is the single blocker for this section.
2. **Who owns the FAQ going forward?** A stale FAQ is a support burden that answers questions
   nobody is asking any more.
3. **Should the pairs collapse on mobile?** Collapsing saves vertical space but hides content,
   costs a script or `<details>`, and loses find-in-page for closed answers. The proposal is
   that they never collapse; the counter-argument is that eight always-open pairs is a long band.
4. **`<dl>` or `<h3>` per question?** `<dl>` is semantically right; headings are navigable. If
   the list grows past about ten entries, headings start to win.
5. **Does the FAQ duplicate content that belongs in About,** and if so which doc owns the answer?
