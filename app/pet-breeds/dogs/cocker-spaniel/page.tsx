import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Cocker Spaniel',
  slug: 'cocker-spaniel',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764684593/pexels-jagheterjohann-1254140_xllknv.jpg',
  description: 'Gentle • Merry • Sporting dogs • Affectionate • Family-friendly',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cocker Spaniel Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Cocker Spaniel dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Cocker Spaniel',
    'Cocker Spaniel breed',
    'Cocker Spaniel care',
    'Cocker Spaniel temperament',
    'Cocker Spaniel training',
    'Cocker Spaniel health',
    'Cocker care guide',
    'AKC Cocker Spaniel',
  ],
  pathname: '/pet-breeds/dogs/cocker-spaniel',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Cocker Spaniel Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function CockerSpanielPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Cocker Spaniel"
        description="Cocker Spaniels are cheerful, affectionate sporting dogs known for their soft expression, silky coat, and long, velvety ears. Originally bred as bird-flushing gun dogs, today they are beloved family companions who thrive on close contact with their people, regular activity, and gentle, consistent training."
        emoji="🐕"
        slug="cocker-spaniel"
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
                    The Cocker Spaniel is a compact, merry sporting breed known for its gentle temperament, soulful
                    eyes, and beautiful feathered coat. In the United States, the term “Cocker Spaniel” typically refers
                    to the American Cocker Spaniel, the smallest member of the Sporting Group and a companion gundog
                    originally developed to hunt woodcock and other game birds.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Cocker Spaniels have long been popular family pets
                    thanks to their affectionate nature, moderate exercise needs, and adaptability to many living
                    situations. When given daily companionship, appropriate grooming, and positive training, they become
                    loving, people-oriented companions who are happiest when included in everyday family life.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Spaniels have a long history as bird dogs in Europe, where they were valued for their ability to
                  flush game from dense cover. Over time, spaniels were divided into land and water types, and later by
                  size and game specialty. The “cocker” spaniel type was known for working woodcock, a small game bird,
                  and eventually became the foundation for the modern Cocker Spaniel.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In the early 20th century, differences developed between the smaller, rounder-headed American Cocker
                  Spaniel and the slightly larger, longer-muzzled English Cocker Spaniel. The AKC recognized them as
                  separate breeds in the 1940s. Today, the Cocker Spaniel remains a cherished companion and retains its
                  abilities as a capable bird dog, while the English Cocker Spaniel is recognized as a distinct but
                  closely related breed.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels are small to medium-sized sporting dogs with a sturdy, compact build and a
                  characteristic soft, melting expression. According to the AKC breed standard, they should appear
                  balanced and slightly longer than tall, with a gently sloping topline, well-sprung ribs, and a smooth,
                  effortless gait. Their head is refined and slightly rounded, with a well-defined stop, broad muzzle,
                  and large, expressive eyes.
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
                          14.5–15.5 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          13.5–14.5 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          25–30 pounds (approx.)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          20–25 pounds (approx.)
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
                          12–15 years
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
                          Medium-length, silky coat with a protective undercoat; flat to slightly wavy with feathering
                          on ears, chest, belly, and legs
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
                          Solid black; black and tan; ASCOB (any solid color other than black); parti-color (two or more
                          colors, one of which is white); various patterns with tan points
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Cocker Spaniels have long, low-set ears covered in abundant
                  feathering, a moderately long neck, and a deep chest. Their large, dark eyes should convey an alert
                  yet gentle expression. The tail (often docked where legal) is carried level or slightly higher when
                  the dog is moving, reflecting their happy, willing nature. Their smooth, flowing movement should
                  suggest both stamina and elegance.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels are typically sweet-natured, affectionate, and eager to please. They form close bonds
                  with their families and usually enjoy being involved in whatever their people are doing. Many are
                  playful, outgoing, and sociable with both people and other dogs when properly socialized.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The breed generally does best in homes where they are not left alone for long hours every day. They
                  can be sensitive to tone and may become worried or withdrawn if handled harshly. A stable, confident
                  Cocker Spaniel should be neither shy nor aggressive, though some lines may be more reserved or more
                  exuberant. Early, positive socialization is important to encourage a friendly, adaptable temperament.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Because they were bred as working gun dogs, Cocker Spaniels still have a moderate prey drive and enjoy
                  activities that engage their noses and minds. Many love retrieving, sniffing out hidden toys, and
                  accompanying their owners on walks and light hikes. With proper guidance, their enthusiasm can be
                  channeled into polite manners and fun activities rather than nuisance barking or excitable jumping.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels have moderate exercise needs. They are typically happiest with a mix of daily walks,
                  playtime, and mental enrichment. While not as intense as some high-drive working breeds, they still
                  require regular activity to maintain a healthy weight and balanced behavior.
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
                          5 minutes per month of age, 2x daily (structured activity)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Short walks, gentle play, basic obedience, socialization, safe exploration, soft fetch games
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–90 minutes total
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brisk walks, playtime in a fenced yard, retrieving, light hiking, nosework games, basic
                          agility, obedience practice
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–45 minutes (adjusted for health)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, short play sessions, low-impact games, scent work, food puzzles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Cocker Spaniels are bright and responsive, and they benefit greatly
                  from mental enrichment. Incorporate puzzle toys, hide-and-seek games, basic trick training, and
                  scent-based activities into their daily routine. Many Cockers enjoy activities such as rally,
                  obedience, tracking, and even dock diving, provided the training is fun and confidence-building.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels have a beautiful but high-maintenance coat. The silky fur and feathering can mat
                  easily without regular brushing and professional grooming. In addition, their long, pendulous ears
                  require routine care to help prevent infections. Owners should be prepared to invest time and budget
                  into ongoing grooming throughout the dog&apos;s life.
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
                          3–4 times per week
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Slicker brush, pin brush, comb; pay special attention to ears, armpits, belly, and feathering
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Brushing (shedding or muddy season)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Daily or every other day
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thorough line brushing; use a comb to check for mats around ears, legs, and tail
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Bathing & coat trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 4–8 weeks (often with a professional groomer)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog-specific shampoo/conditioner; sanitary trim, foot trim, and overall coat shaping as
                          desired
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
                          Trim or grind; keep nails short to support joint health and comfortable movement
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ear cleaning
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weekly (or more often if prone to ear issues)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Veterinary ear cleaner, cotton balls; gently dry ears after swimming or baths; watch for
                          redness, odor, or head shaking
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
                  Proper nutrition is essential to support the Cocker Spaniel&apos;s moderate activity level, healthy
                  skin and coat, and long-term well-being. As small-to-medium, sturdy sporting dogs, Cockers tend to do
                  best on balanced, high-quality diets that provide adequate protein and controlled calories to help
                  prevent excess weight gain.
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
                          10–16%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Varies by age/weight; follow veterinarian and food label guidance
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
                          ~1–2 cups (split into meals), adjusted for size, metabolism, and activity level
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
                          24–28%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          12–18%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~1.5–2.5 cups, tailored to workload and body condition
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
                          1–1.5 cups, adjusted for reduced activity and weight management
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
                  proteins (such as chicken, turkey, lamb, or fish) as the first ingredient. Omega-3 and Omega-6 fatty
                  acids support skin and coat health—important for a long-coated breed like the Cocker Spaniel. Because
                  Cockers can be prone to ear and skin issues, allergies, and weight gain, work closely with your
                  veterinarian to choose an appropriate diet and monitor body condition over time.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Weight Management & Treats:</strong> Cocker Spaniels love food and can gain weight easily.
                  Measure meals rather than free-feeding, use healthy, low-calorie treats, and account for training
                  treats in the daily calorie total. Avoid feeding rich table scraps, and talk with your veterinarian
                  about safe treat options if your dog has a history of pancreatitis or digestive upsets.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels are generally healthy, but like all purebred dogs, they are predisposed to certain
                  inherited conditions. Responsible breeders use health testing and careful selection to reduce the
                  incidence of these issues. Prospective owners should be familiar with common health concerns and ask
                  breeders for documentation of health clearances on both parents.
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
                          Moderate breed risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Abnormal development of the hip joints that can lead to pain, arthritis, and reduced mobility
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Patellar Luxation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable small/medium-breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Kneecap instability that may cause intermittent lameness or skipping gait; severity varies
                          from mild to severe
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Important breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes cataracts, progressive retinal atrophy (PRA), glaucoma, and other inherited eye
                          problems that may affect vision
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Chronic Ear Infections (Otitis)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Common due to ear structure
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Long, pendulous ears can trap moisture and debris, leading to recurring bacterial or yeast ear
                          infections if not properly maintained
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
                          Seizure disorder that may have a hereditary component; managed with veterinary care and
                          medication when needed
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Autoimmune &amp; Endocrine Disorders
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized risk
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes autoimmune thyroiditis (leading to hypothyroidism) and other immune-mediated
                          conditions that may affect skin, coat, or overall health
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Cocker Spaniel parent clubs recommend specific health testing for breeding dogs. Always
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
                          Screen for hip dysplasia and assess hip joint quality before breeding
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
                          Check for patellar luxation (loose or dislocating kneecaps)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Ophthalmologist Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ACVO/OFA Eye Certification (CAER)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for hereditary eye diseases such as cataracts, PRA, and glaucoma
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Cardiac Exam
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA cardiologist or veterinary cardiology specialist
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for structural or functional heart disease, particularly in breeding dogs
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          PRA / Hereditary Eye DNA Tests
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved genetic laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect genetic mutations associated with progressive retinal atrophy and other inherited eye
                          diseases
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Thyroid Evaluation
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or certified laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for autoimmune thyroiditis and hypothyroidism that may affect health and fertility
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
                  Cocker Spaniels are typically willing, trainable dogs who respond very well to positive reinforcement.
                  Their desire to please and love of food make them excellent candidates for basic obedience, household
                  manners, and even competitive dog sports. At the same time, their sensitivity means they can shut down
                  or become anxious if training relies on harsh corrections or inconsistent handling.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization early, ideally between 3–14 weeks of age.
                  Introduce your Cocker puppy to a wide range of people, friendly dogs, sounds, and environments in a
                  controlled, positive way. This helps prevent fearfulness and supports the development of a confident,
                  adaptable adult who can handle visitors, grooming appointments, travel, and busy public spaces with
                  ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use reward-based methods—treats, toys, praise, and play—to
                  reinforce desired behaviors. Keep training sessions short, upbeat, and varied. Many Cocker Spaniels
                  enjoy learning tricks, practicing polite leash walking, and working on recall games. Consistent
                  boundaries around barking, jumping, and resource guarding are important to maintain good manners as
                  they mature.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy and Canine Good Citizen
                  (CGC) as foundations for social skills and basic manners. Many Cocker Spaniels also thrive in rally,
                  obedience, scent work, and therapy-dog preparation classes. These activities keep their minds busy and
                  strengthen the dog–owner bond.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Although most Cocker Spaniels today are family companions, they still retain many of the skills that
                  made them excellent bird dogs. Their combination of keen noses, willingness to work, and affectionate
                  nature allows them to succeed in a variety of roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Gun Dogs &amp; Field Work:</strong> Well-bred Cockers can still work as flushing spaniels,
                    locating and driving game birds toward the hunter and retrieving downed birds from land or water.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> The breed can enjoy and excel in rally, obedience, agility, scent work,
                    and trick dog titles, all of which provide excellent mental and physical exercise.
                  </li>
                  <li>
                    <strong>Search &amp; Detection:</strong> Some Cocker Spaniels are used in scent detection roles,
                    benefiting from their strong noses and manageable size.
                  </li>
                  <li>
                    <strong>Therapy &amp; Emotional Support:</strong> Their gentle, people-oriented nature and moderate
                    size make many Cockers well-suited to therapy-dog work in hospitals, schools, and care facilities.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For most owners, the Cocker&apos;s primary “job” is being
                    a loving family member who enjoys walks, playtime, and snuggling on the couch.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Cocker Spaniels good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Cocker Spaniels can make excellent family dogs when properly socialized and trained. They are
                  typically affectionate, gentle, and eager to be part of family activities. As with any breed, young
                  children should be taught to interact respectfully, and all interactions should be supervised. Regular
                  exercise and mental stimulation help keep Cockers calm and well-behaved indoors.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Cocker Spaniel puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, and breeder practices. From reputable breeders who perform health
                  testing and carefully raise litters, Cocker Spaniel puppies often range from around $1,000–$2,500 or
                  more. Puppies from proven show, performance, or field lines may be higher. Be cautious of unusually
                  low prices or sellers who cannot provide health clearances or allow you to meet the puppies and
                  parents in a clean, safe environment.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Cocker Spaniels shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels are moderate shedders, but because their coat is long and silky, loose hair may be
                  more noticeable if not brushed out regularly. Frequent brushing and routine grooming help manage
                  shedding and prevent mats. Prospective owners should be comfortable with regular coat care and some
                  dog hair on clothing and furniture.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Cocker Spaniels aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Well-bred, well-socialized Cocker Spaniels are not inherently aggressive. The ideal temperament is
                  merry, gentle, and trusting. However, any dog may develop fear-based or defensive behaviors if poorly
                  bred, mishandled, or inadequately socialized. Choosing a responsible breeder, providing early positive
                  experiences, and using humane training methods are key to raising a confident, friendly companion.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Cocker Spaniels live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Cocker Spaniels can adapt well to apartment living as long as their exercise and social needs are
                  met. They require daily walks, playtime, and interaction with their people. Households should be
                  prepared to manage barking, provide mental enrichment, and maintain a consistent routine. Their size
                  and moderate energy level make them good candidates for city or suburban life with committed owners.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between American and English Cocker Spaniels?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  American Cocker Spaniels (commonly called Cocker Spaniels in North America) are smaller with a more
                  domed skull, shorter muzzle, and more profuse coat. English Cocker Spaniels are slightly larger and
                  more moderate in head and coat, with a reputation for being somewhat more field-oriented in many
                  lines. Both breeds are affectionate and trainable, but they have separate breed standards, and
                  prospective owners should research which type best suits their preferences and lifestyle.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Cocker Spaniel Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    Individuals or families who want a gentle, affectionate dog that enjoys close companionship and
                    indoor life with its people
                  </li>
                  <li>Owners who can provide daily walks, playtime, and mental enrichment</li>
                  <li>
                    People who appreciate and are willing to maintain a long, silky coat through regular brushing and
                    professional grooming
                  </li>
                  <li>
                    Households that can manage regular ear care and routine veterinary checkups to monitor skin, coat,
                    and weight
                  </li>
                  <li>
                    Owners committed to positive training, early socialization, and consistent boundaries to encourage
                    good manners
                  </li>
                  <li>
                    Homes where the dog is not left alone for very long stretches every day, as Cockers thrive on
                    companionship
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Cocker Spaniels may not be ideal for people seeking a very low-maintenance breed, those unwilling to
                  invest in grooming, or households where the dog would spend most of the day alone. With the right
                  care, training, and attention, however, the Cocker Spaniel is a loving, joyful companion that fits
                  beautifully into many different lifestyles.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Cocker Spaniel Breed Standard.&quot; akc.org</li>
                    <li>
                      2. American Spaniel Club (ASC). &quot;Cocker Spaniel Breed Information, Health &amp; Breeding
                      Guidelines.&quot;
                    </li>
                    <li>
                      3. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Cocker Spaniels.&quot;
                    </li>
                    <li>
                      4. ACVO/OFA. &quot;Companion Animal Eye Registry (CAER) – Hereditary Eye Diseases in Sporting
                      Breeds.&quot;
                    </li>
                    <li>
                      5. Various peer-reviewed veterinary and nutrition resources on feeding small-to-medium sporting
                      breeds and managing ear/skin health.
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/cocker-spaniel" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
