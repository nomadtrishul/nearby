import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'British Shorthair Cat Breed Guide',
  description: 'Complete guide to British Shorthair cats. Learn about their characteristics, calm temperament, and care requirements.',
  keywords: ['British Shorthair', 'British Shorthair cat', 'British Shorthair breed', 'British Shorthair care'],
  pathname: '/pet-breeds/cats/british-shorthair',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'British Shorthair Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function BritishShorthairPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="British Shorthair"
        description="British Shorthair cats are known for their round faces, dense coats, and calm, easygoing personalities. They are independent yet affectionate, making them ideal companions for various households."
        emoji="🐈"
        slug="british-shorthair"
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
              The British Shorthair is one of the most recognizable and historically significant cat breeds in the world. Its appearance reflects centuries of natural development and selective breeding focused on strength, stability, and temperament rather than extremes. This is a breed defined by substance. British Shorthairs are medium to large cats with solid bone structure, broad chests, and powerful limbs that give them a grounded, dignified presence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the breed’s defining features is its unmistakably round face. Full cheeks, especially pronounced in adult males, combine with a short nose and large, round eyes to create the iconic expression often described as calm, thoughtful, and quietly observant. Eye color varies depending on coat color, but it is always clear and intense, contributing to the breed’s gentle yet confident look.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The coat of the British Shorthair is dense, plush, and resilient, setting it apart from most other shorthaired breeds. Each hair stands slightly away from the body, creating a thick, almost padded texture that feels firm to the touch. This coat evolved as protection against harsh weather conditions and remains one of the breed’s most admired traits today. While the classic blue coat is the most famous, British Shorthairs appear in a wide range of colors and patterns, all sharing the same luxurious density.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Maturity in this breed comes slowly. British Shorthairs take several years to fully develop both physically and mentally. This gradual growth contributes to their impressive longevity, with many individuals living well into their late teens or early twenties when properly cared for. Their physical moderation and genetic stability play a significant role in their reputation as a robust, enduring breed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              British Shorthairs are widely appreciated for their manageable care needs, making them an excellent choice for owners who value simplicity and consistency. Their dense coat does require regular attention, but grooming is straightforward. Weekly brushing helps remove loose hair, prevents matting beneath the surface, and supports healthy skin. During seasonal shedding periods, more frequent brushing may be beneficial.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Grooming brushes, deshedding tools */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Exercise needs are modest but should not be overlooked. British Shorthairs are not hyperactive cats, yet they benefit from daily movement to maintain muscle tone and prevent weight gain. Short play sessions using interactive toys or gentle chasing games are usually sufficient. These cats prefer quality over quantity when it comes to activity and are unlikely to engage in prolonged high-energy play.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive toys, scratching posts */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition is a critical component of long-term health for this breed. British Shorthairs have a naturally sturdy build and a slower metabolism compared to more athletic breeds. Without proper portion control, they are prone to gradual weight gain. A high-quality, protein-focused diet with measured servings helps maintain a healthy body condition while supporting muscle mass and joint health.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Environmentally, British Shorthairs are highly adaptable. They are equally comfortable in apartments or larger homes as long as their space is calm and predictable. They appreciate comfortable resting areas, stable routines, and a peaceful atmosphere. Excessive noise or chaos may cause them to withdraw, as they thrive best in orderly, low-stress environments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The personality of the British Shorthair is often described as quietly affectionate and emotionally balanced. These cats form strong bonds with their owners, but they express affection in subtle, respectful ways. Rather than demanding attention, they prefer to be near their people, sharing space without insisting on constant physical contact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Independence is a hallmark of the breed. British Shorthairs are comfortable spending time alone and are well suited for households where owners work outside the home. Despite this independence, they remain deeply loyal companions who recognize routines, respond to familiar voices, and enjoy gentle interaction.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cats are not particularly vocal. When they do communicate, it is usually with soft, restrained sounds rather than loud or persistent meowing. This makes them an appealing choice for owners who prefer a quieter pet. Their calm demeanor also allows them to coexist well with respectful children and other animals.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Orthopedic cat beds, calming accessories */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Playfulness remains present throughout adulthood, but it is measured and purposeful. British Shorthairs enjoy interactive play that engages their curiosity without overwhelming them. They are observant by nature, often preferring to watch activity before deciding whether to participate.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              British Shorthairs are generally healthy cats with a strong genetic foundation, but like all purebred animals, they are predisposed to certain conditions. Obesity is one of the most common concerns, largely due to their calm nature and solid build. Maintaining a healthy weight through diet and moderate activity is essential for preventing secondary issues such as joint strain and diabetes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hypertrophic cardiomyopathy is a heart condition observed in the breed and should be monitored through regular veterinary screenings. Early detection allows for management strategies that can significantly improve quality of life. Hemophilia B, a rare inherited bleeding disorder, has also been identified in some bloodlines, reinforcing the importance of responsible breeding practices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Routine veterinary care is critical for long-term health. Annual wellness exams, dental assessments, and age-appropriate blood work help identify issues before they become serious. British Shorthairs tend to hide discomfort, making preventive care especially important.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, dental care products, supplements */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With consistent care, proper nutrition, and a stable environment, British Shorthairs often enjoy long, comfortable lives. Their combination of physical resilience and emotional steadiness makes them one of the most reliable companion breeds for owners seeking a calm, dignified feline presence.
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
