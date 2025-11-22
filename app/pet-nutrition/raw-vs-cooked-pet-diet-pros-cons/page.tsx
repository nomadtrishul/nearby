import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';

export const metadata: Metadata = {
  title: 'Raw vs Cooked Pet Diet - Pros & Cons | Nearby Pet Care',
  description: 'Compare raw and cooked diets for pets with science-backed information. Learn the pros, cons, and safety considerations for each approach. Veterinary nutritionist insights.',
  keywords: ['raw pet food', 'cooked pet food', 'raw diet for pets', 'BARF diet', 'pet diet comparison', 'raw food safety', 'cooked pet food recipes'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Raw vs Cooked Pet Diet - Pros & Cons | Nearby Pet Care',
    description: 'Compare raw and cooked diets for pets with science-backed information.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
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
        alt: 'Raw vs Cooked Pet Diet Comparison Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raw vs Cooked Pet Diet - Pros & Cons | Nearby Pet Care',
    description: 'Compare raw and cooked diets for pets with science-backed information.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
      'en-GB': 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
      'en-CA': 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
      'en-AU': 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
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
    'article:tag': 'raw pet food, cooked pet food, BARF diet, pet diet comparison',
  },
};

export default function RawVsCookedDietPage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Raw vs Cooked Pet Diet', item: 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Raw vs Cooked Pet Diet - Pros & Cons',
    description: 'Compare raw and cooked diets for pets with science-backed information. Learn the pros, cons, and safety considerations for each approach.',
    url: 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'raw pet food, cooked pet food, BARF diet, pet diet comparison',
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
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
            { name: 'Raw vs Cooked Pet Diet', href: '/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🥩</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Diet Comparison</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🥩</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Raw vs Cooked Pet Diet
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Compare raw and cooked diets for pets with science-backed information. Learn the pros, cons, and safety considerations for each approach.
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
              The raw vs. cooked diet debate is one of the most passionate topics in pet nutrition. Proponents of raw diets point to nature—wolves and wild cats eat raw meat, so shouldn't our pets? Advocates for cooked diets emphasize safety and digestibility. Both sides have valid points, and the truth is more nuanced than either extreme suggests. This guide will help you understand the real pros and cons of each approach, based on current scientific understanding, so you can make an informed decision for your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Raw Diets (BARF and Prey Model)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Raw diets come in different forms. The BARF (Biologically Appropriate Raw Food) diet typically includes raw meat, bones, organs, vegetables, and sometimes fruits. The prey model diet mimics what a wild animal would eat—whole prey or parts that replicate whole prey. Both approaches aim to feed pets what their ancestors ate in the wild.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Case for Raw Diets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Supporters of raw diets report numerous benefits, and some of these are supported by anecdotal evidence and some research:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Potential Benefits</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Natural, unprocessed ingredients:</strong> Raw diets avoid the high-heat processing that can destroy some nutrients in commercial foods. Proponents argue this preserves natural enzymes and nutrients.</li>
              <li><strong>Improved coat condition:</strong> Many owners report shinier, healthier-looking coats. This might be due to higher fat content or omega-3 fatty acids from raw fish.</li>
              <li><strong>Better dental health:</strong> Raw meaty bones can help clean teeth naturally, potentially reducing plaque and tartar buildup.</li>
              <li><strong>Higher moisture content:</strong> Raw food naturally contains more water than dry kibble, which can be beneficial for hydration, especially for cats.</li>
              <li><strong>No artificial preservatives:</strong> Raw diets don't require synthetic preservatives since they're typically frozen or fed fresh.</li>
              <li><strong>Potential for smaller, firmer stools:</strong> Some pets on raw diets produce less waste, which owners interpret as better nutrient absorption.</li>
              <li><strong>Increased energy:</strong> Some owners report their pets seem more energetic on raw diets.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Concerns with Raw Diets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, raw diets come with significant risks and challenges that can't be ignored:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bacterial Contamination</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is the biggest concern. Raw meat can contain harmful bacteria like Salmonella, E. coli, and Listeria. While healthy pets might handle these bacteria better than humans, they can still get sick. More concerning, pets can shed these bacteria in their feces, potentially exposing family members—especially children, elderly people, or those with compromised immune systems—to serious illness. Studies have found that pets on raw diets are more likely to shed these bacteria.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Nutritional Imbalances</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Creating a nutritionally complete raw diet is extremely difficult. Many homemade raw diets are deficient in calcium, have incorrect calcium-to-phosphorus ratios, or lack essential vitamins and minerals. This can lead to serious health problems, especially in growing puppies and kittens. Even commercial raw diets can have formulation issues.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bone Safety</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Raw bones can be dangerous. They can cause broken teeth, mouth injuries, choking, or intestinal blockages. Cooked bones are even more dangerous (they splinter), but raw bones aren't risk-free. Some pets handle them fine, but others don't.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Cost and Convenience</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Raw diets are typically more expensive than commercial foods. They also require careful handling, proper storage (freezer space), and more preparation time. You need to be meticulous about food safety to protect both your pet and your family.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Limited Scientific Evidence</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While many owners report positive results, there's limited peer-reviewed research proving raw diets are superior to well-formulated commercial diets. Most evidence is anecdotal. Some studies have found no significant health benefits, while others have raised concerns about nutritional adequacy and safety.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Cooked Diets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cooked homemade diets involve preparing your pet's food at home using cooked ingredients. This can range from simply cooking meat before feeding to creating complete, balanced meals with proper supplementation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Case for Cooked Diets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cooked diets offer a middle ground between raw and commercial foods:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Safety Benefits</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Reduced pathogen risk:</strong> Cooking kills harmful bacteria, making the food safer for both your pet and your family. This is especially important in households with children, elderly, or immunocompromised individuals.</li>
              <li><strong>Easier handling:</strong> You don't need to worry as much about cross-contamination in your kitchen.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Digestibility</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cooking breaks down proteins and makes some nutrients more bioavailable. Some pets with sensitive stomachs or digestive issues do better on cooked food. Cooking also makes some vegetables more digestible for pets.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Flexibility</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cooked diets allow you to control every ingredient while still ensuring safety through cooking. You can customize for allergies, health conditions, or preferences while maintaining food safety.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Challenges with Cooked Diets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cooked diets aren't without their own challenges:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Nutrient Loss</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cooking can destroy some heat-sensitive nutrients like certain B vitamins and vitamin C. However, many essential nutrients are stable during cooking, and losses can be compensated for with proper formulation and supplementation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Still Requires Proper Formulation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just because it's cooked doesn't mean it's balanced. Cooked homemade diets still need to be carefully formulated to ensure they meet all nutritional requirements. This typically requires working with a veterinary nutritionist.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Time and Cost</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Like raw diets, cooked homemade diets require time for preparation and can be more expensive than commercial foods. You also need proper storage and meal planning.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What the Science Says</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The scientific evidence is mixed and evolving. Some studies suggest potential benefits of raw diets (like improved digestibility markers), while others highlight risks (bacterial contamination, nutritional imbalances). Most veterinary organizations, including the American Veterinary Medical Association and the FDA, have concerns about raw diets due to safety and nutritional adequacy issues.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, it's important to note that many commercial pet foods are also not perfect, and some pets do thrive on well-formulated raw or cooked diets. The key is "well-formulated"—this is where many homemade diets fall short.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Making the Decision: What's Right for Your Pet?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              There's no one-size-fits-all answer. Consider these factors:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Household</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Do you have young children, elderly family members, or immunocompromised individuals? If so, the bacterial risks of raw diets might outweigh potential benefits. Cooked diets or high-quality commercial foods might be safer choices.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Pet's Health</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some pets with certain health conditions might benefit from specific dietary approaches. Others might have conditions that make raw diets risky. Your veterinarian can help you understand what's appropriate for your pet's specific situation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Commitment Level</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Both raw and cooked homemade diets require significant commitment—time, money, proper handling, and working with professionals to ensure nutritional adequacy. If you can't commit fully, a high-quality commercial diet might be better than a poorly executed homemade diet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Pet's Response</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some pets thrive on raw diets, others do better with cooked, and many do perfectly fine on commercial foods. Pay attention to how your pet responds—energy levels, coat condition, digestive health, overall wellbeing. The best diet is one that keeps your pet healthy and happy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">If You Choose Raw or Cooked: Essential Guidelines</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you decide to go with a raw or cooked homemade diet, here's what you must do:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Work with a veterinary nutritionist:</strong> This is non-negotiable. They'll create a balanced recipe and recommend proper supplements.</li>
              <li><strong>Practice strict food safety:</strong> Use separate cutting boards, wash hands thoroughly, clean all surfaces, and handle raw meat with extreme care.</li>
              <li><strong>Choose quality ingredients:</strong> Source meat from reputable suppliers. Consider human-grade ingredients.</li>
              <li><strong>Monitor your pet closely:</strong> Regular veterinary check-ups, including blood work, can catch nutritional deficiencies early.</li>
              <li><strong>Be prepared to adjust:</strong> Your pet's needs will change, and you may need to modify the diet over time.</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Critical Reminder:</strong> Whether you choose raw, cooked, or commercial food, the most important factor is that it's nutritionally complete and balanced. Many pets thrive on high-quality commercial diets. If you choose homemade (raw or cooked), you must work with a veterinary nutritionist to ensure your pet gets everything they need. Don't risk your pet's health by winging it or following unverified internet recipes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The raw vs. cooked debate doesn't have a clear winner. Both approaches can work when done correctly, and both have risks when done poorly. The best choice depends on your pet, your household, your commitment level, and your ability to work with professionals to ensure nutritional adequacy. Many pets do perfectly well on high-quality commercial foods, and there's no shame in choosing that route. If you're drawn to raw or cooked diets, do your research, work with professionals, and prioritize your pet's health and safety above all else.
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

