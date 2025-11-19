'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function FleaTickPreventionPlannerPage() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [geographicArea, setGeographicArea] = useState<string>('urban');
  const [result, setResult] = useState<{
    preventionType: string;
    schedule: Array<{ month: string; action: string; notes: string }>;
    products: Array<{ type: string; description: string; frequency: string }>;
    recommendations: string[];
  } | null>(null);

  const generatePlan = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const schedule: Array<{ month: string; action: string; notes: string }> = [];
    const products: Array<{ type: string; description: string; frequency: string }> = [];
    const recommendations: string[] = [];

    // Determine prevention type based on risk
    let preventionType = 'Year-Round';
    if (lifestyle === 'outdoor' || geographicArea === 'rural') {
      preventionType = 'Year-Round (High Risk)';
    } else if (lifestyle === 'indoor' && geographicArea === 'urban') {
      preventionType = 'Seasonal (Spring-Fall)';
    }

    // Generate monthly schedule
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    months.forEach((month, index) => {
      const monthNum = index + 1;
      let action = '';
      let notes = '';

      if (preventionType.includes('Year-Round')) {
        action = 'Apply flea/tick prevention';
        notes = 'Continue year-round protection';
      } else {
        // Seasonal (typically March-October)
        if (monthNum >= 3 && monthNum <= 10) {
          action = 'Apply flea/tick prevention';
          notes = 'Active flea/tick season';
        } else {
          action = 'Monitor for fleas/ticks';
          notes = 'Lower risk season, but continue monitoring';
        }
      }

      schedule.push({ month, action, notes });
    });

    // Product recommendations
    if (petType === 'dog') {
      products.push({
        type: 'Topical (Spot-on)',
        description: 'Applied to skin between shoulder blades monthly',
        frequency: 'Monthly'
      });
      products.push({
        type: 'Oral Chewable',
        description: 'Given by mouth, kills fleas and ticks',
        frequency: 'Monthly'
      });
      products.push({
        type: 'Collar',
        description: 'Worn around neck, provides continuous protection',
        frequency: 'Lasts 6-8 months'
      });
    } else {
      products.push({
        type: 'Topical (Spot-on)',
        description: 'Applied to skin between shoulder blades monthly',
        frequency: 'Monthly'
      });
      products.push({
        type: 'Oral Tablet',
        description: 'Given by mouth, kills fleas',
        frequency: 'Monthly'
      });
      products.push({
        type: 'Collar',
        description: 'Worn around neck, provides continuous protection',
        frequency: 'Lasts 6-8 months'
      });
    }

    recommendations.push(`Recommended prevention: ${preventionType}`);
    recommendations.push('Always use products specifically labeled for your pet type (dog vs cat)');
    recommendations.push('Never use dog products on cats - can be fatal');
    recommendations.push('Check your pet regularly for fleas and ticks, especially after outdoor activities');
    recommendations.push('Treat your home and yard if infestation occurs');
    recommendations.push('Consult your veterinarian for the best product for your pet\'s weight and lifestyle');

    setResult({ preventionType, schedule, products, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Flea/Tick Prevention Planner', href: '/tools/flea-tick-prevention-planner' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Flea/Tick Prevention Planner
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Create a year-round prevention plan for fleas and ticks based on your pet's lifestyle and location
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
                  Pet Weight
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value as 'lbs' | 'kg')}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
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
                  Geographic Area
                </label>
                <select
                  value={geographicArea}
                  onChange={(e) => setGeographicArea(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural</option>
                </select>
              </div>

              <button
                onClick={generatePlan}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Prevention Plan
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Prevention Plan</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Recommended Prevention Type</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.preventionType}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Product Options:</h3>
                <div className="space-y-3">
                  {result.products.map((product, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{product.type}</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{product.frequency}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Monthly Schedule:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {result.schedule.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{item.month}</div>
                      <div className="text-xs text-gray-700 dark:text-gray-300 mb-1">{item.action}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 italic">{item.notes}</div>
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
              <strong>Warning:</strong> Never use dog flea/tick products on cats. Many dog products contain permethrin, which is highly toxic to cats and can be fatal. Always use products specifically labeled for your pet type.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

