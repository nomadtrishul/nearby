import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Dog Food for Small Breeds - Buying Guide | Nearby Pet Care',
  description: 'Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog.',
  keywords: ['best dog food small breeds', 'small dog food', 'small breed dog food', 'dog food small dogs'],
  openGraph: { title: 'Best Dog Food for Small Breeds | Nearby Pet Care', description: 'Complete buying guide for the best dog food for small breeds.', type: 'article', url: 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds' },
  alternates: { canonical: 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds' },
};

export default function BestDogFoodSmallBreedsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/buying-guides" className="hover:text-blue-600 dark:hover:text-blue-400">Buying Guides</Link>
            <span className="mx-2">/</span>
            <span>Best Dog Food for Small Breeds</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Best Dog Food for Small Breeds</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Small breed dogs have unique nutritional needs. This buying guide helps you find the best dog food specifically formulated for small breeds, considering their higher metabolism and smaller kibble size requirements.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Small Breeds Need Special Food</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Higher metabolism requires more calories per pound</li>
              <li>Smaller kibble size for easier chewing</li>
              <li>Dense nutrition in smaller portions</li>
              <li>Dental health considerations</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Look For</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Choose foods with high-quality protein, appropriate kibble size, calorie-dense formulas, and ingredients that support dental health. Consider your small dog's age, activity level, and any health conditions.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/buying-guides" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Buying Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

