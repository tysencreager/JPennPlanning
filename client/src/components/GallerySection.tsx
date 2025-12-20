import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import image1 from '@assets/Screenshot 2025-10-03 155925_1759532489033.jpg';
import image2 from '@assets/Screenshot 2025-10-03 155842_1759532489034.jpg';
import image3 from '@assets/Screenshot 2025-10-03 155818_1759532489035.jpg';
import image4 from '@assets/Screenshot 2025-10-03 155754_1759532489035.jpg';
import image5 from '@assets/Screenshot 2025-10-03 155728_1759532489036.jpg';
import newImage1 from '@assets/att.7TenUxuLEcTgTu2E7w6X7I6f7NuarZ4iAT9DVXQ4pLg_1760104715531.jpeg';
import newImage2 from '@assets/att.kwSDtXCMSD1X7wvvRPlyjTVrOPnRVXLD0V186qVh2a0_1760104715531.jpeg';
import newImage3 from '@assets/att.VqQlT47thOP_7dA65Za8SDIYTYHSweZQrr6vt1fpcRU_1760104715531.jpeg';
import newImage4 from '@assets/att.YF06gY-tsr2WYk_B_YTZ4GyDuZQSL8TytYT1UzFEnMU_1760104715531.jpeg';
import newImage5 from '@assets/att.a6NV39PYVcDkFDp07-FEaYRrMMFTI_0U341L3gtiulc_1760104715531.jpeg';
import newImage6 from '@assets/att.1F1-c96wdUFPY54LT4AFe9vaRFT340nVHmQ-htmqqIs_1760104715531.jpeg';
import newImage7 from '@assets/att.0VlHnj7-5OnxNOf3JwKD0dviegOgByx7iTXjXs9MBK4_1760104715532.jpeg';
import newImage8 from '@assets/att.fGH8IHQ28_-N2f0Jf73YS2TuRnqBsX-b-XyFJUZc0zM_1760104715532.jpeg';
import newImage9 from '@assets/att.y20vdSk9gopp9LH3s3yAVFLWwywrbNJaYSyxpY_nzXI_1760104715532.jpeg';
import newImage10 from '@assets/att.9VXv0OWcNfxDGp57LdtzQBwPGTucGexThY9vEYEIanc_1760104715532.jpeg';
import newImage11 from '@assets/att.UYHFA8VaPusbnfzRy3hcWRxETOQHMR1XY5TGauWUSWQ_1760104715532.jpeg';
import newImage12 from '@assets/att.rXHPNCzY0xZ9pz04-hQXrCFCt30VSZMD0ajdqpCT9ug_1760104715532.jpeg';

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
    },
    { 
      src: image1, 
      alt: 'Rustic table setting with wooden plates and beer mugs'
    },
    { 
      src: image2, 
      alt: 'Very Hungry Caterpillar themed party table setup'
    },
    { 
      src: image3, 
      alt: 'Divorce party celebration setup'
    },
    { 
      src: image4, 
      alt: 'Lady J Society Papers event planning'
    },
    { 
      src: image5, 
      alt: 'Event planners at celebration'
    },
    { 
      src: newImage1, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage2, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage3, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage4, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage5, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage6, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage7, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage8, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage9, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage10, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage11, 
      alt: 'Event gallery photo'
    },
    { 
      src: newImage12, 
      alt: 'Event gallery photo'
    }
  ];

  const testimonials = [
    {
      title: "I Magically Let The Stress of Planning GO",
      content: `I reached out to Jessica at In Omnia Paratus Events about planning my Photography Studio's annual Open House this year and I couldn't be more pleased. We discussed budget, expectations and all the details. Then I (magically) let the stress of planning that event go.

Normally I am a mess, and so stressed leading up to this event, this year - because I hired her - I was relaxed and didn't stress at all. I knew it was being handled by her very capable hands! She brought everything, showed up with help to decorate/set up, and cleaned up (by the way - It's 1000% worth the extra money to have her help with clean up, especially for business events where you have to be right back to work the next day)!

I am SOOO grateful that I hired Jessica and won't hesitate to hire her again and again! I highly recommend!`,
      author: "Nicole Lockwood",
      company: "Lipstick & Lace Boudoir Photography"
    },
    {
      title: "Return Client",
      content: `Jessica has done multiple parties for me!

My baby shower for my third girl was Harry Potter themed and it was amazing. She had decorations, games, food, even party favors, all themed in HP. It was so much fun.

Then, for my baby's first birthday, we did PokéOne. Again, Jessica did perfectly with all the decorations, favors, and a themed cake. She even had handmade Pokémon stuffies made for my daughter to pick her first Pokémon! It was more than I could have asked for. Jessica came early to set up, got everything cleaned up afterwards, and was very professional. I highly recommend her.`,
      author: "Brooke",
      company: null
    },
    {
      title: "Creative Visions Come to Life!",
      content: `I am beyond pleased with my personal experience with In Omnia Paratus Events! I was given a series of color pallets; I chose my favorite colors; and went away for my vacation. Upon my return Jessica had turned my home into a winter wonderland for the holiday season, based off of the colors and input she requested from me!

Her prices are reasonable, and everything was done so professionally. The personal and thoughtful touches just added to the overall Christmas theme that she brought into my spaces! Give her your trust and ideas - you will not be disappointed!`,
      author: "Emily",
      company: null
    }
  ];

  return (
    <>
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

      <section id="testimonials" className="py-20 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6" data-testid="text-testimonials-heading">
              Testimonials
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              I love hearing your feedback after an event - I love it even more when you want to share it with the world!
            </p>
          </div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 md:p-10" data-testid={`card-testimonial-${index}`}>
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-ring/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-ring" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4" data-testid={`text-testimonial-title-${index}`}>
                      {testimonial.title}
                    </h3>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none mb-6">
                  {testimonial.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mt-6">
                  <p className="font-semibold text-lg text-primary" data-testid={`text-testimonial-author-${index}`}>
                    ~ {testimonial.author}
                    {testimonial.company && (
                      <>
                        ,<br />
                        <span className="text-muted-foreground font-normal">{testimonial.company}</span>
                      </>
                    )}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Ready to Create Your Own Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our community of satisfied clients who have experienced stress-free, beautifully executed events. Let's make your next celebration unforgettable.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 transition-all"
                data-testid="button-contact-testimonials"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
