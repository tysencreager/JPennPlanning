import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useInView,
  animate,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';
import type { Constellation as ConstellationData, StarPoint } from '@/data/constellations';

type Mode = 'scroll' | 'view' | 'static';

interface ConstellationProps {
  data: ConstellationData;
  /**
   * scroll  -> stars illuminate as the element moves through the viewport
   * view    -> plays once when it comes into view
   * static  -> fully lit
   */
  mode?: Mode;
  className?: string;
  /** stroke/star color; defaults to ivory on sky, forest on ivory via currentColor */
  color?: string;
  /** dim stars/edges before they light (0..1) */
  dim?: number;
  /** show star labels (used by the assessment result) */
  showLabels?: boolean;
  /** per-star brightness override 0..1 (assessment result uses this) */
  brightness?: Record<string, number>;
  /** draw the connecting lines */
  lines?: boolean;
  /** external progress motion value (0..1) — overrides mode */
  progress?: MotionValue<number>;
  /** stroke width in viewBox units */
  strokeWidth?: number;
}

/**
 * An SVG constellation whose stars illuminate one by one and whose lines
 * draw themselves as the visitor scrolls. Respects prefers-reduced-motion.
 */
export default function Constellation({
  data,
  mode = 'scroll',
  className = '',
  color = 'currentColor',
  dim = 0.18,
  showLabels = false,
  brightness,
  lines = true,
  progress: externalProgress,
  strokeWidth = 0.35,
}: ConstellationProps) {
  // useScroll/useInView want an HTMLElement ref, so we wrap the svg in a div.
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Scroll-linked progress: 0 when the constellation enters from the bottom,
  // 1 when it has risen about halfway up the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'center 45%'],
  });

  const viewProgress = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  useEffect(() => {
    if (mode !== 'view' || externalProgress) return;
    if (inView) {
      const controls = animate(viewProgress, 1, { duration: 2.4, ease: 'easeOut' });
      return () => controls.stop();
    }
  }, [inView, mode, viewProgress, externalProgress]);

  const staticProgress = useMotionValue(1);

  const progress =
    externalProgress ??
    (reduced || mode === 'static'
      ? staticProgress
      : mode === 'view'
        ? viewProgress
        : scrollYProgress);

  const order = data.order ?? data.points.map((p) => p.id);
  const n = order.length;
  const pointById = Object.fromEntries(data.points.map((p) => [p.id, p])) as Record<string, StarPoint>;

  // Each star has a window [start, end] of the progress range during which it lights.
  const windows: Record<string, [number, number]> = {};
  order.forEach((id, i) => {
    const start = (i / n) * 0.8;
    const end = start + 0.2;
    windows[id] = [start, end];
  });

  return (
    <div ref={ref} className={className}>
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="overflow-visible w-full h-auto"
      style={{ color }}
      aria-label={data.name}
      role="img"
    >
      <defs>
        <radialGradient id={`glow-${data.id}`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="45%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {lines &&
        data.edges.map(([a, b], i) => (
          <Edge
            key={`${a}-${b}-${i}`}
            from={pointById[a]}
            to={pointById[b]}
            progress={progress}
            // a line draws once its later star begins to light
            window={[
              Math.min(windows[a][0], windows[b][0]) + 0.08,
              Math.max(windows[a][1], windows[b][1]),
            ]}
            dim={dim}
            strokeWidth={strokeWidth}
            brightness={
              brightness ? Math.min(brightness[a] ?? 1, brightness[b] ?? 1) : undefined
            }
          />
        ))}

      {data.points.map((p) => (
        <Star
          key={p.id}
          point={p}
          progress={progress}
          window={windows[p.id]}
          dim={dim}
          glowId={`glow-${data.id}`}
          showLabel={showLabels}
          brightness={brightness ? brightness[p.id] ?? 1 : undefined}
        />
      ))}
    </svg>
    </div>
  );
}

function Edge({
  from,
  to,
  progress,
  window,
  dim,
  strokeWidth,
  brightness,
}: {
  from: StarPoint;
  to: StarPoint;
  progress: MotionValue<number>;
  window: [number, number];
  dim: number;
  strokeWidth: number;
  brightness?: number;
}) {
  const pathLength = useTransform(progress, window, [0, 1]);
  const lit = brightness ?? 1;
  return (
    <>
      {/* faint "already there" line */}
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke="currentColor"
        strokeOpacity={dim * 0.6}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <motion.line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke="currentColor"
        strokeOpacity={0.55 * lit + 0.1}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{ pathLength }}
      />
    </>
  );
}

function Star({
  point,
  progress,
  window,
  dim,
  glowId,
  showLabel,
  brightness,
}: {
  point: StarPoint;
  progress: MotionValue<number>;
  window: [number, number];
  dim: number;
  glowId: string;
  showLabel: boolean;
  brightness?: number;
}) {
  const lit = brightness ?? 1;
  const maxOpacity = dim + (1 - dim) * lit;
  const opacity = useTransform(progress, window, [dim, maxOpacity]);
  const scale = useTransform(progress, window, [0.6, 1]);
  const glowOpacity = useTransform(progress, window, [0, (point.bright || point.polaris ? 0.9 : 0.5) * lit]);

  const r = 1.1 * (point.size ?? 1);
  const glowR = r * (point.polaris ? 6 : point.bright ? 4.5 : 3.2);

  return (
    <g>
      <motion.circle
        cx={point.x}
        cy={point.y}
        r={glowR}
        fill={`url(#${glowId})`}
        style={{ opacity: glowOpacity }}
      />
      <motion.circle
        cx={point.x}
        cy={point.y}
        r={r}
        fill="currentColor"
        style={{ opacity, scale, originX: `${point.x}px`, originY: `${point.y}px` }}
      />
      {point.polaris && (
        // four-point sparkle for the North Star
        <motion.path
          d={`M ${point.x} ${point.y - r * 3.2} L ${point.x + r * 0.55} ${point.y - r * 0.55} L ${point.x + r * 3.2} ${point.y} L ${point.x + r * 0.55} ${point.y + r * 0.55} L ${point.x} ${point.y + r * 3.2} L ${point.x - r * 0.55} ${point.y + r * 0.55} L ${point.x - r * 3.2} ${point.y} L ${point.x - r * 0.55} ${point.y - r * 0.55} Z`}
          fill="currentColor"
          style={{ opacity: glowOpacity }}
        />
      )}
      {showLabel && point.label && (
        <motion.text
          x={point.x}
          y={point.y + r + 6.5}
          textAnchor="middle"
          fontSize="4.2"
          fontFamily="var(--font-label)"
          letterSpacing="0.6"
          fill="currentColor"
          style={{ opacity }}
        >
          {point.label.toUpperCase()}
        </motion.text>
      )}
    </g>
  );
}
