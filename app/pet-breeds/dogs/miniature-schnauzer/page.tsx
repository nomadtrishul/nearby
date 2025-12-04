import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Miniature Schnauzer',
  slug: 'miniature-schnauzer',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764697154/pexels-jack-granger-191857229-11966610_s3jkf8.jpg',
  description: 'Alert • Friendly • Low-shedding • Lively • Family companion',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Miniature Schnauzer Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Miniature Schnauzer dogs based on AKC standards. Learn about characteristics, temperament, grooming needs, nutrition, health screening, and training requirements for this smart, low-shedding companion.',
  keywords: [
    'Miniature Schnauzer',
    'Miniature Schnauzer breed',
    'Miniature Schnauzer care',
    'Miniature Schnauzer temperament',
    'Miniature Schnauzer training',
    'Miniature Schnauzer health',
    'Mini Schnauzer care guide',
    'AKC Miniature Schnauzer',
  ],
  pathname: '/pet-breeds/dogs/miniature-schnauzer',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Miniature Schnauzer Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Miniature Schnauzer"
        description="Miniature Schnauzers are cheerful, outgoing, and big personalities in a small, sturdy body. Originally bred in Germany as farm ratters and watchdogs, they combine terrier-like spunk with an affectionate, people-oriented nature. Their wiry, low-shedding coat, trademark beard and eyebrows, and keen intelligence make them popular companions for families, city dwellers, and active seniors alike."
        emoji="🐶"
        slug="miniature-schnauzer"
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
                    The Miniature Schnauzer is a small but sturdy companion breed known for its distinctive beard and
                    eyebrows, lively expression, and bright, outgoing personality. Though compact, they are robust
                    little dogs with a square build and a confident, self-assured way of moving. They were bred to be
                    tough enough for farm work yet small enough to work around barns and homes, and that rugged,
                    adaptable nature still shines through today.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Miniature Schnauzers consistently rank among the most
                    popular small breeds thanks to their versatility, minimal shedding, and family-friendly temperament.
                    They are intelligent, eager to please, and typically enjoy training and interactive play. With
                    reasonable daily exercise, good grooming, and plenty of companionship, Miniature Schnauzers make
                    devoted pets for a wide variety of households, from city apartments to suburban homes.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Miniature Schnauzer was developed in Germany in the late 19th century by crossing the Standard
                  Schnauzer with smaller breeds such as the Affenpinscher and possibly miniature pinschers or other toy
                  breeds. The goal was to create a smaller version of the hardy farm Schnauzer that could efficiently
                  hunt rats and other vermin around barns and stables while still serving as a vigilant watchdog and
                  family companion.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Over time, the Miniature Schnauzer developed its own distinct look and personality, separate from its
                  larger Standard and Giant Schnauzer cousins. The breed was recognized in Germany in the early 1900s
                  and was later imported to North America, where it gained popularity as a charming, low-shedding house
                  dog. The AKC officially recognized the Miniature Schnauzer in 1926. Today, the breed is cherished
                  worldwide as a spirited, affectionate companion that still retains the tenacity of its working roots.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers are small, robust dogs with a square, compact build and a distinctive
                  “furnished” head featuring a beard and eyebrows. According to the AKC breed standard, they should
                  appear sturdy rather than fragile, with straight legs, a level topline, and effortless, free-flowing
                  movement. Their keen expression, dark eyes, and well-developed whiskers give them a wise, almost
                  human-like look that many owners find irresistible.
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
                          12–14 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–14 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          11–20 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          11–20 pounds
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
                          12–15 years (often longer with good care)
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
                          Double coat with a hard, wiry outer coat and soft undercoat; traditionally hand-stripped or
                          clipped
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
                          Salt &amp; pepper, black, black and silver; some regions also recognize white
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Miniature Schnauzers have a rectangular head with a strong,
                  blunt muzzle accentuated by a full beard. Their eyes are small, dark, and deep set, giving a keen,
                  intelligent expression. Ears may be natural and V-shaped, folding close to the head, or cropped where
                  permitted by law. The tail is set high and carried erect when the dog is alert. Their characteristic
                  furnishings on the legs, chest, and face give them a stylish, “dressed” appearance that is maintained
                  through regular grooming.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers are known for being friendly, alert, and spirited without being timid or
                  aggressive. They tend to be people-focused and enjoy being part of family activities, often following
                  their owners from room to room. Intelligent and curious, they pick up quickly on routines and can
                  learn new cues with ease when training is consistent and rewarding.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As natural watchdogs, Miniature Schnauzers are typically quick to bark at unfamiliar sounds or
                  visitors, making them excellent little alarm systems. Early training can help channel this tendency so
                  they remain responsive without becoming nuisance barkers. With proper socialization, they are usually
                  friendly and polite with guests while remaining devoted to their own family.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Many Miniature Schnauzers are playful and clownish, enjoying games, puzzle toys, and interactive
                  activities with their people. They can be strong-willed at times, especially if they learn that
                  certain behaviors get them what they want. Clear boundaries, plenty of structure, and positive
                  reinforcement help them grow into charming, well-mannered companions.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Although they are small, Miniature Schnauzers are energetic and need daily activity to stay fit and
                  content. Their exercise needs are moderate compared to high-drive working breeds, but they still
                  benefit from regular walks, playtime, and mental challenges. Bored or under-exercised Schnauzers may
                  bark excessively, get into mischief, or become demanding for attention.
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
                          5 minutes per month of age, 2x daily (age-appropriate)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short, safe walks, gentle play on soft surfaces, basic obedience, socialization outings,
                          interactive toys
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–60 minutes total, split into sessions
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, play fetch, tug games, agility or rally classes, nosework, puzzle feeders, short
                          jogs appropriate for size
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
                          Leisurely walks, gentle play, low-impact games, scent games, short training sessions to keep
                          the mind active
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Miniature Schnauzers are clever problem-solvers and enjoy having
                  “jobs” to do. In addition to physical activity, provide brain work through clicker training, trick
                  training, food puzzles, nosework games, and short obedience or agility sequences. Many Minis excel in
                  dog sports, which give them a structured outlet for their energy and intelligence.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers are often described as “low-shedding” or “hypoallergenic,” but this does not mean
                  low-maintenance. Their wiry double coat requires regular brushing and periodic professional grooming
                  to prevent mats and maintain the classic Schnauzer outline. Owners can choose to maintain the coat via
                  hand-stripping (preferred for show dogs) or clipping with electric clippers for easier upkeep.
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
                          Slicker brush and metal comb; focus on furnishings (legs, beard, chest) to prevent tangles
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (high-growth periods)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every other day if coat is longer
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thorough comb-through to the skin; pay attention to armpits, behind ears, and inside thighs
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing &amp; Haircuts
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–8 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog-specific shampoo; professional grooming or home clipping/hand-stripping to maintain
                          pattern and length
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
                          Clippers or grinder; keep nails short enough that they do not tap loudly on hard floors
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear cleaning &amp; care
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weekly check, clean as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary ear cleaner, cotton pads; some dogs may need periodic hair removal from ear canals
                          per vet guidance
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
                          Dog toothpaste and brush; small breeds are prone to dental disease, so regular professional
                          cleanings may be advised
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
                  Proper nutrition supports the Miniature Schnauzer&apos;s active, alert nature and helps maintain a
                  healthy weight and skin/coat quality. As a small breed, they have relatively small stomachs and may do
                  best on energy-dense diets fed in measured portions. Some Miniature Schnauzers can be prone to
                  obesity, hyperlipidemia (high blood fat), and pancreatitis, so rich treats and table scraps should be
                  limited and any diet changes made gradually under veterinary guidance.
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
                          12–18% (small-breed puppy formulas)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by brand and weight; typically ~½–1½ cups total, divided, per vet/label guidance
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
                          10–15%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~¾–1½ cups per day (split), adjusted to maintain lean body condition
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
                          24–30%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          14–18% (as appropriate for activity and health)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          May require the higher end of 1–2 cups, guided by vet and activity level
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
                          8–12% (depending on weight and triglyceride levels)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~½–1¼ cups, adjusted for metabolism, joint health, and any medical needs
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look for foods that list high-quality animal
                  proteins (chicken, turkey, fish, lamb, or beef) as the primary ingredients, with controlled fat levels
                  appropriate to your dog&apos;s health. Omega-3 and Omega-6 fatty acids help support skin and coat
                  health, which is especially important for dogs with wiry coats and potential skin sensitivities. Because
                  Miniature Schnauzers can be prone to hyperlipidemia, pancreatitis, and urinary stones, always consult
                  your veterinarian before choosing very high-fat diets or making major dietary changes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Weight Management:</strong> It&apos;s easy for small dogs to gain weight on just a little too
                  much food or too many treats. Use measuring cups or a kitchen scale to portion meals accurately,
                  choose healthy, low-calorie treats, and incorporate training rewards into the daily calorie budget.
                  Regular body condition scoring with your vet is a helpful way to ensure your Schnauzer stays lean and
                  athletic rather than pudgy.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers are generally healthy and long-lived, but like all purebred dogs, they have some
                  predispositions to inherited conditions. Responsible breeders screen their dogs for known health
                  issues and share documentation of test results with puppy buyers. Prospective owners should understand
                  common health concerns in the breed and maintain regular veterinary care to catch problems early.
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
                          Hereditary Eye Diseases (e.g., cataracts, PRA)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes juvenile cataracts and Progressive Retinal Atrophy (PRA), which can lead to vision
                          loss or blindness over time
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hyperlipidemia &amp; Pancreatitis
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elevated blood fats and inflammation of the pancreas; can cause abdominal pain, vomiting, and
                          serious illness if untreated
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Urinary Bladder Stones
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Moderately common in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Mineral crystals can form stones, leading to urinary discomfort, blood in urine, or urinary
                          blockage in severe cases
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Myotonia Congenita
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Breed-associated genetic disorder (now testable)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Muscle relaxation disorder causing stiffness, especially after rest or excitement; DNA testing
                          helps avoid producing affected puppies
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Issues (e.g., mitral valve disease)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Occasional breed concern, more common in seniors
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Age-related heart valve changes can lead to murmurs and heart disease; routine exams and
                          monitoring are important
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dental Disease &amp; Periodontal Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Very common in small breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Tartar buildup, gum disease, and tooth loss if dental care is neglected; can impact overall
                          health
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and parent club for the breed encourage health testing for Miniature Schnauzer breeding dogs.
                  When purchasing a puppy, ask to see copies of official health certifications for both parents:
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
                          Screen for hip dysplasia, even though the breed is small and lower risk than large breeds
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
                          Screen for hereditary eye diseases such as cataracts and Progressive Retinal Atrophy (PRA)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Board-certified cardiologist / OFA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Assess heart health and screen for congenital or early-onset cardiac disease
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Myotonia Congenita DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify carriers and affected dogs to avoid producing puppies with this muscle disorder
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          PRA / Hereditary Cataract DNA Tests
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect genetic mutations associated with inherited retinal and lens diseases
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Routine Blood &amp; Urinalysis (adults/seniors)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Monitor for hyperlipidemia, pancreatitis risk, and urinary issues including stone formation
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
                  Miniature Schnauzers are smart, observant, and usually very willing to train—especially when rewards
                  and fun are involved. Their terrier-like streak can make them a bit independent or opinionated, but
                  with consistent, positive training they quickly learn household manners and enjoy having clear
                  expectations. They respond best to calm, upbeat handlers who make training feel like a game rather
                  than a chore.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Start socialization early, ideally between 3–14 weeks of age.
                  Introduce your Miniature Schnauzer puppy to different people, friendly dogs, sounds, and environments
                  in a controlled, positive way. This helps prevent excessive shyness or suspicion and lays the
                  foundation for a confident adult who can adapt to apartments, busy urban streets, or active family
                  homes without stress.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use positive reinforcement techniques such as food rewards, toys,
                  praise, and interactive play. Avoid harsh corrections, which can damage trust and may increase
                  anxiety, barking, or stubbornness. Short, varied training sessions (5–10 minutes) spaced throughout
                  the day work well for keeping Mini Schnauzers engaged and enthusiastic about learning new skills and
                  tricks.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> AKC S.T.A.R. Puppy, Canine Good Citizen (CGC), and
                  Community Canine (CGCA) provide excellent frameworks for teaching manners and impulse control. Many
                  Miniature Schnauzers enjoy agility, rally, barn hunt, nosework, and trick titles, which channel their
                  energy and curiosity into constructive outlets and deepen the bond between dog and owner.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While Miniature Schnauzers were originally developed as small farm dogs and ratters, today they are
                  primarily companions. Nonetheless, their intelligence, drive, and alert nature make them surprisingly
                  versatile in a variety of modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Vermin Control &amp; Barn Work:</strong> Many Mini Schnauzers retain strong prey drive and
                    enjoy barn hunt or other sports that mimic their historic role as ratters.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Quick, agile, and enthusiastic, they can excel in agility, rally,
                    obedience, barn hunt, nosework, and trick dog competitions.
                  </li>
                  <li>
                    <strong>Therapy &amp; Emotional Support:</strong> With stable temperaments and good socialization,
                    Miniature Schnauzers can be affectionate therapy dogs visiting hospitals, schools, or care homes.
                  </li>
                  <li>
                    <strong>Alert &amp; Watchdogs:</strong> Their keen senses and tendency to bark at new stimuli make
                    them effective small watchdogs, though training is needed to prevent excessive noise.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> Most Mini Schnauzers are happiest as beloved family
                    members who join their people on walks, trips, and everyday adventures, then cuddle on the couch at
                    day&apos;s end.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Miniature Schnauzers good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Miniature Schnauzers are generally excellent family dogs when well-bred and properly socialized.
                  They tend to be affectionate, playful, and loyal with their families, and many enjoy engaging with
                  children who treat them kindly and respectfully. As with any breed, interactions with younger children
                  should be supervised, and both kids and dogs should be taught how to behave politely around one
                  another.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Miniature Schnauzer puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices depend on region, breeder reputation, pedigree, and whether parents have show or performance
                  titles. From responsible breeders who health test their dogs and raise puppies in a stimulating home
                  environment, Miniature Schnauzer puppies often range from around $1,200–$3,000 or more. Puppies from
                  top show or performance lines may cost more. Be cautious of unusually low prices, online classifieds,
                  or breeders who cannot provide health clearances for the parents.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Miniature Schnauzers shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers are considered low-shedding compared to many other breeds, especially when their
                  wiry coat is kept properly groomed. However, the trade-off for less shedding is more grooming: regular
                  brushing and periodic clipping or hand-stripping are needed to keep the coat healthy and tidy.
                  Prospective owners who are sensitive to dog hair may appreciate the lower shedding, but should still
                  plan for ongoing grooming commitments and associated costs if using a professional groomer.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Miniature Schnauzers yappy or aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers are typically not aggressive, but they are naturally alert and vocal. Many will
                  bark to announce visitors or unusual sounds, which can be helpful but may become excessive without
                  training. Early socialization, teaching a reliable “quiet” cue, and ensuring they receive sufficient
                  mental and physical exercise all help prevent nuisance barking. Well-bred Minis should be confident,
                  friendly, and outgoing rather than fearful or reactive.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Miniature Schnauzers live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes. Miniature Schnauzers adapt very well to apartment or city living as long as their exercise and
                  social needs are consistently met. Daily walks, play sessions, training, and mental enrichment are
                  essential. Because they can be vocal, it&apos;s especially important in shared buildings to work on
                  polite barking habits and provide enough stimulation so they don&apos;t bark out of boredom or
                  frustration.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between Miniature, Standard, and Giant Schnauzers?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  All three Schnauzer varieties share a common heritage and certain physical traits, such as their
                  bearded faces and wiry coats, but they differ in size and typical roles. Miniature Schnauzers are the
                  smallest and most commonly kept purely as companions, though they still enjoy sports and activities.
                  Standard Schnauzers are medium-sized working dogs historically used as farm guardians and ratters.
                  Giant Schnauzers are large, powerful working dogs developed for droving cattle and guarding and often
                  require more space, training, and experienced handling than their smaller relatives.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Miniature Schnauzer Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Families, singles, or seniors looking for an affectionate, people-oriented companion</li>
                  <li>Owners who can provide daily walks, play, and mental enrichment (not just a quick potty break)</li>
                  <li>
                    People who appreciate a low-shedding coat and are willing to invest time or money into regular
                    grooming
                  </li>
                  <li>
                    Households that don&apos;t mind a dog who may bark to announce visitors, and who are willing to
                    train polite barking habits
                  </li>
                  <li>City dwellers or apartment residents able to commit to daily exercise and training</li>
                  <li>Owners interested in fun activities like agility, rally, barn hunt, or nosework</li>
                  <li>
                    People who enjoy interacting, training, and spending quality time with their dog rather than having
                    a very independent pet
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Miniature Schnauzers may not be the best match for those who want a very quiet or aloof dog, dislike
                  grooming responsibilities, or are away from home for long hours most days. With their big
                  personalities, love of company, and need for engagement, they thrive in homes where they can be active
                  partners in everyday life.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Miniature Schnauzer Breed Standard.&quot; akc.org</li>
                    <li>
                      2. American Miniature Schnauzer Club (AMSC). &quot;Breed Information, Health, and Breeder
                      Guidelines.&quot;
                    </li>
                    <li>
                      3. Orthopedic Foundation for Animals (OFA). &quot;Breed Health Statistics for Miniature
                      Schnauzers.&quot;
                    </li>
                    <li>
                      4. Various veterinary internal medicine and nutrition resources on small-breed dogs, hyperlipidemia,
                      and pancreatitis management.
                    </li>
                    <li>
                      5. ACVO and veterinary ophthalmology resources on inherited eye diseases including PRA and cataracts
                      in small breeds.
                    </li>
                    <li>
                      6. Genetic testing laboratories and breed-club recommendations for Myotonia Congenita and PRA in
                      Miniature Schnauzers.
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/miniature-schnauzer" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
