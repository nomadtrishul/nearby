import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Exotic Shorthair Cat Breed Guide',
  description: 'Complete guide to Exotic Shorthair cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Exotic Shorthair', 'Exotic Shorthair cat', 'Exotic Shorthair breed', 'Exotic Shorthair care'],
  pathname: '/pet-breeds/cats/exotic-shorthair',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Exotic Shorthair Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function ExoticShorthairPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Exotic Shorthair"
        description="Exotic Shorthairs are essentially short-haired Persians, known for their flat faces, round eyes, and sweet, gentle personalities. They combine the Persian's calm demeanor with easier grooming needs."
        emoji="🐈"
        slug="exotic-shorthair"
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
              The Exotic Shorthair is often described as the ideal balance between beauty and practicality. Developed as a short-coated counterpart to the Persian, this breed retains nearly all of the Persian’s defining physical features while offering a coat that is significantly easier to manage. The result is a cat that appears plush, rounded, and expressive, yet fits comfortably into modern households where time and grooming demands matter.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exotic Shorthairs are medium to large cats with compact, sturdy bodies. Their bone structure is substantial, and their muscular build gives them a solid, grounded feel when picked up. Despite their rounded appearance, they are not fragile cats. Their physical composition reflects strength and durability, developed through careful breeding to preserve health alongside aesthetics.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is broad and rounded, dominated by large, open eyes that are typically copper or deep gold in color. These eyes are one of the breed’s most emotionally expressive features, often giving the impression of constant curiosity or gentle attentiveness. The flat facial structure, known as brachycephaly, is a hallmark of the breed and contributes to its signature “teddy bear” appearance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The coat is short, thick, and plush, standing slightly away from the body rather than lying flat. This gives the Exotic Shorthair a soft, rounded silhouette similar to that of a Persian, without the high-maintenance length. Coat colors and patterns are diverse, ranging from solid and tabby to bicolor and shaded variations, all sharing the same dense texture.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Exotic Shorthairs mature slowly, often taking several years to reach full physical development. With proper care, they typically enjoy lifespans between ten and fifteen years, though many live longer. Their physical moderation and gentle nature contribute to steady, predictable aging rather than abrupt declines.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While Exotic Shorthairs are often marketed as “low-maintenance Persians,” responsible ownership still requires a thoughtful approach to daily care. Their short coat significantly reduces grooming time, but it does not eliminate maintenance altogether. Weekly brushing helps remove loose hair, prevent tangles beneath the dense coat, and maintain its plush appearance.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Soft grooming brushes, deshedding tools */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the most important aspects of Exotic Shorthair care involves facial hygiene. Due to their flat facial structure, tear drainage can be inefficient, leading to tear staining and moisture buildup around the eyes. Regular eye cleaning is essential to prevent irritation and secondary infections. Most owners find that a gentle daily or every-other-day routine keeps the area clean and comfortable.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Eye cleaning wipes, grooming kits */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise needs for this breed are modest. Exotic Shorthairs are not highly active cats and do not require intense play sessions. However, regular gentle play is important to maintain muscle tone, joint mobility, and a healthy weight. Short, interactive play periods using wand toys or slow-moving games are typically sufficient.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Low-impact interactive toys, scratching posts */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition is a key factor in managing the breed’s overall health. Exotic Shorthairs have a tendency toward weight gain due to their calm temperament and compact build. A balanced, portion-controlled diet rich in high-quality protein supports muscle maintenance while preventing excess fat accumulation. Feeding schedules should be consistent, and treats should be offered sparingly.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Environmentally, Exotic Shorthairs thrive in calm, predictable homes. They prefer stable routines and quiet surroundings. Loud, chaotic environments can cause stress, leading them to withdraw or become less engaged. They are best suited for indoor living, where temperature, air quality, and safety can be carefully managed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Exotic Shorthair personality closely mirrors that of the Persian, with subtle distinctions that make the breed uniquely appealing. These cats are gentle, affectionate, and emotionally steady. They form strong bonds with their families but express affection in calm, understated ways rather than through constant physical demands.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exotic Shorthairs enjoy companionship and often choose to remain close to their owners, following them from room to room or settling nearby. They are content to share space quietly, making them excellent companions for people who value presence over constant interaction. Many owners describe them as emotionally intuitive, responding sensitively to changes in mood or routine.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While generally quiet, Exotic Shorthairs are not completely silent. They may communicate with soft, gentle vocalizations, especially during feeding times or when seeking attention. Their voices are typically low and unobtrusive, aligning with the breed’s overall calm demeanor.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Compared to Persians, Exotic Shorthairs often display a slightly more playful side, particularly during their younger years. They enjoy gentle games and interactive toys but rarely engage in frantic or destructive behavior. Their play style is deliberate and relaxed rather than intense.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat beds, calming accessories, enrichment toys */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Socially, Exotic Shorthairs tend to get along well with respectful children and other pets when introductions are handled properly. Their tolerant, easygoing nature allows them to adapt to multi-pet households, provided they are not overwhelmed by excessive activity or noise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Health management is a critical component of responsible Exotic Shorthair ownership. The breed’s brachycephalic facial structure, while visually distinctive, can predispose cats to certain respiratory challenges. These may include noisy breathing, sensitivity to heat, and reduced tolerance for strenuous activity. Maintaining a cool, well-ventilated indoor environment is essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Eye-related conditions are also common due to shallow eye sockets and tear drainage issues. Regular cleaning and monitoring help prevent chronic irritation and infection. Dental health deserves special attention as well, as jaw structure can contribute to misalignment and plaque buildup.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Polycystic kidney disease has been documented in lines related to Persians and Exotic Shorthairs. Responsible breeders screen for this condition, but ongoing veterinary monitoring remains important throughout the cat’s life. Early detection allows for better long-term management.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, dental care products, cooling mats */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Weight management is another ongoing consideration. Because Exotic Shorthairs are less active by nature, excess weight can accumulate gradually. Monitoring body condition, encouraging gentle activity, and maintaining dietary discipline significantly reduce the risk of secondary health issues.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Routine veterinary care, including annual wellness exams, dental evaluations, and age-appropriate screenings, is essential. Exotic Shorthairs may not show obvious signs of discomfort, making preventive care the most effective strategy for maintaining long-term health and comfort.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Exotic Shorthair is an ideal breed for owners seeking a calm, affectionate, and visually striking companion without the intensive grooming demands of long-haired breeds. They reward attentive, gentle care with quiet loyalty, emotional warmth, and a steady presence that integrates seamlessly into daily life.
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
