import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';

export const metadata: Metadata = {
  title: 'Pet Food Allergies & Elimination Diet Guide | Nearby Pet Care',
  description: 'Learn how to identify food allergies in pets and safely implement an elimination diet to determine problematic ingredients. Step-by-step guide with veterinary recommendations.',
  keywords: ['pet food allergies', 'dog food allergies', 'cat food allergies', 'elimination diet', 'pet allergy symptoms', 'food allergy testing', 'novel protein diet'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pet Food Allergies & Elimination Diet Guide | Nearby Pet Care',
    description: 'Learn how to identify food allergies in pets and safely implement an elimination diet.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
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
        alt: 'Pet Food Allergies & Elimination Diet Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Food Allergies & Elimination Diet Guide | Nearby Pet Care',
    description: 'Learn how to identify food allergies in pets and safely implement an elimination diet.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
      'en-GB': 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
      'en-CA': 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
      'en-AU': 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
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
    'article:tag': 'pet food allergies, elimination diet, food allergy testing',
  },
};

export default function PetFoodAllergiesPage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Pet Food Allergies & Elimination Diet', item: 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Food Allergies & Elimination Diet Guide',
    description: 'Learn how to identify food allergies in pets and safely implement an elimination diet to determine problematic ingredients.',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/pet-food-allergies-elimination-diet',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'pet food allergies, elimination diet, food allergy testing, pet allergy symptoms',
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the most common food allergens in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common food allergens in dogs include beef, dairy products, chicken, wheat, and eggs. In cats, common allergens are fish, beef, and dairy products. However, pets can be allergic to any food protein.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does an elimination diet take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An elimination diet typically takes 8-12 weeks. During this time, your pet eats only a novel protein and carbohydrate source. If symptoms improve, you then gradually reintroduce foods one at a time to identify the allergen.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the signs of food allergies in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Food allergies in pets can cause itching (especially around the face, ears, paws, and rear end), red inflamed skin, recurring ear infections, hair loss, hot spots, vomiting, diarrhea, and excessive gas. Skin symptoms are more common than digestive symptoms.',
        },
      },
    ],
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
      {/* Structured Data - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            { name: 'Pet Food Allergies & Elimination Diet', href: '/pet-nutrition/pet-food-allergies-elimination-diet' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🚫</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Food Allergies</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🚫</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Food Allergies & Elimination Diet
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn how to identify food allergies in pets and safely implement an elimination diet to determine problematic ingredients.
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
              Watching your pet constantly scratch, lick, or deal with digestive upset is heartbreaking. You've tried everything—different foods, medications, special shampoos—but nothing seems to help. If this sounds familiar, your pet might be dealing with a food allergy. Food allergies in pets are more common than many owners realize, and they can cause a frustrating array of symptoms that don't always point clearly to food as the culprit. The good news? With patience and the right approach, you can identify the problem and help your pet feel better. This guide will walk you through understanding food allergies and using an elimination diet to find answers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Food Allergies vs. Food Intolerances</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              First, let's clarify the difference. A food allergy involves the immune system—your pet's body mistakenly identifies a food protein as a threat and mounts an immune response. This can cause skin problems, itching, ear infections, and sometimes digestive issues. A food intolerance, on the other hand, doesn't involve the immune system. It's more like a sensitivity that causes digestive upset (vomiting, diarrhea, gas) but typically doesn't cause skin problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Both can make your pet miserable, but food allergies tend to be more persistent and can cause more varied symptoms. The elimination diet process we'll discuss can help identify both, though the approach is similar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Recognizing the Signs of Food Allergies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Food allergies can show up in surprising ways. While you might expect digestive symptoms, skin problems are actually more common. Here's what to watch for:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Skin Symptoms</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Itching, especially around the face, ears, paws, and rear end</li>
              <li>Red, inflamed skin</li>
              <li>Recurring ear infections (often yeast or bacterial)</li>
              <li>Hair loss from excessive scratching or licking</li>
              <li>Hot spots or skin infections</li>
              <li>Chronic paw licking or chewing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Digestive Symptoms</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Vomiting</li>
              <li>Diarrhea</li>
              <li>Excessive gas</li>
              <li>Abdominal discomfort</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Other Symptoms</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Respiratory issues (less common but possible)</li>
              <li>Behavioral changes due to discomfort</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These symptoms can also be caused by environmental allergies, parasites, infections, or other health issues. That's why it's important to work with your veterinarian to rule out other causes before assuming it's a food allergy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Food Allergens in Pets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While pets can theoretically be allergic to any food protein, some are more commonly problematic than others. Interestingly, the most common allergens are often the proteins pets have been exposed to most frequently—which makes sense, as repeated exposure increases the chance of developing an allergy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">For Dogs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most common food allergens in dogs include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Beef</strong> - The most common allergen in dogs</li>
              <li><strong>Dairy products</strong> - Milk, cheese, and other dairy can cause reactions</li>
              <li><strong>Chicken</strong> - Very common since it's in so many commercial foods</li>
              <li><strong>Wheat</strong> - Though grain allergies are less common than protein allergies</li>
              <li><strong>Eggs</strong> - Can cause both skin and digestive issues</li>
              <li><strong>Lamb</strong> - Less common but still seen</li>
              <li><strong>Fish</strong> - More common in cats but can affect dogs too</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">For Cats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cats tend to be allergic to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Fish</strong> - Very common in cats</li>
              <li><strong>Beef</strong> - Also common</li>
              <li><strong>Dairy products</strong> - Many cats are lactose intolerant as well</li>
              <li><strong>Chicken</strong> - Frequently seen</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Elimination Diet: The Gold Standard for Diagnosis</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An elimination diet is the most reliable way to identify food allergies. The concept is simple: you remove all potential allergens from your pet's diet, feed them only foods they've never (or rarely) eaten before, and wait to see if symptoms improve. Then, you gradually reintroduce foods one at a time to identify the culprit.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              It sounds straightforward, but it requires strict discipline and patience. Even a tiny amount of an allergen can trigger symptoms, so you have to be meticulous.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Before You Start: Important Preparations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Don't start an elimination diet on your own. This is a medical process that should be supervised by your veterinarian. Here's why:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your vet needs to rule out other causes of the symptoms first</li>
              <li>They can help you choose appropriate novel protein and carbohydrate sources</li>
              <li>They'll ensure the diet is nutritionally complete</li>
              <li>They can monitor your pet's progress and adjust as needed</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Ruling Out Other Causes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before assuming it's a food allergy, your veterinarian will likely want to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Check for parasites (fleas, mites, etc.)</li>
              <li>Rule out environmental allergies (pollen, dust, etc.)</li>
              <li>Check for skin infections that might be causing symptoms</li>
              <li>Review your pet's medical history</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Implement an Elimination Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once your veterinarian has determined that an elimination diet is appropriate, here's what the process typically looks like:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 1: Choose Novel Protein and Carbohydrate Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The key is choosing foods your pet has never (or rarely) eaten before. Common novel protein options include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Venison (deer)</li>
              <li>Rabbit</li>
              <li>Duck</li>
              <li>Kangaroo (in some regions)</li>
              <li>Alligator (in some regions)</li>
              <li>Novel fish like whitefish or herring (if fish wasn't previously fed)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For carbohydrates, choose something your pet hasn't had before:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Sweet potato</li>
              <li>Quinoa</li>
              <li>Oats (if wheat wasn't previously fed)</li>
              <li>Peas or lentils</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 2: The Elimination Phase (8-12 Weeks)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is the strictest part. Your pet must eat ONLY the novel protein and carbohydrate you've chosen. Nothing else. This means:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>No treats (unless they're made from the same novel protein)</li>
              <li>No table scraps</li>
              <li>No flavored medications or supplements</li>
              <li>No flavored toothpaste or dental chews</li>
              <li>No access to other pets' food</li>
              <li>No rawhide or other chews that might contain allergens</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can use a commercial limited-ingredient diet with your chosen novel protein, or work with your veterinarian or a nutritionist to create a homemade diet. Either way, it must be nutritionally complete.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              During this phase, keep a detailed journal. Note any changes in symptoms, even small ones. Take photos of skin issues to track progress. It can take 8-12 weeks for symptoms to fully resolve, so patience is essential.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 3: The Challenge Phase</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet's symptoms improve or disappear during the elimination phase, it's likely a food allergy. Now comes the challenge phase: reintroducing foods one at a time to identify the specific allergen.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Start by adding one potential allergen back into the diet (for example, chicken). Feed it for 1-2 weeks and watch closely for symptoms to return. If symptoms come back, you've found an allergen. Return to the elimination diet until symptoms clear again, then try the next food.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If no symptoms appear after 1-2 weeks, that food is probably safe. Remove it again, wait a few days, then try the next food. This process can take several months, but it's the only way to definitively identify allergens.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Challenges and How to Handle Them</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Elimination diets aren't easy. Here are some common challenges and solutions:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Pet Won't Eat the New Food</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some pets are picky, especially when switching to something new. Try mixing the new food gradually with the old food (though this can complicate the elimination process). Warming the food slightly can make it more appealing. If your pet absolutely won't eat it, you may need to try a different novel protein source.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Family Members Giving Treats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Everyone in the household needs to be on board. One well-meaning treat can ruin weeks of progress. Make sure everyone understands the importance of strict adherence. Consider putting a note on the treat jar or keeping it out of reach.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Symptoms Don't Improve</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If symptoms don't improve after 12 weeks on a strict elimination diet, food might not be the cause. Your veterinarian may want to investigate environmental allergies or other health issues. However, make sure you've been truly strict—even small slip-ups can prevent improvement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">After Identifying Allergens: Long-Term Management</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once you've identified what your pet is allergic to, you need to avoid those ingredients permanently. This means:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Reading every food label carefully</li>
              <li>Asking about ingredients when buying treats or chews</li>
              <li>Being cautious about flavored medications</li>
              <li>Keeping a list of safe foods and brands</li>
              <li>Having a plan for when you travel or board your pet</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many pets with food allergies do well on limited-ingredient commercial diets or prescription hypoallergenic diets. Some owners continue with homemade diets using only safe ingredients. Work with your veterinarian to find the best long-term solution.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> An elimination diet is a commitment, but it's the most reliable way to identify food allergies and help your pet feel better. Work closely with your veterinarian throughout the process, be patient, and stay strict. Your pet's comfort is worth the effort.
              </p>
            </div>
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

