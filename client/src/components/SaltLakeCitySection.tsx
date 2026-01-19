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
  PartyPopper
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTestimonialById } from '@/data/testimonials';
import servicesImage from '@assets/Blog Banner for Website Content_1759661187692.png';

export default function SaltLakeCitySection() {
  const brookeTestimonial = getTestimonialById('brooke');

  const services = [
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'From intimate Salt Lake City gatherings to grand celebrations at venues throughout the Wasatch Front, we craft unforgettable experiences that bring people together.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Strengthen bonds within Salt Lake City\'s vibrant communities through carefully curated events and engagement strategies tailored to local culture.'
    },
    {
      icon: MessageCircle,
      title: 'Connection Coaching',
      description: 'Personalized guidance for Salt Lake City individuals and organizations looking to build deeper, more meaningful relationships.'
    },
    {
      icon: Mic,
      title: 'Public Speaking',
      description: 'Inspiring presentations at Salt Lake City conferences, corporate events, and community gatherings that spark meaningful conversations.'
    }
  ];

  const localVenues = [
    'Downtown Salt Lake City',
    'Sugar House',
    'The Avenues',
    'Cottonwood Heights',
    'Millcreek',
    'Holladay'
  ];

  const eventTypes = [
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Team building, conferences, and company celebrations for Salt Lake City businesses of all sizes.'
    },
    {
      icon: Heart,
      title: 'Private Celebrations',
      description: 'Weddings, anniversaries, milestone birthdays, and intimate gatherings in Salt Lake City.'
    },
    {
      icon: PartyPopper,
      title: 'Themed Experiences',
      description: 'Unique themed parties and immersive experiences designed for Salt Lake City\'s adventurous spirit.'
    },
    {
      icon: Users,
      title: 'Community Events',
      description: 'Neighborhood gatherings, nonprofit galas, and community celebrations across Salt Lake City.'
    }
  ];

  const faqs = [
    {
      question: "What areas of Salt Lake City do you serve?",
      answer: "We serve all of Salt Lake City and the greater Salt Lake Valley, including Downtown, Sugar House, The Avenues, Cottonwood Heights, Millcreek, Holladay, Murray, Sandy, and the surrounding Wasatch Front communities."
    },
    {
      question: "What types of events do you plan in Salt Lake City?",
      answer: "We plan a wide variety of events including corporate gatherings, team building activities, weddings, private parties, themed celebrations, community events, nonprofit galas, and more. Our specialty is creating meaningful connections through thoughtfully designed experiences."
    },
    {
      question: "How far in advance should I book event planning services in Salt Lake City?",
      answer: "We recommend booking at least 2-3 months in advance for smaller events and 6-12 months for larger celebrations. Salt Lake City's event venues book quickly, especially during peak seasons like summer and the holiday months."
    },
    {
      question: "Do you work with local Salt Lake City vendors?",
      answer: "Yes! We have established relationships with the best caterers, florists, photographers, entertainers, and venue coordinators throughout Salt Lake City. Our local connections ensure you get the highest quality services at competitive rates."
    },
    {
      question: "What makes J Penn Planning different from other Salt Lake City event planners?",
      answer: "We focus on creating genuine human connections, not just events. Our approach combines professional event planning with connection coaching to ensure your gathering fosters meaningful relationships that last beyond the event itself."
    }
  ];

  return (
    <section id="salt-lake-city-services" className="bg-background">
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
                Salt Lake City, Utah
              </span>
            </div>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6"
              data-testid="text-slc-heading"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0px 0px 12px rgba(0,0,0,0.7)' }}
            >
              Event Planning Services in Salt Lake City
            </h1>
            <p
              className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8"
              style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0px 0px 10px rgba(0,0,0,0.7)' }}
            >
              Creating meaningful connections and unforgettable experiences throughout Salt Lake City and the Wasatch Front
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
            Your Trusted Salt Lake City Event Planner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            J Penn Planning brings over a decade of experience to Salt Lake City's vibrant event scene.
            From the historic charm of downtown to the stunning mountain backdrops of the Wasatch Range,
            we create events that capture the unique spirit of Utah's capital city.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're planning a corporate conference at the Salt Palace, an intimate wedding reception
            in Sugar House, or a community gathering in Liberty Park, our team understands what makes
            Salt Lake City special and how to create experiences that resonate with locals and visitors alike.
          </p>
        </div>
      </div>

      {/* Core Services */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-12">
          Our Salt Lake City Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-slc-service-${index}`}>
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
            Events We Plan in Salt Lake City
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From corporate functions to personal celebrations, we bring creativity and connection to every event in Salt Lake City.
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

      {/* Areas Served */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-4">
          Serving All of Salt Lake City & Surrounding Areas
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're proud to serve clients throughout the Salt Lake Valley and beyond.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {localVenues.map((area, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-primary/10 rounded-full text-primary font-medium"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          Plus Murray, Sandy, Draper, South Jordan, West Valley City, and the entire Wasatch Front
        </p>
      </div>

      {/* Testimonial */}
      {brookeTestimonial && (
        <div className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Star className="w-8 h-8 text-ring mx-auto mb-4" />
            <h3 className="font-serif text-xl text-ring mb-4">"{brookeTestimonial.title}"</h3>
            <blockquote className="font-serif text-lg md:text-xl italic text-primary-foreground mb-6 leading-relaxed">
              "{brookeTestimonial.content.split('\n\n')[0]}"
            </blockquote>
            <p className="text-primary-foreground/80">— {brookeTestimonial.author}</p>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Common questions about our Salt Lake City event planning services
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
          Ready to Plan Your Salt Lake City Event?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's create an unforgettable experience together. Contact us today for a free consultation
          and discover how we can make your Salt Lake City event truly special.
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
