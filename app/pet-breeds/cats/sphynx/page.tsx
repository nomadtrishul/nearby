import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sphynx Cat Breed Guide',
  description: 'Complete guide to Sphynx cats. Learn about their characteristics, hairless appearance, and special care requirements.',
  keywords: ['Sphynx', 'Sphynx cat', 'hairless cat', 'Sphynx breed', 'Sphynx care'],
  pathname: '/pet-breeds/cats/sphynx',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Sphynx Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function SphynxPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Sphynx"
        description="Sphynx cats are known for their hairless appearance, though they actually have a fine layer of downy fuzz. They are energetic, affectionate, and require special care due to their lack of fur."
        emoji="🐈"
        slug="sphynx"
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
              The Sphynx cat is one of the most instantly recognizable and misunderstood breeds in the domestic cat world. Often described as hairless, the Sphynx is not truly bald. Instead, its body is covered with a fine layer of peach-fuzz–like down that gives the skin a warm, suede-like texture. This unique physical trait is the result of a natural genetic mutation that was later selectively bred, resulting in a cat that challenges traditional expectations of feline appearance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sphynx cats are medium-sized, typically weighing between six and twelve pounds, but they often feel heavier than they appear due to their dense musculature and broad chest. Their bodies are compact, powerful, and surprisingly athletic. Long legs, rounded paws, and a whip-like tail complete a silhouette that is both unconventional and striking.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is wedge-shaped with pronounced cheekbones, large lemon-shaped eyes, and oversized ears that sit high on the head. These ears, combined with expressive eyes, give the Sphynx an alert, almost alien appearance. Facial wrinkles are common, especially around the muzzle, eyes, and forehead, adding to the breed’s distinctive look.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Skin color and pattern vary widely. Because there is no coat to mask pigmentation, all traditional cat colors and patterns are visible directly on the skin, including solids, tabbies, tortoiseshells, and points. These markings may change slightly with age, temperature, and sun exposure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Sphynx has a relatively moderate lifespan, commonly ranging from eight to fourteen years. With attentive care and responsible breeding, many individuals live well into their senior years while maintaining high levels of activity and engagement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a Sphynx cat is fundamentally different from caring for a coated breed. The absence of fur means that the skin, rather than hair, becomes the primary focus of daily maintenance. Sphynx cats produce the same natural skin oils as other cats, but without fur to absorb them, oil accumulates on the skin’s surface.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Weekly bathing is essential to prevent oil buildup, clogged pores, and skin irritation. Baths should be gentle, using cat-safe, fragrance-free cleansers that do not strip the skin of its natural protective barrier. Most Sphynx cats adapt well to bathing when introduced early and handled calmly.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat-safe shampoo, bathing supplies */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ear care is another critical component of Sphynx maintenance. Their large ears tend to accumulate wax quickly and require regular cleaning to prevent infection. Nail trimming is also important, as oil buildup can collect around nail beds.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Ear cleaning solution, nail trimmers */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperature regulation is a constant consideration. Without fur, Sphynx cats lose body heat more rapidly and are sensitive to cold environments. They seek warmth instinctively, often curling up in blankets, sunny spots, or against their owners. In cooler climates, sweaters or heated beds may be necessary for comfort.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat sweaters, heated cat beds */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Conversely, Sphynx cats are vulnerable to sunburn. Direct sun exposure should be limited, and they should never be allowed outdoors unsupervised. Indoor-only living is essential for safety, temperature control, and skin health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition is especially important for this breed. Sphynx cats have fast metabolisms and burn calories quickly to maintain body heat. As a result, they often require more food than similarly sized cats. High-quality, protein-rich diets support muscle tone, energy levels, and skin health.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: High-calorie premium cat food */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Feeding schedules should be consistent, and weight should be monitored regularly to balance caloric needs with long-term health. Despite their appetite, obesity can still occur if food quality and portions are poorly managed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Sphynx personality is as bold as its appearance. These cats are intensely social, affectionate, and people-focused. They do not behave like aloof observers. Instead, they actively seek involvement in every aspect of household life.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sphynx cats are often described as dog-like in behavior. They greet their owners at the door, follow them from room to room, and insist on being included in daily routines. Physical closeness is especially important, as warmth and affection go hand in hand for this breed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Playfulness remains strong throughout adulthood. Sphynx cats enjoy climbing, jumping, and interactive games that challenge both body and mind. Their intelligence allows them to learn routines quickly, and many enjoy puzzle toys and training exercises.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive toys, climbing trees */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Vocalization is common, though not as persistent as in some oriental breeds. Sphynx cats use a range of soft sounds to communicate needs, discomfort, or affection. Their communication style is expressive but not typically overwhelming.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              They generally do well with children, other cats, and even dogs, provided introductions are gradual and respectful. Due to their social nature, Sphynx cats do poorly in isolation and are best suited to homes where companionship is consistently available.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Sphynx breed has several health considerations that require informed, proactive management. Hypertrophic cardiomyopathy is one of the most serious conditions associated with the breed. Regular cardiac screenings and veterinary monitoring are essential, particularly as the cat ages.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Skin-related issues are common, including fungal infections, acne, and irritation caused by inadequate hygiene or unsuitable products. Maintaining a consistent grooming routine significantly reduces these risks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental disease is another area of concern. Without fur to wick moisture away from the mouth, bacteria can accumulate more easily. Routine dental care and professional cleanings help prevent long-term complications.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Dental treats, oral care products */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory sensitivity may occur in some individuals, particularly in colder environments. Maintaining stable indoor temperatures and minimizing exposure to drafts supports respiratory health.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With regular veterinary care, responsible breeding, and attentive daily management, many Sphynx cats enjoy active, fulfilling lives. Early detection and preventive care are key to maximizing longevity and quality of life.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Sphynx is not a low-effort companion, but for the right owner, it is an extraordinarily rewarding one. This breed offers unmatched affection, constant engagement, and a deeply interactive relationship. Owners willing to invest time, attention, and care are rewarded with a cat that is not merely a pet, but an ever-present, warm-hearted member of the family.
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
