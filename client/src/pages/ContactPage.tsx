import { useEffect, useState } from 'react';
import { useSearch } from 'wouter';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cygnus } from '@/data/constellations';
import porchPhoto from '@assets/stock/contact.jpg';
import { site } from '@/data/site';

const reasons = [
  { value: 'coaching', label: 'Connection Coaching' },
  { value: 'events', label: 'An event or gathering' },
  { value: 'speaking', label: 'Speaking / book Jessica' },
  { value: 'coffee-and-compliments', label: 'Coffee & Compliments updates' },
  { value: 'writing', label: 'The book or the Journal' },
  { value: 'hello', label: 'Just saying hello' },
];

export default function ContactPage() {
  const search = useSearch();
  const preset = new URLSearchParams(search).get('about') ?? 'hello';
  const [about, setAbout] = useState(preset);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => setAbout(preset), [preset]);

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    try {
      const res = await fetch(site.forms.contact, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout onSky>
      <SEO
        title="Let's Connect"
        description="Reach out to Jessica Pennington about Connection Coaching, an event, speaking, or just to say hello. Every message is answered personally."
        path="/contact"
        keywords="contact Jessica Pennington, book a connection coach, hire a speaker Utah, J Penn Planning contact"
        schema={breadcrumb}
      />
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s Connect</>}
        lede="No pressure, no pitch. Tell me a little about where you are, and I'll reply personally, usually within a day."
        constellation={cygnus}
        seed={47}
      />

      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14">
            <Reveal>
              {status === 'success' ? (
                <div className="bg-card border border-gold/40 rounded-sm p-10 text-center" role="status">
                  <p className="text-gold text-3xl" aria-hidden="true">✦</p>
                  <h2 className="mt-3 font-display text-4xl text-forest">Thank you. You belong here.</h2>
                  <p className="mt-3 text-muted-foreground">Your message is on its way. Jessica will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-7" data-testid="form-contact">
                  <fieldset>
                    <legend className="eyebrow text-forest mb-3">What&apos;s this about?</legend>
                    <div className="flex flex-wrap gap-2">
                      {reasons.map((r) => (
                        <label key={r.value} className={`cursor-pointer px-4 py-2 rounded-full border text-sm transition-colors ${about === r.value ? 'bg-midnight text-ivory border-midnight' : 'bg-background border-border text-foreground/80 hover:border-midnight/50'}`}>
                          <input type="radio" name="about" value={r.value} checked={about === r.value} onChange={() => setAbout(r.value)} className="sr-only" />
                          {r.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Your name" disabled={status === 'submitting'} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@email.com" disabled={status === 'submitting'} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone <span className="text-muted-foreground">(optional)</span></Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(801) 555-0100" disabled={status === 'submitting'} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea id="message" name="message" rows={6} required placeholder="Tell me who you are… and what brought you here." disabled={status === 'submitting'} />
                  </div>
                  <input type="hidden" name="subject" value={`Website: ${reasons.find((r) => r.value === about)?.label ?? 'Hello'}`} />
                  {status === 'error' && (
                    <p className="text-sm text-destructive" role="alert">Something went wrong. Please try again or email {site.email} directly.</p>
                  )}
                  <Button type="submit" size="lg" className="eyebrow h-12 px-8" disabled={status === 'submitting'} data-testid="button-submit-contact">
                    <Send className="w-4 h-4 mr-2" />
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                  </Button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="zoom-frame rounded-sm mb-6"><img src={porchPhoto} alt="Two porch chairs facing each other at dusk with a lantern between them and the door open" className="w-full aspect-[4/3] object-cover rounded-sm" loading="lazy" /></div>
              <div className="bg-card border border-border/70 rounded-sm p-8 space-y-8 relative overflow-hidden">
                <div>
                  <Eyebrow className="mb-4">Other ways</Eyebrow>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gold mt-0.5" />
                      <a href={`mailto:${site.email}`} className="text-foreground/85 hover:text-forest" data-testid="link-contact-email">{site.email}</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gold mt-0.5" />
                      <a href={site.phoneHref} className="text-foreground/85 hover:text-forest" data-testid="link-contact-phone">{site.phone}</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <span className="text-foreground/85">{site.location}</span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-border/70 pt-8">
                  <p className="font-display text-2xl text-forest leading-snug">“Tell me who you are without telling me who you belong to or what your titles are.”</p>
                  <p className="mt-3 text-sm text-muted-foreground">Feel free to start there.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
