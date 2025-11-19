'use client';

import Link from 'next/link';

interface TipsSidebarProps {
  recentTips: Array<{
    slug: string;
    title: string;
    date: string;
    category?: string;
  }>;
  categories: string[];
  tags: string[];
}

export default function TipsSidebar({ recentTips, categories, tags }: TipsSidebarProps) {

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Recent Tips */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Recent Tips
        </h3>
        {recentTips.length > 0 ? (
          <ul className="space-y-2 sm:space-y-3">
            {recentTips.map((tip) => (
              <li key={tip.slug}>
                <Link
                  href={`/pet-care-tips/${tip.slug}`}
                  className="block group"
                >
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 line-clamp-2">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                    {new Date(tip.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 transition-colors">
            No tips yet. Check back soon!
          </p>
        )}
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
            Categories
          </h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/pet-care-tips?category=${encodeURIComponent(category)}`}
                  className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.slice(0, 10).map((tag) => (
              <Link
                key={tag}
                href={`/pet-care-tips?tag=${encodeURIComponent(tag)}`}
                className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          Need Professional Help?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
          Find trusted pet care providers in your area for professional services.
        </p>
        <Link
          href="/new-york"
          className="block w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
        >
          Find Services
        </Link>
      </div>

      {/* Quick Links */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Links
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          <li>
            <Link
              href="/blog"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Care Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

