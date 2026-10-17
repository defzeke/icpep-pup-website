import test from "node:test";
import assert from "node:assert/strict";
import { barcode } from "./barcode.ts";

test("the same seed always draws the same bars", () => {
  assert.deepEqual(barcode("EVT.01"), barcode("EVT.01"));
  assert.notDeepEqual(barcode("EVT.01"), barcode("EVT.02"));
});

test("alternates bar and gap, starting and ending on a bar, every width 1–4", () => {
  const widths = barcode("EVT.03", 20);
  assert.equal(widths.length, 39);
  assert.ok(widths.every((w) => Number.isInteger(w) && w >= 1 && w <= 4));
});
