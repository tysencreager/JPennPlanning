import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { getAllBlogPosts, BlogPost } from '@/data/blog';

function BlogPostCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
          {post.featuredImage && (
            <div className="aspect-video overflow-hidden bg-gray-100">
              <img
                src={post.featuredImage}
                alt={post.imageAlt || post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span>{formattedDate}</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                By {post.author}
              </span>
              <span className="text-primary font-medium text-sm group-hover:underline">
                Read More
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]);

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "J Penn Planning Blog",
    "description": "Expert insights on event planning, community building, and creating meaningful celebrations.",
    "url": "https://jpennplanning.com/blog",
    "publisher": {
      "@id": "https://jpennplanning.com/#organization"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://jpennplanning.com/blog/${post.slug}`,
      "datePublished": post.publishedDate,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  const combinedSchema = [breadcrumbSchema, blogListSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Event Planning Blog - Tips, Ideas & Inspiration"
        description="Discover expert event planning tips, celebration ideas, and inspiration for creating meaningful gatherings. From romantic dinners to community events, get the guidance you need."
        path="/blog"
        keywords="event planning blog, party planning tips, celebration ideas, community building, event inspiration, hosting tips, gathering ideas"
        schema={combinedSchema}
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
              Event Planning Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ideas, inspiration, and expert guidance for creating celebrations that foster genuine connection and lasting memories.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {posts.map(post => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  New content coming soon. Check back for event planning tips and inspiration.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4">
              Ready to Plan Your Next Event?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Let us help you create a meaningful celebration that brings people together.
            </p>
            <Link href="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium">
                Get in Touch
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
