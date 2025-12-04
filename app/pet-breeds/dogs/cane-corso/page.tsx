import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Cane Corso',
  slug: 'cane-corso',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764686690/GettyImages-1298639615.jpg_jo5mck.webp',
  description: 'Protective • Confident • Powerful guardian • Loyal • Intelligent',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cane Corso Breed Guide - Complete Care, Training & Guardian Dog Information',
  description:
    'Comprehensive guide to Cane Corso dogs based on major kennel club standards. Learn about characteristics, temperament, exercise, nutrition, grooming, health screening, and training requirements for this powerful Italian mastiff.',
  keywords: [
    'Cane Corso',
    'Cane Corso breed',
    'Italian Mastiff',
    'Cane Corso care',
    'Cane Corso temperament',
    'Cane Corso training',
    'Cane Corso health',
    'Cane Corso guard dog',
  ],
  pathname: '/pet-breeds/dogs/cane-corso',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Cane Corso Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Cane Corso"
        description="The Cane Corso is a large Italian mastiff bred as a fearless estate and farm guardian. Smart, trainable, and deeply loyal to their family, Corsi combine impressive power with a calm, confident presence. With experienced handling, early socialization, and clear structure, they become steady protectors and devoted companions who take their role as family guardian very seriously."
        emoji="🐕‍🦺"
        slug="cane-corso"
        imageUrl={breedMetadata.imageUrl}
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Introduction */}
                <section className="mb-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                    The Cane Corso is a powerful Italian mastiff-type guardian breed known for its imposing presence,
                    strong nerves, and deep devotion to its family. Historically used as a multi-purpose farm dog and
                    estate protector, the Corso&apos;s name is often translated as &quot;bodyguard dog&quot; or
                    &quot;guardian of the courtyard,&quot; reflecting its long history of watching over people,
                    property, and livestock.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Modern Cane Corsos are typically kept as companions, guard dogs, and working protection dogs. Major
                    kennel clubs and breed organizations describe them as intelligent, confident, and highly
                    trainable—but also strong-willed and potentially challenging in inexperienced hands. When bred and
                    raised responsibly with consistent training and early socialization, Cane Corsos can be steady,
                    affectionate family guardians who are calm in everyday life yet ready to respond when needed.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Cane Corso is an Italian breed of mastiff whose roots trace back to the war dogs of ancient Rome.
                  Over time, these powerful dogs transitioned from battlefield use to becoming versatile farm dogs in
                  rural Italy, where they guarded homesteads, drove cattle, and helped hunt large game such as wild
                  boar. In many regions they served as an all-purpose working partner and guardian for farmers and
                  butchers.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  After World War II and major changes in traditional agriculture, the Cane Corso population declined
                  dramatically and nearly vanished. A small number of enthusiasts in southern Italy began carefully
                  restoring the breed in the 1970s and 1980s from the remaining rural dogs. The Cane Corso was
                  recognized by the Italian kennel club (ENCI) in the 1990s and later by the Fédération Cynologique
                  Internationale (FCI). The American Kennel Club (AKC) granted full recognition in 2010, placing the
                  Cane Corso in the Working Group. Since then, the breed has grown rapidly in popularity around the
                  world.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Cane Corso is a large, strongly built molosser with a muscular yet athletic frame. According to
                  kennel club standards, they should appear slightly longer than tall, with a deep chest, broad head,
                  and powerful hindquarters. The overall impression is one of strength, stability, and controlled power
                  rather than bulk for its own sake. Their confident posture and steady, watchful gaze contribute to
                  their famously imposing presence.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Characteristic
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Male
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Female
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Height
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          25–27.5 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          23.5–26 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~100–110 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~85–100 pounds
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Lifespan
                        </td>
                        <td
                          className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"
                          colSpan={2}
                        >
                          9–12 years
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Coat Type
                        </td>
                        <td
                          className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"
                          colSpan={2}
                        >
                          Short, dense, weather-resistant double coat; firm and slightly stiff to the touch
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common Colors
                        </td>
                        <td
                          className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"
                          colSpan={2}
                        >
                          Black; gray (lead, light, slate); fawn (light to dark/stag red); brindle patterns; small white
                          markings on chest, feet, or muzzle permitted
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Cane Corsos have a large, broad head with a distinct stop,
                  strong muzzle, and powerful jaws. The eyes are medium-sized, oval, and typically dark, giving an
                  attentive, thoughtful expression. Ears may be left natural (medium, triangular, dropped) or cropped
                  where legal. The tail is thick at the base and carried high; in some countries it is traditionally
                  docked to a few vertebrae, while elsewhere it remains natural and full-length. Their gait should be
                  effortless, balanced, and ground-covering, showing both power and agility.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cane Corsos are renowned for their protective instincts and strong sense of responsibility toward
                  their family. Most are calm and reserved in the home, preferring to quietly observe rather than seek
                  constant attention. With their people, they are typically affectionate, deeply loyal, and often quite
                  sensitive to their owners&apos; moods and routines.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Toward strangers, Cane Corsos tend to be watchful and skeptical rather than overtly friendly. They are
                  naturally territorial and may react strongly if they perceive a threat, which is why early, ongoing
                  socialization and clear training are absolutely essential. This is not a breed that should be allowed
                  to &quot;raise itself&quot; or make its own decisions about who is or is not welcome.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Many Corsi are selective with other dogs and may not enjoy busy dog parks or off-leash play with
                  unfamiliar dogs, especially of the same sex. Responsible management, good genetics, and thoughtful
                  socialization all play a role in shaping temperament. Cane Corsos thrive in homes where they have a
                  clear job—guarding the home, accompanying their handler, or doing structured training—and where
                  expectations are consistent and fair.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a large working guardian breed, the Cane Corso needs daily physical exercise and mental structure,
                  but they do not usually require the constant motion of high-drive herding dogs. Their exercise
                  program should balance movement with joint protection, especially while they are still growing. Too
                  much pounding, jumping, or stair work at a young age can contribute to orthopedic issues later in
                  life.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Life Stage
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Daily Exercise
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Recommended Activities
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Puppies (8 weeks - 12 months)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          5 minutes per month of age, 2x daily (avoiding high-impact work)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short leash walks on soft surfaces, controlled play, basic obedience, calm socialization with
                          people and stable dogs
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          60–90 minutes total, split into sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk leash walks, structured heel work, hiking, obedience, tracking, nosework, controlled
                          fetch, supervised protection or guarding sports with professional guidance
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes, adjusted for joint and heart health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, light play, slow sniff walks, low-impact strengthening exercises, puzzle games
                          and scent work
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Cane Corsos thrive on structure and problem-solving just as much as
                  they benefit from physical outlets. Include obedience drills, place commands, scent games, tracking
                  exercises, impulse-control work, and food puzzle toys. Many Corsi enjoy activities such as obedience,
                  rally, tracking, and protection sports when trained safely and ethically with experienced trainers.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cane Corsos have a short but double coat with a noticeable undercoat that offers protection from the
                  elements. They shed year-round at a low-to-moderate level and typically have heavier seasonal sheds
                  once or twice a year. Regular grooming helps manage loose hair, keeps the skin healthy, and offers an
                  opportunity to check this large breed for lumps, irritation, or parasites.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Grooming Task
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Frequency
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Tools/Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (regular season)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1–2 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Rubber curry or grooming mitt, soft bristle brush; quick overall brush-out to remove dead hair
                          and dust
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (shedding season)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily or every other day during coat blow
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Rubber grooming mitt, de-shedding tool; work in the direction of hair growth, especially over
                          neck, shoulders, and thighs
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 6–10 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Use gentle dog-specific shampoo; thoroughly rinse and dry to prevent skin irritation in skin
                          folds and around the lips
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Nail trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 2–3 weeks (more often for indoor dogs)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heavy-duty clippers or grinder; nails should not press into the floor or cause splaying of the
                          toes
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear cleaning
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weekly check, clean as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary ear cleaner and cotton balls; monitor for redness, odor, or head shaking—especially
                          in dogs with natural, hanging ears
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental care
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily (ideal) or at least 3x per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog toothbrush and toothpaste; consider dental chews or rinses as recommended by your
                          veterinarian
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Nutrition & Feeding */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Nutrition & Feeding Guidelines
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Proper nutrition is critical for supporting the Cane Corso&apos;s substantial muscle mass, joint
                  health, and overall longevity. As a large, deep-chested working breed, they benefit from high-quality
                  diets formulated for large-breed dogs, particularly during growth. Controlled growth, appropriate
                  calories, and balanced calcium and phosphorus levels are important to reduce stress on developing
                  joints.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Life Stage
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Protein
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Fat
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Daily Amount (Dry Food)
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Meals/Day
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Puppies (2–12 months, large-breed formula)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by age/weight; follow vet and food label guidance to keep growth slow and steady
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–4
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (moderately active)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          18–24%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–14%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~3–4 cups (split into meals), adjusted for weight, activity level, and body condition
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (highly active/working)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          24–30%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–20%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~4–5 cups or more, adjusted for workload and keeping a lean physique
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seniors (7+ years)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          18–22%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–12%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2.5–4 cups, tailored to metabolism, mobility, and body condition score
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look for formulas that list high-quality animal
                  proteins (such as chicken, beef, lamb, or fish) as the first ingredient, with appropriate fat levels
                  to support energy without excess weight gain. Omega-3 fatty acids from fish oil can help support joint,
                  heart, and skin health. Because large breeds are prone to orthopedic and cardiac disease, maintaining
                  a lean body condition is one of the most important things you can do to protect your Cane Corso&apos;s
                  health.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat &amp; GDV Prevention:</strong> Cane Corsos, like many large, deep-chested breeds, have
                  an elevated risk of gastric dilatation-volvulus (GDV or bloat). To reduce this risk, feed at least two
                  smaller meals per day instead of one large meal, avoid intense exercise for about an hour before and
                  after eating, and discourage rapid gulping of food with slow-feeder bowls if needed. Talk to your
                  veterinarian about additional preventive strategies, including preventive gastropexy surgery in at-risk
                  dogs.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cane Corsos are generally robust, but as a large purebred working dog they are predisposed to several
                  orthopedic, ocular, and cardiac conditions. Responsible breeders follow health-testing guidelines from
                  the Cane Corso Association of America (CCAA) and other organizations, screening breeding dogs to
                  reduce the likelihood of passing on heritable disease. Prospective owners should always ask to see
                  official health clearances for both parents.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Common Health Conditions
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Condition
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Prevalence
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hip Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Significant breed concern in large mastiffs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal development of the hip joint leading to arthritis, pain, and decreased mobility;
                          influenced by genetics, growth rate, and body weight
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia &amp; Other Orthopedic Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Developmental abnormalities of the elbow and other joints that can cause lameness and early
                          arthritis, particularly in rapidly growing puppies
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Disease (e.g., Dilated Cardiomyopathy)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable concern in some lines
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart muscle disease and structural defects which may lead to exercise intolerance, fainting,
                          or heart failure; screened with cardiac exams and echocardiography
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed issue
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Conditions such as entropion, ectropion, cherry eye (nictitans gland prolapse), and progressive
                          retinal atrophy (PRA) can cause discomfort or vision loss if not treated
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bloat / Gastric Dilatation-Volvulus (GDV)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Increased risk due to size and chest depth
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Life-threatening twisting and distension of the stomach characterized by sudden bloating,
                          restlessness, and retching; requires immediate emergency surgery
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Skin &amp; Immune Conditions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seen regularly in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes demodectic mange, allergies, and autoimmune skin disease; often managed with
                          veterinary guidance, diet, and parasite control
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Recommended Health Screenings for Cane Corsos
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Cane Corso Association of America (CCAA), AKC, and the OFA/CHIC program recommend specific health
                  tests for breeding dogs. When purchasing a puppy from a breeder, always request copies of official
                  results for both parents:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Screening Test
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Testing Authority
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hip Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or PennHIP
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Assess hip joint structure and risk of dysplasia
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for elbow dysplasia and other developmental abnormalities
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Examination
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA / Board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect structural and electrical heart disease such as cardiomyopathy or valve defects
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patella Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Check for patellar luxation (loose or dislocating kneecaps)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ophthalmologist Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ACVO/OFA Eye Certification
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for hereditary eye diseases, including entropion, ectropion, and PRA
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Genetic Tests (NCL, DSRA, etc.)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA / Approved laboratories
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect specific inherited conditions such as Neuronal Ceroid Lipofuscinosis (NCL) and Dental
                          Skeletal Retinal Anomaly (DSRA) to avoid producing affected puppies
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Training */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Training & Socialization
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cane Corsos are intelligent, observant, and capable of learning complex behaviors, but they are not an
                  automatic &quot;easy&quot; breed to train. Their size, strength, and natural protectiveness mean that
                  mistakes in training or management can have serious consequences. For this reason, Cane Corsos are
                  best suited to owners who are committed to structured training and are comfortable setting calm,
                  consistent boundaries.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as soon as your veterinarian clears your
                  puppy for safe outings. Introduce your Cane Corso puppy to a wide variety of people, environments,
                  sounds, and controlled situations, always prioritizing positive experiences. The goal is not to turn
                  them into a social butterfly, but to help them remain stable and confident when encountering normal
                  life—delivery drivers, guests, cyclists, children playing at a distance, and so on.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement and reward-based methods work very well for
                  Cane Corsos, especially when combined with clear rules and predictable routines. They are sensitive to
                  their people and can shut down or become defensive with harsh handling. Short, focused training
                  sessions that mix obedience, impulse control, and engagement games help keep them mentally satisfied
                  and build a strong working relationship with their handler.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Foundation programs such as AKC S.T.A.R. Puppy and
                  Canine Good Citizen (CGC) are excellent starting points. Many Cane Corsos also enjoy and excel in
                  advanced obedience, tracking, scent work, and, under qualified guidance, protection sports. Any work
                  that intentionally develops guarding or bite skills should be done only with experienced, ethical
                  trainers and dogs that have stable, even temperaments.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Historically, Cane Corsos served as multi-purpose farm and estate dogs in Italy—guarding property,
                  helping move livestock, and assisting with the hunting of large, dangerous game. Today, many of those
                  instincts remain, and the breed still thrives when given meaningful work and partnership with a
                  handler. Common roles for modern Cane Corsos include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Home &amp; Estate Guardians:</strong> Their size, presence, and natural wariness of
                    intruders make them excellent deterrents. Responsible owners pair this with training and management
                    so the dog can distinguish everyday life from genuine threats.
                  </li>
                  <li>
                    <strong>Livestock &amp; Property Protection:</strong> Some Corsi still work on farms, guarding
                    barns, yards, and livestock from trespassers or predators, often alongside other working dogs.
                  </li>
                  <li>
                    <strong>Working &amp; Protection Sports:</strong> With stable temperaments and correct training,
                    Cane Corsos can participate in obedience, tracking, and protection-style sports that channel their
                    instincts into structured outlets.
                  </li>
                  <li>
                    <strong>Search, Detection &amp; Security:</strong> Their strong noses, courage, and endurance can be
                    useful in detection, tracking, and certain security applications when temperament and training are a
                    good match.
                  </li>
                  <li>
                    <strong>Companion Guardians:</strong> For many families, a Cane Corso&apos;s primary job is being a
                    calm, watchful companion that accompanies them on walks, travel, and day-to-day activities while
                    providing a sense of security.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Cane Corsos good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In the right home, yes. Many Cane Corsos are deeply bonded to their families and can be gentle and
                  patient with children they know, especially when raised with them. However, their large size, guarding
                  instincts, and strength mean they are generally better suited to families with dog-savvy adults and
                  older, respectful children. Supervision around kids is always essential, and the breed is not an ideal
                  choice for homes that frequently host large numbers of visitors or where doors and gates are often
                  left open.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Cane Corso puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary significantly by country, breeder reputation, pedigree, and whether the puppy is intended
                  for show, work, or companionship. From reputable, health-testing breeders, Cane Corso puppies often
                  range from the equivalent of roughly $1,500–$4,000 USD or more in many markets. In India, responsible
                  breeders commonly charge in the range of ₹65,000–₹1,20,000 or higher. Extremely low prices, or breeders
                  who cannot provide health clearances and contracts, are red flags for poor breeding practices.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Cane Corsos shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Despite their short coat, Cane Corsos do shed. Most owners describe shedding as low to moderate for
                  much of the year, with heavier shedding once or twice annually when they blow their undercoat.
                  Weekly brushing (and more frequent brushing during seasonal sheds) usually keeps loose hair manageable.
                  Compared to many double-coated breeds, their grooming needs are relatively simple, but you should still
                  expect some hair on clothing and furniture.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Cane Corsos aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cane Corsos are not meant to be unstable or randomly aggressive, but they are serious, powerful guard
                  dogs with strong protective instincts. A well-bred, well-socialized Corso should be confident,
                  self-controlled, and capable of discerning real threats from normal situations. Unfortunately,
                  irresponsible breeding, poor socialization, and lack of training can lead to fearfulness or
                  overreaction. This is a breed where responsible ownership—choosing ethical breeders, starting early
                  training, and managing the environment—is absolutely critical.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Cane Corsos live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living is possible for a Cane Corso, but it is demanding. These dogs are large, protective,
                  and very aware of noises and movement around them. In an apartment setting, they need excellent
                  training, reliable leash manners, and multiple structured walks and training sessions every day. Thin
                  walls, heavy foot traffic, and frequent strangers in hallways can be challenging for a guardian breed.
                  A securely fenced yard or more private living situation often makes management easier, but lifestyle
                  and commitment are ultimately more important than square footage.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What&apos;s the difference between working and show lines in Cane Corsos?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Some Cane Corso breeders focus primarily on conformation and appearance for the show ring, while
                  others prioritize working ability, drive, and performance in protection or utility work. Working-line
                  dogs may show higher intensity, stronger defensive drives, and a greater need for structured work,
                  making them best suited to experienced handlers. Show-line dogs may have slightly softer temperaments
                  or more emphasis on looks, but they are still large, powerful guardians who require serious
                  training and management. Both types should be stable, clear-headed, and health-tested, and both need
                  engaged, responsible homes.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Cane Corso Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cane Corsos are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    Experienced dog owners who are comfortable handling large, powerful breeds and setting firm but fair
                    boundaries
                  </li>
                  <li>
                    Individuals or families who want a serious guardian and are prepared to invest time in training and
                    socialization
                  </li>
                  <li>
                    Homes with securely fenced property and the ability to manage access to gates, doors, and visitors
                  </li>
                  <li>
                    People who can provide daily structured exercise, mental work, and consistent routines
                  </li>
                  <li>
                    Owners willing to work with qualified trainers and follow health-testing and veterinary
                    recommendations
                  </li>
                  <li>
                    Families with older, dog-savvy children who understand how to behave around large guardian breeds
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cane Corsos may not be the best choice for first-time dog owners, people who prefer an easy-going,
                  highly social dog, or households where the dog will often be left alone for long periods without
                  structure. In the wrong environment—or with inadequate training and management—their size and guarding
                  instincts can quickly become overwhelming. In the right hands, however, a Cane Corso can be a steady,
                  deeply devoted guardian and companion.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Cane Corso Breed Information &amp; Standard.&quot;</li>
                    <li>
                      2. Cane Corso Association of America (CCAA). &quot;Health Testing Recommendations, Grooming, and
                      Breed Resources.&quot;
                    </li>
                    <li>3. PetMD. &quot;Cane Corso Dog Breed Health and Care.&quot;</li>
                    <li>4. Encyclopaedia Britannica. &quot;Cane Corso – Size, Temperament &amp; History.&quot;</li>
                    <li>5. Orthopedic Foundation for Animals (OFA) / CHIC. &quot;Cane Corso Health Testing Protocols.&quot;</li>
                    <li>
                      6. Various veterinary and large-breed nutrition resources on feeding and managing giant and
                      guardian breeds.
                    </li>
                    <li>
                      7. Reputable Cane Corso breeders and breed clubs providing data on typical size, lifespan, and
                      health issues.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/pet-breeds/dogs"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ← Back to Dog Breeds
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/cane-corso" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
