import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'Golden Retriever',
  slug: 'golden-retriever',
  imageUrl:
    'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764574904/pexels-freestockpro-319975_fnsobk.jpg',
  description: 'Friendly • Intelligent • Loyal • Family dog • Gentle',
};

export const metadata: Metadata = generateSEOMetadata({
  title:
    'Golden Retriever Breed Guide - Complete Care & Training Information',
  description:
    'Comprehensive guide to Golden Retrievers based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: [
    'Golden Retriever',
    'Golden Retriever breed',
    'Golden Retriever care',
    'Golden Retriever temperament',
    'Golden Retriever training',
    'Golden Retriever health',
    'Golden care guide',
    'AKC Golden Retriever',
  ],
  pathname: '/pet-breeds/dogs/golden-retriever',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Golden Retriever Breed Guide - Complete Care Information',
      type: 'image/png',
    },
  ],
});

export default function AustralianShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="Golden Retriever"
        description="Golden Retrievers are one of the world’s most beloved family dogs, known for their gentle nature, intelligence, and eager-to-please personality. Originally bred in Scotland as hunting retrievers, they excel at retrieving game, assisting humans, and thriving in active, loving homes. Their friendly temperament, adaptability, and loyalty make them exceptional companions for families, service roles, and therapy work."
        emoji="🐕"
        slug="golden-retriever"
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
                    The Golden Retriever is a friendly, intelligent, and adaptable
                    sporting breed known for its warm temperament and impressive
                    trainability. Developed in the 19th century in Scotland for
                    retrieving waterfowl, Goldens quickly became cherished not only
                    for their working ability but also for their gentle, affectionate
                    nature.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), Golden Retrievers
                    consistently rank among the top three most popular dog breeds in
                    the United States. Their reliability, friendliness, and desire to
                    please make them excellent family pets, service dogs, therapy
                    dogs, and athletic partners in various dog sports.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Breed History & Origin
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Golden Retrievers were developed in the Scottish Highlands during
                  the mid-to-late 1800s by Sir Dudley Marjoribanks (Lord Tweedmouth).
                  Seeking the ideal gundog for retrieving game on rugged terrain and
                  in cold waters, he crossed yellow retrievers with Tweed Water
                  Spaniels, later incorporating Irish Setters and Bloodhounds.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The breed became recognized for its excellent nose, soft mouth,
                  athleticism, and cooperative temperament. Golden Retrievers were
                  officially recognized by the AKC in 1925 and have since become a
                  global favorite. Their calm demeanor and intelligence make them
                  highly versatile in roles such as service dog work, therapy,
                  search-and-rescue, and competitive obedience.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Physical Characteristics & Breed Standards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Golden Retrievers are medium-to-large sporting dogs known for their
                  muscular build, balanced proportions, and dense, water-repellent
                  double coat. According to the AKC, they should present a friendly,
                  intelligent expression, powerful movement, and a strong retrieving
                  instinct.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Characteristic
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Male
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Female
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Height</td>
                        <td className="border px-4 py-2">23–24 inches</td>
                        <td className="border px-4 py-2">21.5–22.5 inches</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Weight</td>
                        <td className="border px-4 py-2">65–75 pounds</td>
                        <td className="border px-4 py-2">55–65 pounds</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Lifespan</td>
                        <td className="border px-4 py-2" colSpan={2}>
                          10–12 years
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Coat Type</td>
                        <td className="border px-4 py-2" colSpan={2}>
                          Water-repellent double coat; wavy or straight
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Common Colors</td>
                        <td className="border px-4 py-2" colSpan={2}>
                          Light golden, golden, dark golden
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> Goldens have a broad head,
                  friendly dark eyes, well-developed chest, and a powerful yet smooth
                  gait. Their trademark feathered tail carries with a slight upward
                  curve, and their dense coat protects them during outdoor activities
                  and water work.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Temperament & Personality
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Golden Retrievers are famously friendly, outgoing, and dependable.
                  They thrive on human interaction, bonding closely with their
                  families and showing remarkable patience with children. Their
                  even-tempered nature and emotional intelligence make them excellent
                  therapy and service dogs.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Goldens are enthusiastic learners and highly motivated by food and
                  praise, making them easy to train. While generally sociable with
                  strangers and other dogs, they may be overly friendly rather than
                  protective, making them good companions but not ideal guard dogs.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Exercise Requirements by Life Stage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As active sporting dogs, Golden Retrievers require daily exercise to
                  maintain physical and mental health. Without enough activity, they
                  may develop restlessness, excessive chewing, or weight gain.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border px-4 py-2">Life Stage</th>
                        <th className="border px-4 py-2">Daily Exercise</th>
                        <th className="border px-4 py-2">Recommended Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          <strong>Puppies (8 weeks–12 months)</strong>
                        </td>
                        <td className="border px-4 py-2">
                          5 minutes per month of age, 2x daily
                        </td>
                        <td className="border px-4 py-2">
                          Controlled play, socialization, gentle walks
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">
                          <strong>Adults (1–7 years)</strong>
                        </td>
                        <td className="border px-4 py-2">1–2 hours</td>
                        <td className="border px-4 py-2">
                          Fetch, swimming, hiking, jogging, obedience training
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          <strong>Seniors (7+ years)</strong>
                        </td>
                        <td className="border px-4 py-2">30–45 minutes</td>
                        <td className="border px-4 py-2">
                          Gentle walks, swimming, enrichment games
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Puzzle toys, scent work, hide-and-seek,
                  trick training, and structured play help keep Golden Retrievers
                  mentally stimulated.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Grooming & Maintenance Schedule
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Golden Retrievers have a thick double coat that sheds moderately
                  year-round and heavily in spring and fall. Regular grooming helps
                  prevent matting and reduces shedding.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border px-4 py-2">Grooming Task</th>
                        <th className="border px-4 py-2">Frequency</th>
                        <th className="border px-4 py-2">Tools/Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Brushing</td>
                        <td className="border px-4 py-2">
                          2–3 times/week (daily during shedding)
                        </td>
                        <td className="border px-4 py-2">
                          Slicker brush, undercoat rake
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Bathing</td>
                        <td className="border px-4 py-2">Every 4–8 weeks</td>
                        <td className="border px-4 py-2">
                          Gentle dog shampoo; avoid over-bathing
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Nail trimming</td>
                        <td className="border px-4 py-2">Every 2–3 weeks</td>
                        <td className="border px-4 py-2">Trim or grind</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Ear cleaning</td>
                        <td className="border px-4 py-2">Weekly check</td>
                        <td className="border px-4 py-2">
                          Vet ear cleaner; Goldens are prone to ear infections
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Dental care</td>
                        <td className="border px-4 py-2">
                          Daily or 3x per week minimum
                        </td>
                        <td className="border px-4 py-2">
                          Dog toothpaste + dental chews
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
                  Golden Retrievers thrive on balanced diets rich in high-quality
                  protein, healthy fats, and controlled calories. Because they are
                  prone to obesity, portion control is essential.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border px-4 py-2">Life Stage</th>
                        <th className="border px-4 py-2">Protein</th>
                        <th className="border px-4 py-2">Fat</th>
                        <th className="border px-4 py-2">
                          Daily Amount (Dry Food)
                        </th>
                        <th className="border px-4 py-2">Meals/Day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Puppies</td>
                        <td className="border px-4 py-2">22–26%</td>
                        <td className="border px-4 py-2">10–15%</td>
                        <td className="border px-4 py-2">
                          Follow large-breed puppy guidelines
                        </td>
                        <td className="border px-4 py-2">3–4</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Adults</td>
                        <td className="border px-4 py-2">18–24%</td>
                        <td className="border px-4 py-2">8–12%</td>
                        <td className="border px-4 py-2">2–3.5 cups</td>
                        <td className="border px-4 py-2">2</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Seniors</td>
                        <td className="border px-4 py-2">18–22%</td>
                        <td className="border px-4 py-2">8–12%</td>
                        <td className="border px-4 py-2">1.5–3 cups</td>
                        <td className="border px-4 py-2">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> Golden Retrievers can be at risk
                  for gastric dilatation-volvulus (GDV). Feed smaller meals, avoid
                  heavy exercise around feeding times, and consider slow-feeder bowls.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Health Considerations & Genetic Screening
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Golden Retrievers are generally healthy but are predisposed to
                  several hereditary conditions. Responsible breeders perform essential
                  health testing to reduce risks.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Common Health Conditions
                </h3>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border px-4 py-2">Condition</th>
                        <th className="border px-4 py-2">Prevalence</th>
                        <th className="border px-4 py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Hip Dysplasia</td>
                        <td className="border px-4 py-2">Moderate</td>
                        <td className="border px-4 py-2">
                          Improper hip development leading to arthritis
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Elbow Dysplasia</td>
                        <td className="border px-4 py-2">Moderate</td>
                        <td className="border px-4 py-2">
                          Joint abnormalities causing lameness
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          Hereditary Eye Diseases
                        </td>
                        <td className="border px-4 py-2">Notable</td>
                        <td className="border px-4 py-2">
                          Includes cataracts, PRA, pigmentary uveitis
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Cancer</td>
                        <td className="border px-4 py-2">High breed risk</td>
                        <td className="border px-4 py-2">
                          Golden Retrievers have elevated risk of lymphoma and
                          hemangiosarcoma
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Heart Conditions</td>
                        <td className="border px-4 py-2">Moderate</td>
                        <td className="border px-4 py-2">Subaortic stenosis (SAS)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Allergies</td>
                        <td className="border px-4 py-2">Common</td>
                        <td className="border px-4 py-2">
                          Skin allergies, ear infections, and food sensitivities
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  AKC Recommended Health Screenings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and Golden Retriever Club of America (GRCA) recommend the
                  following health tests for breeding dogs:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border px-4 py-2">Screening Test</th>
                        <th className="border px-4 py-2">Authority</th>
                        <th className="border px-4 py-2">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Hip Evaluation</td>
                        <td className="border px-4 py-2">OFA or PennHIP</td>
                        <td className="border px-4 py-2">
                          Detect hip dysplasia risk
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Elbow Evaluation</td>
                        <td className="border px-4 py-2">OFA</td>
                        <td className="border px-4 py-2">
                          Detect elbow dysplasia
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Eye Examination</td>
                        <td className="border px-4 py-2">ACVO/OFA</td>
                        <td className="border px-4 py-2">
                          Screen for hereditary eye issues
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border px-4 py-2">Cardiac Evaluation</td>
                        <td className="border px-4 py-2">OFA</td>
                        <td className="border px-4 py-2">
                          Detect heart conditions such as SAS
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
                  Golden Retrievers are among the most trainable breeds thanks to
                  their intelligence, gentleness, and eagerness to please. They excel
                  in positive-reinforcement training and thrive with consistent
                  structure and mental stimulation.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Introduce your Golden puppy to
                  people, pets, environments, and experiences during the critical
                  3–14 week window to promote confidence and prevent fearfulness.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use rewards, praise, and gentle
                  redirection. Goldens are sensitive and can shut down under harsh
                  corrections.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                  Working Roles & Capabilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Golden Retrievers excel in a wide range of roles:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Service Dogs:</strong> Mobility support, medical alert,
                    autism support
                  </li>
                  <li>
                    <strong>Therapy Dogs:</strong> Ideal for hospitals, schools,
                    nursing homes
                  </li>
                  <li>
                    <strong>Search & Rescue:</strong> Excellent scenting abilities
                  </li>
                  <li>
                    <strong>Hunting/Field Work:</strong> Skilled retrievers
                  </li>
                  <li>
                    <strong>Dog Sports:</strong> Agility, obedience, dock diving
                  </li>
                  <li>
                    <strong>Family Companions:</strong> One of the most loyal and
                    affectionate breeds
                  </li>
                </ul>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt  -10 mb-4">
                  References & Resources
                </h2>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      1. American Kennel Club (AKC). “Golden Retriever Breed
                      Standard.”
                    </li>
                    <li>
                      2. Golden Retriever Club of America (GRCA). “Health &
                      Genetics.”
                    </li>
                    <li>
                      3. Orthopedic Foundation for Animals (OFA). “Golden Retriever
                      Health Statistics.”
                    </li>
                    <li>
                      4. Morris Animal Foundation. “Golden Retriever Lifetime
                      Study.”
                    </li>
                    <li>
                      5. AKC Canine Health Foundation. “Inherited Eye Diseases in
                      Sporting Breeds.”
                    </li>
                    <li>
                      6. Veterinary Partner / VCA Hospitals. “Golden Retriever
                      Nutrition & Care.”
                    </li>
                    <li>
                      7. GRCA. “Recommended Health Testing for Golden Retrievers.”
                    </li>
                    <li>
                      8. Various veterinary nutrition sources for large-breed diets.
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
              <BreedsSidebar
                category="dogs"
                currentBreed="/pet-breeds/dogs/golden-retriever"
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
