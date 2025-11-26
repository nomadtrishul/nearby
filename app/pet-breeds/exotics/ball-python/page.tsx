import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Ball Python Care Guide',
  description: 'Complete guide to keeping ball pythons as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['ball python', 'ball python care', 'snake pets', 'ball python habitat', 'ball python diet'],
  pathname: '/pet-breeds/exotics/ball-python',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Ball Python Care Guide',
    type: 'image/png',
  }],
});

export default function BallPythonPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Ball Python"
        description="Ball pythons are popular pet snakes known for their docile nature, manageable size, and beautiful color variations. They are excellent beginner snakes for reptile enthusiasts."
        emoji="🦎"
        slug="ball-python"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 3-5 feet (females larger than males)</li>
              <li>Lifespan: 20-30 years</li>
              <li>Temperament: Docile, calm, shy, gentle</li>
              <li>Activity Level: Low (nocturnal - active at night)</li>
              <li>Grooming: Minimal (occasional shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ball pythons require a secure enclosure (minimum 40 gallons for adults) with proper heating (warm side 88-92°F, cool side 75-80°F), humidity (50-60%, higher during shedding), and appropriate substrate. They need hiding spots on both warm and cool sides, a water dish, and climbing branches.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ball pythons are carnivores and eat appropriately sized rodents (mice or rats). Juveniles eat every 5-7 days, while adults eat every 7-14 days. Prey should be pre-killed (frozen/thawed) for safety. Fresh water should always be available.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ball pythons can be prone to respiratory infections (from improper humidity), scale rot (from wet substrate), mites, and refusal to eat (often stress-related). Proper habitat setup, regular cleaning, and veterinary care with a reptile specialist are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Exotic Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

