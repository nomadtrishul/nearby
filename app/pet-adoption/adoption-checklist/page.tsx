import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Adoption Checklist - Complete Guide | Nearby Pet Care',
  description: 'Complete checklist for pet adoption. Ensure you\'re ready to adopt with this comprehensive pre-adoption checklist.',
  keywords: ['pet adoption checklist', 'adoption requirements', 'pet adoption preparation'],
  openGraph: { title: 'Pet Adoption Checklist | Nearby Pet Care', description: 'Complete checklist for pet adoption.', type: 'article', url: 'https://nearbypetcare.com/pet-adoption/adoption-checklist' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-adoption/adoption-checklist' },
};

export default function AdoptionChecklistPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-adoption" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Adoption</Link>
            <span className="mx-2">/</span>
            <span>Adoption Checklist</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Adoption Checklist</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Use this comprehensive checklist to ensure you're fully prepared for pet adoption. Being prepared helps ensure a successful adoption experience.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pre-Adoption Checklist</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Research the type of pet that fits your lifestyle</li>
              <li>Ensure all family members are on board</li>
              <li>Check pet policies in your housing</li>
              <li>Budget for initial and ongoing costs</li>
              <li>Identify a veterinarian</li>
              <li>Prepare your home (pet-proofing)</li>
              <li>Gather essential supplies</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Adoption Day Checklist</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Bring required documentation</li>
              <li>Bring a carrier or leash</li>
              <li>Ask questions about the pet's history and needs</li>
              <li>Schedule a veterinary checkup</li>
              <li>Plan for a quiet first few days</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-adoption" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Adoption</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

