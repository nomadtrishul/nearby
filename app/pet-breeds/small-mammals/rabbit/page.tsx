import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Rabbit Care Guide',
  description: 'Complete guide to keeping rabbits as pets. Learn about rabbit care, housing, diet, and health considerations.',
  keywords: ['rabbit', 'rabbit care', 'pet rabbit', 'rabbit housing', 'rabbit diet'],
  pathname: '/pet-breeds/small-mammals/rabbit',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Rabbit Care Guide',
    type: 'image/png',
  }],
});

export default function RabbitPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Rabbit"
        description="Rabbits are social, intelligent pets that require proper care and attention. They can be litter-trained and make wonderful companions when provided with appropriate housing, diet, and enrichment."
        emoji="🐇"
        slug="rabbit"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Varies by breed (2-20+ pounds)</li>
              <li>Lifespan: 8-12 years</li>
              <li>Temperament: Social, intelligent, curious, can be shy</li>
              <li>Activity Level: Moderate to high (crepuscular - most active at dawn and dusk)</li>
              <li>Grooming: Moderate (regular brushing, especially for long-haired breeds)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rabbits need a spacious enclosure (minimum 4x2 feet for small breeds) with room to hop and stand on hind legs. They require a safe area for exercise outside the enclosure daily. Provide hiding spots, toys, and appropriate bedding. Rabbits are social and do best in pairs or with regular human interaction.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rabbits require unlimited access to fresh hay (timothy, orchard, or oat hay), a small amount of high-quality pellets, and fresh vegetables daily. Fresh water should always be available. Avoid feeding too many fruits or treats, as rabbits are prone to digestive issues.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rabbits can be prone to dental problems (from improper diet), gastrointestinal stasis, respiratory infections, and parasites. Regular veterinary check-ups with an exotic animal veterinarian, proper diet, and maintaining a clean environment are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

