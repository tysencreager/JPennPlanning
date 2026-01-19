import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { testimonials, Testimonial } from '@/data/testimonials';

interface TestimonialsCarouselProps {
  showViewAll?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  filterIds?: string[]; // Optional: only show specific testimonials
  className?: string;
}

export default function TestimonialsCarousel({
  showViewAll = true,
  autoPlay = true,
  autoPlayInterval = 6000,
  filterIds,
  className = ''
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Filter testimonials if filterIds provided
  const displayTestimonials = filterIds
    ? testimonials.filter(t => filterIds.includes(t.id))
    : testimonials;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  }, [displayTestimonials.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  }, [displayTestimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || displayTestimonials.length <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused, autoPlayInterval, goToNext, displayTestimonials.length]);

  const currentTestimonial = displayTestimonials[currentIndex];

  if (displayTestimonials.length === 0) return null;

  return (
    <section className={`py-16 md:py-24 bg-card ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4" data-testid="text-carousel-heading">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real clients who experienced the magic of stress-free event planning.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="p-8 md:p-12" data-testid="card-carousel-testimonial">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-ring/10 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-ring" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6" data-testid="text-carousel-title">
                "{currentTestimonial.title}"
              </h3>

              <div className="prose prose-lg max-w-3xl mb-8">
                {currentTestimonial.content.split('\n\n').slice(0, 2).map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {currentTestimonial.content.split('\n\n').length > 2 && (
                  <p className="text-muted-foreground italic">...</p>
                )}
              </div>

              <div className="border-t border-border pt-6 w-full max-w-md">
                <p className="font-semibold text-lg text-primary" data-testid="text-carousel-author">
                  ~ {currentTestimonial.author}
                  {currentTestimonial.company && (
                    <span className="block text-muted-foreground font-normal text-base mt-1">
                      {currentTestimonial.company}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation arrows */}
          {displayTestimonials.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-md"
                aria-label="Previous testimonial"
                data-testid="button-carousel-prev"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-md"
                aria-label="Next testimonial"
                data-testid="button-carousel-next"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </button>
            </>
          )}
        </div>

        {/* Dots indicator */}
        {displayTestimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-ring w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
        )}

        {/* View all link */}
        {showViewAll && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              asChild
              className="group"
            >
              <Link href="/testimonials">
                Read All Testimonials
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
