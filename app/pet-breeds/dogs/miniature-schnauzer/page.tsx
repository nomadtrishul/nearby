import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Miniature Schnauzer Breed Guide',
  description: 'Complete guide to Miniature Schnauzers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Miniature Schnauzer', 'Miniature Schnauzer breed', 'Miniature Schnauzer care', 'Miniature Schnauzer temperament'],
  pathname: '/pet-breeds/dogs/miniature-schnauzer',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Miniature Schnauzer Breed Guide',
    type: 'image/png',
  }],
});

export default function MiniatureSchnauzerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Miniature Schnauzer"
        description="Miniature Schnauzers are small, intelligent terriers known for their distinctive beards, eyebrows, and spirited personalities. They are alert, friendly, and make excellent family companions."
        emoji="🐕"
        slug="miniature-schnauzer"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (11-20 pounds)</li>
              <li>Lifespan: 12-15 years</li>
              <li>Temperament: Alert, friendly, intelligent, spirited, trainable</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: High (wire coat, regular brushing and professional grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Miniature Schnauzers require regular grooming to maintain their distinctive appearance, including regular brushing and professional grooming every 4-6 weeks. They need daily exercise and mental stimulation. They are intelligent and benefit from training and activities that challenge their minds. They adapt well to various living situations, including apartments, as long as they receive adequate exercise.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Miniature Schnauzers are known for their alert, friendly nature and big personalities. They are intelligent and sometimes stubborn, requiring patient, consistent training. They are good with children and other pets when properly socialized. They are alert and make excellent watchdogs, often barking to alert their families. They form strong bonds with their families and thrive on human companionship.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Miniature Schnauzers can be prone to pancreatitis, bladder stones, diabetes, eye conditions, and skin issues. Regular veterinary check-ups, maintaining a healthy weight, and a proper diet are essential. It's important to work with reputable breeders who screen for these conditions.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

