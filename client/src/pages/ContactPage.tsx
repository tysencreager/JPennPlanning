import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';

export default function ContactPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Start Planning Your Event"
        description="Contact Jessica Pennington at J Penn Planning to start creating your extraordinary event. Email jp@jpennplanning.com or call 801-837-6303."
        path="/contact"
        keywords="contact event planner, hire event planner, Utah event planning, book event planner, event consultation"
        schema={breadcrumbSchema}
      />
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
