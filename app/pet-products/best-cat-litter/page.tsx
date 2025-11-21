import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetProductsSidebar from '@/components/PetProductsSidebar';

export const metadata: Metadata = {
  title: 'Best Cat Litter - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best cat litter. Compare clumping, non-clumping, and specialty litters to find the perfect option for your cat and home.',
  keywords: ['best cat litter', 'cat litter reviews', 'cat litter comparison', 'best cat litter brands', 'clumping cat litter', 'natural cat litter', 'odor control cat litter', 'cat litter types', 'dust free cat litter'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
  title: 'Best Cat Litter - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best cat litter. Compare clumping, non-clumping, and specialty litters to find the perfect option.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-products/best-cat-litter',
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
        alt: 'Best Cat Litter Reviews & Buying Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Cat Litter - Reviews & Buying Guide | Nearby Pet Care',
    description: 'Comprehensive reviews and buying guide for the best cat litter. Compare different types to find the perfect option.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
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
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-products/best-cat-litter',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-products/best-cat-litter',
      'en-GB': 'https://nearbypetcare.com/pet-products/best-cat-litter',
      'en-CA': 'https://nearbypetcare.com/pet-products/best-cat-litter',
      'en-AU': 'https://nearbypetcare.com/pet-products/best-cat-litter',
    },
  },
  other: {
    'article:published_time': '2024-01-01T00:00:00+00:00',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Nearby Pet Care Team',
    'article:section': 'Pet Products',
    'article:tag': 'cat litter, cat litter reviews, best cat litter, clumping litter',
  },
};

