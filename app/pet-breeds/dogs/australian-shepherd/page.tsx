import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Australian Shepherd',
  slug: 'australian-shepherd',
  imageUrl: 'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764445719/Australian_Shepherd_yw4shs.jpg',
  description: 'Energetic • Intelligent • Herding dogs • Affectionate • Versatile',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Australian Shepherd Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Australian Shepherd dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Australian Shepherd',
    'Australian Shepherd breed',
    'Australian Shepherd care',
    'Australian Shepherd temperament',
    'Australian Shepherd training',
    'Australian Shepherd health',
    'Aussie care guide',
    'AKC Australian Shepherd',
  ],
  pathname: '/pet-breeds/dogs/australian-shepherd',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Australian Shepherd Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Australian Shepherd"
        description="Australian Shepherds, often called “Aussies,” are intensely intelligent, energetic, and people-focused herding dogs. Developed as ranch partners in the American West, they excel at herding, dog sports, and active family life. With the right training and outlet for their energy, they become affectionate, devoted companions who love having a job to do."
        emoji="🐕"
        slug="australian-shepherd"
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
                    The Australian Shepherd is a highly versatile herding breed known for its athleticism, sharp mind, and strong work ethic. Despite the name, the breed was developed primarily in the western United States as an all-purpose ranch dog, prized by shepherds and farmers for its ability to move livestock over challenging terrain and respond instantly to subtle handler cues.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Australian Shepherds consistently rank among the most popular herding breeds. Their popularity stems from their eager-to-please nature, exceptional trainability, and suitability for active homes. When given enough exercise and mental stimulation, Aussies make loyal, affectionate family companions and outstanding performance dogs in sports such as agility, obedience, rally, and herding trials.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The true origins of the Australian Shepherd are somewhat debated, but most historians agree that the modern breed was developed in the United States, not Australia. Shepherds working in the American West likely developed Aussies from a mix of European herding breeds brought by Basque and other shepherds, some of whom had traveled through Australia with their flocks. Because these dogs were associated with “Australian” sheep or shepherds, the name Australian Shepherd stuck.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Throughout the 19th and early 20th centuries, Australian Shepherds became indispensable partners on ranches and farms, valued for their stamina, intelligence, and natural herding instincts. They gained wider recognition performing in rodeos and traveling shows, impressing crowds with their trick work and stock-handling skills. The AKC formally recognized the breed in 1993, and the United States Australian Shepherd Association (USASA) serves as the parent club. Today, Aussies remain popular working ranch dogs and excel in a wide variety of canine sports and roles.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds are medium-sized, well-balanced dogs built for endurance and agility rather than bulk. According to the AKC breed standard, they should appear slightly longer than tall, with a solid, muscular body, level topline, and smooth, efficient movement that reflects their herding purpose. Their alert expression, mobile ears, and often striking eye colors give them a keen, intelligent appearance.
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
                          20–23 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          18–21 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          50–65 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          40–55 pounds
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
                          Medium-length, weather-resistant double coat; straight to wavy
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
                          Blue merle, red merle, black, red – all may have white markings and/or copper points
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Australian Shepherds have a clean-cut, moderately broad head
                  with a well-defined stop and a slightly rounded skull. Their eyes can be brown, blue, amber, or a
                  combination, often giving them a striking, mismatched look. Ears are set high and of moderate size,
                  breaking forward and over. The breed may have a naturally bobbed tail or a docked tail where legal,
                  typically no more than a few inches long. Their effortless, ground-covering gait allows them to work
                  long days without tiring.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds are exceptionally intelligent, biddable, and driven to work. They are quick
                  learners with strong problem-solving skills and a deep desire to collaborate with their people. This
                  combination makes them extremely trainable, but also means they can become bored and mischievous if
                  left under-stimulated.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Aussies are typically devoted to their families and may be reserved or cautious with strangers. Many
                  have a natural protective instinct and will bark to alert their owners to unusual activity, making
                  them vigilant watchdogs. Early socialization helps prevent shyness or overprotective behavior and
                  supports a confident, stable temperament.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Herding instincts are strong in this breed and may manifest as nudging, circling, or heel nipping,
                  especially around running children or other animals. Consistent training and redirection are
                  important to channel these instincts into appropriate activities. Aussies thrive in homes where they
                  can be involved in daily life, learn new tasks, and spend plenty of quality time with their people.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a high-drive herding breed, Australian Shepherds require substantial daily exercise and mental
                  engagement. Without enough activity, they can quickly develop nuisance behaviors such as barking,
                  digging, chewing, and hyperactivity. Exercise needs vary by age and individual energy level, but most
                  Aussies are more intense than the average companion dog.
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
                          Short walks, gentle play, basic obedience, socialization, safe exploration
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1.5–2 hours minimum
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Running, hiking, fetch, agility, herding lessons, frisbee, structured obedience, scent games
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, swimming, light play, low-impact games, brain puzzles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Aussies need just as much mental work as physical activity. Include
                  puzzle feeders, trick training, nosework, interactive toys, and dog sports in their routine. Many
                  Australian Shepherds excel in agility, rally, obedience, herding trials, flyball, disc dog events,
                  and other competitive activities that allow them to think and move at the same time.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds have a medium-length, weather-resistant double coat. The outer coat is
                  moderately coarse and can be straight or wavy, while the undercoat varies in density depending on
                  climate. The coat provides protection from the elements but also sheds moderately year-round, with
                  heavier seasonal shedding once or twice a year as they “blow” their undercoat.
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
                          Slicker brush, pin brush, undercoat rake; focus on feathering and pants
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
                          Undercoat rake, de-shedding tool, thorough line brushing
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
                          Dog-specific shampoo and conditioner; rinse thoroughly to avoid skin irritation
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
                          Veterinary ear cleaner, cotton balls; watch for redness or odor
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
                          Dog toothbrush and toothpaste; add dental chews or rinses as recommended
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
                  Proper nutrition is critical to support the Australian Shepherd&apos;s active lifestyle, lean
                  musculature, and long-term health. As medium-sized, athletic herding dogs, Aussies do best on
                  high-quality diets that prioritize animal-based protein and appropriate fat levels to fuel their
                  energy needs.
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
                          8–12%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~2–3 cups (split into meals), adjusted for weight and activity
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
                          ~3–4 cups, adjusted for workload and condition
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
                          1.5–2.5 cups, tailored to activity and joint health
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
                  fatty acids support skin, coat, and joint health—especially important for active Aussies. Some dogs
                  may benefit from joint supplements containing glucosamine and chondroitin. Because Australian
                  Shepherds can be prone to food sensitivities, work with your veterinarian if you suspect allergies or
                  digestive issues.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> While Australian Shepherds are not as strongly associated with
                  gastric dilatation-volvulus (GDV or bloat) as some large, deep-chested breeds, any dog can be
                  affected. To reduce risk, divide daily food into two or more meals, avoid rapid gulping of food (use
                  slow-feeder bowls if needed), and limit vigorous exercise for about an hour before and after meals.
                  Always seek emergency veterinary care immediately if you suspect bloat.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds are generally healthy, robust dogs, but like all purebred breeds, they are
                  predisposed to certain inherited conditions. Responsible breeders use health testing and careful
                  selection to reduce the risk of these diseases. Prospective owners should be familiar with common
                  health concerns and ask breeders for documentation of health clearances.
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
                          Abnormal hip joint development leading to arthritis, pain, and reduced mobility
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Lower to moderate risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Developmental abnormalities in the elbow joint that can cause lameness and arthritis
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes cataracts, Collie Eye Anomaly (CEA), Progressive Retinal Atrophy (PRA), and other
                          inherited eye conditions
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          MDR1 Drug Sensitivity
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common genetic mutation in herding breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          A mutation in the MDR1 gene can cause severe reactions to certain medications; DNA testing is
                          available
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
                          Seizure disorder that may have a hereditary component in some bloodlines
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Autoimmune Thyroiditis
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Immune-related thyroid disease that can cause lethargy, weight gain, and coat changes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and United States Australian Shepherd Association (USASA) recommend health testing for
                  breeding dogs. Always request copies of official health clearances when purchasing a puppy from a
                  breeder:
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
                          Elbow Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for elbow dysplasia
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
                          Screen for hereditary eye diseases such as cataracts, CEA, and PRA
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          MDR1 DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify dogs affected by or carriers of MDR1 drug sensitivity
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Cataract / PRA DNA Tests
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect genetic mutations associated with eye disease
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
                    </tbody>
                  </table>
                </div>

                {/* Training */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Training & Socialization
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds are among the most trainable dog breeds thanks to their intelligence, strong
                  focus, and eagerness to work with their handlers. They pick up new cues quickly and excel at
                  multi-step behaviors, making them ideal partners for advanced obedience and performance sports. This
                  trainability, however, also means they learn undesirable habits just as easily if left unsupervised or
                  unstructured.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Expose your Aussie puppy to a wide variety of people, dogs, environments, surfaces, and
                  sounds in a controlled, positive way. This helps prevent fearfulness and supports the development of a
                  confident, adaptable adult dog that can handle busy households, travel, and public spaces with ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods work best for Australian
                  Shepherds. Use food rewards, toys, praise, and play to reinforce desired behaviors. Aussies are
                  sensitive and bond tightly with their people, so harsh corrections can damage trust and lead to
                  anxiety or shut-down responses. Short, frequent training sessions that mix obedience, tricks, and
                  games keep them engaged and happy.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy, Canine Good Citizen
                  (CGC), and Community Canine (CGCA) as foundations for manners and reliability. Many Australian
                  Shepherds thrive in advanced outlets such as agility, rally, competitive obedience, herding, disc
                  sports, dock diving, and nosework. These activities give them a productive way to channel their energy
                  and drive.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds were bred first and foremost as working stock dogs, and many still excel on
                  ranches and farms today. Their intelligence, athleticism, and strong bond with their handlers also
                  allow them to succeed in a wide range of modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Herding & Ranch Work:</strong> Aussies retain strong natural herding instincts and are
                    highly valued on cattle and sheep operations for their agility, stamina, and responsiveness to
                    whistles and voice commands.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> The breed is a top performer in agility, obedience, rally, flyball,
                    dock diving, and disc dog events, where speed, coordination, and responsiveness are rewarded.
                  </li>
                  <li>
                    <strong>Search & Rescue / Detection:</strong> Some Australian Shepherds work in search and rescue,
                    scent detection, and tracking roles, benefiting from their keen noses and focus.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> Their affectionate, people-oriented nature can make
                    them excellent therapy dogs when they have a stable temperament and good manners.
                  </li>
                  <li>
                    <strong>Service Dogs:</strong> While less common than some breeds, Aussies are sometimes used as
                    medical alert, psychiatric service, or mobility assistance dogs when carefully selected and trained.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For many owners, the Aussie&apos;s primary job is being a
                    beloved family member who joins in on hikes, runs, camping trips, and everyday adventures.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Australian Shepherds good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Australian Shepherds can be wonderful family dogs for active households. They are typically loyal,
                  affectionate, and playful with their people and often form very strong bonds with children. However,
                  their herding instincts and high energy mean they may try to herd running kids or other pets. Proper
                  training, supervision, and outlets for energy are essential, especially in homes with small children.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does an Australian Shepherd puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing and raise puppies in a high-quality environment, Australian Shepherd puppies often range from
                  around $1,000–$2,500 or more. Puppies from proven performance or show lines may be higher. Be cautious
                  of unusually low prices, which can be a red flag for poor breeding practices or lack of health
                  testing.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Australian Shepherds shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Australian Shepherds are moderate to heavy shedders. They shed throughout the year and typically
                  experience heavier seasonal shedding when they blow their undercoat. Regular brushing—several times a
                  week, and more often during shedding seasons—helps manage loose hair and keep the coat healthy.
                  Prospective owners should be comfortable with dog hair on clothes and furniture.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Australian Shepherds aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds are not inherently aggressive. Well-bred, well-socialized Aussies are typically
                  confident, loyal, and responsive to their owners. They may be reserved with strangers and can be
                  vocal, but outright aggression is not typical of the breed. Poor socialization, harsh handling, or
                  pain can contribute to behavior problems in any dog, so early positive training and appropriate
                  management are important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Australian Shepherds live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living is possible for Australian Shepherds, but it requires a very committed owner. Aussies
                  need significant daily exercise and mental stimulation, which means multiple brisk walks, active play,
                  and training sessions every day. Without enough outlets, they can become restless and destructive.
                  Homes with secure yards are often easier for meeting an Aussie&apos;s needs, but lifestyle and time
                  commitment matter more than square footage alone.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between working and show lines in Australian Shepherds?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Working-line Australian Shepherds are bred primarily for herding ability, stamina, and strong drive.
                  They often have extremely high energy levels and thrive in homes that actively use them for stock work
                  or intense dog sports. Show-line Aussies are bred with conformation standards in mind and may have
                  somewhat calmer temperaments, though they are still active, intelligent dogs. Both types need training
                  and exercise, but working lines generally demand more time, structure, and experience from their
                  owners.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is an Australian Shepherd Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Active individuals or families who enjoy hiking, running, or outdoor activities</li>
                  <li>Owners who can provide at least 1.5–2 hours of physical and mental exercise most days</li>
                  <li>People interested in dog sports, herding, or advanced training and trick work</li>
                  <li>
                    Those who want a highly intelligent, people-oriented dog that likes to be involved in daily life
                  </li>
                  <li>Homes with securely fenced yards or access to safe off-leash exercise areas</li>
                  <li>Owners committed to consistent training, socialization, and ongoing enrichment</li>
                  <li>People comfortable with regular grooming and shedding management</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Australian Shepherds may not be ideal for first-time dog owners with very limited time, families who
                  prefer a low-energy or independent pet, or those who are away from home most of the day. Without
                  enough attention, structure, and activity, an Aussie&apos;s intelligence and drive can quickly become
                  overwhelming.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Australian Shepherd Breed Standard.&quot; akc.org</li>
                    <li>2. United States Australian Shepherd Association (USASA). &quot;Health &amp; Genetics.&quot;</li>
                    <li>3. Australian Shepherd Health &amp; Genetics Institute (ASHGI). &quot;Breed Health Information.&quot;</li>
                    <li>4. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Australian Shepherds.&quot;</li>
                    <li>5. AKC Canine Health Foundation. &quot;Inherited Eye Diseases in Herding Breeds.&quot;</li>
                    <li>6. ASHGI. &quot;MDR1 Drug Sensitivity in Australian Shepherds.&quot;</li>
                    <li>7. USASA. &quot;Guidelines for Responsible Breeding.&quot;</li>
                    <li>8. Various veterinary nutrition resources on feeding active herding breeds.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/australian-shepherd" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
