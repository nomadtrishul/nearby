import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brushing and Coat Care for Pets | Nearby Pet Care',
  description: 'Learn how to properly brush your pet and maintain their coat. Tips for different coat types and brushing techniques.',
  keywords: ['pet brushing', 'coat care', 'pet grooming brush', 'pet coat maintenance'],
  openGraph: { title: 'Brushing and Coat Care for Pets | Nearby Pet Care', description: 'Learn how to properly brush your pet and maintain their coat.', type: 'article', url: 'https://nearbypetcare.com/pet-grooming/brushing-and-coat-care' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-grooming/brushing-and-coat-care' },
};

export default function BrushingAndCoatCarePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-grooming" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Grooming</Link>
            <span className="mx-2">/</span>
            <span>Brushing and Coat Care</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Brushing and Coat Care</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Regular brushing is essential for maintaining your pet's coat health, preventing matting, and reducing shedding. This guide covers brushing techniques for different coat types.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Benefits of Regular Brushing</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Removes dead hair and reduces shedding</li>
              <li>Distributes natural oils for a healthy coat</li>
              <li>Prevents matting and tangles</li>
              <li>Helps detect skin problems early</li>
              <li>Strengthens the bond with your pet</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Choosing the Right Brush</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Different coat types require different brushes. Long-haired pets may need slicker brushes and combs, while short-haired pets benefit from bristle brushes or grooming mitts.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-grooming" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Grooming Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

