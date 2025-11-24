import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Norwegian Forest Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Norwegian Forest Cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Norwegian Forest Cat', 'Wegie', 'Norwegian Forest Cat breed', 'Norwegian Forest Cat care'],
  openGraph: { title: 'Norwegian Forest Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Norwegian Forest Cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/norwegian-forest-cat' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/norwegian-forest-cat' },
};

export default function NorwegianForestCatPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Norwegian Forest Cat"
        description="Norwegian Forest Cats, or 'Wegies,' are large, sturdy cats with thick, water-resistant coats. They are gentle, friendly, and known for their climbing abilities and love of heights."
        emoji="🐈"
        slug="norwegian-forest-cat"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (8-16 pounds)</li>
              <li>Lifespan: 14-16 years</li>
              <li>Temperament: Gentle, friendly, intelligent, independent, adaptable</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: Moderate (thick double coat, regular brushing, heavy seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Norwegian Forest Cats require regular brushing, especially during shedding seasons. They enjoy climbing and should have tall cat trees or shelves. They are adaptable and do well in various living situations. They need mental stimulation through toys and interactive play.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Norwegian Forest Cats are known for their gentle, friendly personalities. They are intelligent and independent but also enjoy human companionship. They are excellent climbers and love high places. They are generally quiet and make good family pets. They are adaptable and can adjust to different environments.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Norwegian Forest Cats can be prone to hip dysplasia, glycogen storage disease type IV, and certain heart conditions. Regular veterinary check-ups, maintaining a healthy weight, and proper grooming are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

