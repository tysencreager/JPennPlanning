import jessicaImage from '@assets/IMG_4461_1759499784524.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src={jessicaImage}
                alt="Jessica Pennington"
                className="rounded-md w-full h-auto object-cover border-4 border-ring shadow-lg"
                data-testid="img-jessica"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight" data-testid="text-welcome-heading">
              Welcome to J Penn Planning!
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              At J Penn Planning, we believe the magic of life lies in our connections — to ourselves, to each other, and to our communities.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              As a published author, public speaker, and experienced event planner, Jessica is passionate about helping people foster deep, lasting relationships and find their place of belonging.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Whether you're planning a small gathering, looking to grow your community, or simply needing a bit more connection in your life, Jessica guides you every step of the way — turning ordinary moments into extraordinary ones.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-primary font-medium">
              J Penn Planning is more than just event planning — it's a path toward connection, community, and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
