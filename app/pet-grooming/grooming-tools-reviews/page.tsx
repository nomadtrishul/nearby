import type { Metadata } from 'next';
import Link from 'next/link';
import GroomingSidebar from '@/components/GroomingSidebar';

export const metadata: Metadata = {
  title: 'Grooming Tools Reviews - Best Pet Grooming Products | Nearby Pet Care',
  description: 'Reviews and recommendations for the best pet grooming tools including brushes, clippers, nail trimmers, and more.',
  keywords: ['pet grooming tools', 'dog grooming tools', 'cat grooming tools', 'grooming brush reviews'],
  openGraph: { title: 'Grooming Tools Reviews | Nearby Pet Care', description: 'Reviews and recommendations for the best pet grooming tools.', type: 'article', url: 'https://nearbypetcare.com/pet-grooming/grooming-tools-reviews' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-grooming/grooming-tools-reviews' },
};

export default function GroomingToolsReviewsPage() {
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
                <span>Grooming Tools Reviews</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Grooming Tools Reviews</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Having the right grooming tools makes all the difference in maintaining your pet's appearance and health. This guide reviews essential grooming tools and products.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Grooming Tools</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Brushes and combs (slicker brushes, bristle brushes, undercoat rakes)</li>
              <li>Nail clippers or grinders</li>
              <li>Pet-safe shampoos and conditioners</li>
              <li>Ear cleaning solutions</li>
              <li>Toothbrushes and pet toothpaste</li>
              <li>Grooming scissors or clippers</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Choose tools based on your pet's coat type, size, and grooming needs. Quality tools make grooming easier and more effective.</p>
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

