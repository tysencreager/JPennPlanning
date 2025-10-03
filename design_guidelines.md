# J Penn Planning - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from luxury event and hospitality brands (Airbnb for warmth, luxury hotel sites for elegance, high-end event planners). The design should feel sophisticated yet approachable, emphasizing human connection through elegant visual storytelling.

**Core Principles**:
- Elegant minimalism with intentional use of luxury accents
- Warm, welcoming atmosphere that invites connection
- Professional polish that builds trust and credibility
- Visual storytelling through strategic imagery placement

## Color Palette

**Primary Colors**:
- Forest Green: 150 45% 25% (primary brand, headers, CTAs)
- Deep Forest: 150 50% 20% (darker accent for depth)
- Sage Green: 150 25% 45% (lighter variant for backgrounds)

**Accent Colors**:
- Gold: 45 75% 55% (strategic highlights, borders, icons - use sparingly)
- Warm Beige: 40 25% 88% (backgrounds, cards)
- Cream: 40 15% 95% (light mode background)

**Neutrals**:
- Text Dark: 0 0% 15% (primary text)
- Text Medium: 0 0% 40% (secondary text)
- Background White: 0 0% 99%

**Dark Mode** (if implemented):
- Background: 150 20% 12%
- Surface: 150 15% 18%
- Text: 40 10% 92%

## Typography

**Font Families** (Google Fonts):
- Headings: 'Playfair Display' (serif - elegant, sophisticated)
- Body: 'Inter' (sans-serif - modern, readable)
- Accent/Quote: 'Cormorant Garamond' (decorative serif)

**Scale**:
- Hero Heading: text-6xl md:text-7xl, font-bold
- Section Headings: text-4xl md:text-5xl, font-semibold
- Subheadings: text-2xl md:text-3xl, font-medium
- Body: text-base md:text-lg, leading-relaxed
- Quotes: text-xl md:text-2xl, italic, font-light

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 md:py-32
- Content gaps: gap-8 to gap-16
- Card padding: p-6 to p-8

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Text content: max-w-4xl for readability
- Feature grids: max-w-6xl

## Component Library

**Hero Section**:
- Full-screen (90vh) with elegant background image (warm event setting)
- Semi-transparent forest green overlay (opacity-60)
- Centered content with Simi Fromen quote in Cormorant Garamond
- Subtle gold accent line above quote
- CTA button: forest green with gold border on hover

**About Section**:
- Two-column layout (image left, content right on desktop)
- Jessica's professional photo with subtle gold border accent
- Warm beige background (40 25% 88%)
- "Welcome to J Penn Planning!" heading in Playfair Display

**Services/Philosophy Section**:
- Three-column grid showcasing: Event Planning, Community Building, Transformational Experiences
- Icons in gold with forest green on hover
- Cards with cream background and subtle shadows
- Each card includes icon, title, and description

**Gallery Preview**:
- Masonry grid (2-3 columns) showing event moments
- "Curated Moments of Connection" heading
- Gold accent borders on hover
- CTA to full gallery page

**Testimonials** (if content available):
- Elegant quote cards with beige backgrounds
- Client names in forest green
- Subtle gold quotation marks as decorative element

**Contact Section**:
- Two-column split: Form (left) + Contact Info/Business Hours (right)
- Forest green submit button with gold hover state
- Warm, inviting copy emphasizing connection
- Form fields with beige focus states

**Navigation**:
- Clean header with J Penn Planning logo (forest green typography)
- Transparent on hero, becomes white with shadow on scroll
- Desktop: horizontal menu with gold underline on active state
- Mobile: elegant slide-in menu

**Footer**:
- Forest green background with beige/gold text
- Three columns: About snippet, Quick Links, Contact info
- Social media icons in gold
- Newsletter signup with elegant styling

## Images

**Critical Image Placements**:
1. **Hero Background**: Warm, elegant event scene (dinner party, gathering) with soft focus - people connecting in intimate setting
2. **Jessica's Photo**: Professional headshot with warm, approachable energy
3. **Gallery Grid**: 6-9 curated event photos showing diverse moments of connection
4. **Section Accents**: Subtle decorative imagery (florals, table settings) as background elements where appropriate

**Image Treatment**:
- Subtle sepia or warm filters to maintain cohesive aesthetic
- Gold borders or frames for featured images
- Soft shadows for depth
- All images optimized and responsive

## Special Interactions

**Minimal, Elegant Animations**:
- Smooth scroll behavior
- Subtle fade-in on scroll for section reveals
- Gold accent line animations (width transition)
- Hover states with gentle scale (1.02-1.05)
- NO distracting or excessive motion

**Button States**:
- Primary CTA: Forest green background, white text, gold border on hover
- Outline buttons on images: Blurred background, gold border, no custom hover states

This design creates a sophisticated, warm, and professional presence that reflects J Penn Planning's mission of fostering human connection through beautifully curated events.