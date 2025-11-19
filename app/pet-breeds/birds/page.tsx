import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bird Pets Guide | Nearby Pet Care',
  description: 'Guide to pet birds including parrots, canaries, finches, and more. Learn about bird care, housing, and health.',
  keywords: ['pet birds', 'parrots', 'canaries', 'bird care', 'pet bird guide'],
  openGraph: { title: 'Bird Pets Guide | Nearby Pet Care', description: 'Guide to pet birds and their care requirements.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/birds' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/birds' },
};

export default function BirdsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-breeds" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Breeds</Link>
            <span className="mx-2">/</span>
            <span>Birds</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Bird Pets Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Birds make intelligent and social pets. Learn about different bird species, their care requirements, housing needs, and health considerations.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Pet Birds</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Parrots (various species)</li>
              <li>Canaries</li>
              <li>Finches</li>
              <li>Cockatiels</li>
              <li>Budgies</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

