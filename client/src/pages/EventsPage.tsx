import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Coffee, Users, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema, createServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Constellation from '@/components/celestial/Constellation';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import Motes from '@/components/celestial/Motes';
import { Button } from '@/components/ui/button';
import { coronaBorealis, pleiades } from '@/data/constellations';
import { site } from '@/data/site';
import gatheringPhoto from '@assets/Taking-Sexy-Back-Event/Group Coaching.jpg';
import teaPartyPhoto from '@assets/b0220067d6c11c56ab7402ac4bd92c06_1759533682929.jpg';
import girlsNightPhoto from '@assets/stock/events-your-gathering.jpg';
import coffeePhoto from '@assets/stock/events-coffee-compliments.jpg';

// The Bad Moms of Utah photo: upload it as attached_assets/stock/events-bad-moms.jpg
// and it is picked up automatically on the next build. Until then the tea-party
// photo stands in.
const uploadedBadMoms = import.meta.glob('../../../attached_assets/stock/events-bad-moms.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;
const badMomsPhoto = Object.values(uploadedBadMoms)[0] ?? teaPartyPhoto;

export default function EventsPage() {
  const schema = {
    ...createServiceSchema('Events & Experiences', 'Gatherings designed to create something much more meaningful than another night out.'),
    breadcrumb: createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Events', url: '/events' },
    ]),
  };
  const cc = site.events.coffeeAndCompliments;

  return (
    <Layout onSky>
      <SEO
        title="Events & Experiences"
        description="Gatherings designed to create something much more meaningful than another night out. Monthly Bad Moms of Utah events, Coffee & Compliments (coming soon), and help with your own gathering."
        path="/events"
        keywords="women's events Utah, Bad Moms of Utah, Coffee and Compliments, girls night ideas Utah, event planning help Utah, community gatherings"
        schema={schema}
      />
      <PageHero
        eyebrow="Connect with others"
        title={<>Events &amp; Experiences</>}
        lede="Gatherings designed to create something much more meaningful than another night out."
        constellation={coronaBorealis}
        seed={19}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="eyebrow h-12 px-8" data-testid="button-bad-moms">
            <a href={site.social.badMomsOfUtah} target="_blank" rel="noopener noreferrer">
              This month with Bad Moms of Utah
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="eyebrow h-12 px-8 border-ivory/30 text-ivory bg-transparent hover:bg-ivory/10" data-testid="button-message-event">
            <Link href="/contact?about=events">Message me about your event</Link>
          </Button>
        </div>
      </PageHero>

      {/* always something happening */}
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal className="lg:col-span-2">
              <div className="h-full grid md:grid-cols-2 bg-card border border-border/70 rounded-sm overflow-hidden lift">
                <div className="zoom-frame min-h-[260px]"><img src={badMomsPhoto} alt="A group of women laughing together for a selfie at a backyard gathering at golden hour" className="w-full h-full object-cover min-h-[260px]" loading="lazy" /></div>
                <div className="p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-2 text-gold"><Users className="w-4 h-4" /><span className="eyebrow">Every month</span></div>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl text-forest leading-tight">Bad Moms of Utah</h2>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    A club of moms who show up for each other. Monthly gatherings, zero pretending, plenty of laughing. There is always something on the calendar.
                  </p>
                  <a href={site.social.badMomsOfUtah} target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 eyebrow text-forest inline-flex items-center gap-2 hover:gap-3 transition-all" data-testid="link-bad-moms-card">
                    See upcoming events <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full sky rounded-sm flex flex-col relative overflow-hidden min-h-[420px] lift">
                <img src={coffeePhoto} alt="Three women laughing and clinking coffee cups at a café table" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, hsl(var(--midnight) / 0.15) 0%, hsl(var(--sky) / 0.55) 45%, hsl(var(--sky) / 0.95) 100%)' }} aria-hidden="true" />
                <div className="absolute -right-6 top-4 w-32 text-ivory/40" aria-hidden="true">
                  <Constellation data={pleiades} mode="view" strokeWidth={0.6} />
                </div>
                <div className="relative mt-auto p-8 md:p-10 flex flex-col">
                <div className="flex items-center gap-2 text-gold"><Coffee className="w-4 h-4" /><span className="eyebrow">Coming soon</span></div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-ivory leading-tight">{cc.name}</h2>
                <p className="mt-4 text-ivory/75 leading-relaxed">{cc.blurb}</p>
                <Link href="/contact?about=coffee-and-compliments" className="mt-6 eyebrow text-gold-soft inline-flex items-center gap-2 hover:gap-3 transition-all" data-testid="link-coffee-notify">
                  Tell me when it&apos;s happening <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* your event */}
      <section className="bg-card ground-glow py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <Motes count={12} seed={19} />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <Eyebrow className="mb-5">Your gathering</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">Two ways I can help with your event.</h2>
              <div className="mt-9 space-y-8">
                <div className="flex gap-5">
                  <Sparkles className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl text-forest">Hire me to enhance your girls&apos; night</h3>
                    <p className="mt-2 text-foreground/80 leading-relaxed">
                      Bachelorette party, divorce party, or just a pick-me-up. I come to you and guide your people into confidence, connection, and a night they&apos;ll actually remember.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Users className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl text-forest">Brainstorm and guidance for your own event</h3>
                    <p className="mt-2 text-foreground/80 leading-relaxed">
                      Event planning isn&apos;t my main focus anymore, but I still love it and I&apos;m glad to offer my time and expertise. Bring me your idea and we&apos;ll shape it into a gathering that connects people.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-10 eyebrow" data-testid="button-events-contact">
                <Link href="/contact?about=events">
                  Message me about your event
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="zoom-frame rounded-sm"><img src={gatheringPhoto} alt="Women gathered for a coaching circle" className="w-full aspect-[3/4] object-cover rounded-sm" loading="lazy" /></div>
                <div className="zoom-frame rounded-sm mt-8"><img src={girlsNightPhoto} alt="A backyard girls' night under string lights with sparklers" className="w-full aspect-[3/4] object-cover rounded-sm" loading="lazy" /></div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container size="sm" className="text-center">
          <Reveal>
            <p className="font-display text-3xl md:text-4xl font-light text-forest">Read about a past gathering</p>
            <Button asChild variant="link" className="mt-3 eyebrow text-forest" data-testid="link-tsb">
              <Link href="/journal/taking-sexy-back-womens-history-month-2026">
                Taking Sexy Back, Women&apos;s History Month 2026
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
