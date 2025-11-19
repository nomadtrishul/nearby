import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nearby Pet Services Directory | Nearby Pet Care',
  description: 'Find trusted pet care services in your area. Browse veterinarians, groomers, trainers, and other pet care professionals.',
  keywords: ['pet services', 'veterinarians near me', 'pet groomers', 'pet trainers', 'pet care directory'],
  openGraph: { title: 'Nearby Pet Services Directory | Nearby Pet Care', description: 'Find trusted pet care services in your area.', type: 'website', url: 'https://nearbypetcare.com/nearby-pet-services' },
  alternates: { canonical: 'https://nearbypetcare.com/nearby-pet-services' },
};

export default function NearbyPetServicesPage() {
  const services = [
    { title: 'Veterinarians', href: '/nearby-pet-services/veterinarians', icon: '🏥' },
    { title: 'Groomers', href: '/nearby-pet-services/groomers', icon: '✂️' },
    { title: 'Trainers', href: '/nearby-pet-services/trainers', icon: '🎓' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nearby Pet Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Find trusted pet care professionals in your area. Browse our directory of veterinarians, groomers, trainers, and more.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h2>
                <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                  Browse Services <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

