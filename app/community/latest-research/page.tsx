import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Latest Pet Care Research | Nearby Pet Care',
  description: 'Stay updated with the latest pet care research and scientific findings. Evidence-based information about pet health and wellness.',
  keywords: ['pet care research', 'pet health research', 'veterinary research', 'pet science'],
  openGraph: { title: 'Latest Pet Care Research | Nearby Pet Care', description: 'Stay updated with the latest pet care research and scientific findings.', type: 'article', url: 'https://nearbypetcare.com/community/latest-research' },
  alternates: { canonical: 'https://nearbypetcare.com/community/latest-research' },
};

export default function LatestResearchPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400">Community</Link>
            <span className="mx-2">/</span>
            <span>Latest Research</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Latest Pet Care Research</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Stay informed with the latest research and scientific findings in pet care. We share evidence-based information from veterinary journals and research institutions to help you make informed decisions about your pet's health.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Research Topics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Pet nutrition and diet research</li>
              <li>Behavioral studies</li>
              <li>Disease prevention and treatment</li>
              <li>Veterinary medicine advances</li>
              <li>Pet wellness and longevity</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We regularly update this section with new research findings, translating complex scientific studies into practical information for pet owners.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/community" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Community</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

