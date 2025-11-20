import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BreedsSidebar from '@/components/BreedsSidebar';

export const metadata: Metadata = {
  title: 'Parrots as Pets Guide | Nearby Pet Care',
  description: 'Complete guide to keeping parrots as pets. Learn about parrot species, characteristics, care requirements, diet, and health considerations.',
  keywords: ['parrots', 'parrot care', 'parrot species', 'parrot pets', 'parrot guide', 'parrot diet', 'parrot health'],
  openGraph: { title: 'Parrots as Pets Guide | Nearby Pet Care', description: 'Complete guide to keeping parrots as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/birds/parrots' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/birds/parrots' },
};

export default function ParrotsPage() {
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
            { name: 'Birds', href: '/pet-breeds/birds' },
            { name: 'Parrots', href: '/pet-breeds/birds/parrots' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🦜</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Bird Breed</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🦜</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Parrots as Pets
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Intelligent, social birds known for their ability to mimic speech and their vibrant colors. They require significant commitment, proper care, and mental stimulation to thrive as pets.
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
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Parrots are intelligent, social birds known for their ability to mimic speech and their vibrant colors. They require significant commitment, proper care, and mental stimulation to thrive as pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Varies by species (small to large)</li>
              <li>Lifespan: 15-80+ years depending on species</li>
              <li>Temperament: Intelligent, social, vocal, playful</li>
              <li>Activity Level: High (require daily interaction and mental stimulation)</li>
              <li>Grooming: Regular nail trims, occasional wing clipping</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Parrot Species</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>African Grey Parrots</li>
              <li>Amazon Parrots</li>
              <li>Macaws</li>
              <li>Cockatoos</li>
              <li>Conures</li>
              <li>Lovebirds</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Parrots need spacious cages, a varied diet of pellets, fresh fruits and vegetables, daily social interaction, and mental enrichment through toys and training. They require consistent routines and can be noisy, so consider your living situation carefully.</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Parrots are prone to respiratory issues, feather plucking (often due to stress or boredom), and nutritional deficiencies. Regular veterinary check-ups with an avian specialist are essential for maintaining their health.</p>
              </article>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Bird Breeds</Link>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="birds" currentBreed="/pet-breeds/birds/parrots" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

