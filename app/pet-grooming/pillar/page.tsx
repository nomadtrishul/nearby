import type { Metadata } from 'next';
import Link from 'next/link';
import GroomingSidebar from '@/components/GroomingSidebar';

export const metadata: Metadata = {
  title: 'Pet Grooming & Hygiene Overview | Nearby Pet Care',
  description: 'Overview of pet grooming and hygiene topics. Learn about maintaining your pet\'s appearance and health through proper grooming.',
  keywords: ['pet grooming overview', 'pet hygiene', 'pet grooming basics'],
  openGraph: { title: 'Pet Grooming & Hygiene Overview | Nearby Pet Care', description: 'Overview of pet grooming and hygiene topics.', type: 'article', url: 'https://nearbypetcare.com/pet-grooming/pillar' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-grooming/pillar' },
};

export default function PetGroomingPillarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/pet-grooming" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Grooming</Link>
                <span className="mx-2">/</span>
                <span>Overview</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Grooming & Hygiene Overview</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Regular grooming is essential for your pet's health and wellbeing. This section provides comprehensive guides on all aspects of pet grooming and hygiene.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Grooming Areas</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Bathing and coat care</li>
              <li>Nail trimming</li>
              <li>Dental hygiene</li>
              <li>Ear and eye care</li>
              <li>Professional grooming services</li>
            </ul>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-grooming" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Grooming Guides</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <GroomingSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

