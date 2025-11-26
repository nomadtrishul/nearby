'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function ObedienceLevelAssessmentToolClient() {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    level: string;
    score: number;
    description: string;
    strengths: string[];
    areasToImprove: string[];
    recommendations: string[];
  } | null>(null);

  const questions = [
    { id: 'sit', question: 'Does your pet respond to "sit" command?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'stay', question: 'Does your pet respond to "stay" command?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'come', question: 'Does your pet come when called?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'down', question: 'Does your pet respond to "down" command?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'leave', question: 'Does your pet respond to "leave it" command?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'heel', question: 'Does your pet walk nicely on leash?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'wait', question: 'Does your pet wait at doors/gates?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'distractions', question: 'Does your pet respond to commands with distractions?', options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'] },
  ];

  const updateResponse = (id: string, value: string) => {
    setResponses({ ...responses, [id]: value });
  };

  const assessLevel = () => {
    if (Object.keys(responses).length < questions.length) {
      alert('Please answer all questions');
      return;
    }

    let score = 0;
    const strengths: string[] = [];
    const areasToImprove: string[] = [];
    const recommendations: string[] = [];

    questions.forEach(q => {
      const response = responses[q.id];
      if (response === 'Always') score += 5;
      else if (response === 'Usually') score += 4;
      else if (response === 'Sometimes') score += 3;
      else if (response === 'Rarely') score += 2;
      else score += 1;

      if (response === 'Always' || response === 'Usually') {
        strengths.push(q.question.replace('Does your pet ', '').replace('?', ''));
      } else if (response === 'Rarely' || response === 'Never') {
        areasToImprove.push(q.question.replace('Does your pet ', '').replace('?', ''));
      }
    });

    const maxScore = questions.length * 5;
    const percentage = Math.round((score / maxScore) * 100);

    let level = '';
    let description = '';

    if (percentage >= 85) {
      level = 'Advanced';
      description = 'Your pet has excellent obedience skills and responds reliably to commands, even with distractions.';
      recommendations.push('Consider advanced training or dog sports');
      recommendations.push('Continue practicing to maintain skills');
      recommendations.push('Teach new, more complex commands');
    } else if (percentage >= 65) {
      level = 'Intermediate';
      description = 'Your pet has good basic obedience but may need work on consistency or with distractions.';
      recommendations.push('Practice commands in different environments');
      recommendations.push('Work on reliability with distractions');
      recommendations.push('Continue reinforcing basic commands');
    } else if (percentage >= 40) {
      level = 'Beginner';
      description = 'Your pet is learning basic obedience but needs more consistent training and practice.';
      recommendations.push('Focus on one command at a time');
      recommendations.push('Use positive reinforcement consistently');
      recommendations.push('Practice daily in short sessions');
      recommendations.push('Consider enrolling in a basic obedience class');
    } else {
      level = 'Needs Training';
      description = 'Your pet needs to start or restart basic obedience training. Focus on fundamentals.';
      recommendations.push('Start with basic commands (sit, come)');
      recommendations.push('Use high-value treats for motivation');
      recommendations.push('Keep training sessions short and positive');
      recommendations.push('Consider professional training or obedience classes');
      recommendations.push('Be patient and consistent');
    }

    // General recommendations
    recommendations.push('Use positive reinforcement methods');
    recommendations.push('Practice regularly - consistency is key');
    recommendations.push('Gradually increase difficulty and distractions');
    recommendations.push('End training sessions on a positive note');

    setResult({ level, score: percentage, description, strengths, areasToImprove, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Obedience Level Assessment Tool', href: '/tools/obedience-level-assessment-tool' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Obedience Level Assessment Tool
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Assess your pet's current obedience level and get personalized training recommendations
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              {questions.map((q, index) => (
                <div key={q.id}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {index + 1}. {q.question}
                  </label>
                  <select
                    value={responses[q.id] || ''}
                    onChange={(e) => updateResponse(q.id, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select an answer</option>
                    {q.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}

              <button
                onClick={assessLevel}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Assess Obedience Level
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Assessment Results</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Obedience Level</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{result.level}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Score: {result.score}%</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{result.description}</p>
                </div>
              </div>

              {result.strengths.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Strengths:</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.areasToImprove.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Areas to Improve:</h3>
                  <ul className="space-y-1">
                    {result.areasToImprove.map((area, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 mt-1">→</span>
                        <span>{area}</span>
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
                      <span className="text-green-500 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Obedience Level Assessment Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Obedience Level Assessment Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our obedience level assessment tool evaluates your pet's obedience through a comprehensive questionnaire covering basic commands (sit, stay, come, down, leave it, heel), reliability, response time, and performance with distractions. The tool calculates a score based on your responses and determines the obedience level (Advanced, Intermediate, Beginner, or Needs Training). It identifies strengths and areas for improvement, providing personalized training recommendations.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Obedience Levels</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Obedience levels typically include: Advanced (85%+) - excellent reliability even with distractions, Intermediate (65-84%) - good basic obedience with some inconsistency, Beginner (40-64%) - learning basics but needs more practice, and Needs Training (&lt;40%) - requires fundamental training. Levels are based on consistency, reliability, and performance with distractions. Regular training and practice will improve obedience over time.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I assess my pet's obedience level?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Assess obedience by evaluating how reliably your pet responds to basic commands (sit, stay, come, down, leave it, heel) in different situations and with distractions. Consider consistency, response time, and whether commands work in various environments. Our assessment tool provides a structured way to evaluate multiple aspects of obedience and get personalized recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the different obedience levels?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Obedience levels typically include: Advanced (85%+) - excellent reliability even with distractions, Intermediate (65-84%) - good basic obedience with some inconsistency, Beginner (40-64%) - learning basics but needs more practice, and Needs Training (&lt;40%) - requires fundamental training. Levels are based on consistency, reliability, and performance with distractions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I improve my pet's obedience level?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Improve obedience by: practicing commands regularly and consistently, using positive reinforcement, gradually increasing difficulty and distractions, practicing in different environments, keeping training sessions short and positive, focusing on one command at a time, and considering professional training or obedience classes. Consistency and patience are key to improving obedience.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track training progress</p>
              </a>
              <a href="/tools/behavior-problem-diagnosis-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Behavior Problem Diagnosis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify behavior issues</p>
              </a>
              <a href="/tools/separation-anxiety-risk-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Separation Anxiety Risk Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Assess anxiety risk factors</p>
              </a>
              <a href="/pet-training" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Training Guides</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn effective training techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This assessment provides a general overview. Obedience levels can vary based on environment, distractions, and individual pet characteristics. Regular training and practice will improve obedience over time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

