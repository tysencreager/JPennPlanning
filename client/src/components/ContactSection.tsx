import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contactImage from '@assets/home page pic_1760106677865.png';

export default function ContactSection() {
  const email = 'jp@jpennplanning.com';
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/meejawrz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6" data-testid="text-contact-heading">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to create something extraordinary together? Fill out the form below and let's start the conversation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          {formStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">Your message has been sent successfully. Jessica will get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={formStatus === 'submitting'}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your event or how I can help..."
                  rows={5}
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <p className="text-red-700">Something went wrong. Please try again or email directly at {email}</p>
                </div>
              )}
              <Button
                type="submit"
                size="lg"
                className="w-full text-lg"
                disabled={formStatus === 'submitting'}
                data-testid="button-submit-contact"
              >
                <Send className="w-5 h-5 mr-2" />
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3" data-testid="contact-email">
                <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-ring" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a 
                    href={`mailto:${email}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3" data-testid="contact-phone">
                <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-ring" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <a 
                    href="tel:801-837-6303"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    801-837-6303
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 sm:col-span-2 lg:col-span-1" data-testid="contact-location">
                <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-ring" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground text-sm">Serving clients nationwide</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Typical response time: Within 24 hours
            </p>

            <div>
              <img 
                src={contactImage} 
                alt="Group celebrating with sparklers" 
                className="w-full h-auto rounded-md"
                data-testid="img-contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
