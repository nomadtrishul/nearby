'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function DietTransitionTimelineToolClient() {
  const [transitionType, setTransitionType] = useState<string>('new-food');
  const [startDate, setStartDate] = useState<string>('');
  const [result, setResult] = useState<{
    timeline: Array<{ day: string; oldFood: string; newFood: string; notes: string }>;
    recommendations: string[];
  } | null>(null);

  const generateTimeline = () => {
    if (!startDate) {
      alert('Please select a start date');
      return;
    }

    const start = new Date(startDate);
    const timeline: Array<{ day: string; oldFood: string; newFood: string; notes: string }> = [];

    // Standard 7-day transition
    const days = [
      { old: 75, new: 25, day: 1, notes: 'Start with 25% new food, 75% old food' },
      { old: 75, new: 25, day: 2, notes: 'Continue 25% new food' },
      { old: 50, new: 50, day: 3, notes: 'Increase to 50% new food' },
      { old: 50, new: 50, day: 4, notes: 'Continue 50/50 mix' },
      { old: 25, new: 75, day: 5, notes: 'Increase to 75% new food' },
      { old: 25, new: 75, day: 6, notes: 'Continue 75% new food' },
      { old: 0, new: 100, day: 7, notes: '100% new food - transition complete!' },
    ];

    days.forEach(({ old, new: newPct, day, notes }) => {
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + day - 1);
      timeline.push({
        day: `Day ${day} (${currentDate.toLocaleDateString()})`,
        oldFood: `${old}%`,
        newFood: `${newPct}%`,
        notes,
      });
    });

    const recommendations: string[] = [];
    recommendations.push('Transition over 7-10 days to avoid digestive upset');
    recommendations.push('Monitor your pet for vomiting, diarrhea, or loss of appetite');
    recommendations.push('If symptoms occur, slow down the transition or return to previous ratio');
    recommendations.push('Mix foods thoroughly at each meal');
    recommendations.push('Maintain consistent meal times during transition');

    if (transitionType === 'puppy-to-adult') {
      recommendations.push('Puppies can transition to adult food around 12-18 months (varies by breed size)');
    } else if (transitionType === 'senior-diet') {
      recommendations.push('Senior pets may need slower transition - consider 10-14 days');
    } else if (transitionType === 'prescription-diet') {
      recommendations.push('Prescription diets may require veterinary guidance for transition');
    }

    setResult({ timeline, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Diet Transition Timeline Tool', href: '/tools/diet-transition-timeline-tool' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Diet Transition Timeline Tool
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Create a step-by-step timeline for transitioning your pet to a new food
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Transition Type
                </label>
                <select
                  value={transitionType}
                  onChange={(e) => setTransitionType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="new-food">New Food Brand/Type</option>
                  <option value="puppy-to-adult">Puppy/Kitten to Adult Food</option>
                  <option value="senior-diet">Transition to Senior Diet</option>
                  <option value="prescription-diet">Prescription Diet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={generateTimeline}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Transition Timeline
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Transition Timeline</h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Day</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Old Food</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">New Food</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {result.timeline.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{item.day}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.oldFood}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.newFood}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

          {/* How Diet Transition Timeline Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Diet Transition Timeline Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our diet transition timeline tool creates a step-by-step timeline for transitioning your pet to a new food by generating a day-by-day schedule with specific feeding ratios. The tool uses a standard 7-day transition starting with 25% new food and 75% old food, gradually increasing to 100% new food. It provides recommendations based on transition type (new food, puppy-to-adult, senior diet, prescription diet) and includes tips for monitoring your pet during the transition.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Food Transitions</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Transition your pet to a new food gradually over 7-10 days. Start with 25% new food and 75% old food for 2-3 days, then 50/50 for 2-3 days, then 75% new and 25% old for 2-3 days, and finally 100% new food. This gradual transition helps prevent digestive upset. Monitor your pet for any signs of digestive issues and slow down the transition if needed. Some pets may need a longer transition period (up to 2-3 weeks) if they have sensitive stomachs.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I transition my pet to a new food?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Transition your pet to a new food gradually over 7-10 days. Start with 25% new food and 75% old food for 2-3 days, then 50/50 for 2-3 days, then 75% new and 25% old for 2-3 days, and finally 100% new food. This gradual transition helps prevent digestive upset. Monitor your pet for any signs of digestive issues and slow down the transition if needed.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Why is a gradual food transition important?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A gradual food transition is important because sudden diet changes can cause digestive upset, including vomiting, diarrhea, and loss of appetite. Pets have sensitive digestive systems, and gradually introducing new food allows their digestive enzymes and gut bacteria to adjust. This is especially important for pets with sensitive stomachs or those switching between very different food types (e.g., dry to wet, or different protein sources).
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long should a food transition take?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A typical food transition should take 7-10 days. However, some pets may need a longer transition period (up to 2-3 weeks) if they have sensitive stomachs or are switching between very different food types. If your pet shows signs of digestive upset during the transition, slow down the process and extend the timeline. Always monitor your pet closely and consult your veterinarian if problems persist.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate proper portion sizes</p>
              </a>
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's weight and BMI</p>
              </a>
              <a href="/pet-nutrition" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Nutrition Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about balanced pet nutrition</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This timeline is a general guideline. Some pets may need a slower transition (10-14 days). Always monitor your pet closely and adjust as needed. Consult your veterinarian if you have concerns.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

