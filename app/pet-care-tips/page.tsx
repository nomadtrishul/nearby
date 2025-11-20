import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTips, getAllCategories, getAllTags, getRecentTips } from '@/lib/petTips';
import TipsSidebar from '@/components/TipsSidebar';
import Breadcrumb from '@/components/Breadcrumb';
import PetCareTipCard from '@/components/PetCareTipCard';

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
                      <PetCareTipCard key={tip.slug} tip={tip} />
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
