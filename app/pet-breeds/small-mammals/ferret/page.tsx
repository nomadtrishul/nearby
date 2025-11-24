import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Ferret Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping ferrets as pets. Learn about ferret care, housing, diet, and health considerations.',
  keywords: ['ferret', 'ferret care', 'pet ferret', 'ferret housing', 'ferret diet'],
  openGraph: { title: 'Ferret Care Guide | Nearby Pet Care', description: 'Complete guide to keeping ferrets as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals/ferret' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals/ferret' },
};

export default function FerretPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Ferret"
        description="Ferrets are playful, curious, and intelligent pets that require significant time, attention, and specialized care. They are highly social and make entertaining companions for experienced pet owners."
        emoji="🐹"
        slug="ferret"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 1.5-4 pounds</li>
              <li>Lifespan: 5-10 years</li>
              <li>Temperament: Playful, curious, intelligent, social, mischievous</li>
              <li>Activity Level: Very high</li>
              <li>Grooming: Moderate (regular brushing, occasional bathing, nail trimming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ferrets need a large, multi-level cage (minimum 24x24x18 inches for one ferret) with plenty of room to play and explore. They require several hours of supervised playtime outside the cage daily. Provide hiding spots, hammocks, tunnels, and toys. Ferrets are social and do best in pairs or groups.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ferrets are obligate carnivores and require a high-protein, high-fat diet. Feed high-quality commercial ferret food or kitten food. Avoid foods high in carbohydrates and fiber. Fresh water should always be available.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ferrets can be prone to adrenal disease, insulinoma, lymphoma, and dental problems. They require regular veterinary check-ups with an exotic animal veterinarian, vaccinations, and spaying/neutering. Regular playtime and mental stimulation are essential for their wellbeing.</p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Ferrets are illegal in some areas. Check local laws before acquiring a ferret. They also require ferret-proofing your home as they are escape artists.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

