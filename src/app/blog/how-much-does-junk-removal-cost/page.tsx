import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: `How Much Does Junk Removal Cost? (2026 Price Breakdown) | ${config.name}`,
  description:
    'How much does junk removal cost? Expect $75–$750+ depending on volume. We break down pricing by load size, item type, and city so you know before you call.',
  alternates: { canonical: `https://${config.domain}/blog/how-much-does-junk-removal-cost` },
};

const COST_BY_PROJECT = [
  { project: 'Garage Cleanout', loadSize: '½ – Full truck', cost: '$300 – $700' },
  { project: 'Basement Cleanout', loadSize: '½ – Full truck', cost: '$350 – $750' },
  { project: 'Estate / House Cleanout', loadSize: '1–3 full trucks', cost: '$750 – $2,500' },
  { project: 'Post-Renovation Debris', loadSize: '½ – Full truck', cost: '$300 – $600' },
  { project: 'Appliance Removal (1–3 units)', loadSize: 'Partial load', cost: '$100 – $350' },
  { project: 'Yard Waste Removal', loadSize: '¼ – ½ truck', cost: '$150 – $400' },
  { project: 'Office / Commercial Cleanout', loadSize: 'Full truck+', cost: '$500 – $1,500+' },
];

const REGIONAL_PRICING = [
  { region: 'Northeast (NYC, Boston, Philly)', halfTruck: '$300 – $500', fullTruck: '$500 – $850' },
  { region: 'Southeast (Atlanta, Miami, Charlotte)', halfTruck: '$225 – $400', fullTruck: '$400 – $700' },
  { region: 'Midwest (Chicago, Detroit, Columbus)', halfTruck: '$200 – $375', fullTruck: '$375 – $650' },
  { region: 'Southwest (Phoenix, Dallas, Houston)', halfTruck: '$200 – $375', fullTruck: '$350 – $650' },
  { region: 'West Coast (LA, SF, Seattle)', halfTruck: '$300 – $500', fullTruck: '$500 – $900' },
];

const CITY_LINKS = [
  { name: 'New York', state: 'new-york', city: 'new-york' },
  { name: 'Los Angeles', state: 'california', city: 'los-angeles' },
  { name: 'Chicago', state: 'illinois', city: 'chicago' },
  { name: 'Houston', state: 'texas', city: 'houston' },
  { name: 'Phoenix', state: 'arizona', city: 'phoenix' },
  { name: 'San Antonio', state: 'texas', city: 'san-antonio' },
  { name: 'Miami', state: 'florida', city: 'miami' },
  { name: 'Seattle', state: 'washington', city: 'seattle' },
];

const FAQ = [
  {
    q: 'How much does it cost to have someone haul away junk?',
    a: 'Professional junk removal typically costs $150–$450 for most residential jobs. Single items run $75–$175, while full-truck estate cleanouts can cost $700+. The exact price depends on volume, item type, and your location.',
  },
  {
    q: 'How do junk removal companies determine price?',
    a: 'Most companies send a crew to give a visual estimate based on how much truck space your items will take. Some offer phone/photo estimates. The main factors are volume, weight, item type (hazardous items cost more), and accessibility.',
  },
  {
    q: 'Is it worth paying for junk removal?',
    a: 'For most people, yes. You save hours of labor, multiple dump trips, potential injury from heavy items, and dump fees. When you factor in your time and a truck rental, professional hauling is often comparable in total cost — without the hassle.',
  },
  {
    q: 'How much does junk removal cost for a whole house?',
    a: 'A full house cleanout (estate cleanout) typically costs $1,000–$2,500 depending on the size of the home and volume of items. Larger homes with basements and attics can run higher. Most companies offer custom quotes for whole-house jobs.',
  },
  {
    q: 'Can I negotiate junk removal prices?',
    a: 'Yes — especially if you get multiple quotes. Having competing bids gives you leverage. You can also reduce costs by moving items to ground level, donating usable items first, and booking on a weekday.',
  },
];

