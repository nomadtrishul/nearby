'use client';

import { useState } from 'react';
import { ServiceCategory as ServiceCategoryType } from '@/lib/servicesData';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
  defaultExpanded?: boolean;
}

export default function ServiceCategory({ category, defaultExpanded = false }: ServiceCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 flex items-center justify-between text-left transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-2xl sm:text-3xl">{category.icon}</span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
            {category.title}
          </h3>
        </div>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="p-4 sm:p-6 pt-0 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {category.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-white/10 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800/50"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

