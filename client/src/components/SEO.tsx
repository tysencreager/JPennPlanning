import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: object;
}

const BASE_URL = 'https://jpennplanning.com';
const DEFAULT_IMAGE = `${BASE_URL}/attached_assets/sociallink%20sharing%20image_1759665808396.png`;

export default function SEO({
  title,
  description,
  path,
  keywords,
  type = 'website',
  image = DEFAULT_IMAGE,
  schema
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('J Penn Planning') ? title : `${title} | J Penn Planning`;
    const fullUrl = `${BASE_URL}${path}`;

    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute(attribute === 'property' ? 'content' : attribute, content);
        if (attribute === 'property') {
          element.setAttribute('content', content);
        }
      }
    };

    // Helper to update meta by name
    const setMetaByName = (name: string, content: string) => {
      const element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // Helper to update meta by property
    const setMetaByProperty = (property: string, content: string) => {
      const element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // Update primary meta tags
    setMetaByName('description', description);
    setMetaByName('title', fullTitle);
    if (keywords) {
      setMetaByName('keywords', keywords);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    }

    // Update Open Graph tags
    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', fullUrl);
    setMetaByProperty('og:type', type);
    setMetaByProperty('og:image', image);

    // Update Twitter tags
    setMetaByName('twitter:title', fullTitle);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:url', fullUrl);
    setMetaByName('twitter:image', image);

    // Add page-specific schema if provided
    if (schema) {
      const existingPageSchema = document.getElementById('page-schema');
      if (existingPageSchema) {
        existingPageSchema.remove();
      }

      const script = document.createElement('script');
      script.id = 'page-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        const schemaElement = document.getElementById('page-schema');
        if (schemaElement) {
          schemaElement.remove();
        }
      };
    }
  }, [title, description, path, keywords, type, image, schema]);

  return null;
}

// Pre-built schema generators
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${BASE_URL}${item.url}`
  }))
});

export const createServiceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@id": "https://jpennplanning.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
});

export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
