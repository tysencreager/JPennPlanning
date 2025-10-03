import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  useEffect(() => {
    document.title = 'J Penn Planning - Elegant Event Planning & Community Building';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'J Penn Planning creates curated moments of connection through elegant event planning and community building. Led by Jessica Pennington, published author and experienced event planner.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
}
