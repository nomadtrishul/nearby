import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Yorkshire Terrier',
  slug: 'yorkshire-terrier',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764596309/pexels-jeshoots-3512_r9ks2j.jpg',
  description: 'Tiny • Confident • Lively • Affectionate • Big personality',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Yorkshire Terrier Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Yorkshire Terriers based on AKC and YTCA recommendations. Learn about Yorkie characteristics, temperament, grooming needs, nutrition, health screening, and training tips for this toy companion breed.',
  keywords: [
    'Yorkshire Terrier',
    'Yorkie',
    'Yorkshire Terrier breed',
    'Yorkshire Terrier care',
    'Yorkshire Terrier temperament',
    'Yorkshire Terrier training',
    'Yorkshire Terrier health',
    'Yorkie care guide',
    'AKC Yorkshire Terrier',
  ],
  pathname: '/pet-breeds/dogs/yorkshire-terrier',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Yorkshire Terrier Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Yorkshire Terrier"
        description="Yorkshire Terriers, affectionately known as “Yorkies,” are tiny but bold toy dogs with a big-dog attitude. Originally bred as tenacious ratters in the mills and mines of northern England, today they are cherished companion dogs who thrive on being close to their people. With their silky coats, lively personalities, and portable size, Yorkies fit well into many modern homes—as long as their grooming, training, and social needs are met."
        emoji="🐶"
        slug="yorkshire-terrier"
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
                    The Yorkshire Terrier is a small but spirited toy breed known for its
                    luxurious silky coat, confident attitude, and strong attachment to its
                    family. Developed in the county of Yorkshire in northern England, these
                    compact terriers were originally bred to hunt rats in textile mills and
                    mines. Over time, their elegance and charm made them highly fashionable
                    companions, especially in city settings.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Yorkshire Terriers
                    consistently rank among the most popular toy breeds. Their appeal lies in
                    their portable size, affectionate nature, and lively personality. When
                    properly socialized and trained, Yorkies can be devoted family companions
                    who enjoy both snuggling on the couch and joining their owners on
                    everyday adventures. Their low-shedding, hair-like coat also makes them
                    attractive to people who prefer less loose fur in the home—though grooming
                    needs are significant.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Yorkshire Terrier was developed in the 19th century in the industrial
                  regions of Yorkshire and Lancashire, England. Scottish weavers and workers
                  who migrated south brought small terrier-type dogs with them, which were
                  crossed with local terriers to create an efficient, compact ratter. These
                  early Yorkies worked in textile mills, factories, and mines, keeping rodent
                  populations under control.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As the breed became more refined, their striking blue-and-tan coats and
                  confident demeanor caught the eye of wealthier owners. Yorkshire Terriers
                  transitioned from working-class ratters to fashionable lapdogs and show
                  dogs. The AKC recognized the breed in the late 19th century, and the
                  Yorkshire Terrier Club of America (YTCA) now serves as the parent club in
                  the United States. Today, Yorkies are primarily beloved companions and
                  popular city dogs, though many still display the determined, terrier spirit
                  of their ancestors.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers are small, fine-boned toy dogs with a compact, well-balanced
                  body. According to the AKC breed standard, Yorkies should be well proportioned
                  with a level topline, straight legs, and a confident carriage. Their most
                  distinctive feature is their long, straight, glossy coat, which falls evenly
                  on either side of the body and is parted from nose to tail. Despite their tiny
                  size, they should appear sturdy rather than fragile or overly delicate.
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
                          7–8 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          7–8 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Up to 7 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Up to 7 pounds
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
                          11–15 years (sometimes longer with excellent care)
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
                          Long, straight, fine, silky single coat; hair-like rather than woolly
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
                          Blue and tan; puppies are typically black and tan and lighten as they mature
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Yorkshire Terriers have a small,
                  flat skull with a moderately short muzzle and a well-defined stop. Their
                  eyes are medium-sized, dark, and expressive, giving an alert, intelligent
                  look. Ears are small, V-shaped, and carried erect when trimmed correctly.
                  The coat is parted down the middle of the back and, when kept long, falls
                  straight and evenly on either side of the body. In many companion homes,
                  Yorkies wear a shorter “puppy cut” for easier maintenance. Tails are carried
                  slightly higher than the level of the back and may be docked where legal or
                  left natural.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers have the heart of a much larger dog. They are typically
                  confident, curious, and bold, often willing to take on challenges that far
                  exceed their size. Many Yorkies form very close bonds with their primary
                  caregiver and enjoy being involved in everything their people do. They are
                  playful and lively indoors, yet also enjoy curling up in a lap at the end of
                  the day.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkies can be wary of strangers and may be vocal when they hear unfamiliar
                  noises, making them alert little watchdogs. Early, positive socialization is
                  important to keep their boldness from tipping into excessive barking, anxiety,
                  or snappiness. Gentle handling is essential, especially in homes with children,
                  because their small size makes them vulnerable to accidental injury.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Like many intelligent toy breeds, Yorkshire Terriers can be a bit stubborn,
                  particularly when it comes to house training and recall. Consistent routines,
                  patient training, and plenty of rewards help channel their terrier determination
                  into good manners. They thrive when treated as full family members rather than
                  being left alone for long stretches every day.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Although Yorkshire Terriers are small, they are not couch potatoes. They need
                  daily physical activity and mental engagement to stay fit and well-behaved.
                  Their exercise needs are lighter than those of large working breeds but still
                  significant for a toy dog. Care should be taken not to over-exercise puppies
                  or fragile individuals, especially on hot days or rough terrain.
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
                          5 minutes per month of age, 2x daily (on soft, safe surfaces)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, gentle indoor play, basic obedience, socialization with careful supervision
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes total, split into several short sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leashed walks, indoor and outdoor play, fetch with small toys, light agility, trick training
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–40 minutes, adjusted for health and comfort
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, indoor games, low-impact balance or scent games, short training sessions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Yorkies are clever and curious, so mental
                  activity is just as important as physical exercise. Puzzle toys, enrichment
                  feeders, trick training, nosework, and learning new cues help keep their minds
                  engaged. Short, fun training sessions throughout the day can prevent boredom,
                  reduce nuisance barking, and build a stronger bond between dog and owner.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers have a long, silky coat that grows continuously and is more
                  like human hair than typical dog fur. While they shed very little, their coat
                  requires consistent grooming to prevent tangles, mats, and skin irritation.
                  Owners can choose to maintain a full-length show coat, which demands daily care,
                  or keep their Yorkie in a shorter “puppy cut” for easier maintenance. Regular
                  grooming also helps monitor the skin, ears, and overall body condition.
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
                          Brushing (long or medium coat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily or at least 4–5 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Pin brush, comb, detangling spray; focus on behind ears, armpits, legs, and under harness
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Professional grooming / trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–8 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Full-body trim or puppy cut, sanitary trim, paw/face shaping, and coat maintenance
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 2–4 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle, dog-specific shampoo and conditioner; dry thoroughly to avoid chills and skin problems
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
                          Trim or grind; small dogs often need very regular nail care since their nails don&apos;t wear down easily
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear cleaning & hair management
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weekly check; clean and pluck/trim hair as recommended
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
                          Daily (ideal) or at least 3–4x per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog toothbrush and toothpaste; routine professional cleanings are especially important for toy breeds
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
                  Proper nutrition is vital for Yorkshire Terriers to maintain a healthy weight,
                  support their long lifespan, and prevent issues such as hypoglycemia (low blood
                  sugar) and dental disease. As a toy breed, Yorkies do best on high-quality diets
                  formulated for small dogs, with appropriately sized kibble or carefully balanced
                  fresh or wet food. Their food should provide adequate protein and fat without
                  excessive calories that could lead to obesity.
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
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by age/weight; often ~¼–¾ cup total per day, divided into several meals
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3–4 (small, frequent meals help prevent hypoglycemia)
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
                          ~¼–½ cup total per day, adjusted for size and activity level
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2 (or 3 smaller meals for sensitive dogs)
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
                          ~½–¾ cup, adjusted to maintain a lean body condition
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
                          ~¼–½ cup, tailored to activity level, dental health, and metabolism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2 (smaller, easily chewed meals if dental issues are present)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look for formulas that
                  list high-quality animal proteins (such as chicken, turkey, lamb, or fish) as
                  the first ingredient. Omega-3 and Omega-6 fatty acids support skin and coat
                  health, while appropriate fiber levels help maintain good digestion. Because
                  Yorkshire Terriers are prone to dental disease, diets that support dental
                  health—combined with daily brushing—are especially important. Consult your
                  veterinarian about the best diet and portion sizes for your individual dog,
                  particularly if you suspect food sensitivities or digestive issues.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Blood Sugar & Meal Timing:</strong> Young Yorkie puppies and very small
                  adults can be at risk for hypoglycemia, especially if they miss meals or burn
                  a lot of energy at once. Regular meal schedules, small frequent meals for
                  puppies, and monitoring for signs of weakness, trembling, or confusion are
                  important. Always seek veterinary care if you suspect low blood sugar or other
                  sudden changes in your dog&apos;s behavior.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers are generally long-lived dogs, but like all purebred breeds,
                  they are predisposed to certain inherited and breed-related health conditions.
                  Responsible breeders use health testing and thoughtful pairing to reduce the
                  risk of these issues. Prospective owners should be familiar with common Yorkie
                  health concerns and ask breeders for documentation of appropriate health
                  clearances, along with a strong focus on sound temperament.
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
                          Luxating Patella (Loose Kneecaps)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common toy-breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Kneecaps slip out of place, causing intermittent lameness or skipping; can lead to arthritis in severe cases
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common in small breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Crowded teeth and tartar buildup can cause gum disease, bad breath, tooth loss, and systemic health problems
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Portosystemic Shunt (Liver Shunt)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal blood vessel reduces liver blood flow, leading to neurologic signs, poor growth, and digestive issues
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Collapsing Trachea
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common in toy breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weakening of the tracheal rings causes coughing (often &quot;goose honk&quot;) and breathing difficulties, worsened by pulling on collars
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Legg-Calvé-Perthes Disease
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Noted in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degeneration of the femoral head in the hip joint, causing pain, lameness, and muscle loss; often requires surgical treatment
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hypoglycemia (Low Blood Sugar) in Puppies
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Important toy-breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Can cause weakness, trembling, and collapse in young or very small dogs; prevented with regular feeding and monitoring
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Yorkshire Terrier Club of America (YTCA) recommend a combination of
                  orthopedic, eye, and general veterinary evaluations for breeding dogs. Always
                  request copies of official health clearances when purchasing a puppy from a
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
                          Patella (Kneecap) Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or equivalent
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for luxating patella and grade severity of kneecap instability
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
                          Screen for hereditary eye diseases, including cataracts and retinal issues
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Liver Function Testing (e.g., Bile Acids)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary clinical laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for portosystemic shunt and other liver function abnormalities
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Orthopedic Evaluation for Legg-Calvé-Perthes
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or board-certified radiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Assess hip joint development in breeding dogs and identify orthopedic disease
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation (where recommended)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or veterinary cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for congenital or acquired heart disease before breeding
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
                  Yorkshire Terriers are bright, observant, and quick to learn—especially when
                  training is fun and reward-based. At the same time, they can be independent
                  and a bit stubborn, so consistency and patience are key. Yorkies do well in
                  basic obedience and can excel in dog sports like agility and rally, despite
                  their small size.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible,
                  ideally between 3–14 weeks of age. Gently expose your Yorkie puppy to a variety
                  of people, dogs, sounds, and environments in a positive, controlled manner.
                  Teach them that handling, grooming, and vet visits are safe and rewarding.
                  This helps prevent fear-based behaviors, reduces the risk of snappiness, and
                  supports a confident adult temperament.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement—using tiny treats,
                  praise, and play—works best for Yorkies. Harsh corrections can damage trust and
                  may provoke defensive behavior. House training often takes extra time with toy
                  breeds because of their small bladders, so frequent potty breaks, consistent
                  schedules, and management (such as litter boxes or indoor potty pads where
                  appropriate) can help. Be proactive about teaching quiet cues and calm behavior
                  to manage barking.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy socialization classes,
                  AKC S.T.A.R. Puppy, and Canine Good Citizen (CGC) can provide valuable structure
                  and guidance. Many Yorkies enjoy small-breed agility, trick training, rally,
                  and therapy dog work. These activities give them an outlet for their intelligence
                  and energy and strengthen the human–dog bond.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While Yorkshire Terriers no longer commonly work as ratters in mills, they
                  still retain the curiosity, determination, and agility that made them effective
                  working dogs. Today, Yorkies shine in a variety of modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Companion Dogs:</strong> Yorkies are primarily cherished for their
                    companionship, forming strong emotional bonds with their families and often
                    preferring to be near their people at all times.
                  </li>
                  <li>
                    <strong>Watchdogs:</strong> Despite their size, many Yorkies make alert little
                    watchdogs who will quickly sound the alarm at unusual sounds or visitors.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Yorkshire Terriers can be energetic and agile, and
                    some excel in sports such as agility, rally, and obedience, where speed and
                    responsiveness are rewarded.
                  </li>
                  <li>
                    <strong>Therapy Dogs:</strong> Their small size and affectionate nature can make
                    them excellent therapy dogs in settings like hospitals, nursing homes, and
                    schools, provided they have a calm, stable temperament.
                  </li>
                  <li>
                    <strong>Travel Companions:</strong> Yorkies are well-suited to travel and city
                    living when properly socialized, often adapting well to life in apartments and
                    going along on errands or trips.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Yorkshire Terriers good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Yorkshire Terriers can make wonderful family companions, especially for
                  households that understand how to safely handle small dogs. They tend to bond
                  closely with their people and enjoy interactive play and affection. Because of
                  their tiny size and delicate bones, they may be better suited to families with
                  older, dog-savvy children who can be gentle and respectful. As with any breed,
                  supervision around children is important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Yorkshire Terrier puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders
                  who focus on health testing, temperament, and proper socialization, Yorkshire
                  Terrier puppies often range from around $1,500–$3,000 or more. Puppies from
                  champion show or performance lines may be higher. Be cautious of unusually low
                  prices, which can indicate poor breeding practices, lack of health screening, or
                  puppy mills. Always prioritize responsible breeders or consider breed rescue
                  organizations.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Yorkshire Terriers shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers are considered low shedders. Their hair-like coat sheds much
                  less than many double-coated breeds, which can mean less loose fur around the
                  house. However, this does not mean they are low maintenance—quite the opposite.
                  Regular brushing, bathing, and grooming are essential to keep their long coat
                  free of tangles and mats. People with dog allergies may still react to Yorkies,
                  so spend time with the breed before assuming they are hypoallergenic.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Yorkshire Terriers aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers are not inherently aggressive, but they are bold and can be
                  protective of their families. Poor socialization, rough handling, fear, or pain
                  can lead to defensive behaviors like growling or snapping—especially in such a
                  small dog. Early positive experiences, respectful handling, and consistent
                  training help prevent behavior problems. It&rsquo;s important not to encourage
                  “small dog syndrome” by allowing behaviors that would be unacceptable in a larger
                  breed (such as snapping or lunging) simply because the dog is tiny.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Yorkshire Terriers live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Yorkshire Terriers are well-suited to apartment and city living. Their small
                  size and modest exercise needs make them adaptable to smaller spaces, as long as
                  they receive daily walks, playtime, and mental stimulation. One key consideration
                  is barking—Yorkies may be quite vocal, so proactive training and enrichment are
                  important to avoid disturbing neighbors. Regular potty breaks and a steady routine
                  are also crucial for successful house training in an apartment setting.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between standard and &quot;teacup&quot; Yorkshire Terriers?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC breed standard for Yorkshire Terriers specifies a weight of up to 7
                  pounds. Extremely tiny dogs marketed as &quot;teacup&quot; or &quot;micro&quot;
                  Yorkies are not a separate recognized variety and may be the result of breeding
                  very small or undersized dogs. While their size may seem appealing, these dogs
                  can have a higher risk of health issues such as hypoglycemia, fragile bones, and
                  organ problems. Most breed clubs and veterinary professionals discourage seeking
                  &quot;teacup&quot; Yorkies; instead, look for a healthy dog within the normal
                  weight range from a responsible breeder or rescue.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Yorkshire Terrier Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>People who want a small, portable companion that enjoys close contact</li>
                  <li>Owners willing to commit to regular grooming or professional salon visits</li>
                  <li>Households that can provide daily walks, playtime, and mental enrichment</li>
                  <li>
                    Families with older, gentle children or adults who understand how to handle small dogs safely
                  </li>
                  <li>
                    Apartment or city dwellers prepared to manage barking through training and enrichment
                  </li>
                  <li>
                    Owners able to spend plenty of time with their dog rather than leaving them alone all day
                  </li>
                  <li>
                    People who appreciate an intelligent, expressive dog with a big personality in a small body
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yorkshire Terriers may not be ideal for families with very young, boisterous
                  children, people seeking a very low-maintenance dog, or owners who are away from
                  home for long hours with limited time for interaction. Without appropriate
                  training, companionship, and grooming, a Yorkie&apos;s vocal nature, big
                  personality, and coat care needs can become challenging to manage.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Yorkshire Terrier Breed Standard.&quot; akc.org</li>
                    <li>2. Yorkshire Terrier Club of America (YTCA). &quot;Health &amp; Breeder Information.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Yorkshire Terriers.&quot;</li>
                    <li>4. Various veterinary resources on toy-breed nutrition, hypoglycemia, and dental care.</li>
                    <li>5. Veterinary behavior and training references on socialization and small-breed house training.</li>
                    <li>6. Clinical veterinary texts discussing portosystemic shunts and tracheal collapse in toy dogs.</li>
                    <li>7. YTCA and AKC materials on responsible breeding practices and recommended health testing.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/yorkshire-terrier" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
