import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Care Services - Grooming, Boarding, Daycare & Training | Nearby Pet Care',
  description: 'Comprehensive pet care services including professional grooming, safe boarding, fun daycare, and expert training. Find the perfect care solution for your pet.',
  keywords: ['pet care services', 'dog grooming', 'pet boarding', 'pet daycare', 'pet training', 'pet grooming services', 'dog boarding', 'cat boarding'],
  openGraph: {
    title: 'Pet Care Services - Grooming, Boarding, Daycare & Training | Nearby Pet Care',
    description: 'Comprehensive pet care services including professional grooming, safe boarding, fun daycare, and expert training.',
    type: 'website',
    url: 'https://nearbypetcare.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Care Services - Grooming, Boarding, Daycare & Training | Nearby Pet Care',
    description: 'Comprehensive pet care services including professional grooming, safe boarding, fun daycare, and expert training.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  const services = [
    {
      name: 'Pet Grooming',
      icon: '✂️',
      description: 'Professional styling and hygiene services to keep your pet looking and feeling their best. Our certified groomers use premium products and gentle techniques to ensure your pet\'s comfort and safety.',
      features: ['Bath & Brush', 'Haircut & Styling', 'Nail Trimming', 'Ear Cleaning', 'Teeth Brushing', 'De-shedding Treatments', 'Mobile Grooming Available'],
      href: '/services/grooming',
      color: 'from-blue-500 to-cyan-500',
      benefits: 'Maintains coat health, prevents skin issues, and keeps your pet comfortable year-round'
    },
    {
      name: 'Pet Boarding',
      icon: '🏠',
      description: 'Safe and comfortable overnight stays with 24/7 supervision and care. Perfect for vacations, business trips, or any time you need extended pet care.',
      features: ['Individual Suites', 'Daily Exercise', 'Medication Administration', 'Regular Updates', 'Emergency Care', 'Climate-Controlled', 'Personalized Attention'],
      href: '/services/boarding',
      color: 'from-purple-500 to-pink-500',
      benefits: 'Peace of mind knowing your pet is safe, comfortable, and well-cared for while you\'re away'
    },
    {
      name: 'Daycare',
      icon: '🎾',
      description: 'Socialization and playtime for your pet while you\'re away during the day. Our structured programs provide exercise, mental stimulation, and social interaction.',
      features: ['Supervised Play', 'Social Interaction', 'Exercise Activities', 'Feeding Services', 'Pick-up & Drop-off', 'Mental Stimulation', 'Structured Schedule'],
      href: '/services/daycare',
      color: 'from-green-500 to-emerald-500',
      benefits: 'Reduces separation anxiety, provides exercise, and prevents destructive behaviors at home'
    },
    {
      name: 'Training',
      icon: '🎓',
      description: 'Professional behavioral development and obedience training programs. Our certified trainers use positive reinforcement methods to help your pet learn and grow.',
      features: ['Basic Obedience', 'Behavioral Correction', 'Puppy Training', 'Advanced Commands', 'Private Sessions', 'Group Classes', 'Owner Education'],
      href: '/services/training',
      color: 'from-orange-500 to-red-500',
      benefits: 'Builds better relationships, improves behavior, and creates a well-mannered companion'
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Our Comprehensive Pet Care Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 transition-colors leading-relaxed">
              At Nearby Pet Care, we offer a complete range of professional pet care services designed to meet all your furry friend's needs. From daily grooming and exercise to specialized training and overnight boarding, our experienced team provides compassionate, expert care that keeps your pet healthy, happy, and thriving.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
              Each of our services is tailored to your pet's individual needs, ensuring they receive the attention, care, and expertise they deserve. Whether you need regular care or specialized services, we're here to support you and your pet every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block"
              >
                <div className="relative p-6 sm:p-8 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity rounded-xl sm:rounded-2xl" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="text-4xl sm:text-5xl">{service.icon}</div>
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 transition-colors leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4 sm:mb-6">
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 transition-colors">
                        Key Benefits:
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">
                        {service.benefits}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  Certified Professionals
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  All our staff members are certified, trained, and experienced in their respective fields. We maintain the highest standards of care and stay current with industry best practices.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  Personalized Care
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  We understand that every pet is unique. Our services are customized to meet your pet's individual needs, preferences, and health requirements.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  Safe & Secure Facilities
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  Our facilities are designed with your pet's safety and comfort in mind. We maintain strict hygiene standards and have emergency protocols in place.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  Transparent Communication
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  We keep you informed throughout your pet's care with regular updates, photos, and detailed reports. Your peace of mind is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Ready to Book a Service?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Schedule an appointment today and give your pet the professional care they deserve. Our team is ready to help you find the perfect service for your furry friend's needs.
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
