import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
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
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Parrots"
        description="Intelligent, social birds known for their ability to mimic speech and their vibrant colors. They require significant commitment, proper care, and mental stimulation to thrive as pets."
        emoji="🦜"
        slug="parrots"
        category="birds"
        categoryName="Birds"
        categoryHref="/pet-breeds/birds"
      />

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <article className="prose prose-lg dark:prose-invert max-w-none">
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

