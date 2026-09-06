/**
 * Site-wide settings and links.
 * TODO markers are things Jessica/Tysen need to confirm before go-live.
 */
export const site = {
  name: 'J Penn Planning',
  owner: 'Jessica Pennington',
  tagline: 'You belong here.',
  thesis: 'Connection changes everything.',
  url: 'https://jpennplanning.com',
  email: 'JPennPlanning@gmail.com',
  phone: '801-837-6303',
  phoneHref: 'tel:801-837-6303',
  location: 'Utah — coaching and speaking available anywhere',

  social: {
    // TODO: confirm handles/URLs with Jessica
    instagram: 'https://www.instagram.com/jpennplanning',
    facebook: 'https://www.facebook.com/jpennplanning',
    badMomsOfUtah: 'https://www.facebook.com/groups/badmomsofutah',
  },

  links: {
    book: 'https://amzn.to/42lqlyK',
  },

  forms: {
    // Formspree endpoints already in use on the live site
    contact: 'https://formspree.io/f/meejawrz',
    newsletter: 'https://formspree.io/f/mojaezzw',
  },

  events: {
    coffeeAndCompliments: {
      name: 'Coffee & Compliments',
      status: 'coming-soon' as const,
      blurb:
        'Women showing up, drinking their coffee (or tea, no judgment), and building each other up. Coming soon.',
    },
  },
} as const;

/**
 * Visual feedback widget for staging (Feedbucket). Loaded only on staging
 * hosts so it never appears on the live site. Paste the values from the
 * Feedbucket install snippet here:
 *   <script src="https://cdn.feedbucket.app/assets/feedbucket.js" data-feedbucket="XXXX"></script>
 *   -> src: 'https://cdn.feedbucket.app/assets/feedbucket.js', attrs: { 'data-feedbucket': 'XXXX' }
 * Leave `null` to disable.
 */
export const feedbackWidget: { src: string; attrs?: Record<string, string> } | null = null;

/**
 * Staging detection. True when built with VITE_STAGING=true, or when served
 * from a preview host (Cloudflare Pages *.pages.dev, Netlify, Vercel, or a
 * staging.* subdomain). The live domain never matches.
 */
export const isStaging =
  import.meta.env.VITE_STAGING === 'true' ||
  (typeof window !== 'undefined' &&
    /(\.pages\.dev|\.netlify\.app|\.vercel\.app)$|^staging\./i.test(window.location.hostname));
