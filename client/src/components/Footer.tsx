import { useState } from 'react';
import { Link } from 'wouter';
import { Facebook, Instagram, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logo from '@assets/2_1759530633522.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribeStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mojaezzw', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubscribeStatus('success');
        setEmail('');
      } else {
        setSubscribeStatus('error');
      }
    } catch {
      setSubscribeStatus('error');
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img 
              src={logo} 
              alt="J Penn Planning" 
              className="h-24 w-auto mb-4" 
              data-testid="img-footer-logo"
            />
            <p className="text-primary-foreground/90 leading-relaxed">
              Creating meaningful connections through themed events infused with creativity, connection, and belonging.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-ring">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-about"
                >
                  About Jessica
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-events"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-quiz"
                >
                  Connection Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-book"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold text-lg mb-4 mt-6 text-ring">Service Areas</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/salt-lake-city"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-salt-lake-city"
                >
                  Salt Lake City, UT
                </Link>
              </li>
              <li>
                <Link
                  href="/ogden"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-ogden"
                >
                  Ogden, UT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-ring">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover-elevate transition-all"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover-elevate transition-all"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover-elevate transition-all"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-primary-foreground/90 text-sm">
              jp@jpennplanning.com<br />
              <a href="tel:801-837-6303" className="hover:text-ring transition-colors">
                801-837-6303
              </a>
            </p>
          </div>
        </div>

        <div className="py-8 border-t border-primary-foreground/20">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-lg mb-2 text-ring">Stay in the Loop</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe for upcoming events, event trends, and newsletters.
            </p>
            {subscribeStatus === 'success' ? (
              <p className="text-ring font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={subscribeStatus === 'submitting'}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={subscribeStatus === 'submitting'}
                  className="shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-red-300 text-sm mt-2">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link
              href="/privacy-policy"
              className="text-primary-foreground/80 hover:text-ring text-sm transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </Link>
            <span className="text-primary-foreground/40">|</span>
            <Link
              href="/cancellation-policy"
              className="text-primary-foreground/80 hover:text-ring text-sm transition-colors"
              data-testid="link-footer-cancellation"
            >
              Cancellation Policy
            </Link>
          </div>
          <p className="text-primary-foreground/80 text-sm" data-testid="text-copyright">
            © {currentYear} J Penn Planning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
