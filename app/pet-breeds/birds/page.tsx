import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Bird Pets Guide',
  description: 'Guide to pet birds including parrots, canaries, finches, and more. Learn about bird care, housing, and health.',
  keywords: ['pet birds', 'parrots', 'canaries', 'bird care', 'pet bird guide'],
  pathname: '/pet-breeds/birds',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Bird Pets Guide',
    type: 'image/png',
  }],
});

export default function BirdsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Birds', href: '/pet-breeds/birds' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🦜</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Bird Breeds</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🦜</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Bird Pets Guide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Birds make intelligent and social pets. Learn about different bird species, their care requirements, housing needs, and health considerations.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Birds make intelligent and social pets. Learn about different bird species, their care requirements, housing needs, and health considerations.</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-6">Popular Pet Birds</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <Link href="/pet-breeds/birds/parrots" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🦜</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Parrots</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Intelligent • Social • Mimic speech • Long-lived • Complex care</p>
                  </Link>
                  <Link href="/pet-breeds/birds/cockatiels" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🦜</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Cockatiels</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Friendly • Intelligent • Learn tricks • Social • Whistling</p>
                  </Link>
                  <Link href="/pet-breeds/birds/budgies" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🦜</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Budgies</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Small • Colorful • Beginners • Social • Easy to care for</p>
                  </Link>
                  <Link href="/pet-breeds/birds/canaries" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🦜</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Canaries</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Beautiful singing • Vibrant colors • Melodious • Independent • Low maintenance</p>
                  </Link>
                  <Link href="/pet-breeds/birds/finches" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🦜</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Finches</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Small • Active • Pairs or groups • Social • Entertaining</p>
                  </Link>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="birds" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

