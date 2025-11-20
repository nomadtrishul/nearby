'use client';

import Image from 'next/image';

interface Business {
  id: string;
  name: string;
  description: string;
  rating?: number;
  reviewCount?: number;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  image?: string;
  services?: string[];
  priceRange?: string;
}

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article 
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Business Image - Optimized with Next.js Image */}
      {business.image && (
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
          <Image
            src={business.image}
            alt={`${business.name} - Pet care service provider`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
            itemProp="image"
          />
        </div>
      )}
      
      {/* Business Name */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2" itemProp="name">
        {business.name}
      </h3>
      
      {/* Rating - Accessible with ARIA */}
      {business.rating && (
        <div 
          className="flex items-center gap-2 mb-3"
          itemScope
          itemType="https://schema.org/AggregateRating"
          role="img"
          aria-label={`Rating: ${business.rating.toFixed(1)} out of 5 stars${business.reviewCount ? ` based on ${business.reviewCount} reviews` : ''}`}
        >
          <div className="flex items-center" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(business.rating!)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            <span itemProp="ratingValue" className="sr-only">{business.rating.toFixed(1)}</span>
            <span aria-hidden="true">{business.rating.toFixed(1)}</span>
            {business.reviewCount && (
              <>
                <span className="sr-only"> based on </span>
                <span itemProp="reviewCount" className="sr-only">{business.reviewCount}</span>
                <span aria-hidden="true"> ({business.reviewCount} reviews)</span>
              </>
            )}
          </span>
        </div>
      )}
      
      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow" itemProp="description">
        {business.description}
      </p>
      
      {/* Services */}
      {business.services && business.services.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {business.services.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
              >
                {service}
              </span>
            ))}
            {business.services.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                +{business.services.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        {business.address && (
          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-2">{business.address}</span>
          </div>
        )}
        {business.phone && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${business.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {business.phone}
            </a>
          </div>
        )}
      </div>
      
      {/* Price Range */}
      {business.priceRange && (
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Price Range: {business.priceRange}
          </span>
        </div>
      )}
      
      {/* Action Buttons - Touch-Friendly (min 44x44px) */}
      <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-white/10 mt-auto">
        {business.website && (
          <a
            href={business.website}
            target="_blank"
            rel="noopener noreferrer"
            itemProp="url"
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation"
            style={{ minHeight: '44px' }} // Minimum touch target size
            aria-label={`Visit ${business.name} website`}
          >
            Visit Website
          </a>
        )}
        {business.phone && (
          <a
            href={`tel:${business.phone.replace(/\D/g, '')}`}
            itemProp="telephone"
            className="px-4 py-3 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 touch-manipulation"
            style={{ minHeight: '44px', minWidth: '44px' }} // Minimum touch target size
            aria-label={`Call ${business.name} at ${business.phone}`}
          >
            Call
          </a>
        )}
      </div>
    </article>
  );
}

