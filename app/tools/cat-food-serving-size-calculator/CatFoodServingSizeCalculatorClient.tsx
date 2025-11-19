'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function CatFoodServingSizeCalculatorClient() {
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [age, setAge] = useState<string>('adult');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [spayedNeutered, setSpayedNeutered] = useState<boolean>(true);
  const [caloriesPerCup, setCaloriesPerCup] = useState<string>('400');
  const [result, setResult] = useState<{
    dailyCalories: number;
    servingCups: number;
    servingGrams: number;
    recommendations: string[];
  } | null>(null);

  const calculateServing = () => {
    const weightNum = parseFloat(weight);
    const caloriesNum = parseFloat(caloriesPerCup);
    
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }
    if (!caloriesNum || caloriesNum <= 0) {
      alert('Please enter valid calories per cup');
      return;
    }

    // Convert weight to kg
    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;

    // Calculate RER (Resting Energy Requirement)
    const rer = 70 * Math.pow(weightKg, 0.75);

    // Calculate DER (Daily Energy Requirement)
    let activityFactor = 1.2; // Default for neutered adult cat

    if (age === 'kitten') {
      activityFactor = 2.5;
    } else if (age === 'senior') {
      activityFactor = 1.0;
    } else {
      if (!spayedNeutered) {
        activityFactor = 1.4;
      } else {
        activityFactor = activityLevel === 'low' ? 1.0 : activityLevel === 'moderate' ? 1.2 : 1.4;
      }
    }

    const dailyCalories = Math.round(rer * activityFactor);
    const servingCups = dailyCalories / caloriesNum;
    const servingGrams = servingCups * 120; // Approximate grams per cup

    // Generate recommendations
    const recommendations: string[] = [];
    
    if (age === 'kitten') {
      recommendations.push('Kittens need 3-4 meals per day. Divide the daily serving across meals.');
      recommendations.push('Feed kitten-specific food with higher protein and calories.');
    } else if (age === 'senior') {
      recommendations.push('Senior cats may need 2-3 smaller meals per day.');
      recommendations.push('Consider senior-specific formulas with joint support.');
    } else {
      recommendations.push('Feed 2-3 meals per day (divide daily serving evenly).');
    }
    
    recommendations.push(`Daily serving: ${servingCups.toFixed(1)} cups (${Math.round(servingGrams)}g)`);
    recommendations.push(`Per meal (2 meals/day): ${(servingCups / 2).toFixed(1)} cups (${Math.round(servingGrams / 2)}g)`);
    
    if (activityLevel === 'high') {
      recommendations.push('Active cats may need 10-20% more food. Monitor weight and adjust.');
    } else if (activityLevel === 'low') {
      recommendations.push('Indoor cats may need 10-20% less food to prevent weight gain.');
    }

    recommendations.push('Cats are obligate carnivores - ensure food is high in animal protein.');

    setResult({
      dailyCalories,
      servingCups: Math.round(servingCups * 10) / 10,
      servingGrams: Math.round(servingGrams),
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
            { name: 'Cat Food Serving Size Calculator', href: '/tools/cat-food-serving-size-calculator' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cat Food Serving Size Calculator – Daily Portion Size Calculator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free cat food serving size calculator to determine the perfect portion sizes for your cat. Our cat portion calculator calculates daily serving sizes based on weight, age, activity level, and food type, using RER and DER calculations to provide personalized feeding recommendations.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Cat Food Serving Size Calculator - Calculate perfect portion sizes for cats"
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
                  Cat Weight
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
                  <option value="kitten">Kitten (under 1 year)</option>
                  <option value="adult">Adult (1-7 years)</option>
                  <option value="senior">Senior (7+ years)</option>
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
                  <option value="low">Low (mostly indoors, minimal exercise)</option>
                  <option value="moderate">Moderate (regular play, some activity)</option>
                  <option value="high">High (very active, lots of play)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Spayed/Neutered
                </label>
                <select
                  value={spayedNeutered ? 'yes' : 'no'}
                  onChange={(e) => setSpayedNeutered(e.target.value === 'yes')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
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
                  placeholder="e.g., 400"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={calculateServing}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Serving Size
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Calories</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyCalories} kcal</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Serving</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.servingCups} cups</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Serving</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.servingGrams}g</div>
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

          {/* How Cat Food Serving Size Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Cat Food Serving Size Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our cat food serving size calculator uses standard veterinary formulas (RER and DER) to determine your cat's daily calorie needs. RER (Resting Energy Requirement) is calculated based on weight, then multiplied by activity factors to get DER (Daily Energy Requirement). The calculator then divides this by your food's calorie content to determine the exact serving size needed.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Cat Portion Sizes</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Portion sizes vary based on multiple factors: kittens need more calories per pound for growth (2.5x RER), active cats need more than sedentary ones, and spayed/neutered cats typically need 10-20% fewer calories. Indoor cats are prone to obesity, so monitoring portion sizes is especially important.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much food should I feed my cat?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The amount of food depends on your cat's weight, age, activity level, and the calorie content of the food. Use our calculator to determine the appropriate serving size based on RER (Resting Energy Requirement) and DER (Daily Energy Requirement) calculations. Kittens need more calories for growth, while senior cats may need fewer calories.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How many times a day should I feed my cat?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most adult cats do well with 2-3 meals per day. Kittens typically need 3-4 smaller meals per day. Senior cats may benefit from 2-3 smaller meals. Divide the daily serving size evenly across meals.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if I'm feeding my cat the right amount?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Monitor your cat's body condition score (BCS). You should be able to feel but not see their ribs. If your cat is gaining weight, reduce portions by 10-20%. If losing weight, increase portions. Indoor cats are prone to obesity, so monitor closely. Always consult with your veterinarian for personalized recommendations.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your cat</p>
              </a>
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your cat's ideal weight range</p>
              </a>
              <a href="/tools/dog-food-serving-size-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Dog Food Serving Size Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate serving sizes for dogs</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This calculator provides general guidance. Individual cats may have different needs based on metabolism, health conditions, and other factors. Always consult with your veterinarian for personalized feeding recommendations, especially for kittens, senior cats, or cats with health conditions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

