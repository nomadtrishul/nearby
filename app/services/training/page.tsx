import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Training Services - Professional Dog & Cat Training | Nearby Pet Care',
  description: 'Professional pet training services including basic obedience, advanced training, and behavioral modification. Private and group training options available.',
  keywords: ['pet training', 'dog training', 'cat training', 'pet training services', 'dog obedience', 'pet behavior training', 'puppy training'],
  openGraph: {
    title: 'Pet Training Services - Professional Dog & Cat Training | Nearby Pet Care',
    description: 'Professional pet training services including basic obedience, advanced training, and behavioral modification.',
    type: 'website',
    url: 'https://nearbypetcare.com/services/training',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Training Services - Professional Dog & Cat Training | Nearby Pet Care',
    description: 'Professional pet training services including basic obedience and advanced training.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/services/training',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TrainingPage() {
  // Service Structured Data
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pet Training',
    name: 'Pet Training Services',
    description: 'Professional pet training services including basic obedience, advanced training, and behavioral modification. Private and group training options available.',
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
        name: 'Pet Training',
        item: 'https://nearbypetcare.com/services/training'
      }
    ]
  };

  const programs = [
    {
      name: 'Puppy Training',
      duration: '6 weeks',
      price: '$350',
      includes: ['Basic commands', 'Potty training', 'Socialization', 'Crate training', 'Bite inhibition', 'Owner education'],
      description: 'Essential foundation training for puppies 8-16 weeks old. Builds good habits early and sets your puppy up for a lifetime of good behavior.'
    },
    {
      name: 'Basic Obedience',
      duration: '8 weeks',
      price: '$450',
      includes: ['Sit, Stay, Come', 'Leash walking', 'Behavior basics', 'Owner education', 'Leave it command', 'Down command'],
      description: 'Comprehensive obedience training for dogs of all ages. Establishes essential commands and improves communication between you and your pet.'
    },
    {
      name: 'Advanced Training',
      duration: '10 weeks',
      price: '$600',
      includes: ['Advanced commands', 'Off-leash training', 'Behavior modification', 'Custom goals', 'Distraction training', 'Real-world application'],
      description: 'Advanced training for dogs ready to take their skills to the next level. Includes behavior modification and training in real-world situations.'
    }
  ];

  const methods = [
    'Positive reinforcement techniques',
    'Science-based training methods',
    'Individual attention and assessment',
    'Owner participation and education',
    'Customized training plans',
    'Progress tracking and reports'
  ];

  const trainingApproach = [
    {
      title: 'Positive Reinforcement',
      description: 'We use reward-based training methods that focus on positive reinforcement rather than punishment. This approach builds trust, strengthens the bond between you and your pet, and creates lasting behavioral changes through positive associations.',
      icon: '✨'
    },
    {
      title: 'Science-Based Methods',
      description: 'Our training techniques are grounded in current animal behavior science and proven methodologies. We stay current with the latest research and adapt our methods based on what works best for each individual pet.',
      icon: '🔬'
    },
    {
      title: 'Owner Education',
      description: 'Training success depends on consistency at home. We provide comprehensive owner education to ensure you understand how to reinforce training, maintain progress, and continue building on what your pet learns in class.',
      icon: '📚'
    },
    {
      title: 'Individualized Plans',
      description: 'Every pet is unique, and so is their training plan. We assess each pet\'s personality, learning style, and specific needs to create a customized training approach that works best for them.',
      icon: '🎯'
    }
  ];

  const benefits = [
    'Improved behavior and obedience',
    'Stronger bond with your pet',
    'Better communication and understanding',
    'Reduced behavioral problems',
    'Increased confidence in your pet',
    'Enhanced safety and control',
    'More enjoyable daily interactions',
    'Prevention of future behavior issues'
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
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🎓</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Pet Training Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
              Professional behavioral development and obedience training for pets of all ages. Our certified trainers use positive reinforcement methods and science-based techniques to help your pet learn, grow, and become a well-behaved companion.
            </p>
          </div>
        </div>
      </section>

      {/* Why Training Matters */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              The Importance of Professional Training
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Professional training is one of the most valuable investments you can make in your pet's well-being and your relationship with them. Well-trained pets are happier, safer, and more enjoyable companions. Training provides mental stimulation, builds confidence, and strengthens the bond between you and your pet. It also helps prevent behavioral problems that can lead to frustration, stress, and even the difficult decision to rehome a pet.
              </p>
              <p>
                Our training programs are designed to address not just obedience commands, but also behavioral issues, socialization needs, and the development of good habits. We work with pets of all ages, from puppies learning their first commands to adult dogs needing behavior modification. Our approach focuses on understanding your pet's individual personality and learning style to create the most effective training experience.
              </p>
              <p>
                Training success requires consistency, patience, and the right techniques. Our certified trainers have the expertise to identify what motivates your pet, how they learn best, and what methods will be most effective for their specific needs. We also provide comprehensive owner education to ensure you can maintain and build upon the training at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Our Training Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {trainingApproach.map((item, index) => (
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
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Training Methods
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {methods.map((method, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Benefits of Professional Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4 bg-white dark:bg-gray-800/50 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Training Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 transition-colors">
                  {program.name}
                </h3>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">
                  {program.duration}
                </div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6 transition-colors">
                  {program.price}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed transition-colors">
                  {program.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {program.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Private vs Group Training */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Private vs. Group Training
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                We offer both private one-on-one training sessions and group classes, each with distinct advantages. Private training provides individualized attention, customized pace, and focused work on specific behavioral issues. This option is ideal for pets with special needs, severe behavioral problems, or owners who prefer personalized instruction.
              </p>
              <p>
                Group classes offer socialization opportunities, learning from other dogs, and a more cost-effective option. Group training helps pets learn to focus and respond to commands even with distractions present, which is valuable for real-world situations. Both options include owner education and homework assignments to ensure training success continues at home.
              </p>
              <p>
                Our trainers can help you determine which option is best for your pet based on their personality, training goals, and specific needs. Many pets benefit from a combination of both private sessions and group classes, and we're happy to create a training plan that incorporates both approaches.
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
              Start Your Pet's Training Journey
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Book a consultation to discuss your pet's training needs! Our certified trainers will assess your pet, understand your goals, and create a customized training plan that works for both you and your furry friend.
            </p>
            <Link
              href="/book"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
