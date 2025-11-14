import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Nearby Pet Care - Professional Pet Care Services Near You',
  description: 'Find trusted pet care services in your area. Professional grooming, boarding, daycare, and training services. Connect with experienced pet care professionals who treat your pets like family.',
  keywords: ['pet care services', 'dog grooming', 'pet boarding', 'pet daycare', 'pet training', 'pet care near me', 'professional pet care', 'mobile pet care'],
  openGraph: {
    title: 'Nearby Pet Care - Professional Pet Care Services Near You',
    description: 'Find trusted pet care services in your area. Professional grooming, boarding, daycare, and training services.',
    type: 'website',
    url: 'https://nearbypetcare.com',
    siteName: 'Nearby Pet Care',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nearby Pet Care - Professional Pet Care Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nearby Pet Care - Professional Pet Care Services Near You',
    description: 'Find trusted pet care services in your area. Professional grooming, boarding, daycare, and training services.',
    images: ['https://nearbypetcare.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  // Structured Data for Services
  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Pet Grooming',
        description: 'Professional grooming services including bathing, haircuts, nail trimming, and styling. Mobile grooming available.',
        provider: {
          '@type': 'Organization',
          name: 'Nearby Pet Care'
        },
        areaServed: 'US',
        url: 'https://nearbypetcare.com/services/grooming'
      },
      {
        '@type': 'Service',
        name: 'Pet Boarding',
        description: 'Safe and comfortable overnight stays with 24/7 supervision. Perfect for vacations and extended trips.',
        provider: {
          '@type': 'Organization',
          name: 'Nearby Pet Care'
        },
        areaServed: 'US',
        url: 'https://nearbypetcare.com/services/boarding'
      },
      {
        '@type': 'Service',
        name: 'Pet Daycare',
        description: 'Daily care and socialization for your pet while you work. Exercise, playtime, and mental stimulation included.',
        provider: {
          '@type': 'Organization',
          name: 'Nearby Pet Care'
        },
        areaServed: 'US',
        url: 'https://nearbypetcare.com/services/daycare'
      },
      {
        '@type': 'Service',
        name: 'Pet Training',
        description: 'Professional training programs for obedience, behavior modification, and specialized skills development.',
        provider: {
          '@type': 'Organization',
          name: 'Nearby Pet Care'
        },
        areaServed: 'US',
        url: 'https://nearbypetcare.com/services/training'
      }
    ]
  };

  // Structured Data for Reviews/Testimonials
  const reviewsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Nearby Pet Care'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sarah Johnson'
    },
    reviewBody: 'Finding reliable pet care services near me was a game-changer. The grooming service was exceptional, and my dog came back looking and feeling amazing!'
  };

  // Structured Data for FAQ
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What pet care services do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive pet care services including professional grooming, safe boarding, fun daycare, and expert training. All services are provided by verified, licensed professionals.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I book an appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book an appointment easily through our online booking system. Simply visit our Book page, select your preferred service, date, and time, and fill out the booking form. We\'ll confirm your appointment shortly.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are your pet care providers verified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our pet care providers are thoroughly vetted, licensed, and insured. We maintain the highest standards of care and ensure all professionals meet our strict quality requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer mobile pet care services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer mobile pet care services for your convenience. Our mobile grooming service brings professional care directly to your home, perfect for pets who are anxious about traveling or entering new environments.'
        }
      }
    ]
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
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-black transition-colors">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold transition-colors">✨ Trusted Pet Care Services Near You</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight transition-colors">
              Professional Pet Care
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                When You Need It Most
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed transition-colors">
              Find trusted pet care services in your area. From grooming and boarding to daycare and training, we connect you with experienced professionals who treat your pets like family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/book"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </Link>
              <Link 
                href="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Why Choose Nearby Pet Care?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Trusted by thousands of pet owners for reliable, professional care services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl sm:rounded-2xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">Local Pet Care Services</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  Find trusted pet care providers in your neighborhood. We connect you with experienced professionals who understand local needs and provide convenient, accessible services.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl sm:rounded-2xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">Verified Professionals</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  All our pet care providers are thoroughly vetted, licensed, and insured. Your pet's safety and wellbeing are our top priorities, backed by professional credentials and positive reviews.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl sm:rounded-2xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">Flexible Scheduling</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  Book appointments that fit your busy schedule. From same-day emergency care to planned services, we offer flexible options including mobile pet care services for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              How It Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Getting started with professional pet care is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                step: '01',
                title: 'Find Services Near You',
                description: 'Search for pet care services in your area. Browse verified providers offering grooming, boarding, daycare, training, and more.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                step: '02',
                title: 'Book Your Appointment',
                description: 'Choose a service provider that matches your needs and schedule. Book instantly online or call to speak with our team.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                step: '03',
                title: 'Enjoy Peace of Mind',
                description: 'Your pet receives professional care from experienced providers. Stay updated with real-time communication and updates.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Our Pet Care Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Comprehensive care solutions tailored to your pet's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Pet Grooming', 
                icon: '✂️', 
                desc: 'Professional grooming services including bathing, haircuts, nail trimming, and styling. Mobile grooming available.',
                link: '/services/grooming'
              },
              { 
                name: 'Pet Boarding', 
                icon: '🏠', 
                desc: 'Safe and comfortable overnight stays with 24/7 supervision. Perfect for vacations and extended trips.',
                link: '/services/boarding'
              },
              { 
                name: 'Pet Daycare', 
                icon: '🎾', 
                desc: 'Daily care and socialization for your pet while you work. Exercise, playtime, and mental stimulation included.',
                link: '/services/daycare'
              },
              { 
                name: 'Pet Training', 
                icon: '🎓', 
                desc: 'Professional training programs for obedience, behavior modification, and specialized skills development.',
                link: '/services/training'
              },
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{service.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '10K+', label: 'Happy Pets Served' },
              { number: '500+', label: 'Verified Providers' },
              { number: '50+', label: 'Cities Covered' },
              { number: '99%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              What Pet Parents Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Real experiences from pet owners who trust us with their furry family members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Sarah Johnson',
                pet: 'Golden Retriever Owner',
                text: 'Finding reliable pet care services near me was a game-changer. The grooming service was exceptional, and my dog came back looking and feeling amazing!',
                rating: 5
              },
              {
                name: 'Michael Chen',
                pet: 'Cat Owner',
                text: 'The mobile pet care service is perfect for my busy schedule. Professional, reliable, and my cat actually enjoys the visits. Highly recommend!',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                pet: 'Multiple Pet Owner',
                text: 'We\'ve used their boarding services multiple times. The staff is caring, the facility is clean, and I always have peace of mind when traveling.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white transition-colors">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      {recentPosts.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                Latest Pet Care Tips & Guides
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
                Expert advice and insights to help you provide the best care for your pets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                >
                  {post.category && (
                    <span className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium mb-3 transition-colors">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 transition-colors">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold group-hover:underline transition-colors">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm sm:text-base"
              >
                View All Blog Posts
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Ready to Find the Perfect Pet Care?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto transition-colors">
              Connect with trusted pet care professionals in your area. From grooming and boarding to daycare and training, we make it easy to find the right care for your furry friend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/book"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment Now
              </Link>
              <Link 
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
