import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Boxer',
  slug: 'boxer',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764593083/pexels-bob-jenkin-2007649943-32419163_rudmha.jpg',
  description: 'Playful • Loyal • Energetic • Watchful • Family guardian',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Boxer Dog Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Boxer dogs based on AKC standards. Learn about Boxer characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this playful, protective family guardian.',
  keywords: [
    'Boxer',
    'Boxer dog',
    'Boxer breed',
    'Boxer care',
    'Boxer temperament',
    'Boxer training',
    'Boxer health',
    'Boxer care guide',
    'AKC Boxer',
  ],
  pathname: '/pet-breeds/dogs/boxer',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Boxer Dog Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Boxer"
        description="Boxers are medium to large working dogs known for their expressive faces, athletic bodies, and joyful, clownish personalities. Originally developed in Germany as versatile hunting and guard dogs, they are now beloved as playful, loyal family companions and vigilant watchdogs. With the right training, structure, and exercise, Boxers are affectionate, people-oriented dogs who thrive when they can stay close to their families."
        emoji="🐶"
        slug="boxer"
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
                    The Boxer is a medium-to-large, athletic working breed known for its square build, alert expression,
                    and boundless enthusiasm. Bred originally in Germany from powerful mastiff-type dogs, Boxers were
                    used for hunting large game, guarding property, and serving as all-purpose working dogs. Today,
                    they’re most famous as affectionate, fun-loving companions with a natural instinct to watch over
                    their home and family.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Boxers have long ranked among the most popular dog
                    breeds in the United States thanks to their playful nature, loyalty, and adaptability to active
                    family life. When given consistent training, plenty of exercise, and daily companionship, Boxers
                    typically grow into exuberant yet well-mannered dogs that excel as watchdogs, sport partners, and
                    devoted family members.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Boxer&apos;s roots trace back to 19th-century Germany, where breeders developed the modern Boxer
                  from the now-extinct Bullenbeisser (a large hunting dog) crossed with early English-type Bulldogs and
                  other mastiff-type dogs. These ancestors were used to hold large game such as boar and bear, as well
                  as to guard estates and farms. Over time, breeders refined the Boxer into a more agile, square-built,
                  and trainable dog with a distinctive head and undershot jaw.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In the early 20th century, Boxers served as messenger, pack, and guard dogs during wartime, which
                  helped demonstrate their intelligence, courage, and versatility. The AKC recognized the Boxer in 1904,
                  and the American Boxer Club was founded shortly thereafter as the breed’s parent club in the United
                  States. Today, Boxers remain popular as family companions, show dogs, and competitors in obedience,
                  agility, and other canine sports, while still retaining their heritage as reliable watchdogs.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers are strong, squarely built dogs with a deep chest, powerful hindquarters, and a short, tight
                  coat. The AKC breed standard describes them as medium to large in size, with a balanced outline and
                  proud, noble carriage. Their characteristic broad muzzle, undershot jaw, and expressive eyes give them
                  a unique, alert, and often comical appearance. Despite their muscular build, Boxers should move with
                  effortless, agile strides that reflect their working heritage.
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
                          23–25 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          21.5–23.5 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          65–80 pounds (varies by build)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          50–65 pounds (varies by build)
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
                          10–12 years (on average)
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
                          Short, smooth, tight-fitting coat; lies close to the body
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
                          Fawn or brindle, typically with a black mask; may have white markings (flashy or plain)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Boxers have a distinct head with a broad, blunt muzzle and
                  pronounced stop, along with an undershot jaw that gives them their characteristic expression. Their
                  dark, soulful eyes and high-set ears (cropped or natural, depending on regional practices) contribute
                  to their alert, inquisitive look. The body is compact and powerful with a deep chest and well-muscled
                  hindquarters. Because of their short muzzle (brachycephalic structure), Boxers can be sensitive to
                  heat and should not be overexerted in hot, humid weather.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers are often described as “eternal puppies” because many retain a playful, clownish attitude well
                  into adulthood. They are energetic, outgoing, and typically very people-focused. When well-bred and
                  socialized, Boxers are affectionate with their families and usually enjoy being right where the action
                  is—whether that&apos;s playing in the yard, going on a jog, or lounging at your feet after a busy day.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  This breed also has a natural protective instinct. Boxers tend to be alert, watchful, and ready to
                  sound the alarm if something seems off. They may be wary of unfamiliar people at first but are
                  generally friendly and accepting once properly introduced. Early, positive socialization helps ensure
                  that their protective nature stays balanced and confident rather than fearful or overreactive.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Because Boxers are strong, athletic dogs with a lot of enthusiasm, they can be boisterous if not
                  taught good manners. Jumping up, rough play, and pulling on leash are common early challenges.
                  Consistent training, clear boundaries, and appropriate outlets for their energy are essential. When
                  given guidance and attention, Boxers become charming companions with a great sense of humor and deep
                  loyalty to their families.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers are high-energy working dogs that require daily exercise and mental engagement to stay fit and
                  well-behaved. Without enough activity, they can develop nuisance behaviors such as hyperactivity,
                  chewing, digging, or excessive barking. At the same time, their brachycephalic structure means owners
                  must be thoughtful about exercising them safely, especially in hot weather—avoiding intense activity
                  during the heat of the day and monitoring for signs of overheating.
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
                          5 minutes per month of age, 2x daily (structured activity)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, gentle play, basic obedience, socialization, controlled meet-and-greets; avoid
                          forced running or jumping on hard surfaces
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          60–90 minutes total, broken into sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, jogging in cool weather, fetch, structured play, obedience training, agility,
                          scent games, flirt pole play, and interactive toys
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes, adjusted for health and mobility
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, light play, low-impact games, food puzzles, sniff walks, and short training
                          sessions to keep the mind sharp
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> In addition to physical outlets, Boxers benefit greatly from mental
                  challenges. Incorporate puzzle feeders, trick training, nosework, short obedience sessions, and
                  interactive play into their daily routine. Many Boxers enjoy agility, rally, obedience, and other
                  structured activities that allow them to use both their brains and their bodies in partnership with
                  their owners.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers have a short, smooth coat that lies close to the body and is relatively low-maintenance
                  compared to many longer-coated breeds. They do shed year-round, with periods of heavier seasonal
                  shedding, but regular brushing helps keep loose hair under control and supports healthy skin. Routine
                  care such as nail trimming, ear checks, and dental hygiene remain important parts of their grooming
                  schedule.
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
                          Rubber curry brush or grooming mitt to remove loose hair and stimulate the skin
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
                          Rubber curry brush or de-shedding tool; short, frequent sessions can be helpful
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
                          Gentle dog-specific shampoo; avoid overbathing to prevent dry skin
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
                          Use clippers or a grinder; nails should not click loudly on hard floors
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
                          Veterinary ear cleaner and cotton balls; watch for redness, odor, or discharge
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
                          Dog toothbrush and toothpaste; consider dental chews or water additives as recommended by your
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
                  Proper nutrition is essential to support the Boxer&apos;s muscular build, energetic nature, and long-
                  term health. As athletic, medium-to-large working dogs, Boxers typically do best on high-quality diets
                  that prioritize animal-based protein, appropriate fat levels, and balanced vitamins and minerals.
                  Always consult your veterinarian to tailor feeding to your individual dog’s age, activity level, and
                  health status.
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
                          10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by age/weight; follow veterinary guidance and food label recommendations for large
                          breeds
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
                          ~2–3.5 cups (split into meals), adjusted for body condition and activity
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
                          ~3–4 cups or more, tailored to workload and monitored with regular body condition checks
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
                          1.5–3 cups, adjusted for reduced activity, muscle maintenance, and any medical needs
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
                  proteins (such as chicken, beef, lamb, or fish) as the first ingredient. Omega-3 and Omega-6 fatty
                  acids support healthy skin, coat, and joint function, which is especially important for active,
                  muscular dogs like Boxers. Some individuals may benefit from joint supplements or cardiac-supportive
                  formulations—your veterinarian can guide you based on your dog&apos;s risk factors and health
                  screenings.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat & Digestive Care:</strong> Boxers are deep-chested and may be at increased risk for
                  gastric dilatation-volvulus (GDV or bloat). To help reduce risk, divide daily food into two or more
                  meals, discourage rapid gulping (slow-feeder bowls can help), and avoid strenuous exercise for about
                  an hour before and after meals. Always seek emergency veterinary care immediately if you suspect bloat
                  or sudden abdominal distress.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers are generally robust, athletic dogs, but like all purebred breeds, they are predisposed to
                  certain inherited and breed-related conditions. Responsible breeders use health testing, pedigree
                  analysis, and careful selection to reduce the likelihood of these problems. Prospective owners should
                  understand common Boxer health concerns and always request official health clearances for breeding
                  dogs and puppies.
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
                          Abnormal development of the hip joint that can lead to arthritis, pain, and reduced mobility
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Congenital Heart Disease (e.g., Aortic Stenosis)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Important breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Narrowing of the aortic valve or other structural heart issues that can cause murmurs,
                          exercise intolerance, or serious cardiac problems
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Boxer Cardiomyopathy (Arrhythmogenic Right Ventricular Cardiomyopathy – ARVC)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Significant breed-specific risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart muscle disease that can cause irregular heart rhythms, fainting spells, or sudden
                          cardiac death; often screened via Holter monitoring and cardiac evaluation
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cancer (e.g., Mast Cell Tumors, Lymphoma)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern, especially in middle-aged to older dogs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Various malignancies can occur; regular veterinary checkups and prompt evaluation of new
                          lumps or changes are important
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brachycephalic Airway Syndrome & Heat Intolerance
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common brachycephalic concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Shortened muzzle can lead to noisy breathing, snoring, and difficulty cooling; careful heat
                          management and weight control are essential
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative Myelopathy (DM)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized hereditary risk in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Progressive spinal cord disease that leads to hind limb weakness and paralysis; DNA testing is
                          available to identify risk status
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and the American Boxer Club recommend health testing for breeding dogs to support the long-
                  term health of the breed. When purchasing a Boxer puppy from a breeder, ask for copies of official
                  health clearances from recognized authorities:
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
                          Screen for hip dysplasia and assess joint quality for breeding and long-term mobility
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation (including Echocardiogram)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA and/or board-certified veterinary cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect congenital and acquired heart disease such as aortic stenosis and cardiomyopathy
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ARVC / Boxer Cardiomyopathy DNA Testing and/or Holter Monitoring
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved laboratory; 24-hour Holter monitor interpreted by a cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify genetic risk and/or abnormal heart rhythms associated with Boxer cardiomyopathy
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative Myelopathy (DM) DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Determine whether a dog is clear, carrier, or at-risk for DM to inform breeding decisions
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thyroid Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or certified veterinary laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for autoimmune thyroiditis and hypothyroidism, which can affect energy, weight, and coat
                          quality
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
                  Boxers are intelligent, eager, and often very motivated by play and attention. They usually learn
                  quickly but can also be a bit stubborn or easily distracted, especially when they are young and full
                  of energy. This combination makes early, consistent training essential to channel their enthusiasm
                  into good manners rather than chaos.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as your veterinarian advises, often
                  between 3–14 weeks of age. Carefully expose your Boxer puppy to different people, calm children,
                  friendly dogs, sights, sounds, and environments. Positive experiences during this period help prevent
                  fearfulness and support the development of a confident, stable adult who can handle busy households,
                  visitors, and new situations with ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods work best for Boxers. Use food,
                  toys, praise, and play to reward desirable behaviors. Boxers are sensitive to their people and may
                  shut down or become anxious with harsh corrections. Short, upbeat training sessions that mix obedience
                  exercises, tricks, and games keep them engaged and strengthen the bond between dog and handler. Focus
                  early on polite greetings, loose-leash walking, impulse control, and reliable recalls.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy kindergarten and basic manners classes are
                  strongly recommended. Many Boxers go on to earn titles such as AKC S.T.A.R. Puppy, Canine Good Citizen
                  (CGC), and Community Canine (CGCA). They often enjoy and excel in activities like rally, agility,
                  obedience, scent work, and even dock diving. These outlets provide excellent mental and physical
                  exercise while reinforcing obedience and teamwork.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers were originally bred as versatile working dogs, and that history is still evident in their
                  athleticism, courage, and intelligence. While most Boxers today are primarily family companions, many
                  still thrive when given meaningful jobs or structured activities:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Guarding & Watchdog Duties:</strong> Boxers have a natural instinct to protect their homes
                    and families. They are typically quick to alert to unusual sights or sounds and can be formidable
                    deterrents simply by presence and voice.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> The breed&apos;s agility, strength, and enthusiasm make them good
                    candidates for obedience, rally, agility, and other sports. Their playful nature means training can
                    be both effective and fun when handled with patience and consistency.
                  </li>
                  <li>
                    <strong>Search & Rescue / Detection:</strong> Some Boxers have been trained for search and rescue,
                    tracking, and scent detection work, leveraging their keen noses and stamina.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> With the right temperament and training, Boxers can
                    make excellent therapy dogs, offering comfort and companionship in hospitals, schools, and other
                    settings.
                  </li>
                  <li>
                    <strong>Service & Assistance Roles:</strong> While less common than some other breeds, carefully
                    selected Boxers may serve as medical alert or psychiatric service dogs, particularly when paired
                    with experienced trainers and handlers.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> Above all, most Boxers today are beloved family dogs who
                    join their people on hikes, runs, play sessions in the yard, and everyday adventures. Their “velcro”
                    nature means they are happiest when they can stay close to their humans.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Boxers good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Boxers can be excellent family dogs, especially for active households that enjoy play and
                  outdoor time. They are typically affectionate, loyal, and playful with their people, and many develop
                  close bonds with children. Because they are strong and energetic, supervision and training are
                  important around small kids to prevent accidental knocking over during excited play. Early socialization and
                  clear boundaries help Boxers become gentle, reliable family companions.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Boxer puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxer puppy prices vary depending on region, breeder reputation, pedigree, and whether parents have
                  extensive health testing and show or performance titles. From responsible breeders who prioritize
                  health and temperament, puppies commonly range from about $1,000–$2,500 or more. Puppies from proven
                  show or working lines may be higher. Be cautious of unusually low prices, which may indicate a lack of
                  health screening, poor breeding practices, or puppy-mill–style operations.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Boxers shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers have short coats but are moderate shedders. They shed year-round, with heavier shedding during
                  seasonal coat changes. Weekly brushing (and more frequent brushing during heavy shed periods) helps
                  remove loose hair and keep the coat shiny. Prospective owners should be comfortable with some dog hair
                  on clothing, upholstery, and floors despite the short coat.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Boxers aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred, well-socialized Boxers are generally not aggressive without cause. The breed standard calls
                  for a temperament that is confident, alert, and dignified—never timid or vicious. They do have a
                  natural protective instinct and can be suspicious of strangers, which is why early socialization and
                  clear training are so important. As with any breed, poor socialization, fear, pain, or harsh handling
                  can contribute to behavior problems, so positive, consistent training and responsible ownership are
                  key.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Boxers live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers can adapt to apartment living if their exercise and mental needs are reliably met. They need
                  daily walks, active play, and training sessions, as well as opportunities to stretch their legs in
                  safe, open spaces. Because they are energetic and sometimes vocal, thin walls or limited access to
                  outdoor space can be challenging. Apartment dwellers should plan for multiple daily outings and
                  enrichment activities to keep their Boxer content and well-behaved.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Boxers get along with other dogs and pets?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Many Boxers get along well with other dogs, especially when socialized from a young age and matched
                  with compatible playmates. Their energetic, physical play style can be overwhelming for some dogs, so
                  supervision and good play manners are important. Boxers may have a strong prey drive toward small
                  animals, so careful introductions and management are needed with cats or other small pets. Individual
                  temperament and training play a big role in multi-pet harmony.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Boxer Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Active individuals or families who enjoy walks, runs, and outdoor adventures</li>
                  <li>Owners who can provide at least 60–90 minutes of daily exercise and mental stimulation</li>
                  <li>
                    People who appreciate a playful, clownish personality and don&apos;t mind a “shadow” dog who wants
                    to be wherever they are
                  </li>
                  <li>
                    Those willing to invest in early socialization, training classes, and ongoing reinforcement of good
                    manners
                  </li>
                  <li>
                    Homes where Boxers can live indoors as part of the family, with access to a securely fenced yard or
                    safe off-leash areas
                  </li>
                  <li>
                    Owners who understand and are prepared for the breed&apos;s health screening needs and potential
                    medical costs
                  </li>
                  <li>
                    People comfortable with moderate shedding and basic grooming, including nail, ear, and dental care
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Boxers may not be ideal for families who prefer a low-energy or highly independent dog, or for those
                  who are away from home most of the day and cannot provide enough exercise, companionship, and
                  structure. With the right environment and care, however, a Boxer can be a joyful, loyal, and endlessly
                  entertaining companion.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Boxer Breed Standard.&quot; akc.org</li>
                    <li>2. American Boxer Club (ABC). &quot;Health Testing &amp; Breed Information.&quot;</li>
                    <li>3. AKC Canine Health Foundation. &quot;Cardiac and Cancer Conditions in Boxers.&quot;</li>
                    <li>4. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Boxers.&quot;</li>
                    <li>5. Veterinary cardiology resources on aortic stenosis, Boxer cardiomyopathy (ARVC), and cardiac screening.</li>
                    <li>6. Veterinary neurology resources on degenerative myelopathy (DM) genetics and testing.</li>
                    <li>7. Various veterinary nutrition resources on feeding active, medium-to-large working breeds.</li>
                    <li>8. General veterinary references on brachycephalic airway syndrome and heat safety in dogs.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/boxer" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
