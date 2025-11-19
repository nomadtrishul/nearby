import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Safety & Travel Overview | Nearby Pet Care',
  description: 'Overview of pet safety and travel topics. Learn how to keep your pet safe at home and while traveling.',
  keywords: ['pet safety overview', 'pet travel', 'pet home safety'],
  openGraph: { title: 'Pet Safety & Travel Overview | Nearby Pet Care', description: 'Overview of pet safety and travel topics.', type: 'article', url: 'https://nearbypetcare.com/pet-safety/pillar' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-safety/pillar' },
};

export default function PetSafetyPillarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-safety" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Safety</Link>
            <span className="mx-2">/</span>
            <span>Overview</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Safety & Travel Overview</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Keeping your pet safe is a top priority. This section covers home safety, travel safety, emergency preparedness, and seasonal safety considerations.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Safety Topics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Home-proofing and pet safety</li>
              <li>Travel safety and preparation</li>
              <li>Emergency preparedness</li>
              <li>Seasonal safety considerations</li>
              <li>Identifying and avoiding hazards</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-safety" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Safety</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

