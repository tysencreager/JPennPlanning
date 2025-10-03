import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import heroImage from '@assets/stock_images/elegant_event_setup__215e7024.jpg';

export default function HeroSection() {
  const email = 'Jessica_Pennington@InOmniaParatusEvents.com';

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="w-16 h-0.5 bg-ring mx-auto mb-8" data-testid="decorative-line" />
        
        <blockquote 
          className="font-serif text-2xl md:text-4xl italic text-primary-foreground leading-relaxed mb-6"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0px 0px 12px rgba(0,0,0,0.7)' }}
        >
          "In a world of algorithms, hashtags & followers, know the true importance of Human Connection."
        </blockquote>
        
        <p 
          className="text-primary-foreground/90 text-lg mb-12" 
          data-testid="text-author"
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0px 0px 10px rgba(0,0,0,0.7)' }}
        >
          - Simi Fromen
        </p>
        
        <Button
          size="lg"
          asChild
          className="bg-primary text-primary-foreground border-2 border-primary-border text-lg px-8"
          data-testid="button-start-planning"
        >
          <a href={`mailto:${email}`}>
            <Mail className="w-5 h-5 mr-2" />
            Start Planning Your Event
          </a>
        </Button>
      </div>
    </section>
  );
}
