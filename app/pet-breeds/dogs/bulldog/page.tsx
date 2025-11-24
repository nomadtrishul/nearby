import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Bulldog Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Bulldogs. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Bulldog', 'Bulldog breed', 'Bulldog care', 'Bulldog temperament'],
  openGraph: { title: 'Bulldog Breed Guide | Nearby Pet Care', description: 'Complete guide to Bulldogs.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/bulldog' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/bulldog' },
};

export default function BulldogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Bulldog"
        description="Bulldogs are calm, friendly, and courageous dogs known for their distinctive wrinkled face and pushed-in nose. They make excellent companions but require special care due to their brachycephalic (flat-faced) structure."
        emoji="🐕"
        slug="bulldog"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (40-50 pounds)</li>
              <li>Lifespan: 8-10 years</li>
              <li>Temperament: Calm, friendly, courageous, gentle, stubborn</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: Moderate (regular cleaning of facial folds, moderate shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bulldogs require moderate exercise and should not be overexerted, especially in hot weather. They need regular cleaning of their facial folds to prevent infections, and their short coats require minimal grooming. They are prone to overheating and should be kept in cool environments. They need a balanced diet and portion control to prevent obesity.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bulldogs are known for their calm, friendly personalities. They are excellent with children and make good family pets. They can be stubborn but are generally easygoing and don't require extensive exercise. They are loyal and form strong bonds with their families.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bulldogs can be prone to breathing problems due to their brachycephalic structure, skin fold dermatitis, hip dysplasia, eye problems, and heat sensitivity. Regular veterinary check-ups, proper grooming, and avoiding extreme temperatures are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

