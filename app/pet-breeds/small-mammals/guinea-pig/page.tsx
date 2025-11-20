import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Guinea Pig Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping guinea pigs as pets. Learn about guinea pig care, housing, diet, and health considerations.',
  keywords: ['guinea pig', 'guinea pig care', 'cavy', 'guinea pig housing', 'guinea pig diet'],
  openGraph: { title: 'Guinea Pig Care Guide | Nearby Pet Care', description: 'Complete guide to keeping guinea pigs as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/small-mammals/guinea-pig' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/small-mammals/guinea-pig' },
};

export default function GuineaPigPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Small Mammals', href: '/pet-breeds/small-mammals' },
            { name: 'Guinea Pig', href: '/pet-breeds/small-mammals/guinea-pig' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Guinea Pig</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Guinea pigs (also called cavies) are social, gentle pets known for their friendly personalities and distinctive vocalizations. They make excellent pets for families and are relatively easy to care for.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 1-3 pounds</li>
              <li>Lifespan: 5-7 years</li>
              <li>Temperament: Social, gentle, friendly, vocal</li>
              <li>Activity Level: Moderate (diurnal - active during the day)</li>
              <li>Grooming: Low to moderate (regular brushing for long-haired breeds)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Guinea pigs need a spacious enclosure (minimum 7.5 square feet for one, larger for pairs). They require a safe area for exercise outside the enclosure daily. Provide hiding spots, toys, and appropriate bedding. Guinea pigs are highly social and should be kept in pairs or groups.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Guinea pigs require unlimited access to fresh hay (timothy or orchard hay), high-quality guinea pig pellets, and fresh vegetables daily (especially those high in vitamin C, as they cannot produce it themselves). Fresh water should always be available.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Guinea pigs can be prone to vitamin C deficiency (scurvy), dental problems, respiratory infections, and skin conditions. Regular veterinary check-ups with an exotic animal veterinarian, proper diet including vitamin C, and maintaining a clean environment are essential for their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Small Mammals</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

