import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetProductsSidebar from '@/components/PetProductsSidebar';

export const metadata: Metadata = {
  title: 'Best Pet Beds - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best pet beds. Find comfortable, durable beds for dogs and cats that support joint health.',
  keywords: ['best pet beds', 'dog beds', 'cat beds', 'pet bed reviews', 'orthopedic pet beds', 'pet furniture', 'pet sleeping'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  openGraph: {
    title: 'Best Pet Beds - Reviews & Buying Guide | Nearby Pet Care',
    description: 'Comprehensive reviews and buying guide for the best pet beds. Find comfortable, durable beds for dogs and cats.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-products/best-pet-beds',
    siteName: 'Nearby Pet Care',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best Pet Beds Reviews & Buying Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pet Beds - Reviews & Buying Guide | Nearby Pet Care',
    description: 'Comprehensive reviews and buying guide for the best pet beds.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/best-pet-beds' },
};

export default function BestPetBedsPage() {
  const currentDate = new Date().toISOString();

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Pet Beds - Reviews & Buying Guide',
    description: 'Comprehensive reviews and buying guide for the best pet beds. Find comfortable, durable beds for dogs and cats.',
    url: 'https://nearbypetcare.com/pet-products/best-pet-beds',
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
      { '@type': 'ListItem', position: 3, name: 'Best Pet Beds', item: 'https://nearbypetcare.com/pet-products/best-pet-beds' },
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
            { name: 'Best Pet Beds', href: '/pet-products/best-pet-beds' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🛏️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Reviews</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🛏️</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Pet Beds: Reviews & Buying Guide
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your pet spends a significant portion of their life sleeping. Give them the comfort and support they deserve with a bed that's perfect for their size, sleeping style, and health needs.
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
              Think about how much time your pet spends sleeping—dogs sleep an average of 12-14 hours a day, and cats can sleep up to 16 hours. That's a lot of time spent in their bed. Just like you wouldn't want to sleep on an uncomfortable mattress night after night, your pet deserves a bed that supports their body, provides comfort, and helps them get the restful sleep they need.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              A good pet bed does more than just provide a place to sleep. It can help prevent joint problems, support aging pets, keep your pet warm in winter and cool in summer, and give them a sense of security and their own space. With so many options available, finding the right bed can feel overwhelming. We're here to help you understand what to look for and find the perfect bed for your furry friend.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Types of Pet Beds</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Different bed styles serve different purposes and suit different pets. Understanding the options helps you choose what's best for your pet's needs and preferences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Orthopedic Beds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Orthopedic beds are designed with extra support and cushioning, typically using memory foam or high-density foam. They distribute weight evenly, reduce pressure on joints, and provide excellent support for the spine and hips. These beds are especially important for senior pets, large breeds, or pets with arthritis, hip dysplasia, or other joint issues.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The foam should be thick enough to provide real support—look for at least 3-4 inches of quality foam. Some orthopedic beds have removable, washable covers, which is essential for easy maintenance. While they're more expensive than basic beds, they're worth the investment for pets who need extra support.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Senior pets, large breeds, pets with joint problems or arthritis, or any pet who needs extra support and comfort.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Bolster Beds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bolster beds have raised edges or sides that create a sense of security and provide a place for your pet to rest their head. Many pets love these beds because they can curl up against the sides or use them as a pillow. The raised edges also help contain the bed's filling and provide some insulation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These beds come in various styles—some have bolsters on all sides, others on three sides, and some have removable bolsters. They're great for pets who like to curl up or nest, and the raised sides can help anxious pets feel more secure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Pets who like to curl up, anxious pets who need a sense of security, or pets who enjoy resting their head on something elevated.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Nesting or Donut Beds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These circular beds have high, soft sides all around, creating a cozy nest-like environment. They're perfect for pets who love to burrow or curl up in a tight space. The high sides provide excellent insulation and a sense of security, making them popular with cats and small dogs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Small dogs, cats, pets who like to burrow, or pets who prefer a cozy, enclosed sleeping space.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cooling Beds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cooling beds use special materials or gel technology to help pets stay cool in hot weather. They're especially valuable for thick-coated breeds, brachycephalic (flat-faced) breeds who have trouble regulating temperature, or pets who live in hot climates. Some use gel that activates when your pet lies on it, while others use breathable materials that don't retain heat.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Thick-coated breeds, flat-faced breeds, pets in hot climates, or pets who tend to overheat easily.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Heated Beds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Heated beds provide gentle warmth, which is especially appreciated by senior pets, small breeds, short-haired pets, or pets who live in cold climates. Modern heated beds are safe and use low-wattage heating elements that warm to your pet's body temperature. They often have chew-resistant cords and automatic shut-off features for safety.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Senior pets, small breeds, short-haired pets, pets in cold climates, or pets who seem to always be cold.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Elevated or Raised Beds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These beds sit off the ground on a frame, typically with a breathable mesh or fabric surface. They're excellent for air circulation, which helps keep pets cool in summer. They're also great for pets who prefer a firmer surface or for use outdoors, as they keep pets off cold or damp ground.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Hot climates, outdoor use, pets who prefer firmer surfaces, or situations where you want easy cleaning underneath.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cave or Hooded Beds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These beds have a hood or cover that creates a cave-like space, providing privacy and a sense of security. They're popular with cats and some dogs who prefer to sleep in dark, enclosed spaces. The hood can often be folded down if your pet prefers an open bed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Cats, anxious pets, pets who prefer dark, enclosed spaces, or pets who like to hide when they sleep.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Key Factors to Consider</h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Size Matters</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Getting the right size is crucial. A bed that's too small will be uncomfortable, and one that's too large won't provide the cozy feeling many pets prefer. Measure your pet when they're in their natural sleeping position—stretched out for dogs who sprawl, curled up for those who nest.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              As a general guide, the bed should be large enough for your pet to stretch out fully if they want to, but not so large that they can't feel the edges. For growing puppies or kittens, you might need to size up, but be aware they may prefer a cozier fit initially.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Material and Fill</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The filling material affects comfort, support, and durability. Memory foam provides excellent support but can be warm. High-density foam offers good support and is more breathable. Polyester fill is common and affordable but may flatten over time. Some beds use shredded memory foam, which combines support with breathability.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The outer material should be durable, easy to clean, and comfortable against your pet's skin. Look for materials that are machine-washable and resistant to odors and stains. For pets who chew, consider more durable materials or beds with chew-resistant features.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ease of Cleaning</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pet beds get dirty—it's inevitable. Look for beds with removable, machine-washable covers. Some beds are entirely machine-washable, which is convenient but may not last as long. Waterproof or water-resistant covers are great for puppies, senior pets with incontinence, or pets who drool.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Consider how easy it will be to maintain the bed over time. A bed that's difficult to clean will become unpleasant quickly, no matter how comfortable it is initially.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Pet's Sleeping Style</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Watch how your pet sleeps. Do they stretch out, curl up, or sprawl? Do they prefer soft surfaces or firmer ones? Do they like to be covered or prefer open spaces? Understanding your pet's preferences helps you choose a bed they'll actually use.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Some pets are very particular about their sleeping arrangements, while others will sleep anywhere. If your pet has a favorite spot or sleeping position, try to match that in the bed you choose.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Durability</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A good pet bed should last for years. Look for quality construction, strong seams, and durable materials. Chewers and diggers need especially durable beds. Read reviews to see how beds hold up over time, and consider the manufacturer's warranty.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              While it's tempting to save money on a cheaper bed, a quality bed that lasts several years is often a better value than replacing cheap beds frequently.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Special Considerations</h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">For Senior Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Senior pets often benefit from orthopedic beds with extra support. Look for beds that are easy to get in and out of—low sides or a ramp can help. Heated beds can soothe achy joints, and beds with waterproof covers protect against accidents.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">For Puppies and Kittens</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Young pets need beds that are easy to clean (accidents happen), durable enough to withstand chewing and scratching, and appropriately sized. Consider beds that can grow with them, or plan to replace the bed as they grow. Waterproof covers are essential.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">For Multiple Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have multiple pets, each should have their own bed to prevent territorial issues. However, some pets enjoy sharing, so you might also want a larger bed for cuddling. Consider the dynamics of your pets when choosing beds and placement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Placement and Setup</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Where you place the bed matters. Most pets prefer beds in quiet areas away from high traffic, but still where they can see their family. Avoid placing beds in drafty areas or direct sunlight. Some pets like beds in multiple locations—one in the bedroom, one in the living room, for example.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Make the bed inviting by placing familiar blankets or toys in it initially. You can also use treats to encourage your pet to try the new bed. Be patient—some pets take time to accept a new bed, especially if they're attached to an old one.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Maintenance Tips</h2>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Wash regularly:</strong> Follow the manufacturer's instructions, but plan to wash covers weekly or bi-weekly, depending on use.</li>
              <li><strong>Vacuum or shake:</strong> Between washes, vacuum or shake out the bed to remove hair and debris.</li>
              <li><strong>Air out:</strong> Let beds air out regularly, especially if they're used frequently.</li>
              <li><strong>Check for wear:</strong> Inspect beds regularly for signs of wear, loose seams, or damage that could be a safety hazard.</li>
              <li><strong>Replace when needed:</strong> Even the best beds don't last forever. Replace beds when they're no longer providing adequate support or comfort.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Your pet's bed is more than just furniture—it's their sanctuary, their comfort zone, and a crucial part of their health and wellbeing. Taking the time to choose the right bed shows your pet how much you care about their comfort and happiness.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Consider your pet's specific needs, preferences, and lifestyle when making your choice. A bed that works perfectly for one pet might not be right for another. Don't be afraid to try different styles until you find what your pet loves—after all, they're the ones who will be using it every day.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With the right bed, your pet will have a comfortable place to rest, recover, and recharge. That peaceful sleep they get in a quality bed supports their overall health, mood, and quality of life. It's an investment that pays off in your pet's happiness and wellbeing.
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
