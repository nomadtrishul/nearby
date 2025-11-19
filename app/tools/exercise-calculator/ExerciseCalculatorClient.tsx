'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function ExerciseCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [age, setAge] = useState<string>('adult');
  const [breed, setBreed] = useState<string>('moderate');
  const [currentActivity, setCurrentActivity] = useState<string>('moderate');
  const [result, setResult] = useState<{
    dailyMinutes: number;
    weeklyMinutes: number;
    exerciseType: string[];
    recommendations: string[];
    warnings: string[];
  } | null>(null);

  const calculateExercise = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    const recommendations: string[] = [];
    const warnings: string[] = [];
    const exerciseType: string[] = [];

    let baseMinutes = 30; // Base 30 minutes for moderate activity

    // Adjust for age
    if (age === 'puppy' || age === 'kitten') {
      baseMinutes = 20; // Shorter sessions for young pets
      recommendations.push('Multiple short sessions (10-15 minutes) are better than one long session');
      recommendations.push('Avoid high-impact activities that could damage growing joints');
      warnings.push('Puppies and kittens have growing bones - avoid excessive jumping or running on hard surfaces');
    } else if (age === 'senior') {
      baseMinutes = 20; // Reduced for seniors
      recommendations.push('Shorter, gentler exercise sessions');
      recommendations.push('Low-impact activities are best');
      warnings.push('Monitor for signs of fatigue or discomfort');
    }

    // Adjust for breed/energy level
    if (breed === 'high') {
      baseMinutes *= 1.5;
      exerciseType.push('Running/Jogging', 'Fetch', 'Agility Training', 'Long Walks', 'Swimming');
      recommendations.push('High-energy breeds need more exercise to prevent behavioral issues');
    } else if (breed === 'low') {
      baseMinutes *= 0.7;
      exerciseType.push('Gentle Walks', 'Indoor Play', 'Short Outdoor Time');
      recommendations.push('Low-energy breeds need less exercise but still benefit from regular activity');
    } else {
      exerciseType.push('Walking', 'Play Sessions', 'Fetch', 'Interactive Toys');
    }

    // Adjust for current activity level
    if (currentActivity === 'low') {
      recommendations.push('Gradually increase activity to avoid injury');
      recommendations.push('Start with shorter sessions and build up');
    } else if (currentActivity === 'high') {
      baseMinutes *= 1.2;
    }

    // Pet type specific
    if (petType === 'dog') {
      recommendations.push('Daily walks are essential for dogs');
      recommendations.push('Include both physical exercise and mental stimulation');
      recommendations.push('Off-leash play in safe areas when possible');
    } else {
      recommendations.push('Cats benefit from interactive play sessions');
      recommendations.push('Use toys that encourage natural hunting behaviors');
      recommendations.push('Multiple short play sessions throughout the day');
      baseMinutes *= 0.8; // Cats typically need less structured exercise
    }

    // Weight considerations
    if (weightKg > 30) {
      recommendations.push('Large pets may need longer but less intense exercise');
    } else if (weightKg < 5) {
      recommendations.push('Small pets may need shorter but more frequent exercise sessions');
    }

    const dailyMinutes = Math.round(baseMinutes);
    const weeklyMinutes = dailyMinutes * 7;

    setResult({
      dailyMinutes,
      weeklyMinutes,
      exerciseType,
      recommendations,
      warnings,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Exercise Calculator', href: '/tools/exercise-calculator' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Exercise Calculator – Dog & Cat Daily Exercise Needs Calculator
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet exercise calculator to determine your dog or cat's daily exercise needs. Our dog exercise calculator and cat exercise calculator provide breed-specific recommendations and personalized activity plans based on age, weight, and activity level.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Exercise Calculator - Calculate daily exercise needs for dogs and cats"
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
                  Weight
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

              {/* Breed Energy Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Breed Energy Level
                </label>
                <select
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low Energy (Bulldog, Persian, etc.)</option>
                  <option value="moderate">Moderate Energy (Labrador, Maine Coon, etc.)</option>
                  <option value="high">High Energy (Border Collie, Bengal, etc.)</option>
                </select>
              </div>

              {/* Current Activity Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Current Activity Level
                </label>
                <select
                  value={currentActivity}
                  onChange={(e) => setCurrentActivity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low (Minimal exercise)</option>
                  <option value="moderate">Moderate (Regular walks/play)</option>
                  <option value="high">High (Very active)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateExercise}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Exercise Needs
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Exercise Recommendations</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Daily Exercise
                    </h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {result.dailyMinutes} minutes/day
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Weekly Exercise
                    </h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      {result.weeklyMinutes} minutes/week
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Recommended Exercise Types
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.exerciseType.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {result.warnings.length > 0 && (
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      ⚠️ Important Notes
                    </h3>
                    <ul className="space-y-1">
                      {result.warnings.map((warning, index) => (
                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                          • {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Exercise Recommendations
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

          {/* How Pet Exercise Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Exercise Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet exercise calculator determines daily exercise needs based on breed characteristics, age, weight, and activity level. Different breeds have different energy requirements: high-energy breeds like Border Collies need 60-90 minutes daily, while low-energy breeds like Bulldogs may need 20-30 minutes. The calculator also accounts for age, as puppies and kittens need shorter, more frequent sessions, while senior pets may need gentler activities.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Exercise Recommendations by Pet Type</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dogs typically need 30-60 minutes of exercise daily, including walks, runs, and playtime. Cats need 15-30 minutes of interactive play daily, with toys that mimic hunting behaviors. The calculator provides specific recommendations based on your pet's breed, age, and current activity level to ensure they get the right amount of exercise for optimal health.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much exercise does my pet need?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Exercise needs vary by breed, age, and activity level. Most adult dogs need 30-60 minutes of exercise per day, while cats typically need 15-30 minutes of interactive play. High-energy breeds need more exercise, while low-energy breeds need less. Puppies and kittens need shorter, more frequent sessions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What types of exercise are best for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dogs benefit from walking, running, fetch, and agility training. Cats benefit from interactive play with toys that mimic hunting behaviors. The best exercise type depends on your pet's breed, age, and energy level. Always consider your pet's physical limitations and health conditions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet is getting enough exercise?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Signs of adequate exercise include: your pet is calm and relaxed at home, maintains a healthy weight, sleeps well, and doesn't display destructive behaviors. If your pet is restless, gaining weight, or showing behavioral issues, they may need more exercise.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's ideal weight range</p>
              </a>
              <a href="/tools/age-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Age Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert your pet's age to human years</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This calculator provides general exercise recommendations. Individual pets may have different needs based on health conditions, fitness level, and other factors. Always consult with your veterinarian before starting a new exercise program, especially for pets with health conditions, injuries, or those who have been inactive. Monitor your pet during exercise and stop if they show signs of fatigue, distress, or discomfort.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

