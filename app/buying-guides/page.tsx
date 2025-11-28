import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogSidebar from '@/components/BlogSidebar';
import { 
  generateSEOMetadata,
  generateCollectionPageStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Buying Guides: Best Products',
  description: 'Comprehensive pet buying guides with expert advice on choosing the best pet food, insurance, cat litter, and other products for your pet.',
  keywords: ['pet buying guides', 'how to choose pet products', 'best pet food guide', 'pet product buying guide', 'pet shopping guides', 'pet product recommendations', 'what to buy for a pet', 'pet product reviews', 'best pet products'],
  pathname: '/buying-guides',
  type: 'website',
  author: 'Nearby Pet Care Team',
  locale: 'en-US',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Buying Guides - How to Choose the Best Products for Your Pet',
      type: 'image/png',
    },
  ],
  alternates: {
    languages: {
      'en-US': '/buying-guides',
      'en-GB': '/buying-guides',
      'en-CA': '/buying-guides',
      'en-AU': '/buying-guides',
    },
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
});

export default function BuyingGuidesPage() {
  const baseUrl = getBaseUrl();
  
  const guides = [
    { 
      title: 'Best Dog Food for Small Breeds', 
      href: '/buying-guides/best-dog-food-for-small-breeds',
      description: 'Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog.',
    },
    { 
      title: 'Best Litter for Odour Control', 
      href: '/buying-guides/best-litter-for-odour-control',
      description: 'Complete buying guide for the best cat litter for odour control. Compare top brands and find the most effective odour-controlling litter.',
    },
    { 
      title: 'Best Pet Insurance', 
      href: '/buying-guides/best-pet-insurance',
      description: 'Complete buying guide for pet insurance. Compare plans, coverage options, and find the best pet insurance for your needs.',
    },
  ];

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Buying Guides', url: '/buying-guides' },
  ];

  // Generate structured data using centralized utilities
  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Pet Buying Guides',
    description: 'Make informed purchasing decisions with our comprehensive pet buying guides. Expert advice on choosing the best pet products.',
    url: '/buying-guides',
    numberOfItems: guides.length,
    items: guides.map((guide) => ({
      name: guide.title,
      url: guide.href,
    })),
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Buying Guides',
    description: 'Make informed purchasing decisions with our comprehensive pet buying guides.',
    url: '/buying-guides',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Buying Guides">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(collectionPageStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {/* Hero Section - Optimized for Core Web Vitals */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
        aria-labelledby="guides-heading"
      >
        {/* Decorative background elements - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Buying Guides', href: '/buying-guides' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm" role="status" aria-label="Content type">
              <span className="text-2xl" aria-hidden="true">📚</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Buying Guides</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse" aria-hidden="true">🛒</div>
            
            {/* Title - H1 for SEO */}
            <h1 id="guides-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Buying Guides
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Shopping for your pet shouldn't be a guessing game. Whether you're choosing the best dog food for small breeds, looking for pet insurance, or trying to find the right cat litter, our buying guides help you understand what to look for and what to avoid. We break down product features, compare options, and give you the information you need to make smart purchasing decisions for your pet.
            </p>
            
            {/* Stats or highlights - Optimized for mobile touch targets */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10" role="list" aria-label="Guide categories">
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🍖</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Food Guides</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🛡️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Insurance</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">📦</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Product Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Guides Grid Section - Semantic HTML for SEO */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="guides-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8" role="list" aria-label="Buying guides">
                {guides.map((guide, index) => (
                  <article
                    key={index}
                    role="listitem"
                    className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300"
                    itemScope
                    itemType="https://schema.org/Article"
                  >
                    <Link href={guide.href} className="block" aria-label={`Read guide: ${guide.title}`}>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" itemProp="headline">
                        {guide.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2" itemProp="description">
                        {guide.description}
                      </p>
                      <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors min-h-[44px]">
                        Read Guide <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <meta itemProp="url" content={`https://nearbypetcare.com${guide.href}`} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

