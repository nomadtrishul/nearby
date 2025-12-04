'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function RawDietQuantityPlannerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [age, setAge] = useState<string>('adult');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [result, setResult] = useState<{
    dailyAmount: number;
    dailyAmountOz: number;
    weeklyAmount: number;
    mealBreakdown: { component: string; percentage: string; dailyAmount: string; notes: string }[];
    recommendations: string[];
    warnings: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculateRawDiet = () => {
    const weightNum = parseFloat(weight);
    
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    
    // Raw diet: typically 2-3% of body weight for dogs, 2-4% for cats
    let percentage = 0.025; // 2.5% default
    
    if (age === 'puppy' || age === 'kitten') {
      percentage = 0.03; // 3% for growing pets
    } else if (age === 'senior') {
      percentage = 0.02; // 2% for seniors
    } else {
      if (activityLevel === 'high') {
        percentage = 0.03;
      } else if (activityLevel === 'low') {
        percentage = 0.02;
      }
    }
    
    if (petType === 'cat') {
      percentage += 0.005; // Cats typically need slightly more
    }

    const dailyAmount = weightKg * percentage; // in kg
    const dailyAmountOz = dailyAmount * 35.274; // convert to oz
    const weeklyAmount = dailyAmount * 7;

    // Raw diet breakdown (BARF model: 70% muscle meat, 10% bone, 10% organ, 10% vegetables/fruits)
    const mealBreakdown = [
      {
        component: 'Muscle Meat',
        percentage: '70%',
        dailyAmount: `${(dailyAmount * 0.7 * 1000).toFixed(0)}g (${(dailyAmountOz * 0.7).toFixed(1)} oz)`,
        notes: 'Chicken, beef, turkey, lamb, etc. (variety is important)'
      },
      {
        component: 'Raw Meaty Bones',
        percentage: '10%',
        dailyAmount: `${(dailyAmount * 0.1 * 1000).toFixed(0)}g (${(dailyAmountOz * 0.1).toFixed(1)} oz)`,
        notes: 'Chicken wings, necks, backs (for dogs). Ground bone for cats.'
      },
      {
        component: 'Organ Meat',
        percentage: '10%',
        dailyAmount: `${(dailyAmount * 0.1 * 1000).toFixed(0)}g (${(dailyAmountOz * 0.1).toFixed(1)} oz)`,
        notes: 'Liver (5%), other organs like kidney, heart (5%)'
      },
      {
        component: 'Vegetables/Fruits',
        percentage: '10%',
        dailyAmount: `${(dailyAmount * 0.1 * 1000).toFixed(0)}g (${(dailyAmountOz * 0.1).toFixed(1)} oz)`,
        notes: 'Pureed vegetables (dogs). Cats need minimal plant matter.'
      }
    ];

    const recommendations: string[] = [];
    const warnings: string[] = [];

    recommendations.push(`Daily raw food amount: ${(dailyAmount * 1000).toFixed(0)}g (${dailyAmountOz.toFixed(1)} oz)`);
    recommendations.push(`Weekly amount: ${(weeklyAmount * 1000).toFixed(0)}g (${(weeklyAmount * 35.274).toFixed(1)} oz)`);
    recommendations.push('Feed 2-3 meals per day for optimal digestion');
    recommendations.push('Ensure variety in protein sources (rotate weekly)');
    recommendations.push('Freeze meat for at least 2 weeks to kill parasites');
    recommendations.push('Thaw in refrigerator, never at room temperature');
    
    if (petType === 'cat') {
      recommendations.push('Cats require taurine - ensure heart meat is included');
      recommendations.push('Cats need minimal carbohydrates - focus on meat and organs');
    } else {
      recommendations.push('Include a variety of vegetables, pureed for better digestion');
    }

    warnings.push('⚠️ Raw diets require careful handling to prevent bacterial contamination');
    warnings.push('⚠️ Consult with a veterinarian or veterinary nutritionist before starting a raw diet');
    warnings.push('⚠️ Ensure proper balance of nutrients - consider supplements if needed');
    warnings.push('⚠️ Monitor your pet\'s health closely and adjust as needed');
    warnings.push('⚠️ Not recommended for pets with compromised immune systems');

    setResult({
      dailyAmount: Math.round(dailyAmount * 1000) / 1000,
      dailyAmountOz: Math.round(dailyAmountOz * 10) / 10,
      weeklyAmount: Math.round(weeklyAmount * 1000) / 1000,
      mealBreakdown,
      recommendations,
      warnings,
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
            { name: 'Raw Diet Quantity Planner', href: '/tools/raw-diet-quantity-planner' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Raw Diet Quantity Planner
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Calculate the proper quantities for a raw diet based on your pet's needs
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Raw Diet Quantity Planner - Calculate the proper quantities for a raw diet"
                width={1200}
                height={630}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                priority={false}
              />
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">Important Safety Notice</h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  Raw diets require careful planning and handling. Consult with a veterinarian or board-certified veterinary nutritionist before starting a raw diet. This tool provides general guidelines only.
                </p>
              </div>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="puppy">Puppy/Kitten</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
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

              <button
                onClick={calculateRawDiet}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Raw Diet Quantities
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Raw Diet Plan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Amount</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{(result.dailyAmount * 1000).toFixed(0)}g</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Amount</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyAmountOz.toFixed(1)} oz</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Weekly Amount</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{(result.weeklyAmount * 1000).toFixed(0)}g</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Diet Breakdown (BARF Model):</h3>
                <div className="space-y-3">
                  {result.mealBreakdown.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{item.component}</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400">{item.percentage}</span>
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">{item.dailyAmount}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{item.notes}</div>
                    </div>
                  ))}
                </div>
              </div>

              {result.warnings.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold mb-2 text-red-900 dark:text-red-200">Important Warnings:</h3>
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
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Raw Diet Quantity Planner Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Raw Diet Quantity Planner Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our raw diet quantity planner calculates the correct quantity of raw food for your pet based on weight, age, and activity level using the BARF (Biologically Appropriate Raw Food) model. The tool calculates daily feeding amounts as a percentage of body weight (typically 2-3% for adult dogs, 5-10% for puppies, 2-4% for adult cats) and provides a breakdown of meal components including muscle meat, organ meats, raw meaty bones, vegetables, and fruits.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Raw Diets</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Raw diets can be safe if properly formulated and handled, but they carry risks including bacterial contamination, nutritional imbalances, and potential for parasites. Raw diets require careful planning to ensure all essential nutrients are provided, proper food handling to prevent contamination, and regular veterinary monitoring. A balanced raw diet should include muscle meat, organ meats, raw meaty bones, vegetables and fruits, and supplements. Always work with a veterinary nutritionist to formulate a complete and balanced raw diet.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much raw food should I feed my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Raw food quantities depend on your pet's weight, age, and activity level. Generally, adult dogs need 2-3% of their body weight per day, while puppies need 5-10% of their expected adult weight. Adult cats typically need 2-4% of their body weight. Active pets may need more, while sedentary pets may need less. Always consult with a veterinary nutritionist or veterinarian experienced with raw diets to ensure proper nutrition and portion sizes.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is a raw diet safe for pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Raw diets can be safe if properly formulated and handled, but they carry risks including bacterial contamination (Salmonella, E. coli), nutritional imbalances, and potential for parasites. Raw diets require careful planning to ensure all essential nutrients are provided, proper food handling to prevent contamination, and regular veterinary monitoring. Always consult with a board-certified veterinary nutritionist before starting a raw diet, and ensure you follow proper food safety protocols.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should be included in a raw diet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A balanced raw diet should include: muscle meat (variety of sources), organ meats (liver, kidney, heart), raw meaty bones (for calcium and dental health), vegetables and fruits (for fiber and nutrients), and supplements (to ensure complete nutrition, including calcium, vitamins, and minerals). The exact ratios depend on your pet's species (dog vs cat) and individual needs. Cats require more protein and taurine. Always work with a veterinary nutritionist to formulate a complete and balanced raw diet.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/homemade-food-nutrition-analyzer" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Homemade Food Nutrition Analyzer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Analyze homemade diet nutrition</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate proper portion sizes</p>
              </a>
              <a href="/pet-nutrition" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Nutrition Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about balanced pet nutrition</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This calculator provides general guidelines based on the BARF (Biologically Appropriate Raw Food) model. Raw diets require careful planning, proper handling, and may need supplementation. Always consult with a veterinarian or board-certified veterinary nutritionist before starting a raw diet, especially for puppies, kittens, senior pets, or pets with health conditions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

