import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best Pet Products: Reviews & Buying Guides for Dogs & Cats | Nearby Pet Care',
  description: 'Find the best pet products with our comprehensive reviews and buying guides. Expert reviews of pet food, toys, beds, grooming tools, and accessories to help you choose the right products for your pet.',
  keywords: ['best pet products', 'pet product reviews', 'best dog food', 'best cat food', 'best pet toys', 'best pet beds', 'pet buying guides', 'pet product comparison', 'dog products', 'cat products'],
  openGraph: {
    title: 'Pet Products Reviews & Buying Guides | Nearby Pet Care',
    description: 'Comprehensive reviews and buying guides for pet products.',
    type: 'website',
    url: 'https://nearbypetcare.com/pet-products',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Products Reviews & Buying Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Products Reviews & Buying Guides | Nearby Pet Care',
    description: 'Comprehensive reviews and buying guides for pet products.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products' },
};

export default function PetProductsPage() {
  const products = [
    { title: 'Best Dog Food', href: '/pet-products/best-dog-food', icon: '🍖' },
    { title: 'Best Cat Litter', href: '/pet-products/best-cat-litter', icon: '🐱' },
    { title: 'Best Grooming Tools', href: '/pet-products/best-grooming-tools', icon: '✂️' },
    { title: 'Best Pet Beds', href: '/pet-products/best-pet-beds', icon: '🛏️' },
    { title: 'Product Comparisons', href: '/pet-products/comparisons', icon: '⚖️' },
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
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Products', href: '/pet-products' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Reviews</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🛍️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Products Reviews
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Choosing the right products for your pet can be overwhelming with so many options. Whether you're looking for the best dog food, trying to find the right cat litter, or shopping for pet beds and toys, our product reviews and buying guides help you make informed decisions. We break down what to look for, what to avoid, and which products actually work.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍖</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Food Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛏️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Accessories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Comparisons</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Link key={index} href={product.href} className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{product.title}</h2>
                <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                  View Reviews <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

