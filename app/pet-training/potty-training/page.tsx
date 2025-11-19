import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Potty Training for Pets - Complete Guide | Nearby Pet Care',
  description: 'Learn how to potty train your pet effectively. Tips for house training dogs and litter box training cats.',
  keywords: ['potty training', 'house training', 'litter box training', 'pet toilet training'],
  openGraph: { title: 'Potty Training for Pets | Nearby Pet Care', description: 'Learn how to potty train your pet effectively.', type: 'article', url: 'https://nearbypetcare.com/pet-training/potty-training' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/potty-training' },
};

export default function PottyTrainingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-training" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Training</Link>
            <span className="mx-2">/</span>
            <span>Potty Training</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Potty Training for Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Successful potty training requires patience, consistency, and positive reinforcement. This guide covers effective techniques for house training dogs and litter box training cats.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">House Training Dogs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Establish a regular schedule, take your dog outside frequently, especially after meals and naps, and reward successful elimination. Clean accidents thoroughly to remove odors.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Litter Box Training Cats</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Provide a clean, accessible litter box. Most cats naturally use a litter box, but kittens may need guidance. Keep the box clean and in a quiet location.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

