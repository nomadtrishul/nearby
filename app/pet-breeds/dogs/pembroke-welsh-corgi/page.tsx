import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Pembroke Welsh Corgi',
  slug: 'pembroke-welsh-corgi',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764697602/pexels-tatiana-lm-360892-976923_jw5945.jpg',
  description: 'Alert • Affectionate • Herding dog • Compact • Big personality',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pembroke Welsh Corgi Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Pembroke Welsh Corgi dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this iconic herding companion.',
  keywords: [
    'Pembroke Welsh Corgi',
    'Corgi breed',
    'Pembroke Welsh Corgi care',
    'Pembroke Welsh Corgi temperament',
    'Pembroke Welsh Corgi training',
    'Pembroke Welsh Corgi health',
    'Corgi care guide',
    'AKC Pembroke Welsh Corgi',
  ],
  pathname: '/pet-breeds/dogs/pembroke-welsh-corgi',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pembroke Welsh Corgi Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function PembrokeWelshCorgiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Pembroke Welsh Corgi"
        description="Pembroke Welsh Corgis are cheerful, bold, and bright little herding dogs with big personalities. Originally developed in Wales to drive cattle, they’re now beloved worldwide as affectionate family companions and entertaining housemates. With their trademark long body, short legs, and foxy expression, Corgis combine intelligence, humor, and loyalty in a compact package."
        emoji="🐶"
        slug="pembroke-welsh-corgi"
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
                    The Pembroke Welsh Corgi is a small, sturdy herding breed known for its low-set body, expressive
                    face, and lively, outgoing nature. Bred to drive cattle by nipping at their heels and dodging kicks,
                    Pembrokes are surprisingly athletic and agile despite their short legs. Today, they are just as
                    famous for being charming companions as they are for their farm-dog roots.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Pembroke Welsh Corgis rank among the most popular
                    herding breeds. Their popularity comes from their affectionate temperament, bright intelligence, and
                    adaptability to many lifestyles. When given appropriate exercise, training, and mental enrichment,
                    Corgis make devoted family pets, entertaining house dogs, and enthusiastic partners in dog sports
                    such as agility, rally, obedience, and herding trials.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Pembroke Welsh Corgi originated in Pembrokeshire, Wales, where they were developed as
                  multipurpose farm dogs. Their primary job was to drive cattle to and from pasture, keeping livestock
                  moving by nipping at their heels and quickly darting out of the way. Their low stature made them
                  ideal for working close to the ground and staying clear of kicking hooves.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The breed&apos;s ancestry likely includes old herding dogs brought to Wales by Flemish weavers and
                  other settlers. Over centuries, Welsh farmers refined these dogs into the quick, bold heelers we know
                  today. Pembroke Welsh Corgis gained international fame in the 20th century thanks in part to their
                  association with the British royal family—Queen Elizabeth II owned and adored Corgis for decades. The
                  AKC recognized the Pembroke Welsh Corgi in 1934 as a breed distinct from the Cardigan Welsh Corgi.
                  Today, Pembrokes are cherished worldwide as farm helpers, performance dogs, and family companions.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis are small, low-set dogs with a long, level topline and substantial bone for
                  their size. According to the AKC breed standard, they should appear strong and sturdy rather than
                  delicate, with an efficient, ground-covering gait and no hint of clumsiness. Their prick ears, foxy
                  head, and bright expression give them an alert, intelligent look that many people find irresistible.
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
                          10–12 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–12 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          27–30 pounds (ideal range)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          24–28 pounds (ideal range)
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
                          12–13 years (often longer with good care)
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
                          Medium-length, weather-resistant double coat; straight and dense with a softer undercoat
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
                          Red, sable, fawn, black and tan; all with or without white markings on legs, chest, neck, and
                          muzzle
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Pembroke Welsh Corgis have a fox-like head with a fairly broad
                  skull, moderate stop, and a tapered muzzle. Their eyes are medium-sized, oval, and dark, conveying a
                  keen, friendly expression. Ears are erect, of medium size, and slightly rounded at the tips. Historically,
                  tails in Pembrokes were docked very short where legal; in many regions now, Corgis retain a natural
                  tail that is carried in line with the back when moving. Their free, easy gait should show good reach
                  and drive without rolling or shuffling.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis are bright, confident, and eager to be involved in everything their people are
                  doing. They are quick learners with strong problem-solving skills and a mischievous streak, which
                  makes them entertaining companions but also means they benefit from clear rules and consistent
                  training. Many Corgis have a &quot;big dog&quot; attitude in a small body.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Corgis tend to be affectionate and loyal with their families and often enjoy being in the center of
                  household activity. They are naturally alert and may be reserved or cautious with strangers, making
                  them good little watchdogs who will readily bark at unusual sights or sounds. Early socialization
                  helps keep their curiosity and boldness balanced with appropriate manners and confidence in new
                  situations.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Herding instincts may show up as heel-nipping, chasing, and circling, especially around running
                  children or fast-moving animals. Teaching impulse control, reinforcing calm behavior, and redirecting
                  herding behaviors into games and structured activities are important. Corgis thrive on time with their
                  people and usually dislike being left out of family life.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a herding breed, Pembroke Welsh Corgis are more active than many dogs of similar size, but they do
                  not require the same intensity of exercise as some high-drive working breeds. They need daily walks,
                  play, and mental challenges to stay fit and well-behaved. Because of their long backs and short legs,
                  it&apos;s important to balance activity with joint and spine protection—avoiding repeated high-impact
                  jumping and excessive stairs.
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
                          5 minutes per month of age, 2x daily (avoiding high-impact exercise)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, gentle play on non-slippery surfaces, basic obedience, socialization, puzzle
                          toys
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1–7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–60 minutes total, split into sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, controlled fetch, low-impact agility, herding lessons, scent games, training
                          sessions
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–40 minutes, adjusted for mobility and health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, swimming if available, light play, nosework, food puzzles, simple trick training
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Corgis are clever and often food-motivated, making them excellent
                  candidates for training games and brain work. Include interactive feeders, trick training, nosework,
                  scent-based games, and low-impact dog sports in their routine. Many Pembroke Welsh Corgis excel in
                  agility, rally, obedience, herding trials, and other activities that challenge both mind and body.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis have a dense, weather-resistant double coat designed to protect them outdoors.
                  They shed moderately throughout the year and experience heavier seasonal shedding when they &quot;blow&quot;
                  their undercoat, usually in spring and fall. Regular grooming helps control loose hair, keeps the skin
                  and coat healthy, and allows you to monitor for lumps, bumps, or skin changes.
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
                          2–3 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Slicker brush and undercoat rake; focus on pants, chest, and around the neck
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (shedding season)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily or every other day
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Undercoat rake, de-shedding tool, thorough line brushing to remove loose undercoat
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–8 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog-specific shampoo and conditioner; rinse thoroughly to avoid residue in dense coat
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Nail trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 2–3 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Trim or grind; nails should not click loudly on hard floors or splay the toes
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
                          Veterinary ear cleaner, cotton balls; monitor for redness, debris, or odor
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
                          Dog toothbrush and toothpaste; add dental chews, gels, or rinses as recommended by your vet
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
                  Proper nutrition is critical to support the Pembroke Welsh Corgi&apos;s active mind, sturdy frame,
                  and long-term joint and spinal health. Corgis are small-to-medium dogs with a strong tendency toward
                  weight gain if overfed or under-exercised. Maintaining a lean, fit body condition is one of the most
                  important ways to help protect them from back problems and arthritis.
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
                          22–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–15%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by age/weight; follow vet and food label guidance for small–medium breeds
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
                          ~1–1.5 cups (split into meals), adjusted for weight, build, and activity level
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
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~1.5–2 cups, adjusted for workload and body condition
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
                  <strong>Essential Nutritional Considerations:</strong> Choose high-quality formulas that list animal
                  protein (such as chicken, turkey, beef, lamb, or fish) as the first ingredient. Omega-3 and Omega-6
                  fatty acids support skin, coat, and joint health—important for a dense-coated, long-backed breed.
                  Because Pembroke Welsh Corgis are prone to obesity and related back and joint issues, monitor weight
                  closely, limit high-calorie treats, and discuss any supplements (such as joint support) with your
                  veterinarian.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat & Digestive Health:</strong> While Pembroke Welsh Corgis are not among the breeds most
                  strongly associated with gastric dilatation-volvulus (GDV or bloat), any dog can be affected. Feed
                  measured portions, divide daily food into two or more meals, avoid rapid gulping of food (slow-feeder
                  bowls can help), and limit vigorous exercise for about an hour before and after meals. Always seek
                  emergency veterinary care immediately if you suspect bloat or severe abdominal distress.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis are generally robust dogs, but like all purebred breeds, they are predisposed
                  to certain inherited conditions. Responsible breeders use health testing, pedigree research, and
                  thoughtful pairings to help reduce the incidence of these issues. Prospective owners should be
                  familiar with common health concerns and ask breeders for documentation of health clearances on both
                  parents.
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
                          Recognized breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal hip joint development that can lead to pain, arthritis, and reduced mobility,
                          especially if combined with excess weight
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative Myelopathy (DM)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable genetic concern in Corgis
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Progressive spinal cord disease in older dogs, causing hind-end weakness and paralysis; DNA
                          testing for at-risk genotypes is available
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Intervertebral Disc Disease (IVDD)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Increased risk due to long back
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Disc degeneration in the spine that can cause pain, neurologic deficits, or paralysis; weight
                          control and careful handling are important preventive measures
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
                          Includes cataracts, Progressive Retinal Atrophy (PRA), and other inherited eye issues that
                          can affect vision
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          von Willebrand&apos;s Disease (vWD)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented genetic condition
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Inherited bleeding disorder caused by reduced clotting ability; DNA testing is available to
                          identify affected or carrier dogs
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Autoimmune Thyroiditis / Hypothyroidism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Immune-mediated thyroid disease that can lead to lethargy, weight gain, and coat changes;
                          diagnosed with blood tests and managed with medication
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and the Pembroke Welsh Corgi Club of America (PWCCA) encourage health testing for breeding
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
                          Screen for hip dysplasia and assess hip joint quality
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
                          Screen for elbow abnormalities that may contribute to lameness
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
                          Screen for hereditary eye diseases such as PRA and cataracts
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative Myelopathy (DM) DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify dogs clear, carriers, or at risk for DM so at-risk pairings can be avoided
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          von Willebrand&apos;s Disease (vWD) DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect genetic mutations associated with inherited bleeding disorders
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
                          Screen for autoimmune thyroiditis and hypothyroidism that may impact overall health and
                          fertility
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
                  Pembroke Welsh Corgis are highly trainable thanks to their intelligence, food motivation, and desire
                  to interact with their people. They tend to pick up new cues quickly and often excel at multi-step
                  behaviors and trick training. At the same time, many Corgis are independent thinkers with a sense of
                  humor, so consistency and clear boundaries are essential.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization early, ideally between 3–14 weeks of age.
                  Expose your Corgi puppy to a variety of people, friendly dogs, controlled environments, sounds, and
                  handling experiences. Positive exposure during this sensitive period helps prevent fearfulness and
                  supports a confident adult dog that can navigate busy households, travel, and public spaces calmly.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement techniques work best for Corgis. Use
                  treats, toys, praise, and play to reward desired behaviors. Avoid harsh corrections or heavy-handed
                  methods, which can damage trust or lead to stubbornness. Short, upbeat training sessions help prevent
                  boredom, and incorporating problem-solving games keeps their active minds satisfied.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy and Canine Good Citizen
                  (CGC) as foundations for good manners and reliability. Many Pembroke Welsh Corgis thrive in agility,
                  rally, competitive obedience, herding, trick dog programs, and nosework. These outlets give them a
                  constructive way to use their energy and intelligence.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis were bred as working farm dogs, and many still retain strong instincts and
                  athletic ability. Their intelligence, alertness, and adaptability also allow them to succeed in a
                  variety of modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Herding & Farm Work:</strong> Some Pembrokes still work cattle, sheep, or other livestock,
                    using their low profile and quick reflexes to move stock efficiently.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Corgis are popular competitors in agility, rally, obedience, flyball,
                    and herding trials, where their speed, drive, and enthusiasm shine.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> Their friendly, engaging nature and convenient size
                    can make them excellent therapy dogs when they have a stable temperament and good manners.
                  </li>
                  <li>
                    <strong>Detection & Nosework:</strong> Many Corgis enjoy nosework and scent-based activities,
                    benefiting from tasks that encourage them to use their keen sense of smell.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For most owners, a Corgi&apos;s main role is as a beloved
                    family member—joining walks, trips, games with the kids, and everyday household adventures.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Pembroke Welsh Corgis good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Pembroke Welsh Corgis can be wonderful family dogs when their needs are met. They are typically
                  affectionate, playful, and eager to be involved with their people. Many Corgis get along well with
                  respectful children, though their herding instincts may lead them to chase or nip at running kids.
                  Teaching children to interact appropriately and training the dog to control herding behaviors are
                  important for harmony in the home.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Pembroke Welsh Corgi puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, breeder reputation, pedigree, and whether the puppy is intended for companion,
                  performance, or show homes. From ethical breeders who complete health testing and raise puppies in a
                  high-quality environment, Pembroke Welsh Corgi puppies often range from around $1,000–$3,000 or more.
                  Puppies from top show or performance lines may be higher. Be cautious of unusually low prices or
                  breeders who cannot provide health clearances or detailed information about their dogs.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Pembroke Welsh Corgis shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Pembroke Welsh Corgis are heavy seasonal shedders and moderate shedders the rest of the year.
                  They have a thick double coat that &quot;blows&quot; once or twice a year, during which significant
                  amounts of undercoat come out. Regular brushing—several times per week, and more frequently during
                  shedding seasons—helps manage hair and keep the coat healthy. Prospective owners should be prepared
                  for dog hair on clothes and furniture.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Pembroke Welsh Corgis aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis are not inherently aggressive. Well-bred, well-socialized Corgis are typically
                  confident, friendly, and responsive to their owners. They can be vocal and may be wary of strangers,
                  but outright aggression is not typical of the breed standard. Poor socialization, pain, fear, or
                  mishandling can contribute to behavior issues in any dog, so early positive training and appropriate
                  management are important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Pembroke Welsh Corgis live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Pembroke Welsh Corgis can adapt well to apartment living as long as their exercise, mental
                  stimulation, and potty needs are consistently met. They require daily walks, playtime, and training,
                  and they can be vocal watchdogs, so teaching a &quot;quiet&quot; cue is helpful. Using ramps or
                  limiting stair use can help protect their backs in multi-story homes. Lifestyle and owner commitment
                  matter more than square footage alone.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between Pembroke and Cardigan Welsh Corgis?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke and Cardigan Welsh Corgis are distinct breeds with different histories. Pembrokes are
                  slightly smaller, with a more fox-like head and, traditionally, a shorter tail (naturally or docked
                  where legal). Cardigans are generally a bit larger, with a heavier bone structure, rounded ears, and
                  long, full tails. Both are intelligent herding dogs, but individual temperament can vary by breeding
                  and upbringing more than by breed alone. If you are unsure which Corgi type fits you best, meet both
                  breeds in person and talk with reputable breeders.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Pembroke Welsh Corgi Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Individuals or families who enjoy daily walks and interactive playtime</li>
                  <li>Owners who can provide consistent training, boundaries, and mental enrichment</li>
                  <li>
                    People who appreciate an intelligent, slightly opinionated dog with a sense of humor and a big
                    personality
                  </li>
                  <li>Homes that are okay with barking and can work on teaching polite alert behavior</li>
                  <li>
                    Owners committed to keeping their dog lean through portion control, appropriate treats, and regular
                    activity
                  </li>
                  <li>
                    People comfortable managing seasonal shedding and maintaining a regular grooming routine
                  </li>
                  <li>
                    Environments where jumping off high furniture and frequent stairs can be minimized to protect the
                    dog&apos;s back
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pembroke Welsh Corgis may not be ideal for families who want a very low-energy or completely
                  independent dog, owners who are away from home most of the day without arranging care, or those who
                  are very sensitive to barking and shedding. When their exercise, training, and social needs are met,
                  Corgis are charming, loyal companions that bring a lot of personality into a relatively small body.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Pembroke Welsh Corgi Breed Standard.&quot; akc.org</li>
                    <li>
                      2. Pembroke Welsh Corgi Club of America (PWCCA). &quot;Health, Genetics &amp; Breed Information.&quot;
                    </li>
                    <li>
                      3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Pembroke Welsh Corgis.&quot;
                    </li>
                    <li>
                      4. AKC Canine Health Foundation. &quot;Degenerative Myelopathy and Genetic Testing in Dogs.&quot;
                    </li>
                    <li>
                      5. Veterinary ophthalmology resources on hereditary eye diseases in herding and small breeds.
                    </li>
                    <li>
                      6. Veterinary internal medicine resources on von Willebrand&apos;s disease and inherited bleeding
                      disorders.
                    </li>
                    <li>
                      7. General veterinary nutrition references on feeding small–medium active breeds and weight
                      management.
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/pembroke-welsh-corgi" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
