import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Senior Pet Care Guide: How to Care for an Aging Dog or Cat | Nearby Pet Care',
  description: 'Learn how to care for your senior pet with our comprehensive guide. Expert advice on senior dog care, senior cat care, mobility support, diet changes, and end-of-life care for aging pets.',
  keywords: ['senior pet care', 'how to care for senior pet', 'elderly pet care', 'aging pet care', 'senior dog care', 'senior cat care', 'old dog care', 'old cat care', 'senior pet health', 'aging pet health'],
  openGraph: {
    title: 'Senior Pet Care Guide | Nearby Pet Care',
    description: 'Comprehensive guide to caring for senior pets.',
    type: 'website',
    url: 'https://nearbypetcare.com/senior-pets',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Senior Pet Care Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Pet Care Guide | Nearby Pet Care',
    description: 'Comprehensive guide to caring for senior pets.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/senior-pets' },
};

export default function SeniorPetsPage() {
  const guides = [
    { title: 'Mobility Support', href: '/senior-pets/mobility-support' },
    { title: 'Senior Diet Guides', href: '/senior-pets/senior-diet-guides' },
    { title: 'End-of-Life Care', href: '/senior-pets/end-of-life-care' },
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
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Senior Pets', href: '/senior-pets' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">👴</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Senior Care</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">❤️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Senior Pet Care
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              As your pet ages, their care needs change. Whether you're caring for a senior dog or an older cat, understanding how to adapt their care is essential. Our senior pet care guides help you recognize age-related changes, adjust their diet and exercise, provide mobility support, and ensure your aging pet stays comfortable and healthy in their golden years.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚶</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Mobility Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍽️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Senior Diet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💝</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Comfort Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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

