import assert from "node:assert/strict";
import { test } from "node:test";
import { T, shuffleIntervals, shuffleOrder } from "./intro-timeline.ts";

const POOL = 3;

function close(actual: number, expected: number, msg: string) {
  assert.ok(Math.abs(actual - expected) < 1e-9, `${msg}: got ${actual}, expected ${expected}`);
}

test("shuffleIntervals spans the range, slowest last", () => {
  const gaps = shuffleIntervals(T.shuffle);

  assert.equal(gaps.length, T.shuffle.swaps);
  close(gaps[0], T.shuffle.from, "first gap is not the floor");
  close(gaps[gaps.length - 1], T.shuffle.to, "last gap is not the ceiling");

  for (let i = 1; i < gaps.length; i++) {
    assert.ok(gaps[i] >= gaps[i - 1], `gap ${i} is faster than the one before it`);
  }
});

test("shuffleOrder never repeats, and never re-picks what is on screen", () => {
  for (let run = 0; run < 200; run++) {
    const order = shuffleOrder(T.shuffle.swaps, POOL, 0);

    assert.equal(order.length, T.shuffle.swaps);

    let prev = 0;
    for (const next of order) {
      assert.ok(Number.isInteger(next) && next >= 0 && next < POOL, `outside the pool: ${next}`);
      assert.notEqual(next, prev, "a variant repeated back to back");
      prev = next;
    }
  }
});

test("the derived total still matches the ~3.1s that docs/intro.md documents", () => {
  const gaps = shuffleIntervals(T.shuffle).reduce((sum, gap) => sum + gap, 0);
  const total = T.fadeIn + gaps + T.shuffle.crossfade + T.ignition + T.hold + T.gap + T.curtain;

  assert.equal(Number(total.toFixed(3)), 3.108, "the timeline moved but docs/intro.md still says 3.108s");
});