import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BehaviorSidebar from '@/components/BehaviorSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'How to Stop Destructive Chewing in Pets',
  description: 'Identify the root cause of destructive chewing and replace it with enrichment, management, and focused training.',
  keywords: [
    'stop destructive chewing',
    'dog chewing furniture',
    'cat chewing cords',
    'pet enrichment ideas',
    'chew training plan',
  ],
  pathname: '/pet-behavior/how-to-stop-destructive-chewing',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Stop Destructive Chewing Guide',
    type: 'image/png',
  }],
});

const chewingCauses = [
  { label: 'Boredom / under-stimulation', solution: 'Increase mental games (snuffle mats, scent work) and add two short training sessions daily.' },
  { label: 'Teething discomfort', solution: 'Freeze damp washcloths, use puppy-safe rubber chews, and supervise to prevent swallowing pieces.' },
  { label: 'Anxiety outlet', solution: 'Pair chew time with calming music, provide safe hideouts, and practice relaxation cues.' },
  { label: 'Nutritional gaps', solution: 'Offer appropriate chewable food (bully sticks, chicken feet) under supervision and review diet with your vet.' },
];

const chewRotation = [
  'Day 1: Frozen Kong stuffed with canned food or pumpkin',
  'Day 2: Rubber toy smeared with xylitol-free peanut butter and frozen',
  'Day 3: Braided bully stick (remove when nub is small)',
  'Day 4: Snuffle box filled with toilet paper rolls and scatter kibble',
  'Day 5: Homemade rope toy (braided fleece) for tug + supervised chewing',
];

export default function StopDestructiveChewingPage() {
  const currentDate = new Date().toISOString();
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Stop Destructive Chewing in Pets',
    description: 'Swap inappropriate chewing with enriched routines, management, and training.',
    url: 'https://nearbypetcare.com/pet-behavior/how-to-stop-destructive-chewing',
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
              { name: 'Stop Destructive Chewing', href: '/pet-behavior/how-to-stop-destructive-chewing' },
            ]}
          />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🦴</span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Chew Redirection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Protect Your Home Without Punishing Your Pet
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Chewing is natural. Instead of trying to shut it down, give your dog or cat legal outlets, supervise smartly, and phase out access to
              tempting items until the habit fades.
            </p>
          </div>
        </div>
      </section>
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Step 1: Identify the “Why”</h2>
                <p>
                  Every chewing case has a root cause. Maybe your dog naps all day while you work, then explodes with energy, or your cat’s new diet
                  makes them crave texture. Match the solution to the motivation.
                </p>
                <div className="space-y-4">
                  {chewingCauses.map((cause) => (
                    <div key={cause.label} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cause.label}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cause.solution}</p>
                    </div>
                  ))}
                </div>

                <h2>Step 2: Manage the Environment</h2>
                <ul>
                  <li>Use baby gates or exercise pens to limit access to furniture when you can’t supervise.</li>
                  <li>Hide cords in cable covers or PVC pipe; spray bitter apple deterrent as a backup.</li>
                  <li>Provide elevated resting spots for cats so they can watch activity without feeling bored.</li>
                  <li>Rotate toys daily so “legal” chewing stays novel.</li>
                </ul>

                <h2>Step 3: Build a Chew Rotation</h2>
                <p>Keep a weekly calendar so you never run out of ideas. Rotation prevents your pet from overheating on one texture.</p>
                <ul className="list-disc pl-5 space-y-1">
                  {chewRotation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Step 4: Teach “Trade and Switch”</h2>
                <ol>
                  <li>Offer a high-value treat as you approach. When your pet drops the item, mark (“yes!”) and feed.</li>
                  <li>Hand back a legal chew so they learn trading doesn’t end the fun.</li>
                  <li>Practice daily with low-value objects before asking for shoes or furniture legs.</li>
                </ol>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Important:</strong> Punishing or yelling can increase anxiety chewing. Instead, redirect with a cheerful cue (“take this!”)
                    and remove tempting items when you can’t supervise.
                  </p>
                </div>

                <h2>Step 5: Layer in Mental Workouts</h2>
                <p>
                  Two 10-minute enrichment sessions per day often reduce destructive chewing more than an extra walk. Use cardboard shredding boxes,
                  scatter feeding in grass, or DIY snuffle towels to satisfy nose-driven species needs.
                </p>

                <h2>Step 6: Know When to Get Help</h2>
                <p>
                  If chewing escalates after life changes (new baby, move, loss of routine) or your pet injures themselves, consult your veterinarian or
                  a certified trainer. Anxiety medication, pheromone diffusers, or diet adjustments may be necessary alongside training.
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


