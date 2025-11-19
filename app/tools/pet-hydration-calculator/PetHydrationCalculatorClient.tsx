'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function PetHydrationCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [environment, setEnvironment] = useState<string>('normal');
  const [result, setResult] = useState<{
    dailyWaterNeeds: number;
    dailyWaterCups: number;
    dailyWaterOunces: number;
    recommendations: string[];
    signsOfDehydration: string[];
  } | null>(null);

  const calculateHydration = () => {
    const weightNum = parseFloat(weight);
    
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    
    // Base water requirement: 50-60ml per kg body weight per day
    let baseWaterML = weightKg * 55; // Average of 50-60ml
    
    // Activity level adjustments
    if (activityLevel === 'low') {
      baseWaterML *= 0.9;
    } else if (activityLevel === 'high') {
      baseWaterML *= 1.3;
    }
    
    // Environment adjustments
    if (environment === 'hot') {
      baseWaterML *= 1.5;
    } else if (environment === 'cold') {
      baseWaterML *= 0.9;
    }
    
    // Cats typically need slightly less per kg than dogs
    if (petType === 'cat') {
      baseWaterML *= 0.9;
    }

    const dailyWaterNeeds = Math.round(baseWaterML);
    const dailyWaterOunces = Math.round(baseWaterML / 29.5735);
    const dailyWaterCups = Math.round((baseWaterML / 236.588) * 10) / 10;

    const recommendations: string[] = [];
    const signsOfDehydration: string[] = [];

    recommendations.push(`Your ${petType} needs approximately ${dailyWaterCups} cups (${dailyWaterOunces} oz) of water per day`);
    recommendations.push('Always provide fresh, clean water in a clean bowl');
    recommendations.push('Monitor water intake - sudden changes may indicate health issues');
    
    if (petType === 'cat') {
      recommendations.push('Cats often prefer running water - consider a water fountain');
      recommendations.push('Wet food can contribute to hydration (contains ~75% water)');
    } else {
      recommendations.push('Dogs need more water after exercise - provide access immediately');
      recommendations.push('Monitor water intake during hot weather');
    }
    
    if (activityLevel === 'high') {
      recommendations.push('Active pets need more water - ensure access during and after activity');
    }
    
    if (environment === 'hot') {
      recommendations.push('Hot weather increases water needs - provide extra water and shade');
      recommendations.push('Consider adding ice cubes to water bowls');
    }

    signsOfDehydration.push('Dry, sticky gums');
    signsOfDehydration.push('Loss of skin elasticity (skin doesn\'t snap back when gently pulled)');
    signsOfDehydration.push('Sunken eyes');
    signsOfDehydration.push('Lethargy or weakness');
    signsOfDehydration.push('Decreased urination');
    signsOfDehydration.push('Dark yellow urine');
    signsOfDehydration.push('Panting (dogs) or rapid breathing');
    signsOfDehydration.push('Loss of appetite');

    setResult({
      dailyWaterNeeds,
      dailyWaterCups,
      dailyWaterOunces,
      recommendations,
      signsOfDehydration,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Pet Hydration Calculator', href: '/tools/pet-hydration-calculator' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pet Hydration Calculator – Dog & Cat Daily Water Needs Calculator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free pet hydration calculator to determine your dog or cat's daily water needs. Our dog water calculator and cat water calculator calculate water requirements based on weight, activity level, and environment, and help you recognize signs of dehydration.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Pet Hydration Calculator - Calculate daily water needs for dogs and cats"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Activity Level
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="low">Low (mostly sedentary)</option>
                  <option value="moderate">Moderate (regular activity)</option>
                  <option value="high">High (very active)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Environment
                </label>
                <select
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="cold">Cold</option>
                  <option value="normal">Normal/Temperate</option>
                  <option value="hot">Hot</option>
                </select>
              </div>

              <button
                onClick={calculateHydration}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Water Needs
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Water Needs</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyWaterCups} cups</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Water Needs</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyWaterOunces} oz</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Water Needs</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyWaterNeeds} ml</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
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

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold mb-2 text-red-900 dark:text-red-200">Signs of Dehydration:</h3>
                <ul className="space-y-1">
                  {result.signsOfDehydration.map((sign, index) => (
                    <li key={index} className="text-sm text-red-800 dark:text-red-200">• {sign}</li>
                  ))}
                </ul>
                <p className="text-sm text-red-800 dark:text-red-200 mt-3">
                  <strong>If you notice signs of dehydration, contact your veterinarian immediately.</strong>
                </p>
              </div>
            </div>
          )}

          {/* How Pet Hydration Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Hydration Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet hydration calculator determines daily water needs based on your pet's weight, activity level, and environment. Generally, pets need 50-60ml of water per kg of body weight per day. Active pets, pets in hot weather, and pets eating dry food need more water. The calculator adjusts for these factors to provide personalized recommendations.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet Hydration Needs</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Water needs vary significantly based on factors like activity level (active pets need more), environment (hot weather increases needs), and diet (wet food provides ~75% water, while dry food provides minimal hydration). Cats typically need slightly less water per kg than dogs, but adequate hydration is crucial for preventing urinary issues.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much water does my pet need per day?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Water needs vary by weight, activity level, and environment. Generally, pets need 50-60ml of water per kg of body weight per day. Active pets, pets in hot weather, and pets eating dry food need more water. Use our calculator to get personalized recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I tell if my pet is dehydrated?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Signs of dehydration include dry, sticky gums, loss of skin elasticity (skin doesn't snap back when gently pulled), sunken eyes, lethargy, decreased urination, dark yellow urine, excessive panting, and loss of appetite. If you notice these signs, contact your veterinarian immediately.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do cats need less water than dogs?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Cats typically need slightly less water per kg of body weight than dogs, and they often get some hydration from wet food (which contains ~75% water). However, cats are prone to urinary issues, so adequate hydration is crucial. Consider a water fountain to encourage drinking.
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
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet health and wellness</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This calculator provides general guidelines. Individual pets may have different needs based on health conditions, diet (wet food provides hydration), and other factors. Always ensure fresh water is available and consult your veterinarian if you have concerns about your pet's hydration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

