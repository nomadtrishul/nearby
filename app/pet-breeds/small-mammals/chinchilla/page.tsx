import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Chinchilla Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping chinchillas as pets. Learn about their care, housing, diet, and health considerations.',
  keywords: ['chinchilla', 'chinchilla care', 'pet chinchilla', 'chinchilla housing', 'chinchilla diet'],
  openGraph: { title: 'Chinchilla Care Guide | Nearby Pet Care', description: 'Complete guide to keeping chinchillas as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals/chinchilla' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals/chinchilla' },
};

export default function ChinchillaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Chinchilla"
        description="Chinchillas are soft, gentle rodents known for their incredibly dense fur and playful personalities. They require specialized care and are best suited for experienced pet owners."
        emoji="🐹"
        slug="chinchilla"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (1-1.5 pounds)</li>
              <li>Lifespan: 10-20 years</li>
              <li>Temperament: Gentle, playful, social, can be shy, active</li>
              <li>Activity Level: High (nocturnal - most active at night)</li>
              <li>Grooming: Specialized (dust baths required, never wet)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Chinchillas need a large, multi-level cage (minimum 24x24x24 inches) with plenty of space to jump and climb. They require dust baths (chinchilla dust) 2-3 times per week - never get them wet as their dense fur doesn't dry properly. They need hiding spots, chew toys, and a cool environment (below 75°F).</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Chinchillas require high-quality chinchilla pellets, unlimited access to hay (timothy or orchard grass), and fresh water. They can have occasional treats like dried fruits or vegetables, but these should be limited. Their digestive systems are sensitive, so diet changes must be gradual.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Chinchillas can be prone to heat stroke (they cannot tolerate temperatures above 75°F), dental problems, gastrointestinal issues, and respiratory infections. They require cool environments, proper diet, and regular veterinary check-ups with an exotic animal veterinarian.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

