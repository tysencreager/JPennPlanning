import { useMemo } from 'react';

/**
 * Gold motes drifting up through the ivory "earth" sections: fireflies at
 * dusk, dust in a sunbeam. The daytime cousin of the starfield.
 */
interface MotesProps {
  count?: number;
  seed?: number;
  className?: string;
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Motes({ count = 14, seed = 9, className = '' }: MotesProps) {
  const motes = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }, () => ({
      x: rand() * 100,
      y: 20 + rand() * 80,
      size: 2 + rand() * 3,
      duration: 11 + rand() * 10,
      delay: -rand() * 20,
      sway: (rand() - 0.5) * 60,
      max: 0.35 + rand() * 0.4,
    }));
  }, [count, seed]);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {motes.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            ['--mote-duration' as string]: `${m.duration}s`,
            ['--mote-delay' as string]: `${m.delay}s`,
            ['--mote-sway' as string]: `${m.sway}px`,
            ['--mote-max' as string]: m.max,
          }}
        />
      ))}
    </div>
  );
}
