import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Bathing Guides - How to Bathe Your Pet | Nearby Pet Care',
  description: 'Learn how to properly bathe your pet. Step-by-step guides for bathing dogs and cats, including frequency, products, and techniques.',
  keywords: ['pet bathing', 'how to bathe dog', 'how to bathe cat', 'pet shampoo', 'pet bathing tips'],
  openGraph: {
    title: 'Pet Bathing Guides | Nearby Pet Care',
    description: 'Learn how to properly bathe your pet with step-by-step guides.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-grooming/bathing-guides',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Bathing Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Bathing Guides | Nearby Pet Care',
    description: 'Learn how to properly bathe your pet with step-by-step guides.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-grooming/bathing-guides' },
};

export default function BathingGuidesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Grooming', href: '/pet-grooming' },
            { name: 'Bathing Guides', href: '/pet-grooming/bathing-guides' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Bathing Guides</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Proper bathing keeps your pet clean and healthy. This guide covers how often to bathe, what products to use, and step-by-step bathing techniques.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How Often Should You Bathe Your Pet?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bathing frequency depends on your pet's breed, coat type, and lifestyle. Most dogs need bathing every 4-6 weeks, while cats typically groom themselves and rarely need baths.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Choosing the Right Shampoo</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Use pet-specific shampoos that are pH-balanced for your pet's skin. Avoid human shampoos as they can be too harsh and cause skin irritation.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Bathing Steps</h2>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Brush your pet before bathing to remove loose hair</li>
              <li>Use lukewarm water and wet your pet thoroughly</li>
              <li>Apply shampoo and lather gently</li>
              <li>Rinse completely to remove all shampoo</li>
              <li>Dry your pet thoroughly with towels or a blow dryer on low heat</li>
            </ol>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-grooming" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Grooming Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

