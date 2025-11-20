import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ComparisonsSidebar from '@/components/ComparisonsSidebar';

const baseUrl = 'https://nearbypetcare.com';
const pageUrl = `${baseUrl}/comparisons/wet-vs-dry-food`;
const publishedTime = '2024-01-20T00:00:00Z';
const modifiedTime = new Date().toISOString();

export const metadata: Metadata = {
  title: 'Wet vs Dry Pet Food - Complete Comparison Guide | Nearby Pet Care',
  description: 'Comprehensive comparison of wet vs dry pet food. Expert analysis of benefits, drawbacks, nutrition, hydration, cost, and dental health to help you choose the best option for your pet.',
  keywords: ['wet vs dry food', 'wet food vs dry food', 'pet food comparison', 'dog food wet dry', 'cat food wet dry', 'canned vs kibble', 'best pet food type', 'wet food benefits', 'dry food benefits'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Wet vs Dry Pet Food - Complete Comparison Guide | Nearby Pet Care',
    description: 'Comprehensive comparison of wet vs dry pet food. Expert analysis of benefits, drawbacks, nutrition, and feeding recommendations.',
    type: 'article',
    url: pageUrl,
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    publishedTime,
    modifiedTime,
    authors: ['Nearby Pet Care Team'],
    section: 'Comparisons',
    tags: ['pet food', 'wet food', 'dry food', 'pet nutrition', 'feeding guide', 'pet care'],
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Wet vs Dry Pet Food Comparison Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wet vs Dry Pet Food - Complete Comparison Guide | Nearby Pet Care',
    description: 'Comprehensive comparison of wet vs dry pet food. Expert analysis to help you choose the best option for your pet.',
    images: [`${baseUrl}/og-image.png`],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-US': pageUrl,
      'en-GB': pageUrl,
      'en-CA': pageUrl,
      'en-AU': pageUrl,
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
  other: {
    'article:published_time': publishedTime,
    'article:modified_time': modifiedTime,
    'article:author': 'Nearby Pet Care Team',
    'article:section': 'Comparisons',
    'article:tag': 'pet food, wet food, dry food, pet nutrition, feeding guide',
  },
};

export default function WetVsDryFoodPage() {
  // Breadcrumb Structured Data
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
        name: 'Comparisons',
        item: `${baseUrl}/comparisons`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Wet vs Dry Food',
        item: pageUrl,
      },
    ],
  };

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wet vs Dry Pet Food: Making the Right Choice for Your Pet',
    description: 'Comprehensive comparison of wet vs dry pet food. Expert analysis of benefits, drawbacks, nutrition, hydration, cost, and dental health to help you choose the best option.',
    image: `${baseUrl}/og-image.png`,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care Team',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    articleSection: 'Comparisons',
    keywords: 'wet vs dry food, pet food comparison, wet food benefits, dry food benefits, pet nutrition, feeding guide',
    inLanguage: 'en-US',
    wordCount: 3000,
    timeRequired: 'PT15M',
  };

  // FAQPage Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is wet food or dry food better for pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Neither is inherently better—both can provide complete nutrition. Wet food offers higher moisture content and palatability, making it ideal for pets who don\'t drink enough water, especially cats. Dry food provides dental benefits, convenience, and cost-effectiveness. Many pet owners find success with a combination approach, using both wet and dry food to get the benefits of each.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I feed my cat wet or dry food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cats benefit from wet food due to their low thirst drive and risk of dehydration. Many veterinarians recommend that cats get at least some wet food in their diet to ensure adequate hydration and prevent urinary tract issues. However, a combination of wet and dry food can work well, providing hydration from wet food and dental benefits from dry food.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is dry food bad for pets\' teeth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dry food can actually help with dental health by scraping plaque and tartar off teeth as pets chew. However, it\'s not a substitute for regular dental care. Pets on exclusively wet food diets may need more frequent dental cleanings or dental treats. The best approach is often a combination of both, along with regular dental care.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I mix wet and dry food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, many pet owners successfully mix wet and dry food. This approach provides the dental benefits and convenience of kibble while ensuring pets get extra hydration and palatability from wet food. When mixing, adjust the total amount to avoid overfeeding, as wet food has fewer calories per volume than dry food.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much more expensive is wet food compared to dry food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wet food is typically 2-3 times more expensive per serving than dry food. For large dogs or multiple pets, this cost difference can add up significantly. However, wet food\'s higher moisture content means you need to feed more by volume to provide the same calories, so the actual cost difference depends on your pet\'s caloric needs.',
        },
      },
    ],
  };
  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Comparisons', href: '/comparisons' },
            { name: 'Wet vs Dry Food', href: '/comparisons/wet-vs-dry-food' }
          ]} />
          
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🍽️</span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Food Type Comparison</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Wet vs Dry Pet Food
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Making the Right Choice for Your Pet
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">💧</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hydration</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">🦷</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dental Health</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">💰</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Cost Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              One of the most common questions pet owners ask is whether they should feed their furry friend wet food, dry kibble, or a combination of both. It's a decision that can feel overwhelming, especially when you're bombarded with conflicting advice. The truth is, both options have their place, and the best choice depends on your pet's individual needs, your lifestyle, and what works best for your household. Let's break down everything you need to know to make an informed decision.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Understanding Dry Food (Kibble)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Dry food, commonly known as kibble, is the most popular choice among pet owners, and for good reason. It's convenient, cost-effective, and easy to store. But there's more to kibble than just convenience—it offers several practical and health benefits that make it a solid choice for many pets.
            </p>
            
            <div className="my-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">The Benefits of Dry Food</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 transition-colors">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Dental Health:</strong> The crunchy texture of kibble helps scrape plaque and tartar off your pet's teeth as they chew. While it's not a substitute for regular dental care, it can contribute to better oral health compared to soft foods alone.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Cost-Effective:</strong> Dry food typically costs less per serving than wet food, making it more budget-friendly, especially if you have large dogs or multiple pets. A bag of quality kibble can last weeks or even months.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Convenience:</strong> You can leave dry food out for free-feeding (though portion control is still important), it doesn't require refrigeration, and it's easy to measure and serve. Perfect for busy pet parents.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Long Shelf Life:</strong> An unopened bag of dry food can last for months, and once opened, it stays fresh for weeks if stored properly in a cool, dry place. This reduces waste and makes bulk buying practical.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Portability:</strong> Easy to pack for travel, camping, or trips to the vet. You can carry a few days' worth in a small container without worrying about spoilage.</span>
                </li>
              </ul>
            </div>

            <div className="my-6 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">The Drawbacks of Dry Food</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 transition-colors">
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Lower Moisture Content:</strong> Dry food contains only about 6-10% moisture, which means pets need to drink more water to stay properly hydrated. Some pets, especially cats, don't drink enough water on their own, which can lead to dehydration or urinary tract issues.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Processing:</strong> The high-heat processing used to create kibble can reduce some nutrients, though quality brands add them back in. Some pet owners prefer less processed options.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Palatability:</strong> Some pets, particularly picky eaters or those with dental issues, may find dry food less appealing than the smell and texture of wet food.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Storage Requirements:</strong> Once opened, dry food needs to be stored in an airtight container to prevent it from going stale or attracting pests. Improper storage can lead to rancidity.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Understanding Wet Food (Canned)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Wet food comes in cans, pouches, or trays and has a much higher moisture content—typically around 75-85%. This high moisture content is one of its biggest advantages, especially for pets who don't drink enough water. But wet food offers more than just hydration benefits.
            </p>

            <div className="my-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">The Benefits of Wet Food</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 transition-colors">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Hydration:</strong> The high moisture content helps keep pets hydrated, which is especially important for cats (who evolved from desert animals and have a low thirst drive) and pets with kidney or urinary tract issues.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Palatability:</strong> Most pets find wet food more appealing due to its strong aroma and soft texture. This makes it great for picky eaters, senior pets with dental issues, or pets recovering from illness.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Easier to Eat:</strong> The soft texture is ideal for pets with missing teeth, dental problems, or jaw issues. It's also easier for very young puppies and kittens to consume.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Portion Control:</strong> Individual cans or pouches make it easier to control portions, which is helpful for weight management. You know exactly how much your pet is eating.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                  <span><strong>Less Processing:</strong> Wet food is typically cooked at lower temperatures than kibble, which may preserve more of the natural nutrients and flavors.</span>
                </li>
              </ul>
            </div>

            <div className="my-6 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">The Drawbacks of Wet Food</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 transition-colors">
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Cost:</strong> Wet food is significantly more expensive per serving than dry food. If you're feeding a large dog or multiple pets, the cost can add up quickly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Shorter Shelf Life:</strong> Once opened, wet food needs to be refrigerated and used within 2-3 days. Left out, it spoils quickly and can attract insects or become unsafe to eat.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Dental Health:</strong> The soft texture doesn't provide the mechanical cleaning action that crunchy kibble does. Pets on exclusively wet food diets may need more frequent dental cleanings or dental treats.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Mess and Storage:</strong> Wet food can be messier to serve, and you need refrigerator space. It's also less convenient for travel or free-feeding.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-2 font-bold">✗</span>
                  <span><strong>Waste:</strong> If your pet doesn't finish a can, you need to store it properly or risk waste. Some pets are picky about eating refrigerated wet food that's been reheated.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Nutritional Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              When it comes to nutrition, both wet and dry foods can provide complete and balanced nutrition when you choose quality brands that meet AAFCO (Association of American Feed Control Officials) standards. The key is understanding how to compare them properly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Because wet food contains so much water, you need to feed more of it by volume to provide the same calories and nutrients as dry food. A cup of dry food contains far more calories than a cup of wet food. This is why feeding guidelines differ significantly between the two types. Always follow the feeding instructions on the package, and adjust based on your pet's activity level, age, and body condition.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Both types can be high-quality or low-quality—it depends on the brand and specific formula, not whether it's wet or dry. Look for named protein sources (like "chicken" not "meat by-products"), whole grains or grain-free options depending on your pet's needs, and avoid artificial colors, flavors, and preservatives when possible.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">When to Choose Each Type</h2>
            
            <div className="my-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">Choose Dry Food If:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-6 transition-colors">
                <li>Your pet is healthy and drinks plenty of water</li>
                <li>Budget is a primary concern</li>
                <li>You need convenience and easy storage</li>
                <li>Your pet has good dental health and enjoys crunchy food</li>
                <li>You're feeding multiple pets or large dogs</li>
                <li>You travel frequently with your pet</li>
                <li>You prefer free-feeding or leaving food out</li>
              </ul>
            </div>

            <div className="my-6 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">Choose Wet Food If:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-6 transition-colors">
                <li>Your pet doesn't drink enough water (especially cats)</li>
                <li>Your pet has dental issues or missing teeth</li>
                <li>Your pet is a picky eater who refuses dry food</li>
                <li>Your pet has kidney or urinary tract issues</li>
                <li>You need precise portion control for weight management</li>
                <li>Your pet is recovering from illness or surgery</li>
                <li>You have a very young puppy or kitten</li>
              </ul>
              </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">The Best of Both Worlds: Mixing Wet and Dry Food</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Many pet owners discover that combining wet and dry food gives them the best of both worlds. This approach allows you to provide the dental benefits and convenience of kibble while ensuring your pet gets extra hydration and palatability from wet food.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              A common strategy is to feed dry food as the main meal and use wet food as a topper or treat. Some pet owners do a 50/50 split, while others use wet food primarily for one meal per day. The key is to adjust the total amount so you're not overfeeding—remember that wet food has fewer calories per volume, so you'll need more of it to match the calories in dry food.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Mixing can also help with picky eaters. If your pet turns their nose up at dry food, adding a spoonful of wet food can make it more appealing. Over time, you might be able to reduce the amount of wet food as your pet becomes more accustomed to the kibble.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Special Considerations for Cats vs Dogs</h2>
            
            <div className="my-6 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">For Cats:</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors">
                Cats are particularly prone to dehydration because they evolved from desert animals and have a naturally low thirst drive. Many veterinarians recommend that cats get at least some wet food in their diet to ensure adequate hydration. This is especially important for preventing urinary tract issues, which are common in cats.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                If you feed your cat exclusively dry food, make sure they have access to fresh water at all times and consider a cat water fountain, which many cats prefer to still water bowls. Some cat owners find that mixing wet and dry food works best for their feline friends.
              </p>
              </div>

            <div className="my-6 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">For Dogs:</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors">
                Dogs generally drink more water than cats, so they can do well on either wet or dry food, or a combination. The choice often comes down to your dog's preferences, your budget, and any specific health concerns. Large dogs on exclusively wet food diets can get expensive quickly, so many owners use dry food as the base with wet food as a supplement.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Some dogs with certain health conditions, like kidney disease or diabetes, may benefit from wet food's higher moisture content, but always follow your veterinarian's specific recommendations for your dog's individual needs.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Making the Transition</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              If you decide to switch your pet from one type of food to another, or start mixing them, do it gradually. Sudden changes can cause digestive upset, including diarrhea or vomiting. Here's a safe transition schedule:
            </p>
            <ul className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li><strong>Days 1-2:</strong> Mix 25% new food with 75% old food</li>
              <li><strong>Days 3-4:</strong> Mix 50% new food with 50% old food</li>
              <li><strong>Days 5-6:</strong> Mix 75% new food with 25% old food</li>
              <li><strong>Day 7+:</strong> Feed 100% new food</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Watch your pet closely during the transition. If they experience digestive issues, slow down the process or consult your veterinarian. Some pets adapt quickly, while others need more time.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Final Thoughts</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              There's no one-size-fits-all answer to the wet vs dry food question. The best choice depends on your pet's individual needs, your lifestyle, and what works best for your household. Many pets thrive on dry food alone, others do best with wet food, and still others benefit from a combination approach.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Pay attention to your pet's health indicators: their energy levels, coat condition, stool quality, and overall well-being. These are better indicators of whether a food is working than any label or recommendation. And remember, the best food is the one your pet will actually eat—even the highest-quality food won't help if your pet refuses it.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              When in doubt, talk to your veterinarian. They can provide personalized recommendations based on your pet's age, breed, activity level, health status, and any specific concerns. Your vet can help you navigate the options and find the feeding approach that keeps your pet healthy, happy, and thriving.
            </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/comparisons" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  ← Back to Comparisons
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <ComparisonsSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}