export default function HowMuchDoesJunkRemovalCostPost() {
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
            How Much Does Junk Removal Cost? (2026 Breakdown)
          </h1>
          <p className="text-white/60 mt-2 text-sm">February 19, 2026 · 12 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          &ldquo;How much does junk removal cost?&rdquo; is the #1 question people ask before hiring a hauler.
          The honest answer: <strong>it depends</strong>. But we can get pretty specific.
        </p>
        <p>
          After analyzing pricing from hundreds of junk removal companies, here&apos;s what Americans
          are actually paying in 2026.
        </p>

        <div className="not-prose bg-accent/10 border border-accent/20 rounded-xl p-6 my-8">
          <p className="font-bold text-primary text-lg mb-2">Quick Answer</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>🪑 <strong>Single item:</strong> $75 – $175</li>
            <li>🏠 <strong>Typical cleanout (½ truck):</strong> $250 – $450</li>
            <li>🚚 <strong>Full truck load:</strong> $400 – $750+</li>
            <li>🏚️ <strong>Whole-house cleanout:</strong> $1,000 – $2,500</li>
          </ul>
        </div>

        <h2>Cost by Project Type</h2>
        <p>
          The best way to estimate your cost is to match your project to these common scenarios:
        </p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left p-3 border border-gray-200 font-semibold">Project</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Typical Load</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Cost Range</th>
              </tr>
            </thead>
            <tbody>
              {COST_BY_PROJECT.map((row) => (
                <tr key={row.project}>
                  <td className="p-3 border border-gray-200 font-medium">{row.project}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{row.loadSize}</td>
                  <td className="p-3 border border-gray-200 text-accent-dark font-semibold">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Junk Removal Cost by Region</h2>
        <p>
          Where you live has a big impact on pricing. Coastal cities and the Northeast tend to be the
          most expensive, while the Midwest and Southeast are the most affordable.
        </p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left p-3 border border-gray-200 font-semibold">Region</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">½ Truck</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Full Truck</th>
              </tr>
            </thead>
            <tbody>
              {REGIONAL_PRICING.map((row) => (
                <tr key={row.region}>
                  <td className="p-3 border border-gray-200 font-medium">{row.region}</td>
                  <td className="p-3 border border-gray-200 text-accent-dark font-semibold">{row.halfTruck}</td>
                  <td className="p-3 border border-gray-200 text-accent-dark font-semibold">{row.fullTruck}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>The Real Cost Breakdown</h2>
        <p>When a junk removal company quotes you, here&apos;s what&apos;s baked into that number:</p>
        <ul>
          <li><strong>Labor (40–50%):</strong> Two crew members for 30–90 minutes of loading.</li>
          <li><strong>Truck &amp; fuel (15–20%):</strong> Operating a large box truck isn&apos;t cheap.</li>
          <li><strong>Dump fees (15–25%):</strong> Landfill and recycling center tipping fees vary by city.</li>
          <li><strong>Insurance &amp; overhead (10–15%):</strong> Legit companies carry liability and workers&apos; comp.</li>
          <li><strong>Profit margin (10–15%):</strong> What keeps the business running.</li>
        </ul>

        <h2>Hidden Fees to Watch For</h2>
        <p>Not all quotes are created equal. Here&apos;s what might surprise you on the final bill:</p>
        <ul>
          <li><strong>Minimum load charge:</strong> Even if you only have one small item, many companies have a $75–$125 minimum.</li>
          <li><strong>Stair fees:</strong> $20–$75 extra for items above/below ground floor.</li>
          <li><strong>Long carry:</strong> If the truck can&apos;t park within 50 feet of the items.</li>
          <li><strong>Hazardous materials:</strong> Paint, chemicals, and batteries may cost extra or be refused.</li>
          <li><strong>Same-day/weekend surcharge:</strong> Rush service typically adds 10–25%.</li>
        </ul>

        <h2>How to Get the Best Price</h2>
        <ol>
          <li>
            <strong>Get 3+ quotes.</strong> Seriously. Prices vary wildly between companies.{' '}
            <Link href="/" className="text-accent-dark hover:underline">Compare haulers in your city →</Link>
          </li>
          <li><strong>Send photos.</strong> Companies give more accurate estimates when they can see the job.</li>
          <li><strong>Ask about all-inclusive pricing.</strong> Make sure labor, truck, and dump fees are included.</li>
          <li><strong>Book midweek.</strong> Tuesday–Thursday is cheapest.</li>
          <li><strong>Donate what you can.</strong> Fewer items = lower volume = lower cost.</li>
        </ol>

        <h2>Compare Prices in Your City</h2>
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
          <h2 className="text-xl font-bold text-primary mb-2">Ready to Get a Quote?</h2>
          <p className="text-gray-600 mb-4">
            Compare prices from top-rated haulers near you — free and instant.
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
