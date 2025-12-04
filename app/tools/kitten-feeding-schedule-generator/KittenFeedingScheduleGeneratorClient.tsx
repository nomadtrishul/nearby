'use client';

import { useState } from 'react';
import Image from 'next/image';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function KittenFeedingScheduleGeneratorClient() {
  const [ageWeeks, setAgeWeeks] = useState<string>('');
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [result, setResult] = useState<{
    mealsPerDay: number;
    dailyCalories: number;
    schedule: { time: string; amount: string; notes: string }[];
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const generateSchedule = () => {

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    const age = parseFloat(ageWeeks);
    const weight = parseFloat(currentWeight);
    
    if (!age || age <= 0 || age > 52) {
      alert('Please enter a valid age in weeks (1-52)');
      return;
    }
    if (!weight || weight <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
    const rer = 70 * Math.pow(weightKg, 0.75);
    
    // Kittens need 2-3x RER depending on age
    let activityFactor = 2.5;
    let mealsPerDay = 4;
    
    if (age <= 8) {
      activityFactor = 2.5;
      mealsPerDay = 4;
    } else if (age <= 16) {
      activityFactor = 2.3;
      mealsPerDay = 3;
    } else if (age <= 24) {
      activityFactor = 2.0;
      mealsPerDay = 3;
    } else {
      activityFactor = 1.8;
      mealsPerDay = 2;
    }

    const dailyCalories = Math.round(rer * activityFactor);
    const caloriesPerMeal = dailyCalories / mealsPerDay;

    // Calculate amount per meal (assuming 450 kcal/cup for kitten food)
    const cupsPerMeal = (caloriesPerMeal / 450).toFixed(2);
    const gramsPerMeal = Math.round(parseFloat(cupsPerMeal) * 120);

    // Generate schedule
    const schedule: { time: string; amount: string; notes: string }[] = [];
    
    if (mealsPerDay === 4) {
      schedule.push({ time: '7:00 AM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Morning meal' });
      schedule.push({ time: '12:00 PM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Midday meal' });
      schedule.push({ time: '5:00 PM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Evening meal' });
      schedule.push({ time: '10:00 PM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Night meal' });
    } else if (mealsPerDay === 3) {
      schedule.push({ time: '7:00 AM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Morning meal' });
      schedule.push({ time: '1:00 PM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Afternoon meal' });
      schedule.push({ time: '7:00 PM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Evening meal' });
    } else {
      schedule.push({ time: '8:00 AM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Morning meal' });
      schedule.push({ time: '6:00 PM', amount: `${cupsPerMeal} cups (${gramsPerMeal}g)`, notes: 'Evening meal' });
    }

    const recommendations: string[] = [];
    
    if (age <= 8) {
      recommendations.push('Very young kittens need 4 meals per day for proper growth.');
      recommendations.push('Feed high-quality kitten food specifically formulated for growth.');
      recommendations.push('Kittens under 4 weeks may still need bottle feeding - consult your vet.');
    } else if (age <= 16) {
      recommendations.push('Kittens 8-16 weeks need 3 meals per day.');
      recommendations.push('Continue with kitten-specific food until 12 months.');
    } else if (age <= 24) {
      recommendations.push('Kittens 16-24 weeks can transition to 3 meals per day.');
      recommendations.push('Monitor growth and adjust portions as needed.');
    } else {
      recommendations.push('Older kittens (6+ months) can eat 2 meals per day.');
      recommendations.push('Transition to adult food around 12 months of age.');
    }

    recommendations.push(`Total daily calories: ${dailyCalories} kcal`);
    recommendations.push(`Always provide fresh water with meals.`);
    recommendations.push(`Kittens are obligate carnivores - ensure food is high in animal protein.`);
    recommendations.push(`Monitor your kitten's body condition and adjust portions if needed.`);

    setResult({
      mealsPerDay,
      dailyCalories,
      schedule,
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
            { name: 'Kitten Feeding Schedule Generator', href: '/tools/kitten-feeding-schedule-generator' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Kitten Feeding Schedule Generator – Meal Schedule & Portion Calculator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free kitten feeding schedule generator to create a personalized meal schedule for your kitten. Our kitten meal schedule generator calculates meal times, portion sizes, and feeding recommendations based on age and weight for optimal growth.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Kitten Feeding Schedule Generator - Create personalized meal schedules for kittens"
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
                  Kitten Age (weeks)
                </label>
                <input
                  type="number"
                  value={ageWeeks}
                  onChange={(e) => setAgeWeeks(e.target.value)}
                  placeholder="e.g., 12"
                  min="1"
                  max="52"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Weight
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(e.target.value)}
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

              <button
                onClick={generateSchedule}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Feeding Schedule
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Feeding Schedule</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Meals Per Day</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.mealsPerDay}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Calories</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyCalories} kcal</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calories Per Meal</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{Math.round(result.dailyCalories / result.mealsPerDay)} kcal</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Daily Schedule:</h3>
                <div className="space-y-3">
                  {result.schedule.map((meal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{meal.time}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{meal.notes}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-blue-600 dark:text-blue-400">{meal.amount}</div>
                      </div>
                    </div>
                  ))}
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

          {/* How Kitten Feeding Schedule Generator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Kitten Feeding Schedule Generator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our kitten feeding schedule generator creates personalized meal schedules based on your kitten's age and weight. The tool calculates the appropriate number of meals per day (younger kittens need more frequent meals), determines daily calorie needs using RER and DER formulas, and divides portions across meals with recommended meal times for optimal growth.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Kitten Feeding Schedules</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Kitten feeding frequency changes with age: very young kittens (under 8 weeks) need 4 meals per day, kittens 8-16 weeks need 3 meals per day, and older kittens (6+ months) can transition to 2 meals per day. Kittens need 2-3 times more calories per pound than adult cats for growth, so portion sizes are adjusted accordingly.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I feed my kitten?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Kitten feeding frequency depends on age. Very young kittens (under 8 weeks) need 4 meals per day. Kittens 8-16 weeks need 3 meals per day. Older kittens (6+ months) can transition to 2 meals per day. Use our generator to get a personalized schedule based on your kitten's age.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much should I feed my kitten?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Kitten food portions depend on age and weight. Kittens need 2-3 times more calories per pound than adult cats for growth. Use our calculator to determine the exact daily calories and portion sizes based on your kitten's specific needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I transition my kitten to adult cat food?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most kittens can transition to adult cat food around 12 months of age. However, some large breed cats may benefit from staying on kitten food until 18 months. Always consult your veterinarian for personalized recommendations based on your kitten's growth and development.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/cat-food-serving-size-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Cat Food Serving Size Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate serving sizes for cats</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your kitten</p>
              </a>
              <a href="/tools/puppy-feeding-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Puppy Feeding Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Generate feeding schedules for puppies</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This schedule is a general guideline. Individual kittens may have different needs. Always consult with your veterinarian for personalized feeding recommendations, especially for kittens with health conditions or special dietary needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

