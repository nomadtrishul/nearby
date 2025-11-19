import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wet vs Dry vs Fresh Pet Food - Which is Best? | Nearby Pet Care',
  description: 'Compare wet, dry, and fresh pet food options to determine what\'s best for your pet. Learn the pros, cons, and nutritional differences of each type.',
  keywords: ['wet pet food', 'dry pet food', 'fresh pet food', 'pet food comparison', 'best pet food type'],
  openGraph: {
    title: 'Wet vs Dry vs Fresh Pet Food - Which is Best? | Nearby Pet Care',
    description: 'Compare wet, dry, and fresh pet food options to determine what\'s best for your pet.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
  },
};

export default function WetVsDryVsFreshPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Wet vs Dry vs Fresh Pet Food</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Wet vs Dry vs Fresh Pet Food: Which is Best?
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Choosing between wet, dry, and fresh pet food can be challenging. Each type has unique benefits and considerations. This guide helps you understand the differences and make an informed decision.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dry Pet Food (Kibble)</h2>
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Pros:</strong> Convenient, cost-effective, helps with dental health, long shelf life</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Cons:</strong> Lower moisture content, may contain more preservatives, less palatable for some pets</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Wet Pet Food (Canned)</h2>
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Pros:</strong> Higher moisture content, more palatable, easier to eat for senior pets, fewer preservatives</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Cons:</strong> More expensive, shorter shelf life once opened, may contribute to dental issues</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Fresh Pet Food</h2>
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Pros:</strong> Minimally processed, high-quality ingredients, customizable, fresh preparation</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Cons:</strong> Most expensive, requires refrigeration, shorter shelf life, may need veterinary formulation</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many pet owners find success with a combination approach, using different food types for different meals or mixing them together.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-nutrition" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Pet Nutrition Guides
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

