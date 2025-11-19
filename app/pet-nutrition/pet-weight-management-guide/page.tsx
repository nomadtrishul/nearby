import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Weight Management Guide - Prevent Obesity | Nearby Pet Care',
  description: 'Comprehensive guide to managing your pet\'s weight and preventing obesity. Learn about healthy weight ranges, diet strategies, and exercise recommendations.',
  keywords: ['pet weight management', 'pet obesity', 'dog weight loss', 'cat weight loss', 'pet diet plan', 'pet exercise'],
  openGraph: {
    title: 'Pet Weight Management Guide - Prevent Obesity | Nearby Pet Care',
    description: 'Comprehensive guide to managing your pet\'s weight and preventing obesity.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
  },
};

export default function PetWeightManagementPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Pet Weight Management Guide</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Weight Management Guide
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Maintaining a healthy weight is crucial for your pet's overall health and longevity. Obesity in pets can lead to numerous health problems including diabetes, joint issues, and heart disease.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Assessing Your Pet's Weight</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use body condition scoring to assess if your pet is at a healthy weight. You should be able to feel your pet's ribs without excess fat covering, and they should have a visible waist when viewed from above.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Weight Management Strategies</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Measure food portions accurately</li>
              <li>Reduce treats and table scraps</li>
              <li>Increase exercise gradually</li>
              <li>Consider weight management pet food</li>
              <li>Regular veterinary check-ups</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Always consult with your veterinarian before starting a weight loss program for your pet to ensure it's done safely and effectively.
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

