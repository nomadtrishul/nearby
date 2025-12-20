import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Ragdoll Cat Breed Guide',
  description: 'Complete guide to Ragdoll cats. Learn about their characteristics, docile temperament, and care requirements.',
  keywords: ['Ragdoll', 'Ragdoll cat', 'Ragdoll breed', 'Ragdoll care', 'docile cat breed'],
  pathname: '/pet-breeds/cats/ragdoll',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Ragdoll Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function RagdollPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Ragdoll"
        description="Ragdoll cats are large, gentle cats known for their docile temperament and tendency to go limp when picked up. They are affectionate, calm, and make excellent family pets."
        emoji="🐈"
        slug="ragdoll"
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
              The Ragdoll is a breed defined by contrast. Physically imposing yet emotionally gentle, it combines large size with an exceptionally relaxed temperament. Developed in the United States during the 1960s, the Ragdoll was intentionally bred to produce a cat that prioritizes human companionship, emotional stability, and predictability over independence or territorial behavior.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ragdolls are among the largest domesticated cat breeds. Adult males commonly weigh between fifteen and twenty pounds, while females are slightly smaller but still substantial. Their bodies are long, broad, and heavily muscled, supported by strong bone structure. Despite this size, Ragdolls move with an unhurried, almost effortless grace that reflects their calm nature.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is moderately wedge-shaped with a broad skull, full cheeks, and a gently rounded muzzle. Large, oval-shaped eyes are always blue, ranging from pale sky tones to deep sapphire hues. This eye color is a defining breed standard and contributes significantly to the Ragdoll’s soft, open expression.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The coat is semi-long, silky, and plush without a dense undercoat. This texture allows the fur to drape smoothly along the body rather than forming heavy mats like some long-haired breeds. Ragdolls appear in a range of colorpoint patterns, including colorpoint, mitted, and bicolor, with point colors deepening gradually as the cat matures.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              One of the breed’s most famous traits is its tendency to relax completely when picked up, a behavior that inspired the name “Ragdoll.” While not every individual displays this trait to the same degree, most Ragdolls exhibit an unusually high level of physical trust and tolerance, making them easy to handle and exceptionally gentle companions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ragdoll cats are best suited for indoor living and thrive in homes where companionship is a central part of daily life. Their trusting, non-aggressive nature makes them poorly equipped to navigate outdoor dangers, and unsupervised access to the outdoors is strongly discouraged.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grooming needs are moderate but consistent. While the Ragdoll’s coat is less prone to matting than many long-haired breeds, regular brushing is still essential to remove loose hair, prevent tangles, and maintain coat quality. Two to three brushing sessions per week are typically sufficient, with increased frequency during seasonal shedding.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Long-hair cat brushes, grooming gloves */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bathing is not frequently required, but occasional baths can help maintain coat cleanliness and reduce shedding. Most Ragdolls tolerate bathing calmly when introduced gradually, reflecting their relaxed and cooperative temperament.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat-safe shampoo, grooming kits */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise requirements are modest. Ragdolls are not highly athletic or driven to climb aggressively, but they do benefit from daily interactive play to support joint health and prevent weight gain. Gentle games involving wand toys, soft fetch, or puzzle feeders are well suited to their temperament.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive toys, puzzle feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition plays a critical role in long-term health. Due to their large size and calm nature, Ragdolls can be prone to weight gain if overfed. A high-quality, protein-focused diet with controlled portions helps maintain muscle mass while preventing obesity-related complications.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ragdolls are deeply people-oriented and do not thrive in isolation. Homes where someone is present for a significant portion of the day, or where another compatible pet is available for companionship, are ideal. They prefer routine and predictability and adapt best to calm, stable environments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The defining feature of the Ragdoll breed is temperament. These cats are exceptionally gentle, emotionally stable, and socially oriented. They seek closeness without being demanding and express affection through proximity rather than constant vocalization.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ragdolls are often described as “puppy-like” in behavior. They frequently follow their owners from room to room, greet family members at the door, and choose to remain nearby during daily activities. This behavior is driven by genuine social attachment rather than anxiety or neediness.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike many vocal breeds, Ragdolls are generally quiet. They communicate with soft, infrequent sounds and rely more on body language and eye contact to express needs. This makes them especially appealing to owners who value a peaceful household.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Playfulness is present but measured. Ragdolls enjoy play sessions, particularly when initiated by their owners, but they do not exhibit frantic or destructive energy. Their play style is relaxed, often involving slow stalking, gentle pouncing, or interactive games that reinforce social bonds.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Soft toys, enrichment play kits */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ragdolls typically do very well with children and other pets when introduced properly. Their patience and tolerance reduce the likelihood of aggressive responses, making them an excellent choice for family environments. However, due to their trusting nature, they should always be handled gently and respectfully.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ragdolls are generally healthy cats, but their size and genetics predispose them to certain conditions that require proactive management. One of the most significant is hypertrophic cardiomyopathy, a form of heart disease observed in the breed. Responsible breeders screen breeding lines for this condition, but ongoing veterinary monitoring remains essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bladder stones and urinary tract issues have also been reported in some Ragdolls. Maintaining proper hydration, providing high-quality nutrition, and monitoring litter box habits help reduce risk and support early detection of problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Obesity is a common concern due to the breed’s calm demeanor. Excess weight places strain on joints and the cardiovascular system. Regular weight monitoring, portion control, and gentle daily activity significantly reduce long-term risk.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, joint supplements */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental health should not be overlooked. Regular veterinary dental evaluations and at-home dental care help prevent periodontal disease, which can affect overall systemic health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With responsible breeding, preventive veterinary care, and attentive home management, Ragdolls commonly live twelve to seventeen years, often maintaining excellent quality of life throughout adulthood and into their senior years.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Ragdoll is a breed built for companionship. It does not seek independence or dominance but instead thrives on emotional connection, routine, and trust. For owners looking for a calm, affectionate, and reliably gentle cat, the Ragdoll offers one of the most stable and rewarding relationships available in the feline world.
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
