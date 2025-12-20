import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Gerbil Care Guide',
  description: 'Complete guide to keeping gerbils as pets. Learn about gerbil care, housing, diet, and health considerations.',
  keywords: ['gerbil', 'gerbil care', 'pet gerbil', 'gerbil housing', 'gerbil diet'],
  pathname: '/pet-breeds/small-mammals/gerbil',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Gerbil Care Guide',
    type: 'image/png',
  }],
});

export default function GerbilPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Gerbil"
        description="Gerbils are small, active, and social rodents known for their curious personalities and low-maintenance care. They are excellent pets for families and make entertaining companions."
        emoji="🐹"
        slug="gerbil"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gerbils are small desert-adapted rodents that have become popular companion animals due to their engaging behavior, relatively simple care needs, and social nature. Unlike some small mammals that are primarily nocturnal, gerbils are diurnal, meaning they are active during the daytime hours. This trait alone makes them especially appealing to families, students, and first-time pet owners who want to observe natural behavior without disrupting their own sleep schedules.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Physically, gerbils are compact yet athletic. Their long hind legs and strong tails are adaptations for life in arid environments, allowing them to move quickly and maintain balance while running or jumping. While their body length averages only a few inches, their energy level is disproportionately high. Gerbils spend much of their waking time digging, chewing, exploring, and interacting with their environment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperamentally, gerbils are curious, alert, and social. They are generally less prone to biting than hamsters and often tolerate gentle handling once properly socialized. That said, gerbils are prey animals by nature. Sudden movements, loud noises, or improper handling can easily startle them. Building trust requires patience, consistency, and respect for their natural instincts.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: Small (2-4 inches body, 3-4 inches tail)</li>
              <li>Lifespan: 3-4 years</li>
              <li>Temperament: Social, active, curious, friendly, can be skittish</li>
              <li>Activity Level: High (diurnal - active during the day)</li>
              <li>Grooming: Minimal (self-grooming, sand baths)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gerbils are highly social animals and should never be kept alone unless medically necessary. In the wild, they live in family groups and rely on social bonds for security and stimulation. When housed appropriately in pairs or small same-sex groups, gerbils display complex social behaviors such as grooming, cooperative digging, and shared nesting.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Their average lifespan of three to four years reflects both their small size and fast metabolism. While this is shorter than some companion animals, it also means that their care requirements are manageable for many households when approached with proper preparation and education.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper housing plays a decisive role in gerbil health and behavior. More than most small mammals, gerbils are defined by their need to dig and burrow. An enclosure that fails to support this natural behavior will inevitably lead to stress, boredom, and destructive habits.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A secure enclosure with solid walls, such as a glass aquarium or purpose-built gerbil habitat, is strongly recommended. For a pair of gerbils, a minimum of ten gallons is required, though larger enclosures provide significant welfare benefits. Deep bedding is essential. Gerbils instinctively tunnel and construct underground nests, and shallow bedding deprives them of one of their most important behavioral outlets.
            </p>

            {/* Affiliate link can be added here for gerbil tanks or habitat enclosures */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bedding should be safe, dust-free, and capable of holding tunnels. Paper-based substrates, aspen shavings, or mixed bedding systems are commonly used. Cedar and pine should always be avoided due to the respiratory irritation they cause. Regular spot cleaning helps maintain hygiene without destroying established tunnel systems, which can be stressful for gerbils if removed too frequently.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enrichment within the enclosure is equally important. Chew toys made from untreated wood, cardboard tunnels, and safe climbing structures help prevent boredom and dental overgrowth. A solid-surface exercise wheel is recommended, as wire wheels can cause injury to feet and tails.
            </p>

            {/* Affiliate link can be added here for gerbil wheels, chew toys, and enrichment items */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gerbils maintain their coats through sand bathing rather than water. A shallow dish filled with chinchilla-grade sand allows them to groom naturally. This should be offered several times per week and removed when not in use to keep the enclosure clean.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Placement of the enclosure matters. Gerbils thrive in quiet, stable environments away from direct sunlight, drafts, and temperature extremes. Consistent conditions help reduce stress and support long-term health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gerbils are omnivores with dietary needs shaped by their desert origins. In the wild, they consume a varied diet of seeds, grains, roots, and occasional insects. A well-balanced captive diet must replicate this diversity while avoiding excess fat and sugar.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A high-quality commercial gerbil food serves as the nutritional foundation. These formulations are designed to provide appropriate protein, fiber, vitamins, and minerals. Unlike seed-only mixes, balanced pellets prevent selective feeding, which can lead to nutritional deficiencies over time.
            </p>

            {/* Affiliate link can be added here for premium gerbil food mixes */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh vegetables can be offered in small amounts several times per week. Leafy greens, carrots, and squash are commonly accepted. Fruits should be given sparingly due to their sugar content. Whole grains, seeds, and nuts may be offered occasionally as enrichment rather than dietary staples.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh water must always be available, preferably in a drip bottle to keep it clean and accessible. Any dietary changes should be introduced gradually to avoid digestive upset. Observing eating habits and body condition helps owners identify problems early.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gerbils are generally hardy animals when kept in appropriate conditions, but they are not immune to health issues. Respiratory infections are among the most common problems and are often linked to dusty bedding, poor ventilation, or temperature fluctuations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tumors, particularly in older gerbils, are another concern. While not always preventable, early detection improves quality of life and treatment outcomes. Regular observation of behavior, weight, and mobility allows owners to notice subtle changes before they become severe.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental health depends largely on diet and access to appropriate chew materials. Overgrown teeth can lead to pain, weight loss, and infection. Providing safe wooden items and maintaining a balanced diet significantly reduces this risk.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Veterinary care should be provided by a professional experienced with exotic or small mammals. While gerbils may not require frequent vet visits, having access to qualified care is essential in emergencies. Preventive care, cleanliness, and environmental stability remain the most effective tools for maintaining gerbil health.
            </p>

            {/* Affiliate link can be added here for health supplements, grooming sand, or cleaning products */}

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
