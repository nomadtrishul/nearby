import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find Veterinarians Near You | Nearby Pet Care',
  description: 'Find trusted veterinarians in your area. Browse our directory of veterinary clinics and animal hospitals.',
  keywords: ['veterinarians near me', 'vet clinics', 'animal hospitals', 'find veterinarian'],
  openGraph: { title: 'Find Veterinarians Near You | Nearby Pet Care', description: 'Find trusted veterinarians in your area.', type: 'website', url: 'https://nearbypetcare.com/nearby-pet-services/veterinarians' },
  alternates: { canonical: 'https://nearbypetcare.com/nearby-pet-services/veterinarians' },
};

export default function VeterinariansPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/nearby-pet-services" className="hover:text-blue-600 dark:hover:text-blue-400">Nearby Pet Services</Link>
            <span className="mx-2">/</span>
            <span>Veterinarians</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Find Veterinarians Near You</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Find trusted veterinarians and veterinary clinics in your area. Our directory helps you locate qualified veterinary professionals for your pet's health care needs.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Look for in a Veterinarian</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Licensed and accredited practice</li>
              <li>Experience with your pet's species</li>
              <li>Emergency services availability</li>
              <li>Convenient location and hours</li>
              <li>Good communication and bedside manner</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Browse our directory to find veterinarians in your area. Consider factors like location, services offered, and reviews from other pet owners.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/nearby-pet-services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Nearby Pet Services</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

