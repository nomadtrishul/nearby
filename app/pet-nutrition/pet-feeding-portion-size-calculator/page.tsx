import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Feeding Portion Size Calculator | Nearby Pet Care',
  description: 'Calculate the right portion sizes for your pet based on weight, age, activity level, and health status. Ensure optimal nutrition and weight management.',
  keywords: ['pet portion calculator', 'dog food calculator', 'cat food calculator', 'pet feeding calculator', 'pet portion size'],
  openGraph: {
    title: 'Pet Feeding Portion Size Calculator | Nearby Pet Care',
    description: 'Calculate the right portion sizes for your pet based on weight, age, and activity level.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-portion-size-calculator',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-portion-size-calculator',
  },
};

export default function PetFeedingPortionCalculatorPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Pet Feeding Portion Size Calculator</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Feeding Portion Size Calculator
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Determining the right portion size for your pet is crucial for maintaining optimal weight and health. This calculator helps you determine appropriate feeding amounts based on your pet's specific needs.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Portion Size Factors</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Current weight and ideal weight</li>
                <li>Age and life stage</li>
                <li>Activity level</li>
                <li>Neutering status</li>
                <li>Health conditions</li>
                <li>Food type and calorie content</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Always refer to your pet food's feeding guidelines and consult with your veterinarian for personalized recommendations, especially if your pet has special dietary needs or health conditions.
            </p>
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

