import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preparing Your Home for a New Pet | Nearby Pet Care',
  description: 'Complete guide to preparing your home for a new pet. Learn what supplies you need and how to pet-proof your home.',
  keywords: ['preparing for pet', 'pet proofing', 'new pet preparation', 'pet supplies'],
  openGraph: { title: 'Preparing Your Home for a New Pet | Nearby Pet Care', description: 'Complete guide to preparing your home for a new pet.', type: 'article', url: 'https://nearbypetcare.com/pet-adoption/preparing-home' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-adoption/preparing-home' },
};

export default function PreparingHomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-adoption" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Adoption</Link>
            <span className="mx-2">/</span>
            <span>Preparing Your Home</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Preparing Your Home for a New Pet</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Proper preparation ensures a smooth transition when bringing a new pet home. This guide covers essential supplies, home safety, and creating a welcoming environment.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Supplies</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Food and water bowls</li>
              <li>Appropriate food for your pet's age and species</li>
              <li>Bed or crate</li>
              <li>Toys and enrichment items</li>
              <li>Grooming supplies</li>
              <li>Identification tags and microchip</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet-Proofing Your Home</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Remove or secure hazardous items, secure electrical cords, block off unsafe areas, and ensure windows and doors are secure. Create a safe space where your new pet can retreat and feel comfortable.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-adoption" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Adoption</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

