import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Abyssinian Cat Breed Guide',
  description: 'Complete guide to Abyssinian cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Abyssinian', 'Abyssinian cat', 'Abyssinian breed', 'Abyssinian care'],
  pathname: '/pet-breeds/cats/abyssinian',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Abyssinian Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function AbyssinianPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Abyssinian"
        description="Abyssinians are active, intelligent cats known for their distinctive ticked coat pattern and playful personalities. They are curious, energetic, and form strong bonds with their owners."
        emoji="🐈"
        slug="abyssinian"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Characteristics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Abyssinian is widely regarded as one of the most physically expressive and visually striking domestic cat breeds. Medium in size and athletic in build, this breed is defined by balance rather than bulk. Adult Abyssinians typically weigh between six and ten pounds, with lean muscle tone, long legs, and a graceful posture that gives the impression of constant readiness for motion. Their bodies are compact yet powerful, designed for speed, agility, and climbing rather than lounging.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the breed’s most recognizable features is its short, ticked coat. Each individual hair is banded with multiple colors, creating a warm, glowing appearance that shifts subtly under different lighting conditions. This ticking pattern is not merely aesthetic; it is a hallmark of the breed’s genetic heritage and contributes to the Abyssinian’s wild, fox-like look. Coat colors range from ruddy and red to blue and fawn, all maintaining that signature depth and richness.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is gently wedge-shaped, framed by large, alert ears that tilt slightly forward, reinforcing the breed’s perpetually curious expression. Almond-shaped eyes, typically gold, green, or hazel, convey intelligence and engagement. Combined, these physical traits give the Abyssinian a distinctly animated presence, even when at rest.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              From a life expectancy standpoint, Abyssinians are considered a relatively long-lived breed, often reaching nine to fifteen years when well cared for. With responsible breeding, proper nutrition, and attentive veterinary care, many live well into their senior years while maintaining impressive vitality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for an Abyssinian requires an understanding that this is not a passive or low-engagement cat. This breed thrives on stimulation, interaction, and environmental complexity. A home that does not offer outlets for physical and mental activity will quickly feel restrictive to an Abyssinian, often leading to boredom-driven behaviors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Daily interactive play is not optional. Abyssinians benefit most from structured play sessions that mimic hunting behaviors, such as chasing, leaping, and problem-solving. Wand toys, interactive puzzles, and climbing systems allow them to expend energy constructively. Vertical space is particularly important. Cat trees, wall-mounted shelves, and window perches help satisfy their instinct to observe and explore from elevated positions.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive toys, puzzle feeders, cat trees */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Despite their high energy, grooming needs are refreshingly simple. Their short coat sheds minimally and typically requires only occasional brushing to remove loose hair and distribute natural oils. This makes the Abyssinian a practical choice for owners who prefer a clean, low-maintenance grooming routine without sacrificing aesthetic appeal.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition plays a critical role in maintaining the breed’s lean muscle mass and energy levels. A high-quality, protein-rich diet supports their active metabolism and overall health. Portion control is important, as even active cats can gain weight if overfed. Fresh water should always be available, and many Abyssinians show interest in running water sources, making pet fountains a useful addition.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, water fountains */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Socially, Abyssinians do not do well in isolation. They form strong attachments to their human companions and often prefer households where someone is present for much of the day or where another compatible pet is available. They are not independent loners; they are engaged participants in daily life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The personality of the Abyssinian is often described as “busy,” but that word only scratches the surface. This breed is intelligent, inquisitive, and deeply interactive. Abyssinians want to be involved in everything their owners do, whether that means supervising work, inspecting new objects, or observing household routines from the nearest high vantage point.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike breeds that seek constant physical affection, Abyssinians express their bond through proximity and participation. They may not always be lap cats, but they are almost always nearby. Many owners describe the experience as sharing their home with a clever, observant companion who is always paying attention.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Their intelligence makes them highly trainable. Abyssinians can learn commands, routines, and even tricks when positive reinforcement is used. Clicker training, food puzzles, and interactive games help channel their mental sharpness productively. Without these outlets, their curiosity can turn into mischief.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Training tools, clickers, enrichment games */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This breed retains a playful, kitten-like demeanor well into adulthood. Their enthusiasm for exploration and play rarely diminishes with age, making them a consistently engaging presence over the years. For households that enjoy an active, responsive pet, the Abyssinian is exceptionally rewarding.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While generally healthy, Abyssinians are predisposed to certain hereditary conditions that prospective owners should understand. Progressive retinal atrophy is one such condition, affecting vision over time. Responsible breeders screen for this and other genetic issues to reduce risk in breeding lines.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Renal amyloidosis is another concern, involving abnormal protein deposits in the kidneys. Early detection through routine veterinary monitoring can help manage progression. Patellar luxation, though less common, may also occur and should be evaluated during regular physical exams.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Preventive care is the cornerstone of long-term health for this breed. Annual wellness visits, dental care, and age-appropriate screenings allow issues to be identified early, when intervention is most effective. Maintaining a healthy weight and active lifestyle further reduces strain on joints and internal systems.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, supplements, dental care products */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When sourced from ethical breeders and supported with informed care, Abyssinians often enjoy long, robust lives marked by sustained vitality and engagement. Health outcomes are strongly influenced by early-life nutrition, genetics, and ongoing environmental enrichment.
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/pet-breeds/cats" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Cat Breeds
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
