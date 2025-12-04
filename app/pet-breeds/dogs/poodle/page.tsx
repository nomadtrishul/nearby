import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Poodle',
  slug: 'poodle',
  imageUrl: 'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764577182/pexels-berend-951324_zecyxy.jpg',
  description: 'Elegant • Intelligent • Hypoallergenic • Versatile • People-oriented',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Poodle Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Poodles based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Poodle',
    'Standard Poodle',
    'Miniature Poodle',
    'Toy Poodle',
    'Poodle breed',
    'Poodle care',
    'Poodle temperament',
    'Poodle training',
    'Poodle health',
    'AKC Poodle',
  ],
  pathname: '/pet-breeds/dogs/poodle',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Poodle Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Poodle"
        description="Poodles are highly intelligent, athletic, and people-focused dogs originally developed as water retrievers. Known for their curly, low-shedding coats and elegant appearance, they come in three AKC-recognized sizes—Standard, Miniature, and Toy. With proper grooming, training, and mental stimulation, Poodles excel as family companions, performance dogs, and versatile working partners."
        emoji="🐩"
        slug="poodle"
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
                    The Poodle is a highly versatile breed known for its exceptional intelligence, trainability, and
                    distinctive curly coat. Despite their reputation as glamorous show dogs, Poodles were originally
                    developed in Europe as skilled water retrievers, capable of working in cold water for long periods.
                    Today, they are cherished as companions, performance dogs, and versatile working partners across
                    the globe.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Poodles consistently rank among the most popular dog
                    breeds. Their popularity stems from their hypoallergenic, low-shedding coat, keen intelligence, and
                    adaptability to a wide range of lifestyles. When given enough exercise, mental stimulation, and
                    grooming care, Poodles make affectionate, loyal family companions and outstanding competitors in
                    obedience, agility, and other dog sports.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Poodle’s exact origins are debated, but most historians agree that the breed was developed in
                  Germany or France as a water retriever. The name “Poodle” likely comes from the German word
                  &quot;Pudel&quot; or &quot;Pudelin,&quot; meaning &quot;to splash in water.&quot; Their dense,
                  curly coat and strong swimming ability made them ideal for retrieving waterfowl. Over time, their
                  intelligence, flashy movement, and distinctive appearance led to their popularity among European
                  nobility.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The breed eventually developed into three size varieties—Standard, Miniature, and Toy—each bred to the
                  same standard but differing in height. Standards were used primarily for hunting and retrieving,
                  Miniatures for truffle hunting and circuses, and Toys as companions in city settings. The AKC
                  recognizes all three varieties within a single Poodle breed. Modern Poodles remain highly versatile,
                  excelling in conformation, performance sports, therapy work, and as beloved family dogs.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles are elegant, well-proportioned dogs with a square outline, proud carriage, and effortless,
                  springy gait. According to the AKC breed standard, they should be built for athleticism and stamina,
                  with a level topline, deep chest, and strong hindquarters. Their most distinctive feature is their
                  dense, curly coat, which is low-shedding and considered more suitable for many people with allergies.
                  The table below focuses on the Standard Poodle, the largest of the three varieties.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Characteristic
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Male (Standard)
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                          Female (Standard)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Height
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–27 inches (AKC minimum 15&quot;)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          22–25 inches (AKC minimum 15&quot;)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          60–70 pounds (approximate range)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          40–60 pounds (approximate range)
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
                          12–15 years (Miniature and Toy Poodles may live even longer)
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
                          Dense, curly, low-shedding single coat; can be clipped in various trims
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
                          Solid colors including white, black, brown, blue, gray, silver, apricot, cream, red; parti-color accepted by many clubs (though not all conformation rings)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Poodles have a moderately rounded skull, a long, straight
                  muzzle, and dark, oval eyes that convey alertness and intelligence. Their ears are long, hanging
                  close to the head with plenty of feathering. The tail is set high and carried up, often docked in
                  countries where this is still permitted. Their curly coat may be styled in practical &quot;sport
                  clips&quot; or more elaborate show trims, but regardless of style, regular grooming is essential.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles are exceptionally intelligent, eager-to-please, and people-oriented. They are often ranked
                  among the most intelligent dog breeds and are quick learners who excel at problem-solving and complex
                  tasks. This intelligence, paired with their sensitivity, makes them highly responsive to training but
                  also means they can develop unwanted habits quickly if not guided appropriately.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-socialized Poodles are affectionate with their families and generally good with children. They
                  may be reserved or cautious around strangers at first but typically warm up with proper introductions.
                  Many Poodles are naturally alert and will bark to signal visitors or unusual sounds, making them good
                  watchdogs without being inherently aggressive when properly trained and socialized.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles thrive on attention and mental engagement. They enjoy learning tricks, playing interactive
                  games, and participating in family activities. Left alone for long periods without stimulation, they
                  may become bored and develop nuisance behaviors such as barking, chewing, or pacing. They do best in
                  homes where they can be active members of daily life.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles are athletic dogs with moderate to high energy levels, particularly in the Standard and
                  Miniature varieties. They require regular physical exercise and mental enrichment to stay healthy and
                  well-behaved. Toy Poodles generally need less intense physical activity but still crave training and
                  interaction.
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
                          Short walks, gentle play, basic obedience, socialization, safe exploration, foundation for grooming handling
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          1–2 hours total (split into multiple sessions)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, swimming, fetch, agility, obedience, rally, nosework, interactive games, off-leash play in secure areas
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–60 minutes, adjusted for health
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, swimming, light fetch, low-impact games, food puzzles, training refreshers
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Poodles need substantial mental stimulation. Incorporate puzzle
                  feeders, trick training, nosework, interactive toys, and structured training into their routine. Many
                  Poodles excel in agility, rally, competitive obedience, dock diving, and other sports that combine
                  physical and mental challenges, helping to channel their energy and intelligence in positive ways.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles have a curly, continuously growing coat that sheds minimally but requires significant grooming.
                  Without regular brushing and trimming, their coat will mat and become uncomfortable, potentially
                  leading to skin issues. Many owners choose practical, shorter clips for ease of maintenance, while
                  show Poodles are kept in more elaborate trims.
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
                          Brushing (short pet clip)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2–3 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Slicker brush, metal comb; focus on ears, armpits, tail base, and behind ears to prevent mats
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (longer/show coat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily or every other day
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thorough line brushing with slicker and comb; professional grooming guidance recommended
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Professional grooming/clip
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–8 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Full bath, blow-dry, trim or clip; maintain chosen style (puppy clip, sporting clip, etc.)
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
                          Trim or grind; keep nails short to protect joints and feet
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
                          Veterinary ear cleaner, cotton balls; Poodles are prone to ear issues due to hair and moisture
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
                          Dog toothbrush and toothpaste; Toy and Miniature Poodles especially benefit from diligent dental care
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
                  Proper nutrition is critical to support the Poodle&apos;s energetic, intelligent nature and long-term
                  health. Because Poodles come in three size varieties, feeding amounts and formulations should be
                  tailored to size and activity level. Standard Poodles generally require more calories and joint
                  support, while Miniature and Toy Poodles need careful portion control to avoid obesity.
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
                          Varies by size and weight; follow veterinarian and food label guidance
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
                          Standard Poodles: ~2–3 cups; Miniature and Toy Poodles: significantly less, measured carefully
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
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Adjust upward for performance or working Standards; monitor body condition closely
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
                          1.5–2.5 cups for Standards; smaller portions for Miniature and Toy Poodles, adjusted for mobility and metabolism
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> Look for high-quality animal proteins (such as
                  chicken, turkey, fish, or lamb) listed as main ingredients. Omega-3 and Omega-6 fatty acids support
                  skin and coat health, which is important for Poodles&apos; dense, curly coats. Joint-support
                  supplements can benefit Standard Poodles, while calorie control and dental-friendly kibble size can be
                  especially important for Toy and Miniature Poodles. Always consult your veterinarian before making
                  major diet changes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> Standard Poodles are considered at elevated risk for gastric
                  dilatation-volvulus (GDV or bloat), a life-threatening emergency in deep-chested breeds. To reduce
                  risk, divide daily food into two or more meals, avoid vigorous exercise for about an hour before and
                  after eating, discourage rapid gulping of food (use slow-feeder bowls if needed), and learn the early
                  signs of bloat. Seek emergency veterinary care immediately if GDV is suspected.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles are generally healthy dogs, but like all purebred breeds, they are predisposed to certain
                  inherited conditions. Responsible breeders follow health-testing guidelines from the Poodle Club of
                  America (PCA) and use screening tools to reduce the risk of passing on genetic diseases. Prospective
                  owners should be familiar with common health concerns in the breed and request documentation of health
                  clearances when acquiring a puppy.
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
                          Moderate breed risk (especially in Standards)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal hip joint development that can lead to pain, lameness, and arthritis over time
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable concern across varieties
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes cataracts, Progressive Retinal Atrophy (PRA), and other inherited conditions that can cause vision loss
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Addison&apos;s Disease (Hypoadrenocorticism)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized breed predisposition (especially Standard Poodles)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Endocrine disorder where adrenal glands produce insufficient hormones; can be life-threatening if untreated
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gastric Dilatation-Volvulus (Bloat)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elevated risk in Standard Poodles
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Stomach fills with gas and may twist, requiring immediate emergency surgery
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Epilepsy
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Documented in the breed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Seizure disorder which may have a hereditary component; management typically involves medication
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Sebaceous Adenitis &amp; Skin Issues
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized in Standard Poodles
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Inflammatory skin disease affecting oil glands, leading to scaling, hair loss, and coat changes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Poodle Club of America (PCA) recommend health testing for Poodles used in breeding
                  programs. When selecting a puppy, ask the breeder for copies of official health clearances for both
                  parents:
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
                          Screen for hip dysplasia and assess joint health, especially in Standard Poodles
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Evaluation (Standards)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or board-certified cardiologist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for hereditary heart conditions
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
                          PRA &amp; Other DNA Tests
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved genetic laboratories
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect carriers or affected dogs for PRA and other breed-relevant inherited diseases
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
                          Additional Testing as Recommended by PCA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          PCA/OFA guidelines
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          May include screening for sebaceous adenitis, von Willebrand&apos;s disease, and other conditions depending on variety and lines
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
                  Poodles are among the most trainable of all dog breeds. Their intelligence, eagerness to please, and
                  strong bond with their families make them especially responsive to training. They excel at obedience,
                  tricks, and complex behaviors, which is why they are frequently seen at the top of obedience and
                  agility competitions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Introduce your Poodle puppy to a variety of people, friendly dogs, places, noises, and
                  grooming experiences (such as brushing, nail trims, and ear checks). Positive early experiences help
                  prevent fearfulness and build a confident, adaptable adult dog who can handle travel, grooming
                  appointments, and busy environments with ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods work best for Poodles. Use treats,
                  toys, praise, and play to reward desired behaviors. Because Poodles are sensitive and highly attuned
                  to their owners, harsh corrections can damage trust and cause anxiety. Short, varied training
                  sessions that mix obedience, tricks, and games keep them mentally engaged and prevent boredom.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy, Canine Good Citizen
                  (CGC), and Community Canine (CGCA) as foundations for manners and reliability. Many Poodles thrive in
                  agility, rally, obedience, trick dog titles, and even therapy dog work. These activities help provide
                  structured outlets for their intelligence and energy.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Although many people picture Poodles as show or companion dogs, they remain versatile workers with
                  strong athletic and cognitive abilities. Their history as water retrievers and circus performers speaks
                  to their intelligence, stamina, and willingness to work closely with humans. Today, Poodles excel in a
                  variety of roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Hunting & Retrieving:</strong> Standard Poodles can still be trained as capable waterfowl
                    retrievers and upland hunting companions, making use of their strong swimming ability and soft mouth.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Poodles are top competitors in agility, obedience, rally, dock diving,
                    nosework, and trick dog sports, where their athleticism and intelligence shine.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> Their gentle, intuitive nature makes many Poodles well
                    suited for therapy dog work in hospitals, schools, and care facilities when properly trained.
                  </li>
                  <li>
                    <strong>Service Dogs:</strong> Some Poodles are used as service dogs for mobility assistance,
                    medical alert (such as diabetes alert), and psychiatric support, thanks to their trainability and
                    focus.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For many owners, a Poodle&apos;s primary role is to be a
                    devoted family companion who joins in on walks, hikes, travel, and everyday life.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Poodles good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Poodles can be excellent family dogs. They are affectionate, playful, and generally good with
                  children when properly socialized and supervised. Standard Poodles are sturdy enough for active play,
                  while Miniature and Toy Poodles may be more delicate and better suited to families who can teach
                  children to handle small dogs gently. Poodles do best in homes where they receive consistent attention,
                  training, and involvement in family activities.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Poodle puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The cost of a Poodle puppy varies based on size, pedigree, breeder reputation, and region. From
                  responsible breeders who perform recommended health testing and raise puppies in enriching
                  environments, Poodle puppies commonly range from around $1,500 to $3,500 or more. Puppies from
                  champion show or performance lines may cost even more. Be cautious of unusually low prices, which may
                  indicate poor breeding practices, lack of health testing, or high-volume breeding operations.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Poodles shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles are considered low-shedding dogs. Instead of shedding large amounts of hair, their curly coat
                  tends to catch loose hairs, which is why regular brushing is essential to prevent mats. While no dog
                  is completely hypoallergenic, many people with mild dog allergies find Poodles more tolerable than
                  heavier-shedding breeds. However, the trade-off for low shedding is a high grooming requirement,
                  including frequent brushing and regular professional grooming.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Poodles aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles are not inherently aggressive. Well-bred, well-socialized Poodles are typically friendly,
                  confident, and responsive to their owners. They may be reserved with strangers and alert barkers, but
                  they should not be fearful or sharp. As with any breed, inadequate socialization, poor breeding, pain,
                  or harsh handling can contribute to behavior problems. Positive training and early exposure to a wide
                  range of people and environments are important for a stable temperament.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Poodles live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Poodles can adapt well to apartment living, particularly Miniature and Toy varieties, as long as
                  their exercise and mental stimulation needs are met. Standard Poodles can also live in apartments if
                  they receive sufficient daily walks, play, and training. Regardless of size, Poodles should not be
                  left alone for long periods without activity, and owners must commit to regular outings and engagement
                  to prevent boredom and frustration.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between Standard, Miniature, and Toy Poodles?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  All three varieties share the same breed standard in terms of structure, coat, and temperament, and
                  differ only in height. Standard Poodles are 15 inches or taller at the shoulder (often 22–27 inches)
                  and are generally the most robust and athletic. Miniature Poodles stand 10–15 inches, while Toy
                  Poodles are under 10 inches tall. Standards often suit very active families or those interested in
                  sports or field work, while Miniatures and Toys may be better for smaller homes or people seeking a
                  smaller companion—but all Poodles require training, grooming, and mental engagement.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Poodle Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Individuals or families who want an intelligent, trainable dog involved in daily life</li>
                  <li>Owners willing to commit to regular professional grooming and at-home brushing</li>
                  <li>People interested in dog sports, advanced training, tricks, or therapy work</li>
                  <li>Those who prefer a low-shedding dog and can manage a high-grooming breed</li>
                  <li>Active households that can provide daily walks, play, and mental enrichment</li>
                  <li>Owners who appreciate a sensitive, people-focused dog that bonds closely with its family</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Poodles may not be ideal for people seeking a completely low-maintenance dog, those who dislike
                  frequent grooming or paying for regular professional grooming, or households where the dog will be
                  left alone for long hours with little interaction. Their intelligence and sensitivity mean they need
                  consistent companionship, structure, and engagement to truly thrive.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Poodle (Standard, Miniature, Toy) Breed Standard.&quot; akc.org</li>
                    <li>2. Poodle Club of America (PCA). &quot;Breed Information &amp; Health Testing Guidelines.&quot; poodleclubofamerica.org</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). &quot;Poodle Breed Statistics &amp; Health Testing Results.&quot; ofa.org</li>
                    <li>4. AKC Canine Health Foundation. &quot;Addison&apos;s Disease and Other Endocrine Disorders in Dogs.&quot;</li>
                    <li>5. PCA Health Committee. &quot;Sebaceous Adenitis &amp; Skin Disease in Standard Poodles.&quot;</li>
                    <li>6. Veterinary ophthalmology resources on hereditary cataracts and PRA in Poodles.</li>
                    <li>7. Veterinary cardiology and internal medicine references on GDV risk in large, deep-chested breeds.</li>
                    <li>8. Board-certified veterinary nutritionist resources on feeding small vs. large breed dogs and managing weight in Poodles.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/poodle" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
