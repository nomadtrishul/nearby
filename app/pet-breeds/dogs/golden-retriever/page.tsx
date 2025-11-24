import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Golden Retriever Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Golden Retrievers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Golden Retriever', 'Golden Retriever breed', 'Golden Retriever care', 'Golden Retriever temperament'],
  openGraph: { title: 'Golden Retriever Breed Guide | Nearby Pet Care', description: 'Complete guide to Golden Retrievers.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/golden-retriever' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/golden-retriever' },
};

export default function GoldenRetrieverPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Golden Retriever"
        description="Golden Retrievers are friendly, intelligent, and devoted family dogs known for their gentle temperament and beautiful golden coats. They are one of the most popular dog breeds worldwide."
        emoji="🐕"
        slug="golden-retriever"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (55-75 pounds)</li>
              <li>Lifespan: 10-12 years</li>
              <li>Temperament: Friendly, intelligent, devoted, patient, gentle</li>
              <li>Energy Level: High</li>
              <li>Grooming: Moderate to high (double coat, regular brushing, seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Golden Retrievers require daily exercise, regular grooming to manage their double coat, and plenty of mental stimulation. They thrive with active families and enjoy activities like swimming, fetching, and hiking. They are highly trainable and excel in obedience, agility, and therapy work.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Golden Retrievers are known for their friendly, outgoing personalities. They are excellent with children and other pets, making them ideal family dogs. They are eager to please and respond well to positive reinforcement training.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Golden Retrievers can be prone to hip and elbow dysplasia, certain types of cancer, heart conditions, and eye problems. Regular veterinary check-ups, maintaining a healthy weight, and responsible breeding practices help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

