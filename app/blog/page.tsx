import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogSidebar from '@/components/BlogSidebar';
import Breadcrumb from '@/components/Breadcrumb';
import { getBaseUrl } from '@/lib/site-config';
import { 
  generateSEOMetadata,
  generateBlogStructuredData,
  generateCollectionPageStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Care Blog: Expert Advice, Tips & Guides for Pet Owners',
  description: 'Read expert pet care articles, training tips, and health guides. Learn how to keep your dog or cat healthy with practical advice from our blog.',
  keywords: ['pet care blog', 'pet care articles', 'dog care tips', 'cat care guide', 'pet health articles', 'pet training tips', 'pet grooming tips', 'pet care advice', 'pet care news', 'pet care resources', 'pet owner education'],
  pathname: '/blog',
  type: 'website',
  author: 'Nearby Pet Care Team',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Care Blog - Expert Advice, Tips & Guides for Pet Owners',
      type: 'image/png',
    },
  ],
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/blog',
      'en-GB': '/blog',
      'en-CA': '/blog',
      'en-AU': '/blog',
    },
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  // Generate structured data using centralized utilities
  const blogStructuredData = generateBlogStructuredData({
    name: 'Pet Care Blog',
    headline: 'Pet Care Blog: Expert Advice, Tips & Guides for Pet Owners',
    description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care.',
    url: '/blog',
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: currentDate,
    blogPosts: posts.slice(0, 10).map((post) => ({
      '@id': `${baseUrl}/blog/${post.slug}`,
      headline: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
      dateModified: new Date(post.date).toISOString(),
      author: post.author || 'Nearby Pet Care Team',
      image: post.image || '/og-image.png',
    })),
  });

  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Pet Care Blog',
    description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care.',
    url: '/blog',
    numberOfItems: posts.length,
    items: posts.slice(0, 20).map((post) => ({
      '@id': `${baseUrl}/blog/${post.slug}`,
      headline: post.title,
      url: `/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
    })),
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Care Blog',
    description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care.',
    url: '/blog',
    breadcrumbs,
  });

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Care Blog">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogStructuredData)} />
      <script {...jsonLdScriptProps(collectionPageStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {/* Hero Section - Optimized for Core Web Vitals */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
        aria-labelledby="blog-heading"
      >
        {/* Decorative background elements - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm" role="status" aria-label="Content type">
              <span className="text-2xl" aria-hidden="true">📝</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Expert Articles</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse" aria-hidden="true">📚</div>
            
            {/* Title - H1 for SEO */}
            <h1 id="blog-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Care Blog
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert tips, guides, and insights to help you provide the best care for your pets. Stay updated with the latest pet care knowledge and advice.
            </p>
            
            {/* Stats or highlights - Optimized for mobile touch targets */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10" role="list" aria-label="Blog features">
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">💡</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Expert Tips</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">📖</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Comprehensive Guides</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="text-2xl" aria-hidden="true">🔍</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Latest Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content - Semantic HTML for SEO */}
      <section 
        className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors"
        aria-labelledby="blog-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6" role="list" aria-label="Blog posts">
                  {posts.map((post) => (
                    <article
                      key={post.slug}
                      className="p-5 sm:p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl hover:border-blue-500/50 transition-all duration-300"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      <Link href={`/blog/${post.slug}`} className="block group" aria-label={`Read article: ${post.title}`}>
                        {/* Blog Post Image */}
                        {post.image && (
                          <div className="w-full h-48 sm:h-56 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                            <Image
                              src={post.image}
                              alt={post.imageAlt || post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              itemProp="image"
                            />
                          </div>
                        )}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-0">
                            <span className="px-2.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium transition-colors">
                              {post.category}
                            </span>
                            <time className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                            <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                              {post.readingTime} min read
                            </span>
                          </div>
                        </div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" itemProp="headline">
                          {post.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2 transition-colors" itemProp="description">
                          {post.excerpt}
                        </p>
                        <meta itemProp="datePublished" content={new Date(post.date).toISOString()} />
                        <meta itemProp="author" content={post.author || 'Nearby Pet Care Team'} />
                        <meta itemProp="url" content={`https://nearbypetcare.com/blog/${post.slug}`} />
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded transition-colors"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                          Read More
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 sm:py-12 md:py-16">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📝</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                    No Blog Posts Yet
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto transition-colors">
                    Blog posts will appear here automatically when you add .md files to the content/blog folder.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

