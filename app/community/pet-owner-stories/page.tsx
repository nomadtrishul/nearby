import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Owner Stories | Nearby Pet Care',
  description: 'Read inspiring stories from pet owners. Share experiences, tips, and connect with the pet care community.',
  keywords: ['pet owner stories', 'pet stories', 'pet experiences', 'pet community'],
  openGraph: { title: 'Pet Owner Stories | Nearby Pet Care', description: 'Read inspiring stories from pet owners.', type: 'article', url: 'https://nearbypetcare.com/community/pet-owner-stories' },
  alternates: { canonical: 'https://nearbypetcare.com/community/pet-owner-stories' },
};

export default function PetOwnerStoriesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400">Community</Link>
            <span className="mx-2">/</span>
            <span>Pet Owner Stories</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Owner Stories</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Connect with the pet care community through inspiring stories from pet owners. Share experiences, learn from others, and celebrate the joy that pets bring to our lives.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Story Categories</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Adoption and rescue stories</li>
              <li>Training success stories</li>
              <li>Health and recovery journeys</li>
              <li>Special bonds and relationships</li>
              <li>Tips and lessons learned</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">These stories celebrate the special relationships between pets and their owners, sharing experiences that can help and inspire others in the pet care community.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/community" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Community</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

