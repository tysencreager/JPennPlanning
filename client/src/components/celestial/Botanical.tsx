import { useMemo } from 'react';

/**
 * A hand-drawn willow sprig in thin line art: the "earth" half of earth + sky.
 * (Grandmother Willow is Jessica's spirit animal.) Renders in currentColor at
 * low opacity so it reads as texture, not illustration.
 */
export default function Botanical({
  className = '',
  leaves = 11,
  flip = false,
  seed = 1,
}: {
  className?: string;
  leaves?: number;
  flip?: boolean;
  seed?: number;
}) {
  const items = useMemo(() => {
    // quadratic bezier stem from bottom-left to top-right
    const p0 = { x: 12, y: 195 };
    const p1 = { x: 30, y: 60 };
    const p2 = { x: 118, y: 14 };
    const out: { x: number; y: number; angle: number; len: number; side: number }[] = [];
    for (let i = 1; i <= leaves; i++) {
      const t = 0.12 + (i / (leaves + 1)) * 0.85;
      const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
      const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
      const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
      const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
      const tangent = (Math.atan2(dy, dx) * 180) / Math.PI;
      const side = i % 2 === 0 ? 1 : -1;
      const wobble = ((i * 7 + seed * 13) % 9) - 4;
      out.push({ x, y, angle: tangent + side * (42 + wobble), len: 22 + ((i * 5 + seed) % 7) * 1.6 - (t > 0.8 ? 8 : 0), side });
    }
    return out;
  }, [leaves, seed]);

  return (
    <svg
      viewBox="0 0 130 200"
      aria-hidden="true"
      className={`pointer-events-none ${flip ? '-scale-x-100' : ''} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 12 195 Q 30 60 118 14" strokeWidth="1.1" />
      {items.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.angle})`}>
          {/* slender willow leaf: two arcs meeting at the tip */}
          <path d={`M 0 0 Q ${l.len * 0.5} ${-l.len * 0.16} ${l.len} 0 Q ${l.len * 0.5} ${l.len * 0.16} 0 0 Z`} strokeWidth="0.9" />
          <path d={`M 0 0 L ${l.len * 0.92} 0`} strokeWidth="0.5" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}
