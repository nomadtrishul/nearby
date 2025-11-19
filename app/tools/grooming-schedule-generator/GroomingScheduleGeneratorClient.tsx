'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function GroomingScheduleGeneratorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [coatType, setCoatType] = useState<string>('short');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [result, setResult] = useState<{
    schedule: Array<{ task: string; frequency: string; notes: string }>;
    recommendations: string[];
  } | null>(null);

  const generateSchedule = () => {
    const schedule: Array<{ task: string; frequency: string; notes: string }> = [];
    const recommendations: string[] = [];

    // Bathing frequency
    if (coatType === 'short' || coatType === 'smooth') {
      schedule.push({
        task: 'Bathing',
        frequency: 'Every 4-8 weeks',
        notes: 'Short coats need less frequent bathing. Bathe when dirty or smelly.'
      });
    } else if (coatType === 'medium') {
      schedule.push({
        task: 'Bathing',
        frequency: 'Every 4-6 weeks',
        notes: 'Regular bathing helps maintain coat health and reduce shedding.'
      });
    } else if (coatType === 'long' || coatType === 'double') {
      schedule.push({
        task: 'Bathing',
        frequency: 'Every 3-4 weeks',
        notes: 'Long/double coats need more frequent bathing to prevent matting and maintain coat health.'
      });
    } else if (coatType === 'curly' || coatType === 'wiry') {
      schedule.push({
        task: 'Bathing',
        frequency: 'Every 4-6 weeks',
        notes: 'Use appropriate shampoo for coat type. Professional grooming may be needed.'
      });
    }

    // Brushing frequency
    if (coatType === 'short' || coatType === 'smooth') {
      schedule.push({
        task: 'Brushing',
        frequency: 'Weekly',
        notes: 'Use a soft brush or grooming mitt. Helps remove loose hair and distribute natural oils.'
      });
    } else if (coatType === 'medium') {
      schedule.push({
        task: 'Brushing',
        frequency: '2-3 times per week',
        notes: 'Use a slicker brush or comb. Prevents matting and reduces shedding.'
      });
    } else if (coatType === 'long' || coatType === 'double') {
      schedule.push({
        task: 'Brushing',
        frequency: 'Daily',
        notes: 'Essential for long coats. Use a slicker brush and comb. Prevents painful matting.'
      });
    } else if (coatType === 'curly') {
      schedule.push({
        task: 'Brushing',
        frequency: 'Every 1-2 days',
        notes: 'Use a pin brush or comb. Curly coats mat easily and need regular attention.'
      });
    } else if (coatType === 'wiry') {
      schedule.push({
        task: 'Brushing',
        frequency: '2-3 times per week',
        notes: 'Use a slicker brush. May need hand-stripping for show dogs.'
      });
    }

    // Nail trimming
    schedule.push({
      task: 'Nail Trimming',
      frequency: 'Every 2-4 weeks',
      notes: 'Trim when nails touch the ground. More frequent if pet is less active.'
    });

    // Ear cleaning
    schedule.push({
      task: 'Ear Cleaning',
      frequency: 'Weekly to monthly',
      notes: 'Check ears weekly. Clean when dirty or waxy. More frequent for floppy-eared dogs or pets with ear issues.'
    });

    // Dental care
    schedule.push({
      task: 'Teeth Brushing',
      frequency: 'Daily (ideal) or 3-4 times per week',
      notes: 'Daily brushing is best for dental health. Use pet-specific toothpaste.'
    });

    // Professional grooming
    if (coatType === 'long' || coatType === 'double' || coatType === 'curly') {
      schedule.push({
        task: 'Professional Grooming',
        frequency: 'Every 4-8 weeks',
        notes: 'Professional groomers can handle difficult coats, trimming, and styling.'
      });
    } else {
      schedule.push({
        task: 'Professional Grooming',
        frequency: 'Every 8-12 weeks (optional)',
        notes: 'Even short-coated pets benefit from occasional professional grooming for nail trimming and thorough cleaning.'
      });
    }

    // Lifestyle adjustments
    if (lifestyle === 'outdoor') {
      recommendations.push('Outdoor pets may need more frequent bathing due to dirt and outdoor exposure');
      recommendations.push('Check for ticks and debris after outdoor activities');
    }

    recommendations.push('Adjust schedule based on your pet\'s individual needs and activity level');
    recommendations.push('Start grooming routines early to get pets comfortable with the process');
    recommendations.push('Use positive reinforcement and treats during grooming');
    recommendations.push('Watch for signs of skin irritation or discomfort');

    setResult({ schedule, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Grooming Schedule Generator', href: '/tools/grooming-schedule-generator' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Grooming Schedule Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Create a personalized grooming schedule based on your pet's coat type and lifestyle
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pet Type
                </label>
                <select
                  value={petType}
                  onChange={(e) => setPetType(e.target.value as 'dog' | 'cat')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coat Type
                </label>
                <select
                  value={coatType}
                  onChange={(e) => setCoatType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="short">Short/Smooth</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                  <option value="double">Double Coat</option>
                  <option value="curly">Curly</option>
                  <option value="wiry">Wiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Lifestyle
                </label>
                <select
                  value={lifestyle}
                  onChange={(e) => setLifestyle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="indoor">Primarily Indoor</option>
                  <option value="mixed">Indoor/Outdoor</option>
                  <option value="outdoor">Primarily Outdoor</option>
                </select>
              </div>

              <button
                onClick={generateSchedule}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Grooming Schedule
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Grooming Schedule</h2>
              
              <div className="space-y-4 mb-6">
                {result.schedule.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.task}</h3>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.frequency}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.notes}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This schedule provides general guidelines. Adjust based on your pet's individual needs, activity level, and any skin or coat conditions. Consult your veterinarian or professional groomer for specific recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

