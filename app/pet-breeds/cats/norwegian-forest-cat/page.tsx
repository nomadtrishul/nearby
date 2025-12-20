import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Norwegian Forest Cat Breed Guide',
  description: 'Complete guide to Norwegian Forest Cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Norwegian Forest Cat', 'Wegie', 'Norwegian Forest Cat breed', 'Norwegian Forest Cat care'],
  pathname: '/pet-breeds/cats/norwegian-forest-cat',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Norwegian Forest Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function NorwegianForestCatPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero 
        breedName="Norwegian Forest Cat"
        description="Norwegian Forest Cats, or 'Wegies,' are large, sturdy cats with thick, water-resistant coats. They are gentle, friendly, and known for their climbing abilities and love of heights."
        emoji="🐈"
        slug="norwegian-forest-cat"
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
              The Norwegian Forest Cat is a breed shaped by centuries of survival in harsh northern climates. Originating in Scandinavia, these cats developed naturally rather than through intensive selective breeding. As a result, the Norwegian Forest Cat is a study in functional beauty, combining size, strength, and adaptability with a calm, balanced temperament. Everything about their appearance serves a purpose rooted in endurance and self-sufficiency.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These are large, powerfully built cats, typically weighing between eight and sixteen pounds, with males often noticeably larger than females. Their bodies are long and well-muscled, supported by strong legs and substantial bone structure. Despite their size, Norwegian Forest Cats move with quiet confidence and controlled agility rather than bulk or heaviness.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the breed’s most defining features is its thick, double-layered coat. The outer coat is long, glossy, and water-resistant, designed to repel rain and snow, while the dense undercoat provides insulation against cold temperatures. A pronounced ruff around the neck, bushy tail, and feathering on the legs add to the breed’s majestic appearance while serving practical protective functions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head forms an equilateral triangle when viewed from the front, with a straight nose profile and strong chin. Almond-shaped eyes convey alertness and intelligence, often appearing green, gold, or copper depending on coat color. Large ears, sometimes tipped with lynx-like tufts, sit high on the head and enhance the breed’s wild yet approachable look.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Norwegian Forest Cats mature slowly, often taking four to five years to reach full physical development. This extended growth period contributes to their longevity, with many living fourteen to sixteen years or longer when properly cared for. Their physical moderation and natural genetic diversity make them a generally resilient and healthy breed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a Norwegian Forest Cat requires an understanding of both their physical capabilities and their independent nature. Grooming is an important but manageable responsibility. While their coat appears demanding, it is surprisingly resistant to matting for much of the year. Regular brushing, two to three times per week, helps remove loose hair and keeps the coat in good condition.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Long-hair cat brushes, deshedding tools */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Seasonal shedding is significant, particularly in spring, when the dense winter undercoat is shed. During these periods, more frequent brushing is necessary to prevent tangles and reduce loose hair around the home. Grooming sessions also provide an opportunity to check skin condition and overall health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Physical activity is essential for maintaining muscle tone and joint health. Norwegian Forest Cats are exceptional climbers, a trait rooted in their history of navigating forests and rocky terrain. They benefit greatly from vertical spaces such as tall cat trees, wall-mounted shelves, and sturdy perches that allow them to climb and observe from above.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Tall cat trees, wall-mounted climbing shelves */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mental stimulation should not be overlooked. These cats are intelligent and curious, enjoying toys and activities that encourage exploration and problem-solving. Interactive play sessions strengthen the bond between cat and owner while preventing boredom-related behaviors.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Puzzle toys, interactive play sets */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition plays a vital role in supporting the breed’s large frame and steady energy levels. A high-quality, protein-rich diet helps maintain muscle mass and overall vitality. Portion control remains important, particularly for indoor cats, as excess weight can place unnecessary strain on joints and hips.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium large-breed cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Norwegian Forest Cats adapt well to a variety of living situations, from apartments to larger homes, as long as their need for vertical space and mental engagement is met. They appreciate routine but are not easily stressed by moderate changes, making them well suited to households with evolving schedules.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The temperament of the Norwegian Forest Cat is best described as calm, confident, and quietly affectionate. These cats are friendly without being demanding and social without being intrusive. They enjoy human companionship but often prefer to interact on their own terms, choosing proximity over constant physical contact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Independence is a defining trait. Norwegian Forest Cats are comfortable entertaining themselves and tolerating time alone, making them a strong choice for owners who are not home all day. Despite this independence, they form strong bonds with their families and often follow household routines closely.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cats are generally quiet, communicating through subtle body language and occasional soft vocalizations rather than frequent meowing. Their reserved communication style contributes to their reputation as composed, thoughtful companions rather than attention-seeking pets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Playfulness remains present throughout adulthood, though it is measured rather than frantic. Norwegian Forest Cats enjoy interactive play, especially games that involve climbing or stalking, but they balance activity with long periods of rest. Their play style reflects patience and strategy rather than impulsive energy.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Enrichment toys, climbing accessories */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In family environments, these cats typically do well with respectful children and other pets. Their calm confidence allows them to coexist peacefully, provided introductions are gradual and boundaries are respected. They are adaptable and emotionally steady, traits that make them excellent long-term companions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Norwegian Forest Cats are generally healthy due to their natural development and broad genetic base, but they are predisposed to certain conditions that owners should be aware of. Hip dysplasia, while less common than in some large breeds, can occur and may impact mobility if not managed properly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Glycogen storage disease type IV is a rare inherited condition associated with the breed. Responsible breeders screen for this disorder, making it critical for prospective owners to work with reputable sources. Regular veterinary monitoring supports early detection of any emerging health concerns.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Certain heart conditions, including hypertrophic cardiomyopathy, have been reported in the breed. Routine veterinary exams and age-appropriate screenings are essential for early identification and management. Maintaining a healthy weight and balanced diet further reduces cardiovascular strain.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, joint supplements */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental health should also be addressed through regular checkups and at-home care. As with many large breeds, dental issues can develop if preventive measures are neglected. Consistent oral hygiene contributes to overall systemic health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With attentive care, ethical breeding, and a supportive home environment, Norwegian Forest Cats often enjoy long, healthy lives marked by physical resilience and emotional stability.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Norwegian Forest Cat is a breed that rewards patience and respect. Its combination of natural beauty, quiet intelligence, and steady companionship makes it an ideal choice for owners seeking a cat that is both independent and deeply connected. For those willing to provide space, stimulation, and thoughtful care, the Wegie offers a uniquely balanced and enduring feline partnership.
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Cat Breeds
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
