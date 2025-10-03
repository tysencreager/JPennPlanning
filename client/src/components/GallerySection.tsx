import { Button } from '@/components/ui/button';
import weddingImage from '@assets/generated_images/Wedding_ceremony_outdoor_setup_f12e9e81.png';
import cafeImage from '@assets/generated_images/Cozy_cafe_gathering_friends_75270dd9.png';
import tableImage from '@assets/generated_images/Elegant_formal_dinner_table_setting_ba822982.png';
import cocktailImage from '@assets/generated_images/Community_cocktail_reception_gathering_0a1dcc09.png';
import gardenImage from '@assets/generated_images/Garden_party_golden_hour_92300e17.png';
import corporateImage from '@assets/generated_images/Corporate_team_building_event_44a6a57c.png';
import toastImage from '@assets/generated_images/Champagne_toast_celebration_moment_971b5c8a.png';

export default function GallerySection() {
  const images = [
    { src: weddingImage, alt: 'Elegant wedding ceremony' },
    { src: cafeImage, alt: 'Intimate cafe gathering' },
    { src: tableImage, alt: 'Formal dinner table setting' },
    { src: cocktailImage, alt: 'Community cocktail reception' },
    { src: gardenImage, alt: 'Garden party at golden hour' },
    { src: corporateImage, alt: 'Corporate team building' },
    { src: toastImage, alt: 'Celebration toast' }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6" data-testid="text-gallery-heading">
            Curated Moments of Connection
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into the beautiful experiences we've crafted
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md group hover-elevate transition-all duration-300"
              data-testid={`img-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 border-2 border-transparent group-hover:border-ring/50" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="text-lg"
            onClick={() => console.log('View full gallery')}
            data-testid="button-view-gallery"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
