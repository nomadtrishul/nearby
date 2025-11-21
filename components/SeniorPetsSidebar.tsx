'use client';

import Link from 'next/link';

export default function SeniorPetsSidebar() {
  const guides = [
    { title: 'Mobility Support', href: '/senior-pets/mobility-support', icon: '🚶' },
    { title: 'Senior Diet Guides', href: '/senior-pets/senior-diet-guides', icon: '🍽️' },
    { title: 'End-of-Life Care', href: '/senior-pets/end-of-life-care', icon: '💝' },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Senior Pet Care Guides Navigation */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Care Guides
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

      {/* Quick Tips */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Tips
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Regular vet visits</span> are crucial for early detection of health issues
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Monitor weight</span> closely and adjust diet as needed
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Keep them comfortable</span> with soft bedding and easy access to essentials
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Be patient</span> and adjust expectations as they age
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
              href="/puppies-kittens"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Puppies & Kittens
            </Link>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          Need Support?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
          Caring for a senior pet can be challenging. Always consult with your veterinarian for personalized advice about your pet's health and care needs.
        </p>
        <Link
          href="/contact"
          className="block w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
        >
          Contact Us
        </Link>
      </div>
    </aside>
  );
}

