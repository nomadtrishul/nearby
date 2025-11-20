import Link from 'next/link';
import type { PetTip } from '@/lib/petTips';

interface PetCareTipCardProps {
  tip: PetTip;
}

export default function PetCareTipCard({ tip }: PetCareTipCardProps) {
  return (
    <Link
      href={`/pet-care-tips/${tip.slug}`}
      className="group relative rounded-xl sm:rounded-2xl h-full block p-[1px]"
      style={{
        background: 'linear-gradient(45deg, #ec4899, #a855f7, #ec4899, #a855f7)',
        backgroundSize: '300% 300%',
        animation: 'gradientShift 3s ease infinite',
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-[11px] sm:rounded-[15px] h-full w-full p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col relative">
        {/* Badges */}
        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
          {tip.category && (
            <span className="px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium transition-colors">
              {tip.category}
            </span>
          )}
          {tip.difficulty && (
            <span
              className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                tip.difficulty === 'Beginner'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  : tip.difficulty === 'Intermediate'
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
              }`}
            >
              {tip.difficulty}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {tip.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors flex-grow">
          {tip.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4">
          {tip.totalTime && (
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{tip.totalTime}</span>
            </div>
          )}
          {tip.readingTime && (
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>{tip.readingTime} min read</span>
            </div>
          )}
          {tip.estimatedCost && (
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{tip.estimatedCost}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {tip.tags && tip.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tip.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors mt-auto">
          Read Guide
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

