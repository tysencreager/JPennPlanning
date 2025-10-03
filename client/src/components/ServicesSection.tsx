import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Sparkles } from 'lucide-react';

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
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6" data-testid="text-services-heading">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Elevating connections through thoughtfully designed experiences
          </p>
        </div>

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
