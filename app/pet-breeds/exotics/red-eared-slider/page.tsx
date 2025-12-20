import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Red-Eared Slider Care Guide',
  description: 'Complete guide to keeping red-eared slider turtles as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['red-eared slider', 'turtle pets', 'red-eared slider care', 'turtle habitat', 'turtle diet'],
  pathname: '/pet-breeds/exotics/red-eared-slider',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Red-Eared Slider Care Guide',
    type: 'image/png',
  }],
});

export default function RedEaredSliderPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Red-Eared Slider"
        description="Red-eared sliders are popular aquatic turtles known for the distinctive red stripe behind each eye. They require specialized care and large aquatic habitats, making them a long-term commitment."
        emoji="🦎"
        slug="red-eared-slider"
        category="exotics"
        categoryName="Exotic Pets"
        categoryHref="/pet-breeds/exotics"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Red-eared sliders are among the most recognizable and widely kept aquatic turtles in the world. Native to the southeastern United States, these turtles evolved in slow-moving rivers, ponds, and wetlands where swimming, basking, and foraging are central to daily survival. Their adaptability to a wide range of aquatic environments is a major reason they have become so common in captivity, but that same adaptability is often misunderstood as simplicity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult red-eared sliders typically reach seven to twelve inches in shell length, with females growing significantly larger than males. This size difference becomes critical over time, as many sliders sold as small juveniles eventually outgrow modest enclosures. Their shells are smooth and streamlined, designed for efficient swimming, while their strong limbs and webbed feet reflect a life spent primarily in water rather than on land.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lifespan is one of the most important and often underestimated aspects of red-eared slider ownership. With proper care, these turtles commonly live twenty to thirty years, and individuals living beyond forty years are well documented. This is not a pet measured in childhood memories or short-term novelty. A red-eared slider can easily span generations, making it a serious, long-term responsibility.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In terms of temperament, red-eared sliders are active, alert, and curious. They are not aggressive animals, but they are also not cuddly pets. Many sliders become accustomed to their keepers and will approach the front of the enclosure during feeding time, displaying strong food-driven behavior. Others remain cautious and prefer observation from a distance. Individual personality varies, but all sliders benefit from consistent routines and minimal stress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As diurnal reptiles, red-eared sliders are active during the day. They divide their time between swimming, basking under heat and UVB light, and resting. This active daytime behavior makes them visually engaging pets, especially in well-designed aquatic setups where natural behaviors can be observed clearly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Habitat setup is the single most demanding aspect of red-eared slider care. These turtles are fully aquatic for most of their lives and require far more space and equipment than many new keepers anticipate. A proper enclosure is not optional or adjustable. It is the foundation upon which every other aspect of health depends.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adult red-eared sliders require large aquatic habitats, typically a minimum of seventy-five to one hundred gallons for a single turtle, with additional capacity needed for each additional animal. The water must be deep enough to allow unrestricted swimming. Sliders are powerful swimmers, and inadequate water depth leads to muscle weakness and stress.
            </p>
            {/* Affiliate link opportunity: Large aquariums or stock tanks for turtles */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Equally important is access to a dry basking area. Red-eared sliders must be able to leave the water completely and dry off under a heat source. The basking platform should be stable, easy to access, and large enough to support the turtle’s full body. Basking temperatures should be maintained between ninety and ninety-five degrees Fahrenheit to support digestion, immune function, and shell health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              UVB lighting is absolutely essential and non-negotiable. Without proper UVB exposure, red-eared sliders cannot synthesize vitamin D3, which is required for calcium absorption and healthy shell development. Lack of UVB is one of the leading causes of metabolic bone disease and shell deformities in captive turtles. UVB bulbs must be replaced on a schedule, even if they continue to emit visible light.
            </p>
            {/* Affiliate link opportunity: UVB bulbs and basking heat lamps */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Water temperature should generally be maintained between seventy-five and eighty degrees Fahrenheit using a submersible aquarium heater designed for turtle use. Temperature stability is critical, as fluctuations can weaken immune response and increase susceptibility to respiratory infections.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Filtration is another area where compromises often lead to problems. Red-eared sliders produce a significant amount of waste, far more than fish of similar size. A powerful filtration system rated well above the actual water volume is necessary to maintain water quality. Even with strong filtration, regular partial water changes remain essential.
            </p>
            {/* Affiliate link opportunity: High-capacity canister filters for turtles */}

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Red-eared sliders are omnivores, but their dietary needs change dramatically with age. Juveniles grow rapidly and require higher levels of protein to support development. In captivity, this protein is typically provided through high-quality commercial turtle pellets, aquatic insects, and occasional feeder fish where legal and appropriate.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As sliders mature, their metabolism slows and their dietary balance shifts toward plant matter. Adult turtles should consume a diet dominated by leafy greens and vegetables, such as romaine lettuce, dandelion greens, collard greens, and aquatic plants. Protein remains important but should be offered in moderation to prevent obesity and organ strain.
            </p>
            {/* Affiliate link opportunity: Premium turtle pellet food */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Calcium supplementation is critical throughout all life stages. Cuttlebone, calcium blocks, or powdered supplements help support shell strength and bone health. Food should always be offered in the water, as red-eared sliders rely on water to swallow and digest properly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feeding schedules should be consistent and measured. Overfeeding is one of the most common mistakes made by turtle keepers and leads directly to obesity, shell deformities, and shortened lifespan. A well-fed turtle is not one that eats constantly, but one that maintains a healthy body condition and strong shell structure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Red-eared sliders are resilient animals when their environmental and nutritional needs are met, but they are highly vulnerable to chronic health problems when those needs are ignored. Most illnesses seen in captivity are preventable and directly linked to improper habitat setup or diet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Shell rot is a common condition caused by poor water quality, inadequate basking opportunities, or persistent dampness. Early signs include soft spots, discoloration, or foul odor. Left untreated, shell rot can become systemic and life-threatening. Maintaining clean water and proper basking conditions is the most effective prevention.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory infections often result from low water temperatures, poor basking access, or inadequate UVB exposure. Symptoms may include lethargy, wheezing, nasal discharge, or difficulty submerging. Metabolic bone disease, another serious condition, develops when calcium metabolism is disrupted due to insufficient UVB lighting or dietary imbalance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Obesity is an increasingly common issue in captive red-eared sliders. Excessive feeding, particularly of protein-rich foods, leads to fat deposits around the limbs and neck and increases strain on internal organs. A controlled diet and ample swimming space are essential for maintaining healthy body condition.
            </p>
            {/* Affiliate link opportunity: Reptile-safe water conditioners and supplements */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular veterinary care with a reptile-experienced veterinarian is strongly recommended, especially for long-term health monitoring. Early intervention often determines whether a condition can be managed or becomes chronic.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Red-eared sliders can carry Salmonella bacteria without showing symptoms. Always wash hands thoroughly after handling turtles or cleaning enclosures, and never release captive turtles into the wild, where they can cause ecological harm.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Keeping a red-eared slider is a commitment rooted in responsibility rather than convenience. These turtles are intelligent in their own way, recognizing routines and responding predictably to their environment. When provided with proper space, clean water, balanced nutrition, and consistent care, they become captivating, long-lived companions. For those willing to invest in the equipment, time, and long-term planning required, red-eared sliders offer a window into aquatic reptile life that few other pets can match.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Exotic Pets
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
