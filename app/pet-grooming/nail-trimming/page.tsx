import type { Metadata } from 'next';
import Link from 'next/link';
import GroomingSidebar from '@/components/GroomingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Nail Trimming for Pets - Complete Guide',
  description: 'Learn how to safely trim your pet\'s nails. Step-by-step guide with tips for making nail trimming stress-free.',
  keywords: ['pet nail trimming', 'dog nail trimming', 'cat nail trimming', 'pet nail care'],
  pathname: '/pet-grooming/nail-trimming',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Nail Trimming for Pets - Complete Guide',
    type: 'image/png',
  }],
});

export default function NailTrimmingPage() {
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
                <span>Nail Trimming</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Nail Trimming for Pets</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Regular nail trimming is important for your pet's comfort and health. Overgrown nails can cause pain, difficulty walking, and even injury.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How Often to Trim Nails</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Most pets need nail trims every 2-4 weeks, though this varies based on activity level and whether they walk on hard surfaces that naturally wear down nails.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Tools Needed</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Pet nail clippers (guillotine or scissor-style)</li>
              <li>Nail file or grinder</li>
              <li>Styptic powder (to stop bleeding if you cut too short)</li>
              <li>Treats for positive reinforcement</li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Avoid cutting the quick (the pink area containing blood vessels). If you're unsure, trim small amounts frequently or seek professional help.</p>
            </div>
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

