import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Oriental Shorthair Cat Breed Guide',
  description: 'Complete guide to Oriental Shorthair cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Oriental Shorthair', 'Oriental Shorthair cat', 'Oriental Shorthair breed', 'Oriental Shorthair care'],
  pathname: '/pet-breeds/cats/oriental-shorthair',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Oriental Shorthair Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function OrientalShorthairPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Oriental Shorthair"
        description="Oriental Shorthairs are sleek, elegant cats known for their large ears, almond-shaped eyes, and vocal personalities. They are active, intelligent, and form strong bonds with their owners."
        emoji="🐈"
        slug="oriental-shorthair"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (5-10 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Active, intelligent, vocal, social, playful</li>
              <li>Energy Level: High</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Oriental Shorthairs require plenty of mental and physical stimulation. They are highly vocal and will communicate with their owners. They need interactive toys, puzzle feeders, and regular playtime. They are social and do best with human interaction or another pet companion.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Oriental Shorthairs are known for their active, vocal personalities. They are intelligent and can learn tricks. They are playful and maintain their kitten-like energy well into adulthood. They form strong bonds with their owners and may follow them around the house. They are social and enjoy being part of the family activities.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Oriental Shorthairs can be prone to certain genetic conditions similar to Siamese cats, including progressive retinal atrophy and respiratory issues. Regular veterinary care and genetic testing from responsible breeders help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

