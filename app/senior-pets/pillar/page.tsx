import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Senior Pet Care Overview | Nearby Pet Care',
  description: 'Overview of senior pet care topics. Learn how to support your aging pet\'s health and comfort.',
  keywords: ['senior pet care overview', 'elderly pets', 'aging pets'],
  openGraph: { title: 'Senior Pet Care Overview | Nearby Pet Care', description: 'Overview of senior pet care topics.', type: 'article', url: 'https://nearbypetcare.com/senior-pets/pillar' },
  alternates: { canonical: 'https://nearbypetcare.com/senior-pets/pillar' },
};

export default function SeniorPetsPillarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/senior-pets" className="hover:text-blue-600 dark:hover:text-blue-400">Senior Pets</Link>
            <span className="mx-2">/</span>
            <span>Overview</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Senior Pet Care Overview</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Senior pets require specialized care to maintain their health, comfort, and quality of life. This section provides comprehensive guides for caring for aging pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Topics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Mobility support and joint health</li>
              <li>Senior-specific nutrition and diet</li>
              <li>Health monitoring and veterinary care</li>
              <li>Comfort and quality of life</li>
              <li>End-of-life care considerations</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/senior-pets" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Senior Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

