import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetSafetySidebar from '@/components/PetSafetySidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';
import { getBaseUrl, getDefaultOgImage } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Traveling with Pets - Complete Guide to Safe Pet Travel',
  description: 'Complete guide to traveling safely with your pet. Expert tips for car travel, air travel, and preparing your pet for stress-free trips.',
  keywords: ['traveling with pets', 'pet travel', 'pet car travel', 'pet air travel', 'traveling with dogs', 'traveling with cats', 'pet travel tips', 'pet travel safety'],
  pathname: '/pet-safety/travel-with-pets',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00+00:00',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Safety',
  tags: ['traveling with pets', 'pet travel', 'pet car travel', 'pet air travel'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-safety/travel-with-pets',
      'en-GB': '/pet-safety/travel-with-pets',
      'en-CA': '/pet-safety/travel-with-pets',
      'en-AU': '/pet-safety/travel-with-pets',
    },
  },
});

export default function TravelWithPetsPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  const pageUrl = `${baseUrl}/pet-safety/travel-with-pets`;
  
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
      { '@type': 'ListItem', position: 3, name: 'Travel with Pets', item: pageUrl },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Traveling with Pets - Complete Guide to Safe Pet Travel',
    description: 'Complete guide to traveling safely with your pet. Expert tips for car travel, air travel, hotels, and preparing your pet for stress-free trips.',
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
      alt: 'Traveling with Pets Guide',
    },
    articleSection: 'Pet Safety',
    inLanguage: 'en-US',
    keywords: 'traveling with pets, pet travel, car travel, air travel, pet travel safety',
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
    name: 'Traveling with Pets - Complete Guide to Safe Pet Travel',
    description: 'Complete guide to traveling safely with your pet. Expert tips for car travel, air travel, hotels, and preparing your pet for stress-free trips.',
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
            { name: 'Travel with Pets', href: '/pet-safety/travel-with-pets' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">✈️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Travel Safety</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">✈️</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Traveling with Pets
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Taking your pet on adventures can be incredibly rewarding, but it requires careful planning to ensure their safety and comfort. Whether you're hitting the road for a weekend getaway or flying across the country, this guide will help you prepare for a smooth journey.
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
              There's something special about sharing adventures with your furry companion. Whether it's a road trip to the mountains, a beach vacation, or visiting family across the country, having your pet along can make the experience even more memorable. However, traveling with pets isn't as simple as just loading them into the car and going. It requires thoughtful preparation, understanding your pet's needs, and knowing how to keep them safe and comfortable throughout the journey.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Before You Hit the Road: Pre-Travel Preparation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The key to successful pet travel starts long before you leave home. Taking time to prepare properly can mean the difference between a smooth trip and a stressful ordeal for both you and your pet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Health Check and Documentation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Schedule a visit with your veterinarian a few weeks before your trip. This is especially important if you're flying or crossing state or international borders. Your vet can:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Ensure your pet is healthy enough to travel</li>
              <li>Update vaccinations and provide health certificates if needed</li>
              <li>Refill any medications your pet takes regularly</li>
              <li>Discuss motion sickness prevention if your pet gets car sick</li>
              <li>Provide calming recommendations if your pet is anxious about travel</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Keep copies of your pet's medical records, vaccination certificates, and any required health certificates in both digital and physical form. You never know when you might need them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Update Identification</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is absolutely critical. Make sure your pet's collar has a tag with your current phone number—preferably a cell phone number you'll have with you during the trip. If your pet isn't microchipped, consider getting one before you travel. If they already have a microchip, verify that your contact information is up to date in the microchip registry. In the unfortunate event that your pet gets lost during travel, proper identification dramatically increases the chances of a happy reunion.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Acclimate Your Pet to Travel</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet isn't used to traveling, start with short trips around your neighborhood. Gradually increase the duration to help them get comfortable. For pets who will be in a carrier, leave it out in your home for a few weeks before the trip. Put their favorite blanket or toy inside, and let them explore it at their own pace. You can even feed them meals inside the carrier to create positive associations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Car Travel: Making Road Trips Safe and Comfortable</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Road trips are often the most pet-friendly way to travel. You have more control over stops, timing, and your pet's comfort. Here's how to make car travel as safe and pleasant as possible for everyone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Restraint Systems: Safety First</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just like humans need seatbelts, pets need proper restraint in vehicles. An unrestrained pet can become a dangerous projectile in an accident, and they can also distract the driver. Your options include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Crash-tested carriers:</strong> For smaller pets, a sturdy carrier secured with a seatbelt is ideal. Look for carriers that have been crash-tested for safety.</li>
              <li><strong>Harness and seatbelt:</strong> For larger dogs, a specially designed travel harness that attaches to the seatbelt can work well. Make sure it's designed for car travel, not just walking.</li>
              <li><strong>Barriers:</strong> For SUVs or larger vehicles, a barrier that keeps your pet in the cargo area can be effective, though a carrier is still safer.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Never let your pet ride in the front seat, especially if you have airbags. And never let them stick their head out the window—while it might look fun, it's dangerous and can cause eye injuries or worse.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Never Leave Your Pet Alone in the Car</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This cannot be stressed enough. Even on a mild day, temperatures inside a parked car can rise to dangerous levels in minutes. On a 70-degree day, the inside of a car can reach 100 degrees in just 20 minutes. Cracking the windows doesn't help. If you need to stop somewhere that doesn't allow pets, either skip it, use a drive-through, or have someone stay in the car with the air conditioning running. In many places, it's also illegal to leave pets unattended in vehicles.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Plan Regular Stops</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Plan to stop every 2-3 hours to let your pet stretch their legs, use the bathroom, and have some water. Look for pet-friendly rest stops or parks along your route. Always keep your pet on a leash when outside the vehicle, even if they're normally well-behaved. New environments can be stressful and unpredictable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Pack a Travel Kit</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bring along everything your pet might need:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Food and water (bring more than you think you'll need)</li>
              <li>Food and water bowls</li>
              <li>Leash and collar with ID tags</li>
              <li>Waste bags</li>
              <li>Favorite toys and blankets for comfort</li>
              <li>Any medications your pet takes</li>
              <li>First aid supplies</li>
              <li>Paper towels and cleaning supplies (just in case)</li>
              <li>Recent photos of your pet (in case they get lost)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Managing Motion Sickness</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some pets get carsick, especially puppies and kittens. Signs include drooling, restlessness, whining, or vomiting. To help prevent motion sickness:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Feed your pet a light meal 3-4 hours before travel</li>
              <li>Keep the car well-ventilated</li>
              <li>Try to keep your pet facing forward</li>
              <li>Take frequent breaks</li>
              <li>Ask your vet about motion sickness medication if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Air Travel: Navigating the Skies with Your Pet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Flying with pets is more complex than car travel and requires significant advance planning. Airlines have strict policies, and not all pets are good candidates for air travel.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Is Your Pet a Good Candidate for Air Travel?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Consider your pet's temperament, age, and health. Very young, very old, or brachycephalic (short-nosed) breeds like pugs, bulldogs, and Persian cats often don't handle air travel well. If your pet is extremely anxious, aggressive, or has health issues, air travel might not be the best option. In some cases, it might be safer to leave your pet with a trusted sitter or use a pet transport service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Understanding Airline Policies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every airline has different rules, and they can change frequently. Research well in advance:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size and weight restrictions for pets in the cabin</li>
              <li>Breed restrictions</li>
              <li>Required documentation and health certificates</li>
              <li>Carrier requirements (size, material, ventilation)</li>
              <li>Fees (they can be substantial)</li>
              <li>Temperature restrictions (many airlines won't transport pets in cargo during extreme weather)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Call the airline directly to confirm current policies and make reservations early, as airlines limit the number of pets per flight.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">In-Cabin vs. Cargo</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet is small enough to fit under the seat in an airline-approved carrier, they can usually travel in the cabin with you. This is generally safer and less stressful than cargo. For larger pets, cargo travel might be the only option, but it comes with more risks. If you must ship your pet as cargo:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Choose a direct flight when possible to minimize handling and time in transit</li>
              <li>Travel during moderate weather months</li>
              <li>Use a USDA-approved shipping kennel</li>
              <li>Clearly label the carrier with your contact information</li>
              <li>Attach a bag of food and feeding instructions to the carrier</li>
              <li>Consider using a pet transport service that specializes in air travel</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Preparing for the Flight</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Get your pet used to their travel carrier weeks in advance. Make sure it meets airline specifications. On the day of travel, arrive early to allow extra time for check-in. Don't sedate your pet unless specifically recommended by your veterinarian—sedation can be dangerous at altitude.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Staying in Hotels and Accommodations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Finding pet-friendly accommodations has become easier, but it still requires planning. Many hotels, motels, and vacation rentals welcome pets, but policies vary widely.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Finding Pet-Friendly Places</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When booking, always confirm the pet policy directly with the property. Ask about:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Pet fees and deposits</li>
              <li>Size and breed restrictions</li>
              <li>Number of pets allowed</li>
              <li>Whether pets can be left alone in the room</li>
              <li>Designated pet relief areas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Being a Good Guest</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Help ensure that accommodations remain pet-friendly by being a responsible guest:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Keep your pet quiet and well-behaved</li>
              <li>Never leave a pet alone if they're prone to barking or destructive behavior</li>
              <li>Clean up after your pet immediately</li>
              <li>Use a pet bed or blanket to protect furniture</li>
              <li>Report any accidents to the front desk immediately</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations for Different Pets</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Traveling with Dogs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dogs are generally the most adaptable travelers. Make sure they get plenty of exercise before and during the trip. Research dog-friendly parks and beaches at your destination. Always keep them on a leash in unfamiliar areas, and be aware of local leash laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Traveling with Cats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cats are typically more stressed by travel than dogs. Many cats prefer to stay home with a pet sitter, but if you must travel with your cat, make sure they have a secure carrier and familiar items. Consider using a calming pheromone spray in the carrier. At your destination, keep them confined to one room initially to help them adjust.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Traveling with Small Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Small pets like rabbits, guinea pigs, and birds have specific needs. They're sensitive to temperature changes and stress. Make sure their carrier is secure and well-ventilated. Bring their regular food and water, and try to maintain their normal routine as much as possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Emergency Preparedness While Traveling</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before you leave, research veterinary clinics and emergency animal hospitals along your route and at your destination. Save their contact information in your phone. Know the signs of common travel-related problems like heatstroke, dehydration, and stress, and don't hesitate to seek veterinary care if something seems wrong.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Making Travel a Positive Experience</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Traveling with your pet can be a wonderful bonding experience. The key is preparation, patience, and putting your pet's needs first. Start with short trips to build their confidence, always prioritize their safety and comfort, and be flexible with your plans. With the right preparation, you and your pet can enjoy many adventures together.
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
