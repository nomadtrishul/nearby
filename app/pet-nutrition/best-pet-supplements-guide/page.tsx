import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Pet Supplements Guide - Omega-3, Probiotics & More | Nearby Pet Care',
  description: 'Learn about essential supplements for pets including omega-3 fatty acids, probiotics, vitamins, and minerals. When and why to supplement your pet\'s diet.',
  keywords: ['pet supplements', 'dog supplements', 'cat supplements', 'omega 3 for pets', 'pet probiotics', 'pet vitamins'],
  openGraph: {
    title: 'Best Pet Supplements Guide | Nearby Pet Care',
    description: 'Learn about essential supplements for pets including omega-3, probiotics, and vitamins.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/best-pet-supplements-guide',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/best-pet-supplements-guide',
  },
};

export default function BestPetSupplementsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Best Pet Supplements Guide</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Best Pet Supplements Guide
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              While a balanced diet should provide most nutrients, certain supplements can benefit pets in specific situations. Learn which supplements may be beneficial and when to use them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Pet Supplements</h2>
            <div className="space-y-6 mb-6">
              {[
                { name: 'Omega-3 Fatty Acids', benefits: 'Skin and coat health, anti-inflammatory, brain development', source: 'Fish oil, flaxseed' },
                { name: 'Probiotics', benefits: 'Digestive health, immune support, gut microbiome balance', source: 'Fermented foods, supplements' },
                { name: 'Glucosamine & Chondroitin', benefits: 'Joint health, arthritis support, mobility', source: 'Supplements, natural sources' },
                { name: 'Multivitamins', benefits: 'Fill nutritional gaps, support overall health', source: 'Commercial supplements' },
              ].map((supplement, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{supplement.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Benefits:</strong> {supplement.benefits}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Sources:</strong> {supplement.source}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Always consult with your veterinarian before adding supplements to your pet's diet, as some can interact with medications or cause issues if over-supplemented.
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

