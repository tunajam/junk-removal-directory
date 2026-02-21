import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `What Can (and Can't) Junk Removal Companies Haul? | ${config.name}`,
  description: 'Complete guide to what junk removal services will and won\'t pick up. Know before you book — from furniture and appliances to hazardous materials.',
};

export default function WhatCanBeHauledPage() {
  return (
    <>
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog" className="hover:underline">Blog</Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">What Can (and Can&apos;t) Junk Removal Companies Haul?</h1>
          <p className="text-white/70 mt-2">Updated January 2025 • 6 min read</p>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray prose-headings:text-primary">
          <p className="lead text-lg text-gray-600">
            Before you book a junk removal service, it helps to know what they&apos;ll actually take. Most companies handle a wide range of household and commercial items, but there are important exceptions — especially around hazardous materials and certain regulated items.
          </p>

          <h2>✅ What Most Junk Removal Companies WILL Take</h2>

          <h3>Furniture</h3>
          <p>Couches, mattresses, bed frames, desks, tables, chairs, dressers, bookshelves, entertainment centers — basically anything you&apos;d find in a home. This is the bread and butter of junk removal.</p>

          <h3>Appliances</h3>
          <p>Refrigerators, washers, dryers, ovens, dishwashers, microwaves, and water heaters. Most haulers handle Freon-containing appliances (they&apos;re certified for safe disposal).</p>

          <h3>Electronics</h3>
          <p>TVs, monitors, computers, printers, stereos, and other e-waste. Many companies partner with recycling centers to keep electronics out of landfills.</p>

          <h3>Yard Waste</h3>
          <p>Branches, leaves, brush, soil, sod, and landscape debris. Some companies also handle hot tub removal and shed demolition.</p>

          <h3>Construction Debris</h3>
          <p>Drywall, lumber, tile, carpet, flooring, cabinets, and renovation debris. Great for post-remodel cleanups.</p>

          <h3>General Household Items</h3>
          <p>Clothing, toys, boxes, books, sporting equipment, bicycles, grills, and general clutter. If it&apos;s non-hazardous and you can point to it, they&apos;ll probably take it.</p>

          <h3>Specialty Items</h3>
          <ul>
            <li>Pianos</li>
            <li>Pool tables</li>
            <li>Exercise equipment</li>
            <li>Tires (some companies charge extra)</li>
            <li>Scrap metal</li>
          </ul>

          <h2>🚫 What Most Companies WON&apos;T Take</h2>

          <h3>Hazardous Materials</h3>
          <p>This is the big one. Most junk removal companies cannot legally haul:</p>
          <ul>
            <li><strong>Paints, stains, and solvents</strong> — Take to your local HHW (Household Hazardous Waste) facility</li>
            <li><strong>Chemicals and pesticides</strong> — Requires special disposal</li>
            <li><strong>Asbestos</strong> — Needs licensed asbestos abatement</li>
            <li><strong>Oil, gasoline, and automotive fluids</strong> — Auto parts stores often accept these for free</li>
            <li><strong>Propane tanks</strong> — Exchange at hardware stores or take to HHW</li>
            <li><strong>Medical waste</strong> — Sharps, biohazard materials need specialized disposal</li>
            <li><strong>Ammunition and explosives</strong> — Contact your local police department</li>
          </ul>

          <h3>Items That Vary by Company</h3>
          <p>Some companies will handle these, others won&apos;t. Always ask first:</p>
          <ul>
            <li>Batteries (especially car batteries)</li>
            <li>Fluorescent tubes and bulbs</li>
            <li>Refrigerants / Freon appliances</li>
            <li>Large amounts of concrete or brick</li>
            <li>Dirt, gravel, or heavy fill material</li>
          </ul>

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 my-8">
            <p className="text-accent-dark font-medium mb-1">💡 Pro Tip</p>
            <p className="text-sm text-gray-700">When in doubt, call ahead. Send the company a photo of what you need removed — most will give you a quick yes/no and a ballpark price over text or email.</p>
          </div>

          <h2>What About Donation?</h2>
          <p>Many junk removal companies will sort your items and donate what&apos;s still usable. Companies like 1-800-GOT-JUNK? and LoadUp actively partner with local charities. This is worth asking about — it&apos;s good for the environment and you may get a tax receipt.</p>

          <h2>Bottom Line</h2>
          <p>Junk removal companies handle the vast majority of household and commercial items. The main exceptions are hazardous materials and regulated waste. When in doubt, call ahead with a description or photo — a good hauler will tell you exactly what they can and can&apos;t take.</p>

          <div className="bg-primary text-white rounded-xl p-8 text-center mt-10 not-prose">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Rid of Your Junk?</h3>
            <p className="text-white/70 mb-6">Compare prices from trusted local haulers.</p>
            <Link href="/" className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition-colors">
              Get Free Junk Removal Quotes →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
