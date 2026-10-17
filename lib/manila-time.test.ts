import test from "node:test";
import assert from "node:assert/strict";
import { manilaTime } from "./manila-time.ts";

test("reads the chapter's clock, not the visitor's zone", () => {
  assert.equal(manilaTime(new Date("2026-10-17T16:32:00Z")), "00:32");
});

test("pads to a fixed width so the chip never reflows", () => {
  assert.equal(manilaTime(new Date("2026-01-05T01:04:00Z")), "09:04");
});