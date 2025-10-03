import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services - Event Planning & Community Building | J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert event planning services including intimate gatherings, community building experiences, and transformational events designed to foster meaningful human connections.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-28">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
