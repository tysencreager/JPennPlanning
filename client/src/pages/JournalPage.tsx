import { Link, useSearch } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { lyra } from '@/data/constellations';
import { getAllJournalPosts, journalCategories, type JournalPost } from '@/data/journal';

function JournalCard({ post, index }: { post: JournalPost; index: number }) {
  const date = new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <article className="group h-full">
        <Link href={`/journal/${post.slug}`} className="block h-full bg-card border border-border/70 rounded-sm overflow-hidden hover:border-gold/60 transition-colors" data-testid={`link-journal-${post.slug}`}>
          {post.featuredImage && (
            <div className="aspect-[16/10] overflow-hidden">
              <img src={post.featuredImage} alt={post.imageAlt || post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
            </div>
          )}
          <div className="p-7">
            <p className="eyebrow text-gold">{post.category} · {date} · {post.readingTime} min</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl text-forest leading-snug group-hover:text-forest/80 transition-colors">{post.title}</h2>
            <p className="mt-3 text-foreground/75 leading-relaxed line-clamp-3">{post.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 eyebrow text-forest group-hover:gap-3 transition-all">Read <ArrowRight className="w-4 h-4" /></span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export default function JournalPage() {
  const search = useSearch();
  const category = new URLSearchParams(search).get('category');
  const all = getAllJournalPosts();
  const posts = category ? all.filter((p) => p.category === category) : all;

  const schema = [
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Journal', url: '/journal' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'The Journal · J Penn Planning',
      description: "Jessica Pennington's journal: reflections, stories, connection advice, speaking topics, event ideas, book updates and community conversations.",
      url: 'https://jpennplanning.com/journal',
      publisher: { '@id': 'https://jpennplanning.com/#organization' },
      blogPost: all.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `https://jpennplanning.com/journal/${post.slug}`,
        datePublished: post.publishedDate,
        author: { '@type': 'Person', name: post.author },
      })),
    },
  ];

  return (
    <Layout onSky>
      <SEO
        title="The Journal"
        description="Reflections, stories, connection advice, speaking topics, event ideas, book updates, and community conversations from Jessica Pennington."
        path="/journal"
        keywords="Jessica Pennington journal, reflections on connection, women's stories Utah, connection advice, H.O.P.E. framework"
        schema={schema}
      />
      <PageHero
        eyebrow="Connect through story"
        title={<>The Journal</>}
        lede="Not a blog. A place for my writing: reflections, stories, connection advice, and the things I've learned along the way."
        constellation={lyra}
        seed={61}
      />

      <section className="py-20 md:py-28 bg-background">
        <Container>
          <Reveal className="flex flex-wrap items-center gap-2 mb-12">
            <Link href="/journal" className={`px-3.5 py-1.5 rounded-full border text-xs font-label tracking-wide transition-colors ${!category ? 'bg-midnight text-ivory border-midnight' : 'border-border text-foreground/75 hover:border-midnight/50'}`}>All</Link>
            {journalCategories.map((c) => (
              <Link key={c} href={`/journal?category=${encodeURIComponent(c)}`} className={`px-3.5 py-1.5 rounded-full border text-xs font-label tracking-wide transition-colors ${category === c ? 'bg-midnight text-ivory border-midnight' : 'border-border text-foreground/75 hover:border-midnight/50'}`}>
                {c}
              </Link>
            ))}
          </Reveal>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((p, i) => <JournalCard key={p.id} post={p} index={i} />)}
            </div>
          ) : (
            <Reveal className="bg-card border border-border/70 rounded-sm p-12 text-center">
              <Eyebrow align="center" className="mb-4">{category}</Eyebrow>
              <p className="font-display text-3xl text-forest">Nothing here yet. It&apos;s coming.</p>
              <p className="mt-3 text-muted-foreground">Jessica writes every day. This corner of the Journal will fill up soon.</p>
              <Button asChild variant="link" className="mt-4 eyebrow text-forest">
                <Link href="/journal">See everything</Link>
              </Button>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="bg-card border-t border-border/70 py-16">
        <Container size="sm" className="text-center">
          <p className="font-display text-3xl md:text-4xl font-light text-forest">Recognize yourself in any of this?</p>
          <p className="mt-3 text-muted-foreground">Find out which of your four stars is asking for attention, then sign up in the footer for new entries. Occasional notes, never noise.</p>
          <Button asChild variant="midnight" className="mt-7 eyebrow" data-testid="button-journal-assessment">
            <Link href="/assessment">
              Take the free assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </Layout>
  );
}
