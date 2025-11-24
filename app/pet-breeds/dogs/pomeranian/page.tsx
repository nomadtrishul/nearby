import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Pomeranian Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Pomeranians. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Pomeranian', 'Pom', 'Pomeranian breed', 'Pomeranian care'],
  openGraph: { title: 'Pomeranian Breed Guide | Nearby Pet Care', description: 'Complete guide to Pomeranians.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/pomeranian' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/pomeranian' },
};

export default function PomeranianPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Pomeranian"
        description="Pomeranians are tiny, fluffy dogs with big personalities. They are alert, intelligent, and lively companions known for their luxurious double coats and confident, extroverted nature."
        emoji="🐕"
        slug="pomeranian"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Very small (3-7 pounds)</li>
              <li>Lifespan: 12-16 years</li>
              <li>Temperament: Alert, intelligent, lively, extroverted, confident</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: High (luxurious double coat requires regular brushing and professional grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Pomeranians require moderate exercise and mental stimulation. Their luxurious double coats need regular brushing (2-3 times per week) and professional grooming every 4-6 weeks. They are fragile due to their small size and need protection from larger dogs and rough play. They are intelligent and trainable but can be stubborn. They are good apartment dogs.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Pomeranians are known for their confident, extroverted personalities despite their tiny size. They are alert and make good watchdogs. They are intelligent and can learn tricks quickly. They are generally friendly but may be wary of strangers. They are good with older children but may be too fragile for very young children.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Pomeranians can be prone to dental problems, patellar luxation, tracheal collapse, heart conditions, and certain eye conditions. Their small size makes them fragile and prone to injury. Regular dental care, veterinary check-ups, and protection from rough play are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

