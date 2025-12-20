import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Mouse Care Guide',
  description: 'Complete guide to keeping mice as pets. Learn about mouse care, housing, diet, and health considerations.',
  keywords: ['mouse', 'pet mouse', 'mouse care', 'mouse housing', 'mouse diet'],
  pathname: '/pet-breeds/small-mammals/mouse',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Mouse Care Guide',
    type: 'image/png',
  }],
});

export default function MousePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Mouse"
        description="Mice are small, active, and social pets that are relatively easy to care for. They are curious and entertaining to watch, making them popular pets for families."
        emoji="🐹"
        slug="mouse"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mice are among the most underestimated companion animals. Often dismissed due to their size, pet mice are intelligent, emotionally responsive, and surprisingly expressive creatures. When properly cared for, they display complex social behavior, curiosity-driven exploration, and clear bonding patterns with both cage mates and human caretakers.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A domestic mouse is physically delicate yet remarkably resilient. Measuring only a few inches in body length, with a long, flexible tail that aids balance and communication, mice are built for constant movement. They explore their environment through scent, sound, and touch, mapping their surroundings in ways that reveal impressive spatial memory.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Behaviorally, mice are deeply social animals. In the wild, they live in colonies structured by social hierarchy and cooperation. This instinct carries into captivity. Mice housed alone often become withdrawn, anxious, or lethargic, while those kept in compatible groups exhibit grooming, play, and synchronized activity that reflects emotional wellbeing.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 2.5-4 inches (body), 3-4 inches (tail)</li>
              <li>Lifespan: 1-3 years</li>
              <li>Temperament: Social, curious, active, can be skittish</li>
              <li>Activity Level: High (nocturnal - active at night)</li>
              <li>Grooming: Minimal (self-grooming)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mice are primarily nocturnal. During the day, they rest in nests constructed from bedding, paper, and soft materials. At night, they become highly active, engaging in running, climbing, foraging, and social interaction. This natural rhythm should be respected. Attempting to force daytime interaction often results in stress and defensive behavior.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Despite their small size and short lifespan, mice form genuine bonds. Many owners report mice responding to their presence, recognizing voices, and showing preference for familiar scents. These subtle but meaningful interactions are what make mouse companionship uniquely rewarding.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper housing is the foundation of mouse health, comfort, and behavior. While mice require less space than larger small mammals, they still need an enclosure that supports movement, exploration, and social interaction. A minimum of ten gallons is recommended for a small group of two to three mice, though larger enclosures significantly improve quality of life.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enclosures must be secure. Mice are expert escape artists capable of squeezing through openings no larger than a coin. Solid-walled tanks or finely barred cages designed specifically for mice are ideal. Adequate ventilation is essential to prevent ammonia buildup, which can quickly damage delicate respiratory systems.
            </p>

            {/* Affiliate link can be added here for mouse cages or secure enclosures */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bedding should be deep, soft, and capable of holding tunnels. Paper-based bedding and aspen shavings are commonly used. Aromatic woods such as cedar or pine should always be avoided, as they release oils that irritate the respiratory tract. Nesting materials like shredded paper or hay allow mice to build secure sleeping areas.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enrichment is not optional for mice. Exercise wheels with solid running surfaces, tunnels, climbing structures, and chew-safe toys help prevent boredom and repetitive behaviors. A well-enriched enclosure encourages natural activity and supports both physical and mental health.
            </p>

            {/* Affiliate link can be added here for mouse wheels, tunnels, and enrichment toys */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Social housing must be managed carefully. Female mice thrive in groups, while males should generally be housed alone unless neutered and closely supervised. Mixed-sex housing without sterilization leads to rapid overpopulation and should never be attempted.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enclosures should be placed in quiet areas of the home during daylight hours. While mice tolerate gentle ambient noise, constant disturbance disrupts sleep cycles and contributes to stress-related illness.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mice are omnivores with fast metabolisms and high nutritional demands relative to their size. In the wild, they consume seeds, grains, insects, and plant matter. A captive diet must reflect this variety while maintaining balance and moderation.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A high-quality commercial mouse food should form the foundation of the diet. Pelleted diets are often preferred, as they prevent selective feeding and ensure consistent nutrient intake. Seed-heavy mixes can be offered occasionally but should not be relied upon exclusively.
            </p>

            {/* Affiliate link can be added here for premium mouse food and feeding bowls */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh vegetables such as leafy greens, carrots, and peas may be offered several times per week. Fruits should be limited due to their sugar content. Clean, fresh water must always be available, typically provided via a drip bottle to maintain hygiene.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feeding time often becomes a bonding opportunity. Mice quickly learn routines and may approach familiar caretakers with visible anticipation. These moments reinforce trust and deepen the human-animal connection.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mice are generally hardy when kept in clean, stable environments, but their small size makes them vulnerable to rapid health decline. Respiratory infections are among the most common issues and are often caused by poor ventilation, dusty bedding, or sudden temperature changes.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tumors are relatively common in aging mice, particularly females. While not always preventable, early detection allows for supportive care that improves comfort and quality of life. Dental issues can also occur if chewing opportunities are insufficient.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Because mice instinctively hide signs of illness, subtle changes in behavior are often the earliest indicators of trouble. Reduced activity, changes in grooming, altered eating patterns, or labored breathing should never be ignored.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Access to an exotic animal veterinarian is essential. While mice may not require routine checkups, prompt professional care during illness greatly improves outcomes. Clean housing, proper nutrition, and daily observation remain the most effective preventive measures.
            </p>

            {/* Affiliate link can be added here for cleaning supplies, health monitoring tools, or supplements */}

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
