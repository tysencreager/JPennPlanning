/**
 * Constellation presets for the Affinity Astron visual language.
 *
 * Every page speaks its own "constellation dialect" while the whole site
 * stays one universe:
 *   Coaching  -> Little Dipper / North Star (the client is Polaris)
 *   Events    -> multiple constellations (Corona Borealis + Pleiades)
 *   Speaking  -> Cassiopeia, stars connecting one by one into a shape
 *   Writing   -> Lyra (the lyre: constellations becoming stories/song)
 *   About     -> Big Dipper with a few intentionally brighter stars
 *
 * Coordinates are in a 0..100 box (y grows downward). `order` is the
 * illumination order when the constellation lights up on scroll.
 * `bright` stars render larger with a glow. `polaris` marks the North Star.
 */
export interface StarPoint {
  id: string;
  x: number;
  y: number;
  /** relative size, 1 = default */
  size?: number;
  bright?: boolean;
  polaris?: boolean;
  label?: string;
}

export interface Constellation {
  id: string;
  name: string;
  points: StarPoint[];
  /** pairs of point ids */
  edges: [string, string][];
  /** illumination order of point ids (defaults to points order) */
  order?: string[];
  /** natural aspect ratio (width / height) for layout hints */
  aspect?: number;
}

export const littleDipper: Constellation = {
  id: 'little-dipper',
  name: 'The Little Dipper',
  aspect: 1.15,
  points: [
    { id: 'polaris', x: 86, y: 10, size: 1.6, bright: true, polaris: true, label: 'Polaris' },
    { id: 'yildun', x: 71, y: 25 },
    { id: 'epsilon', x: 58, y: 40 },
    { id: 'zeta', x: 47, y: 55 },
    { id: 'eta', x: 30, y: 63 },
    { id: 'pherkad', x: 22, y: 84, size: 1.2 },
    { id: 'kochab', x: 42, y: 80, size: 1.3, bright: true },
  ],
  edges: [
    ['polaris', 'yildun'],
    ['yildun', 'epsilon'],
    ['epsilon', 'zeta'],
    ['zeta', 'eta'],
    ['eta', 'pherkad'],
    ['pherkad', 'kochab'],
    ['kochab', 'zeta'],
  ],
};

export const bigDipper: Constellation = {
  id: 'big-dipper',
  name: 'The Big Dipper',
  aspect: 1.9,
  points: [
    { id: 'alkaid', x: 4, y: 40, size: 1.2 },
    { id: 'mizar', x: 20, y: 28, bright: true, size: 1.35 },
    { id: 'alioth', x: 36, y: 32 },
    { id: 'megrez', x: 50, y: 40 },
    { id: 'dubhe', x: 74, y: 24, bright: true, size: 1.4 },
    { id: 'merak', x: 78, y: 58 },
    { id: 'phecda', x: 54, y: 66, bright: true, size: 1.25 },
  ],
  edges: [
    ['alkaid', 'mizar'],
    ['mizar', 'alioth'],
    ['alioth', 'megrez'],
    ['megrez', 'dubhe'],
    ['dubhe', 'merak'],
    ['merak', 'phecda'],
    ['phecda', 'megrez'],
  ],
};

export const cassiopeia: Constellation = {
  id: 'cassiopeia',
  name: 'Cassiopeia',
  aspect: 2.2,
  points: [
    { id: 'c1', x: 6, y: 62 },
    { id: 'c2', x: 27, y: 30, size: 1.2 },
    { id: 'c3', x: 50, y: 54, bright: true, size: 1.3 },
    { id: 'c4', x: 72, y: 22, size: 1.2 },
    { id: 'c5', x: 94, y: 46 },
  ],
  edges: [
    ['c1', 'c2'],
    ['c2', 'c3'],
    ['c3', 'c4'],
    ['c4', 'c5'],
  ],
};

export const lyra: Constellation = {
  id: 'lyra',
  name: 'Lyra',
  aspect: 0.8,
  points: [
    { id: 'vega', x: 52, y: 8, bright: true, size: 1.6, label: 'Vega' },
    { id: 'l1', x: 40, y: 32 },
    { id: 'l2', x: 60, y: 36 },
    { id: 'l3', x: 36, y: 68 },
    { id: 'l4', x: 58, y: 74 },
  ],
  edges: [
    ['vega', 'l1'],
    ['vega', 'l2'],
    ['l1', 'l2'],
    ['l1', 'l3'],
    ['l2', 'l4'],
    ['l3', 'l4'],
  ],
};

export const cygnus: Constellation = {
  id: 'cygnus',
  name: 'Cygnus',
  aspect: 1,
  points: [
    { id: 'deneb', x: 50, y: 8, bright: true, size: 1.5 },
    { id: 'sadr', x: 50, y: 40, size: 1.2 },
    { id: 'gienah', x: 16, y: 54 },
    { id: 'delta', x: 82, y: 30 },
    { id: 'albireo', x: 50, y: 92, size: 1.1 },
  ],
  edges: [
    ['deneb', 'sadr'],
    ['sadr', 'albireo'],
    ['gienah', 'sadr'],
    ['sadr', 'delta'],
  ],
};

export const coronaBorealis: Constellation = {
  id: 'corona-borealis',
  name: 'Corona Borealis',
  aspect: 2,
  points: [
    { id: 'k1', x: 6, y: 62 },
    { id: 'k2', x: 20, y: 36 },
    { id: 'k3', x: 38, y: 22 },
    { id: 'gemma', x: 58, y: 22, bright: true, size: 1.4 },
    { id: 'k5', x: 78, y: 36 },
    { id: 'k6', x: 94, y: 60 },
  ],
  edges: [
    ['k1', 'k2'],
    ['k2', 'k3'],
    ['k3', 'gemma'],
    ['gemma', 'k5'],
    ['k5', 'k6'],
  ],
};

export const pleiades: Constellation = {
  id: 'pleiades',
  name: 'The Pleiades',
  aspect: 1.3,
  points: [
    { id: 'p1', x: 22, y: 30, size: 1.1 },
    { id: 'p2', x: 40, y: 20 },
    { id: 'p3', x: 56, y: 34, bright: true, size: 1.3 },
    { id: 'p4', x: 72, y: 28 },
    { id: 'p5', x: 34, y: 56 },
    { id: 'p6', x: 52, y: 62, size: 1.1 },
    { id: 'p7', x: 70, y: 58 },
  ],
  edges: [
    ['p1', 'p2'],
    ['p2', 'p3'],
    ['p3', 'p4'],
    ['p1', 'p5'],
    ['p5', 'p6'],
    ['p6', 'p7'],
    ['p3', 'p6'],
  ],
};

/** The four stars of a personal constellation (used by the assessment). */
export const personalConstellation: Constellation = {
  id: 'personal',
  name: 'Your Constellation',
  aspect: 1.2,
  points: [
    { id: 'self', x: 50, y: 14, size: 1.5, label: 'Self' },
    { id: 'people', x: 84, y: 46, size: 1.5, label: 'People' },
    { id: 'community', x: 58, y: 86, size: 1.5, label: 'Community' },
    { id: 'purpose', x: 16, y: 52, size: 1.5, label: 'Purpose' },
  ],
  edges: [
    ['self', 'people'],
    ['people', 'community'],
    ['community', 'purpose'],
    ['purpose', 'self'],
  ],
};

export const constellations = {
  littleDipper,
  bigDipper,
  cassiopeia,
  lyra,
  cygnus,
  coronaBorealis,
  pleiades,
  personalConstellation,
};
