import Link from 'next/link';
import Image from 'next/image';

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  date: string;
  image?: string;
  imageAlt?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  currentSlug: string;
}

export default function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  // Filter out current article and limit to 3
  const relatedArticles = articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col p-0 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
            aria-label={`Read article: ${article.title}`}
          >
            {/* Related Article Image - Top */}
            {article.image ? (
              <div className="w-full h-40 sm:h-44 rounded-t-xl overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                <Image
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full h-40 sm:h-44 rounded-t-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            
            {/* Content Section */}
            <div className="flex flex-col flex-1 p-4 sm:p-5">
              {/* Article Heading - Below Image */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              {/* Excerpt - Below Heading */}
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 transition-colors flex-1">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

