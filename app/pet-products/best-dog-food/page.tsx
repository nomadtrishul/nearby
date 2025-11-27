import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetProductsSidebar from '@/components/PetProductsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Dog Food - Reviews & Buying Guide',
  description: 'Comprehensive reviews and buying guide for the best dog food. Compare top brands, ingredients, and find the perfect food for your dog.',
  keywords: ['best dog food', 'dog food reviews', 'dog food comparison', 'best dog food brands', 'premium dog food', 'dog nutrition', 'dog food guide', 'AAFCO dog food', 'dog food ingredients', 'healthy dog food'],
  pathname: '/pet-products/best-dog-food',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00+00:00',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Products',
  tags: ['best dog food', 'dog food reviews', 'dog food comparison', 'best dog food brands'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-products/best-dog-food',
      'en-GB': '/pet-products/best-dog-food',
      'en-CA': '/pet-products/best-dog-food',
      'en-AU': '/pet-products/best-dog-food',
    },
  },
});

export default function BestDogFoodPage() {
  const currentDate = new Date().toISOString();

  // Enhanced Article Schema with E-E-A-T
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Dog Food - Reviews & Buying Guide',
    description: 'Comprehensive reviews and buying guide for the best dog food. Compare top brands, ingredients, and find the perfect food for your dog.',
    url: 'https://nearbypetcare.com/pet-products/best-dog-food',
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
      sameAs: [
        'https://www.facebook.com/nearbypetcare',
        'https://www.instagram.com/nearbypetcare',
        'https://www.youtube.com/@nearbypetcare',
        'https://www.linkedin.com/company/nearbypetcare',
      ],
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
      '@id': 'https://nearbypetcare.com/pet-products/best-dog-food',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Products',
    inLanguage: 'en-US',
    keywords: 'best dog food, dog food reviews, dog food comparison, best dog food brands, premium dog food, dog nutrition',
    about: {
      '@type': 'Thing',
      name: 'Dog Food',
      description: 'Comprehensive guide to choosing the best dog food for your pet',
    },
  };

  // FAQ Schema for common questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should I look for in dog food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for high-quality protein as the first ingredient, complete and balanced nutrition, AAFCO certification, appropriate for your dog\'s life stage, and no artificial preservatives or fillers. Consider your dog\'s age, size, activity level, and any health conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I transition my dog to new food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Transition gradually over 7-10 days. Start with 25% new food and 75% old food for days 1-2, then 50/50 for days 3-4, 75% new for days 5-6, and 100% new food by day 7. Watch for digestive upset and slow down if needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is AAFCO certification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AAFCO (Association of American Feed Control Officials) certification means the food has been tested and proven to provide complete nutrition for your dog\'s life stage. Look for AAFCO statements on the label.',
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
      { '@type': 'ListItem', position: 3, name: 'Best Dog Food', item: 'https://nearbypetcare.com/pet-products/best-dog-food' },
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
            { name: 'Best Dog Food', href: '/pet-products/best-dog-food' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🍖</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Reviews</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🍖</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Dog Food: Reviews & Buying Guide
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Finding the right dog food can feel like navigating a maze. With countless brands, formulas, and marketing claims, how do you know what's truly best for your furry friend? We've done the research so you don't have to.
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
              Your dog's food is more than just fuel—it's the foundation of their health, energy, and longevity. The right nutrition can help your dog maintain a healthy weight, support their immune system, keep their coat shiny, and even improve their mood. But with so many options lining the shelves, choosing can feel overwhelming. That's where we come in.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We've spent countless hours researching ingredients, analyzing nutritional profiles, reading customer reviews, and consulting with veterinarians to bring you honest, practical guidance. Whether you're feeding a rambunctious puppy, an active adult, or a wise senior, this guide will help you understand what really matters when it comes to your dog's nutrition.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What Makes Great Dog Food?</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Great dog food isn't about fancy packaging or celebrity endorsements. It's about what's inside the bag. Here's what truly matters when evaluating dog food:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Quality Protein Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dogs are natural carnivores, and protein should be the star of their diet. Look for named protein sources like "chicken," "beef," "salmon," or "lamb" as the first ingredient—not vague terms like "meat meal" or "animal by-products." High-quality protein helps build strong muscles, supports healthy skin and coat, and provides essential amino acids your dog can't produce on their own.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The protein content should match your dog's lifestyle. Active dogs and working breeds typically need higher protein (25-30%), while less active dogs or seniors might do well with moderate levels (18-25%). Puppies need extra protein for growth, usually around 22-32% depending on their breed size.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Complete and Balanced Nutrition</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your dog needs more than just protein. They require a carefully balanced mix of fats, carbohydrates, vitamins, and minerals. Look for foods that meet AAFCO (Association of American Feed Control Officials) standards, which means they've been tested and proven to provide complete nutrition for your dog's life stage.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The label should specify whether the food is appropriate for "all life stages," "puppies," "adults," or "seniors." This matters because puppies need different nutrient ratios than adult dogs, and senior dogs often benefit from adjusted protein and calorie levels.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Natural, Recognizable Ingredients</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you read the ingredient list, you should recognize most of what's there. Whole foods like sweet potatoes, brown rice, carrots, and blueberries are great signs. Be wary of long lists filled with chemical-sounding names, artificial colors, and preservatives like BHA, BHT, or ethoxyquin.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Natural preservatives like vitamin E (tocopherols) and vitamin C are much better choices. They might make the food's shelf life slightly shorter, but they're far safer for your dog's long-term health.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Appropriate for Your Dog's Specific Needs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              There's no one-size-fits-all dog food. A Great Dane puppy has very different nutritional needs than a Chihuahua senior. Consider your dog's:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Age:</strong> Puppies need more calories and nutrients for growth. Seniors often need fewer calories but may benefit from joint-supporting ingredients like glucosamine.</li>
              <li><strong>Size:</strong> Large breed puppies need controlled calcium and phosphorus to prevent bone issues. Small breeds often need smaller kibble sizes and higher calorie density.</li>
              <li><strong>Activity level:</strong> A working dog or highly active pet needs more calories and protein than a couch potato.</li>
              <li><strong>Health conditions:</strong> Dogs with allergies, kidney issues, diabetes, or other health problems may need specialized formulas.</li>
              <li><strong>Breed:</strong> Some breeds are prone to specific issues. For example, breeds prone to bloat might benefit from smaller, more frequent meals.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Red Flags to Watch Out For</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Not all dog foods are created equal, and some should be avoided entirely. Here are warning signs that a food might not be the best choice:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Generic meat sources:</strong> Terms like "meat meal," "animal by-products," or "poultry by-product meal" are red flags. You want to know exactly what your dog is eating.</li>
              <li><strong>Artificial colors:</strong> Dogs don't care if their food is red, yellow, or blue. Artificial colors serve no nutritional purpose and may cause allergic reactions in sensitive dogs.</li>
              <li><strong>Excessive fillers:</strong> While some grains and carbohydrates are fine, if corn, wheat, or soy are among the first few ingredients, the food might be more filler than nutrition.</li>
              <li><strong>No AAFCO statement:</strong> If the food doesn't meet AAFCO standards, it might not provide complete nutrition.</li>
              <li><strong>Unrealistic claims:</strong> Be skeptical of foods claiming to cure diseases or make dramatic health promises. Good nutrition supports health, but it's not a magic cure.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Understanding Different Types of Dog Food</h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dry Food (Kibble)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dry food is convenient, cost-effective, and helps keep teeth clean through the mechanical action of chewing. It's shelf-stable and easy to store. However, it's often highly processed and may contain more preservatives than other options. Look for high-quality kibble with named protein sources and natural preservatives.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Wet Food (Canned)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Wet food is typically more palatable and has higher moisture content, which is great for dogs who don't drink enough water. It's often less processed than kibble. However, it's more expensive, less convenient to store, and doesn't provide the dental benefits of dry food. Many owners use a combination of both.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Fresh or Raw Food</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh and raw diets are gaining popularity, and many dogs thrive on them. These diets often use whole, minimally processed ingredients. However, they require careful handling to prevent bacterial contamination, are more expensive, and need proper nutritional balancing. If you're considering raw food, consult with a veterinary nutritionist to ensure it's complete and balanced.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Transition Your Dog to New Food</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Switching your dog's food suddenly can cause digestive upset. Here's how to do it safely:
            </p>

            <ol className="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Days 1-2:</strong> Mix 25% new food with 75% old food</li>
              <li><strong>Days 3-4:</strong> Mix 50% new food with 50% old food</li>
              <li><strong>Days 5-6:</strong> Mix 75% new food with 25% old food</li>
              <li><strong>Day 7+:</strong> Feed 100% new food</li>
            </ol>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Watch for signs of digestive upset like vomiting, diarrhea, or loss of appetite. If these occur, slow down the transition or consult your veterinarian. Some dogs with sensitive stomachs may need an even slower transition over 10-14 days.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong className="text-blue-700 dark:text-blue-300">Important Note:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Always consult with your veterinarian before making significant changes to your dog's diet, especially if they have health conditions, food allergies, or special dietary needs. Your vet knows your dog's specific health history and can recommend the best approach for their individual situation.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Choosing the right dog food is one of the most important decisions you'll make for your pet's health. While it can feel overwhelming at first, understanding what to look for—and what to avoid—makes the process much easier. Remember, the best food for your dog is one that meets their specific needs, uses high-quality ingredients, and keeps them healthy and happy.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Pay attention to how your dog responds to their food. A shiny coat, healthy weight, good energy levels, and regular, well-formed stools are all signs that you've found a good match. If you notice changes in your dog's health, energy, or behavior after switching foods, don't hesitate to consult your veterinarian.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Your dog depends on you to make the best choices for their nutrition. With the right information and a bit of research, you can feel confident that you're providing them with food that truly supports their wellbeing.
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


