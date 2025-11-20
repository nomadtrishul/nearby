'use client';

import { useState, useEffect } from 'react';
import { allServiceCategories, ServiceCategory as ServiceCategoryType } from '@/lib/servicesData';
import { getBusinessesByService } from '@/lib/businessesData';

interface CityServicesSidebarProps {
  cityName?: string;
  onServiceSelect?: (serviceName: string, businesses: any[]) => void;
}

export default function CityServicesSidebar({ cityName, onServiceSelect }: CityServicesSidebarProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted flag to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Toggle category expansion when clicked
  const toggleCategory = (categoryId: string) => {
    // Try to scroll to category if it exists on the page
    if (typeof window !== 'undefined') {
      const element = document.getElementById(categoryId);
      if (element) {
        const offset = 100; // Offset for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    setActiveCategory(categoryId);
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Handle service click - show business cards
  const handleServiceClick = (serviceName: string) => {
    const businesses = getBusinessesByService(serviceName, cityName);
    if (onServiceSelect) {
      onServiceSelect(serviceName, businesses);
    }
  };

  // Track scroll position to highlight active category
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    const handleScroll = () => {
      const categories = allServiceCategories.map(cat => cat.id);
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = categories.length - 1; i >= 0; i--) {
        const element = document.getElementById(categories[i]);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveCategory(categories[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Service Categories */}
      <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        {/* Title */}
        <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-white/10">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">
            Service Categories
          </h3>
        </div>

        {/* Categories List */}
        <div className="p-2">
          {allServiceCategories.map((category) => {
            const isActive = activeCategory === category.id;
            const isExpanded = expandedCategory === category.id;

            return (
              <div key={category.id} className="mb-1">
                {/* Category Button */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-xl sm:text-2xl flex-shrink-0">{category.icon}</span>
                    <span
                      className={`text-sm sm:text-base font-semibold truncate transition-colors ${
                        isActive
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {category.title}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90' : ''
                    } ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Expanded Services List */}
                {isExpanded && (
                  <div className="mt-2 space-y-2 pl-4">
                    {category.services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleServiceClick(service.name)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 text-left group"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex-1">
                          {service.name}
                        </span>
                        <svg 
                          className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
          Service Overview
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Total Categories</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {allServiceCategories.length}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Total Services</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {allServiceCategories.reduce((sum, cat) => sum + cat.services.length, 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Links
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          <li>
            <a
              href="#top"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

