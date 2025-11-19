import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Aggression and Anxiety - Behavior Guide | Nearby Pet Care',
  description: 'Learn about addressing aggression and anxiety in pets. Understanding causes and effective management strategies.',
  keywords: ['pet aggression', 'pet anxiety', 'behavioral issues', 'aggressive pet', 'anxious pet'],
  openGraph: { title: 'Pet Aggression and Anxiety | Nearby Pet Care', description: 'Learn about addressing aggression and anxiety in pets.', type: 'article', url: 'https://nearbypetcare.com/pet-training/aggression-and-anxiety' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/aggression-and-anxiety' },
};

export default function AggressionAndAnxietyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-training" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Training</Link>
            <span className="mx-2">/</span>
            <span>Aggression and Anxiety</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Aggression and Anxiety</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Aggression and anxiety in pets can be challenging to address. Understanding the underlying causes is the first step toward effective management and treatment.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Aggression</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Aggression can stem from fear, territorial behavior, pain, or lack of socialization. Identifying triggers and working with a professional behaviorist is important for safety.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Managing Anxiety</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Anxiety may manifest as destructive behavior, excessive vocalization, or withdrawal. Creating a safe environment, maintaining routines, and potentially using calming aids can help.</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> For severe aggression or anxiety, consult with a veterinarian or certified animal behaviorist for professional guidance and treatment options.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

