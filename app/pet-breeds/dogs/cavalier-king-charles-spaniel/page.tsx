import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Cavalier King Charles Spaniel',
  slug: 'cavalier-king-charles-spaniel',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764687182/52181_ytpmry.jpg',
  description: 'Affectionate • Gentle • Toy spaniel • Friendly • Adaptable',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cavalier King Charles Spaniel Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Cavalier King Charles Spaniels based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Cavalier King Charles Spaniel',
    'Cavalier King Charles Spaniel breed',
    'Cavalier King Charles Spaniel care',
    'Cavalier King Charles Spaniel temperament',
    'Cavalier King Charles Spaniel training',
    'Cavalier King Charles Spaniel health',
    'Cavalier care guide',
    'AKC Cavalier King Charles Spaniel',
  ],
  pathname: '/pet-breeds/dogs/cavalier-king-charles-spaniel',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Cavalier King Charles Spaniel Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Cavalier King Charles Spaniel"
        description="Cavalier King Charles Spaniels are affectionate, gentle toy spaniels bred to be loving companions. Known for their expressive eyes, silky ears, and friendly nature, Cavaliers are equally happy curled up in a lap or joining their family on walks and outings. When given regular companionship, moderate exercise, and thoughtful care, they become devoted, adaptable family pets."
        emoji="🐶"
        slug="cavalier-king-charles-spaniel"
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
                    The Cavalier King Charles Spaniel is a small, graceful toy
                    spaniel prized for its sweet nature, expressive face, and
                    silky, flowing coat. Bred primarily as a companion, the
                    Cavalier combines the charm of a lapdog with the athletic
                    ability and curiosity of a small sporting spaniel, making it
                    an excellent fit for many lifestyles and home types.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Cavalier King
                    Charles Spaniels consistently rank among the most popular
                    toy breeds. Their popularity comes from their affectionate,
                    people-oriented temperament, adaptability to both city and
                    suburban living, and reputation for getting along well with
                    children, seniors, and other pets. When provided with daily
                    companionship, gentle training, and routine care, Cavaliers
                    make loving, easygoing family companions.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Cavalier King Charles Spaniel traces its roots back to
                  small toy spaniels that were favored in European royal courts,
                  particularly during the reigns of King Charles I and King
                  Charles II of England. These spaniels frequently appeared in
                  paintings from the 16th to 18th centuries, depicted as
                  graceful lapdogs lounging beside their aristocratic owners.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Over time, these toy spaniels were crossed with other breeds,
                  and their appearance shifted toward shorter muzzles and domed
                  heads. In the early 20th century, breed fanciers set out to
                  recreate the longer-muzzled “old-type” spaniels seen in
                  historic art, leading to the development of the modern
                  Cavalier King Charles Spaniel. The AKC formally recognized the
                  breed in 1995. Today, Cavaliers are beloved worldwide as
                  affectionate, elegant companion dogs that still retain a hint
                  of their spaniel heritage.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavalier King Charles Spaniels are small, well-balanced toy
                  spaniels with a graceful outline and gentle expression.
                  According to the AKC breed standard, they should be slightly
                  longer than tall, with moderate bone, a level topline, and a
                  free, elegant gait. Their large, dark, round eyes and soft,
                  melting expression are hallmark features of the breed.
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
                          12–13 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–13 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          13–18 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          13–18 pounds
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
                          12–15 years (some may live longer with excellent care)
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
                          Long, silky coat with feathering on ears, chest, legs,
                          feet, and tail; slight wave acceptable
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
                          Blenheim (chestnut and white), Tricolor (black,
                          white, tan), Black &amp; Tan, Ruby (solid rich red)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Cavaliers have a
                  slightly rounded skull, a full, gently tapered muzzle, and a
                  well-defined stop. Their large, dark, round eyes give a soft,
                  loving expression without being bulging. Long, high-set ears
                  are well feathered and frame the face. The tail is carried
                  happily in motion, level with the back, and is also
                  beautifully feathered. Their graceful, fluent movement reflects
                  a spaniel capable of moderate activity rather than a purely
                  ornamental toy dog.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavalier King Charles Spaniels are renowned for their gentle,
                  affectionate, and eager-to-please temperaments. They are
                  typically very people-focused and happiest when close to their
                  families, whether snuggled on the couch or following their
                  humans from room to room. This strong attachment makes them
                  excellent companions but means they generally do not enjoy
                  long periods of solitude.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavaliers are usually friendly with strangers, children, and
                  other animals, including cats and other dogs, especially when
                  socialized early. They are more likely to welcome visitors
                  than act as watchdogs, though some may bark briefly at new
                  sights or sounds. Their gentle nature and sensitivity make them
                  well-suited to positive reinforcement training and calm,
                  patient handling.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While Cavaliers are primarily companion dogs, many retain a
                  playful, moderately active spaniel side and enjoy walks,
                  playtime, and simple games. They thrive in homes where they
                  receive daily affection, interactive time, and opportunities
                  to be close to their people.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavaliers have moderate exercise needs compared to many larger
                  sporting or herding breeds. They enjoy regular walks and play
                  but are generally content with a balance of activity and
                  cuddle time. Safe, age-appropriate exercise helps maintain a
                  healthy weight and supports joint and heart health—both
                  important for this breed.
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
                          5 minutes per month of age, 2x daily (split into short
                          sessions)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, gentle play on soft surfaces, basic
                          obedience, socialization, calm exploration
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–60 minutes total, most days
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leashed walks, light hikes, fetch, gentle games,
                          beginner agility, scent games, interactive play
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–40 minutes, adjusted for health and mobility
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short, frequent walks, light play, gentle indoor
                          games, low-impact brain puzzles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Although not as intense as
                  high-drive working breeds, Cavaliers still benefit from mental
                  enrichment. Incorporate food puzzle toys, trick training,
                  nosework games, and short training sessions into their routine.
                  Many Cavalier King Charles Spaniels enjoy rally, obedience, or
                  low-impact agility, which provide both mental and physical
                  engagement.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavaliers have a long, silky coat that requires regular
                  maintenance to prevent mats and tangles, especially around the
                  ears, chest, armpits, tail, and feathering on legs and feet.
                  They shed moderately year-round, with periods of heavier
                  shedding, and their ears need particular attention to keep
                  them clean and healthy.
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
                          3–4 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Pin brush and comb; focus on ears, behind ears,
                          feathering, and tail to prevent mats
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
                          Slicker brush and comb; thorough but gentle line
                          brushing to remove loose hair
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–6 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle dog shampoo and conditioner; dry coat thoroughly
                          to protect skin and ears
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
                          Trim or grind nails; check dewclaws if present
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
                          Veterinary ear cleaner, cotton balls; monitor for
                          redness, odor, or discharge, as drop ears are prone to
                          infections
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
                          Dog toothbrush and toothpaste; consider dental chews or
                          water additives as recommended by your vet
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
                  Proper nutrition is essential to support the Cavalier King
                  Charles Spaniel&apos;s heart health, ideal body condition, and
                  long-term well-being. As a small, moderately active breed,
                  Cavaliers do best on high-quality diets that provide balanced
                  protein, fat, and controlled calories to avoid excess weight
                  gain, which can stress joints and the cardiovascular system.
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
                          Varies by age/weight; typically around 1–1.5 cups,
                          divided; follow vet and food label guidance
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
                          ~0.75–1.25 cups (split into meals), adjusted for weight
                          and activity level
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
                          ~1–1.5 cups, adjusted for activity and body condition
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
                          0.75–1.25 cups, tailored to activity, weight, and heart
                          health per veterinary guidance
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look
                  for formulas that list high-quality animal proteins (such as
                  chicken, turkey, fish, or lamb) as the first ingredient.
                  Omega-3 and Omega-6 fatty acids support skin, coat, and joint
                  health. Maintaining a lean body condition is crucial to reduce
                  stress on the heart and joints. Because Cavaliers can be prone
                  to dental issues, consider incorporating daily dental care and
                  appropriate chew options.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Digestive &amp; Heart Support:</strong> Some Cavalier
                  King Charles Spaniels benefit from diets formulated for small
                  breeds or cardiac support, especially if heart disease is
                  present and your veterinarian recommends it. Always consult
                  your vet before making significant changes to diet, especially
                  if your dog has existing health conditions.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavalier King Charles Spaniels are generally affectionate and
                  resilient, but they are predisposed to several notable
                  inherited health conditions. Responsible breeders prioritize
                  health testing, transparent screening, and careful selection of
                  breeding dogs to help reduce risk. Prospective owners should be
                  aware of common health concerns and ask for documentation of
                  relevant health clearances.
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
                          Mitral Valve Disease (MVD)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Major breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative heart valve disease that can lead to heart
                          murmurs and congestive heart failure; regular cardiac
                          monitoring is important
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Syringomyelia / Chiari-like Malformation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Neurological condition where fluid-filled cavities
                          develop in the spinal cord; may cause pain, scratching,
                          or sensitivity around head/neck
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes cataracts, retinal problems, and other
                          inherited eye conditions; regular ophthalmologic exams
                          are recommended
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patellar Luxation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common in small breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Knee caps that slip out of place, potentially causing
                          intermittent lameness or abnormal gait
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear Infections &amp; Skin Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Relatively common
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Drop ears and feathered coat can predispose Cavaliers
                          to ear infections and skin irritation if not properly
                          maintained
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hip Dysplasia &amp; Other Orthopedic Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Lower to moderate risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal joint development that can lead to arthritis
                          and reduced mobility; careful breeding and weight
                          management help reduce risk
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and breed clubs recommend health testing for Cavalier
                  King Charles Spaniels used in breeding programs. Always request
                  copies of relevant health evaluations when purchasing a puppy
                  from a breeder:
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
                          Cardiac Evaluation (Auscultation/Echocardiogram)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Board-certified veterinary cardiologist, OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for mitral valve disease and other inherited
                          heart conditions
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
                          Screen for hereditary eye diseases such as cataracts
                          and retinal disorders
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patellar Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or equivalent orthopedic registry
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for patellar luxation (loose kneecaps)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hip Evaluation (optional but recommended)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or PennHIP
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Assess hip joint quality and screen for dysplasia
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          MRI Screening for Syringomyelia (where feasible)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary neurologist / advanced imaging center
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Evaluate for Chiari-like malformation and
                          syringomyelia in breeding dogs
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Genetic Testing (as available)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or approved genetic laboratories
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify carriers or affected dogs for specific
                          hereditary conditions
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
                  Cavalier King Charles Spaniels are generally very trainable,
                  thanks to their desire to please and close bond with their
                  owners. They respond well to gentle, reward-based methods and
                  typically enjoy training sessions that feel like games.
                  Harsh corrections or forceful handling can undermine their
                  confidence and trust.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization
                  early, ideally between 3–14 weeks of age. Introduce your
                  Cavalier puppy to a variety of people, friendly dogs, sounds,
                  and environments in a controlled, positive manner. This helps
                  prevent timidity, reduces the risk of sound sensitivity, and
                  fosters a calm, adaptable adult dog that is comfortable in
                  the home and in public.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement
                  using treats, praise, and play is ideal. Keep sessions short
                  and fun, and focus on foundational cues like sit, down, come,
                  stay, and polite leash walking. Cavaliers can be sensitive, so
                  consistency and patience are key. Many enjoy learning tricks,
                  participating in beginner agility, or practicing rally and
                  obedience at a casual level.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider
                  enrolling in puppy kindergarten and basic manners classes.
                  AKC S.T.A.R. Puppy and Canine Good Citizen (CGC) programs
                  provide a solid foundation for good behavior at home and in
                  public. Their gentle, friendly nature also makes many
                  Cavaliers well-suited for therapy dog work when appropriately
                  trained and temperament-tested.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While the Cavalier King Charles Spaniel is primarily a
                  companion breed, their spaniel background and willing nature
                  allow them to succeed in a variety of modern roles and
                  activities:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Companion &amp; Family Dog:</strong> Cavaliers
                    excel as loving family pets, offering companionship to
                    individuals, couples, and families with children.
                  </li>
                  <li>
                    <strong>Therapy Dogs:</strong> Their gentle demeanor, small
                    size, and love of people often make them excellent therapy
                    dogs in hospitals, schools, and care facilities when
                    properly trained and certified.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Many Cavaliers enjoy low-impact
                    agility, rally, obedience, and scent games, which provide
                    enjoyable mental and physical outlets.
                  </li>
                  <li>
                    <strong>Emotional Support Companions:</strong> Their
                    affectionate, intuitive nature can provide comfort and
                    emotional support to owners in a variety of life situations.
                  </li>
                  <li>
                    <strong>Adventure Buddies:</strong> With appropriate
                    conditioning and care, Cavaliers can happily join their
                    families on walks, light hikes, and travel, provided their
                    health and fitness are monitored.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Cavalier King Charles Spaniels good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Cavaliers are generally excellent family dogs. They are
                  affectionate, gentle, and typically enjoy spending time with
                  children and adults alike. Because they are small and somewhat
                  delicate, interactions with very young children should be
                  supervised to ensure the dog is handled gently and respectfully.
                  Their friendly nature usually extends to other pets as well
                  when properly introduced.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Cavalier King Charles Spaniel puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, breeder reputation, and health testing
                  practices. From responsible breeders who prioritize health
                  screening and careful socialization, Cavalier King Charles
                  Spaniel puppies often range from around $2,000–$4,000 or more.
                  Puppies from lines with extensive health testing and strong
                  show or performance records may be higher. Be cautious of
                  unusually low prices, which can signal poor breeding practices
                  or lack of appropriate health testing in a breed with known
                  heart and neurological concerns.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Cavaliers shed a lot and require much grooming?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavaliers are moderate shedders. They shed year-round, with
                  periods of heavier shedding, but regular brushing several times
                  per week greatly reduces loose hair and mats. Their long, silky
                  coat needs consistent maintenance, especially around the ears,
                  behind the ears, and in the feathering. Most owners find their
                  grooming needs manageable with a routine, and some choose
                  professional grooming for tidy trims and maintenance.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Cavalier King Charles Spaniels aggressive or good watchdogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavaliers are not typically aggressive and are usually very
                  friendly, even with strangers. They may bark briefly when
                  someone approaches, but they are more likely to greet visitors
                  with enthusiasm than act as protective guard dogs. Aggression
                  is not characteristic of the breed; if it occurs, it may be
                  related to fear, pain, or poor socialization and should be
                  addressed with professional guidance and veterinary input.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Cavalier King Charles Spaniels live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Cavaliers generally adapt very well to apartment or city
                  living as long as their exercise, potty, and companionship
                  needs are met. Daily walks, playtime, and interactive time
                  with their family are essential. Because they thrive on human
                  company, they are not ideal for homes where they would be left
                  alone for long workdays without breaks or a trusted caregiver.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Cavalier King Charles Spaniels good for first-time dog owners?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavaliers can be a great choice for first-time dog owners who
                  are prepared to commit to regular grooming, veterinary care,
                  and heart-focused health monitoring. Their gentle temperament,
                  moderate exercise needs, and eagerness to please make them
                  relatively easy to train and live with. New owners should
                  partner closely with a veterinarian to understand the breed&apos;s
                  health tendencies and schedule appropriate screening and
                  preventive care.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Cavalier King Charles Spaniel Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavalier King Charles Spaniels are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    Individuals or families seeking an affectionate, gentle
                    companion who enjoys both cuddling and short adventures
                  </li>
                  <li>
                    Owners who can provide daily companionship and do not leave
                    their dog alone for long stretches on a regular basis
                  </li>
                  <li>
                    People who can commit to regular grooming and routine health
                    monitoring, especially cardiac evaluations
                  </li>
                  <li>
                    Households in apartments, condos, or homes with small yards
                    where moderate daily exercise is feasible
                  </li>
                  <li>
                    First-time or experienced owners who appreciate a sensitive,
                    eager-to-please temperament and are comfortable using
                    positive reinforcement training
                  </li>
                  <li>
                    Those interested in therapy work, light dog sports, or simply
                    having a devoted lap companion
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cavaliers may not be ideal for people who are frequently away
                  from home for long hours, families who prefer a highly
                  independent dog, or households unable to commit to regular
                  veterinary care and heart screening. Understanding the
                  breed&apos;s health needs and emotional sensitivity is key to
                  providing a happy, stable home for a Cavalier King Charles
                  Spaniel.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      1. American Kennel Club (AKC). &quot;Cavalier King Charles
                      Spaniel Breed Standard.&quot; akc.org
                    </li>
                    <li>
                      2. American Cavalier King Charles Spaniel Club (ACKCSC).
                      &quot;Health &amp; Breed Information.&quot;
                    </li>
                    <li>
                      3. Cavalier King Charles Spaniel Club, USA.
                      &quot;Guidelines for Responsible Breeding and Health
                      Testing.&quot;
                    </li>
                    <li>
                      4. Orthopedic Foundation for Animals (OFA). &quot;Breed
                      Statistics and Recommended Tests for Cavalier King Charles
                      Spaniels.&quot;
                    </li>
                    <li>
                      5. Veterinary cardiology and neurology resources on mitral
                      valve disease and syringomyelia in toy breeds.
                    </li>
                    <li>
                      6. Various veterinary dental and nutrition resources on
                      feeding and maintaining small companion dogs.
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
              <BreedsSidebar
                category="dogs"
                currentBreed="/pet-breeds/dogs/cavalier-king-charles-spaniel"
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
