import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Australian Shepherd Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Australian Shepherds. Learn about their characteristics, intelligence, temperament, and care requirements.',
  keywords: ['Australian Shepherd', 'Aussie', 'Australian Shepherd breed', 'Aussie care'],
  openGraph: { title: 'Australian Shepherd Breed Guide | Nearby Pet Care', description: 'Complete guide to Australian Shepherds.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/australian-shepherd' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/australian-shepherd' },
};

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Australian Shepherd"
        description="Australian Shepherds, or 'Aussies,' are intelligent, energetic, and versatile working dogs known for their beautiful coats and herding abilities. They excel in various dog sports and make excellent companions for active families."
        emoji="🐕"
        slug="australian-shepherd"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium to large (40-65 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Intelligent, energetic, loyal, protective, work-oriented</li>
              <li>Energy Level: Very high</li>
              <li>Grooming: Moderate to high (medium-length double coat, regular brushing)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Australian Shepherds require extensive daily exercise and mental stimulation. They excel at dog sports like agility, herding, and obedience. They need active owners who can provide them with jobs and activities. They are highly trainable and thrive with positive reinforcement training. Without adequate exercise, they can develop behavioral problems.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Aussies are known for their intelligence, loyalty, and work ethic. They are alert and protective of their families. They form strong bonds with their owners and are eager to please. They may try to herd children or other pets. They are excellent with active families who can provide them with the stimulation they need.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Australian Shepherds can be prone to hip dysplasia, epilepsy, certain eye conditions (including cataracts and collie eye anomaly), and certain types of cancer. Regular veterinary check-ups, maintaining a healthy weight, and providing adequate exercise are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

