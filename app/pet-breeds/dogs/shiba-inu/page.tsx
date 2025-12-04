import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Shiba Inu',
  slug: 'shiba-inu',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764697946/pexels-cottonbro-5998700_jknuph.jpg',
  description: 'Alert • Independent • Fox-like • Clean • Loyal companion',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Shiba Inu Breed Guide - Temperament, Care & Training Information',
  description:
    'Comprehensive guide to Shiba Inu dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this iconic Japanese breed.',
  keywords: [
    'Shiba Inu',
    'Shiba Inu breed',
    'Shiba Inu care',
    'Shiba Inu temperament',
    'Shiba Inu training',
    'Shiba Inu health',
    'Japanese dog breeds',
    'AKC Shiba Inu',
  ],
  pathname: '/pet-breeds/dogs/shiba-inu',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Shiba Inu Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Shiba Inu"
        description="The Shiba Inu is a small, fox-like spitz breed from Japan, known for its bold personality, independence, and cat-like cleanliness. Originally bred as a hunting dog in mountainous terrain, Shibas are agile, alert companions who bond deeply with their families while maintaining a famously strong-willed streak. With consistent training and proper socialization, they make charming, spirited companions in active homes and city apartments alike."
        emoji="🐕"
        slug="shiba-inu"
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
                    The Shiba Inu is a compact, sturdy Japanese spitz-type breed prized for its alert expression,
                    fox-like features, and confident demeanor. Developed as a versatile hunting dog in Japan&apos;s
                    mountainous regions, the Shiba was used to flush and pursue small game and birds over rugged
                    terrain. Today, they are primarily kept as companions, but their keen senses, agility, and
                    self-assured nature remain strongly evident in modern Shibas.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), the Shiba Inu is one of the most popular companion
                    breeds in Japan and has a steadily growing following worldwide. Their popularity comes from their
                    charming mix of independence and affection, compact size, and relatively adaptable exercise needs.
                    With thoughtful training, early socialization, and clear boundaries, Shibas make loyal, entertaining
                    companions who bring a lot of personality into the home.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Shiba Inu is one of Japan&apos;s oldest native dog breeds, with roots that may extend back
                  thousands of years. Originally developed in Japan&apos;s mountainous regions, Shibas were used by
                  hunters to flush and pursue small game such as birds and rabbits. Their agility, quick reflexes, and
                  keen senses made them well-suited to steep, uneven terrain and dense brush.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The breed nearly disappeared during World War II due to food shortages, bombing, and a post-war
                  distemper outbreak. A small number of surviving dogs from different regions were used in reconstruction
                  efforts, and preservation groups in Japan carefully rebuilt the breed. The Nihon Ken Hozonkai
                  (NIPPO) recognizes the Shiba Inu as one of Japan&apos;s six native spitz-type breeds. The Shiba was
                  brought to the United States in the mid-20th century and gained AKC recognition in 1992. Today,
                  Shibas are beloved around the world for their spirited, fox-like presence and distinct Japanese
                  heritage.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus are small, well-balanced dogs with a compact, muscular build and a strong, agile,
                  athletic outline. According to the AKC breed standard, they should present a combination of strength
                  and elegance, with a slightly longer-than-tall body and efficient, light-footed movement. Their erect
                  ears, curled tail, and keen, triangular eyes give them a distinctive, alert, and fox-like expression.
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
                          14.5–16.5 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          13.5–15.5 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~18–24 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~15–20 pounds
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
                          12–16 years
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
                          Double coat with straight, harsh outer coat and soft, dense undercoat
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
                          Red, sesame (red with black-tipped hairs), black &amp; tan, and cream; all should have proper
                          &quot;urajiro&quot; (cream to white markings) on cheeks, chest, belly, and underside of tail
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Shiba Inus have a wedge-shaped head with a broad forehead,
                  moderate stop, and tapering muzzle. Their small, triangular eyes are dark brown with black rims and
                  convey a confident, spirited expression. Ears are small, thick, and triangular, carried firmly erect.
                  The tail is set high, strongly curled or carried in a sickle curve over the back. Their light,
                  nimble gait and compact build reflect their origins as agile mountain hunters.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus are alert, bold, and self-possessed dogs with a distinctly independent streak. They are
                  intelligent and observant, often taking time to assess situations before responding. While many Shibas
                  are affectionate with their families, they generally do not have the &quot;velcro dog&quot; style of
                  some other breeds and may prefer to show love on their own terms.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shibas tend to be reserved with strangers and can be aloof or selective about new people and dogs.
                  Early and ongoing socialization is essential to help them develop into confident, well-mannered adults.
                  Many have a strong watchdog instinct and will alert bark at unfamiliar noises or visitors, though they
                  are not typically aggressive without cause when responsibly bred and trained.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Their hunting heritage contributes to a high prey drive, especially toward small animals, and they
                  are known for being skilled escape artists if given the opportunity. Shibas are also famous for their
                  expressive vocalizations, including the dramatic &quot;Shiba scream&quot; when they are excited,
                  frustrated, or strongly opinionated about something. Clear boundaries, consistency, and positive
                  training are key to living harmoniously with this spirited breed.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus are active, agile dogs but not endurance athletes in the same way as some working or
                  herding breeds. They do best with a balance of daily walks, opportunities to run and explore safely,
                  and mental enrichment. Without appropriate outlets, Shibas can become bored, vocal, or
                  mischievous—especially young dogs with energy to spare.
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
                          5 minutes per month of age, 2x daily
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short, frequent walks; gentle play; basic obedience; socialization; puzzle toys
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1–7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–90 minutes total (split into sessions)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, controlled off-leash time in secure areas, hiking, fetch, scent games, agility or
                          rally for motivated dogs
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–45 minutes, adjusted for health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, light play, sniff walks, low-impact brain games, short training refreshers
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Shibas benefit greatly from mental enrichment as well as physical
                  activity. Incorporate food puzzles, snuffle mats, trick training, nosework, and problem-solving games
                  into their routine. Short, focused training sessions tend to work best, as many Shibas dislike
                  repetition and may disengage if they become bored or frustrated.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus have a thick double coat that provides insulation and weather protection. The outer coat is
                  stiff and straight, while the undercoat is soft and dense. Shibas are famously clean dogs that groom
                  themselves much like cats, but they still shed significantly—especially during seasonal &quot;blow
                  out&quot; periods when the undercoat is released in large amounts.
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
                          Slicker brush or pin brush; focus on removing loose undercoat and preventing mats around neck
                          and thighs
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
                          Undercoat rake, de-shedding tool; work in sections to gently remove dense undercoat
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
                          Use dog-specific shampoo; avoid over-bathing to protect coat and skin; never shave the double
                          coat
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Nail trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 2–4 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Trim or grind; many Shibas are sensitive about handling, so introduce tools slowly with lots of
                          rewards
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
                          Veterinary ear cleaner, cotton balls; ears should be dry and free of redness or strong odor
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
                          Dog toothbrush and toothpaste; consider dental chews and professional cleanings as recommended
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
                  Proper nutrition is essential to support the Shiba Inu&apos;s overall health, lean body condition, and
                  long lifespan. As a small to medium-sized, moderately active breed, Shibas generally do well on
                  high-quality commercial diets that emphasize animal-based protein, appropriate fat levels, and
                  controlled calories to prevent excess weight gain.
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
                          Puppies (2–12 months)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–28%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by age/weight; follow veterinary and manufacturer guidelines for small-breed puppies
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
                          18–25%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–15%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~1–1.5 cups (split into meals), adjusted for weight, metabolism, and activity level
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Highly active/working adults
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–30%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~1.5–2 cups, adjusted to maintain lean condition
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
                          18–24%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–12%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          0.75–1.25 cups, tailored to activity, joint health, and weight management
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Choose formulas that list high-quality animal
                  protein (such as chicken, turkey, fish, or lamb) as the first ingredient. Omega-3 and Omega-6 fatty
                  acids support skin and coat health, which can be especially helpful for Shibas with allergies or dry
                  skin. Many Shibas are prone to weight gain if overfed, so monitor body condition regularly and adjust
                  portions as needed. Work with your veterinarian to address any food sensitivities or digestive
                  concerns and to select an appropriate long-term diet.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Treats &amp; Preventing Obesity:</strong> Shibas are food-motivated but relatively small, so
                  treats should be used thoughtfully. Keep treats to no more than 10% of daily caloric intake and favor
                  healthy, low-calorie options. Regular exercise, controlled portions, and avoiding excessive table
                  scraps are key to preventing obesity, which can aggravate joint problems and reduce overall lifespan.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus are generally a sturdy, long-lived breed, but they are predisposed to certain inherited and
                  acquired conditions. Responsible breeders use health testing, pedigree research, and careful breeding
                  practices to reduce the incidence of these problems. Prospective owners should understand common
                  health risks and ask breeders for documentation of health clearances for both parents.
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
                          Allergies &amp; Atopic Dermatitis
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Relatively common
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Environmental or food-related allergies causing itching, redness, and recurrent skin or ear
                          infections
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patellar Luxation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Noted small-breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Slipping kneecaps that can cause intermittent lameness or, in severe cases, arthritis and
                          discomfort
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hip Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Lower to moderate risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Malformation of the hip joint that can lead to pain, decreased mobility, and osteoarthritis
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes glaucoma, cataracts, and progressive retinal atrophy (PRA), which can impair vision
                          or lead to blindness
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hypothyroidism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Underactive thyroid gland causing lethargy, weight gain, coat changes, and skin issues;
                          usually manageable with medication
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common small-breed issue
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Plaque and tartar buildup leading to gum disease, tooth loss, and potential systemic health
                          effects if untreated
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and the National Shiba Club of America (NSCA) recommend specific health testing for breeding
                  dogs. Always request copies of official health clearances when purchasing a puppy from a breeder:
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
                          Screen for hip dysplasia and evaluate joint quality
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
                          Assess for patellar luxation (slipping kneecaps)
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
                          Screen for hereditary eye diseases, including glaucoma, cataracts, and PRA
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thyroid Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or certified laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for autoimmune thyroiditis and hypothyroidism
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Additional DNA Tests (as recommended)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify specific hereditary conditions present in particular lines or regions
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
                  Shiba Inus are intelligent and capable learners but also famously independent and strong-willed.
                  Unlike some breeds that live to obey, Shibas often ask, &quot;What&apos;s in it for me?&quot; This
                  doesn&apos;t mean they are untrainable—only that training must be thoughtful, consistent, and
                  highly rewarding. Owners who appreciate a dog with opinions will enjoy working with this breed.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Expose your Shiba puppy to a variety of people, friendly dogs, environments, surfaces,
                  and sounds in a controlled, positive way. This helps reduce the risk of reactivity, fearfulness, or
                  intolerance toward handling and supports a confident, adaptable adult dog.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods are essential. Use high-value
                  treats, toys, and praise to reward desired behaviors. Shibas tend to shut down or resist harsh
                  corrections, and physical force can damage trust and create defensive behavior. Keep sessions short,
                  varied, and engaging, and end on a success. Focus on foundational skills such as recall, loose-leash
                  walking, impulse control, and calm behavior during grooming and vet visits.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy kindergarten, basic manners classes, and AKC
                  S.T.A.R. Puppy are great starting points. Some Shibas also enjoy sports such as agility, rally,
                  trick training, and nosework when training is structured to keep them motivated. Reliable recall can
                  be challenging for many Shibas due to their prey drive and independence, so off-leash freedom should
                  be limited to fully secure areas for most individuals.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Historically, Shiba Inus worked as hunting dogs in Japan, flushing game and navigating steep,
                  difficult terrain. While most modern Shibas live as companions, many of their original traits—alert
                  senses, quick reflexes, and strong prey drive—remain present. Their small size and adaptability make
                  them suitable for various modern roles when paired with the right handler:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Companion &amp; Watchdog:</strong> Most Shibas today are family companions. They are vigilant
                    and quick to alert their owners to unusual sights and sounds, acting as effective watchdogs.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Some Shibas participate in agility, rally, obedience, and trick
                    training. Success requires creative, reward-based training and an appreciation for the breed&apos;s
                    independent style.
                  </li>
                  <li>
                    <strong>Nosework &amp; Scent Games:</strong> Their keen noses can be channeled into scent-based
                    activities and sports, which provide excellent mental enrichment.
                  </li>
                  <li>
                    <strong>Therapy &amp; Emotional Support:</strong> A subset of Shibas with especially stable,
                    tolerant temperaments may work as therapy or emotional support dogs, though the breed as a whole is
                    generally more reserved than typical therapy breeds.
                  </li>
                  <li>
                    <strong>Urban &amp; Apartment Companions:</strong> With appropriate training, exercise, and mental
                    stimulation, Shibas can adapt well to city living, including apartments, making them popular in
                    dense urban environments.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Shiba Inus good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus can be excellent family companions in the right households. They are typically loyal and
                  affectionate with their own people, but many prefer not to be overly handled or fussed over. They may
                  be best suited to homes with older, respectful children rather than toddlers who might grab or climb.
                  Careful supervision, teaching children appropriate interactions, and providing the dog with safe
                  retreat spaces are important in any family with a Shiba.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Shiba Inu puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices depend on region, pedigree, and breeder practices. From responsible breeders who perform
                  health testing and raise puppies in a high-quality environment, Shiba Inu puppies often range from
                  around $1,500–$3,500 or more. Puppies from top show lines or with proven breeding may be higher.
                  Extremely low prices can signal poor breeding practices, lack of health testing, or scams—always
                  research breeders carefully and avoid impulse purchases.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Shiba Inus shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes. Shiba Inus are heavy seasonal shedders due to their dense double coat. They shed moderately
                  throughout the year and typically &quot;blow coat&quot; once or twice annually, releasing large
                  quantities of undercoat over a few weeks. Regular brushing helps manage loose fur and keeps the coat
                  healthy, but prospective owners should expect to see hair on clothing, furniture, and floors—especially
                  during shedding season.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Shiba Inus aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred, well-socialized Shiba Inus are not inherently aggressive, but they can be assertive,
                  opinionated, and intolerant of rude behavior from other dogs. Some Shibas are dog-selective and may
                  not enjoy busy dog parks. Early socialization, continued training, and responsible management are key
                  to preventing reactivity or resource guarding. Pain, fear, or poor handling can contribute to behavior
                  issues in any breed, so work closely with trainers and veterinarians if concerns arise.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Shiba Inus live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Shibas can adapt well to apartment living as long as their exercise and mental needs are met.
                  They are relatively small, generally quiet between barking episodes, and are typically clean indoors.
                  However, they still need daily walks, playtime, and enrichment. Secure doors, gates, and harnesses are
                  essential, as many Shibas are escape artists with strong prey drive and poor off-leash reliability.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between Japanese and American Shiba Inu lines?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus bred in Japan versus those bred in other countries (including the United States) may show
                  subtle differences in type, size, and emphasis on specific traits. Japanese lines often adhere very
                  closely to NIPPO standards and traditional aesthetics, while American and European lines may lean more
                  strongly toward AKC/FCI conformation preferences. Regardless of origin, reputable breeders prioritize
                  health, sound structure, and stable temperament. For most pet owners, choosing a responsible breeder
                  matters far more than the exact regional line.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Shiba Inu Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Owners who appreciate an independent, cat-like dog with a strong personality</li>
                  <li>People willing to invest in early and ongoing training, socialization, and enrichment</li>
                  <li>Families with older children or adults who understand respectful dog handling</li>
                  <li>
                    Individuals or couples seeking a moderately active companion for walks, hikes, and everyday urban
                    or suburban life
                  </li>
                  <li>Homes with secure fencing, gates, and careful management to prevent escapes</li>
                  <li>
                    Owners comfortable with shedding and regular grooming, especially during seasonal coat blow
                    periods
                  </li>
                  <li>
                    People who enjoy a dog with opinions, quirks, and expressive communication rather than a constantly
                    eager-to-please personality
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shiba Inus may not be ideal for first-time dog owners who prefer an easily trainable, highly
                  compliant breed, households that want a very cuddly or physically affectionate dog, or families
                  expecting a reliable off-leash companion. In the right home—one that values their independence and
                  invests in training—Shibas can be delightful, loyal, and endlessly entertaining companions.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Shiba Inu Breed Standard.&quot; akc.org</li>
                    <li>2. National Shiba Club of America (NSCA). &quot;Health &amp; Breed Information.&quot;</li>
                    <li>3. Nihon Ken Hozonkai (NIPPO). &quot;Japanese Native Breeds Overview.&quot;</li>
                    <li>4. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Shiba Inus.&quot;</li>
                    <li>5. Veterinary dermatology and nutrition resources on allergy management in small breeds.</li>
                    <li>6. AKC Canine Health Foundation. &quot;Inherited Eye Diseases in Purebred Dogs.&quot;</li>
                    <li>7. NSCA. &quot;Guidelines for Responsible Shiba Inu Breeders.&quot;</li>
                    <li>8. Various veterinary behavior resources on training independent and spitz-type breeds.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/shiba-inu" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
