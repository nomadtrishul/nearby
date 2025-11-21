import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';

export const metadata: Metadata = {
  title: 'Pet Weight Management Guide - Prevent Obesity | Nearby Pet Care',
  description: 'Comprehensive guide to managing your pet\'s weight and preventing obesity. Learn about healthy weight ranges, diet strategies, and exercise recommendations. Veterinary-approved weight loss plans.',
  keywords: ['pet weight management', 'pet obesity', 'dog weight loss', 'cat weight loss', 'pet diet plan', 'pet exercise', 'pet body condition score', 'pet weight loss'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pet Weight Management Guide - Prevent Obesity | Nearby Pet Care',
    description: 'Comprehensive guide to managing your pet\'s weight and preventing obesity.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
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
        alt: 'Pet Weight Management Guide - Prevent Pet Obesity',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Weight Management Guide - Prevent Obesity | Nearby Pet Care',
    description: 'Comprehensive guide to managing your pet\'s weight and preventing obesity.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
      'en-GB': 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
      'en-CA': 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
      'en-AU': 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
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
    'article:tag': 'pet weight management, pet obesity, weight loss, pet exercise',
  },
};

export default function PetWeightManagementPage() {
  const currentDate = new Date().toISOString();
  
  // Organization Schema for E-E-A-T
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nearby Pet Care',
    url: 'https://nearbypetcare.com',
    logo: 'https://nearbypetcare.com/logo.png',
    description: 'Comprehensive pet care guides and resources for pet owners. Expert advice on pet nutrition, health, grooming, and training.',
  };

  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Pet Weight Management Guide', item: 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Weight Management Guide - Prevent Obesity',
    description: 'Comprehensive guide to managing your pet\'s weight and preventing obesity. Learn about healthy weight ranges, diet strategies, and exercise recommendations.',
    url: 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/pet-weight-management-guide',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'pet weight management, pet obesity, weight loss, pet exercise, body condition score',
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
            { name: 'Pet Weight Management Guide', href: '/pet-nutrition/pet-weight-management-guide' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚖️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Weight Management</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">⚖️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Weight Management Guide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive guide to managing your pet's weight and preventing obesity. Learn about healthy weight ranges, diet strategies, and exercise recommendations.
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
              We love our pets, and sometimes that love shows in extra treats, bigger portions, and a few extra pounds. But here's the thing: those extra pounds aren't just cosmetic—they can significantly impact your pet's health, quality of life, and lifespan. Pet obesity is one of the most common health problems veterinarians see, and it's largely preventable and manageable. This guide will help you understand why weight matters, how to assess your pet's weight, and most importantly, how to help them achieve and maintain a healthy weight.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Weight Management Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Carrying extra weight isn't just about appearance—it affects nearly every system in your pet's body. Overweight and obese pets face increased risks of:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Diabetes:</strong> Excess weight is a major risk factor for diabetes in both dogs and cats</li>
              <li><strong>Joint problems:</strong> Extra weight puts stress on joints, worsening arthritis and increasing the risk of injuries</li>
              <li><strong>Heart and respiratory issues:</strong> The heart and lungs have to work harder to support extra body mass</li>
              <li><strong>Reduced lifespan:</strong> Studies show that overweight pets live shorter lives than their lean counterparts</li>
              <li><strong>Decreased quality of life:</strong> Overweight pets often have less energy, difficulty breathing, and trouble getting around</li>
              <li><strong>Increased surgical and anesthetic risks:</strong> Overweight pets face higher risks during procedures</li>
              <li><strong>Skin problems:</strong> Extra skin folds can lead to infections and irritation</li>
              <li><strong>Heat intolerance:</strong> Overweight pets struggle more in hot weather</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The good news? Even modest weight loss can significantly improve these conditions. Helping your pet lose weight is one of the best things you can do for their health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Assessing Your Pet's Weight</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The number on the scale tells part of the story, but it's not the whole picture. Body condition scoring is a more accurate way to assess whether your pet is at a healthy weight. Here's how to do it:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">The Rib Test</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Run your hands along your pet's ribcage. You should be able to easily feel the ribs with a thin layer of fat covering them—like feeling bones through a thin blanket. If you can't feel the ribs at all, your pet is likely overweight. If the ribs are very prominent and sharp, they might be underweight.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">The Waist Test</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look at your pet from above. They should have a visible waist—an indentation behind the ribs. If your pet looks like a rectangle or oval from above, they're likely overweight. If the waist is very pronounced, they might be underweight.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">The Tuck Test</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look at your pet from the side. The abdomen should tuck up behind the ribs. If the belly hangs down or is level with the chest, your pet is likely overweight.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Body Condition Score</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Veterinarians use a 9-point body condition score (1 = emaciated, 5 = ideal, 9 = severely obese). Most pets should be at a 4-5. Your veterinarian can help you assess your pet's body condition score and determine their ideal weight.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Why Pets Gain Weight</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Weight gain happens when calories in exceed calories out. But it's not always that simple. Several factors contribute:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Overfeeding</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is the most common cause. Many owners don't realize they're overfeeding. Portion sizes on food bags are often too generous, and it's easy to underestimate how much food you're actually giving. Plus, treats, table scraps, and even dental chews add significant calories.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Lack of Exercise</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pets who don't get enough exercise burn fewer calories. This is especially common in indoor cats and dogs who don't get regular walks or playtime.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Age and Metabolism</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As pets age, their metabolism slows down, but many owners don't adjust food portions accordingly. Neutered pets also typically need fewer calories than intact pets.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Medical Conditions</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some conditions like hypothyroidism or Cushing's disease can cause weight gain. If your pet is gaining weight despite appropriate diet and exercise, see your veterinarian.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Breed Predisposition</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some breeds are more prone to obesity, including Labrador Retrievers, Beagles, Cocker Spaniels, and many others. If you have a breed prone to weight gain, be extra vigilant.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Creating a Weight Loss Plan</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Successful weight loss requires a plan. Don't just cut food randomly—work with your veterinarian to create a safe, effective program.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 1: Veterinary Consultation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before starting any weight loss program, see your veterinarian. They will:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Assess your pet's current health and identify any underlying conditions</li>
              <li>Determine your pet's ideal weight</li>
              <li>Calculate appropriate daily calorie intake</li>
              <li>Recommend a safe rate of weight loss (typically 1-2% of body weight per week)</li>
              <li>Suggest appropriate food and exercise plans</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 2: Accurate Portion Control</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is crucial. Use a measuring cup (not a random cup from your kitchen) or better yet, a kitchen scale to measure food precisely. Feed based on your pet's ideal weight, not current weight. Split the daily amount into 2-3 meals rather than one large meal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 3: Choose the Right Food</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your veterinarian might recommend a weight management or prescription weight loss food. These foods are:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Lower in calories but still nutritionally complete</li>
              <li>Higher in fiber to help pets feel full</li>
              <li>Formulated to support weight loss while maintaining muscle mass</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Don't just reduce the amount of regular food—this can lead to nutrient deficiencies. Use a food specifically designed for weight loss.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 4: Manage Treats and Extras</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Treats can sabotage weight loss efforts. Keep treats to 10% or less of daily calories. Better yet, use part of your pet's daily food allowance as treats, or choose low-calorie options like:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Small pieces of vegetables (carrots, green beans) for dogs</li>
              <li>Freeze-dried meat treats (use tiny pieces)</li>
              <li>Commercial low-calorie treats</li>
              <li>Praise, play, and attention instead of food rewards</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Eliminate table scraps entirely during weight loss. They add calories and often aren't healthy anyway.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 5: Increase Exercise Gradually</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise helps burn calories and build muscle. But start slowly, especially if your pet is very overweight or has health issues. Gradually increase duration and intensity. For dogs, this might mean longer or more frequent walks, swimming (great for joints), or playtime. For cats, try interactive toys, laser pointers, or food puzzles that encourage movement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Remember: exercise alone won't solve weight problems if diet isn't addressed, but it's an important part of the equation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Monitoring Progress</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular monitoring helps you stay on track and adjust as needed:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Weekly weigh-ins:</strong> Weigh your pet at the same time of day, on the same scale, weekly</li>
              <li><strong>Body condition scoring:</strong> Regularly assess using the rib, waist, and tuck tests</li>
              <li><strong>Photos:</strong> Take monthly photos from the side and top to visually track progress</li>
              <li><strong>Veterinary check-ins:</strong> Regular follow-ups with your vet to ensure safe progress</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Challenges and Solutions</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Your Pet Seems Hungry</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is normal, especially at first. Try feeding smaller, more frequent meals. Use food puzzles or slow feeders to make meals last longer. Ensure you're feeding a weight management food that's designed to help pets feel full.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Multiple Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feed pets separately to prevent food stealing. You might need to feed the overweight pet in a separate room or use microchip-activated feeders.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Family Members Giving Treats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Everyone needs to be on board. Educate family members about the importance of weight loss and provide approved low-calorie treats they can give instead.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Plateau</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Weight loss often plateaus. If progress stalls, your veterinarian might adjust the plan—perhaps reducing calories further or increasing exercise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Maintaining Healthy Weight</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once your pet reaches their ideal weight, the work isn't over. Maintaining weight requires ongoing attention:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Continue monitoring weight and body condition</li>
              <li>Adjust food portions as needed (your pet's needs may change with age, activity, or season)</li>
              <li>Maintain regular exercise</li>
              <li>Keep treats limited</li>
              <li>Regular veterinary check-ups</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Never put your pet on a crash diet or starve them. Rapid weight loss can be dangerous, causing liver problems and other serious health issues. Weight loss should be gradual and supervised by your veterinarian. If your pet isn't losing weight despite your efforts, or if they're losing weight too quickly, contact your veterinarian immediately.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Helping your pet achieve and maintain a healthy weight is one of the most important things you can do for their health and longevity. It requires commitment, patience, and often some lifestyle changes, but the benefits are enormous. Your pet will have more energy, better mobility, reduced risk of serious health problems, and likely a longer, happier life. Work with your veterinarian to create a plan, stick with it, and celebrate the small victories along the way. Your pet's health is worth the effort.
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

