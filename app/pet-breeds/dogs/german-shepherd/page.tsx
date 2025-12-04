import type { Metadata } from 'next';
import Link from 'next/link';
import DogBreedHero from '@/components/DogBreedHero';
import BreedsSidebar from '@/components/BreedsSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

// Breed metadata for use in listing pages
export const breedMetadata = {
  name: 'German Shepherd',
  slug: 'german-shepherd',
  imageUrl: 'https://res.cloudinary.com/dqlkmna4i/image/upload/v1764434547/german-shepherd_odmuhf.jpg',
  description: 'Intelligent • Loyal • Working dogs • Courageous • Protective',
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'German Shepherd Breed Guide - Complete Care & Training Information',
  description: 'Comprehensive guide to German Shepherd dogs based on AKC standards. Learn about characteristics, temperament, exercise needs, nutrition, grooming, health screening, and training requirements.',
  keywords: ['German Shepherd', 'German Shepherd breed', 'German Shepherd care', 'German Shepherd temperament', 'German Shepherd training', 'German Shepherd health', 'GSD care guide', 'AKC German Shepherd'],
  pathname: '/pet-breeds/dogs/german-shepherd',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'German Shepherd Breed Guide - Complete Care Information',
    type: 'image/png',
  }],
});

export default function GermanShepherdPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <DogBreedHero
        breedName="German Shepherd"
        description="German Shepherds are renowned for their intelligence, loyalty, and versatility. Originally bred as herding dogs, they excel as working dogs in police, military, search-and-rescue, and service roles. With proper training and socialization, they make excellent family companions and steadfast guardians."
        emoji="🐕"
        slug="german-shepherd"
        imageUrl="https://res.cloudinary.com/dqlkmna4i/image/upload/v1764434547/german-shepherd_odmuhf.jpg"
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
                    The German Shepherd Dog (GSD) stands as one of the world's most recognizable and versatile dog breeds. Developed in Germany in the late 19th century, this remarkable breed has evolved from its herding origins to become an indispensable working dog in law enforcement, military operations, search-and-rescue missions, and service work. Their combination of intelligence, physical prowess, and unwavering loyalty has made them a top choice for families and professionals alike.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    According to the American Kennel Club (AKC), German Shepherds consistently rank among the top five most popular dog breeds in the United States. This popularity stems from their exceptional trainability, protective instincts, and adaptability to various roles and living situations when properly exercised and trained.
                  </p>
                </section>

                {/* Breed History & Origin */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Breed History & Origin</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The German Shepherd breed was standardized in 1899 by Captain Max von Stephanitz, who sought to create the ideal herding dog combining intelligence, strength, and trainability. Von Stephanitz founded the first German Shepherd Dog club, the Verein für Deutsche Schäferhunde (SV), which remains the breed's parent club in Germany today.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Originally developed to herd and protect sheep, the breed's exceptional working abilities were quickly recognized for other purposes. During World War I and II, German Shepherds served as messenger dogs, rescue dogs, and sentries. Their success in military roles catapulted them to international fame. The breed was first recognized by the AKC in 1908 and has since become a cornerstone of working dog programs worldwide.
                </p>

                {/* Physical Characteristics */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Physical Characteristics & Breed Standards</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds possess a distinctive appearance defined by the AKC breed standard. They are medium to large-sized dogs with a slightly elongated body, well-muscled frame, and noble, alert expression. The breed's physical attributes reflect its working heritage, emphasizing strength, agility, and endurance.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Characteristic</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Male</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Female</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Height</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">24-26 inches</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">22-24 inches</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Weight</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">65-90 pounds</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">50-70 pounds</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Lifespan</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300" colSpan={2}>9-13 years</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Coat Type</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300" colSpan={2}>Dense double coat, medium length</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Common Colors</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300" colSpan={2}>Black and tan, black and red, solid black, sable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Key Physical Features:</strong> The breed displays a noble head with a long, wedge-shaped muzzle, dark almond-shaped eyes conveying intelligence and alertness, and moderately pointed ears that stand firmly erect. Their bushy tail hangs in a slight curve, reaching at least to the hock joint. The natural gait is a free-and-easy trot, showcasing efficient movement capable of covering ground with minimum effort.
                </p>

                {/* Temperament & Personality */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Temperament & Personality</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds are characterized by their loyalty, confidence, courage, and steady disposition. They rank consistently among the most intelligent dog breeds, typically placing third in Stanley Coren's intelligence rankings, demonstrating exceptional obedience and working intelligence. This cognitive ability makes them highly trainable and capable of learning complex tasks quickly.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The breed exhibits a natural protective instinct without being overly aggressive. German Shepherds are gentle and affectionate with their families, including children when properly socialized, but maintain a reserved demeanor with strangers. This aloofness is not shyness or aggression but rather a discerning nature that makes them excellent watchdogs and guardians. Early and extensive socialization is crucial to ensure they develop into confident, well-adjusted adults who can distinguish between normal situations and genuine threats.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Their strong work ethic and desire for purpose mean they thrive when given jobs to do, whether that's learning tricks, participating in dog sports, or serving in working roles. German Shepherds bond deeply with their families and can suffer from separation anxiety if left alone for extended periods without proper training and mental enrichment.
                </p>

                {/* Exercise Requirements */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Exercise Requirements by Life Stage</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  As a high-energy working breed, German Shepherds require substantial daily exercise to maintain physical health and prevent behavioral problems stemming from boredom and pent-up energy. The exercise requirements vary significantly based on the dog's age and individual energy level.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Life Stage</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Daily Exercise</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Recommended Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"><strong>Puppies (8 weeks - 12 months)</strong></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">5 minutes per month of age, 2x daily</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Short walks, gentle play, basic obedience, socialization</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"><strong>Adults (1-7 years)</strong></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">1.5-2 hours minimum</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Running, hiking, agility, fetch, swimming, advanced training</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"><strong>Seniors (7+ years)</strong></td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">30-60 minutes</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Gentle walks, swimming, light play, mental games</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Mental Exercise:</strong> Equally important as physical exercise, mental stimulation prevents boredom and destructive behaviors. Incorporate puzzle feeders, scent work, obedience training, trick training, and interactive toys into your German Shepherd's daily routine. Many GSDs excel in canine sports including agility, flyball, herding trials, tracking, Schutzhund, and dock diving.
                </p>

                {/* Grooming & Maintenance */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Grooming & Maintenance Schedule</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds possess a dense double coat consisting of a harsh, straight outer coat and a soft undercoat. This coat provides insulation and weather protection but requires regular maintenance. The breed sheds moderately year-round and experiences heavy seasonal shedding (often called "blowing coat") twice annually, typically in spring and fall.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Grooming Task</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Frequency</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Tools/Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Brushing (regular season)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">2-3 times per week</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Slicker brush, undercoat rake, metal comb</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Brushing (shedding season)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Daily</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">De-shedding tool, undercoat rake</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Bathing</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Every 4-6 weeks</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Dog-specific shampoo; avoid over-bathing</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Nail trimming</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Every 2-3 weeks</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Trim when you hear clicking on floors</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Ear cleaning</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Weekly check, clean as needed</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Veterinary ear cleaner, cotton balls</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Dental care</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Daily (ideal) or 3x per week minimum</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Dog toothbrush and toothpaste</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Nutrition & Feeding */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Nutrition & Feeding Guidelines</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Proper nutrition is fundamental to maintaining your German Shepherd's health, energy levels, and longevity. As an active, muscular breed, GSDs require high-quality protein to support muscle maintenance and repair, along with appropriate fat levels for energy and coat health.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Life Stage</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Protein</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Fat</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Daily Amount (Dry Food)</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Meals/Day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Puppies (2-12 months)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">22-26%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">10-15%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Varies by age/weight</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">3-4</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Adults (moderately active)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">18-22%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">5-8%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">2.5-3.5 cups</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Adults (highly active/working)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">26-30%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">8-12%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">3.5-4.5 cups</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">2-3</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Seniors (7+ years)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">18-22%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">5-8%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">2-3 cups</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Essential Nutritional Considerations:</strong> German Shepherds benefit from diets rich in quality animal proteins (chicken, beef, turkey, lamb, fish) as the primary ingredient. Omega-3 and Omega-6 fatty acids support coat health, joint function, and reduce inflammation. Glucosamine and chondroitin supplements can support joint health, particularly important given the breed's predisposition to hip and elbow dysplasia.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Bloat Prevention:</strong> German Shepherds, as a deep-chested breed, are at elevated risk for gastric dilatation-volvulus (GDV or bloat), a life-threatening emergency. To minimize risk: divide daily food into 2-3 smaller meals, use slow-feeder bowls, avoid vigorous exercise one hour before and after meals, and consider raised feeding stations (though research on effectiveness is mixed). Familiarize yourself with bloat symptoms and have an emergency veterinary plan.
                </p>

                {/* Health & Veterinary Care */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Health Considerations & Genetic Screening</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While German Shepherds are generally healthy dogs, they are predisposed to certain genetic and environmental health conditions. Responsible breeders screen their breeding stock for these conditions to minimize their occurrence. According to the Orthopedic Foundation for Animals (OFA), approximately 19-20% of German Shepherds are affected by hip dysplasia and similar percentages for elbow dysplasia.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Common Health Conditions</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Condition</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Prevalence</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Hip Dysplasia</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">~19%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Abnormal hip joint formation causing arthritis and pain</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Elbow Dysplasia</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">~20%</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Developmental elbow abnormalities leading to lameness</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Degenerative Myelopathy</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Variable</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Progressive spinal cord disease; genetic test available</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Bloat (GDV)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Elevated risk</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Life-threatening stomach torsion requiring emergency surgery</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Exocrine Pancreatic Insufficiency</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Higher than average</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Pancreas fails to produce digestive enzymes</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Hemangiosarcoma</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Elevated risk</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Aggressive cancer of blood vessel lining</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">AKC Recommended Health Screenings</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The AKC and German Shepherd Dog Club of America (GSDCA) recommend the following health clearances for breeding dogs. When purchasing a puppy, request documentation of parental health screenings:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Screening Test</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Testing Authority</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Hip Evaluation</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">OFA or PennHIP</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Screen for hip dysplasia</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Elbow Evaluation</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">OFA</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Screen for elbow dysplasia</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Degenerative Myelopathy DNA Test</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">OFA</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Identify carriers of SOD1 mutation</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Cardiac Evaluation</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">OFA</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Screen for heart conditions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Thyroid Evaluation</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">OFA</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Screen for thyroid disease</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Ophthalmologist Evaluation</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">CERF/OFA</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Screen for hereditary eye diseases</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Temperament Test</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">GSDCA</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Assess stable temperament</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Training */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Training & Socialization</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds rank among the most trainable dog breeds due to their exceptional intelligence, strong work ethic, and desire to please. Their cognitive abilities enable them to learn complex commands and tasks rapidly, making them ideal candidates for various specialized roles including police work, military service, search-and-rescue operations, and assistance dog programs.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Early Socialization:</strong> Critical socialization should begin as early as possible, ideally between 3-14 weeks of age during the primary socialization period. Expose your German Shepherd puppy to various people, animals, environments, sounds, and experiences to develop confidence and appropriate social behaviors. Properly socialized GSDs are confident, well-adjusted adults capable of distinguishing normal situations from genuine threats.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Training Approach:</strong> Use positive reinforcement methods including treats, praise, and play rewards. German Shepherds respond exceptionally well to consistent, reward-based training and can become stressed or shut down with harsh correction methods. Their sensitivity combined with intelligence means they learn quickly from both positive and negative experiences, making early positive training crucial.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Recommended Training Programs:</strong> Consider enrolling in AKC programs such as S.T.A.R. Puppy, Canine Good Citizen (CGC), and Community Canine (CGCA). Advanced training opportunities include AKC obedience trials, rally, agility, herding, tracking, and protection sports like Schutzhund/IPO.
                </p>

                {/* Working Roles */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Working Roles & Capabilities</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds excel in numerous professional working roles thanks to their intelligence, trainability, physical capabilities, and strong work drive. Their versatility has made them the breed of choice for many specialized functions:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>Law Enforcement:</strong> Police K9 units worldwide utilize German Shepherds for patrol work, narcotics detection, explosives detection, tracking suspects, and evidence recovery.</li>
                  <li><strong>Military Service:</strong> Armed forces employ GSDs as military working dogs for bomb detection, patrol, sentry duty, and specialized operations.</li>
                  <li><strong>Search and Rescue:</strong> Their exceptional scenting ability and endurance make them ideal for wilderness search, disaster response, and cadaver detection.</li>
                  <li><strong>Service Dogs:</strong> German Shepherds serve as guide dogs for the visually impaired, mobility assistance dogs, medical alert dogs, and PTSD service dogs for veterans.</li>
                  <li><strong>Herding:</strong> Still employed in their original role, GSDs excel in herding livestock and compete in AKC herding trials.</li>
                  <li><strong>Personal Protection:</strong> Their natural protective instincts combined with trainability make them effective family guardians and personal protection dogs when properly trained.</li>
                </ul>

                {/* Frequently Asked Questions */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Frequently Asked Questions</h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Are German Shepherds good family dogs?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, German Shepherds can be excellent family dogs when properly trained and socialized from puppyhood. They are typically gentle and patient with children in their own family, forming strong bonds with all family members. However, their size and energy level require supervision around small children, and they need experienced handlers committed to providing adequate exercise, training, and mental stimulation.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">How much does a German Shepherd puppy cost?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  From reputable breeders who conduct health screenings, German Shepherd puppies typically cost between $1,500-$3,500, with show-quality or working-line puppies from championship bloodlines costing $3,500-$7,000 or more. Lower prices often indicate lack of health testing, poor breeding practices, or puppy mills. Always request documentation of parental health clearances and meet the breeding dogs when possible.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Do German Shepherds shed a lot?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Yes, German Shepherds are heavy shedders. They shed moderately year-round and experience intense seasonal shedding called "blowing coat" twice annually (typically spring and fall) when they shed their undercoat. Regular brushing 2-3 times weekly (daily during shedding seasons) helps manage loose fur. Prospective owners should be prepared for significant grooming maintenance and hair around the home.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Are German Shepherds aggressive?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds are not inherently aggressive but are naturally protective and aloof with strangers. Properly bred, well-socialized, and trained German Shepherds display confidence without aggression. However, poor breeding, lack of socialization, inadequate training, or abuse can lead to fear-based aggression or inappropriate protective behaviors. Early socialization and positive training are essential to develop a confident, stable temperament.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Can German Shepherds live in apartments?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  While possible, apartment living is challenging for German Shepherds due to their size and high exercise requirements. GSDs need 1.5-2 hours of daily exercise and mental stimulation. Apartment dwellers must commit to multiple daily walks, regular trips to dog parks, and engagement in dog sports or activities. Without adequate exercise, German Shepherds can develop destructive behaviors. Houses with yards are generally more suitable for this active breed.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">What is the difference between American and German lines?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  American show lines tend to have a more angulated rear, sloped back appearance, and are bred primarily for conformation shows. German working lines (often called DDR or Czech lines) maintain a straighter back, emphasize working ability and drive, and must pass temperament and working certifications to breed. West German show lines fall between these extremes. Working lines typically have higher energy and drive, while show lines may be calmer but still require substantial exercise.
                </p>

                {/* Best For Section */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Is a German Shepherd Right for You?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds are best suited for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Active individuals or families who can provide 1.5-2 hours of daily exercise and mental stimulation</li>
                  <li>Experienced dog owners familiar with training large, intelligent working breeds</li>
                  <li>Those seeking a loyal, protective family companion and guardian</li>
                  <li>Individuals interested in dog sports, competitive obedience, herding, or protection sports</li>
                  <li>Homes with securely fenced yards where the dog can safely exercise and patrol</li>
                  <li>Owners committed to ongoing training, socialization, and mental enrichment throughout the dog's life</li>
                  <li>People prepared for moderate to heavy shedding and regular grooming requirements</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  German Shepherds may not be ideal for first-time dog owners, people with limited time for exercise and training, apartment dwellers without exceptional commitment to exercise, or those seeking a low-maintenance companion.
                </p>

                {/* References */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">References & Resources</h2>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>1. American Kennel Club (AKC). "German Shepherd Dog Breed Standard." akc.org</li>
                    <li>2. German Shepherd Dog Club of America (GSDCA). "Health & Welfare." gsdca.org</li>
                    <li>3. Orthopedic Foundation for Animals (OFA). "Hip Dysplasia Statistics." ofa.org</li>
                    <li>4. AKC Canine Health Foundation. "Degenerative Myelopathy in German Shepherds."</li>
                    <li>5. Coren, Stanley. "The Intelligence of Dogs." Free Press, 2006.</li>
                    <li>6. Pets4Homes UK. "German Shepherd Nutritional Requirements."</li>
                    <li>7. Shepherd Kingdom. "German Shepherd Exercise Guidelines."</li>
                    <li>8. Hound Therapy. "German Shepherd Grooming Guide."</li>
                  </ul>
                </div>

              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-breeds/dogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Dog Breeds</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="dogs" currentBreed="/pet-breeds/dogs/german-shepherd" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
