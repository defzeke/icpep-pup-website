import test from "node:test";
import assert from "node:assert/strict";
import { arch, roadDepth, rotation } from "./roller.ts";

const close = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≉ ${b}`);

test("the road meets a flat side at the arch top and a vertex in the valley", () => {
  const { apothem, half } = arch(4, 100);
  close(roadDepth(0, 4, 100), apothem);
  close(roadDepth(half, 4, 100), 100);
});

test("one arch turns the polygon by exactly one side", () => {
  const { period } = arch(6, 50);
  close(rotation(period, 6, 50), Math.PI / 3);
});

test("rotation is continuous across a valley", () => {
  const { half } = arch(5, 80);
  close(rotation(half - 1e-9, 5, 80), rotation(half + 1e-9, 5, 80));
});
