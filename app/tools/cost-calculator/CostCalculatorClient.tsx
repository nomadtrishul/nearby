'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function CostCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [size, setSize] = useState<string>('medium');
  const [foodType, setFoodType] = useState<string>('premium');
  const [insurance, setInsurance] = useState<boolean>(true);
  const [grooming, setGrooming] = useState<string>('monthly');
  const [result, setResult] = useState<{
    monthly: number;
    yearly: number;
    breakdown: { category: string; monthly: number; yearly: number }[];
    totalLifetime: number;
  } | null>(null);

  const calculateCosts = () => {
    const breakdown: { category: string; monthly: number; yearly: number }[] = [];

    // Food costs
    let foodMonthly = 0;
    if (petType === 'dog') {
      if (size === 'small') foodMonthly = foodType === 'budget' ? 20 : foodType === 'mid' ? 40 : 60;
      else if (size === 'medium') foodMonthly = foodType === 'budget' ? 30 : foodType === 'mid' ? 60 : 90;
      else if (size === 'large') foodMonthly = foodType === 'budget' ? 40 : foodType === 'mid' ? 80 : 120;
      else foodMonthly = foodType === 'budget' ? 50 : foodType === 'mid' ? 100 : 150;
    } else {
      foodMonthly = foodType === 'budget' ? 15 : foodType === 'mid' ? 30 : 50;
    }
    breakdown.push({ category: 'Food & Treats', monthly: foodMonthly, yearly: foodMonthly * 12 });

    // Veterinary care
    const vetMonthly = petType === 'dog' 
      ? (size === 'small' ? 30 : size === 'medium' ? 40 : size === 'large' ? 50 : 60)
      : 35;
    breakdown.push({ category: 'Veterinary Care (Routine)', monthly: vetMonthly, yearly: vetMonthly * 12 });

    // Emergency/Unplanned vet (average)
    const emergencyMonthly = 25;
    breakdown.push({ category: 'Emergency/Unplanned Vet', monthly: emergencyMonthly, yearly: emergencyMonthly * 12 });

    // Pet insurance
    if (insurance) {
      const insuranceMonthly = petType === 'dog'
        ? (size === 'small' ? 30 : size === 'medium' ? 40 : size === 'large' ? 50 : 60)
        : 25;
      breakdown.push({ category: 'Pet Insurance', monthly: insuranceMonthly, yearly: insuranceMonthly * 12 });
    }

    // Grooming
    let groomingMonthly = 0;
    if (grooming === 'monthly') groomingMonthly = petType === 'dog' ? 50 : 30;
    else if (grooming === 'quarterly') groomingMonthly = petType === 'dog' ? 17 : 10;
    else if (grooming === 'professional') groomingMonthly = petType === 'dog' ? 80 : 50;
    if (groomingMonthly > 0) {
      breakdown.push({ category: 'Grooming', monthly: groomingMonthly, yearly: groomingMonthly * 12 });
    }

    // Supplies (toys, beds, leashes, etc.)
    const suppliesMonthly = 20;
    breakdown.push({ category: 'Supplies & Toys', monthly: suppliesMonthly, yearly: suppliesMonthly * 12 });

    // Training (first year or ongoing)
    const trainingMonthly = petType === 'dog' ? 15 : 5;
    breakdown.push({ category: 'Training/Classes', monthly: trainingMonthly, yearly: trainingMonthly * 12 });

    // Boarding/Pet sitting (occasional)
    const boardingMonthly = 30;
    breakdown.push({ category: 'Boarding/Pet Sitting', monthly: boardingMonthly, yearly: boardingMonthly * 12 });

    // Other (licenses, etc.)
    const otherMonthly = 5;
    breakdown.push({ category: 'Licenses & Other', monthly: otherMonthly, yearly: otherMonthly * 12 });

    const monthly = breakdown.reduce((sum, item) => sum + item.monthly, 0);
    const yearly = monthly * 12;
    const totalLifetime = yearly * (petType === 'dog' ? 12 : 15); // Average lifespan

    setResult({
      monthly: Math.round(monthly),
      yearly: Math.round(yearly),
      breakdown,
      totalLifetime: Math.round(totalLifetime),
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Cost Calculator', href: '/tools/cost-calculator' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Ownership Cost Calculator – Dog & Cat Expenses Calculator
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet ownership cost calculator to estimate the total expenses for your dog or cat. Our dog cost calculator and cat cost calculator include food, veterinary care, grooming, insurance, and supplies to help you plan your budget and understand the financial commitment of pet ownership.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Ownership Cost Calculator - Estimate total expenses for dogs and cats"
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

              {/* Size (for dogs) */}
              {petType === 'dog' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Dog Size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="small">Small (under 20 lbs)</option>
                    <option value="medium">Medium (20-50 lbs)</option>
                    <option value="large">Large (50-90 lbs)</option>
                    <option value="giant">Giant (over 90 lbs)</option>
                  </select>
                </div>
              )}

              {/* Food Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Food Quality
                </label>
                <select
                  value={foodType}
                  onChange={(e) => setFoodType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="budget">Budget Food</option>
                  <option value="mid">Mid-Range Food</option>
                  <option value="premium">Premium Food</option>
                </select>
              </div>

              {/* Insurance */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={insurance}
                    onChange={(e) => setInsurance(e.target.checked)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Include Pet Insurance
                  </span>
                </label>
              </div>

              {/* Grooming */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Grooming Frequency
                </label>
                <select
                  value={grooming}
                  onChange={(e) => setGrooming(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="none">None / DIY</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="monthly">Monthly</option>
                  <option value="professional">Professional (High Maintenance)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateCosts}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Costs
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cost Estimate</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Monthly</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ${result.monthly}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Yearly</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      ${result.yearly.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Lifetime*</h3>
                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                      ${result.totalLifetime.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Cost Breakdown
                  </h3>
                  <div className="space-y-3">
                    {result.breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item.category}</span>
                        <div className="text-right">
                          <span className="text-gray-900 dark:text-white font-semibold">${item.monthly}/mo</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">(${item.yearly.toLocaleString()}/yr)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> *Lifetime estimate based on average lifespan ({petType === 'dog' ? '12' : '15'} years). Actual costs may vary significantly based on location, health conditions, lifestyle, and other factors. This is an estimate for planning purposes only.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How Pet Cost Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Ownership Cost Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet ownership cost calculator estimates expenses based on pet type, size, food quality, and lifestyle choices. The calculator includes monthly and yearly costs for food, routine veterinary care, grooming, pet insurance, supplies, and other expenses. It also provides lifetime cost projections to help you understand the long-term financial commitment of pet ownership.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet Ownership Costs</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pet ownership costs vary significantly based on factors like pet type (dog vs cat), size, location, food quality, and lifestyle choices. On average, dog owners spend $1,200-$2,000 per year, while cat owners spend $800-$1,500 per year. Emergency veterinary care and unexpected health issues can significantly increase these costs, so it's important to budget accordingly.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much does it cost to own a pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pet ownership costs vary significantly based on pet type, size, location, and lifestyle choices. On average, dog owners spend $1,200-$2,000 per year, while cat owners spend $800-$1,500 per year. This includes food, veterinary care, grooming, insurance, supplies, and other expenses. Emergency veterinary care and unexpected health issues can significantly increase costs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the main costs of pet ownership?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The main costs include: food and treats, routine veterinary care, emergency/unplanned veterinary care, pet insurance (optional), grooming, supplies and toys, training/classes, boarding/pet sitting, and licenses. Food and veterinary care typically make up the largest portion of pet expenses.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is pet insurance worth it?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pet insurance can be valuable for covering unexpected veterinary expenses, especially emergency care and chronic conditions. It typically costs $25-$60 per month depending on coverage and pet type. Consider your pet's breed (some breeds have higher health risks), your financial situation, and ability to cover unexpected expenses when deciding.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/breed-selector" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Breed Selector</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find the perfect pet breed for your lifestyle</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
              <a href="/tools/vaccine-reminder" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccination schedules for your pet</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This calculator provides general cost estimates based on average prices. Actual costs can vary significantly based on location, pet health, lifestyle choices, and other factors. Emergency veterinary care, unexpected health issues, and other unplanned expenses can significantly increase costs. This tool is for planning purposes only and should not be considered a guarantee of actual expenses.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

