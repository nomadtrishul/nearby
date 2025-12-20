import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';
import { Dog, Cat, Bird, Rat, Search, ArrowRight, Heart, Info, Star, Scale, Calculator, Stethoscope, ChevronRight } from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Breeds Guide: Dogs, Cats & More',
  description: 'Explore different pet breeds and learn about breed-specific care. Comprehensive guides on dog breeds, cat breeds, and their unique characteristics.',
  keywords: ['pet breeds', 'dog breeds', 'cat breeds', 'breed guide', 'breed care', 'dog breed information', 'cat breed information', 'breed characteristics', 'breed health', 'breed-specific care'],
  pathname: '/pet-breeds',
  type: 'website',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Breeds & Breed-Specific Care',
      type: 'image/png',
    },
  ],
});

export default function PetBreedsPage() {
  const categories = [
    {
      title: 'Dog Breeds',
      href: '/pet-breeds/dogs',
      icon: <Dog className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
      description: 'Explore our comprehensive guide to dog breeds from around the world. From loyal family guardians and energetic working dogs to affectionate toy breeds, discover detailed profiles on temperament, trainability, grooming needs, and health considerations to find your perfect canine companion.',
      traits: ['Family Friendly', 'Working', 'Toy', 'Herding'],
      stats: ['300+ Breeds', 'Varied Sizes'],
      popular: true
    },
    {
      title: 'Cat Breeds',
      href: '/pet-breeds/cats',
      icon: <Cat className="w-8 h-8" />,
      color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400',
      description: 'Dive into the fascinating world of cat breeds. Whether you\'re looking for a vocal Siamese, a gentle Ragdoll, or a playful Bengal, our cat breed guides cover personality traits, hypoallergenic options, and care requirements for every type of feline friend.',
      traits: ['Hypoallergenic', 'Shorthair', 'Longhair', 'Calm'],
      stats: ['70+ Breeds', 'Indoor/Outdoor'],
      popular: true
    },
    {
      title: 'Small Mammals',
      href: '/pet-breeds/small-mammals',
      icon: <Rat className="w-8 h-8" />,
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
      description: 'Small pets can bring huge joy to your home. Learn about the care, diet, and social needs of popular small mammals like hamsters, guinea pigs, rabbits, and ferrets. Perfect for apartment living and first-time pet owners.',
      traits: ['Hamsters', 'Rabbits', 'Guinea Pigs', 'Ferrets'],
      stats: ['Low Space', 'Beginner Friendly'],
      popular: false
    },
    {
      title: 'Birds',
      href: '/pet-breeds/birds',
      icon: <Bird className="w-8 h-8" />,
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
      description: 'Discover the vibrant and intelligent world of pet birds. From singing canaries and talking parrots to social budgies, understand the lifespan, social needs, and vocal levels of different avian species to choose the right feathered friend.',
      traits: ['Parrots', 'Finches', 'Canaries', 'Cockatiels'],
      stats: ['High Intelligence', 'Long Lifespan'],
      popular: false
    },
    {
      title: 'Exotic Pets',
      href: '/pet-breeds/exotics',
      icon: <Star className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
      description: 'For those seeking something strictly unique, explore our guides on exotic pets. Learn about the specialized habitats, dietary needs, and legal considerations for keeping reptiles, amphibians, and invertebrates responsibly.',
      traits: ['Reptiles', 'Amphibians', 'Invertebrates', 'Rare'],
      stats: ['Specialized Care', 'Unique Setups'],
      popular: false
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pb-16 sm:pb-24">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-[100%] blur-3xl opacity-60" />
          <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-sky-100/40 dark:bg-sky-900/20 rounded-full blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-indigo-100/40 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pt-8 mb-8">
            <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Breeds', href: '/pet-breeds' }]} />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 backdrop-blur-sm">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Comprehensive Breed Guides</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Discover Your Perfect <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient-x">
                Pet Companion
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore our extensive collection of breed guides. Whether you're looking for a loyal dog, an independent cat, or something more exotic, find detailed information to make the right choice.
            </p>

            {/* Search Bar - Visual Only for now */}
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search for a breed (e.g., 'Golden Retriever')..."
                className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 outline-none"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick stats or tags */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {['Family Friendly', 'Apartment Living', 'Low Maintenance', 'Hypoallergenic'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* Breed Categories Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Breed Categories</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{categories.length} Categories available</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.href}
                    className="group relative flex flex-col p-6 sm:p-8 bg-white dark:bg-gray-800/50 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Background decoration */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${category.description.includes("Dog") ? "bg-blue-50 dark:bg-blue-900/10" : "bg-gray-50 dark:bg-gray-700/10"} rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500`} />

                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl ${category.color} transition-colors duration-300`}>
                        {category.icon}
                      </div>
                      {category.popular && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                          <Heart className="w-3 h-3 fill-current" /> Popular
                        </span>
                      )}
                    </div>

                    <div className="relative z-10 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-4">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.stats?.map((stat) => (
                          <span key={stat} className="px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                            {stat}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.traits.slice(0, 3).map((trait) => (
                          <span key={trait} className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-gray-800 rounded-lg">
                            {trait}
                          </span>
                        ))}
                        {category.traits.length > 3 && (
                          <span className="px-2 py-1 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            +{category.traits.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                        View Guides <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0 space-y-8">
              <div className="lg:sticky lg:top-24">
                <BreedsSidebar />

                {/* Additional Sidebar Widgets could go here */}
                <div className="mt-8 p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-2">Need Vet Advice?</h3>
                    <p className="text-indigo-100 text-sm mb-4">Chat with a licensed veterinarian 24/7 for immediate answers.</p>
                    <button className="w-full py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl text-sm font-semibold transition-colors border border-white/20">
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interlinking Sections */}
      <section className="py-16 sm:py-24 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Comparisons */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Scale className="w-24 h-24 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Puppy vs Kitten?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Not sure which pet is right for your lifestyle? Compare breeds to find your perfect match.
                </p>
                <Link href="/comparisons/puppy-vs-kitten" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Compare Pets <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Tools */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calculator className="w-24 h-24 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Pet Tools</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Use our free tools like Pet Name Generators, Age Calculators, and more.
                </p>
                <Link href="/tools" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline">
                  Try Tools <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Care Guides */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Stethoscope className="w-24 h-24 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Health & Care</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Expert advice on training, nutrition, and health to keep your pet happy and healthy.
                </p>
                <Link href="/pet-care-tips" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                  Read Guides <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}


