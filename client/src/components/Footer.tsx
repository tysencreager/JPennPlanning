import { Link } from 'wouter';
import { Facebook, Instagram, Mail, Users } from 'lucide-react';
import Constellation from '@/components/celestial/Constellation';
import Starfield from '@/components/celestial/Starfield';
import NewsletterForm from '@/components/NewsletterForm';
import { littleDipper } from '@/data/constellations';
import { site } from '@/data/site';
import { navItems } from '@/components/Navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sky sky-gradient relative overflow-hidden" data-testid="footer">
      <Starfield count={45} seed={31} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] items-start">
          <div>
            <div className="w-28 text-gold-soft mb-6" aria-hidden="true">
              <Constellation data={littleDipper} mode="view" strokeWidth={0.5} />
            </div>
            <p className="font-display text-4xl md:text-5xl text-ivory leading-none mb-4">You belong here.</p>
            <p className="text-ivory/70 max-w-sm leading-relaxed">
              {site.thesis} Coaching, gatherings, speaking, and stories for the woman finding her constellation.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-gold mb-5">Explore</p>
            <ul className="space-y-2.5">
              {navItems
                .filter((i) => i.href !== '/')
                .concat([{ href: '/journal', label: 'The Journal' }, { href: '/assessment', label: 'Affinity Astron Assessment' }, { href: '/connections', label: 'People I’ve Connected' }])
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-ivory/80 hover:text-gold-soft transition-colors" data-testid={`link-footer-${item.href.replace('/', '') || 'home'}`}>
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold mb-5">Stay connected</p>
            <p className="text-ivory/70 text-sm mb-4 leading-relaxed">
              Occasional notes from the Journal, upcoming gatherings, and the things we don&apos;t always say out loud.
            </p>
            <NewsletterForm source="footer" />

            <div className="flex items-center gap-3 mt-8">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:border-gold hover:text-gold transition-colors" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:border-gold hover:text-gold transition-colors" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={site.social.badMomsOfUtah} target="_blank" rel="noopener noreferrer" className="h-10 px-4 rounded-full border border-ivory/20 flex items-center gap-2 text-ivory/80 hover:border-gold hover:text-gold transition-colors eyebrow" data-testid="link-bad-moms">
                <Users className="w-4 h-4" />
                Bad Moms of Utah
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email Jessica" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:border-gold hover:text-gold transition-colors" data-testid="link-email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p data-testid="text-copyright">© {year} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-gold-soft">{site.email}</a>
            <a href={site.phoneHref} className="hover:text-gold-soft">{site.phone}</a>
            <Link href="/privacy-policy" className="hover:text-gold-soft" data-testid="link-footer-privacy">Privacy</Link>
            <Link href="/cancellation-policy" className="hover:text-gold-soft" data-testid="link-footer-cancellation">Cancellations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
