import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import contactImage from '@assets/home page pic_1760106677865.png';

export default function ContactSection() {
  const email = 'Jessica_Pennington@InOmniaParatusEvents.com';

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6" data-testid="text-contact-heading">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to create something extraordinary together? Reach out and let's start the conversation.
          </p>
          
          <Button 
            size="lg" 
            asChild
            className="text-lg px-8"
            data-testid="button-email-contact"
          >
            <a href={`mailto:${email}`}>
              <Mail className="w-5 h-5 mr-2" />
              Email Jessica
            </a>
          </Button>
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
