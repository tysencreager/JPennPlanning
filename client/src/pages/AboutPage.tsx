import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Constellation from '@/components/celestial/Constellation';
import ServiceBreakdown from '@/components/ServiceBreakdown';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { bigDipper } from '@/data/constellations';
import jessicaPhoto from '@assets/IMG_4461_1759499784524.jpeg';

const thread = [
  { role: 'Event planner', note: 'Rooms full of people who came for a party and left with each other.' },
  { role: 'Community builder', note: 'Monthly gatherings with the Bad Moms of Utah, because women need a place to land.' },
  { role: 'Speaker', note: 'Saying the things out loud that most of us carry quietly.' },
  { role: 'Author', note: 'Poor Girls Party Planning, and a daily writing practice that turned into the Journal.' },
  { role: 'Coach', note: 'Helping women recognize the stars that already exist around them.' },
];

export default function AboutPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <Layout onSky>
      <SEO
        title="About Jessica Pennington"
        description="Why does Jessica care so much about connection? Event planner, community builder, speaker, author, coach — and the one thread running through all of it."
        path="/about"
        keywords="Jessica Pennington, connection coach Utah, speaker, author, Bad Moms of Utah, community builder"
        schema={breadcrumb}
      />
      <PageHero
        eyebrow="About Jessica"
        title={<>Why does she care so damn much about connection?</>}
        lede="This isn't a list of credentials. It's the story of how connection became the thread running through my whole life."
        constellation={bigDipper}
        seed={17}
      />

      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
            <Reveal className="md:sticky md:top-32">
              <div className="relative">
                <div className="absolute -inset-3 border border-gold/30 rounded-sm -translate-x-3 translate-y-3" aria-hidden="true" />
                <img src={jessicaPhoto} alt="Jessica Pennington" className="relative w-full rounded-sm object-cover aspect-[4/5]" data-testid="img-jessica" />
              </div>
              <p className="mt-6 text-xs text-muted-foreground">Photo to be updated with the new series.</p>
            </Reveal>

            <div className="space-y-8 text-lg leading-relaxed text-foreground/85">
              <Reveal>
                <Eyebrow className="mb-5">My story</Eyebrow>
                <p className="font-display text-3xl md:text-4xl font-light text-forest leading-snug">
                  I&apos;ve been the woman who didn&apos;t know how she&apos;d get through the night. I know what it&apos;s like to feel completely alone in a crowded life.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  I&apos;m not going to hide the hard parts. I&apos;ve survived suicidal ideation. I&apos;ve walked through postpartum depression and miscarriages. I know, from the inside, how much strength it takes just to keep showing up, and how long it takes a body and a heart to heal. I share that not for sympathy, but because I don&apos;t think coaches say it enough: I&apos;m real. I&apos;ve been through it. And what carried me through, every time, was connection.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  That&apos;s the thread. It&apos;s why a girl who wrote poems and thoughts her whole childhood grew up to build rooms where strangers became friends. It&apos;s why the tea parties turned into a club of moms who show up for each other every month. It&apos;s why I started speaking, then writing, then coaching. Seemingly different things, but all of them are the same thing: helping people find their place in the universe they&apos;re already in.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  I don&apos;t believe people are broken and need to be fixed. I believe people already contain all of the stars they need. Sometimes they just need someone to help by noticing them, naming the struggles, connecting the solutions, and helping them navigate. That&apos;s what I do. And it&apos;s who I am.
                </p>
              </Reveal>
              <Reveal>
                <p className="text-sm text-muted-foreground border-l-2 border-gold/50 pl-4">
                  Draft copy written from our conversation. Jessica&apos;s own telling of this story will replace it when it arrives.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* the thread — a constellation with a few intentionally brighter stars */}
      <section className="sky sky-gradient relative overflow-hidden py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="text-ivory/90 max-w-lg w-full mx-auto">
              <Constellation data={bigDipper} mode="scroll" strokeWidth={0.4} />
            </div>
            <div>
              <Reveal>
                <Eyebrow className="mb-5">One thread, five chapters</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl font-light text-ivory leading-[1.05]">A few intentionally brighter stars.</h2>
              </Reveal>
              <ol className="mt-10 space-y-6">
                {thread.map((t, i) => (
                  <Reveal key={t.role} delay={i * 0.06}>
                    <li className="flex gap-5">
                      <span className="text-gold font-display text-2xl leading-none mt-0.5" aria-hidden="true">✦</span>
                      <div>
                        <p className="eyebrow text-ivory">{t.role}</p>
                        <p className="mt-1.5 text-ivory/70 leading-relaxed">{t.note}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* the signature exercise */}
      <section className="py-24 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <Container size="sm" className="relative text-center">
          <Reveal>
            <Eyebrow align="center" className="mb-6">My favorite way to start</Eyebrow>
            <p className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-forest leading-[1.05] text-balance">
              “Tell me who you are without telling me who you belong to or what your titles are.”
            </p>
            <p className="mt-8 text-lg text-foreground/80 leading-relaxed">
              Not the mom. Not the wife. Not the business owner, the employee, the daughter, the dog mom. Underneath all of that, who are you? The room always goes quiet. And then the most incredible answers come out.
            </p>
            <Button asChild className="mt-10 eyebrow" data-testid="button-about-coaching">
              <Link href="/coaching">
                Explore Connection Coaching
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <ServiceBreakdown id="find-your-connection" />
    </Layout>
  );
}
