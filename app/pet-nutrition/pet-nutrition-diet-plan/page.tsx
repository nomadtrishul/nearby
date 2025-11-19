import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Nutrition Diet Plan - Complete Guide | Nearby Pet Care',
  description: 'Learn how to create a comprehensive nutrition plan tailored to your pet\'s specific needs, age, breed, and lifestyle. Expert guidance on pet diet planning.',
  keywords: ['pet diet plan', 'pet nutrition plan', 'dog diet plan', 'cat diet plan', 'pet meal planning', 'pet nutrition guide'],
  openGraph: {
    title: 'Pet Nutrition Diet Plan - Complete Guide | Nearby Pet Care',
    description: 'Learn how to create a comprehensive nutrition plan tailored to your pet\'s specific needs, age, and lifestyle.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-nutrition-diet-plan',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Nutrition Diet Plan Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Nutrition Diet Plan - Complete Guide | Nearby Pet Care',
    description: 'Learn how to create a comprehensive nutrition plan tailored to your pet\'s specific needs, age, and lifestyle.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/pet-nutrition-diet-plan',
  },
};

export default function PetNutritionDietPlanPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Pet Nutrition Diet Plan', item: 'https://nearbypetcare.com/pet-nutrition/pet-nutrition-diet-plan' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Nutrition Diet Plan - Complete Guide',
    description: 'Learn how to create a comprehensive nutrition plan tailored to your pet\'s specific needs.',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-nutrition-diet-plan',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Nutrition', href: '/pet-nutrition' },
            { name: 'Pet Nutrition Diet Plan', href: '/pet-nutrition/pet-nutrition-diet-plan' }
          ]} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Nutrition Diet Plan: Complete Guide
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Creating a comprehensive nutrition plan for your pet is essential for their long-term health and wellbeing. This guide will help you understand how to develop a diet plan tailored to your pet's specific needs, age, breed, and lifestyle.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Your Pet's Nutritional Needs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every pet has unique nutritional requirements based on several factors including age, breed, size, activity level, and health status. Understanding these factors is the first step in creating an effective diet plan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Components of a Pet Diet Plan</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Protein sources and quality</li>
              <li>Carbohydrates and fiber</li>
              <li>Fats and essential fatty acids</li>
              <li>Vitamins and minerals</li>
              <li>Water intake</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Creating Your Pet's Diet Plan</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Work with your veterinarian to assess your pet's current health status and nutritional needs. Consider factors such as weight, body condition score, and any existing health conditions when developing the plan.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Always consult with a veterinarian before making significant changes to your pet's diet, especially if your pet has existing health conditions.
              </p>
            </div>
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

