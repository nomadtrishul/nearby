import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Seasonal Pet Health Tips Guide',
  description: 'Seasonal health tips for pets throughout the year. Learn how to keep your pet healthy and safe during different seasons, including summer and winter care.',
  keywords: ['seasonal pet care', 'winter pet care', 'summer pet care', 'pet seasonal health', 'pet weather safety', 'summer pet safety', 'winter pet safety', 'seasonal pet tips'],
  pathname: '/pet-health/seasonal-health-tips',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Seasonal Pet Health Tips Guide',
    type: 'image/png',
  }],
});

export default function SeasonalHealthTipsPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Seasonal Health Tips', item: 'https://nearbypetcare.com/pet-health/seasonal-health-tips' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Seasonal Pet Health Tips: Year-Round Care Guide',
    description: 'Seasonal health tips for pets throughout the year, including summer heat safety, winter care, and seasonal health considerations.',
    url: 'https://nearbypetcare.com/pet-health/seasonal-health-tips',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I keep my pet safe in hot weather?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Keep pets safe in hot weather by never leaving them in cars, providing plenty of fresh water and shade, limiting exercise during the hottest parts of the day, protecting paws from hot pavement, and watching for signs of overheating. Heatstroke can be life-threatening, so take precautions and seek immediate veterinary care if you suspect heatstroke.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I protect my pet from cold weather?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Protect pets from cold weather by limiting time outdoors in extreme cold, providing adequate shelter for outdoor pets, wiping paws after walks to remove ice and salt, considering pet-safe antifreeze alternatives, and watching for signs of hypothermia. Some pets may need coats or booties in very cold weather.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are signs of heatstroke in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signs of heatstroke include excessive panting, drooling, rapid heartbeat, weakness, collapse, high body temperature, and in severe cases, seizures or loss of consciousness. Heatstroke is a medical emergency - move your pet to a cool area, cool them gradually with cool (not cold) water, and seek immediate veterinary care.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do pets need different care in different seasons?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, pets may need different care considerations in different seasons. Summer requires heat safety precautions, winter requires cold weather protection, spring may bring increased parasite activity, and fall may require adjustments to exercise routines. Understanding seasonal considerations helps you provide appropriate care year-round.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I protect my pet\'s paws in winter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Protect paws in winter by wiping them after walks to remove ice, salt, and chemicals; using pet-safe ice melt products; considering booties for very cold conditions; checking for cracks or irritation; and keeping paw pads moisturized. Salt and chemicals used on roads and sidewalks can be harmful to pets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there seasonal health concerns I should watch for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, seasonal health concerns include heatstroke in summer, hypothermia in winter, increased parasite activity in spring and summer, seasonal allergies, and changes in exercise needs. Regular veterinary care and awareness of seasonal risks help keep your pet healthy year-round.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
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
            { name: 'Pet Health', href: '/pet-health' },
            { name: 'Seasonal Health Tips', href: '/pet-health/seasonal-health-tips' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🌤️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Seasonal Care</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🌤️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Seasonal Health Tips
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Essential seasonal care tips to keep your pet healthy throughout the year. Learn how to protect your pet from weather-related health issues and adapt their care for each season.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">☀️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Summer Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">❄️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Winter Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌡️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Weather Safety</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Different seasons bring different health considerations for pets. Understanding seasonal risks and how to adapt your pet's care throughout the year helps keep them healthy and safe. This comprehensive guide provides tips for keeping your pet healthy and safe during different seasons, from summer heat safety to winter cold protection.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Extreme weather conditions can be dangerous for pets. Always prioritize your pet's safety and seek veterinary care if you suspect heatstroke, hypothermia, or other weather-related health problems. When in doubt, err on the side of caution.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Seasonal Pet Care</h2>
            <p className="mb-4">
              Pets are affected by seasonal changes just like humans. Temperature extremes, changes in daylight, seasonal allergens, and changes in parasite activity all require adjustments to your pet's care routine. Being aware of seasonal considerations helps you provide appropriate care year-round.
            </p>
            <p className="mb-4">
              Different pets have different needs based on their species, breed, age, and health status. What works for one pet may not work for another. Always consider your individual pet's needs when adapting care for different seasons.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Summer Health Tips</h2>
            <p className="mb-4">
              Summer brings heat, increased outdoor activity, and specific health risks. Protecting your pet from heat-related illnesses is crucial during hot weather.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Heatstroke Prevention</h3>
            <p className="mb-3">Heatstroke is a life-threatening emergency. Prevent it by:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Never leave pets in cars:</strong> Even with windows cracked, temperatures can rise to dangerous levels in minutes. Never leave your pet in a parked car, even for a short time.</li>
              <li><strong>Provide plenty of fresh water:</strong> Ensure your pet always has access to clean, fresh water. Consider multiple water sources and add ice on very hot days.</li>
              <li><strong>Provide shade:</strong> When outdoors, ensure your pet has access to shade at all times.</li>
              <li><strong>Limit exercise during hottest hours:</strong> Exercise early in the morning or late in the evening when temperatures are cooler.</li>
              <li><strong>Watch for signs of overheating:</strong> Excessive panting, drooling, weakness, or collapse require immediate attention.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Paw Protection</h3>
            <p className="mb-3">Hot pavement can burn your pet's paws:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Test pavement temperature with your hand - if it's too hot for your hand, it's too hot for paws</li>
              <li>Walk on grass when possible</li>
              <li>Consider booties for protection</li>
              <li>Walk during cooler times of day</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Signs of Heatstroke</h3>
            <p className="mb-3">Recognize heatstroke symptoms:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Excessive panting and drooling</li>
              <li>Rapid heartbeat</li>
              <li>Weakness or collapse</li>
              <li>High body temperature</li>
              <li>Vomiting or diarrhea</li>
              <li>Seizures or loss of consciousness</li>
            </ul>
            <p className="mb-4">If you suspect heatstroke, move your pet to a cool area, cool them gradually with cool (not cold) water, and seek immediate veterinary care. Heatstroke is a medical emergency.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Summer Exercise</h3>
            <p className="mb-4">
              Adjust exercise routines for hot weather:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Exercise during cooler times of day (early morning or evening)</li>
              <li>Reduce intensity and duration in hot weather</li>
              <li>Provide frequent water breaks</li>
              <li>Watch for signs of overheating</li>
              <li>Consider indoor activities on very hot days</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Winter Health Tips</h2>
            <p className="mb-4">
              Winter brings cold temperatures, ice, and other hazards. Protecting your pet from cold weather is essential for their safety and comfort.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Cold Weather Protection</h3>
            <p className="mb-3">Protect your pet from cold:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Limit time outdoors:</strong> In extreme cold, limit outdoor time and provide warm shelter</li>
              <li><strong>Provide adequate shelter:</strong> Outdoor pets need insulated, draft-free shelter with dry bedding</li>
              <li><strong>Consider coats or sweaters:</strong> Short-haired, small, or elderly pets may benefit from protective clothing</li>
              <li><strong>Watch for signs of hypothermia:</strong> Shivering, weakness, lethargy, or confusion</li>
              <li><strong>Increase food if needed:</strong> Outdoor pets may need more calories in cold weather</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Paw Care in Winter</h3>
            <p className="mb-3">Protect paws from winter hazards:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Wipe paws after walks:</strong> Remove ice, salt, and chemicals that can be harmful</li>
              <li><strong>Use pet-safe ice melt:</strong> Traditional ice melt products can be toxic to pets</li>
              <li><strong>Check for cracks or irritation:</strong> Cold, dry weather can cause paw pad problems</li>
              <li><strong>Consider booties:</strong> For very cold conditions or to protect from salt and chemicals</li>
              <li><strong>Keep paw pads moisturized:</strong> Use pet-safe paw balms to prevent cracking</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Antifreeze Safety</h3>
            <p className="mb-4">
              Antifreeze is highly toxic to pets and has a sweet taste that attracts them. Use pet-safe antifreeze alternatives, clean up spills immediately, and store antifreeze securely. If you suspect antifreeze ingestion, seek immediate veterinary care.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Signs of Hypothermia</h3>
            <p className="mb-3">Watch for hypothermia symptoms:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Shivering (may stop as hypothermia worsens)</li>
              <li>Weakness or lethargy</li>
              <li>Confusion or disorientation</li>
              <li>Slow, shallow breathing</li>
              <li>Loss of consciousness</li>
            </ul>
            <p className="mb-4">If you suspect hypothermia, warm your pet gradually and seek veterinary care.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Spring and Fall Considerations</h2>
            <p className="mb-4">
              Spring and fall bring their own considerations for pet health:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Spring Health Tips</h3>
            <p className="mb-3">Spring brings increased outdoor activity and parasite concerns:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Increased parasite activity:</strong> Fleas, ticks, and mosquitoes become more active - ensure preventives are up to date</li>
              <li><strong>Allergies:</strong> Spring allergies can affect pets - watch for signs like itching, sneezing, or skin irritation</li>
              <li><strong>Spring cleaning safety:</strong> Keep pets away from cleaning products and ensure good ventilation</li>
              <li><strong>Garden safety:</strong> Be aware of toxic plants and garden chemicals</li>
              <li><strong>Exercise adjustments:</strong> Gradually increase activity as weather improves</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fall Health Tips</h3>
            <p className="mb-3">Fall requires preparation for colder weather:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Prepare for winter:</strong> Ensure your pet is ready for colder weather ahead</li>
              <li><strong>Exercise adjustments:</strong> Maintain exercise routines as weather cools</li>
              <li><strong>Holiday safety:</strong> Be aware of fall holidays and associated hazards (Halloween candy, decorations)</li>
              <li><strong>Parasite prevention:</strong> Continue year-round parasite prevention</li>
              <li><strong>Indoor preparation:</strong> Ensure indoor spaces are ready for more time spent inside</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Year-Round Considerations</h2>
            <p className="mb-4">
              Some health considerations apply year-round but may need seasonal adjustments:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Parasite Prevention</h3>
            <p className="mb-4">
              Year-round parasite prevention is essential, but be aware that parasite activity may increase in certain seasons. Continue preventives year-round and discuss seasonal considerations with your veterinarian.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Exercise and Activity</h3>
            <p className="mb-4">
              Adjust exercise routines based on weather conditions. Maintain regular exercise year-round, but adapt intensity, duration, and timing based on temperature and weather conditions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Nutrition</h3>
            <p className="mb-4">
              Some pets may need dietary adjustments based on activity levels in different seasons. Outdoor pets may need more calories in winter, while indoor pets may need fewer calories if less active. Discuss nutritional needs with your veterinarian.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Breed and Species Considerations</h2>
            <p className="mb-4">
              Different pets have different tolerance for weather extremes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Brachycephalic breeds:</strong> Short-nosed breeds (like Bulldogs, Pugs) are more susceptible to heatstroke</li>
              <li><strong>Thin-coated breeds:</strong> May need extra protection in cold weather</li>
              <li><strong>Thick-coated breeds:</strong> May be more susceptible to heat but better protected from cold</li>
              <li><strong>Small pets:</strong> May lose body heat more quickly in cold weather</li>
              <li><strong>Senior pets:</strong> May be more sensitive to temperature extremes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Emergency Preparedness</h2>
            <p className="mb-4">
              Be prepared for weather-related emergencies:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Have an emergency plan that includes your pets</li>
              <li>Keep emergency supplies on hand</li>
              <li>Know where to go in case of evacuation</li>
              <li>Have a pet first aid kit</li>
              <li>Keep important documents and medications accessible</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This guide provides general seasonal health tips. Individual pets may have unique needs based on their species, breed, age, and health status. Always consider your pet's specific needs and consult with your veterinarian about seasonal care considerations. When in doubt about weather-related health concerns, seek veterinary guidance.</p>
            </div>
          </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I keep my pet safe in hot weather?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Keep pets safe in hot weather by never leaving them in cars, providing plenty of fresh water and shade, limiting exercise during the hottest parts of the day, protecting paws from hot pavement, and watching for signs of overheating. Heatstroke can be life-threatening, so take precautions and seek immediate veterinary care if you suspect heatstroke. Brachycephalic (short-nosed) breeds are particularly susceptible to heatstroke.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I protect my pet from cold weather?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Protect pets from cold weather by limiting time outdoors in extreme cold, providing adequate shelter for outdoor pets, wiping paws after walks to remove ice and salt, considering pet-safe antifreeze alternatives, and watching for signs of hypothermia. Some pets may need coats or booties in very cold weather. Short-haired, small, or elderly pets are particularly susceptible to cold.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are signs of heatstroke in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Signs of heatstroke include excessive panting, drooling, rapid heartbeat, weakness, collapse, high body temperature, and in severe cases, seizures or loss of consciousness. Heatstroke is a medical emergency - move your pet to a cool area, cool them gradually with cool (not cold) water, and seek immediate veterinary care. Never use ice water, as it can cause shock.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do pets need different care in different seasons?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Yes, pets may need different care considerations in different seasons. Summer requires heat safety precautions, winter requires cold weather protection, spring may bring increased parasite activity, and fall may require adjustments to exercise routines. Understanding seasonal considerations helps you provide appropriate care year-round and adapt to changing conditions.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I protect my pet's paws in winter?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Protect paws in winter by wiping them after walks to remove ice, salt, and chemicals; using pet-safe ice melt products; considering booties for very cold conditions; checking for cracks or irritation; and keeping paw pads moisturized. Salt and chemicals used on roads and sidewalks can be harmful to pets and cause irritation or toxicity if ingested during grooming.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are there seasonal health concerns I should watch for?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Yes, seasonal health concerns include heatstroke in summer, hypothermia in winter, increased parasite activity in spring and summer, seasonal allergies, and changes in exercise needs. Regular veterinary care and awareness of seasonal risks help keep your pet healthy year-round. Be especially vigilant during temperature extremes.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/first-aid-for-pets" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">First Aid for Pets</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn first aid procedures for weather-related emergencies.</p>
                </Link>
                <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn to recognize when seasonal health concerns require veterinary attention.</p>
                </Link>
                <Link href="/pet-health/parasite-control-ticks-fleas-worms" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parasite Control</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about seasonal parasite prevention and control.</p>
                </Link>
                <Link href="/pet-health" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">All Pet Health Guides</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Explore all our comprehensive pet health and wellness guides.</p>
                </Link>
          </div>
            </section>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-health" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  ← Back to Pet Health Guides
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <HealthSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
