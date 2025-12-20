import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Hedgehog Care Guide',
  description: 'Complete guide to keeping hedgehogs as pets. Learn about their care, housing, diet, and health considerations.',
  keywords: ['hedgehog', 'hedgehog care', 'pet hedgehog', 'hedgehog housing', 'hedgehog diet'],
  pathname: '/pet-breeds/small-mammals/hedgehog',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Hedgehog Care Guide',
    type: 'image/png',
  }],
});

export default function HedgehogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Hedgehog"
        description="Hedgehogs are unique, spiny mammals known for their distinctive appearance and curious personalities. They require specialized care and are best suited for experienced pet owners."
        emoji="🐹"
        slug="hedgehog"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hedgehogs are among the most distinctive exotic pets kept today, instantly recognizable by their protective coat of spines and compact, rounded bodies. Unlike rodents commonly kept as pets, hedgehogs are insectivorous mammals with behaviors and biological needs that differ significantly from hamsters, guinea pigs, or gerbils. This distinction is important, as successful hedgehog care depends on understanding these differences rather than applying general small mammal practices.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most pet hedgehogs are African pygmy hedgehogs, selectively bred for domestication. Adults typically weigh between one and two pounds and can live between four and seven years when properly cared for. Their relatively long lifespan for a small exotic mammal makes them a meaningful long-term commitment rather than a novelty pet.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Behaviorally, hedgehogs are solitary and independent. They do not seek companionship from other hedgehogs and should always be housed alone to prevent stress or injury. While they can form bonds with their human caretakers, this process takes time and patience. A hedgehog’s natural defense response is to curl into a tight ball when frightened, exposing only its spines. This is not aggression but a survival instinct.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (1-2 pounds)</li>
              <li>Lifespan: 4-7 years</li>
              <li>Temperament: Curious, can be shy, independent, nocturnal</li>
              <li>Activity Level: Moderate (nocturnal - most active at night)</li>
              <li>Grooming: Minimal (occasional nail trimming)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hedgehogs are strictly nocturnal. They sleep for most of the day and become active after dusk, often spending hours running, exploring, and foraging. Owners should not expect daytime interaction and should avoid disturbing sleeping hedgehogs, as chronic sleep disruption leads to stress and health problems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With gentle, consistent handling, many hedgehogs become tolerant of human interaction and may even appear curious and relaxed when explored outside their enclosure. However, they are never truly social animals in the traditional sense, and respecting their independence is key to maintaining trust.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Housing plays a critical role in both the physical health and emotional wellbeing of a hedgehog. Because hedgehogs are ground-dwelling animals, horizontal floor space is far more important than vertical height. A minimum enclosure size of four by two feet is recommended to allow adequate room for movement, exploration, and exercise.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The enclosure must have a solid floor to prevent foot injuries. Wire flooring is unsafe and can lead to painful sores or broken toes. Within the enclosure, hedgehogs need a secure hiding area where they can sleep undisturbed during the day. This mimics the burrows they would naturally use in the wild.
            </p>

            {/* Affiliate link can be added here for hedgehog cages or enclosure setups */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperature control is one of the most important and most overlooked aspects of hedgehog care. Hedgehogs are highly sensitive to cold and require a consistently warm environment between seventy-two and eighty degrees Fahrenheit. Exposure to cooler temperatures can trigger a dangerous state of torpor, which is not true hibernation and can be fatal if not corrected promptly.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To maintain proper temperatures, many owners rely on ceramic heat emitters or under-tank heating elements paired with thermostats. Heat sources must be carefully positioned to prevent burns while ensuring the entire enclosure remains within a safe temperature range.
            </p>

            {/* Affiliate link can be added here for heat lamps, thermostats, or temperature monitors */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise wheels are essential enrichment tools for hedgehogs. A solid-surface wheel of adequate diameter allows them to engage in natural running behavior without risking spinal injury. Bedding should be absorbent, low-dust, and safe for prolonged contact. Paper-based bedding is commonly used, while aromatic woods should be avoided.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enclosures should be placed in quiet, low-traffic areas of the home. Hedgehogs are sensitive to sudden noises and vibrations, which can contribute to chronic stress if their environment is too chaotic.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hedgehogs are insectivores with nutritional requirements that differ substantially from those of rodents. In the wild, their diet consists primarily of insects, supplemented by small amounts of plant matter and occasional protein sources. Replicating this balance in captivity is essential for long-term health.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A high-quality commercial hedgehog food or premium cat food formulated with high protein and moderate fat serves as a practical dietary foundation. Protein should be derived primarily from animal sources, while excessive fat and fillers should be avoided to prevent obesity.
            </p>

            {/* Affiliate link can be added here for hedgehog food or high-protein cat food */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Live insects such as mealworms and crickets provide important enrichment and nutritional variety. These should be offered in moderation, as excessive insect feeding can contribute to weight gain. Cooked lean meats, such as chicken or turkey, may also be offered occasionally.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Small amounts of fruits and vegetables can be included, but these should never form a significant portion of the diet. Sugary foods increase the risk of obesity and metabolic issues. Fresh, clean water must always be available, typically provided in a shallow dish that is cleaned daily.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hedgehogs are generally hardy when their environmental and dietary needs are met, but they are susceptible to several serious health conditions. Obesity is among the most common issues and is often linked to inappropriate diet or insufficient exercise. Maintaining proper weight is critical for preventing secondary problems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental disease can occur if diet and chewing opportunities are inadequate. Respiratory infections are often associated with improper temperatures or poor ventilation. Regular cleaning and stable environmental conditions greatly reduce these risks.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the most serious conditions affecting hedgehogs is Wobbly Hedgehog Syndrome, a progressive neurological disorder that leads to loss of coordination and mobility. While there is no cure, early diagnosis allows for supportive care that can improve quality of life.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular veterinary care from a professional experienced with exotic mammals is essential. Hedgehogs often hide signs of illness until conditions become advanced, making daily observation by the owner an important part of preventive care.
            </p>

            {/* Affiliate link can be added here for grooming tools, health supplements, or cleaning products */}

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
