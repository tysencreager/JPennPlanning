import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@assets/2_1759530723887.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== '/'
          ? 'bg-background shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">
          <Link 
            href="/"
            className="transition-opacity hover:opacity-80 py-3"
            data-testid="button-logo"
          >
            <img 
              src={logo} 
              alt="J Penn Planning" 
              className="h-32 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/') ? 'font-semibold' : ''}`}
              data-testid="link-home"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/about') ? 'font-semibold' : ''}`}
              data-testid="link-about"
            >
              About
            </Link>
            <Link 
              href="/services"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/services') ? 'font-semibold' : ''}`}
              data-testid="link-services"
            >
              Services
            </Link>
            <Link 
              href="/events"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/events') ? 'font-semibold' : ''}`}
              data-testid="link-events"
            >
              Events
            </Link>
            <Link 
              href="/gallery"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/gallery') ? 'font-semibold' : ''}`}
              data-testid="link-gallery"
            >
              Gallery
            </Link>
            <Link 
              href="/quiz"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/quiz') ? 'font-semibold' : ''}`}
              data-testid="link-quiz"
            >
              Quiz
            </Link>
            <Link 
              href="/book"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/book') ? 'font-semibold' : ''}`}
              data-testid="link-book"
            >
              My Book
            </Link>
            <Button
              asChild
              variant={isScrolled || location !== '/' ? 'default' : 'outline'}
              className={isScrolled || location !== '/' ? '' : 'bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground'}
              data-testid="button-contact"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'}`}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/') ? 'font-semibold' : ''}`}
              data-testid="link-home-mobile"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/about') ? 'font-semibold' : ''}`}
              data-testid="link-about-mobile"
            >
              About
            </Link>
            <Link 
              href="/services"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/services') ? 'font-semibold' : ''}`}
              data-testid="link-services-mobile"
            >
              Services
            </Link>
            <Link 
              href="/events"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/events') ? 'font-semibold' : ''}`}
              data-testid="link-events-mobile"
            >
              Events
            </Link>
            <Link 
              href="/gallery"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/gallery') ? 'font-semibold' : ''}`}
              data-testid="link-gallery-mobile"
            >
              Gallery
            </Link>
            <Link 
              href="/quiz"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/quiz') ? 'font-semibold' : ''}`}
              data-testid="link-quiz-mobile"
            >
              Quiz
            </Link>
            <Link 
              href="/book"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/book') ? 'font-semibold' : ''}`}
              data-testid="link-book-mobile"
            >
              My Book
            </Link>
            <Button
              asChild
              className="w-full"
              data-testid="button-contact-mobile"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
