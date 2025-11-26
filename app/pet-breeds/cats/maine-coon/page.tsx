import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Maine Coon Cat Breed Guide',
  description: 'Complete guide to Maine Coon cats. Learn about their characteristics, size, temperament, and care requirements.',
  keywords: ['Maine Coon', 'Maine Coon cat', 'Maine Coon breed', 'Maine Coon care', 'large cat breed'],
  pathname: '/pet-breeds/cats/maine-coon',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Maine Coon Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function MaineCoonPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Maine Coon"
        description="Maine Coons are one of the largest domestic cat breeds, known for their friendly personalities, tufted ears, and bushy tails. They are often called 'gentle giants' due to their large size and sweet nature."
        emoji="🐈"
        slug="maine-coon"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (10-25 pounds, males larger than females)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Friendly, gentle, intelligent, playful, sociable</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: Moderate (semi-long coat, regular brushing)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Maine Coons need regular grooming to maintain their thick, water-resistant coat. They enjoy interactive play and mental stimulation. Despite their size, they are gentle and get along well with children and other pets. They appreciate having space to move around.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Maine Coons are known for their dog-like personalities - they often follow their owners around and can be trained to walk on a leash. They are playful well into adulthood and enjoy interactive toys and puzzle feeders.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Maine Coons can be prone to hypertrophic cardiomyopathy (heart disease), hip dysplasia, and spinal muscular atrophy. Regular veterinary check-ups and maintaining a healthy weight are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

