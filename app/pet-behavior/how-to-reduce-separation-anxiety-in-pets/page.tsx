import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BehaviorSidebar from '@/components/BehaviorSidebar';

export const metadata: Metadata = {
  title: 'How to Reduce Separation Anxiety in Pets | Nearby Pet Care',
  description: 'Practical plan to ease separation anxiety using gradual departures, enrichment, and calm routines for dogs and cats.',
  keywords: [
    'separation anxiety in dogs',
    'separation anxiety in cats',
    'alone time training',
    'pet anxiety plan',
    'reduce barking when alone',
  ],
  openGraph: {
    title: 'How to Reduce Separation Anxiety in Pets | Nearby Pet Care',
    description: 'A humane step-by-step plan to help pets stay calm when left alone.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-behavior/how-to-reduce-separation-anxiety-in-pets',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Separation Anxiety Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-behavior/how-to-reduce-separation-anxiety-in-pets',
  },
};

export default function SeparationAnxietyPage() {
  const currentDate = new Date().toISOString();
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Reduce Separation Anxiety in Pets',
    description: 'Use gradual departures, enrichment, and nervous system resets to make alone time easier for your dog or cat.',
    url: 'https://nearbypetcare.com/pet-behavior/how-to-reduce-separation-anxiety-in-pets',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
  };

  const trainingSteps = [
    { step: 'Week 1: Predictable routine', detail: 'Same wake, walk, meal, and rest windows every day so your pet trusts what happens next.' },
    { step: 'Week 2: Threshold discovery', detail: 'Practice mock departures that last only as long as your pet can stay calm (even 15 seconds counts).' },
    { step: 'Week 3: Extend calm time', detail: 'Add 10–15 seconds to each successful session, mixing in easy reps so your pet keeps winning.' },
    { step: 'Week 4+: Real-life dress rehearsals', detail: 'Start leaving the house for short errands during times your pet already practiced.' },
  ];

  const enrichment = [
    'Frozen lick mats or stuffed Kongs that last 15+ minutes',
    'Snuffle mats with part of breakfast to trigger calming sniffing',
    'Calming music or brown noise playlists set to 60 dB',
    'Scent swaps—leave a recently worn (clean) T-shirt in their bed',
    'Rotating puzzle toys to keep novelty high',
  ];

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
              { name: 'Separation Anxiety', href: '/pet-behavior/how-to-reduce-separation-anxiety-in-pets' },
            ]}
          />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🤗</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Calm Alone Time</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Help Your Pet Feel Safe When You Leave
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Separation anxiety is not stubbornness—it’s panic. We’ll show you how to reset the nervous system, build positive alone-time
              associations, and set realistic milestones that stick.
            </p>
          </div>
        </div>
      </section>
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Why Pets Panic When You Leave</h2>
                <p>
                  Dogs and cats thrive on predictability. If departures feel random or scary (think slammed doors, grabbing keys in a rush, or long
                  stretches of boredom), their brain connects “humans leaving” with danger. Instead of waiting for the panic to happen, rewrite the
                  story so alone time predicts safety, food, and rest.
                </p>

                <h3>Step 1: Reset the Environment</h3>
                <ul>
                  <li>Use white noise or fans to block hallway noise and elevator dings.</li>
                  <li>Cover windows at pet eye level to remove visual triggers.</li>
                  <li>Pre-walk or play to burn off adrenaline before departures.</li>
                  <li>Keep a “pre-departure cue” basket (shoes, keys, bag) ready the night before to avoid rushed chaos.</li>
                </ul>

                <h3>Step 2: Create a Departure Ritual</h3>
                <p>
                  Repeat the same five actions before every practice session: turn on music, place enrichment, say a calm cue (“back soon”), walk out,
                  return silently, then release your pet after they settle. Consistency helps them predict what comes next.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  {trainingSteps.map((item) => (
                    <div key={item.step} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.step}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <h3>Step 3: Pair Alone Time with Enrichment</h3>
                <p>Food work occupies the tongue and sniffing center, which lowers heart rate faster than verbal reassurance alone.</p>
                <ul>
                  {enrichment.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3>Step 4: Track Real Progress</h3>
                <p>
                  Film sessions to see when your pet actually starts to escalate. Many guardians realize the trigger is the elevator ding, not the
                  door closing, or that anxiety peaks when enrichment runs out. Adjust your plan around those data points.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Emergency plan:</strong> If your pet injures themselves, breaks out of crates, or howls nonstop despite practice, loop in
                    your veterinarian. Anti-anxiety medication or pheromone therapy can lower baseline stress so training sticks.
                  </p>
                </div>

                <h3>Common Mistakes to Skip</h3>
                <ul>
                  <li>Leaving “just to see what happens” and letting panic hit the red zone</li>
                  <li>Using punishment collars or yelling—fear amplifies separation anxiety</li>
                  <li>Only practicing on workdays instead of doing daily micro-sessions</li>
                  <li>Skipping physical and mental exercise before alone time</li>
                </ul>

                <h3>When to Call a Professional</h3>
                <p>
                  If you live in an apartment with noise complaints, your dog or cat has already broken teeth or nails trying to escape, or you feel
                  emotionally drained, call a certified behavior consultant. They can customize desensitization plans, help set up technology like
                  remote treat dispensers, and coordinate with your vet for medication trials.
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


