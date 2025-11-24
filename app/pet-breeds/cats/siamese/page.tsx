import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Siamese Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Siamese cats. Learn about their characteristics, temperament, vocal nature, and care requirements.',
  keywords: ['Siamese cat', 'Siamese breed', 'Siamese cat care', 'Siamese cat temperament', 'vocal cat breed'],
  openGraph: { title: 'Siamese Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Siamese cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/siamese' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/siamese' },
};

export default function SiameseCatPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Siamese"
        description="Siamese cats are known for their striking blue eyes, distinctive color points, and highly vocal, social personalities. They are intelligent, active, and form strong bonds with their owners."
        emoji="🐈"
        slug="siamese"
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
              <li>Lifespan: 15-20 years</li>
              <li>Temperament: Social, vocal, intelligent, active, affectionate</li>
              <li>Energy Level: High</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Siamese cats require plenty of social interaction and mental stimulation. They are highly vocal and will "talk" to their owners. They need interactive toys, puzzle feeders, and regular playtime. They do best in homes where they receive lots of attention.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Siamese cats are extroverted and demand attention. They are known for their loud, distinctive meows and will follow their owners around the house. They are intelligent and can learn tricks, and they enjoy interactive play.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Siamese cats can be prone to respiratory issues, dental problems, and certain genetic conditions like progressive retinal atrophy. Regular veterinary care and dental hygiene are important for maintaining their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

