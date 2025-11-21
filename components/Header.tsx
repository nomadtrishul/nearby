'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && !ref.contains(event.target as Node)) {
          // Check if the click is on a link - if so, don't close immediately
          const target = event.target as HTMLElement;
          if (target.closest('a')) {
            return;
          }
          setOpenDropdown(null);
        }
      });
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 md:pt-6">
        <nav className="mx-auto max-w-[1200px] bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl shadow-lg transition-colors">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-7 w-auto sm:h-8 md:h-9">
              <Image
                src="/logo.png"
                alt="Nearby Pet Care Logo"
                width={200}
                height={48}
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                priority
                sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {/* Care Dropdown */}
            <div 
              className="relative"
              ref={(el) => (dropdownRefs.current['care'] = el)}
            >
              <button
                onClick={() => toggleDropdown('care')}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group flex items-center"
              >
                Care
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${openDropdown === 'care' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              {openDropdown === 'care' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    href="/pet-health" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Health
                  </Link>
                  <Link 
                    href="/pet-nutrition" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Nutrition
                  </Link>
                  <Link 
                    href="/pet-grooming" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Grooming
                  </Link>
                  <Link 
                    href="/pet-training" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Training
                  </Link>
                  <Link 
                    href="/pet-safety" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Safety
                  </Link>
                </div>
              )}
            </div>

            {/* Tools - Direct Link */}
            <Link 
              href="/tools" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
            >
              Tools
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Guide Dropdown */}
            <div 
              className="relative"
              ref={(el) => (dropdownRefs.current['guide'] = el)}
            >
              <button
                onClick={() => toggleDropdown('guide')}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group flex items-center"
              >
                Guide
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${openDropdown === 'guide' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              {openDropdown === 'guide' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    href="/pet-breeds" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Breeds
                  </Link>
                  <Link 
                    href="/puppies-kittens" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Puppies & Kittens
                  </Link>
                  <Link 
                    href="/senior-pets" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Senior Pets
                  </Link>
                  <Link 
                    href="/pet-adoption" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Adoption
                  </Link>
                  <Link 
                    href="/pet-products" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Pet Products
                  </Link>
                  <Link 
                    href="/buying-guides" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Buying Guides
                  </Link>
                  <Link 
                    href="/comparisons" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Comparisons
                  </Link>
                </div>
              )}
            </div>

            {/* Quick Links Dropdown */}
            <div 
              className="relative"
              ref={(el) => (dropdownRefs.current['quickLinks'] = el)}
            >
              <button
                onClick={() => toggleDropdown('quickLinks')}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group flex items-center"
              >
                Quick Links
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${openDropdown === 'quickLinks' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              {openDropdown === 'quickLinks' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    href="/" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/tools" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Tools
                  </Link>
                  <Link 
                    href="/about" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            {/* Tips - Direct Link */}
            <Link 
              href="/pet-care-tips" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
            >
              Tips
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 dark:text-white p-2"
              aria-label="Toggle menu"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top">
            {/* Care Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('care-mobile')}
                className="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                <span>Care</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${openDropdown === 'care-mobile' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'care-mobile' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link 
                    href="/pet-health" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Health
                  </Link>
                  <Link 
                    href="/pet-nutrition" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Nutrition
                  </Link>
                  <Link 
                    href="/pet-grooming" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Grooming
                  </Link>
                  <Link 
                    href="/pet-training" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Training
                  </Link>
                  <Link 
                    href="/pet-safety" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Safety
                  </Link>
                </div>
              )}
            </div>

            {/* Tools */}
            <Link 
              href="/tools" 
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>

            {/* Guide Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('guide-mobile')}
                className="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                <span>Guide</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${openDropdown === 'guide-mobile' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'guide-mobile' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link 
                    href="/pet-breeds" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Breeds
                  </Link>
                  <Link 
                    href="/puppies-kittens" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Puppies & Kittens
                  </Link>
                  <Link 
                    href="/senior-pets" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Senior Pets
                  </Link>
                  <Link 
                    href="/pet-adoption" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Adoption
                  </Link>
                  <Link 
                    href="/pet-products" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Pet Products
                  </Link>
                  <Link 
                    href="/buying-guides" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Buying Guides
                  </Link>
                  <Link 
                    href="/comparisons" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Comparisons
                  </Link>
                </div>
              )}
            </div>

            {/* Quick Links Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('quickLinks-mobile')}
                className="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                <span>Quick Links</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${openDropdown === 'quickLinks-mobile' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'quickLinks-mobile' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link 
                    href="/" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/tools" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Tools
                  </Link>
                  <Link 
                    href="/about" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      closeDropdown();
                    }}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            {/* Tips */}
            <Link 
              href="/pet-care-tips" 
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tips
            </Link>
          </div>
        )}
          </div>
        </nav>
      </div>
    </header>
  );
}

