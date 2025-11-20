import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Beagle Breed Guide | Nearby Pet Care',
  description: 'Complete guide to Beagles. Learn about their characteristics, temperament, care requirements, and health considerations.',
  keywords: ['Beagle', 'Beagle breed', 'Beagle care', 'Beagle temperament'],
  openGraph: { title: 'Beagle Breed Guide | Nearby Pet Care', description: 'Complete guide to Beagles.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/dogs/beagle' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/dogs/beagle' },
};

export default function BeaglePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Dogs', href: '/pet-breeds/dogs' },
            { name: 'Beagle', href: '/pet-breeds/dogs/beagle' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Beagle</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Beagles are friendly, curious, and merry hounds known for their excellent sense of smell and distinctive baying howl. They make wonderful family pets but require patient training and plenty of exercise.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small to medium (20-30 pounds)</li>
              <li>Lifespan: 13-16 years</li>
              <li>Temperament: Friendly, curious, merry, determined, gentle</li>
              <li>Energy Level: High</li>
              <li>Grooming: Low to moderate (short coat, regular brushing, moderate shedding)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Beagles require daily exercise and mental stimulation. They are scent hounds and will follow their noses, so a secure, fenced yard is essential. They need consistent training and can be stubborn, but they respond well to positive reinforcement. They are prone to obesity, so portion control is important.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Personality</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Beagles are known for their friendly, outgoing personalities and love of people. They are excellent with children and other dogs. They are curious and will investigate anything that catches their interest, especially scents. They can be vocal and may howl or bay.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Beagles can be prone to obesity, epilepsy, hypothyroidism, and certain eye conditions. Regular exercise, a balanced diet, and regular veterinary check-ups help maintain their health.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

