'use client';

import Link from 'next/link';

export default function ComparisonsSidebar() {
  const comparisons = [
    { title: 'Royal Canin vs Pedigree', href: '/comparisons/royal-canin-vs-pedigree', icon: '🐕' },
    { title: 'Wet vs Dry Food', href: '/comparisons/wet-vs-dry-food', icon: '🍽️' },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Comparisons Navigation */}
      <div className="p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 transition-colors">
          All Comparisons
        </h3>
        <ul className="space-y-3">
          {comparisons.map((comparison) => (
            <li key={comparison.href}>
              <Link
                href={comparison.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{comparison.icon}</span>
                <span className="flex-1 font-medium">{comparison.title}</span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Comparison Tips */}
      <div className="p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 transition-colors">
          Comparison Tips
        </h3>
        <ul className="space-y-3">
          <li className="text-sm text-slate-600 dark:text-slate-400 flex gap-3">
            <span className="text-blue-500 mt-0.5">•</span>
            <span><span className="font-semibold text-slate-900 dark:text-white">Read ingredient lists</span> carefully to understand what you're feeding</span>
          </li>
          <li className="text-sm text-slate-600 dark:text-slate-400 flex gap-3">
            <span className="text-blue-500 mt-0.5">•</span>
            <span><span className="font-semibold text-slate-900 dark:text-white">Consider your pet's needs</span> - age, size, activity level, and health</span>
          </li>
          <li className="text-sm text-slate-600 dark:text-slate-400 flex gap-3">
            <span className="text-blue-500 mt-0.5">•</span>
            <span><span className="font-semibold text-slate-900 dark:text-white">Transition gradually</span> when switching foods to avoid digestive upset</span>
          </li>
          <li className="text-sm text-slate-600 dark:text-slate-400 flex gap-3">
            <span className="text-blue-500 mt-0.5">•</span>
            <span><span className="font-semibold text-slate-900 dark:text-white">Consult your vet</span> for personalized recommendations</span>
          </li>
        </ul>
      </div>

      {/* Related Resources */}
      <div className="p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 transition-colors">
          Related Resources
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/buying-guides"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              Buying Guides
            </Link>
          </li>
          <li>
            <Link
              href="/pet-nutrition"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              Pet Nutrition
            </Link>
          </li>
          <li>
            <Link
              href="/pet-products"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              Pet Products
            </Link>
          </li>
          <li>
            <Link
              href="/pet-care-tips"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Pet Care Tips
            </Link>
          </li>
        </ul>
      </div>

      {/* CTA Section - Removed to avoid duplication with main page sticky CTA if any, looking cleaner */}
    </aside>
  );
}

