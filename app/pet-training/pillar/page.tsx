import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Training & Behavior Overview | Nearby Pet Care',
  description: 'Overview of pet training and behavior topics. Learn about effective training methods and addressing behavioral issues.',
  keywords: ['pet training overview', 'pet behavior', 'training basics'],
  openGraph: { title: 'Pet Training & Behavior Overview | Nearby Pet Care', description: 'Overview of pet training and behavior topics.', type: 'article', url: 'https://nearbypetcare.com/pet-training/pillar' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/pillar' },
};

export default function PetTrainingPillarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-training" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Training</Link>
            <span className="mx-2">/</span>
            <span>Overview</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Training & Behavior Overview</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Effective training helps create a strong bond with your pet and ensures they're well-behaved members of your family. This section covers various training topics and behavioral guidance.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Training Areas</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Basic obedience commands</li>
              <li>House training and potty training</li>
              <li>Socialization with people and other animals</li>
              <li>Addressing behavioral issues</li>
              <li>Positive reinforcement techniques</li>
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

