import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BehaviorSidebar from '@/components/BehaviorSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'How to Understand Pet Body Language',
  description: 'A practical visual guide to dog and cat body language cues so you can respond before stress turns into problem behavior.',
  keywords: [
    'pet body language',
    'dog body language',
    'cat body language',
    'signs of stress in dogs',
    'signs of stress in cats',
    'pet communication cues',
  ],
  pathname: '/pet-behavior/how-to-understand-pet-body-language',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Body Language Guide',
    type: 'image/png',
  }],
});

const signalGroups = [
  {
    title: 'Calming Signals',
    items: [
      'Lip licking when no food is present',
      'Sudden sniffing of the ground',
      'Turning the head away or blinking slowly',
      'Tail swooping in a loose “S” rather than wagging fast',
    ],
    note: 'Your pet is trying to diffuse tension—give them space and slow things down.',
  },
  {
    title: 'Yellow Zone (I’m Uncomfortable)',
    items: [
      'Ears pinned, tail low or tucked',
      'Body stiffens or weight shifts backward',
      'Whale eye—whites of the eyes showing',
      'Cats flicking tails rapidly or making small swishes',
    ],
    note: 'Increase distance from the trigger, reward calm behavior, and avoid touching sensitive areas.',
  },
  {
    title: 'Red Zone (Back Off Now)',
    items: [
      'Growling, hissing, snarling',
      'Body freezes completely or leans forward',
      'Hackles raised along spine',
      'Cats flatten ears and open mouth silently',
    ],
    note: 'Respect the warning. Remove the trigger, ensure safety, and reassess once everyone is calm.',
  },
];

const catSignals = [
  { cue: 'Slow blink', meaning: 'Invitation to trust—blink back slowly to reinforce calm interactions.' },
  { cue: 'Tail wrapped around paws', meaning: 'Relaxed but alert. Good time for quiet interaction.' },
  { cue: 'Tail puffed + sideways hop', meaning: 'Adrenaline rush. Redirect to play or create distance.' },
  { cue: 'Whiskers forward, body low before pounce', meaning: 'Predatory focus. Offer toys instead of hands.' },
];

export default function PetBodyLanguagePage() {
  const currentDate = new Date().toISOString();
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Understand Pet Body Language',
    description: 'Learn how to read subtle cues from your dog or cat so you can intervene before stress escalates.',
    url: 'https://nearbypetcare.com/pet-behavior/how-to-understand-pet-body-language',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Pet Behavior', href: '/pet-behavior' },
              { name: 'Body Language', href: '/pet-behavior/how-to-understand-pet-body-language' },
            ]}
          />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐾</span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Communication 101</span>
            </div>
            <h1 className="text-4xl sm:5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Read the Signals Before They Shout
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Pets rarely bite “out of nowhere.” They whisper first. Learn the whispers so you can prevent conflict, build trust, and respond to
              stress with empathy.
            </p>
          </div>
        </div>
      </section>
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>The Three-Zone Traffic Light</h2>
                <p>
                  Use this framework to check in with your pet during training, grooming, playdates, or vet visits. If you intervene while they’re
                  still in the green or yellow zone, the red zone rarely appears.
                </p>
                <div className="space-y-6">
                  {signalGroups.map((group) => (
                    <div key={group.title} className="p-5 border border-gray-200 dark:border-gray-700 rounded-2xl">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{group.title}</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                        <strong>What to do:</strong> {group.note}
                      </p>
                    </div>
                  ))}
                </div>

                <h2>Dog-Specific Clues</h2>
                <ul>
                  <li><strong>Tail wag direction:</strong> Right-sided wagging usually signals positivity; left-leaning wags can mean uncertainty.</li>
                  <li><strong>Shake offs:</strong> Looks like drying off after a bath—dogs reset stress this way. Offer a break when you see it.</li>
                  <li><strong>Play bows:</strong> Front end low, back high. Invitation to play, but context matters—pair with relaxed face and wiggly body.</li>
                  <li><strong>Zoomies after stress:</strong> Sudden running can mean adrenaline dumping. Guide them to a safe space to prevent crashes.</li>
                </ul>

                <h2>Cat-Specific Clues</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {catSignals.map((signal) => (
                    <div key={signal.cue} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{signal.cue}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{signal.meaning}</p>
                    </div>
                  ))}
                </div>

                <h2>How to Respond in Real Time</h2>
                <ol>
                  <li>
                    <strong>Pause the trigger.</strong> Stop the petting, grooming, or training rep immediately when you notice yellow-zone signals.
                  </li>
                  <li>
                    <strong>Create distance.</strong> Move away from the stress source or invite your pet to a mat/bed they associate with safety.
                  </li>
                  <li>
                    <strong>Reward calm recovery.</strong> When their body softens, mark it (“yes”) and feed a treat or toss a toy to reinforce composure.
                  </li>
                  <li>
                    <strong>Break tasks into micro-reps.</strong> Instead of brushing the whole coat, do two strokes, reward, and release.
                  </li>
                </ol>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Family tip:</strong> Print the traffic-light chart and hang it near entrances so everyone knows what to look for. Consistency
                    across caregivers prevents mixed signals.
                  </p>
                </div>

                <h2>Practice Makes Confident Readers</h2>
                <p>
                  Record short clips of your pet during meals, play, or when guests arrive. Rewatch in slow motion to notice micro-signals you missed
                  in the moment, then adjust routines accordingly. Over time you’ll predict discomfort before it escalates.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-behavior" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline">
                  ← Back to Pet Behavior Guides
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <BehaviorSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}


