import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetSafetySidebar from '@/components/PetSafetySidebar';
import { 
  generateSEOMetadata,
  generateBlogPostingStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Safety & Travel Guide',
  description: 'Comprehensive overview of pet safety and travel topics. Learn how to keep your pet safe at home, while traveling, during emergencies, and throughout seasons.',
  keywords: ['pet safety overview', 'pet travel', 'pet home safety', 'pet safety guide', 'pet safety tips', 'pet protection', 'pet care safety'],
  pathname: '/pet-safety/pillar',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00+00:00',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Safety',
  tags: ['pet safety overview', 'pet travel', 'pet home safety', 'pet safety guide'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-safety/pillar',
      'en-GB': '/pet-safety/pillar',
      'en-CA': '/pet-safety/pillar',
      'en-AU': '/pet-safety/pillar',
    },
  },
});

export default function PetSafetyPillarPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Safety', url: '/pet-safety' },
    { name: 'Overview', url: '/pet-safety/pillar' },
  ];

  // Generate structured data using centralized utilities
  const blogPostingStructuredData = generateBlogPostingStructuredData({
    headline: 'Pet Safety & Travel Overview - Comprehensive Guide',
    description: 'Comprehensive overview of pet safety and travel topics. Learn how to keep your pet safe at home, while traveling, during emergencies, and throughout the seasons.',
    url: '/pet-safety/pillar',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
    tags: ['pet safety', 'pet travel', 'home safety', 'emergency preparedness', 'seasonal safety'],
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Safety & Travel Overview - Comprehensive Guide',
    description: 'Comprehensive overview of pet safety and travel topics. Learn how to keep your pet safe at home, while traveling, during emergencies, and throughout the seasons.',
    url: '/pet-safety/pillar',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogPostingStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      
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
            { name: 'Overview', href: '/pet-safety/pillar' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🛡️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Safety & Protection</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🛡️</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Safety & Travel Overview
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Keeping your pet safe is one of the most important responsibilities of pet ownership. This comprehensive guide covers everything you need to know about protecting your pet at home, on the road, during emergencies, and throughout the changing seasons.
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
              As pet owners, our primary responsibility is ensuring the safety and well-being of our furry, feathered, or scaled family members. Pet safety isn't just about preventing accidents—it's about creating an environment where your pet can thrive, exploring emergency preparedness so you're ready for the unexpected, understanding how to travel safely together, and adapting to the unique challenges each season brings. This comprehensive overview will guide you through the essential aspects of pet safety, helping you become a more informed and prepared pet owner.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Foundation of Pet Safety</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pet safety starts with awareness. Many common household items, everyday situations, and environmental factors can pose risks to our pets. Understanding these risks is the first step in preventing accidents and keeping your pet safe. Whether you're a new pet owner or have had pets for years, there's always something new to learn about keeping them safe and healthy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Home Safety: Your Pet's Sanctuary</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your home should be a safe haven for your pet, but it's filled with potential hazards that many owners don't recognize. From toxic foods in the kitchen to electrical cords in the living room, from medications in the bathroom to chemicals in the garage—every room presents unique challenges. Pet-proofing your home isn't about creating a sterile environment; it's about identifying risks and taking simple, practical steps to eliminate or minimize them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Key Areas of Focus</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Toxic substances:</strong> Many common foods, plants, medications, and household chemicals are dangerous or even deadly to pets</li>
              <li><strong>Physical hazards:</strong> Small objects that can be swallowed, electrical cords, open windows, and unstable furniture</li>
              <li><strong>Environmental dangers:</strong> Extreme temperatures, lack of ventilation, and unsafe outdoor spaces</li>
              <li><strong>Behavioral considerations:</strong> Understanding your pet's natural behaviors helps you anticipate and prevent problems</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The goal is to create an environment where your pet can explore and play safely, without constant worry about hidden dangers. This requires ongoing vigilance—as your pet grows and changes, and as you bring new items into your home, you'll need to reassess potential risks.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                <strong>Learn more:</strong> Our comprehensive <Link href="/pet-safety/home-proofing" className="text-blue-600 dark:text-blue-400 hover:underline">Home Proofing Guide</Link> covers room-by-room safety considerations, common hazards, and practical pet-proofing strategies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Travel Safety: Adventures Together</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Traveling with your pet can be one of life's great joys, but it requires careful planning and preparation. Whether you're taking a weekend road trip or flying across the country, understanding how to keep your pet safe and comfortable during travel is essential. Different modes of transportation present different challenges, and what works for one pet might not work for another.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Car Travel</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Road trips offer the most flexibility for pet travel, but they still require preparation. Proper restraint systems are crucial for safety—an unrestrained pet can become a dangerous projectile in an accident. Never leave pets alone in vehicles, as temperatures can become deadly in minutes. Regular stops for exercise, bathroom breaks, and water are essential for your pet's comfort and health.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Air Travel</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Flying with pets is more complex and requires significant advance planning. Airlines have strict policies regarding pet travel, and not all pets are good candidates for air travel. Understanding airline requirements, preparing proper documentation, and ensuring your pet's comfort and safety throughout the journey are all critical considerations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Accommodations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Finding pet-friendly accommodations has become easier, but it still requires research and planning. Being a responsible pet owner when staying in hotels or rentals helps ensure these options remain available for future travelers.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                <strong>Learn more:</strong> Our detailed <Link href="/pet-safety/travel-with-pets" className="text-blue-600 dark:text-blue-400 hover:underline">Travel with Pets Guide</Link> covers car travel, air travel, accommodations, and tips for making travel a positive experience for both you and your pet.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Emergency Preparedness: Planning for the Unexpected</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Disasters can happen anywhere, anytime. Whether it's a natural disaster like a hurricane, wildfire, or earthquake, or a personal emergency like a house fire or medical crisis, being prepared can save lives—including your pet's. Emergency preparedness isn't just about having supplies; it's about having a plan, knowing what to do, and being ready to act quickly when every second counts.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">The Emergency Kit</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A well-stocked emergency kit should contain everything your pet needs to survive for at least 3-7 days: food, water, medications, medical records, identification, comfort items, and containment supplies. The kit should be easily accessible, and its contents should be regularly checked and refreshed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">The Emergency Plan</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A comprehensive emergency plan includes identifying pet-friendly evacuation locations, designating emergency caregivers, practicing evacuation procedures, and staying informed about local emergency systems. The plan should account for different types of emergencies and different scenarios—what if you're not home? What if you can't return home? What if you're unable to care for your pet?
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Identification</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper identification is crucial during emergencies. Microchipping, current ID tags, and having photos and documentation readily available can mean the difference between a quick reunion and a prolonged separation if your pet becomes lost during a crisis.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                <strong>Learn more:</strong> Our comprehensive <Link href="/pet-safety/emergency-preparedness" className="text-blue-600 dark:text-blue-400 hover:underline">Emergency Preparedness Guide</Link> covers building emergency kits, creating evacuation plans, and preparing for different types of disasters.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Seasonal Safety: Adapting to Change</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Each season brings unique challenges and considerations for pet safety. What works in the summer can be dangerous in the winter, and spring brings different hazards than fall. Understanding how weather and seasonal changes affect your pet is essential for keeping them safe and comfortable year-round.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Summer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Heat-related illnesses are serious and can be fatal. Never leave pets in cars, limit exercise during the hottest hours, protect paws from hot surfaces, and ensure access to shade and water. Understanding the signs of heatstroke and knowing how to respond can save your pet's life.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Winter</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cold weather brings risks of hypothermia and frostbite. Limit time outdoors, protect paws from ice and salt, ensure adequate shelter for outdoor pets, and be aware of antifreeze dangers. Some pets are more vulnerable to cold than others, and understanding your pet's individual needs is crucial.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Spring and Fall</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These transitional seasons bring their own considerations: toxic plants and fertilizers in spring, increased parasite activity, allergies, and in fall, hazards like rodenticides and toxic mushrooms. Being aware of seasonal-specific risks helps you protect your pet throughout the year.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                <strong>Learn more:</strong> Our detailed <Link href="/pet-safety/seasonal-care" className="text-blue-600 dark:text-blue-400 hover:underline">Seasonal Care Guide</Link> covers safety considerations for each season, weather-specific hazards, and how to keep your pet comfortable year-round.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Safety Principles</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While each area of pet safety has its specific considerations, some principles apply across all situations:
            </p>

            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Supervision:</strong> No amount of preparation can replace attentive supervision, especially with young pets or in new environments</li>
              <li><strong>Identification:</strong> Proper identification—microchips, ID tags, and documentation—is essential in all situations</li>
              <li><strong>Know your pet:</strong> Understanding your pet's individual needs, limitations, and behaviors helps you anticipate and prevent problems</li>
              <li><strong>Stay informed:</strong> Pet safety information evolves, and staying current with best practices is important</li>
              <li><strong>Have a plan:</strong> Whether it's for daily safety, travel, or emergencies, having a plan helps you act quickly and effectively</li>
              <li><strong>When in doubt, ask:</strong> Your veterinarian is an excellent resource for safety questions specific to your pet</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Different pets have different needs. Puppies and kittens require extra vigilance. Senior pets may have health conditions that affect their safety needs. Brachycephalic (short-nosed) breeds have unique considerations, especially in hot weather. Outdoor pets have different requirements than indoor pets. Understanding your pet's specific needs helps you provide appropriate protection.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Building a Safety Mindset</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pet safety isn't a one-time task—it's an ongoing mindset. It's about looking at your home, your routines, and your plans through the lens of your pet's safety. It's about asking "What could go wrong?" and "How can I prevent that?" It's about being prepared for the unexpected while enjoying the everyday moments with your pet.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most important thing is to start. Don't wait for an emergency or an accident to think about safety. Take small steps: pet-proof one room, create a basic emergency kit, research travel options, or learn about seasonal hazards. Every step you take makes your pet safer and gives you more confidence as a pet owner.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Resources and Next Steps</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This overview provides a foundation, but each area of pet safety deserves detailed attention. Explore our comprehensive guides on:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <Link href="/pet-safety/home-proofing" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Home Proofing</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Learn how to identify and eliminate household hazards to create a safe environment for your pet.</p>
              </Link>
              
              <Link href="/pet-safety/travel-with-pets" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Travel with Pets</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Complete guide to traveling safely with your pet, whether by car or air.</p>
              </Link>
              
              <Link href="/pet-safety/emergency-preparedness" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Emergency Preparedness</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Learn how to prepare for emergencies and keep your pet safe during disasters.</p>
              </Link>
              
              <Link href="/pet-safety/seasonal-care" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Seasonal Care</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Seasonal safety tips to keep your pet safe and comfortable year-round.</p>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Pet's Safety is in Your Hands</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Keeping your pet safe is one of the most important responsibilities of pet ownership, but it doesn't have to be overwhelming. By understanding the risks, taking practical steps to prevent problems, and being prepared for emergencies, you can create a safe environment where your pet can thrive. Remember, your pet is counting on you to keep them safe—and with the right knowledge and preparation, you can.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Start today. Review your home for hazards, create a basic emergency kit, or learn about seasonal safety. Every step you take makes your pet safer and gives you more confidence as a pet owner. Your pet's safety and well-being are worth the effort, and the peace of mind that comes with being prepared is invaluable.
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
