import type { Metadata } from 'next';
import Link from 'next/link';
import GroomingSidebar from '@/components/GroomingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Dental Care - Complete Guide',
  description: 'Learn about pet dental care including brushing, dental chews, and professional cleanings. Prevent dental disease in your pet.',
  keywords: ['pet dental care', 'dog dental care', 'cat dental care', 'pet teeth brushing', 'pet dental health'],
  pathname: '/pet-grooming/dental-care',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Dental Care - Complete Guide',
    type: 'image/png',
  }],
});

export default function DentalCarePage() {
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
                <span>Dental Care</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Dental Care</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Dental health is crucial for your pet's overall wellbeing. Poor dental hygiene can lead to serious health problems including heart, liver, and kidney disease.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Brushing Your Pet's Teeth</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Daily brushing is ideal, but even a few times per week helps. Use pet-specific toothpaste (never human toothpaste) and a soft-bristled toothbrush designed for pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dental Chews and Toys</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dental chews and toys can help reduce plaque and tartar buildup. Look for products approved by veterinary dental associations.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Professional Dental Cleanings</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Regular professional cleanings under anesthesia are important for maintaining dental health. Your veterinarian can recommend an appropriate schedule based on your pet's needs.</p>
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

