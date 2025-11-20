import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Finches as Pets Guide | Nearby Pet Care',
  description: 'Complete guide to keeping finches as pets. Learn about finch care, housing, diet, and health considerations.',
  keywords: ['finches', 'finch care', 'finch pets', 'finch guide', 'finch diet', 'finch health'],
  openGraph: { title: 'Finches as Pets Guide | Nearby Pet Care', description: 'Complete guide to keeping finches as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/birds/finches' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/birds/finches' },
};

export default function FinchesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Birds', href: '/pet-breeds/birds' },
            { name: 'Finches', href: '/pet-breeds/birds/finches' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Finches as Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Finches are small, active birds that are best kept in pairs or small groups. They are relatively quiet and low-maintenance, making them ideal for apartment living.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (3-6 inches)</li>
              <li>Lifespan: 5-10 years</li>
              <li>Temperament: Social, active, peaceful</li>
              <li>Activity Level: High (enjoy flying and hopping)</li>
              <li>Grooming: Minimal</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Finch Species</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Zebra Finches</li>
              <li>Society Finches</li>
              <li>Gouldian Finches</li>
              <li>Owl Finches</li>
              <li>Java Finches</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Finches thrive in pairs or small groups and need a spacious cage with room to fly. They require a varied diet of seeds, pellets, and fresh greens. Provide multiple perches, nesting materials, and regular access to bathing water.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">A wide, horizontal cage is essential for finches as they are active flyers. Include natural perches, food and water stations, and nesting boxes if breeding. Keep the cage in a quiet area with natural light.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Finches are generally healthy but can be susceptible to respiratory infections, mites, and nutritional deficiencies. Clean the cage regularly and provide a balanced diet to maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Bird Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

