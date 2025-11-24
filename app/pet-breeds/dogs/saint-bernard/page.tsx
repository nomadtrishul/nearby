import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Saint Bernard Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Saint Bernards. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Saint Bernard', 'Saint Bernard breed', 'Saint Bernard care', 'gentle giant'],
  openGraph: { title: 'Saint Bernard Breed Guide | Nearby Pet Care', description: 'Complete guide to Saint Bernards.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/saint-bernard' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/saint-bernard' },
};

export default function SaintBernardPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Saint Bernard"
        description="Saint Bernards are gentle giants known for their massive size, friendly personalities, and history as rescue dogs in the Swiss Alps. They are calm, patient, and excellent with children, making them wonderful family companions."
        emoji="🐕"
        slug="saint-bernard"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Giant (120-180 pounds)</li>
              <li>Lifespan: 8-10 years</li>
              <li>Temperament: Gentle, friendly, patient, calm, dependable</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: Moderate (thick double coat, regular brushing, heavy seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Saint Bernards require moderate exercise and plenty of space due to their large size. They are prone to overheating due to their thick coats and should be kept in cool environments. They need early socialization and training. They require large beds, food bowls, and plenty of room to move around. Their thick coats need regular brushing, especially during shedding seasons.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Saint Bernards are known for their gentle, patient personalities despite their massive size. They are excellent with children and make wonderful family pets. They are calm and dependable. They are known for their history as rescue dogs in the Swiss Alps, where they helped locate and rescue lost travelers.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Saint Bernards can be prone to bloat (gastric dilatation-volvulus), hip and elbow dysplasia, heart conditions, and certain eye problems. Their large size contributes to a shorter lifespan. Regular veterinary check-ups, proper feeding practices to prevent bloat, maintaining a healthy weight, and avoiding extreme temperatures are crucial for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

