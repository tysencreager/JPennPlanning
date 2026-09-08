import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Constellation from '@/components/celestial/Constellation';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { littleDipper, personalConstellation } from '@/data/constellations';
import { stars } from '@/data/assessment';

export default function AffinityAstronPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Affinity Astron', url: '/affinity-astron' },
  ]);

  return (
    <Layout onSky>
      <SEO
        title="What is Affinity Astron?"
        description="Affinity Astron is connection through constellations. You are the North Star; your values, relationships, passions and community are the stars that form your constellation."
        path="/affinity-astron"
        keywords="Affinity Astron, connection coaching framework, North Star coaching, Little Dipper, Jessica Pennington"
        schema={breadcrumb}
      />
      <PageHero
        eyebrow="Affinity Astron"
        title={<>Connection through constellations.</>}
        lede="The idea is simple: you are the North Star. I'm not the star telling you where to go. I'm the person helping you recognize the stars that already exist around you, and understand how they form a constellation."
        constellation={littleDipper}
        seed={29}
      />

      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Eyebrow className="mb-5">The Little Dipper</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">It contains Polaris. The North Star.</h2>
              <div className="mt-7 space-y-5 text-lg text-foreground/85 leading-relaxed">
                <p>The client is the North Star. They are the guiding light of their own life.</p>
                <p>Everything else - their values, relationships, passions, experiences, boundaries, goals, and community - are stars which form the constellation, the Little Dipper.</p>
                <p className="font-display text-2xl text-forest">My role isn&apos;t to become their North Star. It&apos;s to help them remember how brightly it shines.</p>
              </div>
            </Reveal>
            <div className="text-midnight max-w-md w-full mx-auto">
              <Constellation data={littleDipper} mode="scroll" strokeWidth={0.45} dim={0.15} />
            </div>
          </div>
        </Container>
      </section>

      <section className="sky sky-gradient relative overflow-hidden py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-ivory max-w-sm w-full mx-auto order-2 lg:order-1">
              <Constellation data={personalConstellation} mode="view" showLabels strokeWidth={0.45} />
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <Eyebrow className="mb-5">Your personal constellation</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl font-light text-ivory leading-[1.05]">Four stars. One of them is usually asking for attention.</h2>
                <ul className="mt-9 space-y-5">
                  {stars.map((s) => (
                    <li key={s.id} className="flex gap-4">
                      <span className="text-gold text-xl leading-none mt-1" aria-hidden="true">✦</span>
                      <div>
                        <p className="eyebrow text-ivory">{s.name}</p>
                        <p className="text-ivory/70 mt-1">{s.subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-ivory/70 leading-relaxed">
                  The goal isn&apos;t to tell you what type of person you are. It&apos;s a snapshot of which area of your life may be asking for more attention right now: your dimmest star.
                </p>
                <Button asChild className="mt-8 eyebrow" data-testid="button-aa-assessment">
                  <Link href="/assessment">
                    Take the free assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <Container size="sm" className="relative">
          <Reveal>
            <Eyebrow className="mb-5">What Affinity Astron actually means</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">Celestial, but grounded.</h2>
            <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
              It&apos;s earth + sky. I&apos;m not trying to create a fantasy universe, simply a feeling of finding your place within the universe you&apos;re already in.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <p className="eyebrow text-forest mb-3">It isn&apos;t</p>
                <ul className="space-y-2 text-foreground/75">
                  <li>“Jessica&apos;s cute celestial branding.”</li>
                  <li>Astrology graphics everywhere.</li>
                  <li>Woo-woo.</li>
                  <li>Telling you what to do.</li>
                </ul>
              </div>
              <div>
                <p className="eyebrow text-forest mb-3">It is</p>
                <ul className="space-y-2 text-foreground/75">
                  <li>This is how Jessica sees people.</li>
                  <li>People aren&apos;t broken and don&apos;t need fixing.</li>
                  <li>You already contain all the stars you need.</li>
                  <li>Someone to notice, name, connect, and navigate with you.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
