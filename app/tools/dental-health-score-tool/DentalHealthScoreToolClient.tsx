'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function DentalHealthScoreToolClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [breath, setBreath] = useState<string>('3');
  const [gums, setGums] = useState<string>('3');
  const [teeth, setTeeth] = useState<string>('3');
  const [tartar, setTartar] = useState<string>('3');
  const [result, setResult] = useState<{
    score: number;
    status: string;
    recommendations: string[];
    urgency: string;
  } | null>(null);

  const calculateScore = () => {
    const breathScore = parseInt(breath);
    const gumsScore = parseInt(gums);
    const teethScore = parseInt(teeth);
    const tartarScore = parseInt(tartar);
    
    const totalScore = breathScore + gumsScore + teethScore + tartarScore;
    const averageScore = totalScore / 4;
    
    let status = '';
    let urgency = '';
    const recommendations: string[] = [];

    if (averageScore <= 2) {
      status = 'Excellent';
      urgency = 'Low';
      recommendations.push('Excellent dental health! Maintain current routine.');
      recommendations.push('Continue regular brushing (daily recommended)');
      recommendations.push('Annual dental checkups');
      recommendations.push('Consider dental chews and toys');
    } else if (averageScore <= 3) {
      status = 'Good';
      urgency = 'Low';
      recommendations.push('Good dental health with minor issues');
      recommendations.push('Increase brushing frequency');
      recommendations.push('Schedule dental checkup within 6 months');
      recommendations.push('Consider professional cleaning');
    } else if (averageScore <= 4) {
      status = 'Fair';
      urgency = 'Moderate';
      recommendations.push('Dental health needs attention');
      recommendations.push('Schedule veterinary dental exam soon');
      recommendations.push('Start or increase daily brushing');
      recommendations.push('Professional cleaning may be needed');
      recommendations.push('Consider dental diet or treats');
    } else if (averageScore <= 5) {
      status = 'Poor';
      urgency = 'High';
      recommendations.push('⚠️ Dental health is poor - veterinary attention needed');
      recommendations.push('Schedule dental exam and cleaning promptly');
      recommendations.push('May require professional cleaning under anesthesia');
      recommendations.push('Start daily dental care routine');
      recommendations.push('May need dental diet or prescription dental care');
    } else {
      status = 'Critical';
      urgency = 'Urgent';
      recommendations.push('🚨 CRITICAL: Immediate veterinary dental care required');
      recommendations.push('Schedule dental exam immediately');
      recommendations.push('Likely needs professional cleaning and possible extractions');
      recommendations.push('May have dental disease, infection, or pain');
      recommendations.push('Do not delay - dental issues can affect overall health');
    }

    setResult({ score: Math.round(averageScore * 10) / 10, status, recommendations, urgency });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Dental Health Score Tool', href: '/tools/dental-health-score-tool' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Pet Dental Health Score Tool – Dog & Cat Dental Assessment
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our dental health score tool to rate your dog or cat's breath, gums, teeth, and tartar buildup. The tool calculates a dental health score and provides personalized recommendations to discuss with your veterinarian.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Pet Dental Health Score Tool - Assess dog and cat dental health"
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

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Rate Each Aspect (1 = Excellent, 5 = Poor)</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Breath Odor
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={breath}
                      onChange={(e) => setBreath(e.target.value)}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>1 - Fresh</span>
                      <span className="font-semibold">Current: {breath}</span>
                      <span>5 - Very Bad</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Gum Condition
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={gums}
                      onChange={(e) => setGums(e.target.value)}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>1 - Pink & Healthy</span>
                      <span className="font-semibold">Current: {gums}</span>
                      <span>5 - Red/Swollen/Bleeding</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tooth Condition
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={teeth}
                      onChange={(e) => setTeeth(e.target.value)}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>1 - Clean & White</span>
                      <span className="font-semibold">Current: {teeth}</span>
                      <span>5 - Discolored/Broken</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tartar/Buildup
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={tartar}
                      onChange={(e) => setTartar(e.target.value)}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>1 - None</span>
                      <span className="font-semibold">Current: {tartar}</span>
                      <span>5 - Heavy Buildup</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={calculateScore}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Dental Health Score
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Dental Health Assessment</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Dental Health Score</div>
                  <div className={`text-5xl font-bold mb-2 ${
                    result.score <= 2 ? 'text-green-600 dark:text-green-400' :
                    result.score <= 3 ? 'text-blue-600 dark:text-blue-400' :
                    result.score <= 4 ? 'text-yellow-600 dark:text-yellow-400' :
                    result.score <= 5 ? 'text-orange-600 dark:text-orange-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {result.score}/5
                  </div>
                  <div className={`text-xl font-semibold ${
                    result.score <= 2 ? 'text-green-600 dark:text-green-400' :
                    result.score <= 3 ? 'text-blue-600 dark:text-blue-400' :
                    result.score <= 4 ? 'text-yellow-600 dark:text-yellow-400' :
                    result.score <= 5 ? 'text-orange-600 dark:text-orange-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {result.status}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Urgency: {result.urgency}</div>
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

          {/* How Dental Health Score Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Dental Health Score Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Rate four categories—breath odor, gum health, tooth condition, and tartar buildup—on a 1-5 scale. The tool averages the scores, interprets the overall dental status, and suggests next steps like professional cleanings or at-home care.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">What Each Score Means</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Scores 1-2 indicate healthy teeth and gums, 3 suggests early plaque or gingivitis, 4 signals moderate disease needing veterinary attention, and 5 indicates severe dental disease requiring immediate care.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I assess my pet's dental health?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Evaluate breath, gum color, tooth appearance, and tartar buildup. Healthy gums are pink, teeth are white, and breath is mild. Red, swollen gums or persistent odor indicate disease.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What does a high dental score mean?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Scores of 4 or 5 mean your pet likely has moderate to severe dental disease requiring professional cleaning, possible extractions, and a daily dental routine.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I check my pet's dental health?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Check weekly at home and schedule annual veterinary dental exams. Daily brushing or dental chews help prevent plaque buildup.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/pet-insurance-cost-estimator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Insurance Estimator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Budget for dental procedures</p>
              </a>
              <a href="/tools/safe-human-foods-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Safe Human Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Choose tooth-friendly treats</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover;border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Maintain healthy weight</p>
              </a>
              <a href="/tools/pet-hydration-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Hydration Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Support overall oral health</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides a general assessment. Always consult your veterinarian for professional dental evaluation. Dental disease can lead to serious health problems if left untreated.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

