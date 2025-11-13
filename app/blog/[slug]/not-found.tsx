import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24 flex items-center justify-center">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
          Blog Post Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 transition-colors">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  );
}

