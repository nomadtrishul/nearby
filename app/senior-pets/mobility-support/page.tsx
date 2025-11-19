import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobility Support for Senior Pets | Nearby Pet Care',
  description: 'Learn how to support mobility and joint health in senior pets. Tips for managing arthritis and mobility issues.',
  keywords: ['senior pet mobility', 'pet arthritis', 'elderly pet mobility', 'joint health pets'],
  openGraph: { title: 'Mobility Support for Senior Pets | Nearby Pet Care', description: 'Learn how to support mobility and joint health in senior pets.', type: 'article', url: 'https://nearbypetcare.com/senior-pets/mobility-support' },
  alternates: { canonical: 'https://nearbypetcare.com/senior-pets/mobility-support' },
};

export default function MobilitySupportPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/senior-pets" className="hover:text-blue-600 dark:hover:text-blue-400">Senior Pets</Link>
            <span className="mx-2">/</span>
            <span>Mobility Support</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Mobility Support for Senior Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">As pets age, they may experience mobility issues and joint problems. This guide covers ways to support your senior pet's mobility and maintain their quality of life.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Supporting Joint Health</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Maintain a healthy weight to reduce joint stress</li>
              <li>Provide joint supplements (glucosamine, chondroitin)</li>
              <li>Gentle, regular exercise appropriate for their condition</li>
              <li>Comfortable, supportive bedding</li>
              <li>Ramps or steps for accessing furniture or vehicles</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Managing Arthritis</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Work with your veterinarian to manage arthritis pain. Options may include medications, physical therapy, acupuncture, or other treatments. Keep your pet comfortable and adjust their environment to accommodate mobility limitations.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/senior-pets" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Senior Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

