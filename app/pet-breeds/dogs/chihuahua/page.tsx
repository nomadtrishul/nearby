import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Chihuahua Breed Guide',
  description: 'Complete guide to Chihuahuas. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Chihuahua', 'Chihuahua breed', 'Chihuahua care', 'smallest dog breed'],
  pathname: '/pet-breeds/dogs/chihuahua',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Chihuahua Breed Guide',
    type: 'image/png',
  }],
});

export default function ChihuahuaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Chihuahua"
        description="Chihuahuas are tiny dogs with big personalities. They are alert, confident, and loyal companions known for being the smallest dog breed. Despite their size, they have bold, sassy personalities and make excellent companions for the right owners."
        emoji="🐕"
        slug="chihuahua"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Very small (2-6 pounds)</li>
              <li>Lifespan: 14-16 years</li>
              <li>Temperament: Alert, confident, loyal, sassy, bold</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: Low to moderate (smooth or long coat varieties)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Chihuahuas require moderate exercise and mental stimulation. They are fragile due to their small size and need protection from larger dogs and rough play. They can be prone to dental problems, so regular dental care is essential. They are sensitive to cold weather and may need sweaters in winter. They are good apartment dogs but still need daily walks and playtime.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Chihuahuas are known for their bold, confident personalities despite their tiny size. They are loyal to their owners and can be wary of strangers. They may be aggressive toward other dogs if not properly socialized. They are alert and make good watchdogs. They can be stubborn but are intelligent and trainable with patience and consistency.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Chihuahuas can be prone to dental problems, patellar luxation, heart conditions, hypoglycemia, and certain eye conditions. Their small size makes them fragile and prone to injury. Regular dental care, veterinary check-ups, and protection from rough play are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

