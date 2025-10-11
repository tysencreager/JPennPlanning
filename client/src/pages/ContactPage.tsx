import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us - Start Planning Your Event | J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Jessica Pennington at J Penn Planning to start creating your extraordinary event. Email jp@jpennplanning.com or call 801-837-6303.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
