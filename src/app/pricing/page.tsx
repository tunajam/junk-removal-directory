import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `Junk Removal Pricing Guide — Typical Costs by Item | ${config.name}`,
  description: 'See typical junk removal prices by item type. From single furniture pieces to full house cleanouts, know what to expect before you call.',
};

const pricingData = [
  { category: 'Furniture', items: [
    { item: 'Couch / Sofa', range: '$75–$200' },
    { item: 'Mattress', range: '$50–$150' },
    { item: 'Dining Table & Chairs', range: '$100–$200' },
    { item: 'Recliner / Armchair', range: '$50–$150' },
    { item: 'Desk / Office Furniture', range: '$75–$175' },
    { item: 'Dresser / Wardrobe', range: '$75–$200' },
  ]},
  { category: 'Appliances', items: [
    { item: 'Refrigerator', range: '$75–$200' },
    { item: 'Washer or Dryer', range: '$75–$175' },
    { item: 'Dishwasher', range: '$50–$125' },
    { item: 'Oven / Stove', range: '$75–$175' },
    { item: 'Water Heater', range: '$75–$200' },
    { item: 'AC Unit / Window Unit', range: '$50–$150' },
  ]},
  { category: 'Yard Waste', items: [
    { item: 'Tree Branches (pickup load)', range: '$100–$250' },
    { item: 'Lawn Debris / Leaves', range: '$75–$200' },
    { item: 'Hot Tub', range: '$200–$600' },
    { item: 'Shed Demolition & Removal', range: '$300–$800' },
    { item: 'Fence Removal', range: '$200–$500' },
  ]},
  { category: 'Construction Debris', items: [
    { item: 'Drywall / Sheetrock', range: '$150–$400' },
    { item: 'Carpet & Padding', range: '$100–$300' },
    { item: 'Tile / Flooring', range: '$150–$400' },
    { item: 'Lumber / Wood', range: '$100–$300' },
    { item: 'Concrete / Brick (per yard)', range: '$200–$500' },
  ]},
  { category: 'Whole-Home Services', items: [
    { item: 'Garage Cleanout', range: '$200–$600' },
    { item: 'Basement Cleanout', range: '$300–$800' },
    { item: 'Estate Cleanout', range: '$500–$2,500' },
    { item: 'Hoarding Cleanup', range: '$1,000–$5,000+' },
    { item: 'Full House Cleanout', range: '$800–$3,000+' },
  ]},
  { category: 'Electronics & Misc', items: [
    { item: 'TV / Monitor', range: '$25–$75' },
    { item: 'Computer / Printer', range: '$25–$50' },
    { item: 'Tires (each)', range: '$15–$35' },
    { item: 'Piano', range: '$200–$500' },
    { item: 'Exercise Equipment', range: '$75–$250' },
  ]},
];

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Junk Removal Pricing Guide — Typical Costs by Item Type',
    description: metadata.description,
    publisher: { '@type': 'Organization', name: config.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/" className="hover:underline">Home</Link> / Pricing Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">Junk Removal Pricing Guide</h1>
          <p className="text-white/70 mt-2">Typical costs by item type — updated for 2025</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-8">
            <p className="text-sm text-accent-dark">
              <strong>💡 Note:</strong> Prices vary by location, company, and volume. These are national averages based on market data. 
              Always get 2–3 quotes for the best deal.
            </p>
          </div>

          <div className="space-y-10">
            {pricingData.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-primary mb-4">{cat.category}</h2>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Item</th>
                        <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">Typical Price Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.items.map((item, i) => (
                        <tr key={item.item} className={i % 2 ? 'bg-gray-50' : ''}>
                          <td className="px-4 py-3 text-gray-800">{item.item}</td>
                          <td className="px-4 py-3 text-right font-semibold text-primary">{item.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get Free Junk Removal Quotes</h2>
            <p className="text-white/70 mb-6">Compare prices from trusted local haulers in your area.</p>
            <Link
              href="/"
              className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition-colors"
            >
              Find Haulers Near You →
            </Link>
          </div>

          <div className="mt-12 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-primary">What Affects Junk Removal Cost?</h2>
            <ul className="text-gray-700 space-y-2 mt-4">
              <li><strong>Volume:</strong> Most companies price by the truckload. A full truck costs $400–$800 on average.</li>
              <li><strong>Weight:</strong> Heavy items like concrete, dirt, or pianos cost more due to disposal fees.</li>
              <li><strong>Location:</strong> Urban areas tend to have more competition and lower prices.</li>
              <li><strong>Accessibility:</strong> Items on upper floors, in tight spaces, or requiring disassembly cost extra.</li>
              <li><strong>Hazardous materials:</strong> Paint, chemicals, and certain electronics require special disposal (higher cost).</li>
              <li><strong>Minimum charges:</strong> Most companies have a minimum fee of $75–$150, even for small pickups.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8">Tips to Save on Junk Removal</h2>
            <ol className="text-gray-700 space-y-2 mt-4">
              <li>Get at least 3 quotes — prices vary significantly between companies.</li>
              <li>Bundle items for a full load discount instead of multiple small pickups.</li>
              <li>Move items to ground level / curbside before the truck arrives.</li>
              <li>Ask about donation credits — some haulers offer discounts for donatable items.</li>
              <li>Book mid-week for potentially lower rates (weekends are busiest).</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
