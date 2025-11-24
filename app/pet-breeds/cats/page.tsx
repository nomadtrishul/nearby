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
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Explore different cat breeds and learn about their unique characteristics, temperament, grooming needs, and care requirements. Each breed has distinct traits that may suit different lifestyles.</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-6">Popular Cat Breeds</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <Link href="/pet-breeds/cats/persian" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Persian</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Luxurious long coat • Calm • Gentle • Low energy • High grooming</p>
                  </Link>
                  <Link href="/pet-breeds/cats/siamese" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Siamese</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Vocal • Social • Striking blue eyes • High energy • Affectionate</p>
                  </Link>
                  <Link href="/pet-breeds/cats/maine-coon" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Maine Coon</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Large • Friendly • Gentle giants • Dog-like • Intelligent</p>
                  </Link>
                  <Link href="/pet-breeds/cats/british-shorthair" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">British Shorthair</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Calm • Independent • Round faces • Easygoing • Low maintenance</p>
                  </Link>
                  <Link href="/pet-breeds/cats/ragdoll" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Ragdoll</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Docile • Gentle • Goes limp when held • Affectionate • Family-friendly</p>
                  </Link>
                  <Link href="/pet-breeds/cats/bengal" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Bengal</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Active • Intelligent • Wild appearance • High energy • Playful</p>
                  </Link>
                  <Link href="/pet-breeds/cats/scottish-fold" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Scottish Fold</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Sweet-natured • Unique folded ears • Calm • Adaptable • Quiet</p>
                  </Link>
                  <Link href="/pet-breeds/cats/sphynx" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Sphynx</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Hairless • Energetic • Extroverted • Affectionate • Specialized care</p>
                  </Link>
                  <Link href="/pet-breeds/cats/american-shorthair" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">American Shorthair</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Healthy • Easygoing • Friendly • Low-maintenance • Family pets</p>
                  </Link>
                  <Link href="/pet-breeds/cats/russian-blue" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Russian Blue</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Elegant • Intelligent • Blue-gray coat • Reserved • Loyal</p>
                  </Link>
                  <Link href="/pet-breeds/cats/abyssinian" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Abyssinian</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Active • Intelligent • Ticked coat • Curious • Playful</p>
                  </Link>
                  <Link href="/pet-breeds/cats/norwegian-forest-cat" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Norwegian Forest Cat</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Large • Thick coat • Gentle • Excellent climber • Adaptable</p>
                  </Link>
                  <Link href="/pet-breeds/cats/oriental-shorthair" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Oriental Shorthair</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Sleek • Large ears • Vocal • Active • Intelligent</p>
                  </Link>
                  <Link href="/pet-breeds/cats/burmese" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Burmese</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Affectionate • Social • People-oriented • Playful • Golden eyes</p>
                  </Link>
                  <Link href="/pet-breeds/cats/exotic-shorthair" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Exotic Shorthair</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Short-haired Persian • Sweet • Gentle • Easier grooming • Calm</p>
                  </Link>
                  <Link href="/pet-breeds/cats/himalayan" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Himalayan</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Long-haired Persian • Siamese coloring • Blue eyes • Sweet • Gentle</p>
                  </Link>
                  <Link href="/pet-breeds/cats/manx" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐈</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Manx</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Tailless • Playful • Intelligent • Dog-like • Social</p>
                  </Link>
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

