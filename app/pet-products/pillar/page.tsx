import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Products Overview | Nearby Pet Care',
  description: 'Overview of pet products reviews and buying guides. Find the best products for your pet.',
  keywords: ['pet products overview', 'pet product reviews', 'pet buying guides'],
  openGraph: { title: 'Pet Products Overview | Nearby Pet Care', description: 'Overview of pet products reviews and buying guides.', type: 'article', url: 'https://nearbypetcare.com/pet-products/pillar' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/pillar' },
};

export default function PetProductsPillarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-products" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Products</Link>
            <span className="mx-2">/</span>
            <span>Overview</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Products Overview</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Our comprehensive pet product reviews and buying guides help you make informed decisions for your pet's needs. We evaluate products based on quality, value, and pet safety.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Product Categories</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Pet food and nutrition</li>
              <li>Grooming tools and supplies</li>
              <li>Pet beds and furniture</li>
              <li>Toys and enrichment</li>
              <li>Health and wellness products</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

