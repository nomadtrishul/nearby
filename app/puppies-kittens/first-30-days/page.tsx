import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'First 30 Days with Your New Puppy or Kitten | Nearby Pet Care',
  description: 'Complete guide to the first 30 days with your new puppy or kitten. Essential tips for care, health, and bonding.',
  keywords: ['first 30 days puppy', 'first 30 days kitten', 'new puppy guide', 'new kitten guide'],
  openGraph: { title: 'First 30 Days with Your New Puppy or Kitten | Nearby Pet Care', description: 'Complete guide to the first 30 days with your new puppy or kitten.', type: 'article', url: 'https://nearbypetcare.com/puppies-kittens/first-30-days' },
  alternates: { canonical: 'https://nearbypetcare.com/puppies-kittens/first-30-days' },
};

export default function First30DaysPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/puppies-kittens" className="hover:text-blue-600 dark:hover:text-blue-400">Puppies & Kittens</Link>
            <span className="mx-2">/</span>
            <span>First 30 Days</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">First 30 Days with Your New Puppy or Kitten</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">The first 30 days are crucial for setting your new puppy or kitten up for a healthy, happy life. This guide covers essential care, health checks, and early training.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Week 1: Settling In</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Schedule a veterinary checkup</li>
              <li>Establish a routine for feeding and sleep</li>
              <li>Create a safe, quiet space</li>
              <li>Begin gentle socialization</li>
              <li>Start basic training (name recognition, simple commands)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Weeks 2-4: Building Foundations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Continue establishing routines, begin house training, expand socialization experiences, and monitor health closely. This period is critical for development and bonding.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/puppies-kittens" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Puppies & Kittens</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

