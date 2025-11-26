import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sphynx Cat Breed Guide',
  description: 'Complete guide to Sphynx cats. Learn about their characteristics, hairless appearance, and special care requirements.',
  keywords: ['Sphynx', 'Sphynx cat', 'hairless cat', 'Sphynx breed', 'Sphynx care'],
  pathname: '/pet-breeds/cats/sphynx',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Sphynx Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function SphynxPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Sphynx"
        description="Sphynx cats are known for their hairless appearance, though they actually have a fine layer of downy fuzz. They are energetic, affectionate, and require special care due to their lack of fur."
        emoji="🐈"
        slug="sphynx"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (6-12 pounds)</li>
              <li>Lifespan: 8-14 years</li>
              <li>Temperament: Energetic, affectionate, social, playful, intelligent</li>
              <li>Energy Level: High</li>
              <li>Grooming: High (weekly bathing required)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Sphynx cats require weekly bathing to remove oil buildup on their skin, regular ear cleaning, and nail trimming. They need protection from sunburn and cold temperatures. They have high metabolisms and require more food than other cats. They are indoor-only cats.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Sphynx cats are known for their extroverted, dog-like personalities. They are highly social and demand attention from their owners. They are playful, intelligent, and enjoy interactive games and puzzle toys.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Sphynx cats can be prone to hypertrophic cardiomyopathy, skin conditions, respiratory issues, and dental problems. Their lack of fur makes them susceptible to temperature extremes. Regular veterinary check-ups and proper grooming are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

