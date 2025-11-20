import type { Metadata } from 'next';
import Link from 'next/link';
import GroomingSidebar from '@/components/GroomingSidebar';

export const metadata: Metadata = {
  title: 'Pet Haircuts and Styles Guide | Nearby Pet Care',
  description: 'Learn about different pet haircuts and styles. When to trim, popular styles, and whether to DIY or visit a professional groomer.',
  keywords: ['pet haircuts', 'dog haircuts', 'pet grooming styles', 'pet trim'],
  openGraph: { title: 'Pet Haircuts and Styles Guide | Nearby Pet Care', description: 'Learn about different pet haircuts and styles.', type: 'article', url: 'https://nearbypetcare.com/pet-grooming/haircuts-and-styles' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-grooming/haircuts-and-styles' },
};

export default function HaircutsAndStylesPage() {
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
                <span>Haircuts and Styles</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Haircuts and Styles</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Regular haircuts keep your pet comfortable and looking their best. This guide covers when to trim, popular styles, and considerations for different breeds.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When to Trim</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Trimming frequency depends on your pet's breed and coat type. Long-haired breeds may need trims every 4-6 weeks, while others may only need occasional touch-ups.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Styles</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Different breeds have traditional styles, but you can also choose practical cuts that suit your pet's lifestyle. Consider factors like weather, activity level, and maintenance requirements.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Professional vs. DIY</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">While some pet owners learn to trim their pets at home, professional groomers have the expertise and tools to achieve the best results, especially for complex styles or difficult-to-handle pets.</p>
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

