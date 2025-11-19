import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Obedience Training for Pets | Nearby Pet Care',
  description: 'Learn effective obedience training techniques for pets. Basic commands, positive reinforcement, and training tips.',
  keywords: ['obedience training', 'dog training commands', 'pet training basics', 'positive reinforcement'],
  openGraph: {
    title: 'Obedience Training for Pets | Nearby Pet Care',
    description: 'Learn effective obedience training techniques for pets.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-training/obedience-training',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Obedience Training for Pets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obedience Training for Pets | Nearby Pet Care',
    description: 'Learn effective obedience training techniques for pets.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/obedience-training' },
};

export default function ObedienceTrainingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Training', href: '/pet-training' },
            { name: 'Obedience Training', href: '/pet-training/obedience-training' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Obedience Training for Pets</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Obedience training teaches your pet basic commands and good manners. This guide covers essential commands and positive reinforcement techniques.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Basic Commands</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Sit</li>
              <li>Stay</li>
              <li>Come</li>
              <li>Down</li>
              <li>Leave it</li>
              <li>Heel</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Positive Reinforcement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Use treats, praise, and play as rewards for desired behavior. Keep training sessions short, fun, and consistent for best results.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

