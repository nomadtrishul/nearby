import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Home Proofing - Safety Guide | Nearby Pet Care',
  description: 'Complete guide to pet-proofing your home. Identify and eliminate hazards to keep your pet safe.',
  keywords: ['pet proofing', 'home safety pets', 'pet hazards', 'pet home safety'],
  openGraph: { title: 'Pet Home Proofing | Nearby Pet Care', description: 'Complete guide to pet-proofing your home.', type: 'article', url: 'https://nearbypetcare.com/pet-safety/home-proofing' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-safety/home-proofing' },
};

export default function HomeProofingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-safety" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Safety</Link>
            <span className="mx-2">/</span>
            <span>Home Proofing</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Home Proofing</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Pet-proofing your home helps prevent accidents and keeps your pet safe. This guide covers common hazards and how to eliminate them.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Household Hazards</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Toxic plants and foods</li>
              <li>Electrical cords and outlets</li>
              <li>Small objects that can be swallowed</li>
              <li>Open windows and balconies</li>
              <li>Cleaning products and chemicals</li>
              <li>Medications</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet-Proofing Checklist</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Secure cabinets, cover electrical cords, remove toxic plants, secure windows and doors, store medications safely, and keep small objects out of reach. Regularly inspect your home for new hazards.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-safety" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Safety</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

