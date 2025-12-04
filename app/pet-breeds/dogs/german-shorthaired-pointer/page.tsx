import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'German Shorthaired Pointer',
  slug: 'german-shorthaired-pointer',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764696695/pexels-helenalopes-27177021_wyrhrj.jpg',
  description: 'Energetic • Versatile gundog • Intelligent • Affectionate • Athletic',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'German Shorthaired Pointer Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to German Shorthaired Pointer dogs based on AKC standards. Learn about characteristics, temperament, hunting drive, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'German Shorthaired Pointer',
    'German Shorthaired Pointer breed',
    'German Shorthaired Pointer care',
    'German Shorthaired Pointer temperament',
    'German Shorthaired Pointer training',
    'German Shorthaired Pointer health',
    'GSP care guide',
    'AKC German Shorthaired Pointer',
  ],
  pathname: '/pet-breeds/dogs/german-shorthaired-pointer',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'German Shorthaired Pointer Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="German Shorthaired Pointer"
        description="German Shorthaired Pointers (GSPs) are athletic, enthusiastic, and people-oriented hunting dogs known for their versatility in the field and affection at home. Bred as all-purpose gundogs in Germany, they excel at pointing, retrieving, and tracking on land and in water. With the right training, exercise, and engagement, GSPs become loyal, energetic companions who are happiest when they have a job to do and time with their families."
        emoji="🐕"
        slug="german-shorthaired-pointer"
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
                    The German Shorthaired Pointer is a highly versatile sporting breed known for its stamina, keen
                    nose, and boundless enthusiasm for work and play. Developed in Germany as an all-purpose hunting
                    companion, the GSP was bred to point, track, and retrieve game both on land and in water, making it
                    one of the most adaptable gundogs in the sporting group.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), German Shorthaired Pointers consistently rank among
                    the most popular sporting breeds. Their popularity comes from their affectionate nature, high
                    intelligence, and athleticism. When provided with sufficient exercise, mental stimulation, and
                    training, GSPs make devoted family companions and outstanding partners in hunting, field trials, and
                    active lifestyles.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The German Shorthaired Pointer was developed in the 19th century in Germany with the goal of creating
                  a single, versatile hunting dog that could work a wide variety of game. Early breeders combined
                  traditional German bird dogs with other sporting and hound-type breeds to produce dogs with strong
                  scenting ability, pointing instinct, and a cooperative temperament suitable for working closely with
                  hunters.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Over time, the breed was refined into the modern GSP: a medium-to-large, athletic dog capable of
                  pointing upland birds, tracking wounded game, retrieving from water, and adapting to different terrain
                  and climates. The AKC recognized the German Shorthaired Pointer in 1930, and the German Shorthaired
                  Pointer Club of America (GSPCA) serves as the parent club. Today, GSPs remain popular hunting
                  companions and excel in field trials, hunt tests, agility, obedience, and other canine sports.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers are medium-to-large, well-balanced dogs built for endurance, speed, and
                  agility. According to the AKC breed standard, they should present a noble, athletic outline with a
                  deep chest, strong back, and powerful hindquarters. Their smooth, efficient movement reflects their
                  purpose as tireless working gundogs. The alert expression and dark, intelligent eyes give them a
                  lively, inquisitive look.
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
                          21–23 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          55–70 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–60 pounds
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
                          10–14 years
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
                          Short, dense, and water-repellent; lying flat and close to the body
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
                          Liver, liver &amp; white, liver roan, liver ticked; patterns may be solid, patched, or
                          ticked
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> German Shorthaired Pointers have a cleanly chiseled head with
                  a broad, slightly rounded skull and a moderate stop. Their eyes are typically dark brown, conveying a
                  kind yet alert expression. The ears are broad and set high, lying close to the head. The tail is
                  customarily docked in some regions where legal, carried horizontally and wagging when the dog is
                  alert or working. Their powerful, ground-covering gait allows them to cover large areas of ground with
                  ease during a day in the field.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers are highly intelligent, eager to please, and extremely energetic. They
                  are quick learners with strong problem-solving skills and a deep desire to work in partnership with
                  their owners. This combination makes them very trainable but also means they can become restless or
                  destructive if they don&apos;t receive enough physical and mental exercise.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  GSPs are typically affectionate, playful, and deeply bonded with their families. Many enjoy being
                  close to their people and often behave like “velcro dogs,” following their owners from room to room.
                  They may be reserved with strangers at first but are generally friendly and outgoing once properly
                  introduced. Their alert nature and tendency to bark at unusual sounds can make them effective watchdogs
                  without being inherently aggressive.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Strong prey drive is common in this breed and may manifest as intense interest in birds, small
                  animals, or movement outdoors. Early training, reliable recall, and appropriate outlets for hunting
                  instincts (such as field training or scent games) are important. GSPs thrive in households where they
                  are included in daily activities and given jobs or structured activities that let them use their minds
                  and bodies.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a high-drive sporting breed, the German Shorthaired Pointer requires substantial daily exercise and
                  mental stimulation. Without appropriate outlets, GSPs can quickly develop nuisance behaviors such as
                  barking, digging, chewing, pacing, or escaping. Exercise needs vary by age and individual energy
                  level, but most GSPs are more active than the average companion dog and are best suited to owners who
                  enjoy an active lifestyle.
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
                          Short walks, gentle play, basic obedience, socialization, safe exploration, foundation field
                          games
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1.5–2+ hours minimum
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Running, hiking, swimming, field training, off-leash exercise in safe areas, fetch, agility,
                          canicross, tracking, scent work
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–60 minutes (adjusted to comfort)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, swimming, controlled off-leash time, light retrieving, low-impact brain games,
                          scent puzzles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> GSPs need just as much mental work as physical activity. Incorporate
                  puzzle feeders, field drills, nosework, trick training, and interactive toys into their routine. Many
                  German Shorthaired Pointers excel in hunt tests, field trials, agility, rally, obedience, dock diving,
                  and tracking, which give them a productive outlet for their natural instincts and energy.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers have a short, dense, and water-repellent coat that is relatively low
                  maintenance compared to many long-coated breeds. They do shed, particularly seasonally, and their
                  short hairs can embed in fabrics. Regular brushing helps remove loose hair, distribute natural oils,
                  and keep the coat healthy and shiny.
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
                          Rubber curry brush or grooming mitt; removes loose hair and stimulates skin
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
                          Rubber brush, de-shedding tool as needed; focus on areas where hair accumulates
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
                          Dog-specific shampoo; rinse thoroughly, especially after swimming or muddy outings
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
                          Trim or grind; active dogs may naturally wear nails down but still need regular checks
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
                          Veterinary ear cleaner, cotton balls; pay special attention after swimming or fieldwork
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
                          Dog toothbrush and toothpaste; dental chews or water additives as recommended by your vet
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
                  Proper nutrition is essential to support the German Shorthaired Pointer&apos;s athletic build, high
                  energy output, and long-term health. As medium-to-large, active sporting dogs, GSPs typically do best
                  on high-quality diets that emphasize animal-based protein and appropriate fat levels to fuel their
                  activity without causing excess weight gain.
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
                          Varies by age/weight; follow vet and food label guidance for large, active puppies
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
                          20–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–15%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~2.5–3.5 cups (split into meals), adjusted for weight, age, and activity level
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
                          14–20%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~3–5 cups, adjusted for workload, season, and body condition
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
                          2–3 cups, tailored to metabolism, joint health, and activity level
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
                  proteins (such as chicken, turkey, beef, lamb, or fish) as the first ingredient. Omega-3 and Omega-6
                  fatty acids support skin, coat, and joint health—especially important for active GSPs who run and
                  jump frequently. Some dogs may benefit from joint supplements containing glucosamine and chondroitin.
                  Because German Shorthaired Pointers can be prone to digestive sensitivities or food intolerances,
                  consult your veterinarian if you notice chronic loose stool, itching, or other signs of discomfort.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> As a deep-chested breed, the German Shorthaired Pointer may be at
                  increased risk of gastric dilatation-volvulus (GDV or bloat). To help reduce risk, divide daily food
                  into two or more meals, discourage rapid gulping of food (using slow-feeder bowls if needed), avoid
                  heavy exercise immediately before and after meals, and discuss preventive options such as prophylactic
                  gastropexy with your veterinarian. Always seek emergency veterinary care immediately if you suspect
                  bloat.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers are generally healthy, athletic dogs, but like all purebred breeds, they
                  are predisposed to certain inherited and breed-associated conditions. Responsible breeders use health
                  testing and thoughtful breeding practices to help reduce the risk of these diseases. Prospective
                  owners should be familiar with common health concerns and request documentation of health clearances
                  for both parents when purchasing a puppy.
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
                          Abnormal hip joint development that can lead to arthritis, pain, and reduced mobility,
                          especially in active dogs
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized concern in some lines
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Developmental abnormalities in the elbow joint that can cause lameness and early-onset
                          arthritis
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed consideration
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes Progressive Retinal Atrophy (PRA), cataracts, and other inherited eye conditions
                          that may affect vision
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Occasional breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes various congenital or acquired cardiac conditions; screening helps identify affected
                          dogs
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Epilepsy
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seizure disorder that may have a hereditary component; management often involves long-term
                          medication
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
                          Immune-related thyroid disease that can cause lethargy, weight gain, skin or coat issues, and
                          behavior changes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and German Shorthaired Pointer Club of America (GSPCA) recommend health testing for breeding
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
                          Screen for hip dysplasia and assess hip joint quality in breeding dogs
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
                          Screen for elbow dysplasia and related joint abnormalities
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
                          Screen for hereditary eye diseases, including PRA and cataracts
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Exam
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Board-certified veterinary cardiologist / OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for congenital or inherited heart conditions
                        </td>
                      </tr>
                      <tr>
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
                    </tbody>
                  </table>
                </div>

                {/* Training */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Training & Socialization
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers are highly trainable thanks to their intelligence, willingness to work,
                  and strong desire to please. They learn quickly and enjoy having tasks to perform, making them
                  excellent partners for field work, performance sports, and active family life. However, their energy
                  and enthusiasm can be overwhelming without consistent structure and clear boundaries.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Expose your GSP puppy to a variety of people, friendly dogs, environments, surfaces, and
                  sounds in a controlled, positive way. This helps prevent fearfulness and builds a confident, adaptable
                  adult dog that can handle travel, busy households, and new situations calmly.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods work best for German Shorthaired
                  Pointers. Use food rewards, toys, praise, and play to reinforce desired behaviors. GSPs are sensitive
                  and bond closely with their people, so harsh corrections may damage trust or create anxiety. Short,
                  engaging training sessions that mix basic cues, impulse control, field skills, and fun tricks help keep
                  them focused and satisfied.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy, Canine Good Citizen
                  (CGC), and Community Canine (CGCA) to build a foundation of manners and reliability. Many German
                  Shorthaired Pointers thrive in advanced outlets such as hunt tests, field trials, agility, rally,
                  obedience, dock diving, tracking, and nosework. These activities provide a productive way to harness
                  their natural hunting drive, intelligence, and athleticism.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers were bred first and foremost as versatile hunting companions, but their
                  talents extend to many modern roles. Their intelligence, scenting ability, and athleticism allow them
                  to excel in a wide range of activities:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Hunting &amp; Field Work:</strong> GSPs are classic all-purpose gundogs, capable of
                    searching, pointing, and retrieving upland birds and waterfowl. They are valued for their keen
                    noses, stamina, and ability to adapt to different terrain and game.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> The breed excels in field trials, hunt tests, agility, rally,
                    obedience, dock diving, and scent sports, where speed, precision, and responsiveness are rewarded.
                  </li>
                  <li>
                    <strong>Search &amp; Rescue / Detection:</strong> Some German Shorthaired Pointers work in search
                    and rescue, tracking, or detection roles, utilizing their strong scenting ability and high drive.
                  </li>
                  <li>
                    <strong>Therapy &amp; Emotional Support:</strong> With appropriate training and a stable
                    temperament, GSPs can make excellent therapy dogs, offering comfort in hospitals, schools, and other
                    settings.
                  </li>
                  <li>
                    <strong>Service Dogs:</strong> While less common than some breeds, GSPs are occasionally used as
                    medical alert or psychiatric service dogs when carefully selected and trained for the role.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For many owners, a GSP&apos;s primary job is being an
                    adventurous family member who joins in on runs, hikes, camping trips, and everyday outdoor
                    activities.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are German Shorthaired Pointers good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, German Shorthaired Pointers can be wonderful family dogs for active households. They are
                  typically affectionate, playful, and enjoy spending time with children and adults alike. However,
                  their high energy and enthusiasm mean they may be too boisterous for very small children without close
                  supervision. Training, boundaries, and plenty of exercise are essential to help them be calm and
                  mannerly in the home.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a German Shorthaired Pointer puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing and raise puppies in a high-quality environment, German Shorthaired Pointer puppies often
                  range from around $1,000–$2,500 or more. Puppies from proven field, performance, or show lines may be
                  higher. Be cautious of unusually low prices, which can signal poor breeding practices, limited health
                  testing, or puppy mill operations.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do German Shorthaired Pointers shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers do shed, though their short coat can make it less obvious than long-coated
                  breeds. They tend to shed moderately year-round with heavier seasonal shedding. Regular brushing helps
                  reduce loose hair, but prospective owners should still expect some dog hair on clothing, furniture,
                  and floors—especially during shedding seasons.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are German Shorthaired Pointers aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers are not inherently aggressive. Well-bred, well-socialized GSPs are
                  typically friendly, confident, and eager to interact with people. They may be alert and vocal when
                  someone approaches the home, but outright aggression is not typical of the breed standard. Poor
                  socialization, fear, pain, or harsh handling can contribute to behavior problems in any dog, so early
                  positive training and thoughtful management are important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can German Shorthaired Pointers live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living is possible for German Shorthaired Pointers, but only for highly committed owners.
                  GSPs require significant daily exercise and mental stimulation, which means multiple brisk walks,
                  vigorous play sessions, and structured training every day. Without adequate outlets, they can become
                  restless, noisy, or destructive. Access to nearby parks or safe off-leash areas, along with a
                  consistent exercise routine, is crucial in smaller living spaces.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between field and show lines in German Shorthaired Pointers?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Field-bred German Shorthaired Pointers are typically selected primarily for hunting ability, drive,
                  and stamina. They often have very high energy levels and excel in hunting, field trials, and other
                  working roles. Show-line GSPs are bred with conformation standards in mind and may have somewhat less
                  intense drive, though they remain active and athletic dogs. Both types require training and exercise,
                  but field lines generally demand more time, structure, and experienced handlers.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a German Shorthaired Pointer Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Active individuals or families who enjoy running, hiking, hunting, or outdoor sports</li>
                  <li>Owners who can provide 1.5–2+ hours of physical and mental exercise most days</li>
                  <li>People interested in hunting, field work, or dog sports such as agility, tracking, or scent work</li>
                  <li>Those who want an intelligent, people-oriented dog that prefers to be involved in daily life</li>
                  <li>Homes with secure fencing or ready access to safe off-leash exercise areas</li>
                  <li>Owners committed to consistent training, socialization, and ongoing enrichment</li>
                  <li>People comfortable with moderate shedding and regular grooming basics</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shorthaired Pointers may not be ideal for first-time dog owners with very limited time,
                  families seeking a low-energy or highly independent pet, or those who are away from home most of the
                  day. Without enough attention, structure, and activity, a GSP&apos;s energy and drive can quickly
                  become challenging to manage.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;German Shorthaired Pointer Breed Standard.&quot; akc.org</li>
                    <li>2. German Shorthaired Pointer Club of America (GSPCA). &quot;Health &amp; Genetics.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for German Shorthaired Pointers.&quot;</li>
                    <li>4. AKC Canine Health Foundation. &quot;Inherited Eye Diseases in Sporting Breeds.&quot;</li>
                    <li>5. Various veterinary cardiology and endocrinology resources on heart and thyroid disease in dogs.</li>
                    <li>6. Veterinary nutrition resources on feeding active sporting and hunting breeds.</li>
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
              <BreedsSidebar
                category="dogs"
                currentBreed="/pet-breeds/dogs/german-shorthaired-pointer"
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
