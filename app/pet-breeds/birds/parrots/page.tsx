import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Parrots as Pets Guide',
  description: 'Complete guide to keeping parrots as pets. Learn about parrot species, characteristics, care requirements, diet, and health considerations.',
  keywords: ['parrots', 'parrot care', 'parrot species', 'parrot pets', 'parrot guide', 'parrot diet', 'parrot health'],
  pathname: '/pet-breeds/birds/parrots',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Parrots as Pets Guide',
    type: 'image/png',
  }],
});

export default function ParrotsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Parrots"
        description="Intelligent, social birds known for their ability to mimic speech and their vibrant colors. They require significant commitment, proper care, and mental stimulation to thrive as pets."
        emoji="🦜"
        slug="parrots"
        category="birds"
        categoryName="Birds"
        categoryHref="/pet-breeds/birds"
      />

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Parrots are not casual pets. They are among the most intelligent and emotionally complex animals commonly kept in homes, and their needs reflect that depth. Across hundreds of species, parrots share a core set of traits that define what life with one truly looks like. These are birds shaped by evolution to live in social groups, navigate complex environments, and form long-term bonds that rival those of many mammals.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Size varies dramatically, from small-bodied lovebirds that can fit comfortably in one hand to large macaws with wingspans exceeding four feet. Lifespan follows a similar spectrum. Smaller parrots may live fifteen to twenty years, while larger species routinely live fifty years or more. Some individuals outlive their original owners. This is not an exaggeration but a documented reality that demands serious consideration before bringing a parrot home.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Temperamentally, parrots are alert, curious, and intensely social. They are wired to interact. A parrot does not simply exist in a space; it participates in it. Many parrots observe routines, recognize individuals, and react emotionally to changes in their environment. Their vocalizations are not random noise. They are communication attempts shaped by context, emotion, and learned association.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Activity levels are high across nearly all species. Parrots require daily mental engagement, physical movement, and social interaction to remain psychologically healthy. When these needs are unmet, behavioral problems often emerge. Understanding these characteristics is the foundation of responsible parrot ownership.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Popular Parrot Species</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  While all parrots share core traits, individual species vary significantly in care demands, temperament, and suitability for different households. African grey parrots are widely recognized for exceptional cognitive ability and speech clarity. They are analytical, sensitive birds that bond deeply but can be prone to anxiety if routines are inconsistent.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Amazon parrots are known for bold personalities and powerful voices. They are confident, social birds that thrive with experienced handlers who can provide structure and consistent interaction. Macaws, the giants of the parrot world, combine intelligence with sheer physical presence. They require extensive space, enrichment, and long-term commitment that goes far beyond novelty ownership.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Cockatoos are emotionally intense and deeply affectionate, often forming strong attachments to one person. This closeness can be rewarding but also challenging, as cockatoos are highly sensitive to separation and environmental change. Conures and lovebirds, smaller in size, bring high energy and strong social needs in more compact forms, making them popular but still demanding companions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Selecting a parrot species should never be based on appearance alone. Matching temperament, lifespan, noise level, and emotional needs to your lifestyle is essential for long-term success.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Proper parrot care is holistic. Housing, nutrition, mental stimulation, and social interaction are inseparable components of health. A spacious cage is necessary, but it is not sufficient. Parrots require daily time outside the cage to stretch, climb, and explore in a controlled, bird-safe environment.
                </p>
                {/* Affiliate link opportunity: Large parrot cages */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Diet is a critical pillar of longevity. High-quality formulated pellets should form the nutritional base, supplemented by a wide variety of fresh vegetables, leafy greens, and limited fruit. Seeds are often overused and should be treated as occasional enrichment rather than a staple. Poor diet is one of the most common contributors to chronic illness in parrots.
                </p>
                {/* Affiliate link opportunity: Premium parrot pellet food */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Mental stimulation is not optional. Parrots possess problem-solving abilities comparable to young children. Toys that encourage foraging, manipulation, and exploration are essential to prevent boredom. Training sessions, even informal ones, provide structure and strengthen the human–bird bond.
                </p>
                {/* Affiliate link opportunity: Foraging toys and enrichment kits */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Social interaction must be consistent and meaningful. Parrots kept in isolation often develop behaviors such as screaming, feather destruction, or aggression. These behaviors are not personality flaws. They are signals of unmet needs. Responsible care means responding to those signals rather than suppressing them.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Parrots are adept at masking illness, an instinct carried over from life in the wild. Subtle changes in posture, appetite, vocalization, or feather condition may be the only early indicators of a problem. Waiting for obvious symptoms often means waiting too long.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Respiratory sensitivity is a major concern. Parrots must never be exposed to fumes from non-stick cookware, smoke, aerosols, or scented products. Environmental toxins can cause sudden and fatal reactions. Maintaining a bird-safe home is a continuous responsibility.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Feather plucking and self-mutilation are complex behaviors often rooted in stress, loneliness, or nutritional imbalance. Addressing these issues requires environmental changes, not punishment. Avian veterinarians and behavior specialists play a crucial role in long-term management.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Regular wellness exams with an avian veterinarian are essential, regardless of apparent health. Preventive care extends lifespan and quality of life dramatically. Parrots that receive consistent veterinary oversight often live decades longer than those that do not.
                </p>
                {/* Affiliate link opportunity: Avian health supplements and grooming tools */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Living with a parrot is a relationship, not an accessory. These birds notice absence, respond to emotion, and remember experiences long after they occur. When their needs are met, parrots become extraordinary companions, offering intelligence, presence, and connection that few other pets can match. When their needs are ignored, the cost is borne by the bird. Understanding this responsibility is the most important step in deciding whether a parrot truly belongs in your life.
                </p>
              </article>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  ← Back to Bird Breeds
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="birds" currentBreed="/pet-breeds/birds/parrots" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
