import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find Pet Trainers Near You | Nearby Pet Care',
  description: 'Find professional pet trainers in your area. Browse our directory of dog trainers, cat trainers, and behavior specialists.',
  keywords: ['pet trainers near me', 'dog trainers', 'pet training services', 'behavior trainers'],
  openGraph: { title: 'Find Pet Trainers Near You | Nearby Pet Care', description: 'Find professional pet trainers in your area.', type: 'website', url: 'https://nearbypetcare.com/nearby-pet-services/trainers' },
  alternates: { canonical: 'https://nearbypetcare.com/nearby-pet-services/trainers' },
};

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/nearby-pet-services" className="hover:text-blue-600 dark:hover:text-blue-400">Nearby Pet Services</Link>
            <span className="mx-2">/</span>
            <span>Trainers</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Find Pet Trainers Near You</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Find professional pet trainers in your area. Our directory helps you locate experienced trainers who can help with obedience, behavior modification, and specialized training needs.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Types of Training Services</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Basic obedience training</li>
              <li>Puppy and kitten training</li>
              <li>Behavior modification</li>
              <li>Specialized training (agility, therapy, etc.)</li>
              <li>Private or group classes</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Look For</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Choose trainers who use positive reinforcement methods, have relevant certifications, good reviews, and experience with your pet's specific needs. Consider whether group classes or private sessions are better for your situation.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/nearby-pet-services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Nearby Pet Services</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

