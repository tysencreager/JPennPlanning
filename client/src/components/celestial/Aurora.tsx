/**
 * Slow-drifting bands of colour behind the stars: twilight violet, aurora
 * teal, a breath of gold and rose. Screen-blended and heavily blurred so it
 * reads as weather in the sky, not as shapes. Honors prefers-reduced-motion
 * (the blobs simply hold still).
 */
interface AuroraProps {
  /** overall strength 0..1 */
  intensity?: number;
  className?: string;
}

const BLOBS = [
  { color: 'twilight', left: '-10%', top: '-20%', width: '55%', height: '70%', duration: 26, delay: -4, alpha: 0.55 },
  { color: 'aurora', left: '55%', top: '-10%', width: '50%', height: '60%', duration: 32, delay: -12, alpha: 0.32 },
  { color: 'rose', left: '20%', top: '55%', width: '45%', height: '55%', duration: 29, delay: -20, alpha: 0.28 },
  { color: 'gold', left: '70%', top: '60%', width: '35%', height: '45%', duration: 24, delay: -8, alpha: 0.2 },
] as const;

export default function Aurora({ intensity = 1, className = '' }: AuroraProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {BLOBS.map((b, i) => (
        <span
          key={i}
          className="aurora-blob"
          style={{
            left: b.left,
            top: b.top,
            width: b.width,
            height: b.height,
            background: `radial-gradient(ellipse at center, hsl(var(--${b.color}) / ${(b.alpha * intensity).toFixed(3)}), transparent 70%)`,
            ['--aurora-duration' as string]: `${b.duration}s`,
            ['--aurora-delay' as string]: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
