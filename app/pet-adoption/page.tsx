import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AdoptionSidebar from '@/components/AdoptionSidebar';

export const metadata: Metadata = {
  title: 'Pet Adoption Guide: How to Adopt a Dog or Cat | Nearby Pet Care',
  description: 'Complete guide to pet adoption and rescue. Learn how to adopt a dog or cat, prepare your home, use our adoption checklist, and successfully transition a rescue pet. Expert advice for first-time and experienced pet adopters.',
  keywords: ['pet adoption', 'how to adopt a pet', 'adopting a dog', 'adopting a cat', 'rescue pets', 'pet rescue guide', 'adoption checklist', 'preparing for pet adoption', 'rescue pet care', 'pet adoption process', 'adopt a rescue dog', 'adopt a rescue cat', 'pet adoption tips', 'rescue pet transition'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  openGraph: {
    title: 'Pet Adoption & Rescue Guide: Complete Guide to Adopting Pets | Nearby Pet Care',
    description: 'Complete guide to pet adoption and rescue. Learn how to adopt a dog or cat, prepare your home, use our adoption checklist, and successfully transition a rescue pet.',
    type: 'website',
    url: 'https://nearbypetcare.com/pet-adoption',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Adoption & Rescue Guide - Complete Guide to Adopting Dogs and Cats',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Adoption & Rescue Guide: Complete Guide to Adopting Pets',
    description: 'Complete guide to pet adoption and rescue. Learn how to adopt a dog or cat, prepare your home, and successfully transition a rescue pet.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
  },
  alternates: { 
    canonical: 'https://nearbypetcare.com/pet-adoption',
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
    'article:published_time': '2024-01-01T00:00:00Z',
    'article:modified_time': new Date().toISOString(),
  },
};

export default function PetAdoptionPage() {
  const baseUrl = 'https://nearbypetcare.com';
  const currentDate = new Date().toISOString();
  
  const guides = [
    { title: 'Preparing Your Home', href: '/pet-adoption/preparing-home', icon: '🏡', description: 'Essential steps to prepare your home and create a safe, welcoming environment for your new pet.' },
    { title: 'Transitioning a Rescue', href: '/pet-adoption/transitioning-a-rescue', icon: '🔄', description: 'Guidance on helping your rescue pet adjust to their new home and family with patience and understanding.' },
    { title: 'Adoption Checklist', href: '/pet-adoption/adoption-checklist', icon: '📋', description: 'Complete checklist to ensure you\'re fully prepared for pet adoption, from supplies to vet visits.' },
  ];

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pet Adoption',
        item: `${baseUrl}/pet-adoption`,
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/pet-adoption#webpage`,
    name: 'Pet Adoption & Rescue Guide',
    description: 'Complete guide to pet adoption and rescue. Learn how to adopt a dog or cat, prepare your home, use our adoption checklist, and successfully transition a rescue pet.',
    url: `${baseUrl}/pet-adoption`,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    breadcrumb: breadcrumbStructuredData,
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: currentDate,
    mainEntity: {
      '@type': 'ItemList',
      name: 'Pet Adoption Guides',
      description: 'Comprehensive guides for pet adoption and rescue',
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        description: guide.description,
        url: `${baseUrl}${guide.href}`,
      })),
    },
  };

  // CollectionPage Structured Data
  const collectionPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${baseUrl}/pet-adoption#collectionpage`,
    name: 'Pet Adoption & Rescue Guide',
    description: 'Complete collection of pet adoption guides and resources',
    url: `${baseUrl}/pet-adoption`,
    inLanguage: 'en-US',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: guide.title,
          description: guide.description,
          url: `${baseUrl}${guide.href}`,
        },
      })),
    },
  };

  // FAQ Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I adopt a pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To adopt a pet, start by researching local shelters and rescue organizations. Complete an adoption application, meet with potential pets, and prepare your home. Our comprehensive adoption checklist and guides will help you through every step of the process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I prepare before adopting a pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Before adopting, prepare your home with essential supplies like food bowls, beds, toys, and safety items. Pet-proof your home by removing hazards, securing electrical cords, and creating a safe space. Review our preparing your home guide for a complete checklist.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take for a rescue pet to adjust?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rescue pets typically follow the 3-3-3 rule: 3 days to decompress, 3 weeks to start settling in, and 3 months to feel at home. However, every pet is different, and some may need more or less time. Patience, consistency, and understanding are key during the transition period.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in an adoption checklist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An adoption checklist includes lifestyle assessment, financial planning, finding a veterinarian, pet-proofing your home, gathering essential supplies, setting up a quiet space, and preparing for adoption day. Our comprehensive checklist covers everything you need to know.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Adoption Guide">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden" aria-label="Pet Adoption Hero Section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Adoption', href: '/pet-adoption' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">❤️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Adoption & Rescue</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🏠</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Adoption & Rescue
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Adopting a pet is one of the most rewarding experiences, but it also comes with important decisions and preparations. Whether you're adopting a dog or cat for the first time, or welcoming a rescue pet into your home, our adoption guides help you prepare your home, understand what to expect, and successfully transition your new companion. Learn how to make the adoption process smooth for both you and your new pet.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Adoption Checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏡</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Home Preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Transition Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content - Guides Grid */}
            <div className="lg:col-span-2">
              <nav aria-label="Pet Adoption Guides">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {guides.map((guide, index) => (
                    <Link 
                      key={index} 
                      href={guide.href} 
                      className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col min-h-[200px] text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <AdoptionSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