export default function BestCatLitterPage() {
  const currentDate = new Date().toISOString();

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Cat Litter - Reviews & Buying Guide',
    description: 'Comprehensive reviews and buying guide for the best cat litter. Compare clumping, non-clumping, and specialty litters to find the perfect option for your cat and home.',
    url: 'https://nearbypetcare.com/pet-products/best-cat-litter',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care Team',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/pet-products/best-cat-litter',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Products',
    inLanguage: 'en-US',
    keywords: 'best cat litter, cat litter reviews, cat litter comparison, clumping cat litter, natural cat litter',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best type of cat litter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best type depends on your cat\'s preferences and your needs. Clumping clay litter is most popular for convenience, while natural litters are better for the environment. Silica gel offers excellent odor control, and paper litter is ideal for cats with respiratory issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I change cat litter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scoop clumping litter daily and change completely every 1-2 weeks. For non-clumping litter, change every 2-3 days. Silica gel can last 2-4 weeks. Always maintain 2-3 inches of litter depth.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is scented cat litter safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scented litter is generally safe, but many cats prefer unscented. Some cats may avoid scented litter, leading to accidents. Start with unscented and only try scented if your cat accepts it.',
        },
      },
    ],
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Products', item: 'https://nearbypetcare.com/pet-products' },
      { '@type': 'ListItem', position: 3, name: 'Best Cat Litter', item: 'https://nearbypetcare.com/pet-products/best-cat-litter' },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            { name: 'Best Cat Litter', href: '/pet-products/best-cat-litter' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐱</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Reviews</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐱</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Cat Litter: Reviews & Buying Guide
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              The right cat litter can make all the difference—for both you and your cat. Find the perfect balance of odor control, ease of use, and your cat's preferences.
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
              Let's be honest: cat litter isn't the most glamorous topic, but it's one of the most important products you'll buy for your cat. The right litter keeps your home smelling fresh, makes cleanup easier, and—most importantly—keeps your cat comfortable and happy. The wrong choice can lead to accidents outside the box, unpleasant odors, and a frustrated cat (and owner).
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With so many options available, choosing can feel overwhelming. Should you go with clumping or non-clumping? Clay or natural? Scented or unscented? We've tested and researched the most popular types to help you make an informed decision that works for both you and your feline friend.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Understanding Different Types of Cat Litter</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Each type of cat litter has its own advantages and drawbacks. Understanding these differences is key to finding what works best for your situation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Clumping Clay Litter</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Clumping clay litter is the most popular choice, and for good reason. When your cat uses it, the litter forms solid clumps that are easy to scoop out, leaving the rest of the litter clean and ready to use. This means you can go longer between full litter changes, making it more economical and convenient.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most cats accept clumping clay litter readily because it feels natural under their paws. It's also excellent at controlling odors when maintained properly. However, clay litter can be dusty, which isn't ideal for cats with respiratory issues or for households with allergies. It's also quite heavy, so if you have to carry it up stairs, that's something to consider.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Most cats, especially if you want convenience and good odor control. Works well for single-cat households and multi-cat homes with regular scooping.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Non-Clumping Clay Litter</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Non-clumping clay litter is the traditional choice that many cats grew up with. It's typically less expensive than clumping varieties and often produces less dust. However, because it doesn't form clumps, you need to change the entire litter box more frequently—usually every few days—which can be less convenient and more costly over time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Budget-conscious owners, cats who prefer traditional litter, or situations where you prefer to change the entire box regularly rather than scoop.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Silica Gel Crystals</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Silica gel litter is made from tiny crystals that absorb moisture and trap odors incredibly well. It's virtually dust-free, which is great for respiratory health, and it lasts longer than clay litter—you typically only need to change it every few weeks. The crystals are lightweight and easy to pour.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, some cats don't like the feel of the crystals under their paws, and it can be noisy when cats dig. It's also more expensive upfront, though the longer lifespan can offset the cost. The crystals can track around the house more than other types, and some owners find the texture less pleasant to handle.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Owners who want minimal dust, excellent odor control, and don't mind the higher price. Works well for cats who accept the texture.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Natural and Biodegradable Litters</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Natural litters made from materials like corn, wheat, pine, paper, or walnut shells are becoming increasingly popular. They're environmentally friendly, often flushable (though check local regulations), and typically produce less dust than clay. Many are also biodegradable, which appeals to eco-conscious owners.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Corn and wheat litters often clump well and control odors naturally. Pine litter has a pleasant, natural scent and is excellent at odor control. Paper litter is soft and dust-free, making it ideal for cats recovering from surgery or with respiratory issues.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, natural litters can be more expensive, may not clump as firmly as clay, and some cats need time to adjust to the different texture. Some natural litters can also attract insects if not stored properly, and they may not last as long as clay or silica options.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Environmentally conscious owners, cats with dust allergies, or situations where you want a more natural option. Great for cats who prefer softer textures.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Recycled Paper Litter</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Made from recycled newspaper, this litter is extremely soft, virtually dust-free, and highly absorbent. It's ideal for cats with respiratory issues, post-surgical recovery, or kittens who might ingest litter. It's also lightweight and biodegradable.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              However, it doesn't clump, so you'll need to change it frequently. It also doesn't control odors as well as other options, and some cats don't like the texture. It can be more expensive and may need to be changed more often.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Cats with health issues, kittens, or situations where dust is a major concern. Also good for temporary use during recovery periods.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Key Factors to Consider</h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Odor Control</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's face it: nobody wants their home to smell like a litter box. Good odor control is essential, but it's not just about the litter itself—it's also about maintenance. Even the best litter won't help if you don't scoop regularly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Clumping litters make it easier to remove waste promptly, which helps with odor. Silica gel crystals are excellent at trapping odors. Natural litters often use natural enzymes or materials that neutralize smells. Scented litters can help, but be careful—many cats are sensitive to strong fragrances and may avoid scented litter entirely.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dust Levels</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dust isn't just annoying—it can be harmful to both you and your cat, especially if either of you has respiratory issues or allergies. Clay litters tend to be dustier, while silica gel, natural, and paper litters are typically low-dust or dust-free.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If dust is a concern, look for "low-dust" or "dust-free" formulas. Even with these, it's a good idea to pour slowly and avoid creating clouds of dust when filling the box.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Tracking</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some litters stick to your cat's paws and get tracked throughout your home. This is more common with lightweight litters and smaller particles. Larger, heavier particles tend to track less.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Placing a litter mat outside the box can help catch tracked litter. Some litters are specifically designed to be low-tracking, which can make a big difference in keeping your floors clean.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Cat's Preferences</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is perhaps the most important factor. Cats can be very particular about their litter. If they don't like the texture, scent, or feel, they may avoid the box entirely, leading to accidents around your home.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Most cats prefer unscented litter with a fine to medium texture. If you're switching litters, do it gradually by mixing the new litter with the old over a week or two. Watch for signs that your cat doesn't like the new litter: avoiding the box, going right next to it, or showing signs of stress when using it.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cost and Value</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The cheapest litter isn't always the best value. Consider how long the litter lasts, how much you need to use, and how often you need to change it. A more expensive litter that lasts longer and requires less frequent changes might actually be more economical in the long run.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Clumping litters typically offer the best value because you only remove waste, not clean litter. Silica gel can last weeks, making it cost-effective despite the higher upfront price. Natural litters often cost more but offer environmental benefits that some owners value.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Tips for Litter Box Success</h2>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Scoop daily:</strong> Even with the best litter, you should scoop at least once a day. For multi-cat households, scoop twice daily.</li>
              <li><strong>Use enough litter:</strong> Most cats prefer 2-3 inches of litter depth. Too little makes it hard to dig and cover, too much can be wasteful.</li>
              <li><strong>Keep it clean:</strong> Completely change the litter and wash the box regularly—weekly for clumping litter, more often for non-clumping.</li>
              <li><strong>Provide enough boxes:</strong> The general rule is one box per cat, plus one extra. This prevents territorial issues and gives cats options.</li>
              <li><strong>Location matters:</strong> Place boxes in quiet, accessible areas. Avoid high-traffic zones or areas near loud appliances.</li>
              <li><strong>Gradual transitions:</strong> When switching litters, mix old and new gradually over 7-10 days to help your cat adjust.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Common Mistakes to Avoid</h2>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Using scented litter without testing:</strong> Many cats hate scented litter. Start with unscented and only try scented if your cat accepts it.</li>
              <li><strong>Not scooping frequently enough:</strong> Even the best litter needs regular maintenance. Neglecting this leads to odors and unhappy cats.</li>
              <li><strong>Changing litters too abruptly:</strong> Sudden changes can stress cats and lead to litter box avoidance.</li>
              <li><strong>Using too little or too much litter:</strong> Find the right depth that your cat prefers—usually 2-3 inches.</li>
              <li><strong>Ignoring your cat's preferences:</strong> If your cat consistently avoids the box, the litter might be the problem, not the cat.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Finding the right cat litter is a balance between your needs (convenience, cost, odor control) and your cat's preferences (texture, scent, feel). The best litter is one that your cat will actually use consistently, keeps your home smelling fresh, and fits your lifestyle and budget.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Don't be afraid to experiment, but do it gradually. Pay attention to how your cat responds, and be willing to switch if something isn't working. Remember, even the most expensive, highly-rated litter won't help if your cat refuses to use it.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With the right litter and proper maintenance, your cat will be happy, your home will smell fresh, and cleanup will be a breeze. It might take some trial and error, but finding that perfect match is worth it for both you and your feline friend.
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
