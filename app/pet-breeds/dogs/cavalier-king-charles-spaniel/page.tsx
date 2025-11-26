import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cavalier King Charles Spaniel Breed Guide',
  description: 'Complete guide to Cavalier King Charles Spaniels. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Cavalier King Charles Spaniel', 'Cavalier breed', 'Cavalier care', 'Cavalier temperament'],
  pathname: '/pet-breeds/dogs/cavalier-king-charles-spaniel',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Cavalier King Charles Spaniel Breed Guide',
    type: 'image/png',
  }],
});

export default function CavalierKingCharlesSpanielPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Cavalier King Charles Spaniel"
        description="Cavalier King Charles Spaniels are affectionate, gentle toy dogs known for their sweet expressions and loving personalities. They make excellent companion dogs and are well-suited for families and seniors."
        emoji="🐕"
        slug="cavalier-king-charles-spaniel"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (13-18 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Affectionate, gentle, friendly, playful, adaptable</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: Moderate (long, silky coat, regular brushing required)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cavaliers require regular grooming to maintain their silky coat, moderate daily exercise, and plenty of human companionship. They are adaptable to various living situations, including apartments, as long as they receive adequate exercise and attention. They thrive on being part of the family and do not do well when left alone for long periods.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cavaliers are known for their sweet, gentle nature and strong desire to please. They are excellent with children, other pets, and strangers, making them ideal family dogs. They are playful yet calm, and they adapt well to different lifestyles. They form strong bonds with their owners and are known for their expressive, soulful eyes.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cavaliers can be prone to mitral valve disease (heart condition), syringomyelia (neurological condition), hip dysplasia, and eye conditions. Regular veterinary check-ups, including cardiac screening, are essential. It's important to work with reputable breeders who screen for these conditions.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

