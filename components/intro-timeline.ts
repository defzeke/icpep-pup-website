// The intro's timings and shuffle maths. Deliberately free of JSX and gsap so `node --test`
// can import it. Contract: docs/intro.md.

export type ShuffleTiming = {
  swaps: number;
  from: number;
  to: number;
  curve: number;
  crossfade: number;
};

// Timings in seconds. A first visit runs ~3.1s end to end.
export const T = {
  fadeIn: 0.35,
  // 14 swaps, decelerating 55ms -> 165ms.
  shuffle: { swaps: 14, from: 0.055, to: 0.165, curve: 2, crossfade: 0.045 },
  shuffleOpacity: 0.55,
  ignition: 0.35,
  hold: 0.11,
  exit: 0.5,
  gap: 0.1,
  curtain: 0.85,
  repeatFadeOut: 0.85,
};

// Interval before each swap, so the last swap is the slowest.
export function shuffleIntervals({ swaps, from, to, curve }: ShuffleTiming) {
  const span = swaps > 1 ? swaps - 1 : 1;
  return Array.from({ length: swaps }, (_, i) => from + (to - from) * Math.pow(i / span, curve));
}

export function shuffleOrder(swaps: number, pool: number, showing: number) {
  const order: number[] = [];
  let prev = showing;
  for (let i = 0; i < swaps; i++) {
    const choices = Array.from({ length: pool }, (_, n) => n).filter((n) => n !== prev);
    prev = choices[Math.floor(Math.random() * choices.length)];
    order.push(prev);
  }
  return order;
}
