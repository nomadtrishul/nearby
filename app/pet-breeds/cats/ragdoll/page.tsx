import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';

export const metadata: Metadata = {
  title: 'Ragdoll Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Ragdoll cats. Learn about their characteristics, docile temperament, and care requirements.',
  keywords: ['Ragdoll', 'Ragdoll cat', 'Ragdoll breed', 'Ragdoll care', 'docile cat breed'],
  openGraph: { title: 'Ragdoll Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Ragdoll cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/ragdoll' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/ragdoll' },
};

export default function RagdollPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Ragdoll"
        description="Ragdoll cats are large, gentle cats known for their docile temperament and tendency to go limp when picked up. They are affectionate, calm, and make excellent family pets."
        emoji="🐈"
        slug="ragdoll"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (10-20 pounds)</li>
              <li>Lifespan: 12-17 years</li>
              <li>Temperament: Docile, gentle, affectionate, calm, friendly</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: Moderate (semi-long coat, regular brushing)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ragdolls require regular grooming to prevent matting of their silky coat. They are indoor cats and should not be allowed outside unsupervised. They need moderate exercise and enjoy interactive play. They thrive on human companionship and do best in homes where they receive regular attention.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ragdolls are known for their relaxed, docile nature. They are often described as "puppy-like" because they follow their owners around and greet them at the door. They are not particularly vocal and prefer a calm, quiet environment.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Ragdolls can be prone to hypertrophic cardiomyopathy (heart disease), bladder stones, and obesity. Regular veterinary check-ups, a balanced diet, and maintaining a healthy weight are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

