import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceBreakdown from '@/components/ServiceBreakdown';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { pleiades } from '@/data/constellations';
import { testimonials } from '@/data/testimonials';
import { site } from '@/data/site';
import tsbGroup from '@assets/Taking-Sexy-Back-Event/Group Coaching.jpg';
import tsbAshley from '@assets/Taking-Sexy-Back-Event/Ashley.jpg';
import tsbBrooke from '@assets/Taking-Sexy-Back-Event/Brooke.jpg';
import tsbJenna from '@assets/Taking-Sexy-Back-Event/Jenna.jpg';
import tsbMichelle from '@assets/Taking-Sexy-Back-Event/Michelle.jpg';
import tsbSister from '@assets/Taking-Sexy-Back-Event/Sister.jpg';
import tsbStarr from '@assets/Taking-Sexy-Back-Event/Starr.jpg';
import ev1 from '@assets/att.7TenUxuLEcTgTu2E7w6X7I6f7NuarZ4iAT9DVXQ4pLg_1760104715531.jpeg';
import ev2 from '@assets/att.kwSDtXCMSD1X7wvvRPlyjTVrOPnRVXLD0V186qVh2a0_1760104715531.jpeg';
import ev3 from '@assets/att.VqQlT47thOP_7dA65Za8SDIYTYHSweZQrr6vt1fpcRU_1760104715531.jpeg';
import ev4 from '@assets/att.YF06gY-tsr2WYk_B_YTZ4GyDuZQSL8TytYT1UzFEnMU_1760104715531.jpeg';
import ev5 from '@assets/att.a6NV39PYVcDkFDp07-FEaYRrMMFTI_0U341L3gtiulc_1760104715531.jpeg';
import ev6 from '@assets/att.1F1-c96wdUFPY54LT4AFe9vaRFT340nVHmQ-htmqqIs_1760104715531.jpeg';
import ev7 from '@assets/att.0VlHnj7-5OnxNOf3JwKD0dviegOgByx7iTXjXs9MBK4_1760104715532.jpeg';
import ev8 from '@assets/att.fGH8IHQ28_-N2f0Jf73YS2TuRnqBsX-b-XyFJUZc0zM_1760104715532.jpeg';
import ev9 from '@assets/att.y20vdSk9gopp9LH3s3yAVFLWwywrbNJaYSyxpY_nzXI_1760104715532.jpeg';
import ev10 from '@assets/att.9VXv0OWcNfxDGp57LdtzQBwPGTucGexThY9vEYEIanc_1760104715532.jpeg';

interface Moment {
  src: string;
  alt: string;
  kind: 'coaching' | 'event' | 'speaking' | 'community';
  tall?: boolean;
}

const moments: Moment[] = [
  { src: tsbGroup, alt: 'Group coaching circle at Taking Sexy Back', kind: 'coaching' },
  { src: tsbAshley, alt: 'Ashley stepping into her confidence', kind: 'coaching', tall: true },
  { src: ev4, alt: 'Jessica speaking to a room of women', kind: 'speaking' },
  { src: ev1, alt: 'Event moment', kind: 'event' },
  { src: tsbBrooke, alt: 'Brooke at Taking Sexy Back', kind: 'coaching', tall: true },
  { src: ev2, alt: 'Event moment', kind: 'event' },
  { src: ev3, alt: 'Community gathering', kind: 'community' },
  { src: tsbJenna, alt: 'Jenna at Taking Sexy Back', kind: 'coaching' },
  { src: ev5, alt: 'Event moment', kind: 'event', tall: true },
  { src: tsbMichelle, alt: 'Michelle at Taking Sexy Back', kind: 'coaching' },
  { src: ev6, alt: 'Community gathering', kind: 'community' },
  { src: tsbSister, alt: 'Sisters at Taking Sexy Back', kind: 'community', tall: true },
  { src: ev7, alt: 'Event moment', kind: 'event' },
  { src: tsbStarr, alt: 'Starr at Taking Sexy Back', kind: 'coaching' },
  { src: ev8, alt: 'Event moment', kind: 'event' },
  { src: ev9, alt: 'Event moment', kind: 'event' },
  { src: ev10, alt: 'Community gathering', kind: 'community' },
];

