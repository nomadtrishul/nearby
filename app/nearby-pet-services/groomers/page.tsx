import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find Pet Groomers Near You | Nearby Pet Care',
  description: 'Find professional pet groomers in your area. Browse our directory of grooming salons and mobile grooming services.',
  keywords: ['pet groomers near me', 'dog groomers', 'cat groomers', 'pet grooming services'],
  openGraph: { title: 'Find Pet Groomers Near You | Nearby Pet Care', description: 'Find professional pet groomers in your area.', type: 'website', url: 'https://nearbypetcare.com/nearby-pet-services/groomers' },
  alternates: { canonical: 'https://nearbypetcare.com/nearby-pet-services/groomers' },
};

export default function GroomersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/nearby-pet-services" className="hover:text-blue-600 dark:hover:text-blue-400">Nearby Pet Services</Link>
            <span className="mx-2">/</span>
            <span>Groomers</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Find Pet Groomers Near You</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Find professional pet groomers in your area. Our directory helps you locate experienced grooming professionals who can keep your pet looking and feeling their best.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Types of Grooming Services</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Full-service grooming salons</li>
              <li>Mobile grooming services</li>
              <li>Self-service grooming facilities</li>
              <li>Specialty breed grooming</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Consider</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Look for groomers with experience with your pet's breed, positive reviews, clean facilities, and good communication. Consider whether you prefer a salon or mobile service based on your pet's needs and your convenience.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/nearby-pet-services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Nearby Pet Services</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

