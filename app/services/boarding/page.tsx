import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Boarding Services - Safe Overnight Pet Care | Nearby Pet Care',
  description: 'Safe and comfortable pet boarding services with 24/7 supervision. Individual suites, daily exercise, and personalized care for your pet while you\'re away.',
  keywords: ['pet boarding', 'dog boarding', 'cat boarding', 'pet boarding services', 'overnight pet care', 'pet hotel', 'pet kennel'],
  openGraph: {
    title: 'Pet Boarding Services - Safe Overnight Pet Care | Nearby Pet Care',
    description: 'Safe and comfortable pet boarding services with 24/7 supervision. Individual suites and personalized care.',
    type: 'website',
    url: 'https://nearbypetcare.com/services/boarding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Boarding Services - Safe Overnight Pet Care | Nearby Pet Care',
    description: 'Safe and comfortable pet boarding services with 24/7 supervision.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/services/boarding',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BoardingPage() {
  // Service Structured Data
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pet Boarding',
    name: 'Pet Boarding Services',
    description: 'Safe and comfortable pet boarding services with 24/7 supervision. Individual suites, daily exercise, and personalized care for your pet while you\'re away.',
    provider: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
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
        name: 'Services',
        item: 'https://nearbypetcare.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pet Boarding',
        item: 'https://nearbypetcare.com/services/boarding'
      }
    ]
  };

  const features = [
    'Individual climate-controlled suites',
    '24/7 supervision and care',
    'Daily exercise and playtime',
    'Medication administration',
    'Regular feeding schedule',
    'Daily photo updates',
    'Emergency veterinary care access',
    'Pick-up and drop-off services',
    'Personalized care plans',
    'Comfortable bedding provided'
  ];

  const pricing = [
    { duration: 'Per Night', price: '$50', description: 'For dogs up to 30 lbs', features: ['Standard suite', 'Daily exercise', 'Regular updates'] },
    { duration: 'Per Night', price: '$65', description: 'For dogs 31-60 lbs', features: ['Larger suite', 'Extended playtime', 'Daily updates'] },
    { duration: 'Per Night', price: '$80', description: 'For dogs over 60 lbs', features: ['Premium suite', 'Multiple exercise sessions', 'Priority care'] }
  ];

  const accommodations = [
    {
      title: 'Individual Suites',
      description: 'Each pet receives their own climate-controlled suite with comfortable bedding. Suites are cleaned daily and designed to provide a safe, secure, and comfortable environment for your pet\'s stay.',
      icon: '🏠'
    },
    {
      title: '24/7 Supervision',
      description: 'Our facility is staffed around the clock to ensure your pet receives constant care and attention. Trained professionals monitor all pets continuously and are available to address any needs immediately.',
      icon: '👁️'
    },
    {
      title: 'Exercise & Playtime',
      description: 'Daily exercise sessions are tailored to your pet\'s age, size, and energy level. We provide supervised playtime, walks, and activities to keep your pet active and engaged during their stay.',
      icon: '🏃'
    },
    {
      title: 'Medical Care',
      description: 'We can administer medications according to your veterinarian\'s instructions and monitor your pet\'s health throughout their stay. Our staff is trained to recognize signs of illness and has immediate access to emergency veterinary care.',
      icon: '💊'
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
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
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🏠</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Pet Boarding Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
              Safe, comfortable overnight stays with round-the-clock care and attention. Whether you're traveling for business or pleasure, our boarding facility provides a home away from home where your pet receives personalized care, daily exercise, and constant supervision.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              What's Included in Your Pet's Stay
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors mb-8">
              <p>
                Our boarding services are designed to provide your pet with a comfortable, safe, and engaging experience while you're away. Every aspect of your pet's stay is carefully planned to maintain their routine, ensure their comfort, and provide peace of mind for you. We understand that leaving your pet can be stressful, which is why we go above and beyond to create a positive boarding experience.
              </p>
              <p>
                Each pet receives individualized attention based on their specific needs, preferences, and health requirements. Our experienced staff takes time to learn about your pet's routine, dietary needs, exercise preferences, and any special requirements to ensure continuity of care. We maintain detailed records and provide regular updates so you can stay connected with your pet throughout their stay.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start p-4 bg-white dark:bg-gray-800/50 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Our Boarding Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {accommodations.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-colors"
              >
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparing for Boarding */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              Preparing Your Pet for Boarding
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                To ensure your pet has the best possible boarding experience, we recommend scheduling a facility tour before their first stay. This allows your pet to become familiar with the environment and helps us understand their needs and preferences. We'll discuss your pet's routine, dietary requirements, exercise needs, and any medical conditions or medications.
              </p>
              <p>
                Before boarding, ensure your pet is current on all vaccinations as required by our facility. Bring your pet's regular food to maintain their diet and prevent digestive upset, along with any medications clearly labeled with instructions. You're welcome to bring familiar items like favorite toys or bedding to help your pet feel more comfortable. We'll provide detailed care instructions and maintain open communication throughout your pet's stay.
              </p>
              <p>
                Our staff is trained to recognize signs of stress or illness and will contact you immediately if any concerns arise. We maintain relationships with local veterinarians and have emergency protocols in place to ensure your pet receives prompt medical attention if needed. Your pet's health and safety are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Boarding Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {pricing.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl text-center transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-4 transition-colors">
                  {item.price}
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-4 transition-colors">
                  {item.duration}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4 sm:mb-6 transition-colors">
                  {item.description}
                </div>
                <ul className="space-y-2 text-left">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors">
              * Additional charges may apply for extended stays, multiple pets, or special care requirements. Contact us for detailed pricing information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Book Your Pet's Stay
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Reserve a spot for your pet's next boarding stay! Our team is ready to provide your furry friend with a safe, comfortable, and enjoyable experience while you're away.
            </p>
            <Link
              href="/book"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Reserve Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
