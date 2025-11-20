'use client';

import { useState, useMemo, useEffect } from 'react';
import BusinessCardsDisplay from '@/components/BusinessCardsDisplay';
import Breadcrumb from '@/components/Breadcrumb';
import CitySidebar from '@/components/CitySidebar';
import { Business } from '@/components/BusinessCardsModal';
import { allServiceCategories } from '@/lib/servicesData';
import { getBusinessesByService, getBusinessesByCity } from '@/lib/businessesData';

interface NewYorkClientProps {
  breadcrumbs: Array<{ name: string; url: string }>;
}

export default function NewYorkClient({ breadcrumbs }: NewYorkClientProps) {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [businesses, setBusinesses] = useState<Business[]>([]);

  const cityOptions = useMemo(() => ['New York'], []);

  const selectedCategory = useMemo(
    () => allServiceCategories.find((category) => category.id === selectedCategoryId) ?? null,
    [selectedCategoryId]
  );

  const serviceOptions = selectedCategory?.services ?? [];

  useEffect(() => {
    if (!selectedCity) {
      setBusinesses([]);
      return;
    }

    if (selectedService) {
      const serviceBusinesses = getBusinessesByService(selectedService, selectedCity);
      setBusinesses(serviceBusinesses);
      return;
    }

    const cityBusinesses = getBusinessesByCity(selectedCity);
    setBusinesses(cityBusinesses);
  }, [selectedCity, selectedService]);

  useEffect(() => {
    setSelectedService('');
  }, [selectedCategoryId]);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedCategoryId('');
    setSelectedService('');
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  const handleServiceChange = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const resultTitle = useMemo(() => {
    if (selectedService && selectedCity) {
      return `${selectedService} in ${selectedCity}`;
    }
    if (selectedCategory && selectedCity) {
      return `${selectedCategory.title} in ${selectedCity}`;
    }
    if (selectedCity) {
      return `All Services in ${selectedCity}`;
    }
    return null;
  }, [selectedCity, selectedService, selectedCategory]);

  return (
    <>
      {/* Hero Section - Mobile-First Optimized */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden min-h-[60vh] sm:min-h-[70vh]"
        aria-label="Pet Care Services in New York"
      >
        {/* Background Image - Optimized for Mobile */}
        <div 
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dxxzhrmpm/image/upload/v1763598447/pexels-einfoto-2179602_smanuv.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll', // Better for mobile performance
          }}
          role="img"
          aria-label="Pet care services background"
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/50 to-purple-900/60 dark:from-black/70 dark:via-gray-900/70 dark:to-black/70"></div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={breadcrumbs.map(crumb => ({ name: crumb.name, href: crumb.url }))} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-full shadow-lg">
              <span className="text-2xl">📍</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">New York, NY</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 drop-shadow-lg">🐾</div>
            
            {/* Title - SEO Optimized H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Pet Care Services
              </span>
              <br />
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                in New York
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Find trusted pet care providers in New York. From pet sitting and boarding to grooming, training, and veterinary care—discover comprehensive pet services for your furry, feathered, and scaled friends.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-2xl">🏡</span>
                <span className="text-sm font-medium text-white drop-shadow-md">Pet Sitting</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-2xl">✂️</span>
                <span className="text-sm font-medium text-white drop-shadow-md">Grooming</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-2xl">🏥</span>
                <span className="text-sm font-medium text-white drop-shadow-md">Veterinary Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-2xl">🎓</span>
                <span className="text-sm font-medium text-white drop-shadow-md">Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section - Mobile-First, Accessible */}
      <section 
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors -mt-8 sm:-mt-12 relative z-20"
        aria-labelledby="filter-heading"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white/90 dark:bg-gray-900/70 border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 backdrop-blur">
            <header className="flex flex-col gap-2 mb-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                Find local services
              </p>
              <h2 id="filter-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Filter by city, category, and service
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Start by selecting a city, then narrow down by service category and specific services available in that area.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* City Filter - Touch-Friendly, Accessible */}
              <div>
                <label htmlFor="city-select" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  City <span className="sr-only">- Select a city to find pet care services</span>
                </label>
                <div className="relative">
                  <select
                    id="city-select"
                    value={selectedCity}
                    onChange={(e) => handleCityChange(e.target.value)}
                    aria-label="Select a city"
                    className="w-full h-[60px] sm:h-[68px] px-4 pr-10 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-base font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all touch-manipulation"
                    style={{ minHeight: '44px' }} // Minimum touch target size
                  >
                    <option value="">Select a city</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Service Category Filter - Touch-Friendly, Accessible */}
              <div>
                <label htmlFor="category-select" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Service Category <span className="sr-only">- Select a service category</span>
                </label>
                <div className="relative">
                  <select
                    id="category-select"
                    value={selectedCategoryId}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    disabled={!selectedCity}
                    aria-label="Select a service category"
                    aria-disabled={!selectedCity}
                    className="w-full h-[60px] sm:h-[68px] px-4 pr-10 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-base font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation"
                    style={{ minHeight: '44px' }} // Minimum touch target size
                  >
                    <option value="">{selectedCity ? 'Select a category' : 'Select a city first'}</option>
                    {allServiceCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Service Filter - Touch-Friendly, Accessible */}
              <div>
                <label htmlFor="service-select" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Service <span className="sr-only">- Select a specific service</span>
                </label>
                <div className="relative">
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    disabled={!selectedCategoryId}
                    aria-label="Select a service"
                    aria-disabled={!selectedCategoryId}
                    className="w-full h-[60px] sm:h-[68px] px-4 pr-10 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-base font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation"
                    style={{ minHeight: '44px' }} // Minimum touch target size
                  >
                    <option value="">
                      {!selectedCategoryId ? 'Select a category first' : 'Select a service'}
                    </option>
                    {serviceOptions.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cards Display Section - Mobile-First Layout */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-label="Pet care service providers"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Main Content - Mobile First */}
            <div className="flex-1 min-w-0"> {/* min-w-0 prevents flex overflow */}
              <BusinessCardsDisplay serviceName={resultTitle} businesses={businesses} cityName={selectedCity || undefined} />
            </div>
            
            {/* Sidebar - Sticky on Desktop, Below Content on Mobile */}
            <aside className="lg:sticky lg:top-24 lg:h-fit lg:w-80 xl:w-96" aria-label="Additional resources">
              <CitySidebar cityName={selectedCity || 'New York'} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

