import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Great Dane',
  slug: 'great-dane',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764593426/pexels-david-kanigan-239927285-16294757_eabri1.jpg',
  description: 'Gentle giant • Loyal • Patient • Family guardian • Affectionate',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Great Dane Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Great Dane dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this gentle giant.',
  keywords: [
    'Great Dane',
    'Great Dane breed',
    'Great Dane care',
    'Great Dane temperament',
    'Great Dane training',
    'Great Dane health',
    'Great Dane care guide',
    'AKC Great Dane',
  ],
  pathname: '/pet-breeds/dogs/great-dane',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Great Dane Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Great Dane"
        description="Great Danes are often called the “Apollo of dogs” for their regal presence, towering height, and calm, dignified nature. Despite their size, they are typically gentle, affectionate companions who bond deeply with their families. With proper training, nutrition, and space to stretch out, Great Danes are devoted house dogs who love nothing more than relaxing close to their people."
        emoji="🐕"
        slug="great-dane"
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
                    The Great Dane is a giant working breed known for its impressive height, gentle temperament, and
                    striking, statuesque build. Originally developed in Europe as a boar-hunting and estate-guarding
                    dog, modern Danes are far more likely to be affectionate house companions than big-game hunters.
                    They combine a powerful, athletic frame with a surprisingly calm, people-oriented nature.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Great Danes consistently rank among the most popular
                    giant breeds. Their popularity comes from their sweet disposition, loyalty, and family-friendly
                    personality. When raised with proper socialization, exercise, and health care, Danes are gentle,
                    patient companions who enjoy moderate daily activity followed by long stretches of couch time at
                    home.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Great Dane&apos;s ancestry traces back several centuries in Europe, particularly in Germany and
                  surrounding regions. They were originally developed by crossing powerful mastiff-type dogs with
                  athletic sighthounds, creating a strong, fast, and courageous boarhound capable of chasing and holding
                  large game. Over time, selective breeding shifted their purpose from hunting to estate guardians and
                  distinguished companions for nobility.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In the 19th century, fanciers refined the breed&apos;s appearance and temperament, favoring a more
                  elegant outline and a steady, controllable disposition over raw hunting aggression. Germany became the
                  center of Great Dane development, and the breed standard was formalized there before being adopted by
                  kennel clubs worldwide. The AKC recognized the Great Dane in 1887. Today, while they retain the
                  strength and presence of their working ancestors, most Danes are cherished as gentle family
                  companions, show dogs, and therapy dogs.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes are one of the tallest dog breeds in the world. According to the AKC breed standard, they
                  should present a combination of power, elegance, and balance, never appearing coarse or clumsy. The
                  ideal Dane has a long, rectangular head, strong neck, deep chest, and well-angulated hindquarters that
                  allow for free, efficient movement. Their appearance should be regal and confident, reflecting their
                  nickname as the “Apollo of dogs.”
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
                          30–34 inches (minimum 30&quot; at shoulder)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          28–32 inches (minimum 28&quot; at shoulder)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~140–175+ pounds (varies by build)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~110–140+ pounds (varies by build)
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
                          7–10 years on average
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
                          Short, smooth, and glossy; single coat lying close to the body
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
                          Fawn, brindle, blue, black, harlequin, mantle, merle (colors and markings per AKC standard)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Great Danes have a long, narrow head with parallel planes and
                  a well-defined stop. The muzzle is deep and strong, and the eyes are medium-sized, dark, and
                  expressive, conveying an intelligent, friendly expression. Ears may be natural (folded) or cropped
                  (where legal), standing erect. The chest is deep, reaching to the elbows, and the body is slightly
                  longer than tall with a firm topline. Their powerful, ground-covering gait should appear easy and
                  effortless, never lumbering or clumsy.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes are often described as gentle giants. They are typically friendly, affectionate, and eager
                  to be close to their people, frequently believing themselves to be lap dogs despite their size. Most
                  Danes are calm indoors, preferring to lounge near their family, but they do enjoy regular play and
                  moderate exercise.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Danes are usually good-natured with strangers, though many have a natural guarding instinct and will
                  alert their owners to unfamiliar sounds or visitors. Proper socialization helps them remain confident
                  and stable rather than fearful or overprotective. They generally get along well with children when
                  raised together, but their size means supervision is important around small kids to prevent accidental
                  knockdowns.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes thrive on companionship and can be prone to separation-related stress if left alone for
                  long periods. They do best as true family members who share the home, not as outdoor or kennel dogs.
                  Their combination of sensitivity and size makes positive, consistent training and gentle handling
                  essential.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a giant working breed, Great Danes need regular exercise to stay fit and mentally balanced, but
                  their activity must be carefully managed—especially during growth—to protect their joints. While they
                  are not as endlessly high-energy as some herding breeds, they are large, powerful dogs that require
                  daily walks, playtime, and enrichment to prevent boredom and restlessness.
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
                          <strong>Puppies (8 weeks - 18 months)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short, frequent sessions; avoid high-impact or forced running
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, controlled play on soft surfaces, basic obedience, socialization, low-impact
                          brain games
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (18 months - 6 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~45–90 minutes total, split into 2–3 sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leashed walks, moderate hiking, off-leash play in secure areas, light jogging (after maturity),
                          obedience, nosework, casual dog sports
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (6+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–45 minutes of gentle activity, adjusted for health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short, leisurely walks, gentle play, swimming if joint-friendly, low-impact enrichment and
                          brain puzzles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> While Great Danes may not be as hyper-driven as some working breeds,
                  they still benefit from mental challenges. Incorporate puzzle feeders, basic and advanced obedience,
                  scent games, and interactive toys. Many Danes enjoy therapy work, obedience, and low-impact sports
                  that emphasize teamwork and focus rather than speed and jumping.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes have a short, smooth coat that is relatively easy to maintain. They are moderate
                  year-round shedders, and while their hair is short, their sheer size means there can be a lot of it.
                  Regular grooming helps keep their coat healthy, reduces shedding, and provides an opportunity to check
                  for skin issues, lumps, or injuries on such a large body.
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
                          Rubber curry brush or grooming glove to remove loose hair and stimulate skin
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (shedding peaks)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Several times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Rubber brush or de-shedding tool used gently across the body
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
                          Use dog-specific shampoo; thoroughly rinse and dry, paying attention to skin folds if present
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
                          Use sturdy clippers or grinder; long nails can affect gait and joint comfort, especially in
                          giant breeds
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
                          Veterinary ear cleaner and cotton balls; watch for redness, odor, or discharge
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
                          Dog toothbrush and toothpaste; add dental chews or rinses as recommended by your vet
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
                  Proper nutrition is especially critical for Great Danes due to their rapid growth and giant size. They
                  require high-quality diets that support steady, controlled growth in puppies and maintain lean body
                  condition in adults. Overfeeding or providing diets that are too energy-dense can contribute to joint
                  problems and shorten lifespan in giant breeds.
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
                          Puppies (2–18 months, giant-breed formula)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~22–26% (from controlled calcium, large/giant-breed puppy diets)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies widely with age/weight; follow vet and large-breed puppy food guidelines closely
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–4 (gradually reduced to 2–3 by adulthood)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (moderately active)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~22–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Often ~4–8 cups per day (split into meals), depending on food density and individual size;
                          adjust to maintain lean condition
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (higher activity/working)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          24–28%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          14–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Amount adjusted for workload and body condition; always monitor for excess weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seniors (6+ years)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          18–24%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–14%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Typically somewhat reduced from adult amounts; tailored to keep them lean and protect joints
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Choose diets specifically formulated for
                  large/giant breeds, especially during growth, with controlled calcium and appropriate energy density.
                  High-quality animal proteins (such as chicken, beef, lamb, or fish) should be among the first
                  ingredients. Omega-3 and Omega-6 fatty acids support joint, skin, and coat health. Many Great Danes
                  also benefit from joint-support supplements containing glucosamine, chondroitin, and EPA/DHA. Work
                  closely with your veterinarian to fine-tune calories, especially if your Dane is still growing or has
                  orthopedic or cardiac concerns.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> Great Danes are one of the breeds at highest risk for gastric
                  dilatation-volvulus (GDV or bloat), a life-threatening emergency where the stomach fills with gas and
                  may twist. To reduce risk, feed multiple smaller meals per day rather than one large meal, discourage
                  rapid gulping of food (use slow-feeder bowls if needed), and avoid heavy exercise or rough play for at
                  least an hour before and after meals. Discuss with your veterinarian whether a preventative
                  gastropexy (surgical tacking of the stomach) is appropriate, especially if your Dane is undergoing
                  spay/neuter surgery. Seek immediate emergency care if you suspect bloat—minutes matter.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes are generally affectionate and resilient, but like many giant breeds, they are predisposed
                  to certain inherited and size-related health conditions. Responsible breeders use health testing,
                  careful selection, and thoughtful breeding practices to reduce risk. Prospective owners should be
                  familiar with common health concerns and always ask for documentation of health clearances on breeding
                  dogs and close relatives.
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
                          Significant breed risk in giant dogs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal hip joint development that can lead to pain, arthritis, and reduced mobility
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia &amp; Other Orthopedic Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Developmental abnormalities affecting elbows, shoulders, or spine; may cause lameness or
                          chronic pain (includes conditions like Wobbler syndrome)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dilated Cardiomyopathy (DCM)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Important breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Heart muscle disease in which the heart becomes enlarged and weak; can lead to heart failure
                          or sudden collapse
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gastric Dilatation-Volvulus (Bloat/GDV)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very high risk in Great Danes
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Life-threatening emergency where the stomach fills with gas and may twist; requires immediate
                          veterinary intervention
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Autoimmune Thyroiditis / Hypothyroidism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Immune-related thyroid disease that can cause weight gain, lethargy, and skin or coat changes
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes conditions such as cataracts and other inherited eye problems that can impair vision
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Great Dane breed organizations recommend health testing for breeding dogs. When purchasing
                  a puppy from a breeder, ask for copies of official health clearances and be sure they are recent and
                  verifiable:
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
                          Screen for hip dysplasia and assess joint quality in a giant, fast-growing breed
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
                          Screen for elbow dysplasia and related orthopedic issues
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA, board-certified veterinary cardiologist, echocardiogram
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for dilated cardiomyopathy (DCM) and other structural heart diseases
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
                          Screen for hereditary eye diseases, including cataracts and other structural eye defects
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
                          Screen for autoimmune thyroiditis and hypothyroidism, which can affect energy and coat health
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
                  Great Danes are intelligent and eager to please, but their size makes early training and socialization
                  absolutely essential. A poorly mannered 150-pound dog can be difficult to manage, even if their
                  intentions are friendly. With positive, consistent guidance, Danes typically learn quickly and become
                  polite, cooperative companions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age, and continue well into adolescence. Introduce your Great Dane puppy to a variety of
                  people, friendly dogs, environments, and everyday noises in a controlled, positive way. Focus on calm,
                  confident behavior in new situations so they grow into steady adults who are not fearful or reactive
                  in public spaces.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use positive reinforcement—food rewards, praise, and play—to teach
                  foundational cues like sit, down, stay, come, and loose-leash walking. Harsh corrections are not
                  necessary and can damage trust in a sensitive giant breed. Because of their size, special emphasis
                  should be placed on household manners (no jumping, polite greetings, waiting at doors) and calm leash
                  skills from a young age.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy kindergarten, basic manners classes, and AKC
                  S.T.A.R. Puppy are excellent starting points. Many Danes go on to earn Canine Good Citizen (CGC) and
                  Community Canine (CGCA) titles, and some enjoy activities such as rally, obedience, and therapy work.
                  These outlets help reinforce good manners and deepen the bond between dog and owner.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes are no longer commonly used as big-game hunters, but their intelligence, size, and gentle,
                  people-focused nature allow them to excel in several modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Family Guardians:</strong> Their impressive size and deep bark make them natural deterrents
                    to intruders, even though well-bred Danes are typically friendly and stable in temperament.
                  </li>
                  <li>
                    <strong>Companion &amp; House Dogs:</strong> Most Great Danes are primarily beloved family members,
                    content to spend most of their time indoors, relaxing near their people and joining family
                    activities.
                  </li>
                  <li>
                    <strong>Therapy Dogs:</strong> Many Danes have the calm demeanor and affectionate nature that suit
                    them well for therapy visits to hospitals, nursing homes, and schools, provided they have solid
                    training and socialization.
                  </li>
                  <li>
                    <strong>Obedience &amp; Rally:</strong> While they may not be the fastest competitors, Great Danes
                    can earn titles in obedience and rally, showcasing their responsiveness and teamwork with their
                    handlers.
                  </li>
                  <li>
                    <strong>Low-Impact Dog Sports:</strong> Some Danes participate in sports like nosework, tracking, or
                    carting, which emphasize mental engagement and strength rather than jumping or high-impact movement.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Great Danes good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Great Danes can be wonderful family dogs when properly bred, socialized, and trained. They are
                  typically affectionate, gentle, and patient with children, often forming very strong bonds with their
                  families. Because of their size, supervision around small kids is important to prevent accidental
                  bumps or knockdowns. Families must also be prepared for the financial responsibility of caring for a
                  giant breed, including higher food and veterinary costs.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Great Dane puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing, provide appropriate early veterinary care, and raise puppies in a high-quality environment,
                  Great Dane puppies often range from around $1,500–$3,000 or more. Puppies from show or performance
                  lines may be higher. Be cautious of unusually low prices, which can signal poor breeding practices,
                  lack of health testing, or insufficient care during critical growth periods.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Great Danes shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes have short coats, but they are moderate shedders. You may notice more hair during seasonal
                  shedding peaks. Weekly brushing (and more frequent grooming during heavy shedding) helps reduce loose
                  hair and keeps the coat shiny. Because of their size, even moderate shedding can add up, so prospective
                  owners should be comfortable with some dog hair on clothes and furniture.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Great Danes aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred, well-socialized Great Danes are not inherently aggressive. The ideal Dane is friendly,
                  confident, and dependable. They may be watchful and protective of their home and family, but
                  unprovoked aggression is not typical of the breed. As with any dog, poor socialization, fear, pain, or
                  harsh handling can contribute to behavior problems. Early positive training and responsible breeding
                  are key to maintaining the breed&apos;s gentle reputation.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Great Danes live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes can adapt to apartment living if their exercise, training, and space needs are thoughtfully
                  managed. They are often calm indoors and do not require constant high-intensity activity, but they do
                  need daily walks, opportunities to stretch out, and room to lie comfortably. Owners must be committed
                  to multiple daily outings, elevator or stair training, and careful consideration of building rules
                  regarding giant breeds. Having access to safe outdoor areas is very helpful.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between European and American Great Dane lines?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Some breeders and fanciers distinguish between “European” and “American” Great Dane lines. In general,
                  European lines may emphasize heavier bone, broader heads, and a more massive overall appearance, while
                  American lines may lean toward a slightly more refined, athletic outline in keeping with the AKC
                  standard. Temperament, health, and individual breeder priorities vary widely within both groups. When
                  choosing a puppy, focus less on labels and more on health testing, sound structure, stable
                  temperament, and a breeder whose goals align with your lifestyle.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Great Dane Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Families or individuals who want a calm, affectionate giant companion in the home</li>
                  <li>Owners who can manage and train a very large, powerful dog from puppyhood</li>
                  <li>
                    People prepared for the higher ongoing costs of a giant breed (food, bedding, veterinary care, and
                    medications)
                  </li>
                  <li>
                    Households that can provide daily walks, moderate exercise, and plenty of time spent together
                    indoors
                  </li>
                  <li>Homes with enough physical space for a large dog to move around and stretch out comfortably</li>
                  <li>Owners committed to early socialization, positive training, and regular veterinary monitoring</li>
                  <li>
                    People comfortable with a shorter average lifespan and willing to prioritize quality of life and
                    preventive health care
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Great Danes may not be ideal for owners who prefer very low-maintenance pets, are frequently away from
                  home, or are not comfortable with the physical and financial realities of caring for a giant dog. For
                  the right family, however, a well-bred, well-cared-for Great Dane can be an incredibly loving,
                  unforgettable companion.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Great Dane Breed Standard.&quot; akc.org</li>
                    <li>2. Great Dane Club of America (GDCA). &quot;Health &amp; Breed Information.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Great Danes.&quot;</li>
                    <li>4. AKC Canine Health Foundation. &quot;Dilated Cardiomyopathy in Large and Giant Breeds.&quot;</li>
                    <li>5. Various veterinary internal medicine and nutrition resources on giant-breed growth and diet.</li>
                    <li>6. Veterinary emergency medicine references on gastric dilatation-volvulus (GDV/bloat) prevention
                      and management.</li>
                    <li>7. Great Dane breed club guidelines on responsible breeding, health testing, and care.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/great-dane" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
