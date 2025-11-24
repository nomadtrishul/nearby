import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Poodle Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Poodles. Learn about their characteristics, intelligence, temperament, and care requirements.',
  keywords: ['Poodle', 'Poodle breed', 'Poodle care', 'Poodle temperament', 'Standard Poodle', 'Miniature Poodle', 'Toy Poodle'],
  openGraph: { title: 'Poodle Breed Guide | Nearby Pet Care', description: 'Complete guide to Poodles.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/poodle' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/poodle' },
};

export default function PoodlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Poodle"
        description="Poodles are highly intelligent, elegant dogs known for their curly, hypoallergenic coats. They come in three sizes (Standard, Miniature, and Toy) and excel in various activities from hunting to agility to therapy work."
        emoji="🐕"
        slug="poodle"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Standard (45-70 pounds), Miniature (15-17 pounds), Toy (4-6 pounds)</li>
              <li>Lifespan: 10-18 years (smaller sizes tend to live longer)</li>
              <li>Temperament: Intelligent, active, alert, trainable, proud</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: High (curly coat requires regular professional grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Poodles require regular professional grooming every 4-6 weeks to maintain their curly coat. They need daily exercise and mental stimulation. They are highly trainable and excel in obedience, agility, and various dog sports. They are hypoallergenic and don't shed much, making them good for people with allergies.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Poodles are known for their intelligence and trainability. They are active, alert, and enjoy learning new tricks and commands. They form strong bonds with their families and can be reserved with strangers. They are excellent with children and other pets when properly socialized.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Poodles can be prone to hip dysplasia, eye problems, skin conditions, and certain genetic disorders. Regular veterinary check-ups, proper grooming, and maintaining a healthy weight are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

