import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: `Junk Removal Cost in 2026: Complete Pricing Guide | ${config.name}`,
  description:
    'How much does junk removal cost? Average prices range from $75–$750+ depending on load size, item type, and location. Full breakdown inside.',
  alternates: { canonical: `https://${config.domain}/blog/junk-removal-cost` },
};

const PRICING_DATA = [
  { size: 'Single Item Pickup', range: '$75 – $175', examples: 'Couch, mattress, appliance' },
  { size: 'Partial Load (¼ truck)', range: '$150 – $300', examples: 'A few large items, small garage cleanout' },
  { size: 'Half Load (½ truck)', range: '$250 – $450', examples: 'Garage cleanout, small renovation debris' },
  { size: 'Full Load (full truck)', range: '$400 – $750+', examples: 'Whole-house cleanout, estate cleanout' },
];

const ITEM_PRICING = [
  { item: 'Couch / Sofa', cost: '$75 – $200' },
  { item: 'Mattress', cost: '$75 – $150' },
  { item: 'Refrigerator', cost: '$100 – $200' },
  { item: 'Hot Tub', cost: '$250 – $600' },
  { item: 'Piano', cost: '$200 – $500' },
  { item: 'Construction Debris (½ truck)', cost: '$300 – $500' },
  { item: 'Yard Waste (full truck)', cost: '$350 – $600' },
];

const CITY_LINKS = [
  { name: 'Austin', state: 'texas', city: 'austin' },
  { name: 'Denver', state: 'colorado', city: 'denver' },
  { name: 'Atlanta', state: 'georgia', city: 'atlanta' },
  { name: 'Phoenix', state: 'arizona', city: 'phoenix' },
  { name: 'Dallas', state: 'texas', city: 'dallas' },
  { name: 'Houston', state: 'texas', city: 'houston' },
  { name: 'Chicago', state: 'illinois', city: 'chicago' },
  { name: 'Los Angeles', state: 'california', city: 'los-angeles' },
];

const FAQ = [
  {
    q: 'How much does junk removal cost on average?',
    a: 'The national average for junk removal is $230–$350 for a half-truck load. Single item pickups start around $75, while full-truck loads can run $400–$750+.',
  },
  {
    q: 'What factors affect junk removal pricing?',
    a: 'The biggest factors are volume (how much stuff), item type (hazardous materials cost more), accessibility (stairs, long carries), and your location. Urban areas tend to cost more than rural ones.',
  },
  {
    q: 'Is junk removal cheaper than renting a dumpster?',
    a: 'For small jobs (1–3 items), junk removal is usually cheaper and faster. For large renovation projects generating debris over multiple days, a dumpster rental ($300–$600/week) can be more cost-effective.',
  },
  {
    q: 'Do junk removal companies charge by weight or volume?',
    a: 'Most companies charge by volume — how much space your items take up in the truck. Some charge flat rates for specific items like mattresses or appliances.',
  },
  {
    q: 'Are there extra fees I should know about?',
    a: 'Watch for fees related to stairs/elevator access, long carry distances (over 50 ft), hazardous materials (paint, chemicals), and minimum load charges. Always ask upfront.',
  },
];

