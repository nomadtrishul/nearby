import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PuppiesKittensSidebar from '@/components/PuppiesKittensSidebar';

export const metadata: Metadata = {
  title: 'Puppies & Kittens Care Overview: Complete Guide for Young Pets | Nearby Pet Care',
  description: 'Complete overview of puppies and kittens care topics. Essential guides covering the first 30 days, vaccinations, training, nutrition, and health for young pets.',
  keywords: ['puppy care overview', 'kitten care overview', 'young pet care', 'puppy care guide', 'kitten care guide', 'new pet care'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Puppies & Kittens Care Overview | Nearby Pet Care',
    description: 'Complete overview of puppies and kittens care topics. Essential guides for caring for young pets.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/puppies-kittens/pillar',
    siteName: 'Nearby Pet Care',
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Puppies & Kittens Care Overview',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppies & Kittens Care Overview | Nearby Pet Care',
    description: 'Complete overview of puppies and kittens care topics. Essential guides for caring for young pets.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
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
  alternates: { 
    canonical: 'https://nearbypetcare.com/puppies-kittens/pillar',
  },
  category: 'Pet Care',
};

export default function PuppiesKittensPillarPage() {
  const currentDate = new Date().toISOString();
  
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Puppies & Kittens Care Overview',
    description: 'Complete overview of puppies and kittens care topics. Essential guides covering the first 30 days, vaccinations, training, nutrition, and health for young pets.',
    url: 'https://nearbypetcare.com/puppies-kittens/pillar',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    about: {
      '@type': 'Thing',
      name: 'Puppy and Kitten Care',
    },
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Puppies & Kittens',
        item: 'https://nearbypetcare.com/puppies-kittens',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Overview',
        item: 'https://nearbypetcare.com/puppies-kittens/pillar',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/WebPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Puppies & Kittens', href: '/puppies-kittens' },
            { name: 'Overview', href: '/puppies-kittens/pillar' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">📚</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Care Overview</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🐾</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Puppies & Kittens Care Overview
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about caring for your new puppy or kitten. From those first crucial days to health, training, and beyond.
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
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Welcoming a puppy or kitten into your home is one of life's greatest joys. Those tiny paws, curious eyes, and endless energy bring so much happiness—but they also come with a lot of responsibility. Caring for a young pet requires knowledge, patience, and a whole lot of love. Whether you're a first-time pet parent or adding another furry family member, understanding the essentials of puppy and kitten care will help you give them the best possible start in life.
                </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">The First 30 Days: Setting the Foundation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Those first few weeks are absolutely critical. This is when your new pet is learning about their new world, building trust with you, and establishing routines that will shape their behavior for years to come. During this time, you'll be focused on helping them feel safe, getting them comfortable with their new environment, and starting to build the foundation for training and socialization.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The first week is all about adjustment. Your puppy or kitten is experiencing everything for the first time—new sounds, smells, people, and routines. They might be excited, nervous, or a combination of both. Creating a safe space, establishing feeding and sleep schedules, and scheduling that first veterinary visit are your top priorities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              As you move into weeks two and three, you'll start seeing their personality emerge. This is when you can begin expanding their world—introducing them to new experiences, continuing with house training, and starting to work on basic commands. By week four, you and your pet should be settling into a comfortable rhythm, and the real bonding begins.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <Link href="/puppies-kittens/first-30-days" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Learn more about navigating those crucial first 30 days →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Vaccination Schedules: Protecting Their Health</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Vaccinations are one of the most important things you can do to protect your young pet's health. These shots help their developing immune systems fight off serious, sometimes life-threatening diseases. Understanding the vaccination schedule and working closely with your veterinarian ensures your pet gets the protection they need at the right times.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Puppies typically start their vaccination series around 6-8 weeks of age, receiving core vaccines like DHPP (protecting against distemper, hepatitis, parainfluenza, and parvovirus) and eventually rabies. The schedule involves a series of shots given every 3-4 weeks until they're about 16 weeks old, with boosters around their first birthday.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Kittens follow a similar timeline, starting around 6-8 weeks with the FVRCP vaccine (protecting against feline viral rhinotracheitis, calicivirus, and panleukopenia). Your veterinarian will also discuss whether your kitten needs the FeLV (Feline Leukemia Virus) vaccine based on their lifestyle and risk factors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <Link href="/puppies-kittens/vaccination-timeline" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Get the complete vaccination timeline and schedule →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Early Training: Building Good Habits</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Training isn't just about teaching tricks—it's about building communication, trust, and setting your pet up for a lifetime of good behavior. The earlier you start, the easier it is. Young pets are like sponges, ready to learn and eager to please (well, most of the time).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The foundation of effective training is positive reinforcement. This means rewarding the behaviors you want to see more of—when your pet does something right, they get something good (a treat, praise, or playtime). This creates positive associations and makes them want to repeat that behavior. It's not about being permissive; it's about being smart and kind.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              For puppies, focus on name recognition, basic commands like "sit" and "come," house training, and crate training. Keep sessions short (2-5 minutes), be consistent, and always end on a positive note. For kittens, litter box training usually comes naturally, but you can also work on name recognition, coming when called, and redirecting scratching behavior to appropriate surfaces.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <Link href="/puppies-kittens/training-basics" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Explore training basics and techniques →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Nutrition for Growing Pets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Proper nutrition is crucial during these early months. Puppies and kittens have different nutritional needs than adult pets—they're growing rapidly and need more calories, protein, and specific nutrients to support healthy development. Feeding them a high-quality food formulated specifically for their life stage is essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Your veterinarian can help you choose the right food and establish a feeding schedule. Most puppies and kittens need to eat multiple small meals throughout the day (typically 3-4 meals for very young pets, gradually reducing to 2-3 meals as they grow). Always provide fresh water, and be careful not to overfeed—while they need more calories than adults, obesity in young pets can lead to health problems later in life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Socialization: Shaping Their Worldview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Socialization is about exposing your pet to a wide variety of people, animals, environments, sounds, and experiences in a positive way. This critical window (typically between 3-16 weeks for puppies and 2-9 weeks for kittens) shapes how they'll respond to new situations throughout their life.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Well-socialized pets are more confident, less fearful, and better equipped to handle new experiences. Introduce your pet to different people (including children, with supervision), various sounds, different surfaces and environments, and other friendly, vaccinated pets. Always keep experiences positive and never force interactions. If your pet seems scared, back off and try again later with a gentler approach.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Common Health Concerns</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Young pets are more vulnerable to certain health issues, so it's important to know what to watch for. Common concerns include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Parasites:</strong> Puppies and kittens are particularly susceptible to worms, fleas, and ticks. Your veterinarian will discuss prevention and treatment options.</li>
              <li><strong>Respiratory infections:</strong> Upper respiratory infections are common in young pets, especially those from shelters or multi-pet environments.</li>
              <li><strong>Digestive issues:</strong> Sensitive stomachs and occasional diarrhea can occur, often due to diet changes or stress.</li>
              <li><strong>Growth-related issues:</strong> Rapid growth can sometimes lead to joint or bone problems, especially in large breed puppies.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Regular veterinary checkups, keeping up with vaccinations, and monitoring your pet's behavior and health will help catch any issues early. Trust your instincts—if something seems off, don't hesitate to call your veterinarian.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Creating a Safe Environment</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Puppy-proofing or kitten-proofing your home is essential. These curious little explorers will investigate everything, and it's your job to make sure their investigations are safe. Remove or secure anything that could be harmful—electrical cords, toxic plants, small objects they could swallow, cleaning supplies, and medications should all be out of reach.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Create designated safe spaces where your pet can retreat when they need quiet time. For puppies, this might be a crate or puppy-proofed room. For kittens, a quiet room with a cozy bed, litter box, food, and water works perfectly. Make these spaces comfortable and inviting, not isolating.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">The Importance of Routine</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Young pets thrive on routine. Consistent feeding times, potty breaks, play sessions, and sleep schedules help them feel secure and make training easier. While it might seem rigid, having a routine actually reduces stress for your pet and makes your life easier too. They'll learn what to expect and when, which helps prevent accidents and behavioral issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Building the Bond</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Beyond all the practical aspects of care, remember to enjoy this special time. These early weeks and months are when you're building a bond that will last a lifetime. Spend quality time together—play, cuddle, explore, and just be present. The trust and connection you build now will shape your relationship forever.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Yes, there will be challenges. There will be accidents, sleepless nights, and moments of frustration. But there will also be firsts—first successful command, first night of sleeping through, first time they come when called. Celebrate these moments. They're all part of the journey.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">You're Not Alone</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Remember, every pet parent has been where you are. Don't hesitate to reach out to your veterinarian, a professional trainer, or fellow pet owners when you need support or have questions. There's no such thing as a silly question when it comes to your pet's health and wellbeing. You're doing great, and with patience, consistency, and lots of love, you and your new pet will navigate these early days together successfully.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/puppies-kittens/first-30-days" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">First 30 Days</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Navigate those crucial first weeks with confidence</p>
              </Link>
              <Link href="/puppies-kittens/vaccination-timeline" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vaccination Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Understand when and why vaccinations are needed</p>
              </Link>
              <Link href="/puppies-kittens/training-basics" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Training Basics</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Start building good habits from day one</p>
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link href="/puppies-kittens" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Puppies & Kittens</Link>
            </div>
              </div>
            </div>
            {/* Sidebar */}
            <aside className="lg:col-span-1" aria-label="Related resources">
              <PuppiesKittensSidebar />
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
