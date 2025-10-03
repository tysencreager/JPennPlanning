import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Jessica Pennington - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Jessica Pennington, published author, public speaker, and experienced event planner passionate about fostering deep connections and building lasting communities.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
