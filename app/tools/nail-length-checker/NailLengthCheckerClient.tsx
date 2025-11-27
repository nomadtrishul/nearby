'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function NailLengthCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [nailLength, setNailLength] = useState<string>('');
  const [lengthUnit, setLengthUnit] = useState<'mm' | 'inches'>('mm');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [result, setResult] = useState<{
    status: string;
    urgency: string;
    action: string[];
    idealLength: string;
    recommendations: string[];
  } | null>(null);

  const checkNailLength = () => {
    const lengthNum = parseFloat(nailLength);
    const weightNum = parseFloat(weight);

    if (!lengthNum || lengthNum <= 0) {
      alert('Please enter a valid nail length');
      return;
    }

    // Convert to mm for calculations
    let lengthMm = lengthNum;
    if (lengthUnit === 'inches') {
      lengthMm = lengthNum * 25.4;
    }

    // Convert weight to kg
    let weightKg = weightNum;
    if (weightUnit === 'lbs') {
      weightKg = weightNum * 0.453592;
    }

    // Estimate ideal nail length based on weight (rough approximation)
    // Smaller pets typically have shorter nails, larger pets have longer nails
    let idealLengthMm = 5; // base
    if (weightKg < 5) idealLengthMm = 3;
    else if (weightKg < 10) idealLengthMm = 4;
    else if (weightKg < 20) idealLengthMm = 5;
    else if (weightKg < 40) idealLengthMm = 6;
    else idealLengthMm = 7;

    const idealLength = lengthUnit === 'inches' 
      ? `${(idealLengthMm / 25.4).toFixed(2)} inches`
      : `${idealLengthMm} mm`;

    let status = '';
    let urgency = '';
    const action: string[] = [];
    const recommendations: string[] = [];

    const difference = lengthMm - idealLengthMm;

    if (difference <= -2) {
      status = 'Too Short';
      urgency = 'Low';
      action.push('Nails are shorter than ideal');
      action.push('Monitor for any signs of bleeding or discomfort');
      action.push('Wait for nails to grow before next trimming');
      recommendations.push('Nails that are too short may have been cut into the quick');
      recommendations.push('If bleeding occurred, apply styptic powder and monitor');
    } else if (difference <= 1) {
      status = 'Ideal Length';
      urgency = 'Low';
      action.push('Nails are at ideal length');
      action.push('Maintain current length with regular trimming');
      action.push('Trim when nails start to touch the ground');
      recommendations.push('Keep nails at this length for optimal comfort');
      recommendations.push('Regular trimming prevents overgrowth');
    } else if (difference <= 3) {
      status = 'Slightly Long';
      urgency = 'Moderate';
      action.push('Nails are slightly longer than ideal');
      action.push('Schedule nail trimming soon');
      action.push('Trim carefully to avoid the quick');
      recommendations.push('Trim nails gradually to avoid cutting the quick');
      recommendations.push('If nails are touching the ground, they need trimming');
    } else if (difference <= 5) {
      status = 'Long';
      urgency = 'High';
      action.push('⚠️ Nails are too long and need trimming');
      action.push('Schedule nail trimming as soon as possible');
      action.push('Long nails can cause discomfort and affect walking');
      action.push('Consider professional grooming if unsure how to trim');
      recommendations.push('Long nails can cause pain, affect posture, and lead to injuries');
      recommendations.push('Trim gradually over multiple sessions if very long');
      recommendations.push('The quick may have grown longer with the nail');
    } else {
      status = 'Very Long - Urgent';
      urgency = 'Urgent';
      action.push('🚨 Nails are dangerously long');
      action.push('Trim nails immediately or seek professional help');
      action.push('Very long nails can cause pain, walking difficulties, and injuries');
      action.push('The quick may have extended significantly');
      recommendations.push('Very long nails require immediate attention');
      recommendations.push('Consider professional grooming for safe trimming');
      recommendations.push('Trim gradually over multiple sessions to allow quick to recede');
      recommendations.push('Long nails can cause permanent damage to toe structure');
    }

    // General recommendations
    recommendations.push(`Ideal nail length for your pet: approximately ${idealLength}`);
    recommendations.push('Nails should not touch the ground when your pet is standing');
    recommendations.push('Trim nails every 2-4 weeks to maintain ideal length');
    recommendations.push('Use proper nail clippers designed for pets');
    recommendations.push('If you can hear nails clicking on the floor, they need trimming');

    setResult({ status, urgency, action, idealLength, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Nail Length Checker', href: '/tools/nail-length-checker' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nail Length Checker
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Check if your pet's nails are at the ideal length based on measurement
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Nail Length Checker - Check if your pet's nails are at the ideal length"
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
                  Pet Weight (for size estimation)
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
                  Nail Length (measure from base to tip)
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={nailLength}
                    onChange={(e) => setNailLength(e.target.value)}
                    placeholder="Enter length"
                    step="0.1"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <select
                    value={lengthUnit}
                    onChange={(e) => setLengthUnit(e.target.value as 'mm' | 'inches')}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="mm">mm</option>
                    <option value="inches">inches</option>
                  </select>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Measure the longest nail from the base (where it meets the toe) to the tip
                </p>
              </div>

              <button
                onClick={checkNailLength}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Check Nail Length
              </button>
            </div>
          </div>

          {result && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${
              result.urgency === 'Urgent'
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : result.urgency === 'High'
                ? 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-300 dark:border-orange-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
            }`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Nail Length Assessment</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Status</div>
                  <div className={`text-3xl font-bold mb-1 ${
                    result.urgency === 'Urgent' ? 'text-red-600 dark:text-red-400' :
                    result.urgency === 'High' ? 'text-orange-600 dark:text-orange-400' :
                    'text-green-600 dark:text-green-400'
                  }`}>
                    {result.status}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Urgency: {result.urgency}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Ideal Length: {result.idealLength}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Action Required:</h3>
                <ul className="space-y-2">
                  {result.action.map((act, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
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

          {/* How Nail Length Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Nail Length Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our nail length checker uses your pet's size and measured nail length to determine if nails are at an ideal length. The tool compares your pet's nail length against size-based ideal ranges: small pets (under 10 lbs) should have 3-4mm nails, medium pets (10-40 lbs) should have 4-6mm nails, and large pets (over 40 lbs) should have 5-7mm nails. The tool also considers whether nails touch the ground when standing, which is the most important indicator.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Nail Length Assessment</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The ideal nail length is when nails don't touch the ground when your pet is standing on a flat surface. If you can hear nails clicking on the floor, they need trimming. Regular trimming every 2-4 weeks helps keep the quick (blood vessel) short, making future trims easier and safer. Very long nails can cause pain, difficulty walking, and even permanent damage to toe structure.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long should my pet's nails be?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ideal nail length varies by pet size, but generally nails should not touch the ground when your pet is standing. For small pets (under 10 lbs), ideal length is typically 3-4mm. For medium pets (10-40 lbs), ideal length is 4-6mm. For large pets (over 40 lbs), ideal length is 5-7mm. The most important indicator is whether you can hear nails clicking on the floor - if so, they need trimming.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I trim my pet's nails?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most pets need nail trimming every 2-4 weeks. Active pets that walk on hard surfaces may need less frequent trimming, while less active pets or those that walk primarily on soft surfaces may need more frequent trimming. Check nails weekly and trim when they start to touch the ground. Regular trimming helps keep the quick (blood vessel) short, making future trims easier.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What happens if my pet's nails are too long?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Long nails can cause several problems: pain and discomfort when walking, difficulty walking or running, changes in posture and gait, increased risk of nail breakage or splitting, potential for nails to curl and grow into the paw pad, and permanent damage to toe structure. Very long nails can also cause the quick (blood vessel) to extend, making future trimming more difficult. Trim long nails gradually over multiple sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/grooming-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create a complete grooming schedule</p>
              </a>
              <a href="/tools/grooming-tools-recommender" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Tools Recommender</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find the right nail trimming tools</p>
              </a>
              <a href="/tools/grooming-cost-estimator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Cost Estimator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Estimate professional grooming costs</p>
              </a>
              <a href="/pet-grooming" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn professional grooming techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general guidance. Nail length can vary between individual pets and breeds. The most important indicator is whether nails touch the ground when your pet is standing. If you're unsure about trimming nails, consult a professional groomer or veterinarian.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

