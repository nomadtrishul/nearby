import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Cane Corso Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Cane Corsos. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Cane Corso', 'Cane Corso breed', 'Cane Corso care', 'Cane Corso temperament'],
  openGraph: { title: 'Cane Corso Breed Guide | Nearby Pet Care', description: 'Complete guide to Cane Corsos.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/cane-corso' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/cane-corso' },
};

export default function CaneCorsoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Cane Corso"
        description="Cane Corsos are powerful, intelligent Italian mastiffs known for their protective nature and loyalty. They are confident, calm, and make excellent guard dogs when properly trained and socialized."
        emoji="🐕"
        slug="cane-corso"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (88-110 pounds)</li>
              <li>Lifespan: 9-12 years</li>
              <li>Temperament: Confident, intelligent, loyal, protective, calm</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cane Corsos require consistent training, early socialization, and regular exercise. They need experienced owners who can provide firm, positive leadership. They require daily exercise and mental stimulation. Due to their size and protective nature, they need proper training and socialization from an early age.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cane Corsos are known for their loyalty and protective instincts toward their families. They are calm and confident, but they require an owner who understands their needs and can provide proper leadership. They are good with children when raised with them, but their size and protective nature require supervision. They are reserved with strangers and make excellent watchdogs.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cane Corsos can be prone to hip dysplasia, elbow dysplasia, bloat, eye conditions, and certain heart conditions. Regular exercise, maintaining a healthy weight, and regular veterinary check-ups are essential. It's important to work with reputable breeders who screen for these conditions.</p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Cane Corsos are powerful dogs that require experienced owners, consistent training, and early socialization. They may be subject to breed-specific legislation in some areas.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

