import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Feeding Portion Calculator | Nearby Pet Care',
  description: 'Calculate the right portion sizes for your pet based on weight, age, activity level, and health status. Ensure optimal nutrition and weight management.',
  keywords: ['pet portion calculator', 'dog food calculator', 'cat food calculator', 'pet feeding calculator', 'pet portion size', 'how much to feed dog', 'how much to feed cat', 'pet calorie calculator'],
  pathname: '/pet-nutrition/pet-feeding-portion-size-calculator',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Feeding Portion Size Calculator Guide',
    type: 'image/png',
  }],
});

export default function PetFeedingPortionCalculatorPage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Pet Feeding Portion Size Calculator', item: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-portion-size-calculator' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Feeding Portion Size Calculator',
    description: 'Calculate the right portion sizes for your pet based on weight, age, activity level, and health status. Ensure optimal nutrition and weight management.',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-portion-size-calculator',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/pet-feeding-portion-size-calculator',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'pet portion calculator, pet feeding, portion size, pet calorie calculator',
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
            { name: 'Pet Feeding Portion Size Calculator', href: '/pet-nutrition/pet-feeding-portion-size-calculator' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚖️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Portion Control</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">⚖️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Feeding Portion Size Calculator
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Calculate the right portion sizes for your pet based on weight, age, activity level, and health status. Ensure optimal nutrition and weight management.
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
              "How much should I feed my pet?" It's one of the most common questions pet owners ask, and for good reason. Getting portion sizes right is crucial—too little and your pet might not get the nutrition they need; too much and they'll gain weight, which can lead to serious health problems. But there's no one-size-fits-all answer. The right amount depends on your pet's size, age, activity level, metabolism, and the specific food you're feeding. This guide will help you understand how to determine the perfect portion size for your unique pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Portion Size Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Portion control is about more than just preventing obesity (though that's important enough on its own). The right amount of food ensures your pet gets all the nutrients they need without excess calories. It helps maintain stable energy levels, supports healthy digestion, and can even affect behavior. Pets who are overfed or underfed often show it in ways you might not expect—from lethargy and irritability to digestive issues and poor coat quality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Think of it this way: you wouldn't feed a marathon runner and a desk worker the same amount of food, even if they're the same size. Your pet's needs are just as individual.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding the Factors That Affect Portion Size</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Several key factors determine how much your pet should eat. Understanding these will help you make better decisions about portion sizes:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Ideal Weight vs. Current Weight</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is crucial: you should calculate portions based on your pet's ideal weight, not their current weight. If your pet is overweight, feeding them based on their current weight will just maintain that extra weight. Your veterinarian can help you determine your pet's ideal weight based on their breed, frame size, and body condition score.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Life Stage</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Growing puppies and kittens need significantly more calories per pound than adult pets—sometimes two to three times as much. They're building bones, muscles, and organs, which requires a lot of energy. Senior pets, on the other hand, often need fewer calories because their metabolism slows down and they're typically less active. Pregnant or nursing pets need dramatically increased calories to support their babies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Activity Level</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is where many owners underestimate or overestimate. A dog who goes on daily runs needs more food than a dog who mostly lounges around. A cat who spends hours playing and climbing needs more than a cat who prefers napping. Be honest about your pet's activity level—it makes a big difference in their caloric needs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Neutering Status</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spayed and neutered pets typically need about 20-30% fewer calories than intact pets. This is because the procedure can slow metabolism slightly, and neutered pets often become less active. Many owners don't adjust portions after their pet is spayed or neutered, which is why so many pets gain weight after the procedure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Breed and Size</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Small breed dogs and cats have faster metabolisms and need more calories per pound than large breeds. However, large breed dogs need careful portion control during growth to prevent rapid weight gain that can stress developing joints. Some breeds are also more prone to obesity and need stricter portion control.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Health Conditions</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Certain health conditions affect how much your pet should eat. Pets with diabetes, kidney disease, or other metabolic conditions often need carefully controlled portions. Some conditions require weight loss, while others might require maintaining or even gaining weight. Always follow your veterinarian's specific recommendations for pets with health issues.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Food Type and Calorie Density</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Not all pet foods are created equal when it comes to calories. A cup of one food might have 300 calories, while a cup of another might have 450 calories. Wet food typically has fewer calories per volume than dry food because of its water content. Always check the calorie content (usually listed as "kcal/cup" or "kcal/kg") on your pet food label, and adjust portions accordingly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Calculate Portion Size</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While there are formulas to calculate your pet's daily caloric needs, these are starting points. Your pet's individual metabolism might require adjustments. Here's a basic approach:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 1: Calculate Resting Energy Requirement (RER)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              RER is the number of calories your pet needs at rest. The formula is:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
              <p className="text-gray-700 dark:text-gray-300 font-mono">
                RER = 70 × (ideal weight in kg)^0.75
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Or for a simpler approximation: RER = 30 × (ideal weight in kg) + 70
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 2: Calculate Daily Energy Requirement (DER)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Multiply RER by a factor based on your pet's life stage and activity level:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Puppies (weaning to 4 months):</strong> RER × 3.0</li>
              <li><strong>Puppies (4 months to adult size):</strong> RER × 2.0</li>
              <li><strong>Adult, neutered, normal activity:</strong> RER × 1.6</li>
              <li><strong>Adult, intact, normal activity:</strong> RER × 1.8</li>
              <li><strong>Active/working dogs:</strong> RER × 2.0-5.0 (depending on activity)</li>
              <li><strong>Senior, less active:</strong> RER × 1.2-1.4</li>
              <li><strong>Weight loss:</strong> RER × 1.0 (or less, under vet supervision)</li>
              <li><strong>Weight gain:</strong> RER × 1.2-1.8 (under vet supervision)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 3: Convert Calories to Portion Size</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once you know your pet's daily calorie needs, divide that by the calories per cup (or can) of your specific food. For example, if your pet needs 800 calories per day and your food has 400 calories per cup, they need 2 cups per day.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Using Pet Food Feeding Guidelines</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most pet foods include feeding guidelines on the package. These can be helpful starting points, but keep in mind:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>They're based on average pets, and your pet might not be average</li>
              <li>They often overestimate needs (companies want you to use more food)</li>
              <li>They might not account for treats, which add calories</li>
              <li>They're based on current weight, not ideal weight</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use the guidelines as a starting point, but be prepared to adjust based on how your pet responds.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Monitoring and Adjusting</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The calculated portion size is just the beginning. You need to monitor your pet and adjust as needed:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Body Condition Scoring</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Learn to assess your pet's body condition. You should be able to feel their ribs easily (but not see them prominently), see a waist when looking from above, and see an abdominal tuck when looking from the side. If you can't feel ribs, your pet is likely overweight. If ribs are very prominent, they might be underweight.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Regular Weigh-Ins</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Weigh your pet regularly (weekly for puppies, monthly for adults) to track trends. Small changes are easier to correct than large ones. Keep a record so you can see patterns over time.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Adjust Gradually</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you need to change portion sizes, do it gradually. Sudden changes can upset your pet's stomach. Adjust by about 10% at a time, wait a week or two to see the effect, then adjust again if needed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Don't Forget About Treats</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Treats count! Many owners forget that treats, table scraps, dental chews, and even training treats add significant calories. A good rule of thumb is to keep treats to 10% or less of your pet's daily calories. If you're giving lots of treats, you need to reduce the main meal accordingly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Consider using part of your pet's daily food allowance as treats, or choose low-calorie options like small pieces of vegetables (carrots, green beans) for dogs or freeze-dried meat treats for cats.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Multiple Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have multiple pets, feed them separately to ensure each gets the right amount. Some pets are food thieves and will eat others' portions if given the chance. Separate feeding also lets you monitor each pet's appetite, which is an important health indicator.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Free-Feeding vs. Scheduled Meals</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Free-feeding (leaving food out all day) makes portion control nearly impossible and can lead to overeating. Scheduled meals are better for most pets, allowing you to control portions and monitor appetite. Some cats do okay with free-feeding, but many will overeat.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Changing Foods</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you switch foods, recalculate portions. Different foods have different calorie densities, so the same volume might provide very different amounts of calories. Don't assume one cup of the new food equals one cup of the old food.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> While these guidelines provide a good starting point, every pet is unique. Factors like individual metabolism, health conditions, and even stress can affect caloric needs. Always consult with your veterinarian for personalized recommendations, especially if your pet has health conditions, needs to gain or lose weight, or if you're unsure about the right portion size. Your vet can help you fine-tune portions to keep your pet at their ideal weight and health.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Putting It All Together</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Finding the right portion size is a process, not a one-time calculation. Start with the guidelines, monitor your pet's body condition and weight, and adjust as needed. Remember that your pet's needs will change over time—as they age, as their activity level changes, as seasons change. Stay observant, be willing to adjust, and don't hesitate to ask your veterinarian for help. The goal is keeping your pet healthy, happy, and at their ideal weight for their entire life.
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

