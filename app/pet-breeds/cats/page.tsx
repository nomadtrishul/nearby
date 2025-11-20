import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BreedsSidebar from '@/components/BreedsSidebar';

export const metadata: Metadata = {
  title: 'Cat Breeds Guide | Nearby Pet Care',
  description: 'Comprehensive guide to cat breeds. Learn about different cat breeds, their characteristics, temperament, and care requirements.',
  keywords: ['cat breeds', 'cat breed guide', 'cat breed information', 'cat characteristics'],
  openGraph: { title: 'Cat Breeds Guide | Nearby Pet Care', description: 'Comprehensive guide to cat breeds and their characteristics.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats' },
};

export default function CatBreedsPage() {
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
            { name: 'Cats', href: '/pet-breeds/cats' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐈</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Cat Breeds</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐈</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Cat Breeds Guide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore different cat breeds and learn about their unique characteristics, temperament, grooming needs, and care requirements. Each breed has distinct traits that may suit different lifestyles.
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
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Explore different cat breeds and learn about their unique characteristics, temperament, grooming needs, and care requirements. Each breed has distinct traits that may suit different lifestyles.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Cat Breeds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link href="/pet-breeds/cats/persian" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Persian</h3>
                <p className="text-gray-600 dark:text-gray-400">Luxurious long coat and calm, gentle personality</p>
              </Link>
              <Link href="/pet-breeds/cats/siamese" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Siamese</h3>
                <p className="text-gray-600 dark:text-gray-400">Vocal, social cats with striking blue eyes</p>
              </Link>
              <Link href="/pet-breeds/cats/maine-coon" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Maine Coon</h3>
                <p className="text-gray-600 dark:text-gray-400">Large, friendly "gentle giants" with dog-like personalities</p>
              </Link>
              <Link href="/pet-breeds/cats/british-shorthair" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">British Shorthair</h3>
                <p className="text-gray-600 dark:text-gray-400">Calm, independent cats with round faces</p>
              </Link>
              <Link href="/pet-breeds/cats/ragdoll" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ragdoll</h3>
                <p className="text-gray-600 dark:text-gray-400">Docile, gentle cats that go limp when held</p>
              </Link>
              <Link href="/pet-breeds/cats/bengal" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bengal</h3>
                <p className="text-gray-600 dark:text-gray-400">Active, intelligent cats with wild appearance</p>
              </Link>
              <Link href="/pet-breeds/cats/scottish-fold" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Scottish Fold</h3>
                <p className="text-gray-600 dark:text-gray-400">Sweet-natured cats with unique folded ears</p>
              </Link>
              <Link href="/pet-breeds/cats/sphynx" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sphynx</h3>
                <p className="text-gray-600 dark:text-gray-400">Hairless, energetic cats with extroverted personalities</p>
              </Link>
            </div>
          </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="cats" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

