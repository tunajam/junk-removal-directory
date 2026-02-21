import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `Eco-Friendly Junk Disposal: How to Get Rid of Stuff Responsibly | ${config.name}`,
  description: 'Learn how to dispose of junk responsibly. From recycling and donation to choosing green haulers, here\'s how to reduce your environmental impact.',
};

export default function EcoFriendlyDisposalPage() {
  return (
    <>
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog" className="hover:underline">Blog</Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">Eco-Friendly Junk Disposal: Getting Rid of Stuff Responsibly</h1>
          <p className="text-white/70 mt-2">Updated January 2025 • 5 min read</p>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray prose-headings:text-primary">
          <p className="lead text-lg text-gray-600">
            The average American generates about 4.4 pounds of trash per day. When it comes time for a big cleanout, where your junk ends up matters. Here&apos;s how to dispose of items responsibly — and why choosing the right hauler makes a difference.
          </p>

          <h2>The Disposal Hierarchy</h2>
          <p>Think of it as a priority list, from most to least preferred:</p>
          <ol>
            <li><strong>Reuse / Repurpose</strong> — Can someone else use it as-is?</li>
            <li><strong>Donate</strong> — Charities, shelters, thrift stores</li>
            <li><strong>Recycle</strong> — Metals, electronics, cardboard, certain plastics</li>
            <li><strong>Compost</strong> — Yard waste, untreated wood</li>
            <li><strong>Landfill</strong> — Last resort for items that can&apos;t be diverted</li>
          </ol>

          <h2>What Can Be Recycled?</h2>
          <ul>
            <li><strong>Metals:</strong> Scrap metal, appliances, aluminum — often accepted for free or even paid</li>
            <li><strong>Electronics:</strong> TVs, computers, phones — e-waste recyclers keep toxic materials out of landfills</li>
            <li><strong>Cardboard & Paper:</strong> Curbside or recycling center</li>
            <li><strong>Mattresses:</strong> Specialized mattress recyclers can divert 80–90% of materials</li>
            <li><strong>Tires:</strong> Tire retailers and recycling facilities</li>
            <li><strong>Concrete & Brick:</strong> Construction recycling facilities crush and reuse</li>
          </ul>

          <h2>Where to Donate</h2>
          <p>Before you call a hauler, consider whether items are still usable:</p>
          <ul>
            <li><strong>Habitat for Humanity ReStore</strong> — Accepts furniture, appliances, building materials</li>
            <li><strong>Goodwill / Salvation Army</strong> — Clothing, housewares, furniture</li>
            <li><strong>Local shelters</strong> — Often need beds, linens, kitchen supplies</li>
            <li><strong>Buy Nothing groups</strong> — Facebook groups for hyperlocal giving</li>
            <li><strong>Freecycle</strong> — Online platform for giving away usable items</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-8">
            <p className="text-green-800 font-medium mb-1">🌱 Green Hauler Checklist</p>
            <p className="text-sm text-green-700">When choosing a junk removal company, ask:</p>
            <ul className="text-sm text-green-700 mt-2">
              <li>What percentage of items do you divert from landfills?</li>
              <li>Do you sort for recycling and donation?</li>
              <li>Do you partner with local charities?</li>
              <li>Can you provide a donation receipt for tax purposes?</li>
            </ul>
          </div>

          <h2>How Green Haulers Operate</h2>
          <p>The best junk removal companies don&apos;t just dump everything in a landfill. Here&apos;s what responsible haulers do:</p>
          <ol>
            <li><strong>Sort on-site or at their facility</strong> — Separating recyclables, donatables, and actual trash</li>
            <li><strong>Partner with recyclers</strong> — Metals go to scrap yards, electronics to e-waste facilities</li>
            <li><strong>Donate usable items</strong> — Furniture, clothing, and household goods go to charities</li>
            <li><strong>Track diversion rates</strong> — Good companies know their numbers (aim for 60%+ diversion)</li>
          </ol>

          <h2>DIY Eco-Friendly Disposal Tips</h2>
          <ul>
            <li>Check your city&apos;s bulk pickup schedule — many offer free curbside collection</li>
            <li>Use Earth911.com to find local recycling options for specific items</li>
            <li>Host a garage sale or list items on Facebook Marketplace before trashing</li>
            <li>Compost yard waste instead of sending it to landfill</li>
            <li>Take hazardous materials to your local HHW (Household Hazardous Waste) drop-off</li>
          </ul>

          <h2>The Impact</h2>
          <p>According to the EPA, about 75% of waste is recyclable, but only about 30% actually gets recycled. By choosing a responsible junk removal company and taking a few extra steps to sort your items, you can significantly reduce your environmental footprint.</p>

          <div className="bg-primary text-white rounded-xl p-8 text-center mt-10 not-prose">
            <h3 className="text-2xl font-bold mb-3">Find Eco-Friendly Junk Removal Near You</h3>
            <p className="text-white/70 mb-6">Compare haulers that prioritize recycling and donation.</p>
            <Link href="/" className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition-colors">
              Get Free Junk Removal Quotes →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
