import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Budgies as Pets Guide | Nearby Pet Care',
  description: 'Complete guide to keeping budgies (parakeets) as pets. Learn about budgie care, training, diet, and health considerations.',
  keywords: ['budgies', 'budgerigars', 'parakeets', 'budgie care', 'budgie pets', 'budgie guide', 'budgie diet'],
  openGraph: { title: 'Budgies as Pets Guide | Nearby Pet Care', description: 'Complete guide to keeping budgies as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/birds/budgies' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/birds/budgies' },
};

export default function BudgiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Budgies"
        description="Budgies (also known as budgerigars or parakeets) are small, colorful birds that make excellent pets for beginners. They are intelligent, social, and can learn to talk and perform tricks."
        emoji="🦜"
        slug="budgies"
        category="birds"
        categoryName="Birds"
        categoryHref="/pet-breeds/birds"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (7-8 inches)</li>
              <li>Lifespan: 5-10 years (can live up to 15 years with proper care)</li>
              <li>Temperament: Social, playful, intelligent, curious</li>
              <li>Activity Level: High</li>
              <li>Grooming: Regular nail trims, occasional wing clipping</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Budgies need a spacious cage with room to fly, daily social interaction, a balanced diet of pellets, seeds, and fresh vegetables, and plenty of toys for mental stimulation. They can be kept alone or in pairs.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Training and Talking</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Budgies are excellent talkers and can learn hundreds of words and phrases. They are also trainable and can learn tricks. Consistent, patient training starting at a young age yields the best results.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Budgies are generally hardy birds but can be prone to respiratory issues, mites, and nutritional deficiencies. Regular cage cleaning, a balanced diet, and annual veterinary check-ups help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Bird Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

