import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Hedgehog Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping hedgehogs as pets. Learn about their care, housing, diet, and health considerations.',
  keywords: ['hedgehog', 'hedgehog care', 'pet hedgehog', 'hedgehog housing', 'hedgehog diet'],
  openGraph: { title: 'Hedgehog Care Guide | Nearby Pet Care', description: 'Complete guide to keeping hedgehogs as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals/hedgehog' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals/hedgehog' },
};

export default function HedgehogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Hedgehog"
        description="Hedgehogs are unique, spiny mammals known for their distinctive appearance and curious personalities. They require specialized care and are best suited for experienced pet owners."
        emoji="🐹"
        slug="hedgehog"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (1-2 pounds)</li>
              <li>Lifespan: 4-7 years</li>
              <li>Temperament: Curious, can be shy, independent, nocturnal</li>
              <li>Activity Level: Moderate (nocturnal - most active at night)</li>
              <li>Grooming: Minimal (occasional nail trimming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Hedgehogs need a large enclosure (minimum 4x2 feet) with a solid floor, hiding spots, and a wheel for exercise. They require a warm environment (72-80°F) and can become stressed if too cold. They need appropriate bedding and should be kept in a quiet area. They are solitary animals and should be housed alone.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Hedgehogs are insectivores and require a diet of high-quality hedgehog food or high-quality cat food, supplemented with live insects (mealworms, crickets), cooked lean meats, and occasional fruits and vegetables. They require fresh water at all times. Avoid feeding them foods high in fat or sugar.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Hedgehogs can be prone to obesity, dental problems, respiratory infections, and wobbly hedgehog syndrome (a neurological condition). They require proper diet, maintaining appropriate temperatures, and regular veterinary check-ups with an exotic animal veterinarian.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

