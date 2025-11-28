import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SeniorPetsSidebar from '@/components/SeniorPetsSidebar';
import { 
  generateSEOMetadata,
  generateCollectionPageStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Senior Pet Care Guide: Aging Dogs & Cats',
  description: 'Comprehensive guide to senior pet care. Expert advice on senior dog and cat care, mobility support, diet changes, and end-of-life care.',
  keywords: ['senior pet care', 'how to care for senior pet', 'elderly pet care', 'aging pet care', 'senior dog care', 'senior cat care', 'old dog care', 'old cat care', 'senior pet health', 'aging pet health'],
  pathname: '/senior-pets',
  type: 'website',
  author: 'Nearby Pet Care Team',
  locale: 'en-US',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Senior Pet Care Guide',
      type: 'image/png',
    },
  ],
  section: 'Pet Care',
});

export default function SeniorPetsPage() {
  const baseUrl = getBaseUrl();
  
  const guides = [
    { title: 'Mobility Support', href: '/senior-pets/mobility-support', icon: '🚶', description: 'Tips and tools to help your senior pet maintain mobility and comfort as they age.' },
    { title: 'Senior Diet Guides', href: '/senior-pets/senior-diet-guides', icon: '🍽️', description: 'Nutritional guidance and diet adjustments to support your aging pet\'s health and wellbeing.' },
    { title: 'End-of-Life Care', href: '/senior-pets/end-of-life-care', icon: '💝', description: 'Compassionate guidance on providing comfort and quality care during your pet\'s final stages of life.' },
  ];

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Senior Pets', url: '/senior-pets' },
  ];

  // Generate structured data using centralized utilities
  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Senior Pet Care Guide',
    description: 'Comprehensive guide to caring for senior pets. Expert advice on mobility support, nutrition, and comfort care for aging dogs and cats.',
    url: '/senior-pets',
    numberOfItems: guides.length,
    items: guides.map((guide) => ({
      name: guide.title,
      url: guide.href,
    })),
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Senior Pet Care Guide',
    description: 'Comprehensive guide to caring for senior pets. Expert advice on mobility support, nutrition, and comfort care for aging dogs and cats.',
    url: '/senior-pets',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/WebPage">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(collectionPageStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Senior Pets', href: '/senior-pets' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">👴</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Senior Care</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse" aria-hidden="true">❤️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Senior Pet Care
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Watching your beloved companion grow older is a privilege, but it also brings new challenges and responsibilities. Those gray whiskers and slower steps tell a story of years of love and companionship. As your pet enters their golden years, their needs change—sometimes subtly, sometimes more dramatically. Whether you're noticing your dog taking a bit longer on walks or your cat preferring cozy naps over playtime, we're here to help you navigate this special chapter. Our guides cover everything from supporting their mobility and adjusting their nutrition to ensuring their comfort and making the most of every precious moment together.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10" role="list">
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🚶</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Mobility Support</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🍽️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Senior Diet</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">💝</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Comfort Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <nav aria-label="Senior pet care guides">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {guides.map((guide, index) => (
                    <Link 
                      key={index} 
                      href={guide.href} 
                      className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col min-h-[200px] text-center"
                      aria-label={`Read guide: ${guide.title}`}
                    >
                      <div className="text-4xl mb-4">{guide.icon}</div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {guide.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                        Read Guide
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:h-fit" aria-label="Related resources">
              <SeniorPetsSidebar />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
