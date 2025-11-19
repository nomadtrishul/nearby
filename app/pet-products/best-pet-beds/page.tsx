import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Pet Beds - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best pet beds. Find comfortable, durable beds for dogs and cats.',
  keywords: ['best pet beds', 'dog beds', 'cat beds', 'pet bed reviews'],
  openGraph: { title: 'Best Pet Beds - Reviews & Buying Guide | Nearby Pet Care', description: 'Comprehensive reviews and buying guide for the best pet beds.', type: 'article', url: 'https://nearbypetcare.com/pet-products/best-pet-beds' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/best-pet-beds' },
};

export default function BestPetBedsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-products" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Products</Link>
            <span className="mx-2">/</span>
            <span>Best Pet Beds</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Best Pet Beds: Reviews & Buying Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">A comfortable bed is essential for your pet's rest and joint health. This guide reviews different types of pet beds and helps you choose the perfect one for your pet.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Types of Pet Beds</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Orthopedic beds for joint support</li>
              <li>Bolster beds with raised edges</li>
              <li>Nesting beds for burrowing pets</li>
              <li>Cooling beds for hot weather</li>
              <li>Heated beds for cold climates</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Consider</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Choose a bed that's appropriately sized for your pet, made from durable materials, and easy to clean. Consider your pet's sleeping style and any health needs like arthritis support.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

