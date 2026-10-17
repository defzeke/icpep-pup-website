// Contract: docs/intro.md
export type ShuffleTiming = {
  swaps: number;
  from: number;
  to: number;
  curve: number;
  crossfade: number;
};

export const T = {
  fadeIn: 0.35,
  shuffle: { swaps: 14, from: 0.055, to: 0.165, curve: 2, crossfade: 0.045 },
  shuffleOpacity: 0.55,
  ignition: 0.35,
  hold: 0.11,
  outro: 0.95,
};

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