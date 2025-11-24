import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PuppiesKittensSidebar from '@/components/PuppiesKittensSidebar';

export const metadata: Metadata = {
  title: 'Puppy & Kitten Care Guide: How to Care for a New Puppy or Kitten | Nearby Pet Care',
  description: 'Learn how to care for a new puppy or kitten with our complete guide. Expert advice on the first 30 days, puppy and kitten vaccination schedules, training basics, and everything you need to know about caring for young pets.',
  keywords: ['puppy care', 'kitten care', 'how to care for a puppy', 'how to care for a kitten', 'new puppy guide', 'new kitten guide', 'puppy first 30 days', 'kitten first 30 days', 'puppy vaccinations', 'kitten vaccinations', 'puppy training', 'kitten training'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Puppies & Kittens Care Guide | Nearby Pet Care',
    description: 'Complete guide to caring for puppies and kittens. Expert advice on the first 30 days, vaccination schedules, and training basics.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/puppies-kittens',
    siteName: 'Nearby Pet Care',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Puppies & Kittens Care Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppies & Kittens Care Guide | Nearby Pet Care',
    description: 'Complete guide to caring for puppies and kittens. Expert advice on the first 30 days, vaccination schedules, and training basics.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
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
  alternates: { 
    canonical: 'https://nearbypetcare.com/puppies-kittens',
  },
  category: 'Pet Care',
};

export default function PuppiesKittensPage() {
  const guides = [
    { title: 'First 30 Days', href: '/puppies-kittens/first-30-days', icon: '📅', description: 'Essential guide to caring for your new puppy or kitten during their crucial first month at home.' },
    { title: 'Vaccination Timeline', href: '/puppies-kittens/vaccination-timeline', icon: '💉', description: 'Complete vaccination schedules and timelines for puppies and kittens to keep them protected.' },
    { title: 'Training Basics', href: '/puppies-kittens/training-basics', icon: '🎓', description: 'Fundamental training techniques and tips to start your puppy or kitten on the right path.' },
  ];

  const currentDate = new Date().toISOString();

  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Puppies & Kittens Care Guide',
    description: 'Complete guide to caring for puppies and kittens. Expert advice on the first 30 days, vaccination schedules, and training basics.',
    url: 'https://nearbypetcare.com/puppies-kittens',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    about: {
      '@type': 'Thing',
      name: 'Puppy and Kitten Care',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Puppy and Kitten Care Guides',
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        description: guide.description,
        url: `https://nearbypetcare.com${guide.href}`,
      })),
    },
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Puppies & Kittens',
        item: 'https://nearbypetcare.com/puppies-kittens',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/WebPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Puppies & Kittens', href: '/puppies-kittens' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">👶</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Young Pets</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse" aria-hidden="true">🐾</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Puppies & Kittens Care
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              There's nothing quite like the joy of bringing home a tiny bundle of fur. Those first few weeks with a new puppy or kitten are magical—full of firsts, cuddles, and yes, a few challenges too. Whether you're a first-time pet parent or welcoming another little one into your family, we're here to guide you through every step. From navigating those crucial first 30 days to understanding vaccination schedules and laying the groundwork for training, our guides are packed with practical, real-world advice that actually works.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10" role="list">
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">📅</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">First 30 Days</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">💉</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Vaccinations</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🎓</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Early Training</span>
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
              <nav aria-label="Puppy and kitten care guides">
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
              <PuppiesKittensSidebar />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
