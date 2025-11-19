import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceList from '@/components/ServiceList';

export const metadata: Metadata = {
  title: 'Pet Care Services in New York | Nearby Pet Care',
  description: 'Find trusted pet care services in New York. Professional grooming, boarding, daycare, and training services for your pets in the Big Apple.',
  keywords: ['pet care new york', 'dog grooming new york', 'pet boarding new york', 'pet daycare new york', 'pet training new york', 'nyc pet care'],
  openGraph: {
    title: 'Pet Care Services in New York | Nearby Pet Care',
    description: 'Find trusted pet care services in New York. Professional grooming, boarding, daycare, and training services for your pets.',
    type: 'website',
    url: 'https://nearbypetcare.com/new-york',
  },
  twitter: {
    card: 'summary',
    title: 'Pet Care Services in New York | Nearby Pet Care',
    description: 'Find trusted pet care services in New York. Professional grooming, boarding, daycare, and training services for your pets.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/new-york',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewYorkPage() {
  // NewYorkPage Structured Data
  const newYorkStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pet Care Services in New York',
    description: 'Find trusted pet care services in New York through our online platform. Professional grooming, boarding, daycare, and training services for your pets.',
    url: 'https://nearbypetcare.com/new-york',
    mainEntity: {
      '@type': 'Service',
      '@id': 'https://nearbypetcare.com/new-york',
      name: 'Nearby Pet Care - New York',
      provider: {
        '@type': 'Organization',
        name: 'Nearby Pet Care',
        url: 'https://nearbypetcare.com'
      },
      areaServed: {
        '@type': 'City',
        name: 'New York',
        addressRegion: 'NY',
        addressCountry: 'US'
      },
      description: 'Online platform connecting pet owners in New York with trusted pet care providers'
    }
  };

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'New York',
        item: 'https://nearbypetcare.com/new-york'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newYorkStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Pet Care Services in New York
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
              Find trusted, professional pet care services in the Big Apple. From grooming to boarding, we connect you with the best care providers in New York.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <ServiceList cityName="New York" />

      {/* Available Pet Care Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center transition-colors">
            Available Pet Care Services in New York City
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 transition-colors">
            Browse our network of trusted pet care providers across all five boroughs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service Provider Card 1 */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    Manhattan Pet Spa
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 transition-colors">
                    <span>📍</span> Upper East Side, Manhattan
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  Open Now
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">4.9</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">(127 reviews)</span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                  Full-service grooming salon specializing in luxury pet care. Professional stylists, organic products, and stress-free environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Grooming</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Daycare</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Nail Trimming</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">0.8 miles away • Open until 7:00 PM</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                >
                  Contact Provider
                </Link>
              </div>
            </div>

            {/* Service Provider Card 2 */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    Brooklyn Pet Boarding
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 transition-colors">
                    <span>📍</span> Park Slope, Brooklyn
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  Open Now
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">4.8</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">(89 reviews)</span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                  Home-style boarding facility with spacious play areas. 24/7 supervision, personalized care, and daily exercise routines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Boarding</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Daycare</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Training</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">2.3 miles away • Open 24/7</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                >
                  Contact Provider
                </Link>
              </div>
            </div>

            {/* Service Provider Card 3 */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    Queens Canine Academy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 transition-colors">
                    <span>📍</span> Astoria, Queens
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  Open Now
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">5.0</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">(156 reviews)</span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                  Certified trainers offering obedience, agility, and behavioral modification. Group classes and private sessions available.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Training</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Behavioral</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Agility</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">3.1 miles away • Open until 8:00 PM</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                >
                  Contact Provider
                </Link>
              </div>
            </div>

            {/* Service Provider Card 4 */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    SoHo Pet Groomers
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 transition-colors">
                    <span>📍</span> SoHo, Manhattan
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  Open Now
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★☆</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">4.7</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">(203 reviews)</span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                  Modern grooming studio with eco-friendly products. Specializing in breed-specific cuts and spa treatments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Grooming</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Spa</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Styling</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">1.2 miles away • Open until 6:00 PM</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                >
                  Contact Provider
                </Link>
              </div>
            </div>

            {/* Service Provider Card 5 */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    Bronx Pet Care Center
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 transition-colors">
                    <span>📍</span> Fordham, Bronx
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  Open Now
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">4.9</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">(94 reviews)</span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                  Full-service facility offering grooming, boarding, and veterinary services. Experienced staff and state-of-the-art equipment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Grooming</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Boarding</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Vet Care</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">4.5 miles away • Open until 7:00 PM</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                >
                  Contact Provider
                </Link>
              </div>
            </div>

            {/* Service Provider Card 6 */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    Staten Island Pet Daycare
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 transition-colors">
                    <span>📍</span> St. George, Staten Island
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  Open Now
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">4.8</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">(67 reviews)</span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                  Spacious indoor and outdoor play areas. Daily activities, socialization, and exercise programs for dogs of all sizes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Daycare</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Play Groups</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Exercise</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">5.8 miles away • Open until 6:30 PM</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                >
                  Contact Provider
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About New York Pet Care Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Quality Pet Care in New York
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                New York City is home to millions of pet owners who understand that their furry, feathered, and scaled companions are family. Whether you live in Manhattan, Brooklyn, Queens, the Bronx, or Staten Island, finding quality pet care services is essential for your pet's health and happiness.
              </p>
              <p>
                Our platform connects New York pet owners with trusted, professional care providers throughout the five boroughs. We've carefully curated a network of experienced professionals who understand the unique needs of pets living in an urban environment. From high-rise apartments to brownstones, our care providers are equipped to serve pets and their owners across all neighborhoods.
              </p>
              <p>
                Living in New York comes with its own set of challenges and opportunities for pet owners. Our network of care providers understands the importance of accommodating busy schedules, navigating city regulations, and providing services that fit into the urban lifestyle. Whether you need a quick grooming appointment, reliable daycare for your work schedule, or safe boarding for your next trip, we're here to help you find the perfect match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Why Choose Our New York Pet Care Network
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                <strong className="text-gray-900 dark:text-white">Vetted Professionals:</strong> All care providers in our network are carefully screened to ensure they meet our high standards for quality, safety, and professionalism. We verify credentials, check references, and maintain ongoing relationships with our partners.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Convenient Locations:</strong> With providers throughout all five boroughs, you can find quality pet care services near your home or workplace. We make it easy to find convenient options that fit your schedule and location.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Urban Expertise:</strong> Our network understands the unique needs of city pets. From handling apartment living to navigating busy streets, our care providers are experienced with the challenges and opportunities of urban pet ownership.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Comprehensive Services:</strong> Whether you need routine grooming, emergency boarding, ongoing daycare, or specialized training, our network offers a full range of services to meet all your pet care needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Ready to Find Pet Care in New York?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Connect with trusted pet care professionals in New York today. Reach out to our team or explore our guides to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </Link>
              <Link
                href="/pet-care-tips"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
              >
                Explore Pet Care Tips
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

