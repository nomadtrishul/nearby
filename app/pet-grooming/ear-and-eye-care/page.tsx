import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ear and Eye Care for Pets | Nearby Pet Care',
  description: 'Learn how to properly clean and care for your pet\'s ears and eyes. Prevent infections and maintain good hygiene.',
  keywords: ['pet ear care', 'pet eye care', 'cleaning pet ears', 'pet eye cleaning'],
  openGraph: { title: 'Ear and Eye Care for Pets | Nearby Pet Care', description: 'Learn how to properly clean and care for your pet\'s ears and eyes.', type: 'article', url: 'https://nearbypetcare.com/pet-grooming/ear-and-eye-care' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-grooming/ear-and-eye-care' },
};

export default function EarAndEyeCarePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-grooming" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Grooming</Link>
            <span className="mx-2">/</span>
            <span>Ear and Eye Care</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ear and Eye Care for Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Regular ear and eye care helps prevent infections and keeps your pet comfortable. This guide covers proper cleaning techniques and signs of problems.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ear Care</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Check your pet's ears weekly for signs of infection, such as redness, odor, or discharge. Clean ears with a pet-safe ear cleaner and cotton balls, never using cotton swabs deep in the ear canal.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Eye Care</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Gently wipe away eye discharge with a damp, soft cloth. Watch for signs of problems like excessive tearing, redness, cloudiness, or squinting, which may indicate an infection or injury requiring veterinary attention.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-grooming" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Grooming Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

