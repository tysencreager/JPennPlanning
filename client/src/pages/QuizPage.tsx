import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Heart, Users, Sparkles } from 'lucide-react';

export default function QuizPage() {
  useEffect(() => {
    document.title = 'Connections Quiz - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover your connection style with the free Affinity Astron quiz. Learn how you build relationships and foster meaningful connections with others.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-ring/10 rounded-full mb-6">
                <Heart className="w-10 h-10 text-ring" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6" data-testid="text-quiz-title">
                Discover Your Connection Style
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding how you connect with others is the first step to building deeper, more meaningful relationships.
              </p>
            </div>

            <Card className="p-8 md:p-12 mb-12">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                    The Affinity Astron Quiz
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This free, comprehensive quiz helps you understand your unique approach to building connections and relationships. Through thoughtful questions about your preferences, values, and communication style, you'll gain insights into how you naturally foster bonds with others.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Know Yourself</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand your natural connection patterns and tendencies
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-ring" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Build Better</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn strategies to deepen your relationships
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Grow Together</h3>
                    <p className="text-sm text-muted-foreground">
                      Create more meaningful experiences with others
                    </p>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">What You'll Learn:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-ring mt-1">✓</span>
                      <span>Your primary connection style and how it shapes your relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ring mt-1">✓</span>
                      <span>Strategies for building deeper, more authentic connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ring mt-1">✓</span>
                      <span>How to navigate different social situations with confidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ring mt-1">✓</span>
                      <span>Ways to create memorable experiences that bring people together</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8"
                    data-testid="button-take-quiz"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf0Pg6aUjoyXs3jV9uEcwBeyRjyum7-9uTM3xCdqKS-hmft1w/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Take the Free Quiz
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Takes approximately 10-15 minutes to complete
                  </p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Want to discuss your results or learn more about creating meaningful connections?
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                data-testid="button-contact-quiz"
              >
                <a href="mailto:Jessica_Pennington@InOmniaParatusEvents.com">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
