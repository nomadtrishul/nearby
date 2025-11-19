import Link from 'next/link';

interface RelatedTip {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  date: string;
}

interface RelatedTipsProps {
  tips: RelatedTip[];
  currentSlug: string;
}

export default function RelatedTips({ tips, currentSlug }: RelatedTipsProps) {
  // Filter out current tip and limit to 3
  const relatedTips = tips
    .filter(tip => tip.slug !== currentSlug)
    .slice(0, 3);

  if (relatedTips.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
        Related Pet Care Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedTips.map((tip) => (
          <Link
            key={tip.slug}
            href={`/pet-care-tips/${tip.slug}`}
            className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300"
          >
            {tip.category && (
              <span className="inline-block px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium mb-3 transition-colors">
                {tip.category}
              </span>
            )}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {tip.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 transition-colors">
              {tip.excerpt}
            </p>
            <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
              Read Guide
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

