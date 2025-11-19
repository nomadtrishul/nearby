import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Cat Litter - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best cat litter. Compare clumping, non-clumping, and specialty litters to find the perfect option.',
  keywords: ['best cat litter', 'cat litter reviews', 'cat litter comparison', 'best cat litter brands'],
  openGraph: { title: 'Best Cat Litter - Reviews & Buying Guide | Nearby Pet Care', description: 'Comprehensive reviews and buying guide for the best cat litter.', type: 'article', url: 'https://nearbypetcare.com/pet-products/best-cat-litter' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/best-cat-litter' },
};

export default function BestCatLitterPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-products" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Products</Link>
            <span className="mx-2">/</span>
            <span>Best Cat Litter</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Best Cat Litter: Reviews & Buying Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Choosing the right cat litter is essential for your cat's comfort and your home's cleanliness. This guide reviews different types of cat litter and helps you find the best option.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Types of Cat Litter</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Clumping clay litter</li>
              <li>Non-clumping clay litter</li>
              <li>Silica gel crystals</li>
              <li>Natural/biodegradable litter (corn, wheat, pine)</li>
              <li>Recycled paper litter</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Consider</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Consider factors like odor control, dust levels, tracking, clumping ability, and your cat's preferences. Some cats are sensitive to scented litters or certain textures.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

