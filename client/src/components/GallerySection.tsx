export default function GallerySection() {
  const images = [
    { 
      src: 'https://static.wixstatic.com/media/f59058_23a3107b9fba41baa492560ce352d5e1~mv2.jpg/v1/fill/w_588,h_888,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f59058_23a3107b9fba41baa492560ce352d5e1~mv2.jpg', 
      alt: 'Event celebration moment'
    },
    { 
      src: 'https://static.wixstatic.com/media/f59058_56602cc2fcba4e1f99c5b8544bbd290c~mv2.jpg/v1/fill/w_1332,h_888,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f59058_56602cc2fcba4e1f99c5b8544bbd290c~mv2.jpg', 
      alt: 'Event gathering'
    },
    { 
      src: 'https://static.wixstatic.com/media/f59058_e003abffade541e9b733c82661f337e7~mv2.jpg/v1/fill/w_1960,h_1308,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f59058_e003abffade541e9b733c82661f337e7~mv2.jpg', 
      alt: 'Event details and decoration'
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6" data-testid="text-gallery-heading">
            Where Connection Comes to Life & Moments Become Memories
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
            A look behind the curtain at how imagination, creativity, and connection come alive. Each image captures the heart of our work—transforming simple ideas into unforgettable experiences. From intimate gatherings to large-scale celebrations, these moments reflect not just events, but stories of joy, laughter, and meaningful connection. Step inside and see how we bring dreams to life, one detail at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
