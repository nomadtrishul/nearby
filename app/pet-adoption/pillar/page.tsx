import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Adoption & Rescue Overview | Nearby Pet Care',
  description: 'Overview of pet adoption and rescue topics. Learn how to successfully adopt and welcome a rescue pet into your home.',
  keywords: ['pet adoption overview', 'rescue pets', 'adopting a pet'],
  openGraph: { title: 'Pet Adoption & Rescue Overview | Nearby Pet Care', description: 'Overview of pet adoption and rescue topics.', type: 'article', url: 'https://nearbypetcare.com/pet-adoption/pillar' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-adoption/pillar' },
};

export default function PetAdoptionPillarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-adoption" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Adoption</Link>
            <span className="mx-2">/</span>
            <span>Overview</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Adoption & Rescue Overview</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Adopting a rescue pet is a rewarding experience that saves lives. This section provides comprehensive guides to help you prepare for adoption and successfully transition a rescue pet into your home.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Topics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Preparing your home for a new pet</li>
              <li>Transitioning a rescue pet</li>
              <li>Adoption checklists and requirements</li>
              <li>Understanding rescue pet behavior</li>
              <li>Building trust with your new pet</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-adoption" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Adoption</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

