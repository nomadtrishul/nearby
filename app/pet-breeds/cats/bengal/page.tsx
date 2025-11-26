import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Bengal Cat Breed Guide',
  description: 'Complete guide to Bengal cats. Learn about their characteristics, active temperament, and care requirements.',
  keywords: ['Bengal', 'Bengal cat', 'Bengal breed', 'Bengal care', 'active cat breed'],
  pathname: '/pet-breeds/cats/bengal',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Bengal Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function BengalPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Bengal"
        description="Bengal cats are known for their wild, leopard-like appearance and energetic, playful personalities. They are intelligent, active cats that require plenty of mental and physical stimulation."
        emoji="🐈"
        slug="bengal"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium to large (8-15 pounds)</li>
              <li>Lifespan: 12-16 years</li>
              <li>Temperament: Active, intelligent, playful, curious, social</li>
              <li>Energy Level: Very high</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bengals require extensive daily exercise and mental stimulation. They need interactive toys, puzzle feeders, climbing structures, and regular play sessions. They enjoy water and may play in water bowls or fountains. They are not suitable for owners who want a low-maintenance pet.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bengals are highly active and intelligent cats that need constant engagement. They are known for their love of climbing, jumping, and exploring. They form strong bonds with their owners and can be trained to walk on a leash and perform tricks.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Bengals can be prone to hypertrophic cardiomyopathy, progressive retinal atrophy, and patellar luxation. Regular veterinary check-ups and providing adequate exercise help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

