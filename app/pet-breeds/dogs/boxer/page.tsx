import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Boxer Breed Guide',
  description: 'Complete guide to Boxers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Boxer', 'Boxer breed', 'Boxer care', 'Boxer temperament'],
  pathname: '/pet-breeds/dogs/boxer',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Boxer Breed Guide',
    type: 'image/png',
  }],
});

export default function BoxerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Boxer"
        description="Boxers are playful, energetic, and loyal dogs known for their distinctive appearance and fun-loving personalities. They are excellent family pets that form strong bonds with their owners and are great with children."
        emoji="🐕"
        slug="boxer"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (55-70 pounds)</li>
              <li>Lifespan: 10-12 years</li>
              <li>Temperament: Playful, energetic, loyal, intelligent, patient</li>
              <li>Energy Level: High</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Boxers require regular exercise and mental stimulation. They are brachycephalic (flat-faced) and can be sensitive to heat, so exercise should be moderate in hot weather. They need early socialization and consistent training. They are prone to separation anxiety and do best when they have plenty of human interaction.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Boxers are known for their playful, fun-loving personalities and boundless energy. They are excellent with children and make wonderful family pets. They are loyal and protective of their families. They maintain their puppy-like energy well into adulthood and are known for their \"kidney bean\" dance when excited.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Boxers can be prone to heart conditions (especially boxer cardiomyopathy), hip dysplasia, certain types of cancer, and breathing problems due to their brachycephalic structure. Regular veterinary check-ups, maintaining a healthy weight, and avoiding extreme temperatures are important for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

