import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Starfield from '@/components/celestial/Starfield';
import Constellation from '@/components/celestial/Constellation';
import Aurora from '@/components/celestial/Aurora';
import ShootingStars from '@/components/celestial/ShootingStars';
import Motes from '@/components/celestial/Motes';
import ServiceBreakdown from '@/components/ServiceBreakdown';
import WorldAccordingToJessica from '@/components/WorldAccordingToJessica';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { littleDipper, coronaBorealis, cassiopeia, lyra, pleiades } from '@/data/constellations';
import { testimonials } from '@/data/testimonials';
import { site } from '@/data/site';
import jessicaPhoto from '@assets/IMG_4461_1759499784524.jpeg';
import gatheringPhoto from '@assets/Taking-Sexy-Back-Event/Group Coaching.jpg';
import eventDecorPhoto from '@assets/att.YF06gY-tsr2WYk_B_YTZ4GyDuZQSL8TytYT1UzFEnMU_1760104715531.jpeg';
import heroSky from '@assets/stock/home-hero-backdrop.jpg';
import coachingPhoto from '@assets/stock/home-coaching-block.jpg';
import speakingRoomPhoto from '@assets/stock/home-speaking-block-speaking-hero.jpg';
import journalPhoto from '@assets/stock/home-books-writing-block.jpg';

interface Offering {
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  to: string;
  constellation: typeof littleDipper;
  photo?: string;
  photoAlt?: string;
  extras?: { label: string; href: string; external?: boolean }[];
}

const offerings: Offering[] = [
  {
    eyebrow: 'Connect with yourself',
    title: 'Connection Coaching',
    copy: "For the woman who knows something needs to change - but doesn't necessarily know what comes next. You do not have to travel the Universe alone. I am here.",
    cta: 'Explore Coaching',
    to: '/coaching',
    constellation: littleDipper,
    photo: coachingPhoto,
    photoAlt: 'A woman on a porch step at dusk, holding a mug and looking up at the first stars',
  },
  {
    eyebrow: 'Connect with others',
    title: 'Events & Experiences',
    copy: 'Gatherings designed to create something much more meaningful than another night out.',
    cta: 'Explore Events',
    to: '/events',
    constellation: pleiades,
    photo: gatheringPhoto,
    photoAlt: 'Women gathered in a circle during a group coaching session',
    extras: [
      { label: 'This month with Bad Moms of Utah', href: site.social.badMomsOfUtah, external: true },
      { label: 'Coffee & Compliments · coming soon', href: '/contact?about=coffee-and-compliments' },
      { label: 'Message me about your event', href: '/contact?about=events' },
    ],
  },
  {
    eyebrow: 'Connect through words',
    title: 'Speaking',
    copy: "Conversations about connection, courage, belonging. Grief, resilience, and the things we don't always say out loud.",
    cta: 'Book Jessica',
    to: '/speaking',
    constellation: cassiopeia,
    photo: speakingRoomPhoto,
    photoAlt: 'A living room of women listening closely in warm lamplight',
  },
  {
    eyebrow: 'Connect through story',
    title: 'Books & Writing',
    copy: 'Stories, ideas, and experiences designed to make you feel something - and maybe recognize a little bit of yourself.',
    cta: 'Explore the Stories',
    to: '/writing',
    constellation: lyra,
    photo: journalPhoto,
    photoAlt: 'An open handwritten journal with a fountain pen and coffee in morning light',
  },
];

