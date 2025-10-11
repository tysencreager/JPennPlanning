import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for J Penn Planning - Information regarding the collection, use, and disclosure of Personal Information.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8" data-testid="text-privacy-heading">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-muted-foreground">
              This information is to inform you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.
            </p>

            <p className="text-muted-foreground">
              We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Information Collection And Use
            </h2>
            <p className="text-muted-foreground">
              While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, phone number to call or text you, email, etc. ("Personal Information").
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Log Data
            </h2>
            <p className="text-muted-foreground">
              Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
            </p>
            <p className="text-muted-foreground">
              This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
            </p>
            <p className="text-muted-foreground">
              In addition, we may use third party services such as Google Analytics, SegMetrics, Lucky Orange or other services that collect, monitor and analyze this data so we can adjust our websites to make them as user friendly as possible.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Communications
            </h2>
            <p className="text-muted-foreground">
              We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information to serve you as a potential photography client. We will never sell, trade, or distribute your information to any other parties. You can also opt out at any time via the link in the footer of the email to Unsubscribe from email materials.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-muted-foreground">
              Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.
            </p>
            <p className="text-muted-foreground">
              Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Security
            </h2>
            <p className="text-muted-foreground">
              The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Changes To This Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              This Privacy Policy is effective as of 03/20/2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
            </p>
            <p className="text-muted-foreground">
              If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
            </p>

            <h2 className="font-serif text-2xl font-medium text-primary mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at jp@jpennplanning.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
