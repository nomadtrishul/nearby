import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Hamster Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping hamsters as pets. Learn about hamster care, housing, diet, and health considerations.',
  keywords: ['hamster', 'hamster care', 'pet hamster', 'hamster housing', 'hamster diet'],
  openGraph: { title: 'Hamster Care Guide | Nearby Pet Care', description: 'Complete guide to keeping hamsters as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals/hamster' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals/hamster' },
};

export default function HamsterPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Hamster"
        description="Hamsters are small, nocturnal rodents that make popular pets, especially for children. They are relatively low-maintenance but require proper housing, diet, and handling."
        emoji="🐹"
        slug="hamster"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 2-7 inches (varies by species)</li>
              <li>Lifespan: 2-3 years</li>
              <li>Temperament: Can be friendly with proper handling, may be territorial</li>
              <li>Activity Level: High (nocturnal - active at night)</li>
              <li>Grooming: Minimal (self-grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Hamsters need a spacious enclosure (minimum 450 square inches of floor space) with appropriate bedding for burrowing, a wheel for exercise, hiding spots, and toys. Syrian hamsters are solitary and must be housed alone, while some dwarf species can be kept in pairs. Provide a quiet environment during the day.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Hamsters require a balanced commercial hamster food, supplemented with fresh vegetables and occasional fruits. Fresh water should always be available. Avoid feeding too many sugary treats, as hamsters are prone to diabetes.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Hamsters can be prone to wet tail (diarrhea), respiratory infections, dental problems, and tumors. Regular veterinary check-ups with an exotic animal veterinarian, proper diet, and maintaining a clean environment are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

