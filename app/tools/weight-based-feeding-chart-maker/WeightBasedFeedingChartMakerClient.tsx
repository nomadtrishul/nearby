'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function WeightBasedFeedingChartMakerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [caloriesPerCup, setCaloriesPerCup] = useState<string>('350');
  const [result, setResult] = useState<{
    chart: Array<{ weightRange: string; dailyCalories: number; dailyCups: number; dailyGrams: number }>;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const generateChart = () => {
    const calories = parseFloat(caloriesPerCup);
    if (!calories || calories <= 0) {
      alert('Please enter valid calories per cup');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
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
    setIsLoading(false);
    }, 3000); // 3-second delay
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
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Weight-Based Feeding Chart Maker
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Generate a feeding chart based on weight ranges for easy reference
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Weight-Based Feeding Chart Maker - Generate a feeding chart based on weight ranges"
                width={1200}
                height={630}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                priority={false}
              />
            </div>
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

          {/* How Weight-Based Feeding Chart Maker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Weight-Based Feeding Chart Maker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our weight-based feeding chart maker generates feeding charts by calculating daily calorie needs for different weight ranges using the Resting Energy Requirement (RER) formula. The tool uses average weights within each range to calculate maintenance calories, then converts these to cups and grams based on the calories per cup you provide. This creates an easy-to-reference chart showing recommended daily amounts for different weight ranges.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Feeding Charts</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A weight-based feeding chart shows recommended daily food amounts for different weight ranges. Find your pet's weight range in the chart, then use the corresponding daily calories, cups, or grams. Divide the daily amount into 2-3 meals. These are general guidelines - individual pets may need adjustments based on activity level, age, metabolism, and health status. Always consult your veterinarian for personalized recommendations.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I use a weight-based feeding chart?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A weight-based feeding chart shows recommended daily food amounts for different weight ranges. Find your pet's weight range in the chart, then use the corresponding daily calories, cups, or grams. Divide the daily amount into 2-3 meals. Remember that these are general guidelines - individual pets may need adjustments based on activity level, age, metabolism, and health status. Always consult your veterinarian for personalized recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know how many calories are in my pet's food?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Check the pet food label for the calorie content, usually listed as "kcal/cup" or "kcal/kg". This information is typically found in the guaranteed analysis section or nutritional information panel. If not listed, contact the manufacturer. The calorie content varies significantly between different foods, so it's important to use the correct value for accurate feeding calculations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Should I adjust the feeding chart based on my pet's activity level?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, activity level significantly affects calorie needs. Active pets may need 20-40% more calories, while sedentary pets may need 10-20% less. Puppies and kittens need more calories for growth, while senior pets typically need fewer calories. Pregnant or nursing pets need significantly more calories. Always monitor your pet's weight and body condition, and adjust portions accordingly. Consult your veterinarian for personalized recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate proper portion sizes</p>
              </a>
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's weight and BMI</p>
              </a>
              <a href="/pet-nutrition" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Nutrition Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about balanced pet nutrition</p>
              </a>
            </div>
          </div>

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

