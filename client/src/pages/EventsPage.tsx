import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventsPage() {
  useEffect(() => {
    document.title = 'Current Events - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore upcoming events and transformational experiences hosted by J Penn Planning. Join us for community gatherings, workshops, and special celebrations.');
    }
  }, []);

  const upcomingEvents = [
    {
      title: 'Community Connection Workshop',
      date: 'Coming Soon',
      time: 'TBA',
      location: 'Location TBA',
      description: 'An interactive workshop focused on building meaningful connections and fostering community bonds through intentional gathering practices.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop'
    },
    {
      title: 'Seasonal Celebration Gathering',
      date: 'Coming Soon',
      time: 'TBA',
      location: 'Location TBA',
      description: 'Join us for a beautifully curated seasonal celebration that brings together community members for food, connection, and memorable experiences.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop'
    },
    {
      title: 'Transformational Experience Retreat',
      date: 'Coming Soon',
      time: 'TBA',
      location: 'Location TBA',
      description: 'A multi-day retreat designed to create lasting memories, deepen connections, and facilitate personal growth through curated experiences.',
      image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6" data-testid="text-events-title">
                Current Events
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us for upcoming gatherings, workshops, and transformational experiences designed to foster connection and create lasting memories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden flex flex-col" data-testid={`card-event-${index}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4" data-testid={`text-event-title-${index}`}>
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`text-event-date-${index}`}>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {event.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Stay Updated
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
