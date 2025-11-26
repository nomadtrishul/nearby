import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Border Collie Breed Guide',
  description: 'Complete guide to Border Collies. Learn about their characteristics, intelligence, temperament, and care requirements.',
  keywords: ['Border Collie', 'Border Collie breed', 'Border Collie care', 'most intelligent dog'],
  pathname: '/pet-breeds/dogs/border-collie',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Border Collie Breed Guide',
    type: 'image/png',
  }],
});

export default function BorderColliePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Border Collie"
        description="Border Collies are widely considered the most intelligent dog breed. They are energetic, work-oriented dogs known for their incredible herding abilities and need for mental and physical stimulation."
        emoji="🐕"
        slug="border-collie"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (30-45 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Intelligent, energetic, work-oriented, alert, responsive</li>
              <li>Energy Level: Very high</li>
              <li>Grooming: Moderate (medium-length double coat, regular brushing)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Border Collies require extensive daily exercise and mental stimulation. They excel at dog sports like agility, flyball, and herding trials. Without adequate exercise and mental challenges, they can develop behavioral problems. They need active owners who can provide them with jobs and activities. They are highly trainable and thrive with positive reinforcement training.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Border Collies are known for their incredible intelligence and work ethic. They are alert, responsive, and eager to learn. They form strong bonds with their owners and are highly trainable. They may try to herd children or other pets. They are excellent with active families who can provide them with the stimulation they need.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Border Collies can be prone to hip dysplasia, epilepsy, certain eye conditions, and collie eye anomaly. Regular veterinary check-ups, maintaining a healthy weight, and providing adequate exercise are important for their wellbeing. They are generally healthy dogs when properly cared for.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

