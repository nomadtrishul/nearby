import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Product Comparisons | Nearby Pet Care',
  description: 'Side-by-side comparisons of popular pet products. Compare brands, features, and prices to make informed decisions.',
  keywords: ['pet product comparisons', 'product comparison', 'compare pet products'],
  openGraph: { title: 'Pet Product Comparisons | Nearby Pet Care', description: 'Side-by-side comparisons of popular pet products.', type: 'article', url: 'https://nearbypetcare.com/pet-products/comparisons' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/comparisons' },
};

export default function PetProductsComparisonsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-products" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Products</Link>
            <span className="mx-2">/</span>
            <span>Comparisons</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Product Comparisons</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Compare popular pet products side-by-side to make informed purchasing decisions. Our detailed comparisons help you understand differences in features, quality, and value.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Available Comparisons</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Browse our comparison guides to see how different products stack up against each other. We evaluate factors like quality, price, features, and customer satisfaction.</p>
            <div className="mt-8">
              <Link href="/comparisons" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                View All Comparisons →
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

