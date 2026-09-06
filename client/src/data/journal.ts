/**
 * The Journal — Jessica's writing (reflections, stories, connection advice, speaking topics,
 * event ideas, book updates, community conversations, H.O.P.E., Untouchable).
 *
 * Posts live here as data for now. See docs/STAGING.md for the plan to let Jessica
 * publish without touching code.
 */
import valentinesImage from '@assets/valentines-celebration.png';
import takingSexyBackImage from '@assets/Taking-Sexy-Back-Event/Group Coaching.jpg';
import tsbAshley from '@assets/Taking-Sexy-Back-Event/Ashley.jpg';
import tsbBrooke from '@assets/Taking-Sexy-Back-Event/Brooke.jpg';
import tsbJenna from '@assets/Taking-Sexy-Back-Event/Jenna.jpg';
import tsbMichelle from '@assets/Taking-Sexy-Back-Event/Michelle.jpg';
import tsbSister from '@assets/Taking-Sexy-Back-Event/Sister.jpg';
import tsbStarr from '@assets/Taking-Sexy-Back-Event/Starr.jpg';

export type JournalCategory =
  | 'Reflections'
  | 'Stories'
  | 'Connection Advice'
  | 'Speaking Topics'
  | 'Event Ideas'
  | 'Book Updates'
  | 'Community Conversations'
  | 'H.O.P.E.'
  | 'Untouchable';

export const journalCategories: JournalCategory[] = [
  'Reflections',
  'Stories',
  'Connection Advice',
  'Speaking Topics',
  'Event Ideas',
  'Book Updates',
  'Community Conversations',
  'H.O.P.E.',
  'Untouchable',
];

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string; // SEO-optimized title for search engines
  excerpt: string;
  metaDescription: string; // SEO-optimized description
  content: string;
  author: string;
  publishedDate: string;
  updatedDate?: string;
  category: JournalCategory;
  tags: string[];
  featuredImage?: string;
  imageAlt?: string;
  readingTime: number;
  keywords: string;
}

