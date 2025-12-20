import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Leopard Gecko Care Guide',
  description: 'Complete guide to keeping leopard geckos as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['leopard gecko', 'leopard gecko care', 'gecko pets', 'leopard gecko habitat', 'leopard gecko diet'],
  pathname: '/pet-breeds/exotics/leopard-gecko',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Leopard Gecko Care Guide',
    type: 'image/png',
  }],
});

export default function LeopardGeckoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Leopard Gecko"
        description="Leopard geckos are popular pet reptiles known for their docile nature, ease of care, and beautiful spotted patterns. They are excellent beginner reptiles and make great pets for those new to reptile keeping."
        emoji="🦎"
        slug="leopard-gecko"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Leopard geckos are one of the most widely kept reptiles in the world, and their popularity is rooted in decades of proven success in captivity. Native to the rocky deserts and grasslands of Afghanistan, Pakistan, and parts of India, these geckos evolved to survive in environments with dramatic temperature swings and limited resources. That evolutionary background makes them resilient, adaptable, and remarkably tolerant of life in human care when their basic needs are respected.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult leopard geckos typically measure between seven and ten inches in length, with sturdy bodies and thick tails used to store fat reserves. This tail is more than a visual feature. It is a vital indicator of health. A well-fed, properly cared-for leopard gecko carries weight in its tail, signaling adequate nutrition and overall stability. Their bodies feel solid and grounded in the hand, which contributes to their reputation as easy-to-handle reptiles.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lifespan is one of the most compelling aspects of leopard gecko ownership. With consistent care, individuals routinely live fifteen to twenty years, and some exceed that range. This longevity transforms leopard geckos from beginner pets into long-term companions. Choosing one should be viewed as a commitment measured in decades, not seasons.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperament is where leopard geckos truly stand out. They are widely regarded as calm, tolerant, and predictable. While individual personalities vary, most leopard geckos adapt well to gentle handling and rarely display aggression. When startled, they are far more likely to retreat or freeze than to bite. This makes them especially well suited for keepers who are new to reptiles or who prefer a low-stress animal.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Leopard geckos are nocturnal, becoming active after sunset. During the day, they prefer to rest in secure hiding spots, conserving energy and avoiding heat. At night, they emerge to explore, hunt, and interact with their environment. This natural rhythm allows owners to observe authentic behaviors during evening hours while maintaining a quiet enclosure during the day.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A leopard gecko’s enclosure is not simply a container. It is a carefully controlled environment designed to replicate key aspects of their native habitat. Many health and behavioral issues seen in captivity stem directly from improper enclosure setup rather than inherent fragility.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A single adult leopard gecko requires a secure terrarium of at least twenty gallons, though larger enclosures offer greater stability and enrichment. Leopard geckos are terrestrial reptiles, so floor space is more important than height. A well-fitted lid is essential, as these geckos are surprisingly capable climbers despite their ground-dwelling nature.
            </p>
            {/* Affiliate link opportunity: Leopard gecko terrariums */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Heat is a critical component of leopard gecko care. Unlike mammals, reptiles rely on external heat sources to regulate digestion, immune function, and activity. One side of the enclosure should provide a warm zone maintained between eighty-eight and ninety-two degrees Fahrenheit, while the opposite side should remain cooler, typically between seventy-five and eighty degrees. This temperature gradient allows the gecko to self-regulate by moving between zones.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Belly heat is particularly important for leopard geckos. In the wild, they absorb warmth from sun-heated rocks and soil. In captivity, this is best replicated with a regulated heat mat placed beneath one side of the enclosure. All heat sources must be controlled by thermostats to prevent overheating and burns.
            </p>
            {/* Affiliate link opportunity: Heat mats and thermostats */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Substrate choice has a direct impact on safety. Loose sand is a common but risky option, especially for juveniles, as it can lead to impaction if ingested. Many experienced keepers opt for solid substrates or carefully selected textured surfaces that allow natural movement while minimizing risk. Regardless of substrate choice, cleanliness is essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hiding spots are not optional accessories. Leopard geckos require at least three distinct hides: one on the warm side, one on the cool side, and a moist hide to aid in shedding. These hides provide security and help regulate hydration. A shallow water dish should always be available and refreshed regularly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Leopard geckos are strict insectivores, relying entirely on live prey for nutrition. In captivity, this means feeding a variety of appropriately sized insects such as crickets, mealworms, dubia roaches, and occasional waxworms. Dietary variety supports balanced nutrition and encourages natural hunting behavior.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feeding frequency changes with age. Juveniles grow rapidly and typically require daily feeding to support development. Adults, whose growth has stabilized, are usually fed every two to three days. Portion size should be appropriate, avoiding both overfeeding and underfeeding, as excess weight can reduce lifespan while insufficient nutrition weakens immune function.
            </p>
            {/* Affiliate link opportunity: Live feeder insects and insect care kits */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper supplementation is non-negotiable. Insects must be gut-loaded with nutritious foods before feeding and dusted with calcium and vitamin D3 supplements on a regular schedule. Without these supplements, leopard geckos are at high risk of developing metabolic bone disease, a serious and preventable condition.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh water should always be available in a shallow dish. While leopard geckos may not drink frequently, consistent access supports hydration and aids in shedding. Observing a gecko drink, particularly during evening hours, is a positive sign of comfort and health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Leopard geckos are generally hardy reptiles, but like all ectothermic animals, their health is tightly linked to environmental quality. Most health problems seen in captivity are preventable and arise from improper heating, nutrition, or hygiene.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Metabolic bone disease is the most serious and commonly discussed condition. It results from calcium deficiency or improper calcium metabolism and can lead to deformities, fractures, and neurological issues. Early signs may include weakness, tremors, or difficulty moving. Consistent supplementation and correct heating dramatically reduce this risk.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Impaction is another concern, often linked to inappropriate substrate or oversized prey. Shedding problems may occur if humidity is insufficient or if the gecko lacks access to a moist hide. Retained shed around the toes can restrict circulation and must be addressed promptly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Leopard geckos can drop their tails as a defensive mechanism when severely stressed. While the tail can regenerate, the process requires significant energy and may temporarily affect health. Preventing tail loss through gentle handling and stable environments is always preferable.
            </p>
            {/* Affiliate link opportunity: Reptile-safe supplements and enclosure cleaning supplies */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Routine observation is one of the most effective health tools available to keepers. Changes in appetite, weight, activity level, or appearance should never be ignored. Establishing a relationship with a veterinarian experienced in reptile care provides professional guidance and early intervention when needed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Leopard geckos offer a form of companionship built on consistency and quiet interaction. They may not seek affection, but they recognize routine, respond to calm handling, and display a subtle intelligence through their behaviors. For those seeking an exotic pet that combines beauty, resilience, and manageable care, the leopard gecko remains one of the most trusted and rewarding choices in reptile keeping.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Exotic Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
