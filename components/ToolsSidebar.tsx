'use client';

import Link from 'next/link';

interface Tool {
  title: string;
  href: string;
  icon: string;
  category: string;
}

interface ToolsSidebarProps {
  categories?: string[];
  popularTools?: Tool[];
}

export default function ToolsSidebar({ categories, popularTools }: ToolsSidebarProps) {
  const defaultCategories = [
    'Health & Wellness',
    'Nutrition',
    'Adoption',
    'Planning',
    'Grooming & Hygiene',
    'Training & Behavior',
  ];

  const defaultPopularTools: Tool[] = [
    { title: 'Pet Weight Calculator', href: '/tools/weight-calculator', icon: '⚖️', category: 'Health & Wellness' },
    { title: 'Feeding Portion Calculator', href: '/tools/feeding-portion-calculator', icon: '🍽️', category: 'Nutrition' },
    { title: 'Breed Selector', href: '/tools/breed-selector', icon: '🐾', category: 'Adoption' },
    { title: 'Vaccine Reminder', href: '/tools/vaccine-reminder', icon: '💉', category: 'Health & Wellness' },
    { title: 'Pet Age Calculator', href: '/tools/age-calculator', icon: '🎂', category: 'Health & Wellness' },
    { title: 'Exercise Calculator', href: '/tools/exercise-calculator', icon: '🏃', category: 'Health & Wellness' },
  ];

  const displayCategories = categories || defaultCategories;
  const displayPopularTools = popularTools || defaultPopularTools;

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Tool Categories */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Tool Categories
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {displayCategories.map((category) => (
            <li key={category}>
              <Link
                href={`/tools#${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
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

      {/* Popular Tools */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Popular Tools
        </h3>
        {displayPopularTools.length > 0 ? (
          <ul className="space-y-2 sm:space-y-3">
            {displayPopularTools.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="block group"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg sm:text-xl flex-shrink-0">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 line-clamp-2">
                        {tool.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 transition-colors">
            No tools available yet. Check back soon!
          </p>
        )}
      </div>

      {/* Quick Tips */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Using Our Tools
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Accurate inputs</span> ensure the best results from our calculators
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Regular updates</span> keep tools aligned with latest research
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Consult your vet</span> for personalized advice and validation
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Track changes</span> over time to monitor your pet's progress
          </li>
        </ul>
      </div>

      {/* Related Resources */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Related Resources
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          <li>
            <Link
              href="/pet-health"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Health
            </Link>
          </li>
          <li>
            <Link
              href="/pet-nutrition"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Nutrition
            </Link>
          </li>
          <li>
            <Link
              href="/pet-care-tips"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Care Tips
            </Link>
          </li>
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
        </ul>
      </div>

      {/* CTA Section */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          Need Help?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
          Our tools provide estimates and guidance. For personalized advice, consult with your veterinarian.
        </p>
        <Link
          href="/contact"
          className="block w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
        >
          Contact Us
        </Link>
      </div>
    </aside>
  );
}

