import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className={`font-serif text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-primary-foreground'
            }`}
            data-testid="button-logo"
          >
            J Penn Planning
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
              data-testid="link-gallery"
            >
              Gallery
            </button>
            <Button
            asChild
            variant={isScrolled ? 'default' : 'outline'}
            className={!isScrolled ? 'bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground' : ''}
            data-testid="button-contact"
          >
            <a href="mailto:Jessica_Pennington@InOmniaParatusEvents.com">
              Contact
            </a>
          </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md"
              data-testid="link-gallery-mobile"
            >
              Gallery
            </button>
            <Button
              asChild
              className="w-full"
              data-testid="button-contact-mobile"
            >
              <a href="mailto:Jessica_Pennington@InOmniaParatusEvents.com">
                Contact
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
