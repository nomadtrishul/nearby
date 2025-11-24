import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Rottweiler Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Rottweilers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Rottweiler', 'Rottweiler breed', 'Rottweiler care', 'Rottweiler temperament'],
  openGraph: { title: 'Rottweiler Breed Guide | Nearby Pet Care', description: 'Complete guide to Rottweilers.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/rottweiler' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/rottweiler' },
};

export default function RottweilerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Rottweiler"
        description="Rottweilers are confident, courageous, and loyal dogs known for their protective nature and strong work ethic. They are powerful, intelligent dogs that require experienced owners and proper training."
        emoji="🐕"
        slug="rottweiler"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (80-135 pounds)</li>
              <li>Lifespan: 9-10 years</li>
              <li>Temperament: Confident, courageous, calm, loyal, protective</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: Low (short double coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rottweilers require regular exercise, mental stimulation, and consistent, firm training from an early age. They need experienced owners who can provide leadership and socialization. They thrive with active families who can provide structure and purpose.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rottweilers are known for their calm, confident demeanor and strong protective instincts. They are loyal to their families and can be reserved with strangers. They are intelligent and respond well to consistent training. Early socialization is crucial to ensure they are well-adjusted adults.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rottweilers can be prone to hip and elbow dysplasia, heart conditions, certain types of cancer, and bloat. Regular veterinary check-ups, maintaining a healthy weight, and responsible breeding practices are important for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