export const journalPosts: JournalPost[] = [
  {
    id: 'taking-sexy-back-2026',
    slug: 'taking-sexy-back-womens-history-month-2026',
    title: "Taking Sexy Back: Reclaiming Confidence Through Connection",
    metaTitle: "Taking Sexy Back Event | Women's History Month 2026 | J Penn Planning",
    excerpt: "Taking Sexy Back invited women to step outside their comfort zones and into their confidence through Connection Coaching and a guided photoshoot experience — creating not just stunning images, but real, lasting transformation.",
    metaDescription: "Taking Sexy Back was an immersive Women's History Month experience helping women reclaim confidence through Connection Coaching and guided photoshoot experiences. See how J Penn Planning creates transformative events.",
    content: `Taking Sexy Back was an immersive experience created for Women's History Month 2026. It was designed to help women reclaim "sexy" and reconnect with who they are, at their core.

## The Experience

These women were given a very simple set of instructions:

- **Bring two outfits** — one that makes you feel pretty, and one that makes you feel sexy
- **Be ready to step into a space** built for self-expression, vulnerability, and transformation

Through a guided blend of photoshoot experiences and Connection Coaching, each woman was seen, celebrated, and supported.

![Participant portrait from Taking Sexy Back](${tsbAshley})

## What Made It Special

What made the event was this: they didn't just leave with beautiful photos. They left with deeper confidence, meaningful connections, and a renewed sense of self.

![Stepping into confidence at Taking Sexy Back](${tsbBrooke})

Taking Sexy Back invited women to step outside their comfort zones and into their confidence through Connection Coaching and a guided photoshoot experience — creating not just stunning images, but real, lasting transformation.

![Empowerment through self-expression](${tsbJenna})

## More Than a Photoshoot

This wasn't just about capturing moments — it was about creating them. Each participant walked into the space as themselves and walked out feeling more connected to who they truly are. The combination of professional photography and intentional coaching created an environment where vulnerability was celebrated and confidence was built from the inside out.

![Celebrating confidence and vulnerability](${tsbMichelle})

![Connection and sisterhood at Taking Sexy Back](${tsbSister})

![Transformation through connection](${tsbStarr})

---

*Interested in experiences like this? [Let's connect](/contact) to learn about upcoming events designed to foster connection, confidence, and community.*`,
    author: "Jessica Pennington",
    publishedDate: "2026-03-28",
    category: "Stories",
    tags: [
      "womens history month",
      "connection coaching",
      "empowerment",
      "photoshoot",
      "self-expression",
      "community events",
      "transformation",
      "confidence"
    ],
    featuredImage: takingSexyBackImage,
    imageAlt: "Group coaching session at the Taking Sexy Back event during Women's History Month 2026",
    readingTime: 4,
    keywords: "taking sexy back event, women's history month 2026, connection coaching, empowerment photoshoot, women's confidence event, J Penn Planning events, transformative experiences, community building"
  },
  {
    id: 'valentines-event-planning-2026',
    slug: 'valentines-day-event-planning-ideas-memorable-celebrations',
    title: "Valentine's Day Event Planning: Creating Meaningful Celebrations That Foster Connection",
    metaTitle: "Valentine's Day Event Planning Ideas 2026 | Romantic Party Planning Guide",
    excerpt: "Discover how to transform Valentine's Day from a commercial holiday into a meaningful celebration that fosters genuine connection. Expert tips for planning romantic dinners, Galentine's parties, and community events.",
    metaDescription: "Planning a Valentine's Day event? Get expert tips for romantic dinners, Galentine's parties & meaningful celebrations. Professional event planning ideas that create lasting connections.",
    content: `Valentine's Day is more than roses and chocolates-it's an opportunity to create meaningful moments that strengthen the bonds we share with those we love. Whether you're planning an intimate dinner for two, a lively Galentine's gathering, or a community celebration, thoughtful event planning can transform February 14th into an unforgettable experience.

## Why Meaningful Valentine's Day Events Matter

In our increasingly digital world, opportunities for genuine face-to-face connection have become precious. Valentine's Day offers the perfect occasion to step away from screens and create shared experiences that nurture relationships. Studies show that couples who engage in novel activities together report higher relationship satisfaction, and the same principle applies to friendships and community bonds.

When we invest time in planning a thoughtful Valentine's celebration, we're not just organizing an event-we're creating a space for authentic connection to flourish.

## Romantic Dinner Party Planning

### Setting the Scene

The ambiance of your Valentine's dinner sets the tone for the entire evening. Consider these elements:

**Lighting**: Soft, warm lighting creates intimacy. Candles remain the gold standard, but fairy lights and dimmed fixtures work beautifully too. Aim for enough light to see your partner's face clearly while maintaining a cozy atmosphere.

**Table Setting**: Elevate your tablescape with luxurious textures. A velvet table runner, linen napkins, and quality dinnerware communicate that this meal is special. Fresh flowers-whether traditional red roses or unexpected choices like ranunculus or garden roses-add natural elegance.

**Music**: Create a playlist that flows naturally through the evening. Start with softer background music during dinner and gradually transition to slightly more upbeat selections if you plan to dance or linger over dessert.

### Menu Considerations

Your Valentine's dinner menu should balance sophistication with comfort. Consider:

- **Appetizers**: Shared plates encourage connection. Think charcuterie boards, bruschetta, or elegant dips with artisan bread.
- **Main Course**: Choose dishes you can mostly prepare in advance so you're present with your guests rather than stuck in the kitchen.
- **Dessert**: Chocolate-based desserts remain Valentine's classics for good reason, but don't overlook fruit-forward options that feel lighter after a rich meal.

**Pro Tip**: If cooking isn't your strength, hiring a private chef or ordering from a high-end restaurant allows you to focus entirely on your guests while still enjoying restaurant-quality food in an intimate setting.

## Galentine's Day Celebrations

Leslie Knope's fictional holiday has become a beloved real-world tradition. A well-planned Galentine's event celebrates female friendship and creates space for women to connect outside their romantic relationships.

### Galentine's Party Ideas

**Spa Night In**: Transform your space into a relaxation haven with face masks, manicure stations, and aromatherapy. Hire a massage therapist for mini chair massages to elevate the experience.

**Wine and Painting Party**: Combine creativity with conversation. Whether you hire an instructor or follow along with a tutorial, painting together creates natural conversation starters and a keepsake to remember the evening.

**Brunch Celebration**: A leisurely brunch allows for deep conversation without the time pressure of an evening event. Include a signature cocktail, build-your-own waffle or mimosa bar, and comfortable seating arrangements that facilitate conversation.

**Vision Board Workshop**: Channel the new-year energy into a creative session where friends can dream together about their goals. Provide magazines, poster boards, and embellishments, and watch meaningful conversations unfold naturally.

### Making It Personal

The most memorable Galentine's events include personal touches that show each guest they're valued:

- Handwritten notes expressing what you appreciate about each friend
- Small gift bags with items tailored to each person's interests
- A photo display celebrating your friendship history
- A "compliment jar" where guests write affirmations for each other

## Community Valentine's Events

Valentine's Day events aren't limited to couples or close friend groups. Community celebrations can foster belonging and connection among neighbors, coworkers, or interest-based groups.

### Ideas for Community Gatherings

**Speed Friending Events**: Based on the speed dating model, these events help community members form new friendships through structured short conversations.

**Volunteer Activities**: Organize a group to make Valentine's cards for nursing home residents, assemble care packages for shelters, or participate in a community beautification project.

**Potluck Dinners**: Neighborhood potlucks bring people together around shared food. Assign categories to ensure variety and encourage recipe sharing.

**Singles Mixers**: For those not in romantic relationships, a thoughtfully planned singles event can be welcoming rather than awkward. Focus on group activities and conversation starters rather than one-on-one pressure.

## Event Planning Timeline

### Two Weeks Before
- Finalize guest list and send invitations
- Book any vendors (caterers, entertainers, rental equipment)
- Plan your menu and create shopping lists
- Order specialty items or decorations

### One Week Before
- Confirm RSVPs and vendor bookings
- Purchase non-perishable items and decorations
- Plan your playlist or entertainment
- Prepare any DIY decorations

### Day Before
- Clean and prepare your space
- Set up decorations
- Prep ingredients that can be made ahead
- Confirm final details with guests

### Day Of
- Purchase fresh flowers and perishable items
- Complete final food preparation
- Set the table and finalize ambiance
- Take time to prepare yourself so you can be present

## Professional Event Planning Support

Sometimes the most meaningful Valentine's gift is the gift of a stress-free celebration. Professional event planners handle the logistics-from concept development to day-of coordination-so you can be fully present with your loved ones.

At J Penn Planning, we specialize in creating intimate gatherings that foster genuine connection. Whether you envision an elegant dinner party, a cozy Galentine's brunch, or a community celebration, we bring your vision to life while you enjoy the moments that matter most.

## Making Every Celebration Meaningful

Regardless of the scale or style of your Valentine's event, the most important element is intentionality. When we approach celebration planning with the goal of fostering connection rather than impressing guests, something magical happens: people relax, open up, and create memories together.

This Valentine's Day, consider what would make your loved ones feel truly seen and celebrated. Start there, and let the details follow. The most memorable events aren't always the most elaborate-they're the ones where everyone leaves feeling more connected than when they arrived.

---

*Ready to create a Valentine's celebration that brings people together? [Let's connect](/contact) to discuss how we can help you design an event focused on what matters most: meaningful connection.*`,
    author: "Jessica Pennington",
    publishedDate: "2026-01-20",
    category: "Event Ideas",
    tags: [
      "valentines day",
      "event planning",
      "romantic dinner",
      "galentines",
      "party planning",
      "celebration ideas",
      "relationship building",
      "community events"
    ],
    featuredImage: valentinesImage,
    imageAlt: "Elegant Valentine's Day dinner table setting with candles and roses",
    readingTime: 8,
    keywords: "valentine's day event planning, romantic dinner party ideas, galentines party planning, valentine's day celebration ideas, february event planning, romantic event planner, valentine's party themes, intimate dinner planning, couples celebration ideas, valentine's day 2026"
  }
];

