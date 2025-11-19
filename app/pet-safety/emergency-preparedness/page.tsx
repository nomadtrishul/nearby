import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Emergency Preparedness Guide | Nearby Pet Care',
  description: 'Learn how to prepare for emergencies with your pet. Create an emergency kit and plan for natural disasters.',
  keywords: ['pet emergency', 'pet disaster preparedness', 'pet emergency kit', 'pet evacuation'],
  openGraph: { title: 'Pet Emergency Preparedness | Nearby Pet Care', description: 'Learn how to prepare for emergencies with your pet.', type: 'article', url: 'https://nearbypetcare.com/pet-safety/emergency-preparedness' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-safety/emergency-preparedness' },
};

export default function EmergencyPreparednessPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-safety" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Safety</Link>
            <span className="mx-2">/</span>
            <span>Emergency Preparedness</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Emergency Preparedness</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Being prepared for emergencies helps ensure your pet's safety during natural disasters, evacuations, or other crisis situations. This guide covers essential preparation steps.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet Emergency Kit</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Food and water (at least 3-7 days supply)</li>
              <li>Medications and medical records</li>
              <li>First aid supplies</li>
              <li>Carrier or crate</li>
              <li>Leash and collar with ID tags</li>
              <li>Photos of your pet</li>
              <li>Contact information for veterinarians</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Emergency Plan</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Identify pet-friendly evacuation locations, ensure your pet is microchipped and has current ID tags, keep important documents accessible, and have a plan for who will care for your pet if you're unable to.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-safety" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Safety</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

