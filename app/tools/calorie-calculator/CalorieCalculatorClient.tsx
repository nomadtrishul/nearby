'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function CalorieCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [age, setAge] = useState<string>('adult');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [spayedNeutered, setSpayedNeutered] = useState<boolean>(true);
  const [healthCondition, setHealthCondition] = useState<string>('none');
  const [result, setResult] = useState<{
    rer: number;
    der: number;
    maintenance: number;
    weightLoss: number;
    weightGain: number;
    recommendations: string[];
  } | null>(null);

  const calculateCalories = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;

    // Calculate RER (Resting Energy Requirement)
    const rer = 70 * Math.pow(weightKg, 0.75);

    // Calculate DER (Daily Energy Requirement) based on factors
    let activityFactor = 1.6; // Default for neutered adult

    if (age === 'puppy' || age === 'kitten') {
      activityFactor = age === 'puppy' ? 3.0 : 2.5;
    } else if (age === 'senior') {
      activityFactor = 1.2;
    } else {
      // Adult
      if (!spayedNeutered) {
        activityFactor = 1.8;
      } else {
        activityFactor = activityLevel === 'low' ? 1.4 : activityLevel === 'moderate' ? 1.6 : 2.0;
      }
    }

    // Adjust for health conditions
    if (healthCondition === 'weightLoss') {
      activityFactor *= 0.8; // Reduce for weight loss
    } else if (healthCondition === 'weightGain') {
      activityFactor *= 1.2; // Increase for weight gain
    } else if (healthCondition === 'pregnant') {
      activityFactor *= 1.5;
    } else if (healthCondition === 'nursing') {
      activityFactor *= 2.0;
    }

    const der = rer * activityFactor;
    const maintenance = Math.round(der);
    const weightLoss = Math.round(der * 0.8); // 20% reduction for weight loss
    const weightGain = Math.round(der * 1.2); // 20% increase for weight gain

    const recommendations: string[] = [];
    recommendations.push(`Resting Energy Requirement (RER): ${Math.round(rer)} calories/day`);
    recommendations.push(`Daily Energy Requirement (DER): ${maintenance} calories/day for maintenance`);
    
    if (age === 'puppy' || age === 'kitten') {
      recommendations.push('Growing pets need more calories - feed according to growth stage');
    }
    
    if (spayedNeutered) {
      recommendations.push('Spayed/neutered pets typically need 10-20% fewer calories');
    }
    
    if (healthCondition === 'weightLoss') {
      recommendations.push('For weight loss, reduce calories by 20-30% and increase exercise');
      recommendations.push('Aim for gradual weight loss (1-2% body weight per week)');
    } else if (healthCondition === 'weightGain') {
      recommendations.push('For weight gain, increase calories gradually and monitor weight');
      recommendations.push('Consult veterinarian to rule out underlying health issues');
    }

    recommendations.push('Divide daily calories into 2-3 meals');
    recommendations.push('Treats should be less than 10% of daily calories');
    recommendations.push('Monitor weight and adjust as needed');

    setResult({
      rer: Math.round(rer),
      der: Math.round(der),
      maintenance,
      weightLoss,
      weightGain,
      recommendations,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Calorie Calculator', href: '/tools/calorie-calculator' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Calorie Calculator – Dog & Cat Daily Calorie Needs Calculator
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet calorie calculator to determine your dog or cat's daily calorie needs. Our dog calorie calculator and cat calorie calculator provide detailed breakdowns by activity level, life stage, and health conditions, with personalized recommendations for maintenance, weight loss, or weight gain.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Calorie Calculator - Calculate daily calorie needs for dogs and cats"
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
              priority={false}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              {/* Pet Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Pet Type
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPetType('dog')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'dog'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐕 Dog
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('cat')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'cat'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐱 Cat
                  </button>
                </div>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Current Weight
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    step="0.1"
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value as 'lbs' | 'kg')}
                    className="px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Age / Life Stage
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="puppy">{petType === 'dog' ? 'Puppy (under 1 year)' : 'Kitten (under 1 year)'}</option>
                  <option value="adult">Adult (1-7 years)</option>
                  <option value="senior">Senior (7+ years)</option>
                </select>
              </div>

              {/* Activity Level */}
              {age === 'adult' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Activity Level
                  </label>
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low (Sedentary/Indoor)</option>
                    <option value="moderate">Moderate (Regular walks/play)</option>
                    <option value="high">High (Very active/Working)</option>
                  </select>
                </div>
              )}

              {/* Spayed/Neutered */}
              {age === 'adult' && (
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={spayedNeutered}
                      onChange={(e) => setSpayedNeutered(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Spayed/Neutered
                    </span>
                  </label>
                </div>
              )}

              {/* Health Condition */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Health Condition / Goal
                </label>
                <select
                  value={healthCondition}
                  onChange={(e) => setHealthCondition(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="none">None (Maintenance)</option>
                  <option value="weightLoss">Weight Loss</option>
                  <option value="weightGain">Weight Gain</option>
                  <option value="pregnant">Pregnant</option>
                  <option value="nursing">Nursing</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateCalories}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Calorie Needs
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Calorie Recommendations</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">RER</h3>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {result.rer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">calories/day</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Maintenance</h3>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {result.maintenance}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">calories/day</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">DER</h3>
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {result.der}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">calories/day</p>
                  </div>
                </div>

                {healthCondition === 'none' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">For Weight Loss</h3>
                      <p className="text-xl font-bold text-red-600 dark:text-red-400">
                        {result.weightLoss} calories/day
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">For Weight Gain</h3>
                      <p className="text-xl font-bold text-green-600 dark:text-green-400">
                        {result.weightGain} calories/day
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* How Pet Calorie Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Calorie Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet calorie calculator uses standard veterinary formulas to determine your pet's daily calorie needs. RER (Resting Energy Requirement) is calculated using the formula: 70 × (weight in kg)^0.75. This base metabolic rate is then multiplied by activity factors to calculate DER (Daily Energy Requirement), which accounts for your pet's activity level, life stage, and health conditions.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding RER and DER</h3>
              <p className="text-gray-700 dark:text-gray-300">
                RER represents the calories needed at rest for basic bodily functions. DER accounts for activity level: sedentary pets need 1.2-1.4× RER, moderately active pets need 1.6× RER, and highly active pets need 2.0× RER or more. Puppies and kittens need 2.5-3.0× RER for growth, while senior pets may need 1.0-1.2× RER.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How many calories does my pet need per day?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Daily calorie needs depend on your pet's weight, age, activity level, and health status. The calculator uses RER (Resting Energy Requirement) and DER (Daily Energy Requirement) formulas. RER is the base metabolic rate, while DER accounts for activity level and life stage. Puppies and kittens need more calories for growth, while senior pets may need fewer calories.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is RER and DER?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  RER (Resting Energy Requirement) is the number of calories your pet needs at rest to maintain basic bodily functions. DER (Daily Energy Requirement) is the total calories needed per day, accounting for activity level, life stage, and health conditions. DER is calculated by multiplying RER by an activity factor.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I help my pet lose weight?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For weight loss, reduce daily calories by 20-30% from maintenance needs and increase exercise. Aim for gradual weight loss of 1-2% body weight per week. Always consult with your veterinarian before starting a weight loss program, as rapid weight loss can be dangerous. Monitor your pet's progress and adjust as needed.
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
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's ideal weight range</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
              <a href="/tools/age-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Age Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert your pet's age to human years</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This calculator provides estimates based on standard formulas (RER and DER calculations). Individual pets may have different calorie needs based on metabolism, health conditions, and other factors. Always consult with your veterinarian for personalized calorie recommendations, especially for pets with health conditions, weight management needs, or special dietary requirements. Calorie needs should be adjusted based on your pet's body condition and weight changes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

