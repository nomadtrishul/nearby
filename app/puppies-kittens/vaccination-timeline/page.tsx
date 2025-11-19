import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puppy & Kitten Vaccination Timeline | Nearby Pet Care',
  description: 'Complete vaccination timeline for puppies and kittens. Learn when to vaccinate and which vaccines are essential.',
  keywords: ['puppy vaccination', 'kitten vaccination', 'vaccination schedule', 'puppy vaccines', 'kitten vaccines'],
  openGraph: { title: 'Puppy & Kitten Vaccination Timeline | Nearby Pet Care', description: 'Complete vaccination timeline for puppies and kittens.', type: 'article', url: 'https://nearbypetcare.com/puppies-kittens/vaccination-timeline' },
  alternates: { canonical: 'https://nearbypetcare.com/puppies-kittens/vaccination-timeline' },
};

export default function VaccinationTimelinePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/puppies-kittens" className="hover:text-blue-600 dark:hover:text-blue-400">Puppies & Kittens</Link>
            <span className="mx-2">/</span>
            <span>Vaccination Timeline</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Puppy & Kitten Vaccination Timeline</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Vaccinations are essential for protecting young pets from serious diseases. This guide outlines the recommended vaccination schedule for puppies and kittens.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Puppy Vaccination Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Puppies typically receive their first vaccinations at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks old. Core vaccines include DHPP (distemper, hepatitis, parainfluenza, parvovirus) and rabies.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Kitten Vaccination Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Kittens usually start vaccinations at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks. Core vaccines include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) and rabies.</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Vaccination schedules may vary based on your pet's health, lifestyle, and local regulations. Always consult with your veterinarian for a personalized schedule.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/puppies-kittens" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Puppies & Kittens</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

