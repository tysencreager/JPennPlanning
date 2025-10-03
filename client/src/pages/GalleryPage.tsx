import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery & Testimonials - Curated Moments & Client Stories | J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our gallery of beautifully curated events and read testimonials from satisfied clients. From elegant weddings to intimate gatherings, see how we create meaningful connections and unforgettable celebrations.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
    </div>
  );
}
