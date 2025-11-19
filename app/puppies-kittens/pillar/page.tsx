import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puppies & Kittens Care Overview | Nearby Pet Care',
  description: 'Overview of puppies and kittens care topics. Essential guides for caring for young pets.',
  keywords: ['puppy care overview', 'kitten care overview', 'young pet care'],
  openGraph: { title: 'Puppies & Kittens Care Overview | Nearby Pet Care', description: 'Overview of puppies and kittens care topics.', type: 'article', url: 'https://nearbypetcare.com/puppies-kittens/pillar' },
  alternates: { canonical: 'https://nearbypetcare.com/puppies-kittens/pillar' },
};

export default function PuppiesKittensPillarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/puppies-kittens" className="hover:text-blue-600 dark:hover:text-blue-400">Puppies & Kittens</Link>
            <span className="mx-2">/</span>
            <span>Overview</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Puppies & Kittens Care Overview</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Caring for puppies and kittens requires special attention and knowledge. This section provides essential guides for the first days, health care, and early training of young pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Topics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>The first 30 days with your new pet</li>
              <li>Vaccination schedules and health care</li>
              <li>Early training and socialization</li>
              <li>Nutrition for growing pets</li>
              <li>Common health concerns</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/puppies-kittens" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Puppies & Kittens</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

