import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crate Training for Pets - Complete Guide | Nearby Pet Care',
  description: 'Learn how to crate train your pet effectively. Benefits of crate training and step-by-step techniques.',
  keywords: ['crate training', 'dog crate training', 'pet crate', 'crate training tips'],
  openGraph: { title: 'Crate Training for Pets | Nearby Pet Care', description: 'Learn how to crate train your pet effectively.', type: 'article', url: 'https://nearbypetcare.com/pet-training/crate-training' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/crate-training' },
};

export default function CrateTrainingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-training" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Training</Link>
            <span className="mx-2">/</span>
            <span>Crate Training</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Crate Training for Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Crate training provides your pet with a safe, comfortable space and helps with house training and preventing destructive behavior when unsupervised.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Benefits of Crate Training</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Provides a safe den-like space</li>
              <li>Aids in house training</li>
              <li>Prevents destructive behavior</li>
              <li>Makes travel easier</li>
              <li>Helps with separation anxiety</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Training Steps</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Introduce the crate gradually, make it comfortable with bedding and toys, use positive reinforcement, and never use the crate as punishment. Start with short periods and gradually increase duration.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

