import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Training Tools Reviews - Best Pet Training Products | Nearby Pet Care',
  description: 'Reviews and recommendations for the best pet training tools including clickers, treats, leashes, and training aids.',
  keywords: ['pet training tools', 'dog training tools', 'training clicker', 'training treats'],
  openGraph: { title: 'Training Tools Reviews | Nearby Pet Care', description: 'Reviews and recommendations for the best pet training tools.', type: 'article', url: 'https://nearbypetcare.com/pet-training/training-tools-reviews' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/training-tools-reviews' },
};

export default function TrainingToolsReviewsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-training" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Training</Link>
            <span className="mx-2">/</span>
            <span>Training Tools Reviews</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Training Tools Reviews</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">The right training tools can make training more effective and enjoyable for both you and your pet. This guide reviews essential training equipment and products.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Training Tools</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Clickers for marker training</li>
              <li>High-value treats for rewards</li>
              <li>Leashes and harnesses</li>
              <li>Training mats or platforms</li>
              <li>Puzzle toys for mental stimulation</li>
              <li>Target sticks</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Choose tools that suit your training style and your pet's needs. Quality tools make training more effective and enjoyable.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

