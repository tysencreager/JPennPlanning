import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery - Curated Moments of Connection | J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our gallery of beautifully curated events, from elegant weddings to intimate gatherings, showcasing moments of genuine human connection and celebration.');
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
