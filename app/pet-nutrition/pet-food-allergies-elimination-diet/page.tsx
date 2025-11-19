import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Food Allergies & Elimination Diet Guide | Nearby Pet Care',
  description: 'Learn how to identify food allergies in pets and safely implement an elimination diet to determine problematic ingredients.',
  keywords: ['pet food allergies', 'dog food allergies', 'cat food allergies', 'elimination diet', 'pet allergy symptoms'],
  openGraph: {
    title: 'Pet Food Allergies & Elimination Diet Guide | Nearby Pet Care',
    description: 'Learn how to identify food allergies in pets and safely implement an elimination diet.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
  },
};

export default function PetFoodAllergiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Pet Food Allergies & Elimination Diet</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Food Allergies & Elimination Diet
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Food allergies in pets can cause various symptoms including skin irritation, digestive issues, and chronic ear infections. An elimination diet is the gold standard for identifying food allergies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Food Allergens in Pets</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Beef</li>
              <li>Dairy products</li>
              <li>Chicken</li>
              <li>Wheat</li>
              <li>Eggs</li>
              <li>Fish</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Implement an Elimination Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Work with your veterinarian to develop a proper elimination diet plan. This typically involves feeding a novel protein and carbohydrate source for 8-12 weeks, then gradually reintroducing ingredients to identify triggers.
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

