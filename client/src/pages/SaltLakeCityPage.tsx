import Navigation from '@/components/Navigation';
import SaltLakeCitySection from '@/components/SaltLakeCitySection';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema, createFAQSchema } from '@/components/SEO';

// Local Business schema for Salt Lake City
const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://jpennplanning.com/salt-lake-city#localbusiness",
  "name": "J Penn Planning - Salt Lake City",
  "description": "Professional event planning and connection coaching services in Salt Lake City, Utah. We create meaningful experiences through themed events, community building, and public speaking.",
  "url": "https://jpennplanning.com/salt-lake-city",
  "telephone": "801-837-6303",
  "email": "jp@jpennplanning.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Salt Lake City",
    "addressRegion": "UT",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7608,
    "longitude": -111.8910
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Salt Lake City",
      "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_City"
    },
    {
      "@type": "City",
      "name": "Murray"
    },
    {
      "@type": "City",
      "name": "Sandy"
    },
    {
      "@type": "City",
      "name": "Draper"
    },
    {
      "@type": "City",
      "name": "South Jordan"
    }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://jpennplanning.com"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Planning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Planning in Salt Lake City",
          "description": "Full-service event planning for corporate and private events in Salt Lake City"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Community Building",
          "description": "Strategic community engagement and event planning for Salt Lake City organizations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Connection Coaching",
          "description": "Personal and professional relationship coaching in Salt Lake City"
        }
      }
    ]
  }
});

// FAQ data for schema
const faqData = [
  {
    question: "What areas of Salt Lake City do you serve?",
    answer: "We serve all of Salt Lake City and the greater Salt Lake Valley, including Downtown, Sugar House, The Avenues, Cottonwood Heights, Millcreek, Holladay, Murray, Sandy, and the surrounding Wasatch Front communities."
  },
  {
    question: "What types of events do you plan in Salt Lake City?",
    answer: "We plan a wide variety of events including corporate gatherings, team building activities, weddings, private parties, themed celebrations, community events, nonprofit galas, and more. Our specialty is creating meaningful connections through thoughtfully designed experiences."
  },
  {
    question: "How far in advance should I book event planning services in Salt Lake City?",
    answer: "We recommend booking at least 2-3 months in advance for smaller events and 6-12 months for larger celebrations. Salt Lake City's event venues book quickly, especially during peak seasons like summer and the holiday months."
  },
  {
    question: "Do you work with local Salt Lake City vendors?",
    answer: "Yes! We have established relationships with the best caterers, florists, photographers, entertainers, and venue coordinators throughout Salt Lake City. Our local connections ensure you get the highest quality services at competitive rates."
  },
  {
    question: "What makes J Penn Planning different from other Salt Lake City event planners?",
    answer: "We focus on creating genuine human connections, not just events. Our approach combines professional event planning with connection coaching to ensure your gathering fosters meaningful relationships that last beyond the event itself."
  }
];

// Combined schema with all structured data
const createCombinedSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    createLocalBusinessSchema(),
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Salt Lake City', url: '/salt-lake-city' }
    ]),
    createFAQSchema(faqData)
  ]
});

export default function SaltLakeCityPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Event Planning Salt Lake City, UT | Event Planner & Connection Coach"
        description="Premier event planning services in Salt Lake City, Utah. J Penn Planning creates unforgettable corporate events, weddings, private parties, and community gatherings. Expert connection coaching and themed experiences. Serving Salt Lake City, Murray, Sandy & the Wasatch Front."
        path="/salt-lake-city"
        keywords="event planning Salt Lake City, Salt Lake City event planner, party planner SLC, wedding planner Salt Lake City, corporate event planning Utah, themed events Salt Lake City, community events SLC, connection coach Utah, event coordinator Salt Lake City, private party planner Utah"
        schema={createCombinedSchema()}
      />
      <Navigation />
      <div className="pt-28">
        <SaltLakeCitySection />
      </div>
      <Footer />
    </div>
  );
}
