import { useEffect } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function TestimonialsPage() {
  useEffect(() => {
    document.title = 'Testimonials - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read what clients say about J Penn Planning. Discover testimonials from satisfied clients who experienced stress-free, beautifully executed events and celebrations.');
    }
  }, []);

  const testimonials = [
    {
      title: "I Magically Let The Stress of Planning GO",
      content: `I reached out to Jessica at In Omnia Paratus Events about planning my Photography Studio's annual Open House this year and I couldn't be more pleased. We discussed budget, expectations and all the details. Then I (magically) let the stress of planning that event go.

Normally I am a mess, and so stressed leading up to this event, this year - because I hired her - I was relaxed and didn't stress at all. I knew it was being handled by her very capable hands! She brought everything, showed up with help to decorate/set up, and cleaned up (by the way - It's 1000% worth the extra money to have her help with clean up, especially for business events where you have to be right back to work the next day)!

I am SOOO grateful that I hired Jessica and won't hesitate to hire her again and again! I highly recommend!`,
      author: "Nicole Lockwood",
      company: "Lipstick & Lace Boudoir Photography"
    },
    {
      title: "Return Client",
      content: `Jessica has done multiple parties for me!

My baby shower for my third girl was Harry Potter themed and it was amazing. She had decorations, games, food, even party favors, all themed in HP. It was so much fun.

Then, for my baby's first birthday, we did PokéOne. Again, Jessica did perfectly with all the decorations, favors, and a themed cake. She even had handmade Pokémon stuffies made for my daughter to pick her first Pokémon! It was more than I could have asked for. Jessica came early to set up, got everything cleaned up afterwards, and was very professional. I highly recommend her.`,
      author: "Brooke",
      company: null
    },
    {
      title: "Creative Visions Come to Life!",
      content: `I am beyond pleased with my personal experience with In Omnia Paratus Events! I was given a series of color pallets; I chose my favorite colors; and went away for my vacation. Upon my return Jessica had turned my home into a winter wonderland for the holiday season, based off of the colors and input she requested from me!

Her prices are reasonable, and everything was done so professionally. The personal and thoughtful touches just added to the overall Christmas theme that she brought into my spaces! Give her your trust and ideas - you will not be disappointed!`,
      author: "Emily",
      company: null
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6" data-testid="text-testimonials-title">
                Testimonials
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I love hearing your feedback after an event - I love it even more when you want to share it with the world!
              </p>
            </div>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 md:p-10" data-testid={`card-testimonial-${index}`}>
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
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 transition-all"
                  data-testid="button-contact-testimonials"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
