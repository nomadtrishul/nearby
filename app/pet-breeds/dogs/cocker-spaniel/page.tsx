import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cocker Spaniel Breed Guide',
  description: 'Complete guide to Cocker Spaniels. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Cocker Spaniel', 'Cocker Spaniel breed', 'Cocker Spaniel care', 'spaniel'],
  pathname: '/pet-breeds/dogs/cocker-spaniel',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Cocker Spaniel Breed Guide',
    type: 'image/png',
  }],
});

export default function CockerSpanielPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Cocker Spaniel"
        description="Cocker Spaniels are gentle, merry, and affectionate dogs known for their beautiful, silky coats and friendly personalities. They make excellent family pets and are known for their happy, wagging tails."
        emoji="🐕"
        slug="cocker-spaniel"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (20-30 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Gentle, merry, affectionate, intelligent, adaptable</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: High (long, silky coat requires regular brushing and professional grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cocker Spaniels require regular exercise and mental stimulation. Their long, silky coats need daily brushing and regular professional grooming every 4-6 weeks. They are prone to ear infections, so regular ear cleaning is essential. They are intelligent and trainable, responding well to positive reinforcement training.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cocker Spaniels are known for their gentle, merry personalities and affectionate nature. They are excellent with children and make wonderful family pets. They are adaptable and can do well in various living situations. They are intelligent and eager to please, making them relatively easy to train.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cocker Spaniels can be prone to ear infections, eye problems, hip dysplasia, and certain skin conditions. Regular ear cleaning, veterinary check-ups, and proper grooming are important for their wellbeing. They may be prone to separation anxiety if left alone for long periods.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

