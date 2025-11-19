'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function SeparationAnxietyRiskCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [behaviors, setBehaviors] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [lifestyle, setLifestyle] = useState<string>('home-often');
  const [result, setResult] = useState<{
    riskLevel: string;
    score: number;
    description: string;
    symptoms: string[];
    recommendations: string[];
    urgent: boolean;
  } | null>(null);

  const allBehaviors = [
    'Destructive behavior when alone',
    'Excessive barking/meowing when alone',
    'House soiling when alone',
    'Pacing or restlessness',
    'Excessive drooling or panting',
    'Attempting to escape',
    'Following owner constantly',
    'Distress when owner prepares to leave',
    'Excessive greeting when owner returns',
    'Refusing to eat when alone',
    'Vomiting when alone',
    'Self-injury (chewing paws, etc.)',
  ];

  const allHistory = [
    'Rescued or rehomed',
    'Multiple previous owners',
    'Spent time in shelter',
    'Recent move or change',
    'Owner schedule change',
    'Loss of family member or pet',
    'Traumatic experience',
    'Lack of early socialization',
  ];

  const toggleBehavior = (behavior: string) => {
    if (behaviors.includes(behavior)) {
      setBehaviors(behaviors.filter(b => b !== behavior));
    } else {
      setBehaviors([...behaviors, behavior]);
    }
  };

  const toggleHistory = (item: string) => {
    if (history.includes(item)) {
      setHistory(history.filter(h => h !== item));
    } else {
      setHistory([...history, item]);
    }
  };

  const checkRisk = () => {
    let score = 0;
    const symptoms: string[] = [];
    const recommendations: string[] = [];
    let urgent = false;

    // Behavior scoring
    behaviors.forEach(behavior => {
      if (behavior === 'Self-injury (chewing paws, etc.)' || behavior === 'Attempting to escape') {
        score += 5;
        urgent = true;
      } else if (behavior === 'Vomiting when alone' || behavior === 'Excessive drooling or panting') {
        score += 4;
      } else if (behavior === 'Destructive behavior when alone' || behavior === 'House soiling when alone') {
        score += 3;
      } else {
        score += 2;
      }
      symptoms.push(behavior);
    });

    // History scoring
    history.forEach(item => {
      if (item === 'Rescued or rehomed' || item === 'Multiple previous owners') {
        score += 3;
      } else if (item === 'Loss of family member or pet' || item === 'Traumatic experience') {
        score += 4;
      } else {
        score += 2;
      }
    });

    // Lifestyle scoring
    if (lifestyle === 'home-often') {
      score += 3;
    } else if (lifestyle === 'home-sometimes') {
      score += 1;
    }

    // Determine risk level
    let riskLevel = '';
    let description = '';

    if (score <= 5) {
      riskLevel = 'Low Risk';
      description = 'Your pet shows minimal signs of separation anxiety. Continue monitoring and maintain good routines.';
      recommendations.push('Maintain consistent routines');
      recommendations.push('Continue providing mental stimulation');
      recommendations.push('Practice short absences to build independence');
    } else if (score <= 10) {
      riskLevel = 'Moderate Risk';
      description = 'Your pet shows some signs that may indicate separation anxiety. Take preventive measures and monitor closely.';
      recommendations.push('Start gradual desensitization training');
      recommendations.push('Create a safe, comfortable space for alone time');
      recommendations.push('Provide mental stimulation (puzzle toys, treat dispensers)');
      recommendations.push('Avoid making departures and arrivals a big deal');
      recommendations.push('Practice short absences and gradually increase duration');
    } else if (score <= 15) {
      riskLevel = 'High Risk';
      description = 'Your pet shows significant signs of separation anxiety. Professional help and behavior modification are recommended.';
      recommendations.push('⚠️ Consult a certified animal behaviorist or professional trainer');
      recommendations.push('Implement gradual desensitization program');
      recommendations.push('Create a safe, comfortable space with comfort items');
      recommendations.push('Provide mental stimulation and enrichment');
      recommendations.push('Consider anxiety-reducing products (thunder shirts, calming supplements)');
      recommendations.push('Avoid punishment - it will worsen anxiety');
      recommendations.push('Consider consulting a veterinarian about medication options');
    } else {
      riskLevel = 'Very High Risk';
      description = 'Your pet shows severe signs of separation anxiety. Immediate professional intervention is strongly recommended.';
      urgent = true;
      recommendations.push('🚨 Seek immediate professional help from a certified animal behaviorist');
      recommendations.push('Consult a veterinarian about medication options');
      recommendations.push('Implement comprehensive behavior modification program');
      recommendations.push('Ensure pet safety (prevent self-injury, escape attempts)');
      recommendations.push('Consider doggy daycare or pet sitter for immediate relief');
      recommendations.push('Never leave pet alone for extended periods until issue is addressed');
    }

    // General recommendations
    recommendations.push('Never punish anxious behavior - it makes it worse');
    recommendations.push('Use positive reinforcement for calm, independent behavior');
    recommendations.push('Provide adequate exercise before leaving');
    recommendations.push('Consider leaving background noise (TV, radio) on');

    setResult({ riskLevel, score, description, symptoms, recommendations, urgent });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Separation Anxiety Risk Checker', href: '/tools/separation-anxiety-risk-checker' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Separation Anxiety Risk Checker
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Assess your pet's risk for separation anxiety and get prevention and treatment recommendations
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
                  Owner's Time at Home
                </label>
                <select
                  value={lifestyle}
                  onChange={(e) => setLifestyle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="home-often">Home most of the time</option>
                  <option value="home-sometimes">Home sometimes</option>
                  <option value="home-rarely">Away most of the day</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Behaviors Observed (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allBehaviors.map((behavior, index) => (
                    <button
                      key={index}
                      onClick={() => toggleBehavior(behavior)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${
                        behaviors.includes(behavior)
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {behavior}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Pet History (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-64 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allHistory.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => toggleHistory(item)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${
                        history.includes(item)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={checkRisk}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Check Separation Anxiety Risk
              </button>
            </div>
          </div>

          {result && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${
              result.urgent || result.riskLevel === 'Very High Risk'
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : result.riskLevel === 'High Risk'
                ? 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-300 dark:border-orange-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
            }`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Risk Assessment</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Risk Level</div>
                  <div className={`text-3xl font-bold mb-1 ${
                    result.riskLevel === 'Very High Risk' ? 'text-red-600 dark:text-red-400' :
                    result.riskLevel === 'High Risk' ? 'text-orange-600 dark:text-orange-400' :
                    result.riskLevel === 'Moderate Risk' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-green-600 dark:text-green-400'
                  }`}>
                    {result.riskLevel}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Risk Score: {result.score}</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{result.description}</p>
                </div>
              </div>

              {result.symptoms.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Observed Symptoms:</h3>
                  <ul className="space-y-1">
                    {result.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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

          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-200">
              <strong>Important:</strong> Severe separation anxiety can cause significant distress and may lead to self-injury or property damage. If your pet shows severe symptoms, seek professional help immediately. Never punish anxious behavior, as it will worsen the problem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

