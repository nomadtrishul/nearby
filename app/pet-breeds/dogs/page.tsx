import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BreedsSidebar from '@/components/BreedsSidebar';

export const metadata: Metadata = {
  title: 'Dog Breeds Guide | Nearby Pet Care',
  description: 'Comprehensive guide to dog breeds. Learn about different dog breeds, their characteristics, temperament, and care requirements.',
  keywords: ['dog breeds', 'dog breed guide', 'dog breed information', 'dog characteristics'],
  openGraph: { title: 'Dog Breeds Guide | Nearby Pet Care', description: 'Comprehensive guide to dog breeds and their characteristics.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs' },
};

export default function DogBreedsPage() {
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
            { name: 'Dogs', href: '/pet-breeds/dogs' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐕</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Dog Breeds</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐕</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dog Breeds Guide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore different dog breeds and learn about their unique characteristics, temperament, exercise needs, and care requirements. Each breed has specific traits that may make them more suitable for certain lifestyles.
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
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Explore different dog breeds and learn about their unique characteristics, temperament, exercise needs, and care requirements. Each breed has specific traits that may make them more suitable for certain lifestyles.</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-6">Popular Dog Breeds</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <Link href="/pet-breeds/dogs/labrador-retriever" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Labrador Retriever</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">America's most popular breed • Friendly • Versatile • Great with families</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/golden-retriever" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Golden Retriever</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Friendly • Intelligent • Family dogs • Beautiful golden coats</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/german-shepherd" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">German Shepherd</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Intelligent • Loyal • Working dogs • Courageous • Protective</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/french-bulldog" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">French Bulldog</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Small • Muscular • Bat-like ears • Apartment-friendly • Adaptable</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/bulldog" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Bulldog</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Calm • Friendly • Wrinkled faces • Low energy • Gentle</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/poodle" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Poodle</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Highly intelligent • Hypoallergenic • Curly coats • Three sizes • Trainable</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/beagle" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Beagle</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Friendly • Curious • Excellent sense of smell • Great with kids • Merry</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/rottweiler" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Rottweiler</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Confident • Loyal • Protective • Strong • Calm</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/dachshund" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Dachshund</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Clever • Lively • Long bodies • Courageous • Independent</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/siberian-husky" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Siberian Husky</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Outgoing • Energetic • Striking appearance • Friendly • Mischievous</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/shih-tzu" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Shih Tzu</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Affectionate • Outgoing • Long flowing coats • Alert • Apartment-friendly</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/boxer" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Boxer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Playful • Energetic • Great with children • Patient • Loyal</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/great-dane" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Great Dane</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Gentle giants • Friendly • Patient • Dependable • Family dogs</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/yorkie" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Yorkshire Terrier</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Small • Confident • Big personalities • Bold • Energetic</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/australian-shepherd" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Australian Shepherd</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Intelligent • Energetic • Working dogs • Beautiful coats • Versatile</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/border-collie" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Border Collie</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Most intelligent breed • Energetic • Work-oriented • Alert • Responsive</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/cocker-spaniel" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Cocker Spaniel</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Gentle • Merry • Beautiful silky coats • Affectionate • Adaptable</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/chihuahua" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Chihuahua</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Tiny • Big bold personalities • Alert • Confident • Loyal</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/pomeranian" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Pomeranian</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Tiny • Fluffy • Confident personalities • Intelligent • Lively</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/bernese-mountain-dog" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Bernese Mountain Dog</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Gentle giants • Tri-color coats • Calm • Family-friendly • Loyal</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/cane-corso" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Cane Corso</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Powerful • Protective • Intelligent • Confident • Loyal</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/cavalier-king-charles-spaniel" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Cavalier King Charles Spaniel</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Affectionate • Gentle • Sweet expressions • Family-friendly • Adaptable</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/doberman-pinscher" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Doberman Pinscher</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Intelligent • Loyal • Athletic • Protective • Trainable</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/german-shorthaired-pointer" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">German Shorthaired Pointer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Versatile • Athletic • Intelligent • Friendly • Hunting dogs</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/miniature-schnauzer" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Miniature Schnauzer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Alert • Friendly • Distinctive beards • Intelligent • Spirited</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/pembroke-welsh-corgi" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Pembroke Welsh Corgi</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Short legs • Big personalities • Intelligent • Active • Herding dogs</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/shiba-inu" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Shiba Inu</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Alert • Independent • Fox-like appearance • Bold • Spirited</p>
                  </Link>
                  <Link href="/pet-breeds/dogs/saint-bernard" className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🐕</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Saint Bernard</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Gentle giants • Rescue history • Friendly • Patient • Dependable</p>
                  </Link>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Breed-Specific Care</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Different breeds have unique health considerations, exercise requirements, and grooming needs. Understanding breed-specific care helps ensure your dog lives a happy, healthy life.</p>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="dogs" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