// Helper function to get blog post by slug
export const getJournalPostBySlug = (slug: string): JournalPost | undefined => {
  return journalPosts.find(post => post.slug === slug);
};

// Helper function to get all blog posts sorted by date
export const getAllJournalPosts = (): JournalPost[] => {
  return [...journalPosts].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};

// Helper function to get blog posts by category
export const getJournalPostsByCategory = (category: string): JournalPost[] => {
  return journalPosts.filter(post => post.category === category);
};

// Helper function to get blog posts by tag
export const getJournalPostsByTag = (tag: string): JournalPost[] => {
  return journalPosts.filter(post =>
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

// Helper function to get related posts (by shared tags)
export const getRelatedPosts = (currentSlug: string, limit: number = 3): JournalPost[] => {
  const currentPost = getJournalPostBySlug(currentSlug);
  if (!currentPost) return [];

  const otherPosts = journalPosts.filter(post => post.slug !== currentSlug);

  // Score posts by number of shared tags
  const scoredPosts = otherPosts.map(post => ({
    post,
    score: post.tags.filter(tag => currentPost.tags.includes(tag)).length
  }));

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
};

// Create Article schema for SEO
export const createJournalPostSchema = (post: JournalPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.metaDescription,
  "image": post.featuredImage ? `https://jpennplanning.com${post.featuredImage}` : undefined,
  "datePublished": post.publishedDate,
  "dateModified": post.updatedDate || post.publishedDate,
  "author": {
    "@type": "Person",
    "name": post.author,
    "url": "https://jpennplanning.com/about"
  },
  "publisher": {
    "@id": "https://jpennplanning.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://jpennplanning.com/journal/${post.slug}`
  },
  "keywords": post.keywords,
  "articleSection": post.category,
  "wordCount": post.content.split(/\s+/).length
});
