import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PuppiesKittensSidebar from '@/components/PuppiesKittensSidebar';

export const metadata: Metadata = {
  title: 'First 30 Days with Your New Puppy or Kitten: Complete Care Guide | Nearby Pet Care',
  description: 'Complete guide to the first 30 days with your new puppy or kitten. Essential tips for care, health, bonding, house training, and setting up routines. Expert advice for new pet parents.',
  keywords: ['first 30 days puppy', 'first 30 days kitten', 'new puppy guide', 'new kitten guide', 'puppy care first month', 'kitten care first month', 'bringing home puppy', 'bringing home kitten'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'First 30 Days with Your New Puppy or Kitten | Nearby Pet Care',
    description: 'Complete guide to the first 30 days with your new puppy or kitten. Essential tips for care, health, and bonding.',
    type: 'article',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/puppies-kittens/first-30-days',
    siteName: 'Nearby Pet Care',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    section: 'Puppies & Kittens',
    tags: ['puppy care', 'kitten care', 'first 30 days', 'new pet guide', 'pet care'],
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'First 30 Days with Your New Puppy or Kitten',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First 30 Days with Your New Puppy or Kitten | Nearby Pet Care',
    description: 'Complete guide to the first 30 days with your new puppy or kitten. Essential tips for care, health, and bonding.',
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
    canonical: 'https://nearbypetcare.com/puppies-kittens/first-30-days',
  },
  category: 'Pet Care',
};

