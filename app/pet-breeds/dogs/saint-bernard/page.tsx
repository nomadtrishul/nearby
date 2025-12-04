import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Saint Bernard',
  slug: 'saint-bernard',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764698910/pexels-printexstar-11654187_kyzi95.jpg',
  description: 'Gentle giant • Working dog • Patient • Family-friendly • Loyal guardian',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Saint Bernard Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Saint Bernard dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements for this iconic giant working breed.',
  keywords: [
    'Saint Bernard',
    'Saint Bernard breed',
    'Saint Bernard care',
    'Saint Bernard temperament',
    'Saint Bernard training',
    'Saint Bernard health',
    'giant breed care guide',
    'AKC Saint Bernard',
  ],
  pathname: '/pet-breeds/dogs/saint-bernard',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Saint Bernard Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Saint Bernard"
        description="Saint Bernards are iconic giant working dogs from the Swiss Alps, famous for their strength, gentle temperament, and life-saving history as hospice and rescue dogs. Calm, patient, and deeply affectionate with their families, they thrive in homes that can manage their size, drool, and shedding while appreciating their easygoing nature and natural protective instincts."
        emoji="🐕‍🦺"
        slug="saint-bernard"
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
                    The Saint Bernard is a powerful giant working breed known for its massive size, striking head, and
                    famously gentle, patient nature. Developed in the Swiss Alps as a hospice and rescue dog along the
                    dangerous Great St. Bernard Pass, these dogs were bred to withstand harsh mountain conditions, find
                    lost travelers, and provide companionship and protection to monks and wayfarers alike.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Saint Bernards are among the most recognizable giant
                    breeds in the world. Their popularity stems from their calm, kind disposition and strong bond with
                    their families. While they are often described as &quot;gentle giants,&quot; they are still powerful,
                    working-bred dogs who require thoughtful training, appropriate exercise, and careful management of
                    their joints, weight, and overall health.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Saint Bernard traces its roots to the Great St. Bernard Hospice, a travelers&apos; refuge founded
                  by monks in the Western Alps near the Italian–Swiss border. By the 17th century, large farm and
                  guardian dogs from the surrounding valleys were being kept at the hospice, where they were developed
                  into powerful, surefooted dogs capable of navigating deep snow, rough terrain, and treacherous
                  mountain passes. These dogs became renowned for locating lost or injured travelers and assisting the
                  monks in rescue work.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Over time, these hospice dogs were refined into what we now recognize as the Saint Bernard. Famous
                  rescue dogs like &quot;Barry&quot; reportedly saved dozens of lives and helped cement the breed&apos;s
                  legendary status. In the 19th century, crosses with other large breeds such as the Newfoundland were
                  likely introduced to improve coat type and size, particularly for the longhaired variety. The AKC
                  recognized the Saint Bernard in 1885, and today the Saint Bernard Club of America serves as the
                  parent club. Modern Saints are primarily family companions and show dogs but still retain their
                  working heritage and impressive presence.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Saint Bernards are giant, strongly built dogs with a powerful, muscular body and deep, broad chest.
                  According to the AKC breed standard, they should appear substantial and balanced rather than clumsy,
                  with a firm topline, strong bone, and overall symmetry. Their massive head, dark mask, and expressive
                  eyes give them a dignified yet kindly appearance, while their smooth, ground-covering gait reflects
                  their original purpose as mountain rescue and draft dogs.
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
                          28–30 inches (minimum 28 inches)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          26–28 inches (minimum 26 inches)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~140–180+ pounds (kept lean for health)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~120–140+ pounds (kept lean for health)
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
                          8–10 years (with good care and weight management)
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
                          Dense, weather-resistant double coat; smooth (short) or rough (long) with feathering
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
                          White with red, red-brown, or brindle patches; typically with dark facial mask and white
                          blaze, chest, feet, and tail tip
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Saint Bernards have a massive, broad head with a short muzzle,
                  well-developed stop, and a slightly furrowed forehead that contributes to their thoughtful
                  expression. Eyes are medium-sized, set moderately deep, and dark brown, often framed by a dark mask.
                  Ears are medium in size, high set, and lie close to the cheeks. The powerful neck and deep chest give
                  way to a strong, level back and muscular hindquarters. Their movement should be effortless, strong,
                  and coordinated, never clumsy or labored despite their size.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Saint Bernards are famous for their gentle, calm, and affectionate temperament. Often described as
                  patient and tolerant, they tend to form deep bonds with their families and are especially fond of
                  children when properly socialized and supervised. Despite their imposing appearance, well-bred Saints
                  are typically friendly and trustworthy, with a stable, even-tempered disposition.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Many Saint Bernards have a natural sense of responsibility and will position themselves between their
                  people and perceived threats, making them effective deterrents without needing to be overtly
                  aggressive. They may be reserved or slightly aloof with strangers but should not be fearful or
                  reactive. Early socialization helps ensure they grow into confident, well-mannered adults who can
                  handle visitors, busy environments, and travel calmly.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While they are not high-strung or hyperactive, Saints are powerful and sometimes slow to mature
                  mentally and physically. Young Saint Bernards can be clumsy &quot;big puppies&quot; who do not yet
                  realize their size, so consistent training, gentle boundaries, and supervision are essential. Owners
                  must also be comfortable with drool, shedding, and the day-to-day management that comes with living
                  with a giant dog.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a giant working breed, the Saint Bernard requires regular, moderate exercise to maintain muscle
                  tone, joint health, and mental well-being. However, their growing bones and joints are vulnerable to
                  over-exertion during puppyhood, and adults are sensitive to heat because of their size and thick
                  coats. Exercise should focus on steady, low-impact activities rather than intense running or jumping,
                  especially on hard or slippery surfaces.
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
                          Short, frequent sessions; 5 minutes per month of age, 2x daily (low impact only)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle leash walks, controlled play on soft surfaces, basic obedience, socialization; avoid
                          long runs, stairs, and jumping
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (18 months–7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–75 minutes total, split into 2–3 sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Leashed walks, easy hikes, supervised off-leash time in secure areas, light carting or draft
                          work, nosework, low-impact games
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–45 minutes of gentle activity, adjusted for mobility
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, swimming (if they enjoy it), gentle play, puzzle games, and scent-based
                          enrichment
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Saint Bernards benefit from mental enrichment just as much as
                  physical activity. They enjoy problem-solving tasks, nosework, and interactive games that allow them
                  to use their brains without excessive physical strain. Training sessions that focus on manners, basic
                  obedience, and calm cooperative care (like grooming and handling) are especially valuable for such a
                  large breed.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Saint Bernards have a dense double coat that provides insulation against cold weather and can be
                  either smooth (short-haired) or rough (long-haired). Both coat types shed heavily, particularly during
                  seasonal shedding periods. In addition to coat care, owners must be prepared to manage drool, keep the
                  face clean, and maintain the nails, ears, and teeth of this giant companion. Routine grooming helps
                  control shedding and keeps the dog comfortable and odor-free.
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
                          Slicker or pin brush, undercoat rake; focus on pants, chest, tail, and behind ears to prevent
                          mats
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
                          Undercoat rake, de-shedding tool, thorough line brushing to remove loose undercoat
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
                          Large-breed-friendly bathing setup; dog-specific shampoo and conditioner; rinse thoroughly to
                          avoid skin irritation
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
                          Heavy-duty clippers or grinder; nails should not click loudly on hard floors or alter gait
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
                          Dog toothbrush and toothpaste; consider dental chews or rinses as recommended by your vet
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Face &amp; drool cleanup
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily, often multiple times a day
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Soft cloths or towels to wipe mouth folds and drool; helps prevent irritation and odor
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
                  Proper nutrition is critical to support the Saint Bernard&apos;s rapid growth in puppyhood, large
                  frame, and joint health throughout life. As a giant breed, Saints do best on controlled-growth diets
                  formulated for large or giant-breed puppies and adults, with careful attention to calories, calcium,
                  and phosphorus levels. Maintaining a lean body condition is one of the most important things you can
                  do to help prevent orthopedic problems and extend your Saint&apos;s life expectancy.
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
                          Puppies (2–18 months, large/giant-breed formula)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–26%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          10–15%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies greatly by age and weight; follow large-breed feeding guidelines and veterinary advice
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          3 (younger pups) decreasing to 2 meals/day as they mature
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
                          Often ~4–6 cups daily (split), depending on weight, metabolism, and food calorie density
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adults (highly active/working or very cold climate)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–28%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adjust upward from baseline while monitoring body condition closely
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
                          18–22% (with adequate high-quality protein)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          8–12%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Typically 3–5 cups, tailored to mobility, weight, and underlying health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look for large- or giant-breed formulas that
                  list high-quality animal proteins (such as chicken, beef, lamb, or fish) as the first ingredient and
                  that are specifically designed for controlled growth and joint support. Omega-3 fatty acids
                  (particularly from fish oil) support joint, heart, and skin health. Many Saint Bernards benefit from
                  joint supplements containing glucosamine, chondroitin, or green-lipped mussel, especially as they age
                  or if they have orthopedic concerns. Always consult your veterinarian before adding supplements or
                  making major dietary changes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention (GDV):</strong> Saint Bernards, like many deep-chested giant breeds, are at
                  increased risk for gastric dilatation-volvulus (GDV or bloat), a life-threatening emergency where the
                  stomach fills with gas and can twist. To help reduce risk, divide daily food into two or more meals,
                  discourage rapid gulping of food (slow-feeder bowls can help), avoid heavy exercise or rough play for
                  at least an hour before and after meals, and discuss the option of a preventive gastropexy surgery
                  with your veterinarian. Seek emergency veterinary care immediately if you notice signs such as a
                  distended abdomen, unproductive retching, restlessness, or sudden collapse.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Saint Bernards are generally good-natured, hardy dogs, but like all purebred breeds—especially giant
                  ones—they are predisposed to specific health concerns. Responsible breeders use health testing,
                  careful selection, and conscientious management of growth and weight to reduce risk. Prospective
                  owners should be familiar with common health issues in the breed and always request documentation of
                  health clearances for the parents of any puppy they are considering.
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
                          Abnormal development of the hip joint that can lead to arthritis, pain, and reduced mobility;
                          managed with weight control, joint care, and sometimes surgery
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized concern in large/giant breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Developmental abnormalities in the elbow joint causing lameness, pain, and early-onset
                          arthritis
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gastric Dilatation-Volvulus (GDV/Bloat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          High-risk emergency condition in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Sudden stomach distension and possible twisting; requires immediate veterinary intervention
                          and often surgery; preventive gastropexy may be recommended
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Disease (e.g., Dilated Cardiomyopathy)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable concern in some lines
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Enlargement and weakening of the heart muscle that can lead to arrhythmias, reduced
                          stamina, and congestive heart failure
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Eye Conditions (Entropion/Ectropion, Cataracts, etc.)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal eyelid conformation or inherited eye diseases that can cause irritation, discharge,
                          or vision changes; some require surgical correction
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Osteosarcoma &amp; Other Orthopedic Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seen in large/giant breeds, including Saints
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bone cancer (osteosarcoma) and other joint-related disorders may occur; early detection and
                          weight management are important for mobility and comfort
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Saint Bernard parent club recommend specific health testing for breeding dogs. Always ask
                  breeders for official health clearances and verify them through trusted registries when possible:
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
                          Screen for hip dysplasia and assess hip joint quality prior to breeding
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
                          Screen for elbow dysplasia and developmental abnormalities
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA, board-certified veterinary cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for congenital and acquired heart disease, including dilated cardiomyopathy
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
                          Screen for hereditary eye diseases and eyelid conformational issues (entropion/ectropion)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thyroid Evaluation (when indicated)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or certified laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for autoimmune thyroid disease and hypothyroidism, which can affect coat, weight, and
                          energy levels
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
                  Saint Bernards are intelligent, eager-to-please dogs, but they can also be independent and slow to
                  mature. Their size makes early training non-negotiable—behaviors that seem cute in a 20-pound puppy
                  can be dangerous or unmanageable in a 150-pound adult. Fortunately, most Saints respond beautifully to
                  kind, consistent training that emphasizes clarity, patience, and positive reinforcement.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Safely expose your Saint Bernard puppy to a variety of people, friendly dogs, children,
                  surfaces, sounds, grooming procedures, and environments. Focus on calm, positive interactions rather
                  than overwhelming stimulation. Good socialization helps prevent fearfulness and reduces the risk that
                  a large dog will become overly suspicious or reactive as an adult.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement—using food rewards, praise, toys, and
                  affection—is the most effective and fair way to train Saint Bernards. They are sensitive to tone and
                  can shut down in response to harsh corrections or yelling. Short, engaging sessions that emphasize
                  manners (no jumping, polite greeting, loose-leash walking, &quot;leave it,&quot; and reliable recall)
                  are far more successful than long, repetitive drills. Teaching cooperative care (standing still for
                  grooming, lifting paws, opening the mouth) is especially important for veterinary and grooming visits.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Puppy kindergarten, basic obedience, and programs such
                  as AKC S.T.A.R. Puppy and Canine Good Citizen (CGC) are excellent foundations for Saint Bernards.
                  While they may not be as fast as some breeds in high-speed sports, many Saints enjoy therapy dog work,
                  nosework, drafting/carting, and other activities that match their calm, steady nature. Prioritizing
                  impulse control, reliability around children and visitors, and safe leash manners should be at the top
                  of every Saint Bernard owner&apos;s list.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Historically, Saint Bernards were alpine rescue dogs, farm guardians, and cart-pulling companions.
                  While most modern Saints live primarily as family pets, their temperament and physical traits still
                  lend themselves to a variety of meaningful roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Search &amp; Rescue (Historical Role):</strong> Saint Bernards were once famous for
                    locating lost travelers and providing warmth and companionship in harsh mountain conditions. Today,
                    some Saints still participate in search and rescue or tracking as a nod to that heritage.
                  </li>
                  <li>
                    <strong>Draft &amp; Carting Work:</strong> Their strength and steady nature make them excellent
                    candidates for draft work, pulling carts or wagons in parades, demonstrations, or recreational
                    events when properly conditioned and trained.
                  </li>
                  <li>
                    <strong>Therapy &amp; Emotional Support:</strong> Many Saint Bernards have a naturally calm,
                    patient demeanor that is well-suited to therapy dog work in hospitals, nursing homes, and schools,
                    provided they are well-socialized and reliably trained.
                  </li>
                  <li>
                    <strong>Companion &amp; Family Dog:</strong> For most owners, a Saint Bernard&apos;s primary job is
                    being a devoted household companion—joining family movie nights, relaxing at home, and providing a
                    reassuring presence during daily life.
                  </li>
                  <li>
                    <strong>Show &amp; Conformation:</strong> Some Saints participate in conformation shows, where they
                    are evaluated against the breed standard and contribute to responsible breeding programs focused on
                    health, structure, and temperament.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Saint Bernards good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Saint Bernards can make excellent family dogs in homes that understand and can manage their size,
                  drool, and grooming needs. They are typically affectionate, patient, and gentle with children when
                  properly socialized and supervised. However, because of their large size and strength, interactions
                  with small children should always be supervised, and children must be taught how to interact
                  respectfully with such a big dog.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Saint Bernard puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary widely depending on region, breeder reputation, and whether the puppy comes from show,
                  working, or companion lines. From responsible breeders who perform recommended health testing and
                  raise puppies in a high-quality environment, Saint Bernard puppies often range from around
                  $1,500–$3,000 or more. Puppies from top show or breeding lines may cost more. Be cautious of unusually
                  low prices, which can signal poor breeding practices, lack of health testing, or substandard living
                  conditions.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Saint Bernards shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes. Saint Bernards are heavy shedders, especially during seasonal coat blows when they lose large
                  amounts of undercoat. Both smooth and rough coats shed; the rough coat simply makes hair more visible.
                  Regular brushing several times a week—daily during shedding seasons—helps manage loose fur, reduce
                  mats, and keep the skin and coat healthy. Prospective owners should be comfortable with dog hair on
                  clothing, furniture, and in the home.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Saint Bernards aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred and well-socialized Saint Bernards are generally not aggressive. The breed standard calls
                  for a gentle, friendly, and calm temperament. They may act as natural deterrents simply due to their
                  size and deep bark, but overt aggression is not typical of the breed. As with any dog, inadequate
                  socialization, poor training, pain, fear, or irresponsible breeding can contribute to behavior
                  problems. Early positive training and responsible ownership are key to a stable temperament.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Saint Bernards live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living with a Saint Bernard is possible but challenging and requires a highly committed
                  owner. These dogs are large, heavy, and not well-suited to numerous stairs or cramped spaces. They
                  also need regular outdoor walks, a cool environment (especially in warm climates), and room to move
                  comfortably. An apartment-dwelling Saint Bernard must receive multiple daily walks, mental enrichment,
                  and careful management of drool and shedding. Access to elevators, nearby green spaces, and air
                  conditioning can make apartment life more realistic.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between rough and smooth coat Saint Bernards?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Both rough and smooth coats are recognized varieties of the Saint Bernard. Rough-coated Saints have
                  longer hair with feathering on the legs, tail, chest, and around the neck, giving them a more
                  &quot;fluffy&quot; appearance. Smooth-coated Saints have shorter, dense hair that lies closer to the
                  body. Both coat types shed heavily, and both require regular grooming. Coat type is largely a matter
                  of personal preference, though some owners find the smooth coat slightly easier to maintain and less
                  prone to matting.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Saint Bernard Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Saint Bernards are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Families or individuals who appreciate a calm, affectionate giant companion</li>
                  <li>
                    Owners who can manage and afford the costs associated with large-breed care (food, grooming,
                    medical, and equipment)
                  </li>
                  <li>
                    People committed to early training and socialization to ensure safe, polite behavior from a very
                    large dog
                  </li>
                  <li>
                    Homes with enough space for a giant dog to move around comfortably and rest without being underfoot
                  </li>
                  <li>
                    Owners who live in cooler climates or have access to air conditioning and can protect their dog from
                    heat
                  </li>
                  <li>People comfortable with drool, shedding, and regular grooming and cleaning routines</li>
                  <li>
                    Families who want a gentle, loyal, and steady companion more than a high-energy sporting or working
                    partner
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  A Saint Bernard may not be ideal for people who prefer a low-maintenance, low-shedding dog; those who
                  are frequently away from home and cannot provide regular companionship; or households without the
                  physical space or budget to support a giant breed. With appropriate care, training, and environment, a
                  Saint Bernard can be an incredibly loving, loyal, and comforting presence in your life.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Saint Bernard Breed Standard.&quot; akc.org</li>
                    <li>2. Saint Bernard Club of America (SBCA). &quot;Breed Information &amp; Health.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Saint Bernards.&quot;</li>
                    <li>
                      4. AKC Canine Health Foundation. &quot;Gastric Dilatation-Volvulus (Bloat) in Large &amp;
                      Giant-Breed Dogs.&quot;
                    </li>
                    <li>
                      5. Veterinary cardiology and orthopedic resources on giant-breed heart and joint health
                      management.
                    </li>
                    <li>
                      6. Veterinary nutrition resources on feeding large and giant-breed puppies and adults for joint
                      health.
                    </li>
                    <li>7. SBCA &amp; responsible breeder guidelines on health testing and breed stewardship.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/saint-bernard" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
