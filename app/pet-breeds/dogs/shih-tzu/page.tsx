import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Shih Tzu Breed Guide',
  description: 'Complete guide to Shih Tzus. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Shih Tzu', 'Shih Tzu breed', 'Shih Tzu care', 'lion dog'],
  pathname: '/pet-breeds/dogs/shih-tzu',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Shih Tzu Breed Guide',
    type: 'image/png',
  }],
});

export default function ShihTzuPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Shih Tzu"
        description="Shih Tzus are affectionate, outgoing, and alert dogs known for their long, flowing coats and friendly personalities. They make excellent companions and are well-suited for apartment living."
        emoji="🐕"
        slug="shih-tzu"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (9-16 pounds)</li>
              <li>Lifespan: 10-18 years</li>
              <li>Temperament: Affectionate, outgoing, alert, friendly, independent</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: High (long, flowing coat requires daily brushing and regular professional grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Shih Tzus require moderate exercise and mental stimulation. Their long, flowing coats need daily brushing to prevent mats and tangles, and regular professional grooming every 4-6 weeks. They are brachycephalic (flat-faced) and can be sensitive to heat. They are good apartment dogs and adapt well to various living situations.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Shih Tzus are known for their affectionate, outgoing personalities and love of people. They are excellent with children and make wonderful family pets. They are alert and make good watchdogs despite their small size. They are independent but also enjoy being close to their owners. They are generally friendly with strangers and other pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Shih Tzus can be prone to breathing problems due to their brachycephalic structure, eye problems (including corneal ulcers), dental problems, and certain skin conditions. Regular veterinary check-ups, proper grooming, dental care, and avoiding extreme temperatures are important for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

