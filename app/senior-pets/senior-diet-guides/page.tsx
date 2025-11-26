import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SeniorPetsSidebar from '@/components/SeniorPetsSidebar';

export const metadata: Metadata = {
  title: 'Senior Pet Diet Guides: Nutrition for Aging Dogs & Cats | Nearby Pet Care',
  description: 'Complete guide to nutrition for senior pets. Learn about dietary needs, weight management, special considerations, and choosing the right food.',
  keywords: ['senior pet diet', 'elderly pet nutrition', 'senior pet food', 'aging pet diet', 'senior dog food', 'senior cat food', 'pet nutrition aging', 'senior pet nutrition needs'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Senior Pet Diet Guides | Nearby Pet Care',
    description: 'Complete guide to nutrition for senior pets. Learn about dietary needs, weight management, and special considerations.',
    type: 'article',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/senior-pets/senior-diet-guides',
    siteName: 'Nearby Pet Care',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    section: 'Senior Pets',
    tags: ['senior pet care', 'pet nutrition', 'senior pet diet', 'aging pets'],
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Senior Pet Diet Guides',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Pet Diet Guides | Nearby Pet Care',
    description: 'Complete guide to nutrition for senior pets. Learn about dietary needs, weight management, and special considerations.',
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
    canonical: 'https://nearbypetcare.com/senior-pets/senior-diet-guides',
  },
  category: 'Pet Care',
};

