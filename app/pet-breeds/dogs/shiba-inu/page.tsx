import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Shiba Inu Breed Guide',
  description: 'Complete guide to Shiba Inus. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Shiba Inu', 'Shiba', 'Shiba Inu breed', 'Shiba care', 'Japanese dog'],
  pathname: '/pet-breeds/dogs/shiba-inu',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Shiba Inu Breed Guide',
    type: 'image/png',
  }],
});

export default function ShibaInuPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Shiba Inu"
        description="Shiba Inus are alert, confident, and independent dogs known for their fox-like appearance and spirited personalities. They are one of Japan's most popular breeds and make excellent companions for experienced owners."
        emoji="🐕"
        slug="shiba-inu"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small to medium (17-23 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Alert, confident, independent, bold, spirited</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: Moderate (double coat, regular brushing, heavy seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Shiba Inus require regular exercise and mental stimulation. They are independent and can be stubborn, requiring patient, consistent training. They are escape artists and need secure fencing. They are clean dogs that groom themselves like cats. They need early socialization to ensure they are well-adjusted adults.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Shiba Inus are known for their independent, confident personalities. They are alert and make good watchdogs. They can be reserved with strangers and may not be as affectionate as some other breeds. They are intelligent but can be stubborn. They are known for their \"Shiba scream\" - a high-pitched vocalization when excited or upset.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Shiba Inus can be prone to hip dysplasia, patellar luxation, certain eye conditions, and allergies. Regular veterinary check-ups, maintaining a healthy weight, and proper grooming are important for their wellbeing. They are generally healthy dogs when properly cared for.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

