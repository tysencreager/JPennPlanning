import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';

export default function AboutPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jessica Pennington",
    "jobTitle": "Event Planner & Author",
    "description": "Published author, public speaker, and experienced event planner passionate about fostering deep connections and building lasting communities.",
    "worksFor": {
      "@id": "https://jpennplanning.com/#organization"
    },
    "knowsAbout": ["Event Planning", "Community Building", "Connection Coaching", "Public Speaking"]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Jessica Pennington"
        description="Meet Jessica Pennington, published author, public speaker, and experienced event planner passionate about fostering deep connections and building lasting communities."
        path="/about"
        keywords="Jessica Pennington, event planner, published author, public speaker, community builder, connection coach"
        schema={personSchema}
      />
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