export default function SeniorDietGuidesPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Senior Pet Diet Guides: Nutrition for Aging Dogs & Cats',
    description: 'Complete guide to nutrition for senior pets. Learn about dietary needs, weight management, special considerations, and choosing the right food for your aging dog or cat.',
    url: 'https://nearbypetcare.com/senior-pets/senior-diet-guides',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
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
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/senior-pets/senior-diet-guides',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Senior Pet Diet Guides',
    },
    articleSection: 'Senior Pets',
    articleBody: 'Comprehensive guide to nutrition for senior pets, covering dietary needs, weight management, special health considerations, and choosing appropriate foods for aging dogs and cats.',
    keywords: 'senior pet diet, elderly pet nutrition, senior pet food, aging pet diet, senior dog food, senior cat food, pet nutrition aging',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 2600,
    timeRequired: 'PT18M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Senior Pet Nutrition',
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Senior Pets',
        item: 'https://nearbypetcare.com/senior-pets',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Senior Diet Guides',
        item: 'https://nearbypetcare.com/senior-pets/senior-diet-guides',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should I feed my senior pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Senior pets typically need fewer calories but still require high-quality nutrition. Look for foods specifically formulated for senior pets that include joint-supporting nutrients, easily digestible ingredients, and appropriate protein levels. Work with your veterinarian to determine the best diet based on your pet\'s specific health needs, activity level, and any medical conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I manage my senior pet\'s weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Weight management for senior pets involves monitoring their weight regularly, adjusting food portions based on activity level, and choosing appropriate foods. Many senior pets need fewer calories due to decreased activity and slower metabolism. If your pet needs to lose weight, work with your veterinarian to create a safe, gradual weight loss plan. If they\'re losing weight unexpectedly, consult your vet as this can indicate health problems.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do senior pets need special diets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many senior pets benefit from diets specifically formulated for their life stage, but not all pets need to switch at a specific age. Senior diets often include joint-supporting nutrients, are more easily digestible, and have appropriate calorie levels. Some pets with health conditions like kidney disease may need prescription diets. Your veterinarian can help determine if and when a diet change is appropriate for your pet.',
        },
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Senior Pets', href: '/senior-pets' },
            { name: 'Senior Diet Guides', href: '/senior-pets/senior-diet-guides' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🍽️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Senior Nutrition</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🥘</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Senior Pet Diet Guides
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nutrition needs change as pets age. Learn how to adjust your senior pet's diet to support their health, manage weight, and address age-related health concerns.
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Just like humans, pets' nutritional needs change as they age. That food that kept your pet healthy and energetic in their prime might not be the best choice now. Senior pets have different metabolic rates, activity levels, and health concerns than younger pets. Understanding these changes and adjusting their diet accordingly can help your pet maintain a healthy weight, support their organ function, and stay comfortable as they age.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">How Senior Pet Nutrition Differs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              As pets age, several things change that affect their nutritional needs. Their metabolism typically slows down, meaning they burn fewer calories. They're usually less active, so they need fewer calories overall. At the same time, their bodies may become less efficient at processing certain nutrients, and they may develop health conditions that require dietary modifications. It's a delicate balance—providing enough nutrition to maintain health while not overfeeding, and ensuring they get the right nutrients in the right amounts.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The good news is that many pet food companies now offer senior-specific formulas designed to address these changing needs. However, not all senior pets need the same diet, so it's important to work with your veterinarian to determine what's best for your individual pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Key Nutritional Considerations</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Calorie Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Most senior pets need fewer calories than they did when they were younger. This is because they're typically less active and their metabolism has slowed. However, this isn't always the case—some senior pets actually need more calories if they're losing weight or have certain health conditions. The key is monitoring your pet's weight and body condition and adjusting their food intake accordingly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Regular weigh-ins at home or at the vet can help you catch weight changes early. If your pet is gaining weight, you might need to reduce their portions slightly or switch to a lower-calorie food. If they're losing weight unexpectedly, that's a sign to talk to your veterinarian—unintended weight loss can indicate health problems that need attention.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Protein Quality and Quantity</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Protein is crucial for maintaining muscle mass, which can decline as pets age. However, the type and amount of protein matter. Senior pets often benefit from high-quality, easily digestible protein sources. Some senior pets, especially those with kidney issues, may need to limit protein, but this should only be done under veterinary guidance. For healthy senior pets, adequate high-quality protein is important for maintaining muscle mass and overall health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Look for foods that list specific protein sources (like chicken, fish, or lamb) rather than generic terms like "meat meal." Higher quality proteins are more digestible and provide better nutrition for your pet's body.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Joint-Supporting Nutrients</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Many senior pets develop joint issues, so foods that include joint-supporting nutrients can be beneficial. Look for foods that contain glucosamine, chondroitin, omega-3 fatty acids, or other joint-supporting ingredients. These nutrients can help maintain joint health and reduce inflammation. While they're not a replacement for medical treatment if your pet has arthritis, they can be a helpful part of an overall joint health strategy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Digestibility</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              As pets age, their digestive systems may become less efficient. Foods that are highly digestible can help ensure your pet gets the most nutrition from what they eat and reduce digestive upset. Look for foods with high-quality ingredients and appropriate fiber levels. Some senior pets benefit from foods with added probiotics or prebiotics to support digestive health.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fiber for Digestive Health</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Appropriate fiber levels are important for digestive health in senior pets. Fiber can help with regular bowel movements and may help manage weight by providing a feeling of fullness. However, too much fiber can interfere with nutrient absorption, so it's about finding the right balance. Your veterinarian can help you determine if your pet's current food has appropriate fiber levels.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Special Dietary Needs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Many senior pets develop health conditions that require dietary modifications. These aren't just suggestions—they're often crucial for managing your pet's health and comfort.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Kidney Health</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Kidney disease is common in senior pets, and dietary management is a key part of treatment. Prescription kidney diets are typically lower in protein, phosphorus, and sodium, which helps reduce the workload on the kidneys. If your veterinarian recommends a kidney diet, it's important to follow their guidance—these diets are specifically formulated to support kidney function and can significantly impact your pet's quality of life.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Weight Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Many senior pets struggle with weight gain due to decreased activity and slower metabolism. Weight management diets are lower in calories but still provide all the necessary nutrients. If your pet needs to lose weight, work with your veterinarian to create a safe, gradual weight loss plan. Rapid weight loss can be dangerous, especially for senior pets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              On the flip side, some senior pets lose weight as they age. This can be due to decreased appetite, dental issues, or underlying health problems. If your pet is losing weight, it's important to identify the cause. Your veterinarian can help determine if it's a dietary issue, a health problem, or something else that needs attention.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Dental Health</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Dental problems are very common in senior pets and can affect their ability to eat. If your pet has dental issues, they might benefit from softer foods or smaller kibble that's easier to chew. Some pets do well with wet food, while others prefer dry food that's been softened with warm water. Regular dental care and checkups are important—if your pet's teeth are causing pain, they may eat less or avoid certain foods.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Feeding Schedule Adjustments</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              How you feed your senior pet can be just as important as what you feed them. Some senior pets do better with smaller, more frequent meals rather than one or two large meals. This can help with digestion and may be easier on their system. It can also help if your pet has a decreased appetite—smaller meals might be more appealing than a large bowl of food.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Make sure food and water are easily accessible. If your pet has mobility issues, place bowls in locations that don't require jumping or climbing. Elevated bowls can be helpful for pets with neck or back issues, as they don't have to bend down as far to eat or drink.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Reading Pet Food Labels</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Understanding pet food labels can help you make informed choices. Look for foods that are specifically formulated for senior pets and that meet AAFCO (Association of American Feed Control Officials) standards for complete and balanced nutrition. The ingredient list can give you clues about quality, but remember that ingredients are listed by weight, and the first few ingredients make up the majority of the food.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Don't be swayed by marketing claims alone. Terms like "natural" or "premium" aren't regulated and don't necessarily mean the food is better. What matters is whether the food meets your pet's specific nutritional needs, which is something your veterinarian can help you determine.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">When to Switch Foods</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              If you're considering switching your pet to a senior diet, do it gradually. Sudden diet changes can cause digestive upset. Mix the new food with the old food, gradually increasing the proportion of new food over about a week. Watch for any signs of digestive issues or changes in appetite, and adjust the transition pace if needed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Not all pets need to switch to a senior diet at a specific age. Some pets do well on their regular food well into their senior years, especially if they're maintaining a healthy weight and don't have health issues. Your veterinarian can help you determine if and when a diet change is appropriate for your pet.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Work With Your Veterinarian</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nutrition for senior pets isn't one-size-fits-all. What works for one pet might not work for another. Your veterinarian knows your pet's health history, current condition, and specific needs. They can recommend the best diet for your individual pet, help you interpret food labels, and guide you through any necessary dietary changes. Regular checkups are important so your vet can monitor your pet's weight, body condition, and overall health and adjust dietary recommendations as needed. Don't hesitate to ask questions—good nutrition is one of the most important things you can do for your senior pet's health and quality of life.
              </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link href="/senior-pets" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Senior Pets</Link>
            </div>
            </div>
            {/* Sidebar */}
            <aside className="lg:col-span-1" aria-label="Related resources">
              <SeniorPetsSidebar />
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
