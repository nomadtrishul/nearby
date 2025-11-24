import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Abyssinian Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Abyssinian cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Abyssinian', 'Abyssinian cat', 'Abyssinian breed', 'Abyssinian care'],
  openGraph: { title: 'Abyssinian Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Abyssinian cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/abyssinian' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/abyssinian' },
};

export default function AbyssinianPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Abyssinian"
        description="Abyssinians are active, intelligent cats known for their distinctive ticked coat pattern and playful personalities. They are curious, energetic, and form strong bonds with their owners."
        emoji="🐈"
        slug="abyssinian"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (6-10 pounds)</li>
              <li>Lifespan: 9-15 years</li>
              <li>Temperament: Active, intelligent, curious, playful, social</li>
              <li>Energy Level: High</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Abyssinians require plenty of mental and physical stimulation. They are active cats that enjoy climbing, playing, and exploring. They need interactive toys, puzzle feeders, and regular playtime. They are social and do best with human interaction or another pet companion.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Abyssinians are known for their active, curious personalities. They are intelligent and can learn tricks. They are playful and maintain their kitten-like energy well into adulthood. They form strong bonds with their owners and may follow them around the house. They are social and enjoy being part of the family activities.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Abyssinians can be prone to certain genetic conditions including progressive retinal atrophy, renal amyloidosis, and patellar luxation. Regular veterinary check-ups and genetic testing from responsible breeders help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

