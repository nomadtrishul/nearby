import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Grooming Tools - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best pet grooming tools. Find brushes, clippers, nail trimmers, and more.',
  keywords: ['best grooming tools', 'pet grooming tools', 'dog grooming tools', 'cat grooming tools'],
  openGraph: { title: 'Best Grooming Tools - Reviews & Buying Guide | Nearby Pet Care', description: 'Comprehensive reviews and buying guide for the best pet grooming tools.', type: 'article', url: 'https://nearbypetcare.com/pet-products/best-grooming-tools' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/best-grooming-tools' },
};

export default function BestGroomingToolsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-products" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Products</Link>
            <span className="mx-2">/</span>
            <span>Best Grooming Tools</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Best Grooming Tools: Reviews & Buying Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Quality grooming tools make maintaining your pet's appearance and health much easier. This guide reviews essential grooming tools and helps you build the perfect grooming kit.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Grooming Tools</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Brushes and combs (slicker, bristle, undercoat rakes)</li>
              <li>Nail clippers or grinders</li>
              <li>Pet clippers and scissors</li>
              <li>Shampoo and conditioner</li>
              <li>Ear cleaning solutions</li>
              <li>Toothbrushes and toothpaste</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Choosing the Right Tools</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Select tools based on your pet's coat type, size, and grooming needs. Quality tools are more effective, safer, and last longer than cheaper alternatives.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

