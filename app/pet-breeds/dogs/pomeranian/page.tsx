import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Pomeranian',
  slug: 'pomeranian',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764685774/pexels-pet-foto-644780685-17880521_sjnyd3.jpg',
  description: 'Playful • Alert • Toy companion • Affectionate • Lively',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pomeranian Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Pomeranian dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Pomeranian',
    'Pomeranian breed',
    'Pomeranian care',
    'Pomeranian temperament',
    'Pomeranian training',
    'Pomeranian health',
    'toy breed care guide',
    'AKC Pomeranian',
  ],
  pathname: '/pet-breeds/dogs/pomeranian',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pomeranian Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Pomeranian"
        description="Pomeranians are spunky, fox-faced toy dogs with big personalities packed into tiny bodies. Descended from larger Nordic spitz-type sled dogs, today’s Poms are best known as confident, affectionate companions who adore being close to their people. With proper socialization, regular grooming, and gentle, consistent training, they make charming and entertaining family pets who thrive on attention and interaction."
        emoji="🦊"
        slug="pomeranian"
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
                    The Pomeranian is a bold, fluffy toy companion breed known for its plume-like tail, expressive face,
                    and confident, outgoing demeanor. Although small in size, Poms have a surprisingly sturdy build and
                    carry themselves with a lively, almost regal presence. They belong to the Spitz family of dogs and
                    retain the alertness and hardiness of their larger sled-dog ancestors, wrapped in a portable, lap-sized
                    package.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Pomeranians are consistently among the most popular toy
                    breeds. Their popularity comes from their affectionate nature, adaptability to many living
                    situations, and entertaining personalities. When given appropriate training, socialization, and
                    mental stimulation, Poms become loyal, bright companions who love to be the center of attention and
                    join in on family activities.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Pomeranian traces its roots to the historical region of Pomerania, bordering the Baltic Sea in
                  present-day Germany and Poland. There, larger Spitz-type dogs were used for herding, sledding, and
                  guarding. Over time, selective breeding in England and elsewhere reduced these dogs in size while
                  preserving their alert expression, double coat, and plumed tail.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians gained immense popularity during the 19th century, especially after Queen Victoria
                  developed a deep affection for the breed and bred them herself. Under her influence, the breed’s size
                  decreased even further, and many of the colors seen today were refined. The AKC recognized the
                  Pomeranian in the early 1900s, and the American Pomeranian Club (APC) serves as the AKC parent club.
                  Today, Poms are cherished primarily as companion dogs but also shine in obedience, agility, and
                  trick-dog events.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians are small, compact toy dogs with a balanced, sturdy frame. According to the AKC breed
                  standard, they should appear short-backed with a profuse double coat that forms a distinctive ruff
                  around the neck and a full, heavily plumed tail carried flat and straight over the back. Their
                  fox-like expression, erect ears, and dark, sparkling eyes give them an alert and intelligent look.
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
                          6–7 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          6–7 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–7 pounds (ideal)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–7 pounds (ideal)
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
                          Long, dense double coat with soft, thick undercoat and harsher, straight outer coat
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
                          Orange, cream, black, chocolate, blue, sable, white, parti-color, and other solid or patterned
                          shades
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Pomeranians have a wedge-shaped head with a defined stop,
                  short, fine muzzle, and small, erect ears set high on the head. Dark, medium-sized, almond-shaped eyes
                  contribute to their bright, inquisitive expression. Their distinctive ruff frames the head and neck,
                  while the tail’s profuse plume arches gracefully over the back. Despite their small size, a correct
                  Pom should feel solid and well put-together, not fragile or spindly.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians are intelligent, curious, and spirited dogs who often behave as if they are much larger
                  than they really are. They are quick learners with a strong desire to interact with their people and
                  can be quite outgoing and social when properly raised. Their alert nature makes them excellent little
                  watchdogs who readily announce visitors or unusual sounds.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Most Poms are affectionate with their families and enjoy being close—whether on laps, following their
                  owners from room to room, or sleeping in the bedroom. Some can be reserved with strangers, and their
                  small size makes gentle handling and positive experiences especially important. Early socialization
                  helps prevent timidity or excessive barking and encourages a confident, adaptable temperament.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Because of their intelligence and lively nature, Pomeranians do best in homes where they are treated
                  as true companions rather than decorative accessories. They thrive when taught new tricks, included in
                  daily routines, and given appropriate outlets for their energy and curiosity.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While Pomeranians are small, they are also energetic and playful. They don&apos;t require the same
                  volume of exercise as large working breeds, but they do need daily activity and mental stimulation to
                  stay fit and well behaved. Regular walks, play sessions, and training games help prevent boredom,
                  excessive barking, and weight gain.
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
                          Short, frequent play sessions; roughly 5 minutes per month of age, 2x daily, avoiding
                          overexertion
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle play indoors, short leash walks, basic obedience, socialization outings, safe
                          exploration on soft surfaces
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes total, split into several sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, fetch with soft toys, indoor games, agility for toy breeds, trick training, scent
                          and puzzle games
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–40 minutes, adjusted for comfort and health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short, gentle walks, light play, low-impact indoor games, food puzzles, and easy trick review
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Pomeranians are sharp and eager to learn. Incorporate puzzle toys,
                  training sessions, nosework, and interactive play into their daily routine. Many Poms enjoy and excel
                  at dog sports such as rally, agility (with appropriately sized equipment), obedience, and trick-dog
                  titles, which challenge their minds as well as their bodies.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians have a thick double coat that requires regular upkeep. The soft undercoat provides
                  insulation, while the longer outer coat creates the breed&apos;s signature fluff and ruff. Poms shed
                  year-round to some degree, with heavier shedding during seasonal coat changes. Routine grooming helps
                  prevent matting, reduces loose hair, and keeps the skin healthy.
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
                          2–4 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Slicker brush and comb; focus on behind ears, under legs, and around collar to prevent mats
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
                          Pin brush, undercoat rake, and line brushing to remove loose undercoat thoroughly
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
                          Use dog-specific shampoo/conditioner; dry coat thoroughly and brush while drying to prevent
                          tangles
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
                          Trim or grind; small dogs’ nails can grow quickly, so keep them short for comfort and gait
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
                          Veterinary ear cleaner and cotton balls; watch for redness, odor, or head shaking
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
                          Dog toothbrush and toothpaste; small breeds are prone to dental disease, so consistent care is
                          critical
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
                  Proper nutrition is especially important for Pomeranians, as their small size means even minor
                  imbalances can affect weight and overall health. As active toy dogs, Poms generally do best on
                  high-quality diets formulated for small breeds, with appropriate protein and fat levels to support
                  energy, muscle tone, and coat condition.
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
                          Typically ¼–¾ cup total per day, adjusted for age and weight per vet and food label guidance
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–4 (smaller, frequent meals help prevent hypoglycemia)
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
                          10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~¼–½ cup total per day, adjusted for weight, metabolism, and activity level
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (highly active)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          24–30%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          14–20%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~½–¾ cup, adjusted for workload and body condition
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
                          8–14%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ¼–½ cup, tailored to activity level, joint health, and ideal body weight
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
                  proteins (such as chicken, turkey, fish, or lamb) as the first ingredient. Small-breed–specific diets
                  often have kibble sized for tiny mouths and may help reduce tartar buildup. Omega-3 and Omega-6 fatty
                  acids support skin and coat health, while joint-support supplements can benefit older or overweight
                  Poms. Because toy breeds can be prone to hypoglycemia and obesity, work with your veterinarian to set
                  appropriate portions and treat limits.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Digestive & Feeding Tips:</strong> Divide food into at least two meals per day for adults and
                  more frequent meals for young puppies. Avoid free-feeding, which can promote overeating. Sudden diet
                  changes can upset a Pomeranian&apos;s stomach, so transition gradually over 7–10 days when switching
                  foods, and consult your veterinarian if you notice vomiting, diarrhea, or persistent gas.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians are generally long-lived, healthy dogs, but like all purebred breeds, they have certain
                  health risks that owners and breeders should understand. Responsible breeders use health testing and
                  careful selection to reduce the incidence of inherited conditions. Prospective owners should ask to see
                  relevant health clearances for the parents of any puppy they are considering.
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
                          Luxating Patella
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common toy-breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Kneecap that slips out of place, potentially causing intermittent lameness and arthritis over
                          time
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Tracheal Collapse
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable toy-breed issue
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weakening of the trachea that can cause coughing, honking sounds, and breathing difficulty,
                          especially with pressure on the neck
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common in small breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Buildup of tartar and plaque leading to gingivitis, tooth loss, and potential systemic health
                          effects
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
                          Includes cataracts, distichiasis, and other inherited eye conditions that can impact vision
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seen in older dogs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Conditions such as valvular disease may appear with age and should be monitored by a
                          veterinarian
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Endocrine &amp; Coat Disorders
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes hypothyroidism and alopecia (coat loss) syndromes that may cause hair loss and skin
                          changes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and American Pomeranian Club (APC) encourage health testing for breeding dogs. Always request
                  copies of official health clearances when purchasing a puppy from a breeder:
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
                          Patella Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or equivalent registry
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for luxating patella and assess stifle joint stability
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Board-certified cardiologist or OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for congenital or acquired heart disease
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
                          Screen for hereditary eye diseases, including cataracts and other ocular issues
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
                          Hip Evaluation (optional)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or PennHIP
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Assess hip joint quality, especially in lines with known issues
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          DNA Testing (breed-relevant panels)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify carriers or affected dogs for specific inherited conditions tracked in the breed
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
                  Pomeranians are bright, responsive, and often eager to please, making them very trainable when
                  approached with patience and consistency. They quickly learn both good and bad habits, so setting clear
                  expectations early is important. Many Poms enjoy learning tricks and can perform impressively in
                  obedience and rally when given structure and motivation.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age, under veterinary guidance. Introduce your Pomeranian puppy to a variety of people, dogs,
                  noises, surfaces, and environments in a gentle, controlled manner. This helps prevent fearfulness,
                  reactivity, and excessive barking, and sets the foundation for a confident, friendly adult dog.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods—using food, toys, and praise—work
                  best for Poms. Their small size and sensitive nature mean harsh corrections can be frightening and
                  counterproductive. Keep sessions short, fun, and varied, and focus on skills like coming when called,
                  polite greeting, walking on a loose leash, and settling on cue. Early attention to house training is
                  especially important, as small bladders can make accidents more common if schedules are inconsistent.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy, Canine Good Citizen
                  (CGC), and Trick Dog titles as achievable and enjoyable goals. Many Poms excel at trick training,
                  rally, and small-dog agility, which provide excellent mental and physical outlets while deepening the
                  bond between dog and owner.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians were historically developed from working Spitz dogs, but modern Poms are primarily
                  companion animals. Still, their intelligence, alertness, and charisma allow them to succeed in a range
                  of modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Companion Dogs:</strong> Poms excel as devoted companions, happiest when they can share daily
                    life with their people, join errands, and relax on the couch after short adventures.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Many Pomeranians enjoy obedience, rally, agility for small dogs, and
                    trick-dog competitions, where their quick minds and showy style are assets.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> Their small size, portability, and affectionate nature
                    can make them suitable as therapy dogs when they have stable temperaments and good manners.
                  </li>
                  <li>
                    <strong>Performance & Entertainment:</strong> Poms often shine in performances, including freestyle,
                    tricks, and social media content, thanks to their expressive personalities.
                  </li>
                  <li>
                    <strong>Alert Watchdogs:</strong> While not guard dogs, Pomeranians are naturally alert and will
                    readily bark to announce visitors or unusual activity in their environment.
                  </li>
                  <li>
                    <strong>Active Urban Companions:</strong> Their small size and adaptability make them well suited to
                    city living when given appropriate exercise, training, and mental enrichment.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Pomeranians good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Pomeranians can be wonderful family dogs, especially for households that understand the needs of
                  small breeds. They are typically affectionate, playful, and strongly attached to their people. Because
                  of their small size, they are more fragile than larger dogs and may not be ideal for very young
                  children who are still learning gentle handling. Supervision and teaching kids how to interact
                  respectfully are essential for everyone&apos;s safety and comfort.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Pomeranian puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing and raise puppies in a high-quality environment, Pomeranian puppies often range from around
                  $1,200–$3,000 or more. Puppies from top show or performance lines may be higher. Be cautious of
                  unusually low prices, which can indicate poor breeding practices, lack of health testing, or
                  irresponsible sourcing.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Pomeranians shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Pomeranians are moderate to heavy shedders, especially during seasonal coat changes. Their dense
                  double coat produces a fair amount of loose hair. Regular brushing several times a week—and more often
                  during heavy shedding—helps control hair around the home and prevents mats. Prospective owners should
                  be comfortable with some dog hair on clothes and furniture and commit to ongoing grooming.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Pomeranians aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians are not inherently aggressive, but they are bold and may act defensively if they feel
                  threatened or mishandled. Well-bred, well-socialized Poms are typically confident, affectionate, and
                  responsive to their owners. Lack of socialization, rough handling, pain, or fear can contribute to
                  behavior issues in any dog. Early positive experiences, gentle training, and respectful interactions
                  are key to raising a stable, friendly Pomeranian.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Pomeranians live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Pomeranians can adapt very well to apartment living. Their small size and moderate exercise needs
                  make them suitable for smaller spaces, provided they receive daily walks, play, and mental
                  stimulation. Barking can be a concern in shared buildings, so early training to manage alert barking is
                  important. As long as their social, exercise, and grooming needs are met, Poms can thrive in urban
                  environments.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between show and pet lines in Pomeranians?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Show-line Pomeranians are bred primarily to conform to the AKC breed standard in structure, movement,
                  and coat, while maintaining sound health and temperament. Pet-line Poms may come from the same lines
                  but are placed as companions due to minor cosmetic differences or simply because not every puppy in a
                  litter is destined for the show ring. Both show and pet lines still require responsible breeding,
                  health testing, and appropriate care. Extremely tiny &quot;teacup&quot; Pomeranians are not recognized
                  by the AKC and may be at higher risk for health problems, so they should be approached with caution.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Pomeranian Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Owners who want an affectionate, people-focused companion dog</li>
                  <li>Individuals or families who can supervise gentle interactions with small children</li>
                  <li>
                    People living in apartments or homes without large yards, who can still provide daily walks and play
                  </li>
                  <li>Those who enjoy training, teaching tricks, or participating in small-dog sports and activities</li>
                  <li>Owners committed to regular brushing, dental care, and grooming maintenance</li>
                  <li>People who are home often enough to give a social dog plenty of attention and interaction</li>
                  <li>
                    Families comfortable managing barking with training and enrichment, rather than expecting a quiet
                    dog
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Pomeranians may not be ideal for households seeking a very low-maintenance dog, families with rough or
                  unsupervised play around pets, or owners who are away for long hours most days. Without sufficient
                  companionship, grooming, and training, a Pom&apos;s intelligence, energy, and vocal nature can become
                  challenging to manage.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Pomeranian Breed Standard.&quot; akc.org</li>
                    <li>2. American Pomeranian Club (APC). &quot;Pomeranian Breed Information &amp; Health.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Pomeranians.&quot;</li>
                    <li>4. AKC Canine Health Foundation. &quot;Small-Breed Health &amp; Dental Care Resources.&quot;</li>
                    <li>5. Various veterinary resources on toy-breed nutrition, tracheal collapse, and patellar luxation.</li>
                    <li>6. Board-certified veterinary dentistry and cardiology guidelines for small-breed preventive care.</li>
                    <li>7. AKC &amp; APC recommendations for responsible Pomeranian breeding and health screening.</li>
                    <li>8. Veterinary behavior and training resources focusing on socialization and small-dog behavior.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/pomeranian" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
