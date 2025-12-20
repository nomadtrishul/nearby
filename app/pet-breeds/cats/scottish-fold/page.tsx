import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Scottish Fold Cat Breed Guide',
  description: 'Complete guide to Scottish Fold cats. Learn about their characteristics, unique folded ears, and care requirements.',
  keywords: ['Scottish Fold', 'Scottish Fold cat', 'Scottish Fold breed', 'Scottish Fold care'],
  pathname: '/pet-breeds/cats/scottish-fold',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Scottish Fold Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function ScottishFoldPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Scottish Fold"
        description="Scottish Folds are known for their unique folded ears and round, owl-like appearance. They are sweet-natured, calm cats that make excellent companions."
        emoji="🐈"
        slug="scottish-fold"
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
              The Scottish Fold is one of the most visually distinctive and emotionally gentle cat breeds in the modern feline world. Instantly recognizable by its forward-folded ears and round, expressive face, this breed presents an almost plush, owl-like appearance that has captured global attention. Yet beyond its physical charm, the Scottish Fold is defined by its calm temperament, adaptability, and strong affinity for human companionship.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Scottish Folds are medium-sized cats, generally weighing between six and thirteen pounds. Their bodies are compact and well-balanced, with sturdy bone structure and soft musculature. They are neither fragile nor overly athletic, instead projecting a sense of quiet solidity. Their legs are proportional, their tails medium to long, and their overall posture relaxed rather than alert or tense.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is rounded with full cheeks and a short nose, giving the face a gentle, open expression. Large, round eyes further enhance this look and can appear copper, gold, green, or blue depending on coat color. The folded ears, caused by a natural genetic mutation affecting cartilage, are the breed’s defining feature. When fully folded, the ears lie close to the head, creating the iconic rounded silhouette.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Not all Scottish Folds are born with folded ears. Kittens are born with straight ears, and the fold typically develops within the first few weeks of life. Some individuals retain straight ears permanently, known as Scottish Straights. Both folded and straight-eared cats share the same temperament and body structure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Coat types vary, with both short-haired and long-haired varieties recognized. The coat is dense and plush, giving a soft, padded feel when touched. Scottish Folds come in a wide range of colors and patterns, making appearance highly diverse while temperament remains consistent. With proper care, they typically live between eleven and fifteen years.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Scottish Folds are considered moderate-maintenance cats, but their care requires attention to specific breed-related needs. Grooming is relatively straightforward. Short-haired individuals benefit from weekly brushing to remove loose hair and maintain coat texture, while long-haired Folds may require brushing two to three times per week to prevent tangling.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Grooming brushes, deshedding tools */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ear care is an essential component of Scottish Fold ownership. The folded ear structure reduces airflow, which can increase the risk of wax buildup and infection. Regular ear inspections and gentle cleaning help maintain ear health and prevent discomfort. This should be done carefully and consistently, using products specifically designed for cats.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat ear cleaning solutions, wipes */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise requirements are modest. Scottish Folds enjoy playtime but are not hyperactive or demanding. Daily interactive play helps maintain muscle tone and prevents weight gain, but sessions can be brief and gentle. They prefer calm engagement over high-energy activity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition should support steady energy levels and joint health. Because Scottish Folds tend toward a relaxed lifestyle, portion control is important to prevent obesity. A balanced, high-quality diet supports long-term wellbeing and reduces stress on joints and cartilage.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Environmentally, Scottish Folds thrive in calm, stable households. They adapt well to apartments and family homes alike, as long as noise levels and daily routines remain predictable. They do not tolerate chaos well and may withdraw in overly stimulating environments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The personality of the Scottish Fold is gentle, affectionate, and emotionally balanced. These cats are known for their sweet-natured demeanor and easygoing attitude. They enjoy human companionship but are not demanding or intrusive, preferring to remain nearby rather than constantly seek attention.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Scottish Folds are generally quiet cats. They communicate softly and infrequently, using subtle vocalizations or body language rather than loud meowing. This makes them particularly appealing to owners who value a peaceful home environment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Affection is expressed through presence rather than persistence. Scottish Folds often choose a favorite spot near their owners, observing daily activities or settling beside them during rest. They are content to share space without constant interaction, which contributes to their reputation as excellent companions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the breed’s charming quirks is its tendency to sit upright in a relaxed, human-like posture, often referred to as the “Buddha sit.” This behavior reflects their comfort and ease rather than alertness or anxiety.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Comfortable cat beds, calming accessories */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Scottish Folds typically do well with children and other pets when introductions are handled thoughtfully. They are tolerant and adaptable, making them well suited for multi-pet households that maintain calm social dynamics.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Health management is a critical responsibility for Scottish Fold owners. The same genetic mutation that produces folded ears also affects cartilage throughout the body. This condition, known as osteochondrodysplasia, can impact joint development and mobility, particularly in cats bred irresponsibly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ethical breeding practices are essential to minimize the severity of skeletal issues. Reputable breeders avoid breeding two folded-ear cats together, reducing the risk of painful joint conditions. Even with careful breeding, ongoing monitoring of mobility and comfort is necessary.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Arthritis may develop as Scottish Folds age, particularly in the spine, tail, or limbs. Maintaining a healthy weight, providing supportive bedding, and encouraging gentle activity help preserve mobility and comfort over time.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Joint supplements, orthopedic cat beds */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ear infections are another concern due to the folded ear structure. Regular cleaning and veterinary checks help prevent chronic issues. Polycystic kidney disease has also been reported in some lines, making regular wellness exams essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Preventive veterinary care, including routine checkups, weight monitoring, and early intervention, plays a key role in maintaining quality of life. With responsible ownership and ethical breeding, many Scottish Folds live comfortable, fulfilling lives well into their senior years.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Scottish Fold is a breed that appeals to those seeking calm companionship, gentle affection, and a visually distinctive presence. While their unique ears require informed care and ethical consideration, their sweet temperament and adaptability make them deeply rewarding companions for owners prepared to prioritize wellbeing over novelty.
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
