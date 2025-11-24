import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'German Shepherd Breed Guide | Nearby Pet Care',
  description: 'Complete guide to German Shepherd dogs. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['German Shepherd', 'German Shepherd breed', 'German Shepherd care', 'German Shepherd temperament'],
  openGraph: { title: 'German Shepherd Breed Guide | Nearby Pet Care', description: 'Complete guide to German Shepherd dogs.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/german-shepherd' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/german-shepherd' },
};

export default function GermanShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="German Shepherd"
        description="German Shepherds are intelligent, loyal, and versatile working dogs known for their courage and trainability. They make excellent family pets when properly trained and socialized."
        emoji="🐕"
        slug="german-shepherd"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (50-90 pounds)</li>
              <li>Lifespan: 9-13 years</li>
              <li>Temperament: Intelligent, loyal, confident, courageous</li>
              <li>Energy Level: High</li>
              <li>Grooming: Moderate (double coat, sheds regularly)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">German Shepherds require regular exercise, mental stimulation, and consistent training. They thrive with active families who can provide plenty of physical and mental activities.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

