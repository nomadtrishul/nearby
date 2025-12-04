import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Siberian Husky',
  slug: 'siberian-husky',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764582512/pexels-albina-chamonixdeus-2170708-3812207_ldo6k5.jpg',
  description: 'Energetic • Friendly • Pack-oriented • Vocal • Endurance sled dog',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Siberian Husky Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Siberian Husky dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Siberian Husky',
    'Siberian Husky breed',
    'Siberian Husky care',
    'Siberian Husky temperament',
    'Siberian Husky training',
    'Siberian Husky health',
    'Husky care guide',
    'AKC Siberian Husky',
  ],
  pathname: '/pet-breeds/dogs/siberian-husky',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Siberian Husky Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Siberian Husky"
        description="Siberian Huskies are friendly, energetic, and famously independent sled dogs originally bred by the Chukchi people of northeastern Siberia. Designed for endurance in harsh Arctic conditions, they pull light loads over long distances with remarkable efficiency. In modern homes, Huskies thrive with active families who can meet their exercise needs and appreciate their playful, vocal, and sometimes mischievous personalities."
        emoji="🐺"
        slug="siberian-husky"
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
                    The Siberian Husky is a medium-sized working breed known for its striking appearance, endurance, and
                    outgoing nature. Developed by the Chukchi people of northeastern Asia as a sled dog, the Husky was
                    bred to haul light loads over vast snowy distances while conserving energy. Their thick double coat,
                    efficient gait, and strong pack instincts made them invaluable companions in extreme Arctic
                    conditions.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Siberian Huskies are one of the most recognizable and
                    popular working breeds. Their wolf-like looks, blue or bi-colored eyes, and friendly demeanor appeal
                    to many dog lovers. However, their high energy, independent thinking, and escape-artist tendencies
                    mean they are best suited to committed, active owners. With proper exercise, training, and
                    management, Huskies can be affectionate family companions and outstanding partners in dog-powered
                    sports such as sledding, skijoring, and canicross.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Siberian Husky traces its origins to the Chukchi people of Siberia, who developed the breed
                  centuries ago as a resilient sled dog capable of traveling long distances in subzero temperatures.
                  These dogs lived closely with families, often sleeping inside shelters for warmth and companionship,
                  which contributed to their friendly, social nature.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In the early 1900s, Siberian Huskies were imported to Alaska for sled races such as the All-Alaska
                  Sweepstakes, where they quickly earned a reputation for speed and endurance. The breed became even
                  more famous after the 1925 serum run to Nome, when teams of sled dogs, including Siberian Huskies,
                  helped deliver life-saving diphtheria antitoxin. The AKC formally recognized the Siberian Husky in
                  1930, and the Siberian Husky Club of America (SHCA) serves as the parent club. Today, Huskies are
                  popular both as companions and as participants in sled dog sports and other endurance activities.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies are medium-sized, well-balanced dogs built for endurance rather than sheer strength.
                  According to the AKC breed standard, they should appear moderately compact, with a light, graceful,
                  and effortless gait that reflects their purpose as sled dogs. Their fox-like expression, erect ears,
                  and often piercing eye color give them a keen, alert appearance.
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
                          21–23.5 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–22 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–60 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          35–50 pounds
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
                          12–14 years
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
                          Medium-length, dense, weather-resistant double coat; straight outer coat with soft undercoat
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
                          Black, gray, red, sable, agouti, and white in various patterns; all with white markings
                          common
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Siberian Huskies have a clean-cut head with a slightly rounded
                  skull and a moderate stop. Their eyes are almond-shaped and may be brown, blue, or a combination
                  (including parti-colored eyes). Ears are medium-sized, triangular, and set high, standing erect. The
                  tail is well-furred and typically carried in a sickle curve over the back when alert. Their smooth,
                  seemingly effortless, ground-covering gait allows them to travel long distances at a moderate speed
                  without fatigue.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies are generally friendly, outgoing, and good-natured. They were bred to live and work
                  closely with people and other dogs, which contributes to their social, pack-oriented personality.
                  Huskies are often affectionate with family and typically greet strangers with enthusiasm rather than
                  suspicion, making them poor guard dogs despite their wolf-like looks.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Huskies are intelligent but also famously independent and sometimes stubborn. They enjoy testing
                  boundaries and can be escape artists, so consistent training and secure management are essential. Many
                  are vocal, expressing themselves through howling, “talking,” and other unique sounds rather than
                  constant barking.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  A strong prey drive is common in the breed, which means Huskies may chase cats, wildlife, and smaller
                  animals. Early socialization, reliable management, and training are important to help them coexist
                  safely with other pets. They thrive when they can be part of daily family life, participate in
                  activities, and spend time with both people and canine companions.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As an endurance working breed, Siberian Huskies require substantial daily exercise and mental
                  engagement. Without enough activity, they can quickly develop nuisance behaviors such as digging,
                  chewing, howling, and attempts to escape. Exercise needs vary by age and individual energy level, but
                  most Huskies are significantly more active than the average companion dog.
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
                          Short walks, gentle play, basic obedience, socialization, safe exploration on soft surfaces
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1.5–2 hours minimum
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Running, hiking, sledding, canicross, skijoring, bikejoring, structured off-leash play in
                          secure areas, scent games
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
                          Gentle walks, swimming, light play, low-impact games, nosework and puzzle toys
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Huskies benefit from mental work just as much as physical activity.
                  Include puzzle feeders, trick training, nosework, interactive toys, and dog-powered sports in their
                  routine. Many Siberian Huskies enjoy sledding, canicross, skijoring, and other pulling sports that
                  allow them to use their natural instincts in a safe, structured way.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies have a thick, weather-resistant double coat designed to protect them from extreme
                  cold. The outer coat is straight and somewhat smooth, while the dense undercoat provides insulation.
                  They shed moderately throughout the year and “blow” their undercoat once or twice a year, during which
                  shedding is extremely heavy. Regular grooming helps keep the coat and skin healthy and reduces loose
                  hair in the home.
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
                          Slicker brush and undercoat rake; focus on areas behind ears, thighs, and tail
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
                          Dog-specific shampoo; avoid over-bathing to prevent drying the coat and skin; never shave the
                          double coat
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
                          Trim or grind; nails should not click loudly on hard floors
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
                          Veterinary ear cleaner, cotton balls; watch for redness, odor, or excess debris
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
                          Dog toothbrush and toothpaste; dental chews or rinses as recommended by your veterinarian
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
                  Proper nutrition is critical to support the Siberian Husky&apos;s active lifestyle, lean body, and
                  overall health. As medium-sized working dogs, Huskies often have efficient metabolisms and may eat a
                  bit less than other breeds of similar size, especially when not in heavy work. High-quality diets that
                  emphasize animal-based protein and appropriate fat levels help fuel their energy needs without
                  unnecessary weight gain.
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
                          Varies by age/weight; follow vet and food label guidance
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
                          ~2–3 cups (split into meals), adjusted for weight, climate, and activity level
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
                          ~3–4 cups or more in intense work, tailored to workload and body condition
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
                          1.5–2.5 cups, adjusted for activity, joint health, and metabolism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look for formulas that list high-quality animal
                  proteins (such as chicken, turkey, fish, or lamb) as the first ingredient. Omega-3 and Omega-6 fatty
                  acids support skin, coat, and joint health—important for active Huskies and dogs living in dry or
                  harsh climates. Some individuals may benefit from joint supplements or skin-supportive nutrients. Work
                  with your veterinarian if you suspect food sensitivities or digestive issues, and adjust portions to
                  keep your Husky lean and athletic.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> While Siberian Huskies are not as strongly associated with gastric
                  dilatation-volvulus (GDV or bloat) as some large, deep-chested breeds, any dog can be affected. To
                  help reduce risk, divide daily food into two or more meals, avoid rapid gulping of food (slow-feeder
                  bowls can help), and limit vigorous exercise for about an hour before and after meals. Seek emergency
                  veterinary care immediately if you ever suspect bloat.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies are generally healthy, robust dogs, but like all purebred breeds, they are
                  predisposed to certain inherited conditions. Responsible breeders use health testing and careful
                  selection to reduce the risk of these diseases. Prospective owners should be familiar with common
                  health concerns and request documentation of health clearances when purchasing a puppy.
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
                          Low to moderate breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal hip joint development that can lead to arthritis, pain, and reduced mobility
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes juvenile cataracts, Progressive Retinal Atrophy (PRA), and corneal dystrophy, which
                          can affect vision over time
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hypothyroidism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Underactive thyroid gland leading to lethargy, weight gain, and coat or skin changes; often
                          managed with medication
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Epilepsy
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seizure disorder that may have a hereditary component in some lines; managed with veterinary
                          care
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Zinc-Responsive Dermatosis
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Breed-associated condition
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Skin disorder related to abnormal zinc metabolism, causing crusting and hair loss around the
                          face, ears, and body folds
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Autoimmune / Immune-Mediated Disorders
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Occasional concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Some Huskies may be predisposed to immune-mediated skin or systemic diseases; close monitoring
                          and veterinary care are important
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Siberian Husky Club of America (SHCA) recommend health testing for breeding dogs. Always
                  request copies of official health clearances when purchasing a puppy from a breeder:
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
                          Screen for hip dysplasia and assess joint quality
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
                          Screen for hereditary eye diseases such as cataracts, PRA, and corneal dystrophy
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
                          Screen for autoimmune thyroiditis and hypothyroidism
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          DNA Panel for Hereditary Conditions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify genetic mutations associated with PRA, juvenile cataracts, and other breed-relevant
                          conditions
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
                  Siberian Huskies are intelligent and quick learners, but they are also independent and easily bored.
                  Unlike some breeds that live to obey, Huskies often ask “why?” before complying. This means training
                  must be consistent, engaging, and rewarding. They respond best to positive reinforcement and clear,
                  fair boundaries rather than harsh corrections.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Expose your Husky puppy to a wide variety of people, dogs, environments, surfaces, and
                  sounds in a controlled, positive way. This helps prevent fearfulness and supports the development of a
                  confident, adaptable adult dog that can handle busy households, travel, and public spaces with ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use food rewards, toys, play, and praise to reinforce desired
                  behaviors. Keep training sessions short and fun, mixing obedience, tricks, and games. Because Huskies
                  have strong prey drive and love to run, recall (coming when called) can be especially challenging and
                  may never be fully reliable off-leash in unfenced areas. Many owners rely on long lines, fenced yards,
                  or dog parks for safe off-leash exercise.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy, Canine Good Citizen
                  (CGC), and Community Canine (CGCA) for foundations in manners and reliability. Huskies also enjoy
                  outlets such as recreational sledding, skijoring, canicross, bikejoring, agility, and nosework. These
                  activities provide both mental and physical stimulation and help channel their desire to run and work.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies were bred first and foremost as sled dogs, and many still excel in traditional and
                  modern dog-powered sports. Their endurance, efficient movement, and pack-oriented nature make them
                  ideal for pulling light loads over long distances in cold climates. In addition to sledding, Huskies
                  can be successful in various other roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Sledding & Dog-Powered Sports:</strong> Huskies are the classic choice for recreational and
                    competitive sledding, skijoring, canicross, and bikejoring, where their desire to run and pull is an
                    asset.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Many Huskies participate in agility, obedience, rally, and other sports
                    when training is tailored to their independent temperament and need for variety.
                  </li>
                  <li>
                    <strong>Search & Rescue / Detection:</strong> Some Siberian Huskies work in search and rescue or
                    tracking roles, leveraging their endurance and keen sense of smell, though their independent streak
                    means they are less common than some other breeds in these fields.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> Friendly, social Huskies can make excellent therapy
                    dogs when they have the right temperament and solid training for calm behavior in busy environments.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For many owners, a Husky&apos;s primary job is being a
                    beloved family member who joins in on hikes, runs, camping trips, and everyday adventures.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Siberian Huskies good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Siberian Huskies can be excellent family dogs for active households. They are generally friendly,
                  playful, and affectionate with people, including children. However, their high energy, tendency to
                  jump or mouth when excited, and strong prey drive mean supervision and training are important,
                  especially around young children and smaller pets. Families prepared for daily exercise and consistent
                  boundaries usually enjoy Huskies immensely.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Siberian Husky puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing and raise puppies in a high-quality environment, Siberian Husky puppies often range from about
                  $800–$2,000 or more. Puppies from proven sledding, performance, or show lines may be higher. Be
                  cautious of unusually low prices, which can be a red flag for poor breeding practices or lack of
                  health testing and proper socialization.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Siberian Huskies shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Siberian Huskies are heavy seasonal shedders. While they may shed moderately most of the year,
                  they typically “blow” their undercoat once or twice annually, during which time large amounts of hair
                  come out in clumps. Regular brushing—several times a week, and daily during shedding seasons—helps
                  manage loose hair and keep the coat healthy. Prospective owners should be comfortable with a
                  significant amount of dog hair in the home.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Siberian Huskies aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies are not typically aggressive. The breed standard calls for a friendly, gentle, and
                  outgoing temperament. They may be exuberant and mischievous, but true aggression toward people is not
                  common in well-bred, well-socialized Huskies. As with any breed, inadequate socialization, harsh
                  handling, or underlying pain can contribute to behavior problems, so proactive training and veterinary
                  care are important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Siberian Huskies live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living is possible for Siberian Huskies, but it requires a very dedicated owner. Huskies
                  need significant daily exercise and mental stimulation, as well as management for their vocal nature
                  and tendency to chew or dig when bored. Multiple brisk walks, runs, and structured play sessions are
                  necessary every day. Access to secure off-leash areas or dog sports is helpful. Lifestyle and time
                  commitment matter far more than square footage alone.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between working and show lines in Siberian Huskies?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Working-line Siberian Huskies are bred primarily for sledding performance, endurance, and functional
                  structure. They often have extremely high drive to run and may have a leaner, more athletic build.
                  Show-line Huskies are bred with conformation standards in mind and may have slightly heavier bone and
                  more dramatic coat or markings, while still maintaining sound structure. Both types are energetic and
                  intelligent, but working lines often demand even more exercise and may be best suited to experienced,
                  highly active homes.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Siberian Husky Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Active individuals or families who enjoy running, hiking, or outdoor adventures</li>
                  <li>Owners who can provide at least 1.5–2 hours of physical and mental exercise most days</li>
                  <li>People interested in dog-powered sports such as sledding, skijoring, canicross, or bikejoring</li>
                  <li>
                    Those who want a social, people- and dog-oriented companion who enjoys being part of a pack and
                    daily life
                  </li>
                  <li>Homes with securely fenced yards or access to safe, enclosed off-leash exercise areas</li>
                  <li>Owners committed to consistent training, management, and escape-proof fencing</li>
                  <li>People comfortable with heavy seasonal shedding and regular grooming</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Siberian Huskies may not be ideal for first-time dog owners with very limited time, families who
                  prefer a low-energy or quiet pet, or those who are away from home most of the day. In hot climates,
                  extra care is needed to avoid overheating, and intense exercise should be scheduled during the coolest
                  parts of the day. Without sufficient attention, structure, and activity, a Husky&apos;s energy and
                  independence can quickly become challenging to manage.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Siberian Husky Breed Standard.&quot; akc.org</li>
                    <li>2. Siberian Husky Club of America (SHCA). &quot;Breed Information &amp; Health.&quot;</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Siberian Huskies.&quot;</li>
                    <li>4. AKC Canine Health Foundation. &quot;Inherited Eye Diseases in Purebred Dogs.&quot;</li>
                    <li>5. Various veterinary dermatology resources on zinc-responsive dermatosis in Northern breeds.</li>
                    <li>6. SHCA and AKC resources on responsible breeding and recommended health screening.</li>
                    <li>7. Veterinary nutrition references on feeding active working and Northern-type breeds.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/siberian-husky" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
