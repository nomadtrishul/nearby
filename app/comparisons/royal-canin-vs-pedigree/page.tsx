import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ComparisonsSidebar from '@/components/ComparisonsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Royal Canin vs Pedigree - Dog Food Comparison | Nearby Pet Care',
  description: 'Comprehensive comparison of Royal Canin vs Pedigree dog food. Expert analysis of ingredients, nutrition, price, and recommendations.',
  keywords: ['Royal Canin vs Pedigree', 'dog food comparison', 'Royal Canin review', 'Pedigree review', 'best dog food', 'premium vs budget dog food', 'dog food brands comparison', 'veterinary recommended dog food'],
  pathname: '/comparisons/royal-canin-vs-pedigree',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Royal Canin vs Pedigree Dog Food Comparison',
    type: 'image/png',
  }],
});

export default function RoyalCaninVsPedigreePage() {
  const baseUrl = 'https://nearbypetcare.com';
  const pageUrl = `${baseUrl}/comparisons/royal-canin-vs-pedigree`;
  const publishedTime = '2024-01-15T00:00:00Z';
  const modifiedTime = new Date().toISOString();
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
        name: 'Royal Canin vs Pedigree',
        item: pageUrl,
      },
    ],
  };

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Royal Canin vs Pedigree: Which Dog Food Is Right for Your Pup?',
    description: 'Comprehensive comparison of Royal Canin vs Pedigree dog food. Expert analysis of ingredients, nutrition, price, veterinary recommendations, and real-world results.',
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
    keywords: 'Royal Canin vs Pedigree, dog food comparison, Royal Canin review, Pedigree review, best dog food, premium vs budget dog food',
    inLanguage: 'en-US',
    wordCount: 2500,
    timeRequired: 'PT10M',
  };

  // FAQPage Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Royal Canin better than Pedigree?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Neither brand is inherently better—it depends on your dog\'s individual needs. Royal Canin offers specialized, breed-specific formulas ideal for dogs with health concerns or specific nutritional requirements, while Pedigree provides reliable, affordable nutrition that works well for many healthy dogs. The best choice depends on your dog\'s health, age, breed, and your budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Royal Canin more expensive than Pedigree?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Royal Canin is more expensive due to its breed-specific formulations, extensive research and development, collaboration with veterinarians, specialized ingredient sourcing, and targeted nutritional profiles. The premium price reflects the precision nutrition and specialized formulas designed for specific breeds and health conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do veterinarians recommend Royal Canin or Pedigree?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many veterinarians recommend Royal Canin, especially for dogs with health issues or specific nutritional needs, due to its research-backed approach and specialized formulas. Pedigree is less commonly recommended by vets, not because it\'s bad, but because it\'s more of a general-purpose food. Vets often suggest Pedigree for healthy dogs when budget is a concern.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I mix Royal Canin and Pedigree?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, some pet owners successfully mix Royal Canin and Pedigree to balance specialized nutrition with cost. If transitioning between foods, do it gradually over 7-10 days, mixing increasing amounts of the new food with the old to avoid digestive upset. Always consult your veterinarian before making dietary changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is better for puppies: Royal Canin or Pedigree?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both brands offer puppy formulas. Royal Canin provides breed-specific puppy formulas with precise nutrition for different breed sizes, while Pedigree offers general puppy formulas. For puppies with specific health concerns or breed-specific needs, Royal Canin may be preferable. For healthy puppies, Pedigree can provide adequate nutrition at a lower cost. Consult your veterinarian for personalized recommendations.',
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
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Comparisons', href: '/comparisons' },
            { name: 'Royal Canin vs Pedigree', href: '/comparisons/royal-canin-vs-pedigree' }
          ]} />
          
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐕</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Brand Comparison</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Royal Canin vs Pedigree
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Which Dog Food Is Right for Your Pup?
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">💰</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Price Comparison</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">🥘</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ingredient Analysis</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">⚕️</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Vet Recommendations</span>
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
              Walking down the pet food aisle, you'll likely spot both Royal Canin and Pedigree taking up significant shelf space. One comes with a premium price tag and veterinary endorsements, while the other promises complete nutrition at a fraction of the cost. But what's the real difference between these two popular brands, and which one actually delivers on its promises? Let's dig into what makes each brand tick and help you figure out which one fits your dog's needs and your budget.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Understanding Royal Canin: The Premium Choice</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Royal Canin has built its reputation on precision nutrition and scientific research. What sets them apart is their breed-specific approach—they've developed formulas tailored to everything from a Chihuahua's tiny jaw to a Great Dane's joint health needs. If you've ever seen a bag of dog food specifically labeled for your dog's breed, chances are it was Royal Canin.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The brand works closely with veterinarians and nutritionists, which explains why many vets recommend it, especially for dogs with specific health concerns. Their formulas often target issues like sensitive skin, digestive problems, or weight management with carefully balanced nutrients. The kibble shapes are even designed to match different breed characteristics—smaller pieces for toy breeds, larger pieces that encourage chewing for bigger dogs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              However, this level of specialization comes at a cost. Royal Canin is significantly more expensive than many other brands, and some pet owners find the ingredient lists include by-products and grains, which might surprise those expecting only premium cuts of meat. That said, these ingredients are carefully selected and processed to meet specific nutritional profiles, which is why many dogs thrive on these formulas despite what the ingredient list might suggest at first glance.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Understanding Pedigree: The Accessible Option</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Pedigree has been a household name for decades, and there's a reason it's one of the most widely available dog food brands. It's affordable, easy to find, and many dogs genuinely enjoy it. The brand focuses on providing complete and balanced nutrition that meets AAFCO standards, which means it contains all the essential nutrients your dog needs to stay healthy.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              What Pedigree does well is consistency and accessibility. You can find it at virtually any grocery store, big-box retailer, or pet supply shop. They offer formulas for different life stages (puppy, adult, senior) and sizes (small, medium, large breeds), making it easy to find something that fits your dog's basic needs. Many pet owners appreciate that they can feed their dogs a complete diet without breaking the bank.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The trade-off is that Pedigree uses more generic formulas rather than breed-specific or highly specialized nutrition. The ingredient quality, while meeting nutritional standards, tends to include more fillers and by-products compared to premium brands. Some dogs with sensitive stomachs or specific health issues might not do as well on Pedigree, but for many healthy dogs, it provides perfectly adequate nutrition.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Head-to-Head: The Key Differences</h2>
            
            <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Price and Value</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors">
                This is where the difference is most obvious. Royal Canin typically costs two to three times more than Pedigree for a similar-sized bag. If you're feeding a large dog, this price difference can add up to hundreds of dollars per year. The question is whether the premium price translates to better health outcomes for your specific dog.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                For dogs with no special health concerns, Pedigree often provides excellent value. But if your dog has specific needs—like a sensitive stomach, skin issues, or breed-specific requirements—the targeted nutrition in Royal Canin might be worth the extra cost, potentially saving you money on vet visits down the line.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Ingredient Quality and Sourcing</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors">
                Both brands use ingredients that meet nutritional standards, but their approaches differ. Royal Canin focuses on precise nutrient profiles, sometimes using ingredients that might seem less "premium" on paper but are chosen for their specific nutritional contributions. Their quality control and research backing are generally considered more rigorous.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Pedigree uses more cost-effective ingredients while still meeting nutritional requirements. The ingredient lists tend to include more grains and by-products, which isn't necessarily bad—many dogs digest these just fine—but it's something to consider if your dog has known sensitivities or if you prefer a more "natural" ingredient profile.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Specialized Formulas</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors">
                This is where Royal Canin really shines. They offer breed-specific formulas for dozens of breeds, plus specialized diets for weight management, digestive care, skin support, and more. If your vet recommends a specific type of diet for your dog's health condition, Royal Canin likely has a formula designed for it.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Pedigree keeps it simpler with basic life stage and size formulas. They do offer some specialized options like weight management or sensitive stomach formulas, but the selection is much more limited. For most healthy dogs, this is perfectly fine, but if your dog needs targeted nutrition, Royal Canin's variety gives you more options.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Veterinary Recommendations</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors">
                Many veterinarians recommend Royal Canin, especially for dogs with health issues or specific nutritional needs. The brand's research-backed approach and collaboration with veterinary professionals give it credibility in the veterinary community. If your vet suggests a specific Royal Canin formula, there's usually a good reason.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Pedigree is less commonly recommended by vets, not because it's bad, but because it's more of a general-purpose food. Vets often suggest it for healthy dogs when budget is a concern, but they're more likely to recommend Royal Canin (or other premium brands) when a dog needs specialized nutrition.
              </p>
            </div>

            <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Availability and Convenience</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed transition-colors">
                Pedigree wins on accessibility—you can find it almost anywhere, from your local grocery store to gas stations. This makes it convenient if you run out of food unexpectedly or if you prefer to shop at multiple locations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Royal Canin is typically found at pet specialty stores, veterinary clinics, and online retailers. While it's not as ubiquitous as Pedigree, it's still widely available if you know where to look. Many pet owners set up auto-delivery subscriptions to ensure they never run out.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Which One Should You Choose?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The answer depends on your dog's individual needs, your budget, and your priorities. Here's a quick guide to help you decide:
            </p>
            
            <div className="my-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">Choose Royal Canin if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
                <li>Your dog has specific health concerns or dietary sensitivities</li>
                <li>Your veterinarian has recommended a specialized diet</li>
                <li>You have a breed that benefits from breed-specific nutrition</li>
                <li>Budget isn't your primary concern and you want maximum nutritional precision</li>
                <li>You're dealing with issues like weight management, skin problems, or digestive sensitivity</li>
              </ul>
            </div>

            <div className="my-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">Choose Pedigree if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
                <li>Your dog is healthy and has no special dietary requirements</li>
                <li>Budget is an important factor in your decision</li>
                <li>You value convenience and wide availability</li>
                <li>You're feeding multiple dogs and need an affordable option</li>
                <li>Your dog does well on standard, complete nutrition formulas</li>
            </ul>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">The Middle Ground: Mixing and Transitioning</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Some pet owners find success with a hybrid approach—using Royal Canin for specific health needs while mixing in Pedigree to manage costs. Others transition between brands based on their dog's changing needs or life stage. If you're considering switching foods, do it gradually over 7-10 days, mixing increasing amounts of the new food with the old to avoid digestive upset.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Remember, the best food for your dog is the one that keeps them healthy, happy, and thriving. Pay attention to your dog's energy levels, coat condition, stool quality, and overall well-being. These are better indicators of whether a food is working than any ingredient list or price tag.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Final Thoughts</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Both Royal Canin and Pedigree have their place in the dog food world. Royal Canin offers precision nutrition and specialized formulas that can make a real difference for dogs with specific needs, while Pedigree provides reliable, affordable nutrition that works well for many healthy dogs. Neither is inherently "better"—it's about finding the right fit for your individual dog.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              When in doubt, talk to your veterinarian. They know your dog's health history and can provide personalized recommendations based on breed, age, activity level, and any existing health conditions. Your vet can help you weigh the benefits of premium nutrition against your budget and your dog's actual needs, ensuring you make a decision that's right for both your pup and your wallet.
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

