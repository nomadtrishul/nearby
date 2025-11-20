'use client';

import { useEffect } from 'react';
import BusinessCard from './BusinessCard';

export interface Business {
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

interface BusinessCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  businesses: Business[];
}

export default function BusinessCardsModal({
  isOpen,
  onClose,
  serviceName,
  businesses,
}: BusinessCardsModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {serviceName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {businesses.length} {businesses.length === 1 ? 'business' : 'businesses'} found
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
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
                We're working on adding more service providers. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

