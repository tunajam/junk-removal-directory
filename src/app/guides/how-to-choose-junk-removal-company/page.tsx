import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'How to Choose a Junk Removal Company (2026 Guide)';
const description = 'What to look for in a junk removal company — licensing, insurance, eco-friendly disposal, pricing red flags, and the right questions to ask before hiring.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'Do junk removal companies need a license?', a: 'Yes. Most cities and states require junk haulers to hold a business license and sometimes a specific waste hauler permit. Always ask for proof before hiring.' },
  { q: 'What insurance should a junk removal company carry?', a: 'At minimum, general liability insurance ($1M+) and workers\' compensation. This protects you if something gets damaged during the job or a worker is injured on your property.' },
  { q: 'How do I know if a junk removal company is eco-friendly?', a: 'Ask what percentage of items they recycle or donate vs. send to landfill. Reputable companies will tell you their diversion rate and name the facilities they use.' },
  { q: 'What are red flags when hiring a junk hauler?', a: 'Watch for: no written estimate, cash-only payments, no insurance documentation, unmarked trucks, prices far below market rate, and pressure to book immediately.' },
  { q: 'How much does junk removal typically cost?', a: 'Most jobs run $150–$600 depending on volume. A single item might be $60–$150, while a full truckload averages $400–$600. Always get at least three quotes.' },
];

export default function HowToChooseJunkRemovalCompany() {
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
          <p className="text-white/60 mt-2 text-sm">February 2026 · 12 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          Hiring the wrong junk removal company means damaged property, illegal dumping, or a bill twice what you expected. This guide covers exactly what to check so you hire right the first time.
        </p>

        <h2>1. Verify Licensing &amp; Permits</h2>
        <p>
          Every legitimate junk removal company needs a business license at minimum. Many municipalities also require a specific waste hauler or transporter permit. Don&apos;t take their word for it — ask for the license number and verify it with your city or county clerk&apos;s office.
        </p>
        <p>
          Companies operating without permits may dump illegally, which can create liability for <em>you</em> as the property owner in some jurisdictions.
        </p>

        <h2>2. Confirm Insurance Coverage</h2>
        <p>Look for two types of insurance:</p>
        <ul>
          <li><strong>General liability ($1M minimum)</strong> — covers damage to your property, landscaping, or belongings during the job</li>
          <li><strong>Workers&apos; compensation</strong> — covers injuries to crew members on your property. Without this, you could be liable.</li>
        </ul>
        <p>Ask for a Certificate of Insurance (COI). Any company that hesitates isn&apos;t worth your time.</p>

        <h2>3. Ask About Eco-Friendly Disposal</h2>
        <p>
          A good hauler doesn&apos;t just dump everything in a landfill. Ask these questions:
        </p>
        <ul>
          <li>What percentage of items do you recycle or donate?</li>
          <li>Which recycling facilities and donation centers do you use?</li>
          <li>Do you handle hazardous materials (paint, chemicals, electronics)?</li>
          <li>Can you provide a post-job breakdown of where items went?</li>
        </ul>
        <p>
          Top-tier companies divert 60–80% of items from landfills. If they can&apos;t answer these questions, they&apos;re likely dumping everything.
        </p>

        <h2>4. Get a Written, On-Site Estimate</h2>
        <p>
          Never accept a phone-only quote. Reputable companies send someone to see the job in person (or do a video call at minimum) before quoting a price. The estimate should include:
        </p>
        <ul>
          <li>Total price (not &quot;starting at&quot;)</li>
          <li>What&apos;s included (labor, loading, disposal fees, taxes)</li>
          <li>Any potential add-on charges clearly listed</li>
          <li>Timeline and cancellation policy</li>
        </ul>

        <h2>5. Pricing Red Flags</h2>
        <p>Watch out for these warning signs:</p>
        <ul>
          <li><strong>Cash-only payments</strong> — makes disputes impossible and suggests they&apos;re avoiding taxes</li>
          <li><strong>Prices far below competitors</strong> — usually means illegal dumping or hidden fees that appear later</li>
          <li><strong>Vague &quot;starting at&quot; quotes</strong> — real prices should be based on your actual items</li>
          <li><strong>Large upfront deposits</strong> — standard is either no deposit or a small booking fee</li>
          <li><strong>No written contract</strong> — if it&apos;s not on paper, it doesn&apos;t exist</li>
        </ul>

        <h2>6. Check Reviews the Right Way</h2>
        <p>
          Don&apos;t just look at the star rating. Read the negative reviews and see how the company responded. Look for patterns: repeated mentions of surprise charges, property damage, or no-shows are deal-breakers.
        </p>
        <p>
          Cross-reference Google Reviews, Yelp, and the BBB. If a company only has reviews on one platform, that&apos;s suspicious.
        </p>

        <h2>7. Questions to Ask Before Hiring</h2>
        <ol>
          <li>Are you licensed and insured? Can I see proof?</li>
          <li>How do you determine pricing — by volume, weight, or item?</li>
          <li>What happens if the job takes longer than expected?</li>
          <li>Do you recycle or donate usable items?</li>
          <li>What&apos;s your cancellation/rescheduling policy?</li>
          <li>Will the price change if there&apos;s more junk than expected?</li>
          <li>How soon can you complete the job?</li>
        </ol>

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
            Find licensed, insured {config.industry.companyNounPlural} near you and compare quotes.
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
