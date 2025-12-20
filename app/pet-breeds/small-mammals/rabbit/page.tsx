import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Rabbit Care Guide',
  description: 'Complete guide to keeping rabbits as pets. Learn about rabbit care, housing, diet, and health considerations.',
  keywords: ['rabbit', 'rabbit care', 'pet rabbit', 'rabbit housing', 'rabbit diet'],
  pathname: '/pet-breeds/small-mammals/rabbit',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Rabbit Care Guide',
    type: 'image/png',
  }],
});

export default function RabbitPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Rabbit"
        description="Rabbits are social, intelligent pets that require proper care and attention. They can be litter-trained and make wonderful companions when provided with appropriate housing, diet, and enrichment."
        emoji="🐇"
        slug="rabbit"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rabbits are often misunderstood as low-effort starter pets, but in reality, they are complex, intelligent animals with emotional depth and specific care requirements. When properly cared for, rabbits form strong bonds with their human companions, display distinct personalities, and engage in sophisticated social behaviors that rival those of dogs and cats.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Domesticated rabbits come in a wide range of breeds, sizes, and coat types, from compact dwarf rabbits weighing just a few pounds to large breeds that exceed twenty pounds. Regardless of size, all rabbits share similar behavioral traits rooted in their identity as prey animals. They are alert, observant, and sensitive to their surroundings, responding quickly to changes in routine, noise, or environment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rabbits are crepuscular, meaning they are most active at dawn and dusk. During these periods, they exhibit bursts of energy known as “binkies,” joyful leaps and twists that signal happiness and wellbeing. These moments are not only entertaining to observe but are also important indicators of a rabbit’s emotional health.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Varies by breed (2-20+ pounds)</li>
              <li>Lifespan: 8-12 years</li>
              <li>Temperament: Social, intelligent, curious, can be shy</li>
              <li>Activity Level: Moderate to high (crepuscular - most active at dawn and dusk)</li>
              <li>Grooming: Moderate (regular brushing, especially for long-haired breeds)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rabbits are highly social animals. In the wild, they live in complex social groups with established hierarchies and communication systems. In captivity, they thrive on companionship, either from another bonded rabbit or through frequent, meaningful interaction with humans. Isolation often leads to depression, anxiety, and destructive behaviors.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With patience and trust-building, many rabbits enjoy being near their caregivers, following them around, and even requesting affection. However, because rabbits are prey animals, they generally dislike being picked up. Respecting their boundaries is essential for maintaining a healthy relationship.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper housing is one of the most important factors in a rabbit’s physical and emotional wellbeing. Contrary to outdated beliefs, rabbits should not be confined to small cages for most of the day. They require space to move freely, stretch fully, and engage in natural behaviors such as hopping, digging, and exploring.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The minimum recommended enclosure size for a small rabbit is four by two feet, though larger is always better. Many experienced owners use exercise pens or dedicate a rabbit-safe room rather than traditional cages. Vertical height is also important, as rabbits need to stand fully upright on their hind legs without restriction.
            </p>

            {/* Affiliate link can be added here for rabbit enclosures, exercise pens, or indoor habitats */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rabbits require daily time outside their primary enclosure. Supervised free-roaming or playpen time allows them to exercise, explore, and maintain muscle tone. Flooring should be non-slip to prevent joint injuries, and electrical cords or toxic plants must be carefully secured.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Inside the enclosure, rabbits need soft, absorbent bedding, a litter box, hiding spaces, and chew-safe enrichment items. Many rabbits can be litter-trained, making indoor living both practical and hygienic. Consistent cleaning is essential to prevent ammonia buildup and maintain respiratory health.
            </p>

            {/* Affiliate link can be added here for litter boxes, bedding, and chew toys */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Environmental placement matters. Rabbits thrive in calm, predictable spaces away from loud noises and extreme temperatures. Sudden disruptions can cause stress responses that negatively impact digestion and immunity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Diet is the single most critical component of rabbit care and the most common source of preventable health problems. Rabbits have highly specialized digestive systems designed to process large quantities of fibrous plant material. Any deviation from this natural diet can have serious consequences.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlimited access to high-quality grass hay is essential. Timothy, orchard, or oat hay should make up the majority of a rabbit’s diet. Hay supports proper digestion, maintains healthy gut motility, and naturally wears down continuously growing teeth.
            </p>

            {/* Affiliate link can be added here for premium hay and hay feeders */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In addition to hay, rabbits should receive a small, measured portion of high-quality pellets formulated specifically for rabbits. Pellets should be plain, without added seeds or dried fruits. Fresh leafy vegetables should be offered daily, providing hydration, nutrients, and enrichment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fruits and commercial treats should be given sparingly, if at all. Excess sugar disrupts gut flora and increases the risk of gastrointestinal stasis, a potentially life-threatening condition. Fresh water must always be available, either in a heavy bowl or a clean bottle.
            </p>

            {/* Affiliate link can be added here for pellet brands, water bowls, or feeding accessories */}

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rabbits are prey animals and instinctively hide signs of illness. By the time symptoms become obvious, conditions may already be advanced. For this reason, daily observation and preventive care are essential components of responsible rabbit ownership.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental disease is one of the most common health issues in rabbits and is directly linked to improper diet. Teeth grow continuously and require constant wear through chewing fibrous hay. Overgrown teeth can lead to pain, abscesses, and difficulty eating.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gastrointestinal stasis is another serious condition that occurs when digestion slows or stops. Stress, dehydration, lack of fiber, or underlying illness can trigger this condition. Early signs include reduced appetite, smaller droppings, and lethargy. Immediate veterinary care is critical.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory infections, parasites, and obesity are additional concerns, particularly when housing or diet is inadequate. Regular veterinary checkups with an exotic animal veterinarian allow for early detection and preventive treatment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With attentive care, proper nutrition, and a stable environment, rabbits can live long, fulfilling lives as cherished family members. Their quiet companionship, gentle presence, and emotional sensitivity make them deeply rewarding pets for those willing to meet their needs.
            </p>

            {/* Affiliate link can be added here for grooming tools, health supplements, or cleaning supplies */}

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
