import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import Constellation from '@/components/celestial/Constellation';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { lyra } from '@/data/constellations';
import { getAllJournalPosts, journalCategories } from '@/data/journal';
import { site } from '@/data/site';
import bookCover from '@assets/IMG_4464_1759500798005.jpeg';
import review1 from '@assets/jpenplanning book review 1.png';
import review2 from '@assets/jpenplanning book review 2.png';
import review3 from '@assets/jpenplanning book review 3.png';

export default function WritingPage() {
  const posts = getAllJournalPosts().slice(0, 3);
  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Books & Writing', url: '/writing' },
  ]);

  return (
    <Layout onSky>
      <SEO
        title="Books & Writing"
        description="Stories, ideas, and experiences designed to make you feel something - and maybe recognize a little bit of yourself. Jessica Pennington's book, Poor Girls Party Planning, and the Journal."
        path="/writing"
        keywords="Poor Girls Party Planning, Jessica Pennington book, journal, reflections on connection, women's writing Utah"
        schema={breadcrumb}
      />
      <PageHero
        eyebrow="Connect through story"
        title={<>Books &amp; Writing</>}
        lede="Stories, ideas, and experiences designed to make you feel something - and maybe recognize a little bit of yourself."
        constellation={lyra}
        seed={37}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="eyebrow h-12 px-8" data-testid="button-explore-journal">
            <Link href="/journal">
              Explore the Journal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="eyebrow h-12 px-8 border-ivory/30 text-ivory bg-transparent hover:bg-ivory/10" data-testid="button-the-book">
            <a href="#book">The book</a>
          </Button>
        </div>
      </PageHero>

      {/* the book */}
      <section id="book" className="py-24 md:py-32 bg-background scroll-mt-24">
        <Container>
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-3 border border-gold/30 rounded-sm translate-x-3 translate-y-3" aria-hidden="true" />
                <img src={bookCover} alt="Poor Girls Party Planning book cover" className="relative w-full rounded-sm" data-testid="img-book-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow className="mb-5">The book</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-forest leading-[1.02]">Poor Girls Party Planning</h2>
              <p className="mt-3 font-display italic text-2xl text-muted-foreground">Making Core Memories on a Budget</p>
              <p className="mt-7 text-lg text-foreground/85 leading-relaxed">
                Before coaching, before speaking, there were the parties. This is the book about making people feel celebrated without spending money you don&apos;t have. Practical, funny, and full of the belief that has always been underneath it all: the point was never the party. It was the people.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="eyebrow" data-testid="button-buy-book">
                  <a href={site.links.book} target="_blank" rel="noopener noreferrer">
                    Get the book
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="link" className="eyebrow text-forest px-0" data-testid="link-book-page">
                  <Link href="/book">More about the book</Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {[review1, review2, review3].map((r, i) => (
                  <img key={i} src={r} alt={`Reader review ${i + 1}`} className="w-full rounded-sm border border-border/70" loading="lazy" />
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* the journal */}
      <section className="sky sky-gradient relative overflow-hidden py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
            <Reveal>
              <Eyebrow className="mb-5">The Journal</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-light text-ivory leading-[1.05]">I&apos;m not a blogger. I&apos;m a writer.</h2>
              <p className="mt-6 text-ivory/75 leading-relaxed">
                I wrote poems and thoughts my whole childhood. It was how I managed life. Then I got out of it as an adult, until a coach told me to write ten minutes every single day. I haven&apos;t stopped since. This is where those tidbits live: happy, sad, my life, my coaching, and the things that might help you.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {journalCategories.map((c) => (
                  <Link key={c} href={`/journal?category=${encodeURIComponent(c)}`} className="px-3 py-1.5 rounded-full border border-ivory/20 text-xs font-label tracking-wide text-ivory/80 hover:border-gold hover:text-gold transition-colors">
                    {c}
                  </Link>
                ))}
              </div>
              <div className="mt-10 w-32 text-ivory/50" aria-hidden="true">
                <Constellation data={lyra} mode="view" strokeWidth={0.6} />
              </div>
            </Reveal>
            <div className="space-y-4">
              {posts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link href={`/journal/${p.slug}`} className="group grid sm:grid-cols-[160px_1fr] gap-5 bg-sky-2/60 border border-ivory/10 rounded-sm p-4 hover:border-gold/50 transition-colors" data-testid={`link-journal-${p.slug}`}>
                    {p.featuredImage && (
                      <img src={p.featuredImage} alt={p.imageAlt ?? ''} className="w-full aspect-[4/3] sm:aspect-square object-cover rounded-sm" loading="lazy" />
                    )}
                    <div className="py-1">
                      <p className="eyebrow text-gold">{p.category} · {new Date(p.publishedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                      <h3 className="mt-2 font-display text-2xl text-ivory leading-snug group-hover:text-gold-soft transition-colors">{p.title}</h3>
                      <p className="mt-2 text-sm text-ivory/65 line-clamp-2">{p.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
              <Reveal>
                <Button asChild variant="link" className="eyebrow text-gold-soft px-0" data-testid="link-all-journal">
                  <Link href="/journal">
                    All journal entries
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
