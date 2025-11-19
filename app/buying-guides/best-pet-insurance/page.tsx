import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Pet Insurance - Buying Guide | Nearby Pet Care',
  description: 'Complete buying guide for pet insurance. Compare plans, coverage options, and find the best pet insurance for your needs.',
  keywords: ['best pet insurance', 'pet insurance guide', 'pet insurance comparison', 'dog insurance', 'cat insurance'],
  openGraph: { title: 'Best Pet Insurance | Nearby Pet Care', description: 'Complete buying guide for pet insurance.', type: 'article', url: 'https://nearbypetcare.com/buying-guides/best-pet-insurance' },
  alternates: { canonical: 'https://nearbypetcare.com/buying-guides/best-pet-insurance' },
};

export default function BestPetInsurancePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/buying-guides" className="hover:text-blue-600 dark:hover:text-blue-400">Buying Guides</Link>
            <span className="mx-2">/</span>
            <span>Best Pet Insurance</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Best Pet Insurance: Buying Guide</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Pet insurance can help protect you from unexpected veterinary costs. This buying guide helps you understand different types of coverage, compare plans, and choose the best pet insurance for your situation.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Types of Pet Insurance</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Accident-only coverage</li>
              <li>Accident and illness coverage</li>
              <li>Comprehensive coverage (including wellness)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Consider</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Compare deductibles, reimbursement rates, coverage limits, exclusions, waiting periods, and premiums. Consider your pet's age, breed, and health history when selecting a plan.</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Tip:</strong> Enroll your pet while they're young and healthy, as pre-existing conditions are typically not covered.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/buying-guides" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Buying Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

