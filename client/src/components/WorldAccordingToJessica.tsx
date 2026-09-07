import { Container, Eyebrow, Reveal } from '@/components/Section';
import { fragments } from '@/data/quotes';

/**
 * Editorial, clean-but-a-little-chaotic collage of photos, quotes and
 * fragments of philosophy. This is Jessica's own corner of the site.
 */
export default function WorldAccordingToJessica({ photos }: { photos: string[] }) {
  const [p1, p2, p3] = photos;
  const q = fragments;

  return (
    <section className="relative bg-card py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grain" aria-hidden="true" />
      <Container className="relative">
        <Reveal className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Eyebrow className="mb-5">Her own corner</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl font-light text-forest leading-[1]">
              The world according<br className="hidden md:block" /> to Jessica
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right">
            Photographs, quotes, and little fragments of philosophy. Professional, sure. But deeply human, and a lot of fun.
          </p>
        </Reveal>

        {/* asymmetric editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[minmax(120px,auto)] gap-4 md:gap-5">
          <Reveal className="col-span-2 md:col-span-5 md:row-span-2">
            <div className="h-full min-h-[320px] rounded-sm overflow-hidden">
              <img src={p1} alt="Jessica" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.05} className="col-span-2 md:col-span-4 sky rounded-sm p-8 flex items-end">
            <p className="font-display text-2xl md:text-3xl text-ivory leading-snug">“{q[0].text}”</p>
          </Reveal>

          <Reveal delay={0.1} className="col-span-1 md:col-span-3 bg-background border border-border/70 rounded-sm p-6 flex items-center">
            <p className="font-display text-xl text-forest leading-snug">“{q[1].text}”</p>
          </Reveal>

          <Reveal delay={0.12} className="col-span-1 md:col-span-3 rounded-sm p-6 flex items-center bg-gold/15 rotate-[-1deg]">
            <p className="font-label text-sm tracking-wide text-forest/90">{q[5].text}</p>
          </Reveal>

          <Reveal delay={0.14} className="col-span-2 md:col-span-4 bg-background border border-border/70 rounded-sm p-7 flex items-center">
            <p className="font-display text-xl md:text-2xl text-forest leading-snug">“{q[2].text}”</p>
          </Reveal>

          <Reveal delay={0.16} className="col-span-1 md:col-span-4 md:row-span-2">
            <div className="h-full min-h-[240px] rounded-sm overflow-hidden">
              <img src={p2} alt="A themed tea party table from one of Jessica's events" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.18} className="col-span-1 md:col-span-3 bg-midnight text-ivory rounded-sm p-6 flex items-center rotate-[1deg]">
            <p className="font-label text-sm tracking-wide">{q[6].text}</p>
          </Reveal>

          <Reveal delay={0.2} className="col-span-2 md:col-span-5 bg-background border border-border/70 rounded-sm p-7 flex items-center">
            <p className="font-display text-xl md:text-2xl text-forest leading-snug">“{q[8].text}”</p>
          </Reveal>

          <Reveal delay={0.22} className="col-span-2 md:col-span-4">
            <div className="h-full min-h-[200px] rounded-sm overflow-hidden">
              <img src={p3} alt="A gathering of women" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.24} className="col-span-2 md:col-span-8 sky rounded-sm p-8 md:p-10 flex items-center justify-between gap-6">
            <p className="font-display text-2xl md:text-3xl text-ivory leading-snug">“{q[9].text}”</p>
            <span className="text-gold text-4xl hidden md:block" aria-hidden="true">✦</span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
