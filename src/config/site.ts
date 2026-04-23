/**
 * ============================================================================
 * SITE CONFIG — single source of truth
 * ============================================================================
 * Change values here, they update everywhere on the site.
 * Prices, contact info, social links, Cal.com URL, pricing — all live here.
 * ============================================================================
 */

export const siteConfig = {
  // ---- Identity ----
  name: 'Medeinė Deginaitė',
  shortName: 'Medeinė',
  title: 'Registered Dietitian',
  domain: 'medeinedietitian.co.uk',
  url: 'https://medeinedietitian.co.uk',

  // ---- Contact ----
  contact: {
    // Public-facing email shown on the site.
    // Set up email forwarding from this address to your inbox (see README).
    email: 'hello@medeinedietitian.co.uk',
    // Inbox that actually receives contact-form submissions (internal).
    // Change anytime — only used by the API route, never shown on the site.
    inboxEmail: 'medeine.deginaite@gmail.com',
    phone: '', // optional, e.g. '+44 7000 000000' — leave empty to hide from site
  },

  // ---- Booking ----
  booking: {
    // Cal.com username / event paths. Replace after creating Cal.com account.
    // See README for setup instructions.
    calUsername: 'medeine', // e.g. cal.com/medeine
    discoveryCallSlug: '15min-discovery', // cal.com/medeine/15min-discovery
    initialAssessmentSlug: 'initial-assessment',
    followUpSlug: 'follow-up',
  },

  // ---- Credentials (displayed on site) ----
  credentials: {
    hcpcNumber: '', // optional, e.g. 'DT12345' — displays publicly on site if set
    bdaMembership: 'Full Member',
    qualification: 'BSc Human Nutrition and Dietetics',
  },

  // ---- Social links (set empty string '' to hide) ----
  social: {
    instagram: 'https://www.instagram.com/degimaitemedeine/',
    facebook: 'https://www.facebook.com/medeine.degimaite',
    linkedin: 'https://linkedin.com/in/medeine-degimaite/',
  },

  // ---- Location / service area ----
  location: {
    country: 'United Kingdom',
    serviceArea: 'Online consultations across the UK',
    // For Google structured data (schema.org)
    countryCode: 'GB',
  },

  // ---- Analytics ----
  analytics: {
    // Vercel Analytics is on automatically when deployed to Vercel.
    // If you want Plausible later, add domain here and it will initialise.
    plausibleDomain: '', // e.g. 'medeinedietitian.co.uk'
  },
} as const;

/**
 * ============================================================================
 * PRICING CONFIG
 * ============================================================================
 * All prices in GBP (£). Used on pricing page and structured data.
 * When you raise prices, change them here only.
 * ============================================================================
 */

export const pricing = {
  currency: 'GBP',
  currencySymbol: '£',

  sessions: {
    discoveryCall: {
      id: 'discovery',
      price: 0,
      priceLabel: 'Free',
      duration: '15 minutes',
      durationMinutes: 15,
    },
    initialAssessment: {
      id: 'initial',
      price: 90,
      duration: '60 minutes',
      durationMinutes: 60,
    },
    followUp30: {
      id: 'follow-up-30',
      price: 45,
      duration: '30 minutes',
      durationMinutes: 30,
    },
    /*
    followUp45: {
      id: 'follow-up-45',
      price: 60,
      duration: '45 minutes',
      durationMinutes: 45,
    },
    */
  },

  packages: {
    starter: {
      id: 'starter',
      price: 165,
      // (85 + 45 + 45 = 180; saving £15)
      // originalPrice: 180,
      duration: '6 weeks',
    },
    transform: {
      id: 'transform',
      price: 320,
      // (85 + 5x45 = 315… we charge premium for support)
      // originalPrice: 315,
      duration: '3 months',
    },
    fertility: {
      id: 'fertility',
      price: 425,
      // originalPrice: 490,
      duration: '12 weeks',
    },
  },
} as const;

/**
 * ============================================================================
 * FEATURE FLAGS
 * ============================================================================
 */

export const features = {
  showCookieBanner: false, // privacy-first analytics means we don't need it
  showBlog: true,
  showTestimonials: false, // flip to true once real testimonials exist
  showNewsletter: false, // phase 2
} as const;

export type SiteConfig = typeof siteConfig;
export type Pricing = typeof pricing;
