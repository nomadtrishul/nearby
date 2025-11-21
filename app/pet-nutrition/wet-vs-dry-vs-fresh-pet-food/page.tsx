import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';

export const metadata: Metadata = {
  title: 'Wet vs Dry vs Fresh Pet Food - Which is Best? | Nearby Pet Care',
  description: 'Compare wet, dry, and fresh pet food options to determine what\'s best for your pet. Learn the pros, cons, and nutritional differences of each type. Expert comparison guide.',
  keywords: ['wet pet food', 'dry pet food', 'fresh pet food', 'pet food comparison', 'best pet food type', 'kibble vs wet food', 'canned pet food', 'fresh pet food delivery'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Wet vs Dry vs Fresh Pet Food - Which is Best? | Nearby Pet Care',
    description: 'Compare wet, dry, and fresh pet food options to determine what\'s best for your pet.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wet vs Dry vs Fresh Pet Food Comparison Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wet vs Dry vs Fresh Pet Food - Which is Best? | Nearby Pet Care',
    description: 'Compare wet, dry, and fresh pet food options to determine what\'s best for your pet.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
      'en-GB': 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
      'en-CA': 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
      'en-AU': 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
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
    'article:published_time': '2024-01-01T00:00:00+00:00',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Nearby Pet Care Team',
    'article:section': 'Pet Nutrition',
    'article:tag': 'wet pet food, dry pet food, fresh pet food, pet food comparison',
  },
};

