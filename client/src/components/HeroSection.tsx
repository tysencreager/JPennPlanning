import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Hero_background_elegant_dinner_party_d5d7aae2.png';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="w-16 h-0.5 bg-ring mx-auto mb-8" data-testid="decorative-line" />
        
        <blockquote className="font-serif text-2xl md:text-4xl italic text-primary-foreground leading-relaxed mb-6">
          "In a world of algorithms, hashtags & followers, know the true importance of Human Connection."
        </blockquote>
        
        <p className="text-primary-foreground/90 text-lg mb-12" data-testid="text-author">
          - Simi Fromen
        </p>
        
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-primary text-primary-foreground border-2 border-primary-border text-lg px-8"
          data-testid="button-start-planning"
        >
          Start Planning Your Event
        </Button>
      </div>
    </section>
  );
}
