import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doberman Pinscher Breed Guide',
  description: 'Complete guide to Doberman Pinschers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Doberman Pinscher', 'Doberman breed', 'Doberman care', 'Doberman temperament'],
  pathname: '/pet-breeds/dogs/doberman-pinscher',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Doberman Pinscher Breed Guide',
    type: 'image/png',
  }],
});

export default function DobermanPinscherPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Doberman Pinscher"
        description="Doberman Pinschers are intelligent, loyal, and athletic dogs known for their sleek appearance and protective nature. They are highly trainable and make excellent guard dogs and family companions when properly trained."
        emoji="🐕"
        slug="doberman-pinscher"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (60-100 pounds)</li>
              <li>Lifespan: 10-13 years</li>
              <li>Temperament: Intelligent, loyal, alert, energetic, protective</li>
              <li>Energy Level: Very high</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dobermans require extensive daily exercise, mental stimulation, and consistent training. They excel in obedience, agility, and protection work. They need experienced owners who can provide firm, positive leadership. They require plenty of space to run and are not well-suited for apartment living without significant exercise.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dobermans are known for their loyalty and protective instincts toward their families. They are intelligent and eager to please, making them highly trainable. They are good with children when raised with them and properly socialized. They are reserved with strangers and make excellent watchdogs. They form strong bonds with their families and thrive on human companionship.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dobermans can be prone to dilated cardiomyopathy (heart condition), hip dysplasia, von Willebrand's disease (bleeding disorder), and Wobbler syndrome (neck condition). Regular veterinary check-ups, including cardiac screening, are essential. It's important to work with reputable breeders who screen for these conditions.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

