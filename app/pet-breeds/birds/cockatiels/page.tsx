import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cockatiels as Pets Guide',
  description: 'Complete guide to keeping cockatiels as pets. Learn about cockatiel care, training, diet, and health considerations.',
  keywords: ['cockatiels', 'cockatiel care', 'cockatiel pets', 'cockatiel guide', 'cockatiel diet', 'cockatiel health'],
  pathname: '/pet-breeds/birds/cockatiels',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Cockatiels as Pets Guide',
    type: 'image/png',
  }],
});

export default function CockatielsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Cockatiels"
        description="Cockatiels are friendly, intelligent birds that make excellent pets for both beginners and experienced bird owners. They are known for their playful personalities and ability to learn tricks and mimic sounds."
        emoji="🦜"
        slug="cockatiels"
        category="birds"
        categoryName="Birds"
        categoryHref="/pet-breeds/birds"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cockatiels hold a unique place in the world of companion birds. Native to Australia and shaped by generations of responsible aviculture, they are widely regarded as one of the most emotionally intuitive and adaptable pet birds available today. Their medium size, expressive crests, and gentle demeanor make them instantly approachable, even for first-time bird owners.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Measuring roughly twelve to thirteen inches from head to tail, cockatiels strike a balance between presence and manageability. They are large enough to feel substantial and interactive, yet small enough to be comfortably housed in a home environment without specialized aviary space. Their long tail feathers and soft plumage give them an elegant appearance, while their upright posture and crest movements offer a constant window into their emotional state.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lifespan is one of the most important considerations when choosing a cockatiel. With proper care, it is common for these birds to live fifteen to twenty years, and some exceed that range. This longevity reflects not only their physical resilience but also the depth of commitment required from their owners. A cockatiel is not a short-term pet. It is a long-term companion whose needs evolve over time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temperament is where cockatiels truly distinguish themselves. They are naturally social, affectionate, and emotionally responsive. Many cockatiels form strong bonds with their primary caregivers, seeking out shoulder time, head scratches, and proximity. They are playful without being chaotic, curious without being destructive, and expressive without being excessively loud. These traits make them especially appealing to households seeking interaction without constant noise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Care Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Caring for a cockatiel requires more than meeting basic physical needs. These birds are highly social animals that depend on daily interaction for emotional well-being. A cockatiel left alone for long periods without stimulation may become withdrawn, vocalize excessively, or develop stress-related behaviors. Consistent engagement is not optional; it is central to their health.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Housing should provide both security and freedom of movement. A spacious cage that allows full wing extension and climbing is essential. Cockatiels enjoy exploring their environment, moving between perches, and observing household activity. The cage should feel like a safe home base rather than a restrictive enclosure.
            </p>
            {/* Affiliate link opportunity: Large cockatiel cages */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Diet plays a defining role in long-term health. A nutritionally complete pellet should form the foundation of a cockatiel’s diet, supported by fresh vegetables such as leafy greens, carrots, squash, and peppers. Seeds can be offered in moderation as enrichment or training rewards but should never dominate daily intake. Poor diet is one of the most common causes of preventable illness in cockatiels.
            </p>
            {/* Affiliate link opportunity: High-quality cockatiel pellet food */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fresh water must be available at all times and replaced daily. Food and water dishes should be cleaned regularly to prevent bacterial growth. Environmental cleanliness supports not only physical health but also respiratory safety, an area of particular sensitivity for birds.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enrichment is essential. Cockatiels are intelligent and emotionally complex. Toys that encourage chewing, foraging, and problem-solving help prevent boredom and destructive behaviors. Rotation of toys maintains novelty and interest. A mentally stimulated cockatiel is calmer, more confident, and more socially engaged.
            </p>
            {/* Affiliate link opportunity: Enrichment toys and foraging puzzles */}

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Training and Socialization</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Training a cockatiel is best approached as a relationship-building process rather than a performance exercise. These birds respond exceptionally well to positive reinforcement, gentle repetition, and trust-based interaction. Harsh handling or forced compliance damages confidence and can permanently affect behavior.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Early socialization is critical. Cockatiels that are gently handled and exposed to normal household sounds and routines during their early development tend to be more adaptable and relaxed. This foundation carries through adulthood, making training and daily care significantly easier.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cockatiels are capable mimics. While they are not known for extensive speech like some parrots, many learn to whistle tunes, copy household sounds, and mimic simple words or phrases. Males are generally more vocal, but individual personality plays a significant role. Vocalization is often a reflection of comfort and engagement rather than a goal in itself.
            </p>
            {/* Affiliate link opportunity: Clicker training tools or training guides */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Physical interaction is another strength of the species. Many cockatiels enjoy head scratches and will actively solicit attention. Respecting boundaries is important. A cockatiel that trusts its handler will communicate preferences clearly through body language. Learning to read crest position, posture, and vocal tone allows for more meaningful interaction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cockatiels are generally robust birds, but like all avian species, they are adept at concealing illness. Subtle changes in behavior are often the earliest indicators of a problem. Reduced activity, changes in vocalization, altered appetite, or feather condition should be taken seriously.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Respiratory sensitivity is a primary concern. Exposure to airborne toxins such as cooking fumes, cigarette smoke, scented candles, and aerosols can be fatal. The home environment must be bird-safe at all times. Temperature stability and good ventilation are equally important.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feather plucking is a behavior often associated with stress, boredom, or nutritional imbalance. Addressing the underlying cause is essential. Simply treating the symptom without improving environment, diet, or interaction rarely resolves the issue.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Preventive veterinary care is strongly recommended. Annual check-ups with an avian veterinarian establish baseline health metrics and allow early intervention. Nail trims and wing management should be performed carefully, ideally under professional guidance.
            </p>
            {/* Affiliate link opportunity: Avian-safe supplements and grooming tools */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When provided with proper care, cockatiels become deeply integrated members of the household. They respond to voices, routines, and emotional tone. Their presence is not passive. It is interactive, observant, and quietly affectionate. For individuals or families seeking a long-term avian companion that balances intelligence, gentleness, and personality, the cockatiel stands as one of the most rewarding choices available.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/birds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Bird Breeds</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
