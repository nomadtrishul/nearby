import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BreedsSidebar from '@/components/BreedsSidebar';

export const metadata: Metadata = {
  title: 'Small Mammal Pets Guide | Nearby Pet Care',
  description: 'Guide to small mammal pets including rabbits, guinea pigs, hamsters, and more. Learn about their care requirements.',
  keywords: ['small mammals', 'rabbits', 'guinea pigs', 'hamsters', 'small pet care'],
  openGraph: { title: 'Small Mammal Pets Guide | Nearby Pet Care', description: 'Guide to small mammal pets and their care requirements.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals' },
};

export default function SmallMammalsPage() {
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
            { name: 'Small Mammals', href: '/pet-breeds/small-mammals' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐹</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Small Mammals</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐹</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Small Mammal Pets
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Small mammals like rabbits, guinea pigs, hamsters, and ferrets make wonderful pets. Learn about their specific care requirements, housing needs, and health considerations.
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Small mammals like rabbits, guinea pigs, hamsters, and ferrets make wonderful pets. Learn about their specific care requirements, housing needs, and health considerations.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Small Mammal Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link href="/pet-breeds/small-mammals/rabbit" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rabbit</h3>
                <p className="text-gray-600 dark:text-gray-400">Social, intelligent pets that can be litter-trained</p>
              </Link>
              <Link href="/pet-breeds/small-mammals/guinea-pig" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Guinea Pig</h3>
                <p className="text-gray-600 dark:text-gray-400">Gentle, social pets known for their vocalizations</p>
              </Link>
              <Link href="/pet-breeds/small-mammals/hamster" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hamster</h3>
                <p className="text-gray-600 dark:text-gray-400">Small, nocturnal rodents popular as pets</p>
              </Link>
              <Link href="/pet-breeds/small-mammals/ferret" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ferret</h3>
                <p className="text-gray-600 dark:text-gray-400">Playful, curious pets requiring significant attention</p>
              </Link>
              <Link href="/pet-breeds/small-mammals/rat" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rat</h3>
                <p className="text-gray-600 dark:text-gray-400">Intelligent, social pets that form strong bonds</p>
              </Link>
              <Link href="/pet-breeds/small-mammals/mouse" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mouse</h3>
                <p className="text-gray-600 dark:text-gray-400">Small, active pets that are entertaining to watch</p>
              </Link>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="small-mammals" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

