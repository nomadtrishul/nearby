import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Gerbil Care Guide',
  description: 'Complete guide to keeping gerbils as pets. Learn about gerbil care, housing, diet, and health considerations.',
  keywords: ['gerbil', 'gerbil care', 'pet gerbil', 'gerbil housing', 'gerbil diet'],
  pathname: '/pet-breeds/small-mammals/gerbil',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Gerbil Care Guide',
    type: 'image/png',
  }],
});

export default function GerbilPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Gerbil"
        description="Gerbils are small, active, and social rodents known for their curious personalities and low-maintenance care. They are excellent pets for families and make entertaining companions."
        emoji="🐹"
        slug="gerbil"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (2-4 inches body, 3-4 inches tail)</li>
              <li>Lifespan: 3-4 years</li>
              <li>Temperament: Social, active, curious, friendly, can be skittish</li>
              <li>Activity Level: High (diurnal - active during the day)</li>
              <li>Grooming: Minimal (self-grooming, sand baths)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Gerbils need a secure enclosure (minimum 10 gallons for 2 gerbils) with deep bedding for burrowing, hiding spots, toys, and a wheel for exercise. They are social and should be kept in pairs or small groups of the same sex. They require a sand bath for grooming. Provide a quiet environment and avoid sudden loud noises.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Gerbils require a balanced commercial gerbil food, supplemented with fresh vegetables and occasional fruits. They also enjoy seeds, nuts, and small amounts of whole grains. Fresh water should always be available. Avoid feeding too many fatty or sugary treats.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Gerbils are generally hardy but can be prone to respiratory infections, tumors, and dental problems. Regular veterinary check-ups with an exotic animal veterinarian, proper diet, and maintaining a clean environment are essential for their health. They are sensitive to temperature extremes and should be kept in a stable environment.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

