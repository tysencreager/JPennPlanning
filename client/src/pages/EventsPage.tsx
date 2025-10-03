import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

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

            <Card className="overflow-hidden mb-16" data-testid="card-featured-event">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src="https://static.wixstatic.com/media/f59058_d813cda5c4df4f57847f0d4b92723358~mv2.jpg/v1/crop/x_0,y_1037,w_1080,h_441/fill/w_980,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Barton%20Mad%20Hatter%20Tea%20Party!.jpg"
                    alt="Burton Mad Hatter Tea Party"
                    className="w-full h-full object-cover"
                    data-testid="img-event-featured"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6" data-testid="text-event-featured-title">
                    Burton Mad Hatter Tea Party
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-lg">
                      <Calendar className="w-5 h-5 text-ring" />
                      <span className="font-semibold" data-testid="text-event-featured-date">October 5th, 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-ring" />
                      <div>
                        <div>VIP starts at Noon</div>
                        <div>Tea at 2 P.M.</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-ring" />
                      <span>Hazel Hall, Layton, UT</span>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-6">
                    Step out of the ordinary and tumble straight into Wonderland… but with a delightfully dark Tim Burton twist. This isn't your dainty, proper Bridgerton tea — this is a celebration of chaos and curiosity to kick off the Halloween season in true Mad Hatter style!
                  </p>

                  <div className="space-y-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">General Admission</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Sip on enchanting teas, savor decadent bites, and mingle with your favorite Wonderland characters. This ticket is perfect for those ready to launch the Halloween season with whimsy, spook, and fun!
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          data-testid="button-ticket-ga-adult"
                        >
                          <a
                            href="https://buy.stripe.com/4gM8wP9We002fZ24g21oI0o"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            GA Adult Tickets
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          data-testid="button-ticket-ga-youth"
                        >
                          <a
                            href="https://buy.stripe.com/bJe5kD9We0028wA6oa1oI0s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            GA Youth Tickets
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="bg-ring/5 border border-ring/20 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">VIP Experience</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Unlock a DIY Mad Hat Workshop before the tea! Design your own custom hat with antique keys, aged playing cards, black lace, feathers, and more. Wear your masterpiece into the party as a true "guest of honor" and take home a one-of-a-kind keepsake.
                      </p>
                      <Button
                        asChild
                        size="sm"
                        data-testid="button-ticket-vip"
                      >
                        <a
                          href="https://buy.stripe.com/fZueVdecucMOdQU9Am1oI0p"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          VIP Tickets
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-16 text-center">
              <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Stay Updated on Future Events
                </h3>
                <p className="text-muted-foreground mb-6">
                  Want to be notified about upcoming events and experiences? Reach out to learn more about our community gatherings and how you can participate.
                </p>
                <a
                  href="mailto:Jessica_Pennington@InOmniaParatusEvents.com"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 transition-all"
                  data-testid="button-notify-events"
                >
                  Get Notified
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
