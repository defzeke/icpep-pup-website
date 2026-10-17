// A regular n-gon rolls with its centre level on inverted catenary arches: for a centre
// displacement x from an arch top, tan θ = sinh(x / a), where a is the apothem.
// Contract: docs/sections/process/README.md.

export function arch(n: number, radius: number) {
  const apothem = radius * Math.cos(Math.PI / n);
  const half = apothem * Math.asinh(Math.tan(Math.PI / n));
  return { apothem, half, period: 2 * half };
}

const local = (x: number, half: number) => {
  const period = 2 * half;
  return x - Math.floor((x + half) / period) * period;
};

/** Depth of the road below the axle at x. */
export function roadDepth(x: number, n: number, radius: number): number {
  const { apothem, half } = arch(n, radius);
  return apothem * Math.cosh(local(x, half) / apothem);
}

/** Total rotation of the polygon once its centre has travelled x. */
export function rotation(x: number, n: number, radius: number): number {
  const { apothem, half, period } = arch(n, radius);
  const arches = Math.floor((x + half) / period);
  return arches * ((2 * Math.PI) / n) + Math.atan(Math.sinh(local(x, half) / apothem));
}
