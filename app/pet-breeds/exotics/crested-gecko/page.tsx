import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Crested Gecko Care Guide',
  description: 'Complete guide to keeping crested geckos as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['crested gecko', 'crested gecko care', 'reptile pets', 'gecko care', 'crested gecko habitat'],
  pathname: '/pet-breeds/exotics/crested-gecko',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Crested Gecko Care Guide',
    type: 'image/png',
  }],
});

export default function CrestedGeckoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Crested Gecko"
        description="Crested geckos are popular pet reptiles known for their distinctive eyelash-like crests and ease of care. They are excellent pets for beginners and make fascinating companions."
        emoji="🦎"
        slug="crested-gecko"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Crested geckos occupy a unique position in the reptile hobby because they combine visual appeal, manageable size, and relatively forgiving care requirements in a way few reptiles do. Native to the forests of New Caledonia, these geckos were once thought to be extinct before being rediscovered in the 1990s. Their return to the scientific and hobbyist world reshaped reptile keeping, offering a species that thrives in captivity without extreme heat, specialized lighting, or aggressive behavior.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult crested geckos typically reach six to ten inches in total length, including the tail. Their bodies are lightweight yet athletic, built for climbing rather than ground movement. Broad toe pads lined with microscopic setae allow them to adhere to glass, bark, and leaves with ease. This natural climbing ability gives them a graceful, almost weightless movement style that is endlessly engaging to observe.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lifespan is one of the most compelling aspects of crested gecko ownership. With proper care, individuals commonly live fifteen to twenty years. This longevity places them firmly in the category of long-term companions rather than short-lived display animals. While they do not demand daily interaction, they do benefit from consistent routines and stable environments maintained over many years.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperament is generally calm and tolerant, though crested geckos can be skittish, especially when young. They are not aggressive animals, and biting is extremely rare. Instead, their primary defense mechanisms involve jumping, hiding, or in some cases dropping their tails. Unlike some other gecko species, crested geckos do not regenerate lost tails, making gentle handling and stress reduction especially important.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As nocturnal reptiles, crested geckos are most active after dusk. During the day, they prefer to rest in foliage or shaded crevices. At night, they emerge to explore, climb, and feed. This rhythm makes them ideal for keepers who enjoy evening observation rather than daytime interaction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Creating the correct habitat for a crested gecko means thinking vertically rather than horizontally. In the wild, these geckos spend the majority of their lives above ground, navigating branches, vines, and foliage. A tall terrarium is therefore essential, allowing them to climb, jump, and choose resting spots at different heights.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A minimum enclosure size of twenty gallons is generally recommended for a single adult, though larger enclosures provide more enrichment and behavioral options. Vertical space is more valuable than floor area. Glass terrariums with front-opening doors are often preferred because they allow easy access while minimizing stress during maintenance.
            </p>
            {/* Affiliate link opportunity: Vertical terrariums for crested geckos */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperature requirements for crested geckos are refreshingly moderate compared to many reptiles. Ideal ambient temperatures range between seventy-two and seventy-eight degrees Fahrenheit. Prolonged exposure to temperatures above eighty-two degrees can be dangerous and even fatal. This makes crested geckos particularly well suited for households that maintain stable indoor temperatures.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Humidity is a critical component of enclosure management. Crested geckos thrive in environments with humidity levels between sixty and eighty percent. This is typically achieved through daily or twice-daily misting. Proper humidity supports hydration, shedding, and respiratory health. At the same time, the enclosure must be allowed to dry slightly between mistings to prevent stagnant conditions.
            </p>
            {/* Affiliate link opportunity: Hygrometers, misting systems, and spray bottles */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Furnishing the enclosure should focus on creating a dense, layered environment. Live or artificial plants provide cover and climbing opportunities, while cork bark, branches, and ledges allow natural movement. Hiding spots are essential, as crested geckos rely on visual security to feel safe. Substrate choices should retain some moisture without becoming waterlogged, supporting humidity while remaining clean and safe.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While crested geckos do not strictly require UVB lighting to survive, providing a low-level UVB source or a clear day and night lighting cycle supports natural behavior and circadian rhythm. Light should never produce excessive heat, and all heat sources must be carefully monitored.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the reasons crested geckos are considered beginner-friendly is their straightforward dietary needs. In captivity, they thrive on commercially formulated crested gecko diets, typically provided as a powdered mix combined with water. These diets are nutritionally complete, offering balanced protein, fruit content, vitamins, and minerals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While prepared diets can serve as the primary food source, supplemental feeding adds enrichment and variety. Live insects such as crickets or small roaches may be offered occasionally, particularly for younger geckos or breeding adults. Insects should be appropriately sized and lightly dusted with calcium to support bone health.
            </p>
            {/* Affiliate link opportunity: Commercial crested gecko diet powders */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some keepers also offer small amounts of fruit puree as enrichment, though this should never replace a balanced diet. Over-reliance on fruit can lead to nutritional imbalance. Calcium supplementation remains important, especially if insects are part of the feeding routine.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hydration is achieved in multiple ways. Fresh water should always be available in a shallow dish, but crested geckos also drink droplets from leaves and enclosure surfaces after misting. Observing drinking behavior is normal and reassuring, particularly in the evening hours.
            </p>
            {/* Affiliate link opportunity: Feeding ledges, food cups, and calcium supplements */}

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Crested geckos are generally hardy reptiles when their environmental needs are met, but they are not immune to health issues. Most problems encountered in captivity stem from improper nutrition, inadequate humidity, or chronic stress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Metabolic bone disease is one of the most serious preventable conditions and results from insufficient calcium intake or poor calcium absorption. Early signs may include weakness, tremors, or changes in posture. Ensuring a balanced diet and appropriate supplementation dramatically reduces this risk.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory infections can occur when humidity levels are consistently too low or when the enclosure remains overly damp without adequate airflow. Maintaining proper misting schedules and allowing for drying cycles helps prevent these issues. Shedding problems are less common but may arise if hydration is inadequate.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tail loss, while alarming to new owners, is a natural defense mechanism. Crested geckos can drop their tails when severely stressed, and unlike some reptiles, they do not regrow them. This makes gentle handling and calm environments especially important. A tailless crested gecko can live a full, healthy life, but prevention through stress reduction is always preferable.
            </p>
            {/* Affiliate link opportunity: Reptile-safe supplements and enclosure cleaning products */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular observation is the most effective health tool available to keepers. Changes in appetite, weight, activity level, or appearance should be addressed promptly. While crested geckos may not require frequent veterinary visits, access to a reptile-experienced veterinarian provides peace of mind and professional support when needed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Crested geckos offer a different kind of companionship. They do not seek affection in the traditional sense, yet their presence is calming and engaging. Watching one navigate its environment, respond to subtle changes, and settle into nightly routines creates a quiet connection rooted in respect rather than control. For those seeking an exotic pet that is visually striking, biologically fascinating, and manageable in a home setting, the crested gecko remains one of the most rewarding choices available.
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
