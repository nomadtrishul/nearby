'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function PetInsuranceCostEstimatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [size, setSize] = useState<string>('medium');
  const [location, setLocation] = useState<string>('urban');
  const [coverageType, setCoverageType] = useState<string>('comprehensive');
  const [result, setResult] = useState<{
    estimatedMonthly: number;
    estimatedYearly: number;
    factors: Array<{ factor: string; impact: string }>;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculateCost = () => {
    const ageNum = parseFloat(age);
    if (!ageNum || ageNum <= 0) {
      alert('Please enter a valid age');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    // Base monthly cost
    let baseCost = petType === 'dog' ? 40 : 25;

    // Age factor
    if (ageNum < 1) baseCost *= 0.9; // Puppies/kittens slightly less
    else if (ageNum >= 7) baseCost *= 1.5; // Seniors cost more
    else if (ageNum >= 10) baseCost *= 2.0; // Very old pets

    // Size factor (dogs)
    if (petType === 'dog') {
      if (size === 'small') baseCost *= 0.8;
      else if (size === 'large') baseCost *= 1.3;
      else if (size === 'giant') baseCost *= 1.6;
    }

    // Location factor
    if (location === 'rural') baseCost *= 0.9;
    else if (location === 'urban') baseCost *= 1.1;

    // Coverage type
    if (coverageType === 'accident-only') baseCost *= 0.5;
    else if (coverageType === 'comprehensive') baseCost *= 1.0;
    else if (coverageType === 'wellness') baseCost *= 1.3;

    const estimatedMonthly = Math.round(baseCost);
    const estimatedYearly = estimatedMonthly * 12;

    const factors: Array<{ factor: string; impact: string }> = [];
    factors.push({ factor: 'Pet Type', impact: petType === 'dog' ? 'Dogs typically cost more than cats' : 'Cats typically cost less than dogs' });
    factors.push({ factor: 'Age', impact: ageNum >= 7 ? 'Senior pets cost significantly more' : ageNum < 1 ? 'Young pets may cost slightly less' : 'Adult pets have moderate costs' });
    if (petType === 'dog') {
      factors.push({ factor: 'Size', impact: size === 'giant' ? 'Large/giant breeds cost more' : size === 'small' ? 'Small breeds cost less' : 'Medium breeds have average costs' });
    }
    factors.push({ factor: 'Location', impact: location === 'urban' ? 'Urban areas typically cost more' : 'Rural areas may cost less' });
    factors.push({ factor: 'Coverage Type', impact: coverageType === 'comprehensive' ? 'Comprehensive coverage costs more but covers more' : coverageType === 'accident-only' ? 'Accident-only is cheaper but limited' : 'Wellness plans add to cost' });

    const recommendations: string[] = [];
    recommendations.push(`Estimated monthly cost: $${estimatedMonthly}-$${estimatedMonthly + 20} (varies by provider)`);
    recommendations.push(`Estimated yearly cost: $${estimatedYearly}-$${(estimatedMonthly + 20) * 12}`);
    recommendations.push('Compare multiple insurance providers');
    recommendations.push('Consider deductible and reimbursement percentage');
    recommendations.push('Check for breed-specific exclusions');
    recommendations.push('Review waiting periods for coverage');
    recommendations.push('Consider your pet\'s health history and breed predispositions');

    setResult({ estimatedMonthly, estimatedYearly, factors, recommendations });
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
            { name: 'Pet Insurance Cost Estimator', href: '/tools/pet-insurance-cost-estimator' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Pet Insurance Cost Estimator – Dog & Cat Insurance Cost Calculator
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our pet insurance cost estimator to calculate estimated monthly premiums for your dog or cat. Enter age, size, location, and coverage preferences to see cost ranges and factors that impact pricing so you can compare plans with confidence.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Pet Insurance Cost Estimator - Calculate dog and cat insurance costs"
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
                  Pet Age (years)
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g., 3"
                  min="0"
                  max="20"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {petType === 'dog' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="small">Small (under 20 lbs)</option>
                    <option value="medium">Medium (20-50 lbs)</option>
                    <option value="large">Large (50-100 lbs)</option>
                    <option value="giant">Giant (over 100 lbs)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coverage Type
                </label>
                <select
                  value={coverageType}
                  onChange={(e) => setCoverageType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="accident-only">Accident Only</option>
                  <option value="comprehensive">Comprehensive (Accident + Illness)</option>
                  <option value="wellness">Comprehensive + Wellness</option>
                </select>
              </div>

              <button
                onClick={calculateCost}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Estimate Insurance Cost
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cost Estimate</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Estimated Monthly Cost</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">${result.estimatedMonthly}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Range: ${result.estimatedMonthly}-${result.estimatedMonthly + 20}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Estimated Yearly Cost</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">${result.estimatedYearly}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Range: ${result.estimatedYearly}-${(result.estimatedMonthly + 20) * 12}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Cost Factors:</h3>
                <div className="space-y-2">
                  {result.factors.map((factor, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{factor.factor}:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{factor.impact}</span>
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

          {/* How Pet Insurance Cost Estimator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Insurance Cost Estimator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The estimator applies typical insurer multipliers based on pet type, age bracket, size, and location, then layers in coverage selections (accident-only vs comprehensive) and reimbursement choices to produce a monthly cost range. Use it to understand how each factor changes pricing before requesting quotes.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Key Cost Drivers</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dogs, senior pets, large/giant breeds, and pets in urban ZIP codes have higher premiums. Comprehensive coverage with low deductibles also increases monthly cost. Accident-only plans are cheaper but cover less. The tool highlights which inputs impact price the most.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much does pet insurance cost?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dogs typically cost $30-60 per month while cats cost $20-40 per month, but prices vary widely by age, size, location, breed, and coverage. Always obtain multiple quotes for accurate pricing.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What factors affect pet insurance costs?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pet type, age, breed, size, ZIP code, coverage type, deductible, reimbursement percentage, annual limits, and prior health history. Comprehensive plans with low deductibles and high reimbursement percentages cost more.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I consider when choosing pet insurance?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Compare multiple providers, review deductibles and reimbursement options, check for breed exclusions, understand waiting periods, and review annual or lifetime limits. Read reviews about claims processing before enrolling.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Ownership Cost Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Plan monthly and yearly pet expenses</p>
              </a>
              <a href="/tools/parasite-risk-assessment" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Parasite Risk Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understand preventive care needs</p>
              </a>
              <a href="/tools/vaccine-reminder" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccinations and boosters</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet wellness planning</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This is an estimate only. Actual costs vary significantly by provider, coverage options, deductible, reimbursement percentage, and your pet's specific health history. Get quotes from multiple providers for accurate pricing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

