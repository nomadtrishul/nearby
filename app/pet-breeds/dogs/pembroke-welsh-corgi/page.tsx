import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Pembroke Welsh Corgi Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Pembroke Welsh Corgis. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Pembroke Welsh Corgi', 'Corgi breed', 'Corgi care', 'Corgi temperament'],
  openGraph: { title: 'Pembroke Welsh Corgi Breed Guide | Nearby Pet Care', description: 'Complete guide to Pembroke Welsh Corgis.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/pembroke-welsh-corgi' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/pembroke-welsh-corgi' },
};

export default function PembrokeWelshCorgiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Pembroke Welsh Corgi"
        description="Pembroke Welsh Corgis are small, intelligent herding dogs known for their short legs, long bodies, and big personalities. They are active, friendly, and make excellent family companions."
        emoji="🐕"
        slug="pembroke-welsh-corgi"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small to medium (24-30 pounds)</li>
              <li>Lifespan: 12-13 years</li>
              <li>Temperament: Intelligent, friendly, outgoing, alert, active</li>
              <li>Energy Level: High</li>
              <li>Grooming: Moderate (double coat, regular brushing, seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Corgis require regular exercise, mental stimulation, and consistent training. Despite their short legs, they are active dogs that need daily walks and playtime. They are intelligent and benefit from training and activities that challenge their minds. Regular grooming is needed to manage their double coat, especially during shedding seasons.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Corgis are known for their big personalities in small packages. They are friendly, outgoing, and make excellent family dogs. They are intelligent and sometimes stubborn, requiring patient, consistent training. They have strong herding instincts and may try to herd children or other pets. They are alert and make good watchdogs, often barking to alert their families.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Corgis can be prone to hip dysplasia, degenerative myelopathy, eye conditions, and obesity. Their long backs make them susceptible to back problems, so it's important to prevent them from jumping on and off furniture and to maintain a healthy weight. Regular exercise and veterinary check-ups are essential.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

