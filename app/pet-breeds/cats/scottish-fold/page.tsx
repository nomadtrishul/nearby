import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Scottish Fold Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Scottish Fold cats. Learn about their characteristics, unique folded ears, and care requirements.',
  keywords: ['Scottish Fold', 'Scottish Fold cat', 'Scottish Fold breed', 'Scottish Fold care'],
  openGraph: { title: 'Scottish Fold Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Scottish Fold cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/scottish-fold' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/scottish-fold' },
};

export default function ScottishFoldPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Scottish Fold"
        description="Scottish Folds are known for their unique folded ears and round, owl-like appearance. They are sweet-natured, calm cats that make excellent companions."
        emoji="🐈"
        slug="scottish-fold"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium (6-13 pounds)</li>
              <li>Lifespan: 11-15 years</li>
              <li>Temperament: Sweet, calm, gentle, adaptable, affectionate</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: Low to moderate (short or long coat, weekly brushing)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Scottish Folds are low-maintenance cats that adapt well to various living situations. They require regular ear cleaning due to their folded ears, weekly brushing, and moderate exercise. They are content with moderate attention and enjoy a calm environment.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Scottish Folds are known for their sweet, easygoing nature. They are not particularly vocal and prefer a quiet, stable environment. They get along well with children and other pets and are known for their "Buddha-like" sitting positions.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Scottish Folds can be prone to osteochondrodysplasia (a condition affecting cartilage and bone development), ear infections due to their folded ears, and polycystic kidney disease. Regular veterinary check-ups and proper ear care are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

