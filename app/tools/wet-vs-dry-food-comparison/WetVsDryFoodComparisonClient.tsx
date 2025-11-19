'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function WetVsDryFoodComparisonClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [dryCaloriesPerCup, setDryCaloriesPerCup] = useState<string>('350');
  const [dryPricePerBag, setDryPricePerBag] = useState<string>('50');
  const [dryBagSize, setDryBagSize] = useState<string>('30');
  const [wetCaloriesPerCan, setWetCaloriesPerCan] = useState<string>('200');
  const [wetPricePerCan, setWetPricePerCan] = useState<string>('2');
  const [wetCanSize, setWetCanSize] = useState<string>('13');
  const [result, setResult] = useState<{
    dailyCalories: number;
    dryDailyCost: number;
    wetDailyCost: number;
    monthlyDryCost: number;
    monthlyWetCost: number;
    yearlyDryCost: number;
    yearlyWetCost: number;
    comparison: { aspect: string; dry: string; wet: string; winner: string }[];
  } | null>(null);

  const compareFoods = () => {
    const weightNum = parseFloat(weight);
    const dryCal = parseFloat(dryCaloriesPerCup);
    const dryPrice = parseFloat(dryPricePerBag);
    const drySize = parseFloat(dryBagSize);
    const wetCal = parseFloat(wetCaloriesPerCan);
    const wetPrice = parseFloat(wetPricePerCan);
    const wetSize = parseFloat(wetCanSize);
    
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    const rer = 70 * Math.pow(weightKg, 0.75);
    const dailyCalories = Math.round(rer * 1.6); // Standard adult maintenance

    // Calculate daily portions needed
    const dryCupsPerDay = dailyCalories / dryCal;
    const dryCupsPerBag = drySize; // Assuming bag size is in cups
    const dryBagsPerDay = dryCupsPerDay / dryCupsPerBag;
    const dryDailyCost = dryBagsPerDay * dryPrice;

    const wetCansPerDay = dailyCalories / wetCal;
    const wetDailyCost = wetCansPerDay * wetPrice;

    const monthlyDryCost = dryDailyCost * 30;
    const monthlyWetCost = wetDailyCost * 30;
    const yearlyDryCost = dryDailyCost * 365;
    const yearlyWetCost = wetDailyCost * 365;

    const comparison = [
      {
        aspect: 'Cost',
        dry: `$${dryDailyCost.toFixed(2)}/day ($${monthlyDryCost.toFixed(2)}/month)`,
        wet: `$${wetDailyCost.toFixed(2)}/day ($${monthlyWetCost.toFixed(2)}/month)`,
        winner: dryDailyCost < wetDailyCost ? 'Dry' : 'Wet'
      },
      {
        aspect: 'Convenience',
        dry: 'Easy to store, long shelf life, no refrigeration needed',
        wet: 'Requires refrigeration after opening, shorter shelf life',
        winner: 'Dry'
      },
      {
        aspect: 'Hydration',
        dry: 'Low moisture content (~10%)',
        wet: 'High moisture content (~75-85%)',
        winner: 'Wet'
      },
      {
        aspect: 'Dental Health',
        dry: 'May help reduce tartar buildup through chewing',
        wet: 'Less effective for dental health',
        winner: 'Dry'
      },
      {
        aspect: 'Palatability',
        dry: 'Generally less appealing to picky eaters',
        wet: 'More appealing, stronger aroma and flavor',
        winner: 'Wet'
      },
      {
        aspect: 'Nutrition Density',
        dry: 'More calories per volume, concentrated nutrition',
        wet: 'Less calories per volume, more volume needed',
        winner: 'Dry'
      },
      {
        aspect: 'Storage',
        dry: 'Easy bulk storage, stays fresh longer',
        wet: 'Requires more space, must use opened cans quickly',
        winner: 'Dry'
      },
      {
        aspect: 'Best For',
        dry: 'Active pets, dental health, budget-conscious owners',
        wet: 'Picky eaters, hydration needs, senior pets, weight management',
        winner: 'Both'
      }
    ];

    setResult({
      dailyCalories,
      dryDailyCost,
      wetDailyCost,
      monthlyDryCost,
      monthlyWetCost,
      yearlyDryCost,
      yearlyWetCost,
      comparison,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Wet vs Dry Food Comparison', href: '/tools/wet-vs-dry-food-comparison' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Wet vs Dry Food Comparison Tool – Dog & Cat Food Comparison Calculator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free wet vs dry food comparison tool to compare food options for your dog or cat. Our dog food comparison and cat food comparison tool analyzes cost, nutrition, convenience, and suitability to help you choose the best food type for your pet.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Wet vs Dry Food Comparison Tool - Compare food options for dogs and cats"
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

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Dry Food Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Calories per Cup
                    </label>
                    <input
                      type="number"
                      value={dryCaloriesPerCup}
                      onChange={(e) => setDryCaloriesPerCup(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Price per Bag ($)
                      </label>
                      <input
                        type="number"
                        value={dryPricePerBag}
                        onChange={(e) => setDryPricePerBag(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Bag Size (cups)
                      </label>
                      <input
                        type="number"
                        value={dryBagSize}
                        onChange={(e) => setDryBagSize(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Wet Food Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Calories per Can
                    </label>
                    <input
                      type="number"
                      value={wetCaloriesPerCan}
                      onChange={(e) => setWetCaloriesPerCan(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Price per Can ($)
                      </label>
                      <input
                        type="number"
                        value={wetPricePerCan}
                        onChange={(e) => setWetPricePerCan(e.target.value)}
                        step="0.01"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Can Size (oz)
                      </label>
                      <input
                        type="number"
                        value={wetCanSize}
                        onChange={(e) => setWetCanSize(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={compareFoods}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Compare Foods
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Comparison Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Cost (Dry)</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">${result.dryDailyCost.toFixed(2)}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">${result.monthlyDryCost.toFixed(2)}/month</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Cost (Wet)</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">${result.wetDailyCost.toFixed(2)}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">${result.monthlyWetCost.toFixed(2)}/month</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Detailed Comparison:</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-gray-700 dark:text-gray-300">Aspect</th>
                        <th className="text-left py-2 text-gray-700 dark:text-gray-300">Dry Food</th>
                        <th className="text-left py-2 text-gray-700 dark:text-gray-300">Wet Food</th>
                        <th className="text-left py-2 text-gray-700 dark:text-gray-300">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.comparison.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 font-medium text-gray-900 dark:text-white">{item.aspect}</td>
                          <td className="py-3 text-gray-700 dark:text-gray-300">{item.dry}</td>
                          <td className="py-3 text-gray-700 dark:text-gray-300">{item.wet}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              item.winner === 'Dry' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                              item.winner === 'Wet' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                              'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                              {item.winner}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Tip:</strong> Many pet owners find success with a combination of both wet and dry food, providing the benefits of both while managing costs.
                </p>
              </div>
            </div>
          )}

          {/* How Wet vs Dry Food Comparison Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Wet vs Dry Food Comparison Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our wet vs dry food comparison tool analyzes multiple factors to help you choose the best food type for your pet. The tool compares cost per calorie, nutritional value, convenience, storage requirements, dental benefits, hydration content, and palatability. This comprehensive comparison helps you make an informed decision based on your pet's needs and your lifestyle.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Food Type Differences</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dry food is typically more cost-effective, convenient to store, and may help with dental health through mechanical cleaning. Wet food provides better hydration (~75% water), is more palatable for picky eaters, and can be better for weight management. Many pet owners successfully use a combination of both types to get the benefits of each.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is wet food or dry food better for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Both wet and dry food have advantages. Dry food is more cost-effective, convenient to store, and may help with dental health. Wet food provides better hydration, is more palatable for picky eaters, and can be better for weight management. Many pet owners use a combination of both. Consult your veterinarian to determine what's best for your pet's specific needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is wet food more expensive than dry food?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Generally, yes. Wet food typically costs more per calorie than dry food. However, costs vary significantly by brand and quality. Use our comparison tool to calculate the exact cost difference based on your pet's needs and the specific foods you're considering.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I feed my pet both wet and dry food?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, many pet owners successfully feed a combination of wet and dry food. This provides the benefits of both types. When combining, ensure the total daily calories don't exceed your pet's needs. A common approach is to feed dry food for main meals and wet food as a supplement or for picky eaters.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
              <a href="/tools/feeding-cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Cost Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the cost of feeding your pet</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/tools/pet-hydration-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Hydration Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily water needs for your pet</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This comparison is based on the information you provide. Actual costs and nutritional values may vary. Always consult with your veterinarian to determine the best food type for your pet's specific needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

