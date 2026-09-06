import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from '@assets/2_1759530723887.png';
import logoLight from '@assets/2_1759530633522.png';

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Connection Coaching' },
  { href: '/events', label: 'Events' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/writing', label: 'Books & Writing' },
  { href: '/contact', label: 'Contact' },
];

interface NavigationProps {
  /** true when the page opens with a night-sky hero, so the bar starts transparent + light */
  onSky?: boolean;
}

/**
 * Simple, uncluttered navigation. Direct access to each way of connecting,
 * plus one warm call to action: "Let's Connect".
 */
export default function Navigation({ onSky = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const light = onSky && !scrolled && !open;
  const isActive = (href: string) =>
    href === '/' ? location === '/' : location === href || location.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        light
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-md border-b border-border/70 shadow-[0_1px_0_0_hsl(var(--gold)/0.15)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-20' : 'h-24 md:h-28'}`}>
          <Link href="/" className="flex items-center gap-3 py-2" data-testid="button-logo" aria-label="J Penn Planning home">
            <img
              src={light ? logoLight : logo}
              alt="J Penn Planning"
              className={`w-auto transition-all duration-500 ${scrolled ? 'h-14' : 'h-16 md:h-20'}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`eyebrow px-3 py-2 rounded-sm transition-colors relative ${
                  light ? 'text-ivory/85 hover:text-ivory' : 'text-foreground/75 hover:text-foreground'
                } ${isActive(item.href) ? (light ? 'text-ivory' : 'text-foreground') : ''}`}
                data-testid={`link-${item.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold" aria-hidden="true" />
                )}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              variant={light ? 'outline' : 'default'}
              className={`ml-3 eyebrow ${light ? 'border-gold/70 text-ivory bg-transparent hover:bg-ivory/10' : ''}`}
              data-testid="button-lets-connect"
            >
              <Link href="/contact">Let&apos;s Connect</Link>
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 -mr-2 ${light ? 'text-ivory' : 'text-foreground'}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            data-testid="button-mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-t border-border"
            aria-label="Primary"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-display text-2xl py-2.5 border-b border-border/60 ${
                    isActive(item.href) ? 'text-forest' : 'text-foreground/80'
                  }`}
                  data-testid={`link-${item.label.toLowerCase().replace(/[^a-z]+/g, '-')}-mobile`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-5 eyebrow" data-testid="button-lets-connect-mobile">
                <Link href="/contact">Let&apos;s Connect</Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
