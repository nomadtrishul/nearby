import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Beagle',
  slug: 'beagle',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764580313/pexels-dina-nasyrova-2006209-3764319_nfo68r.jpg',
  description: 'Friendly • Curious • Scent hounds • Sociable • Cheerful',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Beagle Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Beagle dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Beagle',
    'Beagle breed',
    'Beagle care',
    'Beagle temperament',
    'Beagle training',
    'Beagle health',
    'Beagle care guide',
    'AKC Beagle',
  ],
  pathname: '/pet-breeds/dogs/beagle',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Beagle Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Beagle"
        description="Beagles are cheerful, compact scent hounds known for their big personalities, soulful eyes, and powerful noses. Originally developed as pack hunters for hare and rabbit, they are outgoing, merry companions who thrive on company, sniffing adventures, and plenty of play. With patient training and enough exercise, they become affectionate family dogs that love being part of the action."
        emoji="🐶"
        slug="beagle"
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
                    The Beagle is a small to medium-sized scent hound known for its keen nose, friendly nature, and
                    playful energy. Bred to hunt in packs, Beagles were developed to track hare and other small game
                    using their impressive sense of smell and steady endurance. Today, they are cherished both as family
                    companions and as working detection dogs in airports and other environments where their noses shine.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Beagles consistently rank among the most popular dog
                    breeds in the United States. Their popularity comes from their compact size, generally easy-going
                    temperament, and adaptability to many types of homes. When given regular exercise, mental
                    stimulation, and patient training, Beagles make affectionate, fun-loving companions who enjoy
                    spending time with both people and other dogs.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles have a long history as hunting hounds in England, with roots going back several centuries.
                  They were developed from small scent hounds used to track hare and rabbit, prized for their ability to
                  follow a scent trail for hours without tiring. Their compact size, strong pack instinct, and clear,
                  musical voices made them excellent partners for hunters traveling on foot.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The modern Beagle type was refined in the 19th century in Great Britain and later brought to North
                  America, where the breed continued to gain popularity as both a hunting dog and a companion. The AKC
                  officially recognized the Beagle in 1885, and the National Beagle Club of America serves as the parent
                  club. Today, Beagles remain popular as field dogs, companions, and detection dogs used by government
                  agencies for their outstanding scenting abilities.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles are sturdy, solidly built hounds with a slightly longer-than-tall outline and a smooth,
                  effortless gait. According to the AKC breed standard, they should appear balanced and athletic, with a
                  level back, deep chest, and well-sprung ribs that support their endurance in the field. Their gentle
                  expression, large brown or hazel eyes, and low-set, long ears give them a soft, appealing look that
                  many people find irresistible.
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
                          13–15 inches (at shoulder)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          13–15 inches (at shoulder)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–30 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–28 pounds
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
                          12–15 years
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
                          Short, dense, weather-resistant double coat; lies close to the body
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
                          Tri-color (black, tan &amp; white), lemon &amp; white, red &amp; white, chocolate tri,
                          blue-tick and red-tick patterns
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Beagles have a slightly domed skull, a straight, square muzzle
                  with a black (or dark) nose, and strong jaws. Their long, low-set ears reach nearly to the end of the
                  nose when gently extended and help funnel scent toward the nose. The tail is moderately long, set
                  high, and carried gaily with a white tip that makes it easier to see in tall grass. Their smooth,
                  ground-covering gait reflects their heritage as tireless hunting companions.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles are known for their merry, outgoing personalities. They are typically friendly with people
                  and other dogs, thanks to their background as pack hounds. Most Beagles love attention, play, and
                  companionship, and many enjoy cuddling with their families after an active day. They are curious,
                  food-motivated, and always interested in new scents and experiences.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While affectionate and sociable, Beagles can also be independent and stubborn. Their strong scent
                  drive often takes priority over everything else, which can make recall and off-leash reliability a
                  challenge if not carefully trained. They can be vocal—barking, baying, or howling—especially when
                  bored, lonely, or when they catch an intriguing scent. Early training and consistent boundaries help
                  keep their voices and enthusiasm manageable in a home setting.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Because Beagles were bred to work in packs, they generally dislike being left alone for long periods.
                  Without enough company and enrichment, they may develop nuisance behaviors such as barking, digging,
                  escaping, or chewing. They thrive in homes where they can be part of daily activities, receive
                  regular interaction, and have structured outlets for their energy and instincts.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As active scent hounds, Beagles need regular daily exercise and opportunities to use their noses.
                  While they are not as intense as some herding or working breeds, they are far from couch potatoes.
                  Without enough walks, play, and sniffing time, Beagles can become restless, vocal, and destructive.
                  Exercise needs vary by age and individual, but most Beagles do best with a mix of physical and mental
                  activity every day.
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
                          Short leash walks, gentle play, basic obedience, controlled sniff walks, socialization
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1–1.5 hours total (split into sessions)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, hiking, supervised off-leash play in secure areas, scent games, tracking, fetch,
                          structured obedience
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–45 minutes
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, slow sniffing strolls, light play, low-impact games, food puzzles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Beagles thrive when they can use their noses and problem-solving
                  skills. Incorporate scent work, food puzzles, hide-and-seek games, tracking activities, and basic
                  training into their daily routine. Many Beagles enjoy sports such as nosework, tracking trials, rally,
                  and agility (with proper safety and conditioning), which allow them to think, move, and sniff all at
                  once.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles have a short, dense double coat that is relatively low-maintenance compared to many breeds.
                  They do shed year-round, with heavier seasonal shedding in the spring and fall. Regular brushing helps
                  remove loose hair, distribute skin oils, and keep the coat healthy. Their floppy ears, however,
                  require consistent monitoring and cleaning to help prevent ear infections.
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
                          Rubber curry brush or grooming mitt; helps remove loose hair and dirt
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (shedding season)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Several times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Slicker brush or de-shedding tool; short, gentle sessions
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 6–8 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog-specific shampoo; avoid over-bathing to prevent dry skin
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Nail trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 3–4 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Trim or grind; nails should not click loudly on hard floors
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
                          Veterinary ear cleaner, cotton balls; watch for redness, odor, or discharge in floppy ears
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
                          Dog toothbrush and toothpaste; dental chews or rinses as recommended by your vet
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
                  Proper nutrition is essential to support the Beagle&apos;s active lifestyle and maintain a healthy
                  weight. Beagles are medium-sized hounds with hearty appetites and a strong tendency to overeat if
                  given the chance. High-quality diets that prioritize animal-based proteins and appropriate fat levels,
                  combined with portion control, help keep Beagles lean and fit.
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
                          Varies by age/weight; follow vet and food label guidance
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
                          ~1–2 cups (split into meals), adjusted for weight, age, and activity level
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
                          ~2–2.5 cups, adjusted for workload and body condition
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
                          1–1.5 cups, tailored to activity level and weight management
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
                  proteins (such as chicken, turkey, beef, lamb, or fish) as the first ingredient. Because Beagles are
                  prone to obesity, carefully measure meals, limit table scraps, and use healthy, low-calorie treats.
                  Omega-3 and Omega-6 fatty acids support skin, coat, and joint health. Some dogs may benefit from joint
                  supplements and digestive support; work with your veterinarian to choose the best options for your
                  individual Beagle.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat &amp; Digestive Health:</strong> While Beagles are not classic deep-chested breeds, any
                  dog can potentially develop gastric issues. Feeding measured portions, avoiding rapid gulping of food
                  (slow-feeder bowls can help), and limiting vigorous activity immediately before and after meals
                  support overall digestive health. Always seek veterinary care right away if you notice signs of severe
                  abdominal discomfort, unproductive retching, or distress.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles are generally robust, hardy dogs, but like all purebred breeds, they are predisposed to
                  certain inherited and breed-related health conditions. Responsible breeders use health testing and
                  careful selection to reduce the risk of these issues. Prospective owners should be familiar with
                  common health concerns and request documentation of health clearances for the parents of any puppy
                  they are considering.
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
                          Moderate breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal hip joint development that can lead to arthritis, pain, and reduced mobility
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Intervertebral Disc Disease (IVDD)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized concern in some hounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degeneration or herniation of spinal discs that may cause pain, weakness, or neurologic signs
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear Infections (Otitis)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common due to floppy ears
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Inflammation and infection of the ear canal, often related to moisture, allergies, or wax
                          buildup
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Epilepsy
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seizure disorder that may have a hereditary component in certain lines
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Autoimmune Thyroiditis / Hypothyroidism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk in Beagles
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thyroid gland disease that can cause lethargy, weight gain, and coat or skin changes
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Eye Conditions (e.g., glaucoma, cataracts)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Various inherited or acquired eye diseases that may affect comfort and vision
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Obesity
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common if diet &amp; exercise are not managed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Excess body weight that increases the risk of joint disease, diabetes, and other health
                          problems
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and National Beagle Club of America recommend specific health testing for breeding dogs.
                  Always request copies of official health clearances when purchasing a puppy from a breeder:
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
                          Screen for hip dysplasia and assess joint quality
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ophthalmologist Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ACVO/OFA Eye Certification
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for hereditary eye diseases such as cataracts or glaucoma
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          MLS DNA Test (Musladin-Lueke Syndrome)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify carriers or affected dogs for this inherited connective tissue disorder
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
                          Cardiac Evaluation (as recommended)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for congenital or hereditary heart disease
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
                  Beagles are intelligent and highly food-motivated, but they also have an independent streak and a
                  nose-first way of looking at the world. They learn quickly when properly motivated, yet their strong
                  scent drive can make them easily distracted by smells. Consistent, reward-based training is key to
                  building good manners and reliability, especially for recall and loose-leash walking.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Expose your Beagle puppy to a wide variety of people, friendly dogs, environments,
                  surfaces, and sounds in a controlled, positive way. This helps prevent fearfulness and builds a
                  confident, adaptable adult dog who can handle busy households, parks, and new situations with ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods with small, tasty treats tend to
                  work best for Beagles. Keep sessions short, upbeat, and fun, and be patient when they pause to sniff.
                  Harsh corrections or punishment can damage trust and may make some Beagles shut down—or simply ignore
                  you in favor of more interesting scents. Focus on building strong foundations in recall, leash skills,
                  impulse control, and calm behavior around exciting smells and wildlife.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy kindergarten, basic manners classes, and
                  programs like AKC S.T.A.R. Puppy and Canine Good Citizen (CGC) provide great structure. Many Beagles
                  enjoy nosework, tracking, rally, and agility (with appropriate training), which give them productive
                  outlets for their energy and instincts. Games that incorporate sniffing and searching are especially
                  satisfying for this breed.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles were first and foremost bred as scent hounds, and that heritage still defines much of what
                  they do best today. Their extraordinary sense of smell, persistence, and compact, agile bodies make
                  them well suited to a range of roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Hunting Companions:</strong> Beagles remain popular for rabbit and hare hunting, working in
                    packs to follow scent trails with determination and enthusiasm.
                  </li>
                  <li>
                    <strong>Detection Dogs:</strong> Beagles are commonly used in scent-detection work, including
                    agriculture inspection dogs in airports, where their friendly appearance and keen noses are major
                    assets.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Many Beagles participate in sports such as nosework, tracking, rally,
                    agility, and obedience, where their combination of nose, energy, and personality can shine.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> Their gentle nature and affectionate temperament can
                    make Beagles good candidates for therapy dog work when they are well trained and have stable,
                    confident personalities.
                  </li>
                  <li>
                    <strong>Family Companions:</strong> For most owners, a Beagle&apos;s primary role is that of a fun,
                    loving family member who joins in on walks, play sessions, road trips, and everyday life.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Beagles good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Beagles can be excellent family dogs. They are usually friendly, playful, and affectionate with
                  children and adults alike. Their sturdy build and cheerful attitude make them fun companions for
                  active families. However, they do best with supervision around young children, consistent training,
                  and enough exercise to prevent boredom and mischief. Families should also be prepared for some
                  barking, baying, and a strong curiosity about food.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Beagle puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing and raise puppies in a high-quality environment, Beagle puppies often range from around
                  $800–$2,000 or more. Puppies from proven field or show lines may be higher. Be cautious of unusually
                  low prices, which can be a red flag for poor breeding practices, lack of health testing, or
                  large-scale commercial breeding operations.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Beagles shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles have short coats, but they do shed. Shedding is moderate year-round, with heavier seasonal
                  shedding once or twice per year. Regular brushing helps remove loose hair and keep the coat in good
                  condition. Prospective owners should be comfortable with some dog hair on clothes and surfaces, even
                  though the coat is relatively low-maintenance compared to many longer-haired breeds.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Beagles aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles are not typically aggressive. Well-bred, well-socialized Beagles are generally friendly,
                  gentle, and sociable with people and other dogs. They may be vocal or stubborn, but outright
                  aggression is not a normal Beagle trait. As with any breed, poor socialization, fear, pain, or harsh
                  handling can contribute to behavior problems, so positive training and early exposure to different
                  environments are important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Beagles live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles can live in apartments as long as their exercise, mental stimulation, and social needs are
                  consistently met. They require daily walks, sniffing time, and interactive play, as well as training
                  to manage barking. Because Beagles can be vocal, it is important to work on quiet cues and provide
                  plenty of enrichment to reduce nuisance noise. Responsible management and committed owners are more
                  important than square footage alone.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Beagles easy to train?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles are smart and highly food-motivated, which can make them fun to train. However, their
                  independent nature and strong scent drive mean they may not respond as quickly or consistently as some
                  more biddable breeds. Short, positive sessions, great rewards, and patience are key. Many Beagles can
                  achieve excellent manners and even advanced titles in sports when their owners understand how to work
                  with their hound instincts instead of against them.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Beagle Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Individuals or families who enjoy daily walks and outdoor activities</li>
                  <li>Owners who can provide at least 1–1.5 hours of physical and mental exercise most days</li>
                  <li>People who appreciate a sociable, people- and dog-friendly breed</li>
                  <li>
                    Those who don&apos;t mind some barking or baying and are willing to train appropriate vocal
                    behavior
                  </li>
                  <li>Homes with securely fenced yards or safe areas for on-leash sniffing adventures</li>
                  <li>Owners committed to positive, consistent training and managing a strong food and scent drive</li>
                  <li>People comfortable with moderate shedding and routine grooming and ear care</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Beagles may not be ideal for people who prefer very quiet dogs, those who are away from home for long
                  hours most days, or owners who want an off-leash companion without extensive training and management.
                  Without enough exercise, companionship, and structure, a Beagle&apos;s curiosity, voice, and clever
                  nose can quickly lead to mischief.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Beagle Breed Standard.&quot; akc.org</li>
                    <li>2. National Beagle Club of America. &quot;Health &amp; Breed Information.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Beagles.&quot;</li>
                    <li>4. AKC Canine Health Foundation. &quot;Inherited Conditions in Hound Breeds.&quot;</li>
                    <li>5. Veterinary behavior and nutrition resources on scent-hound management and feeding.</li>
                    <li>6. Various veterinary dermatology and otology resources on ear care in floppy-eared breeds.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/beagle" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
