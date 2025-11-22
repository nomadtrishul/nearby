import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetSafetySidebar from '@/components/PetSafetySidebar';

export const metadata: Metadata = {
  title: 'Pet Safety Guide: How to Keep Your Pet Safe at Home & While Traveling | Nearby Pet Care',
  description: 'Learn how to keep your pet safe with our comprehensive pet safety guide. Expert tips on traveling with pets, pet-proofing your home, emergency preparedness, and seasonal pet safety. Essential safety information for responsible pet owners.',
  keywords: ['pet safety', 'how to keep pet safe', 'traveling with pets', 'pet travel tips', 'pet home safety', 'pet proofing', 'pet emergency', 'pet safety tips', 'dog safety', 'cat safety', 'pet safety guide', 'pet protection'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pet Safety & Travel Guide | Nearby Pet Care',
    description: 'Comprehensive guide to pet safety and travel. Expert tips on keeping your pet safe at home, while traveling, during emergencies, and throughout the seasons.',
    type: 'website',
    url: 'https://nearbypetcare.com/pet-safety',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Safety & Travel Guide - Comprehensive Pet Safety Information',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Safety & Travel Guide | Nearby Pet Care',
    description: 'Comprehensive guide to pet safety and travel. Expert tips for keeping your pet safe.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-safety',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-safety',
      'en-GB': 'https://nearbypetcare.com/pet-safety',
      'en-CA': 'https://nearbypetcare.com/pet-safety',
      'en-AU': 'https://nearbypetcare.com/pet-safety',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'article:published_time': '2024-01-01T00:00:00+00:00',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Nearby Pet Care Team',
    'article:section': 'Pet Safety',
  },
};

export default function PetSafetyPage() {
  const currentDate = new Date().toISOString();
  
  const guides = [
    { title: 'Travel with Pets', href: '/pet-safety/travel-with-pets', icon: '✈️' },
    { title: 'Home Proofing', href: '/pet-safety/home-proofing', icon: '🏠' },
    { title: 'Emergency Preparedness', href: '/pet-safety/emergency-preparedness', icon: '🚨' },
    { title: 'Seasonal Care', href: '/pet-safety/seasonal-care', icon: '🌤️' },
  ];

  // WebPage Schema
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://nearbypetcare.com/pet-safety',
    url: 'https://nearbypetcare.com/pet-safety',
    name: 'Pet Safety Guide: How to Keep Your Pet Safe at Home & While Traveling',
    description: 'Learn how to keep your pet safe with our comprehensive pet safety guide. Expert tips on traveling with pets, pet-proofing your home, emergency preparedness, and seasonal pet safety.',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    about: {
      '@type': 'Thing',
      name: 'Pet Safety',
      description: 'Comprehensive information about keeping pets safe at home, while traveling, during emergencies, and throughout different seasons.',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
        { '@type': 'ListItem', position: 2, name: 'Pet Safety', item: 'https://nearbypetcare.com/pet-safety' },
      ],
    },
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 600,
        height: 60,
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Pet Safety Guides',
      description: 'Comprehensive guides covering all aspects of pet safety',
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        url: `https://nearbypetcare.com${guide.href}`,
      })),
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Safety', item: 'https://nearbypetcare.com/pet-safety' },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/WebPage">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Safety', href: '/pet-safety' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🛡️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Safety & Protection</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse" aria-hidden="true">🚗</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Safety & Travel
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Keeping your pet safe is one of the most important parts of pet ownership. Whether you're traveling with your dog, pet-proofing your home for a new cat, or preparing for emergencies, our safety guides help you protect your pet. Learn how to create a safe environment, recognize potential hazards, and handle pet emergencies with confidence.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10" role="list">
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🏠</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Home Safety</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">✈️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Travel Tips</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🚨</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Emergency Prep</span>
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
              <nav aria-label="Pet Safety Guides">
                <h2 className="sr-only">Pet Safety Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {guides.map((guide, index) => (
                    <Link 
                      key={index} 
                      href={guide.href} 
                      className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Read guide: ${guide.title}`}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{guide.title}</h3>
                      <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                        Read Guide <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PetSafetySidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
