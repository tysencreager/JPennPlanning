import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CancellationPolicy() {
  useEffect(() => {
    document.title = 'Cancellation Policy - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cancellation Policy for J Penn Planning - Information regarding cancellations, rescheduling, and refunds.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8" data-testid="text-cancellation-heading">
            Cancellation Policy
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-muted-foreground">
              This information is to inform you of our cancellation policies regarding the cancellation, rescheduling, and refunding of money that we receive from this site and any contracts negotiated.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Cancellations made by the Client
            </h2>
            <p className="text-muted-foreground">
              The Client may cancel this Agreement at any time.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                If the Client cancels up to 14 days prior to the Event Date, they will be entitled to a full refund, with the exception of any non-refundable deposits.
              </li>
              <li>
                If the Client cancels between 7 and 13 days prior to the Event Date, they will be entitled to a 50% refund, including the non-refundable deposits.
              </li>
              <li>
                If the Client cancels less than 3 days prior to the Event Date, they will not be entitled to a refund, unless otherwise negotiated with the Planner, and other vendors, associated with the event.
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Cancellations made by the Planner
            </h2>
            <p className="text-muted-foreground">
              The Planner may cancel this Agreement at any time.
            </p>
            <p className="text-muted-foreground">
              If the Planner cancels, she must provide a suitable, replacement Planner, subject to Client's approval, which shall be obtained in writing. In the alternative, the Planner shall refund all monies previously paid by Client, with the exception of any non-refundable deposits, which were agreed to by Client.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Rescheduling
            </h2>
            <p className="text-muted-foreground">
              Rescheduling will also be honored.
            </p>
            <p className="text-muted-foreground">
              The rescheduling of an event must be requested 14 days prior to the event, in writing. The event must be rescheduled within the calendar year or Client will forfeit their payment.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about this Policy, please contact us at jp@jpennplanning.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
