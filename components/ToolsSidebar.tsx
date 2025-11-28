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

      {/* Travel Resources */}
      <div className="p-4 sm:p-5 bg-yellow-100 dark:bg-yellow-900/30 border-2 border-blue-600 dark:border-blue-500 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 dark:hover:shadow-blue-500/20 group">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-lg flex items-center justify-center text-xl sm:text-2xl transform group-hover:scale-110 transition-transform duration-300 shadow-md">
            ✈️
          </div>
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">
              Traveling with Pets?
            </h3>
            <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
              Expert Travel Guidance
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 mb-4 leading-relaxed transition-colors">
          Planning to fly with your furry friend? Get comprehensive guidance on <span className="font-semibold text-gray-900 dark:text-white">air travel with pets</span>, including airport guides, pet-friendly lounge access, and essential travel perks to ensure a stress-free journey for you and your pet.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
            <svg className="w-4 h-4 text-blue-700 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Airport guides & pet policies</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
            <svg className="w-4 h-4 text-blue-700 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Lounge access & amenities</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
            <svg className="w-4 h-4 text-blue-700 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Travel perks & tips</span>
          </div>
        </div>
        <a
          href="https://barrysskylounge.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/50 transition-all duration-300 text-center transform hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          <span>Explore Bary's Sky Lounge</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
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

