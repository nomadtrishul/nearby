import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BehaviorSidebar from '@/components/BehaviorSidebar';

export const metadata: Metadata = {
  title: 'Pet Behavior Guide: Calm, Confident Dogs & Cats | Nearby Pet Care',
  description: 'Understand pet behavior, decode stress signals, and learn science-backed techniques to solve common behavior problems with confidence.',
  keywords: [
    'pet behavior',
    'dog behavior tips',
    'cat behavior tips',
    'separation anxiety in pets',
    'pet body language',
    'behavior training for dogs',
    'behavior training for cats',
  ],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  openGraph: {
    title: 'Pet Behavior Guide: Calm, Confident Dogs & Cats | Nearby Pet Care',
    description: 'Comprehensive guides to understand and improve your pet’s behavior with humane, positive strategies.',
    url: 'https://nearbypetcare.com/pet-behavior',
    type: 'website',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Behavior Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Behavior Guide | Nearby Pet Care',
    description: 'Decode pet body language and solve behavior issues with confidence.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-behavior',
  },
  category: 'Pet Behavior',
};

const guides = [
  {
    title: 'Ultimate Pet Behavior Pillar',
    href: '/pet-behavior/pillar',
    icon: '📘',
    description: 'A deep-dive playbook for calming reactivity, understanding body language, and building better habits.',
  },
  {
    title: 'Separation Anxiety Reset Plan',
    href: '/pet-behavior/how-to-reduce-separation-anxiety-in-pets',
    icon: '🤗',
    description: 'Step-by-step training schedule, enrichment ideas, and vet-backed tips to make alone time less stressful.',
  },
  {
    title: 'Pet Body Language Decoder',
    href: '/pet-behavior/how-to-understand-pet-body-language',
    icon: '🐾',
    description: 'Learn the subtle cues that signal stress, excitement, or fear so you can intervene before behavior escalates.',
  },
  {
    title: 'Stop Destructive Chewing',
    href: '/pet-behavior/how-to-stop-destructive-chewing',
    icon: '🦴',
    description: 'Address boredom, teething, and anxiety-related chewing with enrichment routines that protect your home.',
  },
];

export default function PetBehaviorPage() {
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Behavior & Emotional Wellness',
    description: 'Behavior guides to help pets feel safe, confident, and calm at home.',
    url: 'https://nearbypetcare.com/pet-behavior',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    breadcrumb: {
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
          name: 'Pet Behavior',
          item: 'https://nearbypetcare.com/pet-behavior',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        description: guide.description,
        url: `https://nearbypetcare.com${guide.href}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }} />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Behavior', href: '/pet-behavior' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🧠</span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Emotion & Behavior</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐾</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Calm, Confident Pets Start Here
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Behavior is communication. Use these humane, science-backed guides to decode what your dog or cat is trying to tell you,
              reduce stress, and rebuild better habits without fear-based training.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👂</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Body Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧘</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Calm Routines</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔁</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Behavior Rehab</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {guides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-purple-500/50 transition-all duration-300 flex flex-col min-h-[200px]"
                  >
                    <div className="text-4xl mb-4">{guide.icon}</div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{guide.description}</p>
                    <div className="flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:underline transition-colors">
                      Read Guide
                      <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-blue-200/60 dark:border-blue-700/40 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Behavior Goals We Help With</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                  <p>🛏️ Easier crate time and calmer alone-time routines</p>
                  <p>🚪 Greeting guests without jumping, barking, or hiding</p>
                  <p>🐕‍🦺 Reducing reactivity on leash and during neighborhood walks</p>
                  <p>🍽️ Preventing resource guarding around food, toys, or people</p>
                  <p>🧸 Building enrichment plans so bored pets stop destructing</p>
                  <p>❤️ Helping multi-pet households live together peacefully</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:h-fit">
              <BehaviorSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


