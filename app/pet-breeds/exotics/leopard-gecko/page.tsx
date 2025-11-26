import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Leopard Gecko Care Guide',
  description: 'Complete guide to keeping leopard geckos as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['leopard gecko', 'leopard gecko care', 'gecko pets', 'leopard gecko habitat', 'leopard gecko diet'],
  pathname: '/pet-breeds/exotics/leopard-gecko',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Leopard Gecko Care Guide',
    type: 'image/png',
  }],
});

export default function LeopardGeckoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Leopard Gecko"
        description="Leopard geckos are popular pet reptiles known for their docile nature, ease of care, and beautiful spotted patterns. They are excellent beginner reptiles and make great pets for those new to reptile keeping."
        emoji="🦎"
        slug="leopard-gecko"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 7-10 inches</li>
              <li>Lifespan: 15-20 years</li>
              <li>Temperament: Docile, calm, easy to handle</li>
              <li>Activity Level: Low to moderate (nocturnal - active at night)</li>
              <li>Grooming: Minimal (occasional shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Leopard geckos require a secure terrarium (minimum 20 gallons for one gecko) with proper heating (warm side 88-92°F, cool side 75-80°F), a heat mat for belly heat, and appropriate substrate (avoid sand for juveniles). They need hiding spots on both warm and cool sides, a moist hide for shedding, and a shallow water dish.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Leopard geckos are insectivores and eat live insects like crickets, mealworms, dubia roaches, and waxworms. Juveniles eat daily, while adults eat every 2-3 days. Insects should be gut-loaded and dusted with calcium and vitamin D3 supplements. Fresh water should always be available.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Leopard geckos can be prone to metabolic bone disease (from lack of calcium), impaction (from improper substrate), shedding problems, and tail loss (defensive mechanism). Proper habitat setup, diet, and regular veterinary check-ups with a reptile specialist are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Exotic Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

