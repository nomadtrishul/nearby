import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traveling with Pets - Complete Guide | Nearby Pet Care',
  description: 'Complete guide to traveling safely with pets. Tips for car travel, air travel, and preparing your pet for trips.',
  keywords: ['traveling with pets', 'pet travel', 'pet car travel', 'pet air travel'],
  openGraph: { title: 'Traveling with Pets | Nearby Pet Care', description: 'Complete guide to traveling safely with pets.', type: 'article', url: 'https://nearbypetcare.com/pet-safety/travel-with-pets' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-safety/travel-with-pets' },
};

export default function TravelWithPetsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-safety" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Safety</Link>
            <span className="mx-2">/</span>
            <span>Travel with Pets</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Traveling with Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Traveling with pets requires careful planning to ensure their safety and comfort. This guide covers preparation, safety measures, and tips for different types of travel.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Car Travel</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Use a secure carrier or harness</li>
              <li>Never leave pets unattended in vehicles</li>
              <li>Plan regular stops for exercise and bathroom breaks</li>
              <li>Bring water, food, and familiar items</li>
              <li>Ensure proper ventilation</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Air Travel</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Check airline policies well in advance, ensure your pet meets health requirements, use an airline-approved carrier, and consider your pet's temperament and health before flying.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Preparation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Update identification tags, bring health records, pack a travel kit with essentials, and acclimate your pet to carriers or travel equipment before the trip.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-safety" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Safety</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

