import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BehaviorSidebar from '@/components/BehaviorSidebar';
import { 
  generateSEOMetadata,
  generateBlogPostingStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Behavior Guide',
  description: 'Comprehensive pet behavior pillar guide covering stress triggers, enrichment, safe management, and step-by-step plans to build calmer habits.',
  keywords: [
    'pet behavior pillar',
    'behavior plan for dogs',
    'behavior plan for cats',
    'pet enrichment ideas',
    'behavior modification steps',
    'behavior management for pets',
  ],
  pathname: '/pet-behavior/pillar',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Behavior Pillar Guide',
    type: 'image/png',
  }],
});

export default function PetBehaviorPillarPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Behavior', url: '/pet-behavior' },
    { name: 'Pillar', url: '/pet-behavior/pillar' },
  ];

  // Generate structured data using centralized utilities
  const blogPostingStructuredData = generateBlogPostingStructuredData({
    headline: 'Pet Behavior Pillar Guide',
    description: 'Learn how to decode behavior signals, lower stress, and rebuild better habits with a humane, step-by-step plan.',
    url: '/pet-behavior/pillar',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Behavior Pillar Guide',
    description: 'Learn how to decode behavior signals, lower stress, and rebuild better habits with a humane, step-by-step plan.',
    url: '/pet-behavior/pillar',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogPostingStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Behavior', href: '/pet-behavior' }, { name: 'Pillar', href: '/pet-behavior/pillar' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full shadow-sm">
              <span className="text-2xl">📘</span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Behavior Pillar Guide</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">🧠</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Decode, Decompress, Rebuild
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether you’re navigating nipping, nonstop barking, or chronic stress, a predictable plan helps your pet feel safe enough to learn.
              This pillar guide walks you through assessment, management, enrichment, and training—step by step.
            </p>
          </div>
        </div>
      </section>
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Behavior issues rarely appear overnight. They grow slowly as stress, unmet needs, or health changes pile up. Instead of trying to
                  “fix” one symptom (like barking), build a system that answers three questions: <strong>What is my pet feeling? What helps them feel safe?
                  Which replacement behaviors can we teach?</strong>
                </p>

                <h2>1. Observe First, Diagnose Second</h2>
                <p>
                  Keep a two-week behavior log. Track time of day, location, people/pets present, weather, activities that happened just before the
                  unwanted behavior, and how long it lasted. Patterns will appear quickly—maybe reactivity happens after skipped walks or chewing
                  appears after sunset when the household is busy.
                </p>
                <ul>
                  <li><strong>Body language cues:</strong> lip licking, yawning, tucked tails, pupil dilation, pacing, or freezing signal stress.</li>
                  <li><strong>Medical check-ins:</strong> sudden aggression, accidents, or withdrawal often start with pain or endocrine changes. Rule them out first.</li>
                  <li><strong>Environment scan:</strong> Is your pet exposed to constant noise, glass doors showing triggers, or unpredictable schedules?</li>
                </ul>

                <h2>2. Build a Relief Plan Before Training</h2>
                <p>
                  Teaching manners while your pet’s nervous system is on high alert sets everyone up to fail. Lower arousal first with predictable
                  routines and enrichment that lets pets express natural behaviors.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                  <h3 className="mt-0">Daily Calm Routine Template</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Morning sniff walk or “sniffari” (15 minutes off-path exploring to burn mental energy).</li>
                    <li>Breakfast from a puzzle feeder or lick mat to slow down and release dopamine.</li>
                    <li>Quiet rest period with white noise, chews, or a weighted blanket for animals who enjoy pressure.</li>
                    <li>Short training game in the afternoon to reinforce focus cues (touch, watch me, settle).</li>
                    <li>Evening decompression play that matches species needs: shreddable boxes for cats, flirt pole work for dogs.</li>
                  </ol>
                </div>

                <h2>3. Management Keeps Everyone Safe</h2>
                <p>
                  Management is not failure—it buys time so the nervous system can reset. Use gates, crates, window film, or leashes indoors to
                  prevent rehearsal of problem behaviors. Rotate access between pets to avoid resource guarding. Communicate rules to family and
                  visitors so no one accidentally triggers a setback.
                </p>
                <ul>
                  <li><strong>Noise-sensitive pets:</strong> add sound masking, close curtains during storms, and pre-load calming chews before fireworks.</li>
                  <li><strong>Resource guarders:</strong> feed in separate rooms, separate high-value chews, and teach trade games later.</li>
                  <li><strong>Leash-reactive dogs:</strong> choose low-traffic walking times, use visual barriers, and build distance with U-turn games.</li>
                </ul>

                <h2>4. Teach Replacement Behaviors</h2>
                <p>
                  Once your pet is calmer, teach actions that are incompatible with the unwanted behavior. Reward them generously so the new habit
                  becomes more valuable than the old one.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jumping on guests</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Teach “go to mat” with a cozy station near the door. Reward heavily for staying until guests sit down. Pair with management
                      (leash or gate) for the first few minutes.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Door dashing</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Install a baby gate creating a foyer buffer. Train a “wait” cue by gradually opening the door a few inches, closing if the pet
                      moves forward, and rewarding calm sits.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cat night zoomies</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Schedule two 10-minute play bursts with wand toys or chaser games before bedtime, then feed a high-protein snack. Cats sleep
                      better after a hunt-play-eat routine.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bored chewing</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Rotate chew textures (rubber, rawhide alternatives, frozen treats) and add scent work boxes so your dog has legal outlets daily.
                    </p>
                  </div>
                </div>

                <h2>5. When to Bring in Specialists</h2>
                <p>
                  If your pet has bitten, self-harmed, or shows escalating aggression, work with a certified animal behavior consultant (CAAB, CBCC-KA,
                  IAABC) or a veterinarian comfortable prescribing behavior medication. Medication does not “sedate” pets—it lowers baseline anxiety so
                  learning can resume.
                </p>
                <p>
                  Prepare questions ahead of your appointment: What triggers are unavoidable? Can we combine medication with behavior therapy? How
                  will we track progress? Transparency ensures your team designs a plan that fits your household.
                </p>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Safety reminder:</strong> Never punish growling or hissing. It removes warning signals and increases the likelihood of a
                    bite. Instead, give your pet space, reassess the trigger, and help them calm down before trying again.
                  </p>
                </div>

                <h2>6. Measure Wins Along the Way</h2>
                <p>
                  Progress is rarely linear. Track tangible wins to stay motivated: more seconds of calm on walks, fewer accidents per week, quicker
                  recoveries after a trigger. Celebrate micro-improvements—they prove your plan is working.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Your homework:</strong> Choose one behavior to log this week, create a management plan that prevents rehearsals, and teach a
                    single replacement cue. Once that routine feels easy, layer in the next behavior. Consistency beats intensity every time.
                  </p>
                </div>
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


