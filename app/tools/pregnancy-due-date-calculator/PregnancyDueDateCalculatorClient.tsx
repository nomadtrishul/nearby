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

          {/* How Pregnancy Due Date Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pregnancy Due Date Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pregnancy due date calculator calculates your pet's due date based on the breeding date and pet type. Dogs typically have a gestation period of 58-68 days (average 63 days), while cats typically have a gestation period of 63-67 days (average 65 days). The tool provides a week-by-week development timeline, showing fetal development stages and care recommendations for each week of pregnancy.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet Pregnancy</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pet pregnancy requires careful monitoring and proper care. Pregnant pets need gradual increases in food starting week 5-6, a quiet nesting area, limited strenuous exercise in later stages, and regular veterinary checkups. It's important to track the breeding date accurately and monitor for signs of complications. Always consult your veterinarian for proper prenatal care and emergency contact information.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long is a dog's pregnancy?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A dog's pregnancy (gestation period) typically lasts 58-68 days, with an average of 63 days from breeding. The exact length can vary by breed and individual dog. It's important to track the breeding date and monitor the pregnancy closely. Schedule a veterinary checkup around day 30-35 for confirmation and health check.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long is a cat's pregnancy?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A cat's pregnancy (gestation period) typically lasts 63-67 days, with an average of 65 days from breeding. The exact length can vary by individual cat. Monitor the pregnancy closely and schedule a veterinary checkup around day 30-35 for confirmation and health check. Provide a quiet nesting area as the due date approaches.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What care does a pregnant pet need?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pregnant pets need: 1) Gradual increase in food starting week 5-6 (25-50% increase, up to 50-100% in later stages); 2) Quiet, comfortable nesting/whelping area; 3) Limited strenuous exercise in later stages; 4) Regular veterinary checkups (around day 30-35 for confirmation); 5) Monitoring for signs of complications (discharge, lethargy, loss of appetite); 6) Emergency veterinary contact ready. Always consult your veterinarian for proper prenatal care.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/heat-cycle-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Heat Cycle Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track reproductive cycles</p>
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
              <strong>Note:</strong> Gestation periods can vary. Dogs: 58-68 days (average 63). Cats: 63-67 days (average 65). Always consult with your veterinarian for proper prenatal care and monitoring.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

