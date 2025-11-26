import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cockatiels as Pets Guide',
  description: 'Complete guide to keeping cockatiels as pets. Learn about cockatiel care, training, diet, and health considerations.',
  keywords: ['cockatiels', 'cockatiel care', 'cockatiel pets', 'cockatiel guide', 'cockatiel diet', 'cockatiel health'],
  pathname: '/pet-breeds/birds/cockatiels',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Cockatiels as Pets Guide',
    type: 'image/png',
  }],
});

export default function CockatielsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Cockatiels"
        description="Cockatiels are friendly, intelligent birds that make excellent pets for both beginners and experienced bird owners. They are known for their playful personalities and ability to learn tricks and mimic sounds."
        emoji="🦜"
        slug="cockatiels"
        category="birds"
        categoryName="Birds"
        categoryHref="/pet-breeds/birds"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (12-13 inches)</li>
              <li>Lifespan: 15-20 years</li>
              <li>Temperament: Friendly, affectionate, playful, social</li>
              <li>Activity Level: Moderate to high</li>
              <li>Grooming: Regular nail trims, occasional wing clipping</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cockatiels need a spacious cage, daily social interaction, a varied diet of pellets, seeds, and fresh fruits/vegetables, and plenty of toys for mental stimulation. They enjoy being handled and can learn to talk and perform tricks.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Training and Socialization</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cockatiels are highly trainable and enjoy learning new tricks. They bond strongly with their owners and require daily interaction. Early socialization helps them become well-adjusted pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Cockatiels can be prone to respiratory issues, feather plucking (if bored or stressed), and nutritional deficiencies. Regular veterinary check-ups and a balanced diet are essential for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Bird Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

