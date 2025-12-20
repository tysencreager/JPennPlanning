import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Heart, ArrowRight, Sparkles, Users } from 'lucide-react';

export default function HomePage() {

  const services = [
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'From intimate gatherings to grand celebrations, we craft unforgettable experiences that bring people together in meaningful ways.'
    },
    {
      icon: MessageCircle,
      title: 'Connection Coaching and Consulting',
      description: 'Personalized guidance to help individuals and organizations build deeper, more meaningful relationships and connections.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Connection First',
      description: 'Every event is designed with human connection at its core, creating spaces where authentic relationships flourish.'
    },
    {
      icon: Sparkles,
      title: 'Intentional Design',
      description: 'Thoughtful details and curated experiences transform ordinary moments into extraordinary memories.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building lasting communities through events that bring people together and foster genuine belonging.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="J Penn Planning - Themed Events & Community Building"
        description="J Penn Planning specializes in themed events infused with creativity and connection. Led by Jessica Pennington, we create experiences that help you celebrate loved ones, feel belonging, and thrive in this chaotic world."
        path="/"
        keywords="event planning, themed events, community building, Jessica Pennington, Utah event planner, party planning, connection coaching"
      />
      <Navigation />
      <HeroSection />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6" data-testid="text-what-we-do-heading">
            Creating Moments That Matter
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            At J Penn Planning, we believe the magic of life lies in our connections — to ourselves, to each other, and to our communities. We specialize in themed events infused with creativity and connection, creating experiences where people feel like they belong, celebrate their loved ones, and thrive in this chaotic world.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Led by Jessica Pennington, a published author, public speaker, and experienced event planner, we guide you every step of the way — turning ordinary moments into extraordinary ones.
          </p>
          <p className="text-base italic text-muted-foreground mt-8 leading-relaxed">
            "In a world of algorithms, hashtags & followers, know the true importance of Human Connection." - Simi Fromen
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6" data-testid="text-values-heading">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every event we create is guided by core values that ensure meaningful, transformational experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center space-y-4" data-testid={`card-value-${index}`}>
                  <div className="w-16 h-16 rounded-full bg-ring/10 flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-ring" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6" data-testid="text-services-preview-heading">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elevating connections through thoughtfully designed experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-preview-${index}`}>
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-ring" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-primary" data-testid={`text-service-preview-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-preview-description-${index}`}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button asChild size="lg" data-testid="button-view-services">
              <Link href="/services" className="inline-flex items-center gap-2">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6" data-testid="text-cta-heading">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're planning an intimate gathering or a grand celebration, we're here to help you create meaningful connections and unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="button-cta-contact">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" data-testid="button-cta-events">
              <Link href="/events">
                View Upcoming Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
