import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Corn Snake Care Guide',
  description: 'Complete guide to keeping corn snakes as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['corn snake', 'corn snake care', 'snake pets', 'corn snake habitat', 'corn snake diet'],
  pathname: '/pet-breeds/exotics/corn-snake',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Corn Snake Care Guide',
    type: 'image/png',
  }],
});

export default function CornSnakePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Corn Snake"
        description="Corn snakes are popular pet snakes known for their docile nature, beautiful colors, and relatively easy care requirements. They are excellent snakes for beginners."
        emoji="🦎"
        slug="corn-snake"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Corn snakes have become one of the most respected and widely recommended pet snakes in the reptile community, and that reputation is built on decades of consistent experience. Native to the southeastern United States, corn snakes evolved as adaptable, opportunistic hunters capable of thriving in a wide range of environments. This natural flexibility is precisely what makes them so well suited to life in captivity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult corn snakes typically reach between three and five feet in length, with slender yet muscular bodies that feel light and controlled when handled. Their size strikes an ideal balance for pet ownership. They are large enough to feel substantial and impressive, yet small enough to be housed and managed comfortably without specialized facilities. Their smooth scales and fluid movement make handling calm and predictable when the snake is accustomed to routine interaction.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lifespan is another defining factor. With proper care, corn snakes regularly live fifteen to twenty years, and some individuals exceed that range. This longevity places them firmly in the category of long-term companions rather than short-lived novelty pets. Anyone considering a corn snake should view the decision as a multi-decade commitment that requires consistency and responsibility.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperament is where corn snakes truly stand apart. They are widely regarded as among the most docile snake species available in the pet trade. Biting is rare and typically associated with feeding confusion rather than defensive behavior. When startled, corn snakes are far more likely to retreat or attempt to hide than to strike. Over time, many individuals become comfortable with gentle handling and routine interaction.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Corn snakes are crepuscular, meaning they are most active during dawn and dusk. During these periods, they may explore their enclosure, climb, or investigate scents. Outside of these windows, they spend much of their time resting in hides. This rhythm makes them well suited for owners who enjoy observing natural behavior without expecting constant activity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper habitat setup is the cornerstone of corn snake health. These snakes are resilient, but they are not forgiving of prolonged environmental mistakes. Many issues attributed to illness or temperament are actually the result of inadequate enclosure design.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An adult corn snake requires a secure terrarium, generally in the twenty to thirty gallon range at minimum, though larger enclosures are often preferable when designed correctly. Security is critical. Corn snakes are excellent escape artists, capable of squeezing through surprisingly small gaps. A well-fitted, locking enclosure is essential to prevent injury or loss.
            </p>
            {/* Affiliate link opportunity: Escape-proof corn snake terrariums */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperature regulation is achieved through a gradient rather than uniform heat. One side of the enclosure should be maintained between eighty-five and eighty-eight degrees Fahrenheit, while the cooler side should remain in the seventy-five to eighty degree range. This allows the snake to move freely and regulate its body temperature as needed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike some reptiles, corn snakes do not require UVB lighting to survive, but they do benefit from a consistent day and night cycle that supports natural activity patterns. Lighting should be used to establish rhythm rather than heat. Heat sources are best provided through regulated mats or emitters controlled by thermostats.
            </p>
            {/* Affiliate link opportunity: Thermostats and under-tank heating systems */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Substrate choice should prioritize cleanliness and safety. Materials that allow burrowing while remaining easy to clean are ideal. The enclosure must include multiple hiding spots on both the warm and cool sides. These hides should be snug and enclosed, as corn snakes feel safest when their bodies are supported on all sides.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A sturdy water dish large enough for soaking should be available at all times. While corn snakes do not soak frequently, access to water supports hydration and aids in healthy shedding. Branches or low climbing structures can be included for enrichment, reflecting the species’ natural tendency to climb when given the opportunity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Corn snakes are obligate carnivores with simple but specific dietary needs. In captivity, they thrive on a diet of appropriately sized rodents. Feeding success depends less on variety and more on consistency, prey size, and proper feeding intervals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hatchlings typically begin with pinky mice, gradually progressing to larger prey as they grow. Juveniles generally require feeding every five to seven days, while adults are fed every seven to ten days. Prey size should correspond to the widest part of the snake’s body to ensure safe swallowing and digestion.
            </p>
            {/* Affiliate link opportunity: Frozen and thawed feeder mice */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Frozen-thawed prey is strongly recommended. It eliminates the risk of injury from live rodents and allows for better hygiene and storage. Feeding should take place in a calm environment, and handling should be avoided for at least forty-eight hours after feeding to prevent regurgitation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh water must always be available and replaced regularly. Hydration supports digestion, shedding, and overall metabolic health. Corn snakes that are properly hydrated tend to shed cleanly and maintain healthy skin condition.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Corn snakes are generally robust animals, but like all reptiles, they rely heavily on environmental conditions to maintain health. The most common health issues seen in captivity are preventable and directly linked to husbandry errors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory infections often result from temperatures that are too low or inconsistent. Symptoms may include wheezing, open-mouth breathing, or excessive mucus. Scale rot, another preventable condition, is typically caused by prolonged exposure to dirty or overly damp substrate.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              External parasites such as mites can occur, particularly in snakes sourced from poor conditions or introduced without quarantine. Regular enclosure cleaning and careful inspection during handling help prevent infestations. Shedding problems may arise if humidity is too low, but these issues are usually resolved by improving hydration and enclosure conditions.
            </p>
            {/* Affiliate link opportunity: Reptile-safe cleaning supplies and mite treatments */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Establishing care with a veterinarian experienced in reptile medicine is strongly recommended. Even hardy species benefit from occasional health evaluations. Early detection of issues dramatically improves outcomes and reduces stress for both snake and owner.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Keeping a corn snake is an exercise in respect for a quiet, deliberate form of life. These snakes do not seek attention, yet they respond to consistency, routine, and gentle handling. Over time, many owners develop a deep appreciation for their calm presence and subtle behaviors. For those seeking an exotic pet that combines beauty, resilience, and manageable care, the corn snake remains one of the most rewarding choices available.
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
