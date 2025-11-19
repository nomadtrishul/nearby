'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function FeedingCostCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [foodType, setFoodType] = useState<string>('dry');
  const [foodPrice, setFoodPrice] = useState<string>('');
  const [foodSize, setFoodSize] = useState<string>('');
  const [sizeUnit, setSizeUnit] = useState<'lbs' | 'kg'>('lbs');
  const [caloriesPerUnit, setCaloriesPerUnit] = useState<string>('');
  const [result, setResult] = useState<{
    dailyCost: number;
    weeklyCost: number;
    monthlyCost: number;
    yearlyCost: number;
    dailyAmount: number;
    recommendations: string[];
  } | null>(null);

  const calculateFeedingCost = () => {
    const weightNum = parseFloat(weight);
    const price = parseFloat(foodPrice);
    const size = parseFloat(foodSize);
    const calories = parseFloat(caloriesPerUnit);
    
    if (!weightNum || !price || !size || !calories) {
      alert('Please fill in all fields');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    const sizeKg = sizeUnit === 'lbs' ? size * 0.453592 : size;
    
    // Calculate daily calories needed
    const rer = 70 * Math.pow(weightKg, 0.75);
    const dailyCalories = Math.round(rer * 1.6);
    
    // Calculate daily amount needed
    const dailyAmount = dailyCalories / calories;
    const dailyAmountKg = foodType === 'dry' ? dailyAmount * 0.12 : dailyAmount * 0.125; // Approximate conversion
    
    // Calculate costs
    const pricePerKg = price / sizeKg;
    const dailyCost = dailyAmountKg * pricePerKg;
    const weeklyCost = dailyCost * 7;
    const monthlyCost = dailyCost * 30;
    const yearlyCost = dailyCost * 365;

    const recommendations: string[] = [];
    recommendations.push(`Daily feeding cost: $${dailyCost.toFixed(2)}`);
    recommendations.push(`Monthly feeding cost: $${monthlyCost.toFixed(2)}`);
    recommendations.push(`Yearly feeding cost: $${yearlyCost.toFixed(2)}`);
    recommendations.push(`Consider buying in bulk for better value`);
    recommendations.push(`Compare prices per unit (price per lb/kg) when shopping`);

    setResult({
      dailyCost: Math.round(dailyCost * 100) / 100,
      weeklyCost: Math.round(weeklyCost * 100) / 100,
      monthlyCost: Math.round(monthlyCost * 100) / 100,
      yearlyCost: Math.round(yearlyCost * 100) / 100,
      dailyAmount: Math.round(dailyAmount * 10) / 10,
      recommendations,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Feeding Cost Calculator', href: '/tools/feeding-cost-calculator' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Feeding Cost Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Calculate the cost of feeding your pet based on food type, price, and your pet's needs
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
                  Food Type
                </label>
                <select
                  value={foodType}
                  onChange={(e) => setFoodType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dry">Dry Food</option>
                  <option value="wet">Wet Food</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Food Price ($)
                </label>
                <input
                  type="number"
                  value={foodPrice}
                  onChange={(e) => setFoodPrice(e.target.value)}
                  placeholder="e.g., 50.00"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Food Package Size
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={foodSize}
                    onChange={(e) => setFoodSize(e.target.value)}
                    placeholder="e.g., 30"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <select
                    value={sizeUnit}
                    onChange={(e) => setSizeUnit(e.target.value as 'lbs' | 'kg')}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Calories per {foodType === 'dry' ? 'Cup' : 'Can'} (check food label)
                </label>
                <input
                  type="number"
                  value={caloriesPerUnit}
                  onChange={(e) => setCaloriesPerUnit(e.target.value)}
                  placeholder="e.g., 350"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={calculateFeedingCost}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Feeding Cost
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cost Breakdown</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Cost</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">${result.dailyCost.toFixed(2)}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Weekly Cost</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">${result.weeklyCost.toFixed(2)}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Cost</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">${result.monthlyCost.toFixed(2)}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Yearly Cost</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">${result.yearlyCost.toFixed(2)}</div>
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
              <strong>Note:</strong> This calculator provides estimates based on standard maintenance calorie requirements. Actual costs may vary based on your pet's individual needs, activity level, and food prices in your area.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

