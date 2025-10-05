import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import heroImage from '@assets/2_1759664539031.png';

export default function HeroSection() {
  const email = 'Jessica_Pennington@InOmniaParatusEvents.com';

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center md:justify-end">
      <div
        className="absolute inset-0 bg-cover bg-bottom md:bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/70" />
      
      <div className="relative z-10 text-center px-4 sm:px-8 lg:px-12 max-w-2xl mx-auto md:mx-0 md:mr-16">
        <div className="w-16 h-0.5 bg-ring mx-auto mb-8" data-testid="decorative-line" />
        
        <blockquote 
          className="font-serif text-2xl md:text-4xl italic text-primary-foreground leading-relaxed mb-12"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0px 0px 12px rgba(0,0,0,0.7)' }}
        >
          Empowering Connection Through Experience, Story, and Soul.
        </blockquote>
        
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
