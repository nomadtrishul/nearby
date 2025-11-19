import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Dog Food - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best dog food. Compare top brands, ingredients, and find the perfect food for your dog.',
  keywords: ['best dog food', 'dog food reviews', 'dog food comparison', 'best dog food brands'],
  openGraph: { title: 'Best Dog Food - Reviews & Buying Guide | Nearby Pet Care', description: 'Comprehensive reviews and buying guide for the best dog food.', type: 'article', url: 'https://nearbypetcare.com/pet-products/best-dog-food' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/best-dog-food' },
};

export default function BestDogFoodPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-products" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Products</Link>
            <span className="mx-2">/</span>
            <span>Best Dog Food</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Best Dog Food: Reviews & Buying Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Choosing the right dog food is crucial for your pet's health and wellbeing. This comprehensive guide reviews top dog food brands and helps you select the best option for your dog's specific needs.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Look for in Dog Food</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>High-quality protein as the first ingredient</li>
              <li>Complete and balanced nutrition</li>
              <li>Appropriate for your dog's life stage</li>
              <li>No artificial preservatives or fillers</li>
              <li>AAFCO certification</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Top Dog Food Brands</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We evaluate dog foods based on ingredient quality, nutritional completeness, value, and customer reviews. Consider your dog's age, size, activity level, and any health conditions when selecting food.</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Note:</strong> Always consult with your veterinarian before changing your dog's diet, especially if they have health conditions or special dietary needs.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

