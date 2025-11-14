import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Grooming Services - Professional Dog & Cat Grooming | Nearby Pet Care',
  description: 'Professional pet grooming services including bath, haircut, nail trimming, and more. Mobile grooming available. Keep your pet looking and feeling their best.',
  keywords: ['pet grooming', 'dog grooming', 'cat grooming', 'pet grooming services', 'mobile pet grooming', 'dog haircut', 'pet bath'],
  openGraph: {
    title: 'Pet Grooming Services - Professional Dog & Cat Grooming | Nearby Pet Care',
    description: 'Professional pet grooming services including bath, haircut, nail trimming, and more. Mobile grooming available.',
    type: 'website',
    url: 'https://nearbypetcare.com/services/grooming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Grooming Services - Professional Dog & Cat Grooming | Nearby Pet Care',
    description: 'Professional pet grooming services including bath, haircut, nail trimming, and more.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/services/grooming',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GroomingPage() {
  // Service Structured Data
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pet Grooming',
    name: 'Pet Grooming Services',
    description: 'Professional pet grooming services including bath, haircut, nail trimming, and more. Mobile grooming available. Keep your pet looking and feeling their best.',
    provider: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Grooming Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Basic Groom',
            description: 'Bath & Dry, Nail Trim, Ear Cleaning, Brush Out, Sanitary Trim'
          },
          price: '45',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Groom',
            description: 'Everything in Basic plus Haircut & Styling, Teeth Brushing, Paw Pad Trim, De-matting'
          },
          price: '75',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deluxe Groom',
            description: 'Everything in Full plus De-shedding Treatment, Aromatherapy, Blueberry Facial, Coat Conditioning'
          },
          price: '120',
          priceCurrency: 'USD'
        }
      ]
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
        name: 'Pet Grooming',
        item: 'https://nearbypetcare.com/services/grooming'
      }
    ]
  };

  const packages = [
    {
      name: 'Basic Groom',
      price: '$45',
      includes: ['Bath & Dry', 'Nail Trim', 'Ear Cleaning', 'Brush Out', 'Sanitary Trim'],
      description: 'Perfect for regular maintenance and keeping your pet clean and comfortable between full grooming sessions.'
    },
    {
      name: 'Full Groom',
      price: '$75',
      includes: ['Everything in Basic', 'Haircut & Styling', 'Teeth Brushing', 'Paw Pad Trim', 'De-matting'],
      description: 'Comprehensive grooming service that includes everything your pet needs for a complete makeover and health check.'
    },
    {
      name: 'Deluxe Groom',
      price: '$120',
      includes: ['Everything in Full', 'De-shedding Treatment', 'Aromatherapy', 'Blueberry Facial', 'Coat Conditioning'],
      description: 'Premium spa experience with luxurious treatments that leave your pet looking and feeling absolutely pampered.'
    }
  ];

  const services = [
    {
      title: 'Bathing & Drying',
      description: 'We use premium, pH-balanced shampoos and conditioners specifically formulated for your pet\'s coat type. Our professional drying techniques ensure your pet is completely dry while preventing skin irritation and matting.',
      icon: '🛁'
    },
    {
      title: 'Haircut & Styling',
      description: 'Our certified groomers provide breed-specific cuts and styling that maintain your pet\'s appearance while ensuring their comfort. We can create custom looks or maintain traditional breed standards.',
      icon: '✂️'
    },
    {
      title: 'Nail Care',
      description: 'Professional nail trimming and filing to keep your pet\'s nails at a healthy length. We carefully identify the quick to ensure safe, pain-free trimming that prevents overgrowth and related health issues.',
      icon: '💅'
    },
    {
      title: 'Ear Cleaning',
      description: 'Thorough ear cleaning and inspection to prevent infections and detect early signs of problems. We remove excess hair from ear canals when needed and use gentle, pet-safe cleaning solutions.',
      icon: '👂'
    },
    {
      title: 'Dental Care',
      description: 'Teeth brushing and dental health assessment to maintain your pet\'s oral hygiene. Regular dental care during grooming helps prevent serious dental diseases and keeps your pet\'s breath fresh.',
      icon: '🦷'
    },
    {
      title: 'Skin & Coat Health',
      description: 'Comprehensive skin and coat assessment during every grooming session. Our groomers are trained to identify early signs of skin conditions, parasites, or other health issues that may require veterinary attention.',
      icon: '🔍'
    }
  ];

  const benefits = [
    'Prevents skin infections and irritations',
    'Reduces shedding and matting',
    'Early detection of health issues',
    'Maintains healthy coat and skin',
    'Improves overall comfort and well-being',
    'Professional assessment of your pet\'s condition'
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
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">✂️</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Pet Grooming Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
              Professional grooming services designed to keep your pet looking and feeling their absolute best. Our certified groomers use only premium products and gentle techniques to ensure your pet's comfort, safety, and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Why Grooming Matters */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              Why Professional Grooming Matters
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Regular professional grooming is essential for your pet's health and well-being. Beyond keeping your pet looking great, grooming plays a crucial role in maintaining their physical health, preventing skin conditions, and detecting potential health issues early. Our certified groomers are trained to identify signs of skin problems, parasites, infections, and other health concerns that might otherwise go unnoticed.
              </p>
              <p>
                Professional grooming also provides important health benefits including improved circulation, reduced shedding, prevention of matting that can cause skin irritation, and maintenance of healthy nails and ears. Regular grooming sessions help your pet become more comfortable with handling, which can make veterinary visits less stressful. Additionally, our groomers can provide valuable insights about your pet's overall condition and recommend when veterinary attention might be needed.
              </p>
              <p>
                We understand that some pets may be anxious about grooming. Our team uses gentle, patient techniques and creates a calm, stress-free environment to ensure your pet has a positive experience. We work at your pet's pace and use positive reinforcement to build trust and make grooming an enjoyable activity rather than a stressful one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Our Grooming Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-colors"
              >
                <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Benefits of Regular Grooming
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4 bg-white dark:bg-gray-800/50 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Grooming Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 transition-colors">
                  {pkg.name}
                </h3>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 transition-colors">
                  {pkg.price}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed transition-colors">
                  {pkg.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Grooming Option */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Mobile Grooming Available
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                For pets who are anxious about traveling or entering new environments, we offer mobile grooming services that bring professional care directly to your home. Our fully equipped mobile grooming van provides the same high-quality services as our facility, but in the comfort and familiarity of your pet's own environment.
              </p>
              <p>
                Mobile grooming is particularly beneficial for senior pets, pets with mobility issues, multiple pets, or busy pet owners who prefer the convenience of at-home service. This option eliminates travel stress, reduces exposure to other animals, and provides one-on-one attention in a familiar setting. Contact us to learn more about mobile grooming availability in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Ready to Book a Grooming Session?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Schedule your pet's grooming appointment today! Our experienced groomers are ready to provide your furry friend with professional care that keeps them looking and feeling their best.
            </p>
            <Link
              href="/book"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
