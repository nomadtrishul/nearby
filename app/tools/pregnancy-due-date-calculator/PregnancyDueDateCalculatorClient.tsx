'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function PregnancyDueDateCalculatorPage() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [breedingDate, setBreedingDate] = useState<string>('');
  const [result, setResult] = useState<{
    dueDate: string;
    daysRemaining: number;
    timeline: Array<{ week: string; development: string; care: string }>;
    recommendations: string[];
  } | null>(null);

  const calculateDueDate = () => {
    if (!breedingDate) {
      alert('Please select breeding date');
      return;
    }

    const breed = new Date(breedingDate);
    const gestationPeriod = petType === 'dog' ? 63 : 65; // days
    const dueDate = new Date(breed);
    dueDate.setDate(breed.getDate() + gestationPeriod);

    const today = new Date();
    const daysRemaining = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    const timeline: Array<{ week: string; development: string; care: string }> = [];

    if (petType === 'dog') {
      timeline.push({
        week: 'Weeks 1-2',
        development: 'Fertilization and early cell division',
        care: 'Normal activity and diet. No special care needed yet.'
      });
      timeline.push({
        week: 'Weeks 3-4',
        development: 'Embryos implant, organ development begins',
        care: 'Continue normal routine. May notice slight behavioral changes.'
      });
      timeline.push({
        week: 'Weeks 5-6',
        development: 'Rapid fetal growth, skeleton formation',
        care: 'Increase food by 25-50%. Provide quiet, comfortable space.'
      });
      timeline.push({
        week: 'Weeks 7-8',
        development: 'Final growth phase, preparing for birth',
        care: 'Increase food by 50-100%. Limit strenuous exercise. Prepare whelping area.'
      });
      timeline.push({
        week: 'Week 9 (Days 58-63)',
        development: 'Ready for birth',
        care: 'Monitor closely. Take temperature twice daily. Normal temp drop indicates labor within 24 hours.'
      });
    } else {
      timeline.push({
        week: 'Weeks 1-2',
        development: 'Fertilization and early development',
        care: 'Normal activity and diet.'
      });
      timeline.push({
        week: 'Weeks 3-4',
        development: 'Embryos develop, placenta forms',
        care: 'Continue normal routine. May show morning sickness.'
      });
      timeline.push({
        week: 'Weeks 5-6',
        development: 'Rapid fetal growth',
        care: 'Increase food gradually. Provide quiet nesting area.'
      });
      timeline.push({
        week: 'Weeks 7-8',
        development: 'Final growth, preparing for birth',
        care: 'Increase food significantly. Limit activity. Prepare nesting box.'
      });
      timeline.push({
        week: 'Week 9 (Days 60-65)',
        development: 'Ready for birth',
        care: 'Monitor closely. Look for nesting behavior. Labor signs include restlessness and vocalization.'
      });
    }

    const recommendations: string[] = [];
    recommendations.push(`Due date: ${dueDate.toLocaleDateString()} (${daysRemaining} days remaining)`);
    recommendations.push('Schedule veterinary checkup around day 30-35 for confirmation and health check');
    recommendations.push('Increase food gradually starting week 5-6');
    recommendations.push('Provide quiet, comfortable nesting/whelping area');
    recommendations.push('Limit strenuous exercise in later stages');
    recommendations.push('Monitor for signs of complications (discharge, lethargy, loss of appetite)');
    recommendations.push('Have emergency veterinary contact ready');

    setResult({ dueDate: dueDate.toLocaleDateString(), daysRemaining, timeline, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Pregnancy Due Date Calculator', href: '/tools/pregnancy-due-date-calculator' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Pregnancy Due Date Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Calculate your pet's pregnancy due date and track development timeline
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
                  Breeding Date (or estimated conception date)
                </label>
                <input
                  type="date"
                  value={breedingDate}
                  onChange={(e) => setBreedingDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={calculateDueDate}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Due Date
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Pregnancy Timeline</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Due Date</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{result.dueDate}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {result.daysRemaining > 0 ? `${result.daysRemaining} days remaining` : result.daysRemaining === 0 ? 'Due today!' : `${Math.abs(result.daysRemaining)} days overdue`}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Development Timeline:</h3>
                <div className="space-y-4">
                  {result.timeline.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">{item.week}</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 mb-1"><strong>Development:</strong> {item.development}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400"><strong>Care:</strong> {item.care}</div>
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

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Gestation periods can vary. Dogs: 58-68 days (average 63). Cats: 63-67 days (average 65). Always consult with your veterinarian for proper prenatal care and monitoring.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

