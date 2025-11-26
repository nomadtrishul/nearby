import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Himalayan Cat Breed Guide',
  description: 'Complete guide to Himalayan cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Himalayan', 'Himalayan cat', 'Himalayan breed', 'Himalayan care', 'Himalayan Persian'],
  pathname: '/pet-breeds/cats/himalayan',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Himalayan Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function HimalayanPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Himalayan"
        description="Himalayan cats are essentially long-haired Persians with Siamese coloring, known for their luxurious coats, striking blue eyes, and sweet, gentle personalities. They combine the best of both breeds."
        emoji="🐈"
        slug="himalayan"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium to large (7-12 pounds)</li>
              <li>Lifespan: 9-15 years</li>
              <li>Temperament: Gentle, quiet, affectionate, calm, sweet</li>
              <li>Energy Level: Low</li>
              <li>Grooming: High (long coat, daily brushing required, regular eye cleaning)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Himalayans require daily grooming to prevent matting of their long coat, regular eye cleaning due to their flat faces, and a calm indoor environment. They are not particularly active and prefer a quiet, stable home. Regular bathing (every 4-6 weeks) helps maintain coat health.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Himalayans are known for their sweet, gentle nature, similar to Persians. They are quiet, calm, and enjoy a peaceful environment. They are affectionate with their families but are not overly demanding. They are good with children and other pets when properly introduced. They are less vocal than Siamese but may occasionally "talk" to their owners.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Himalayans can be prone to breathing problems due to their flat faces (brachycephalic), eye conditions, polycystic kidney disease, and dental issues. Regular veterinary check-ups and proper grooming, especially daily brushing and eye cleaning, are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

