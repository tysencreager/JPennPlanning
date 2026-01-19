// Shared testimonials data for use across the site
export interface Testimonial {
  id: string;
  title: string;
  content: string;
  author: string;
  company: string | null;
  location?: string; // For location-specific filtering
}

export const testimonials: Testimonial[] = [
  {
    id: 'nicole',
    title: "I Magically Let The Stress of Planning GO",
    content: `I reached out to Jessica at JPenn Planning about planning my Photography Studio's annual Open House this year and I couldn't be more pleased. We discussed budget, expectations and all the details. Then I (magically) let the stress of planning that event go.

Normally I am a mess, and so stressed leading up to this event, this year - because I hired her - I was relaxed and didn't stress at all. I knew it was being handled by her very capable hands! She brought everything, showed up with help to decorate/set up, and cleaned up (by the way - It's 1000% worth the extra money to have her help with clean up, especially for business events where you have to be right back to work the next day)!

I am SOOO grateful that I hired Jessica and won't hesitate to hire her again and again! I highly recommend!`,
    author: "Nicole Lockwood",
    company: "Lipstick & Lace Boudoir Photography",
    location: "ogden"
  },
  {
    id: 'brooke',
    title: "Return Client",
    content: `Jessica has done multiple parties for me!

My baby shower for my third girl was Harry Potter themed and it was amazing. She had decorations, games, food, even party favors, all themed in HP. It was so much fun.

Then, for my baby's first birthday, we did PokéOne. Again, Jessica did perfectly with all the decorations, favors, and a themed cake. She even had handmade Pokémon stuffies made for my daughter to pick her first Pokémon! It was more than I could have asked for. Jessica came early to set up, got everything cleaned up afterwards, and was very professional. I highly recommend her.`,
    author: "Brooke",
    company: null,
    location: "salt-lake-city"
  },
  {
    id: 'emily',
    title: "Creative Visions Come to Life!",
    content: `I am beyond pleased with my personal experience with JPenn Planning! I was given a series of color pallets; I chose my favorite colors; and went away for my vacation. Upon my return Jessica had turned my home into a winter wonderland for the holiday season, based off of the colors and input she requested from me!

Her prices are reasonable, and everything was done so professionally. The personal and thoughtful touches just added to the overall Christmas theme that she brought into my spaces! Give her your trust and ideas - you will not be disappointed!`,
    author: "Emily",
    company: null
  }
];

// Helper function to get testimonial by ID
export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(t => t.id === id);
};

// Helper function to get testimonials by location
export const getTestimonialsByLocation = (location: string): Testimonial[] => {
  return testimonials.filter(t => t.location === location);
};
