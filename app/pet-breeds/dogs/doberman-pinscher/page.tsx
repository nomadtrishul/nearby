import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Doberman Pinscher',
  slug: 'doberman-pinscher',
  imageUrl: 'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764696406/1649_ydadko.jpg',
  description: 'Loyal • Intelligent • Protective • Energetic • Confident guardian',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doberman Pinscher Breed Guide - Complete Care, Temperament & Training',
  description:
    'Comprehensive guide to Doberman Pinscher dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this loyal guardian breed.',
  keywords: [
    'Doberman Pinscher',
    'Doberman breed',
    'Doberman Pinscher care',
    'Doberman temperament',
    'Doberman training',
    'Doberman health',
    'Doberman care guide',
    'AKC Doberman Pinscher',
  ],
  pathname: '/pet-breeds/dogs/doberman-pinscher',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Doberman Pinscher Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Doberman Pinscher"
        description="The Doberman Pinscher is a sleek, powerful, and highly intelligent guardian breed developed for protection and companionship. Known for their loyalty, athleticism, and intense bond with their families, Dobermans excel as watchdogs, performance dogs, and devoted house companions when properly trained, socialized, and mentally engaged."
        emoji="🐕"
        slug="doberman-pinscher"
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
                    The Doberman Pinscher is a medium-to-large working breed renowned for its combination of elegance,
                    strength, and intelligence. Originally developed as a personal protection dog, the Doberman is
                    alert, brave, and intensely loyal to its family. Their streamlined, athletic build and sharp mind
                    make them capable of excelling in many roles, from watchdog and family guardian to competitive sport
                    dog.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), the Doberman Pinscher consistently ranks among the more
                    popular working breeds due to its versatility and deep devotion to its people. With responsible
                    breeding, early socialization, and structured, positive training, Dobermans can be affectionate,
                    stable companions who are just as happy relaxing at home with their family as they are training or
                    working.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Doberman Pinscher originated in late 19th-century Germany. The breed is credited to Louis
                  Dobermann, a tax collector and night watchman who wanted a medium-sized, obedient, courageous dog to
                  protect him during his rounds. He selectively bred existing local dogs, likely including the old
                  German Pinscher, Rottweiler-type dogs, and various shepherd and hunting breeds, to create a powerful
                  yet manageable personal protection dog.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Over time, the Doberman was refined into the sleek, athletic dog recognized today. The breed quickly
                  proved its worth as a working dog in military, police, and rescue roles, especially during the World
                  Wars. The AKC recognized the Doberman Pinscher in the early 1900s, and today the Doberman Pinscher
                  Club of America (DPCA) serves as the parent club in the United States. Modern Dobermans continue to
                  excel in protection sports, obedience, and many service roles, while also serving as loyal family
                  guardians.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Doberman Pinschers are medium-to-large, square-built dogs bred for speed, strength, and agility. The
                  AKC breed standard describes a dog that is compact, muscular, and powerful without appearing heavy.
                  Their appearance should reflect alertness, nobility, and readiness for action, with clean lines and a
                  smooth, effortless gait that allows them to move quickly and efficiently.
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
                          26–28 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          24–26 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~75–100 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~60–90 pounds
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
                          10–13 years
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
                          Short, smooth, close-lying coat; single-coated and low-maintenance
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
                          Black, red, blue, and fawn (Isabella) with rust markings in specific locations
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> The Doberman has a long, dry, wedge-shaped head with a
                  well-defined stop and strong muzzle. Eyes are medium, almond-shaped, and usually dark, giving a keen
                  and intelligent expression. Ears may be left natural (carried semi-erect or folded) or cropped where
                  legal. The tail is typically docked in countries where the practice is permitted, though natural tails
                  are increasingly seen in many regions. Their balanced, ground-covering gait reflects their working
                  heritage and ability to change direction quickly when needed.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Doberman Pinschers are known for their intelligence, trainability, and intense loyalty. They are
                  people-oriented dogs that bond closely with their families and often follow their favorite humans from
                  room to room. This closeness, combined with natural guarding instincts, makes them excellent watchdogs
                  and family protectors when properly managed.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  A well-bred Doberman should be confident and stable—neither shy nor unnecessarily aggressive. Many
                  are reserved with strangers but affectionate and playful with their families. Because they are highly
                  sensitive and perceptive, they respond best to calm, consistent leadership and positive reinforcement.
                  Without good socialization and guidance, their protective tendencies can become overly intense or
                  anxious.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dobermans thrive when they have a job to do, whether that is obedience training, protection sports,
                  nosework, or simply being an active participant in family activities. They are not suited to being
                  left alone for long periods with little interaction; boredom and frustration may lead to destructive
                  behaviors or anxiety.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As an energetic working breed, the Doberman Pinscher requires regular, structured exercise and mental
                  engagement. They are athletic dogs built for speed and stamina, and most adults need more activity
                  than the average companion dog. Care must be taken not to overexercise growing puppies, and to
                  consider joint and heart health in adults and seniors.
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
                          Short, age-appropriate sessions; 5 minutes per month of age, 2x daily
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leash walks, gentle play, basic obedience, controlled socialization, low-impact games
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1.5–2 hours total, split into sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, jogging, fetch, obedience and protection sports, agility, scent work, structured
                          off-leash play in secure areas
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
                          Gentle walks, light play, low-impact games, nosework and puzzle-based mental enrichment
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Dobermans are problem solvers and thrive on mental challenges.
                  Incorporate obedience training, trick training, scent games, puzzle toys, and structured tasks into
                  their daily routine. Many Dobermans excel in sports like obedience, rally, tracking, agility, and
                  protection sports, which allow them to engage both their bodies and minds.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Doberman Pinschers have a short, smooth coat that lies close to the body and is relatively easy to
                  maintain. They do shed, but their hair is short and less voluminous than many double-coated breeds.
                  Regular grooming helps keep their skin healthy, reduces shedding, and allows for early detection of
                  lumps, bumps, or skin issues.
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
                          Brushing
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1–2 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Rubber curry brush or grooming mitt to remove loose hair and stimulate skin
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–8 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle dog shampoo; avoid overbathing to prevent dry skin
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Nail trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 2–3 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Trim or grind; nails should not extend past the paw or click loudly on hard floors
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear cleaning (natural or cropped)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weekly check, clean as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary ear cleaner, cotton balls; watch for redness, odor, or excessive scratching
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental care
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily (ideal) or at least 3x per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog toothbrush and toothpaste; add dental chews or water additives as recommended by your vet
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
                  Proper nutrition is essential to support the Doberman Pinscher&apos;s athletic build, heart health,
                  and overall well-being. As a medium-to-large working breed, Dobermans typically do best on a
                  high-quality diet with appropriate levels of animal-based protein and balanced fats to fuel their
                  energy needs while maintaining a lean body condition.
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
                          Varies by age/weight; follow large-breed growth guidelines and veterinary advice
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
                          22–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–15%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~2.5–3.5 cups (split into meals), adjusted for size and activity level
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
                          ~3.5–4.5 cups, tailored to workload and body condition score
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
                          2–3 cups, adjusted for activity, heart health, and joint status
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look for formulas with high-quality animal
                  protein (such as chicken, beef, lamb, or fish) as the first ingredient. Omega-3 and Omega-6 fatty
                  acids support skin, coat, and joint health, and may be especially beneficial in an active breed like
                  the Doberman. Given the breed&apos;s predisposition to certain heart conditions, work closely with
                  your veterinarian when selecting diets and supplements, particularly those containing added taurine
                  and supportive nutrients. Always transition foods gradually to avoid digestive upset.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> Dobermans are a deep-chested breed and may be at increased risk for
                  gastric dilatation-volvulus (GDV or bloat). To help reduce risk, divide daily food into two or more
                  meals, avoid rapid gulping (use slow-feeder bowls if needed), and limit vigorous exercise or rough
                  play for about an hour before and after meals. Discuss bloat warning signs and possible preventative
                  options (such as prophylactic gastropexy) with your veterinarian.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Doberman Pinschers are generally robust, athletic dogs, but the breed does have several significant
                  inherited health concerns. Responsible breeders perform recommended health testing, carefully select
                  breeding pairs, and prioritize longevity and temperament. Prospective owners should be aware of common
                  issues and seek breeders who provide transparent health information and documentation.
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
                          Dilated Cardiomyopathy (DCM)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Major breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart muscle disease that can lead to decreased heart function, arrhythmias, and heart failure
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Von Willebrand&apos;s Disease (vWD)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Well-documented genetic issue
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Inherited bleeding disorder that affects blood clotting; DNA testing is available
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hip Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal hip joint development that can cause pain, lameness, and arthritis
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Wobbler Syndrome (Cervical Vertebral Instability)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Spinal cord compression in the neck causing weakness, gait abnormalities, and pain
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hypothyroidism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Underactive thyroid gland leading to weight gain, lethargy, and coat/skin changes
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Eye Conditions (e.g., cataracts, PHTVL/PHPV)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Various inherited eye diseases that can impact vision and may progress over time
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Doberman Pinscher Club of America (DPCA) recommend health testing for breeding dogs.
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
                          Screen for hip dysplasia and assess quality of the hip joints
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA Advanced Cardiac, Board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for DCM, arrhythmias, and other heart diseases (often via echocardiogram/Holter)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Von Willebrand&apos;s Disease (vWD) DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify clear, carrier, or affected dogs for this bleeding disorder
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thyroid Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or certified laboratory panel
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for autoimmune thyroiditis and hypothyroidism
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
                          Screen for inherited eye diseases and structural abnormalities
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Additional Cardiac Monitoring (Holter, repeat echo)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ongoing evaluation of heart rhythm and function in breeding dogs and lines at risk for DCM
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
                  Doberman Pinschers are highly trainable and eager to work with their handlers. Their intelligence and
                  focus make them excellent candidates for obedience, protection sports, and advanced training. However,
                  their sensitivity and strong protective instincts mean that training must be thoughtful, consistent,
                  and fair.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age and continuing through adolescence. Introduce your Doberman puppy to a variety of
                  friendly people, dogs, environments, sounds, and situations in a controlled, positive way. Proper
                  socialization helps prevent fearfulness or overprotective behavior and supports the development of a
                  confident, stable adult dog.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement training is particularly effective with
                  Dobermans. Use food rewards, toys, praise, and play to reinforce desired behaviors. Harsh physical
                  corrections or inconsistent handling can damage trust and may create anxiety or defensive responses.
                  Short, engaging training sessions that combine obedience, impulse control, and fun games keep
                  Dobermans mentally satisfied and responsive.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Foundation programs such as AKC S.T.A.R. Puppy, Canine
                  Good Citizen (CGC), and Community Canine (CGCA) are excellent starting points. Many Dobermans thrive
                  in sports such as obedience, rally, tracking, protection sports (where appropriate and ethical),
                  agility, and nosework. Working with an experienced trainer or club familiar with the breed can help
                  you channel their abilities safely and responsibly.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Doberman Pinscher was bred as a personal protection dog and remains one of the most versatile
                  working breeds. Their combination of courage, intelligence, and athleticism allows them to succeed in
                  a wide variety of modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Personal & Family Protection:</strong> Dobermans are naturally watchful and protective of
                    their families. With proper training and temperament, they can serve as reliable deterrents to
                    intruders while remaining gentle with their own household.
                  </li>
                  <li>
                    <strong>Police & Military Work:</strong> Historically used as war dogs and police dogs, some
                    Dobermans still work in law enforcement, patrol, detection, and search roles where their speed and
                    responsiveness are assets.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> The breed stands out in obedience, rally, protection sports, tracking,
                    agility, and other performance venues that reward precision, drive, and handler focus.
                  </li>
                  <li>
                    <strong>Search & Rescue / Detection:</strong> With proper training, Dobermans can work in search &
                    rescue, tracking, and detection roles, benefiting from their keen noses and endurance.
                  </li>
                  <li>
                    <strong>Therapy & Support Work:</strong> Some Dobermans with particularly stable, gentle
                    temperaments serve as therapy dogs or emotional support animals, providing comfort in hospitals,
                    schools, and care facilities.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For many owners, the Doberman&apos;s primary job is
                    being a loving family member, joining hikes, runs, and other adventures while providing a sense of
                    security at home.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Doberman Pinschers good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Dobermans can be excellent family dogs in the right homes. They are often affectionate,
                  people-focused, and very loyal to their families, including children they are raised with. However,
                  they are powerful, energetic dogs with protective instincts, so supervision around small children,
                  early training, and clear boundaries are essential. Families should be prepared to invest in training,
                  socialization, and daily exercise.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Doberman Pinscher puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, health testing, and breeder reputation. From responsible breeders who
                  conduct recommended health screenings and raise puppies in a high-quality environment, Doberman
                  puppies commonly range from around $1,500–$3,500 or more. Puppies from titled working or show lines
                  may cost more. Be cautious of unusually low prices, which can indicate lack of health testing, poor
                  breeding practices, or puppy mill origins.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Dobermans shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dobermans have short coats and are often described as moderate shedders. They shed small hairs
                  year-round, with occasional increases during seasonal changes. Regular brushing once or twice a week
                  helps reduce loose hair and keeps the coat shiny. Prospective owners should still expect some dog hair
                  on clothes and furniture, even though it is less than many long-haired breeds.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Doberman Pinschers aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  A well-bred, well-socialized Doberman should be confident, alert, and stable—not fearful or
                  unnecessarily aggressive. They do possess natural protective instincts and may be reserved with
                  strangers, but indiscriminate aggression is not desirable in the breed. Poor socialization, lack of
                  training, harsh handling, or pain can contribute to behavior problems in any dog, so it is critical to
                  choose responsible breeders and invest in early positive training and ongoing management.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Dobermans live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living is possible for Dobermans if their physical and mental needs are consistently met.
                  They require daily brisk walks, training, and interactive play. Because they are alert watchdogs, some
                  Dobermans may bark at noises in hallways or neighboring units, so management and training for quiet
                  behavior are important. Ultimately, time and commitment from the owner matter more than square
                  footage, but a secure yard or nearby safe exercise area can make life easier with this breed.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between European and American Dobermans or working and show lines?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Broadly speaking, working-line or European-type Dobermans are often bred with a stronger emphasis on
                  drive, working ability, and protection sports, and may have higher energy levels and more intense
                  temperament. American show lines may place more emphasis on conformation and ring presence and can
                  sometimes have somewhat softer or more moderate temperaments, though they are still active working
                  dogs. Individual temperament varies widely, so it is crucial to meet the parents, discuss goals with
                  the breeder, and choose a line that matches your experience and lifestyle.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Doberman Pinscher Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Doberman Pinschers are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Active individuals or families who enjoy regular exercise, training, and outdoor activities</li>
                  <li>
                    Owners who can provide at least 1–2 hours of combined physical and mental exercise most days of the
                    week
                  </li>
                  <li>
                    People interested in obedience, protection sports, tracking, agility, or other advanced training and
                    dog sports
                  </li>
                  <li>
                    Those who want a highly intelligent, people-oriented dog that enjoys close companionship and being
                    part of daily life
                  </li>
                  <li>Homes that can provide clear structure, consistent boundaries, and positive training</li>
                  <li>
                    Owners committed to regular veterinary care, including heart and genetic screening, and who
                    understand the breed&apos;s health considerations
                  </li>
                  <li>People comfortable living with a vigilant guardian that may be reserved with strangers</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Doberman Pinschers may not be ideal for first-time dog owners who are not prepared to invest time in
                  training and management, households seeking a low-energy or highly independent pet, or families away
                  from home for most of the day. Without enough structure, companionship, and appropriate outlets, a
                  Doberman&apos;s intelligence and drive can become challenging to manage.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Doberman Pinscher Breed Standard.&quot; akc.org</li>
                    <li>2. Doberman Pinscher Club of America (DPCA). &quot;Breed Information &amp; Health.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Doberman Pinschers.&quot;</li>
                    <li>4. Various veterinary cardiology resources on Dilated Cardiomyopathy (DCM) in Dobermans.</li>
                    <li>5. Veterinary genetics laboratories. &quot;Von Willebrand&apos;s Disease Testing in Dobermans.&quot;</li>
                    <li>6. AKC Canine Health Foundation. &quot;Inherited Diseases in Working Breeds.&quot;</li>
                    <li>7. DPCA and responsible breeder guidelines for health testing and temperament selection.</li>
                    <li>8. Veterinary nutrition resources on feeding active, medium-to-large working breeds.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/doberman-pinscher" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
