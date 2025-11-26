import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Exotic Shorthair Cat Breed Guide',
  description: 'Complete guide to Exotic Shorthair cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Exotic Shorthair', 'Exotic Shorthair cat', 'Exotic Shorthair breed', 'Exotic Shorthair care'],
  pathname: '/pet-breeds/cats/exotic-shorthair',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Exotic Shorthair Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function ExoticShorthairPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Exotic Shorthair"
        description="Exotic Shorthairs are essentially short-haired Persians, known for their flat faces, round eyes, and sweet, gentle personalities. They combine the Persian's calm demeanor with easier grooming needs."
        emoji="🐈"
        slug="exotic-shorthair"
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
              <li>Lifespan: 10-15 years</li>
              <li>Temperament: Gentle, quiet, affectionate, calm, sweet</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: Moderate (short coat, but requires regular brushing and eye cleaning)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Exotic Shorthairs require regular eye cleaning due to their flat faces, weekly brushing to maintain their coat, and a calm indoor environment. They are not particularly active and prefer a quiet, stable home. They need a balanced diet and regular veterinary check-ups.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Exotic Shorthairs are known for their sweet, gentle nature, similar to Persians but with a slightly more playful side. They are quiet, calm, and enjoy a peaceful environment. They are affectionate with their families but are not overly demanding. They are good with children and other pets when properly introduced.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Exotic Shorthairs can be prone to breathing problems due to their flat faces (brachycephalic), eye conditions, polycystic kidney disease, and dental issues. Regular veterinary check-ups and proper grooming, especially eye cleaning, are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

