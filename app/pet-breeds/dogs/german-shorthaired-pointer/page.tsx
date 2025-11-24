import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'German Shorthaired Pointer Breed Guide | Nearby Pet Care',
  description: 'Complete guide to German Shorthaired Pointers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['German Shorthaired Pointer', 'GSP breed', 'German Shorthaired Pointer care', 'German Shorthaired Pointer temperament'],
  openGraph: { title: 'German Shorthaired Pointer Breed Guide | Nearby Pet Care', description: 'Complete guide to German Shorthaired Pointers.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/german-shorthaired-pointer' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/german-shorthaired-pointer' },
};

export default function GermanShorthairedPointerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="German Shorthaired Pointer"
        description="German Shorthaired Pointers are versatile hunting dogs known for their intelligence, athleticism, and friendly personalities. They excel in both field work and as family companions."
        emoji="🐕"
        slug="german-shorthaired-pointer"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (45-70 pounds)</li>
              <li>Lifespan: 12-14 years</li>
              <li>Temperament: Intelligent, friendly, energetic, trainable, versatile</li>
              <li>Energy Level: Very high</li>
              <li>Grooming: Low to moderate (short coat, minimal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">German Shorthaired Pointers require extensive daily exercise, mental stimulation, and training. They excel in hunting, field trials, agility, and other dog sports. They need plenty of space to run and are not well-suited for apartment living without significant exercise.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">GSPs are known for their friendly, outgoing nature and strong bond with their families. They are intelligent and eager to please, making them highly trainable. They are good with children and other dogs when properly socialized, but they have strong hunting instincts and may not be suitable for homes with small pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">German Shorthaired Pointers can be prone to hip dysplasia, bloat, certain eye conditions, and lymphedema. Regular exercise, maintaining a healthy weight, and regular veterinary check-ups are essential for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

