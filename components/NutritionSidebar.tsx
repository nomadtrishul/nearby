'use client';

import Link from 'next/link';

export default function NutritionSidebar() {
  const guides = [
    { title: 'Pet Nutrition Diet Plan', href: '/pet-nutrition/pet-nutrition-diet-plan', icon: '📋' },
    { title: 'Best Pet Food Ingredients Guide', href: '/pet-nutrition/best-pet-food-ingredients-guide', icon: '🥘' },
    { title: 'Homemade Pet Food Recipes', href: '/pet-nutrition/homemade-pet-food-recipes-guide', icon: '👨‍🍳' },
    { title: 'Pet Food Allergies & Elimination Diet', href: '/pet-nutrition/pet-food-allergies-elimination-diet', icon: '🚫' },
    { title: 'Feeding Portion Size Calculator', href: '/pet-nutrition/pet-feeding-portion-size-calculator', icon: '⚖️' },
    { title: 'Raw vs Cooked Pet Diet', href: '/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons', icon: '🥩' },
    { title: 'Toxic Foods for Pets', href: '/pet-nutrition/toxic-foods-for-pets-complete-list', icon: '⚠️' },
    { title: 'Best Pet Supplements Guide', href: '/pet-nutrition/best-pet-supplements-guide', icon: '💊' },
    { title: 'Wet vs Dry vs Fresh Food', href: '/pet-nutrition/wet-vs-dry-vs-fresh-pet-food', icon: '🍽️' },
    { title: 'Pet Weight Management Guide', href: '/pet-nutrition/pet-weight-management-guide', icon: '⚖️' },
    { title: 'Pet Feeding Schedule Guide', href: '/pet-nutrition/pet-feeding-schedule-guide', icon: '⏰' },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Nutrition Guides Navigation */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Nutrition Guides
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

      {/* Quick Nutrition Tips */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Nutrition Tips
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Read labels</span> to understand what's in your pet's food
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Measure portions</span> accurately to prevent overfeeding
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Consistent schedule</span> helps with digestion and training
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Fresh water</span> should always be available
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

      {/* Important Notice */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          Consult Your Vet
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
          Always consult with your veterinarian before making significant changes to your pet's diet, especially if they have health conditions.
        </p>
        <Link
          href="/pet-health/signs-your-pet-needs-a-vet"
          className="block w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
        >
          Find a Vet
        </Link>
      </div>
    </aside>
  );
}

