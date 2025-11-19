import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Cat Litter for Odour Control - Buying Guide | Nearby Pet Care',
  description: 'Complete buying guide for the best cat litter for odour control. Compare top brands and find the most effective odour-controlling litter.',
  keywords: ['best cat litter odour control', 'odor control cat litter', 'best smelling cat litter', 'cat litter odor'],
  openGraph: { title: 'Best Cat Litter for Odour Control | Nearby Pet Care', description: 'Complete buying guide for the best cat litter for odour control.', type: 'article', url: 'https://nearbypetcare.com/buying-guides/best-litter-for-odour-control' },
  alternates: { canonical: 'https://nearbypetcare.com/buying-guides/best-litter-for-odour-control' },
};

export default function BestLitterOdourControlPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/buying-guides" className="hover:text-blue-600 dark:hover:text-blue-400">Buying Guides</Link>
            <span className="mx-2">/</span>
            <span>Best Litter for Odour Control</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Best Cat Litter for Odour Control</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Effective odour control is essential for maintaining a fresh-smelling home. This buying guide reviews the best cat litters for odour control, comparing different types and technologies.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Types of Odour-Controlling Litter</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Clumping clay with odour-absorbing agents</li>
              <li>Silica gel crystals (excellent odour control)</li>
              <li>Natural litters with baking soda or charcoal</li>
              <li>Scented vs. unscented options</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Consider</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Consider factors like clumping ability, dust levels, your cat's preferences, and how long odour control lasts. Regular scooping and litter box maintenance are also crucial for odour control.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/buying-guides" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Buying Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

