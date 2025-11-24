import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import TrainingSidebar from '@/components/TrainingSidebar';

export const metadata: Metadata = {
  title: 'Pet Training Guide: How to Train Your Dog or Cat | Nearby Pet Care',
  description: 'Learn how to train your pet with effective dog training tips and cat training techniques. Expert guides on potty training, obedience training, crate training, and solving common pet behavior problems.',
  keywords: ['pet training', 'how to train a dog', 'how to train a cat', 'dog training tips', 'cat training', 'potty training', 'obedience training', 'crate training', 'pet behavior', 'dog behavior problems', 'cat behavior', 'puppy training', 'kitten training'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pet Training Guide: How to Train Your Dog or Cat | Nearby Pet Care',
    description: 'Learn how to train your pet with effective dog training tips and cat training techniques. Expert guides on potty training, obedience training, and solving behavior problems.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/pet-training',
    siteName: 'Nearby Pet Care',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Training & Behavior Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Training & Behavior - Complete Guide | Nearby Pet Care',
    description: 'Comprehensive guide to pet training and behavior.',
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
    canonical: 'https://nearbypetcare.com/pet-training',
  },
  category: 'Pet Training',
};

export default function PetTrainingPage() {
  const guides = [
    { title: 'Obedience Training', href: '/pet-training/obedience-training', icon: '🎓', description: 'Learn essential obedience commands and training techniques to teach your pet basic and advanced skills.' },
    { title: 'Potty Training', href: '/pet-training/potty-training', icon: '🚽', description: 'Effective potty training methods and tips for puppies, kittens, and adult pets.' },
    { title: 'Aggression and Anxiety', href: '/pet-training/aggression-and-anxiety', icon: '😰', description: 'Understand and address pet aggression and anxiety issues with proven training strategies.' },
    { title: 'Crate Training', href: '/pet-training/crate-training', icon: '📦', description: 'Step-by-step guide to crate training your pet safely and effectively for comfort and security.' },
    { title: 'Socialisation', href: '/pet-training/socialisation', icon: '👥', description: 'Learn how to properly socialize your pet with people, other animals, and new environments.' },
    { title: 'Training Tools Reviews', href: '/pet-training/training-tools-reviews', icon: '🛠️', description: 'Expert reviews and recommendations for the best training tools and equipment.' },
  ];

  const currentDate = new Date().toISOString();

  // CollectionPage Structured Data for main category page
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Training & Behavior Guide',
    description: 'Comprehensive guides on pet training and behavior. Learn how to train your dog or cat with effective techniques.',
    url: 'https://nearbypetcare.com/pet-training',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        description: guide.description,
        url: `https://nearbypetcare.com${guide.href}`,
      })),
    },
    breadcrumb: {
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
          name: 'Pet Training',
          item: 'https://nearbypetcare.com/pet-training',
        },
      ],
    },
  };

  // Breadcrumb Structured Data
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
        name: 'Pet Training',
        item: 'https://nearbypetcare.com/pet-training',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/CollectionPage">
      {/* CollectionPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
      />
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Training', href: '/pet-training' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🎓</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Training & Behavior</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐕</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Training & Behavior
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether you're learning how to train a puppy, teaching your cat new behaviors, or dealing with pet behavior problems, we've got practical training tips that actually work. From potty training basics to advanced obedience training, our guides break down pet training into simple steps you can follow at home.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Obedience Training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚽</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Potty Training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">😊</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Behavior Solutions</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {guides.map((guide, index) => (
                  <Link 
                    key={index} 
                    href={guide.href} 
                    className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col min-h-[200px] text-center"
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
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <TrainingSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

