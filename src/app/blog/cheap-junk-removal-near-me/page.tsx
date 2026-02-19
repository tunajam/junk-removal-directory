import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: `Cheap Junk Removal Near Me: How to Find the Best Deal (2026) | ${config.name}`,
  description:
    'Looking for cheap junk removal near you? Learn how to find affordable haulers, what budget-friendly options cost, and 7 ways to cut your junk removal bill.',
  alternates: { canonical: `https://${config.domain}/blog/cheap-junk-removal-near-me` },
};

const BUDGET_OPTIONS = [
  { option: 'Full-service junk removal', cost: '$150 – $750', pros: 'They do everything', cons: 'Most expensive option' },
  { option: 'Curbside bulk pickup (city)', cost: 'Free – $50', pros: 'Cheapest option', cons: 'Limited items, slow scheduling' },
  { option: 'Rent a pickup truck (U-Haul)', cost: '$20 – $40 + dump fees', pros: 'Very affordable', cons: 'You do all the labor' },
  { option: 'Dumpster bag (Bagster)', cost: '$30 bag + $150–$250 pickup', pros: 'Good for small jobs', cons: 'Weight limits, pickup wait' },
  { option: 'Donate pickup (Salvation Army)', cost: 'Free', pros: 'Free + tax deduction', cons: 'Only usable items' },
  { option: 'Facebook / Craigslist "free" post', cost: 'Free', pros: 'People come get it', cons: 'No-shows, only desirable items' },
];

const CITY_LINKS = [
  { name: 'Austin', state: 'texas', city: 'austin' },
  { name: 'Denver', state: 'colorado', city: 'denver' },
  { name: 'Atlanta', state: 'georgia', city: 'atlanta' },
  { name: 'Phoenix', state: 'arizona', city: 'phoenix' },
  { name: 'Nashville', state: 'tennessee', city: 'nashville' },
  { name: 'Charlotte', state: 'north-carolina', city: 'charlotte' },
  { name: 'Tampa', state: 'florida', city: 'tampa' },
  { name: 'Portland', state: 'oregon', city: 'portland' },
];

const FAQ = [
  {
    q: 'What is the cheapest way to get rid of junk?',
    a: 'The cheapest option is your city\'s free bulk pickup service (most cities offer this monthly or by request). Next cheapest: posting items as "free" on Facebook Marketplace or Craigslist. For items in good condition, donation pickup from Salvation Army or Habitat ReStore is free and gives you a tax deduction.',
  },
  {
    q: 'How do I find affordable junk removal near me?',
    a: 'Get at least 3 quotes from local haulers — prices vary 30–50% for the same job. Use comparison sites like JunkHaulCompare to see multiple haulers side by side. Look for companies that offer price matching, military/senior discounts, or midweek specials.',
  },
  {
    q: 'Is there a cheap alternative to 1-800-GOT-JUNK?',
    a: 'Yes. Local independent haulers are typically 20–40% cheaper than national franchises like 1-800-GOT-JUNK or College Hunks. They have lower overhead and more pricing flexibility. The tradeoff: less brand recognition, but the service is often identical.',
  },
  {
    q: 'Can I haggle with junk removal companies?',
    a: 'Absolutely. Get competing quotes and mention them. Most local haulers will match or beat a competitor\'s price to win the job. You can also reduce your price by helping load, moving items to the curb, or bundling with a neighbor.',
  },
  {
    q: 'How much does cheap junk removal actually cost?',
    a: 'Budget-friendly junk removal starts around $75–$100 for a single item and $150–$250 for a partial truck load. If you go with a local independent hauler on a weekday, you can often get a half-truck load for $200–$300.',
  },
];

