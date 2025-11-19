import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Feeding Schedule Guide - Ideal Timings | Nearby Pet Care',
  description: 'Learn about ideal feeding schedules for dogs and cats at different life stages. Understand how often to feed puppies, adult pets, and senior pets.',
  keywords: ['pet feeding schedule', 'dog feeding schedule', 'cat feeding schedule', 'how often to feed pets', 'pet meal timing'],
  openGraph: {
    title: 'Pet Feeding Schedule Guide - Ideal Timings | Nearby Pet Care',
    description: 'Learn about ideal feeding schedules for dogs and cats at different life stages.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-schedule-guide',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-schedule-guide',
  },
};

export default function PetFeedingSchedulePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Pet Feeding Schedule Guide</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Feeding Schedule Guide
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Establishing a consistent feeding schedule is important for your pet's health, digestion, and behavior. The ideal schedule varies based on your pet's age, size, and health status.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Puppy Feeding Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Puppies typically need 3-4 meals per day until they're about 6 months old, then can transition to 2-3 meals. Small breed puppies may need more frequent meals.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Adult Dog Feeding Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most adult dogs do well with 2 meals per day, morning and evening. Some dogs prefer one meal per day, but this should be discussed with your veterinarian.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cat Feeding Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cats are natural grazers and may prefer multiple small meals throughout the day. However, scheduled meals (2-3 times daily) can help with weight management and prevent overeating.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Senior Pet Feeding Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Senior pets may benefit from smaller, more frequent meals to aid digestion. Consult with your veterinarian for specific recommendations based on your pet's health.
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

