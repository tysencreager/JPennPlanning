import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema, createServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Constellation from '@/components/celestial/Constellation';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { littleDipper } from '@/data/constellations';

const formats = [
  {
    title: 'One-on-one Connection Coaching',
    copy: 'Private sessions for the woman who knows something needs to change but doesn\'t know what comes next. We start with you: who you are underneath the roles, and what your North Star actually wants.',
  },
  {
    title: 'Group coaching & circles',
    copy: 'Small groups of women finding their constellation together. Bimonthly calls, retreats, and brand ambassador programs. Connection with yourself grows into connection with others.',
  },
  {
    title: 'Coaching for photographers & studios',
    copy: 'A 30-minute Connection Coaching session before a boudoir or portrait experience, so your client walks in already seen. Currently partnered with a Utah boudoir studio.',
  },
];

const hope = [
  { letter: 'H', word: 'Heal', copy: 'Name what happened. Give it somewhere to go.' },
  { letter: 'O', word: 'Observe', copy: 'Notice the stars already around you, without judgment.' },
  { letter: 'P', word: 'Passion', copy: 'Follow the spark. Remember what lights you up.' },
  { letter: 'E', word: 'Enlightenment', copy: 'See yourself differently. Then live like it.' },
];

export default function CoachingPage() {
  const schema = {
    ...createServiceSchema(
      'Connection Coaching',
      "One-on-one and group coaching for women who know something needs to change but don't necessarily know what comes next.",
    ),
    breadcrumb: createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Connection Coaching', url: '/coaching' },
    ]),
  };

  return (
    <Layout onSky>
      <SEO
        title="Connection Coaching"
        description="For the woman who knows something needs to change - but doesn't necessarily know what comes next. Connection Coaching with Jessica Pennington: reconnect with yourself, your people, your community and your purpose."
        path="/coaching"
        keywords="connection coaching, life coach for women Utah, vulnerability coaching, empowerment coaching, Affinity Astron, group coaching for women"
        schema={schema}
      />
      <PageHero
        eyebrow="Connect with yourself"
        title={<>Connection Coaching</>}
        lede={
          <>
            For the woman who knows something needs to change - but doesn&apos;t necessarily know what comes next.
            <span className="block mt-4 font-display italic text-2xl text-gold-soft">You do not have to travel the Universe alone. I am here.</span>
          </>
        }
        constellation={littleDipper}
        seed={5}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="eyebrow h-12 px-8" data-testid="button-coaching-connect">
            <Link href="/contact?about=coaching">Let&apos;s talk about coaching</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="eyebrow h-12 px-8 border-ivory/30 text-ivory bg-transparent hover:bg-ivory/10" data-testid="button-coaching-assessment">
            <Link href="/assessment">Start with the free assessment</Link>
          </Button>
        </div>
      </PageHero>

      {/* the approach */}
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Eyebrow className="mb-5">How it works</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">You are the North Star. We find your constellation.</h2>
              <div className="mt-7 space-y-5 text-lg text-foreground/85 leading-relaxed">
                <p>
                  Coaching with me isn&apos;t someone telling you what to do. It starts with one question: <em>tell me who you are without telling me who you belong to or what your titles are.</em> From there, we help you connect with yourself first.
                </p>
                <p>
                  Then we grow it outward: the people closest to you, the community you belong to, the purpose that lights you up. Each one is a star. Together, they&apos;re your constellation.
                </p>
              </div>
              <Button asChild variant="link" className="mt-6 px-0 eyebrow text-forest" data-testid="link-coaching-aa">
                <Link href="/affinity-astron">
                  Read about Affinity Astron
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Reveal>
            <div className="text-midnight max-w-md w-full mx-auto">
              <Constellation data={littleDipper} mode="scroll" strokeWidth={0.45} dim={0.15} />
            </div>
          </div>
        </Container>
      </section>

      {/* formats */}
      <section className="bg-card py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <Container className="relative">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow className="mb-5">Ways to work together</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">Alone, together, or before the camera.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full bg-background border border-border/70 rounded-sm p-8 flex flex-col">
                  <span className="text-gold text-2xl" aria-hidden="true">✦</span>
                  <h3 className="mt-4 font-display text-2xl text-forest leading-snug">{f.title}</h3>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{f.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-sm text-muted-foreground">Pricing, session length and packages to be confirmed with Jessica before launch.</p>
          </Reveal>
        </Container>
      </section>

      {/* H.O.P.E. */}
      <section className="sky sky-gradient relative overflow-hidden py-24 md:py-32">
        <Container>
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow align="center" className="mb-5">The H.O.P.E. framework</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ivory leading-[1.05]">Heal. Observe. Passion. Enlightenment.</h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">The path we walk together, one star at a time.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hope.map((h, i) => (
              <Reveal key={h.letter} delay={i * 0.08}>
                <div className="h-full border border-ivory/15 rounded-sm p-7 bg-sky-2/40 backdrop-blur-sm">
                  <p className="font-display text-6xl text-gold leading-none">{h.letter}</p>
                  <p className="mt-4 eyebrow text-ivory">{h.word}</p>
                  <p className="mt-3 text-ivory/70 leading-relaxed text-sm">{h.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-xs text-ivory/50">Framework descriptions are placeholders for Jessica to refine.</p>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background">
        <Container size="sm" className="text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">Your constellation isn&apos;t broken. One star is simply asking to be seen.</h2>
            <p className="mt-6 text-lg text-foreground/80">Reach out and tell me a little about where you are. I&apos;ll reply personally.</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="eyebrow h-12 px-8" data-testid="button-coaching-cta">
                <Link href="/contact?about=coaching">
                  Let&apos;s Connect
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="midnight" className="eyebrow h-12 px-8" data-testid="button-coaching-cta-assessment">
                <Link href="/assessment">Find your dimmest star</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
