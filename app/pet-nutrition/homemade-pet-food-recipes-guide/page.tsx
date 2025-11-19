import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Homemade Pet Food Recipes - Safe & Nutritious | Nearby Pet Care',
  description: 'Safe and nutritious homemade pet food recipes with proper nutritional guidelines. Learn how to prepare balanced meals for your pets at home.',
  keywords: ['homemade pet food', 'dog food recipes', 'cat food recipes', 'homemade pet meals', 'pet food recipes'],
  openGraph: {
    title: 'Homemade Pet Food Recipes - Safe & Nutritious | Nearby Pet Care',
    description: 'Safe and nutritious homemade pet food recipes with proper nutritional guidelines.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
  },
};

export default function HomemadePetFoodRecipesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Homemade Pet Food Recipes</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Homemade Pet Food Recipes Guide
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Preparing homemade pet food can be a great way to ensure your pet receives high-quality, fresh ingredients. However, it's essential to follow proper nutritional guidelines to maintain a balanced diet.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Always consult with a veterinarian or veterinary nutritionist before switching to homemade pet food to ensure your pet receives all necessary nutrients.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Nutrients for Homemade Pet Food</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A balanced homemade diet must include proper proportions of protein, carbohydrates, fats, vitamins, and minerals. Each pet species has different requirements.
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

