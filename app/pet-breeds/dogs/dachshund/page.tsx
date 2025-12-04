import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Dachshund',
  slug: 'dachshund',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764582257/pexels-pavel-danilyuk-7055637_qasxcj.jpg',
  description: 'Loyal • Curious • Bold • Compact • Tenacious scent hounds',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Dachshund Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Dachshund dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Dachshund',
    'Dachshund breed',
    'Dachshund care',
    'Dachshund temperament',
    'Dachshund training',
    'Dachshund health',
    'Doxie care guide',
    'AKC Dachshund',
  ],
  pathname: '/pet-breeds/dogs/dachshund',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Dachshund Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Dachshund"
        description="Dachshunds, affectionately called “Doxies” or “sausage dogs,” are bold, lively, and deeply devoted scent hounds. Originally bred in Germany to hunt badgers and other burrowing game, they combine a long, low body with surprising athleticism and courage. With thoughtful training, careful back care, and plenty of companionship, Dachshunds make charming, loyal family companions who love to be involved in everything their people do."
        emoji="🐶"
        slug="dachshund"
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
                    The Dachshund is a small hound breed known for its distinctive long body, short legs, and big
                    personality. Developed in Germany, Dachshunds were bred to pursue badgers, rabbits, and other
                    tunnel-dwelling prey, using their powerful noses, courage, and determination. Today they are beloved
                    as companion dogs who still retain strong hunting instincts and a keen sense of curiosity.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Dachshunds consistently rank among the most popular
                    small breeds. Their popularity comes from their adaptability to many living situations, playful yet
                    sometimes stubborn personalities, and devoted bonds with their owners. When given proper training,
                    moderate exercise, and protection for their long backs, Dachshunds can be delightful, affectionate
                    companions for people and families who appreciate their independent spirit.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds originated in Germany several hundred years ago. Their name translates to “badger dog,”
                  reflecting their primary job of tracking and going underground after badgers, foxes, and other
                  burrowing animals. Breeders selected dogs with elongated bodies, strong front limbs for digging, and
                  fearless temperaments to create a dog that could enter narrow tunnels and hold tough quarry at bay.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Over time, Dachshunds were developed in different sizes and coat types—smooth, longhaired, and
                  wirehaired—to suit various climates and hunting conditions. They eventually became popular companion
                  dogs as well as hunting partners. The AKC recognized the Dachshund in the late 19th century, and the
                  Dachshund Club of America (DCA) serves as the parent club in the United States. Today, Dachshunds are
                  found worldwide as cherished pets and still participate in earthdog, tracking, and scent-work events
                  that celebrate their hunting heritage.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds are small, low-to-the-ground hounds with a long, muscular body and short, sturdy legs.
                  According to the AKC breed standard, they should appear strong and well-balanced, never fragile, with
                  a proud head carriage and alert expression. They come in two sizes (standard and miniature) and three
                  coat varieties (smooth, longhaired, and wirehaired), each with its own distinct look but sharing the
                  same characteristic outline.
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
                          Height (at shoulder)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–9 inches (standard); 5–6 inches (miniature)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–9 inches (standard); 5–6 inches (miniature)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          16–32 pounds (standard); up to 11 pounds (miniature)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          16–32 pounds (standard); up to 11 pounds (miniature)
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
                          Smooth, longhaired, or wirehaired; all with a protective topcoat and insulating undercoat
                          varying by variety
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
                          Red, black and tan, chocolate and tan, cream, wild boar (wirehaired), dapple/merle, and other
                          AKC-recognized patterns
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Dachshunds have an elongated but well-muscled body with a
                  straight back, deep chest, and strong forequarters. The head tapers slightly to a long muzzle, with
                  dark, almond-shaped eyes that give a keen, friendly expression. Ears are moderately long and set near
                  the top of the head, hanging close to the cheeks. Their characteristic, ground-hugging gait should be
                  smooth and efficient, reflecting their origins as tireless hunting dogs. Because of their long spine
                  and short legs, careful management is needed to protect their backs from injury.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds are lively, clever, and often quite opinionated. They are scent hounds with strong prey
                  drive and a natural tendency to explore and investigate. Many Dachshunds are brave to the point of
                  being fearless, a trait that served them well in the field but can sometimes lead them to challenge
                  dogs much larger than themselves.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Doxies typically form close bonds with their families and can be very affectionate lapdogs when
                  properly socialized. They may be reserved or suspicious of strangers and are often vocal watchdogs,
                  quick to bark at unusual sights or sounds. Early socialization is important to prevent excessive
                  shyness or reactivity and to encourage a confident, stable temperament.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Their independent hunting background means that Dachshunds can be stubborn and easily distracted by
                  scents. Consistent, positive training is essential. Many Dachshunds thrive when they are given clear
                  boundaries, mental enrichment, and plenty of quality time with their people. They generally do best in
                  homes where their big personalities are appreciated and guided rather than forced into complete
                  submission.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Although small, Dachshunds are active dogs that need regular physical and mental exercise. Without
                  enough activity, they can become bored, vocal, and prone to weight gain—an important concern because
                  extra weight increases the risk of back problems. Exercise needs vary by age, size, and individual
                  energy level, but most Dachshunds benefit from multiple short walks and play sessions each day rather
                  than very long, high-impact outings.
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
                          5 minutes per month of age, 2x daily; avoid jumping and stairs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short, gentle walks, controlled play on soft surfaces, basic obedience, socialization,
                          sniffing games
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–60 minutes total, split into several sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leash walks, supervised off-leash play, scent work, fetch on level ground, puzzle games;
                          avoid repetitive jumping or steep stairs
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
                          Gentle walks, short play sessions, low-impact scent games, interactive toys
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Dachshunds are intelligent and easily bored. Incorporate training
                  games, scent trails, puzzle feeders, and nosework-style activities into their routine. Many
                  Dachshunds enjoy earthdog trials, tracking, rally, and beginner-level obedience, which allow them to
                  use their noses and brains in constructive ways.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Grooming needs for Dachshunds vary by coat type, but all require basic maintenance. Smooth-coated
                  Dachshunds are relatively low maintenance and mainly need regular brushing and bathing. Longhaired
                  and wirehaired Dachshunds require more frequent grooming to prevent mats, remove loose hair, and keep
                  their coats looking neat. All varieties benefit from regular nail, ear, and dental care.
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
                          Brushing (smooth coat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1–2 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Rubber grooming mitt or soft bristle brush; helps remove loose hair and distribute oils
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (longhaired/wirehaired)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–4 times per week; more during shedding
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Pin brush, slicker brush, and comb; wirehaired coats may benefit from hand-stripping or
                          professional grooming
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
                          Gentle dog-specific shampoo and conditioner; ensure thorough rinsing and drying, especially
                          for longhaired coats
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
                          Trim or grind; nails should not click loudly on hard floors, as long nails can affect posture
                          and back health
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
                          Veterinary ear cleaner and cotton balls; floppy ears can trap moisture, so monitor for redness
                          or odor
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
                          Dog toothbrush and toothpaste; small breeds like Dachshunds are at higher risk for dental
                          disease, so proactive care is important
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
                  Proper nutrition is essential to support the Dachshund&apos;s long-term health and help maintain a
                  lean body condition to protect their backs. As a small but sturdy hound breed, Dachshunds generally do
                  best on high-quality diets that prioritize animal-based proteins, appropriate fat levels, and
                  controlled calories to prevent obesity.
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
                          Varies by size/age; follow vet and food label guidance for small-breed puppies
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
                          ~1–1.5 cups (split into meals), adjusted for size and activity level
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (highly active/field or sport)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–28%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~1.25–2 cups, adjusted for workload and body condition
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
                          0.75–1.5 cups, tailored to weight, activity, and joint or back health
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
                  proteins (like chicken, turkey, beef, lamb, or fish) as the first ingredient. Omega-3 and Omega-6
                  fatty acids support skin, coat, and joint health. Because Dachshunds are prone to obesity and
                  back-related issues, monitoring calorie intake and maintaining a lean body condition score are
                  critical. Many Dachshunds also benefit from dental-friendly diets or treats to help reduce plaque and
                  tartar buildup.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat & Digestive Health:</strong> Bloat is less common in Dachshunds than in large, deep
                  chested breeds, but any dog can experience serious digestive upset. To promote digestion and reduce
                  risk of discomfort, divide daily food into two or more meals, avoid sudden diet changes, and discourage
                  rapid gulping of food by using slow-feeder bowls if needed. Always seek veterinary care if you notice
                  repeated vomiting, a painful abdomen, or other concerning gastrointestinal signs.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds are generally long-lived dogs, but like all breeds, they are predisposed to certain health
                  conditions. Responsible breeders use health testing, careful selection, and thoughtful breeding plans
                  to reduce the risk of inherited diseases. Prospective owners should understand common health concerns
                  and ask breeders for documentation of health clearances.
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
                          Intervertebral Disc Disease (IVDD)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Significant breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degeneration and herniation of spinal discs that can cause pain, weakness, or paralysis; weight
                          control and activity management are important prevention strategies
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Obesity
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common if diet and exercise are not managed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Excess weight puts additional strain on the spine and joints and increases risk for arthritis,
                          diabetes, and other issues
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed concern, especially in dapple/merle lines
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes Progressive Retinal Atrophy (PRA), cataracts, and other inherited eye conditions that
                          may affect vision
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patellar Luxation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Noted in some lines
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          A condition where the kneecap slips out of place, potentially causing lameness and discomfort
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
                          Tartar buildup, gum disease, and tooth loss can occur without regular dental care and
                          professional cleanings as recommended
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart Disease (e.g., Mitral Valve Disease)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented risk in some Dachshunds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative heart conditions that may cause murmurs and heart failure; routine veterinary
                          exams help with early detection
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Dachshund Club of America (DCA) provide health testing guidelines for breeding dogs.
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
                          Patella Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or equivalent
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for patellar luxation and assess kneecap stability
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
                          Screen for hereditary eye diseases, including PRA and cataracts
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for congenital or acquired heart disease, especially in lines with known issues
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          PRA &amp; Other DNA Tests (as available)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect genetic mutations associated with specific hereditary eye diseases or other breed
                          concerns
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Spinal Imaging (as recommended)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinarian, sometimes with radiology specialist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          In some breeding programs, imaging is used to evaluate spinal disc health and help manage IVDD
                          risk
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
                  Dachshunds are intelligent and learn quickly, but their independent and sometimes stubborn nature can
                  make training a challenge for inexperienced owners. They were bred to work at a distance from hunters
                  and make decisions on their own, which means they may not always respond instantly to commands—especially
                  when an interesting scent is involved. Consistency, patience, and positive reinforcement are key.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Expose your Dachshund puppy to a variety of people, friendly dogs, environments, and
                  sounds in a controlled, positive way. Thoughtful socialization reduces the risk of fearfulness,
                  excessive barking, or reactivity and helps your Doxie feel comfortable in everyday situations such as
                  vet visits, grooming, travel, and busy public spaces.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use reward-based methods that rely on treats, toys, praise, and
                  play. Dachshunds do not respond well to harsh corrections or heavy-handed training, which can harm
                  trust and increase anxiety or defensiveness. Keep sessions short, fun, and varied. Many Dachshunds
                  benefit from crate training and structured house-training routines, as the breed can be a bit slower to
                  housebreak than some others.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy kindergarten, basic obedience, and AKC S.T.A.R.
                  Puppy or Canine Good Citizen (CGC) classes provide a solid foundation. Some Dachshunds enjoy scent
                  work, rally, or beginner agility (with careful management to protect their backs). These activities
                  channel their natural instincts and energy into appropriate outlets while strengthening the bond between
                  dog and owner.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds were developed as hunting dogs and still retain many of the traits needed for work in the
                  field. Their keen noses, persistence, and courage make them capable in a range of scent-based and
                  companion roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Earthdog &amp; Hunting:</strong> Dachshunds are still used in some areas for hunting small
                    game and excel in earthdog trials, which allow them to safely demonstrate their natural quarry-seeking
                    instincts.
                  </li>
                  <li>
                    <strong>Scent Work &amp; Tracking:</strong> Their excellent sense of smell and persistence make
                    Dachshunds good candidates for scent-work sports, tracking, and nosework classes.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> With back-safe setups and appropriate jumps, some Dachshunds participate
                    in rally, obedience, and low-impact agility, where their intelligence and enthusiasm shine.
                  </li>
                  <li>
                    <strong>Therapy &amp; Emotional Support:</strong> Their small size and affectionate nature can make
                    Dachshunds good therapy dogs when they have stable temperaments and solid basic manners.
                  </li>
                  <li>
                    <strong>Companions:</strong> Above all, most Dachshunds today are cherished companions who enjoy
                    curling up with their owners, playing games, and joining in daily family activities.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Dachshunds good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Dachshunds can be wonderful family dogs when well-bred, socialized, and trained. Many are
                  affectionate, playful, and devoted to their families. Because they are small and have delicate backs,
                  they may do best in homes where children are old enough to understand how to handle dogs gently—no
                  rough play, jumping from furniture, or pulling. As with any breed, always supervise interactions
                  between dogs and young children.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Dachshund puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, coat type, and breeder practices. From reputable breeders who perform
                  recommended health testing and raise puppies in a high-quality environment, Dachshund puppies often
                  range from around $1,000–$2,500 or more. Puppies from top show, performance, or specialty lines may be
                  higher. Be cautious of unusually low prices or sellers who cannot provide health clearances or answer
                  questions about temperament and structure.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Dachshunds shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds are generally moderate shedders. Smooth-coated dogs tend to shed small amounts steadily
                  throughout the year, while longhaired and wirehaired Dachshunds may shed more seasonally and require
                  more grooming. Regular brushing and bathing help manage loose hair and keep the coat healthy. Prospective
                  owners should expect some dog hair in the home but usually not as much as with heavy-shedding double
                  coated breeds.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Dachshunds aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred, well-socialized Dachshunds are not inherently aggressive, but they are bold and may be
                  territorial or vocal. Some can be wary of strangers or other dogs if they are not properly socialized
                  or if they have had negative experiences. Early socialization, positive training, and clear boundaries
                  help encourage polite, confident behavior. Any dog, regardless of breed, can develop aggression if
                  neglected, mistreated, or poorly managed, so proactive training and responsible ownership are essential.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Dachshunds live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Dachshunds can do very well in apartments or small homes as long as their exercise, mental
                  stimulation, and potty needs are met. Daily walks, playtime, and training sessions are more important
                  than having a yard. However, Dachshunds are often vocal watchdogs and may bark at noises in hallways or
                  neighboring apartments, so training to manage barking and providing enough enrichment are crucial in
                  shared-living environments.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between standard and miniature Dachshunds?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Standard Dachshunds are larger, typically weighing 16–32 pounds, and were historically used for
                  hunting larger game like badgers. Miniature Dachshunds usually weigh 11 pounds or less and were
                  developed for hunting smaller quarry such as rabbits. Both sizes share similar temperaments, but
                  individual energy levels and personalities vary. Training, socialization, and responsible breeding are
                  more important than size alone in determining a Dachshund&apos;s suitability for a particular home.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Dachshund Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Individuals or families who enjoy daily walks and interactive play but don&apos;t need a large dog</li>
                  <li>Owners who can provide consistent training, boundaries, and gentle handling</li>
                  <li>People who appreciate an independent, sometimes stubborn dog with a big personality</li>
                  <li>
                    Homes where stairs and jumping from high furniture can be minimized or managed to protect the dog&apos;s
                    back
                  </li>
                  <li>Owners committed to maintaining a healthy weight and providing regular veterinary care</li>
                  <li>People who don&apos;t mind some barking and are willing to train appropriate watchdog behavior</li>
                  <li>Families who understand the importance of teaching children how to interact safely with small dogs</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dachshunds may not be ideal for people who want a very compliant, low-bark dog, or for homes where
                  rough play, frequent stair-climbing, or jumping off tall furniture can&apos;t be safely managed. With
                  the right lifestyle, training, and health management, however, Dachshunds reward their owners with deep
                  loyalty, humor, and companionship.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Dachshund Breed Standard.&quot; akc.org</li>
                    <li>2. Dachshund Club of America (DCA). &quot;Health and Genetics Information.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Dachshunds.&quot;</li>
                    <li>4. Various veterinary neurology resources on Intervertebral Disc Disease (IVDD) in chondrodystrophic breeds.</li>
                    <li>5. Veterinary dental health guidelines for small and toy dog breeds.</li>
                    <li>6. AKC Canine Health Foundation. &quot;Inherited Eye Diseases in Purebred Dogs.&quot;</li>
                    <li>7. DCA &amp; AKC. &quot;Guidelines for Responsible Dachshund Breeding.&quot;</li>
                    <li>8. Veterinary nutrition resources on feeding and weight management for small-breed dogs.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/dachshund" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
