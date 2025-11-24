import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Labrador Retriever Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Labrador Retrievers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Labrador Retriever', 'Labrador breed', 'Labrador care', 'Labrador temperament'],
  openGraph: { title: 'Labrador Retriever Breed Guide | Nearby Pet Care', description: 'Complete guide to Labrador Retrievers.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/labrador-retriever' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/labrador-retriever' },
};

export default function LabradorRetrieverPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Labrador Retriever"
        description="Labrador Retrievers are America's most popular dog breed, known for their friendly, outgoing personalities, intelligence, and versatility. They excel as family pets, working dogs, and service animals."
        emoji="🐕"
        slug="labrador-retriever"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Large (55-80 pounds)</li>
              <li>Lifespan: 10-12 years</li>
              <li>Temperament: Friendly, outgoing, intelligent, energetic, gentle</li>
              <li>Energy Level: Very high</li>
              <li>Grooming: Moderate (short double coat, regular brushing, seasonal shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Labradors require extensive daily exercise, regular grooming, and mental stimulation. They are highly trainable and excel in obedience, agility, hunting, and service work. They need plenty of space to run and play, and they love water activities.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Labradors are known for their friendly, outgoing nature and love of people. They are excellent with children and other pets. They are eager to please and respond well to positive reinforcement training. They maintain their puppy-like energy well into adulthood.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Labradors can be prone to hip and elbow dysplasia, obesity, certain types of cancer, and exercise-induced collapse. Regular exercise, maintaining a healthy weight, and regular veterinary check-ups are essential for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