export default function CheapJunkRemovalPost() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/blog" className="hover:underline">← Blog</Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Cheap Junk Removal Near Me: How to Find the Best Deal
          </h1>
          <p className="text-white/60 mt-2 text-sm">February 19, 2026 · 9 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          Let&apos;s be real — junk removal isn&apos;t cheap. But it doesn&apos;t have to break the bank either.
          Whether you&apos;re cleaning out a garage, getting rid of old furniture, or dealing with
          post-renovation debris, there are ways to get it done without overpaying.
        </p>
        <p>
          Here&apos;s everything we know about finding affordable junk removal near you.
        </p>

        <h2>All Your Options, Compared</h2>
        <p>
          Before you hire a hauler, know what&apos;s out there. Some options are free. Some cost a
          fraction of full-service hauling.
        </p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left p-3 border border-gray-200 font-semibold">Option</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Cost</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Pros</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Cons</th>
              </tr>
            </thead>
            <tbody>
              {BUDGET_OPTIONS.map((row) => (
                <tr key={row.option}>
                  <td className="p-3 border border-gray-200 font-medium">{row.option}</td>
                  <td className="p-3 border border-gray-200 text-accent-dark font-semibold">{row.cost}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{row.pros}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{row.cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>7 Ways to Cut Your Junk Removal Bill</h2>

        <h3>1. Compare Multiple Haulers</h3>
        <p>
          This is the single biggest money-saver. Prices vary 30–50% between companies for
          the exact same job. Don&apos;t just call the first company you find.{' '}
          <Link href="/" className="text-accent-dark hover:underline">Compare haulers in your city →</Link>
        </p>

        <h3>2. Go Local, Not National</h3>
        <p>
          National franchises like 1-800-GOT-JUNK charge franchise fees that get passed to you.
          Local independent haulers are typically <strong>20–40% cheaper</strong> for the same
          service. They&apos;re also more likely to negotiate.
        </p>

        <h3>3. Book on a Weekday</h3>
        <p>
          Weekends are peak demand. Tuesday through Thursday is the cheapest window for most
          haulers. Some offer explicit weekday discounts of 10–15%.
        </p>

        <h3>4. Reduce Your Volume First</h3>
        <p>
          Before the hauler arrives, pull out anything you can donate, recycle, or give away.
          Every cubic foot you remove is money saved. Post usable items on Facebook Marketplace
          the week before — you&apos;d be surprised what people will come pick up for free.
        </p>

        <h3>5. Move Items to Ground Level</h3>
        <p>
          Stair fees and long-carry surcharges add $20–$75 to the bill. Spend 30 minutes
          moving stuff to the garage or driveway and pocket the savings.
        </p>

        <h3>6. Ask About Discounts</h3>
        <p>
          Many haulers offer discounts for military, seniors, repeat customers, and referrals.
          It never hurts to ask — most don&apos;t advertise these.
        </p>

        <h3>7. Bundle With a Neighbor</h3>
        <p>
          If your neighbor also has junk to get rid of, combining loads can mean a better
          per-person rate. A full truck split two ways is cheaper than two partial loads.
        </p>

        <h2>Free Junk Removal Options</h2>
        <p>Before paying anyone, check these free options:</p>
        <ul>
          <li>
            <strong>City bulk pickup:</strong> Most cities offer free or low-cost curbside pickup
            for large items. Call your local waste department or check their website.
          </li>
          <li>
            <strong>Donation pickup:</strong> Habitat for Humanity ReStore, Salvation Army, and
            Goodwill all offer free pickup for furniture and usable items. Plus: tax deduction.
          </li>
          <li>
            <strong>&ldquo;Free&rdquo; listings:</strong> Post on Facebook Marketplace, Craigslist,
            Nextdoor, or Buy Nothing groups. Put items on the curb with a &ldquo;FREE&rdquo; sign.
          </li>
          <li>
            <strong>Scrap metal recyclers:</strong> Metal items (appliances, grills, bed frames)
            can sometimes be picked up free by scrap metal collectors.
          </li>
        </ul>

        <h2>When Cheap Isn&apos;t Worth It</h2>
        <p>
          A word of caution: the cheapest hauler isn&apos;t always the best choice. Watch out for:
        </p>
        <ul>
          <li><strong>No insurance:</strong> If they damage your property, you&apos;re on the hook.</li>
          <li><strong>Illegal dumping:</strong> Some unlicensed operators dump your junk illegally — and the fines can come back to you as the generator of the waste.</li>
          <li><strong>Bait-and-switch pricing:</strong> A low phone quote that doubles when they arrive.</li>
        </ul>
        <p>
          Always verify the company has insurance, check reviews, and get the quote in writing
          before they start loading.
        </p>

        <h2>Find Affordable Haulers in Your City</h2>
        <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CITY_LINKS.map((c) => (
            <Link
              key={c.city}
              href={`/${c.state}/${c.city}`}
              className="block text-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors text-primary font-medium text-sm"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <h2>Frequently Asked Questions</h2>
        {FAQ.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </article>

      <AdSlot position="sidebar" className="max-w-3xl mx-auto px-4 mb-8" />

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Compare Cheap Junk Removal Near You</h2>
          <p className="text-gray-600 mb-4">
            See prices from local haulers side by side — find the best deal in seconds.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Compare Prices Now →
          </Link>
        </div>
      </section>
    </>
  );
}
