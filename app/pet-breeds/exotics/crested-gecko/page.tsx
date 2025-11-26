import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Crested Gecko Care Guide',
  description: 'Complete guide to keeping crested geckos as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['crested gecko', 'crested gecko care', 'reptile pets', 'gecko care', 'crested gecko habitat'],
  pathname: '/pet-breeds/exotics/crested-gecko',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Crested Gecko Care Guide',
    type: 'image/png',
  }],
});

export default function CrestedGeckoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Crested Gecko"
        description="Crested geckos are popular pet reptiles known for their distinctive eyelash-like crests and ease of care. They are excellent pets for beginners and make fascinating companions."
        emoji="🦎"
        slug="crested-gecko"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 6-10 inches (including tail)</li>
              <li>Lifespan: 15-20 years</li>
              <li>Temperament: Docile, gentle, can be skittish, generally calm</li>
              <li>Activity Level: Moderate (nocturnal - active at night)</li>
              <li>Grooming: Minimal (occasional shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Crested geckos require a tall terrarium (minimum 20 gallons for adults) with proper humidity (60-80%), moderate temperatures (72-78°F), and vertical space for climbing. They need live or artificial plants, hiding spots, and branches for climbing. They do not require UVB lighting but benefit from a day/night cycle.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Crested geckos are omnivores. They can be fed commercial crested gecko diet (powdered food mixed with water) as their primary food, supplemented with live insects (crickets, roaches) and occasional fruit purees. They require calcium supplementation. Fresh water should always be available, and they will also drink water droplets from leaves.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Crested geckos can be prone to metabolic bone disease (from lack of calcium), respiratory infections (from improper humidity), and tail loss (though they don't regrow tails like some geckos). Proper habitat setup, diet, and regular monitoring are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Exotic Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

