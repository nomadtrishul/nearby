'use client';

import Link from 'next/link';

export default function HealthSidebar() {
  const guides = [
    { title: 'Common Pet Diseases', href: '/pet-health/common-diseases', icon: '🦠' },
    { title: 'Vaccination Schedules', href: '/pet-health/vaccination-schedules', icon: '💉' },
    { title: 'Parasite Control', href: '/pet-health/parasite-control-ticks-fleas-worms', icon: '🐛' },
    { title: 'First Aid for Pets', href: '/pet-health/first-aid-for-pets', icon: '🩹' },
    { title: 'Skin and Coat Health', href: '/pet-health/skin-and-coat-health', icon: '✨' },
    { title: 'Signs Your Pet Needs a Vet', href: '/pet-health/signs-your-pet-needs-a-vet', icon: '⚠️' },
    { title: 'Mental Health & Anxiety', href: '/pet-health/mental-health-anxiety', icon: '🧠' },
    { title: 'Diagnostics & Tests', href: '/pet-health/diagnostics-and-tests', icon: '🔬' },
    { title: 'Seasonal Health Tips', href: '/pet-health/seasonal-health-tips', icon: '🌤️' },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Health Guides Navigation */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Health Guides
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
              >
                <span className="text-base mr-2 group-hover:scale-110 transition-transform">{guide.icon}</span>
                <span className="flex-1">{guide.title}</span>
                <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Health Tips */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Health Tips
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Annual check-ups</span> help catch health issues early
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Keep vaccinations</span> up to date for disease prevention
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Watch for changes</span> in behavior, appetite, or activity
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Parasite prevention</span> is essential year-round
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
              href="/pet-grooming"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Grooming
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
        </ul>
      </div>

      {/* Emergency CTA Section */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          Pet Emergency?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
          If your pet is experiencing a medical emergency, contact your veterinarian or emergency clinic immediately.
        </p>
        <Link
          href="/pet-health/signs-your-pet-needs-a-vet"
          className="block w-full px-3 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-center"
        >
          Emergency Signs
        </Link>
      </div>
    </aside>
  );
}

