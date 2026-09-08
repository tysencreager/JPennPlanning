import { useMemo } from 'react';

/**
 * A few shooting stars that streak across a night-sky section every so
 * often. Rare on purpose: a wish, not a fireworks show.
 */
interface ShootingStarsProps {
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

export default function ShootingStars({ count = 3, seed = 5, className = '' }: ShootingStarsProps) {
  const stars = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }, () => ({
      x: 5 + rand() * 55,
      y: 4 + rand() * 45,
      angle: 12 + rand() * 20,
      period: 11 + rand() * 9,
      delay: rand() * 12,
      length: 120 + rand() * 120,
    }));
  }, [count, seed]);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s, i) => (
        <span
          key={i}
          className="shooting-star-track"
          style={{ left: `${s.x}%`, top: `${s.y}%`, transform: `rotate(${s.angle}deg)` }}
        >
          <span
            className="shooting-star"
            style={{
              width: `${s.length}px`,
              ['--shoot-period' as string]: `${s.period}s`,
              ['--shoot-delay' as string]: `${s.delay}s`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
