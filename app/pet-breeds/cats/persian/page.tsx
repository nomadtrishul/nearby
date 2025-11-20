import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Persian Cat Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Persian cats. Learn about their characteristics, temperament, grooming needs, and care requirements.',
  keywords: ['Persian cat', 'Persian breed', 'Persian cat care', 'Persian cat temperament', 'long-haired cat'],
  openGraph: { title: 'Persian Cat Breed Guide | Nearby Pet Care', description: 'Complete guide to Persian cats.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/cats/persian' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/cats/persian' },
};

export default function PersianCatPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Cats', href: '/pet-breeds/cats' },
            { name: 'Persian', href: '/pet-breeds/cats/persian' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Persian Cat</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Persian cats are known for their luxurious long coats, sweet personalities, and calm demeanor. They are one of the most popular cat breeds and make excellent indoor companions.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Medium to large (7-12 pounds)</li>
              <li>Lifespan: 10-17 years</li>
              <li>Temperament: Gentle, quiet, affectionate, calm</li>
              <li>Energy Level: Low to moderate</li>
              <li>Grooming: High (daily brushing required)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Persian cats require daily grooming to prevent matting of their long coat. They need regular eye cleaning due to their flat faces, a balanced diet, and a calm indoor environment. They are not particularly active and prefer a quiet, stable home.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Grooming</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Daily brushing is essential to prevent tangles and mats. Regular bathing (every 4-6 weeks) helps maintain coat health. Their flat faces require daily eye cleaning to prevent tear staining and infections.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Persian cats can be prone to breathing problems due to their flat faces (brachycephalic), eye conditions, polycystic kidney disease, and dental issues. Regular veterinary check-ups and proper grooming are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Cat Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

