import Navigation from '@/components/Navigation';
import OgdenSection from '@/components/OgdenSection';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema, createFAQSchema } from '@/components/SEO';

// Local Business schema for Ogden
const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://jpennplanning.com/ogden#localbusiness",
  "name": "J Penn Planning - Ogden",
  "description": "Professional event planning and connection coaching services in Ogden, Utah. We create meaningful experiences through themed events, outdoor celebrations, community building, and public speaking in Northern Utah.",
  "url": "https://jpennplanning.com/ogden",
  "telephone": "801-837-6303",
  "email": "jp@jpennplanning.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ogden",
    "addressRegion": "UT",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.2230,
    "longitude": -111.9738
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Ogden",
      "sameAs": "https://en.wikipedia.org/wiki/Ogden,_Utah"
    },
    {
      "@type": "City",
      "name": "Layton"
    },
    {
      "@type": "City",
      "name": "Roy"
    },
    {
      "@type": "City",
      "name": "Clearfield"
    },
    {
      "@type": "City",
      "name": "Kaysville"
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
          "name": "Event Planning in Ogden",
          "description": "Full-service event planning for corporate and private events in Ogden and Northern Utah"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outdoor Event Planning",
          "description": "Mountain weddings, outdoor corporate retreats, and adventure events in the Ogden area"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Community Building",
          "description": "Strategic community engagement and event planning for Ogden organizations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Connection Coaching",
          "description": "Personal and professional relationship coaching in Northern Utah"
        }
      }
    ]
  }
});

// FAQ data for schema
const faqData = [
  {
    question: "What areas near Ogden do you serve?",
    answer: "We serve all of Ogden and Weber County, including Downtown Ogden, Historic 25th Street, South Ogden, North Ogden, Roy, Layton, Clearfield, Kaysville, Farmington, and the entire Davis County area."
  },
  {
    question: "What types of events are popular in Ogden?",
    answer: "Ogden's unique setting makes it perfect for outdoor mountain weddings, adventure-themed corporate retreats, downtown urban celebrations on Historic 25th Street, ski resort events, and community gatherings. We specialize in events that embrace Ogden's outdoor lifestyle and growing urban culture."
  },
  {
    question: "Can you plan outdoor events in the Ogden area?",
    answer: "Absolutely! Ogden is one of Utah's premier outdoor destinations. We plan events at mountain resorts like Snowbasin and Powder Mountain, outdoor venues along the Ogden River, and scenic locations throughout the Wasatch Range. Our experience with Northern Utah's weather and outdoor venues ensures your event is memorable."
  },
  {
    question: "Do you work with Ogden-area vendors?",
    answer: "Yes! We have strong relationships with local Ogden caterers, photographers, florists, venues, and entertainment providers. From Historic 25th Street restaurants to mountain resort services, we connect you with the best Northern Utah has to offer."
  },
  {
    question: "Why choose J Penn Planning for Ogden events?",
    answer: "We understand Ogden's unique character—its outdoor lifestyle, historic charm, and growing creative community. Our connection-focused approach creates events that feel authentic to Northern Utah while fostering meaningful relationships among your guests."
  }
];

// Combined schema with all structured data
const createCombinedSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    createLocalBusinessSchema(),
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Ogden', url: '/ogden' }
    ]),
    createFAQSchema(faqData)
  ]
});

export default function OgdenPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Event Planning Ogden, UT | Event Planner & Outdoor Events"
        description="Premier event planning services in Ogden, Utah. J Penn Planning creates unforgettable mountain weddings, outdoor corporate retreats, and themed celebrations. Expert event coordination for Historic 25th Street, Snowbasin, and Northern Utah. Serving Ogden, Layton, Roy & Weber County."
        path="/ogden"
        keywords="event planning Ogden, Ogden event planner, party planner Ogden Utah, wedding planner Ogden, mountain wedding Utah, corporate event planning Ogden, outdoor events Northern Utah, Historic 25th Street events, Snowbasin wedding, connection coach Ogden, Weber County event planner"
        schema={createCombinedSchema()}
      />
      <Navigation />
      <div className="pt-28">
        <OgdenSection />
      </div>
      <Footer />
    </div>
  );
}
