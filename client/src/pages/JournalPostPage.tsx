import { useParams, Link, Redirect } from 'wouter';
import Layout from '@/components/Layout';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { getJournalPostBySlug, getRelatedPosts, createJournalPostSchema, JournalPost } from '@/data/journal';

function RelatedPostCard({ post }: { post: JournalPost }) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link href={`/journal/${post.slug}`}>
      <article className="group bg-card rounded-sm p-5 border border-border/70 hover:border-gold/60 transition-colors h-full">
        <span className="eyebrow text-gold">{formattedDate}</span>
        <h3 className="font-display text-xl text-forest mt-2 leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {post.excerpt}
        </p>
      </article>
    </Link>
  );
}

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown-like rendering for blog content
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={elements.length} className="text-lg text-foreground/85 leading-relaxed mb-6">
              {renderInlineFormatting(text)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-outside pl-6 space-y-2 mb-6 text-lg text-foreground/85">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{renderInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const renderInlineFormatting = (text: string): React.ReactNode => {
      // Handle images ![alt](src)
      const imagePattern = /(!\[[^\]]*\]\([^)]+\))/g;
      const imageParts = text.split(imagePattern);

      if (imageParts.some(p => p.startsWith('!['))) {
        return imageParts.map((part, i) => {
          const imgMatch = part.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
          if (imgMatch) {
            const [, alt, src] = imgMatch;
            return (
              <img
                key={i}
                src={src}
                alt={alt}
                className="w-full rounded-sm my-2"
              />
            );
          }
          if (!part) return null;
          return <span key={i}>{renderLinksAndBold(part)}</span>;
        });
      }

      return renderLinksAndBold(text);
    };

    const renderLinksAndBold = (text: string): React.ReactNode => {
      // Handle links and bold text
      // First split by links [text](url)
      const linkPattern = /(\[[^\]]+\]\([^)]+\))/g;
      const linkParts = text.split(linkPattern);

      return linkParts.map((part, i) => {
        // Check if this is a link
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, linkText, url] = linkMatch;
          // Check if it's an internal link or external
          if (url.startsWith('/')) {
            return (
              <Link key={i} href={url} className="text-forest underline decoration-gold/60 underline-offset-4 hover:text-forest/80 transition-colors">
                {linkText}
              </Link>
            );
          } else if (url.startsWith('mailto:')) {
            return (
              <a key={i} href={url} className="text-forest underline decoration-gold/60 underline-offset-4 hover:text-forest/80 transition-colors">
                {linkText}
              </a>
            );
          } else {
            return (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-forest underline decoration-gold/60 underline-offset-4 hover:text-forest/80 transition-colors">
                {linkText}
              </a>
            );
          }
        }

        // Handle bold text within non-link parts
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((boldPart, j) => {
          if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
            return <strong key={`${i}-${j}`} className="font-semibold text-forest">{boldPart.slice(2, -2)}</strong>;
          }
          return boldPart;
        });
      });
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle headings
      if (trimmedLine.startsWith('## ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={elements.length} className="font-display text-3xl md:text-4xl text-forest mt-12 mb-6">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={elements.length} className="font-display text-2xl md:text-3xl text-forest mt-8 mb-4">
            {trimmedLine.slice(4)}
          </h3>
        );
        return;
      }

      // Handle horizontal rules
      if (trimmedLine === '---') {
        flushParagraph();
        flushList();
        elements.push(
          <hr key={elements.length} className="my-12 gold-rule mx-auto border-0" />
        );
        return;
      }

      // Handle images on their own line
      const imageLineMatch = trimmedLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imageLineMatch) {
        flushParagraph();
        flushList();
        const [, alt, src] = imageLineMatch;
        elements.push(
          <div key={elements.length} className="my-8">
            <img
              src={src}
              alt={alt}
              className="w-full rounded-sm"
            />
          </div>
        );
        return;
      }

      // Handle list items
      if (trimmedLine.startsWith('- ')) {
        flushParagraph();
        inList = true;
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Handle empty lines
      if (trimmedLine === '') {
        flushParagraph();
        if (inList) {
          flushList();
        }
        return;
      }

      // Regular text - add to current paragraph
      if (inList) {
        flushList();
      }
      currentParagraph.push(trimmedLine);
    });

    flushParagraph();
    flushList();

    return elements;
  };

  return <div className="prose-custom">{renderContent()}</div>;
}

export default function JournalPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = slug ? getJournalPostBySlug(slug) : undefined;

  if (!post) {
    return <Redirect to="/journal" />;
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const schema = [
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Journal', url: '/journal' },
      { name: post.title, url: `/journal/${post.slug}` },
    ]),
    createJournalPostSchema(post),
  ];

  return (
    <Layout>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/journal/${post.slug}`}
        keywords={post.keywords}
        type="article"
        image={post.featuredImage}
        schema={schema}
      />

      <header className="bg-background pt-12 md:pt-16 pb-10">
        <Container size="sm">
          <Reveal>
            <Link href="/journal" className="eyebrow text-forest/70 hover:text-forest inline-flex items-center gap-2" data-testid="link-back-journal">
              <ArrowLeft className="w-4 h-4" /> The Journal
            </Link>
            <p className="mt-8 eyebrow text-gold">{post.category} · {formattedDate} · {post.readingTime} min read</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-light text-forest leading-[1.05] text-balance" data-testid="text-post-title">{post.title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">By {post.author}</p>
          </Reveal>
        </Container>
      </header>

      {post.featuredImage && (
        <Container size="md" className="pb-6">
          <Reveal>
            <div className="aspect-[16/9] rounded-sm overflow-hidden">
              <img src={post.featuredImage} alt={post.imageAlt || post.title} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </Container>
      )}

      <article className="py-12 md:py-16 bg-background">
        <Container size="sm">
          <MarkdownContent content={post.content} />
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-border text-xs font-label tracking-wide text-foreground/70">{tag}</span>
            ))}
          </div>
        </Container>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-card border-t border-border/70">
          <Container size="md">
            <Eyebrow className="mb-6">Keep reading</Eyebrow>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => <RelatedPostCard key={rp.id} post={rp} />)}
            </div>
          </Container>
        </section>
      )}

      <section className="sky sky-gradient py-20">
        <Container size="sm" className="text-center">
          <p className="font-display text-3xl md:text-4xl font-light text-ivory">Recognize a little bit of yourself in this?</p>
          <p className="mt-3 text-ivory/70">That&apos;s the point. Let&apos;s talk about what comes next.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="eyebrow" data-testid="button-post-contact">
              <Link href="/contact">Let&apos;s Connect <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" className="eyebrow border-ivory/30 text-ivory bg-transparent hover:bg-ivory/10" data-testid="button-post-assessment">
              <Link href="/assessment">Take the assessment</Link>
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
