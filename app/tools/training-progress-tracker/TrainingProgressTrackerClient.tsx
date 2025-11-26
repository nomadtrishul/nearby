'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function TrainingProgressTrackerClient() {
  const [commands, setCommands] = useState<Array<{ name: string; level: string }>>([
    { name: 'Sit', level: 'not-started' },
    { name: 'Stay', level: 'not-started' },
    { name: 'Come', level: 'not-started' },
    { name: 'Down', level: 'not-started' },
    { name: 'Leave it', level: 'not-started' },
    { name: 'Drop it', level: 'not-started' },
    { name: 'Heel', level: 'not-started' },
    { name: 'Wait', level: 'not-started' },
  ]);
  const [behaviors, setBehaviors] = useState<Array<{ name: string; level: string }>>([
    { name: 'House training', level: 'not-started' },
    { name: 'Leash walking', level: 'not-started' },
    { name: 'Socialization', level: 'not-started' },
    { name: 'Crate training', level: 'not-started' },
    { name: 'Bite inhibition', level: 'not-started' },
  ]);
  const [result, setResult] = useState<{
    overallProgress: number;
    level: string;
    nextSteps: string[];
    recommendations: string[];
  } | null>(null);

  const updateCommand = (index: number, level: string) => {
    const updated = [...commands];
    updated[index].level = level;
    setCommands(updated);
  };

  const updateBehavior = (index: number, level: string) => {
    const updated = [...behaviors];
    updated[index].level = level;
    setBehaviors(updated);
  };

  const calculateProgress = () => {
    const allItems = [...commands, ...behaviors];
    const total = allItems.length;
    let completed = 0;
    let inProgress = 0;

    allItems.forEach(item => {
      if (item.level === 'mastered') completed++;
      else if (item.level === 'learning' || item.level === 'improving') inProgress++;
    });

    const overallProgress = Math.round(((completed * 100) + (inProgress * 50)) / total);
    
    let level = '';
    if (overallProgress >= 80) level = 'Advanced';
    else if (overallProgress >= 50) level = 'Intermediate';
    else if (overallProgress >= 20) level = 'Beginner';
    else level = 'Getting Started';

    const nextSteps: string[] = [];
    const recommendations: string[] = [];

    // Find items that need work
    const notStarted = allItems.filter(item => item.level === 'not-started');
    const learning = allItems.filter(item => item.level === 'learning');
    const improving = allItems.filter(item => item.level === 'improving');

    if (notStarted.length > 0) {
      nextSteps.push(`Start training: ${notStarted.slice(0, 3).map(i => i.name).join(', ')}`);
      recommendations.push('Focus on one command or behavior at a time');
      recommendations.push('Use positive reinforcement (treats, praise)');
      recommendations.push('Keep training sessions short (5-15 minutes)');
    }

    if (learning.length > 0) {
      nextSteps.push(`Continue practicing: ${learning.slice(0, 3).map(i => i.name).join(', ')}`);
      recommendations.push('Practice in different environments to generalize behaviors');
      recommendations.push('Gradually increase difficulty and distractions');
    }

    if (improving.length > 0) {
      nextSteps.push(`Refine and perfect: ${improving.slice(0, 3).map(i => i.name).join(', ')}`);
      recommendations.push('Work on reliability and consistency');
      recommendations.push('Practice in real-world situations');
    }

    // General recommendations
    recommendations.push(`Overall training progress: ${overallProgress}%`);
    recommendations.push('Be patient and consistent with training');
    recommendations.push('Use positive reinforcement methods');
    recommendations.push('End training sessions on a positive note');
    recommendations.push('Practice regularly - consistency is key');

    if (overallProgress < 30) {
      recommendations.push('Consider enrolling in a basic obedience class');
    } else if (overallProgress >= 80) {
      recommendations.push('Great progress! Consider advanced training or dog sports');
    }

    setResult({ overallProgress, level, nextSteps, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Training Progress Tracker', href: '/tools/training-progress-tracker' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Training Progress Tracker
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Track your pet's training progress and get personalized recommendations
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Basic Commands</h3>
                <div className="space-y-3">
                  {commands.map((command, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">{command.name}</span>
                      <select
                        value={command.level}
                        onChange={(e) => updateCommand(index, e.target.value)}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white text-sm"
                      >
                        <option value="not-started">Not Started</option>
                        <option value="learning">Learning</option>
                        <option value="improving">Improving</option>
                        <option value="mastered">Mastered</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Behaviors</h3>
                <div className="space-y-3">
                  {behaviors.map((behavior, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">{behavior.name}</span>
                      <select
                        value={behavior.level}
                        onChange={(e) => updateBehavior(index, e.target.value)}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white text-sm"
                      >
                        <option value="not-started">Not Started</option>
                        <option value="learning">Learning</option>
                        <option value="improving">Improving</option>
                        <option value="mastered">Mastered</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateProgress}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Training Progress
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Training Progress Report</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Progress</div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{result.overallProgress}%</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{result.level} Level</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${result.overallProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Next Steps:</h3>
                <ul className="space-y-2">
                  {result.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>{step}</span>
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

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/behavior-problem-diagnosis-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Behavior Problem Diagnosis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify training challenges</p>
              </a>
              <a href="/tools/separation-anxiety-risk-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Separation Anxiety Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Assess anxiety-related issues</p>
              </a>
              <a href="/tools/obedience-level-assessment-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Obedience Level Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Evaluate current training level</p>
              </a>
              <a href="/pet-training" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Training Guides</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn effective training methods</p>
              </a>
            </div>
          </div>

          {/* How Training Progress Tracker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Training Progress Tracker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our training progress tracker helps you monitor your pet's training progress across multiple commands and behaviors. You can track each command or behavior at different levels: not started, learning, improving, or mastered. The tool calculates overall progress based on the number of commands mastered and provides personalized recommendations for next training steps. Regular tracking helps identify areas that need more practice and celebrate achievements.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Training Progress</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Training progress varies by pet, command complexity, and consistency. Basic commands like "sit" may take a few days to a week, while more complex behaviors may take weeks or months. Consistency, positive reinforcement, and regular practice are key to successful training. Tracking progress helps you stay organized, identify areas needing attention, and maintain motivation by seeing improvements over time.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I track my pet's training progress?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Track training progress by: setting clear goals for each command or behavior, practicing regularly and consistently, marking progress levels (not started, learning, improving, mastered), updating your tracker regularly, and celebrating milestones. Use our training progress tracker to monitor multiple commands and behaviors at once and get personalized recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long does it take to train a pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Training time varies by pet, command complexity, and consistency. Basic commands like "sit" may take a few days to a week, while more complex behaviors like "stay" or "come" may take weeks or months. House training typically takes 4-6 months. Consistency, positive reinforcement, and regular practice are key to successful training.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet isn't making progress?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If training isn't progressing: review your training methods (use positive reinforcement), break behaviors into smaller steps, ensure you're being consistent, check for distractions or environmental issues, consider if the pet is ready for that level of training, consult a professional trainer for guidance, and rule out medical issues that might affect learning.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <a href="/pet-behavior" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Behavior Resources</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understand pet behavior better</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Training progress varies for each pet. Be patient and consistent. Update this tracker regularly to monitor progress. Remember that training is an ongoing process, and even "mastered" behaviors need occasional reinforcement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

