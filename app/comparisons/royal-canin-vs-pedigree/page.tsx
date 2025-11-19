import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Royal Canin vs Pedigree - Dog Food Comparison | Nearby Pet Care',
  description: 'Detailed comparison of Royal Canin vs Pedigree dog food. Compare ingredients, nutrition, price, and find which is best for your dog.',
  keywords: ['Royal Canin vs Pedigree', 'dog food comparison', 'Royal Canin review', 'Pedigree review'],
  openGraph: { title: 'Royal Canin vs Pedigree - Dog Food Comparison | Nearby Pet Care', description: 'Detailed comparison of Royal Canin vs Pedigree dog food.', type: 'article', url: 'https://nearbypetcare.com/comparisons/royal-canin-vs-pedigree' },
  alternates: { canonical: 'https://nearbypetcare.com/comparisons/royal-canin-vs-pedigree' },
};

export default function RoyalCaninVsPedigreePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/comparisons" className="hover:text-blue-600 dark:hover:text-blue-400">Comparisons</Link>
            <span className="mx-2">/</span>
            <span>Royal Canin vs Pedigree</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Royal Canin vs Pedigree: Dog Food Comparison</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Compare Royal Canin and Pedigree dog food side-by-side. This detailed comparison examines ingredients, nutrition, price, and suitability for different dogs.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Royal Canin Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Royal Canin offers breed-specific and health-focused formulas with precise nutrition. Known for veterinary-recommended formulas and specialized diets for specific health conditions.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pedigree Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Pedigree is a widely available, budget-friendly option with a focus on complete nutrition. Offers various formulas for different life stages and sizes.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Differences</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Price point and value</li>
              <li>Ingredient quality and sourcing</li>
              <li>Specialized formulas available</li>
              <li>Veterinary recommendations</li>
              <li>Availability and accessibility</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Consider your dog's specific needs, your budget, and consult with your veterinarian when choosing between these brands.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/comparisons" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Comparisons</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

