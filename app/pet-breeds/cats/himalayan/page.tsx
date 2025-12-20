import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Himalayan Cat Breed Guide',
  description: 'Complete guide to Himalayan cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Himalayan', 'Himalayan cat', 'Himalayan breed', 'Himalayan care', 'Himalayan Persian'],
  pathname: '/pet-breeds/cats/himalayan',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Himalayan Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function HimalayanPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Himalayan"
        description="Himalayan cats are essentially long-haired Persians with Siamese coloring, known for their luxurious coats, striking blue eyes, and sweet, gentle personalities. They combine the best of both breeds."
        emoji="🐈"
        slug="himalayan"
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
              The Himalayan cat is a breed defined by elegance, contrast, and deliberate refinement. Developed through the selective crossing of Persian and Siamese cats, the Himalayan was designed to merge the long, flowing coat and gentle temperament of the Persian with the striking color-point pattern and vivid blue eyes of the Siamese. The result is a cat that appears regal and serene, yet emotionally warm and deeply companionable.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Himalayans are medium to large in size, with compact, heavily boned bodies and a broad chest. Their legs are short and sturdy, giving them a grounded, almost plush appearance. Despite their solid build, they are not clumsy cats. Their movements are deliberate and unhurried, reflecting a temperament that values comfort and stability over speed or athleticism.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is round and full, with a short nose and pronounced cheeks that create the breed’s signature “doll-like” expression. Large, round blue eyes are perhaps the Himalayan’s most captivating feature. Their color is intense and luminous, immediately drawing attention and conveying a sense of calm attentiveness. Eye color is always blue, inherited from the Siamese lineage, and varies in depth from pale ice to deep sapphire.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The coat is long, dense, and silky, forming a thick ruff around the neck and flowing evenly across the body. This luxurious coat is paired with the color-point pattern, where the face, ears, legs, tail, and sometimes paws are darker than the rest of the body. Point colors include seal, blue, chocolate, lilac, flame, cream, and various lynx and tortie variations, each adding to the breed’s visual appeal.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Himalayans mature slowly, often taking several years to reach full physical development. With attentive care, they typically live between nine and fifteen years, though many exceed this range. Their physical structure and calm disposition contribute to a steady, predictable aging process rather than abrupt changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a Himalayan cat requires a consistent and hands-on approach, particularly when it comes to grooming. Their long, dense coat is prone to matting if neglected, making daily brushing an essential part of responsible ownership. Regular grooming prevents tangles, reduces shedding, and keeps the coat clean and comfortable against the skin.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Long-hair cat brushes, detangling combs */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In addition to brushing, regular bathing plays a meaningful role in coat maintenance. Many Himalayan owners find that bathing every four to six weeks helps remove oils, prevent mat buildup, and preserve the coat’s natural softness. When introduced properly, most Himalayans tolerate bathing calmly, especially when routines are consistent.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat-safe shampoos, grooming kits */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Facial care is another critical element of daily maintenance. Due to their flat facial structure, Himalayans often experience tear overflow, which can lead to staining and irritation around the eyes. Gentle daily eye cleaning helps prevent infection and keeps the face clean and comfortable.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Eye wipes, facial cleaning pads */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise requirements for Himalayans are minimal. They are not energetic or highly playful cats and are content with short, gentle play sessions. Slow-moving toys, light interaction, and occasional engagement are sufficient to maintain joint health and prevent excessive weight gain.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Low-energy interactive toys, scratching posts */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition must be carefully managed due to the breed’s low activity level. A high-quality, protein-focused diet with controlled portions helps maintain a healthy body condition. Overfeeding can quickly lead to obesity, which places additional strain on joints, the respiratory system, and internal organs.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Himalayans are best suited for indoor living in calm, climate-controlled environments. They are sensitive to heat due to their dense coats and brachycephalic facial structure. A quiet, stable home with predictable routines allows them to thrive both physically and emotionally.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Himalayan personality is gentle, affectionate, and emotionally steady. These cats are deeply attached to their families but express affection in soft, unassuming ways. They enjoy being close to their owners, often choosing to rest nearby rather than demanding constant attention.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike their Siamese ancestors, Himalayans are typically quiet and reserved. They do communicate, but their vocalizations are soft and infrequent, usually reserved for mealtime or moments of gentle interaction. This makes them well suited for households that value a peaceful atmosphere.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Himalayans enjoy routine and predictability. Sudden changes in environment, noise, or schedule can cause stress, leading them to withdraw temporarily. Once settled, however, they are deeply loyal companions who recognize familiar faces, voices, and daily patterns.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While not highly playful, Himalayans do enjoy light interaction, especially when initiated by their owners. They prefer gentle games and calm engagement over high-energy play. Their temperament makes them suitable for quieter households, seniors, or individuals seeking a calm emotional presence.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Plush cat beds, calming accessories */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Socially, Himalayans generally do well with respectful children and other pets when introductions are gradual and controlled. They are tolerant but not assertive, preferring harmony over dominance in multi-pet environments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Health management is an essential responsibility for Himalayan owners. The breed’s brachycephalic facial structure can contribute to breathing difficulties, particularly in warm or humid environments. Maintaining a cool indoor climate and avoiding excessive physical exertion helps reduce respiratory stress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Eye conditions are common due to shallow eye sockets and tear drainage issues. Regular monitoring and cleaning reduce the risk of infection and chronic irritation. Dental issues may also arise, as jaw structure can affect tooth alignment and plaque buildup.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Polycystic kidney disease has been documented in lines related to Persians and Himalayans. Ethical breeders screen for this condition, but lifelong veterinary monitoring remains important. Early detection allows for better management and improved quality of life.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, dental care products, cooling mats */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Weight control is another key factor in long-term health. Because Himalayans are naturally sedentary, even modest overfeeding can result in gradual weight gain. Monitoring body condition and maintaining dietary discipline significantly reduce secondary health risks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Regular veterinary care, including annual wellness exams, dental checkups, and age-appropriate screenings, is essential. Himalayans often mask discomfort, making preventive care the most effective strategy for preserving comfort and longevity.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Himalayan cat is a breed for owners who value beauty, calm companionship, and routine. They require time, patience, and consistent care, but they return that investment with quiet devotion, emotional warmth, and a soothing presence that integrates seamlessly into a peaceful home.
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
