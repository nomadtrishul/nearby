import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Nearby Pet Care',
  description: 'The page you are looking for could not be found. Return to our homepage or browse our pet care resources.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto transition-colors">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track with our pet care resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Link
            href="/"
            className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Home
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
              Return to homepage
            </p>
          </Link>

          <Link
            href="/pet-care-tips"
            className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Pet Care Tips
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
              Expert pet care guides
            </p>
          </Link>

          <Link
            href="/blog"
            className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Blog
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
              Latest pet care articles
            </p>
          </Link>

          <Link
            href="/pet-nutrition"
            className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">🍽️</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Pet Nutrition
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
              Nutrition guides
            </p>
          </Link>

          <Link
            href="/pet-health"
            className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Pet Health
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
              Health & wellness
            </p>
          </Link>

          <Link
            href="/contact"
            className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Contact
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
              Get in touch
            </p>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          <Link
            href="/pet-care-tips"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
          >
            Explore Pet Care Tips
          </Link>
        </div>
      </div>
    </main>
  );
}