export default function First30DaysPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'First 30 Days with Your New Puppy or Kitten: Complete Care Guide',
    description: 'Complete guide to the first 30 days with your new puppy or kitten. Essential tips for care, health, bonding, house training, and setting up routines.',
    url: 'https://nearbypetcare.com/puppies-kittens/first-30-days',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/puppies-kittens/first-30-days',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'First 30 Days with Your New Puppy or Kitten',
    },
    articleSection: 'Puppies & Kittens',
    articleBody: 'Complete guide covering the first 30 days with a new puppy or kitten, including setting up their space, veterinary visits, establishing routines, house training, socialization, and building bonds.',
    keywords: 'first 30 days puppy, first 30 days kitten, new puppy guide, new kitten guide, puppy care first month, kitten care first month',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 2500,
    timeRequired: 'PT20M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Puppy and Kitten Care',
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
        name: 'First 30 Days',
        item: 'https://nearbypetcare.com/puppies-kittens/first-30-days',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should I do in the first week with a new puppy or kitten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the first week, focus on helping your new pet feel safe and secure. Set up a designated safe space, schedule a veterinary checkup, establish feeding and sleep routines, and begin gentle name recognition training. Keep everything calm and predictable to help them adjust.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I take my puppy outside for potty breaks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puppies typically need to go outside every 1-2 hours when awake, plus immediately after eating, drinking, playing, or napping. Very young puppies may need even more frequent breaks. Consistency is key to successful house training.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I schedule the first veterinary visit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Schedule a veterinary checkup within the first few days of bringing your new puppy or kitten home. Your vet will perform a thorough health exam, discuss vaccination schedules, check for parasites, and answer any questions you have about care.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
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
            { name: 'First 30 Days', href: '/puppies-kittens/first-30-days' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">📅</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">First 30 Days</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">👶</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                First 30 Days with Your New Puppy or Kitten
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Those first 30 days are absolutely transformative—for both of you. Learn how to navigate this crucial period with confidence, from setting up their space to building lasting bonds.
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
                  Those first 30 days with your new puppy or kitten are absolutely transformative—for both of you. This is when you're learning each other's quirks, building trust, and setting the stage for a lifetime of companionship. While it might feel overwhelming at times (especially when you're cleaning up yet another accident or wondering if those midnight meows will ever stop), remember that this period is temporary and incredibly important. With the right approach, you'll look back on these weeks with fondness and pride.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Week 1: The Adjustment Period</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The first week is all about helping your new family member feel safe and secure. Everything is new—the sounds, smells, people, and routines. Your little one might be excited, nervous, or a bit of both. That's completely normal.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Setting Up Their Space</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Before you even bring them home, create a designated safe space. For puppies, this might be a crate or a puppy-proofed room. For kittens, a quiet room with a cozy bed, litter box, food, and water works perfectly. This isn't about isolation—it's about giving them a retreat when the world feels too big. Make it comfortable with soft bedding, a few toys, and maybe an item that smells like you (an old t-shirt works great).
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">The First Veterinary Visit</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Schedule a checkup within the first few days. Your vet will do a thorough health exam, discuss vaccination schedules, check for parasites, and answer all your questions. Bring any medical records you received from the breeder or shelter, and don't hesitate to ask about anything that's on your mind—no question is too small when it comes to your pet's health.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Establishing Routines</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Young pets thrive on routine. Start establishing consistent feeding times, potty breaks (for puppies), and sleep schedules right away. Puppies typically need to go out every 1-2 hours when awake, plus immediately after eating, drinking, playing, or napping. Kittens will naturally gravitate toward their litter box, but make sure it's easily accessible and kept clean.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Gentle Introduction to Training</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Keep training sessions super short—just 2-3 minutes at a time. Start with name recognition: say their name and reward them when they look at you. Introduce simple commands like "sit" using treats and positive reinforcement. Remember, they're babies, so patience is key. If they're not getting it, that's okay. Try again later when they're more alert and engaged.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Weeks 2-3: Building Confidence</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  By now, your pet is starting to feel more at home. You're probably noticing their personality emerging—maybe they're bold and curious, or perhaps they're more cautious and observant. Both are perfectly normal, and your approach should match their individual temperament.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Expanding Their World</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Gradually introduce new experiences, but always at their pace. For puppies, this might mean short walks in quiet areas, meeting friendly, vaccinated dogs, and experiencing different surfaces (grass, pavement, carpet). For kittens, let them explore more of your home under supervision. Introduce them to different sounds, textures, and gentle handling. The goal is positive exposure, not overwhelming them.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">House Training Progress</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  If you're consistent with potty breaks and positive reinforcement, you should start seeing progress. Puppies will begin to understand where they should go, and accidents will become less frequent. Celebrate the wins, and don't stress about the occasional setback—it happens. For kittens, most take to the litter box naturally, but if you notice any issues, make sure the box is clean, accessible, and in a quiet location.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Socialization Basics</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  This is a critical window for socialization. Expose your pet to different people (including children, with supervision), various sounds, and new environments. Keep all experiences positive and never force interactions. If your pet seems scared, back off and try again later with a gentler approach. Positive experiences now will shape how they handle new situations throughout their life.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Week 4: Finding Your Rhythm</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  By the end of the first month, you and your pet should be settling into a comfortable routine. You know their signals, they understand your expectations (at least some of them), and you're both getting more sleep. This is when the real bonding happens.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Health Monitoring</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Keep a close eye on their health. Watch for changes in appetite, energy levels, or behavior. Normal puppy and kitten behavior includes lots of sleeping, bursts of energy, and healthy appetites. If something seems off, trust your instincts and call your vet. It's always better to be cautious with young pets.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Continuing Education</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Training should be a regular part of your routine now. Keep sessions fun and short, and always end on a positive note. Work on basic commands, continue with house training, and start introducing more complex concepts like "stay" or "come" for puppies. For kittens, focus on positive interactions, gentle handling, and encouraging appropriate scratching behavior.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Building the Bond</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Spend quality time together beyond training and care routines. Play together, cuddle (when they're in the mood), and just enjoy each other's company. This is when you're truly becoming a family. The trust you build now will last a lifetime.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Remember: Every Pet is Different</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While these guidelines provide a solid framework, remember that every puppy and kitten is unique. Some will breeze through house training, while others need more time. Some are social butterflies from day one, while others are more reserved. That's what makes them special. Trust the process, be patient with both yourself and your pet, and don't hesitate to reach out to your veterinarian or a professional trainer if you need support. You've got this!
                  </p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/puppies-kittens" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Puppies & Kittens</Link>
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
