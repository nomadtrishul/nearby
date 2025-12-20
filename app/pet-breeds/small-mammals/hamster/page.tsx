import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Hamster Care Guide',
  description: 'Complete guide to keeping hamsters as pets. Learn about hamster care, housing, diet, and health considerations.',
  keywords: ['hamster', 'hamster care', 'pet hamster', 'hamster housing', 'hamster diet'],
  pathname: '/pet-breeds/small-mammals/hamster',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Hamster Care Guide',
    type: 'image/png',
  }],
});

export default function HamsterPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Hamster"
        description="Hamsters are small, nocturnal rodents that make popular pets, especially for children. They are relatively low-maintenance but require proper housing, diet, and handling."
        emoji="🐹"
        slug="hamster"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hamsters are among the most recognizable and widely kept small mammals in the world. Their compact size, expressive faces, and relatively simple care requirements have made them especially popular as first-time pets. Despite this popularity, hamsters are often misunderstood, leading to care practices that fail to meet their biological and behavioral needs.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hamsters are nocturnal by nature. They spend much of the daytime sleeping in underground burrows and become active after dusk. During their active hours, hamsters display remarkable energy, engaging in running, burrowing, foraging, and nesting behaviors. Expecting daytime interaction often leads to stress for both the animal and the owner, as waking a hamster disrupts its natural rhythm and can trigger defensive behavior.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Size varies significantly depending on species. Syrian hamsters are the largest and most commonly kept, while dwarf species such as Roborovski or Campbell’s hamsters are smaller and more delicate. Regardless of size, all hamsters share common traits: strong territorial instincts, excellent sense of smell, and cheek pouches that allow them to transport food back to their nests.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 2-7 inches (varies by species)</li>
              <li>Lifespan: 2-3 years</li>
              <li>Temperament: Can be friendly with proper handling, may be territorial</li>
              <li>Activity Level: High (nocturnal - active at night)</li>
              <li>Grooming: Minimal (self-grooming)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With patient, gentle handling, many hamsters become accustomed to human interaction. However, they are solitary animals by nature and do not seek companionship in the way guinea pigs or gerbils do. Respecting their independence is key to building trust and preventing stress-related behaviors such as biting or excessive hiding.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The average lifespan of two to three years may seem short, but during that time hamsters require consistent daily care, environmental enrichment, and attentive observation. Their fast metabolism means health issues can progress quickly if early signs are missed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper housing is one of the most important and most frequently underestimated aspects of hamster care. Many commercially marketed cages prioritize aesthetics over animal welfare, offering insufficient space and poor ventilation. A hamster’s enclosure must support its instinctive need to burrow, explore, and travel significant distances each night.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A minimum of four hundred fifty square inches of uninterrupted floor space is recommended, though larger enclosures provide substantial behavioral benefits. Horizontal space is far more important than vertical height, as hamsters are ground-dwelling animals. Glass tanks or large modular habitats with deep bedding areas are commonly favored by experienced keepers.
            </p>

            {/* Affiliate link can be added here for large hamster cages or tank-style enclosures */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bedding depth is critical. Hamsters are natural burrowers and require several inches of compactable bedding to create tunnels and nesting chambers. Paper-based substrates and aspen shavings are widely used, while cedar and pine should be avoided due to respiratory irritation.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise wheels are non-negotiable. A solid-surface wheel of appropriate size prevents spinal curvature and allows hamsters to expend their considerable nightly energy safely. Additional enrichment items such as tunnels, hideouts, and chew-safe toys reduce boredom and support mental health.
            </p>

            {/* Affiliate link can be added here for hamster wheels, bedding, and enrichment toys */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Species-specific housing rules must be followed. Syrian hamsters are strictly solitary and must be housed alone for life. Some dwarf species may tolerate same-sex pairing under ideal conditions, but cohabitation always carries risk and requires close monitoring.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Because hamsters are nocturnal, their enclosure should be placed in a quiet area during daytime hours. Excessive noise or vibration disrupts sleep cycles and contributes to chronic stress.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hamsters are omnivores with diverse dietary needs shaped by a foraging lifestyle. In the wild, they consume seeds, grains, insects, and plant matter. A balanced captive diet must reflect this variety while avoiding excess sugar and fat.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A high-quality commercial hamster food provides a reliable nutritional base. Pelleted diets help prevent selective feeding, which is common with loose seed mixes and can lead to deficiencies. Supplemental fresh vegetables such as leafy greens, carrots, and cucumber may be offered in moderation.
            </p>

            {/* Affiliate link can be added here for premium hamster food and feeding accessories */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fruits should be considered occasional treats only, particularly for dwarf species that are prone to diabetes. Clean, fresh water must always be available, typically via a drip bottle to prevent contamination.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hamsters naturally hoard food, storing it in their cheek pouches and nesting areas. This behavior is normal and should not be discouraged, though owners should periodically check food stores to prevent spoilage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hamsters are resilient when kept under proper conditions, but their small size makes them vulnerable to rapid health decline. Wet tail, a severe form of diarrhea often linked to stress, poor hygiene, or sudden dietary changes, is one of the most serious conditions and requires immediate veterinary attention.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental problems are common due to continuously growing teeth. Adequate chewing materials and proper diet help prevent overgrowth and associated complications. Tumors, particularly in older hamsters, are also relatively common and may require professional evaluation.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory infections can result from dusty bedding, poor ventilation, or temperature extremes. Early signs of illness include lethargy, reduced appetite, discharge around the eyes or nose, and changes in behavior. Prompt veterinary care greatly improves outcomes.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While routine veterinary visits may be infrequent, access to an exotic animal veterinarian is essential. Daily observation, clean housing, and stable environmental conditions remain the most effective tools for preventing illness.
            </p>

            {/* Affiliate link can be added here for health monitoring tools, cleaning supplies, or chew items */}

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
