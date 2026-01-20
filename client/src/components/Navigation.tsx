import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, Compass, Briefcase, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
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

          <div className="hidden md:flex items-center gap-2">
            {/* Home */}
            <Link
              href="/"
              className={`transition-colors hover-elevate px-3 py-2 rounded-md ${
                isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/') ? 'font-semibold' : ''}`}
              data-testid="link-home"
            >
              Home
            </Link>

            {/* Explore Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
                } ${['/about', '/gallery', '/quiz', '/book', '/testimonials', '/salt-lake-city', '/ogden', '/blog'].some(p => isActive(p) || location.startsWith('/blog')) ? 'font-semibold' : ''}`}
                data-testid="dropdown-explore"
              >
                <Compass className="w-4 h-4" />
                Explore
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-52">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="w-full cursor-pointer">
                    About Jessica
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground">Service Areas</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link href="/salt-lake-city" className="w-full cursor-pointer">
                    Salt Lake City, UT
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ogden" className="w-full cursor-pointer">
                    Ogden, UT
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/gallery" className="w-full cursor-pointer">
                    Gallery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/testimonials" className="w-full cursor-pointer">
                    Testimonials
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="w-full cursor-pointer flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/quiz" className="w-full cursor-pointer">
                    Connection Quiz
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/book" className="w-full cursor-pointer">
                    My Book
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled || location !== '/' ? 'text-foreground' : 'text-primary-foreground'
                } ${isActive('/services') || isActive('/events') ? 'font-semibold' : ''}`}
                data-testid="dropdown-services"
              >
                <Briefcase className="w-4 h-4" />
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full cursor-pointer">
                    Our Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events" className="w-full cursor-pointer">
                    Upcoming Events
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button */}
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
          <div className="px-4 py-6 space-y-2">
            {/* Home */}
            <Link
              href="/"
              className={`block w-full text-left py-2 text-foreground hover-elevate px-3 rounded-md ${isActive('/') ? 'font-semibold' : ''}`}
              data-testid="link-home-mobile"
            >
              Home
            </Link>

            {/* Explore Section */}
            <div className="border-t border-border pt-2 mt-2">
              <p className="text-sm text-muted-foreground py-2 px-3 flex items-center gap-1 font-medium">
                <Compass className="w-4 h-4" />
                Explore
              </p>
              <Link
                href="/about"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm ${isActive('/about') ? 'font-semibold' : ''}`}
                data-testid="link-about-mobile"
              >
                About Jessica
              </Link>
              <p className="text-xs text-muted-foreground py-1 px-6">Service Areas</p>
              <Link
                href="/salt-lake-city"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-8 rounded-md text-sm ${isActive('/salt-lake-city') ? 'font-semibold' : ''}`}
                data-testid="link-salt-lake-city-mobile"
              >
                Salt Lake City, UT
              </Link>
              <Link
                href="/ogden"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-8 rounded-md text-sm ${isActive('/ogden') ? 'font-semibold' : ''}`}
                data-testid="link-ogden-mobile"
              >
                Ogden, UT
              </Link>
              <Link
                href="/gallery"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm ${isActive('/gallery') ? 'font-semibold' : ''}`}
                data-testid="link-gallery-mobile"
              >
                Gallery
              </Link>
              <Link
                href="/testimonials"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm ${isActive('/testimonials') ? 'font-semibold' : ''}`}
                data-testid="link-testimonials-mobile"
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm flex items-center gap-2 ${isActive('/blog') || location.startsWith('/blog') ? 'font-semibold' : ''}`}
                data-testid="link-blog-mobile"
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <Link
                href="/quiz"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm ${isActive('/quiz') ? 'font-semibold' : ''}`}
                data-testid="link-quiz-mobile"
              >
                Connection Quiz
              </Link>
              <Link
                href="/book"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm ${isActive('/book') ? 'font-semibold' : ''}`}
                data-testid="link-book-mobile"
              >
                My Book
              </Link>
            </div>

            {/* Services Section */}
            <div className="border-t border-border pt-2 mt-2">
              <p className="text-sm text-muted-foreground py-2 px-3 flex items-center gap-1 font-medium">
                <Briefcase className="w-4 h-4" />
                Services
              </p>
              <Link
                href="/services"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm ${isActive('/services') ? 'font-semibold' : ''}`}
                data-testid="link-services-mobile"
              >
                Our Services
              </Link>
              <Link
                href="/events"
                className={`block w-full text-left py-2 text-foreground hover-elevate px-6 rounded-md text-sm ${isActive('/events') ? 'font-semibold' : ''}`}
                data-testid="link-events-mobile"
              >
                Upcoming Events
              </Link>
            </div>

            {/* Contact Button */}
            <div className="border-t border-border pt-4 mt-2">
              <Button
                asChild
                className="w-full"
                data-testid="button-contact-mobile"
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
