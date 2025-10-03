import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Sparkles } from 'lucide-react';
import servicesImage from '@assets/stock_images/elegant_people_gathe_a9f0f03b.jpg';

export default function ServicesSection() {
  const services = [
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'From intimate gatherings to grand celebrations, we craft unforgettable experiences that bring people together in meaningful ways.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Strengthen bonds and foster genuine connections through carefully curated community events and engagement strategies.'
    },
    {
      icon: Sparkles,
      title: 'Transformational Experiences',
      description: 'Create lasting impact through events designed to inspire, connect, and transform how people relate to one another.'
    }
  ];

  return (
    <section id="services" className="bg-background">
      <div className="relative h-[400px] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-background" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h2 
              className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-6" 
              data-testid="text-services-heading"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0px 0px 12px rgba(0,0,0,0.7)' }}
            >
              Our Services
            </h2>
            <p 
              className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto"
              style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0px 0px 10px rgba(0,0,0,0.7)' }}
            >
              Elevating connections through thoughtfully designed experiences
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32">

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-ring" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-primary" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
