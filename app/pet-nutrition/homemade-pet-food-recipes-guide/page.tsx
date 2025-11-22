import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';

export const metadata: Metadata = {
  title: 'Homemade Pet Food Recipes - Safe & Nutritious | Nearby Pet Care',
  description: 'Safe and nutritious homemade pet food recipes with proper nutritional guidelines. Learn how to prepare balanced meals for your pets at home. Veterinary nutritionist approved recipes.',
  keywords: ['homemade pet food', 'dog food recipes', 'cat food recipes', 'homemade pet meals', 'pet food recipes', 'veterinary nutrition', 'balanced pet diet'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Homemade Pet Food Recipes - Safe & Nutritious | Nearby Pet Care',
    description: 'Safe and nutritious homemade pet food recipes with proper nutritional guidelines.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
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
        alt: 'Homemade Pet Food Recipes Guide - Safe and Nutritious Recipes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homemade Pet Food Recipes - Safe & Nutritious | Nearby Pet Care',
    description: 'Safe and nutritious homemade pet food recipes with proper nutritional guidelines.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
      'en-GB': 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
      'en-CA': 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
      'en-AU': 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
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
    'article:tag': 'homemade pet food, pet food recipes, veterinary nutrition',
  },
};

export default function HomemadePetFoodRecipesPage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Homemade Pet Food Recipes', item: 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Homemade Pet Food Recipes - Safe & Nutritious',
    description: 'Safe and nutritious homemade pet food recipes with proper nutritional guidelines. Learn how to prepare balanced meals for your pets at home.',
    url: 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/homemade-pet-food-recipes-guide',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'homemade pet food, pet food recipes, veterinary nutrition, balanced pet diet',
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
            { name: 'Homemade Pet Food Recipes', href: '/pet-nutrition/homemade-pet-food-recipes-guide' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">👨‍🍳</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Homemade Recipes</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">👨‍🍳</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Homemade Pet Food Recipes
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn how to prepare safe and nutritious homemade pet food with proper nutritional guidelines. Create balanced meals for your pets at home.
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
              There's something deeply satisfying about preparing food for your pet with your own hands. You know exactly what's going into their bowl—fresh, whole ingredients you've chosen yourself. Many pet owners are drawn to homemade pet food for this reason, wanting to give their furry friends the same care and attention they put into their own meals. But here's the thing: making nutritionally complete pet food is more complex than it might seem. This guide will help you understand what it takes to create balanced, healthy homemade meals that truly nourish your pet.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Critical Warning:</strong> Homemade pet food can be dangerous if not properly balanced. Many well-intentioned recipes found online are nutritionally incomplete and can lead to serious health problems over time. Always work with a veterinarian or board-certified veterinary nutritionist to create recipes that meet your pet's specific needs. This is not optional—it's essential for your pet's health.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Consider Homemade Pet Food?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              There are several compelling reasons why pet owners choose to make their pet's food at home. For pets with severe food allergies, homemade food allows complete control over every ingredient. Some pets have medical conditions that benefit from very specific nutritional profiles that are easier to achieve with homemade meals. And many owners simply feel more connected to their pet's care when they're involved in meal preparation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, it's important to be realistic about the commitment. Making homemade pet food requires time, planning, proper storage, and most importantly, nutritional expertise. It's not something to take on casually or without proper guidance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Challenge: Nutritional Balance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is where many homemade diets fail. Your pet needs more than just meat and vegetables—they need a precise balance of protein, fats, carbohydrates, vitamins, and minerals. Too much or too little of certain nutrients can cause serious health problems that might not show up immediately but can have devastating long-term effects.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For example, a diet that's too high in certain organ meats can cause vitamin A toxicity. Too little calcium can lead to bone problems, especially in growing puppies. An imbalance of calcium and phosphorus can cause skeletal issues. The list goes on. This is why "just feeding them what you eat" or following a random internet recipe is so risky.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Nutrients Your Pet Needs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before you start cooking, you need to understand what your pet actually needs. Dogs and cats have different requirements, and these change based on age, size, activity level, and health status.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Protein</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              High-quality protein should make up a significant portion of your pet's diet. For dogs, this might be 18-25% of the diet (on a dry matter basis), while cats need even more—around 26-30%. Good protein sources include lean meats like chicken, turkey, beef, and fish. Organ meats like liver and kidney are nutrient-dense but should be used in moderation (typically 5-10% of the protein portion).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fats provide energy and essential fatty acids. Dogs typically need about 5-15% fat, while cats need more—around 9-15%. Include sources of omega-3 fatty acids like fish oil or flaxseed oil. The fat content in meat can vary, so you may need to add additional fat sources or use leaner meats depending on your recipe.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Carbohydrates</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While not strictly necessary, carbohydrates can provide energy and fiber. Good sources include brown rice, sweet potatoes, oats, and certain vegetables. Dogs can handle more carbohydrates than cats, who are true carnivores. Typically, carbohydrates might make up 30-50% of a dog's diet but less for cats.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Calcium and Phosphorus</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is where many homemade diets go wrong. Meat is high in phosphorus but low in calcium. Without proper calcium supplementation, your pet can develop serious bone and metabolic problems. The calcium-to-phosphorus ratio should be approximately 1.2:1 to 2:1. This usually requires adding a calcium source like calcium carbonate or bone meal powder. Never guess on this—work with a nutritionist to get it right.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Vitamins and Minerals</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your pet needs a full spectrum of vitamins and minerals in the right amounts. This typically requires supplementation, as it's nearly impossible to get everything right from whole foods alone. A veterinary nutritionist can recommend appropriate supplements and dosages based on your specific recipe.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Working with a Veterinary Nutritionist</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This cannot be emphasized enough: if you want to feed homemade food, you need professional help. A board-certified veterinary nutritionist will:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Assess your pet's specific nutritional needs based on their age, breed, size, activity level, and health status</li>
              <li>Create a balanced recipe that meets all nutritional requirements</li>
              <li>Recommend appropriate supplements and dosages</li>
              <li>Help you adjust the recipe as your pet's needs change</li>
              <li>Monitor your pet's health to ensure the diet is working</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Yes, this costs money. But it's far less expensive than treating the health problems that can arise from an unbalanced diet. Think of it as an investment in your pet's long-term health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Food Safety Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When preparing food at home, food safety becomes your responsibility. Follow these guidelines:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Handling Raw Meat</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you're including raw meat in your pet's diet, handle it with the same care you would for human food. Use separate cutting boards and utensils, wash your hands thoroughly, and clean all surfaces. Be aware that raw meat can carry bacteria like Salmonella and E. coli, which can make both you and your pet sick.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Cooking Temperatures</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you're cooking the food, ensure meats reach safe internal temperatures (165°F for poultry, 160°F for ground meats, 145°F for whole cuts of beef, pork, or fish). This kills harmful bacteria while preserving nutrients as much as possible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Storage</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Homemade pet food doesn't have the preservatives of commercial food, so it spoils faster. Store prepared food in the refrigerator for no more than 3-5 days, or freeze it in portion-sized containers. Always thaw frozen food in the refrigerator, not on the counter.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Sample Approach: What a Balanced Recipe Looks Like</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While we can't provide specific recipes here (that requires professional formulation), here's what a balanced homemade diet typically includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>A high-quality protein source (chicken, turkey, beef, fish, etc.)</li>
              <li>Organ meats in appropriate amounts (liver, kidney, heart)</li>
              <li>Carbohydrate sources (brown rice, sweet potato, oats) if appropriate for your pet</li>
              <li>Vegetables for fiber and micronutrients (carrots, green beans, spinach, etc.)</li>
              <li>Fat sources (the fat from meat, plus additional oils if needed)</li>
              <li>Calcium supplementation (critical!)</li>
              <li>Vitamin and mineral supplements as recommended by your nutritionist</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The exact proportions depend entirely on your pet's individual needs, which is why professional guidance is essential.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Mistakes to Avoid</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many well-meaning pet owners make these mistakes when starting homemade diets:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Following internet recipes blindly</strong> - Most are not nutritionally complete</li>
              <li><strong>Skipping calcium supplementation</strong> - This is one of the most dangerous mistakes</li>
              <li><strong>Feeding only meat</strong> - This creates severe nutritional imbalances</li>
              <li><strong>Not accounting for life stage</strong> - Puppies, adults, and seniors have different needs</li>
              <li><strong>Forgetting about portion control</strong> - Homemade food still has calories</li>
              <li><strong>Not monitoring your pet's health</strong> - Regular check-ups are crucial</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Is Homemade Food Right for You?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Homemade pet food can be wonderful, but it's not for everyone. Consider whether you have:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>The time to prepare food regularly and safely</li>
              <li>The budget for quality ingredients and professional nutritional guidance</li>
              <li>The commitment to follow recipes precisely and monitor your pet's health</li>
              <li>A pet with specific needs that benefit from homemade food</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you're unsure, remember that high-quality commercial pet foods are formulated by nutritionists and tested to ensure they're complete and balanced. There's no shame in choosing commercial food—many pets thrive on it. Homemade food is a choice, not a requirement for good pet care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Getting Started</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you've decided that homemade food is right for you and your pet, here's how to begin:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Schedule a consultation with your veterinarian to discuss your plans</li>
              <li>Get a referral to a board-certified veterinary nutritionist</li>
              <li>Have your pet evaluated (health check, body condition score, any necessary blood work)</li>
              <li>Work with the nutritionist to create a recipe tailored to your pet</li>
              <li>Start slowly, mixing homemade food with your pet's current food</li>
              <li>Monitor your pet closely and schedule regular follow-ups</li>
            </ol>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Final Reminder:</strong> Your pet's health is too important to risk with an unbalanced diet. If you're committed to homemade food, commit to doing it right. Work with professionals, follow their guidance precisely, and monitor your pet's health regularly. The goal is to nourish your pet, not to experiment with their wellbeing.
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

