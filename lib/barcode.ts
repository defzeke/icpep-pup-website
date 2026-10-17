// A decorative barcode: alternating bar and gap widths (1–4 units), derived from a seed so a
// ticket's bars never change between renders. Not a scannable symbology.
export function barcode(seed: string, bars = 34): number[] {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const widths: number[] = [];
  for (let i = 0; i < bars * 2 - 1; i++) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) ^ i;
    widths.push(1 + ((h >>> 0) % 4));
  }
  return widths;
}
