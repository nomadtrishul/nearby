import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Product Comparisons: Compare Pet Food & Products Side-by-Side | Nearby Pet Care',
  description: 'Compare pet products side-by-side to make the best choice. Detailed comparisons of pet food brands, wet vs dry food, and other pet products with expert analysis.',
  keywords: ['pet product comparisons', 'compare pet food', 'pet food comparison', 'wet vs dry food', 'pet product comparison', 'compare pet products', 'dog food comparison', 'cat food comparison'],
  openGraph: {
    title: 'Pet Product Comparisons | Nearby Pet Care',
    description: 'Compare pet products side-by-side.',
    type: 'website',
    url: 'https://nearbypetcare.com/comparisons',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Product Comparisons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Product Comparisons | Nearby Pet Care',
    description: 'Compare pet products side-by-side.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/comparisons' },
};

export default function ComparisonsPage() {
  const comparisons = [
    { title: 'Royal Canin vs Pedigree', href: '/comparisons/royal-canin-vs-pedigree' },
    { title: 'Wet vs Dry Food', href: '/comparisons/wet-vs-dry-food' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Comparisons', href: '/comparisons' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚖️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Comparisons</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">📊</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Product Comparisons
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Not sure which pet food or product is right for your pet? Our side-by-side comparisons make it easy to see the differences. Whether you're comparing wet vs dry food, different pet food brands, or other pet products, we break down the pros, cons, and key differences so you can make an informed decision that's best for your pet's needs.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍽️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Food Comparisons</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Side-by-Side</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Expert Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {comparisons.map((comparison, index) => (
              <Link key={index} href={comparison.href} className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{comparison.title}</h2>
                <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                  View Comparison <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

