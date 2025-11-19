import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Socialisation Guide | Nearby Pet Care',
  description: 'Learn about socializing your pet with people, other animals, and new environments. Critical period for puppies and kittens.',
  keywords: ['pet socialization', 'puppy socialization', 'kitten socialization', 'socializing pets'],
  openGraph: { title: 'Pet Socialisation Guide | Nearby Pet Care', description: 'Learn about socializing your pet with people and other animals.', type: 'article', url: 'https://nearbypetcare.com/pet-training/socialisation' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/socialisation' },
};

export default function SocialisationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-training" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Training</Link>
            <span className="mx-2">/</span>
            <span>Socialisation</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Socialisation</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Proper socialization helps pets become confident and well-adjusted. Early socialization is especially important during the critical period in puppies and kittens.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Critical Socialization Period</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Puppies and kittens have a critical socialization period (typically 3-14 weeks for puppies, 2-7 weeks for kittens) when they're most receptive to new experiences.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Socialization Goals</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Exposure to various people (different ages, appearances)</li>
              <li>Interaction with other animals</li>
              <li>Experiencing different environments and sounds</li>
              <li>Positive experiences with handling and grooming</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

