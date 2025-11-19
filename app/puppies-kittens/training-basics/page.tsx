import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puppy & Kitten Training Basics | Nearby Pet Care',
  description: 'Essential training basics for puppies and kittens. Learn how to start training early and build good habits.',
  keywords: ['puppy training', 'kitten training', 'young pet training', 'early training'],
  openGraph: { title: 'Puppy & Kitten Training Basics | Nearby Pet Care', description: 'Essential training basics for puppies and kittens.', type: 'article', url: 'https://nearbypetcare.com/puppies-kittens/training-basics' },
  alternates: { canonical: 'https://nearbypetcare.com/puppies-kittens/training-basics' },
};

export default function TrainingBasicsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/puppies-kittens" className="hover:text-blue-600 dark:hover:text-blue-400">Puppies & Kittens</Link>
            <span className="mx-2">/</span>
            <span>Training Basics</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Puppy & Kitten Training Basics</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Early training sets the foundation for a well-behaved pet. This guide covers essential training basics for puppies and kittens, including house training, basic commands, and socialization.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Early Training Principles</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Start training early but keep sessions short</li>
              <li>Use positive reinforcement (treats, praise)</li>
              <li>Be patient and consistent</li>
              <li>Make training fun and engaging</li>
              <li>Avoid punishment-based methods</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Basic Training Goals</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Focus on house training, name recognition, basic commands (sit, come), crate training (for puppies), and early socialization with people and other animals.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/puppies-kittens" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Puppies & Kittens</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

