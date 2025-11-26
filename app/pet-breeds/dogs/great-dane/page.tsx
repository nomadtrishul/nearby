import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Great Dane Breed Guide',
  description: 'Complete guide to Great Danes. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Great Dane', 'Great Dane breed', 'Great Dane care', 'gentle giant'],
  pathname: '/pet-breeds/dogs/great-dane',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Great Dane Breed Guide',
    type: 'image/png',
  }],
});

export default function GreatDanePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Great Dane"
        description="Great Danes are gentle giants known for their massive size and friendly, patient personalities. Despite their imposing appearance, they are affectionate, dependable dogs that make excellent family companions."
        emoji="🐕"
        slug="great-dane"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Giant (110-175 pounds)</li>
              <li>Lifespan: 7-10 years</li>
              <li>Temperament: Gentle, friendly, patient, dependable, confident</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Great Danes require moderate exercise and plenty of space due to their large size. They need early socialization and training to ensure they are well-mannered adults. They are prone to bloat, so feeding practices should be carefully managed. They need large beds, food bowls, and plenty of room to move around.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Great Danes are known for their gentle, friendly personalities despite their massive size. They are excellent with children and make wonderful family pets. They are patient and dependable. They are often called \"gentle giants\" because of their calm demeanor and affectionate nature.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Great Danes can be prone to bloat (gastric dilatation-volvulus), hip dysplasia, heart conditions, and certain types of cancer. Their large size contributes to a shorter lifespan. Regular veterinary check-ups, proper feeding practices to prevent bloat, and maintaining a healthy weight are crucial for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

