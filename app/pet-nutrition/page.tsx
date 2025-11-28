import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';
import { 
  generateSEOMetadata,
  generateCollectionPageStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Nutrition Guide: Dogs & Cats',
  description: 'Comprehensive pet nutrition guide with expert advice on choosing food, understanding ingredients, feeding schedules, and diet planning.',
  keywords: ['pet nutrition', 'what to feed a dog', 'what to feed a cat', 'pet food guide', 'dog nutrition', 'cat nutrition', 'pet feeding schedule', 'pet food ingredients', 'pet diet plan', 'how much to feed a dog', 'how much to feed a cat', 'best pet food', 'AAFCO pet food', 'pet nutrition facts', 'pet diet planning'],
  pathname: '/pet-nutrition',
  type: 'website',
  author: 'Nearby Pet Care Team',
  locale: 'en-US',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Nutrition Guide - Complete Guide to Feeding Your Pet',
      type: 'image/png',
    },
  ],
  alternates: {
    languages: {
      'en-US': '/pet-nutrition',
      'en-GB': '/pet-nutrition',
      'en-CA': '/pet-nutrition',
      'en-AU': '/pet-nutrition',
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
});

export default function PetNutritionPage() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Define guides array first
  const guides = [
    {
      title: 'Pet Nutrition Diet Plan',
      description: 'Learn how to create a comprehensive nutrition plan tailored to your pet\'s specific needs, age, and lifestyle.',
      href: '/pet-nutrition/pet-nutrition-diet-plan',
      icon: '📋',
    },
    {
      title: 'Best Pet Food Ingredients Guide',
      description: 'Understand what ingredients to look for and avoid when choosing pet food for optimal health.',
      href: '/pet-nutrition/best-pet-food-ingredients-guide',
      icon: '🥘',
    },
    {
      title: 'Homemade Pet Food Recipes',
      description: 'Safe and nutritious homemade pet food recipes with proper nutritional guidelines.',
      href: '/pet-nutrition/homemade-pet-food-recipes-guide',
      icon: '👨‍🍳',
    },
    {
      title: 'Pet Food Allergies & Elimination Diet',
      description: 'Identify food allergies in pets and learn how to implement an elimination diet safely.',
      href: '/pet-nutrition/pet-food-allergies-elimination-diet',
      icon: '🚫',
    },
    {
      title: 'Feeding Portion Size Calculator',
      description: 'Calculate the right portion sizes for your pet based on weight, age, and activity level.',
      href: '/pet-nutrition/pet-feeding-portion-size-calculator',
      icon: '⚖️',
    },
    {
      title: 'Raw vs Cooked Pet Diet',
      description: 'Compare the pros and cons of raw and cooked diets for pets with science-backed information.',
      href: '/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons',
      icon: '🥩',
    },
    {
      title: 'Toxic Foods for Pets',
      description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets.',
      href: '/pet-nutrition/toxic-foods-for-pets-complete-list',
      icon: '⚠️',
    },
    {
      title: 'Best Pet Supplements Guide',
      description: 'Learn about essential supplements for pets including omega-3, probiotics, and vitamins.',
      href: '/pet-nutrition/best-pet-supplements-guide',
      icon: '💊',
    },
    {
      title: 'Wet vs Dry vs Fresh Food',
      description: 'Compare wet, dry, and fresh pet food options to determine what\'s best for your pet.',
      href: '/pet-nutrition/wet-vs-dry-vs-fresh-pet-food',
      icon: '🍽️',
    },
    {
      title: 'Pet Weight Management Guide',
      description: 'Comprehensive guide to managing your pet\'s weight and preventing obesity.',
      href: '/pet-nutrition/pet-weight-management-guide',
      icon: '⚖️',
    },
    {
      title: 'Pet Feeding Schedule Guide',
      description: 'Learn about ideal feeding schedules for dogs and cats at different life stages.',
      href: '/pet-nutrition/pet-feeding-schedule-guide',
      icon: '⏰',
    },
  ];
  
  const baseUrl = getBaseUrl();
  
  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Nutrition', url: '/pet-nutrition' },
  ];

  // Generate structured data using centralized utilities
  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Pet Nutrition & Diet',
    description: 'Comprehensive guides and resources for pet nutrition and diet planning. Expert advice on choosing pet food, understanding ingredients, feeding schedules, and creating healthy diet plans for dogs and cats.',
    url: '/pet-nutrition',
    numberOfItems: guides.length,
    items: guides.map((guide) => ({
      name: guide.title,
      url: guide.href,
    })),
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Nutrition & Diet',
    description: 'Comprehensive guides and resources for pet nutrition and diet planning. Expert advice on choosing pet food, understanding ingredients, feeding schedules, and creating healthy diet plans for dogs and cats.',
    url: '/pet-nutrition',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/CollectionPage">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(collectionPageStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Pet Nutrition', href: '/pet-nutrition' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🍽️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Nutrition & Diet</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🥘</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" itemProp="name">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Nutrition & Diet
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto" itemProp="description">
              Figuring out what to feed your pet can feel overwhelming with so many options. Whether you're choosing between wet and dry food, wondering how much to feed your dog, or trying to understand pet food ingredients, our guides make pet nutrition simple. Learn how to create a healthy feeding schedule, calculate the right portion sizes, and choose the best food for your pet's needs.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🥗</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Diet Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Feeding Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔬</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Ingredient Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="group p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col min-h-[200px] text-center"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {guide.description}
                </p>
                <div className="flex items-center justify-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                  Read Guide
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <NutritionSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Ready to Improve Your Pet's Nutrition?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              Explore our comprehensive pet nutrition guides to learn how to choose the right food, create feeding schedules, and ensure your pet gets the nutrition they need. Whether you're feeding a puppy, adult dog, or senior cat, we've got practical advice that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
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

