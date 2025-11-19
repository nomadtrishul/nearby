import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Senior Pet Diet Guides | Nearby Pet Care',
  description: 'Complete guide to nutrition for senior pets. Learn about dietary needs, weight management, and special considerations for aging pets.',
  keywords: ['senior pet diet', 'elderly pet nutrition', 'senior pet food', 'aging pet diet'],
  openGraph: { title: 'Senior Pet Diet Guides | Nearby Pet Care', description: 'Complete guide to nutrition for senior pets.', type: 'article', url: 'https://nearbypetcare.com/senior-pets/senior-diet-guides' },
  alternates: { canonical: 'https://nearbypetcare.com/senior-pets/senior-diet-guides' },
};

export default function SeniorDietGuidesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/senior-pets" className="hover:text-blue-600 dark:hover:text-blue-400">Senior Pets</Link>
            <span className="mx-2">/</span>
            <span>Senior Diet Guides</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Senior Pet Diet Guides</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Senior pets have different nutritional needs than younger pets. This guide covers dietary considerations, weight management, and special nutritional requirements for aging pets.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Nutritional Considerations</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Lower calorie needs (if less active)</li>
              <li>Higher quality protein for muscle maintenance</li>
              <li>Joint-supporting nutrients</li>
              <li>Easier-to-digest ingredients</li>
              <li>Appropriate fiber for digestive health</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Dietary Needs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Senior pets may need diets formulated for kidney health, joint support, or weight management. Work with your veterinarian to determine the best diet for your pet's specific health needs.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/senior-pets" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Senior Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

