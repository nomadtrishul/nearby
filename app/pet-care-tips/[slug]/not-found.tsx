import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Pet Care Tip Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The pet care tip you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/pet-care-tips"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          View All Tips
        </Link>
      </div>
    </main>
  );
}

