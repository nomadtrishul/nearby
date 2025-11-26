import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import TrainingSidebar from '@/components/TrainingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Aggression and Anxiety: Understanding and Managing Behavioral Issues',
  description: 'Learn how to identify, understand, and manage aggression and anxiety in pets. Get expert guidance on recognizing warning signs and finding effective solutions.',
  keywords: ['pet aggression', 'pet anxiety', 'behavioral issues', 'aggressive pet', 'anxious pet', 'dog aggression', 'cat anxiety', 'separation anxiety', 'fearful pet'],
  pathname: '/pet-training/aggression-and-anxiety',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Aggression and Anxiety',
    type: 'image/png',
  }],

  alternates: { canonical: 'https://nearbypetcare.com/pet-training/aggression-and-anxiety' },
});

export default function AggressionAndAnxietyPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Aggression and Anxiety: Understanding and Managing Behavioral Issues',
    description: 'Learn how to identify, understand, and manage aggression and anxiety in pets.',
    url: 'https://nearbypetcare.com/pet-training/aggression-and-anxiety',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Training', href: '/pet-training' },
            { name: 'Aggression and Anxiety', href: '/pet-training/aggression-and-anxiety' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">😰</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Behavioral Issues</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">😰</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Aggression and Anxiety
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Understanding and addressing aggression and anxiety in pets requires patience, knowledge, and often professional help. Learn how to recognize the signs and find effective solutions.
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
              Dealing with aggression or anxiety in your pet can be one of the most challenging and emotionally draining aspects of pet ownership. It's heartbreaking to see your beloved companion struggling, and it's natural to feel frustrated, scared, or even guilty. But here's what you need to know: these behaviors are almost always symptoms of an underlying issue, not character flaws. With understanding, patience, and the right approach, many pets can learn to manage their aggression or anxiety and live happier, more relaxed lives.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Aggression in Pets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Aggression is a complex behavior with many potential causes. It's important to understand that aggression is a form of communication—your pet is trying to tell you something, even if they're doing it in a way that's frightening or dangerous. The key to addressing aggression is identifying the root cause.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Types of Aggression</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Not all aggression is the same. Understanding the type of aggression your pet is displaying helps determine the best approach:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Fear-based aggression:</strong> This is the most common type. Your pet is scared and feels they have no escape, so they lash out defensively. Signs include cowering, tail tucking, ears back, and growling or snapping when approached</li>
              <li><strong>Territorial aggression:</strong> Your pet is protecting their space, whether that's your home, yard, or even you. They may be fine away from home but aggressive when others approach their territory</li>
              <li><strong>Resource guarding:</strong> Your pet protects food, toys, or other valued items. This can range from mild (growling when approached while eating) to severe (biting when someone comes near their possessions)</li>
              <li><strong>Pain-related aggression:</strong> When pets are in pain, they may become aggressive to prevent being touched in sensitive areas. This is especially common in older pets with arthritis or other chronic conditions</li>
              <li><strong>Redirected aggression:</strong> Your pet is frustrated or aroused by something they can't reach (like another dog outside the window) and redirects that frustration onto whoever is nearby</li>
              <li><strong>Predatory aggression:</strong> This is driven by instinct and is often directed at smaller animals. It's different from other types of aggression and requires specialized management</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Recognizing Warning Signs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Aggression rarely appears out of nowhere. There are usually warning signs that escalate if not addressed. Learning to recognize these early signals can help prevent bites and improve outcomes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Body language:</strong> Stiff posture, raised hackles, pinned ears, whale eye (showing whites of eyes), lip licking, yawning when not tired</li>
              <li><strong>Vocalizations:</strong> Low growling, snarling, or deep barking</li>
              <li><strong>Behavioral changes:</strong> Avoiding eye contact, trying to escape, freezing in place, or suddenly becoming very still</li>
              <li><strong>Escalation:</strong> If warning signs are ignored, the pet may escalate to snapping, lunging, or biting</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              It's crucial to respect these warning signs. Never punish a pet for growling—growling is communication. If you punish the growl, you might eliminate the warning, but the underlying fear or aggression remains, making future bites more likely because the pet skips the warning step.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Addressing Aggression</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The first step in addressing aggression is a thorough veterinary exam. Pain, illness, or medical conditions can cause or worsen aggressive behavior. Once medical issues are ruled out, work with a certified animal behaviorist or experienced trainer who uses positive reinforcement methods.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Management is key while working on behavior modification. This might mean:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Using a muzzle when in public or around triggers (properly fitted and introduced positively)</li>
              <li>Keeping your pet separated from triggers (other pets, children, visitors) until behavior improves</li>
              <li>Creating safe spaces where your pet can retreat</li>
              <li>Avoiding situations that trigger aggression</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Behavior modification typically involves desensitization and counter-conditioning—gradually exposing your pet to triggers at a low intensity while pairing the experience with something positive (like treats). This is slow, careful work that requires professional guidance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Anxiety in Pets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Anxiety in pets is more common than many people realize. Just like humans, pets can experience anxiety disorders that significantly impact their quality of life. Anxiety isn't just "being nervous"—it's a persistent state of worry or fear that interferes with normal behavior.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Types of Anxiety</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Separation anxiety:</strong> Extreme distress when left alone, often resulting in destructive behavior, excessive vocalization, or house soiling</li>
              <li><strong>Generalized anxiety:</strong> Chronic worry and stress about various things, making the pet constantly on edge</li>
              <li><strong>Noise phobias:</strong> Extreme fear of specific sounds like thunderstorms, fireworks, or construction</li>
              <li><strong>Social anxiety:</strong> Fear of people or other animals, often stemming from lack of early socialization</li>
              <li><strong>Situational anxiety:</strong> Fear of specific situations like car rides, vet visits, or grooming</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Recognizing Anxiety Symptoms</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Anxiety can manifest in many ways, and symptoms vary between pets:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Physical signs:</strong> Panting, drooling, trembling, pacing, restlessness, excessive grooming or licking</li>
              <li><strong>Behavioral changes:</strong> Hiding, avoiding certain areas or people, clinginess, or conversely, withdrawal</li>
              <li><strong>Destructive behavior:</strong> Chewing, digging, scratching, especially when left alone</li>
              <li><strong>Vocalization:</strong> Excessive barking, meowing, or whining</li>
              <li><strong>House soiling:</strong> Accidents in the house, especially when the pet is otherwise house-trained</li>
              <li><strong>Appetite changes:</strong> Eating too fast, not eating, or only eating when alone</li>
              <li><strong>Sleep disturbances:</strong> Restlessness, inability to settle, or excessive sleeping as a coping mechanism</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Managing Anxiety</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Managing anxiety often requires a multi-faceted approach:
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Create a Safe Environment</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Provide your pet with a quiet, comfortable space where they can retreat when feeling overwhelmed. This might be a crate, a specific room, or a cozy bed in a quiet corner. Make sure this space is always accessible and never used for punishment.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Maintain Routines</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Predictability reduces anxiety. Feed your pet at the same times, maintain consistent walk schedules, and keep daily routines as regular as possible. When changes are necessary, introduce them gradually.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Provide Mental and Physical Stimulation</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A tired pet is often a calmer pet. Regular exercise helps burn off excess energy and stress. Mental stimulation through puzzle toys, training, or food-dispensing toys can also help redirect anxious energy.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Desensitization and Counter-Conditioning</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For specific fears or phobias, gradually exposing your pet to the trigger at a low intensity while pairing it with positive experiences can help reduce anxiety over time. This should be done carefully and gradually—pushing too fast can make things worse.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Calming Aids</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Various products can help reduce anxiety, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>ThunderShirts or anxiety wraps that provide gentle pressure</li>
              <li>Pheromone diffusers (Adaptil for dogs, Feliway for cats)</li>
              <li>Calming supplements (consult your vet first)</li>
              <li>Background noise like white noise machines or calming music</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">When to Seek Professional Help</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While mild anxiety or occasional aggressive displays might be manageable on your own, professional help is essential when:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your pet has bitten someone or another animal</li>
              <li>Aggression is escalating or becoming more frequent</li>
              <li>Anxiety is severe and interfering with daily life</li>
              <li>Your pet is injuring themselves (excessive licking, chewing, or self-mutilation)</li>
              <li>You feel unsafe or unable to manage the behavior</li>
              <li>Home management strategies aren't helping</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Look for a certified animal behaviorist (CAAB or ACAAB) or a veterinarian who specializes in behavior. These professionals can create a comprehensive treatment plan that may include behavior modification, environmental management, and in some cases, medication.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important Safety Note:</strong> If your pet shows signs of aggression, especially if they've bitten or you're concerned they might, prioritize safety. Keep your pet away from triggers, use proper management tools (muzzles, leashes, barriers), and seek professional help immediately. Never attempt to address severe aggression on your own—this requires professional guidance to ensure everyone's safety.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Aggression and anxiety are treatable conditions. With patience, proper management, and often professional help, many pets can learn to manage their emotions and live happier lives. Don't give up hope, and don't blame yourself—these behaviors are complex and require understanding and support, not judgment.
              </p>
            </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrainingSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

