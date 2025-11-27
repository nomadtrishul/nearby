import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetSafetySidebar from '@/components/PetSafetySidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';
import { getBaseUrl, getDefaultOgImage } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Home Proofing - Complete Safety Guide',
  description: 'Complete guide to pet-proofing your home. Learn how to identify and eliminate common household hazards to keep your pet safe. Expert tips included.',
  keywords: ['pet proofing', 'home safety pets', 'pet hazards', 'pet home safety', 'pet proofing checklist', 'dog proofing', 'cat proofing', 'pet safety home'],
  pathname: '/pet-safety/home-proofing',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00+00:00',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Safety',
  tags: ['pet proofing', 'home safety pets', 'pet hazards', 'pet home safety'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-safety/home-proofing',
      'en-GB': '/pet-safety/home-proofing',
      'en-CA': '/pet-safety/home-proofing',
      'en-AU': '/pet-safety/home-proofing',
    },
  },
});

export default function HomeProofingPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  const pageUrl = `${baseUrl}/pet-safety/home-proofing`;
  
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
      { '@type': 'ListItem', position: 3, name: 'Home Proofing', item: pageUrl },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Home Proofing - Complete Safety Guide',
    description: 'Complete guide to pet-proofing your home. Learn how to identify and eliminate common household hazards to keep your pet safe.',
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
      alt: 'Pet Home Proofing Guide',
    },
    articleSection: 'Pet Safety',
    inLanguage: 'en-US',
    keywords: 'pet proofing, home safety, pet hazards, pet safety',
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
    name: 'Pet Home Proofing - Complete Safety Guide',
    description: 'Complete guide to pet-proofing your home. Learn how to identify and eliminate common household hazards to keep your pet safe.',
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
            { name: 'Home Proofing', href: '/pet-safety/home-proofing' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🏠</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Home Safety</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🏠</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Home Proofing
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your home should be a safe haven for your pet, but everyday items and common household features can pose serious risks. Learn how to identify and eliminate hazards to create a truly pet-safe environment.
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
              When you bring a pet into your home, you're not just adding a new family member—you're also introducing a curious explorer who will investigate every nook and cranny. What seems perfectly safe to us can be a hidden danger to our pets. Pet-proofing isn't about creating a sterile environment; it's about understanding potential hazards and taking simple steps to prevent accidents. Whether you're preparing for a new puppy, kitten, or welcoming an older pet, this guide will help you create a safe space where your pet can thrive.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Kitchen: A Hotspot for Hazards</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The kitchen is often the heart of the home, but it's also filled with potential dangers for pets. From toxic foods to hot surfaces, here's what to watch out for:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Toxic Foods</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many common foods are dangerous or even deadly to pets. Keep these items securely stored and never leave them unattended:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Chocolate:</strong> Contains theobromine, which is toxic to both dogs and cats</li>
              <li><strong>Onions and garlic:</strong> Can cause anemia in pets</li>
              <li><strong>Grapes and raisins:</strong> Can cause kidney failure in dogs</li>
              <li><strong>Xylitol:</strong> Found in sugar-free gum, candy, and some peanut butters—extremely toxic to dogs</li>
              <li><strong>Alcohol:</strong> Even small amounts can be dangerous</li>
              <li><strong>Caffeine:</strong> Found in coffee, tea, and energy drinks</li>
              <li><strong>Macadamia nuts:</strong> Toxic to dogs</li>
              <li><strong>Avocado:</strong> Contains persin, which can be harmful</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When cooking, be extra careful. A dropped piece of food might seem harmless, but it could contain ingredients that are dangerous for your pet. Keep countertops clear, and never leave food unattended where pets can reach it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Hot Surfaces and Appliances</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Stovetops, ovens, and toasters can cause serious burns. Use back burners when possible, and turn pot handles inward so they can't be knocked over. Consider using stove knob covers to prevent pets from accidentally turning on burners. Keep small appliances unplugged when not in use, and be cautious with hot liquids—a spilled cup of coffee can cause severe burns.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Trash and Garbage</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Trash cans are like treasure troves to curious pets, but they're filled with dangers: spoiled food, sharp objects, plastic wrap, and more. Use a trash can with a secure lid, or store it in a cabinet. Consider a pet-proof trash can if your pet is particularly determined.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Living Room and Common Areas</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These spaces are where we relax, but they're also where many pet accidents happen. Here's how to make them safer:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Electrical Cords and Outlets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Electrical cords are tempting chew toys for puppies and kittens, but chewing through a live wire can cause severe burns, electrical shock, or even death. To protect your pet:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Use cord covers or conceal cords behind furniture</li>
              <li>Unplug cords when not in use</li>
              <li>Use bitter-tasting sprays designed to deter chewing</li>
              <li>Consider using outlet covers, especially if you have a curious pet</li>
              <li>Keep cords out of reach or secured to baseboards</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Small Objects and Choking Hazards</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Anything small enough to fit in your pet's mouth is a potential choking hazard. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Coins, buttons, and small toys</li>
              <li>Hair ties and rubber bands</li>
              <li>Batteries (especially button batteries, which are extremely dangerous)</li>
              <li>Jewelry and small decorative items</li>
              <li>Children's toys with small parts</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Keep small items stored away, and regularly scan your floors and low surfaces for potential hazards. If you have children, teach them to keep their small toys picked up.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Windows and Balconies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Open windows and balconies can be deadly, especially for cats who love to perch. Install secure screens on all windows, and never leave windows open unattended if they don't have screens. For balconies, ensure railings are close enough together that your pet can't slip through. Consider adding netting or barriers if needed. Remember that cats can fall from high places—even if they land on their feet, they can sustain serious injuries.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Houseplants</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many common houseplants are toxic to pets. Some of the most dangerous include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Lilies (extremely toxic to cats, can cause kidney failure)</li>
              <li>Pothos and philodendron</li>
              <li>Dieffenbachia</li>
              <li>Sago palm</li>
              <li>Azaleas and rhododendrons</li>
              <li>Oleander</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Research any plant before bringing it into your home. Keep toxic plants completely out of reach, or better yet, choose pet-safe alternatives. Even non-toxic plants can cause stomach upset if ingested, so it's best to discourage plant chewing altogether.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bathroom: Hidden Dangers</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bathrooms contain numerous hazards that many pet owners overlook:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Medications</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Human medications are one of the most common causes of pet poisoning. Keep all medications—prescription and over-the-counter—in secure cabinets that pets can't access. This includes vitamins and supplements. Never leave pill bottles on countertops or nightstands. If you drop a pill, find it immediately—pets are quick to investigate anything that falls.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Cleaning Products</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most cleaning products are toxic if ingested. Store them in locked cabinets or high shelves. Be especially careful with toilet bowl cleaners—keep toilet lids closed, and consider using pet-safe alternatives. When cleaning, keep pets out of the area until surfaces are dry and fumes have dissipated.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Toilet Water</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While it might seem harmless, toilet water can contain cleaning chemicals, bacteria, and other contaminants. Keep toilet lids closed, especially if you use automatic toilet bowl cleaners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bedroom and Other Private Spaces</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Even private spaces need pet-proofing attention:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Laundry and Clothing</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Socks, underwear, and other small clothing items can be tempting chew toys, but they can cause intestinal blockages if swallowed. Keep laundry in hampers with lids, and never leave small items on the floor. Check pockets before doing laundry—items like gum, medications, or small objects can be dangerous.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bedding and Blankets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While pets love to snuggle in beds, be aware of potential hazards. Loose threads, buttons, or decorative elements can be chewed off and swallowed. Ensure bedding is in good condition, and remove any loose items that could be ingested.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Garage and Storage Areas</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These areas are often the most dangerous for pets and should be kept off-limits:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Chemicals and Tools</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Antifreeze is particularly dangerous—it has a sweet taste that attracts pets but is extremely toxic. Even a small amount can be fatal. Store all automotive fluids, pesticides, fertilizers, and other chemicals in secure, pet-proof containers. Keep tools stored safely, as sharp objects can cause serious injuries.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Garage Doors</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Automatic garage doors can be dangerous. Never leave pets unattended in the garage, and ensure doors are fully closed before leaving. Consider installing safety sensors if your garage door doesn't already have them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet-Proofing Checklist: Room by Room</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use this comprehensive checklist to ensure you've covered all the bases:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Kitchen</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Secure all toxic foods in cabinets or the refrigerator</li>
              <li>Use stove knob covers</li>
              <li>Keep trash in a secure container</li>
              <li>Store cleaning products safely</li>
              <li>Keep hot liquids away from edges</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Living Areas</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Secure or conceal electrical cords</li>
              <li>Remove or secure small objects</li>
              <li>Install window screens</li>
              <li>Remove or secure toxic plants</li>
              <li>Keep medications out of reach</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bathroom</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Store all medications in secure cabinets</li>
              <li>Keep cleaning products locked away</li>
              <li>Close toilet lids</li>
              <li>Keep bathroom doors closed when not in use</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Throughout the Home</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Secure loose cords and wires</li>
              <li>Remove small objects that could be swallowed</li>
              <li>Keep doors to dangerous areas (garage, basement) closed</li>
              <li>Ensure all windows have secure screens</li>
              <li>Store chemicals and toxins safely</li>
              <li>Keep emergency vet numbers easily accessible</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations by Pet Type</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Puppies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Puppies are especially curious and prone to chewing. They'll investigate everything with their mouths. Be extra vigilant about small objects, cords, and anything at their level. Consider using baby gates to limit access to certain areas until they're better trained.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Kittens</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Kittens love to climb and explore high places. Secure bookshelves and tall furniture to prevent tipping. Be especially careful with windows and balconies. Keep small objects out of reach, as kittens love to bat things around and may accidentally ingest them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Senior Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Older pets may have different needs. They might be less steady on their feet, so remove tripping hazards. Ensure they can easily access food, water, and their favorite resting spots. Be aware that senior pets may have different dietary restrictions or medication needs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ongoing Vigilance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pet-proofing isn't a one-time task—it's an ongoing process. As your pet grows and changes, new hazards may emerge. Regularly walk through your home from your pet's perspective, looking for potential dangers. When you bring new items into your home, consider whether they pose any risks. And remember, supervision is one of the best safety tools you have. No amount of pet-proofing can replace keeping an eye on your pet, especially when they're young or in new environments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When Accidents Happen</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Despite our best efforts, accidents can still occur. Know the signs of poisoning or ingestion of foreign objects: vomiting, diarrhea, lethargy, difficulty breathing, seizures, or unusual behavior. Keep the number for the ASPCA Animal Poison Control Center (888-426-4435) and your emergency veterinarian handy. Time is critical in poisoning cases, so don't wait to seek help if you suspect your pet has ingested something dangerous.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Creating a pet-safe home might seem overwhelming at first, but taking it room by room and hazard by hazard makes it manageable. Your pet's safety is worth the effort, and a well-pet-proofed home gives you peace of mind and your pet the freedom to explore safely.
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
