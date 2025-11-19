import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Pet Food Ingredients Guide - What to Look For | Nearby Pet Care',
  description: 'Complete guide to understanding pet food ingredients. Learn what to look for and avoid when choosing pet food for optimal health and nutrition.',
  keywords: ['pet food ingredients', 'dog food ingredients', 'cat food ingredients', 'pet food quality', 'pet nutrition ingredients'],
  openGraph: {
    title: 'Best Pet Food Ingredients Guide - What to Look For | Nearby Pet Care',
    description: 'Complete guide to understanding pet food ingredients. Learn what to look for and avoid when choosing pet food.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/best-pet-food-ingredients-guide',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best Pet Food Ingredients Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pet Food Ingredients Guide - What to Look For | Nearby Pet Care',
    description: 'Complete guide to understanding pet food ingredients. Learn what to look for and avoid when choosing pet food.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/best-pet-food-ingredients-guide',
  },
};

export default function BestPetFoodIngredientsGuidePage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Best Pet Food Ingredients Guide', item: 'https://nearbypetcare.com/pet-nutrition/best-pet-food-ingredients-guide' },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Best Pet Food Ingredients Guide</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Best Pet Food Ingredients Guide
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Understanding pet food ingredients is crucial for making informed decisions about your pet's nutrition. This comprehensive guide will help you identify high-quality ingredients and avoid potentially harmful ones.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">High-Quality Protein Sources</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look for named protein sources like chicken, beef, fish, or lamb as the first ingredient. Avoid generic terms like "meat meal" or "animal by-products" which can be less nutritious.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ingredients to Avoid</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Artificial colors and flavors</li>
              <li>BHA, BHT, and ethoxyquin preservatives</li>
              <li>Generic meat by-products</li>
              <li>Excessive fillers like corn and wheat</li>
              <li>Added sugars and sweeteners</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Reading Pet Food Labels</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ingredients are listed by weight, so the first few ingredients make up the majority of the food. Look for whole foods and named protein sources at the top of the list.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/pet-nutrition"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Pet Nutrition Guides
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