const kindLabel: Record<Moment['kind'], string> = {
  coaching: 'Coaching',
  event: 'Events',
  speaking: 'Speaking',
  community: 'Community',
};

export default function ConnectionsPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Connections', url: '/connections' },
  ]);

  return (
    <Layout onSky>
      <SEO
        title="People I've Had the Privilege of Connecting"
        description="Testimonials, event photos, speaking moments, coaching feedback and community moments. See how people are connecting with Jessica Pennington: laughing, hugging, creating, or just listening."
        path="/connections"
        keywords="Jessica Pennington testimonials, J Penn Planning reviews, event photos Utah, coaching feedback, community moments"
        schema={breadcrumb}
      />
      <PageHero
        eyebrow="Testimonials & moments"
        title={<>People I&apos;ve had the privilege of connecting</>}
        lede="Whether they're laughing or hugging, creating or just listening. This is what it looks like when people find their place."
        constellation={pleiades}
        seed={43}
      />

      {/* spoken testimonial placeholder + written */}
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal className="lg:col-span-1">
              <div className="h-full sky sky-gradient rounded-sm p-8 flex flex-col justify-between min-h-[320px]">
                <div>
                  <Eyebrow className="mb-4">In their words</Eyebrow>
                  <p className="font-display text-3xl text-ivory leading-snug">A spoken testimonial belongs here.</p>
                  <p className="mt-4 text-ivory/70 text-sm leading-relaxed">
                    Video testimonials are performing best on pages like this. Once Jessica records or collects one, it drops into this space.
                  </p>
                </div>
                <div className="mt-8 aspect-video rounded-sm border border-dashed border-ivory/25 flex items-center justify-center text-ivory/40 text-xs font-label tracking-widest uppercase">
                  Video placeholder
                </div>
              </div>
            </Reveal>
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <figure className="h-full bg-card border border-border/70 rounded-sm p-8 flex flex-col">
                  <p className="eyebrow text-gold">{t.title}</p>
                  <blockquote className="mt-4 text-foreground/85 leading-relaxed whitespace-pre-line text-[15px]">{t.content}</blockquote>
                  <figcaption className="mt-auto pt-6 eyebrow text-forest/80">
                    {t.author}
                    {t.company && <span className="block normal-case tracking-normal font-sans text-xs text-muted-foreground mt-1">{t.company}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* visual wall */}
      <section className="bg-card py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <Container className="relative">
          <Reveal className="max-w-2xl mb-12">
            <Eyebrow className="mb-5">Moments</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">Smiles, laughter, hugs, awkward moments, and all the beauty around it.</h2>
          </Reveal>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
            {moments.map((m, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <figure className="relative break-inside-avoid overflow-hidden rounded-sm group">
                  <img src={m.src} alt={m.alt} className={`w-full object-cover ${m.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'} transition-transform duration-700 group-hover:scale-[1.03]`} loading="lazy" />
                  <figcaption className="absolute left-3 bottom-3 eyebrow text-[10px] text-ivory bg-sky/70 backdrop-blur px-2.5 py-1 rounded-full">
                    {kindLabel[m.kind]}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ServiceBreakdown id="find-your-connection" tone="sky" />

      <section className="py-20 bg-background">
        <Container size="sm" className="text-center">
          <Reveal>
            <p className="font-display text-3xl md:text-4xl font-light text-forest">Have a story about connecting with Jessica?</p>
            <p className="mt-3 text-muted-foreground">Written, photo, or a quick video from your phone. All welcome.</p>
            <Button asChild className="mt-8 eyebrow" data-testid="button-share-story">
              <a href={`mailto:${site.email}?subject=My%20story`}>
                Share your story
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Link href="/contact" className="sr-only">Contact</Link>
          </Reveal>
        </Container>
      </section>
    </Layout>
  );
}
