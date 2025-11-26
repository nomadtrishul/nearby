import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'French Bulldog Breed Guide',
  description: 'Complete guide to French Bulldogs. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['French Bulldog', 'Frenchie', 'French Bulldog breed', 'French Bulldog care'],
  pathname: '/pet-breeds/dogs/french-bulldog',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'French Bulldog Breed Guide',
    type: 'image/png',
  }],
});

export default function FrenchBulldogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="French Bulldog"
        description='French Bulldogs, or "Frenchies," are small, muscular dogs with distinctive bat-like ears and a friendly, adaptable personality. They are excellent companions for apartment living and make wonderful family pets.'
        emoji="🐕"
        slug="french-bulldog"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (20-28 pounds)</li>
              <li>Lifespan: 10-12 years</li>
              <li>Temperament: Friendly, adaptable, playful, alert, affectionate</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: Low (short coat, minimal shedding, regular facial fold cleaning)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">French Bulldogs require moderate exercise and should not be overexerted, especially in hot weather. They need regular cleaning of their facial folds to prevent infections. They are prone to overheating and should be kept in cool environments. They need a balanced diet and portion control to prevent obesity.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">French Bulldogs are known for their friendly, adaptable personalities. They are excellent with children and make good family pets. They are playful and enjoy attention but don't require extensive exercise. They are loyal and form strong bonds with their families.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">French Bulldogs can be prone to breathing problems due to their brachycephalic structure, skin fold dermatitis, spinal issues, eye problems, and heat sensitivity. Regular veterinary check-ups, proper grooming, and avoiding extreme temperatures are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

