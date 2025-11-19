import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dog Breeds Guide | Nearby Pet Care',
  description: 'Comprehensive guide to dog breeds. Learn about different dog breeds, their characteristics, temperament, and care requirements.',
  keywords: ['dog breeds', 'dog breed guide', 'dog breed information', 'dog characteristics'],
  openGraph: { title: 'Dog Breeds Guide | Nearby Pet Care', description: 'Comprehensive guide to dog breeds and their characteristics.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs' },
};

export default function DogBreedsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-breeds" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Breeds</Link>
            <span className="mx-2">/</span>
            <span>Dog Breeds</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Dog Breeds Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Explore different dog breeds and learn about their unique characteristics, temperament, exercise needs, and care requirements. Each breed has specific traits that may make them more suitable for certain lifestyles.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Dog Breeds</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">From small companion dogs to large working breeds, there's a dog breed for every lifestyle. Consider factors like size, energy level, grooming needs, and temperament when choosing a breed.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Breed-Specific Care</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Different breeds have unique health considerations, exercise requirements, and grooming needs. Understanding breed-specific care helps ensure your dog lives a happy, healthy life.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

