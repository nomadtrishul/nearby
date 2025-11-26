import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Siberian Husky Breed Guide',
  description: 'Complete guide to Siberian Huskies. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Siberian Husky', 'Husky', 'Siberian Husky breed', 'Husky care'],
  pathname: '/pet-breeds/dogs/siberian-husky',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Siberian Husky Breed Guide',
    type: 'image/png',
  }],
});

export default function SiberianHuskyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Siberian Husky"
        description="Siberian Huskies are outgoing, mischievous, and energetic dogs known for their striking appearance and friendly personalities. They require lots of exercise and mental stimulation but make wonderful companions for active families."
        emoji="🐕"
        slug="siberian-husky"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium to large (35-60 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Outgoing, friendly, mischievous, energetic, independent</li>
              <li>Energy Level: Very high</li>
              <li>Grooming: Moderate to high (thick double coat, heavy seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Siberian Huskies require extensive daily exercise and mental stimulation. They are escape artists and need secure fencing. They have a thick double coat that requires regular brushing, especially during shedding seasons. They are intelligent but can be stubborn, requiring patient, consistent training.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Huskies are known for their friendly, outgoing personalities and love of people. They are pack animals and do well with other dogs. They are vocal and may howl. They are independent thinkers and can be mischievous. They are excellent with children and make good family pets when properly exercised.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Huskies can be prone to hip dysplasia, eye problems (including cataracts and progressive retinal atrophy), and certain skin conditions. Regular veterinary check-ups, maintaining a healthy weight, and proper grooming are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

