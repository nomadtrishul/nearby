import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Russian Blue Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Russian Blue cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Russian Blue', 'Russian Blue cat', 'Russian Blue breed', 'Russian Blue care'],
  openGraph: { title: 'Russian Blue Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Russian Blue cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/russian-blue' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/russian-blue' },
};

export default function RussianBluePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Russian Blue"
        description="Russian Blues are elegant, intelligent cats known for their distinctive blue-gray coats and green eyes. They are reserved with strangers but form strong bonds with their families."
        emoji="🐈"
        slug="russian-blue"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (7-12 pounds)</li>
              <li>Lifespan: 15-20 years</li>
              <li>Temperament: Reserved, intelligent, gentle, loyal, quiet</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: Low (short double coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Russian Blues require minimal grooming due to their short, dense coat. They are intelligent and enjoy puzzle toys and interactive play. They prefer calm environments and may be shy with strangers. They form strong bonds with their families and are loyal companions.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Russian Blues are known for their reserved, gentle personalities. They are typically quiet and may be shy with strangers, but they are very affectionate with their families. They are intelligent and can be playful, especially with interactive toys. They prefer routine and calm environments.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Russian Blues are generally healthy cats with few breed-specific health issues. They can be prone to obesity if overfed. Regular veterinary check-ups and maintaining a healthy weight are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

