import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'British Shorthair Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to British Shorthair cats. Learn about their characteristics, calm temperament, and care requirements.',
  keywords: ['British Shorthair', 'British Shorthair cat', 'British Shorthair breed', 'British Shorthair care'],
  openGraph: { title: 'British Shorthair Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to British Shorthair cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/british-shorthair' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/british-shorthair' },
};

export default function BritishShorthairPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Cats', href: '/pet-breeds/cats' },
            { name: 'British Shorthair', href: '/pet-breeds/cats/british-shorthair' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">British Shorthair</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">British Shorthair cats are known for their round faces, dense coats, and calm, easygoing personalities. They are independent yet affectionate, making them ideal companions for various households.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium to large (9-18 pounds)</li>
              <li>Lifespan: 12-20 years</li>
              <li>Temperament: Calm, independent, affectionate, gentle</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: Low to moderate (dense coat, weekly brushing)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">British Shorthairs are low-maintenance cats that adapt well to various living situations. They require weekly brushing to maintain their dense coat, regular playtime for exercise, and a balanced diet. They are content with moderate attention and are not overly demanding.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">British Shorthairs are known for their calm, undemanding nature. They are independent but enjoy companionship and will seek out their owners for affection on their own terms. They are not particularly vocal and prefer a quiet, stable environment.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">British Shorthairs are generally healthy but can be prone to obesity, hypertrophic cardiomyopathy, and hemophilia B. Regular exercise, portion control, and annual veterinary check-ups help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