export default function JunkRemovalCostPost() {
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
            Junk Removal Cost in 2026: What You&apos;ll Actually Pay
          </h1>
          <p className="text-white/60 mt-2 text-sm">February 19, 2026 · 10 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          Junk removal costs between <strong>$75 and $750+</strong> depending on how much you&apos;re
          getting rid of. Most homeowners pay <strong>$230–$350</strong> for a typical half-truck load —
          think a garage cleanout or a few rooms of furniture.
        </p>
        <p>
          We analyzed pricing from hundreds of haulers across the country to build this guide.
          Here&apos;s exactly what to expect.
        </p>

        <h2>Junk Removal Cost by Load Size</h2>
        <p>
          Most junk removal companies price by volume — how much space your stuff takes up in their
          truck. Here&apos;s what each load size typically costs:
        </p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left p-3 border border-gray-200 font-semibold">Load Size</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Price Range</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_DATA.map((row) => (
                <tr key={row.size}>
                  <td className="p-3 border border-gray-200 font-medium">{row.size}</td>
                  <td className="p-3 border border-gray-200 text-accent-dark font-semibold">{row.range}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Cost by Item Type</h2>
        <p>
          Hauling a single item? Many companies offer flat-rate pricing for common items:
        </p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left p-3 border border-gray-200 font-semibold">Item</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Typical Cost</th>
              </tr>
            </thead>
            <tbody>
              {ITEM_PRICING.map((row) => (
                <tr key={row.item}>
                  <td className="p-3 border border-gray-200 font-medium">{row.item}</td>
                  <td className="p-3 border border-gray-200 text-accent-dark font-semibold">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>What Affects Junk Removal Pricing?</h2>
        <p>The final bill depends on a handful of factors:</p>
        <ul>
          <li><strong>Volume:</strong> More stuff = higher cost. Most companies use truck-load fractions.</li>
          <li><strong>Item type:</strong> Hazardous materials (paint, chemicals, tires) cost extra or may not be accepted.</li>
          <li><strong>Weight:</strong> Heavy items like concrete, dirt, or pianos may incur surcharges.</li>
          <li><strong>Accessibility:</strong> Second-floor, basement, or long-carry items add $20–$75+.</li>
          <li><strong>Location:</strong> Urban areas with higher cost of living mean higher junk removal prices.</li>
          <li><strong>Timing:</strong> Weekend and same-day pickups often cost 10–20% more.</li>
        </ul>

        <h2>Junk Removal vs. Dumpster Rental</h2>
        <p>
          The classic question. Here&apos;s the simple answer: <strong>junk removal is better for one-time
          cleanouts</strong> (they do all the lifting). <strong>Dumpster rental is better for ongoing projects</strong> where
          you&apos;re generating debris over days or weeks.
        </p>
        <div className="not-prose overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left p-3 border border-gray-200 font-semibold">Factor</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Junk Removal</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Dumpster Rental</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 font-medium">Cost</td>
                <td className="p-3 border border-gray-200">$150–$750</td>
                <td className="p-3 border border-gray-200">$300–$600/week</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium">Labor included?</td>
                <td className="p-3 border border-gray-200">✅ Yes</td>
                <td className="p-3 border border-gray-200">❌ You load it</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium">Best for</td>
                <td className="p-3 border border-gray-200">One-time cleanouts</td>
                <td className="p-3 border border-gray-200">Multi-day projects</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium">Speed</td>
                <td className="p-3 border border-gray-200">Same day</td>
                <td className="p-3 border border-gray-200">1–7 day rental</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How to Save on Junk Removal</h2>
        <ol>
          <li><strong>Compare multiple quotes.</strong> Prices vary 30–50% between haulers for the same job. <Link href="/" className="text-accent-dark hover:underline">Compare prices here →</Link></li>
          <li><strong>Donate first.</strong> Many items can go to Habitat ReStore, Goodwill, or local shelters — reducing your haul volume.</li>
          <li><strong>Bundle items.</strong> A half-truck load is much cheaper per-item than multiple single-item pickups.</li>
          <li><strong>Book weekdays.</strong> Monday–Thursday slots are typically 10–15% cheaper than weekends.</li>
          <li><strong>Move items to ground level.</strong> Skip the stair/accessibility surcharge by moving stuff to the driveway or garage.</li>
        </ol>

        <h2>Junk Removal Cost by City</h2>
        <p>
          Prices vary significantly by market. Here are some of the most-searched cities:
        </p>
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
          <h2 className="text-xl font-bold text-primary mb-2">Compare Junk Removal Prices in Your City</h2>
          <p className="text-gray-600 mb-4">
            Stop calling around. See real prices from local haulers — side by side.
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
