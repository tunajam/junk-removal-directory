import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'Junk Removal vs Dumpster Rental: Which Is Right for You?';
const description = 'Side-by-side comparison of junk removal services and dumpster rentals — costs, pros and cons, and a simple decision guide to pick the right option.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'Is junk removal or dumpster rental cheaper?', a: 'It depends on volume and timeline. For quick, small-to-medium jobs, junk removal is often cheaper ($150–$600). For large, multi-day projects like renovations, dumpster rentals ($300–$600/week) can be more economical.' },
  { q: 'Can I use a dumpster rental for household junk?', a: 'Yes, but check what\'s prohibited. Most dumpster companies ban hazardous materials, tires, batteries, and appliances with refrigerant. Junk removal companies handle those items more easily.' },
  { q: 'How fast is junk removal compared to a dumpster?', a: 'Junk removal is same-day or next-day — a crew shows up, loads everything, and leaves. Dumpster delivery takes 1–2 days, then you load it yourself, then wait for pickup.' },
  { q: 'What if I have a mix of junk and construction debris?', a: 'Junk removal handles mixed loads easily. Dumpsters often require separate containers for construction debris vs. household waste, increasing cost.' },
  { q: 'Do I need a permit for a dumpster?', a: 'If the dumpster sits on a public street or sidewalk, most cities require a permit ($25–$100+). On your private driveway, usually no permit needed.' },
];

export default function JunkRemovalVsDumpsterRental() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />

      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/guides" className="hover:underline">← Guides</Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
          <p className="text-white/60 mt-2 text-sm">February 2026 · 10 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          You&apos;ve got stuff to get rid of. The question is whether to call a junk removal crew or rent a dumpster. The right answer depends on your project size, timeline, budget, and how much physical work you want to do.
        </p>

        <h2>Quick Comparison</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Junk Removal</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Dumpster Rental</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2 font-medium">Cost</td><td className="border border-gray-200 px-4 py-2">$150–$600 per load</td><td className="border border-gray-200 px-4 py-2">$300–$600 per week</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2 font-medium">Labor</td><td className="border border-gray-200 px-4 py-2">They do all the lifting</td><td className="border border-gray-200 px-4 py-2">You load it yourself</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 font-medium">Speed</td><td className="border border-gray-200 px-4 py-2">Same-day, done in hours</td><td className="border border-gray-200 px-4 py-2">Multi-day (you set the pace)</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2 font-medium">Best for</td><td className="border border-gray-200 px-4 py-2">Cleanouts, single events</td><td className="border border-gray-200 px-4 py-2">Renovations, ongoing projects</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 font-medium">Permits needed?</td><td className="border border-gray-200 px-4 py-2">No</td><td className="border border-gray-200 px-4 py-2">Often yes (street placement)</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2 font-medium">Eco-friendly</td><td className="border border-gray-200 px-4 py-2">Crew sorts &amp; donates</td><td className="border border-gray-200 px-4 py-2">Everything goes to landfill</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2 font-medium">Scheduling flexibility</td><td className="border border-gray-200 px-4 py-2">Fixed appointment</td><td className="border border-gray-200 px-4 py-2">Load at your own pace</td></tr>
            </tbody>
          </table>
        </div>

        <h2>When Junk Removal Wins</h2>
        <ul>
          <li><strong>You need it gone today.</strong> Most junk removal companies offer same-day or next-day service.</li>
          <li><strong>You can&apos;t (or don&apos;t want to) do heavy lifting.</strong> The crew handles everything from inside your home to the truck.</li>
          <li><strong>You care about recycling and donation.</strong> Good haulers sort items and divert 60–80% from landfills.</li>
          <li><strong>You have a small-to-medium amount of stuff.</strong> A few rooms of furniture, appliances, or garage cleanout.</li>
          <li><strong>You don&apos;t have driveway space.</strong> No need to park a 20-foot container on your property.</li>
        </ul>

        <h2>When a Dumpster Rental Wins</h2>
        <ul>
          <li><strong>You&apos;re doing a renovation or construction project.</strong> Debris accumulates over days or weeks — load as you go.</li>
          <li><strong>You have a LOT of material.</strong> Multiple truckloads worth? A 30-yard dumpster is hard to beat on price.</li>
          <li><strong>You want to work at your own pace.</strong> Take a weekend (or longer) to sort and load.</li>
          <li><strong>You&apos;re comfortable with physical labor.</strong> You&apos;ll be carrying everything to the dumpster yourself.</li>
        </ul>

        <h2>Cost Comparison by Project</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Project</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Junk Removal</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Dumpster Rental</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Winner</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Garage cleanout</td><td className="border border-gray-200 px-4 py-2">$250–$450</td><td className="border border-gray-200 px-4 py-2">$350–$500</td><td className="border border-gray-200 px-4 py-2 font-bold text-green-700">Junk Removal</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Estate cleanout (whole house)</td><td className="border border-gray-200 px-4 py-2">$800–$2,000</td><td className="border border-gray-200 px-4 py-2">$400–$700</td><td className="border border-gray-200 px-4 py-2 font-bold text-green-700">Dumpster</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Kitchen renovation debris</td><td className="border border-gray-200 px-4 py-2">$300–$600</td><td className="border border-gray-200 px-4 py-2">$350–$500</td><td className="border border-gray-200 px-4 py-2 font-bold text-green-700">Tie</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Single item (sofa, mattress)</td><td className="border border-gray-200 px-4 py-2">$60–$150</td><td className="border border-gray-200 px-4 py-2">$300+ (overkill)</td><td className="border border-gray-200 px-4 py-2 font-bold text-green-700">Junk Removal</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Full home renovation</td><td className="border border-gray-200 px-4 py-2">$1,500+ (multiple trips)</td><td className="border border-gray-200 px-4 py-2">$500–$800/week</td><td className="border border-gray-200 px-4 py-2 font-bold text-green-700">Dumpster</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Decision Flowchart</h2>
        <div className="not-prose bg-primary/5 border border-primary/10 rounded-xl p-6 text-sm leading-relaxed">
          <p className="font-bold mb-3">Answer these questions:</p>
          <ol className="space-y-2 list-decimal pl-5">
            <li><strong>Is this a one-time cleanout?</strong> → Junk removal</li>
            <li><strong>Will debris accumulate over multiple days?</strong> → Dumpster rental</li>
            <li><strong>Can you do the heavy lifting yourself?</strong> No → Junk removal</li>
            <li><strong>Is it more than 2 truckloads?</strong> → Dumpster rental</li>
            <li><strong>Do you need it done today?</strong> → Junk removal</li>
            <li><strong>Is it mostly construction/renovation debris?</strong> → Dumpster rental</li>
          </ol>
          <p className="mt-3 text-gray-600">Still unsure? Get quotes for both. Most companies offer free estimates.</p>
        </div>

        <h2>Can You Combine Both?</h2>
        <p>
          Yes — and it&apos;s more common than you&apos;d think. For a big renovation, rent a dumpster for ongoing construction debris, then call a junk removal crew at the end to handle the random stuff that doesn&apos;t belong in the dumpster (electronics, appliances, donations).
        </p>

        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, i) => (
          <div key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </article>

      <AdSlot position="sidebar" className="max-w-3xl mx-auto px-4 mb-8" />

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Compare Junk Removal Prices in Your City</h2>
          <p className="text-gray-600 mb-4">
            Find top-rated {config.industry.companyNounPlural} near you and get free quotes.
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
