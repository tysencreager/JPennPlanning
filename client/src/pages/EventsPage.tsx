import { useEffect } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import teaPartyImage from '@assets/b0220067d6c11c56ab7402ac4bd92c06_1759533682929.jpg';

export default function EventsPage() {
  useEffect(() => {
    document.title = 'Public Events - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join us for unique themed events that create lasting memories and new connections. Explore our upcoming public events and transformational experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6" data-testid="text-events-title">
                Public Events - Where Connection Comes Alive
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Unique themed events that help create lasting memories and new connections
              </p>
            </div>

            <Card className="overflow-hidden mb-16" data-testid="card-upcoming-placeholder">
              <div className="p-12 md:p-16 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8">
                    <Calendar className="w-16 h-16 text-ring mx-auto mb-6" />
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="text-placeholder-title">
                      The Plot Thickens...
                    </h2>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                    Our next adventure is brewing behind the scenes, and trust us — it's going to be worth the wait!
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We're cooking up something extraordinary. While we put the finishing touches on our next unforgettable experience, why not reach out and be the first to know when the curtain rises?
                  </p>

                  <div className="bg-muted/30 rounded-lg p-6">
                    <p className="text-lg font-medium text-primary mb-4">
                      ✨ Psst... Want the inside scoop? ✨
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Drop us a line and we'll make sure you're on the VIP list for event announcements, sneak peeks, and all the magical details!
                    </p>
                    <Button
                      asChild
                      size="lg"
                      data-testid="button-get-notified"
                    >
                      <Link href="/contact">
                        Yes, Keep Me in the Loop!
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
