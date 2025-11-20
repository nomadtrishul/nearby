import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AdoptionSidebar from '@/components/AdoptionSidebar';

export const metadata: Metadata = {
  title: 'Preparing Your Home for a New Pet: Complete Guide | Nearby Pet Care',
  description: 'Complete guide to preparing your home for a new pet. Learn essential supplies, pet-proofing tips, safety measures, and how to create a welcoming environment for dogs and cats. Expert advice for first-time pet owners.',
  keywords: ['preparing for pet', 'pet proofing', 'new pet preparation', 'pet supplies', 'pet home preparation', 'pet safety', 'pet-proofing home', 'new dog preparation', 'new cat preparation', 'pet supplies checklist'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  openGraph: {
    title: 'Preparing Your Home for a New Pet: Complete Guide | Nearby Pet Care',
    description: 'Complete guide to preparing your home for a new pet. Learn essential supplies, pet-proofing tips, and safety measures for dogs and cats.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-adoption/preparing-home',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Preparing Your Home for a New Pet - Complete Guide',
        type: 'image/png',
      },
    ],
    publishedTime: '2024-01-01T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    section: 'Pet Adoption',
    tags: ['pet adoption', 'pet preparation', 'pet proofing', 'pet supplies'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preparing Your Home for a New Pet: Complete Guide',
    description: 'Complete guide to preparing your home for a new pet. Learn essential supplies, pet-proofing tips, and safety measures.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
  },
  alternates: { 
    canonical: 'https://nearbypetcare.com/pet-adoption/preparing-home',
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
};

export default function PreparingHomePage() {
  const baseUrl = 'https://nearbypetcare.com';
  const currentDate = new Date().toISOString();
  const publishedDate = '2024-01-01T00:00:00Z';

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pet Adoption',
        item: `${baseUrl}/pet-adoption`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Preparing Your Home',
        item: `${baseUrl}/pet-adoption/preparing-home`,
      },
    ],
  };

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${baseUrl}/pet-adoption/preparing-home#article`,
    headline: 'Preparing Your Home for a New Pet: Complete Guide',
    description: 'Complete guide to preparing your home for a new pet. Learn essential supplies, pet-proofing tips, safety measures, and how to create a welcoming environment.',
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedDate,
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care Team',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/pet-adoption/preparing-home#webpage`,
    },
    articleSection: 'Pet Adoption',
    keywords: 'pet preparation, pet proofing, pet supplies, new pet, pet safety',
    inLanguage: 'en-US',
  };

  // HowTo Structured Data
  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Prepare Your Home for a New Pet',
    description: 'Step-by-step guide to preparing your home for a new pet, including gathering supplies, pet-proofing, and creating a safe environment.',
    image: `${baseUrl}/og-image.png`,
    totalTime: 'PT2H',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '200-500',
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Gather Essential Supplies',
        text: 'Collect essential supplies including food and water bowls, comfortable bed, crate (for dogs), litter box (for cats), toys, grooming tools, and identification tags.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Pet-Proof Your Home',
        text: 'Remove toxic substances, secure electrical cords, check windows and screens, use baby gates for unsafe areas, and remove small objects that could be swallowed.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Create Safe Zones',
        text: 'Designate a quiet room or area where your pet can retreat, free of hazards, with a bed, water, and toys. This is especially important during the first few days.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Set Up Feeding Area',
        text: 'Choose a quiet location for food and water bowls. For cats, place litter boxes in easily accessible, quiet locations. Ensure bowls are appropriately sized and easy to clean.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Prepare for Arrival',
        text: 'Have everything ready before adoption day. Set up the safe space, prepare feeding areas, and ensure all family members understand the plan and expectations.',
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/pet-adoption/preparing-home#webpage`,
    name: 'Preparing Your Home for a New Pet',
    description: 'Complete guide to preparing your home for a new pet',
    url: `${baseUrl}/pet-adoption/preparing-home`,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
    },
    breadcrumb: breadcrumbStructuredData,
    datePublished: publishedDate,
    dateModified: currentDate,
    mainEntity: articleStructuredData,
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Preparing Your Home for a New Pet Guide">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden" aria-label="Hero Section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Adoption', href: '/pet-adoption' },
            { name: 'Preparing Your Home', href: '/pet-adoption/preparing-home' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🏡</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Home Preparation</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🏡</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Preparing Your Home for a New Pet
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Bringing a new pet home is like welcoming a new family member—they need a safe, comfortable space where they can feel secure and thrive. Learn how to prepare your home, gather essential supplies, and create a welcoming environment for your new companion.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛒</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Essential Supplies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Pet-Proofing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Safe Spaces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Essential Supplies: Building Your Pet's Foundation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Having the right supplies ready before your pet arrives eliminates stress and helps them settle in more quickly. While you can always add more later, these basics are non-negotiable.
            </p>

            <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Food and Feeding Essentials</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Food and water bowls:</strong> Choose sturdy, non-tip bowls that are appropriately sized for your pet. Stainless steel or ceramic are best—they're easy to clean and don't harbor bacteria like plastic can. Consider elevated bowls for larger dogs to reduce neck strain.</li>
                <li><strong>High-quality food:</strong> Ask the shelter what food your pet is currently eating, and start with that to avoid digestive upset. You can gradually transition to a different food later if needed. Make sure it's appropriate for their age, size, and any health conditions.</li>
                <li><strong>Treats for training:</strong> Small, soft treats work best for training sessions. Look for options with limited ingredients, especially if your pet has a sensitive stomach. Treats are powerful tools for building positive associations.</li>
                <li><strong>Food storage:</strong> Airtight containers keep food fresh and prevent pests. Store food in a cool, dry place away from direct sunlight.</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Comfort and Rest</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>A comfortable bed:</strong> Your pet needs a designated place to rest. Choose a bed that's appropriately sized—they should be able to stretch out comfortably. For dogs, consider their sleeping style: some prefer to curl up, while others sprawl out.</li>
                <li><strong>A crate (for dogs):</strong> Crates aren't cages—they're safe spaces that many dogs love. Choose one that's large enough for your dog to stand, turn around, and lie down comfortably. Make it cozy with a soft blanket or bed inside.</li>
                <li><strong>Blankets and towels:</strong> These serve multiple purposes: comfort, warmth, and cleanup. Have several on hand for bedding, covering furniture, and cleaning up accidents.</li>
                <li><strong>A quiet retreat space:</strong> Designate a room or corner where your pet can go when they need quiet time. This is especially important during the first few days when everything is new and potentially overwhelming.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Cats Specifically</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Litter box and litter:</strong> The general rule is one litter box per cat, plus one extra. Place them in quiet, easily accessible locations. Start with the same type of litter the cat was using at the shelter, then you can transition if needed.</li>
                <li><strong>Scratching posts:</strong> Cats need to scratch—it's natural behavior. Provide multiple scratching surfaces (vertical and horizontal) to protect your furniture. Place them near areas where your cat likes to rest.</li>
                <li><strong>Cat trees or perches:</strong> Cats love vertical space. A cat tree or window perch gives them a place to observe their domain and feel secure. Height equals safety in the feline world.</li>
                <li><strong>Hiding spots:</strong> Cardboard boxes, cat tunnels, or covered beds give cats places to retreat when they feel overwhelmed. Don't force them out—let them come to you when they're ready.</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Dogs Specifically</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Leash and collar or harness:</strong> A well-fitted collar with ID tags is essential. Many dogs do better with a harness, especially if they pull. Have both ready so you can see what works best for your dog.</li>
                <li><strong>Poop bags:</strong> Always have these on hand for walks. Being a responsible pet owner means cleaning up after your dog, every single time.</li>
                <li><strong>Long line or retractable leash:</strong> For safe exploration in open areas, a long line gives your dog freedom while you maintain control. Wait until you've built trust before using one.</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Enrichment and Play</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Interactive toys:</strong> Puzzle feeders, treat-dispensing toys, and interactive games keep pets mentally stimulated. Bored pets can develop behavioral issues, so enrichment is crucial.</li>
                <li><strong>Chew toys (for dogs):</strong> Dogs need appropriate things to chew. Provide a variety of textures and sizes. Avoid toys that can be easily destroyed or swallowed.</li>
                <li><strong>Play toys:</strong> Balls, wand toys for cats, tug toys for dogs—these help you bond and provide exercise. Rotate toys to keep things interesting.</li>
                <li><strong>Comfort items:</strong> Some pets love stuffed animals or soft toys. These can be especially comforting for rescue pets adjusting to a new home.</li>
              </ul>
            </div>

            <div className="bg-pink-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Grooming and Health</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Basic grooming tools:</strong> Brushes appropriate for your pet's coat type, nail clippers, and pet-safe shampoo. Regular grooming keeps your pet healthy and helps you bond.</li>
                <li><strong>Identification:</strong> A collar with ID tags is essential, but also consider microchipping. Tags can fall off, but a microchip is permanent. Make sure your contact information is current.</li>
                <li><strong>First aid kit:</strong> Have basic supplies on hand: gauze, bandages, antiseptic, and your vet's emergency number. Better to have it and not need it than need it and not have it.</li>
                <li><strong>Cleaning supplies:</strong> Enzyme-based cleaners for accidents, paper towels, and gloves. Accidents happen, especially during the adjustment period, so be prepared.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Pet-Proofing Your Home: Creating a Safe Environment</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Your home is full of potential hazards that you might not even notice until you see things from your pet's perspective. Pet-proofing is about preventing accidents before they happen, not just reacting to them afterward.
            </p>

            <div className="bg-red-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Remove Toxic Substances</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Household cleaners and chemicals:</strong> Store all cleaning products, pesticides, and chemicals in secure cabinets that pets can't access. Many common household items are toxic to pets.</li>
                <li><strong>Medications:</strong> Human medications can be deadly to pets. Keep all medications in secure containers, and never leave pills where pets can reach them.</li>
                <li><strong>Toxic plants:</strong> Many common houseplants are poisonous to pets. Research your plants and remove or relocate toxic ones. Lilies are especially dangerous for cats, while sago palms are toxic to dogs.</li>
                <li><strong>Food hazards:</strong> Chocolate, grapes, onions, garlic, xylitol (found in sugar-free products), and alcohol are just a few foods that can be toxic. Keep these well out of reach, and educate everyone in your household.</li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Secure Your Space</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Electrical cords:</strong> Pets, especially puppies and kittens, love to chew on cords. Use cord covers, hide cords behind furniture, or use bitter-tasting sprays to deter chewing. Unplug appliances when not in use when possible.</li>
                <li><strong>Windows and screens:</strong> Ensure all windows have secure screens. Cats can fall from high windows, and both cats and dogs can escape through open windows. Check that screens are properly installed and in good repair.</li>
                <li><strong>Doors and gates:</strong> Consider baby gates to block off unsafe areas like stairways or rooms with hazards. Make sure exterior doors close securely and consider adding door alarms if you're worried about escapes.</li>
                <li><strong>Small objects:</strong> Remove or secure small items that could be swallowed: coins, buttons, rubber bands, hair ties, and children's toys. Get down on your hands and knees to see things from your pet's perspective.</li>
              </ul>
            </div>

            <div className="bg-teal-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Kitchen and Bathroom Safety</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Trash cans:</strong> Use secure, lidded trash cans that pets can't open. Trash contains many hazards, from food scraps to sharp objects to toxic substances.</li>
                <li><strong>Toilet lids:</strong> Keep toilet lids closed. Toilet bowl cleaners can be toxic, and small pets can drown. It's a simple habit that prevents big problems.</li>
                <li><strong>Dishwashers and washing machines:</strong> Always check before closing doors. Curious pets can climb inside, and the results can be tragic.</li>
                <li><strong>Stovetops:</strong> Use back burners when possible, and turn pot handles inward. Consider stove knob covers if your pet is tall enough to reach them.</li>
              </ul>
            </div>

            <div className="bg-cyan-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Create Safe Zones</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Designate a safe room:</strong> Choose a quiet room where your pet can retreat. This should be free of hazards, with a bed, water, and some toys. This is especially important during the first few days.</li>
                <li><strong>Block off unsafe areas:</strong> Use baby gates or closed doors to prevent access to areas with hazards like garages, basements, or rooms with lots of cords and electronics.</li>
                <li><strong>Secure furniture:</strong> Anchor tall furniture like bookshelves to walls. Cats love to climb, and unsecured furniture can tip over, causing serious injury.</li>
                <li><strong>Cover or remove fragile items:</strong> During the adjustment period, consider removing or securing breakable decorations. Accidents happen, and you don't want to stress about things while your pet is settling in.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Creating a Welcoming Atmosphere</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Beyond physical supplies and safety, think about the emotional environment you're creating. Your new pet needs to feel safe, secure, and welcome.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Set up before they arrive:</strong> Have everything ready before adoption day. The last thing you want is to be running to the store while your new pet is trying to adjust to their new home.</li>
              <li><strong>Create routines:</strong> Pets thrive on predictability. Plan your feeding schedule, walk times, and play sessions. Consistency helps them feel secure.</li>
              <li><strong>Prepare your family:</strong> Make sure everyone knows the rules and expectations. Consistency from all family members helps your pet learn faster and feel more secure.</li>
              <li><strong>Plan for quiet time:</strong> The first few days should be calm. Limit visitors, keep noise levels down, and give your pet space to explore at their own pace.</li>
              <li><strong>Be patient:</strong> Adjustment takes time. Some pets settle in immediately, while others need weeks or months. Don't rush the process—let your pet set the pace.</li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mt-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Final Thoughts</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Preparing your home for a new pet might seem like a lot of work, but it's an investment in your relationship with your new companion. A well-prepared home sets the stage for a smooth transition, reduces stress for both you and your pet, and helps prevent accidents and behavioral issues. Remember, you can always adjust things as you learn more about your pet's preferences and needs. The most important thing is creating a safe, welcoming space where your new family member can thrive.
              </p>
            </div>
          </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-adoption" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded" aria-label="Back to Pet Adoption page">← Back to Pet Adoption</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <AdoptionSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

