'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function BathFrequencyCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [coatType, setCoatType] = useState<string>('short');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [skinCondition, setSkinCondition] = useState<string>('normal');
  const [result, setResult] = useState<{
    frequency: string;
    range: string;
    factors: Array<{ factor: string; impact: string }>;
    recommendations: string[];
  } | null>(null);

  const calculateFrequency = () => {
    let baseFrequency = 6; // weeks
    const factors: Array<{ factor: string; impact: string }> = [];
    const recommendations: string[] = [];

    // Coat type factor
    if (coatType === 'short' || coatType === 'smooth') {
      baseFrequency = 8;
      factors.push({ factor: 'Coat Type', impact: 'Short coats need less frequent bathing (every 6-8 weeks)' });
    } else if (coatType === 'medium') {
      baseFrequency = 6;
      factors.push({ factor: 'Coat Type', impact: 'Medium coats need moderate bathing (every 4-6 weeks)' });
    } else if (coatType === 'long' || coatType === 'double') {
      baseFrequency = 4;
      factors.push({ factor: 'Coat Type', impact: 'Long/double coats need more frequent bathing (every 3-4 weeks)' });
    } else if (coatType === 'curly') {
      baseFrequency = 5;
      factors.push({ factor: 'Coat Type', impact: 'Curly coats need regular bathing (every 4-6 weeks)' });
    }

    // Lifestyle factor
    if (lifestyle === 'outdoor') {
      baseFrequency -= 2;
      factors.push({ factor: 'Lifestyle', impact: 'Outdoor pets get dirtier and need more frequent bathing' });
    } else if (lifestyle === 'indoor') {
      factors.push({ factor: 'Lifestyle', impact: 'Indoor pets stay cleaner and need less frequent bathing' });
    }

    // Activity level
    if (activityLevel === 'high') {
      baseFrequency -= 1;
      factors.push({ factor: 'Activity Level', impact: 'Highly active pets may need more frequent bathing' });
    } else if (activityLevel === 'low') {
      baseFrequency += 1;
      factors.push({ factor: 'Activity Level', impact: 'Less active pets need less frequent bathing' });
    }

    // Skin condition
    if (skinCondition === 'oily') {
      baseFrequency -= 1;
      factors.push({ factor: 'Skin Condition', impact: 'Oily skin may need more frequent bathing' });
    } else if (skinCondition === 'dry' || skinCondition === 'sensitive') {
      baseFrequency += 2;
      factors.push({ factor: 'Skin Condition', impact: 'Dry or sensitive skin needs less frequent bathing to preserve natural oils' });
    } else if (skinCondition === 'skin-condition') {
      factors.push({ factor: 'Skin Condition', impact: 'Follow veterinarian\'s recommendations for bathing frequency' });
    }

    // Ensure minimum and maximum
    if (baseFrequency < 2) baseFrequency = 2;
    if (baseFrequency > 12) baseFrequency = 12;

    const minFrequency = Math.max(2, baseFrequency - 2);
    const maxFrequency = Math.min(12, baseFrequency + 2);

    let frequency = '';
    if (baseFrequency <= 3) {
      frequency = 'Every 2-4 weeks';
    } else if (baseFrequency <= 5) {
      frequency = 'Every 4-6 weeks';
    } else if (baseFrequency <= 7) {
      frequency = 'Every 6-8 weeks';
    } else {
      frequency = 'Every 8-12 weeks';
    }

    const range = `Every ${minFrequency}-${maxFrequency} weeks`;

    recommendations.push(`Recommended bathing frequency: ${frequency}`);
    recommendations.push('Bathe when your pet is dirty, smelly, or has rolled in something');
    recommendations.push('Use pet-specific, pH-balanced shampoo');
    recommendations.push('Rinse thoroughly to prevent skin irritation');
    recommendations.push('Avoid over-bathing, which can strip natural oils and cause dry skin');
    
    if (skinCondition === 'dry' || skinCondition === 'sensitive') {
      recommendations.push('For dry or sensitive skin, use moisturizing shampoos and bathe less frequently');
    }

    if (lifestyle === 'outdoor') {
      recommendations.push('Outdoor pets may need spot cleaning between full baths');
    }

    setResult({ frequency, range, factors, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Bath Frequency Calculator', href: '/tools/bath-frequency-calculator' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Bath Frequency Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Calculate the ideal bathing frequency for your pet based on multiple factors
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

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Activity Level
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skin Condition
                </label>
                <select
                  value={skinCondition}
                  onChange={(e) => setSkinCondition(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="normal">Normal</option>
                  <option value="dry">Dry</option>
                  <option value="oily">Oily</option>
                  <option value="sensitive">Sensitive</option>
                  <option value="skin-condition">Skin Condition (follow vet advice)</option>
                </select>
              </div>

              <button
                onClick={calculateFrequency}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Bath Frequency
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bathing Frequency Recommendation</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Recommended Frequency</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{result.frequency}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Range: {result.range}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Factors Considered:</h3>
                <div className="space-y-2">
                  {result.factors.map((factor, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{factor.factor}:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 text-right">{factor.impact}</span>
                    </div>
                  ))}
                </div>
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
              <strong>Note:</strong> This calculator provides general guidelines. Adjust based on your pet's individual needs. Bathe when your pet is dirty or smelly, and avoid over-bathing which can cause dry skin. For pets with skin conditions, follow your veterinarian's specific recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

