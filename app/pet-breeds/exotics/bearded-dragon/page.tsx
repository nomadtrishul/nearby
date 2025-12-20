import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Bearded Dragon Care Guide',
  description: 'Complete guide to keeping bearded dragons as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['bearded dragon', 'bearded dragon care', 'reptile pets', 'bearded dragon habitat', 'bearded dragon diet'],
  pathname: '/pet-breeds/exotics/bearded-dragon',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Bearded Dragon Care Guide',
    type: 'image/png',
  }],
});

export default function BeardedDragonPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Bearded Dragon"
        description="Bearded dragons are popular pet reptiles known for their docile nature and distinctive 'beard' display. They are relatively easy to care for and make excellent pets for reptile enthusiasts."
        emoji="🦎"
        slug="bearded-dragon"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bearded dragons have earned their reputation as one of the most approachable and rewarding reptile pets, not by accident, but because their natural biology aligns well with life in human care. Native to the arid and semi-arid regions of Australia, these lizards evolved to tolerate a wide range of environmental conditions, which contributes to their adaptability in captivity when their core needs are met.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult bearded dragons typically reach a total length of eighteen to twenty-four inches, including the tail. This size gives them a solid, substantial presence without making them difficult to house or handle. Their bodies are broad and muscular, supported by strong limbs that allow them to climb, dig, and bask comfortably. Their triangular heads and textured scales give them a prehistoric appearance that many keepers find especially appealing.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lifespan averages between eight and twelve years, though individuals that receive optimal nutrition, lighting, and veterinary care can live longer. This places bearded dragons in a middle ground when it comes to long-term commitment. They are not short-lived novelty pets, yet they do not carry the multi-decade responsibility associated with some reptiles and birds.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperament is one of the species’ strongest assets. Bearded dragons are generally calm, tolerant, and curious. Many become comfortable with gentle handling and will sit quietly on a shoulder or arm while observing their surroundings. The iconic “beard” display, where the throat darkens and expands, is often misunderstood. While it can signal stress or dominance, it is also used during communication and does not automatically indicate aggression.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike nocturnal reptiles, bearded dragons are diurnal. They are active during daylight hours, which allows owners to observe natural behaviors such as basking, exploring, and feeding. This day-active schedule makes them especially appealing to households that want to interact with their reptile during normal waking hours rather than late at night.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A bearded dragon’s enclosure is not simply a container. It is a carefully controlled environment that must replicate key elements of the Australian outback. Many health problems commonly seen in captive bearded dragons can be traced directly to improper habitat setup rather than genetic weakness or bad luck.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult bearded dragons require a large terrarium, with most experts recommending a minimum of forty gallons and many preferring seventy-five gallons or more. Space matters because these lizards are active movers that rely on temperature gradients to regulate their body functions. Cramped enclosures restrict natural behavior and increase stress over time.
            </p>
            {/* Affiliate link opportunity: Large terrariums for bearded dragons */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Heat is a non-negotiable requirement. Bearded dragons depend on external heat sources to digest food, maintain immune function, and remain active. A basking area should be maintained between ninety-five and one hundred ten degrees Fahrenheit, while the cooler side of the enclosure should remain between seventy-five and eighty-five degrees. This gradient allows the dragon to move freely between zones and self-regulate body temperature.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              UVB lighting is equally critical and often underestimated by new keepers. Without proper UVB exposure, bearded dragons cannot metabolize calcium effectively, regardless of how much calcium is present in their diet. High-quality UVB bulbs must be replaced on a regular schedule, even if they still appear to be producing visible light.
            </p>
            {/* Affiliate link opportunity: UVB lighting systems and heat lamps */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Substrate choice should balance safety and practicality. Loose substrates that can be accidentally ingested increase the risk of impaction, particularly in younger dragons. Many experienced keepers opt for solid substrates or carefully selected textured surfaces that allow natural movement without unnecessary risk. The enclosure should include secure hiding spots, climbing structures, and a shallow water dish, even though many bearded dragons prefer to hydrate through food rather than drinking directly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bearded dragons are omnivores, and their dietary needs change significantly as they grow. Understanding this shift is essential for long-term health. Juvenile dragons grow rapidly and require a diet higher in protein to support bone and muscle development. This protein is typically provided through live insects such as crickets, dubia roaches, and appropriately sized worms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As bearded dragons mature, their nutritional balance shifts toward plant-based foods. Adult dragons should consume a diet dominated by leafy greens and vegetables, with insects offered in more limited quantities. This transition helps prevent obesity and supports organ health as metabolism slows with age.
            </p>
            {/* Affiliate link opportunity: Live feeder insects and insect enclosures */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Calcium and vitamin supplementation are not optional additions but foundational elements of proper nutrition. Calcium powder, often paired with vitamin D3 depending on UVB exposure, should be used regularly to prevent metabolic bone disease. Fresh water should always be available, and food items should be washed thoroughly to remove pesticides or contaminants.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feeding routines should be consistent and calm. Bearded dragons are observant animals that respond well to predictable schedules. Overfeeding, particularly with insects, is a common mistake that leads to excess weight and reduced lifespan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bearded dragons are generally hardy reptiles when kept under proper conditions, but they are not immune to health issues. The most serious and preventable condition seen in captivity is metabolic bone disease, which results from inadequate UVB exposure or insufficient calcium intake. Early signs may be subtle, including lethargy or changes in posture, but progression can be severe if left unaddressed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory infections can occur when temperatures are too low or humidity is poorly controlled. Impaction, a potentially life-threatening blockage of the digestive tract, is often caused by ingesting inappropriate substrate or oversized prey. Internal parasites are also possible, particularly in animals sourced from poor breeding conditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Preventive care is the most effective strategy. Maintaining proper lighting, heat, diet, and enclosure cleanliness dramatically reduces the likelihood of illness. Establishing a relationship with a veterinarian experienced in reptile medicine allows for routine health checks and prompt treatment if problems arise.
            </p>
            {/* Affiliate link opportunity: Reptile-safe supplements and enclosure cleaning supplies */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When cared for correctly, bearded dragons become more than display animals. They develop recognizable routines, respond to their environment, and often show curiosity toward their caregivers. Their calm presence and expressive behavior create a form of companionship that is quieter than traditional pets but no less meaningful. For those willing to invest in proper setup and informed care, bearded dragons offer years of steady, engaging, and deeply rewarding reptile ownership.
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
