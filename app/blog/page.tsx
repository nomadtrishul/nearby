import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogSidebar from '@/components/BlogSidebar';

export const metadata: Metadata = {
  title: 'Pet Care Blog - Tips, Guides & News | Nearby Pet Care',
  description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care. Learn how to keep your pets happy and healthy.',
  keywords: ['pet care blog', 'dog care tips', 'cat care guide', 'pet health', 'pet training', 'pet grooming tips'],
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
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Pet Care Blog
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 transition-colors">
              Expert tips, guides, and insights to help you provide the best care for your pets
            </p>
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

