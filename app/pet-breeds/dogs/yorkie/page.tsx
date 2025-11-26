import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Yorkshire Terrier Breed Guide',
  description: 'Complete guide to Yorkshire Terriers. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Yorkshire Terrier', 'Yorkie', 'Yorkshire Terrier breed', 'Yorkie care'],
  pathname: '/pet-breeds/dogs/yorkie',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Yorkshire Terrier Breed Guide',
    type: 'image/png',
  }],
});

export default function YorkiePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero 
        breedName="Yorkshire Terrier"
        description='Yorkshire Terriers, or "Yorkies," are small, confident dogs with a big personality. Despite their tiny size, they are bold, energetic, and make excellent companions for those who can provide them with proper care and attention.'
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

          {/* Related Resources */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link href="/pet-health/dental-care-for-pets" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dental Care for Small Dogs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about dental care practices important for Yorkies and other small breeds.</p>
              </Link>
              <Link href="/pet-grooming" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Essential grooming tips for long-haired breeds like Yorkies.</p>
              </Link>
              <Link href="/pet-training/basic-commands" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Basic Training for Small Dogs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Training tips tailored for small, intelligent breeds.</p>
              </Link>
              <Link href="/tools/dental-health-score-tool" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dental Health Score Tool</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Assess your Yorkie's dental health and get recommendations.</p>
              </Link>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

