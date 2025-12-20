import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'American Shorthair Cat Breed Guide',
  description: 'Complete guide to American Shorthair cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['American Shorthair', 'American Shorthair cat', 'American Shorthair breed', 'American Shorthair care'],
  pathname: '/pet-breeds/cats/american-shorthair',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'American Shorthair Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function AmericanShorthairPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="American Shorthair"
        description="American Shorthairs are healthy, easygoing cats known for their friendly personalities and low-maintenance care. They are excellent family pets and adapt well to various living situations."
        emoji="🐈"
        slug="american-shorthair"
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
              The American Shorthair is often described as the definition of balance in the feline world. Neither extreme in size nor temperament, this breed represents a careful blend of strength, durability, and quiet refinement. Adult American Shorthairs typically fall within a medium to large size range, with males often weighing more than females. Their bodies are solid and muscular without appearing bulky, reflecting their historical role as working cats that relied on stamina and physical resilience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The breed’s structure is one of its defining attributes. A broad chest, strong legs, and a well-proportioned tail give the American Shorthair a grounded, confident presence. Unlike more slender or exaggerated breeds, their build emphasizes practicality and long-term soundness. This physical moderation contributes directly to their reputation for longevity and overall health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Their coat is short, dense, and designed to protect. Originally developed to withstand varying climates and active outdoor lifestyles, the coat remains thick and resilient even in modern indoor environments. It comes in a wide range of colors and patterns, with classic silver tabby being the most widely recognized. Regardless of coloration, the coat lies close to the body and has a firm, slightly springy texture that signals good condition.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Facial features are equally balanced. The head is broad with full cheeks, especially noticeable in adult males. Eyes are large and open, conveying an alert yet relaxed expression. Ears are medium in size and set wide apart, reinforcing the breed’s approachable and steady appearance. Taken together, these traits give the American Shorthair a timeless look that feels both familiar and enduring.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the strongest advantages of the American Shorthair is its straightforward care profile. This is a breed that fits seamlessly into a wide variety of households, from first-time cat owners to experienced multi-pet families. Their grooming needs are minimal, requiring only occasional brushing to remove loose hair and support skin health. Seasonal shedding does occur, but it is typically manageable with routine care.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise and activity requirements are moderate. American Shorthairs enjoy play, particularly interactive games that engage their natural hunting instincts, but they do not demand constant stimulation. They are equally content engaging in short bursts of activity and spending long periods resting nearby. This flexibility makes them well suited for owners with varied schedules.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive cat toys, scratching posts */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition plays a central role in maintaining the breed’s long-term health. Because American Shorthairs have sturdy builds and calm temperaments, they can be prone to weight gain if portions are not monitored carefully. A balanced, high-quality diet that prioritizes protein while controlling calorie intake helps preserve lean muscle mass and joint health. Feeding routines should be consistent, and treats should be given sparingly.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Routine veterinary care is essential, even for a breed known for its robustness. Annual wellness exams, vaccinations, and preventive dental care support early detection of potential issues and contribute to the breed’s notable lifespan. With attentive care, American Shorthairs frequently live well into their late teens, and many reach twenty years of age.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Environmentally, they adapt easily. Whether living in a small apartment or a larger home, they adjust without difficulty as long as their basic needs are met. They appreciate comfortable resting spaces, scratching surfaces, and access to windows or elevated areas, but they do not require elaborate setups to remain content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The temperament of the American Shorthair is one of its most appealing qualities. Calm, friendly, and dependable, this breed is widely regarded as an ideal companion animal. They are sociable without being intrusive and affectionate without being demanding. This emotional balance allows them to integrate smoothly into family life.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              American Shorthairs tend to form strong but relaxed bonds with their owners. They enjoy companionship and often choose to be in the same room as their people, quietly observing or resting nearby. While they may enjoy being held or petted, they typically prefer affection on their own terms, making them well suited for households that respect individual boundaries.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Their patience and tolerance make them excellent companions for children and other pets. They are less likely to react negatively to noise or activity and generally handle change with composure. This adaptability is a direct reflection of their history as working cats that needed to remain steady in unpredictable environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Playfulness remains present throughout adulthood, though it is rarely excessive. They enjoy toys, gentle games, and occasional bursts of energy, but they are equally content to spend hours lounging. This moderate energy level makes them a strong match for both active households and quieter living situations.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat beds, calming accessories */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Independence is another defining trait. American Shorthairs are capable of entertaining themselves and tolerating time alone, which is especially valuable for owners with work or travel commitments. Despite this independence, they remain emotionally connected and attentive companions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The American Shorthair is widely recognized as one of the healthiest purebred cats. Its genetic diversity and functional body structure contribute to a lower incidence of breed-specific disorders compared to more specialized breeds. This does not eliminate health risks entirely, but it does reduce the likelihood of inherited conditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most common health concern in this breed is obesity, particularly in indoor cats with limited activity. Excess weight places strain on joints, increases the risk of diabetes, and can shorten lifespan. Preventive measures such as controlled feeding, regular play, and routine weight monitoring are highly effective in mitigating this risk.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental health should not be overlooked. Like many cats, American Shorthairs can develop periodontal disease if oral care is neglected. Incorporating dental-friendly diets, treats, or brushing routines can significantly improve long-term outcomes.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Dental treats, pet insurance */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular veterinary screenings support early detection of age-related conditions such as kidney disease or arthritis. When addressed promptly, many of these issues can be managed effectively, allowing the cat to maintain comfort and quality of life well into senior years.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Overall, the American Shorthair’s health profile reflects its origins as a practical, resilient breed. With responsible ownership and consistent care, these cats reward their families with years of stability, companionship, and quiet affection.
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
