import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Manx Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Manx cats. Learn about their characteristics, tailless feature, temperament, and care requirements.',
  keywords: ['Manx', 'Manx cat', 'Manx breed', 'Manx care', 'tailless cat'],
  openGraph: { title: 'Manx Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Manx cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/manx' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/manx' },
};

export default function ManxPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Manx"
        description="Manx cats are known for their distinctive tailless or short-tailed appearance, rounded bodies, and playful, intelligent personalities. They are active, social, and make excellent family companions."
        emoji="🐈"
        slug="manx"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (8-12 pounds)</li>
              <li>Lifespan: 8-14 years</li>
              <li>Temperament: Playful, intelligent, social, active, loyal</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: Moderate (double coat, regular brushing)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Manx cats require regular playtime and mental stimulation, as they are active and intelligent. They enjoy interactive toys and games. They need regular grooming to maintain their double coat. They are adaptable to various living situations and get along well with children and other pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Manx cats are known for their playful, dog-like personalities. They are intelligent and can learn tricks. They are social and enjoy being around people. They are known for their unique hopping gait (due to longer hind legs) and their ability to jump high. They form strong bonds with their families and are loyal companions.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Manx cats can be prone to Manx syndrome (a condition affecting the spine and hindquarters in tailless cats), arthritis, and certain digestive issues. It's important to work with reputable breeders who screen for these conditions. Regular veterinary check-ups are essential for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

