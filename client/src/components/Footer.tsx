import { Link } from 'wouter';
import { Facebook, Instagram, Mail } from 'lucide-react';
import logo from '@assets/2_1759530633522.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              Creating meaningful connections through beautifully curated events and transformational community experiences.
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
                  href="/quiz"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-quiz"
                >
                  Connections Quiz
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
                  href="/testimonials"
                  className="text-primary-foreground/90 hover-elevate px-2 py-1 rounded transition-colors block"
                  data-testid="link-footer-testimonials"
                >
                  Testimonials
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
              <a
                href="mailto:Jessica_Pennington@InOmniaParatusEvents.com"
                className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover-elevate transition-all"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/90 text-sm">
              Jessica_Pennington@InOmniaParatusEvents.com<br />
              <a href="tel:801-837-6303" className="hover:text-ring transition-colors">
                801-837-6303
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80 text-sm" data-testid="text-copyright">
            © {currentYear} J Penn Planning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
