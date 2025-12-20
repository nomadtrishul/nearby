import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Rat Care Guide',
  description: 'Complete guide to keeping rats as pets. Learn about rat care, housing, diet, and health considerations.',
  keywords: ['rat', 'pet rat', 'rat care', 'rat housing', 'rat diet'],
  pathname: '/pet-breeds/small-mammals/rat',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Rat Care Guide',
    type: 'image/png',
  }],
});

export default function RatPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Rat"
        description="Rats are intelligent, social, and affectionate pets that make excellent companions. They are highly trainable and form strong bonds with their owners."
        emoji="🐹"
        slug="rat"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rats are among the most misunderstood companion animals, yet those who share their lives with pet rats often describe the experience as deeply rewarding. Far from the negative stereotypes associated with wild rodents, domestic rats are intelligent, emotionally expressive, and capable of forming strong, lasting bonds with humans. Many experienced keepers consider rats to be closer to dogs in personality than to traditional small mammals.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Physically, rats are medium-sized rodents with sleek bodies, expressive eyes, and dexterous front paws that they use almost like hands. Including the tail, an adult rat typically measures between nine and eleven inches. Their tails play a crucial role in balance and temperature regulation and should be viewed as an integral part of their anatomy rather than something to be avoided.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Intelligence is one of the defining traits of rats. They are capable of learning their names, responding to verbal cues, solving puzzles, and even performing simple tricks. Rats remember routines, recognize individual people, and often seek out interaction with trusted caretakers. This cognitive ability means they require more mental stimulation than many other small mammals.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 9-11 inches (including tail)</li>
              <li>Lifespan: 2-3 years</li>
              <li>Temperament: Intelligent, social, affectionate, curious</li>
              <li>Activity Level: Moderate to high (crepuscular - most active at dawn and dusk)</li>
              <li>Grooming: Minimal (self-grooming)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rats are crepuscular, meaning they are most active during the early morning and evening hours. During these times, they engage in play, exploration, and social interaction. Unlike nocturnal species that avoid daylight entirely, rats often adjust their schedules to match household routines, especially when they associate human presence with enrichment and affection.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Emotionally, rats are deeply social animals. They experience loneliness and boredom when kept in isolation. A single rat, even with attentive human care, is at risk of emotional distress. Keeping rats in compatible same-sex pairs or groups allows them to express natural behaviors such as grooming, sleeping together, and cooperative play.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper housing is essential for supporting both the physical and emotional health of pet rats. Because rats are active climbers and explorers, their enclosure should emphasize vertical space as well as horizontal room. A multi-level cage allows rats to climb, jump, and navigate their environment in ways that reflect natural behavior.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A minimum of two cubic feet of space per rat is recommended, though larger enclosures are always preferable. Wire spacing must be narrow enough to prevent escapes, especially for younger or smaller rats. Solid platforms, ramps, and shelves reduce the risk of foot injuries and provide resting areas throughout the enclosure.
            </p>

            {/* Affiliate link can be added here for large multi-level rat cages */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bedding should be absorbent, dust-free, and safe for sensitive respiratory systems. Paper-based bedding is commonly used, while cedar and pine should be avoided due to their aromatic oils. Hammocks, fabric hides, and nesting materials offer comfort and encourage natural sleeping behaviors.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Daily supervised time outside the cage is critical. Rats benefit greatly from free-roaming or playpen time where they can explore, climb, and interact with their human companions. These sessions strengthen bonds and provide essential mental stimulation.
            </p>

            {/* Affiliate link can be added here for hammocks, tunnels, and playpen accessories */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enclosures should be placed in areas of the home where rats can observe daily activity without being exposed to constant loud noise or drafts. Rats are curious and enjoy being part of household life, but they also require predictable periods of rest.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rats are omnivores with flexible dietary needs, but this flexibility does not mean that any food is appropriate. A balanced diet supports immune function, coat quality, and longevity, while poor nutrition contributes to obesity and disease.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A high-quality commercial rat block or lab-formulated diet should serve as the foundation of daily feeding. These diets are designed to provide consistent nutrition and prevent selective eating. Fresh foods should be offered as supplements rather than replacements.
            </p>

            {/* Affiliate link can be added here for premium rat food and feeding bowls */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh vegetables such as leafy greens, squash, peas, and carrots can be offered regularly. Fruits should be limited due to sugar content. Rats also benefit from occasional protein sources, such as cooked eggs or lean meats, especially during growth or recovery periods.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh water must always be available, typically provided in a bottle to maintain cleanliness. Feeding routines quickly become bonding moments, as rats eagerly anticipate interaction and often take food gently from their caretaker’s hands.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rats are resilient animals, but they are prone to certain health conditions that require attentive care. Respiratory infections are among the most common issues and are often exacerbated by dusty bedding, poor ventilation, or temperature fluctuations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tumors, particularly mammary tumors in females, are common as rats age. While not always preventable, early detection significantly improves treatment options and quality of life. Regular handling helps owners notice changes such as lumps or weight loss early.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental issues may arise if rats lack adequate chewing opportunities. Providing safe chew items supports dental health and satisfies natural gnawing instincts. Obesity is another concern, typically resulting from excessive treats or lack of exercise.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Access to an exotic animal veterinarian is essential. Rats age quickly, and health conditions can progress rapidly. Daily observation, clean housing, proper diet, and enrichment remain the most effective tools for prevention.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Although their lifespan is relatively short, the emotional connection rats form with their caretakers is profound. Their curiosity, affection, and intelligence leave a lasting impression, making them unforgettable companions for those willing to invest time and care.
            </p>

            {/* Affiliate link can be added here for cleaning supplies, chew toys, or health supplements */}

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/small-mammals" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Small Mammals
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
