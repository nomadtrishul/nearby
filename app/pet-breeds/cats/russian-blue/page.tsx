import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Russian Blue Cat Breed Guide',
  description: 'Complete guide to Russian Blue cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Russian Blue', 'Russian Blue cat', 'Russian Blue breed', 'Russian Blue care'],
  pathname: '/pet-breeds/cats/russian-blue',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Russian Blue Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function RussianBluePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Russian Blue"
        description="Russian Blues are elegant, intelligent cats known for their distinctive blue-gray coats and green eyes. They are reserved with strangers but form strong bonds with their families."
        emoji="🐈"
        slug="russian-blue"
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
              The Russian Blue is a breed defined by refinement, restraint, and quiet intelligence. Unlike breeds that rely on dramatic size or exaggerated features, the Russian Blue commands attention through balance and subtle elegance. Its appearance is cohesive and purposeful, with every physical trait contributing to a look that is both athletic and graceful.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Russian Blues are medium-sized cats, typically weighing between seven and twelve pounds. Their bodies are long and muscular without appearing bulky. Fine bone structure combined with dense muscle gives them a firm, springy feel when lifted. Movement is smooth and controlled, reflecting excellent coordination and body awareness.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head forms a modified wedge with a straight nose, strong chin, and prominent whisker pads that give the face a gentle, smiling expression. Large ears are set wide apart and slightly flared, enhancing the breed’s alert appearance. The eyes are one of the Russian Blue’s most striking features. Vivid green and almond-shaped, they provide sharp contrast against the cool-toned coat and often deepen in color as the cat matures.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The coat is unique among domestic cats. Short, dense, and plush, it stands out from the body rather than lying flat, creating a soft, velvety texture. Each hair is tipped with silver, giving the coat its characteristic shimmering blue-gray appearance. This double coat provides insulation while remaining low maintenance compared to longer-haired breeds.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Russian Blues mature steadily and maintain their elegant appearance well into adulthood. With proper care, they often live fifteen to twenty years, placing them among the longer-lived cat breeds. Their longevity is supported by strong genetics and a generally resilient constitution.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a Russian Blue is largely about respecting their need for calm, structure, and mental engagement. Grooming demands are minimal. Their dense coat sheds lightly and benefits from occasional brushing, primarily to remove loose hair and maintain coat luster. Many owners find that a weekly brushing session is sufficient.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Soft grooming brushes, grooming gloves */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Physical activity requirements are moderate. Russian Blues enjoy play but are not hyperactive or destructive. They respond best to interactive toys that stimulate problem-solving rather than chaotic motion. Puzzle feeders, wand toys, and games that encourage stalking behaviors align well with their natural instincts.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Puzzle toys, interactive wand toys */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mental stimulation is essential for this breed. Russian Blues are intelligent and observant, quickly learning routines and anticipating daily events. Without adequate engagement, they may become withdrawn rather than disruptive, making it important to proactively offer enrichment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition should support lean muscle mass and long-term metabolic health. Russian Blues are known for having healthy appetites and may overeat if food is freely available. Structured feeding schedules and portion control are important to prevent gradual weight gain.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, automatic feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Environment plays a significant role in their wellbeing. Russian Blues prefer quiet, predictable homes. They adapt well to apartment living and smaller spaces as long as their environment remains stable and enriched. Sudden changes, loud noises, or frequent visitors may cause temporary withdrawal until they feel secure again.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Russian Blue personality is subtle, deeply loyal, and emotionally discerning. These cats are not immediately outgoing with strangers, often choosing to observe quietly from a distance. This reserved nature should not be mistaken for aloofness. Once trust is established, Russian Blues form strong, enduring bonds with their families.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              They are typically quiet cats, rarely vocalizing without reason. When they do communicate, it is usually soft and deliberate. Russian Blues rely more on body language, eye contact, and proximity than on vocal demands to express affection or needs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With their chosen people, Russian Blues are affectionate and attentive. They often follow family members discreetly, sit nearby during work or relaxation, and seek gentle interaction rather than constant handling. This makes them ideal companions for individuals who appreciate presence without intrusion.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Playfulness remains present throughout adulthood, though it is refined rather than exuberant. Russian Blues enjoy games that challenge their intelligence and coordination. They are known to excel at learning patterns and may invent their own routines around favored toys or activities.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Enrichment toys, treat-dispensing puzzles */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Russian Blues generally do well with respectful children and calm pets when introductions are gradual. They prefer stable social dynamics and may retreat if overwhelmed, but they are not aggressive or confrontational. Their emotional sensitivity makes them excellent companions in low-stress households.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Russian Blues are widely regarded as a healthy breed with relatively few inherited conditions. Their natural development and balanced body structure contribute to overall resilience. That said, responsible care and preventive veterinary oversight remain essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Obesity is the most common health concern associated with the breed. Due to their calm demeanor and efficient metabolism, excess weight can accumulate gradually if portion control is neglected. Maintaining a healthy weight supports joint health, cardiovascular function, and longevity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental health should be monitored through regular veterinary checkups and at-home care. As with many breeds, dental disease can develop silently and affect overall health if left untreated.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Dental treats, pet insurance */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Stress-related issues may arise in chaotic environments. Russian Blues are sensitive to prolonged stress, which can manifest as reduced appetite or withdrawal. Providing a calm home and predictable routine is a key component of preventive health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With regular wellness exams, appropriate nutrition, and a stable environment, Russian Blues often enjoy long, healthy lives marked by consistent energy levels and emotional stability.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Russian Blue is a breed for owners who value subtlety, loyalty, and quiet companionship. It does not demand attention or dominate space, but instead offers a steady, intelligent presence that deepens over time. For those willing to respect its reserved nature and provide a calm, enriching home, the Russian Blue delivers one of the most refined and enduring feline relationships available.
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
