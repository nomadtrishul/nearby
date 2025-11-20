import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AdoptionSidebar from '@/components/AdoptionSidebar';

export const metadata: Metadata = {
  title: 'Transitioning a Rescue Pet: Complete Guide to Building Trust | Nearby Pet Care',
  description: 'Complete guide to transitioning a rescue pet into your home. Learn how to build trust, establish routines, handle common challenges, and understand the 3-3-3 rule. Expert tips for helping rescue pets feel safe and secure.',
  keywords: ['rescue pet transition', 'adopting rescue pet', 'rescue pet adjustment', 'new rescue pet', 'rescue pet trust', 'rescue pet behavior', '3-3-3 rule', 'rescue pet challenges', 'building trust with rescue pet'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  openGraph: {
    title: 'Transitioning a Rescue Pet: Complete Guide to Building Trust | Nearby Pet Care',
    description: 'Complete guide to transitioning a rescue pet into your home. Learn how to build trust, establish routines, and handle common challenges.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-adoption/transitioning-a-rescue',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Transitioning a Rescue Pet - Complete Guide',
        type: 'image/png',
      },
    ],
    publishedTime: '2024-01-01T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    section: 'Pet Adoption',
    tags: ['pet adoption', 'rescue pet', 'pet transition', 'building trust'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transitioning a Rescue Pet: Complete Guide to Building Trust',
    description: 'Complete guide to transitioning a rescue pet into your home. Learn how to build trust, establish routines, and handle common challenges.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
  },
  alternates: { 
    canonical: 'https://nearbypetcare.com/pet-adoption/transitioning-a-rescue',
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

export default function TransitioningRescuePage() {
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
        name: 'Transitioning a Rescue',
        item: `${baseUrl}/pet-adoption/transitioning-a-rescue`,
      },
    ],
  };

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${baseUrl}/pet-adoption/transitioning-a-rescue#article`,
    headline: 'Transitioning a Rescue Pet: Complete Guide to Building Trust',
    description: 'Complete guide to transitioning a rescue pet into your home. Learn how to build trust, establish routines, handle common challenges, and understand the 3-3-3 rule.',
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
      '@id': `${baseUrl}/pet-adoption/transitioning-a-rescue#webpage`,
    },
    articleSection: 'Pet Adoption',
    keywords: 'rescue pet transition, adopting rescue pet, rescue pet adjustment, building trust',
    inLanguage: 'en-US',
  };

  // HowTo Structured Data
  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Transition a Rescue Pet into Your Home',
    description: 'Step-by-step guide to helping a rescue pet transition into your home, including building trust, establishing routines, and handling common challenges.',
    image: `${baseUrl}/og-image.png`,
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Create a Safe Space',
        text: 'Set up a quiet room or area where your pet can retreat, away from high-traffic areas, with a comfortable bed, water, food, and toys. Let them explore this space first.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Keep Things Calm and Quiet',
        text: 'Limit visitors, keep noise levels down, and avoid loud music or television during the first week. Let your pet set the pace for exploration and interaction.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Establish Routines Immediately',
        text: 'Start consistent routines from day one: feed at the same times, take walks at consistent times (for dogs), maintain regular sleep and wake times, and keep play sessions on schedule.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Build Trust Gradually',
        text: 'Let your pet come to you rather than forcing interactions. Use positive reinforcement with treats and praise. Respect their boundaries and read their body language for signs of stress.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Handle Common Challenges',
        text: 'Address fear and anxiety with patience and positive associations. Handle house-training issues with consistency. Provide appropriate outlets for destructive behavior. Monitor eating patterns and seek help if needed.',
      },
    ],
  };

  // FAQ Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take for a rescue pet to adjust?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rescue pets typically follow the 3-3-3 rule: 3 days to decompress, 3 weeks to start settling in, and 3 months to feel at home. However, every pet is different, and some may need more or less time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I build trust with a rescue pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Build trust by letting your pet come to you, using positive reinforcement, respecting their boundaries, being predictable and consistent, and providing for their needs reliably. Never force interactions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if my rescue pet is hiding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Let them hide. Make sure they have access to food, water, and a litter box (for cats) in their hiding spot. Sit quietly nearby and let them come out on their own terms. Forcing them out will only make them more fearful.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the 3-3-3 rule for rescue pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 3-3-3 rule is a guideline: 3 days for your pet to decompress and feel overwhelmed, 3 weeks to start settling in and learning routines, and 3 months to feel at home and show their true personality.',
        },
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/pet-adoption/transitioning-a-rescue#webpage`,
    name: 'Transitioning a Rescue Pet',
    description: 'Complete guide to transitioning a rescue pet into your home',
    url: `${baseUrl}/pet-adoption/transitioning-a-rescue`,
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
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Transitioning a Rescue Pet Guide">
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
          __html: JSON.stringify(faqStructuredData),
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
            { name: 'Transitioning a Rescue', href: '/pet-adoption/transitioning-a-rescue' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🔄</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Rescue Transition</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🔄</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Transitioning a Rescue Pet
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Building trust and helping your rescue pet feel at home takes patience and understanding. Learn how to navigate the first days, weeks, and months, creating a foundation of security that will last a lifetime.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">First Days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Building Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💚</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Patience & Care</span>
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

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Understanding the Rescue Pet Experience</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Before diving into practical strategies, it helps to understand what your rescue pet might be experiencing. Many rescue pets have been through significant changes: they may have lost their previous home, spent time in a shelter, or experienced neglect or abuse. Even the most well-adjusted rescue pet is dealing with the stress of a completely new environment, new people, and new routines.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Some pets will bounce back quickly, while others need weeks or even months to fully settle in. There's no "normal" timeline—every pet is different. The key is to meet them where they are, not where you expect them to be.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">The First Days: Setting the Foundation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Those first few days are crucial. This is when your pet is forming their first impressions of you, your home, and their new life. How you handle this period can set the tone for your entire relationship.
            </p>

            <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Create a Safe Space</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Before your pet even arrives, set up a quiet room or area where they can retreat. This should be away from high-traffic areas, with a comfortable bed, water, food, and some toys. For cats, include a litter box. For dogs, you might use a crate with the door open.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When you first bring your pet home, let them explore this space first. Don't force them to interact with the whole house immediately. Let them set the pace. Some pets will want to explore right away, while others will need to hide for hours or even days. Both responses are normal.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Keep Things Calm and Quiet</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                The first week should be as low-key as possible. This isn't the time for a welcome party or introducing your pet to all your friends. Limit visitors, keep noise levels down, and avoid loud music or television. Your pet is already overwhelmed—don't add to it.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Keep children calm and supervised around the new pet</li>
                <li>Avoid sudden movements or loud noises</li>
                <li>Don't force interactions—let your pet come to you</li>
                <li>Respect their need for space and quiet time</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Establish Routines Immediately</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Predictability is comforting for rescue pets. Even though everything else is new, consistent routines help them feel secure. Start from day one:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Feed at the same times every day</li>
                <li>Take walks at consistent times (for dogs)</li>
                <li>Maintain regular sleep and wake times</li>
                <li>Keep play and training sessions on a schedule</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This doesn't mean you can never be flexible, but in those first weeks, consistency is your friend. Your pet is learning to trust that you'll provide for their needs, and routines reinforce that trust.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Building Trust: The Heart of the Relationship</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Trust isn't built overnight, especially for pets who may have been let down by humans in the past. Building trust requires patience, consistency, and respect for your pet's boundaries. Here's how to do it:
            </p>

            <div className="bg-purple-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Let Them Come to You</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                This is perhaps the most important rule: never force interactions. If your pet is hiding, let them hide. If they're avoiding you, give them space. Sit quietly in the same room, read a book, or work on your laptop. Let them see that you're not a threat.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When they do approach, stay calm. Avoid sudden movements or loud exclamations. Let them sniff you, and if they seem comfortable, you can offer a gentle scratch under the chin or behind the ears. But let them initiate contact.
              </p>
            </div>

            <div className="bg-pink-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Use Positive Reinforcement</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Every positive interaction builds trust. Use treats, praise, and gentle petting to reward calm, confident behavior. When your pet approaches you, reward them. When they eat, reward them. When they play, reward them. You're teaching them that good things happen when they're around you.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Keep treats handy for spontaneous positive moments</li>
                <li>Use high-value treats for especially brave behaviors</li>
                <li>Pair treats with calm, soothing words</li>
                <li>Never use punishment or negative reinforcement—it destroys trust</li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Respect Their Boundaries</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Learn to read your pet's body language. Signs of stress include: ears back, tail tucked, avoiding eye contact, panting (when not hot), yawning (when not tired), lip licking, and trying to move away. When you see these signs, back off.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Forcing a scared pet to interact doesn't build trust—it destroys it. Respect their "no" just as you would want your boundaries respected. Trust is built when your pet learns that you'll respect their needs and feelings.
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Be Predictable and Consistent</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Your pet needs to know what to expect from you. Be consistent in your actions, your tone of voice, and your routines. If you're calm and gentle one day and loud and energetic the next, it's confusing and can be frightening.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Use the same words for commands consistently</li>
                <li>Maintain the same energy level during interactions</li>
                <li>Follow through on routines every day</li>
                <li>Keep your reactions predictable—no sudden mood changes</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Common Challenges and How to Handle Them</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Every rescue pet is different, but there are some common challenges you might encounter. Understanding these and knowing how to respond can make all the difference.
            </p>

            <div className="bg-red-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Fear and Anxiety</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Many rescue pets are fearful, especially in the beginning. They might be afraid of loud noises, sudden movements, men, children, or specific objects. This is normal and often improves with time and positive experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                <strong>What to do:</strong> Don't force them to face their fears. Instead, create positive associations. If they're afraid of men, have men sit quietly and toss treats. If they're afraid of loud noises, play recordings at low volume while giving treats, gradually increasing the volume over time. Be patient—this takes time.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If fear is severe or doesn't improve, consider working with a certified animal behaviorist or your veterinarian, who may recommend anxiety medication to help your pet feel more comfortable while they adjust.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hiding and Avoidance</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Some pets will hide for days or even weeks. This is especially common with cats, but dogs do it too. It's a coping mechanism—they're trying to feel safe.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>What to do:</strong> Let them hide. Make sure they have access to food, water, and a litter box (for cats) in their hiding spot. Sit quietly nearby, talk softly, and let them come out on their own terms. Forcing them out will only make them more fearful. Most pets will gradually start spending more time out of hiding as they feel safer.
              </p>
            </div>

            <div className="bg-cyan-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">House-Training Issues</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Even if a pet was house-trained before, accidents can happen in a new environment. Stress, confusion, and unfamiliarity can all contribute.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>What to do:</strong> Treat it like training a puppy or kitten. Take dogs out frequently, especially after eating, drinking, sleeping, and playing. Reward them enthusiastically when they go in the right place. For cats, ensure litter boxes are easily accessible and clean. Never punish accidents—they're usually due to stress or confusion, not spite. Use enzyme-based cleaners to remove odors completely.
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Destructive Behavior</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Chewing, scratching, or other destructive behaviors can be signs of anxiety, boredom, or lack of appropriate outlets.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>What to do:</strong> Provide appropriate alternatives. For dogs, plenty of chew toys. For cats, scratching posts in multiple locations. Increase exercise and mental stimulation. Make sure your pet has plenty of appropriate things to do. If destructive behavior continues, it might be separation anxiety or another issue—consult with a behaviorist.
              </p>
            </div>

            <div className="bg-rose-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Not Eating</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Many rescue pets won't eat much in the first few days. This is usually due to stress, not a medical issue.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>What to do:</strong> Offer food at regular times, but don't force it. Try warming wet food slightly to make it more appealing. Some pets prefer to eat when you're not watching, so you might need to leave the room. If your pet hasn't eaten in 24-48 hours, or if they're showing other signs of illness, contact your veterinarian.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">The 3-3-3 Rule: A Realistic Timeline</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Many rescue organizations talk about the "3-3-3 rule" as a general guideline for what to expect:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-4">
              <li><strong>3 days:</strong> Your pet is likely overwhelmed and may be hiding, not eating much, or testing boundaries. They're still decompressing from the shelter and the move.</li>
              <li><strong>3 weeks:</strong> Your pet is starting to settle in. They're learning your routines, starting to show their personality, and beginning to feel more comfortable. You might see some behavioral issues emerge as they feel safe enough to test limits.</li>
              <li><strong>3 months:</strong> Your pet is starting to feel at home. They trust you, understand the routines, and their true personality is emerging. This is when you really start to see who they are.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Remember, this is just a guideline. Some pets adjust faster, others need more time. Don't worry if your pet doesn't follow this timeline exactly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">When to Seek Professional Help</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              While patience and time solve many issues, sometimes professional help is needed. Don't hesitate to reach out if:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li>Your pet shows signs of aggression (growling, snapping, biting)</li>
              <li>Fear or anxiety is severe and not improving after several weeks</li>
              <li>Your pet isn't eating or drinking for more than 24-48 hours</li>
              <li>There are signs of illness (vomiting, diarrhea, lethargy, difficulty breathing)</li>
              <li>Behavioral issues are getting worse rather than better</li>
              <li>You feel overwhelmed or unsure how to proceed</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Your veterinarian can rule out medical issues, and a certified animal behaviorist can help with behavioral challenges. Many shelters also offer post-adoption support—don't hesitate to reach out to them.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mt-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Remember: You're Building a Lifetime Relationship</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Transitioning a rescue pet takes time, patience, and a lot of love. There will be frustrating moments, days when you wonder if you made the right decision, and times when progress seems slow. But there will also be breakthrough moments—the first time they come to you for pets, the first time they play, the first time they show you their true personality.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                Every rescue pet has their own story, their own timeline, and their own way of healing. Your job isn't to fix them or change them—it's to provide a safe, loving home where they can become who they're meant to be. Trust the process, be patient with yourself and your pet, and remember that the most rewarding relationships often take the most work to build.
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

