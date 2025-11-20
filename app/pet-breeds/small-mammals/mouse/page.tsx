import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mouse Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping mice as pets. Learn about mouse care, housing, diet, and health considerations.',
  keywords: ['mouse', 'pet mouse', 'mouse care', 'mouse housing', 'mouse diet'],
  openGraph: { title: 'Mouse Care Guide | Nearby Pet Care', description: 'Complete guide to keeping mice as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals/mouse' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals/mouse' },
};

export default function MousePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Small Mammals', href: '/pet-breeds/small-mammals' },
            { name: 'Mouse', href: '/pet-breeds/small-mammals/mouse' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Mouse</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Mice are small, active, and social pets that are relatively easy to care for. They are curious and entertaining to watch, making them popular pets for families.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 2.5-4 inches (body), 3-4 inches (tail)</li>
              <li>Lifespan: 1-3 years</li>
              <li>Temperament: Social, curious, active, can be skittish</li>
              <li>Activity Level: High (nocturnal - active at night)</li>
              <li>Grooming: Minimal (self-grooming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Mice need a secure enclosure (minimum 10 gallons for 2-3 mice) with appropriate bedding, hiding spots, toys, and a wheel for exercise. They are social and should be kept in pairs or small groups of the same sex. Provide a quiet environment during the day.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Mice require a balanced commercial mouse food, supplemented with fresh vegetables and occasional fruits. Fresh water should always be available. Avoid feeding too many fatty or sugary treats.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Mice can be prone to respiratory infections, tumors, and dental problems. Regular veterinary check-ups with an exotic animal veterinarian, proper diet, and maintaining a clean environment are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

