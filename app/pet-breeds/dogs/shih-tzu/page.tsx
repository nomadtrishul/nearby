import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Shih Tzu',
  slug: 'shih-tzu',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764592311/pexels-caio-61372_cyieqb.jpg',
  description: 'Affectionate • Playful • Toy breed • Companion dog • Confident',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Shih Tzu Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Shih Tzu dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this affectionate toy companion breed.',
  keywords: [
    'Shih Tzu',
    'Shih Tzu breed',
    'Shih Tzu care',
    'Shih Tzu temperament',
    'Shih Tzu training',
    'Shih Tzu health',
    'Shih Tzu care guide',
    'AKC Shih Tzu',
  ],
  pathname: '/pet-breeds/dogs/shih-tzu',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Shih Tzu Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Shih Tzu"
        description="Shih Tzus are cheerful, people-loving toy companions originally developed as treasured palace dogs in China. Known for their big personality, flowing coat, and charming expression, they thrive as indoor family pets. With thoughtful grooming, positive training, and moderate daily exercise, Shih Tzus become affectionate, adaptable companions who love being close to their people."
        emoji="🐶"
        slug="shih-tzu"
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
                    The Shih Tzu is a small, sturdy toy breed known for its charming personality, flowing coat, and
                    strong desire to be close to its family. Bred for centuries as a royal lap dog, the Shih Tzu is
                    happiest living indoors as a companion, sharing everyday life on the sofa, at your feet, and in
                    your arms. Despite their size, they are confident, bold little dogs with a surprisingly big
                    presence.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Shih Tzus consistently rank among the most popular toy
                    breeds. Their popularity stems from their affectionate, people-focused nature, adaptability to many
                    living situations, and generally friendly disposition. With appropriate grooming, regular
                    veterinary care, and positive training, Shih Tzus make loving companions for singles, seniors, and
                    families alike.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Shih Tzu&apos;s history traces back to imperial China, where small lion-like lap dogs were prized
                  by royalty and nobility. The breed is believed to have originated from crosses between Tibetan breeds
                  such as the Lhasa Apso and small Chinese palace dogs. Bred primarily as companions, these little dogs
                  were valued for their beauty, loyalty, and calm yet confident demeanor.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus were guarded closely within palace walls until the early 20th century, when a few dogs were
                  brought to Europe and later to North America. The breed quickly gained fans for its friendly nature
                  and glamorous coat. The AKC formally recognized the Shih Tzu in 1969, and the American Shih Tzu Club
                  (ASTC) serves as the parent club. Today, Shih Tzus are cherished worldwide as companion dogs and
                  beloved household pets.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus are compact, solidly built toy dogs with a distinctively sweet, chrysanthemum-like face.
                  According to the AKC breed standard, they should be slightly longer than tall, with good bone and a
                  level topline. Their large, dark eyes, short muzzle, and proud carriage give them an alert, friendly
                  expression, while their plumed tail curls gracefully over the back.
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
                          9–10.5 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          9–10.5 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          9–16 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          9–16 pounds
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
                          10–16 years
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
                          Long, dense, double coat; luxurious and flowing, often kept in a shorter “puppy cut” for
                          easier maintenance
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
                          All colors and markings are acceptable; common combinations include gold and white, black and
                          white, brindle and white, solid black, solid liver, or tri-color patterns
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Shih Tzus have a broad, rounded head with a short, square
                  muzzle and a well-developed underjaw. Their large, round, dark eyes contribute to a warm, gentle
                  expression. Ears are heavily feathered and set slightly below the crown of the skull. The neck is
                  proudly arched, and the body is sturdy and compact. Their characteristic coat may be parted down the
                  back and styled with a topknot to keep hair out of the eyes. Despite their small size, they should
                  feel solid and substantial when picked up.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus are affectionate, outgoing, and often described as cheerful little companions. They are
                  typically friendly with family, visitors, and other pets when properly socialized. Bred as companion
                  dogs rather than workers, they are more interested in people-time than having a “job,” and they enjoy
                  lounging on laps as much as playing on the floor.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While generally adaptable, Shih Tzus can be somewhat independent and may display a hint of stubborn
                  streak during training. Many are alert and will bark to announce visitors or unusual noises, but they
                  are not meant to be guard dogs. Early socialization helps ensure they remain confident, friendly, and
                  comfortable in a variety of situations, from busy city streets to quiet homes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Because they form strong bonds with their people, Shih Tzus may dislike being left alone for long
                  stretches. They do best in households where someone is home for a good portion of the day or where
                  they can accompany their owners in daily routines. With thoughtful management and training, they make
                  excellent companions for seniors, families, and first-time dog owners willing to commit to grooming
                  and gentle guidance.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a toy companion breed, the Shih Tzu&apos;s exercise needs are moderate compared to many larger
                  working dogs, but they still require daily activity to stay fit, mentally stimulated, and well
                  behaved. Short walks, play sessions, and indoor games are often enough for most individuals, though
                  some may be surprisingly energetic and enjoy longer outings in cooler weather.
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
                          5 minutes per month of age, 2x daily (split into short sessions)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, gentle play on soft surfaces, basic obedience, socialization, interactive toys
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes total, broken into 2–3 sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leisurely walks, indoor fetch, short training games, puzzle toys, gentle stair or hallway
                          play (avoiding overexertion in heat)
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
                          Gentle walks, sniffing time, low-impact play, food puzzles, short training refreshers
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Even though Shih Tzus are not intense working dogs, they still
                  benefit from mental enrichment. Include basic obedience practice, trick training, snuffle mats,
                  puzzle feeders, and scent games in their routine. These activities help reduce boredom, support good
                  manners, and provide stimulation without overtaxing their bodies.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus have a luxurious, double coat that requires consistent care. Left in full length, the coat
                  can tangle and mat easily, especially around the ears, armpits, and hindquarters. Many pet owners opt
                  for a shorter “puppy cut” to make daily grooming more manageable, but even shorter styles benefit from
                  regular brushing, bathing, and professional grooming to keep the coat and skin healthy.
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
                          Brushing (full coat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Pin brush, comb, detangling spray; gently work through small sections to prevent mats
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (puppy cut/short coat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Slicker or pin brush; focus on friction areas (ears, collar area, armpits)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing & conditioning
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 3–6 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle, dog-specific shampoo and conditioner; blow-dry while brushing to prevent tangles
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Professional grooming / haircut
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–8 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Work with a groomer familiar with Shih Tzu coats; discuss desired length and face/eye trim
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Face & eye cleaning
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Use a damp cloth or pet-safe wipes to clean tear staining and food debris from face and beard
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
                          Trim or grind; shorter nails support comfort and joint health, especially in small breeds
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
                          Veterinary ear cleaner, cotton balls; monitor for odor, redness, or head shaking
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
                          Dog toothbrush and toothpaste; small breeds are prone to dental disease—regular vet cleanings
                          often recommended
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
                  Proper nutrition is critical to support the Shih Tzu&apos;s overall health, skin and coat quality, and
                  ideal body weight. As a small, sturdy toy breed, the Shih Tzu does best on high-quality diets
                  formulated for small dogs, with kibble size appropriate for their smaller mouths and nutrient levels
                  tailored to their life stage and activity level.
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
                          Typically ~½–1 cup total, adjusted for age and weight; follow vet and food label guidance
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–4 (smaller, frequent meals help prevent hypoglycemia in tiny puppies)
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
                          ~½–1¼ cups total, adjusted for weight, activity, and body condition
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
                          22–28%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          May need toward the higher end of ~1–1½ cups, guided by activity level and vet advice
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
                          Often ~½–1 cup, tailored to activity, weight, and joint health
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
                  proteins (such as chicken, turkey, fish, or lamb) as the first ingredient. Omega-3 and Omega-6 fatty
                  acids support skin and coat health, which is especially important for long-coated breeds. Because Shih
                  Tzus can be prone to obesity and dental disease, avoid overfeeding, limit high-calorie treats, and
                  consider dental-support diets or chews as recommended by your veterinarian.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Feeding Tips & Special Considerations:</strong> Shih Tzus have short, brachycephalic muzzles,
                  so choose kibble shapes that are easy for them to pick up and chew. Use raised bowls only if your vet
                  advises it, and always provide fresh water. For very small or picky eaters, adding a bit of warm water
                  or a spoonful of wet food can increase palatability. Monitor body condition regularly rather than
                  relying solely on the measuring cup, and work with your vet to adjust portions as needed.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus are generally long-lived, but like all breeds, they are predisposed to certain health
                  conditions. Responsible breeders use health testing and careful selection to reduce the risk of
                  inherited disease. Prospective owners should understand common health concerns in the breed and ask
                  for documentation of health clearances when purchasing a puppy.
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
                          Brachycephalic Airway Syndrome
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Combination of airway abnormalities related to short muzzle; may cause snoring, noisy
                          breathing, and heat intolerance
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Eye Problems (Corneal Ulcers, Dry Eye, etc.)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common toy-breed issue
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Prominent eyes are more vulnerable to injury, irritation, and tear film abnormalities; regular
                          monitoring and prompt treatment are important
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patellar Luxation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Moderate toy-breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Kneecap slips out of place, causing intermittent lameness or skipping gait; severity varies
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Intervertebral Disc Disease (IVDD)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative spinal disc changes that can cause pain or neurologic deficits; avoiding jumping
                          from heights can help protect the spine
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
                          Crowded teeth and tartar buildup can lead to gum disease, infection, and tooth loss without
                          regular dental care
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Allergies & Skin Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Environmental or food allergies may cause itching, ear infections, or chronic skin problems;
                          management often includes diet and medication
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and American Shih Tzu Club (ASTC) recommend health testing for breeding dogs. Always request
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
                          OFA or equivalent
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for patellar luxation and assess knee stability
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hip Evaluation (optional but beneficial)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or PennHIP
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Assess for hip dysplasia and joint quality, especially in breeding dogs or heavier individuals
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
                          Screen for hereditary eye diseases and structural eye issues common in brachycephalic breeds
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation (as indicated)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect congenital or acquired heart conditions that may affect breeding suitability
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Genetic Testing (where available)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or approved genetic laboratories
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify carriers or affected dogs for specific inherited conditions relevant to Shih Tzus
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
                  Shih Tzus are bright and capable learners, but their companion-dog background and occasional
                  stubbornness mean training works best when it is fun, gentle, and reward based. They often respond
                  enthusiastically to praise, treats, and play, but may shut down or resist if training feels harsh or
                  repetitive. Consistency and patience are key to developing good manners.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Introduce your Shih Tzu puppy to a range of people, dogs, and environments in a positive
                  way. Because they are small and can be easily overwhelmed, protect them from rough handling and overly
                  boisterous dogs or children. Thoughtful socialization builds confidence and helps prevent fear-based
                  barking or reactivity.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods work best. Use small, tasty treats
                  and short sessions to teach basic cues like sit, down, come, and leave it. Many Shih Tzus benefit from
                  crate training and structured house-training routines, as small breeds can sometimes take longer to
                  fully housebreak. Keep sessions brief and upbeat, ending on a success to maintain enthusiasm.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy kindergarten, AKC S.T.A.R. Puppy, and Canine
                  Good Citizen (CGC) programs are excellent starting points. While they may not have the same drive as
                  high-energy working breeds, many Shih Tzus enjoy low-impact activities such as basic obedience,
                  tricks, rally, and even therapy dog work when their temperament and training are well suited.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus were bred primarily as companions rather than working dogs, but their affectionate, social
                  nature and adaptability allow them to excel in several modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Companion Dogs:</strong> Their primary &quot;job&quot; is being a loving, close companion
                    who shares daily life with their people—on the sofa, on errands, and at family gatherings.
                  </li>
                  <li>
                    <strong>Therapy Dogs:</strong> Many Shih Tzus make excellent therapy dogs, visiting hospitals,
                    schools, and nursing homes thanks to their small size, friendly temperament, and gentle nature.
                  </li>
                  <li>
                    <strong>Family Pets:</strong> In homes that can supervise small dogs around young children and
                    commit to grooming, Shih Tzus can be affectionate and playful family members.
                  </li>
                  <li>
                    <strong>Training & Dog Sports:</strong> Some Shih Tzus participate in obedience, rally, tricks, and
                    other low-impact sports. While they may not be the fastest competitors, they often charm audiences
                    with their enthusiasm and personality.
                  </li>
                  <li>
                    <strong>Companions for Seniors or Apartment Dwellers:</strong> Their modest exercise needs and
                    small size make them well-suited to apartments and to people who prefer shorter walks and more
                    indoor time, provided grooming and vet care are prioritized.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Shih Tzus good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Shih Tzus can be wonderful family dogs when children are taught to handle them gently and
                  respectfully. They are typically affectionate, playful, and eager to be involved in family activities.
                  Because they are small and somewhat delicate, interactions with very young children should always be
                  supervised to prevent accidental injury from rough play or dropping.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Shih Tzu puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing and raise puppies in a high-quality environment, Shih Tzu puppies often range from around
                  $1,000–$2,500 or more. Puppies from champion show lines or with specific pedigrees may be higher. Be
                  cautious of unusually low prices or breeders who cannot provide health clearances and references.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Shih Tzus shed a lot? Are they hypoallergenic?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus have hair that grows continuously and sheds less visibly than many double-coated breeds.
                  However, they are not truly hypoallergenic, as all dogs produce dander and saliva proteins that can
                  trigger allergies. Regular grooming, bathing, and brushing can help reduce loose hair and dander in
                  the environment, but allergy sufferers should spend time with the breed before committing to ownership.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Shih Tzus aggressive or stubborn?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred and well-socialized Shih Tzus are typically friendly and good-natured, not aggressive.
                  However, they can be independent and may test boundaries if rules are inconsistent. Gentle, consistent
                  training and clear expectations usually result in a polite, cooperative companion. As with any breed,
                  fear, pain, or poor handling can contribute to behavior problems, so early positive experiences are
                  important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Shih Tzus live in apartments and be left alone during the day?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus adapt very well to apartment living as long as their exercise, grooming, and social needs
                  are met. They do not require a large yard and are generally content with short walks and indoor play.
                  However, they thrive on human company and may become lonely or vocal if left alone for long stretches
                  every day. Breaks in the middle of the day, dog walkers, or having multiple pets can help reduce
                  boredom and separation-related stress.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much grooming does a Shih Tzu really need?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Grooming needs are significant compared to many other breeds. In a full coat, daily brushing and
                  frequent baths are essential to prevent mats. Even in a shorter “puppy cut,” Shih Tzus require regular
                  brushing, face and eye cleaning, nail trims, and professional grooming every 4–8 weeks. Prospective
                  owners should budget both time and money for lifelong coat care and may wish to consult a groomer
                  before bringing a Shih Tzu home.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Shih Tzus good for first-time dog owners?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus can be good choices for first-time dog owners who understand and accept the grooming
                  commitment. Their moderate exercise needs, affectionate nature, and small size are appealing, but
                  owners should be prepared for house-training that may take time, regular grooming appointments, and
                  ongoing training. Working with a good breeder, trainer, and groomer can make the experience smoother
                  for new dog guardians.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Shih Tzu Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Shih Tzus are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Individuals or families seeking a friendly, affectionate indoor companion</li>
                  <li>
                    Owners who can commit to regular grooming—both at home and with a professional groomer throughout
                    the dog&apos;s life
                  </li>
                  <li>People living in apartments, condos, or homes without large yards</li>
                  <li>
                    Those who prefer shorter daily walks and indoor play over high-intensity exercise or sports
                    training
                  </li>
                  <li>
                    Households where someone is home much of the day, or that can arrange midday visits to reduce alone
                    time
                  </li>
                  <li>
                    Owners willing to invest in preventive veterinary care, including dental cleanings and eye/airway
                    monitoring
                  </li>
                  <li>
                    Families who will teach children to be gentle and respectful with a small companion dog
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  A Shih Tzu may not be ideal for people who dislike grooming, want a very low-maintenance dog, or
                  prefer long, strenuous hikes and athletic dog sports. For those who enjoy brushing, snuggling, and
                  sharing their daily routines with a small, big-hearted companion, the Shih Tzu can be a deeply
                  rewarding choice.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Shih Tzu Breed Standard.&quot; akc.org</li>
                    <li>2. American Shih Tzu Club (ASTC). &quot;Breed Information &amp; Health.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Toy Breeds.&quot;</li>
                    <li>4. Various veterinary ophthalmology and dentistry resources on toy-breed eye and dental care.</li>
                    <li>5. Veterinary behavior and training resources on small-breed puppy socialization and house-training.</li>
                    <li>6. Small-breed veterinary nutrition guidelines for feeding toy and brachycephalic dogs.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/shih-tzu" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}