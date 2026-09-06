import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema, createServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Constellation from '@/components/celestial/Constellation';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { cassiopeia } from '@/data/constellations';
import speakingPhoto from '@assets/att.YF06gY-tsr2WYk_B_YTZ4GyDuZQSL8TytYT1UzFEnMU_1760104715531.jpeg';

const topics = [
  { title: 'You belong here', copy: 'On connection, belonging, and why we were never meant to do this alone.' },
  { title: 'Who are you without your titles?', copy: 'The signature exercise, live. Watch a room go quiet and then come alive.' },
  { title: 'Grief, resilience, and the things we don\'t say out loud', copy: 'Suicide awareness, postpartum, loss. Spoken with honesty, humor and care.' },
  { title: 'Taking sexy back', copy: 'Confidence and vulnerability for women who are ready to be seen again.' },
  { title: 'Untouchable', copy: 'A speaking series in the making. Ask about early bookings.' },
];

const audiences = ['Women\'s retreats & circles', 'Brand ambassador programs', 'Girls\' nights & private gatherings', 'Conferences & panels', 'Studios, salons & small businesses', 'Community & nonprofit events'];

export default function SpeakingPage() {
  const schema = {
    ...createServiceSchema('Speaking', "Conversations about connection, courage, belonging, grief, resilience, and the things we don't always say out loud."),
    breadcrumb: createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Speaking', url: '/speaking' },
    ]),
  };

  return (
    <Layout onSky>
      <SEO
        title="Speaking | Book Jessica Pennington"
        description="Book Jessica Pennington to speak. Conversations about connection, courage, belonging, grief, resilience, and the things we don't always say out loud. Retreats, girls' nights, conferences, and community events."
        path="/speaking"
        keywords="Utah speaker women, keynote speaker connection, suicide awareness speaker Utah, women's retreat speaker, girls night speaker, Jessica Pennington speaking"
        schema={schema}
      />
      <PageHero
        eyebrow="Connect through words"
        title={<>Speaking</>}
        lede="Conversations about connection, courage, belonging. Grief, resilience, and the things we don't always say out loud."
        constellation={cassiopeia}
        seed={13}
      >
        <Button asChild size="lg" className="eyebrow h-12 px-8" data-testid="button-book-jessica">
          <Link href="/contact?about=speaking">
            Book Jessica
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </PageHero>

      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <Reveal>
              <img src={speakingPhoto} alt="Jessica speaking to a room of women" className="w-full aspect-[4/3] object-cover rounded-sm" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow className="mb-5">What happens in the room</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">Individual stars connect. A shape becomes visible.</h2>
              <p className="mt-7 text-lg text-foreground/85 leading-relaxed">
                I don&apos;t lecture. I tell the truth about my own life, ask the questions most people are afraid to, and let a room full of strangers turn into a room full of people who see each other. It&apos;s funny, it&apos;s honest, and people leave feeling less alone.
              </p>
              <div className="mt-8 text-forest/70 w-48" aria-hidden="true">
                <Constellation data={cassiopeia} mode="scroll" strokeWidth={0.6} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-card py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <Container className="relative">
          <Reveal className="max-w-2xl mb-12">
            <Eyebrow className="mb-5">Talks & topics</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">Every talk is shaped to your audience.</h2>
          </Reveal>
          <ul className="divide-y divide-border/70">
            {topics.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <li className="py-7 grid md:grid-cols-[1fr_1.2fr] gap-3 md:gap-10">
                  <p className="font-display text-2xl md:text-3xl text-forest leading-snug">{t.title}</p>
                  <p className="text-foreground/80 leading-relaxed md:pt-1.5">{t.copy}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-14">
            <p className="eyebrow text-forest mb-4">Audiences</p>
            <div className="flex flex-wrap gap-2.5">
              {audiences.map((a) => (
                <span key={a} className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground/80">{a}</span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="sky sky-gradient relative overflow-hidden py-24 md:py-32">
        <Container size="sm" className="text-center">
          <Reveal>
            <Eyebrow align="center" className="mb-5">Girls&apos; night, but make it a turning point</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ivory leading-[1.05]">Hire Jessica to enhance your gathering.</h2>
            <p className="mt-6 text-ivory/75 leading-relaxed text-lg">
              Bachelorette parties, divorce parties, a plain old pick-me-up. Bring me in to help your people step into their confidence, their softness, and their power. Drinks optional. Tears and laughter likely.
            </p>
            <Button asChild size="lg" className="mt-9 eyebrow h-12 px-8" data-testid="button-speaking-cta">
              <Link href="/contact?about=speaking">
                Book Jessica
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
