import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wet vs Dry Pet Food - Complete Comparison | Nearby Pet Care',
  description: 'Detailed comparison of wet vs dry pet food. Compare benefits, drawbacks, nutrition, and determine which is best for your pet.',
  keywords: ['wet vs dry food', 'wet food vs dry food', 'pet food comparison', 'dog food wet dry', 'cat food wet dry'],
  openGraph: { title: 'Wet vs Dry Pet Food - Complete Comparison | Nearby Pet Care', description: 'Detailed comparison of wet vs dry pet food.', type: 'article', url: 'https://nearbypetcare.com/comparisons/wet-vs-dry-food' },
  alternates: { canonical: 'https://nearbypetcare.com/comparisons/wet-vs-dry-food' },
};

export default function WetVsDryFoodPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/comparisons" className="hover:text-blue-600 dark:hover:text-blue-400">Comparisons</Link>
            <span className="mx-2">/</span>
            <span>Wet vs Dry Food</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Wet vs Dry Pet Food: Complete Comparison</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Choosing between wet and dry pet food is an important decision. This comprehensive comparison examines the benefits, drawbacks, and best uses for each type.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Dry Food (Kibble)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Pros:</strong> Convenient, cost-effective, helps dental health, long shelf life</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Cons:</strong> Lower moisture content, may contain more preservatives</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Wet Food (Canned)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Pros:</strong> Higher moisture, more palatable, easier to eat</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Cons:</strong> More expensive, shorter shelf life, may contribute to dental issues</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Which is Better?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Many pet owners find success with a combination approach, using both wet and dry food. Consider your pet's health, preferences, and your lifestyle when deciding. Consult with your veterinarian for personalized recommendations.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/comparisons" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Comparisons</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

