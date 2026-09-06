import { useEffect } from 'react';
import { isStaging } from '@/data/site';

/**
 * Shown only on the staging build (VITE_STAGING=true). Also tells search
 * engines not to index the preview so it never competes with the live site.
 */
export default function StagingBanner() {
  useEffect(() => {
    if (!isStaging) return;
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);

  if (!isStaging) return null;

  return (
    <div
      className="fixed bottom-3 left-3 z-[60] rounded-full bg-midnight/90 text-ivory text-[11px] font-label tracking-[0.2em] uppercase px-3 py-1.5 shadow-lg backdrop-blur"
      data-testid="staging-banner"
    >
      Staging preview · not live
    </div>
  );
}
