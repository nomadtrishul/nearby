import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetProductsSidebar from '@/components/PetProductsSidebar';
import { 
  generateSEOMetadata,
  generateBlogPostingStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Products Overview',
  description: 'Comprehensive overview of pet products reviews and buying guides. Find the best products for your pet across all categories.',
  keywords: ['pet products overview', 'pet product reviews', 'pet buying guides', 'best pet products', 'pet supplies'],
  pathname: '/pet-products/pillar',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00+00:00',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Products',
  tags: ['pet products', 'pet product reviews', 'pet buying guides', 'best pet products'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-products/pillar',
      'en-GB': '/pet-products/pillar',
      'en-CA': '/pet-products/pillar',
      'en-AU': '/pet-products/pillar',
    },
  },
});

export default function PetProductsPillarPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Products', url: '/pet-products' },
    { name: 'Overview', url: '/pet-products/pillar' },
  ];

  // Generate structured data using centralized utilities
  const blogPostingStructuredData = generateBlogPostingStructuredData({
    headline: 'Pet Products Overview',
    description: 'Comprehensive overview of pet products reviews and buying guides. Find the best products for your pet.',
    url: '/pet-products/pillar',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Products Overview',
    description: 'Comprehensive overview of pet products reviews and buying guides. Find the best products for your pet.',
    url: '/pet-products/pillar',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogPostingStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Products', href: '/pet-products' },
            { name: 'Overview', href: '/pet-products/pillar' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🛍️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Guide</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🛍️</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Products Overview
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your comprehensive guide to choosing the best products for your pet. From food to beds, grooming tools to toys, we help you make informed decisions that support your pet's health and happiness.
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
              As a pet owner, you want the best for your furry, feathered, or scaled family member. But with thousands of products on the market, each claiming to be the best, how do you know what's really worth your money? How do you separate the genuinely great products from the ones that are just well-marketed?
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              That's where we come in. Our comprehensive pet product reviews and buying guides are designed to help you navigate the overwhelming world of pet products. We research, test, and analyze products across all categories, looking at quality, value, safety, and real-world performance. Our goal is simple: help you find products that truly support your pet's health, happiness, and wellbeing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Our Approach to Product Reviews</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              We believe that good product reviews go beyond just listing features or repeating marketing copy. We dig deeper, looking at what really matters:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Quality and materials:</strong> What is the product actually made of? Will it hold up over time? Is it safe for pets?</li>
              <li><strong>Real-world performance:</strong> How does the product work in actual use? Does it deliver on its promises?</li>
              <li><strong>Value:</strong> Is the product worth the price? Are you getting quality that matches the cost?</li>
              <li><strong>Safety:</strong> Are there any safety concerns? Is the product appropriate for your pet's size, age, and health status?</li>
              <li><strong>User experience:</strong> Is the product easy to use? Does it make life easier for both you and your pet?</li>
            </ul>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We also consider that different pets have different needs. A product that's perfect for one pet might not be right for another. That's why we provide context about who each product is best suited for, what situations it works well in, and when you might want to look for alternatives.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Product Categories We Cover</h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet Food and Nutrition</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition is the foundation of your pet's health. We review different types of pet food, from dry kibble to wet food to fresh and raw options. We look at ingredient quality, nutritional completeness, value, and how well different foods work for different pets. Whether you're feeding a puppy, a senior dog, a cat with special dietary needs, or anything in between, we help you understand your options and make informed choices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <Link href="/pet-products/best-dog-food" className="text-blue-600 dark:text-blue-400 hover:underline">Explore our dog food reviews</Link> to find the best nutrition for your canine companion.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cat Litter and Waste Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The right cat litter makes a huge difference for both you and your cat. We compare different types—clumping, non-clumping, natural, silica gel, and more—looking at odor control, dust levels, ease of use, and how well cats accept them. We also review litter boxes, scoops, and other waste management products to help you create a setup that works for your home and your cat's preferences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <Link href="/pet-products/best-cat-litter" className="text-blue-600 dark:text-blue-400 hover:underline">Check out our cat litter guide</Link> to find the perfect option for your feline friend.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Grooming Tools and Supplies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular grooming keeps your pet looking good and feeling healthy. We review brushes, combs, clippers, nail trimmers, shampoos, and all the tools you need for effective at-home grooming. We help you understand which tools work best for different coat types, how to build a grooming kit that fits your needs, and what to look for in quality grooming products.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <Link href="/pet-products/best-grooming-tools" className="text-blue-600 dark:text-blue-400 hover:underline">Browse our grooming tool reviews</Link> to build the perfect grooming kit.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet Beds and Furniture</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your pet spends a lot of time sleeping, so their bed matters. We review different types of beds—orthopedic, bolster, nesting, cooling, heated, and more—looking at comfort, support, durability, and value. We help you understand which bed style works best for different pets, what materials to look for, and how to choose the right size and features.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <Link href="/pet-products/best-pet-beds" className="text-blue-600 dark:text-blue-400 hover:underline">See our pet bed reviews</Link> to find the perfect sleeping spot for your pet.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Toys and Enrichment</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mental stimulation and physical activity are essential for your pet's wellbeing. We review toys, puzzles, interactive feeders, and enrichment products that keep pets engaged, active, and happy. We look at safety, durability, effectiveness, and how well different products work for different types of pets and play styles.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health and Wellness Products</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              From dental care products to supplements to first aid supplies, we review products that support your pet's health. We help you understand what works, what's safe, and what's worth investing in. We also review products for specific health needs, like joint support, skin care, and more.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Use Our Reviews</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Our reviews are designed to be practical and actionable. Here's how to get the most out of them:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Start with your pet's needs:</strong> Before reading reviews, think about what your pet actually needs. What problems are you trying to solve? What are your priorities?</li>
              <li><strong>Read multiple reviews:</strong> Don't rely on just one review. Read several to get a well-rounded understanding of a product category.</li>
              <li><strong>Consider your situation:</strong> Think about your budget, your pet's specific needs, and your lifestyle. The best product for someone else might not be the best for you.</li>
              <li><strong>Look for comparisons:</strong> Our comparison guides help you see how products stack up against each other, making it easier to choose.</li>
              <li><strong>Check for updates:</strong> Product lines change, new models come out, and our reviews are updated regularly to reflect current information.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What Makes a Good Pet Product?</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              While every product category has its own specific criteria, there are some universal qualities that make a product worth buying:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Safety first:</strong> The product should be safe for your pet to use. This means appropriate materials, proper sizing, and no design flaws that could cause harm.</li>
              <li><strong>Quality construction:</strong> The product should be well-made and durable. It should hold up to regular use without breaking, falling apart, or losing effectiveness.</li>
              <li><strong>Effective performance:</strong> The product should actually do what it's supposed to do. It should work as advertised and deliver real benefits.</li>
              <li><strong>Good value:</strong> The product should offer value that matches its price. This doesn't always mean the cheapest option—sometimes paying more gets you significantly better quality.</li>
              <li><strong>Pet-friendly design:</strong> The product should be designed with pets in mind. It should be comfortable, easy to use, and appropriate for your pet's needs and preferences.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Staying Informed</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              The pet product market is constantly evolving. New products come out regularly, existing products are updated, and our understanding of what works best continues to grow. We regularly update our reviews to reflect new information, new products, and changes in the market.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We also stay informed about safety recalls, ingredient changes, and other important updates that could affect your purchasing decisions. Our goal is to provide you with current, accurate information that helps you make the best choices for your pet.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Choosing the right products for your pet is an important responsibility. The products you choose affect your pet's health, comfort, and quality of life. But with so many options available, it can feel overwhelming. Our reviews and guides are here to help you navigate the options, understand what matters, and make informed decisions you can feel confident about.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Remember, there's rarely one "perfect" product that's right for everyone. The best choice depends on your pet's individual needs, your budget, and your preferences. Use our reviews as a starting point, but always consider your specific situation and trust your judgment about what's right for your pet.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Your pet depends on you to make good choices for them. With the right information and a bit of research, you can find products that truly support their health, happiness, and wellbeing. That's what we're here to help you do.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Pet Products
            </Link>
          </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PetProductsSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
