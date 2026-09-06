import type { ReactNode } from 'react';
import Starfield from '@/components/celestial/Starfield';
import Constellation from '@/components/celestial/Constellation';
import type { Constellation as ConstellationData } from '@/data/constellations';
import { Container, Eyebrow, Reveal } from '@/components/Section';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  constellation?: ConstellationData;
  children?: ReactNode;
  seed?: number;
}

/**
 * Night-sky page opener. Each page carries its own constellation language.
 */
export default function PageHero({ eyebrow, title, lede, constellation, children, seed = 3 }: PageHeroProps) {
  return (
    <section className="sky sky-gradient relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28">
      <Starfield count={60} seed={seed} />
      <Container className="relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <Reveal>
            {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
            <h1 className="font-display text-5xl md:text-7xl font-light text-ivory leading-[1.02] text-balance">{title}</h1>
            {lede && <div className="mt-7 text-lg md:text-xl text-ivory/75 leading-relaxed max-w-2xl">{lede}</div>}
            {children && <div className="mt-9">{children}</div>}
          </Reveal>
          {constellation && (
            <Reveal delay={0.2} className="hidden lg:block">
              <div className="text-gold-soft max-w-sm ml-auto">
                <Constellation data={constellation} mode="view" strokeWidth={0.45} />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
