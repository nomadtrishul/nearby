'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function PetTreatCalorieCounterClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [dailyCalories, setDailyCalories] = useState<string>('');
  const [treats, setTreats] = useState<Array<{ name: string; calories: string; quantity: string }>>([
    { name: '', calories: '', quantity: '1' }
  ]);
  const [result, setResult] = useState<{
    totalTreatCalories: number;
    treatAllowance: number;
    percentageOfDaily: number;
    remainingFoodCalories: number;
    warnings: string[];
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const addTreat = () => {
    setTreats([...treats, { name: '', calories: '', quantity: '1' }]);
  };

  const removeTreat = (index: number) => {
    setTreats(treats.filter((_, i) => i !== index));
  };

  const updateTreat = (index: number, field: string, value: string) => {
    const updated = [...treats];
    updated[index] = { ...updated[index], [field]: value };
    setTreats(updated);
  };

  const calculateTreats = () => {
    const weightNum = parseFloat(weight);
    let dailyCal = parseFloat(dailyCalories);
    
    if (!dailyCal || dailyCal <= 0) {
      if (!weightNum || weightNum <= 0) {
        alert('Please enter either weight or daily calories');
        return;
      }
      // Calculate daily calories from weight
      const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
      const rer = 70 * Math.pow(weightKg, 0.75);
      dailyCal = Math.round(rer * 1.6);
      setDailyCalories(dailyCal.toString());
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    const treatAllowance = Math.round(dailyCal * 0.1); // 10% rule
    let totalTreatCalories = 0;

    treats.forEach(treat => {
      const calories = parseFloat(treat.calories) || 0;
      const quantity = parseFloat(treat.quantity) || 0;
      totalTreatCalories += calories * quantity;
    });

    const percentageOfDaily = (totalTreatCalories / dailyCal) * 100;
    const remainingFoodCalories = dailyCal - totalTreatCalories;

    const warnings: string[] = [];
    const recommendations: string[] = [];

    if (totalTreatCalories > treatAllowance) {
      warnings.push(`⚠️ Treat calories (${totalTreatCalories} kcal) exceed the recommended 10% limit (${treatAllowance} kcal)`);
      warnings.push(`This could lead to weight gain and nutritional imbalances`);
    }

    if (percentageOfDaily > 15) {
      warnings.push(`Treats make up ${percentageOfDaily.toFixed(1)}% of daily calories - too high!`);
    }

    if (remainingFoodCalories < dailyCal * 0.8) {
      warnings.push(`Only ${remainingFoodCalories} kcal remaining for regular food - may not meet nutritional needs`);
    }

    if (totalTreatCalories <= treatAllowance) {
      recommendations.push(`✓ Treat intake is within healthy limits (${totalTreatCalories}/${treatAllowance} kcal)`);
    } else {
      recommendations.push(`Reduce treat intake by ${totalTreatCalories - treatAllowance} kcal to stay within limits`);
    }

    recommendations.push(`Treats should make up no more than 10% of daily calories (${treatAllowance} kcal)`);
    recommendations.push(`Remaining calories for regular food: ${remainingFoodCalories} kcal`);
    recommendations.push(`Consider using low-calorie treats or breaking treats into smaller pieces`);

    if (petType === 'dog') {
      recommendations.push(`Good low-calorie dog treats: carrots, green beans, apple slices (no seeds)`);
    } else {
      recommendations.push(`Good low-calorie cat treats: small pieces of cooked chicken, freeze-dried meat`);
    }

    setResult({
      totalTreatCalories: Math.round(totalTreatCalories),
      treatAllowance,
      percentageOfDaily: Math.round(percentageOfDaily * 10) / 10,
      remainingFoodCalories: Math.round(remainingFoodCalories),
      warnings,
      recommendations,
    });
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
            { name: 'Pet Treat Calorie Counter', href: '/tools/pet-treat-calorie-counter' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Pet Treat Calorie Counter – Dog & Cat Treat Allowance Calculator
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet treat calorie counter to track treat calories and make sure they stay within the recommended 10% of your dog or cat's daily calorie intake. Enter daily calories, add multiple treats, and get personalized recommendations for healthy treat consumption.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Pet Treat Calorie Counter - Track treat calories for dogs and cats"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pet Weight (optional if daily calories known)
                  </label>
                  <div className="flex gap-2">
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
                    Daily Calorie Intake (kcal)
                  </label>
                  <input
                    type="number"
                    value={dailyCalories}
                    onChange={(e) => setDailyCalories(e.target.value)}
                    placeholder="e.g., 800"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Treats</h3>
                  <button
                    onClick={addTreat}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    + Add Treat
                  </button>
                </div>
                <div className="space-y-4">
                  {treats.map((treat, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 items-end">
                      <div className="col-span-4">
                        <input
                          type="text"
                          value={treat.name}
                          onChange={(e) => updateTreat(index, 'name', e.target.value)}
                          placeholder="Treat name"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          value={treat.calories}
                          onChange={(e) => updateTreat(index, 'calories', e.target.value)}
                          placeholder="Calories"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={treat.quantity}
                          onChange={(e) => updateTreat(index, 'quantity', e.target.value)}
                          placeholder="Qty"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                        />
                      </div>
                      <div className="col-span-2 text-sm text-gray-600 dark:text-gray-400">
                        = {(parseFloat(treat.calories) || 0) * (parseFloat(treat.quantity) || 0)} kcal
                      </div>
                      {treats.length > 1 && (
                        <button
                          onClick={() => removeTreat(index)}
                          className="col-span-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateTreats}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Treat Calories
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Treat Calories</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.totalTreatCalories} kcal</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Treat Allowance (10%)</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{result.treatAllowance} kcal</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">% of Daily</div>
                  <div className={`text-2xl font-bold ${result.percentageOfDaily > 10 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                    {result.percentageOfDaily}%
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Remaining for Food</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{result.remainingFoodCalories} kcal</div>
                </div>
              </div>

              {result.warnings.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold mb-2 text-red-900 dark:text-red-200">Warnings:</h3>
                  <ul className="space-y-1">
                    {result.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-red-800 dark:text-red-200">{warning}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Pet Treat Calorie Counter Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Treat Calorie Counter Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The calculator applies the veterinary-recommended 10% rule for treats. Enter your pet's daily calorie needs (from our calorie calculator or food packaging), then add each treat with its calorie content and quantity. The tool totals treat calories, calculates what percentage of the daily allowance they represent, and warns when treats exceed the safe limit.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why Tracking Treat Calories Matters</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Treats are often calorie-dense and can quickly add up, leading to weight gain and nutritional imbalances. Monitoring treat calories helps prevent obesity while still allowing you to reward and train your pet. Keeping treats within 10% of daily calories ensures most nutrition comes from balanced meals.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How many calories should treats be for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Treats should make up no more than 10% of your pet's total daily calorie intake. For example, if your pet needs 800 calories per day, treats should be limited to 80 calories or less. This keeps nutrition balanced while still allowing rewards.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What happens if I give my pet too many treats?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Too many treats can lead to weight gain, nutritional imbalances, and health issues. Treats are often high in calories and may not provide complete nutrition. If treats exceed 10-15% of daily calories, your pet may not get enough essential nutrients from their regular food.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are good low-calorie treats for pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Good low-calorie treats for dogs include carrots, green beans, apple slices (no seeds), and small pieces of plain cooked chicken. For cats, try small pieces of cooked chicken, freeze-dried meat, or commercial low-calorie cat treats. Always check calorie content and introduce new foods gradually.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/tools/feeding-portion-calculator"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
              <a
                href="/tools/calorie-calculator"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Determine daily calorie needs for your pet</p>
              </a>
              <a
                href="/tools/weight-calculator"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor your pet's ideal weight range</p>
              </a>
              <a
                href="/tools/safe-human-foods-checker"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Safe Human Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">See which human foods are safe treats</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> The 10% rule is a general guideline. Treats should not replace regular meals. Always check treat labels for calorie information and consult with your veterinarian if you have concerns about your pet's weight or nutrition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

