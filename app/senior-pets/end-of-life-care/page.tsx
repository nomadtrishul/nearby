import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'End-of-Life Care for Senior Pets | Nearby Pet Care',
  description: 'Compassionate guide to end-of-life care for senior pets. Learn about quality of life, palliative care, and making difficult decisions.',
  keywords: ['end of life pet care', 'pet palliative care', 'pet quality of life', 'pet hospice'],
  openGraph: { title: 'End-of-Life Care for Senior Pets | Nearby Pet Care', description: 'Compassionate guide to end-of-life care for senior pets.', type: 'article', url: 'https://nearbypetcare.com/senior-pets/end-of-life-care' },
  alternates: { canonical: 'https://nearbypetcare.com/senior-pets/end-of-life-care' },
};

export default function EndOfLifeCarePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/senior-pets" className="hover:text-blue-600 dark:hover:text-blue-400">Senior Pets</Link>
            <span className="mx-2">/</span>
            <span>End-of-Life Care</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">End-of-Life Care for Senior Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Caring for a pet at the end of their life is one of the most difficult but important responsibilities of pet ownership. This guide provides compassionate information about quality of life, palliative care, and making difficult decisions.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Quality of Life Assessment</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Monitor your pet's quality of life by assessing factors like pain levels, appetite, mobility, interest in activities, and overall happiness. Work closely with your veterinarian to evaluate your pet's condition.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Palliative Care</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Palliative care focuses on comfort and quality of life rather than cure. This may include pain management, comfort measures, and adjustments to daily care routines.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Making Difficult Decisions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Decisions about end-of-life care are deeply personal. Consult with your veterinarian, consider your pet's quality of life, and trust your judgment about what's best for your beloved companion.</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Support:</strong> Remember that you're not alone. Reach out to your veterinarian, pet loss support groups, or counselors if you need help during this difficult time.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/senior-pets" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Senior Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

