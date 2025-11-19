'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function WeightBasedFeedingChartMakerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [caloriesPerCup, setCaloriesPerCup] = useState<string>('350');
  const [result, setResult] = useState<{
    chart: Array<{ weightRange: string; dailyCalories: number; dailyCups: number; dailyGrams: number }>;
  } | null>(null);

  const generateChart = () => {
    const calories = parseFloat(caloriesPerCup);
    if (!calories || calories <= 0) {
      alert('Please enter valid calories per cup');
      return;
    }

    const chart: Array<{ weightRange: string; dailyCalories: number; dailyCups: number; dailyGrams: number }> = [];

    if (petType === 'dog') {
      // Dog weight ranges (in lbs)
      const weightRanges = [
        { min: 5, max: 10 },
        { min: 10, max: 20 },
        { min: 20, max: 30 },
        { min: 30, max: 50 },
        { min: 50, max: 70 },
        { min: 70, max: 90 },
        { min: 90, max: 110 },
        { min: 110, max: 150 },
      ];

      weightRanges.forEach(range => {
        const avgWeight = (range.min + range.max) / 2;
        const weightKg = avgWeight * 0.453592;
        const rer = 70 * Math.pow(weightKg, 0.75);
        const dailyCalories = Math.round(rer * 1.6);
        const dailyCups = dailyCalories / calories;
        const dailyGrams = dailyCups * 120;

        chart.push({
          weightRange: `${range.min}-${range.max} lbs`,
          dailyCalories,
          dailyCups: Math.round(dailyCups * 10) / 10,
          dailyGrams: Math.round(dailyGrams),
        });
      });
    } else {
      // Cat weight ranges (in lbs)
      const weightRanges = [
        { min: 5, max: 8 },
        { min: 8, max: 10 },
        { min: 10, max: 12 },
        { min: 12, max: 15 },
        { min: 15, max: 18 },
      ];

      weightRanges.forEach(range => {
        const avgWeight = (range.min + range.max) / 2;
        const weightKg = avgWeight * 0.453592;
        const rer = 70 * Math.pow(weightKg, 0.75);
        const dailyCalories = Math.round(rer * 1.2);
        const dailyCups = dailyCalories / calories;
        const dailyGrams = dailyCups * 120;

        chart.push({
          weightRange: `${range.min}-${range.max} lbs`,
          dailyCalories,
          dailyCups: Math.round(dailyCups * 10) / 10,
          dailyGrams: Math.round(dailyGrams),
        });
      });
    }

    setResult({ chart });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Weight-Based Feeding Chart Maker', href: '/tools/weight-based-feeding-chart-maker' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Weight-Based Feeding Chart Maker
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Generate a feeding chart based on weight ranges for easy reference
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
                  Calories per Cup (check food label)
                </label>
                <input
                  type="number"
                  value={caloriesPerCup}
                  onChange={(e) => setCaloriesPerCup(e.target.value)}
                  placeholder="e.g., 350"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={generateChart}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Feeding Chart
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Feeding Chart</h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Weight Range</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Daily Calories</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Daily Cups</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Daily Grams</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {result.chart.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{row.weightRange}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{row.dailyCalories} kcal</td>
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{row.dailyCups} cups</td>
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{row.dailyGrams}g</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> This chart is based on average maintenance calories. Individual pets may need adjustments based on activity level, age, and health status. Divide daily amount into 2-3 meals.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This chart provides general guidelines. Always consult with your veterinarian for personalized feeding recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

