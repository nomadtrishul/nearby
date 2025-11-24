import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';

export const metadata: Metadata = {
  title: 'Yorkshire Terrier Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Yorkshire Terriers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Yorkshire Terrier', 'Yorkie', 'Yorkshire Terrier breed', 'Yorkie care'],
  openGraph: { title: 'Yorkshire Terrier Breed Guide | Nearby Pet Care', description: 'Complete guide to Yorkshire Terriers.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/yorkie' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/yorkie' },
};

export default function YorkiePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Yorkshire Terrier"
        description="Yorkshire Terriers, or \"Yorkies,\" are small, confident dogs with a big personality. Despite their tiny size, they are bold, energetic, and make excellent companions for those who can provide them with proper care and attention."
        emoji="🐕"
        slug="yorkie"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (4-7 pounds)</li>
              <li>Lifespan: 11-15 years</li>
              <li>Temperament: Bold, confident, energetic, affectionate, intelligent</li>
              <li>Energy Level: Moderate to high</li>
              <li>Grooming: High (long, silky coat requires daily brushing and regular professional grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Yorkies require daily brushing to prevent tangles and mats in their long coat. They need regular professional grooming every 4-6 weeks. They require moderate exercise and mental stimulation. They are trainable but can be stubborn, so consistent, positive reinforcement training is important.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Yorkies are known for their big personalities despite their small size. They are confident, bold, and energetic. They are affectionate with their families but can be wary of strangers. They are intelligent and enjoy learning tricks and commands.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Yorkies can be prone to dental problems, patellar luxation, hypoglycemia, and certain eye conditions. Regular dental care, veterinary check-ups, and maintaining a healthy weight are important for their wellbeing.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

