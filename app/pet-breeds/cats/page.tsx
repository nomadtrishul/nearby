import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cat Breeds Guide | Nearby Pet Care',
  description: 'Comprehensive guide to cat breeds. Learn about different cat breeds, their characteristics, temperament, and care requirements.',
  keywords: ['cat breeds', 'cat breed guide', 'cat breed information', 'cat characteristics'],
  openGraph: { title: 'Cat Breeds Guide | Nearby Pet Care', description: 'Comprehensive guide to cat breeds and their characteristics.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats' },
};

export default function CatBreedsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-breeds" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Breeds</Link>
            <span className="mx-2">/</span>
            <span>Cat Breeds</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Cat Breeds Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Explore different cat breeds and learn about their unique characteristics, temperament, grooming needs, and care requirements. Each breed has distinct traits that may suit different lifestyles.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Cat Breeds</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">From long-haired Persians to short-haired Siamese, cat breeds vary widely in appearance, personality, and care needs. Consider factors like activity level, grooming requirements, and temperament.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

