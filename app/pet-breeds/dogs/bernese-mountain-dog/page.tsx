import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Bernese Mountain Dog Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Bernese Mountain Dogs. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Bernese Mountain Dog', 'Bernese breed', 'Bernese care', 'Bernese temperament'],
  openGraph: { title: 'Bernese Mountain Dog Breed Guide | Nearby Pet Care', description: 'Complete guide to Bernese Mountain Dogs.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/bernese-mountain-dog' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/bernese-mountain-dog' },
};

export default function BerneseMountainDogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Bernese Mountain Dog"
        description="Bernese Mountain Dogs are large, gentle working dogs known for their striking tri-color coats and calm, friendly personalities. They are loyal, affectionate, and make excellent family companions."
        emoji="🐕"
        slug="bernese-mountain-dog"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (70-115 pounds)</li>
              <li>Lifespan: 7-10 years</li>
              <li>Temperament: Gentle, calm, friendly, loyal, intelligent</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: Moderate to high (long double coat, regular brushing, seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bernese Mountain Dogs require regular grooming to maintain their long coat, moderate daily exercise, and plenty of human companionship. They are adaptable to various living situations but need space due to their large size. They thrive in cooler climates and may struggle in hot weather. They are intelligent and benefit from training and activities that challenge their minds.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bernese Mountain Dogs are known for their gentle, calm nature and strong bond with their families. They are excellent with children and other pets, making them ideal family dogs. They are intelligent and eager to please, making them relatively easy to train. They are reserved with strangers but not aggressive, and they make good watchdogs. They form strong bonds with their families and thrive on human companionship.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bernese Mountain Dogs can be prone to hip dysplasia, elbow dysplasia, certain types of cancer, bloat, and eye conditions. They have a relatively short lifespan compared to other breeds. Regular veterinary check-ups, maintaining a healthy weight, and regular exercise are essential. It's important to work with reputable breeders who screen for these conditions.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

