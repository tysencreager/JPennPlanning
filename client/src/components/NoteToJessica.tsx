import type { ReactNode } from 'react';
import { isStaging } from '@/data/site';

/**
 * A review note for Jessica. Renders only on staging hosts, so nothing here
 * can ever leak onto the live site. Format: **Note to Jessica:** …
 */
export default function NoteToJessica({
  children,
  className = '',
  tone = 'ground',
}: {
  children: ReactNode;
  className?: string;
  /** 'sky' for night-sky sections (ivory text), 'ground' for ivory sections */
  tone?: 'ground' | 'sky';
}) {
  if (!isStaging) return null;
  return (
    <p
      className={`text-sm leading-relaxed ${tone === 'sky' ? 'text-ivory/70' : 'text-muted-foreground'} ${className}`}
      data-testid="note-to-jessica"
    >
      <strong className={`font-semibold ${tone === 'sky' ? 'text-gold-soft' : 'text-forest'}`}>Note to Jessica:</strong> {children}
    </p>
  );
}
