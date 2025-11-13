import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission | Nearby Pet Care',
  description: 'Learn about Nearby Pet Care, founded by a passionate pet lover dedicated to making quality pet care accessible to all. Discover our mission, values, and commitment to pets.',
  keywords: ['about nearby pet care', 'pet care company', 'pet care mission', 'pet care values', 'pet care story'],
  openGraph: {
    title: 'About Us - Our Story & Mission | Nearby Pet Care',
    description: 'Learn about Nearby Pet Care, founded by a passionate pet lover dedicated to making quality pet care accessible to all.',
    type: 'website',
    url: 'https://nearbypetcare.com/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Us - Our Story & Mission | Nearby Pet Care',
    description: 'Learn about Nearby Pet Care, founded by a passionate pet lover dedicated to making quality pet care accessible to all.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Compassion',
      description: 'We treat every pet as if they were our own, with love, care, and respect. Every decision we make is guided by what\'s best for the pets in our care.',
      icon: '❤️'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in pet care through continuous training, improvement, and dedication to providing exceptional service.',
      icon: '⭐'
    },
    {
      title: 'Accessibility',
      description: 'We believe quality pet care should be accessible to all pet lovers. Our platform connects pet owners with trusted, professional care services.',
      icon: '🌍'
    },
    {
      title: 'Trust',
      description: 'We build lasting relationships with pet parents through transparency, reliability, and genuine commitment to your pet\'s well-being.',
      icon: '🤝'
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              About Nearby Pet Care
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
              A platform created by a pet lover, for pet lovers. We believe every pet deserves access to quality care, and every pet owner deserves peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Nearby Pet Care was born from a simple yet profound love for animals. As a lifelong pet lover, our founder experienced firsthand the challenges of finding reliable, quality pet care services. Whether it was searching for a trustworthy groomer, a safe boarding facility, or professional training services, the process was often overwhelming and time-consuming.
              </p>
              <p>
                This personal experience sparked a vision: to create a platform that makes it easier for pet lovers everywhere to find and access the best pet care services in their area. We believe that pets are family, and they deserve the same level of care, attention, and love that we give to our human loved ones. This philosophy drives everything we do.
              </p>
              <p>
                Our founder chose to remain anonymous because the focus should always be on what matters most—the pets and the pet owners we serve. This isn't about personal recognition; it's about creating something meaningful that helps pet lovers provide the best possible care for their furry, feathered, or scaled family members. The mission is simple: connect pet owners with exceptional care providers and make quality pet care accessible to everyone.
              </p>
              <p>
                Every feature we build, every service we highlight, and every connection we facilitate is guided by one question: "Will this help pets and their owners?" If the answer is yes, we pursue it with passion and dedication. We're not just a business—we're a community of pet lovers working together to ensure every pet receives the care, attention, and love they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Our Philosophy
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                At the heart of Nearby Pet Care is a deep, unwavering love for animals. We understand that pets bring immeasurable joy, companionship, and love into our lives. They're not just animals—they're family members who deserve the very best care we can provide. This understanding shapes every aspect of our platform and guides our commitment to connecting pet owners with exceptional care providers.
              </p>
              <p>
                We believe that quality pet care should be accessible, transparent, and trustworthy. Every pet owner should be able to find reliable services without the stress of endless searching or uncertainty about quality. That's why we've created a platform that makes it easy to discover, compare, and book professional pet care services in your area.
              </p>
              <p>
                Our commitment extends beyond just connecting pet owners with services. We're dedicated to supporting a community where pet care providers can thrive, where pet owners can find peace of mind, and most importantly, where pets receive the care and attention they need to live happy, healthy lives. We're here to support the entire pet care ecosystem—from the dedicated professionals who provide care to the loving owners who seek it.
              </p>
              <p>
                Whether you're a first-time pet owner navigating the world of pet care for the first time, or a seasoned pet parent looking for new services, we're here to help. Our platform is designed to grow with you and your pet's needs, providing resources, information, and connections that make pet ownership easier and more enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl text-center transition-colors"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{value.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              What We Do
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Nearby Pet Care serves as a comprehensive platform connecting pet owners with professional pet care services in their local area. We've carefully curated a network of trusted providers offering grooming, boarding, daycare, training, and other essential pet care services. Our goal is to make finding quality pet care as simple and stress-free as possible.
              </p>
              <p>
                Beyond connecting pet owners with services, we provide valuable resources, educational content, and support to help pet owners make informed decisions about their pet's care. Our blog features expert advice, care guides, and helpful tips written by pet care professionals and experienced pet owners. We believe that informed pet owners make better decisions, leading to happier, healthier pets.
              </p>
              <p>
                We're constantly working to improve our platform, add new features, and expand our network of trusted care providers. Your feedback and experiences help shape our direction, ensuring we continue to serve the pet-loving community in meaningful ways. Whether you're looking for a one-time service or establishing an ongoing relationship with a care provider, we're here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Focus Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Built for Pet Lovers, By Pet Lovers
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Nearby Pet Care is more than just a platform—it's a community built on shared love for animals. We understand the joy of coming home to a wagging tail, the comfort of a purring cat, and the unique bond that forms between pets and their owners. This understanding informs everything we do, from the services we feature to the content we create.
              </p>
              <p>
                We're committed to supporting pet owners at every stage of their journey. Whether you're welcoming your first pet into your home or caring for a senior companion, we provide resources, connections, and support to help you give your pet the best possible life. We celebrate the diversity of the pet-loving community and work to ensure our platform serves pets and owners of all kinds.
              </p>
              <p>
                Our mission is simple: make quality pet care accessible, transparent, and trustworthy. We believe that when pet owners have easy access to excellent care services, pets benefit, families benefit, and the entire pet care community thrives. Every day, we work toward this vision, guided by our love for animals and our commitment to serving the pet-loving community.
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
              Join Our Pet Care Community
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Experience the difference that comes from a platform built with genuine love for pets and dedication to serving pet owners. Find trusted care providers, access valuable resources, and become part of a community that shares your passion for pet care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
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
