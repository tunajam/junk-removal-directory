/**
 * DIRECTORY SITE CONFIGURATION
 *
 * Junk Removal Directory — JunkHaulCompare.com
 */

const siteConfig = {
  // ── Basics ──────────────────────────────────────────────
  name: 'JunkHaulCompare',
  domain: 'junkhaulcompare.com',
  tagline: 'Compare Junk Removal Prices Near You',
  description: 'Find and compare junk removal prices from trusted local haulers. Get free quotes instantly.',
  contactEmail: 'hello@junkhaulcompare.com',
  notificationEmail: 'fred@tunajam.com',

  // ── Industry ────────────────────────────────────────────
  industry: {
    singular: 'Junk Removal',
    plural: 'Junk Removal Services',
    slug: 'junk-removal',
    companyNoun: 'hauler',
    companyNounPlural: 'haulers',
    serviceVerb: 'haul',
  },

  // ── Service Options ─────────────────────────────────────
  serviceOptions: {
    label: 'Load Size',
    unit: 'Load',
    options: [
      { value: 1, label: 'Single Item Pickup', description: 'One large item — couch, mattress, appliance', capacity: '1 bulky item' },
      { value: 2, label: 'Partial Load', description: 'A few items or small cleanout', capacity: '¼ truck load' },
      { value: 3, label: 'Half Load', description: 'Garage cleanout, small renovation debris', capacity: '½ truck load' },
      { value: 4, label: 'Full Load', description: 'Whole house cleanout, major renovation', capacity: 'Full truck load' },
    ],
  },

  // ── How It Works Steps ──────────────────────────────────
  steps: [
    { title: 'Search Your City', description: 'Enter your city to see local junk removal haulers.' },
    { title: 'Compare Prices', description: 'View side-by-side pricing, ratings, and services.' },
    { title: 'Get a Quote', description: 'Request a free quote directly from the hauler.' },
  ],

  // ── Theme ───────────────────────────────────────────────
  theme: {
    primary: '#166534',
    primaryLight: '#16a34a',
    primaryDark: '#14532d',
    accent: '#f59e0b',
    accentLight: '#fbbf24',
    accentDark: '#d97706',
  },

  // ── SEO Templates ───────────────────────────────────────
  seo: {
    cityTitle: '{industryPlural} in {city}, {state} — Compare {count} Haulers | {siteName}',
    cityDescription: 'Compare {industry} prices from {count} haulers in {city}, {state}. Get instant quotes.',
    companyTitle: '{companyName} — {industry} in {city}, {state} | {siteName}',
    companyDescription: '{companyName} offers {industry} in {city}, {state}. Compare load sizes, pricing, and service areas.',
  },

  // ── Hero Search ─────────────────────────────────────────
  hero: {
    heading: 'Compare {industry}\\nPrices Near You',
    subheading: 'Stop calling around. Find the best junk removal deals from trusted local haulers — side by side, in seconds.',
    searchPlaceholder: 'Enter your city (e.g. Austin, Denver)',
    searchButton: 'Find {industryPlural} →',
  },

  // ── Quote Form ──────────────────────────────────────────
  quoteForm: {
    heading: 'Get a Free Quote',
    subheading: 'Fill out the form and {companyName} will contact you with pricing.',
    submitButton: 'Get My Free Quote →',
    successMessage: '{companyName} will get back to you within 1 business day.',
    fields: ['name', 'phone', 'email', 'serviceOption', 'message'],
  },

  // ── Blog ────────────────────────────────────────────────
  blog: {
    title: '{industry} Blog',
    description: 'Expert advice on {industry} costs, tips, and guides.',
  },

  // ── Monetization ─────────────────────────────────────────
  monetization: {
    ads: {
      enabled: true,
      topSlot: true,
      sidebarSlot: true,
    },
    claimListing: {
      enabled: true,
      heading: 'Is this your business?',
      subheading: 'Claim this listing to update your info, add real pricing, respond to quotes, and get a verified badge.',
      buttonText: 'Claim This Listing — It\'s Free',
    },
    leadCapture: {
      enabled: true,
      heading: 'Get Free Quotes',
      subheading: 'Tell us what you need and get quotes from top-rated local companies.',
      buttonText: 'Get My Free Quotes →',
      successMessage: 'Thanks! Local companies will reach out within 1 business day.',
    },
  },
  // ── Analytics ───────────────────────────────────────────
  posthog: {
    key: '',
    host: 'https://us.i.posthog.com',
  },

  // ── Notifications ───────────────────────────────────────
  notifications: {
    provider: 'resend',
  },
} as const;

export default siteConfig;
export type SiteConfig = typeof siteConfig;
