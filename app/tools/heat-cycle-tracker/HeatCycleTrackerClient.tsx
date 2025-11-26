'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function HeatCycleTrackerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [lastHeatStart, setLastHeatStart] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('');
  const [result, setResult] = useState<{
    nextHeat: string;
    daysUntil: number;
    currentPhase: string;
    phaseInfo: string;
    recommendations: string[];
  } | null>(null);

  const calculateNextHeat = () => {
    if (!lastHeatStart) {
      alert('Please select last heat start date');
      return;
    }

    const lastDate = new Date(lastHeatStart);
    const today = new Date();
    
    // Default cycle lengths
    let defaultCycle = petType === 'dog' ? 180 : 21; // days
    const cycle = cycleLength ? parseInt(cycleLength) : defaultCycle;
    
    // Calculate next heat
    const nextHeat = new Date(lastDate);
    nextHeat.setDate(lastDate.getDate() + cycle);
    
    // If next heat has passed, calculate the next one
    while (nextHeat < today) {
      nextHeat.setDate(nextHeat.getDate() + cycle);
    }
    
    const daysUntil = Math.ceil((nextHeat.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    // Determine current phase
    const daysSinceLastHeat = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    let currentPhase = '';
    let phaseInfo = '';

    if (petType === 'dog') {
      if (daysSinceLastHeat <= 9) {
        currentPhase = 'Proestrus (Days 1-9)';
        phaseInfo = 'Bleeding/swelling, not receptive to males. Average duration: 9 days.';
      } else if (daysSinceLastHeat <= 18) {
        currentPhase = 'Estrus (Days 10-18)';
        phaseInfo = 'Receptive to males, fertile period. Discharge changes to pink/straw-colored. Average duration: 9 days.';
      } else if (daysSinceLastHeat <= 60) {
        currentPhase = 'Diestrus (Days 19-60)';
        phaseInfo = 'Not receptive, pregnancy or false pregnancy possible. Average duration: 60 days.';
      } else {
        currentPhase = 'Anestrus (Days 61-180)';
        phaseInfo = 'Resting phase, no reproductive activity. Average duration: 120 days.';
      }
    } else {
      // Cat heat cycle
      if (daysSinceLastHeat <= 7) {
        currentPhase = 'Estrus (Heat)';
        phaseInfo = 'Receptive to males, vocalization, rolling. Can last 4-7 days if not bred.';
      } else if (daysSinceLastHeat <= 14) {
        currentPhase = 'Interestrus';
        phaseInfo = 'Brief rest period between heats if not bred. Lasts 1-2 weeks.';
      } else {
        currentPhase = 'Anestrus';
        phaseInfo = 'Resting phase, typically in fall/winter. Can last weeks to months.';
      }
    }

    const recommendations: string[] = [];
    recommendations.push(`Next expected heat: ${nextHeat.toLocaleDateString()} (${daysUntil} days)`);
    recommendations.push(`Current phase: ${currentPhase}`);
    
    if (petType === 'dog') {
      recommendations.push('Dogs typically cycle every 5-8 months (average 6 months)');
      recommendations.push('Heat cycle lasts approximately 2-3 weeks');
      recommendations.push('Fertile period is usually days 10-18 of the cycle');
    } else {
      recommendations.push('Cats are seasonally polyestrous (multiple heats during breeding season)');
      recommendations.push('Heat cycles occur every 2-3 weeks during breeding season (spring-fall)');
      recommendations.push('Cats can have multiple cycles until bred or season ends');
    }
    
    recommendations.push('Keep unspayed females away from intact males during heat');
    recommendations.push('Consider spaying to prevent unwanted pregnancies and health benefits');

    setResult({ nextHeat: nextHeat.toLocaleDateString(), daysUntil, currentPhase, phaseInfo, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Heat Cycle Tracker', href: '/tools/heat-cycle-tracker' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Heat Cycle Tracker
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Track your pet's heat cycle and predict the next cycle
            </p>
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
                  Last Heat Start Date
                </label>
                <input
                  type="date"
                  value={lastHeatStart}
                  onChange={(e) => setLastHeatStart(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cycle Length (days) - Optional, leave blank for default
                </label>
                <input
                  type="number"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  placeholder={petType === 'dog' ? 'Default: 180 days' : 'Default: 21 days'}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={calculateNextHeat}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Next Heat
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Heat Cycle Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Next Expected Heat</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.nextHeat}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Days Until Next Heat</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.daysUntil} days</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Current Phase:</h3>
                <div className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{result.currentPhase}</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.phaseInfo}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Information & Recommendations:</h3>
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

          {/* How Heat Cycle Tracker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Heat Cycle Tracker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our heat cycle tracker helps you monitor your pet's reproductive cycle by tracking the date of the last heat cycle and calculating when the next cycle is expected. The tool considers that dogs typically go into heat every 5-8 months (average 6 months), while cats are seasonally polyestrous with cycles every 2-3 weeks during breeding season. It identifies the current phase of the cycle and provides information about cycle length and fertility periods.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Heat Cycles</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dogs typically go into heat every 5-8 months, with an average of 6 months. The heat cycle lasts approximately 2-3 weeks, with the fertile period usually occurring on days 10-18. Cats are seasonally polyestrous, having multiple heat cycles every 2-3 weeks during the breeding season (spring through fall). Each cat heat cycle typically lasts 4-7 days if the cat is not bred. Cycle length can vary between individuals, so tracking helps predict timing.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do dogs go into heat?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dogs typically go into heat every 5-8 months, with an average of 6 months (approximately 180 days). The heat cycle lasts approximately 2-3 weeks, with the fertile period usually occurring on days 10-18 of the cycle. However, cycle length can vary between individual dogs and breeds.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do cats go into heat?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Cats are seasonally polyestrous, meaning they have multiple heat cycles during the breeding season (typically spring through fall). Heat cycles occur every 2-3 weeks during the breeding season, and cats can have multiple cycles until bred or the season ends. Each heat cycle typically lasts 4-7 days if the cat is not bred.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the phases of a dog's heat cycle?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A dog's heat cycle has four phases: 1) Proestrus (Days 1-9) - bleeding/swelling, not receptive to males; 2) Estrus (Days 10-18) - receptive to males, fertile period, discharge changes to pink/straw-colored; 3) Diestrus (Days 19-60) - not receptive, pregnancy or false pregnancy possible; 4) Anestrus (Days 61-180) - resting phase, no reproductive activity.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/pregnancy-due-date-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pregnancy Due Date Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate pregnancy due dates</p>
              </a>
              <a href="/tools/vaccination-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccination Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create vaccination schedules</p>
              </a>
              <a href="/tools/vaccine-reminder" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccination schedules</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about pet health and wellness</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Heat cycles can vary between individuals. This tool provides estimates based on average cycle lengths. Always consult with your veterinarian about spaying/neutering and reproductive health.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

