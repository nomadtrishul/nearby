import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'French Bulldog',
  slug: 'french-bulldog',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764576492/pexels-nguy-n-ti-n-th-nh-2150376175-32917418_yizuum.jpg',
  description: 'Charming • Playful • Companion dogs • Affectionate • Laid-back',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'French Bulldog Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to French Bulldogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'French Bulldog',
    'French Bulldog breed',
    'French Bulldog care',
    'French Bulldog temperament',
    'French Bulldog training',
    'French Bulldog health',
    'Frenchie care guide',
    'AKC French Bulldog',
  ],
  pathname: '/pet-breeds/dogs/french-bulldog',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'French Bulldog Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="French Bulldog"
        description="French Bulldogs, affectionately called “Frenchies,” are small, sturdy companion dogs known for their bat-like ears, charming personalities, and easygoing nature. Bred primarily as lapdogs and city companions, they thrive on human interaction and make devoted, affectionate family pets who love to relax on the couch as much as they enjoy short bursts of play."
        emoji="🐕"
        slug="french-bulldog"
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
                    The French Bulldog is a compact, muscular companion breed known for its distinctive bat ears,
                    wide-set eyes, and charming, often comical personality. Originally developed as a smaller version
                    of the English Bulldog, Frenchies became popular among lace workers in England and later in France,
                    where the breed was further refined into the beloved companion dog we know today.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), French Bulldogs have become one of the most popular dog
                    breeds in many major cities thanks to their small size, affectionate temperament, and adaptability
                    to apartment living. When cared for properly, Frenchies make loyal, people-oriented companions who
                    are happiest being close to their families and participating in everyday life.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The French Bulldog&apos;s history begins with the toy-sized Bulldogs bred in England during the 19th
                  century. These smaller Bulldogs were especially popular among lace workers in the Nottingham region.
                  When many lace workers relocated to France during the Industrial Revolution, they brought their
                  little Bulldogs with them. In France, the dogs were crossed with local breeds, including small
                  ratter-type dogs, gradually creating the distinct French Bulldog type with its upright bat ears and
                  compact body.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs quickly gained popularity in Parisian society and became associated with artists,
                  writers, and fashionable elites. The breed spread to other parts of Europe and the United States,
                  where it was officially recognized by kennel clubs in the late 19th and early 20th centuries. Today,
                  the French Bulldog is primarily a companion dog, cherished for its affectionate disposition and
                  clownish charm rather than any working role.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs are small, sturdy dogs with a compact, muscular build and a heavy bone structure.
                  According to the AKC breed standard, they should have a square, well-proportioned body, a broad chest,
                  and a short, smooth coat. Their flat, brachycephalic face and large, erect bat ears give them a unique
                  and instantly recognizable appearance. Despite their size, they are solid and substantial to the touch.
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
                          ~11–13 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~11–13 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Up to 28 pounds (typically 20–28 lb)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Up to 28 pounds (typically 16–26 lb)
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
                          10–12 years (some may live longer with excellent care)
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
                          Short, smooth, fine coat; single coat
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
                          Brindle, fawn, white, brindle &amp; white, fawn &amp; white, cream, and pied patterns (rare
                          or unrecognized colors may be associated with health risks)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> French Bulldogs have a large, square head with a short muzzle,
                  pronounced wrinkles, and a broad, deep jaw. Their bat ears are wide at the base, rounded at the top,
                  and carried erect. The tail is naturally short—either straight or screwed—but should not be docked.
                  Their compact, low-to-the-ground body combined with a wide chest and strong, short legs gives them a
                  sturdy yet charmingly disproportionate silhouette.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs are known for their affectionate, people-focused nature and playful, often clownish
                  personalities. They bond closely with their families and enjoy being involved in everything their
                  humans do—whether that&apos;s lounging on the couch, following you from room to room, or offering
                  comic relief with their expressive faces and silly antics.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Frenchies are generally friendly with strangers and other animals when properly socialized, though
                  some may be a bit reserved at first. They are not typically excessive barkers, but they will alert
                  their owners to unusual noises or visitors. Because they thrive on companionship, French Bulldogs can
                  be prone to separation anxiety if left alone for long periods without training and gradual
                  independence-building.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While they are intelligent and capable of learning quickly, Frenchies can also be a bit stubborn.
                  Short, positive training sessions with plenty of rewards and encouragement work best. Their gentle,
                  stable temperament and moderate energy level make them excellent companions for individuals, couples,
                  and families alike.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs have lower exercise needs than many active working breeds, but they still require
                  daily physical activity and mental stimulation to stay healthy and prevent boredom-related behaviors.
                  Because they are brachycephalic (short-nosed), they are prone to overheating and breathing difficulties
                  with overexertion, especially in hot or humid weather. Exercise should be moderate, controlled, and
                  carefully monitored.
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
                          5 minutes per month of age, 2x daily (low-impact)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, gentle play, basic obedience, socialization, avoid jumping and overexertion
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~45–60 minutes total, broken into short sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leashed walks, gentle play, short training sessions, indoor games; avoid strenuous running or
                          heat exposure
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–40 minutes, adjusted for health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle strolls, light play, low-impact indoor activities, mental games
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Even though Frenchies are not endurance athletes, they still benefit
                  greatly from mental stimulation. Incorporate food puzzles, scent games, basic and advanced obedience,
                  trick training, and interactive toys. Many French Bulldogs enjoy low-impact dog sports or activities
                  that emphasize brain work over intense physical exertion.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs have a short, smooth coat that is relatively low-maintenance compared to many
                  double-coated breeds. However, they do shed and require routine grooming to keep their skin and coat
                  healthy. Their facial wrinkles, tail pocket (if present), and skin folds need special attention to
                  prevent irritation and infection.
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
                          Soft bristle brush, rubber grooming mitt; helps remove loose hair and distribute skin oils
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (shedding season)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Rubber curry or de-shedding tool; short sessions to avoid skin irritation
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
                          Gentle, dog-specific shampoo; rinse thoroughly and dry folds carefully
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Wrinkle &amp; Skin Fold Cleaning
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Several times per week (often daily)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Damp cloth or vet-recommended wipes; gently dry afterward to prevent moisture buildup
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
                          Trim or grind; shorter nails support comfort and joint health
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear cleaning
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weekly check, clean as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary ear cleaner and cotton balls; avoid inserting swabs into ear canal
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
                          Dog toothbrush and toothpaste; consider dental chews if approved by your vet
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
                  French Bulldogs are prone to weight gain and obesity, so careful attention to diet and portion control
                  is essential. They do best on a balanced, high-quality diet that provides adequate protein for muscle
                  maintenance without excessive calories. Because Frenchies can also be prone to food sensitivities and
                  digestive issues, some may benefit from limited-ingredient or sensitive-stomach formulations.
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
                          Varies by age/weight; follow puppy food guidelines and vet advice
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
                          8–15%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~1–2.5 cups (split into meals), adjusted to maintain ideal body condition
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (very active/leaner build)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–28%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~1.5–3 cups, depending on size and activity (many Frenchies will not need the upper range)
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
                          ~0.75–1.75 cups, tailored to reduced activity and weight goals
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Choose foods that list quality animal proteins
                  as the first ingredient and avoid overfeeding treats and table scraps. Because Frenchies can be prone
                  to flatulence and digestive upset, consider diets that are easier to digest and avoid abrupt food
                  changes. Omega-3 and Omega-6 fatty acids support skin and coat health, which is helpful in a breed
                  predisposed to allergies and skin irritation. Always monitor your Frenchie&apos;s body condition and
                  adjust portions accordingly with your veterinarian&apos;s guidance.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Brachycephalic &amp; Bloat Considerations:</strong> French Bulldogs are brachycephalic, which
                  affects their breathing and heat tolerance more than their risk of bloat. Feed smaller, more frequent
                  meals to reduce gulping and discomfort, use slow-feeder bowls if they eat too quickly, and avoid
                  exercising or exposing them to high heat around meal times. Always consult a veterinarian if you
                  notice signs of respiratory distress, excessive panting, or gastrointestinal pain.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs are beloved companions but are predisposed to several health issues, particularly
                  those related to their brachycephalic (short-nosed) structure and compact spine. Responsible breeders
                  work to reduce the incidence and severity of these problems through careful selection and health
                  testing. Prospective owners should be aware of common conditions and be prepared for potentially
                  higher veterinary care costs compared to some other breeds.
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
                          Brachycephalic Obstructive Airway Syndrome (BOAS)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Respiratory issues due to narrowed airways, elongated soft palate, and other structural
                          abnormalities; can cause snoring, exercise intolerance, and heat sensitivity
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Intervertebral Disc Disease (IVDD) &amp; Spine Disorders
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elevated risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Disc herniations and vertebral malformations (e.g., hemivertebrae) can cause pain, weakness,
                          or paralysis
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patellar Luxation &amp; Hip Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed concerns
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Knee cap or hip joint instability leading to lameness, pain, and possible arthritis
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Allergies &amp; Skin Conditions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Environmental and food allergies can lead to itching, ear infections, hot spots, and recurrent
                          skin infections
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Eye Disorders
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes cherry eye, corneal ulcers, entropion, and other issues related to prominent eyes and
                          facial structure
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heat Intolerance
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          High risk in hot climates
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Reduced ability to cool themselves due to brachycephalic anatomy; can quickly develop heat
                          stroke if overexposed to heat or exertion
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and French Bulldog breed organizations recommend specific health testing for breeding dogs.
                  Ask breeders for official documentation of health clearances and be sure they are familiar with
                  brachycephalic care:
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
                          Screen for hip dysplasia and overall hip joint quality
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patella Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for patellar luxation (loose kneecaps)
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
                          Screen for congenital and acquired heart disease
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
                          Screen for hereditary eye diseases and structural issues
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Spine/Vertebral Imaging (as recommended)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Radiographs interpreted by experienced veterinarians
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Evaluate for vertebral malformations such as hemivertebrae that may impact health
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
                  French Bulldogs may be small, but they still benefit greatly from consistent training and early
                  socialization. They are smart and eager to please but can be a little stubborn, so patience and a
                  sense of humor go a long way. Start training early to build good habits and prevent unwanted
                  behaviors like excessive jumping, pulling on the leash, or demanding attention.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Introduce your French Bulldog puppy to a variety of people,
                  dogs, environments, and sounds between 3–14 weeks of age. Positive experiences at this stage help
                  them grow into confident, resilient adults who handle busy city life, visitors, and veterinary
                  appointments with less stress. Puppy socialization classes can be especially helpful for building both
                  skills and confidence.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use positive reinforcement methods—treats, praise, and play—to
                  motivate your Frenchie. Keep sessions short and fun to match their attention span and avoid
                  frustration. Harsh corrections are not necessary and can damage the bond you share. Focus on core
                  skills such as sit, down, stay, come, loose-leash walking, and polite greetings, then add fun tricks
                  to keep things interesting.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> AKC S.T.A.R. Puppy and Canine Good Citizen (CGC)
                  programs are excellent foundations for manners and reliability. Many French Bulldogs also enjoy low-
                  impact activities like rally obedience or trick dog titles, which provide mental stimulation without
                  intense physical demands.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs are primarily companion dogs rather than traditional working dogs, but their friendly
                  nature and adaptability allow them to participate meaningfully in several roles and activities:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Companion &amp; Family Pets:</strong> Their main &quot;job&quot; is being a loving, close
                    companion. Frenchies excel at this, often forming strong bonds with all family members.
                  </li>
                  <li>
                    <strong>Therapy Dogs:</strong> Many French Bulldogs, with their gentle, sociable temperaments, make
                    excellent therapy dogs for visiting hospitals, nursing homes, and schools when properly trained and
                    certified.
                  </li>
                  <li>
                    <strong>Low-Impact Dog Sports:</strong> Some Frenchies enjoy low-intensity rallies, obedience, or
                    trick competitions tailored to their physical limitations.
                  </li>
                  <li>
                    <strong>Office &amp; Emotional Support Companions:</strong> Their small size, relatively quiet
                    nature, and people-focused temperament can make them good office companions or emotional support
                    animals, where permitted.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are French Bulldogs good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, French Bulldogs can be wonderful family dogs. They are typically affectionate, patient, and
                  playful with children when properly socialized and supervised. Their small size and moderate energy
                  level make them well suited to indoor living. However, due to their brachycephalic nature, children
                  should be taught to avoid rough play that could interfere with their breathing or put pressure on
                  their spine.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a French Bulldog puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs are often more expensive than many other companion breeds because of their popularity
                  and the costs associated with responsible breeding (including health testing and reproductive
                  challenges). Puppies from ethical breeders commonly range from around $2,000–$5,000 or more, depending
                  on region, pedigree, and breeder reputation. Be wary of very low prices, backyard breeders, or online
                  sellers who do not provide health clearances or allow you to meet the puppies and parents.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do French Bulldogs shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs have a short coat and are often described as moderate shedders. They usually shed
                  lightly throughout the year with occasional periods of heavier shedding, particularly during seasonal
                  coat changes. Regular brushing and good nutrition help keep their coat healthy and reduce loose hair
                  around the home, but they are not a non-shedding or hypoallergenic breed.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are French Bulldogs aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs are not typically aggressive when properly bred, socialized, and trained. Most
                  Frenchies are friendly, affectionate, and eager for attention. However, like any breed, a lack of
                  socialization, fear, pain, or poor handling can contribute to behavior problems. Choosing a reputable
                  breeder and investing in early training and socialization are key to raising a well-adjusted French
                  Bulldog with a stable temperament.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can French Bulldogs live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, French Bulldogs are excellent apartment dogs. Their small size, relatively low exercise needs,
                  and tendency to be quiet make them well suited for city living. They still need daily walks, potty
                  breaks, and playtime, but they are generally content with a few moderate outings and lots of indoor
                  companionship. Climate control is important, as they can quickly overheat in hot, poorly ventilated
                  spaces.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between standard and &quot;rare color&quot; French Bulldogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Breed standards recognize specific colors and patterns for French Bulldogs, such as brindle, fawn,
                  cream, and pied. So-called &quot;rare&quot; colors like merle, blue, or chocolate may be heavily
                  marketed but are often outside the official standard and may be associated with increased health
                  risks when produced irresponsibly. Ethical breeders prioritize health, temperament, and structure
                  over unusual colors and avoid crossing in other breeds to achieve them.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a French Bulldog Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Individuals or families seeking a small, affectionate companion dog</li>
                  <li>Apartment or city dwellers who can provide climate-controlled indoor living</li>
                  <li>Owners who enjoy short walks, gentle play, and plenty of cuddle time</li>
                  <li>
                    People who are home often or can arrange dog sitters/daycare, as Frenchies dislike long periods of
                    solitude
                  </li>
                  <li>
                    Those comfortable budgeting for potential health care needs, including brachycephalic-related
                    issues
                  </li>
                  <li>Owners committed to positive reinforcement training and early socialization</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  French Bulldogs may not be ideal for those who want a high-endurance hiking or running partner, live
                  in very hot climates without air conditioning, or cannot commit to potential medical expenses. They
                  are also not the best choice for people who are away from home for long workdays without dog care
                  support, as they thrive on frequent companionship and interaction.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;French Bulldog Breed Standard.&quot; akc.org</li>
                    <li>
                      2. French Bull Dog Club of America (FBDCA). &quot;Breed Information, Health &amp; Breed
                      Education.&quot;
                    </li>
                    <li>
                      3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics and Recommended Tests for
                      French Bulldogs.&quot;
                    </li>
                    <li>
                      4. AKC Canine Health Foundation. &quot;Brachycephalic Breeds: Health Concerns and Airway
                      Management.&quot;
                    </li>
                    <li>
                      5. Veterinary dermatology and allergy resources on atopic dermatitis and skin disease in
                      brachycephalic breeds.
                    </li>
                    <li>
                      6. Veterinary neurology references on Intervertebral Disc Disease (IVDD) in chondrodystrophic and
                      brachycephalic dogs.
                    </li>
                    <li>
                      7. FBDCA &amp; AKC education materials on responsible French Bulldog breeding and color standards.
                    </li>
                    <li>
                      8. General veterinary nutrition guidelines on feeding small, brachycephalic, and obesity-prone
                      dogs.
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/french-bulldog" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
