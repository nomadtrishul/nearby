import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ComparisonsSidebar from '@/components/ComparisonsSidebar';
import { 
  generateSEOMetadata,
  generateCollectionPageStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Product Comparisons Guide',
  description: 'Compare pet products side-by-side. Detailed comparisons of pet food brands, wet vs dry food, and other products with expert analysis and reviews.',
  keywords: ['pet product comparisons', 'compare pet food', 'pet food comparison', 'wet vs dry food', 'pet product comparison', 'compare pet products', 'dog food comparison', 'cat food comparison', 'pet food reviews', 'best pet food'],
  pathname: '/comparisons',
  type: 'website',
  author: 'Nearby Pet Care Team',
  locale: 'en-US',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Product Comparisons',
      type: 'image/png',
    },
  ],
  alternates: {
    languages: {
      'en-US': '/comparisons',
      'en-GB': '/comparisons',
      'en-CA': '/comparisons',
      'en-AU': '/comparisons',
    },
  },
});

export default function ComparisonsPage() {
  const baseUrl = getBaseUrl();
  
  const comparisons = [
    { title: 'Royal Canin vs Pedigree', href: '/comparisons/royal-canin-vs-pedigree' },
    { title: 'Wet vs Dry Food', href: '/comparisons/wet-vs-dry-food' },
  ];

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Comparisons', url: '/comparisons' },
  ];

  // Generate structured data using centralized utilities
  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Pet Product Comparisons',
    description: 'Compare pet products side-by-side to make the best choice. Detailed comparisons of pet food brands, wet vs dry food, and other pet products.',
    url: '/comparisons',
    numberOfItems: comparisons.length,
    items: comparisons.map((comparison) => ({
      name: comparison.title,
      url: comparison.href,
    })),
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Product Comparisons',
    description: 'Compare pet products side-by-side. Detailed comparisons of pet food brands, wet vs dry food, and other products with expert analysis.',
    url: '/comparisons',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <>
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(collectionPageStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
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
              Choosing the right pet food can feel overwhelming when you're standing in the pet store aisle, surrounded by dozens of options. We've been there too. That's why we've created these detailed comparisons to help you cut through the marketing noise and find what actually works for your furry friend. Each comparison dives deep into ingredients, nutrition, real-world experiences, and what pet owners like you have discovered works best.
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content - Comparisons Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                <Link href="/comparisons/royal-canin-vs-pedigree" className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
                            🐕
                          </div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            Royal Canin vs Pedigree
                          </h2>
                        </div>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          Two of the most recognizable names in dog food, but which one delivers better nutrition for your pup? We compare everything from ingredient quality to real-world results, helping you understand if the premium price of Royal Canin is worth it or if Pedigree's budget-friendly approach meets your dog's needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Brand Comparison</span>
                      </div>
                      <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 gap-1 transition-all">
                        <span>Read Full Comparison</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link href="/comparisons/wet-vs-dry-food" className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl shadow-lg">
                            🍽️
                          </div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            Wet vs Dry Food
                          </h2>
                        </div>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          The age-old debate: should you feed your pet wet food, dry kibble, or a mix of both? We break down the science, share practical feeding tips, and help you understand when each option makes the most sense for your pet's health, lifestyle, and preferences.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Food Type Comparison</span>
                      </div>
                      <div className="flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:gap-2 gap-1 transition-all">
                        <span>Read Full Comparison</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <ComparisonsSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

