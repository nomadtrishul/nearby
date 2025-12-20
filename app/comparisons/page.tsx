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
    {
      title: 'Royal Canin vs Pedigree',
      href: '/comparisons/royal-canin-vs-pedigree',
      icon: '🐕',
      description: 'Two of the most recognizable names in dog food, but which one delivers better nutrition (and value) for your pup?',
      color: 'blue',
      category: 'Brand Comparison'
    },
    {
      title: 'Wet vs Dry Food',
      href: '/comparisons/wet-vs-dry-food',
      icon: '🍽️',
      description: 'The age-old debate: should you feed your pet wet food, dry kibble, or a mix of both? We break down the science.',
      color: 'purple',
      category: 'Food Type Comparison'
    },
    {
      title: 'Puppy vs Kitten',
      href: '/comparisons/puppy-vs-kitten',
      icon: '🐾',
      description: 'Making the big decision between a dog and a cat? We compare costs, lifestyle needs, and what to expect.',
      color: 'green',
      category: 'Pet Lifestyle'
    },
  ];

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Comparisons', url: '/comparisons' },
  ];

  // Generate structured data using centralized utilities
  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Pet Comparisons & Guides',
    description: 'Detailed comparisons of pet food brands, wet vs dry food, and pet lifestyle choices to help you make the best decision.',
    url: '/comparisons',
    numberOfItems: comparisons.length,
    items: comparisons.map((comparison) => ({
      name: comparison.title,
      url: comparison.href,
    })),
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Comparisons & Guides',
    description: 'Expert analysis and side-by-side comparisons of pet products, food types, and breeds.',
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
        {/* Dynamic Hero Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-slate-900/50 dark:via-black dark:to-black transition-colors overflow-hidden">
          {/* Background Decorative Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full shadow-sm animate-fade-in-up">
              <span className="text-xl">⚖️</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Decision Making Simplified</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]">
              Make The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">Right Choice</span><br className="hidden sm:block" /> For Your Pet
            </h1>

            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
              Objective, detailed comparisons of products, lifestyle choices, and nutrition to help you navigate the complex world of pet parenthood with confidence.
            </p>

            {/* Quick Stats/Features */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-12 text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Unbiased Reviews
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                Expert Analysis
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Community Vetted
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Grid & Sidebar Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Main Feed */}
              <div className="lg:col-span-8 space-y-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Comparisons</h2>
                  <div className="hidden sm:flex text-sm text-slate-500 dark:text-slate-400">
                    Showing {comparisons.length} Guides
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {comparisons.map((item, idx) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
                    >
                      <div className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-4xl shadow-inner bg-${item.color}-100 dark:bg-${item.color}-900/20`}>
                        {item.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${item.color}-100 text-${item.color}-700 dark:bg-${item.color}-900/30 dark:text-${item.color}-300`}>
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:underline decoration-2 underline-offset-4">
                          Read The Verdict
                          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                <ComparisonsSidebar />

                {/* Sticky promotional banner or extra info could go here */}
                <div className="p-6 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">Have a request?</h3>
                  <p className="text-blue-100 text-sm mb-6 relative z-10">
                    Can't decide between two products? Let us know what you want us to compare next!
                  </p>
                  <Link href="/contact" className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors relative z-10">
                    Request Comparison
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Explore More / Interlinking Section */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore More Guides</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Dive deeper into specific topics to give your pet the best life possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Buying Guides',
                  desc: 'Curated lists of the best products.',
                  href: '/buying-guides',
                  icon: '🛍️',
                  color: 'blue'
                },
                {
                  title: 'Pet Nutrition',
                  desc: 'Understand what goes into their bowl.',
                  href: '/pet-nutrition',
                  icon: '🥗',
                  color: 'green'
                },
                {
                  title: 'Care Tips',
                  desc: 'Everyday advice for happy pets.',
                  href: '/pet-care-tips',
                  icon: '💡',
                  color: 'amber'
                },
                {
                  title: 'Breed Library',
                  desc: 'Find the perfect breed for your lifestyle.',
                  href: '/pet-breeds',
                  icon: '🐕',
                  color: 'purple'
                },
              ].map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex flex-col p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-${link.color}-50 dark:bg-${link.color}-900/20 group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

