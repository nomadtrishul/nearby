import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Canaries as Pets Guide | Nearby Pet Care',
  description: 'Complete guide to keeping canaries as pets. Learn about canary care, housing, diet, and health considerations.',
  keywords: ['canaries', 'canary care', 'canary pets', 'canary guide', 'canary diet', 'canary health'],
  openGraph: { title: 'Canaries as Pets Guide | Nearby Pet Care', description: 'Complete guide to keeping canaries as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/birds/canaries' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/birds/canaries' },
};

export default function CanariesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Canaries"
        description="Canaries are popular pet birds known for their beautiful singing and vibrant colors. They are relatively low-maintenance birds that make excellent pets for beginners."
        emoji="🦜"
        slug="canaries"
        category="birds"
        categoryName="Birds"
        categoryHref="/pet-breeds/birds"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (4-8 inches)</li>
              <li>Lifespan: 10-15 years</li>
              <li>Temperament: Gentle, active, vocal (males sing)</li>
              <li>Activity Level: Moderate</li>
              <li>Grooming: Minimal (regular nail trims)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Canaries need a spacious cage with room to fly, a balanced diet of seeds, pellets, and fresh vegetables, clean water, and perches of varying sizes. They prefer to be kept alone or in pairs, and males are known for their beautiful singing.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Provide a cage that is wider than it is tall, as canaries prefer horizontal flight. Include multiple perches, food and water dishes, and toys for mental stimulation. Place the cage in a well-lit area away from drafts.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Canaries are generally hardy birds but can be prone to respiratory issues, mites, and nutritional deficiencies. Regular cage cleaning and a balanced diet help prevent health problems.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Bird Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

