import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Nutrition Diet Plan - Complete Guide',
  description:
    "Learn how to create a comprehensive nutrition plan tailored to your pet's specific needs, age, breed, and lifestyle. Expert guidance on pet diet planning with AAFCO standards and veterinary recommendations.",
  keywords: [
    'pet diet plan',
    'pet nutrition plan',
    'dog diet plan',
    'cat diet plan',
    'pet meal planning',
    'pet nutrition guide',
    'AAFCO pet food',
    'pet nutrition requirements',
    'custom pet diet',
  ],
  pathname: '/pet-nutrition/pet-nutrition-diet-plan',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Nutrition Diet Plan Guide - Complete Guide to Creating a Pet Diet Plan',
      type: 'image/png',
    },
  ],
});

export default function PetNutritionDietPlanPage() {
  const currentDate = new Date().toISOString();
  const currentDateShort = currentDate.split('T')[0];
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Pet Nutrition Diet Plan', item: 'https://nearbypetcare.com/pet-nutrition/pet-nutrition-diet-plan' },
    ],
  };

  // Enhanced Article Schema with E-E-A-T
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Nutrition Diet Plan - Complete Guide',
    description: 'Learn how to create a comprehensive nutrition plan tailored to your pet\'s specific needs, age, breed, and lifestyle. Expert guidance on pet diet planning.',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-nutrition-diet-plan',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/pet-nutrition-diet-plan',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'pet nutrition, diet plan, pet food, dog nutrition, cat nutrition, AAFCO, pet meal planning',
    about: {
      '@type': 'Thing',
      name: 'Pet Nutrition',
      description: 'Comprehensive guide to creating nutrition plans for pets',
    },
  };

  // HowTo Schema for the guide
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Create a Pet Nutrition Diet Plan',
    description: 'Step-by-step guide to creating a comprehensive nutrition plan for your pet',
    image: 'https://nearbypetcare.com/og-image.png',
    totalTime: 'PT2H',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Assess Your Pet\'s Current State',
        text: 'Start by taking an honest look at where your pet is right now. What\'s their body condition? Can you easily feel their ribs, or is there a thick layer of fat?',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Calculate Caloric Needs',
        text: 'Your pet\'s daily calorie needs depend on their ideal weight (not current weight if they\'re overweight), activity level, and life stage.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Choose the Right Food',
        text: 'Look for foods that are appropriate for your pet\'s life stage, made with quality ingredients, and formulated to meet AAFCO standards.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Establish a Feeding Schedule',
        text: 'Consistency matters. Most adult dogs do well with two meals per day, while cats might prefer multiple smaller meals.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Monitor and Adjust',
        text: 'Watch how your pet responds. Are they maintaining a healthy weight? Do they have good energy? Is their coat shiny?',
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
      {/* Structured Data - HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            { name: 'Pet Nutrition Diet Plan', href: '/pet-nutrition/pet-nutrition-diet-plan' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">📋</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Diet Planning</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">📋</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Nutrition Diet Plan
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Create a comprehensive nutrition plan tailored to your pet's specific needs, age, breed, and lifestyle. Learn how to develop a diet plan that supports your pet's health and wellbeing.
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
              Just like us, our pets thrive when they eat well. But what does "eating well" actually mean for your furry friend? It's not just about filling their bowl—it's about crafting a nutrition plan that supports their energy, keeps their coat shiny, and helps them live their longest, happiest life. Whether you're welcoming a new puppy or helping your senior cat maintain their health, this guide will walk you through creating a diet plan that truly fits your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Your Pet's Diet Plan Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Think of your pet's diet as the foundation of their health. When done right, proper nutrition can prevent countless health issues down the road—from obesity and diabetes to joint problems and skin conditions. But here's the thing: there's no one-size-fits-all solution. Your neighbor's dog might thrive on a certain food that makes your dog sluggish. That's because every pet is beautifully unique, with their own metabolism, preferences, and needs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A well-designed diet plan considers your pet's current stage of life, their activity level, any health concerns they might have, and even their breed characteristics. It's about finding that sweet spot where they're getting everything they need without overdoing it—or missing something important.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Your Pet's Unique Nutritional Needs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before diving into specific foods and portions, let's talk about what makes your pet tick nutritionally. Several key factors shape their dietary requirements:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Life Stage</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Puppies and kittens are like little athletes—they're growing rapidly and need more calories, protein, and certain nutrients to support that growth. Adult pets need maintenance nutrition to keep them healthy and active. Senior pets often benefit from adjusted protein levels, joint-supporting nutrients, and sometimes fewer calories if they've slowed down. Pregnant or nursing pets have dramatically increased needs to support their babies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Size and Breed</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Great Dane and a Chihuahua might both be dogs, but their nutritional needs couldn't be more different. Large breed puppies need carefully controlled growth to prevent joint issues, while small breeds often need more calorie-dense food because they burn energy quickly. Some breeds are prone to specific health issues that can be managed through diet—like Dalmatians and urinary stones, or certain breeds with sensitive stomachs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Activity Level</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Is your dog a couch potato who's happiest napping, or do they spend hours running at the dog park? Does your cat spend their days hunting toys and climbing cat trees, or are they more of a window-watcher? Active pets need more fuel, while less active pets need fewer calories to prevent weight gain. It's that simple—but it's also easy to overestimate or underestimate activity levels.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Health Status</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pets with health conditions often need specialized nutrition. Kidney disease, diabetes, allergies, arthritis, and digestive issues all benefit from targeted dietary approaches. Even seemingly healthy pets might have sensitivities or predispositions that affect what they should eat.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Building Blocks of a Balanced Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every pet's diet needs to include the right balance of essential nutrients. Here's what each component does and why it matters:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Protein: The Foundation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Protein isn't just important—it's essential. It builds and repairs muscles, supports the immune system, and provides energy. But not all protein is created equal. Look for high-quality, named protein sources (like "chicken" or "salmon" rather than vague terms like "meat meal"). The quality and digestibility of the protein matter just as much as the amount.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fats: More Than Just Calories</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fats often get a bad reputation, but they're crucial for your pet. They provide concentrated energy, help absorb certain vitamins, keep skin and coat healthy, and support brain function. Essential fatty acids like omega-3 and omega-6 can't be made by the body, so they must come from the diet. The right balance is key—too little and your pet's coat might look dull; too much and they'll pack on pounds.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Carbohydrates: Energy and Fiber</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While pets don't technically need carbohydrates the way humans do, they can be a valuable source of energy and fiber. Good carbohydrates like sweet potatoes, brown rice, and oats provide steady energy and help with digestion. Fiber is particularly important for digestive health and can help pets feel full, which is useful for weight management.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Vitamins and Minerals: The Supporting Cast</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These micronutrients might be needed in small amounts, but they play huge roles. Calcium and phosphorus support strong bones and teeth. B vitamins help with energy metabolism. Vitamin E acts as an antioxidant. The list goes on. A well-formulated commercial pet food should include all necessary vitamins and minerals, but homemade diets often need supplementation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Water: The Most Important Nutrient</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              It's easy to forget about water, but it's the most critical nutrient of all. Pets need constant access to fresh, clean water. Some pets get additional hydration from wet food, which can be especially helpful for cats who naturally have low thirst drives. Dehydration can happen quickly and be dangerous, so always ensure your pet has water available.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Creating Your Pet's Personalized Diet Plan</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Now that you understand the basics, let's talk about putting it all together. Creating a diet plan isn't a one-time task—it's an ongoing process that evolves as your pet's needs change.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 1: Assess Your Pet's Current State</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Start by taking an honest look at where your pet is right now. What's their body condition? Can you easily feel their ribs, or is there a thick layer of fat? Do they have energy, or do they seem sluggish? Are there any health concerns? Your veterinarian can help with a body condition score, which is a more objective way to assess whether your pet is at a healthy weight.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 2: Calculate Caloric Needs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your pet's daily calorie needs depend on their ideal weight (not current weight if they're overweight), activity level, and life stage. There are formulas and calculators available, but remember these are starting points. Your pet might need more or less based on their individual metabolism. Start with the calculated amount, then adjust based on whether they're maintaining, gaining, or losing weight appropriately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 3: Choose the Right Food</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With so many pet food options available, choosing can feel overwhelming. Look for foods that are appropriate for your pet's life stage, made with quality ingredients, and formulated to meet AAFCO (Association of American Feed Control Officials) standards. Consider your pet's preferences too—there's no point in buying the "perfect" food if your pet won't eat it. If your pet has specific health needs, your vet might recommend a prescription or therapeutic diet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 4: Establish a Feeding Schedule</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Consistency matters. Most adult dogs do well with two meals per day, while cats might prefer multiple smaller meals. Puppies and kittens need more frequent feedings. Stick to a schedule—it helps with digestion, prevents overeating, and makes it easier to monitor your pet's appetite (which is an important health indicator).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 5: Monitor and Adjust</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your pet's diet plan isn't set in stone. Watch how they respond. Are they maintaining a healthy weight? Do they have good energy? Is their coat shiny? Are their stools normal? If something seems off, it might be time to adjust. Remember, changes should be gradual—sudden diet switches can upset your pet's stomach.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some situations require extra attention when planning your pet's diet:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Pets with Health Conditions</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet has a medical condition, their diet becomes part of their treatment plan. Kidney disease, diabetes, food allergies, and many other conditions benefit from specific nutritional approaches. Your veterinarian can guide you to the right food or help you formulate a homemade diet that meets your pet's needs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Homemade Diets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Making your pet's food at home can be rewarding, but it's also challenging to get right. Homemade diets often lack essential nutrients unless carefully formulated. If you're interested in going this route, work with a veterinary nutritionist to create a balanced recipe. Don't rely on recipes from the internet—many are nutritionally incomplete.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Treats and Extras</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Those little extras add up. Treats, table scraps, and even dental chews contribute calories. A good rule of thumb is to keep treats to 10% or less of your pet's daily calories. Choose healthy options when possible, and remember that the best "treat" might be extra playtime or attention rather than food.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> While this guide provides a solid foundation, every pet is unique. Before making significant changes to your pet's diet—especially if they have health conditions, are very young, very old, or pregnant—have a conversation with your veterinarian. They can help you create a plan that's perfectly tailored to your pet's individual needs and ensure you're not missing anything important.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Putting It All Together</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Creating a nutrition plan for your pet might seem complex at first, but it boils down to understanding your pet's needs and providing balanced nutrition that supports their health. Start with the basics, make adjustments as needed, and don't hesitate to seek professional guidance. Your pet's health and happiness are worth the effort, and with the right approach, you'll find a diet plan that works beautifully for both of you.
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

