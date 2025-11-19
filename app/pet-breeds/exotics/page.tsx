import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exotic Pets Guide | Nearby Pet Care',
  description: 'Guide to exotic pets including reptiles, amphibians, and other unique species. Learn about their specialized care requirements.',
  keywords: ['exotic pets', 'reptiles', 'amphibians', 'exotic pet care', 'reptile care'],
  openGraph: { title: 'Exotic Pets Guide | Nearby Pet Care', description: 'Guide to exotic pets and their specialized care requirements.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/exotics' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/exotics' },
};

export default function ExoticsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-breeds" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Breeds</Link>
            <span className="mx-2">/</span>
            <span>Exotic Pets</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Exotic Pets Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Exotic pets require specialized care and knowledge. Learn about reptiles, amphibians, and other exotic species, their unique needs, and legal considerations.</p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Research local laws and regulations before acquiring an exotic pet. Many species have specific legal requirements or restrictions.</p>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Exotic Pets</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Reptiles (snakes, lizards, turtles)</li>
              <li>Amphibians (frogs, salamanders)</li>
              <li>Invertebrates (tarantulas, scorpions)</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

