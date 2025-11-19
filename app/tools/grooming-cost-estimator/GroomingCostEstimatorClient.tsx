'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function GroomingCostEstimatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [petSize, setPetSize] = useState<string>('medium');
  const [coatType, setCoatType] = useState<string>('medium');
  const [groomingType, setGroomingType] = useState<string>('full');
  const [frequency, setFrequency] = useState<string>('monthly');
  const [location, setLocation] = useState<string>('suburban');
  const [result, setResult] = useState<{
    costPerVisit: string;
    annualCost: string;
    breakdown: Array<{ service: string; cost: string }>;
    tips: string[];
  } | null>(null);

  const estimateCost = () => {
    let baseCost = 0;
    const breakdown: Array<{ service: string; cost: string }> = [];
    const tips: string[] = [];

    // Base cost by size
    if (petSize === 'small') {
      baseCost = 35;
    } else if (petSize === 'medium') {
      baseCost = 50;
    } else if (petSize === 'large') {
      baseCost = 65;
    } else if (petSize === 'xlarge') {
      baseCost = 80;
    }

    // Coat type adjustment
    if (coatType === 'short') {
      baseCost -= 5;
    } else if (coatType === 'long' || coatType === 'double') {
      baseCost += 10;
    } else if (coatType === 'curly' || coatType === 'matted') {
      baseCost += 15;
    }

    // Grooming type
    if (groomingType === 'full') {
      breakdown.push({ service: 'Bath & Dry', cost: `$${(baseCost * 0.3).toFixed(0)}` });
      breakdown.push({ service: 'Haircut/Trim', cost: `$${(baseCost * 0.4).toFixed(0)}` });
      breakdown.push({ service: 'Nail Trim', cost: `$${(baseCost * 0.1).toFixed(0)}` });
      breakdown.push({ service: 'Ear Cleaning', cost: `$${(baseCost * 0.1).toFixed(0)}` });
      breakdown.push({ service: 'Brushing/Deshedding', cost: `$${(baseCost * 0.1).toFixed(0)}` });
    } else if (groomingType === 'bath-only') {
      baseCost = baseCost * 0.5;
      breakdown.push({ service: 'Bath & Dry', cost: `$${(baseCost * 0.6).toFixed(0)}` });
      breakdown.push({ service: 'Nail Trim', cost: `$${(baseCost * 0.2).toFixed(0)}` });
      breakdown.push({ service: 'Ear Cleaning', cost: `$${(baseCost * 0.2).toFixed(0)}` });
    } else if (groomingType === 'trim-only') {
      baseCost = baseCost * 0.6;
      breakdown.push({ service: 'Haircut/Trim', cost: `$${(baseCost * 0.7).toFixed(0)}` });
      breakdown.push({ service: 'Nail Trim', cost: `$${(baseCost * 0.15).toFixed(0)}` });
      breakdown.push({ service: 'Ear Cleaning', cost: `$${(baseCost * 0.15).toFixed(0)}` });
    }

    // Location adjustment
    if (location === 'urban') {
      baseCost = Math.round(baseCost * 1.2);
      tips.push('Urban areas typically have higher grooming costs');
    } else if (location === 'rural') {
      baseCost = Math.round(baseCost * 0.9);
      tips.push('Rural areas may have lower grooming costs');
    }

    // Additional services
    if (coatType === 'matted') {
      baseCost += 20;
      breakdown.push({ service: 'Demattng Fee', cost: '$20' });
    }

    const costPerVisit = `$${baseCost}-$${baseCost + 15}`;

    // Calculate annual cost
    let visitsPerYear = 0;
    if (frequency === 'weekly') visitsPerYear = 52;
    else if (frequency === 'bi-weekly') visitsPerYear = 26;
    else if (frequency === 'monthly') visitsPerYear = 12;
    else if (frequency === 'bi-monthly') visitsPerYear = 6;
    else if (frequency === 'quarterly') visitsPerYear = 4;

    const annualCostLow = baseCost * visitsPerYear;
    const annualCostHigh = (baseCost + 15) * visitsPerYear;
    const annualCost = `$${annualCostLow.toLocaleString()}-$${annualCostHigh.toLocaleString()}`;

    // Tips
    tips.push('Costs vary by location, groomer experience, and pet behavior');
    tips.push('Mobile groomers may charge 20-30% more but offer convenience');
    tips.push('Regular grooming (every 4-8 weeks) can prevent higher costs from matting');
    tips.push('Some groomers offer package deals for regular customers');
    tips.push('Tip your groomer 15-20% for good service');
    tips.push('Ask about add-on services and their costs upfront');
    tips.push('First-time visits may cost more due to extra time needed');
    tips.push('Pets with behavioral issues may incur additional fees');

    setResult({ costPerVisit, annualCost, breakdown, tips });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Grooming Cost Estimator', href: '/tools/grooming-cost-estimator' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Grooming Cost Estimator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Estimate grooming costs for your pet based on size, coat type, and location
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
                  Pet Size
                </label>
                <select
                  value={petSize}
                  onChange={(e) => setPetSize(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="small">Small (under 20 lbs)</option>
                  <option value="medium">Medium (20-50 lbs)</option>
                  <option value="large">Large (50-80 lbs)</option>
                  <option value="xlarge">Extra Large (80+ lbs)</option>
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
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                  <option value="double">Double Coat</option>
                  <option value="curly">Curly</option>
                  <option value="matted">Matted (requires dematting)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Grooming Type
                </label>
                <select
                  value={groomingType}
                  onChange={(e) => setGroomingType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="full">Full Grooming (bath, haircut, nails, ears)</option>
                  <option value="bath-only">Bath Only</option>
                  <option value="trim-only">Haircut/Trim Only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="bi-monthly">Every 2 Months</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location Type
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural</option>
                </select>
              </div>

              <button
                onClick={estimateCost}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Estimate Grooming Cost
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cost Estimate</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cost Per Visit</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">{result.costPerVisit}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Estimated Annual Cost</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{result.annualCost}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Service Breakdown:</h3>
                <div className="space-y-2">
                  {result.breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <span className="text-sm text-gray-900 dark:text-white">{item.service}:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Cost-Saving Tips:</h3>
                <ul className="space-y-2">
                  {result.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> These are estimated costs and may vary significantly based on your location, groomer experience, pet behavior, and specific services needed. Always get quotes from local groomers for accurate pricing. Prices are in USD and may vary by region.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

