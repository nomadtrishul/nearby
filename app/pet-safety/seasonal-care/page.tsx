import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetSafetySidebar from '@/components/PetSafetySidebar';
import { getBaseUrl, getDefaultOgImage } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Seasonal Pet Safety Guide - Year-Round Protection for Your Pet | Nearby Pet Care',
  description: 'Seasonal safety tips for pets. Learn how to keep your pet safe during different seasons and weather conditions. Expert advice for summer, winter, spring, and fall pet care.',
  keywords: ['seasonal pet safety', 'winter pet safety', 'summer pet safety', 'pet weather safety', 'hot weather pets', 'cold weather pets', 'seasonal pet care'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Seasonal Pet Safety Guide - Year-Round Protection | Nearby Pet Care',
    description: 'Seasonal safety tips for pets. Learn how to keep your pet safe during different seasons and weather conditions.',
    type: 'article',
    url: getBaseUrl() + '/pet-safety/seasonal-care',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    images: [
      {
        url: getDefaultOgImage(),
        width: 1200,
        height: 630,
        alt: 'Seasonal Pet Safety Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  title: 'Seasonal Pet Safety Guide | Nearby Pet Care',
    description: 'Seasonal safety tips for pets.',
    images: [getDefaultOgImage()],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: getBaseUrl() + '/pet-safety/seasonal-care',
    languages: {
      'en-US': getBaseUrl() + '/pet-safety/seasonal-care',
      'en-GB': getBaseUrl() + '/pet-safety/seasonal-care',
      'en-CA': getBaseUrl() + '/pet-safety/seasonal-care',
      'en-AU': getBaseUrl() + '/pet-safety/seasonal-care',
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
    'article:section': 'Pet Safety',
    'article:tag': 'seasonal pet safety, winter pet safety, summer pet safety, pet weather safety',
  },
};

export default function SeasonalCarePage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  const pageUrl = `${baseUrl}/pet-safety/seasonal-care`;
  
  const organizationSchema = {
    '@type': 'Organization',
    name: 'Nearby Pet Care',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: 200,
      height: 48,
    },
  };
  
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Pet Safety', item: `${baseUrl}/pet-safety` },
      { '@type': 'ListItem', position: 3, name: 'Seasonal Care', item: pageUrl },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Seasonal Pet Safety Guide - Year-Round Protection for Your Pet',
    description: 'Seasonal safety tips for pets. Learn how to keep your pet safe during different seasons and weather conditions.',
    url: pageUrl,
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    publisher: organizationSchema,
    image: {
      '@type': 'ImageObject',
      url: getDefaultOgImage(),
      width: 1200,
      height: 630,
      alt: 'Seasonal Pet Safety Guide',
    },
    articleSection: 'Pet Safety',
    inLanguage: 'en-US',
    keywords: 'seasonal pet safety, winter safety, summer safety, weather safety',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };

  // WebPage Schema
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    name: 'Seasonal Pet Safety Guide - Year-Round Protection for Your Pet',
    description: 'Seasonal safety tips for pets. Learn how to keep your pet safe during different seasons and weather conditions.',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    breadcrumb: breadcrumbStructuredData,
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    publisher: organizationSchema,
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Safety', href: '/pet-safety' },
            { name: 'Seasonal Care', href: '/pet-safety/seasonal-care' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🌤️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Seasonal Safety</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🌤️</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Seasonal Pet Safety
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Each season brings unique challenges and opportunities for pet care. Learn how to protect your pet from weather-related hazards and keep them comfortable and safe year-round.
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
              As the seasons change, so do the risks and considerations for keeping your pet safe and healthy. What works in the summer can be dangerous in the winter, and spring brings different challenges than fall. Understanding how weather and seasonal changes affect your pet is essential for responsible pet ownership. This guide will help you navigate each season with confidence, ensuring your pet stays safe, comfortable, and healthy all year long.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Summer Safety: Beating the Heat</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Summer can be a wonderful time for outdoor adventures with your pet, but heat-related illnesses are serious and can be fatal. Understanding how to keep your pet cool and recognizing the signs of heat stress can save their life.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Never Leave Pets in Cars</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is the most critical summer safety rule: never, ever leave your pet in a parked car, even for a few minutes. On a 70-degree day, the temperature inside a car can reach 100 degrees in just 20 minutes. On an 85-degree day, it can reach 120 degrees in the same time. Cracking the windows doesn't help. Even in the shade, temperatures can become deadly. If you see a pet left in a hot car, call local authorities immediately. Many states have laws that allow people to break car windows to rescue pets in distress.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Heatstroke Prevention</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Heatstroke occurs when a pet's body temperature rises to dangerous levels. Signs include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Excessive panting or difficulty breathing</li>
              <li>Increased heart rate</li>
              <li>Drooling or salivating excessively</li>
              <li>Weakness, stumbling, or collapse</li>
              <li>Vomiting or diarrhea</li>
              <li>Bright red or dark gums</li>
              <li>Seizures</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you suspect heatstroke, move your pet to a cool area immediately, apply cool (not cold) water to their body, and get them to a veterinarian right away. Heatstroke is a medical emergency.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Exercise and Activity</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adjust your pet's exercise routine during hot weather:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Walk or exercise during the coolest parts of the day—early morning or late evening</li>
              <li>Avoid the hottest hours, typically between 10 AM and 4 PM</li>
              <li>Keep walks shorter and less intense</li>
              <li>Provide plenty of water breaks</li>
              <li>Watch for signs that your pet is getting too hot</li>
              <li>Consider indoor activities on extremely hot days</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Paw Protection</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Asphalt, concrete, and sand can become extremely hot in the sun—hot enough to burn your pet's paw pads. Test surfaces with the back of your hand: if it's too hot for you to hold your hand on for 5 seconds, it's too hot for your pet's paws. Walk on grass when possible, or consider protective booties. Signs of burned paws include limping, licking paws, or refusing to walk.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Hydration and Shade</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Always provide access to fresh, cool water. When outside, ensure your pet has access to shade at all times. Consider setting up a kiddie pool for dogs who enjoy water, but never leave them unsupervised. Some pets may benefit from cooling mats or vests, especially those with thick coats or brachycephalic (short-nosed) breeds who are more susceptible to heat.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Grooming Considerations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While it might seem logical to shave your pet in the summer, this isn't always the best idea. A pet's coat actually provides insulation against heat as well as cold. However, regular brushing to remove dead hair can help. Consult with your groomer or veterinarian about the best grooming approach for your pet's breed and coat type.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Winter Safety: Protecting Against the Cold</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cold weather brings its own set of challenges. While some pets are well-adapted to cold weather, others need extra protection. Understanding your pet's needs and the risks of cold weather is essential.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Hypothermia and Frostbite</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just like humans, pets can suffer from hypothermia and frostbite. Signs of hypothermia include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Shivering (though this may stop as hypothermia worsens)</li>
              <li>Weakness or lethargy</li>
              <li>Slow, shallow breathing</li>
              <li>Stiff muscles</li>
              <li>Loss of coordination</li>
              <li>Pale or gray gums</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Frostbite most commonly affects ears, tails, and paw pads. The skin may appear pale, gray, or blue, and may feel cold or brittle. If you suspect hypothermia or frostbite, warm your pet gradually and seek veterinary care immediately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Limiting Time Outdoors</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When temperatures drop, limit your pet's time outdoors. Short-haired, small, very young, or very old pets are particularly vulnerable to cold. Even pets with thick coats can get cold, especially if they get wet. Pay attention to your pet's behavior—if they're shivering, lifting their paws, or trying to go back inside, they're too cold.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Paw Care in Winter</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Winter can be tough on paws:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Ice and snow can accumulate between paw pads, causing discomfort</li>
              <li>Salt and chemical de-icers can irritate paws and be toxic if ingested</li>
              <li>Wipe your pet's paws after walks to remove ice, snow, and chemicals</li>
              <li>Consider using pet-safe de-icers on your own property</li>
              <li>Booties can protect paws from cold and chemicals</li>
              <li>Regularly trim the hair between paw pads to prevent ice buildup</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Outdoor Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet must stay outside, ensure they have:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Adequate shelter that's dry, draft-free, and insulated</li>
              <li>Bedding that stays dry (straw works well)</li>
              <li>Access to unfrozen water (consider a heated water bowl)</li>
              <li>Extra food, as pets burn more calories trying to stay warm</li>
              <li>Protection from wind and moisture</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, the best option is to bring pets indoors during extreme cold. No pet should be left outside in dangerously cold temperatures.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Antifreeze Dangers</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Antifreeze has a sweet taste that attracts pets, but it's extremely toxic—even a small amount can be fatal. Clean up any spills immediately, and consider using pet-safe antifreeze. Store antifreeze securely where pets can't access it. If you suspect your pet has ingested antifreeze, seek emergency veterinary care immediately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Cars and Cold Weather</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just as cars can become ovens in summer, they can become freezers in winter. Don't leave pets in cold cars. Also, be aware that outdoor cats sometimes seek warmth by crawling under car hoods. Bang on your hood or honk your horn before starting your car in cold weather to give any hiding cats a chance to escape.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Spring Safety: New Beginnings, New Hazards</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spring brings warmer weather and new growth, but it also brings unique hazards:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Toxic Plants and Fertilizers</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many spring-blooming plants are toxic to pets, including lilies (extremely dangerous for cats), daffodils, tulips, and azaleas. Be careful with fertilizers, pesticides, and herbicides—many are toxic if ingested. Keep pets away from recently treated areas, and store garden chemicals securely.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Allergies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just like humans, pets can suffer from seasonal allergies. Watch for signs like excessive scratching, licking, sneezing, or watery eyes. If you notice these symptoms, consult your veterinarian.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Parasites</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Warmer weather means fleas, ticks, and mosquitoes become active. Ensure your pet is on appropriate parasite prevention year-round, but be especially vigilant in spring and summer. Check your pet regularly for ticks after outdoor activities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Fall Safety: Preparing for Change</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fall brings cooler temperatures and beautiful colors, but also some unique considerations:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Rodenticides and Mushrooms</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As rodents seek shelter in fall, people often use rodenticides, which are extremely toxic to pets. Keep these products completely out of reach. Also, fall is mushroom season—many wild mushrooms are toxic. Remove any mushrooms from your yard, and prevent your pet from eating any mushrooms during walks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Holiday Hazards</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fall and early winter bring holidays like Halloween and Thanksgiving. Be aware of holiday-specific hazards like chocolate, decorations, and rich foods that can cause pancreatitis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Year-Round Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some safety considerations apply regardless of the season:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Always provide access to fresh water</li>
              <li>Monitor your pet's behavior and watch for signs of discomfort</li>
              <li>Adjust activities based on weather conditions</li>
              <li>Know your pet's limits—age, breed, and health conditions affect how they handle weather</li>
              <li>When in doubt, err on the side of caution</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations by Pet Type</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Brachycephalic Breeds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Short-nosed breeds like pugs, bulldogs, and Persian cats have difficulty regulating body temperature and are especially vulnerable to heat. They need extra care in hot weather and should be kept in air-conditioned environments when possible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Senior Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Older pets may have more difficulty regulating body temperature and may be less tolerant of extreme weather. They may also have health conditions that make them more vulnerable. Be extra cautious with senior pets in extreme weather.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Puppies and Kittens</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Young animals are more vulnerable to temperature extremes. They have less body fat for insulation and may not be able to regulate their body temperature as well as adults. Limit their exposure to extreme weather.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Staying Prepared</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The key to seasonal pet safety is awareness and preparation. Pay attention to weather forecasts, know your pet's individual needs and limitations, and be ready to adjust your routine based on conditions. When in doubt, consult your veterinarian about how to best protect your pet during different seasons. With proper care and attention, you and your pet can safely enjoy all that each season has to offer.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-safety" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
              <span aria-hidden="true">←</span> <span className="ml-2">Back to Pet Safety</span>
            </Link>
          </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PetSafetySidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
