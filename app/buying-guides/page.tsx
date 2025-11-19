import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Buying Guides: How to Choose the Best Products for Your Pet | Nearby Pet Care',
  description: 'Make informed purchasing decisions with our comprehensive pet buying guides. Expert advice on choosing the best pet food, pet insurance, cat litter, and other pet products for your dog or cat.',
  keywords: ['pet buying guides', 'how to choose pet products', 'best pet food guide', 'pet product buying guide', 'pet shopping guides', 'pet product recommendations', 'what to buy for a pet'],
  openGraph: {
    title: 'Pet Buying Guides | Nearby Pet Care',
    description: 'Comprehensive buying guides for pet products.',
    type: 'website',
    url: 'https://nearbypetcare.com/buying-guides',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Buying Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Buying Guides | Nearby Pet Care',
    description: 'Comprehensive buying guides for pet products.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/buying-guides' },
};

export default function BuyingGuidesPage() {
  const guides = [
    { title: 'Best Dog Food for Small Breeds', href: '/buying-guides/best-dog-food-for-small-breeds' },
    { title: 'Best Litter for Odour Control', href: '/buying-guides/best-litter-for-odour-control' },
    { title: 'Best Pet Insurance', href: '/buying-guides/best-pet-insurance' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Buying Guides', href: '/buying-guides' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">📚</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Buying Guides</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🛒</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Buying Guides
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Shopping for your pet shouldn't be a guessing game. Whether you're choosing the best dog food for small breeds, looking for pet insurance, or trying to find the right cat litter, our buying guides help you understand what to look for and what to avoid. We break down product features, compare options, and give you the information you need to make smart purchasing decisions for your pet.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍖</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Food Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Product Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {guides.map((guide, index) => (
              <Link key={index} href={guide.href} className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{guide.title}</h2>
                <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                  Read Guide <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

