import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Guinea Pig Care Guide',
  description: 'Complete guide to keeping guinea pigs as pets. Learn about guinea pig care, housing, diet, and health considerations.',
  keywords: ['guinea pig', 'guinea pig care', 'cavy', 'guinea pig housing', 'guinea pig diet'],
  pathname: '/pet-breeds/small-mammals/guinea-pig',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Guinea Pig Care Guide',
    type: 'image/png',
  }],
});

export default function GuineaPigPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Guinea Pig"
        description="Guinea pigs (also called cavies) are social, gentle pets known for their friendly personalities and distinctive vocalizations. They make excellent pets for families and are relatively easy to care for."
        emoji="🐹"
        slug="guinea-pig"
        category="small-mammals"
        categoryName="Small Mammals"
        categoryHref="/pet-breeds/small-mammals"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Guinea pigs, scientifically known as cavies, are one of the most well-suited small mammals for companion life. Domesticated for centuries, they are markedly different from hamsters, mice, or gerbils in both temperament and care needs. Guinea pigs are gentle, expressive, and deeply social animals that thrive on routine, companionship, and human interaction.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult guinea pigs typically weigh between one and three pounds and have a sturdy, rounded body structure. Unlike many small mammals, they lack the ability to jump or climb effectively, which makes them safer to handle for children but also means their environment must be designed horizontally rather than vertically. Their movement is deliberate rather than frantic, and they rely more on awareness and vocal communication than speed or agility.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the most endearing traits of guinea pigs is their vocal nature. They communicate through a range of sounds including wheeks, purrs, chirps, and chatters. These vocalizations are not random; they are context-specific expressions of excitement, comfort, warning, or anticipation, especially around feeding time. Over time, attentive owners learn to interpret these sounds as a form of communication rather than simple noise.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 1-3 pounds</li>
              <li>Lifespan: 5-7 years</li>
              <li>Temperament: Social, gentle, friendly, vocal</li>
              <li>Activity Level: Moderate (diurnal - active during the day)</li>
              <li>Grooming: Low to moderate (regular brushing for long-haired breeds)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Guinea pigs are diurnal, meaning they are active during daylight hours. This aligns naturally with human schedules and makes them ideal pets for households that want interaction throughout the day. While they enjoy periods of rest, they do not enter deep torpor like hamsters, remaining alert and responsive for much of the day.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With an average lifespan of five to seven years, guinea pigs represent a moderate long-term commitment. Their predictable behavior, low aggression, and consistent care needs make them especially suitable for families willing to invest time in daily maintenance and social interaction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Housing Requirements</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Housing is one of the most critical factors in guinea pig health and longevity. Despite their small size, guinea pigs require significantly more space than many new owners expect. A cramped enclosure restricts movement, increases stress, and contributes directly to obesity and joint problems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The recommended minimum enclosure size is seven and a half square feet for a single guinea pig, with additional space required for pairs or groups. Larger enclosures dramatically improve quality of life by allowing natural behaviors such as walking, exploring, and social interaction. Many experienced owners opt for modular or custom-built habitats rather than traditional pet store cages.
            </p>

            {/* Affiliate link can be added here for large guinea pig cages or modular habitats */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bedding should be absorbent, dust-free, and safe for prolonged contact. Paper-based bedding, fleece liners, or aspen shavings are commonly used. Cedar and pine should be avoided due to their aromatic oils, which can irritate the respiratory system. Spot cleaning should be done daily, with full enclosure cleaning performed regularly to maintain hygiene.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Guinea pigs benefit from daily supervised exercise outside the enclosure. A secure play area allows them to stretch, explore, and interact with their environment. Hiding houses, tunnels, and chew items help reduce stress and provide mental stimulation within both the enclosure and play areas.
            </p>

            {/* Affiliate link can be added here for guinea pig bedding, hideouts, and enrichment accessories */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Social housing is not optional for guinea pigs. They are herd animals by nature and should always be kept in pairs or groups, ideally of the same sex or a neutered male with females. Solitary housing often leads to depression, lethargy, and behavioral changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Diet is the single most important aspect of guinea pig care, and it is also the area where mistakes most commonly occur. Guinea pigs have very specific nutritional requirements that differ significantly from other small mammals, particularly their absolute dependence on dietary vitamin C.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlimited access to high-quality grass hay is essential. Timothy hay or orchard grass supports proper digestion, promotes dental wear, and should make up the majority of the diet. Hay should always be fresh, dry, and free of mold or dust.
            </p>

            {/* Affiliate link can be added here for premium timothy hay and hay racks */}

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In addition to hay, guinea pigs require a measured portion of fortified guinea pig pellets daily. These pellets are specifically formulated to include stabilized vitamin C, which guinea pigs cannot synthesize on their own. Pellets designed for rabbits or other rodents are not appropriate substitutes.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh vegetables should be offered every day, with an emphasis on vitamin C-rich options such as bell peppers, leafy greens, and small amounts of broccoli. Fruits should be considered occasional treats due to their sugar content. Clean, fresh water must be available at all times, preferably in a spill-resistant bottle.
            </p>

            {/* Affiliate link can be added here for vitamin C supplements or feeding accessories */}

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Guinea pigs are generally robust when cared for properly, but they are vulnerable to several preventable health conditions. Vitamin C deficiency, commonly known as scurvy, is one of the most serious risks and can develop rapidly if dietary intake is inadequate. Symptoms include lethargy, joint pain, weight loss, and poor coat condition.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental disease is another frequent issue. Guinea pig teeth grow continuously throughout life and must be worn down through proper diet and chewing activity. Overgrown teeth can interfere with eating and lead to secondary infections if left untreated.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory infections are often linked to poor ventilation, dusty bedding, or temperature fluctuations. Guinea pigs are sensitive to drafts and should be kept in a stable environment away from extreme heat or cold. Early signs of illness include changes in appetite, breathing sounds, and reduced activity.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular veterinary care from a professional experienced with exotic or small mammals is essential. Guinea pigs may not require frequent visits when healthy, but prompt attention to symptoms greatly improves outcomes. Clean housing, proper nutrition, and daily observation remain the most effective preventive measures.
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
