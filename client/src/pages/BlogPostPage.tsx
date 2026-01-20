import { useParams, Link, Redirect } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { getBlogPostBySlug, getRelatedPosts, createBlogPostSchema, BlogPost } from '@/data/blog';

function RelatedPostCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow">
        <span className="text-xs text-muted-foreground">{formattedDate}</span>
        <h3 className="font-serif text-lg font-semibold text-primary mt-1 group-hover:text-primary/80 transition-colors line-clamp-2">
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
            <p key={elements.length} className="text-lg text-muted-foreground leading-relaxed mb-6">
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
          <ul key={elements.length} className="list-disc list-inside space-y-2 mb-6 text-lg text-muted-foreground">
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
              <Link key={i} href={url} className="text-primary underline hover:text-primary/80 transition-colors">
                {linkText}
              </Link>
            );
          } else if (url.startsWith('mailto:')) {
            return (
              <a key={i} href={url} className="text-primary underline hover:text-primary/80 transition-colors">
                {linkText}
              </a>
            );
          } else {
            return (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">
                {linkText}
              </a>
            );
          }
        }

        // Handle bold text within non-link parts
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((boldPart, j) => {
          if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
            return <strong key={`${i}-${j}`} className="font-semibold text-foreground">{boldPart.slice(2, -2)}</strong>;
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
          <h2 key={elements.length} className="font-serif text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={elements.length} className="font-serif text-xl md:text-2xl font-semibold text-primary mt-8 mb-4">
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
          <hr key={elements.length} className="my-12 border-t border-gray-200" />
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

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Redirect to="/blog" />;
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  const articleSchema = createBlogPostSchema(post);
  const combinedSchema = [breadcrumbSchema, articleSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
        type="article"
        image={post.featuredImage}
        schema={combinedSchema}
      />
      <Navigation />

      <main className="pt-20">
        {/* Article Header */}
        <header className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <ol className="flex items-center gap-2 text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                </li>
                <li>/</li>
                <li className="text-primary truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span>{formattedDate}</span>
              <span>{post.readingTime} min read</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif text-lg font-semibold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">Event Planner & Author</p>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="px-4 sm:px-6 lg:px-8 -mt-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src={post.featuredImage}
                  alt={post.imageAlt || post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.parentElement!.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MarkdownContent content={post.content} />
          </div>
        </article>

        {/* Tags */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-muted-foreground px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl font-semibold text-primary mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4">
              Let's Plan Your Next Event
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to create a celebration that fosters genuine connection? We'd love to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium">
                  Contact Us
                </button>
              </Link>
              <Link href="/blog">
                <button className="border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/5 transition-colors font-medium">
                  Back to Blog
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
