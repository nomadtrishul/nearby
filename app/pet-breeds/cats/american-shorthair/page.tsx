import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'American Shorthair Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to American Shorthair cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['American Shorthair', 'American Shorthair cat', 'American Shorthair breed', 'American Shorthair care'],
  openGraph: { title: 'American Shorthair Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to American Shorthair cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/american-shorthair' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/american-shorthair' },
};

export default function AmericanShorthairPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="American Shorthair"
        description="American Shorthairs are healthy, easygoing cats known for their friendly personalities and low-maintenance care. They are excellent family pets and adapt well to various living situations."
        emoji="🐈"
        slug="american-shorthair"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium to large (8-15 pounds)</li>
              <li>Lifespan: 15-20 years</li>
              <li>Temperament: Friendly, easygoing, adaptable, gentle, independent</li>
              <li>Energy Level: Moderate</li>
              <li>Grooming: Low (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">American Shorthairs are low-maintenance cats that require minimal grooming. They are adaptable and do well in various living situations. They enjoy interactive play but are also content to relax. Regular veterinary check-ups and a balanced diet are important for their health.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">American Shorthairs are known for their friendly, easygoing personalities. They are excellent with children and other pets. They are independent but also enjoy human companionship. They are playful but not overly demanding of attention.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">American Shorthairs are generally healthy cats with few breed-specific health issues. They can be prone to obesity if overfed, so portion control is important. Regular veterinary check-ups help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

