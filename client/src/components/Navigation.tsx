import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <a
              className={`font-serif text-2xl font-bold transition-colors ${
                isScrolled || location !== '/' ? 'text-primary' : 'text-primary-foreground'
              }`}
              data-testid="button-logo"
            >
              J Penn Planning
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/about">
              <a
                className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
                } ${isActive('/about') ? 'font-semibold' : ''}`}
                data-testid="link-about"
              >
                About
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
                } ${isActive('/services') ? 'font-semibold' : ''}`}
                data-testid="link-services"
              >
                Services
              </a>
            </Link>
            <Link href="/gallery">
              <a
                className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
                } ${isActive('/gallery') ? 'font-semibold' : ''}`}
                data-testid="link-gallery"
              >
                Gallery
              </a>
            </Link>
            <Button
              asChild
              variant={isScrolled || location !== '/' ? 'default' : 'outline'}
              className={isScrolled || location !== '/' ? '' : 'bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground'}
              data-testid="button-contact"
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
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
            <Link href="/about">
              <a
                className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/about') ? 'font-semibold' : ''}`}
                data-testid="link-about-mobile"
              >
                About
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/services') ? 'font-semibold' : ''}`}
                data-testid="link-services-mobile"
              >
                Services
              </a>
            </Link>
            <Link href="/gallery">
              <a
                className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/gallery') ? 'font-semibold' : ''}`}
                data-testid="link-gallery-mobile"
              >
                Gallery
              </a>
            </Link>
            <Button
              asChild
              className="w-full"
              data-testid="button-contact-mobile"
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
