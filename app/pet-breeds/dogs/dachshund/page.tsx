import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Dachshund Breed Guide',
  description: 'Complete guide to Dachshunds. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Dachshund', 'Wiener dog', 'Dachshund breed', 'Dachshund care'],
  pathname: '/pet-breeds/dogs/dachshund',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Dachshund Breed Guide',
    type: 'image/png',
  }],
});

export default function DachshundPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Dachshund"
        description="Dachshunds are clever, lively, and courageous dogs known for their distinctive long bodies and short legs. Despite their small size, they have big personalities and were originally bred for hunting."
        emoji="🐕"
        slug="dachshund"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small to medium (16-32 pounds, standard; 8-11 pounds, miniature)</li>
              <li>Lifespan: 12-16 years</li>
              <li>Temperament: Clever, lively, courageous, independent, stubborn</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: Varies by coat type (smooth, long-haired, or wire-haired)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dachshunds require moderate exercise and mental stimulation. They are prone to back problems (IVDD) due to their long spine, so activities that stress the back should be avoided. They need consistent training as they can be stubborn. They are good apartment dogs but still need daily walks and playtime.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dachshunds are known for their bold, independent personalities. They are clever and can be stubborn, but they are also loyal and affectionate with their families. They can be wary of strangers and may bark. They are good with older children but may be too fragile for very young children.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dachshunds are prone to intervertebral disc disease (IVDD), obesity, dental problems, and certain eye conditions. Maintaining a healthy weight, regular dental care, and avoiding activities that stress the back are crucial for their health. Regular veterinary check-ups are essential.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

