'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function ToolsClient() {
  const tools = [
    {
      title: 'Pet Weight Calculator',
      description: 'Calculate your pet\'s ideal weight range, body condition score, and BMI. Get breed-specific recommendations and track weight goals over time.',
      href: '/tools/weight-calculator',
      icon: '⚖️',
      category: 'Health & Wellness',
      featured: true,
    },
    {
      title: 'Feeding Portion Calculator',
      description: 'Calculate precise portion sizes with meal planning, treat allowances, and food comparison. Get personalized feeding schedules based on multiple factors.',
      href: '/tools/feeding-portion-calculator',
      icon: '🍽️',
      category: 'Nutrition',
      featured: true,
    },
    {
      title: 'Breed Selector',
      description: 'Find the perfect pet breed with advanced matching algorithm. Compare breeds side-by-side and get detailed breed information.',
      href: '/tools/breed-selector',
      icon: '🐾',
      category: 'Adoption',
      featured: true,
    },
    {
      title: 'Vaccine Reminder',
      description: 'Set up personalized vaccine reminders with calendar export, multiple pets support, and automatic scheduling based on your pet\'s age and location.',
      href: '/tools/vaccine-reminder',
      icon: '💉',
      category: 'Health & Wellness',
      featured: true,
    },
    {
      title: 'Pet Age Calculator',
      description: 'Convert your pet\'s age to human years with breed-specific calculations. Understand life stages and get age-appropriate care recommendations.',
      href: '/tools/age-calculator',
      icon: '🎂',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Exercise Calculator',
      description: 'Calculate daily exercise needs based on breed, age, and activity level. Get personalized exercise plans and activity recommendations.',
      href: '/tools/exercise-calculator',
      icon: '🏃',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Pet Cost Calculator',
      description: 'Estimate the total cost of pet ownership including food, veterinary care, grooming, insurance, and supplies. Plan your budget effectively.',
      href: '/tools/cost-calculator',
      icon: '💰',
      category: 'Planning',
      featured: false,
    },
    {
      title: 'Calorie Calculator',
      description: 'Calculate daily calorie needs with detailed breakdown by activity level, life stage, and health conditions. Track calorie intake and goals.',
      href: '/tools/calorie-calculator',
      icon: '🔥',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Dog Food Serving Size Calculator',
      description: 'Calculate the perfect serving size for your dog based on weight, age, activity level, and food type.',
      href: '/tools/dog-food-serving-size-calculator',
      icon: '🐕',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Cat Food Serving Size Calculator',
      description: 'Calculate the perfect serving size for your cat based on weight, age, activity level, and food type.',
      href: '/tools/cat-food-serving-size-calculator',
      icon: '🐱',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Puppy Feeding Schedule Generator',
      description: 'Generate a personalized feeding schedule for your puppy based on age, breed size, and weight.',
      href: '/tools/puppy-feeding-schedule-generator',
      icon: '🐶',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Kitten Feeding Schedule Generator',
      description: 'Generate a personalized feeding schedule for your kitten based on age and weight.',
      href: '/tools/kitten-feeding-schedule-generator',
      icon: '🐈',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Wet vs Dry Food Comparison',
      description: 'Compare wet and dry food options based on cost, nutrition, and suitability for your pet.',
      href: '/tools/wet-vs-dry-food-comparison',
      icon: '⚖️',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Pet Treat Calorie Counter',
      description: 'Track treat calories and ensure they stay within the recommended 10% of daily calorie intake.',
      href: '/tools/pet-treat-calorie-counter',
      icon: '🍪',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Toxic Foods Checker',
      description: 'Check if a food is toxic to your pet and learn about symptoms and emergency actions.',
      href: '/tools/toxic-foods-checker',
      icon: '⚠️',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Safe Human Foods Checker',
      description: 'Check which human foods are safe to share with your pet and learn proper serving sizes.',
      href: '/tools/safe-human-foods-checker',
      icon: '✅',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Pet Hydration Calculator',
      description: 'Calculate your pet\'s daily water needs based on weight, activity level, and environment.',
      href: '/tools/pet-hydration-calculator',
      icon: '💧',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Raw Diet Quantity Planner',
      description: 'Calculate the proper quantities for a raw diet based on your pet\'s needs.',
      href: '/tools/raw-diet-quantity-planner',
      icon: '🥩',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Feeding Cost Calculator',
      description: 'Calculate the cost of feeding your pet based on food type, price, and your pet\'s needs.',
      href: '/tools/feeding-cost-calculator',
      icon: '💰',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Multi-Pet Feeding Planner',
      description: 'Plan feeding schedules for multiple pets at once.',
      href: '/tools/multi-pet-feeding-planner',
      icon: '👥',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Symptom Checker',
      description: 'Select your pet\'s symptoms to get information and guidance. This tool is for informational purposes only.',
      href: '/tools/symptom-checker',
      icon: '🏥',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Parasite Risk Assessment',
      description: 'Assess your pet\'s risk for common parasites and get prevention recommendations.',
      href: '/tools/parasite-risk-assessment',
      icon: '🪱',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Vaccination Schedule Generator',
      description: 'Generate a complete vaccination schedule for your pet from birth to adulthood.',
      href: '/tools/vaccination-schedule-generator',
      icon: '💉',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Deworming Reminder',
      description: 'Calculate when your pet\'s next deworming is due and view recommended schedules.',
      href: '/tools/deworming-reminder',
      icon: '📅',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Flea/Tick Prevention Planner',
      description: 'Create a year-round prevention plan for fleas and ticks based on your pet\'s lifestyle and location.',
      href: '/tools/flea-tick-prevention-planner',
      icon: '🦟',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Pet BMI / Body Condition Score',
      description: 'Assess your pet\'s body condition using the 9-point scale.',
      href: '/tools/pet-bmi-body-condition-score',
      icon: '📊',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Homemade Food Nutrition Analyzer',
      description: 'Analyze the nutritional content of homemade pet food recipes.',
      href: '/tools/homemade-food-nutrition-analyzer',
      icon: '🥘',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Senior Pet Diet Planner',
      description: 'Create a personalized diet plan for your senior pet based on age, weight, and health conditions.',
      href: '/tools/senior-pet-diet-planner',
      icon: '👴',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Weight-Based Feeding Chart Maker',
      description: 'Generate a feeding chart based on weight ranges for easy reference.',
      href: '/tools/weight-based-feeding-chart-maker',
      icon: '📋',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Diet Transition Timeline Tool',
      description: 'Create a step-by-step timeline for transitioning your pet to a new food.',
      href: '/tools/diet-transition-timeline-tool',
      icon: '🔄',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Nutrient-Deficiency Checker',
      description: 'Identify potential nutrient deficiencies based on your pet\'s symptoms.',
      href: '/tools/nutrient-deficiency-checker',
      icon: '🔍',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Vitamin & Supplement Suggestion Tool',
      description: 'Get personalized supplement recommendations based on your pet\'s needs.',
      href: '/tools/vitamin-supplement-suggestion-tool',
      icon: '💊',
      category: 'Nutrition',
      featured: false,
    },
    {
      title: 'Ideal Weight Checker',
      description: 'Determine if your pet is at their ideal weight based on breed and body condition.',
      href: '/tools/ideal-weight-checker',
      icon: '⚖️',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Pregnancy Due Date Calculator',
      description: 'Calculate your pet\'s pregnancy due date and track development timeline.',
      href: '/tools/pregnancy-due-date-calculator',
      icon: '🤰',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Heat Cycle Tracker',
      description: 'Track your pet\'s heat cycle and predict the next cycle.',
      href: '/tools/heat-cycle-tracker',
      icon: '📅',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Medication Dosage Estimator',
      description: 'Estimate medication dosage based on weight. This tool is for informational purposes only.',
      href: '/tools/medication-dosage-estimator',
      icon: '💉',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Skin Allergy Checker',
      description: 'Identify potential skin allergies based on your pet\'s symptoms.',
      href: '/tools/skin-allergy-checker',
      icon: '🔬',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Dental Health Score Tool',
      description: 'Assess your pet\'s dental health using a simple scoring system.',
      href: '/tools/dental-health-score-tool',
      icon: '🦷',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Rabies Exposure Checker',
      description: 'Get guidance on what to do if your pet may have been exposed to rabies. Informational only.',
      href: '/tools/rabies-exposure-checker',
      icon: '⚠️',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'First-Aid Kit Checklist Generator',
      description: 'Generate a comprehensive checklist for your pet\'s first aid kit.',
      href: '/tools/first-aid-kit-checklist-generator',
      icon: '🩹',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Chronic Disease Management Planner',
      description: 'Create a comprehensive management plan for pets with chronic health conditions.',
      href: '/tools/chronic-disease-management-planner',
      icon: '📋',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Pet Insurance Cost Estimator',
      description: 'Estimate the cost of pet insurance based on your pet\'s characteristics.',
      href: '/tools/pet-insurance-cost-estimator',
      icon: '💰',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Emergency Symptoms Checker',
      description: 'Identify emergency symptoms that require immediate veterinary attention.',
      href: '/tools/emergency-symptoms-checker',
      icon: '🚨',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Senior Health Checklist Generator',
      description: 'Generate a comprehensive health checklist for your senior pet.',
      href: '/tools/senior-health-checklist-generator',
      icon: '📝',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Multivitamin Needs Analyzer',
      description: 'Determine if your pet needs multivitamins or specific vitamin supplements.',
      href: '/tools/multivitamin-needs-analyzer',
      icon: '💊',
      category: 'Health & Wellness',
      featured: false,
    },
    {
      title: 'Grooming Schedule Generator',
      description: 'Create a personalized grooming schedule based on your pet\'s coat type and lifestyle.',
      href: '/tools/grooming-schedule-generator',
      icon: '✂️',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Coat Type Identification Tool',
      description: 'Identify your pet\'s coat type based on characteristics to get personalized grooming recommendations.',
      href: '/tools/coat-type-identification-tool',
      icon: '🪶',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Best Shampoo Selector',
      description: 'Find the best shampoo for your pet based on coat type, skin condition, and age.',
      href: '/tools/best-shampoo-selector',
      icon: '🧴',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Bath Frequency Calculator',
      description: 'Calculate the ideal bathing frequency for your pet based on multiple factors.',
      href: '/tools/bath-frequency-calculator',
      icon: '🛁',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Nail Length Checker',
      description: 'Check if your pet\'s nails are at the ideal length based on measurement.',
      href: '/tools/nail-length-checker',
      icon: '💅',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Fur Shedding Level Checker',
      description: 'Assess your pet\'s shedding level and get personalized management recommendations.',
      href: '/tools/fur-shedding-level-checker',
      icon: '🧹',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Ear-Cleaning Reminder Tool',
      description: 'Track your pet\'s ear cleaning schedule and get personalized reminders.',
      href: '/tools/ear-cleaning-reminder-tool',
      icon: '👂',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Grooming Cost Estimator',
      description: 'Estimate grooming costs for your pet based on size, coat type, and location.',
      href: '/tools/grooming-cost-estimator',
      icon: '💵',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Pet Smell Diagnosis Tool',
      description: 'Identify potential causes of unpleasant odors in your pet.',
      href: '/tools/pet-smell-diagnosis-tool',
      icon: '👃',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Grooming Tools Recommender',
      description: 'Get personalized grooming tool recommendations based on your pet\'s coat type and grooming needs.',
      href: '/tools/grooming-tools-recommender',
      icon: '🛠️',
      category: 'Grooming & Hygiene',
      featured: false,
    },
    {
      title: 'Behavior Problem Diagnosis Tool',
      description: 'Identify potential causes of behavior problems in your pet and get guidance on solutions.',
      href: '/tools/behavior-problem-diagnosis-tool',
      icon: '🔍',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Puppy Potty Training Schedule Generator',
      description: 'Create a personalized potty training schedule for your puppy based on age and daily routine.',
      href: '/tools/puppy-potty-training-schedule-generator',
      icon: '🚽',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Barking Reason Analyzer',
      description: 'Identify why your dog is barking and get targeted solutions.',
      href: '/tools/barking-reason-analyzer',
      icon: '🐕',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Separation Anxiety Risk Checker',
      description: 'Assess your pet\'s risk for separation anxiety and get prevention and treatment recommendations.',
      href: '/tools/separation-anxiety-risk-checker',
      icon: '😰',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Activity/Exercise Level Planner',
      description: 'Create a personalized exercise and activity plan for your pet based on breed, age, and current activity level.',
      href: '/tools/activity-exercise-level-planner',
      icon: '🏃',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Training Progress Tracker',
      description: 'Track your pet\'s training progress and get personalized recommendations.',
      href: '/tools/training-progress-tracker',
      icon: '📊',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Obedience Level Assessment Tool',
      description: 'Assess your pet\'s current obedience level and get personalized training recommendations.',
      href: '/tools/obedience-level-assessment-tool',
      icon: '✅',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Aggression Type Checker',
      description: 'Identify the type of aggression your pet is displaying and get targeted solutions.',
      href: '/tools/aggression-type-checker',
      icon: '⚠️',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Socialization Readiness Test',
      description: 'Assess if your pet is ready for socialization activities.',
      href: '/tools/socialization-readiness-test',
      icon: '👥',
      category: 'Training & Behavior',
      featured: false,
    },
    {
      title: 'Intelligence & Play Style Test',
      description: 'Discover your pet\'s intelligence level and preferred play style to provide appropriate activities.',
      href: '/tools/intelligence-play-style-test',
      icon: '🧠',
      category: 'Training & Behavior',
      featured: false,
    },
  ];

  const categories = ['All', 'Health & Wellness', 'Nutrition', 'Adoption', 'Planning', 'Grooming & Hygiene', 'Training & Behavior'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🛠️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Advanced Pet Care Tools</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Care Tools & Calculators
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Free advanced tools and calculators to help you provide the best care for your pets. From weight management to cost planning, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* All Tools with Categories */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            All Tools
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="group p-6 sm:p-8 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <div className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium mb-3 transition-colors">
                  {tool.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors">
                  {tool.description}
                </p>
                <div className="flex items-center text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                  Use Tool
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              About Our Tools
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 transition-colors leading-relaxed">
              Our advanced pet care tools are designed to provide accurate estimates and helpful guidance for pet owners. All calculations are based on widely accepted veterinary formulas and pet care best practices. These tools are regularly updated to reflect the latest research and recommendations.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 transition-colors leading-relaxed">
              <strong>Important:</strong> These tools are designed to provide general guidance and estimates. They are not a substitute for professional veterinary advice. Always consult with your veterinarian for personalized recommendations, especially for pets with health conditions, weight management needs, or specific dietary requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Contact a Veterinarian
              </Link>
              <Link
                href="/pet-health"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                Learn More About Pet Health
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

