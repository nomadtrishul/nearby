import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTips, getAllCategories, getAllTags, getRecentTips } from '@/lib/petTips';
import TipsSidebar from '@/components/TipsSidebar';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Care Tips: Step-by-Step How-To Guides for Dogs & Cats | Nearby Pet Care',
  description: 'Learn how to care for your pet with our step-by-step pet care guides. Expert how-to tips on pet grooming, training, health care, nutrition, and more. Practical advice you can use right away.',
  keywords: ['pet care tips', 'how to care for a pet', 'pet care guides', 'how to care for a dog', 'how to care for a cat', 'dog care tips', 'cat care tips', 'pet grooming guide', 'pet training guide', 'pet care how to'],
  openGraph: {
    title: 'Pet Care Tips - Expert How-To Guides | Nearby Pet Care',
    description: 'Discover expert pet care how-to guides and tips. Learn step-by-step instructions for grooming, training, health care, and more.',
    type: 'website',
    url: 'https://nearbypetcare.com/pet-care-tips',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Care Tips - Expert How-To Guides | Nearby Pet Care',
    description: 'Discover expert pet care how-to guides and tips. Learn step-by-step instructions for grooming, training, health care, and more.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-care-tips',
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
  // Additional metadata for other search engines
  other: {
    'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
};

export default function PetCareTipsPage() {
  const tips = getAllTips();
  const categories = getAllCategories();
  const tags = getAllTags();

  // CollectionPage Structured Data
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Care Tips',
    description: 'Expert pet care how-to guides and tips with step-by-step instructions.',
    url: 'https://nearbypetcare.com/pet-care-tips',
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png'
      }
    },
    // Add ItemList to represent the collection of HowTo items
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tips.length,
      itemListElement: tips.map((tip, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'HowTo',
          name: tip.title,
          description: tip.excerpt,
          url: `https://nearbypetcare.com/pet-care-tips/${tip.slug}`
        }
      }))
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
        item: 'https://nearbypetcare.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pet Care Tips',
        item: 'https://nearbypetcare.com/pet-care-tips',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData),
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
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Care Tips', href: '/pet-care-tips' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">💡</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">How-To Guides</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">✨</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Care Tips
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert how-to guides and step-by-step instructions to help you provide the best care for your pets. New tips are automatically published when added to our content folder.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Step-by-Step</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Expert Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Regular Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          {tips.length > 0 ? (
            <>
              {/* Stats */}
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {tips.length} {tips.length === 1 ? 'tip' : 'tips'} available
                  {categories.length > 0 && ` • ${categories.length} categories`}
                  {tags.length > 0 && ` • ${tags.length} topics`}
                </p>
              </div>

              {/* Main Content with Sidebar */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Tips Grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {tips.map((tip) => (
                  <Link
                    key={tip.slug}
                    href={`/pet-care-tips/${tip.slug}`}
                    className="group bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      {tip.category && (
                        <span className="px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium transition-colors">
                          {tip.category}
                        </span>
                      )}
                      {tip.difficulty && (
                        <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                          tip.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                          tip.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                          'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                        }`}>
                          {tip.difficulty}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tip.title}
                    </h2>
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors">
                      {tip.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4">
                      {tip.totalTime && (
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{tip.totalTime}</span>
                        </div>
                      )}
                      {tip.readingTime && (
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span>{tip.readingTime} min read</span>
                        </div>
                      )}
                      {tip.estimatedCost && (
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{tip.estimatedCost}</span>
                        </div>
                      )}
                    </div>

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

                    <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                      Read Guide
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:sticky lg:top-24 lg:h-fit">
                  <TipsSidebar
                    recentTips={getRecentTips(5).map(tip => ({
                      slug: tip.slug,
                      title: tip.title,
                      date: tip.date,
                      formattedDate: new Date(tip.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }),
                      category: tip.category,
                    }))}
                    categories={categories}
                    tags={tags}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-10 sm:py-12 md:py-16">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📚</div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                No Pet Care Tips Yet
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto transition-colors">
                Pet care tips will appear here automatically when you add .md files to the content/pet-tips folder. Each tip will be published with HowTo schema for better SEO.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore More Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Continue learning with our comprehensive guides and expert articles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Link
              href="/blog"
              className="group p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Pet Care Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Read in-depth articles and guides on various pet care topics
              </p>
            </Link>
            <Link
              href="/contact"
              className="group p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Get Expert Help
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Contact our team for personalized pet care guidance
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Need Professional Pet Care Services?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              Find trusted pet care providers in your area. From grooming and boarding to training and veterinary care, we connect you with experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
