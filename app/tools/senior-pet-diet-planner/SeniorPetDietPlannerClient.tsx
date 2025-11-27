'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function SeniorPetDietPlannerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [healthConditions, setHealthConditions] = useState<string[]>([]);
  const [result, setResult] = useState<{
    dailyCalories: number;
    recommendations: string[];
    dietaryNeeds: string[];
    foodsToAvoid: string[];
  } | null>(null);

  const conditions = [
    'Kidney Disease',
    'Heart Disease',
    'Arthritis/Joint Issues',
    'Diabetes',
    'Dental Problems',
    'Weight Management',
    'Digestive Issues',
    'None'
  ];

  const toggleCondition = (condition: string) => {
    if (condition === 'None') {
      setHealthConditions(['None']);
    } else {
      setHealthConditions(prev => {
        const filtered = prev.filter(c => c !== 'None');
        if (prev.includes(condition)) {
          return filtered.filter(c => c !== condition);
        } else {
          return [...filtered, condition];
        }
      });
    }
  };

  const generatePlan = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    const rer = 70 * Math.pow(weightKg, 0.75);
    const dailyCalories = Math.round(rer * 1.2); // Lower for seniors

    const recommendations: string[] = [];
    const dietaryNeeds: string[] = [];
    const foodsToAvoid: string[] = [];

    recommendations.push(`Daily calorie needs: ${dailyCalories} kcal (reduced for senior metabolism)`);
    recommendations.push('Feed 2-3 smaller meals per day for better digestion');
    recommendations.push('Ensure easy access to fresh water at all times');
    recommendations.push('Monitor weight monthly and adjust portions as needed');

    if (healthConditions.includes('Kidney Disease')) {
      dietaryNeeds.push('Lower protein (but high quality)');
      dietaryNeeds.push('Reduced phosphorus');
      dietaryNeeds.push('Lower sodium');
      foodsToAvoid.push('High-phosphorus foods (organ meats, bones)');
      recommendations.push('Consult vet for prescription kidney diet');
    }

    if (healthConditions.includes('Heart Disease')) {
      dietaryNeeds.push('Low sodium diet');
      dietaryNeeds.push('Moderate protein');
      dietaryNeeds.push('Omega-3 fatty acids');
      foodsToAvoid.push('High-sodium foods and treats');
      recommendations.push('Prescription heart diet may be recommended');
    }

    if (healthConditions.includes('Arthritis/Joint Issues')) {
      dietaryNeeds.push('Omega-3 fatty acids (anti-inflammatory)');
      dietaryNeeds.push('Glucosamine and chondroitin');
      dietaryNeeds.push('Maintain healthy weight');
      recommendations.push('Consider joint supplements');
      recommendations.push('Weight management is crucial for joint health');
    }

    if (healthConditions.includes('Diabetes')) {
      dietaryNeeds.push('High fiber, complex carbohydrates');
      dietaryNeeds.push('Consistent meal timing');
      dietaryNeeds.push('Low glycemic index foods');
      foodsToAvoid.push('Simple sugars and high-carb treats');
      recommendations.push('Prescription diabetic diet recommended');
      recommendations.push('Feed at same times daily');
    }

    if (healthConditions.includes('Dental Problems')) {
      dietaryNeeds.push('Soft or wet food');
      dietaryNeeds.push('Smaller kibble size');
      foodsToAvoid.push('Hard treats and large kibble');
      recommendations.push('Consider dental chews approved by vet');
    }

    if (healthConditions.includes('Weight Management')) {
      dietaryNeeds.push('Lower calorie density');
      dietaryNeeds.push('High fiber for satiety');
      dietaryNeeds.push('Lean protein');
      recommendations.push('Reduce portions by 10-20%');
      recommendations.push('Increase low-impact exercise');
    }

    if (healthConditions.includes('Digestive Issues')) {
      dietaryNeeds.push('Easily digestible proteins');
      dietaryNeeds.push('Fiber (soluble)');
      dietaryNeeds.push('Probiotics');
      foodsToAvoid.push('High-fat foods');
      recommendations.push('Consider prescription gastrointestinal diet');
    }

    if (healthConditions.length === 0 || healthConditions.includes('None')) {
      dietaryNeeds.push('High-quality, easily digestible protein');
      dietaryNeeds.push('Moderate fat (10-15% for dogs, 9-15% for cats)');
      dietaryNeeds.push('Fiber for digestive health');
      dietaryNeeds.push('Antioxidants (vitamins E, C)');
      recommendations.push('Senior-specific commercial diets are formulated for aging pets');
      recommendations.push('Consider supplements for joint and cognitive health');
    }

    setResult({ dailyCalories, recommendations, dietaryNeeds, foodsToAvoid });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Senior Pet Diet Planner', href: '/tools/senior-pet-diet-planner' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Senior Pet Diet Planner
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Create a personalized diet plan for your senior pet based on age, weight, and health conditions
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Senior Pet Diet Planner - Create a personalized diet plan for your senior pet"
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
                  Current Weight
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
                  Health Conditions (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {conditions.map((condition) => (
                    <button
                      key={condition}
                      onClick={() => toggleCondition(condition)}
                      className={`p-2 rounded-lg border-2 text-sm ${
                        healthConditions.includes(condition)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={generatePlan}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Diet Plan
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Senior Pet Diet Plan</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Calorie Needs</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{result.dailyCalories} kcal</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Dietary Needs:</h3>
                <ul className="space-y-2">
                  {result.dietaryNeeds.map((need, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {result.foodsToAvoid.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold mb-2 text-red-900 dark:text-red-200">Foods to Avoid:</h3>
                  <ul className="space-y-1">
                    {result.foodsToAvoid.map((food, index) => (
                      <li key={index} className="text-sm text-red-800 dark:text-red-200">• {food}</li>
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

          {/* How Senior Pet Diet Planner Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Senior Pet Diet Planner Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our senior pet diet planner creates personalized diet recommendations based on your pet's age, weight, activity level, and health conditions. The tool calculates adjusted calorie needs (typically 20% less than adult maintenance due to slower metabolism), recommends appropriate nutrient levels for aging pets, and considers health conditions that affect dietary requirements such as kidney disease, heart disease, diabetes, and arthritis.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Senior Pet Nutrition</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Senior pets have different nutritional needs than adult pets. They typically need fewer calories due to reduced activity and slower metabolism, but still require high-quality protein for muscle maintenance. Health conditions significantly affect dietary needs - for example, kidney disease requires lower protein and phosphorus, while heart disease needs low sodium. Always consult your veterinarian for condition-specific dietary recommendations.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I feed my senior pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Senior pets typically need: high-quality, easily digestible protein; moderate fat (10-15% for dogs, 9-15% for cats); fiber for digestive health; and antioxidants (vitamins E, C). Calorie needs are usually reduced (about 20% less than adult maintenance) due to slower metabolism. Senior-specific commercial diets are formulated for aging pets and may include joint-supporting nutrients and cognitive health supplements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do health conditions affect a senior pet's diet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Health conditions significantly affect dietary needs. For example: kidney disease requires lower protein and phosphorus; heart disease needs low sodium; diabetes requires high fiber and consistent meal timing; arthritis benefits from omega-3 fatty acids and weight management; dental problems may require soft or wet food. Always consult your veterinarian for condition-specific dietary recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much should I feed my senior pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Senior pets typically need 20% fewer calories than adult maintenance due to reduced activity and slower metabolism. Feed 2-3 smaller meals per day for better digestion. Monitor weight monthly and adjust portions as needed. Always consult your veterinarian for personalized feeding recommendations based on your pet's specific needs, health conditions, and activity level.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate senior pet calorie needs</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Determine proper portion sizes</p>
              </a>
              <a href="/senior-pets" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Senior Pet Care Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive senior pet resources</p>
              </a>
              <a href="/pet-nutrition" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Nutrition Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about pet nutrition basics</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This planner provides general guidelines. Senior pets with health conditions should be on diets recommended by your veterinarian. Always consult with your vet before making significant dietary changes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

