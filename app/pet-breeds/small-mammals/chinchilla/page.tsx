import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Chinchilla Care Guide',
  description: 'Complete guide to keeping chinchillas as pets. Learn about their care, housing, diet, and health considerations.',
  keywords: ['chinchilla', 'chinchilla care', 'pet chinchilla', 'chinchilla housing', 'chinchilla diet'],
  pathname: '/pet-breeds/small-mammals/chinchilla',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Chinchilla Care Guide',
    type: 'image/png',
  }],
});

export default function ChinchillaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Chinchilla"
        description="Chinchillas are soft, gentle rodents known for their incredibly dense fur and playful personalities. They require specialized care and are best suited for experienced pet owners."
        emoji="🐹"
        slug="chinchilla"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Chinchillas are among the most distinctive small mammals kept as companion animals, largely due to their exceptionally dense fur, long lifespan, and highly specific environmental needs. Native to the cool, arid mountain regions of South America, chinchillas evolved to survive in climates very different from the average household, which explains why proper care requires careful planning rather than casual pet ownership.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult chinchillas typically weigh between one and one and a half pounds, yet their compact size is deceptive. They are powerful jumpers, capable of leaping several feet vertically, and they possess a high level of natural curiosity. Their intelligence and awareness often surprise first-time owners. While generally gentle and non-aggressive, chinchillas are not instinctively cuddly animals. They tend to be cautious, especially when young or newly introduced to a home, and trust is built gradually through consistent, calm interaction.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the defining traits of chinchillas is their longevity. With appropriate care, it is not unusual for a chinchilla to live well into its teens, and many reach twenty years of age. This long lifespan places them closer to parrots than hamsters in terms of commitment. Prospective owners should approach chinchilla care with a long-term mindset rather than viewing them as short-lived pets.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Chinchillas are naturally nocturnal or crepuscular, meaning they are most active during the evening and nighttime hours. During these periods, they display bursts of energy, including running, climbing, and jumping. This activity level is normal and healthy but can be surprising for owners who expect a quiet pet. Their playful behavior, combined with moments of alert stillness, gives them a unique personality that many experienced small mammal keepers find deeply rewarding.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper housing is the foundation of chinchilla health and wellbeing. Unlike many small mammals, chinchillas require vertical space as much as horizontal room. A single-level enclosure is inadequate for long-term care. A multi-level cage that allows jumping, climbing, and exploration is essential to prevent both physical and behavioral problems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The minimum recommended enclosure size is twenty-four inches by twenty-four inches by twenty-four inches, though larger is always better. Solid shelving is preferred over wire platforms, as prolonged exposure to wire can lead to foot injuries. Inside the enclosure, chinchillas need multiple resting ledges, hiding houses, and chew-safe accessories that support their instinct to gnaw and explore.
            </p>

            {/* Affiliate link can be added here for recommended chinchilla cages */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperature control is not optional for chinchillas. They are extremely sensitive to heat due to their dense fur, which traps warmth efficiently but releases it poorly. Ambient temperatures should consistently remain below seventy-five degrees Fahrenheit, with ideal conditions ranging between sixty and seventy degrees. High humidity further increases the risk of heat stress, making climate control one of the most critical aspects of care.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grooming for chinchillas does not involve water. Their fur is too dense to dry properly, and moisture can quickly lead to fungal infections or hypothermia. Instead, chinchillas require regular dust baths using finely milled volcanic ash specifically formulated for them. These dust baths should be offered several times per week and removed after use to prevent overexposure.
            </p>

            {/* Affiliate link can be added here for chinchilla dust bath products */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enrichment is equally important. Chinchillas thrive when given safe wooden chew toys, pumice stones, and untreated branches that allow them to wear down continuously growing teeth. A lack of appropriate chewing materials often results in dental disease, boredom, and destructive behaviors.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The chinchilla digestive system is highly specialized and unforgiving of poor dietary choices. In the wild, these animals consume a sparse, fibrous diet composed primarily of grasses and rough vegetation. Domestic diets must replicate this nutritional simplicity as closely as possible to avoid serious gastrointestinal complications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              High-quality chinchilla pellets provide a balanced nutritional base and should be offered in measured portions daily. Unlimited access to fresh hay is equally critical. Timothy hay or orchard grass supports healthy digestion, proper tooth wear, and stable gut motility. Hay should always be clean, dry, and free from mold or dust.
            </p>

            {/* Affiliate link can be added here for premium chinchilla pellets and hay */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh water must be available at all times, ideally delivered through a glass water bottle to prevent contamination. Treats, while tempting, should be approached with restraint. Small quantities of dried herbs or occasional dried fruit may be offered sparingly, but sugary or fresh produce can easily disrupt the delicate balance of the chinchilla digestive tract.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Any dietary change must be introduced gradually. Sudden shifts in food can lead to bloating, diarrhea, or life-threatening gastrointestinal stasis. Experienced owners understand that consistency is one of the most important principles of chinchilla nutrition.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Chinchillas are resilient animals when kept under appropriate conditions, but their health can deteriorate rapidly when basic requirements are not met. Heat stroke is one of the most common and dangerous threats. Even brief exposure to high temperatures can be fatal, making prevention far more effective than treatment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental disease is another major concern. Chinchilla teeth grow continuously throughout life, and improper diet or insufficient chewing opportunities can result in malocclusion. Symptoms may include drooling, weight loss, reduced appetite, and changes in behavior. Early veterinary intervention is essential for successful management.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gastrointestinal issues are closely linked to diet and stress. A stable routine, appropriate fiber intake, and a calm environment significantly reduce the risk of digestive disorders. Respiratory infections may occur in environments with excessive dust, poor ventilation, or temperature fluctuations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Routine veterinary care should be provided by a professional experienced in exotic mammals. Not all veterinarians are trained to treat chinchillas, and access to a qualified provider should be confirmed before bringing one home. Preventive care, observation, and early response to subtle changes in behavior often make the difference between a minor issue and a serious medical emergency.
            </p>

            {/* Affiliate link can be added here for health supplements or grooming accessories */}

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
