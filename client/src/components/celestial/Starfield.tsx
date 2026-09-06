import { useMemo } from 'react';

interface StarfieldProps {
  /** number of stars to scatter */
  count?: number;
  /** seed so the same section always renders the same sky */
  seed?: number;
  /** portion of stars that get a warm gold tint (0..1) */
  goldRatio?: number;
  className?: string;
  /** keep stars out of the vertical band [from, to] in % (e.g. behind a headline) */
  clear?: [number, number];
}

// Small deterministic PRNG so the sky doesn't reshuffle between renders.
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * A quiet field of twinkling stars for night-sky sections.
 * "Not big and distracting, just enough to make them feel like they are
 * not alone, or something magical is happening."
 */
export default function Starfield({
  count = 70,
  seed = 7,
  goldRatio = 0.12,
  className = '',
  clear,
}: StarfieldProps) {
  const stars = useMemo(() => {
    const rand = mulberry32(seed);
    const out: {
      x: number; y: number; size: number; delay: number; duration: number; min: number; max: number; gold: boolean;
    }[] = [];
    let guard = 0;
    while (out.length < count && guard < count * 6) {
      guard++;
      const x = rand() * 100;
      const y = rand() * 100;
      if (clear && y > clear[0] && y < clear[1] && x > 20 && x < 80) continue;
      const r = rand();
      const size = r < 0.75 ? 1 + rand() * 1.2 : 2 + rand() * 1.6;
      out.push({
        x,
        y,
        size,
        delay: -rand() * 8,
        duration: 3.5 + rand() * 5,
        min: 0.15 + rand() * 0.25,
        max: 0.7 + rand() * 0.3,
        gold: rand() < goldRatio,
      });
    }
    return out;
  }, [count, seed, goldRatio, clear]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className={`star ${s.gold ? 'star--gold' : ''}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            // CSS custom properties drive the twinkle keyframes
            ['--star-delay' as string]: `${s.delay}s`,
            ['--star-duration' as string]: `${s.duration}s`,
            ['--star-min' as string]: s.min,
            ['--star-max' as string]: s.max,
          }}
        />
      ))}
    </div>
  );
}
