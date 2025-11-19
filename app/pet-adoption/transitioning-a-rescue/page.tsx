import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transitioning a Rescue Pet - Complete Guide | Nearby Pet Care',
  description: 'Learn how to help a rescue pet transition into your home. Tips for building trust, establishing routines, and addressing common challenges.',
  keywords: ['rescue pet transition', 'adopting rescue pet', 'rescue pet adjustment', 'new rescue pet'],
  openGraph: { title: 'Transitioning a Rescue Pet | Nearby Pet Care', description: 'Learn how to help a rescue pet transition into your home.', type: 'article', url: 'https://nearbypetcare.com/pet-adoption/transitioning-a-rescue' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-adoption/transitioning-a-rescue' },
};

export default function TransitioningRescuePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-adoption" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Adoption</Link>
            <span className="mx-2">/</span>
            <span>Transitioning a Rescue</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Transitioning a Rescue Pet</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Rescue pets may need extra time and patience to adjust to their new home. This guide provides strategies for helping your rescue pet feel safe, secure, and loved.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The First Days</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Give your rescue pet time to adjust. Start with a quiet, confined space, maintain a consistent routine, and avoid overwhelming them with too many new experiences at once.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Building Trust</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Be patient and let your pet approach you</li>
              <li>Use positive reinforcement</li>
              <li>Respect their boundaries</li>
              <li>Provide consistent care and routine</li>
              <li>Give them space when needed</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Challenges</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Rescue pets may exhibit fear, anxiety, or behavioral issues initially. Work with a veterinarian or behaviorist if needed, and remember that adjustment can take weeks or months.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-adoption" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Adoption</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

