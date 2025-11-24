'use client';

import Link from 'next/link';

const behaviorGuides = [
  { title: 'Behavior Pillar Guide', href: '/pet-behavior/pillar', icon: '📘' },
  { title: 'Calm Separation Anxiety', href: '/pet-behavior/how-to-reduce-separation-anxiety-in-pets', icon: '🤗' },
  { title: 'Understand Body Language', href: '/pet-behavior/how-to-understand-pet-body-language', icon: '🐾' },
  { title: 'Stop Destructive Chewing', href: '/pet-behavior/how-to-stop-destructive-chewing', icon: '🦴' },
];

const quickTips = [
  { title: 'Track triggers', copy: 'Keep a behavior diary to identify patterns such as time of day, noises, or interactions that precede problem behavior.' },
  { title: 'Reward the calm', copy: 'Catch your pet being relaxed and reward immediately—positivity rewires behavior faster than corrections.' },
  { title: 'Create safe zones', copy: 'Give every pet a predictable retreat with water, enrichment toys, and low lighting for decompression.' },
  { title: 'Change happens slowly', copy: 'Work in 5-10 minute sessions and end before your pet loses focus to keep progress positive.' },
];

const resourceLinks = [
  { title: 'Pet Training', href: '/pet-training' },
  { title: 'Pet Health', href: '/pet-health' },
  { title: 'Pet Care Tips', href: '/pet-care-tips' },
];

export default function BehaviorSidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Behavior Guides
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {behaviorGuides.map((guide) => (
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

      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Behavior Tips
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          {quickTips.map((tip) => (
            <li key={tip.title} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">{tip.title}:</span> {tip.copy}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Related Resources
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {resourceLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
              >
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          When to Call a Pro
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
          If your pet has bitten, is self-harming, or you feel unsafe, connect with a certified behaviorist or veterinary professional right away.
        </p>
        <Link
          href="/contact"
          className="block w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
        >
          Find Support
        </Link>
      </div>
    </aside>
  );
}


