import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Labrador Retriever',
  slug: 'labrador-retriever',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764574690/pexels-brettjordan-2742263_yjdm09.jpg',
  description: 'Friendly • Outgoing • Sporting dogs • Family-oriented • Versatile retrievers',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Labrador Retriever Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Labrador Retriever dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Labrador Retriever',
    'Labrador Retriever breed',
    'Labrador care',
    'Labrador temperament',
    'Labrador training',
    'Labrador health',
    'Lab care guide',
    'AKC Labrador Retriever',
  ],
  pathname: '/pet-breeds/dogs/labrador-retriever',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Labrador Retriever Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Labrador Retriever"
        description="Labrador Retrievers, affectionately called “Labs,” are friendly, outgoing, and highly versatile sporting dogs. Originally bred as fishing and waterfowl retrievers in Newfoundland and later refined in the United Kingdom, they excel as family companions, service dogs, and hunting partners. With proper training and exercise, they are affectionate, eager-to-please companions who thrive on being part of family life."
        emoji="🐕"
        slug="labrador-retriever"
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
                    The Labrador Retriever is a medium-to-large sporting breed known worldwide for its friendly nature,
                    trainability, and strong retrieving instincts. Developed from St. John’s water dogs in Newfoundland
                    and refined in the United Kingdom, Labs were bred to assist hunters by retrieving waterfowl and
                    other game from both land and water. Their hallmark traits include a gentle temperament, a
                    water-resistant coat, and an otter-like tail that helps them swim efficiently.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Labrador Retrievers have long ranked among the most
                    popular dog breeds in the United States and many other countries. Their popularity stems from their
                    outgoing personality, strong desire to please, and ability to adapt to a variety of roles. When
                    given adequate exercise, training, and companionship, Labs make exceptionally loyal family pets as
                    well as outstanding working and service dogs.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Labrador Retriever traces its origins to Newfoundland, off the coast of Canada, where fishermen
                  used sturdy water dogs—often called St. John’s dogs—to retrieve nets, lines, and fish from icy waters.
                  In the 1800s, British sportsmen visiting the region were impressed by these dogs’ retrieving ability
                  and brought them back to England, where they refined the breed for upland and waterfowl hunting.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Over time, careful breeding in the United Kingdom established the modern Labrador Retriever, focusing
                  on a reliable retrieving instinct, a dense water-repellent coat, and a stable, friendly temperament.
                  The AKC recognized the breed in the early 20th century, and the Labrador Retriever Club (LRC) serves
                  as the parent club in the United States. Today, Labs are among the most versatile dog breeds, working
                  as gundogs, service and assistance dogs, search-and-rescue dogs, detection dogs, and beloved family
                  companions.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers are strongly built, medium-to-large dogs with a short, dense coat and a solid,
                  athletic frame. The AKC breed standard describes them as well-balanced, with a broad head, wide
                  muzzle, and kind, intelligent expression. Labs should appear powerful yet agile, reflecting their
                  dual roles as working gundogs and active companions. Their distinctive “otter tail” and water-resistant
                  coat are key features of the breed.
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
                          22.5–24.5 inches
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
                          65–80 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          55–70 pounds
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
                          11–13 years
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
                          Short, dense, straight, weather- and water-resistant double coat
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
                          Black, yellow (light cream to fox red), and chocolate
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Labrador Retrievers have a broad head with a pronounced stop,
                  strong jaws, and a relatively wide muzzle. Their medium-sized, expressive eyes are typically brown,
                  though hazel eyes are seen, especially in chocolate Labs. Ears are set slightly above eye level and
                  hang close to the head. The thick, “otter-like” tail is broad at the base and tapers toward the tip,
                  covered in dense coat and carried level with the back when in motion. Their movement is effortless and
                  efficient, reflecting stamina and sound structure.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers are renowned for their even-tempered, friendly, and outgoing nature. They are
                  typically sociable with people and other dogs, making them one of the most popular choices for family
                  pets. Labs are highly motivated by food and play, particularly retrieving games, which makes them
                  responsive and easy to train using positive reinforcement methods.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Most Labs are confident and affectionate, often greeting guests enthusiastically. While they can make
                  good watchdogs due to their willingness to bark at unusual activity, they are generally not
                  naturally protective in the same way as guarding breeds. Their gentle disposition and patience often
                  make them excellent companions for children when properly supervised and socialized from a young age.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers thrive on human interaction and can develop separation anxiety or boredom-related
                  behaviors if left alone for long periods without adequate mental and physical outlets. They are best
                  suited to homes where they can participate in everyday family activities and have regular training,
                  play, and exercise sessions.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As an energetic sporting breed, Labrador Retrievers require consistent daily exercise to maintain
                  their physical health, manage weight, and prevent behavioral issues. While some show-line Labs may be
                  calmer than high-drive field lines, most need more activity than the average companion dog, especially
                  during adolescence and early adulthood.
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
                          Short, controlled walks, gentle play, basic obedience, socialization, safe exploration (avoid
                          over-exercising growing joints)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1–1.5 hours minimum
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, swimming, retrieving games, hiking, jogging (once mature), field work, agility,
                          scent games
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
                          Gentle walks, swimming (great for arthritic joints), light retrieving, low-impact games and
                          brain puzzles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Mental stimulation is essential for Labradors, particularly younger
                  dogs and field-bred lines. Incorporate puzzle feeders, basic and advanced obedience, nosework, and
                  retrieving games that require control and focus (such as steadiness before a retrieve). Many Labs
                  excel in obedience, rally, field trials, hunting tests, and scent-based sports, all of which help
                  channel their energy productively.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers have a short but dense double coat. The outer coat is straight and somewhat hard,
                  while the undercoat is soft and insulating. Although their coats are relatively low-maintenance
                  compared to long-haired breeds, Labs do shed year-round and may have heavier seasonal shedding. Their
                  coat is naturally water-resistant and should not be over-bathed, as frequent shampooing can strip
                  protective oils.
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
                          Rubber curry brush or slicker brush to remove loose hair and distribute natural oils
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
                          Undercoat rake or de-shedding tool; more frequent brushing helps manage heavy shedding
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
                          Mild dog-specific shampoo; rinse thoroughly, especially after swimming in lakes or the ocean
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
                          Weekly check, clean as needed (especially for swimming Labs)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary ear cleaner, cotton balls; monitor for redness, odor, or head shaking
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
                          Dog toothbrush and toothpaste; dental chews or rinses can supplement brushing
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
                  Proper nutrition is crucial for Labrador Retrievers, particularly because the breed is prone to
                  obesity. Labs generally have hearty appetites and may overeat if given the opportunity. A balanced
                  diet that supports lean muscle, joint health, and a healthy weight is essential for their long-term
                  wellbeing and ability to stay active.
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
                          Varies by age/weight; large-breed puppy formulas help support controlled growth
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
                          ~2.5–3.5 cups (split into meals), adjusted to maintain an ideal body condition score
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
                          ~3.5–4.5 cups, increased or decreased based on workload, environment, and condition
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
                          2–3 cups, tailored to maintain a lean physique and support joint health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Choose diets that list high-quality animal
                  proteins (such as chicken, turkey, fish, or beef) as primary ingredients and avoid excessive calories
                  from fillers and treats. Omega-3 fatty acids support skin, coat, and joint health, while controlled
                  calcium and phosphorus levels are important for growing puppies. Many Labradors benefit from joint
                  supplements containing glucosamine and chondroitin, especially as they age or if they are very active.
                  Because obesity can worsen joint disease and other health issues, regular weight checks and portion
                  control are critical.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> Labrador Retrievers are considered a medium-to-large, deep-chested
                  breed and can be at some risk for gastric dilatation-volvulus (GDV or bloat). To reduce risk, divide
                  daily food into two or more meals, discourage rapid gulping of food (slow-feeder bowls can help), and
                  avoid intense exercise for about an hour before and after meals. Always seek emergency veterinary care
                  immediately if you suspect bloat.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers are generally robust, but they are predisposed to certain inherited and
                  lifestyle-related conditions. Responsible breeders follow health screening recommendations to reduce
                  the incidence of these issues, and puppy buyers should always ask to see documentation of test
                  results. Maintaining a healthy weight, providing appropriate exercise, and scheduling regular
                  veterinary care are key to maximizing a Lab’s lifespan and quality of life.
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
                          Significant breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal hip joint development that can cause pain, arthritis, and reduced mobility; managed
                          with weight control, medication, and in some cases surgery.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          A group of developmental elbow abnormalities that can lead to lameness and arthritis, often
                          requiring lifelong management.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Progressive Retinal Atrophy (PRA) & Other Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          PRA and other inherited eye conditions can cause gradual vision loss and, in some cases,
                          blindness; DNA tests and regular eye exams help manage risk.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Exercise-Induced Collapse (EIC)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Known genetic disorder in Labs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          A condition in which affected dogs may experience muscle weakness, collapse, or disorientation
                          after intense exercise; a DNA test is available to identify carriers and affected dogs.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Obesity & Secondary Joint Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Excess weight increases the risk of arthritis, cruciate ligament tears, diabetes, and other
                          health problems; managed with diet and exercise.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear Infections (Otitis)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common due to drop ears and love of water
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Moisture and debris in the ear canal can lead to bacterial or yeast infections; regular
                          cleaning and drying after swimming are important preventive measures.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and the Labrador Retriever Club recommend specific health tests for breeding dogs. Always ask
                  for official documentation of these screenings when selecting a puppy from a breeder:
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
                          Screen for hip dysplasia and evaluate joint quality for breeding suitability.
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
                          Screen for elbow dysplasia and related structural issues.
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
                          Screen for inherited eye diseases, including PRA and cataracts, on a regular basis.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          PRA & Other Eye Disease DNA Tests
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify carriers and affected dogs for specific genetic eye disorders.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Exercise-Induced Collapse (EIC) DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect presence of the EIC mutation to avoid breeding two carriers together.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation (where indicated)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or veterinary cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for structural or congenital heart abnormalities, particularly in certain lines.
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
                  Labrador Retrievers are highly trainable due to their intelligence, strong work ethic, and desire to
                  please. Their food motivation can make them very responsive to reward-based training, but it also
                  means owners must manage treats carefully to prevent weight gain. Early training helps channel their
                  enthusiasm into good manners and reduces the likelihood of jumping, mouthing, and pulling on leash.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization between 3–14 weeks of age and continue
                  throughout adolescence. Expose your Lab puppy to different people, dogs, environments, and everyday
                  sounds to build confidence and prevent fear-based behaviors. Puppy kindergarten classes are an
                  excellent way to combine socialization with early training.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement using treats, toys, and praise works best
                  with Labs. They tend to respond quickly to clear, consistent cues, but can become bored if training is
                  repetitive. Short, engaging sessions that incorporate play and retrieving are ideal. Harsh corrections
                  are unnecessary and can damage trust, especially in sensitive individuals.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Many Labs benefit from AKC S.T.A.R. Puppy and Canine
                  Good Citizen (CGC) programs as foundations for manners. They often excel in obedience, rally,
                  retriever hunt tests, field trials, and scent-based sports such as tracking and nosework. For dogs
                  with suitable temperaments, advanced training can prepare them for service work or therapy dog roles.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers are among the most versatile working dogs in the world. Their intelligence,
                  trainability, strong retrieving instinct, and stable temperament make them ideal for a wide variety of
                  roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Hunting & Field Work:</strong> Labs are classic waterfowl and upland game retrievers, valued
                    for their ability to locate and retrieve downed birds from land and water in challenging conditions.
                  </li>
                  <li>
                    <strong>Service & Assistance Dogs:</strong> Many Labrador Retrievers are trained as guide dogs for
                    the visually impaired, mobility assistance dogs, medical alert dogs, and psychiatric service dogs.
                  </li>
                  <li>
                    <strong>Detection Dogs:</strong> Labs are widely used in detection work, including narcotics,
                    explosives, agricultural products, and search-and-rescue tasks, thanks to their keen noses and
                    strong motivation to work.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> Their gentle, people-oriented temperament often makes
                    them excellent therapy dogs in hospitals, schools, and elder-care facilities.
                  </li>
                  <li>
                    <strong>Sport & Performance Dogs:</strong> Labrador Retrievers excel in obedience, rally, diving
                    sports, dock diving, and scent-based competitions, where their enthusiasm and athleticism shine.
                  </li>
                  <li>
                    <strong>Active Family Companion:</strong> Above all, many Labs serve as beloved family members who
                    join their owners on hikes, trips to the lake, road trips, and daily adventures.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Labrador Retrievers good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Labrador Retrievers are widely regarded as excellent family dogs. They are typically friendly,
                  patient, and affectionate with both adults and children. Their playful nature and tolerance make them
                  a popular choice for families, though young Labs can be boisterous and may accidentally knock over
                  small children if not taught good manners. Supervision, training, and appropriate outlets for energy
                  are important in households with kids.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Labrador Retriever puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Costs vary based on region, pedigree, and breeder practices. From reputable breeders who perform
                  recommended health testing and raise puppies in a high-quality environment, Labrador Retriever puppies
                  typically range from around $1,000–$2,500 or more. Puppies from champion field-trial or conformation
                  lines may be higher. Very low prices can indicate a lack of health testing or substandard breeding
                  practices, so always research breeders carefully and ask to see health clearances.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Labrador Retrievers shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Labrador Retrievers are moderate to heavy shedders. They shed throughout the year, with heavier
                  seasonal shedding occurring once or twice annually. Regular brushing, especially during shedding
                  seasons, helps remove loose hair and keep the coat healthy. Prospective owners should be prepared for
                  noticeable dog hair on clothing, furniture, and floors.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Labrador Retrievers aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers are not typically aggressive. The breed standard emphasizes a kind, outgoing,
                  even-tempered disposition. While any dog can show aggression under certain circumstances, well-bred
                  and well-socialized Labs are generally friendly and tolerant. Poor socialization, fear, pain, or
                  harsh handling can contribute to behavior issues, so early positive training and veterinary care are
                  important for every Labrador.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Labrador Retrievers live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers can live in apartments if their exercise and mental needs are consistently met.
                  This typically means multiple daily walks, play sessions, and training or enrichment activities.
                  Without sufficient activity, Labs may become bored, vocal, or destructive in smaller spaces. Access to
                  nearby parks, dog-friendly trails, or safe off-leash areas is very helpful for apartment-dwelling
                  Labs. Homes with fenced yards often make it easier to provide daily exercise but are not a substitute
                  for interactive activity with their owners.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between English (show) and American (field) Labradors?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The terms “English” and “American” Labradors are informal descriptions used to distinguish different
                  lines within the breed. English or show-bred Labs often have a stockier build, broader heads, and may
                  have somewhat calmer temperaments, as they are bred primarily for conformation shows. American or
                  field-bred Labs are typically taller, leaner, and bred for hunting and field work, with higher energy
                  levels and drive. Both types are purebred Labrador Retrievers and can make wonderful companions,
                  though field lines often require more exercise and training to stay well-mannered in a pet home.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Labrador Retriever Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    Families and individuals who want a friendly, social companion that enjoys being part of daily life
                  </li>
                  <li>Owners who can provide at least 1–1.5 hours of exercise and mental enrichment most days</li>
                  <li>
                    People interested in activities such as hiking, swimming, hunting, retrieving games, or dog sports
                  </li>
                  <li>
                    Those who appreciate a trainable, food-motivated dog and are willing to invest in regular training
                    and manners
                  </li>
                  <li>
                    Homes that can manage shedding and are prepared for regular brushing and basic grooming tasks
                  </li>
                  <li>
                    Owners committed to maintaining a healthy weight through portion control, limited treats, and
                    consistent exercise
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Labrador Retrievers may not be ideal for people who prefer a very low-energy or independent dog, those
                  who dislike shedding, or households that cannot provide sufficient time for exercise, training, and
                  companionship. When their needs are met, Labs reward their families with unwavering loyalty, affection,
                  and enthusiasm for life.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Labrador Retriever Breed Standard.&quot; akc.org</li>
                    <li>2. Labrador Retriever Club (LRC). &quot;Health &amp; Genetics Information.&quot; thelabradorclub.com</li>
                    <li>3 Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Labrador Retrievers.&quot; ofa.org</li>
                    <li>4. AKC Canine Health Foundation. &quot;Hip &amp; Elbow Dysplasia in Large Breeds.&quot;</li>
                    <li>5. AKC Canine Health Foundation. &quot;Exercise-Induced Collapse (EIC) in Labrador Retrievers.&quot;</li>
                    <li>6. American College of Veterinary Ophthalmologists (ACVO). &quot;Inherited Eye Diseases in Dogs.&quot;</li>
                    <li>7. Labrador Retriever Club. &quot;Guidelines for Responsible Breeding.&quot;</li>
                    <li>8. Veterinary nutrition resources on feeding and weight management in large sporting breeds.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/labrador-retriever" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
