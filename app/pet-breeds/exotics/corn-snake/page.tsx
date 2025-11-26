import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Corn Snake Care Guide',
  description: 'Complete guide to keeping corn snakes as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['corn snake', 'corn snake care', 'snake pets', 'corn snake habitat', 'corn snake diet'],
  pathname: '/pet-breeds/exotics/corn-snake',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Corn Snake Care Guide',
    type: 'image/png',
  }],
});

export default function CornSnakePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Corn Snake"
        description="Corn snakes are popular pet snakes known for their docile nature, beautiful colors, and relatively easy care requirements. They are excellent snakes for beginners."
        emoji="🦎"
        slug="corn-snake"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 3-5 feet</li>
              <li>Lifespan: 15-20 years</li>
              <li>Temperament: Docile, calm, generally easy to handle</li>
              <li>Activity Level: Low to moderate (mostly active at dawn and dusk)</li>
              <li>Grooming: Minimal (occasional shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Corn snakes require a secure terrarium (minimum 20-30 gallons for adults) with proper heating (warm side 85-88°F, cool side 75-80°F), a temperature gradient, and appropriate substrate. They need hiding spots on both warm and cool sides, a water dish, and climbing branches. They do not require UVB lighting but benefit from a day/night cycle.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Corn snakes are carnivores and eat appropriately sized rodents (mice or rats). Hatchlings eat pinky mice, while adults eat adult mice or small rats. Feed juveniles every 5-7 days and adults every 7-10 days. Pre-killed or frozen-thawed prey is safer than live prey. Fresh water should always be available.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Corn snakes can be prone to respiratory infections (from improper temperatures or humidity), scale rot (from dirty substrate), and mites. Proper habitat setup, maintaining appropriate temperatures and humidity, and regular cleaning are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Exotic Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

