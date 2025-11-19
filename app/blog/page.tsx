import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogSidebar from '@/components/BlogSidebar';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Care Blog: Expert Advice, Tips & Guides for Pet Owners | Nearby Pet Care',
  description: 'Read expert pet care articles, training tips, health guides, and pet care news. Learn how to keep your dog or cat healthy and happy with practical advice from our pet care blog.',
  keywords: ['pet care blog', 'pet care articles', 'dog care tips', 'cat care guide', 'pet health articles', 'pet training tips', 'pet grooming tips', 'pet care advice', 'pet care news'],
  openGraph: {
    title: 'Pet Care Blog - Tips, Guides & News | Nearby Pet Care',
    description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care.',
    type: 'website',
    url: 'https://nearbypetcare.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Care Blog - Tips, Guides & News | Nearby Pet Care',
    description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  // Blog Structured Data
  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Pet Care Blog',
    description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care.',
    url: 'https://nearbypetcare.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png'
      }
    }
  };

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://nearbypetcare.com/blog'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">📝</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Expert Articles</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">📚</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Care Blog
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert tips, guides, and insights to help you provide the best care for your pets. Stay updated with the latest pet care knowledge and advice.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Expert Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📖</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Comprehensive Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Latest Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                  {posts.map((post) => (
                    <article
                      key={post.slug}
                      className="p-5 sm:p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl hover:border-blue-500/50 transition-all duration-300"
                    >
                      <Link href={`/blog/${post.slug}`} className="block group">
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
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2 transition-colors">
                          {post.excerpt}
                        </p>
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

