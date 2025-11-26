import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Pet Food Ingredients Guide - What to Look For | Nearby Pet Care',
  description: 'Complete guide to understanding pet food ingredients. Learn what to look for and avoid when choosing pet food for optimal health and nutrition.',
  keywords: ['pet food ingredients', 'dog food ingredients', 'cat food ingredients', 'pet food quality', 'pet nutrition ingredients', 'AAFCO pet food', 'pet food labels', 'reading pet food labels'],
  pathname: '/pet-nutrition/best-pet-food-ingredients-guide',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Best Pet Food Ingredients Guide - Complete Guide to Pet Food Labels',
    type: 'image/png',
  }],
});

export default function BestPetFoodIngredientsGuidePage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Best Pet Food Ingredients Guide', item: 'https://nearbypetcare.com/pet-nutrition/best-pet-food-ingredients-guide' },
    ],
  };

  // Article Schema with E-E-A-T
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Pet Food Ingredients Guide - What to Look For',
    description: 'Complete guide to understanding pet food ingredients. Learn what to look for and avoid when choosing pet food for optimal health and nutrition.',
    url: 'https://nearbypetcare.com/pet-nutrition/best-pet-food-ingredients-guide',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/best-pet-food-ingredients-guide',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'pet food ingredients, dog food, cat food, AAFCO, pet food labels, pet nutrition',
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What ingredients should I look for in pet food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for named protein sources like chicken, beef, fish, or lamb as the first ingredient. Avoid generic terms like "meat meal" or "animal by-products". Choose foods with whole grains, natural preservatives, and no artificial colors or flavors.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ingredients should I avoid in pet food?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Avoid artificial colors and flavors, BHA/BHT preservatives, generic meat by-products, excessive fillers like corn and wheat, and added sugars. Look for named, specific ingredients rather than vague terms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I read pet food labels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ingredients are listed by weight, so the first few ingredients make up the majority of the food. Look for whole foods and named protein sources at the top. Check for AAFCO nutritional adequacy statements and ensure the food meets your pet\'s life stage requirements.',
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
            { name: 'Best Pet Food Ingredients Guide', href: '/pet-nutrition/best-pet-food-ingredients-guide' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🥘</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Ingredient Analysis</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🥘</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Pet Food Ingredients Guide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn to read and understand pet food labels. Discover what ingredients to look for and avoid when choosing pet food for optimal health and nutrition.
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
              Standing in the pet food aisle can feel overwhelming. Rows and rows of bags and cans, each promising to be the best choice for your pet. But how do you actually know what's good? The answer lies in understanding what's inside—the ingredients that make up your pet's food. Learning to read and interpret pet food labels is like learning a new language, but once you understand it, you'll be able to make confident choices that truly support your pet's health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Ingredients Matter</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The ingredients in your pet's food directly impact their health, energy levels, digestion, and even their coat quality. High-quality ingredients provide better nutrition, are more digestible, and can help prevent health issues. Lower-quality ingredients might fill your pet up, but they won't nourish them properly. Think of it this way: you wouldn't fuel a race car with low-grade gasoline and expect peak performance. Your pet deserves the same consideration.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Read Pet Food Labels</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pet food labels can be confusing, but there's a method to the madness. Ingredients are listed in descending order by weight—meaning the first ingredient makes up the largest portion of the food, the second ingredient is the next largest, and so on. This is important because it tells you what your pet is primarily eating.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, there's a catch: if a food lists "chicken" first and then has multiple grain ingredients (corn, wheat, rice), those grains might actually make up more of the food combined than the chicken does. This is called "ingredient splitting," and it's a common marketing tactic. Keep an eye out for this when comparing foods.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">High-Quality Protein Sources</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Protein should be the star of your pet's food, especially for dogs and cats who are natural carnivores. But not all protein is created equal. Here's what to look for:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Named Protein Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The best protein sources are specific and named. Look for ingredients like "chicken," "beef," "salmon," "lamb," "turkey," or "duck." These tell you exactly what your pet is eating. Named proteins are generally more digestible and provide better nutrition than vague alternatives.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Meal vs. Whole Meat</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You'll often see "chicken meal" or "salmon meal" in ingredient lists. This isn't necessarily bad—in fact, meal can be more concentrated in protein than whole meat because the water has been removed. "Chicken meal" means the chicken has been rendered (cooked to remove water and fat), leaving a protein-rich powder. What matters is that it's a named meal (like "chicken meal") rather than a generic one (like "meat meal" or "poultry meal").
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">What About By-Products?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By-products get a bad reputation, but the truth is more nuanced. Named by-products (like "chicken by-products") can actually be nutritious—they include organ meats, which are rich in vitamins and minerals. However, generic "meat by-products" or "animal by-products" are concerning because you don't know what they contain. When in doubt, look for named sources.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Carbohydrates and Grains</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Carbohydrates provide energy and fiber, but the type and quality matter. Here's what to know:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Whole Grains vs. Refined Grains</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Whole grains like brown rice, oats, and barley are generally better choices than refined grains like white rice or corn meal. Whole grains retain more nutrients and fiber. However, some pets do better on grain-free diets, especially if they have grain sensitivities. The key is finding what works for your individual pet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Grain-Free Alternatives</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you're looking at grain-free options, you'll see ingredients like sweet potatoes, peas, lentils, and chickpeas. These can be excellent sources of carbohydrates and fiber. However, be aware that some grain-free diets have been linked to heart issues in dogs (though research is ongoing). If you choose grain-free, discuss it with your veterinarian.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fillers to Watch Out For</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some ingredients are used primarily as cheap fillers with little nutritional value. Corn gluten meal, wheat middlings, and soybean hulls are examples. While small amounts might be fine, if these appear high on the ingredient list, the food might be prioritizing cost over nutrition.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Fats and Oils</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fats are essential for your pet's health, providing energy and supporting skin, coat, and brain function. Look for named fat sources:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Chicken fat</strong> or <strong>salmon oil</strong> - excellent sources of omega-6 and omega-3 fatty acids</li>
              <li><strong>Flaxseed</strong> or <strong>flaxseed oil</strong> - good plant-based source of omega-3s</li>
              <li><strong>Sunflower oil</strong> - provides omega-6 fatty acids</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Avoid generic terms like "animal fat" when possible, as you can't be sure of the source or quality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ingredients to Approach with Caution</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While not all of these are necessarily harmful, they're worth questioning:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Artificial Colors</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Artificial colors like Red 40, Yellow 5, and Blue 2 serve no nutritional purpose—they're purely cosmetic, meant to make the food look appealing to humans (pets don't care what color their food is). Some studies suggest these may have negative health effects. There's no reason your pet needs artificially colored food.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Artificial Flavors</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Similar to colors, artificial flavors are added to make food more palatable, often to mask lower-quality ingredients. If a food needs artificial flavoring to be appealing, it might not be the best choice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Chemical Preservatives</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Preservatives are necessary to keep food fresh, but some are better than others. BHA (butylated hydroxyanisole), BHT (butylated hydroxytoluene), and ethoxyquin are synthetic preservatives that some pet owners prefer to avoid. Natural preservatives like mixed tocopherols (vitamin E), rosemary extract, and citric acid are generally considered safer alternatives.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Added Sugars and Sweeteners</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sugar, corn syrup, and other sweeteners are sometimes added to pet food to make it more palatable. While small amounts might not be harmful, they add unnecessary calories and can contribute to weight gain and dental issues. There's no nutritional reason for added sugars in pet food.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Generic Meat Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Vague terms like "meat meal," "poultry by-products," or "animal digest" don't tell you what your pet is actually eating. These could come from any number of sources, and you have no way to assess their quality. Named sources are always preferable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What About "Natural" and "Organic"?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These terms can be confusing. "Natural" in pet food means the ingredients come from plant, animal, or mined sources (not synthetic), but it doesn't guarantee quality. "Organic" is more strictly regulated and means the ingredients were produced without synthetic pesticides, fertilizers, or genetic modification. Both can be good choices, but don't assume they're automatically better—still read the ingredient list.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Putting It All Together: What to Look For</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When evaluating a pet food, here's your checklist:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>A named protein source (or named protein meal) as the first ingredient</li>
              <li>Whole, recognizable ingredients rather than vague terms</li>
              <li>Appropriate for your pet's life stage (puppy, adult, senior)</li>
              <li>Meets AAFCO nutritional standards</li>
              <li>No artificial colors or unnecessary additives</li>
              <li>Natural preservatives when possible</li>
              <li>No added sugars or sweeteners</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Remember: Context Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While ingredient quality is important, it's not the only factor. A food with perfect ingredients won't help your pet if they won't eat it, or if it doesn't meet their specific nutritional needs. Consider your pet's preferences, any health conditions they have, and your budget. Sometimes a food with slightly less "premium" ingredients that your pet loves and thrives on is better than the "perfect" food they refuse to eat.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The best food for your pet is one that provides balanced nutrition, uses quality ingredients, and keeps them healthy and happy. Use this guide as a starting point, but remember that every pet is different. What works for one might not work for another, and that's okay. The goal is finding what works best for your unique furry friend.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/pet-nutrition"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
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

