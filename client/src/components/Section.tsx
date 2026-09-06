import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Fade-and-rise reveal for section content. Gentle; never distracting. */
export function Reveal({
  children,
  delay = 0,
  className = '',
  y = 18,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Small uppercase label with a gold hairline — "CONNECT WITH YOURSELF". */
export function Eyebrow({ children, className = '', align = 'left' }: { children: ReactNode; className?: string; align?: 'left' | 'center' }) {
  return (
    <p className={`eyebrow text-gold flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} ${className}`}>
      <span className="inline-block w-6 h-px bg-gold/70" aria-hidden="true" />
      {children}
      {align === 'center' && <span className="inline-block w-6 h-px bg-gold/70" aria-hidden="true" />}
    </p>
  );
}

export function Container({ children, className = '', size = 'lg' }: { children: ReactNode; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const max = size === 'sm' ? 'max-w-3xl' : size === 'md' ? 'max-w-5xl' : 'max-w-7xl';
  return <div className={`${max} mx-auto px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}
