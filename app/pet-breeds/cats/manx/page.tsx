import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Manx Cat Breed Guide',
  description: 'Complete guide to Manx cats. Learn about their characteristics, tailless feature, temperament, and care requirements.',
  keywords: ['Manx', 'Manx cat', 'Manx breed', 'Manx care', 'tailless cat'],
  pathname: '/pet-breeds/cats/manx',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Manx Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function ManxPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Manx"
        description="Manx cats are known for their distinctive tailless or short-tailed appearance, rounded bodies, and playful, intelligent personalities. They are active, social, and make excellent family companions."
        emoji="🐈"
        slug="manx"
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
              The Manx cat is one of the most distinctive and historically fascinating cat breeds in the world. Originating on the Isle of Man, this breed developed its unique tailless or short-tailed appearance through a natural genetic mutation that was preserved and refined over generations. The absence of a tail is not merely a cosmetic trait. It shapes the Manx cat’s entire physical structure, movement, and posture, giving the breed an instantly recognizable silhouette.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Manx cats are medium in size, typically weighing between eight and twelve pounds, but they often feel heavier than expected when picked up. This is due to their dense bone structure and well-developed musculature. Their bodies are compact and rounded, with a broad chest and strong shoulders that give them a powerful, athletic presence. The back is slightly arched, rising from the shoulders to the hindquarters, a feature that contributes to the breed’s characteristic hopping gait.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The hind legs of the Manx are noticeably longer than the front legs, enhancing both their jumping ability and their rabbit-like movement. This anatomical feature, combined with the absence or shortening of the tail, creates a unique center of gravity that distinguishes the Manx from other breeds. Despite these differences, Manx cats are agile, coordinated, and capable climbers.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Coat type varies within the breed. Some Manx cats have a short, dense coat, while others have a semi-long double coat. In both cases, the fur is plush and resilient, designed to protect against harsh weather. Coat colors and patterns are widely varied, with nearly every color and marking accepted. The head is round with prominent cheeks, large expressive eyes, and medium-sized ears that contribute to a friendly, alert expression.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Lifespan for the Manx typically ranges from eight to fourteen years, though many live longer with proper care and responsible breeding. Their physical uniqueness requires thoughtful attention, but when well-managed, they are robust, active cats capable of maintaining good quality of life into their senior years.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a Manx cat involves balancing physical activity, mental engagement, and consistent grooming. These cats are intelligent and energetic, and they thrive in environments that provide regular stimulation. Daily playtime is not optional. Manx cats need opportunities to run, jump, and explore in order to maintain muscle tone and prevent boredom-related behaviors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Interactive toys that mimic prey movement are especially effective for this breed. They enjoy games that involve chasing, pouncing, and problem-solving. Because of their strong hind legs, Manx cats are excellent jumpers and benefit from vertical space such as shelves, cat trees, and window perches that allow them to observe their environment from above.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive toys, cat trees, wall shelves */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grooming requirements depend on coat length, but all Manx cats benefit from regular brushing. Those with double coats require more frequent grooming, especially during seasonal shedding periods, to prevent matting and reduce loose hair. Brushing also helps distribute natural oils and supports skin health.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Deshedding brushes, grooming tools */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition plays an important role in maintaining joint health and digestive balance. A high-quality diet rich in protein supports muscle mass and sustained energy levels. Portion control is essential, as Manx cats can gain weight if activity levels decline. Maintaining a healthy body condition reduces strain on the spine and joints, which is particularly important for a breed with unique skeletal structure.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Manx cats adapt well to various living situations, including apartments and family homes, provided their physical and social needs are met. They do best in environments where routines are consistent and interaction is frequent. These cats do not thrive in isolation and prefer being active participants in household life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Manx personality is one of the breed’s greatest strengths. These cats are intelligent, playful, and deeply social. Often described as dog-like in behavior, Manx cats form strong bonds with their families and display notable loyalty. They frequently follow their owners from room to room and show interest in daily activities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Manx cats are known for their problem-solving abilities and curiosity. They quickly learn routines, recognize patterns, and may even figure out how to open doors or access hidden spaces. This intelligence makes them highly trainable. Many Manx cats respond well to clicker training and can learn tricks, fetch, or leash walking when introduced gradually.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Training clickers, harnesses */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Social interaction is essential to their emotional wellbeing. Manx cats enjoy human companionship and often seek attention through proximity rather than constant vocalization. While they are not excessively loud, they are communicative and may use soft chirps or trills to express interest or excitement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Playfulness extends well into adulthood. Unlike some breeds that become sedentary with age, Manx cats often retain a youthful enthusiasm for games and exploration. Their hopping gait and powerful jumps add a distinctive flair to their movement, making playtime especially entertaining to observe.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Puzzle toys, enrichment games */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In family settings, Manx cats generally do well with children and other pets when introduced properly. Their confident, adaptable nature allows them to navigate social environments without excessive fear or aggression. They are affectionate without being overly demanding, striking a balance that suits a wide range of households.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Health management is a critical aspect of Manx cat ownership, primarily due to the genetic mutation responsible for the breed’s taillessness. Manx syndrome is a term used to describe a range of spinal and neurological issues that can occur in some tailless individuals. These issues may affect mobility, bowel function, or overall comfort.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Responsible breeders carefully screen breeding pairs to reduce the risk of severe forms of Manx syndrome. Even so, owners should be attentive to early signs of discomfort, changes in gait, or digestive irregularities. Regular veterinary evaluations help identify issues before they progress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Arthritis can develop as Manx cats age, particularly due to the unique load distribution on the spine and hindquarters. Maintaining a healthy weight, encouraging regular low-impact activity, and providing supportive resting areas all contribute to long-term joint health.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Joint supplements, orthopedic cat beds */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Digestive sensitivity has also been observed in some Manx cats. Feeding high-quality, easily digestible food and maintaining consistent feeding routines can help minimize gastrointestinal stress. Any persistent digestive issues should be evaluated by a veterinarian.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Preventive care is essential. Annual wellness exams, weight monitoring, and age-appropriate screenings allow health concerns to be addressed early. With attentive care and ethical breeding practices, many Manx cats enjoy active, comfortable lives well into their senior years.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Manx cat is a breed defined by character as much as appearance. Its unique physical traits, intelligence, and loyalty combine to create a companion that is both engaging and deeply rewarding. For owners prepared to provide stimulation, attention, and informed care, the Manx offers a rare blend of playfulness, devotion, and individuality.
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
