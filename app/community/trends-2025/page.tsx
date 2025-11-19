import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Care Trends 2025 | Nearby Pet Care',
  description: 'Explore the latest pet care trends for 2025. Discover emerging products, services, and practices in the pet care industry.',
  keywords: ['pet care trends', 'pet trends 2025', 'pet industry trends', 'pet care innovations'],
  openGraph: { title: 'Pet Care Trends 2025 | Nearby Pet Care', description: 'Explore the latest pet care trends for 2025.', type: 'article', url: 'https://nearbypetcare.com/community/trends-2025' },
  alternates: { canonical: 'https://nearbypetcare.com/community/trends-2025' },
};

export default function Trends2025Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400">Community</Link>
            <span className="mx-2">/</span>
            <span>Trends 2025</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Care Trends 2025</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Discover the latest trends shaping the pet care industry in 2025. From innovative products to new care practices, stay ahead of what's new in pet care.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Emerging Trends</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Personalized nutrition and meal plans</li>
              <li>Technology integration in pet care</li>
              <li>Sustainable and eco-friendly products</li>
              <li>Holistic and natural care approaches</li>
              <li>Mental health and wellness focus</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Stay informed about the latest developments in pet care to provide the best for your furry friends.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/community" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Community</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

