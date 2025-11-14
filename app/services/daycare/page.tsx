import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Daycare Services - Socialization & Playtime | Nearby Pet Care',
  description: 'Pet daycare services providing socialization, exercise, and mental stimulation. Supervised play, structured activities, and feeding services for your pet.',
  keywords: ['pet daycare', 'dog daycare', 'cat daycare', 'pet daycare services', 'pet socialization', 'pet exercise', 'pet playtime'],
  openGraph: {
    title: 'Pet Daycare Services - Socialization & Playtime | Nearby Pet Care',
    description: 'Pet daycare services providing socialization, exercise, and mental stimulation for your pet.',
    type: 'website',
    url: 'https://nearbypetcare.com/services/daycare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Daycare Services - Socialization & Playtime | Nearby Pet Care',
    description: 'Pet daycare services providing socialization, exercise, and mental stimulation.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/services/daycare',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DaycarePage() {
  // Service Structured Data
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pet Daycare',
    name: 'Pet Daycare Services',
    description: 'Pet daycare services providing socialization, exercise, and mental stimulation. Supervised play, structured activities, and feeding services for your pet.',
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
        name: 'Pet Daycare',
        item: 'https://nearbypetcare.com/services/daycare'
      }
    ]
  };

  const activities = [
    'Supervised group play',
    'Individual attention time',
    'Exercise and fitness activities',
    'Mental stimulation games',
    'Socialization with other pets',
    'Rest and relaxation periods',
    'Feeding and medication',
    'Basic training reinforcement',
    'Interactive toys and puzzles',
    'Outdoor play areas'
  ];

  const schedule = [
    { time: '7:00 AM - 9:00 AM', activity: 'Morning Drop-off & Free Play', description: 'Pets arrive and settle in with supervised free play to help them adjust and burn off morning energy.' },
    { time: '9:00 AM - 11:00 AM', activity: 'Structured Activities & Exercise', description: 'Organized play sessions, exercise activities, and mental stimulation games tailored to each pet\'s energy level.' },
    { time: '11:00 AM - 12:00 PM', activity: 'Lunch & Rest Period', description: 'Mealtime for pets who bring lunch, followed by a quiet rest period to recharge for afternoon activities.' },
    { time: '12:00 PM - 3:00 PM', activity: 'Afternoon Play & Socialization', description: 'Continued supervised play, socialization opportunities, and interactive activities to keep pets engaged and happy.' },
    { time: '3:00 PM - 5:00 PM', activity: 'Quiet Time & Pick-up', description: 'Wind-down period with quieter activities and individual attention as pets prepare to go home.' }
  ];

  const benefits = [
    {
      title: 'Reduces Separation Anxiety',
      description: 'Regular daycare attendance helps pets become more comfortable with being away from home, reducing anxiety and destructive behaviors.',
      icon: '😌'
    },
    {
      title: 'Physical Exercise',
      description: 'Structured exercise and play activities help maintain your pet\'s physical health, prevent obesity, and burn excess energy.',
      icon: '🏃'
    },
    {
      title: 'Socialization',
      description: 'Interaction with other pets and people in a controlled environment helps develop social skills and confidence.',
      icon: '👥'
    },
    {
      title: 'Mental Stimulation',
      description: 'Engaging activities and puzzles prevent boredom, reduce destructive behaviors, and keep your pet\'s mind active and healthy.',
      icon: '🧩'
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
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🎾</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Pet Daycare Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
              Fun-filled days of play, exercise, and socialization for your pet. Our daycare program provides structured activities, supervised play, and personalized attention to keep your pet active, engaged, and happy while you're at work or away during the day.
            </p>
          </div>
        </div>
      </section>

      {/* Why Daycare Matters */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              Why Pet Daycare?
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Pet daycare provides essential benefits for both pets and their owners. For busy pet owners, daycare offers peace of mind knowing your pet is receiving professional care, exercise, and attention while you're at work. For pets, daycare provides crucial socialization, prevents boredom and destructive behaviors, and ensures they get the exercise and mental stimulation they need to stay healthy and happy.
              </p>
              <p>
                Regular daycare attendance can significantly improve your pet's behavior at home. Pets who attend daycare regularly tend to be calmer, better socialized, and less likely to develop separation anxiety or engage in destructive behaviors. The structured activities and supervised play help burn excess energy, making evenings at home more peaceful for both you and your pet.
              </p>
              <p>
                Our daycare program is designed to accommodate pets of all energy levels and personalities. We group pets appropriately based on size, temperament, and play style to ensure safe and enjoyable interactions. Our trained staff closely supervises all activities and can provide individual attention for pets who need a quieter environment or special care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
              Key Benefits of Daycare
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-colors"
              >
                <div className="text-4xl sm:text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              Daily Activities
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed transition-colors">
              Our daycare program includes a variety of activities designed to keep your pet engaged, active, and happy throughout the day. Each activity is supervised by trained staff who ensure safety and positive interactions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start p-4 bg-white dark:bg-gray-800/50 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Daily Schedule
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                  <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2 sm:mb-0 transition-colors">
                    {item.time}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                    {item.activity}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center p-8 sm:p-10 md:p-12 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
                Daycare Pricing
              </h2>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2 sm:mb-4 transition-colors">
                $35/day
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 transition-colors">
                Full day care includes all activities, meals, and supervision
              </p>
              <div className="text-left max-w-md mx-auto space-y-2">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  • Package deals available for regular attendance
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  • Half-day options available
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  • Multi-pet discounts offered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Enroll Your Pet Today
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Give your pet a fun and active day while you're away! Our daycare program provides the exercise, socialization, and attention your pet needs to stay happy and healthy.
            </p>
            <Link
              href="/book"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
