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
  title: 'Pet Emergency Preparedness Guide',
  description: 'Learn how to prepare for emergencies with your pet. Create an emergency kit, develop an evacuation plan, and ensure your pet\'s safety during natural disasters and other crisis situations.',
  keywords: ['pet emergency', 'pet disaster preparedness', 'pet emergency kit', 'pet evacuation', 'pet emergency plan', 'natural disaster pets', 'pet safety emergency'],
  pathname: '/pet-safety/emergency-preparedness',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00+00:00',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Safety',
  tags: ['pet emergency', 'pet disaster preparedness', 'pet emergency kit', 'pet evacuation'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-safety/emergency-preparedness',
      'en-GB': '/pet-safety/emergency-preparedness',
      'en-CA': '/pet-safety/emergency-preparedness',
      'en-AU': '/pet-safety/emergency-preparedness',
    },
  },
});

export default function EmergencyPreparednessPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  const publishedDate = '2024-01-01T00:00:00+00:00';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Safety', url: '/pet-safety' },
    { name: 'Emergency Preparedness', url: '/pet-safety/emergency-preparedness' },
  ];

  // Generate structured data using centralized utilities
  const articleStructuredData = generateBlogPostingStructuredData({
    headline: 'Pet Emergency Preparedness Guide - Disaster Planning for Pets',
    description: 'Learn how to prepare for emergencies with your pet. Create an emergency kit, develop an evacuation plan, and ensure your pet\'s safety during natural disasters.',
    url: '/pet-safety/emergency-preparedness',
    datePublished: publishedDate,
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
    image: '/og-image.png',
    tags: ['pet emergency', 'disaster preparedness', 'emergency kit', 'evacuation plan'],
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Emergency Preparedness Guide - Disaster Planning for Pets',
    description: 'Learn how to prepare for emergencies with your pet. Create an emergency kit, develop an evacuation plan, and ensure your pet\'s safety during natural disasters.',
    url: '/pet-safety/emergency-preparedness',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(articleStructuredData)} />
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
            { name: 'Emergency Preparedness', href: '/pet-safety/emergency-preparedness' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🚨</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Emergency Prep</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🚨</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Emergency Preparedness
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              When disaster strikes, having a plan can mean the difference between chaos and calm. Learn how to prepare for emergencies and ensure your pet's safety during natural disasters, evacuations, and other crisis situations.
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
              No one likes to think about emergencies, but the reality is that disasters can happen anywhere, anytime. Whether it's a natural disaster like a hurricane, wildfire, or earthquake, or a man-made crisis like a house fire or chemical spill, being prepared can save lives—including your pet's. The key to emergency preparedness isn't just having supplies; it's having a plan, knowing what to do, and being ready to act quickly when every second counts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Pet Emergency Preparedness Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              During emergencies, pets are often overlooked or left behind. Many evacuation shelters don't accept pets, and in the chaos of a crisis, it's easy to forget essential items or make hasty decisions. By preparing in advance, you ensure that your pet has the best chance of staying safe and healthy, even in the most challenging circumstances. Remember: if it's not safe for you, it's not safe for your pet either.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Building Your Pet Emergency Kit</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your pet emergency kit should contain everything your pet needs to survive for at least 3-7 days. Store it in an easily accessible location, and make sure everyone in your household knows where it is. Check and refresh the contents every few months to ensure food hasn't expired and medications are current.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Food and Water</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pack at least a 3-7 day supply of your pet's regular food in an airtight, waterproof container. Rotate this food regularly so it doesn't expire. Include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Dry food in a sealed container</li>
              <li>Canned food (don't forget a manual can opener if needed)</li>
              <li>At least one gallon of water per pet per day (more in hot climates)</li>
              <li>Food and water bowls (collapsible bowls are space-efficient)</li>
              <li>Treats (these can help reduce stress)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Medical Supplies and Records</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Medical information is crucial during emergencies. Include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>A 7-14 day supply of any medications your pet takes regularly</li>
              <li>Copies of vaccination records and health certificates</li>
              <li>Medical history and list of current medications</li>
              <li>Contact information for your regular veterinarian</li>
              <li>Contact information for emergency veterinary clinics</li>
              <li>Basic first aid supplies (gauze, bandages, antiseptic, tweezers, scissors)</li>
              <li>Pet first aid guide or book</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Store medical records in a waterproof container or bag. Consider keeping digital copies on a USB drive or in cloud storage as a backup.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Identification and Documentation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In the chaos of an emergency, pets can easily become separated from their owners. Proper identification is essential:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Current photos of your pet (including you with your pet for proof of ownership)</li>
              <li>Photos showing any distinctive markings or features</li>
              <li>Microchip number and registration information</li>
              <li>Copy of license and registration documents</li>
              <li>Description of your pet (breed, age, weight, color, markings)</li>
              <li>List of your pet's habits and behaviors (helpful if someone else needs to care for them)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Comfort Items</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Emergencies are stressful for pets too. Familiar items can help reduce anxiety:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Favorite toys</li>
              <li>Blanket or bed</li>
              <li>Familiar scented items (an unwashed t-shirt with your scent)</li>
              <li>Calming aids if your pet uses them (pheromone sprays, calming treats)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Containment and Safety</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You'll need a way to safely transport and contain your pet:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Sturdy carrier or crate (large enough for your pet to stand, turn around, and lie down)</li>
              <li>Leash and harness (have backups in case one breaks)</li>
              <li>Collar with ID tags (include your cell phone number)</li>
              <li>Muzzle if your pet might need one (even friendly pets can bite when stressed)</li>
              <li>Pet seatbelt or restraint for car travel</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sanitation and Cleanup</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Don't forget the practical items:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Litter box and litter (for cats)</li>
              <li>Poop bags or waste disposal supplies</li>
              <li>Paper towels</li>
              <li>Disinfectant wipes</li>
              <li>Plastic bags for waste</li>
              <li>Trash bags</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Creating Your Emergency Plan</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A well-thought-out plan is just as important as having supplies. Take time to think through different scenarios and what you would do in each situation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Identify Pet-Friendly Evacuation Locations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Not all evacuation shelters accept pets. Research your options in advance:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Contact your local emergency management office to find pet-friendly shelters</li>
              <li>Identify pet-friendly hotels and motels outside your immediate area</li>
              <li>Make a list of friends or family members who could temporarily house your pet</li>
              <li>Research boarding facilities or veterinary clinics that might offer emergency boarding</li>
              <li>Contact local animal shelters to see if they offer emergency foster programs</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Keep a list of these locations with addresses and phone numbers in your emergency kit and saved in your phone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Designate Emergency Caregivers</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What happens if you're not home when an emergency occurs? Or if you're unable to care for your pet? Designate trusted neighbors, friends, or family members who can:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Access your home to retrieve your pet</li>
              <li>Know where your emergency kit is located</li>
              <li>Have keys or access codes to your home</li>
              <li>Know your pet's routine, medications, and special needs</li>
              <li>Have your contact information and veterinarian's information</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Make sure these designated caregivers are willing and able to help, and keep their contact information easily accessible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Practice Your Evacuation Plan</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Don't wait for an emergency to figure out how to get your pet into their carrier or how long it takes to gather everything. Practice:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Loading your pet into their carrier quickly</li>
              <li>Gathering your emergency kit</li>
              <li>Loading everything into your vehicle</li>
              <li>Driving to your evacuation location</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Time yourself and identify any obstacles or issues. This practice will help you act quickly and calmly during a real emergency.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Stay Informed</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Know how you'll receive emergency alerts in your area:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Sign up for local emergency alert systems</li>
              <li>Download weather and emergency apps</li>
              <li>Follow local emergency management on social media</li>
              <li>Have a battery-powered or hand-crank radio</li>
              <li>Know the difference between watches and warnings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations for Different Disasters</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Hurricanes and Flooding</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you're in a flood-prone area, evacuate early—don't wait until the last minute. Flooding can happen quickly, and roads may become impassable. Never leave your pet tied up or confined where they can't escape rising water. If you must shelter in place, move to the highest level of your home and bring your pet with you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Wildfires</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Evacuate early when wildfires threaten. Smoke can be dangerous for pets, especially those with respiratory issues. Keep pets indoors with windows closed if smoke is present. Have a plan for where to go, as wildfires can spread quickly and change direction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Earthquakes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Secure heavy items that could fall and injure your pet. After an earthquake, check your pet for injuries and be cautious of broken glass, debris, and gas leaks. Keep your pet on a leash when going outside, as familiar landmarks may be gone and your pet could become disoriented.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">House Fires</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Install smoke detectors and consider monitored fire alarms. Keep leashes and carriers near exits. Practice fire drills with your pet. If you must escape without your pet, tell firefighters immediately—they will try to rescue pets when it's safe to do so.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Microchipping and Identification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the most important things you can do for your pet's safety is ensure they're properly identified. Collars and tags can fall off, but microchips are permanent. Make sure your pet is microchipped and that your contact information in the microchip registry is current. If you move or change phone numbers, update the registry immediately. A microchip is only useful if it can be traced back to you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Financial Preparedness</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Emergencies can be expensive. Consider:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Setting aside an emergency fund for pet-related expenses</li>
              <li>Keeping a credit card available for emergency veterinary care</li>
              <li>Researching pet insurance options</li>
              <li>Knowing which veterinary clinics offer payment plans</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">After the Emergency</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once the immediate danger has passed, there's still work to do:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Check your pet for injuries or signs of stress</li>
              <li>Keep your pet on a leash when returning home—familiar areas may look different and be dangerous</li>
              <li>Watch for hazards like downed power lines, debris, or contaminated water</li>
              <li>Gradually return to normal routines to help reduce stress</li>
              <li>Monitor your pet's behavior and health for several days after the emergency</li>
              <li>If your pet was lost, contact local shelters, veterinarians, and post on social media immediately</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Emergency preparedness might seem like a lot of work, but it's an investment in your pet's safety and your peace of mind. Start small—build your emergency kit over time, create a basic plan, and practice it. The most important thing is to start preparing now, before an emergency happens. When disaster strikes, you'll be grateful you took the time to prepare. Your pet is counting on you to keep them safe, and with proper preparation, you can.
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
