import type { Metadata } from 'next';
import Link from 'next/link';
import BlogSidebar from '@/components/BlogSidebar';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best Dog Food for Small Breeds - Buying Guide | Nearby Pet Care',
  description: 'Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog. Learn about nutritional needs, kibble size, and feeding recommendations.',
  keywords: ['best dog food small breeds', 'small dog food', 'small breed dog food', 'dog food small dogs', 'best food for small dogs', 'small dog nutrition', 'small breed dog food guide'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  metadataBase: new URL('https://nearbypetcare.com'),
  openGraph: {
    title: 'Best Dog Food for Small Breeds - Buying Guide | Nearby Pet Care',
    description: 'Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog.',
    type: 'article',
    url: 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best Dog Food for Small Breeds - Buying Guide',
        type: 'image/png',
      },
    ],
    publishedTime: '2024-01-01T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    section: 'Buying Guides',
    tags: ['dog food', 'small breeds', 'pet nutrition', 'buying guide'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dog Food for Small Breeds - Buying Guide | Nearby Pet Care',
    description: 'Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds',
    languages: {
      'en-US': 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds',
      'en-GB': 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds',
      'en-CA': 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds',
      'en-AU': 'https://nearbypetcare.com/buying-guides/best-dog-food-for-small-breeds',
    },
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'article:published_time': '2024-01-01T00:00:00Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Nearby Pet Care Team',
    'article:section': 'Buying Guides',
    'article:tag': 'dog food, small breeds, pet nutrition, buying guide',
  },
};

