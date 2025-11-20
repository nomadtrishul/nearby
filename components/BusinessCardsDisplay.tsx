'use client';

import BusinessCard from './BusinessCard';
import { Business } from './BusinessCardsModal';

interface BusinessCardsDisplayProps {
  serviceName: string | null;
  businesses: Business[];
  cityName?: string;
}

export default function BusinessCardsDisplay({ serviceName, businesses, cityName }: BusinessCardsDisplayProps) {
  if (!serviceName) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Choose a City to Begin
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            Use the filters above to pick a city, then narrow down by service category and specific services to view matching businesses.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {serviceName}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {businesses.length} {businesses.length === 1 ? 'business' : 'businesses'} found
          {cityName ? ` in ${cityName}` : ''}
        </p>
      </div>

      {/* Business Cards Grid */}
      {businesses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No businesses found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            We're working on adding more service providers for this service. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}

