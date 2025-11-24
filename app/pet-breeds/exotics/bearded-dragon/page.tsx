import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Bearded Dragon Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping bearded dragons as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['bearded dragon', 'bearded dragon care', 'reptile pets', 'bearded dragon habitat', 'bearded dragon diet'],
  openGraph: { title: 'Bearded Dragon Care Guide | Nearby Pet Care', description: 'Complete guide to keeping bearded dragons as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/exotics/bearded-dragon' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/exotics/bearded-dragon' },
};

export default function BeardedDragonPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Bearded Dragon"
        description="Bearded dragons are popular pet reptiles known for their docile nature and distinctive 'beard' display. They are relatively easy to care for and make excellent pets for reptile enthusiasts."
        emoji="🦎"
        slug="bearded-dragon"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 18-24 inches (including tail)</li>
              <li>Lifespan: 8-12 years</li>
              <li>Temperament: Docile, calm, friendly, curious</li>
              <li>Activity Level: Moderate (diurnal - active during the day)</li>
              <li>Grooming: Minimal (occasional shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bearded dragons require a large terrarium (minimum 40-75 gallons for adults) with proper heating (basking spot 95-110°F, cool side 75-85°F), UVB lighting (essential for calcium absorption), and appropriate substrate. They need hiding spots, climbing branches, and a shallow water dish.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bearded dragons are omnivores. Juveniles require more protein (insects like crickets, mealworms, dubia roaches) while adults need more vegetables (leafy greens, vegetables, fruits). They require calcium and vitamin D3 supplements. Fresh water should always be available.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bearded dragons can be prone to metabolic bone disease (from lack of UVB or calcium), respiratory infections, impaction (from improper substrate), and parasites. Proper habitat setup, diet, and regular veterinary check-ups with a reptile specialist are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Exotic Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

