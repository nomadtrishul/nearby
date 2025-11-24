import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';

export const metadata: Metadata = {
  title: 'Pet Health Guide: How to Keep Your Dog or Cat Healthy | Nearby Pet Care',
  description: 'Learn how to keep your pet healthy with our comprehensive pet health guide. Get expert advice on pet vaccinations, common pet diseases, pet first aid, parasite control, and recognizing when your pet needs a vet.',
  keywords: ['pet health', 'how to keep pet healthy', 'pet health care', 'dog health', 'cat health', 'pet wellness', 'pet vaccinations', 'pet diseases', 'pet first aid', 'pet health tips', 'signs pet needs vet', 'pet parasite control'],
  openGraph: {
    title: 'Pet Health Guide: How to Keep Your Dog or Cat Healthy | Nearby Pet Care',
    description: 'Learn how to keep your pet healthy with expert advice on pet vaccinations, common pet diseases, pet first aid, and recognizing when your pet needs a vet.',
    type: 'website',
    url: 'https://nearbypetcare.com/pet-health',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Health & Wellness Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Health & Wellness - Complete Guide | Nearby Pet Care',
    description: 'Comprehensive guide to pet health and wellness. Learn about common diseases, vaccinations, and maintaining your pet\'s health.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-health',
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
    'google-ai-mode': 'default',
  },
};

export default function PetHealthPage() {
  const webpageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Health & Wellness Guide',
    description: 'Comprehensive guide to pet health and wellness, including disease prevention, vaccinations, first aid, and maintaining your pet\'s health.',
    url: 'https://nearbypetcare.com/pet-health',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Common Pet Diseases', url: 'https://nearbypetcare.com/pet-health/common-diseases' },
        { '@type': 'ListItem', position: 2, name: 'Vaccination Schedules', url: 'https://nearbypetcare.com/pet-health/vaccination-schedules' },
        { '@type': 'ListItem', position: 3, name: 'Parasite Control', url: 'https://nearbypetcare.com/pet-health/parasite-control-ticks-fleas-worms' },
        { '@type': 'ListItem', position: 4, name: 'First Aid for Pets', url: 'https://nearbypetcare.com/pet-health/first-aid-for-pets' },
        { '@type': 'ListItem', position: 5, name: 'Skin and Coat Health', url: 'https://nearbypetcare.com/pet-health/skin-and-coat-health' },
        { '@type': 'ListItem', position: 6, name: 'Signs Your Pet Needs a Vet', url: 'https://nearbypetcare.com/pet-health/signs-your-pet-needs-a-vet' },
        { '@type': 'ListItem', position: 7, name: 'Mental Health & Anxiety', url: 'https://nearbypetcare.com/pet-health/mental-health-anxiety' },
        { '@type': 'ListItem', position: 8, name: 'Diagnostics & Tests', url: 'https://nearbypetcare.com/pet-health/diagnostics-and-tests' },
        { '@type': 'ListItem', position: 9, name: 'Seasonal Health Tips', url: 'https://nearbypetcare.com/pet-health/seasonal-health-tips' },
      ],
    },
  };

  const guides = [
    { title: 'Common Pet Diseases', href: '/pet-health/common-diseases', icon: '🦠', description: 'Learn about common diseases affecting dogs and cats, their symptoms, prevention, and treatment options.' },
    { title: 'Vaccination Schedules', href: '/pet-health/vaccination-schedules', icon: '💉', description: 'Essential vaccination schedules for puppies, kittens, and adult pets to keep them protected.' },
    { title: 'Parasite Control', href: '/pet-health/parasite-control-ticks-fleas-worms', icon: '🐛', description: 'Comprehensive guide to preventing and treating ticks, fleas, worms, and other parasites.' },
    { title: 'First Aid for Pets', href: '/pet-health/first-aid-for-pets', icon: '🩹', description: 'Essential first aid techniques and emergency care tips to help your pet in critical situations.' },
    { title: 'Skin and Coat Health', href: '/pet-health/skin-and-coat-health', icon: '✨', description: 'Maintain healthy skin and a shiny coat with proper grooming and care techniques.' },
    { title: 'Signs Your Pet Needs a Vet', href: '/pet-health/signs-your-pet-needs-a-vet', icon: '⚠️', description: 'Recognize warning signs and symptoms that indicate your pet needs immediate veterinary attention.' },
    { title: 'Mental Health & Anxiety', href: '/pet-health/mental-health-anxiety', icon: '🧠', description: 'Understand pet anxiety, stress, and mental health issues, plus effective management strategies.' },
    { title: 'Diagnostics & Tests', href: '/pet-health/diagnostics-and-tests', icon: '🔬', description: 'Learn about common veterinary diagnostic tests and what they mean for your pet\'s health.' },
    { title: 'Seasonal Health Tips', href: '/pet-health/seasonal-health-tips', icon: '🌤️', description: 'Season-specific health care tips to keep your pet healthy throughout the year.' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageStructuredData) }} />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dxxzhrmpm/image/upload/v1763580822/pexels-tima-miroshnichenko-6235240_xlrvxa.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-indigo-50/85 to-purple-50/90 dark:from-gray-900/90 dark:via-gray-800/85 dark:to-gray-900/90"></div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Health', href: '/pet-health' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">💚</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Health & Wellness</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🩺</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Health & Wellness
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Wondering how to keep your pet healthy? Whether you're looking for pet vaccination schedules, learning to recognize common pet diseases, or need pet first aid tips, we've got practical guides that help you understand your pet's health better. Learn when to worry, when to call the vet, and how to prevent health problems before they start.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🦠</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Disease Prevention</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💉</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Vaccination Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🩹</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">First Aid Tips</span>
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
              <HealthSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

