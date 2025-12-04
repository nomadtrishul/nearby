import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Border Collie',
  slug: 'border-collie',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764596495/pexels-man-dy-1125766_uddray.jpg',
  description: 'Intense • Intelligent • Herding dogs • Athletic • Work-driven',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Border Collie Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Border Collie dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Border Collie',
    'Border Collie breed',
    'Border Collie care',
    'Border Collie temperament',
    'Border Collie training',
    'Border Collie health',
    'Border Collie care guide',
    'AKC Border Collie',
  ],
  pathname: '/pet-breeds/dogs/border-collie',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Border Collie Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Border Collie"
        description="Border Collies are famously intelligent, driven, and intensely focused herding dogs. Developed along the borderlands of Scotland and England to move sheep over rugged hillsides, they thrive when given real work, challenging training, and plenty of exercise. In the right home, their biddable nature and remarkable brainpower make them affectionate, loyal companions and world-class performance dogs."
        emoji="🐕"
        slug="border-collie"
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
                    The Border Collie is a highly versatile herding breed known for its athleticism, intense focus, and
                    legendary intelligence. Originating in the border region between Scotland and England, the breed was
                    developed as an all-purpose sheepdog, prized for its ability to move livestock with quiet power,
                    eye, and finely tuned responsiveness to subtle handler cues over long working days.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Border Collies consistently rank among the most popular
                    and accomplished herding breeds. Their popularity stems from their incredible trainability,
                    problem-solving ability, and suitability for highly active, engaged homes. When provided with ample
                    exercise and mental challenges, Border Collies make loyal, affectionate companions and outstanding
                    performance dogs in sports such as agility, obedience, rally, herding trials, flyball, and disc
                    competitions.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Border Collie&apos;s roots lie in the borderlands of Scotland and England, where shepherds needed
                  agile, tireless dogs capable of moving sheep across rough, hilly terrain. Over generations, working
                  shepherds selectively bred for instinct, stamina, responsiveness, and the distinctive “eye” — an
                  intense, crouched herding style that allows the dog to control stock with presence and movement rather
                  than force.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In the 19th and early 20th centuries, sheepdog trials helped solidify the Border Collie as a premier
                  working dog, showcasing their precision and teamwork with handlers. The AKC formally recognized the
                  breed in 1995, and the Border Collie Society of America (BCSA) serves as the AKC parent club. While
                  many Border Collies today still work on farms and ranches, they are also widely seen in dog sports and
                  active companion homes around the world, where their energy and intelligence are highly valued.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies are medium-sized, well-balanced dogs built for endurance, quickness, and agility
                  rather than bulk. According to the AKC breed standard, they should give an impression of effortless
                  movement and poised readiness, with a body slightly longer than tall, a level topline, and smooth,
                  ground-covering gait. Their alert expression, semi-erect or tipped ears, and piercing eyes contribute
                  to their intense, intelligent appearance.
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
                          19–22 inches
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          18–21 inches
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Weight
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          35–55 pounds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          30–45 pounds
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
                          Weather-resistant double coat; medium-length rough coat or shorter smooth coat
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
                          Black &amp; white, red &amp; white, tricolor, sable, blue merle, red merle, and more, with or
                          without tan points
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Border Collies have a fairly broad, flat skull with a
                  moderate stop and a strong, tapering muzzle. Eyes are usually brown but may be blue or partially blue,
                  especially in merle dogs, creating a striking look. Ears are medium-sized, set well apart, and
                  carried erect, semi-erect, or tipped. The tail is moderately long, carried low with a slight upward
                  curve at the end when relaxed, and may rise when the dog is excited or moving. Their fluid, crouched,
                  and agile movement reflects their heritage as working sheepdogs.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies are exceptionally intelligent, responsive, and work-driven. They are quick learners with
                  strong problem-solving skills and an intense desire to collaborate with their handlers. This
                  combination makes them highly trainable, but also means they can become frustrated, anxious, or
                  destructive if their needs for exercise and mental engagement are not met.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies are typically deeply devoted to their families and may be reserved with strangers.
                  Many have a natural protective or watchful instinct and will bark to alert their owners to unusual
                  sights and sounds, making them attentive watchdogs. Early socialization helps prevent shyness or
                  over-sensitivity and supports a confident, stable temperament in a variety of environments.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Herding instincts are very strong in this breed and may manifest as stalking, circling, or heel
                  nipping, especially around running children, bicycles, or other animals. Consistent training and
                  redirection are essential to channel these instincts into appropriate outlets. Border Collies thrive
                  in homes where they can participate in daily activities, learn new tasks, and spend plenty of focused
                  time working with their people.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As an extremely high-drive herding breed, Border Collies require substantial daily exercise and mental
                  stimulation. Without enough activity, they can quickly develop nuisance behaviors such as obsessive
                  barking, chasing, digging, and destructive chewing. Exercise needs vary by age and individual energy
                  level, but most Border Collies are significantly more active than the average companion dog.
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
                          Short walks, gentle play, basic obedience, socialization, low-impact games, safe exploration
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Adults (1-7 years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          2+ hours minimum
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Running, hiking, fetch, agility, herding lessons, flyball, frisbee, structured obedience,
                          scent games, sheepdog-style drills
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          45–75 minutes
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Gentle walks, swimming, light play, low-impact training, nosework, puzzle games
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Border Collies need as much mental work as physical activity.
                  Incorporate puzzle feeders, trick training, nosework, obedience drills, interactive toys, and dog
                  sports into their routine. Many Border Collies excel in agility, herding trials, obedience, rally,
                  flyball, disc dog events, and other activities that allow them to think and move at the same time.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies have a weather-resistant double coat that may be either a medium-length rough coat or a
                  shorter smooth coat. The outer coat is straight to slightly wavy, while the undercoat provides
                  insulation and protection from the elements. They shed moderately year-round and more heavily once or
                  twice a year when they “blow” their undercoat, especially in rough-coated dogs.
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
                          Slicker or pin brush, undercoat rake for rough coats; focus on feathering and pants to prevent
                          tangles
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
                          Every 6–10 weeks or as needed
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Dog-specific shampoo and conditioner; rinse thoroughly to avoid residue in dense areas
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Nail trimming
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Every 3–4 weeks
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Trim or grind; nails should not click loudly on hard floors during their active lifestyle
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
                          Veterinary ear cleaner, cotton balls; check after swimming or heavy outdoor activity
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
                          Dog toothbrush and toothpaste; add dental chews or rinses as recommended by your veterinarian
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
                  Proper nutrition is critical to support the Border Collie&apos;s active lifestyle, lean musculature,
                  and long-term health. As medium-sized, athletic herding dogs, Border Collies do best on high-quality
                  diets that prioritize animal-based protein and appropriate fat levels to fuel their energy needs, while
                  maintaining a lean body condition.
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
                          Varies by age/weight; follow vet and food label guidance, adjusting for growth and activity
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
                          ~1.5–2.5 cups (split into meals), adjusted for weight, metabolism, and exercise level
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
                          12–20%
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          ~2.5–3.5+ cups, adjusted for workload, climate, and body condition
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
                          1.5–2.5 cups, tailored to reduced activity, joint health, and body condition score
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
                  proteins (such as chicken, turkey, beef, lamb, or fish) as the first ingredient. Omega-3 and Omega-6
                  fatty acids support skin, coat, and joint health—especially important for active Border Collies. Some
                  dogs may benefit from joint supplements containing glucosamine and chondroitin. Because Border
                  Collies can be prone to certain food sensitivities or digestive issues, work with your veterinarian if
                  you suspect allergies, soft stools, or chronic gastrointestinal upset.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> While Border Collies are not among the breeds at highest risk for
                  gastric dilatation-volvulus (GDV or bloat), any deep-chested dog can be affected. To reduce risk,
                  divide daily food into two or more meals, avoid rapid gulping of food (use slow-feeder bowls if
                  needed), and limit vigorous exercise for about an hour before and after meals. Always seek emergency
                  veterinary care immediately if you suspect bloat.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies are generally healthy, robust dogs, but like all purebred breeds, they are predisposed
                  to certain inherited conditions. Responsible breeders use health testing and careful selection to
                  reduce the risk of these diseases. Prospective owners should be familiar with common health concerns
                  and ask breeders for documentation of health clearances on both parents.
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
                          Abnormal hip joint development leading to arthritis, pain, and reduced mobility, especially in
                          highly active dogs
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Elbow Dysplasia / OCD
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Recognized concern in active breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Developmental abnormalities in the elbow or shoulder joints that can cause lameness and
                          arthritis
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Hereditary Eye Diseases (CEA, PRA, cataracts)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Notable breed concern
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Includes Collie Eye Anomaly (CEA), Progressive Retinal Atrophy (PRA), and cataracts, which can
                          affect vision and may lead to blindness in severe cases
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          MDR1 Drug Sensitivity
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Genetic mutation seen in some herding breeds
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          A mutation in the MDR1 gene can cause severe reactions to certain medications; DNA testing
                          helps guide safe drug choices
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
                          Seizure disorder that may have a hereditary component; often managed with medication and
                          veterinary care
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Trapped Neutrophil Syndrome (TNS) / Other Genetic Disorders
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Low but important to screen
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Inherited immune system or neurologic disorders that can be screened for with DNA testing in
                          breeding dogs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Border Collie parent club recommend specific health testing for breeding dogs. Always
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
                          Screen for hip dysplasia and assess joint quality in active working and sport dogs
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
                          Screen for elbow dysplasia and developmental joint disease
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
                          Screen for hereditary eye diseases such as CEA, PRA, and cataracts
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          CEA / PRA / Other Eye DNA Tests
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Detect genetic mutations associated with inherited eye disease
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          MDR1 DNA Test
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or other approved lab
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Identify dogs affected by or carriers of MDR1 drug sensitivity
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Additional DNA Panels (e.g., TNS, NCL)
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          OFA or certified laboratory
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                          Screen for inherited immune and neurologic disorders known to occur in the breed
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
                  Border Collies are among the most trainable dog breeds in the world thanks to their intelligence,
                  focus, and intense work ethic. They learn new cues quickly and excel at complex, multi-step behaviors,
                  making them ideal partners for advanced obedience and performance sports. This trainability, however,
                  also means they readily learn unwanted habits if left without structure or guidance.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Begin socialization as early as possible, ideally between 3–14
                  weeks of age. Expose your Border Collie puppy to a wide variety of people, friendly dogs,
                  environments, surfaces, and sounds in a controlled, positive way. This helps prevent fearfulness,
                  sound sensitivity, and over-reactivity, and supports the development of a confident, adaptable adult
                  dog that can handle busy households, training environments, and public spaces with ease.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Positive reinforcement methods work best for Border Collies. Use
                  food rewards, toys, praise, and play to reinforce desired behaviors. They are sensitive, highly
                  observant dogs that bond strongly with their people, so harsh corrections can damage trust and may
                  lead to anxiety, shutdown, or conflict behaviors. Short, frequent training sessions that mix
                  obedience, tricks, games, and problem-solving keep them engaged and fulfilled.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider AKC S.T.A.R. Puppy, Canine Good Citizen (CGC),
                  and Community Canine (CGCA) as foundations for manners and reliability. Many Border Collies thrive in
                  advanced outlets such as agility, herding, competitive obedience, rally, flyball, disc sports, trick
                  dog titles, and nosework. These activities give them a productive way to channel their mental and
                  physical energy.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies were bred first and foremost as working sheepdogs, and many still serve as indispensable
                  partners on farms and ranches today. Their intelligence, athleticism, and strong bond with their
                  handlers also allow them to excel in a wide range of modern roles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Herding & Stock Work:</strong> Border Collies retain powerful herding instincts and are
                    highly valued for their ability to move sheep, cattle, and other livestock with finesse, control,
                    and minimal stress on the animals.
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> The breed is a top performer in agility, obedience, rally, flyball,
                    disc competitions, dock diving, and other sports where speed, coordination, and responsiveness are
                    key.
                  </li>
                  <li>
                    <strong>Search & Rescue / Detection:</strong> Some Border Collies work in search and rescue,
                    detection, and tracking roles, drawing on their keen noses, stamina, and focus.
                  </li>
                  <li>
                    <strong>Therapy & Emotional Support:</strong> With stable temperaments and good training, Border
                    Collies can make excellent therapy dogs, providing comfort and engagement in hospitals, schools, and
                    care facilities.
                  </li>
                  <li>
                    <strong>Service Dogs:</strong> While not as commonly used as some breeds, carefully selected Border
                    Collies may serve as medical alert, psychiatric service, or task-oriented assistance dogs when
                    paired with experienced handlers.
                  </li>
                  <li>
                    <strong>Active Family Companions:</strong> For many owners, a Border Collie&apos;s primary job is
                    being a beloved, involved family member who joins on hikes, runs, training classes, road trips, and
                    daily adventures.
                  </li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Border Collies good family dogs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Border Collies can be wonderful family dogs for very active, engaged households. They are
                  typically loyal, affectionate, and playful with their people and often form strong bonds with one or
                  more family members. However, their intense herding instincts and high energy mean they may try to
                  herd running children or other pets. Proper training, supervision, clear boundaries, and plentiful
                  outlets for energy are essential, especially in homes with young children.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  How much does a Border Collie puppy cost?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Prices vary by region, pedigree, working versus sport or show lines, and breeder practices. From
                  reputable breeders who perform recommended health testing and raise puppies in a high-quality
                  environment, Border Collie puppies often range from around $1,000–$2,500 or more. Puppies from proven
                  working, sport, or show lines may be higher. Be cautious of unusually low prices, which can signal
                  poor breeding practices, lack of health testing, or high-volume commercial breeding.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Do Border Collies shed a lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, Border Collies are moderate to heavy shedders, particularly rough-coated dogs. They shed
                  throughout the year and typically experience heavier seasonal shedding when they blow their undercoat.
                  Regular brushing—several times a week, and more often during shedding seasons—helps manage loose hair
                  and keep the coat healthy. Prospective owners should be comfortable with dog hair on clothing,
                  furniture, and floors.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Are Border Collies aggressive?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies are not inherently aggressive. Well-bred, well-socialized Border Collies are typically
                  confident, people-focused, and responsive to their owners. They may be reserved or cautious with
                  strangers and can be vocal or intense, but outright aggression is not typical of the breed. Poor
                  socialization, inconsistent handling, pain, or chronic stress can contribute to behavior problems in
                  any dog, so early positive training and appropriate management are important.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Can Border Collies live in apartments?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Apartment living is possible for Border Collies, but it requires an exceptionally committed owner.
                  Border Collies need significant daily exercise and mental stimulation, which means multiple brisk
                  walks, active play, structured training, and brain games every day. Without enough outlets, they can
                  become restless, noisy, and destructive. Homes with secure yards or easy access to safe off-leash
                  areas make meeting a Border Collie&apos;s needs easier, but lifestyle, time, and training commitment
                  matter more than square footage alone.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  What is the difference between working and show/sport lines in Border Collies?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Working-line Border Collies are bred primarily for herding ability, stamina, and intense drive. They
                  often have extremely high energy and thrive in homes that use them for stock work or very demanding
                  dog sports. Show or sport-oriented lines may place additional emphasis on conformation or specific
                  performance traits, and individual dogs may have slightly more moderate temperaments, though they are
                  still highly active, intelligent dogs. Both types need substantial training and exercise, but working
                  lines in particular usually demand experienced handlers and a job to do.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Is a Border Collie Right for You?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Very active individuals or families who enjoy hiking, running, and outdoor adventures</li>
                  <li>
                    Owners who can provide at least 2 hours of combined physical and mental exercise on most days
                  </li>
                  <li>People interested in dog sports, herding, trick training, or advanced obedience work</li>
                  <li>
                    Those who want a highly intelligent, people-oriented dog that enjoys frequent training and tasks
                  </li>
                  <li>Homes with securely fenced yards or reliable access to safe off-leash exercise areas</li>
                  <li>
                    Owners committed to consistent training, early socialization, clear boundaries, and ongoing
                    enrichment
                  </li>
                  <li>People comfortable with regular grooming and managing year-round shedding</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Border Collies may not be ideal for first-time dog owners with limited time, families who prefer a
                  low-energy or independent pet, or those who are away from home most of the day. Without enough
                  attention, structure, and activity, a Border Collie&apos;s intelligence and drive can quickly become
                  overwhelming and may lead to problem behaviors.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  References & Resources
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). &quot;Border Collie Breed Standard.&quot; akc.org</li>
                    <li>
                      2. Border Collie Society of America (BCSA). &quot;Health, Genetics &amp; Breed Information.&quot;
                    </li>
                    <li>
                      3. Various Border Collie breed clubs and working dog organizations. &quot;Breed Health
                      Information.&quot;
                    </li>
                    <li>4. Orthopedic Foundation for Animals (OFA). &quot;Breed Statistics for Border Collies.&quot;</li>
                    <li>
                      5. AKC Canine Health Foundation. &quot;Inherited Eye Diseases in Herding and Collie-Type
                      Breeds.&quot;
                    </li>
                    <li>
                      6. Veterinary genetic testing laboratories. &quot;MDR1, CEA, PRA, TNS and Other DNA Tests for
                      Border Collies.&quot;
                    </li>
                    <li>7. Border Collie parent club resources. &quot;Guidelines for Responsible Breeding.&quot;</li>
                    <li>8. Various veterinary nutrition resources on feeding active herding and performance breeds.</li>
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
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/border-collie" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
