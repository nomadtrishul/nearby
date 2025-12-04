import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Bernese Mountain Dog',
  slug: 'bernese-mountain-dog',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764686120/pexels-vishpix-30159904_x2p0ub.jpg',
  description: 'Gentle • Loyal • Large working dog • Family-oriented • Calm-natured',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Bernese Mountain Dog Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Bernese Mountain Dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Bernese Mountain Dog',
    'Bernese Mountain Dog breed',
    'Bernese Mountain Dog care',
    'Bernese Mountain Dog temperament',
    'Bernese Mountain Dog training',
    'Bernese Mountain Dog health',
    'Berner care guide',
    'AKC Bernese Mountain Dog',
  ],
  pathname: '/pet-breeds/dogs/bernese-mountain-dog',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Bernese Mountain Dog Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Bernese Mountain Dog"
        description="The Bernese Mountain Dog, or “Berner,” is a large, tri-colored working dog originally developed in the Swiss Alps as an all-purpose farm and draft dog. Known for their gentle nature, deep devotion to family, and striking appearance, Berners combine strength and power with a soft, affectionate temperament that makes them beloved companions for those who can meet their needs."
        emoji="🐕"
        slug="bernese-mountain-dog"
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
                    The Bernese Mountain Dog is a large, sturdy working breed known for its calm disposition, gentle
                    nature, and striking tricolor coat. Developed in Switzerland, particularly in the canton of Bern,
                    these dogs served as farm companions, draft dogs pulling carts, and watchdogs for livestock and
                    property. Their balanced temperament, impressive strength, and willingness to work made them
                    invaluable on small farms in the Swiss Alps.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), the Bernese Mountain Dog is one of the most popular
                    large working breeds. Their popularity stems from their affectionate, family-oriented temperament
                    and their ability to be both dignified and playful. When given appropriate exercise, thoughtful
                    training, and plenty of time with their people, Berners make devoted family companions, gentle play
                    partners for respectful children, and impressive participants in activities such as draft work,
                    obedience, rally, and therapy visits.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Bernese Mountain Dog is one of four Swiss mountain dog breeds and is the only one with a long
                  coat. The breed’s ancestors likely accompanied Roman soldiers as mastiff-type farm and guard dogs,
                  later mixing with local farm dogs in the Swiss Alps. Over time, farmers in the region refined these
                  dogs into strong, versatile workers who could pull carts loaded with dairy products, accompany cattle
                  to pasture, and serve as loyal guardians of the homestead.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In the late 19th and early 20th centuries, dedicated Swiss fanciers worked to preserve and promote the
                  Bernese Mountain Dog as industrialization reduced the need for traditional farm work. The breed began
                  to spread beyond Switzerland and eventually reached North America, where its gentle temperament and
                  eye-catching appearance quickly earned admirers. The AKC formally recognized the Bernese Mountain Dog
                  in 1937, and the Bernese Mountain Dog Club of America (BMDCA) now serves as the breed’s parent club in
                  the United States. Today, Berners are cherished as family companions, therapy dogs, and working
                  partners in draft and farm activities.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bernese Mountain Dogs are large, powerful, and strongly built, yet they should appear balanced and
                  athletic rather than cumbersome. According to the AKC breed standard, they are slightly longer than
                  tall, with a level topline, strong bone, and a proud carriage that reflects their heritage as draft
                  and farm dogs. Their hallmark is a rich tricolor coat—jet black with rust and clear white markings—and
                  a gentle, intelligent expression that hints at their affectionate nature.
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
                          25–27.5 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          23–26 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          80–115 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          70–95 pounds
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
                          7–10 years
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
                          Thick, moderately long, weather-resistant double coat; straight to slightly wavy
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
                          Classic tricolor: jet black background with rich rust and clear white markings in a specific
                          pattern
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Bernese Mountain Dogs have a broad, slightly rounded skull
                  with a strong but not coarse muzzle and a well-defined stop. Dark brown, oval eyes convey a gentle,
                  thoughtful expression. Ears are medium-sized, triangular, and set high, lying close to the head when
                  at rest. The full, bushy tail is carried low when relaxed and may lift slightly when the dog is alert,
                  but should not curl over the back. Their movement is steady, balanced, and ground-covering, reflecting
                  their history as dogs who worked all day in fields and along mountain paths.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bernese Mountain Dogs are renowned for their sweet, easygoing temperament. They are typically calm,
                  affectionate, and eager to please, forming very strong bonds with their families. Most Berners enjoy
                  being close to their people and may follow their favorite humans from room to room, content simply to
                  be part of daily life. Their demeanor is often described as “gentle giant” when they are properly
                  bred, socialized, and trained.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Berners are usually friendly or politely reserved with strangers but should not be fearful or
                  aggressive. Many will offer a deep bark to announce visitors, making them effective natural watchdogs,
                  but they are rarely true guard dogs. Early, positive socialization helps prevent shyness and supports
                  a confident, stable temperament that can handle new situations, guests, and public environments with
                  ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While Bernese Mountain Dogs enjoy play and outdoor adventures, they are generally less intense and
                  hyperactive than many herding or sporting breeds. However, they are sensitive and may become worried
                  or shut down in response to harsh corrections or chaotic environments. Gentle, consistent guidance and
                  a predictable routine help them thrive. Because they are so attached to their families, some Berners
                  may be prone to separation anxiety if left alone for long stretches on a regular basis.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As large working dogs, Bernese Mountain Dogs require regular daily exercise to maintain healthy
                  weight, muscle tone, and mental well-being. Their exercise needs are moderate to moderately high: they
                  enjoy brisk walks, hikes in cooler weather, and opportunities to move freely, but they are not built
                  for intense, high-impact activities over long periods. Growing puppies in particular must be protected
                  from over-exercise to reduce stress on developing joints.
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
                          Short, frequent sessions; roughly 5 minutes per month of age, 2x daily, avoiding high-impact
                          exercise
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks on soft surfaces, gentle play, basic obedience, socialization, controlled
                          exploration; avoid long runs, stairs, and repetitive jumping
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1–1.5 hours total, split into sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, moderate hikes in cool weather, carting/draft work, structured obedience,
                          nosework, low- to moderate-impact games like fetch on grass
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–45 minutes, adjusted for mobility and health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, swimming where appropriate, light play, sniff walks, low-impact brain games and
                          puzzle toys
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Bernese Mountain Dogs benefit greatly from mental enrichment.
                  Incorporate scent games, puzzle feeders, basic and advanced obedience, draft/cart work, rally,
                  trick-training, and interactive toys into their routine. Many Berners enjoy activities that allow
                  them to use their brains and their bodies without excessive pounding on their joints.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bernese Mountain Dogs have a thick, double coat designed to protect them from cold and wet conditions.
                  The outer coat is moderately long and straight or slightly wavy, while the undercoat is dense and
                  soft. Berners shed year-round and typically experience heavier seasonal shedding once or twice a year
                  as they “blow” their undercoat. Regular grooming is essential to control shedding, prevent mats, and
                  keep the coat and skin healthy.
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
                          Pin brush, slicker brush, and undercoat rake; focus on behind ears, legs, chest, and tail to
                          prevent mats
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
                          Undercoat rake, de-shedding tool, and thorough line brushing to remove loose undercoat
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
                          Dog-specific shampoo and conditioner; ensure thorough rinsing and drying due to dense coat
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
                          Trim or grind; nails should not click loudly on hard floors and should not splay the toes
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
                          Veterinary ear cleaner and cotton balls; monitor for redness, odor, or debris in drop ears
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
                          Dog toothbrush and toothpaste; consider dental chews or water additives as recommended by your
                          veterinarian
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
                  Proper nutrition is critical to support the Bernese Mountain Dog&apos;s large frame, joint health, and
                  overall well-being. As a large working breed with a relatively short lifespan, Berners benefit from
                  high-quality diets formulated for large-breed dogs, particularly during the growth phase. Controlled
                  growth in puppies helps reduce stress on developing bones and joints and may lower the risk of some
                  orthopedic issues later in life.
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
                          Puppies (2–12 months, large-breed formula)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by age/weight; follow vet and food label guidance for large-breed puppies
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
                          20–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~3–5 cups (split into meals), adjusted for weight, metabolism, and activity level
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
                          ~4–6 cups, adjusted based on workload, body condition, and veterinary guidance
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
                          2.5–4 cups, tailored to weight, activity, and joint health; consider senior or joint-support
                          formulas
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
                  proteins (such as chicken, turkey, beef, lamb, or fish) as the first ingredient. Controlled calories
                  and appropriate calcium-to-phosphorus ratios are especially important for large-breed puppies. Omega-3
                  and Omega-6 fatty acids support joint, skin, and coat health, while supplements such as glucosamine
                  and chondroitin may be beneficial for joint support. Because Bernese Mountain Dogs can be prone to
                  obesity and certain health conditions, work closely with your veterinarian to choose the best diet and
                  maintain an ideal body condition score throughout life.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> Bernese Mountain Dogs, like many large and deep-chested breeds, are
                  at increased risk for gastric dilatation-volvulus (GDV or bloat), a life-threatening emergency. To
                  help reduce risk, divide daily food into two or more meals, discourage rapid gulping (use slow-feeder
                  bowls if needed), avoid heavy exercise for about an hour before and after meals, and discuss with your
                  veterinarian whether a preventive gastropexy surgery is appropriate. Seek emergency veterinary care
                  immediately if you suspect bloat.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bernese Mountain Dogs are generally robust and capable in their working roles, but the breed is known
                  for certain health challenges, particularly a relatively short average lifespan and an increased
                  incidence of some cancers. Responsible breeders use health testing, pedigree research, and careful
                  selection to reduce the risk of inherited diseases. Prospective owners should be familiar with common
                  concerns and always request documentation of health clearances when choosing a puppy.
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
                          Abnormal hip joint development leading to arthritis, pain, and reduced mobility; weight
                          management and appropriate exercise are important preventive measures
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable risk in large breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Developmental abnormalities in the elbow joint that can cause lameness and arthritis; often
                          managed with a combination of medical and sometimes surgical treatment
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Cancers
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Major breed health challenge
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Berners have an increased incidence of certain cancers, including histiocytic sarcoma,
                          lymphoma, mast cell tumors, and osteosarcoma; careful breeding and early detection are
                          priorities
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative Myelopathy (DM)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Progressive neurologic disease causing weakness and paralysis of the hind limbs; DNA testing
                          helps identify at-risk dogs for breeding
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes cataracts and Progressive Retinal Atrophy (PRA), among other conditions; regular eye
                          exams by a veterinary ophthalmologist are recommended for breeding dogs
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Autoimmune Thyroiditis
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Immune-related thyroid disease that can lead to hypothyroidism, causing lethargy, weight gain,
                          and coat changes; diagnosed with blood tests and typically managed with medication
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and the Bernese Mountain Dog Club of America (BMDCA) recommend comprehensive health testing for
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
                          Screen for hip dysplasia and assess joint quality prior to breeding
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
                          Screen for elbow dysplasia and other developmental elbow abnormalities
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
                          Screen for hereditary eye diseases such as cataracts and PRA
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for congenital or inherited heart disease
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Von Willebrand Disease DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect carriers or affected dogs with this hereditary bleeding disorder
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Degenerative Myelopathy (DM) DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or certified laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify dogs that are at risk, carriers, or clear for DM-associated mutations
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
                  Bernese Mountain Dogs are intelligent, eager-to-please, and generally very willing learners. They
                  often have a thoughtful, somewhat sensitive nature and may mature more slowly than some other working
                  breeds, both physically and mentally. With patient, consistent training, Berners can excel in basic
                  manners, obedience, draft work, and even performance sports like rally and tracking.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization early, ideally between 3–14 weeks of age.
                  Introduce your Berner puppy to a variety of people, dogs, environments, surfaces, and sounds in a
                  positive, controlled way. This helps prevent shyness and promotes a confident adult dog who can handle
                  busy households, visitors, veterinary visits, and travel without undue stress.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods—using food rewards, toys, praise,
                  and play—work best for Bernese Mountain Dogs. Because they are sensitive and deeply bonded to their
                  people, harsh corrections can undermine trust and cause worry or withdrawal. Keep training sessions
                  short and upbeat, with plenty of breaks and variety. Focus on foundational cues like sit, down, stay,
                  come, loose-leash walking, and polite greetings, then build toward more advanced skills or activities
                  such as draft/cart work and rally.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy, Canine Good Citizen
                  (CGC), and Community Canine (CGCA) as foundations for manners and reliability. Many Berners enjoy
                  carting/draft trials, obedience, rally, tracking, and therapy dog work. These activities offer a
                  productive outlet for their desire to work closely with their people while remaining at a reasonable
                  physical intensity for a large breed.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bernese Mountain Dogs were originally bred as multipurpose farm dogs, and many still enjoy having a
                  “job” to do today. Their combination of strength, trainability, and gentle temperament lends itself to
                  a variety of roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Draft & Cart Work:</strong> Historically, Berners pulled carts loaded with milk and other
                    goods. Today, many participate in draft and carting sports, happily working alongside their owners
                    in harness.
                  </li>
                  <li>
                    <strong>Farm & Homestead Companions:</strong> Berners can still function as steady farm dogs,
                    accompanying livestock, watching over property, and serving as calm, reliable partners in daily
                    chores.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> While not as fast as some lighter breeds, Berners can participate in
                    obedience, rally, tracking, and even agility at an appropriate level. Their desire to work with
                    their people makes these activities rewarding.
                  </li>
                  <li>
                    <strong>Therapy & Comfort Dogs:</strong> The gentle, people-focused nature of Berners makes them
                    excellent candidates for therapy work in hospitals, schools, and care facilities when they have a
                    stable temperament and solid manners.
                  </li>
                  <li>
                    <strong>Search & Rescue / Detection:</strong> Some Berners work in search and rescue or scent
                    detection roles, using their noses, stamina, and cooperative temperament to assist handlers.
                  </li>
                  <li>
                    <strong>Family Companions:</strong> For many owners, a Berner’s most important job is being a loving
                    family member—joining in on hikes during cool weather, camping trips, and relaxed adventures with
                    their favorite people.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Bernese Mountain Dogs good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Bernese Mountain Dogs are often wonderful family dogs for households that understand and can
                  accommodate a large breed. They are typically affectionate, patient, and gentle with children who
                  interact respectfully. Their calm temperament and desire to be near their people make them devoted
                  companions. Because of their size and strength, supervision around very small children is important,
                  and families should teach kids appropriate ways to interact with dogs.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Bernese Mountain Dog puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform extensive
                  health testing, participate in breed clubs, and raise puppies in enriched environments, Bernese
                  Mountain Dog puppies often range from around $1,500–$3,500 or more. Puppies from lines with strong
                  performance, health, or show records may be higher. Be cautious of unusually low prices or sellers who
                  do not provide health clearances, detailed contracts, or support after purchase.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Bernese Mountain Dogs shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes. Berners are heavy shedders due to their dense double coat. They shed throughout the year and
                  typically “blow coat” heavily once or twice annually, especially in spring and fall. Regular brushing
                  (several times per week, and more frequently during shedding seasons) helps manage loose hair and
                  prevent mats. Prospective owners should be comfortable with daily sweeping or vacuuming and finding
                  dog hair on clothes and furniture.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Bernese Mountain Dogs aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred, well-socialized Bernese Mountain Dogs are not inherently aggressive. The breed standard
                  calls for a dog that is good-natured, self-assured, and gentle. Berners may be reserved with strangers
                  and can be protective of their family, but overt aggression is not typical. Poor socialization, pain,
                  fear, or harsh handling can contribute to behavior problems in any dog, so early positive training,
                  careful socialization, and appropriate management are essential.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Bernese Mountain Dogs live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living is possible for some Bernese Mountain Dogs, but it requires a dedicated owner and a
                  realistic understanding of the breed’s needs. Berners are large, heavy dogs that require daily walks,
                  mental stimulation, and enough space to move comfortably. Stairs can be tough on their joints, and
                  they are sensitive to heat, so climate and building layout matter. Multiple daily outings, structured
                  exercise, and enrichment activities are essential if a Berner lives in an apartment or smaller home.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between European and American lines in Bernese Mountain Dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Both European and American lines of Bernese Mountain Dogs share the same essential breed standard, but
                  individual breeders may emphasize slightly different traits. Some European lines focus strongly on
                  traditional working ability and substance, while certain American lines may place more emphasis on
                  show-ring style and coat. Regardless of origin, responsible breeders prioritize health, temperament,
                  and sound structure. Prospective owners should focus less on labels and more on the individual
                  breeder’s ethics, health testing, and how well a particular puppy’s temperament and energy level match
                  their lifestyle.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Bernese Mountain Dog Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bernese Mountain Dogs are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Families or individuals who appreciate large, gentle, people-oriented dogs</li>
                  <li>
                    Owners who can provide at least 1–1.5 hours of moderate physical activity and mental enrichment most
                    days
                  </li>
                  <li>
                    People who enjoy cooler-weather outdoor activities such as hiking, walking, and camping, and who can
                    avoid strenuous exercise during heat and humidity
                  </li>
                  <li>
                    Those willing to manage heavy shedding and regular grooming, including brushing and coat
                    maintenance, throughout the year
                  </li>
                  <li>
                    Homes with enough space—ideally with a securely fenced yard or safe off-leash exercise areas—for a
                    large dog to move comfortably
                  </li>
                  <li>
                    Owners committed to responsible veterinary care, including proactive screening and preparedness for
                    potential health issues common in the breed
                  </li>
                  <li>
                    People who understand the emotional and financial responsibilities of sharing life with a large
                    breed that may have a shorter average lifespan
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bernese Mountain Dogs may not be ideal for those seeking a low-maintenance or very long-lived dog,
                  people who dislike heavy shedding, or families who are away from home most of the day and unable to
                  provide companionship and exercise. When their physical, emotional, and health needs are met, Berners
                  reward their people with deep devotion, gentle affection, and a rich, if sometimes all-too-brief,
                  partnership.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Bernese Mountain Dog Breed Standard.&quot; akc.org</li>
                    <li>
                      2. Bernese Mountain Dog Club of America (BMDCA). &quot;Health &amp; Genetics and Breed
                      Information.&quot;
                    </li>
                    <li>
                      3. Berner-Garde Foundation. &quot;Bernese Mountain Dog Health, Pedigree, and Longevity
                      Information.&quot;
                    </li>
                    <li>4. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Bernese Mountain Dogs.&quot;</li>
                    <li>
                      5. AKC Canine Health Foundation. &quot;Cancer and Genetic Disease in Large and Giant Dog
                      Breeds.&quot;
                    </li>
                    <li>
                      6. BMDCA and Berner-Garde. &quot;Health Surveys and Recommendations for Bernese Mountain Dog
                      Owners and Breeders.&quot;
                    </li>
                    <li>
                      7. BMDCA. &quot;Guidelines for Responsible Breeding of Bernese Mountain Dogs.&quot;
                    </li>
                    <li>
                      8. Various veterinary nutrition resources on feeding and managing large and giant working breeds,
                      with emphasis on joint support and bloat prevention.
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/bernese-mountain-dog" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
