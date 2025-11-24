import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Rat Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping rats as pets. Learn about rat care, housing, diet, and health considerations.',
  keywords: ['rat', 'pet rat', 'rat care', 'rat housing', 'rat diet'],
  openGraph: { title: 'Rat Care Guide | Nearby Pet Care', description: 'Complete guide to keeping rats as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals/rat' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals/rat' },
};

export default function RatPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Rat"
        description="Rats are intelligent, social, and affectionate pets that make excellent companions. They are highly trainable and form strong bonds with their owners."
        emoji="🐹"
        slug="rat"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 9-11 inches (including tail)</li>
              <li>Lifespan: 2-3 years</li>
              <li>Temperament: Intelligent, social, affectionate, curious</li>
              <li>Activity Level: Moderate to high (crepuscular - most active at dawn and dusk)</li>
              <li>Grooming: Minimal (self-grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rats need a large, multi-level cage (minimum 2 cubic feet per rat) with appropriate bedding, hiding spots, hammocks, and toys. They require daily supervised playtime outside the cage. Rats are highly social and should be kept in pairs or groups of the same sex.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rats require a balanced commercial rat food, supplemented with fresh vegetables, fruits, and occasional protein sources. Fresh water should always be available. Avoid feeding too many fatty or sugary treats.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rats can be prone to respiratory infections, tumors, and dental problems. Regular veterinary check-ups with an exotic animal veterinarian, proper diet, and maintaining a clean environment are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

