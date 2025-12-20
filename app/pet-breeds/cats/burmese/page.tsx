import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Burmese Cat Breed Guide',
  description: 'Complete guide to Burmese cats. Learn about their characteristics, temperament, and care requirements.',
  keywords: ['Burmese', 'Burmese cat', 'Burmese breed', 'Burmese care'],
  pathname: '/pet-breeds/cats/burmese',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Burmese Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function BurmesePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Burmese"
        description="Burmese cats are known for their sleek, muscular build, expressive golden eyes, and affectionate, people-oriented personalities. They are social, playful, and form strong bonds with their families."
        emoji="🐈"
        slug="burmese"
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
              The Burmese cat is a breed defined by contrast. At first glance, the Burmese appears compact and elegant, almost understated. Once lifted, however, the breed immediately reveals its true nature. Burmese cats are famously dense and muscular, often described as “brick wrapped in silk.” Their medium-sized frames carry surprising weight, supported by strong bones and well-developed musculature that reflects both athletic ability and physical resilience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is gently rounded with a short, broad muzzle and prominent cheekbones, giving the Burmese a sweet yet alert expression. Large, expressive eyes are one of the breed’s most striking features. Typically golden or amber in color, they convey warmth, intelligence, and constant engagement with their surroundings. These eyes are not passive; they follow movement closely and often lock onto their owners with intense focus.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The coat is short, fine, and satin-like, lying close to the body and highlighting the cat’s muscular form. It reflects light beautifully, giving the Burmese a polished, almost glossy appearance. Shedding is minimal, and the coat feels soft and warm to the touch, reinforcing the breed’s reputation as a tactile companion. Traditional coat colors include sable, champagne, blue, and platinum, each enhancing the breed’s smooth lines and expressive face.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Burmese cats typically reach full physical and emotional maturity earlier than some other breeds, yet they retain a youthful presence throughout much of their lives. With proper care, many live well into their mid-teens, maintaining strength, coordination, and curiosity far beyond what their calm appearance might suggest.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a Burmese cat is less about managing physical upkeep and more about meeting emotional and social needs. This breed is deeply people-oriented and thrives in environments where human interaction is a daily constant. Burmese cats do not do well when ignored or left alone for extended periods. They are happiest in households where someone is home often or where they have consistent companionship.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Physical activity is important, though not extreme. Burmese cats enjoy structured play sessions that engage both their bodies and minds. Interactive toys that encourage chasing, pouncing, and problem-solving are ideal. Unlike high-intensity breeds that demand constant stimulation, Burmese cats prefer frequent but manageable play throughout the day.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive cat toys, puzzle toys */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grooming is refreshingly simple. Their short, fine coat requires little more than occasional brushing to remove loose hair and maintain its natural sheen. Many Burmese cats enjoy the sensation of grooming, turning coat care into a bonding ritual rather than a task. Regular nail trimming, ear checks, and dental care should be part of a routine wellness schedule.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Grooming brushes, cat nail clippers, dental care products */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition plays a key role in maintaining the Burmese cat’s muscular build and overall vitality. A high-quality, protein-rich diet supports muscle tone and energy levels while helping prevent unnecessary weight gain. Because Burmese cats are enthusiastic eaters, portion control is important. Feeding schedules should be consistent, and treats should be used strategically rather than freely.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Environmentally, Burmese cats adapt well to different living spaces as long as emotional needs are met. They do well in apartments and larger homes alike, provided they have access to comfortable resting areas, vertical viewpoints, and consistent human interaction. They value warmth, stability, and routine, often choosing the same favorite spots day after day.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Personality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The personality of the Burmese cat is where the breed truly distinguishes itself. Often described as dog-like, Burmese cats are unusually loyal, affectionate, and socially responsive. They seek out human company with intention, preferring to be involved in daily activities rather than observing from a distance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Burmese cats are known for following their owners from room to room, settling nearby, and maintaining close physical proximity. They are lap-friendly without being demanding and affectionate without being overwhelming. Physical contact is important to them, and many enjoy being held, carried, or draped across shoulders.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Vocalization is another defining trait. Burmese cats are communicative and expressive, often using soft but persistent voices to engage with their owners. These vocalizations are not random; they are purposeful and context-driven, reflecting the breed’s desire for interaction rather than attention-seeking behavior.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Playfulness extends well into adulthood. Burmese cats retain a kitten-like enthusiasm for games, toys, and interactive challenges long after reaching maturity. They enjoy fetch-style games, chasing toys, and learning simple routines. Their intelligence allows them to adapt quickly to new activities and environments.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Interactive play sets, cat tunnels, enrichment toys */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Social compatibility is another strength of the breed. Burmese cats typically get along well with children, other cats, and even cat-friendly dogs when introduced properly. Their gentle, confident nature allows them to navigate social dynamics without excessive fear or aggression, making them excellent family companions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Burmese cats are generally healthy, but they are predisposed to certain genetic and metabolic conditions that responsible owners should understand. One of the most notable is hypokalemic polymyopathy, a condition involving low potassium levels that can lead to muscle weakness. With early diagnosis and proper management, affected cats can live comfortable lives.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Diabetes mellitus is another condition observed more frequently in Burmese cats than in some other breeds. Maintaining a healthy weight, providing balanced nutrition, and encouraging regular activity are key preventive measures. Early detection through routine blood work greatly improves management outcomes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Certain eye conditions, including corneal issues, may also appear in the breed. Regular veterinary examinations help identify subtle changes before they impact quality of life. Because Burmese cats are adept at masking discomfort, consistent preventive care is particularly important.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, veterinary wellness plans, supplements */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Weight management deserves special attention. Burmese cats have strong appetites and a naturally solid build, which can obscure gradual weight gain. Monitoring body condition rather than relying solely on the scale helps maintain long-term health and mobility.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With attentive care, ethical breeding, and a stable, engaging home environment, Burmese cats typically enjoy lifespans ranging from ten to sixteen years. Many remain active, affectionate, and socially engaged throughout their lives, continuing to form deep bonds with their families.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Burmese cat is not a breed for passive ownership. It is a companion in the truest sense of the word, offering loyalty, affection, and constant engagement in exchange for time, attention, and presence. For owners seeking a deeply connected, emotionally responsive feline partner, few breeds offer a more rewarding experience.
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
