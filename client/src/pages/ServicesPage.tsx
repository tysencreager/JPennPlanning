import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';

export default function ServicesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Services - Event Planning & Community Building"
        description="Expert event planning services including intimate gatherings, community building experiences, and transformational events designed to foster meaningful human connections."
        path="/services"
        keywords="event planning services, community building, connection coaching, public speaking, corporate events, private parties, Utah event services"
        schema={breadcrumbSchema}
      />
      <Navigation />
      <div className="pt-28">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
