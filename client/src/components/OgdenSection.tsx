import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  Users,
  MessageCircle,
  Mic,
  ArrowRight,
  MapPin,
  Star,
  Heart,
  Building2,
  PartyPopper,
  Mountain
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTestimonialById } from '@/data/testimonials';
import servicesImage from '@assets/Blog Banner for Website Content_1759661187692.png';

export default function OgdenSection() {
  const nicoleTestimonial = getTestimonialById('nicole');

  const services = [
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'From downtown Ogden venues to outdoor mountain celebrations, we create unforgettable experiences that showcase the best of Northern Utah.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connect with Ogden\'s growing community through thoughtfully designed gatherings that strengthen local bonds and foster new relationships.'
    },
    {
      icon: MessageCircle,
      title: 'Connection Coaching',
      description: 'Personalized coaching for Ogden professionals and organizations seeking to build stronger, more authentic connections.'
    },
    {
      icon: Mic,
      title: 'Public Speaking',
      description: 'Engaging presentations for Ogden businesses, conferences, and community events that inspire action and connection.'
    }
  ];

  const localAreas = [
    'Downtown Ogden',
    'Historic 25th Street',
    'South Ogden',
    'North Ogden',
    'Roy',
    'Layton'
  ];

  const eventTypes = [
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional gatherings, team building, and business celebrations for Ogden\'s thriving business community.'
    },
    {
      icon: Heart,
      title: 'Private Celebrations',
      description: 'Weddings, anniversaries, and milestone events with stunning Wasatch mountain backdrops.'
    },
    {
      icon: Mountain,
      title: 'Outdoor Adventures',
      description: 'Unique outdoor events that take advantage of Ogden\'s world-class access to nature and recreation.'
    },
    {
      icon: PartyPopper,
      title: 'Themed Experiences',
      description: 'Creative themed events that capture Ogden\'s unique blend of outdoor culture and urban sophistication.'
    }
  ];

  const faqs = [
    {
      question: "What areas near Ogden do you serve?",
      answer: "We serve all of Ogden and Weber County, including Downtown Ogden, Historic 25th Street, South Ogden, North Ogden, Roy, Layton, Clearfield, Kaysville, Farmington, and the entire Davis County area."
    },
    {
      question: "What types of events are popular in Ogden?",
      answer: "Ogden's unique setting makes it perfect for outdoor mountain weddings, adventure-themed corporate retreats, downtown urban celebrations on Historic 25th Street, ski resort events, and community gatherings. We specialize in events that embrace Ogden's outdoor lifestyle and growing urban culture."
    },
    {
      question: "Can you plan outdoor events in the Ogden area?",
      answer: "Absolutely! Ogden is one of Utah's premier outdoor destinations. We plan events at mountain resorts like Snowbasin and Powder Mountain, outdoor venues along the Ogden River, and scenic locations throughout the Wasatch Range. Our experience with Northern Utah's weather and outdoor venues ensures your event is memorable."
    },
    {
      question: "Do you work with Ogden-area vendors?",
      answer: "Yes! We have strong relationships with local Ogden caterers, photographers, florists, venues, and entertainment providers. From Historic 25th Street restaurants to mountain resort services, we connect you with the best Northern Utah has to offer."
    },
    {
      question: "Why choose J Penn Planning for Ogden events?",
      answer: "We understand Ogden's unique character—its outdoor lifestyle, historic charm, and growing creative community. Our connection-focused approach creates events that feel authentic to Northern Utah while fostering meaningful relationships among your guests."
    }
  ];

  return (
    <section id="ogden-services" className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-background" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-ring" />
              <span
                className="text-ring font-medium text-lg"
                style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}
              >
                Ogden, Utah
              </span>
            </div>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6"
              data-testid="text-ogden-heading"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0px 0px 12px rgba(0,0,0,0.7)' }}
            >
              Event Planning Services in Ogden
            </h1>
            <p
              className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8"
              style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0px 0px 10px rgba(0,0,0,0.7)' }}
            >
              Creating meaningful connections in Northern Utah's outdoor paradise
            </p>
            <Button
              size="lg"
              asChild
              className="bg-ring text-primary border-2 border-ring hover:bg-ring/90 text-lg px-8"
            >
              <Link href="/contact">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
            Your Ogden Event Planning Experts
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Ogden is more than just a city—it's where mountain adventure meets urban creativity.
            J Penn Planning brings this unique spirit to every event we create, combining the natural
            beauty of the Wasatch Range with the historic charm of downtown Ogden.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're planning a corporate retreat at a ski resort, a wedding reception on
            Historic 25th Street, or a community celebration that brings Ogden together, our team
            knows how to create experiences that honor this special place and foster genuine connections.
          </p>
        </div>
      </div>

      {/* Core Services */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-12">
          Our Ogden Event Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-ogden-service-${index}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-ring" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Event Types */}
      <div className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-4">
            Events We Plan in Ogden
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From urban sophistication to mountain adventures, we create events that capture Ogden's unique character.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Ogden */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-12">
          Why Host Your Event in Ogden?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-primary flex items-center gap-2">
              <Mountain className="w-5 h-5 text-ring" />
              World-Class Outdoor Access
            </h3>
            <p className="text-muted-foreground">
              From Snowbasin and Powder Mountain to the Ogden River Parkway, Ogden offers
              unparalleled outdoor venues for memorable events.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-primary flex items-center gap-2">
              <Building2 className="w-5 h-5 text-ring" />
              Historic Downtown Charm
            </h3>
            <p className="text-muted-foreground">
              Historic 25th Street provides unique venues, local restaurants, and urban
              character that makes events unforgettable.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-primary flex items-center gap-2">
              <Users className="w-5 h-5 text-ring" />
              Growing Creative Community
            </h3>
            <p className="text-muted-foreground">
              Ogden's thriving arts and culture scene provides endless inspiration and
              talented local vendors for any event.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-primary flex items-center gap-2">
              <Heart className="w-5 h-5 text-ring" />
              Authentic Utah Experience
            </h3>
            <p className="text-muted-foreground">
              Ogden offers a genuine Northern Utah experience that guests remember long
              after the event ends.
            </p>
          </div>
        </div>
      </div>

      {/* Areas Served */}
      <div className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-4">
            Serving Ogden & Northern Utah
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're proud to serve clients throughout Weber County and Davis County.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {localAreas.map((area, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-primary/10 rounded-full text-primary font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Plus Clearfield, Kaysville, Farmington, Syracuse, and surrounding communities
          </p>
        </div>
      </div>

      {/* Testimonial */}
      {nicoleTestimonial && (
        <div className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Star className="w-8 h-8 text-ring mx-auto mb-4" />
            <h3 className="font-serif text-xl text-ring mb-4">"{nicoleTestimonial.title}"</h3>
            <blockquote className="font-serif text-lg md:text-xl italic text-primary-foreground mb-6 leading-relaxed">
              "{nicoleTestimonial.content.split('\n\n')[0]}"
            </blockquote>
            <p className="text-primary-foreground/80">
              — {nicoleTestimonial.author}
              {nicoleTestimonial.company && <span className="block text-sm mt-1">{nicoleTestimonial.company}</span>}
            </p>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Common questions about our Ogden event planning services
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
          Ready to Plan Your Ogden Event?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's create an experience that captures the spirit of Northern Utah.
          Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground border-2 border-primary-border text-lg px-8"
          >
            <Link href="/contact">
              <ArrowRight className="w-5 h-5 mr-2" />
              Contact Us Today
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg px-8"
          >
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
