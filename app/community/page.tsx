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
  title: 'Pet Care Community: Latest News, Research & Pet Owner Stories',
  description: 'Stay connected with the latest pet care news, research, trends, and stories. Read pet owner stories and discover the latest trends in pet care.',
  keywords: ['pet care news', 'pet care community', 'pet care articles', 'pet care trends', 'pet care research', 'pet owner stories', 'pet care 2025', 'latest pet care news', 'pet community', 'pet care information'],
  pathname: '/community',
  type: 'website',
  author: 'Nearby Pet Care Team',
  locale: 'en-US',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Care Community - Latest News, Research & Stories',
      type: 'image/png',
    },
  ],
  alternates: {
    languages: {
      'en-US': '/community',
      'en-GB': '/community',
      'en-CA': '/community',
      'en-AU': '/community',
    },
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
});

export default function CommunityPage() {
  const baseUrl = getBaseUrl();
  
  const sections = [
    { 
      title: 'Latest Research', 
      href: '/community/latest-research', 
      icon: '🔬',
      description: 'Stay informed with the latest pet care research and scientific findings. Evidence-based information about pet health and wellness.',
    },
    { 
      title: 'Trends 2025', 
      href: '/community/trends-2025', 
      icon: '📈',
      description: 'Explore the latest pet care trends for 2025. Discover emerging products, services, and practices in the pet care industry.',
    },
    { 
      title: 'Pet Owner Stories', 
      href: '/community/pet-owner-stories', 
      icon: '📖',
      description: 'Read inspiring stories from pet owners. Share experiences, tips, and connect with the pet care community.',
    },
  ];

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Community', url: '/community' },
  ];

  // Generate structured data using centralized utilities
  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Pet Care Community',
    description: 'Stay connected with the latest pet care news, research, trends, and stories from our community.',
    url: '/community',
    numberOfItems: sections.length,
    items: sections.map((section) => ({
      name: section.title,
      url: section.href,
    })),
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Care Community',
    description: 'Stay connected with the latest pet care news, research, trends, and stories from our community.',
    url: '/community',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Care Community">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(collectionPageStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      
      {/* Hero Section - Optimized for Core Web Vitals */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
        aria-labelledby="community-heading"
      >
        {/* Decorative background elements - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Community', href: '/community' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm" role="status" aria-label="Content type">
              <span className="text-2xl" aria-hidden="true">👥</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Community</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🌍</div>
            
            {/* Title - H1 for SEO */}
            <h1 id="community-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Care Community
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Pet care is always evolving, and staying informed helps you provide better care for your pet. Explore the latest pet care research, discover emerging trends, and read real stories from pet owners just like you. Whether you're looking for the latest pet care news or want to learn from other pet owners' experiences, our community section keeps you connected and informed.
            </p>
            
            {/* Stats or highlights - Optimized for mobile touch targets */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10" role="list" aria-label="Community sections">
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🔬</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Latest Research</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">📈</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Trends 2025</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">📖</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Pet Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sections Grid - Semantic HTML for SEO */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="community-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Community sections">
                {sections.map((section, index) => (
                  <article
                    key={index}
                    role="listitem"
                    className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300"
                    itemScope
                    itemType="https://schema.org/Article"
                  >
                    <Link href={section.href} className="block" aria-label={`Explore ${section.title}`}>
                      <div className="text-4xl mb-4" aria-hidden="true">{section.icon}</div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" itemProp="headline">
                        {section.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3" itemProp="description">
                        {section.description}
                      </p>
                      <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors min-h-[44px]">
                        Explore <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <meta itemProp="url" content={`https://nearbypetcare.com${section.href}`} />
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
