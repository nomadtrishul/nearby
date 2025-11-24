import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Burmese Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Burmese cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Burmese', 'Burmese cat', 'Burmese breed', 'Burmese care'],
  openGraph: { title: 'Burmese Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Burmese cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/burmese' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/burmese' },
};

export default function BurmesePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Burmese"
        description="Burmese cats are known for their sleek, muscular build, expressive golden eyes, and affectionate, people-oriented personalities. They are social, playful, and form strong bonds with their families."
        emoji="🐈"
        slug="burmese"
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
              <li>Lifespan: 10-16 years</li>
              <li>Temperament: Affectionate, social, playful, people-oriented, vocal</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: Low (short, satin-like coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Burmese cats require regular playtime and mental stimulation, as they are active and intelligent. They thrive on human companionship and do not do well when left alone for long periods. They are relatively low-maintenance in terms of grooming but need regular interaction and attention from their owners.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Burmese cats are known for their dog-like personalities - they are social, affectionate, and enjoy being around people. They are playful well into adulthood and enjoy interactive toys and games. They are vocal and will communicate with their owners. They form strong bonds with their families and are known for their loving, gentle nature.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Burmese cats can be prone to hypokalemic polymyopathy (muscle weakness), diabetes, and certain eye conditions. Regular veterinary check-ups and maintaining a healthy weight are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

