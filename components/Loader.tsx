'use client';

import React from 'react';

interface LoaderProps {
  isLoading: boolean;
  message?: string;
  petType?: 'dog' | 'cat' | 'both';
  size?: 'small' | 'medium' | 'large';
}

export default function Loader({ 
  isLoading, 
  message = 'Our AI Model is Calculating', 
  petType = 'both',
  size = 'medium'
}: LoaderProps) {
  if (!isLoading) return null;

  const getPetIcons = () => {
    const icons = [];
    if (petType === 'dog' || petType === 'both') {
      icons.push('🐕', '🐕‍🦺');
    }
    if (petType === 'cat' || petType === 'both') {
      icons.push('🐈', '🐈‍⬛');
    }
    if (petType === 'both') {
      icons.push('🐾', '🦴', '🐟');
    }
    return icons;
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-12 h-12 text-2xl';
      case 'large':
        return 'w-20 h-20 text-4xl';
      default:
        return 'w-16 h-16 text-3xl';
    }
  };

  const petIcons = getPetIcons();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all">
        {/* Main Pet Icon */}
        <div className="flex justify-center mb-6">
          <div className={`rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center ${getSizeClasses()} animate-bounce`}>
            <span className="animate-pulse">
              {petType === 'dog' ? '🐕' : petType === 'cat' ? '🐈' : '🐾'}
            </span>
          </div>
        </div>

        {/* Animated Pet Icons */}
        <div className="flex justify-center space-x-3 mb-6">
          {petIcons.map((icon, index) => (
            <div
              key={index}
              className="animate-pulse"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="text-2xl">{icon}</span>
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {message}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Creating your personalized plan...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full animate-pulse transition-all duration-1000 ease-out"
              style={{ 
                width: '70%',
                animation: 'progressPulse 2s ease-in-out infinite'
              }}
            ></div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progressPulse {
          0%, 100% { width: 30%; }
          50% { width: 90%; }
        }
      `}</style>
    </div>
  );
}
