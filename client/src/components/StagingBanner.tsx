import { useEffect } from 'react';
import { isStaging, feedbackWidget } from '@/data/site';

/**
 * Shown only on the staging build (VITE_STAGING=true). Also tells search
 * engines not to index the preview so it never competes with the live site.
 */
export default function StagingBanner() {
  useEffect(() => {
    if (!isStaging) return;
    // Replace the index.html "index, follow" tag rather than adding a second one.
    const existing = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = existing?.content ?? null;
    const meta = existing ?? document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    if (!existing) document.head.appendChild(meta);

    // Feedback widget (Feedbucket etc.) — staging only.
    let script: HTMLScriptElement | null = null;
    if (feedbackWidget && !document.querySelector(`script[src="${feedbackWidget.src}"]`)) {
      script = document.createElement('script');
      script.src = feedbackWidget.src;
      script.defer = true;
      for (const [k, v] of Object.entries(feedbackWidget.attrs ?? {})) script.setAttribute(k, v);
      document.head.appendChild(script);
    }

    return () => {
      if (previous !== null) meta.content = previous;
      else meta.remove();
      // keep the widget script; removing it mid-session would break its UI
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
