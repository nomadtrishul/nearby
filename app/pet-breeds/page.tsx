import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Breeds Guide: Dog Breeds, Cat Breeds & Breed-Specific Care | Nearby Pet Care',
  description: 'Explore different pet breeds and learn about breed-specific care. Comprehensive guides on dog breeds, cat breeds, and their unique characteristics, health needs, and care requirements.',
  keywords: ['pet breeds', 'dog breeds', 'cat breeds', 'breed guide', 'breed care', 'dog breed information', 'cat breed information', 'breed characteristics', 'breed health', 'breed-specific care'],
  openGraph: {
    title: 'Pet Breeds & Breed-Specific Care | Nearby Pet Care',
    description: 'Comprehensive guide to pet breeds and breed-specific care.',
    type: 'website',
    url: 'https://nearbypetcare.com/pet-breeds',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Breeds & Breed-Specific Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Breeds & Breed-Specific Care | Nearby Pet Care',
    description: 'Comprehensive guide to pet breeds and breed-specific care.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds' },
};

export default function PetBreedsPage() {
  const categories = [
    { title: 'Dog Breeds', href: '/pet-breeds/dogs', icon: '🐕', description: 'Explore different dog breeds and their characteristics' },
    { title: 'Cat Breeds', href: '/pet-breeds/cats', icon: '🐈', description: 'Learn about various cat breeds and their needs' },
    { title: 'Small Mammals', href: '/pet-breeds/small-mammals', icon: '🐹', description: 'Information about rabbits, guinea pigs, and more' },
    { title: 'Birds', href: '/pet-breeds/birds', icon: '🦜', description: 'Guide to different bird species as pets' },
    { title: 'Exotic Pets', href: '/pet-breeds/exotics', icon: '🦎', description: 'Care information for exotic pet species' },
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
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Breeds', href: '/pet-breeds' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐾</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Breed Guides</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐕</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Breeds & Breed-Specific Care
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Every pet breed has unique characteristics, health needs, and care requirements. Whether you're researching dog breeds before adoption, learning about your cat's breed, or exploring exotic pets, our breed guides help you understand what makes each breed special and how to provide the best care for your specific pet.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐕</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Dog Breeds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐈</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Cat Breeds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🦜</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Exotic Pets</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{category.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 transition-colors">{category.description}</p>
                <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                  Explore <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

