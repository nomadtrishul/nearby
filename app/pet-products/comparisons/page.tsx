import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetProductsSidebar from '@/components/PetProductsSidebar';

export const metadata: Metadata = {
  title: 'Pet Product Comparisons | Nearby Pet Care',
  description: 'Side-by-side comparisons of popular pet products. Compare brands, features, prices, and quality to make informed purchasing decisions for your pet.',
  keywords: ['pet product comparisons', 'product comparison', 'compare pet products', 'pet product reviews', 'best pet products'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  openGraph: {
    title: 'Pet Product Comparisons | Nearby Pet Care',
    description: 'Side-by-side comparisons of popular pet products. Compare brands, features, and prices.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-products/comparisons',
    siteName: 'Nearby Pet Care',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Product Comparisons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Product Comparisons | Nearby Pet Care',
    description: 'Side-by-side comparisons of popular pet products.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/comparisons' },
};

export default function PetProductsComparisonsPage() {
  const currentDate = new Date().toISOString();

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Product Comparisons',
    description: 'Side-by-side comparisons of popular pet products. Compare brands, features, prices, and quality.',
    url: 'https://nearbypetcare.com/pet-products/comparisons',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Products', item: 'https://nearbypetcare.com/pet-products' },
      { '@type': 'ListItem', position: 3, name: 'Comparisons', item: 'https://nearbypetcare.com/pet-products/comparisons' },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

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
            { name: 'Comparisons', href: '/pet-products/comparisons' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚖️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Comparisons</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">⚖️</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Product Comparisons
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Making the right choice means understanding the differences. Compare products side-by-side to see what really matters for your pet's needs and your budget.
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
              Shopping for pet products can feel overwhelming when you're faced with dozens of similar-looking options. How do you know which one is really better? Is the expensive brand worth the extra cost? Will the budget option work just as well? These are the questions that keep pet owners up at night—or at least make shopping trips longer than they need to be.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              That's where product comparisons come in. By looking at products side-by-side, you can see the real differences—not just in price, but in quality, features, durability, and how well they actually work. We break down what matters, what doesn't, and help you understand which product is the best fit for your specific situation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Comparisons Matter</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              When you're shopping for pet products, it's easy to get swayed by marketing claims, attractive packaging, or price tags. But the best product for your pet isn't always the most expensive, the most popular, or the one with the flashiest advertising. It's the one that meets your pet's specific needs, fits your budget, and actually delivers on its promises.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Comparisons help you cut through the noise and focus on what really matters. They show you where products are similar, where they differ, and help you understand whether those differences are worth paying for. Sometimes, the more expensive option is genuinely better. Other times, a mid-range or budget option offers the best value. Comparisons help you figure out which is which.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What We Compare</h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Quality and Materials</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The materials used in a product directly affect its durability, safety, and performance. We look at what products are actually made of, not just what the marketing says. Are the materials high-quality? Are they safe for pets? Will they hold up over time? These are the questions that matter.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              For example, when comparing pet beds, we look at the type of foam, the quality of the fabric, and how well the bed is constructed. A bed with cheap foam might feel okay initially, but it will flatten quickly and won't provide the support your pet needs. Understanding these differences helps you make better choices.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Features and Functionality</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Features can make a big difference in how useful a product is. But not all features are created equal—some are genuinely useful, while others are just marketing gimmicks. We help you understand which features actually matter and which ones you can skip.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              For instance, when comparing grooming tools, we look at things like ease of use, effectiveness, and safety. A brush with ergonomic handles might be worth the extra cost if it makes grooming easier and more comfortable for both you and your pet. But a brush with unnecessary bells and whistles might not be worth the premium price.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Value and Price</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Price is important, but it's not the only factor. We look at value—what you're getting for what you're paying. Sometimes, spending a bit more upfront saves money in the long run because the product lasts longer or works better. Other times, a budget option offers everything you need at a fraction of the cost.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We also consider the total cost of ownership. A cheaper product that needs frequent replacement might end up costing more than a higher-quality product that lasts for years. Understanding these trade-offs helps you make smarter purchasing decisions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Real-World Performance</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              How a product performs in real-world use is often different from how it looks in marketing materials. We consider actual user experiences, durability over time, and how well products hold up to regular use. A product that looks great but falls apart after a few uses isn't a good value, no matter how attractive the price.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We also look at how products work for different types of pets. A food that works great for one dog might not be right for another. A bed that's perfect for a small dog might be too small for a large one. Understanding these nuances helps you find products that actually work for your specific pet.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Use Our Comparisons</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Our comparison guides are designed to be practical and actionable. Here's how to get the most out of them:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Start with your pet's needs:</strong> Before diving into comparisons, think about what your pet actually needs. What problems are you trying to solve? What features matter most to you?</li>
              <li><strong>Consider your budget:</strong> Know your budget range, but be flexible. Sometimes spending a bit more gets you significantly better quality.</li>
              <li><strong>Read the details:</strong> Don't just look at the ratings or prices. Read about why products differ and what those differences mean in practice.</li>
              <li><strong>Think long-term:</strong> Consider how long you want the product to last and how much use it will get. A product you use daily is worth investing in more than one you use occasionally.</li>
              <li><strong>Check for updates:</strong> Product lines change, new models come out, and prices fluctuate. Check back periodically for updated comparisons.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Popular Comparison Categories</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              We compare products across all major pet product categories. Some of our most popular comparisons include:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Pet Food:</strong> Comparing different brands, formulas, and types of food to help you find the best nutrition for your pet's specific needs.</li>
              <li><strong>Cat Litter:</strong> Comparing clumping vs. non-clumping, natural vs. clay, and different brands to find what works best for your cat and your home.</li>
              <li><strong>Grooming Tools:</strong> Comparing brushes, clippers, and other tools to help you build a grooming kit that works for your pet's coat type.</li>
              <li><strong>Pet Beds:</strong> Comparing different styles, materials, and brands to find the perfect bed for your pet's comfort and health needs.</li>
              <li><strong>Toys and Enrichment:</strong> Comparing toys, puzzles, and other enrichment products to keep your pet engaged and happy.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Beyond the Comparison</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              While comparisons are helpful, remember that the "best" product is the one that works best for your specific situation. Your pet's individual needs, preferences, and health conditions matter more than any rating or ranking. Use comparisons as a starting point, but always consider your pet's unique circumstances.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Also, keep in mind that product quality can vary, and individual experiences may differ. What works perfectly for one pet might not work for another. Be prepared to try different options if the first choice doesn't work out, and don't be afraid to return products that don't meet your expectations.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong className="text-blue-700 dark:text-blue-300">Explore More Comparisons:</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For detailed side-by-side comparisons of specific products, check out our comprehensive comparison guides:
              </p>
              <div className="mt-4">
                <Link href="/comparisons" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  View All Product Comparisons →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Making informed decisions about pet products takes time and research, but it's worth it. The right products keep your pet healthy, happy, and comfortable, while the wrong ones can waste money and potentially cause problems. Our comparison guides are here to help you navigate the options and make choices you can feel confident about.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Remember, there's rarely one "perfect" product that's right for everyone. The best choice depends on your pet's needs, your budget, and your preferences. Use comparisons to understand your options, but trust your judgment about what's right for your specific situation.
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