export default function WetVsDryVsFreshPage() {
  const currentDate = new Date().toISOString();
  
  // Organization Schema for E-E-A-T
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nearby Pet Care',
    url: 'https://nearbypetcare.com',
    logo: 'https://nearbypetcare.com/logo.png',
    description: 'Comprehensive pet care guides and resources for pet owners. Expert advice on pet nutrition, health, grooming, and training.',
  };

  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Wet vs Dry vs Fresh Pet Food', item: 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wet vs Dry vs Fresh Pet Food - Which is Best?',
    description: 'Compare wet, dry, and fresh pet food options to determine what\'s best for your pet. Learn the pros, cons, and nutritional differences of each type.',
    url: 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 600,
        height: 60,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'wet pet food, dry pet food, fresh pet food, pet food comparison',
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Nutrition', href: '/pet-nutrition' },
            { name: 'Wet vs Dry vs Fresh Pet Food', href: '/pet-nutrition/wet-vs-dry-vs-fresh-pet-food' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🍽️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Food Comparison</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🍽️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Wet vs Dry vs Fresh Pet Food
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Compare wet, dry, and fresh pet food options to determine what's best for your pet. Learn the pros, cons, and nutritional differences of each type.
            </p>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Walk down the pet food aisle, and you'll see three main categories: dry kibble in bags, wet food in cans or pouches, and increasingly, fresh refrigerated options. Each type has its advocates and its place in pet nutrition. But which is best for your pet? The answer isn't straightforward—it depends on your pet's needs, your lifestyle, and your budget. This guide will help you understand the real differences between wet, dry, and fresh pet food so you can make the best choice for your furry friend.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding the Basics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before diving into the pros and cons, it's important to understand what each type actually is. Dry food (kibble) is extruded and baked, removing most moisture. Wet food is cooked and sealed in cans or pouches, retaining moisture. Fresh food is minimally processed, often cooked but not heavily processed, and requires refrigeration. Each processing method affects nutrition, palatability, cost, and convenience differently.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dry Pet Food (Kibble)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dry food is the most common type of pet food, and for good reasons—it's convenient, affordable, and has a long shelf life. But it's not perfect for every pet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Advantages</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Convenience:</strong> Easy to store, measure, and serve. No refrigeration needed, and you can leave it out for free-feeding (though scheduled meals are generally better).</li>
              <li><strong>Cost-effective:</strong> Generally the most affordable option per serving, making it accessible for many pet owners.</li>
              <li><strong>Dental benefits:</strong> The crunchy texture can help scrape plaque off teeth, though it's not a substitute for proper dental care. Some kibbles are specifically designed for dental health.</li>
              <li><strong>Long shelf life:</strong> Unopened bags can last for months, and opened bags stay fresh for weeks if stored properly.</li>
              <li><strong>Portability:</strong> Easy to take on trips or pack for boarding.</li>
              <li><strong>Variety:</strong> Available in countless formulas for different life stages, sizes, and health needs.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Disadvantages</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Low moisture content:</strong> Typically only 6-10% moisture, which can be a problem for pets who don't drink enough water, especially cats.</li>
              <li><strong>Processing:</strong> The high-heat extrusion process can destroy some heat-sensitive nutrients, though quality manufacturers compensate for this.</li>
              <li><strong>Palatability:</strong> Some pets, especially cats, find dry food less appealing than wet food.</li>
              <li><strong>Carbohydrate content:</strong> Dry food typically contains more carbohydrates than wet food, which may not be ideal for all pets.</li>
              <li><strong>Preservatives:</strong> While necessary for shelf stability, some dry foods contain synthetic preservatives that some owners prefer to avoid.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Best For</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Dry food works well for most healthy adult pets, especially those who drink plenty of water. It's ideal for pet owners who need convenience and affordability, and for pets who benefit from the dental scraping action of crunchy kibble.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Wet Pet Food (Canned or Pouched)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Wet food has a higher moisture content and is often more palatable, making it a favorite among many pets and their owners.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Advantages</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>High moisture content:</strong> Typically 75-85% moisture, which helps with hydration. This is especially important for cats, who naturally have low thirst drives.</li>
              <li><strong>Palatability:</strong> Most pets find wet food more appealing, which can be helpful for picky eaters or pets with decreased appetite.</li>
              <li><strong>Easier to eat:</strong> Soft texture makes it ideal for senior pets, pets with dental issues, or pets recovering from surgery.</li>
              <li><strong>Lower carbohydrate content:</strong> Generally contains fewer carbohydrates than dry food, which some owners prefer.</li>
              <li><strong>Fewer preservatives:</strong> The canning process preserves the food, so fewer (or no) synthetic preservatives are needed.</li>
              <li><strong>Portion control:</strong> Individual cans or pouches make it easier to control portions.</li>
              <li><strong>Variety:</strong> Available in many flavors and textures (pâté, chunks in gravy, etc.).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Disadvantages</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Cost:</strong> More expensive per serving than dry food, which can add up significantly over time.</li>
              <li><strong>Storage:</strong> Requires more storage space, and opened cans must be refrigerated and used within a few days.</li>
              <li><strong>Dental health:</strong> Doesn't provide the mechanical cleaning action of dry food, so pets on wet-only diets may need more dental care.</li>
              <li><strong>Mess:</strong> Can be messier to serve and clean up.</li>
              <li><strong>Less convenient:</strong> Not as easy to travel with or leave out for extended periods.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Best For</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Wet food is excellent for cats (who benefit from the moisture), senior pets, pets with dental issues, picky eaters, and pets who need to increase their water intake. It's also great for mixing with dry food to add variety and moisture.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Fresh Pet Food</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh pet food is a relatively newer category that's gained popularity. These are minimally processed foods, often delivered fresh or available in refrigerated sections of pet stores.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Advantages</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Minimal processing:</strong> Less processed than traditional kibble, which may preserve more nutrients and natural flavors.</li>
              <li><strong>High-quality ingredients:</strong> Many fresh food companies use human-grade ingredients and transparent sourcing.</li>
              <li><strong>Customizable:</strong> Some services allow you to customize recipes based on your pet's needs, allergies, or preferences.</li>
              <li><strong>Fresh preparation:</strong> Made fresh (or frozen fresh), which can improve palatability and nutrient quality.</li>
              <li><strong>Convenience of delivery:</strong> Many services deliver pre-portioned meals to your door.</li>
              <li><strong>Appeal:</strong> Often looks and smells more like "real food" to both pets and owners.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Disadvantages</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Cost:</strong> Significantly more expensive than both dry and wet food—often 3-5 times the cost of premium kibble.</li>
              <li><strong>Storage requirements:</strong> Must be refrigerated or frozen, requiring freezer/refrigerator space.</li>
              <li><strong>Short shelf life:</strong> Even when frozen, has a shorter shelf life than dry food.</li>
              <li><strong>Availability:</strong> Not as widely available as traditional pet foods, though this is changing.</li>
              <li><strong>Nutritional adequacy:</strong> Not all fresh food companies have veterinary nutritionists formulating their recipes. It's important to ensure the food meets AAFCO standards.</li>
              <li><strong>Planning required:</strong> Need to plan ahead for thawing and ensure you don't run out.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Best For</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Fresh food can be great for pet owners who prioritize ingredient quality and minimal processing, have the budget for it, and want the convenience of pre-portioned meals. It's also good for pets with specific dietary needs that benefit from customization.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Combination Approach</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many pet owners find success with mixing different types of food. This approach offers several benefits:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Best of both worlds:</strong> You can get the convenience and dental benefits of dry food while adding the moisture and palatability of wet food.</li>
              <li><strong>Cost management:</strong> Mixing allows you to provide some benefits of premium foods while managing costs.</li>
              <li><strong>Variety:</strong> Keeps meals interesting for your pet, which can help prevent picky eating.</li>
              <li><strong>Flexibility:</strong> Easy to adjust the ratio based on your pet's needs or your schedule.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For example, you might feed dry food in the morning and wet food in the evening, or mix them together. Some owners add a spoonful of wet food to dry kibble as a "topper" to increase palatability and moisture.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Making the Right Choice for Your Pet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When deciding between wet, dry, and fresh food, consider:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Pet's Needs</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Age and life stage (puppies, adults, seniors have different needs)</li>
              <li>Health conditions (some conditions benefit from specific food types)</li>
              <li>Dental health (pets with dental issues may need softer food)</li>
              <li>Hydration status (pets who don't drink enough may benefit from wet food)</li>
              <li>Appetite and preferences (some pets are simply pickier than others)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Lifestyle</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Budget (fresh food is expensive, dry food is most affordable)</li>
              <li>Storage space (wet and fresh foods need refrigeration)</li>
              <li>Convenience needs (dry food is most convenient for travel and busy schedules)</li>
              <li>Time available for meal preparation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Quality Matters Most</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regardless of which type you choose, quality is the most important factor. A high-quality dry food is better than a low-quality fresh food. Look for foods that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Meet AAFCO nutritional standards</li>
              <li>Use high-quality, named protein sources</li>
              <li>Are appropriate for your pet's life stage</li>
              <li>Are made by reputable companies with quality control</li>
              <li>Your pet actually eats and thrives on</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              There's no single "best" type of pet food—the best choice depends on your pet's individual needs, your lifestyle, and your budget. Many pets do perfectly well on high-quality dry food. Others benefit from the moisture and palatability of wet food. And some owners choose fresh food for its quality and minimal processing. The combination approach can give you flexibility and variety.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What matters most is choosing a nutritionally complete, high-quality food that your pet enjoys and thrives on. Work with your veterinarian to determine what's best for your pet's specific situation, and don't be afraid to try different approaches until you find what works. Your pet's health and happiness are what matter most.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-nutrition" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Pet Nutrition Guides
            </Link>
          </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <NutritionSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

