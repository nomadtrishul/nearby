'use client';

import Link from 'next/link';

export default function TrainingSidebar() {
  const guides = [
    { title: 'Obedience Training', href: '/pet-training/obedience-training', icon: '🎓' },
    { title: 'Potty Training', href: '/pet-training/potty-training', icon: '🚽' },
    { title: 'Crate Training', href: '/pet-training/crate-training', icon: '📦' },
    { title: 'Socialisation', href: '/pet-training/socialisation', icon: '👥' },
    { title: 'Aggression and Anxiety', href: '/pet-training/aggression-and-anxiety', icon: '😰' },
    { title: 'Training Tools Reviews', href: '/pet-training/training-tools-reviews', icon: '🛠️' },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Training Guides Navigation */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Training Guides
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

      {/* Quick Training Tips */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Training Tips
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Be consistent</span> with commands and rewards
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Keep sessions short</span> (5-15 minutes) for best results
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">Use positive reinforcement</span> to build trust and confidence
          </li>
          <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">End on a positive note</span> to keep training fun
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
              href="/pet-safety"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Safety
            </Link>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          Need Professional Help?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
          For severe behavioral issues or aggression, consult with a certified animal behaviorist or professional trainer.
        </p>
        <Link
          href="/contact"
          className="block w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
        >
          Get Help
        </Link>
      </div>
    </aside>
  );
}

