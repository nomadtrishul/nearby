import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Canaries as Pets Guide',
  description: 'Complete guide to keeping canaries as pets. Learn about canary care, housing, diet, and health considerations.',
  keywords: ['canaries', 'canary care', 'canary pets', 'canary guide', 'canary diet', 'canary health'],
  pathname: '/pet-breeds/birds/canaries',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Canaries as Pets Guide',
    type: 'image/png',
  }],
});

export default function CanariesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Canaries"
        description="Canaries are popular pet birds known for their beautiful singing and vibrant colors. They are relatively low-maintenance birds that make excellent pets for beginners."
        emoji="🦜"
        slug="canaries"
        category="birds"
        categoryName="Birds"
        categoryHref="/pet-breeds/birds"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Canaries are among the most historically cherished companion birds in the world, prized not for tricks or talking, but for beauty, song, and quiet presence. Originating from the Canary Islands, Madeira, and the Azores, these birds were refined over centuries through selective breeding, resulting in a wide range of colors, body types, and vocal styles. What unites all canaries is their calm disposition and suitability for indoor life.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most canaries fall within the four to eight inch range, depending on the specific variety. Despite their small stature, they are active birds with a strong instinct for flight. Their movement is graceful and deliberate, more focused on short, frequent flights than climbing or acrobatics. This makes them visually engaging without being chaotic, a quality many owners find deeply soothing.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With proper care, canaries commonly live ten to fifteen years, and some exceed this range when kept in optimal conditions. Longevity in canaries is closely tied to stability. They thrive on routine, predictable environments, and gentle handling. Unlike parrots, they are not demanding of constant interaction, but they are highly sensitive to environmental stressors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperamentally, canaries are gentle, alert, and observant. Male canaries are especially known for their singing, producing complex and melodic songs that can fill a room without becoming overwhelming. Females typically do not sing but are equally active and engaging to watch. Canaries are best appreciated as birds you live alongside rather than birds you train or handle extensively.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a canary begins with respecting its nature. These birds are independent by design. They do not crave physical handling, and excessive interaction can actually cause stress rather than bonding. Successful canary care focuses on providing an environment where the bird feels safe, stimulated, and physically healthy without being overwhelmed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A balanced diet is foundational. While traditional seed mixes are commonly sold for canaries, they should not be relied upon as the sole food source. Seeds are calorie-dense and low in key nutrients. High-quality pellets formulated specifically for canaries should form the dietary base, supplemented with fresh vegetables such as kale, spinach, broccoli, carrots, and occasional fruit. This variety supports immune health, feather quality, and long-term vitality.
            </p>
            {/* Affiliate link opportunity: Premium canary pellet food */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh water must be available at all times and replaced daily. Food and water containers should be cleaned frequently to prevent bacterial growth. Canaries are sensitive to poor hygiene, and even minor lapses can contribute to illness over time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grooming needs are minimal but not nonexistent. Nails should be monitored and trimmed as needed to prevent overgrowth and mobility issues. Bathing is important for feather health, and most canaries enjoy shallow water baths offered several times per week. Bathing supports preening behavior and helps maintain healthy plumage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Housing plays a decisive role in a canary’s quality of life. Unlike climbing birds, canaries rely heavily on horizontal flight. For this reason, cage width is far more important than height. A wide cage allows natural movement patterns and prevents muscle atrophy, even when out-of-cage time is limited.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Inside the cage, simplicity and functionality matter more than excess accessories. Perches of varying diameters help maintain foot health, but overcrowding the cage should be avoided. Canaries prefer clear flight paths and predictable layouts. Food and water dishes should be easily accessible without forcing the bird to hop excessively.
            </p>
            {/* Affiliate link opportunity: Canary cages with horizontal space */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While canaries are not toy-dependent in the way parrots are, light enrichment is still beneficial. Swings, mirrors used sparingly, and simple hanging toys can provide visual interest. Overstimulation should be avoided. A calm environment with natural light cycles supports healthy singing patterns and stable behavior.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cage placement within the home matters. Canaries should be kept in a well-lit room that receives indirect natural light, away from drafts, air conditioners, kitchens, and sudden temperature changes. They are highly sensitive to airborne toxins, including cooking fumes and aerosol sprays, which must never be used near birds.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Canaries are generally hardy birds, but their small size means health issues can progress quickly if unnoticed. Like most prey animals, they instinctively conceal signs of weakness. This makes routine observation an essential part of responsible ownership. Changes in posture, appetite, droppings, or vocal behavior should never be ignored.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory issues are among the most common health concerns, often linked to poor air quality or temperature instability. Mites and external parasites can occur, particularly in environments with inadequate sanitation. Nutritional deficiencies, especially vitamin A deficiency, are frequently seen in birds fed seed-heavy diets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Preventive care is the most effective approach. Regular cage cleaning, a nutritionally complete diet, and stable housing conditions significantly reduce health risks. Annual wellness exams with an avian veterinarian are strongly recommended, even for birds that appear healthy. These visits establish baseline health markers and allow early detection of subtle issues.
            </p>
            {/* Affiliate link opportunity: Avian-safe cleaning supplies */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Behavioral cues often precede visible illness. A canary that stops singing, becomes unusually quiet, fluffs its feathers for extended periods, or shows reduced activity is signaling distress. Prompt veterinary attention can be life-saving. Delaying care while waiting for certainty often results in missed intervention windows.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When cared for properly, canaries offer a unique form of companionship. Their song becomes part of the home’s rhythm, marking mornings, responding to light, and reflecting seasonal changes. They do not demand attention, yet they enrich daily life through presence and sound. For individuals seeking a peaceful, low-maintenance bird with deep historical roots and enduring charm, the canary remains an exceptional choice.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Bird Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