export default function BestDogFoodSmallBreedsPage() {
  const baseUrl = 'https://nearbypetcare.com';
  const pageUrl = `${baseUrl}/buying-guides/best-dog-food-for-small-breeds`;
  const publishedTime = '2024-01-01T00:00:00Z';
  const modifiedTime = new Date().toISOString();

  // Breadcrumb Structured Data (defined first to avoid reference errors)
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Buying Guides',
        item: `${baseUrl}/buying-guides`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Best Dog Food for Small Breeds',
        item: pageUrl,
      },
    ],
  };

  // Article Structured Data - Enhanced for buying guides
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'Best Dog Food for Small Breeds - Buying Guide',
    description: 'Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog. Learn about nutritional needs, kibble size, and feeding recommendations.',
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Best Dog Food for Small Breeds - Buying Guide',
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/about#author`,
      name: 'Nearby Pet Care Team',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Nearby Pet Care',
      legalName: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
    },
    articleSection: 'Buying Guides',
    keywords: 'dog food, small breeds, pet nutrition, buying guide, small dog food',
    inLanguage: 'en-US',
    wordCount: 2500,
    timeRequired: 'PT15M',
    about: [
      {
        '@type': 'Thing',
        name: 'Dog Food',
      },
      {
        '@type': 'Thing',
        name: 'Small Breed Dogs',
      },
      {
        '@type': 'Thing',
        name: 'Pet Nutrition',
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: 'Best Dog Food for Small Breeds - Buying Guide',
    description: 'Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog.',
    url: pageUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    breadcrumb: breadcrumbStructuredData,
    about: {
      '@type': 'Thing',
      name: 'Small Breed Dog Food',
    },
  };

  // FAQ Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes dog food suitable for small breeds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Small breed dog food should have smaller kibble size for easier chewing, higher calorie density to meet their faster metabolism, and nutrient-dense formulas. It should also support dental health and be easy to digest.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much should I feed my small breed dog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Feeding amounts vary based on your dog\'s age, activity level, and the specific food. Generally, small breeds need 1/4 to 1 cup of food per day, divided into 2-3 meals. Always follow the feeding guidelines on the food package and consult your veterinarian.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ingredients should I look for in small breed dog food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for high-quality protein sources (chicken, fish, lamb), whole grains or grain-free options, healthy fats (omega-3 and omega-6), and essential vitamins and minerals. Avoid artificial preservatives, colors, and fillers.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Best Dog Food for Small Breeds Buying Guide">
      {/* Structured Data Scripts - All schemas for maximum SEO coverage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      {/* Hero Section - Optimized for Core Web Vitals */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative background elements - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' }, 
            { name: 'Buying Guides', href: '/buying-guides' },
            { name: 'Best Dog Food for Small Breeds', href: '/buying-guides/best-dog-food-for-small-breeds' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm" role="status" aria-label="Content type">
              <span className="text-2xl" aria-hidden="true">🍖</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Buying Guide</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🐕</div>
            
            {/* Title - H1 for SEO */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Dog Food for Small Breeds
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Small breed dogs have unique nutritional needs. This comprehensive buying guide helps you find the best dog food specifically formulated for small breeds, considering their higher metabolism and smaller kibble size requirements.
            </p>
            
            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10" role="list" aria-label="Key features">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">⚡</span>
                <span>High Metabolism</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">🦷</span>
                <span>Dental Health</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">📏</span>
                <span>Small Kibble Size</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumb" style={{ display: 'none' }}>
            <ol className="flex items-center flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="mx-2" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/buying-guides" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" itemProp="item">
                  <span itemProp="name">Buying Guides</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="mx-2" aria-hidden="true">/</li>
              <li className="text-gray-900 dark:text-white font-medium" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Best Dog Food for Small Breeds</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>
          <div className="prose prose-lg dark:prose-invert max-w-none" itemProp="articleBody">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              If you've ever watched a Chihuahua or Yorkie zip around the house like they're powered by rocket fuel, you know small dogs have energy to spare. But here's the thing—that boundless energy comes from a metabolism that works at lightning speed. While your Great Dane might be perfectly content with a leisurely meal, your small breed needs food that can keep up with their fast-paced lifestyle.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Why Small Breeds Need Special Food</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Small breed dogs aren't just miniature versions of larger dogs. They have unique nutritional needs that require specialized formulas. Understanding these differences is the first step in choosing the right food for your pint-sized companion.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 sm:p-6 my-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">The Metabolism Factor</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Small dogs burn calories at a much faster rate than their larger counterparts. A 10-pound dog might need 40-50 calories per pound of body weight, while a 50-pound dog typically needs only 30-35 calories per pound. This means small breeds need calorie-dense food that packs more energy into every bite.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Key Differences for Small Breeds</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
              <li><strong className="text-gray-900 dark:text-white">Higher metabolism:</strong> Small dogs burn through calories quickly, so they need more calories per pound of body weight than larger breeds. This isn't just about quantity—it's about quality, nutrient-dense calories.</li>
              <li><strong className="text-gray-900 dark:text-white">Smaller kibble size:</strong> Ever tried to eat a sandwich that's too big for your mouth? That's what happens when small dogs try to eat regular-sized kibble. Smaller pieces are easier to chew, reduce the risk of choking, and make mealtime more enjoyable.</li>
              <li><strong className="text-gray-900 dark:text-white">Dense nutrition:</strong> Because small dogs eat less volume, every bite needs to count. The food should be packed with essential nutrients, vitamins, and minerals to support their active lifestyle.</li>
              <li><strong className="text-gray-900 dark:text-white">Dental health considerations:</strong> Small breeds are more prone to dental issues. Some foods are designed with special textures or ingredients that help clean teeth as your dog chews, which can reduce plaque buildup.</li>
              <li><strong className="text-gray-900 dark:text-white">Digestive sensitivity:</strong> Many small breeds have more sensitive stomachs. Foods with easily digestible proteins and limited ingredients can help prevent digestive upset.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">What to Look For in Small Breed Dog Food</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              When you're standing in the pet food aisle, it can feel overwhelming. There are dozens of options, each claiming to be the best. Here's what actually matters when choosing food for your small breed dog.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">High-Quality Protein Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Protein should be the foundation of your small dog's diet. Look for foods where the first ingredient is a named meat source like chicken, turkey, fish, or lamb—not "meat meal" or "animal by-products." High-quality protein helps maintain muscle mass, supports energy levels, and keeps your dog feeling satisfied between meals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Aim for foods with at least 25-30% protein content. Active small breeds might benefit from even higher protein levels, especially if they're working dogs or participate in dog sports.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Appropriate Kibble Size</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This might seem obvious, but it's worth emphasizing: small dogs need small kibble. The pieces should be small enough that your dog can comfortably pick them up and chew them without struggling. If you notice your dog is having trouble eating or seems to be swallowing kibble whole, the pieces are probably too large.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Some brands specifically market "small breed" formulas with appropriately sized kibble. These are often your best bet, as they're designed with your dog's size in mind from the start.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Calorie-Dense Formulas</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Remember that fast metabolism we talked about? Your small dog needs food that provides plenty of calories in a small volume. Look for foods that are specifically formulated to be calorie-dense, typically containing 400-500 calories per cup. This ensures your dog gets the energy they need without having to eat large quantities.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Supporting Ingredients</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Beyond the basics, look for foods that include ingredients specifically beneficial for small breeds:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
              <li><strong className="text-gray-900 dark:text-white">Omega-3 fatty acids:</strong> Support healthy skin and coat, which is especially important for small breeds with long or fine hair.</li>
              <li><strong className="text-gray-900 dark:text-white">Antioxidants:</strong> Help support immune system health and overall vitality.</li>
              <li><strong className="text-gray-900 dark:text-white">Probiotics:</strong> Support digestive health, which can be particularly helpful for small breeds with sensitive stomachs.</li>
              <li><strong className="text-gray-900 dark:text-white">Calcium and phosphorus:</strong> Important for bone health, especially in growing puppies.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Feeding Your Small Breed Dog</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Choosing the right food is only half the battle. How and when you feed your small breed dog matters just as much. Here's what you need to know about feeding schedules and portion sizes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Portion Sizes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Most small breed dogs need between 1/4 and 1 cup of food per day, divided into 2-3 meals. However, this can vary significantly based on:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
              <li>Your dog's age (puppies need more frequent, smaller meals)</li>
              <li>Activity level (active dogs need more calories)</li>
              <li>Metabolism (some dogs naturally burn more calories)</li>
              <li>Health conditions (some conditions require special diets)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Always start with the feeding guidelines on the food package, but remember these are just starting points. Monitor your dog's weight and adjust portions as needed. If your dog is gaining weight, reduce portions slightly. If they're losing weight or seem hungry, increase portions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Feeding Schedule</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Small breeds benefit from multiple small meals throughout the day rather than one or two large meals. This helps maintain steady blood sugar levels and prevents the energy crashes that can happen when a small dog goes too long without food.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              A typical schedule might look like:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
              <li><strong className="text-gray-900 dark:text-white">Puppies (under 6 months):</strong> 3-4 meals per day</li>
              <li><strong className="text-gray-900 dark:text-white">Adults (6 months and older):</strong> 2-3 meals per day</li>
              <li><strong className="text-gray-900 dark:text-white">Seniors:</strong> 2-3 smaller meals per day, adjusted for activity level</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Special Considerations</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Age-Specific Needs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Small breed puppies grow quickly and have different nutritional needs than adult dogs. Look for puppy formulas specifically designed for small breeds, which typically have higher protein and fat content to support growth. Most small breeds can transition to adult food around 9-12 months of age.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Senior small breeds (typically 7+ years) may benefit from foods with joint support ingredients like glucosamine and chondroitin, as well as lower calorie content if they've become less active.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Health Conditions</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Some small breeds are prone to specific health issues that can be managed through diet:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
              <li><strong className="text-gray-900 dark:text-white">Dental problems:</strong> Foods with special textures or dental care formulas can help reduce plaque and tartar buildup.</li>
              <li><strong className="text-gray-900 dark:text-white">Sensitive stomachs:</strong> Limited ingredient diets or foods with easily digestible proteins can help prevent digestive upset.</li>
              <li><strong className="text-gray-900 dark:text-white">Allergies:</strong> Grain-free or novel protein sources (like duck or venison) may help if your dog has food sensitivities.</li>
              <li><strong className="text-gray-900 dark:text-white">Weight management:</strong> If your small dog is prone to weight gain, look for formulas with lower fat content and higher fiber.</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 sm:p-6 my-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Important Reminder</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Always consult with your veterinarian before making significant changes to your dog's diet, especially if your dog has health conditions or is taking medication. Your vet can help you choose the best food for your specific dog's needs.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Making the Switch</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              If you're switching your small breed dog to a new food, do it gradually over 7-10 days. Start by mixing 25% new food with 75% old food for a few days, then 50/50, then 75% new food, and finally 100% new food. This gradual transition helps prevent digestive upset and gives your dog's system time to adjust.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Final Thoughts</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Choosing the right food for your small breed dog isn't about finding the most expensive option or the one with the fanciest packaging. It's about understanding your dog's unique needs and finding a food that meets those needs while keeping them healthy, happy, and full of energy.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Remember, what works for one small dog might not work for another. Pay attention to how your dog responds to their food—are they maintaining a healthy weight? Do they have good energy levels? Is their coat shiny and healthy? These are the real indicators that you've found the right food for your small breed companion.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/buying-guides" 
              className="inline-flex items-center min-h-[44px] text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2"
              aria-label="Back to buying guides"
            >
              ← Back to Buying Guides
            </Link>
          </div>
          {/* Article Meta Tags for SEO */}
          <meta itemProp="datePublished" content={publishedTime} />
          <meta itemProp="dateModified" content={modifiedTime} />
          <meta itemProp="author" content="Nearby Pet Care Team" />
          <meta itemProp="publisher" content="Nearby Pet Care" />
          <meta itemProp="headline" content="Best Dog Food for Small Breeds - Buying Guide" />
          <meta itemProp="description" content="Complete buying guide for the best dog food for small breeds. Compare top brands and find the perfect food for your small dog." />
          <meta itemProp="image" content={`${baseUrl}/og-image.png`} />
          <meta itemProp="articleSection" content="Buying Guides" />
          <meta itemProp="wordCount" content="2500" />
          <meta itemProp="timeRequired" content="PT15M" />
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

