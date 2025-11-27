'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function EarCleaningReminderToolClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [earType, setEarType] = useState<string>('upright');
  const [lastCleaned, setLastCleaned] = useState<string>('');
  const [earCondition, setEarCondition] = useState<string>('normal');
  const [result, setResult] = useState<{
    nextCleaning: string;
    frequency: string;
    daysSince: number;
    status: string;
    instructions: string[];
    recommendations: string[];
  } | null>(null);

  const calculateReminder = () => {
    if (!lastCleaned) {
      alert('Please enter the last cleaning date');
      return;
    }

    const lastDate = new Date(lastCleaned);
    const today = new Date();
    const daysSince = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

    let frequencyDays = 14; // default 2 weeks
    let frequency = 'Every 2 weeks';
    let status = '';
    const instructions: string[] = [];
    const recommendations: string[] = [];

    // Ear type factor
    if (earType === 'floppy') {
      frequencyDays = 7;
      frequency = 'Weekly';
      recommendations.push('Floppy ears trap moisture and need more frequent cleaning');
    } else if (earType === 'upright') {
      frequencyDays = 14;
      frequency = 'Every 2 weeks';
      recommendations.push('Upright ears have better air circulation');
    } else if (earType === 'hairy') {
      frequencyDays = 10;
      frequency = 'Every 1-2 weeks';
      recommendations.push('Hairy ears may need more frequent cleaning and hair removal');
    }

    // Ear condition factor
    if (earCondition === 'waxy' || earCondition === 'dirty') {
      frequencyDays = Math.min(frequencyDays, 7);
      frequency = 'Weekly or more frequently';
      recommendations.push('Waxy or dirty ears need more frequent cleaning');
    } else if (earCondition === 'infection') {
      frequencyDays = 3;
      frequency = 'As directed by veterinarian';
      recommendations.push('Follow your veterinarian\'s specific cleaning instructions');
      recommendations.push('Do not clean infected ears without veterinary guidance');
    } else if (earCondition === 'allergies') {
      frequencyDays = 7;
      frequency = 'Weekly';
      recommendations.push('Pets with allergies may need more frequent ear care');
    }

    // Calculate next cleaning date
    const nextDate = new Date(lastDate);
    nextDate.setDate(nextDate.getDate() + frequencyDays);
    const nextCleaning = nextDate.toLocaleDateString();

    // Determine status
    if (daysSince < frequencyDays - 2) {
      status = 'Up to Date';
    } else if (daysSince < frequencyDays) {
      status = 'Due Soon';
    } else if (daysSince < frequencyDays + 7) {
      status = 'Overdue';
    } else {
      status = 'Long Overdue';
    }

    // Instructions
    instructions.push('Use a pet-specific ear cleaner recommended by your veterinarian');
    instructions.push('Never use cotton swabs deep in the ear canal');
    instructions.push('Gently wipe the outer ear and visible parts of the ear canal');
    instructions.push('Massage the base of the ear after applying cleaner');
    instructions.push('Let your pet shake their head to remove excess cleaner');
    instructions.push('Wipe away any remaining debris with a soft cloth or cotton ball');
    instructions.push('Stop if your pet shows signs of pain or discomfort');

    // Additional recommendations
    recommendations.push(`Recommended cleaning frequency: ${frequency}`);
    recommendations.push('Check ears weekly for signs of redness, odor, or discharge');
    recommendations.push('Regular cleaning helps prevent ear infections');
    recommendations.push('If you notice unusual odor, discharge, or redness, consult your veterinarian');
    recommendations.push('Some pets may need professional ear cleaning');

    if (earType === 'hairy') {
      recommendations.push('Consider having excess ear hair removed by a groomer or veterinarian');
    }

    setResult({ nextCleaning, frequency, daysSince, status, instructions, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Ear-Cleaning Reminder Tool', href: '/tools/ear-cleaning-reminder-tool' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ear-Cleaning Reminder Tool
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Track your pet's ear cleaning schedule and get personalized reminders
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Ear-Cleaning Reminder Tool - Track your pet's ear cleaning schedule"
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
                  Ear Type
                </label>
                <select
                  value={earType}
                  onChange={(e) => setEarType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="upright">Upright</option>
                  <option value="floppy">Floppy</option>
                  <option value="hairy">Hairy (excess hair in ears)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ear Condition
                </label>
                <select
                  value={earCondition}
                  onChange={(e) => setEarCondition(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="normal">Normal</option>
                  <option value="waxy">Waxy</option>
                  <option value="dirty">Often Dirty</option>
                  <option value="allergies">Allergies</option>
                  <option value="infection">Current Infection (follow vet advice)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Ear Cleaning Date
                </label>
                <input
                  type="date"
                  value={lastCleaned}
                  onChange={(e) => setLastCleaned(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={calculateReminder}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Next Cleaning
              </button>
            </div>
          </div>

          {result && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${
              result.status === 'Long Overdue'
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : result.status === 'Overdue'
                ? 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-300 dark:border-orange-800'
                : result.status === 'Due Soon'
                ? 'from-yellow-50 to-blue-50 dark:from-yellow-900/20 dark:to-blue-900/20 border-yellow-300 dark:border-yellow-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
            }`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ear Cleaning Schedule</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Status</div>
                  <div className={`text-3xl font-bold mb-1 ${
                    result.status === 'Long Overdue' ? 'text-red-600 dark:text-red-400' :
                    result.status === 'Overdue' ? 'text-orange-600 dark:text-orange-400' :
                    result.status === 'Due Soon' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-green-600 dark:text-green-400'
                  }`}>
                    {result.status}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Days since last cleaning: {result.daysSince}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Next cleaning due: {result.nextCleaning}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Frequency: {result.frequency}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Cleaning Instructions:</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  {result.instructions.map((instruction, index) => (
                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300">{instruction}</li>
                  ))}
                </ol>
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

          {/* How Ear Cleaning Reminder Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Ear Cleaning Reminder Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our ear cleaning reminder tool helps you track your pet's ear cleaning schedule based on ear type, condition, and the date of the last cleaning. The tool calculates when the next cleaning is due based on recommended frequencies (floppy-eared dogs typically need weekly cleaning, while upright ears may need cleaning every 2 weeks). It provides status updates (on schedule, due soon, overdue, long overdue) and personalized cleaning instructions.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Ear Cleaning Frequency</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ear cleaning frequency depends on your pet's ear type and condition. Most pets need ear cleaning every 1-2 weeks. Floppy-eared dogs may need weekly cleaning, while upright ears may need cleaning every 2 weeks. Pets with waxy ears, allergies, or excess ear hair may need more frequent cleaning. Always check ears weekly for signs of problems, and clean when they appear dirty or waxy. Never insert anything deep into the ear canal.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I clean my pet's ears?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ear cleaning frequency depends on your pet's ear type and condition. Most pets need ear cleaning every 1-2 weeks. Floppy-eared dogs may need weekly cleaning, while upright ears may need cleaning every 2 weeks. Pets with waxy ears, allergies, or excess ear hair may need more frequent cleaning. Always check ears weekly for signs of problems, and clean when they appear dirty or waxy.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I clean my pet's ears safely?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To clean ears safely: use a pet-specific ear cleaner recommended by your veterinarian, apply cleaner to the ear canal, gently massage the base of the ear, let your pet shake their head, then wipe away debris from the outer ear and visible parts of the ear canal with a soft cloth or cotton ball. Never use cotton swabs deep in the ear canal, and stop if your pet shows signs of pain or discomfort.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are signs of ear problems in pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Signs of ear problems include: redness or swelling, foul odor, discharge (brown, yellow, or bloody), excessive scratching or head shaking, pain when touching ears, tilting head to one side, loss of balance, or behavioral changes. If you notice any of these signs, stop cleaning and consult your veterinarian immediately. Do not attempt to clean infected ears without veterinary guidance.
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
              <a href="/tools/pet-smell-diagnosis-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Smell Diagnosis Tool</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify ear odor causes</p>
              </a>
              <a href="/tools/grooming-tools-recommender" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Tools Recommender</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find the right ear cleaning tools</p>
              </a>
              <a href="/pet-grooming" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn professional grooming techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Warning:</strong> Never insert anything deep into your pet's ear canal. If you notice signs of infection (redness, swelling, foul odor, discharge, excessive scratching), stop cleaning and consult your veterinarian immediately. Do not clean infected ears without veterinary guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

