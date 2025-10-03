import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Heart, DollarSign, Sparkles, Users } from 'lucide-react';
import bookCoverPath from '@assets/IMG_4464_1759500798005.jpeg';

export default function BookPage() {
  useEffect(() => {
    document.title = 'Poor Girls Party Planning - J Penn Planning';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Poor Girls Party Planning: Making Core Memories on a Budget by Jessica Pennington. Learn how to create unforgettable celebrations without breaking the bank.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-ring/10 text-ring px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Now Available
                </div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6" data-testid="text-book-title">
                  Poor Girls Party Planning
                </h1>
                <h2 className="text-2xl text-muted-foreground mb-8 font-light">
                  Making Core Memories on a Budget
                </h2>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Transform the way you celebrate without emptying your wallet. <em>Poor Girls Party Planning</em> is your ultimate guide to creating magical, memorable experiences on any budget.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Written by event planning expert Jessica Pennington, this book reveals the secrets to hosting beautiful gatherings that prioritize connection, creativity, and authenticity over expensive price tags. Whether you're planning an intimate dinner party, a milestone celebration, or a community event, you'll discover practical strategies and creative solutions that prove memorable moments don't require unlimited funds.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Inside, you'll find budget-friendly tips for everything from décor and food to entertainment and ambiance. Learn how to leverage your creativity, maximize what you already have, and make intentional choices that reflect your values while creating experiences your guests will cherish forever.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 mb-4"
                  data-testid="button-buy-book"
                >
                  <a
                    href="https://amzn.to/42lqlyK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Get Your Copy on Amazon
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Available in paperback and Kindle formats
                </p>
              </div>

              <div className="order-1 md:order-2">
                <Card className="overflow-hidden shadow-lg">
                  <img
                    src={bookCoverPath}
                    alt="Poor Girls Party Planning book cover"
                    className="w-full h-auto"
                    data-testid="img-book-cover"
                  />
                </Card>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Budget-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Practical tips for stunning events at any price point
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-ring" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Creative Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Innovative ideas to maximize impact without overspending
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Authentic Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on what matters: creating meaningful moments
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Professional insights from a seasoned event planner
                </p>
              </Card>
            </div>

            <Card className="bg-muted/30 p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                  About the Author
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Jessica Pennington is the founder of J Penn Planning, a luxury event planning and community building service. With years of experience creating transformational experiences that foster deep human connection, Jessica has mastered the art of crafting meaningful celebrations that prioritize authentic moments over lavish budgets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her approach combines professional expertise with practical wisdom, proving that the most memorable gatherings stem from intentionality, creativity, and heart—not from hefty price tags.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
