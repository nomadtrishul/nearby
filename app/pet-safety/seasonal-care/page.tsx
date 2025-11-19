import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seasonal Pet Safety Guide | Nearby Pet Care',
  description: 'Seasonal safety tips for pets. Learn how to keep your pet safe during different seasons and weather conditions.',
  keywords: ['seasonal pet safety', 'winter pet safety', 'summer pet safety', 'pet weather safety'],
  openGraph: { title: 'Seasonal Pet Safety Guide | Nearby Pet Care', description: 'Seasonal safety tips for pets.', type: 'article', url: 'https://nearbypetcare.com/pet-safety/seasonal-care' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-safety/seasonal-care' },
};

export default function SeasonalCarePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-safety" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Safety</Link>
            <span className="mx-2">/</span>
            <span>Seasonal Care</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Seasonal Pet Safety</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Different seasons bring different safety considerations for pets. This guide covers seasonal hazards and how to protect your pet year-round.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Summer Safety</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Prevent heatstroke - never leave pets in hot cars</li>
              <li>Provide shade and fresh water</li>
              <li>Limit exercise during hottest hours</li>
              <li>Protect paws from hot pavement</li>
              <li>Watch for signs of overheating</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Winter Safety</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Protect from cold temperatures</li>
              <li>Wipe paws after walks to remove ice and salt</li>
              <li>Ensure adequate shelter for outdoor pets</li>
              <li>Watch for signs of hypothermia</li>
              <li>Consider pet-safe antifreeze alternatives</li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-safety" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Safety</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

