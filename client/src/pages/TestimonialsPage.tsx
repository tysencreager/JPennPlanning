import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonials';

// Create Review schema for SEO
const createReviewSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "J Penn Planning",
  "review": testimonials.map(t => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": t.author
    },
    "reviewBody": t.content.substring(0, 200) + "..."
  })),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": testimonials.length.toString()
  }
});

const createCombinedSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    createReviewSchema(),
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Testimonials', url: '/testimonials' }
    ])
  ]
});

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Client Testimonials | J Penn Planning Reviews"
        description="Read what our clients say about J Penn Planning. Real testimonials from satisfied customers who experienced stress-free, beautifully executed events in Utah."
        path="/testimonials"
        keywords="J Penn Planning reviews, event planner testimonials, Utah event planning reviews, party planner reviews, client feedback"
        schema={createCombinedSchema()}
      />
      <Navigation />
      <div className="pt-28">
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6" data-testid="text-testimonials-page-heading">
                Client Testimonials
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                I love hearing your feedback after an event - I love it even more when you want to share it with the world!
                Here's what our amazing clients have to say about working with J Penn Planning.
              </p>
            </div>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.id} className="p-8 md:p-10" data-testid={`card-testimonial-${index}`}>
                  <div className="flex gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-ring/10 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-ring" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4" data-testid={`text-testimonial-title-${index}`}>
                        {testimonial.title}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none mb-6">
                    {testimonial.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-foreground leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mt-6">
                    <p className="font-semibold text-lg text-primary" data-testid={`text-testimonial-author-${index}`}>
                      ~ {testimonial.author}
                      {testimonial.company && (
                        <>
                          ,<br />
                          <span className="text-muted-foreground font-normal">{testimonial.company}</span>
                        </>
                      )}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Ready to Create Your Own Story?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our community of satisfied clients who have experienced stress-free, beautifully executed events. Let's make your next celebration unforgettable.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
