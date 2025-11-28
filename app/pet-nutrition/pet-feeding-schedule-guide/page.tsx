import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Feeding Schedule Guide | Nearby Pet Care',
  description: 'Learn about ideal feeding schedules for dogs and cats at different life stages. Understand how often to feed puppies, adult pets, and senior pets.',
  keywords: ['pet feeding schedule', 'dog feeding schedule', 'cat feeding schedule', 'how often to feed pets', 'pet meal timing', 'puppy feeding schedule', 'senior pet feeding'],
  pathname: '/pet-nutrition/pet-feeding-schedule-guide',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Feeding Schedule Guide - Ideal Feeding Times',
    type: 'image/png',
  }],
});

export default function PetFeedingSchedulePage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Pet Feeding Schedule Guide', item: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-schedule-guide' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Feeding Schedule Guide - Ideal Timings',
    description: 'Learn about ideal feeding schedules for dogs and cats at different life stages. Understand how often to feed puppies, adult pets, and senior pets.',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-feeding-schedule-guide',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/pet-feeding-schedule-guide',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'pet feeding schedule, meal timing, puppy feeding, senior pet feeding',
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
            { name: 'Pet Feeding Schedule Guide', href: '/pet-nutrition/pet-feeding-schedule-guide' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⏰</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Feeding Schedule</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">⏰</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Feeding Schedule Guide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn about ideal feeding schedules for dogs and cats at different life stages. Understand how often to feed puppies, adult pets, and senior pets.
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
              When it comes to feeding your pet, timing matters just as much as what you feed them. A consistent feeding schedule does more than just fill their bowl—it supports healthy digestion, helps with house training, prevents overeating, and even provides structure that can reduce anxiety. But what's the right schedule? Should you feed once a day or multiple times? Free-feed or scheduled meals? The answer depends on your pet's age, species, health, and lifestyle. This guide will help you create the perfect feeding schedule for your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Feeding Schedules Matter</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You might think that as long as your pet gets the right amount of food each day, timing doesn't matter. But feeding schedules offer several important benefits:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Better digestion:</strong> Regular meals help regulate the digestive system and can reduce digestive upset</li>
              <li><strong>House training:</strong> Scheduled meals mean predictable bathroom times, making house training much easier</li>
              <li><strong>Weight management:</strong> Scheduled meals help prevent overeating and make it easier to monitor appetite</li>
              <li><strong>Behavioral benefits:</strong> Routine provides security and can reduce anxiety in some pets</li>
              <li><strong>Health monitoring:</strong> When you feed on a schedule, you'll quickly notice if your pet loses their appetite—an important early warning sign of illness</li>
              <li><strong>Prevents food guarding:</strong> Pets who know when to expect food are less likely to guard it</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Puppy Feeding Schedules</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Puppies have small stomachs and high energy needs, so they need to eat more frequently than adult dogs. The schedule changes as they grow.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Very Young Puppies (8-12 weeks)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At this age, puppies should eat 4 meals per day. Space them roughly every 4-6 hours. This frequent feeding supports rapid growth and prevents blood sugar drops. Small breed puppies especially need frequent meals because they have faster metabolisms and can develop hypoglycemia if they go too long without food.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Growing Puppies (3-6 months)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can reduce to 3 meals per day at this stage. Space them throughout the day—morning, midday, and evening. Continue feeding puppy food formulated for growth.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Older Puppies (6-12 months)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most puppies can transition to 2 meals per day around 6 months, though small breeds might benefit from 3 meals until they're closer to a year old. You can also start transitioning to adult food during this period, but do it gradually and consult your veterinarian about timing—large breed puppies often need to stay on puppy food longer to support proper growth.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Adult Dog Feeding Schedules</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most adult dogs do best with 2 meals per day—one in the morning and one in the evening. This schedule:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Prevents hunger between meals</li>
              <li>Helps maintain stable energy levels</li>
              <li>Supports healthy digestion</li>
              <li>Makes it easier to monitor appetite</li>
              <li>Reduces the risk of bloat in large, deep-chested breeds (feeding multiple smaller meals is actually better for bloat-prone breeds)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">One Meal vs. Two Meals</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some owners feed their adult dogs once per day, and some dogs do fine with this. However, two meals are generally better because:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>It prevents long periods without food</li>
              <li>It reduces the risk of hunger-related behavior problems</li>
              <li>It's better for dogs prone to bloat (though multiple small meals are even better for these dogs)</li>
              <li>It helps maintain stable blood sugar</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you prefer one meal per day, discuss it with your veterinarian to ensure it's appropriate for your dog's breed, size, and health.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Large Breed Considerations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Large and giant breed dogs, especially those prone to bloat (like Great Danes, German Shepherds, and Boxers), often do better with 3 smaller meals per day rather than 1-2 large meals. This reduces the risk of gastric dilatation-volvulus (bloat), a life-threatening condition.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cat Feeding Schedules</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cats are natural grazers—in the wild, they eat multiple small meals throughout the day. However, free-feeding (leaving food out all day) can lead to overeating and obesity in many cats. The best approach depends on your cat's personality and your lifestyle.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Scheduled Meals (Recommended for Most Cats)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feeding 2-3 scheduled meals per day is generally best for most cats because it:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Helps prevent overeating and obesity</li>
              <li>Makes it easier to monitor appetite (important for early illness detection)</li>
              <li>Allows you to control portions precisely</li>
              <li>Works well with multiple cats (you can feed them separately)</li>
              <li>Supports weight loss if needed</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many cats adapt well to scheduled meals, especially if you establish the routine when they're young.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Free-Feeding</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some cats can free-feed without overeating, but many cannot. Free-feeding works best for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Very active cats who self-regulate well</li>
              <li>Underweight cats who need to gain weight</li>
              <li>Cats who become anxious without constant food access</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you free-feed, monitor your cat's weight closely. If they start gaining weight, switch to scheduled meals.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Multiple Small Meals</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you want to mimic natural grazing behavior while maintaining control, consider feeding 4-6 small meals per day. Automatic feeders can help with this if you're not home during the day.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Senior Pet Feeding Schedules</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As pets age, their needs change. Senior pets often benefit from adjustments to their feeding schedule:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Smaller, More Frequent Meals</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many senior pets do better with 3-4 smaller meals per day rather than 1-2 large meals. This can help with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Digestion (older pets may have slower or more sensitive digestive systems)</li>
              <li>Appetite (some seniors eat better when offered smaller amounts more frequently)</li>
              <li>Blood sugar stability</li>
              <li>Reducing the risk of bloat in large breed dogs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Special Considerations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Senior pets with health conditions may need specific feeding schedules. For example:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Diabetic pets need meals timed with insulin injections</li>
              <li>Pets with kidney disease may benefit from more frequent, smaller meals</li>
              <li>Pets on medications may need meals timed with medication administration</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Always follow your veterinarian's specific recommendations for senior pets with health conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Establishing and Maintaining a Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Creating a feeding schedule is one thing; sticking to it is another. Here's how to make it work:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Choose Consistent Times</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pick times that work for your schedule and stick to them. Consistency is key. If you feed at 7 AM and 6 PM on weekdays, try to maintain similar times on weekends. Pets thrive on routine.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Use Meal Times for Training</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Meal times are perfect opportunities for training. Have your pet sit or wait before you put the bowl down. This reinforces good behavior and makes meals more structured.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Don't Leave Food Out</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For scheduled meals, pick up the bowl after 15-20 minutes if your pet hasn't finished. This helps establish the schedule and prevents grazing. If your pet consistently doesn't finish meals, you might be feeding too much, or there could be a health issue—consult your veterinarian.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Account for Treats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Remember that treats count toward daily calories. If you're giving lots of treats, you might need to adjust meal sizes accordingly. Better yet, use part of your pet's daily food allowance as treats.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Situations</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Multiple Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have multiple pets, feed them separately to ensure each gets the right amount and type of food. This might mean feeding in separate rooms, using gates, or using microchip-activated feeders. Separate feeding also lets you monitor each pet's appetite.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Work Schedules</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you work long hours, you might need to adjust the schedule. Automatic feeders can help, or you might feed before work, after work, and before bed. Some pets do fine with 2 meals even if they're spaced 12 hours apart.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Travel and Boarding</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When traveling or boarding, try to maintain a similar schedule. Provide clear instructions to pet sitters or boarding facilities about feeding times and amounts. Consistency helps reduce stress.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Signs Your Schedule Needs Adjustment</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Watch for these signs that your feeding schedule might need tweaking:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your pet seems hungry between meals (might need more frequent meals or larger portions)</li>
              <li>Your pet isn't finishing meals (might need smaller portions or fewer meals)</li>
              <li>Digestive upset (might need smaller, more frequent meals)</li>
              <li>Weight gain or loss (adjust portions or meal frequency)</li>
              <li>Behavioral issues around meal times (might need more structure or different timing)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A consistent feeding schedule is one of the simplest yet most effective things you can do for your pet's health and wellbeing. While the ideal schedule varies based on your pet's age, species, and individual needs, the key is consistency. Most adult dogs do well with 2 meals per day, while cats often benefit from 2-3 scheduled meals. Puppies need more frequent meals, and seniors may need adjustments. Work with your veterinarian to determine the best schedule for your pet, then stick to it. Your pet will thank you with better health, easier house training, and a more predictable routine that benefits everyone.
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

