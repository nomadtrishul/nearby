import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Raw vs Cooked Pet Diet - Pros & Cons | Nearby Pet Care',
  description: 'Compare raw and cooked diets for pets with science-backed information. Learn the pros, cons, and safety considerations for each approach.',
  keywords: ['raw pet food', 'cooked pet food', 'raw diet for pets', 'BARF diet', 'pet diet comparison'],
  openGraph: {
    title: 'Raw vs Cooked Pet Diet - Pros & Cons | Nearby Pet Care',
    description: 'Compare raw and cooked diets for pets with science-backed information.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
  },
};

export default function RawVsCookedDietPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Raw vs Cooked Pet Diet</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Raw vs Cooked Pet Diet: Pros & Cons
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              The debate between raw and cooked diets for pets continues among pet owners and veterinarians. This guide examines the scientific evidence, benefits, and risks of each approach.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Raw Diet (BARF) Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Pros</h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Natural, unprocessed ingredients</li>
                  <li>May improve coat condition</li>
                  <li>Higher moisture content</li>
                  <li>No artificial preservatives</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Cons</h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Risk of bacterial contamination</li>
                  <li>Nutritional imbalances if not properly formulated</li>
                  <li>Higher cost</li>
                  <li>Requires careful handling</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cooked Diet Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Pros</h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Reduced risk of pathogens</li>
                  <li>Easier to digest for some pets</li>
                  <li>More convenient preparation</li>
                  <li>Better nutrient absorption in some cases</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Cons</h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>May lose some nutrients during cooking</li>
                  <li>Requires proper formulation</li>
                  <li>Time-consuming to prepare</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Consult with a veterinary nutritionist before switching to a raw or cooked diet to ensure your pet receives balanced nutrition.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-nutrition" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Pet Nutrition Guides
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