export default function HomePage() {
  // Hero parallax: the backdrop, the stars and the constellation drift at
  // different speeds as you scroll away, so the sky has depth.
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const backdropY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '18%']);
  const starsY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '30%']);
  const constellationY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '45%']);

  return (
    <Layout onSky>
      <SEO
        title="J Penn Planning | You Belong Here"
        description="Connection changes everything. Jessica Pennington helps women reconnect with themselves, their people, their community and their purpose through Connection Coaching, gatherings, speaking and writing."
        path="/"
        keywords="connection coaching, Affinity Astron, Jessica Pennington, women's coaching Utah, women's events Utah, speaker on belonging"
      />

      {/* ------------------------------------------------------------------ */}
      {/* HERO — You Belong Here.                                             */}
      {/* ------------------------------------------------------------------ */}
      <section ref={heroRef} className="sky sky-gradient relative min-h-[100svh] flex items-center overflow-hidden">
        <motion.img
          src={heroSky}
          alt=""
          aria-hidden="true"
          className="absolute -inset-y-[12%] inset-x-0 w-full h-[124%] object-cover object-bottom opacity-70"
          style={{ y: backdropY }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky/70 via-sky/25 to-sky/55 pointer-events-none" aria-hidden="true" />
        <Aurora intensity={1.15} />
        <motion.div className="absolute inset-0" style={{ y: starsY }} aria-hidden="true">
          <Starfield count={80} seed={11} clear={[30, 62]} blueRatio={0.14} goldRatio={0.16} />
        </motion.div>
        <ShootingStars count={3} seed={4} />
        <div className="absolute inset-x-0 bottom-0 h-64 dusk-to-ground pointer-events-none" aria-hidden="true" />
        <motion.div className="absolute right-[6%] top-[18%] w-40 md:w-64 text-ivory/70 hidden sm:block" style={{ y: constellationY }} aria-hidden="true">
          <Constellation data={littleDipper} mode="view" dim={0.1} strokeWidth={0.4} />
        </motion.div>
        <Container className="relative pt-40 pb-32 text-center">
          <Reveal>
            <p className="eyebrow text-gold mb-8">J Penn Planning</p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight" data-testid="text-hero-title">
              <span className="shimmer-text">You Belong Here.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-display italic text-2xl md:text-3xl text-gold-soft mt-8">Connection changes everything.</p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-8 max-w-2xl mx-auto text-ivory/80 text-lg md:text-xl leading-relaxed text-balance">
              I believe we&apos;re not meant to navigate this life alone. Whether you&apos;re building a business, gathering a community, finding yourself again, or simply looking for your people - I&apos;m here to help you create meaningful connection.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="eyebrow h-12 px-8" data-testid="button-find-your-connection">
                <a href="#find-your-connection">
                  Find Your Connection
                  <ArrowDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="eyebrow h-12 px-8 border-ivory/30 text-ivory bg-transparent hover:bg-ivory/10" data-testid="button-hero-assessment">
                <Link href="/assessment">Take the free assessment</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* MEET JESSICA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 md:py-32 bg-background ground-glow relative overflow-hidden">
        <Motes count={16} seed={2} />
        <Container className="relative">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 border border-gold/30 rounded-sm translate-x-3 translate-y-3" aria-hidden="true" />
                <div className="zoom-frame relative rounded-sm">
                  <img
                    src={jessicaPhoto}
                    alt="Jessica Pennington"
                    className="w-full rounded-sm object-cover aspect-[4/5]"
                    data-testid="img-jessica"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Eyebrow className="mb-6">Meet Jessica</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-forest leading-[1.05]">
                Event planner. Community builder. Speaker. Author. Coach.
              </h2>
              <p className="mt-7 text-lg text-foreground/80 leading-relaxed">
                Seemingly different things, with one thread running through all of them: connection. I care about it so much that it&apos;s this whole site. I&apos;ve been through the seasons that make women feel alone, and I&apos;ve learned that the way out is never alone. That&apos;s why I do this.
              </p>
              <p className="mt-5 text-lg text-foreground/80 leading-relaxed">
                I don&apos;t believe people are broken and need to be fixed. I believe you already contain all of the stars you need. Sometimes you just need someone to help you notice them.
              </p>
              <Button asChild variant="link" className="mt-6 px-0 eyebrow text-forest" data-testid="link-about">
                <Link href="/about">
                  Read my story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* THE UNSPOKEN — vulnerability, in her words                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="sage-wash relative overflow-hidden py-24 md:py-32">
        <Container size="sm" className="relative">
          <Reveal>
            <Eyebrow className="mb-6">I talk about the unspoken</Eyebrow>
            <p className="font-display text-3xl md:text-5xl font-light text-forest leading-[1.1] text-balance">
              I have experienced suicidal ideation. I have survived, and you can too.
            </p>
            <div className="mt-8 space-y-5 text-lg text-foreground/85 leading-relaxed">
              <p>
                I&apos;ve lived through multiple miscarriages, and postpartum depression that showed up months after my baby was born, when I thought something was seriously wrong with me. Nobody told me it could arrive that late, or take that long to heal.
              </p>
              <p>
                I have no shame about any of it. I say it here because this stuff isn&apos;t talked about enough, and because a coach who has never sat in the dark can&apos;t really walk you out of it. Connection is what carried me. Connection Coaching is how I help guide you to where you need to be.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Button asChild variant="midnight" className="eyebrow" data-testid="button-unspoken-coaching">
                <Link href="/coaching">
                  Connection Coaching
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">If you are in crisis right now, call or text 988 (US). You matter.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WE ARE ALL CONSTELLATIONS (scroll-illuminating Little Dipper)       */}
      {/* ------------------------------------------------------------------ */}
      <section className="sky sky-gradient relative overflow-hidden py-28 md:py-40">
        <Aurora intensity={0.8} />
        <Starfield count={90} seed={23} goldRatio={0.16} />
        <ShootingStars count={2} seed={23} />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 text-ivory/90 max-w-xl mx-auto w-full">
              <Constellation data={littleDipper} mode="scroll" strokeWidth={0.4} />
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <Eyebrow className="mb-6">Affinity Astron</Eyebrow>
                <h2 className="font-display text-5xl md:text-6xl font-light text-ivory leading-[1.02]">
                  We are all constellations.
                </h2>
                <p className="mt-7 font-display text-2xl md:text-3xl text-ivory/85 leading-snug">
                  Individual stars are beautiful; but connect them…<br />and suddenly there&apos;s a story.
                </p>
                <p className="mt-8 eyebrow text-gold-soft tracking-[0.32em]">Your story. Your people. Your constellation.</p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    ['Connection Coaching', '/coaching'],
                    ['Events', '/events'],
                    ['Speaking', '/speaking'],
                    ['Writing', '/writing'],
                  ].map(([label, to]) => (
                    <Link key={to} href={to} className="eyebrow text-ivory/80 hover:text-gold transition-colors border-b border-ivory/20 hover:border-gold pb-1" data-testid={`link-constellation-${to.replace('/', '')}`}>
                      {label}
                    </Link>
                  ))}
                </div>
                <Button asChild variant="link" className="mt-8 px-0 eyebrow text-gold-soft" data-testid="link-affinity-astron">
                  <Link href="/affinity-astron">
                    What is Affinity Astron?
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOUR WAYS TO CONNECT                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-background py-12 md:py-20">
        <Container>
          {offerings.map((o, i) => (
            <Reveal key={o.to}>
              <div className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center py-16 md:py-20 ${i > 0 ? 'border-t border-border/70' : ''}`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <Eyebrow className="mb-5">{o.eyebrow}</Eyebrow>
                  <h3 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">{o.title}</h3>
                  <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-lg">{o.copy}</p>
                  <Button asChild className="mt-8 eyebrow" data-testid={`button-${o.to.replace('/', '')}`}>
                    <Link href={o.to}>
                      {o.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  {o.extras && (
                    <ul className="mt-6 space-y-2">
                      {o.extras.map((x) =>
                        x.external ? (
                          <li key={x.label}>
                            <a href={x.href} target="_blank" rel="noopener noreferrer" className="eyebrow text-midnight hover:text-forest inline-flex items-center gap-2" data-testid={`link-extra-${x.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                              {x.label} <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </li>
                        ) : (
                          <li key={x.label}>
                            <Link href={x.href} className="eyebrow text-midnight hover:text-forest inline-flex items-center gap-2" data-testid={`link-extra-${x.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                              {x.label} <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </div>
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  {o.photo ? (
                    <div className="relative">
                      <div className="zoom-frame rounded-sm"><img src={o.photo} alt={o.photoAlt} className="w-full aspect-[5/4] object-cover rounded-sm" loading="lazy" /></div>
                      <div className="absolute -bottom-6 -right-4 w-28 text-midnight/80 hidden sm:block" aria-hidden="true">
                        <Constellation data={o.constellation} mode="view" strokeWidth={0.6} />
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[5/4] rounded-sm bg-card border border-border/70 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 grain" aria-hidden="true" />
                      <div className="w-3/4 max-w-xs text-midnight" aria-hidden="true">
                        <Constellation data={o.constellation} mode="scroll" strokeWidth={0.5} dim={0.15} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* THE WORLD ACCORDING TO JESSICA                                      */}
      {/* ------------------------------------------------------------------ */}
      <WorldAccordingToJessica photos={[jessicaPhoto, eventDecorPhoto, gatheringPhoto]} />

      {/* ------------------------------------------------------------------ */}
      {/* LEAD GENERATOR — the assessment                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="sky sky-gradient relative overflow-hidden py-28 md:py-36">
        <Aurora intensity={1} />
        <Starfield count={80} seed={41} clear={[25, 75]} goldRatio={0.18} />
        <ShootingStars count={2} seed={41} />
        <Container size="md" className="relative text-center">
          <Reveal>
            <Eyebrow align="center" className="mb-6">Free 5-minute assessment</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1]">
              What&apos;s missing from your constellation?
            </h2>
            <p className="mt-7 text-lg md:text-xl text-ivory/75 max-w-2xl mx-auto leading-relaxed">
              Take the free Affinity Astron assessment and discover the area of connection that&apos;s asking for your attention: Self, People, Community, or Purpose.
            </p>
            <Button asChild size="lg" className="mt-10 eyebrow h-12 px-8" data-testid="button-assessment">
              <Link href="/assessment">
                Find your dimmest star
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FIND YOUR CONNECTION — problem → solution                            */}
      {/* ------------------------------------------------------------------ */}
      <ServiceBreakdown />

      {/* ------------------------------------------------------------------ */}
      {/* PEOPLE I'VE HAD THE PRIVILEGE OF CONNECTING                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 md:py-32 bg-background ground-glow relative overflow-hidden">
        <Motes count={10} seed={31} />
        <Container className="relative">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow className="mb-5">People I&apos;ve had the privilege of connecting</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-light text-forest">Laughing, hugging, creating, or just listening.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <figure className="h-full bg-card border border-border/70 rounded-sm p-8 flex flex-col lift">
                  <span className="text-gold text-3xl font-display leading-none" aria-hidden="true">“</span>
                  <blockquote className="mt-3 text-foreground/85 leading-relaxed line-clamp-6">{t.content.split('\n')[0]}</blockquote>
                  <figcaption className="mt-auto pt-6 eyebrow text-forest/80">
                    {t.author}
                    {t.company && <span className="block normal-case tracking-normal font-sans text-xs text-muted-foreground mt-1">{t.company}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Button asChild variant="link" className="px-0 eyebrow text-forest" data-testid="link-connections">
              <Link href="/connections">
                See the faces and stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* small invitation before the footer */}
      <section className="bg-card border-t border-border/70 py-16">
        <Container size="sm" className="text-center">
          <p className="font-display text-3xl md:text-4xl font-light text-forest">Not sure where to start? Just say hello.</p>
          <p className="mt-3 text-muted-foreground">No pressure, no pitch. I answer every message myself, usually within a day.</p>
          <Button asChild className="mt-8 eyebrow" data-testid="button-say-hello">
            <Link href="/contact">Let&apos;s Connect</Link>
          </Button>
          <p className="mt-6 text-xs text-muted-foreground">{site.email} · {site.phone}</p>
        </Container>
      </section>
    </Layout>
  );
}
