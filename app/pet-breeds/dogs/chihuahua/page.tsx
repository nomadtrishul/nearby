import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Chihuahua',
  slug: 'chihuahua',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764685466/pexels-wkn-992646-1933464_bvpyhe.jpg',
  description: 'Tiny • Alert • Loyal • Big personality • Apartment-friendly',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Chihuahua Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Chihuahua dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this iconic toy breed.',
  keywords: [
    'Chihuahua',
    'Chihuahua breed',
    'Chihuahua care',
    'Chihuahua temperament',
    'Chihuahua training',
    'Chihuahua health',
    'small dog care guide',
    'AKC Chihuahua',
  ],
  pathname: '/pet-breeds/dogs/chihuahua',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Chihuahua Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Chihuahua"
        description="Chihuahuas are the tiniest of the toy breeds, but they have enormous personalities. Originating in Mexico, they are loyal, alert, and deeply attached to their people. With proper socialization, gentle handling, and good training, Chihuahuas make charming companions who thrive as indoor, close-to-you family dogs."
        emoji="🐕"
        slug="chihuahua"
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
                    The Chihuahua is a compact toy breed known for its tiny size, alert expression, and bold, often
                    “larger-than-life” personality. Despite their delicate build, Chihuahuas are confident and spirited
                    companions who love to be close to their people—often choosing one special person as their favorite.
                    They are primarily indoor dogs and do best in homes where they can spend much of their time with
                    their family.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Chihuahuas remain one of the most popular toy breeds.
                    Their popularity comes from their portability, adaptability to small spaces, and devoted nature.
                    When properly socialized, trained, and cared for, Chihuahuas make affectionate, entertaining pets
                    who bring a big presence in a very small package.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Chihuahua is widely believed to have ancient roots in Mexico. Many historians trace the breed back
                  to the Techichi, a small companion dog kept by the Toltec civilization and later by the Aztecs. Over
                  time, these small dogs were refined and developed into the modern Chihuahua, with additional influence
                  from small European toy breeds likely contributing to their look and size.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The breed takes its name from the Mexican state of Chihuahua, where many of these little dogs were
                  first found by visitors and subsequently brought to the United States. The AKC recognized the
                  Chihuahua in the early 20th century, and today they are a prominent member of the Toy Group. Their
                  distinctive appearance, expressive eyes, and loyal nature have made them favorites around the world as
                  lapdogs, companions, and show dogs.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas are one of the smallest dog breeds, with a compact, slightly longer-than-tall body and a
                  graceful, dainty build. According to the AKC breed standard, they should be well-balanced, with a
                  level topline, a slightly arched neck, and a quick, energetic gait. Their large, luminous eyes and
                  oversized ears give them a highly expressive, alert appearance.
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
                          5–8 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          5–8 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Up to 6 pounds (ideal)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Up to 6 pounds (ideal)
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
                          14–16 years (many live longer with good care)
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
                          Smooth (short) or long coat; fine, soft texture; may be single or double coated
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
                          Any color or combination, including fawn, black, white, chocolate, cream, sable, and parti
                          markings
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Chihuahuas typically have an “apple-shaped” head with a well
                  rounded skull, large round eyes, and very large, erect ears that are set wide apart. Their muzzle is
                  relatively short and slightly pointed. The tail is moderately long, carried in a sickle or loop over
                  the back when the dog is alert. Despite their size, Chihuahuas should appear sturdy, not fragile or
                  spindly, with efficient, light-footed movement.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas are highly alert, intelligent, and people-focused. Many are bold and confident, while
                  others are more reserved and sensitive, especially with strangers. They often form intense bonds with
                  one or two people and may be somewhat aloof with others. Their small size makes them easy to carry and
                  travel with, which many Chihuahuas enjoy as long as they feel secure.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  These tiny dogs can be vocal watchdogs, quick to announce visitors or unfamiliar sounds. Without good
                  socialization, some Chihuahuas may become nervous, snappy, or overly protective. Early, gentle
                  exposure to a variety of people, places, and other animals is important to encourage a confident,
                  stable temperament and reduce fear-based behaviors.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Because of their size, Chihuahuas are easily injured by rough handling or falls. They do best in homes
                  where family members understand how to interact gently and respectfully with them. With patience and
                  consistent training, Chihuahuas are affectionate, entertaining companions who love to cuddle and be
                  included in daily life.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Although they are small, Chihuahuas are lively and benefit from daily exercise and mental
                  stimulation. They do not need the same volume of physical activity as larger working breeds, but they
                  still require regular walks and playtime to stay fit and well-adjusted. Care must be taken not to
                  over-exercise young puppies or older dogs, and to protect them from extreme temperatures—especially
                  cold weather.
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
                          Several short play sessions plus brief walks (total ~20–30 minutes daily, adjusted to age)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle indoor play, short leash walks, basic obedience, safe socialization with calm dogs and
                          people
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1–8 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes total (split into walks and play)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leash walks, indoor and yard play, short fetch sessions, training games, low-impact dog
                          sports (e.g., rally, trick training)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (8+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–40 minutes of gentle activity, adjusted for health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, light play, gentle indoor games, food puzzles, scent games at home
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Chihuahuas are clever and curious. They benefit from puzzle feeders,
                  clicker training, trick work, and interactive toys. Short training sessions that challenge their
                  brains—such as learning new tricks, nosework games, or simple agility obstacles scaled to their size—are
                  excellent ways to burn mental energy without overtaxing their bodies.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas come in smooth and long coat varieties. Smooth-coated Chihuahuas have short, sleek coats
                  that are relatively low maintenance, while long-coated Chihuahuas have soft, feathered fur on the
                  ears, neck, legs, and tail that requires more regular brushing. Both varieties shed, though usually in
                  modest amounts compared to many larger breeds. Dental care is especially important for this breed due
                  to their small mouths and crowded teeth.
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
                          Soft bristle brush or grooming mitt; removes loose hair and distributes skin oils
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (long coat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3 times per week (more during shedding)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Pin brush and comb; pay attention to feathering behind ears, under legs, and tail to prevent
                          mats
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
                          Mild dog shampoo; avoid over-bathing to protect skin and coat; ensure thorough drying to
                          prevent chills
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
                          Use small clippers or a grinder; nails should not curl or tap loudly on hard floors
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
                          Veterinary ear cleaner, cotton balls; monitor for redness, odor, or excessive wax
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental care
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily brushing (ideal) or at least 3–4x per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Small dog toothbrush and dog-safe toothpaste; regular professional cleanings as recommended by
                          your vet
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
                  Proper nutrition is essential to support the Chihuahua&apos;s long life and overall health. As very
                  small dogs with fast metabolisms, they do best on high-quality diets specifically formulated for toy
                  or small breeds. These diets are typically more energy dense and use smaller kibble sizes that are
                  easier for tiny mouths to manage.
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
                          22–28% (small-breed puppy formula)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Roughly ¼–¾ cup daily, adjusted for age, weight, and brand; follow vet and food label
                          guidance
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–4 (more frequent meals help prevent hypoglycemia)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (moderately active)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          18–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~¼–½ cup total per day, adjusted for weight, activity, and body condition
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (highly active)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–30%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          14–20%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          May approach ½–¾ cup daily in very small, active individuals; monitor weight closely
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3 small meals
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seniors (8+ years)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          18–24%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–14% (may be lowered if weight gain is a concern)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ¼–½ cup daily, tailored to activity, muscle mass, and dental health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3 smaller meals
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Choose diets that list high-quality animal
                  proteins (such as chicken, turkey, beef, lamb, or fish) as the first ingredient. Toy-breed dogs are
                  prone to dental disease, so crunchy kibble combined with consistent dental care is especially helpful.
                  Monitor body weight carefully—because Chihuahuas are so small, even a slight increase in calories can
                  lead to obesity, which stresses their joints, heart, and airway. For very young puppies or tiny
                  individuals, discuss strategies for preventing hypoglycemia with your veterinarian.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas are generally long-lived dogs, but like all breeds, they are predisposed to certain health
                  conditions. Responsible breeders use health testing, careful selection, and honest communication to
                  reduce risk. Prospective owners should understand common issues and ask breeders for documentation of
                  relevant health clearances and veterinary evaluations.
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
                          Patellar Luxation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common in toy breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Kneecap slips out of place, causing intermittent lameness or “skipping” gait; moderate to
                          severe cases may require surgery
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common without preventive care
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Tartar buildup, gum disease, and tooth loss due to crowded teeth in a small mouth; can impact
                          heart, kidney, and overall health
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart Disease (e.g., Mitral Valve Disease)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed risk in older dogs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative changes in heart valves can lead to murmurs, coughing, and exercise intolerance
                          as disease progresses
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Collapsing Trachea
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seen in many small breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weakening of tracheal rings causes airway narrowing; can lead to honking cough and breathing
                          difficulty, especially with excitement or pulling on collar
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hydrocephalus / Open Fontanelle
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable concern in very small individuals
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal fluid buildup in the brain; puppies may show dome-shaped skulls, neurological signs,
                          or open soft spots on the head
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Eye Problems
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes dry eye, corneal injury, or inherited conditions that may affect vision and comfort
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hypoglycemia &amp; Obesity
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Management-related risks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very small or young Chihuahuas can develop low blood sugar; adult dogs are prone to weight
                          gain if overfed or under-exercised
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and parent breed clubs encourage health testing and careful breeding practices. When
                  purchasing a Chihuahua puppy from a breeder, ask for documentation of relevant screenings and
                  veterinary evaluations:
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
                          Screen for patellar luxation and assess kneecap stability
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Board-certified cardiologist / OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect heart murmurs and early signs of structural heart disease
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
                          Screen for hereditary eye conditions and general ocular health
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental &amp; Oral Exam
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinarian
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Assess bite, tooth alignment, and early dental disease; ongoing care needed throughout life
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          General Health &amp; Growth Monitoring
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinarian wellness exams
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Track weight, growth, and early signs of orthopedic, neurological, or metabolic problems
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
                  Chihuahuas are intelligent and capable learners, but they can also be independent or stubborn at
                  times. Because they are so small, it is easy for people to overlook training and allow behaviors they
                  would not tolerate from larger dogs. This can lead to “small dog syndrome,” where the dog becomes
                  bossy, overprotective, or snappy. Treat your Chihuahua like a dog—not a toy—and provide clear,
                  consistent boundaries from the beginning.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as your veterinarian recommends,
                  ideally between 3–14 weeks of age. Carefully introduce your Chihuahua puppy to friendly, gentle
                  people, calm dogs, new environments, sounds, and handling. Because Chihuahuas are small and can be
                  easily overwhelmed, experiences should be positive, controlled, and never forced. Good socialization
                  helps reduce fear-based barking or nipping later in life.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods are ideal for Chihuahuas. Use tiny,
                  high-value treats, praise, and play to reward desired behaviors. Avoid harsh corrections, which can
                  damage trust and increase anxiety in a sensitive, small dog. Short, fun training sessions of a few
                  minutes at a time work best. Pay special attention to house training—small bladders and cold or wet
                  weather can make this challenging, but consistency, scheduled potty breaks, and patience will pay off.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Basic puppy kindergarten, AKC S.T.A.R. Puppy, and
                  Canine Good Citizen (CGC) classes are all excellent foundations. Many Chihuahuas enjoy trick training,
                  rally, or even small-scale agility set-ups at home. These activities build confidence, deepen your
                  bond, and provide healthy mental outlets.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Roles &amp; Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While originally developed as companion dogs, Chihuahuas are versatile in modern life. Their small
                  size and strong attachment to their people give them several natural “jobs” around the home and
                  beyond:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Companion &amp; Lapdog:</strong> Chihuahuas excel at their primary role as affectionate
                    family companions who enjoy snuggling, sitting on laps, and staying close to their favorite people.
                  </li>
                  <li>
                    <strong>Alert Dog:</strong> Their sharp hearing and tendency to bark make them excellent early
                    warning systems for visitors or unusual noises, though training is needed to keep barking in check.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> With proper conditioning and scaled equipment, some Chihuahuas enjoy
                    rally, obedience, trick competitions, and even agility. Their quickness and eagerness to please can
                    shine in these venues.
                  </li>
                  <li>
                    <strong>Therapy &amp; Emotional Support:</strong> Their small size and portability make well-socialized
                    Chihuahuas suitable therapy dogs in some settings, especially when they have calm, steady
                    temperaments and enjoy gentle handling.
                  </li>
                  <li>
                    <strong>Travel Companion:</strong> Chihuahuas often adapt well to travel when introduced gradually.
                    They can accompany their owners on car trips or flights in appropriate carriers, making them ideal
                    partners for people on the go.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Chihuahuas good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas can be wonderful family dogs in the right households. They are affectionate, loyal, and
                  often playful with their people. However, because they are so small and easily injured, they are
                  generally better suited to families with older children or adults who understand how to handle them
                  gently. Rough play, being dropped, or being stepped on can cause serious harm, so close supervision is
                  essential in homes with young kids.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Chihuahua puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From responsible breeders who health test
                  their dogs and raise puppies in a clean, well-socialized environment, Chihuahua puppies often range
                  from around $800–$2,000 or more. Puppies from show or performance lines may cost more. Be cautious of
                  unusually low prices, online sellers who ship puppies sight-unseen, or breeders who do not discuss
                  health testing and contracts—these can be red flags for poor breeding practices.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Chihuahuas shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas are moderate shedders. Smooth-coated dogs typically shed small amounts year-round, with
                  slightly heavier shedding at seasonal changes. Long-coated Chihuahuas also shed, but regular brushing
                  helps capture loose hair before it ends up on furniture and clothes. While they are not truly
                  hypoallergenic, many people find their small size and modest shedding more manageable than larger,
                  heavy-shedding breeds.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Chihuahuas aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas are not inherently aggressive, but fear, poor socialization, or being allowed to “rule the
                  house” can lead to snapping or nipping behaviors. Because they are small, some people tolerate or even
                  encourage behaviors they would never accept from a larger dog. Early socialization, clear boundaries,
                  kind training, and gentle handling are key to raising a polite, confident Chihuahua. Any dog that
                  shows sudden behavior changes should be evaluated by a veterinarian to rule out pain or illness.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Chihuahuas live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Chihuahuas are excellent candidates for apartment living. Their small size and modest exercise
                  needs make them well suited to smaller spaces, as long as they receive daily walks, play, and mental
                  stimulation. The main challenge in apartments is managing barking; with appropriate training,
                  enrichment, and routine, most Chihuahuas can learn to be good neighbors.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between apple head and deer head Chihuahuas?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  These terms describe head shape. <strong>Apple head</strong> Chihuahuas have a well-rounded, dome-like
                  skull and shorter muzzle, which is the type preferred by most breed standards. <strong>Deer head</strong>{' '}
                  Chihuahuas have a longer muzzle and more gently sloping forehead, giving them a deer-like profile.
                  Both types can make loving pets, but only apple-headed dogs typically conform to the AKC show standard.
                  Regardless of head type, health, temperament, and responsible breeding should be top priorities.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Chihuahua Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>People who want a small, portable companion that stays close by</li>
                  <li>Owners who can provide daily companionship—Chihuahuas do not enjoy being left alone for long hours</li>
                  <li>Families with older children or adults who understand gentle handling of tiny dogs</li>
                  <li>
                    Individuals living in apartments, condos, or smaller homes who can still offer regular walks and
                    playtime
                  </li>
                  <li>People willing to commit to lifelong dental care, routine vet visits, and monitoring of weight</li>
                  <li>Owners interested in basic training, tricks, or small-scale dog sports to keep their dog engaged</li>
                  <li>Those comfortable with some barking and ready to train polite alert behaviors</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Chihuahuas may not be ideal for households with very young, boisterous children, for people seeking a
                  rugged outdoor or jogging partner, or for owners who are away from home most of the day and want a
                  very independent dog. Their small size and sensitivity require attentive care, but in the right home,
                  a Chihuahua&apos;s loyalty and personality can be deeply rewarding for many years.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Chihuahua Breed Standard.&quot; akc.org</li>
                    <li>2. Chihuahua Club of America. &quot;Health Information &amp; Breed Education.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Toy &amp; Small Breeds.&quot;</li>
                    <li>4. Various veterinary dentistry resources on small-breed dental care and disease prevention.</li>
                    <li>5. Veterinary cardiology resources on mitral valve disease and heart health in toy breeds.</li>
                    <li>6. General veterinary references on hypoglycemia, tracheal collapse, and orthopedic issues in
                      small dogs.</li>
                    <li>7. AKC Canine Health Foundation. &quot;Health Considerations for Toy Breeds.&quot;</li>
                    <li>8. Responsible breeding and puppy-raising guidelines from major veterinary and breed organizations.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/chihuahua" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
